import { app, BrowserWindow, Menu, ipcMain, shell, type BrowserWindowConstructorOptions } from "electron";
import { execFileSync, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
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

interface EditorOpenResult {
  filePath: string;
  result: string;
  codePath?: string;
}

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
  const ownerWindow = window && !window.isDestroyed() ? window : undefined;
  menu.popup({
    ...(ownerWindow ? { window: ownerWindow } : {}),
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

async function openScriptInVsCode(scriptPath: string): Promise<EditorOpenResult> {
  const filePath = resolveScriptSourcePath(scriptPath);
  const codePath = findVsCodeExecutable();

  if (codePath) {
    await spawnVsCode(codePath, filePath);
    return { filePath, codePath, result: "spawned-vscode" };
  }

  try {
    await shell.openExternal(vscodeFileUri(filePath));
    return { filePath, result: "opened-vscode-uri" };
  } catch {
    if (process.platform === "darwin") {
    await spawnDetached("open", ["-a", "Visual Studio Code", filePath]);
      return { filePath, result: "spawned-macos-vscode" };
    }

    if (process.platform === "win32") {
      await spawnDetached(process.env.ComSpec || "cmd.exe", ["/d", "/s", "/c", quoteCmdCommand(["code", "--new-window", filePath])]);
      return { filePath, result: "spawned-code-command" };
    }

    await spawnDetached("code", ["--new-window", filePath]);
    return { filePath, result: "spawned-code-command" };
  }
}

function resolveScriptSourcePath(scriptPath: string): string {
  if (!scriptPath) throw new Error("No script is selected.");
  const root = resolve(moduleDir, "../../..", "packages", "scripts", "src");
  const filePath = resolve(root, scriptPath);
  const relativePath = relative(root, filePath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    throw new Error(`Script path is outside the source library: ${scriptPath}`);
  }
  if (!existsSync(filePath)) throw new Error(`Script source file was not found: ${filePath}`);
  return filePath;
}

function findVsCodeExecutable(): string {
  const candidates = [
    process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, "Programs", "Microsoft VS Code", "Code.exe") : "",
    process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, "Programs", "Microsoft VS Code", "bin", "code.cmd") : "",
    process.env.ProgramFiles ? join(process.env.ProgramFiles, "Microsoft VS Code", "Code.exe") : "",
    process.env.ProgramFiles ? join(process.env.ProgramFiles, "Microsoft VS Code", "bin", "code.cmd") : "",
    process.env["ProgramFiles(x86)"] ? join(process.env["ProgramFiles(x86)"], "Microsoft VS Code", "Code.exe") : "",
    process.platform === "darwin" ? "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code" : "",
    process.platform === "darwin" && process.env.HOME ? join(process.env.HOME, "Applications", "Visual Studio Code.app", "Contents", "Resources", "app", "bin", "code") : "",
    process.platform !== "win32" ? "/usr/local/bin/code" : "",
    process.platform !== "win32" ? "/opt/homebrew/bin/code" : "",
    ...whereExecutables("Code.exe"),
    ...whereExecutables("code.cmd"),
    ...whereExecutables("code")
  ].filter(Boolean);

  return candidates.find((candidate) => existsSync(candidate) && isVsCodeExecutableCandidate(candidate)) || "";
}

function isVsCodeExecutableCandidate(candidate: string): boolean {
  if (process.platform !== "win32") return true;
  return /\.(cmd|bat|exe)$/i.test(candidate);
}

function whereExecutables(command: string): string[] {
  try {
    const executable = process.platform === "win32" ? "where.exe" : "which";
    const args = process.platform === "win32" ? [command] : ["-a", command];
    return execFileSync(executable, args, { encoding: "utf8", windowsHide: true })
      .split(/\r?\n/u)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

async function spawnVsCode(codePath: string, filePath: string): Promise<void> {
  if (process.platform === "win32" && /\.(cmd|bat)$/i.test(codePath)) {
    await spawnDetached(process.env.ComSpec || "cmd.exe", ["/d", "/s", "/c", quoteCmdCommand([codePath, "--new-window", filePath])]);
    return;
  }
  await spawnDetached(codePath, ["--new-window", filePath], false);
}

function spawnDetached(command: string, args: string[], windowsHide = true): Promise<void> {
  return new Promise((resolveSpawn, rejectSpawn) => {
    const child = spawn(command, args, {
      detached: true,
      stdio: "ignore",
      windowsHide,
      windowsVerbatimArguments: isWindowsCommandPrompt(command)
    });
    const finish = () => {
      clearTimeout(timeout);
      child.unref();
      resolveSpawn();
    };
    const timeout = setTimeout(finish, 350);
    child.once("error", (error) => {
      clearTimeout(timeout);
      rejectSpawn(error);
    });
    child.once("spawn", finish);
  });
}

function isWindowsCommandPrompt(command: string): boolean {
  return process.platform === "win32" && /(?:^|[\\/])cmd(?:\.exe)?$/i.test(command);
}

function quoteCmdCommand(args: string[]): string {
  const [command = "", ...commandArgs] = args;
  const commandPart = /[\\/\s]/u.test(command) ? quoteCmdArg(command) : command;
  return `"${[commandPart, ...commandArgs.map(quoteCmdArg)].join(" ")}"`;
}

function quoteCmdArg(arg: string): string {
  return `"${arg.replace(/"/g, '""')}"`;
}

function vscodeFileUri(filePath: string): string {
  return `vscode://file/${encodeURI(filePath.replace(/\\/gu, "/"))}`;
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
ipcMain.handle("veyra:scripts-open-vscode", (_, scriptPath: string) => openScriptInVsCode(scriptPath));
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
