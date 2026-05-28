import { randomBytes } from "node:crypto";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { EventEmitter } from "node:events";
import { createServer } from "node:net";
import { fileURLToPath } from "node:url";
import {
  bridgeMethods,
  isJsonRpcFailure,
  type BridgeHealthResult,
  type JsonRpcRequest,
  type JsonRpcResponse
} from "@veyra/protocol";
import type { BridgeSnapshot, ClientHostBounds, DesktopBridgeEvent } from "./bridgeTypes.js";

const moduleDir = dirname(fileURLToPath(import.meta.url));

interface BridgeCommand {
  command: string;
  args: string[];
}

interface BridgeExit {
  code: number | null;
  signal: string | null;
}

interface EmbedTarget {
  parentHwnd: string;
  x: number;
  y: number;
  screenX: number;
  screenY: number;
  width: number;
  height: number;
  mode: "child" | "owned-overlay";
}

export class BridgeProcessManager extends EventEmitter {
  private port = 0;
  private readonly token = randomBytes(24).toString("hex");
  private readonly swfPath = resolve(process.env.VEYRA_CLIENT_SWF ?? join(findWorkspaceRoot(), "apps", "windows-bridge", "client.swf"));
  private child: ChildProcessWithoutNullStreams | undefined;
  private eventAbort: AbortController | undefined;
  private eventRequest: Promise<void> | undefined;
  private ready = false;
  private detail = "Bridge is not running.";
  private lastExit: BridgeExit | undefined;
  private id = 0;
  private embedTarget: (() => EmbedTarget | undefined) | undefined;
  private hostBounds: ClientHostBounds | undefined;
  private lastAttachSignature = "";

  private get endpoint(): string {
    return this.port > 0 ? `http://127.0.0.1:${this.port}/` : "Bridge not started.";
  }

  snapshot(): BridgeSnapshot {
    const snapshot: BridgeSnapshot = {
      running: this.child !== undefined,
      ready: this.ready,
      endpoint: this.endpoint,
      detail: this.detail,
      platform: process.platform,
      swfPath: this.swfPath
    };
    if (this.child?.pid) snapshot.pid = this.child.pid;
    if (this.lastExit) snapshot.lastExit = this.lastExit;
    return snapshot;
  }

  clientOptions(): { endpoint: string; token: string } {
    return {
      endpoint: this.endpoint,
      token: this.token
    };
  }

  setEmbedTarget(provider: () => EmbedTarget | undefined): void {
    this.embedTarget = provider;
  }

  async setHostBounds(bounds: ClientHostBounds): Promise<BridgeSnapshot> {
    this.hostBounds = {
      x: Math.round(bounds.x),
      y: Math.round(bounds.y),
      width: Math.max(1, Math.round(bounds.width)),
      height: Math.max(1, Math.round(bounds.height))
    };
    await this.attachToHost();
    return this.snapshot();
  }

  getHostBounds(): ClientHostBounds | undefined {
    return this.hostBounds;
  }

  async start(): Promise<BridgeSnapshot> {
    if (process.platform !== "win32") {
      this.detail = "The live client bridge is only available on Windows.";
      this.ready = false;
      this.emitProcess("warn", this.detail);
      return this.snapshot();
    }

    if (this.child) {
      await this.refreshHealth();
      return this.snapshot();
    }

    this.port = await chooseBridgePort();
    const bridge = resolveBridgeCommand(this.port, this.token, this.swfPath);
    this.emitProcess("info", "Starting Windows bridge.", { command: bridge.command, args: bridge.args });
    this.child = spawn(bridge.command, bridge.args, {
      cwd: dirname(bridge.command),
      windowsHide: false,
      stdio: "pipe"
    });
    this.lastAttachSignature = "";

    this.child.stdout.on("data", (chunk: Buffer) => this.emitProcess("info", chunk.toString("utf8").trim()));
    this.child.stderr.on("data", (chunk: Buffer) => this.emitProcess("error", chunk.toString("utf8").trim()));
    this.child.once("exit", (code, signal) => {
      this.lastExit = { code, signal };
      this.child = undefined;
      this.ready = false;
      this.lastAttachSignature = "";
      this.detail = `Bridge exited${code === null ? "" : ` with code ${code}`}.`;
      this.stopEventStream();
      this.emitProcess(code === 0 ? "info" : "warn", this.detail, this.lastExit);
    });

    await this.waitForHealth();
    this.startEventStream();
    return this.snapshot();
  }

