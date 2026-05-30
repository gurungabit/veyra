import { EventEmitter } from "node:events";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { BridgeSnapshot, ClientHostBounds, DesktopBridgeEvent } from "./bridgeTypes.js";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const bridgeRemovedMessage =
  "The native prototype bridge has been removed. Run the shared Electron Flash client with `pnpm app`.";

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
  private readonly swfPath = resolve(process.env.VEYRA_CLIENT_SWF ?? join(findWorkspaceRoot(), "apps", "flash-client", "client.swf"));
  private detail = "Bridge is not running.";
  private lastExit: BridgeExit | undefined;
  private embedTarget: (() => EmbedTarget | undefined) | undefined;
  private hostBounds: ClientHostBounds | undefined;

  snapshot(): BridgeSnapshot {
    const snapshot: BridgeSnapshot = {
      running: false,
      ready: false,
      endpoint: "Bridge not available.",
      detail: this.detail,
      platform: process.platform,
      swfPath: this.swfPath
    };
    if (this.lastExit) snapshot.lastExit = this.lastExit;
    return snapshot;
  }

  clientOptions(): { endpoint: string; token: string } {
    return {
      endpoint: "Bridge not available.",
      token: ""
    };
  }

  setEmbedTarget(provider: () => EmbedTarget | undefined): void {
    this.embedTarget = provider;
  }

  setHostBounds(bounds: ClientHostBounds): Promise<BridgeSnapshot> {
    this.hostBounds = {
      x: Math.round(bounds.x),
      y: Math.round(bounds.y),
      width: Math.max(1, Math.round(bounds.width)),
      height: Math.max(1, Math.round(bounds.height))
    };
    return Promise.resolve(this.snapshot());
  }

  getHostBounds(): ClientHostBounds | undefined {
    return this.hostBounds;
  }

  start(): Promise<BridgeSnapshot> {
    this.detail = bridgeRemovedMessage;
    this.emitProcess("warn", this.detail);
    return Promise.resolve(this.snapshot());
  }

  stop(): Promise<BridgeSnapshot> {
    this.detail = "Bridge is not running.";
    return Promise.resolve(this.snapshot());
  }

  loadClient(): Promise<BridgeSnapshot> {
    return this.start();
  }

  focus(): Promise<BridgeSnapshot> {
    return this.start();
  }

  attachToHost(): Promise<void> {
    this.embedTarget?.();
    return Promise.resolve();
  }

  refreshHealth(): Promise<BridgeSnapshot> {
    return Promise.resolve(this.snapshot());
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

function findWorkspaceRoot(): string {
  return resolve(moduleDir, "../../..");
}
