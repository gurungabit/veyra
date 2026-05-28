import { app, BrowserWindow, Menu, ipcMain, type BrowserWindowConstructorOptions } from "electron";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getAppDirectories } from "@veyra/core";
import { BridgeProcessManager } from "./bridgeProcess.js";
import type { ClientHostBounds } from "./bridgeTypes.js";
import { ScriptService } from "./scriptService.js";

const moduleDir = dirname(fileURLToPath(import.meta.url));
let mainWindow: BrowserWindow | undefined;
const toolWindows = new Map<ToolWindowKind, BrowserWindow>();
const bridge = new BridgeProcessManager();
const scripts = new ScriptService(bridge);

type ToolWindowKind = "scripts" | "logs";
type PopupMenuKind = "options" | "helpers" | "tools" | "auto" | "jump";

const popupMenuItems: Record<PopupMenuKind, string[]> = {
  options: ["Game", "Application", "CoreBots", "Application Themes", "HotKeys"],
  helpers: ["Runtime", "Fast Travel", "Current Drops"],
  tools: ["Loader", "Grabber", "Stats", "Console"],
  auto: ["Auto Attack", "Auto Hunt", "Class", "Mode"],
  jump: ["Current", "Jump", "Cell", "Pad"]
};

bridge.setEmbedTarget(() => {
  if (!mainWindow || mainWindow.isDestroyed()) return undefined;
  const host = bridge.getHostBounds();
  const hwnd = readWindowHandle(mainWindow.getNativeWindowHandle());
  const content = mainWindow.getContentBounds();
  const x = host?.x ?? 0;
  const y = host?.y ?? 48;
  const width = host?.width ?? content.width;
  const height = host?.height ?? Math.max(1, content.height - y);
  return {
    parentHwnd: hwnd,
    x,
    y,
    screenX: content.x + x,
    screenY: content.y + y,
    width,
    height,
    mode: "owned-overlay"
  };
});

bridge.on("event", (event) => {
  sendRendererEvent(event);
});

scripts.on("event", (event) => {
  sendRendererEvent(event);
});

function sendRendererEvent(event: unknown): void {
  const windows = [mainWindow, ...toolWindows.values()];
  for (const window of windows) {
    if (!window || window.isDestroyed() || window.webContents.isDestroyed()) continue;
    window.webContents.send("veyra:bridge-event", event);
  }
}

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 1060,
    minHeight: 680,
    title: "Veyra",
    backgroundColor: "#101214",
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(moduleDir, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.setMenuBarVisibility(false);

  const devServerUrl = process.env.VITE_DEV_SERVER_URL;
  if (devServerUrl) {
    void mainWindow.loadURL(devServerUrl);
  } else {
    void mainWindow.loadFile(join(moduleDir, "../dist/index.html"));
  }

  mainWindow.once("closed", () => {
    for (const window of toolWindows.values()) {
      if (!window.isDestroyed()) window.close();
    }
    toolWindows.clear();
    mainWindow = undefined;
  });

  mainWindow.on("resize", () => {
    void bridge.attachToHost();
  });

}

function openToolWindow(kind: ToolWindowKind): void {
  const existing = toolWindows.get(kind);
  if (existing && !existing.isDestroyed()) {
    existing.show();
    existing.focus();
    existing.moveTop();
    return;
  }

  const windowOptions: BrowserWindowConstructorOptions = {
    width: kind === "scripts" ? 390 : 640,
    height: kind === "scripts" ? 560 : 430,
    minWidth: kind === "scripts" ? 370 : 520,
    minHeight: kind === "scripts" ? 520 : 320,
    title: kind === "scripts" ? "Veyra - Load Script" : "Veyra - Logs",
    modal: false,
    show: false,
    backgroundColor: "#3d3f3f",
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(moduleDir, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false
    }
  };
  if (mainWindow && !mainWindow.isDestroyed()) windowOptions.parent = mainWindow;
  const window = new BrowserWindow(windowOptions);

  window.setMenuBarVisibility(false);
  window.setAlwaysOnTop(true, "pop-up-menu");
  toolWindows.set(kind, window);
  window.once("closed", () => {
    toolWindows.delete(kind);
  });
  window.once("ready-to-show", () => {
    window.show();
    window.focus();
  });

  const devServerUrl = process.env.VITE_DEV_SERVER_URL;
  if (devServerUrl) {
    const url = new URL(devServerUrl);
    url.searchParams.set("window", kind);
    void window.loadURL(url.toString());
  } else {
    void window.loadFile(join(moduleDir, "../dist/index.html"), { query: { window: kind } });
  }
}

function popupMenu(sender: Electron.WebContents, kind: PopupMenuKind, point: { x: number; y: number }): void {
  const window = BrowserWindow.fromWebContents(sender) ?? mainWindow;
  const menu = Menu.buildFromTemplate(
    popupMenuItems[kind].map((label) => ({
      label,
      click: () => {
        sendRendererEvent({
          type: "bridge.process",
          level: "debug",
          message: `${label} is not implemented yet.`
        });
      }
    }))
  );
  menu.popup({
    window: window && !window.isDestroyed() ? window : undefined,
    x: Math.round(point.x),
    y: Math.round(point.y)
  });
}

function readWindowHandle(buffer: Buffer): string {
  if (buffer.byteLength >= 8) {
    return buffer.readBigUInt64LE(0).toString();
  }
  return buffer.readUInt32LE(0).toString();
}

ipcMain.handle("veyra:directories", () => getAppDirectories());
ipcMain.handle("veyra:window-open", (_, kind: ToolWindowKind) => openToolWindow(kind));
ipcMain.handle("veyra:menu-popup", (event, kind: PopupMenuKind, point: { x: number; y: number }) => popupMenu(event.sender, kind, point));
ipcMain.handle("veyra:bridge-status", () => bridge.refreshHealth());
ipcMain.handle("veyra:bridge-start", () => bridge.start());
ipcMain.handle("veyra:bridge-stop", () => bridge.stop());
ipcMain.handle("veyra:bridge-load-client", () => bridge.loadClient());
ipcMain.handle("veyra:bridge-focus", () => bridge.focus());
ipcMain.handle("veyra:bridge-host-bounds", (_, bounds: ClientHostBounds) => bridge.setHostBounds(bounds));
ipcMain.handle("veyra:scripts-manifest", () => scripts.manifest());
ipcMain.handle("veyra:scripts-status", () => scripts.snapshot());
ipcMain.handle("veyra:scripts-run-example", () => scripts.runExample());
ipcMain.handle("veyra:scripts-run", (_, scriptPath: string) => scripts.runScript(scriptPath));
ipcMain.handle("veyra:scripts-stop", () => scripts.stop());
ipcMain.handle("veyra:scripts-logs", () => scripts.logs());

void app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
});

app.on("before-quit", () => {
  void bridge.stop();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