  async stop(): Promise<BridgeSnapshot> {
    this.stopEventStream();
    if (!this.child) {
      this.ready = false;
      this.detail = "Bridge is not running.";
      return this.snapshot();
    }

    try {
      await this.request(bridgeMethods.gameShutdown);
    } catch (error) {
      this.emitProcess("debug", "Bridge shutdown RPC failed before process exit.", toErrorData(error));
    }

    const child = this.child;
    if (!child) {
      this.ready = false;
      this.detail = "Bridge is not running.";
      return this.snapshot();
    }
    child.kill();
    await waitForChildExit(child, 3_000);
    if (this.child === child) {
      this.child = undefined;
    }
    this.ready = false;
    this.lastAttachSignature = "";
    this.detail = "Bridge is not running.";
    return this.snapshot();
  }

  async loadClient(): Promise<BridgeSnapshot> {
    await this.start();
    try {
      await this.attachToHost();
      await this.request(bridgeMethods.gameLoadClient);
      await this.waitForReady();
    } finally {
      await this.refreshHealth();
    }
    return this.snapshot();
  }

  async focus(): Promise<BridgeSnapshot> {
    await this.start();
    await this.attachToHost();
    await this.request(bridgeMethods.gameFocus);
    await this.refreshHealth();
    return this.snapshot();
  }

  async attachToHost(): Promise<void> {
    const target = this.embedTarget?.();
    if (!this.child || !target || target.parentHwnd === "0" || target.width <= 0 || target.height <= 0) return;
    const signature = attachSignature(target);
    if (signature === this.lastAttachSignature) return;
    await this.request(bridgeMethods.gameAttach, target);
    this.lastAttachSignature = signature;
  }

  async refreshHealth(): Promise<BridgeSnapshot> {
    if (!this.child) return this.snapshot();
    try {
      const health = await this.request<BridgeHealthResult>(bridgeMethods.bridgeHealth);
      this.ready = health.ready;
      this.detail = health.detail ?? (health.ready ? "Bridge is ready." : "Bridge is running.");
    } catch (error) {
      this.ready = false;
      this.detail = `Bridge health check failed: ${toErrorMessage(error)}`;
      if (this.child.exitCode !== null) {
        this.child = undefined;
      }
    }
    return this.snapshot();
  }

  private async waitForHealth(): Promise<void> {
    const started = Date.now();
    let lastError: unknown;
    while (Date.now() - started < 12_000) {
      if (!this.child) break;
      try {
        const health = await this.request<BridgeHealthResult>(bridgeMethods.bridgeHealth);
        this.ready = health.ready;
        this.detail = health.detail ?? (health.ready ? "Bridge is ready." : "Bridge is running.");
        return;
      } catch (error) {
        lastError = error;
        await delay(250);
      }
    }

    this.detail = `Bridge did not become ready: ${toErrorMessage(lastError)}`;
    this.emitProcess("error", this.detail);
  }

  private async waitForReady(): Promise<void> {
    const started = Date.now();
    while (Date.now() - started < 15_000) {
      if (!this.child) break;
      try {
        await this.refreshHealth();
        if (this.ready) return;
      } catch {
        // The bridge is up by this point; a transient health miss can happen while the client is initializing.
      }
      await delay(250);
    }
  }

  private async request<TResult = unknown>(method: string, params?: unknown): Promise<TResult> {
    const request: JsonRpcRequest = {
      jsonrpc: "2.0",
      id: ++this.id,
      method
    };
    if (params !== undefined) request.params = params;

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-veyra-token": this.token
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) throw new Error(`Bridge HTTP ${response.status}.`);

