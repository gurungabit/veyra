import { contextBridge, ipcRenderer } from "electron";
import type { AppDirectories, LogEntry, ScriptInfo } from "@veyra/core";
import type { BridgeSnapshot, ClientHostBounds, DesktopBridgeEvent, ScriptRuntimeSnapshot } from "./bridgeTypes.js";

export interface VeyraDesktopApi {
  platform: NodeJS.Platform;
  directories(): Promise<AppDirectories>;
  windows: {
    open(kind: "scripts" | "logs"): Promise<void>;
    close(): void;
  };
  menu: {
    popup(kind: "options" | "helpers" | "tools" | "auto" | "jump", point: { x: number; y: number }): Promise<void>;
  };
  bridge: {
    status(): Promise<BridgeSnapshot>;
    start(): Promise<BridgeSnapshot>;
    stop(): Promise<BridgeSnapshot>;
    loadClient(): Promise<BridgeSnapshot>;
    focus(): Promise<BridgeSnapshot>;
    setHostBounds(bounds: ClientHostBounds): Promise<BridgeSnapshot>;
    onEvent(callback: (event: DesktopBridgeEvent) => void): () => void;
  };
  scripts: {
    manifest(): Promise<ScriptInfo[]>;
    status(): Promise<ScriptRuntimeSnapshot>;
    runExample(): Promise<ScriptRuntimeSnapshot>;
    run(scriptPath: string): Promise<ScriptRuntimeSnapshot>;
    stop(): Promise<ScriptRuntimeSnapshot>;
    logs(): Promise<LogEntry[]>;
  };
}

contextBridge.exposeInMainWorld("veyra", {
  platform: process.platform,
  directories: () => ipcRenderer.invoke("veyra:directories"),
  windows: {
    open: (kind) => ipcRenderer.invoke("veyra:window-open", kind),
    close: () => window.close()
  },
  menu: {
    popup: (kind, point) => ipcRenderer.invoke("veyra:menu-popup", kind, point)
  },
  bridge: {
    status: () => ipcRenderer.invoke("veyra:bridge-status"),
    start: () => ipcRenderer.invoke("veyra:bridge-start"),
    stop: () => ipcRenderer.invoke("veyra:bridge-stop"),
    loadClient: () => ipcRenderer.invoke("veyra:bridge-load-client"),
    focus: () => ipcRenderer.invoke("veyra:bridge-focus"),
    setHostBounds: (bounds) => ipcRenderer.invoke("veyra:bridge-host-bounds", bounds),
    onEvent: (callback) => {
      const handler = (_: Electron.IpcRendererEvent, event: DesktopBridgeEvent) => callback(event);
      ipcRenderer.on("veyra:bridge-event", handler);
      return () => ipcRenderer.off("veyra:bridge-event", handler);
    }
  },
  scripts: {
    manifest: () => ipcRenderer.invoke("veyra:scripts-manifest"),
    status: () => ipcRenderer.invoke("veyra:scripts-status"),
    runExample: () => ipcRenderer.invoke("veyra:scripts-run-example"),
    run: (scriptPath) => ipcRenderer.invoke("veyra:scripts-run", scriptPath),
    stop: () => ipcRenderer.invoke("veyra:scripts-stop"),
    logs: () => ipcRenderer.invoke("veyra:scripts-logs")
  }
} satisfies VeyraDesktopApi);
