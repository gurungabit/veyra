import type { BridgeEvent } from "@veyra/protocol";

export type DesktopEventLevel = "debug" | "info" | "warn" | "error";

export interface BridgeSnapshot {
  running: boolean;
  ready: boolean;
  endpoint: string;
  detail: string;
  platform: string;
  swfPath: string;
  pid?: number;
  lastExit?: {
    code: number | null;
    signal: string | null;
  };
}

export interface ClientHostBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BridgeProcessEvent {
  type: "bridge.process";
  level: DesktopEventLevel;
  message: string;
  data?: unknown;
}

export interface ScriptProcessEvent {
  type: "script.process";
  level: DesktopEventLevel;
  message: string;
  data?: unknown;
}

export interface ScriptRuntimeSnapshot {
  status: "idle" | "running" | "stopping" | "stopped" | "failed" | "completed";
  logCount: number;
  activeScript?: string;
}

export type DesktopBridgeEvent = BridgeEvent | BridgeProcessEvent | ScriptProcessEvent;