    const payload = (await response.json()) as JsonRpcResponse<TResult>;
    if (isJsonRpcFailure(payload)) throw new Error(payload.error.message);
    return payload.result;
  }

  private startEventStream(): void {
    this.stopEventStream();
    const abort = new AbortController();
    this.eventAbort = abort;
    this.eventRequest = this.readEvents(abort.signal).catch((error: unknown) => {
      if (!abort.signal.aborted) this.emitProcess("warn", "Bridge event stream disconnected.", toErrorData(error));
    });
  }

  private stopEventStream(): void {
    this.eventAbort?.abort();
    this.eventAbort = undefined;
    this.eventRequest = undefined;
  }

  private async readEvents(signal: AbortSignal): Promise<void> {
    const response = await fetch(`${this.endpoint}events`, {
      headers: { "x-veyra-token": this.token },
      signal
    });
    if (!response.ok) throw new Error(`Bridge event stream HTTP ${response.status}.`);
    if (!response.body) throw new Error("Bridge event stream has no body.");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const chunks = buffer.split("\n\n");
      buffer = chunks.pop() ?? "";
      for (const chunk of chunks) {
        const line = chunk
          .split("\n")
          .find((entry) => entry.startsWith("data:"))
          ?.slice(5)
          .trim();
        if (!line) continue;
        this.emit("event", JSON.parse(line) as DesktopBridgeEvent);
      }
    }
  }

  private emitProcess(level: "debug" | "info" | "warn" | "error", message: string, data?: unknown): void {
    if (!message) return;
    const event: DesktopBridgeEvent = {
      type: "bridge.process",
      level,
      message,
      ...(data === undefined ? {} : { data })
    };
    this.emit("event", event);
  }
}

function resolveBridgeCommand(port: number, token: string, swfPath: string): BridgeCommand {
  const root = findWorkspaceRoot();
  const bridgeProject = join(root, "apps", "windows-bridge", "Veyra.Bridge.csproj");
  const bridgeExecutable = join(root, "apps", "windows-bridge", "bin", "Debug", "net8.0-windows", "Veyra.Bridge.exe");
  const packagedExecutable = process.resourcesPath
    ? join(process.resourcesPath, "windows-bridge", "Veyra.Bridge.exe")
    : "";

  const args = ["--port", String(port), "--token", token, "--swf", swfPath];
  if (packagedExecutable && existsSync(packagedExecutable)) {
    return { command: packagedExecutable, args };
  }
  if (existsSync(bridgeExecutable)) {
    return { command: bridgeExecutable, args };
  }
  return {
    command: "dotnet",
    args: ["run", "--project", bridgeProject, "--", ...args]
  };
}

function findWorkspaceRoot(): string {
  return resolve(moduleDir, "../../..");
}

function delay(ms: number): Promise<void> {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, ms));
}

function waitForChildExit(child: ChildProcessWithoutNullStreams, timeoutMs: number): Promise<void> {
  if (child.exitCode !== null) return Promise.resolve();
  return new Promise((resolveWait) => {
    const timeout = setTimeout(done, timeoutMs);
    child.once("exit", done);

    function done(): void {
      clearTimeout(timeout);
      child.off("exit", done);
      resolveWait();
    }
  });
}

function attachSignature(target: EmbedTarget): string {
  return [
    target.parentHwnd,
    target.x,
    target.y,
    target.screenX,
    target.screenY,
    target.width,
    target.height,
    target.mode
  ].join(":");
}

async function chooseBridgePort(): Promise<number> {
  const configuredPort = Number(process.env.VEYRA_BRIDGE_PORT ?? 0);
  if (Number.isInteger(configuredPort) && configuredPort > 0 && (await canListenOn(configuredPort))) {
    return configuredPort;
  }
  return listenOnEphemeralPort();
}

function canListenOn(port: number): Promise<boolean> {
  return new Promise((resolveListen) => {
    const server = createServer();
    server.once("error", () => resolveListen(false));
    server.listen(port, "127.0.0.1", () => {
      server.close(() => resolveListen(true));
    });
  });
}

function listenOnEphemeralPort(): Promise<number> {
  return new Promise((resolveListen, rejectListen) => {
    const server = createServer();
    server.once("error", rejectListen);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        rejectListen(new Error("Unable to allocate a bridge port."));
        return;
      }
      server.close(() => resolveListen(address.port));
    });
  });
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error === null || error === undefined) return "Unknown error";
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

function toErrorData(error: unknown): Record<string, string> {
  return { message: toErrorMessage(error) };
}
