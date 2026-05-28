import { existsSync } from "node:fs";
import { dirname, extname, isAbsolute, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { EventEmitter } from "node:events";
import { Bot, BridgeClient, MemoryLogger, type LogEntry, type ScriptInfo } from "@veyra/core";
import { assertScriptModule, ScriptRunner, type ScriptModule, type ScriptStatus } from "@veyra/runtime";
import { generateManifest } from "@veyra/script-tools";
import type { DesktopEventLevel, DesktopBridgeEvent, ScriptRuntimeSnapshot } from "./bridgeTypes.js";
import type { BridgeProcessManager } from "./bridgeProcess.js";

const moduleDir = dirname(fileURLToPath(import.meta.url));

export class ScriptService extends EventEmitter {
  private readonly logger = new MemoryLogger();
  private runner: ScriptRunner | undefined;
  private startupAbort: AbortController | undefined;
  private status: ScriptStatus = "idle";
  private activeScript: string | undefined;

  constructor(private readonly bridge: BridgeProcessManager) {
    super();
  }

  snapshot(): ScriptRuntimeSnapshot {
    const snapshot: ScriptRuntimeSnapshot = {
      status: this.status,
      logCount: this.logger.entries.length
    };
    if (this.activeScript) snapshot.activeScript = this.activeScript;
    return snapshot;
  }

  logs(): LogEntry[] {
    return this.logger.entries;
  }

  async manifest(): Promise<ScriptInfo[]> {
    return generateManifest({ rootDir: scriptsSourceRoot() });
  }

  async runExample(): Promise<ScriptRuntimeSnapshot> {
    return this.runScript("examples/example.ts");
  }

  async runScript(scriptPath: string): Promise<ScriptRuntimeSnapshot> {
    if (this.runner?.status === "running" || this.status === "running") {
      throw new Error("A script is already running.");
    }

    const script = await loadBuiltScript(resolveScriptPath(scriptPath));
    const startupAbort = new AbortController();

    this.startupAbort = startupAbort;
    this.status = "running";
    this.activeScript = script.meta.name;
    this.emitScript("info", `Starting ${script.meta.name}.`);

    void this.startBridgeAndRun(script, startupAbort.signal);
    return this.snapshot();
  }

  stop(): ScriptRuntimeSnapshot {
    this.startupAbort?.abort(new Error("Script cancelled."));
    this.runner?.stop();
    this.status = this.runner || this.startupAbort ? "stopping" : this.status;
    this.emitScript("warn", "Stop requested.");
    return this.snapshot();
  }

  private async startBridgeAndRun(script: ScriptModule, signal: AbortSignal): Promise<void> {
    try {
      await this.bridge.loadClient();
      if (signal.aborted) {
        this.status = "stopped";
        this.logger.log({ level: "info", scope: "runtime", message: `${script.meta.name} finished as stopped.` });
        this.emitScript("info", `${script.meta.name} finished as stopped.`);
        return;
      }

    const client = new BridgeClient(this.bridge.clientOptions());
    const bot = new Bot(client, this.logger);
    const runner = new ScriptRunner(bot, this.logger);

    this.runner = runner;

      await runner.run(script);
        this.status = runner.status;
        this.emitScript("info", `${script.meta.name} finished as ${runner.status}.`);
    } catch (error: unknown) {
      this.status = signal.aborted ? "stopped" : "failed";
      const message = error instanceof Error ? error.message : String(error);
      this.logger.log({ level: this.status === "failed" ? "error" : "info", scope: script.meta.name, message });
      this.emitScript(this.status === "failed" ? "error" : "info", message);
    } finally {
      this.activeScript = undefined;
      this.runner = undefined;
      this.startupAbort = undefined;
    }
  }

  private emitScript(level: DesktopEventLevel, message: string, data?: unknown): void {
    const event: DesktopBridgeEvent = {
      type: "script.process",
      level,
      message,
      ...(data === undefined ? {} : { data })
    };
    this.emit("event", event);
  }
}

async function loadBuiltScript(path: string): Promise<ScriptModule> {
  if (!existsSync(path)) {
    throw new Error(`Built script was not found at ${path}. Run the scripts package build first.`);
  }

  const moduleUrl = `${pathToFileURL(path).href}?updated=${Date.now()}`;
  const module = (await import(moduleUrl)) as unknown;
  assertScriptModule(module);
  return module;
}

function scriptsSourceRoot(): string {
  return resolve(moduleDir, "../../..", "packages", "scripts", "src");
}

function scriptsDistRoot(): string {
  return resolve(moduleDir, "../../..", "packages", "scripts", "dist");
}

function resolveScriptPath(scriptPath: string): string {
  const root = scriptsDistRoot();
  const extension = extname(scriptPath);
  const builtRelativePath = extension === ".ts" ? `${scriptPath.slice(0, -extension.length)}.js` : scriptPath;
  const resolved = resolve(root, builtRelativePath);
  const relativePath = relative(root, resolved);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    throw new Error(`Script path is outside the built script library: ${scriptPath}`);
  }
  return resolved;
}
