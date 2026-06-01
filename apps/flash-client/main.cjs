const { app, BrowserWindow, dialog, ipcMain, Menu, shell } = require("electron");
const { createServer: createHttpsServer, request: httpsRequest } = require("https");
const { request: httpRequest } = require("http");
const { execFileSync, spawn } = require("child_process");
const { createCipheriv, createDecipheriv, createHash, randomBytes } = require("crypto");
const { appendFileSync, copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } = require("fs");
const { dirname, join, resolve } = require("path");

app.setName("Veyra");
if (process.env.VEYRA_USER_DATA_DIR) app.setPath("userData", resolve(process.env.VEYRA_USER_DATA_DIR));

const rootDir = resolve(__dirname, "../..");
const appDir = __dirname;
const preloadPath = join(appDir, "preload.cjs");
const iconPath = join(appDir, "build", process.platform === "darwin" ? "icon.icns" : "icon.png");
const scriptsDir = join(appDir, "src", "scripts");
const swfPath = resolve(process.env.VEYRA_CLIENT_SWF || join(appDir, "client.swf"));
const certDir = join(appDir, "certs");
const certPath = join(certDir, "game-aq-dev.pfx");
const certKeyPath = join(certDir, "game-aq-dev.key");
const certPemPath = join(certDir, "game-aq-dev.pem");
const certPassphrase = "veyra-dev";
const bundledPepperFlashDir = join(appDir, "vendor", "pepper-flash");
const flash = resolvePepperFlash();
migrateGlobalFlashSharedObjects();
installFlashTrust();
installFlashSettings();

if (flash.path) {
  app.commandLine.appendSwitch("ppapi-flash-path", flash.path);
  if (flash.version) app.commandLine.appendSwitch("ppapi-flash-version", flash.version);
  app.commandLine.appendSwitch("allow-outdated-plugins");
}
app.commandLine.appendSwitch("ignore-gpu-blacklist");
app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
app.commandLine.appendSwitch("disable-site-isolation-trials");
app.commandLine.appendSwitch("disable-background-timer-throttling");
app.commandLine.appendSwitch("disable-backgrounding-occluded-windows");
app.commandLine.appendSwitch("disable-renderer-backgrounding");
app.commandLine.appendSwitch("ignore-certificate-errors");
app.commandLine.appendSwitch("host-rules", "MAP game.aq.com 127.0.0.1");

let launcherWindow;
const clientWindows = new Map();
const launchPayloads = new Map();
const toolWindows = new Map();
const updateRepo = { owner: "gurungabit", repo: "veyra" };
const defaultScriptUpdatesManifestBaseUrl = `https://raw.githubusercontent.com/${updateRepo.owner}/${updateRepo.repo}/main/script-updates`;
let updateCheckerInitialized = false;
let updateChecking = false;
let checkForUpdatesMenuItem;
let checkForScriptUpdatesMenuItem;
let autoDownloadScriptUpdatesMenuItem;
let scriptUpdateChecking = false;
let latestUpdateRelease;
let updateStatus = {
  state: "idle",
  message: "",
  currentVersion: app.getVersion(),
  version: "",
  percent: 0,
  canCheck: false,
  canOpen: false,
  releaseUrl: "",
  isPackaged: app.isPackaged
};
let assetServer;
let assetOrigin;

function createLauncherWindow() {
  if (launcherWindow && !launcherWindow.isDestroyed()) {
    launcherWindow.show();
    launcherWindow.focus();
    return launcherWindow;
  }

  launcherWindow = new BrowserWindow({
    width: 880,
    height: 620,
    minWidth: 760,
    minHeight: 520,
    title: "Veyra Launcher",
    icon: iconPath,
    show: true,
    backgroundColor: "#101510",
    autoHideMenuBar: true,
    webPreferences: {
      plugins: false,
      preload: preloadPath,
      nodeIntegration: false,
      contextIsolation: false,
      webSecurity: false
    }
  });
  launcherWindow.setMenuBarVisibility(false);
  launcherWindow.loadURL(`${assetOrigin}/src/launcher.html`);
  launcherWindow.once("closed", () => {
    launcherWindow = undefined;
  });
  return launcherWindow;
}

function createClientWindow(options = {}) {
  const instanceId = options.instanceId || newInstanceId();
  const accountLabel = options.accountLabel ? ` - ${options.accountLabel}` : "";
  const clientWindow = new BrowserWindow({
    width: 1160,
    height: 760,
    minWidth: 960,
    minHeight: 620,
    title: `Veyra${accountLabel}`,
    icon: iconPath,
    show: true,
    backgroundColor: "#050505",
    autoHideMenuBar: true,
    webPreferences: {
      plugins: true,
      nativeWindowOpen: true,
      backgroundThrottling: false,
      preload: preloadPath,
      nodeIntegration: false,
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true
    }
  });
  clientWindow.setMenuBarVisibility(false);
  clientWindow.webContents.on("new-window", (event, targetUrl, frameName, disposition, childOptions) => {
    const toolWindow = getToolWindowOptions(targetUrl);
    if (!toolWindow) return;
    Object.assign(childOptions, {
      width: toolWindow.width,
      height: toolWindow.height,
      minWidth: Math.min(toolWindow.width, 360),
      minHeight: Math.min(toolWindow.height, 320),
      title: toolWindow.title,
      autoHideMenuBar: true,
      backgroundColor: "#070b0a",
      webPreferences: {
        plugins: true,
        nativeWindowOpen: true,
        preload: preloadPath,
        nodeIntegration: false,
        contextIsolation: false,
        webSecurity: false,
        allowRunningInsecureContent: true
      }
    });
  });

  const url = new URL(`${assetOrigin}/src/index.html`);
  url.searchParams.set("instanceId", instanceId);
  if (options.launchId) url.searchParams.set("launchId", options.launchId);
  url.searchParams.set("swf", `${assetOrigin}/swf/client.swf?v=20260531-army-1`);
  url.searchParams.set("gameBase", `${assetOrigin}/game/`);
  if (flash.path) {
    url.searchParams.set("flashPath", flash.path);
    url.searchParams.set("flashVersion", flash.version || "");
  } else {
    url.searchParams.set("flashMissing", flash.reason);
  }

  clientWindows.set(instanceId, clientWindow);
  clientWindow.loadURL(url.toString());
  clientWindow.show();
  clientWindow.moveTop();
  clientWindow.focus();
  app.focus({ steal: true });
  clientWindow.once("closed", () => {
    clientWindows.delete(instanceId);
    if (options.launchId) launchPayloads.delete(options.launchId);
  });

  if (!flash.path) {
    clientWindow.once("ready-to-show", () => {
      dialog.showMessageBox(clientWindow, {
        type: "warning",
        title: "Pepper Flash not found",
        message: "Veyra needs a PPAPI Pepper Flash plugin.",
        detail: flash.reason
      });
    });
  }

  return clientWindow;
}

function focusNativeWindow(win) {
  if (!win || win.isDestroyed()) return;
  if (win.isMinimized()) win.restore();
  win.show();
  win.moveTop();
  win.focus();
  app.focus({ steal: true });
}

function sanitizeToolWindowValue(value, fallback = "") {
  const safeValue = String(value || "")
    .replace(/[^a-z0-9_-]/gi, "-")
    .replace(/^-+|-+$/g, "");
  return safeValue || fallback;
}

function toolWindowKey(instanceId, tool) {
  return `${sanitizeToolWindowValue(instanceId, "default")}:${sanitizeToolWindowValue(tool, "advanced")}`;
}

function showToolWindow(payload = {}) {
  const tool = sanitizeToolWindowValue(payload.tool, "advanced");
  const section = sanitizeToolWindowValue(payload.section, "");
  const instanceId = sanitizeToolWindowValue(payload.instanceId, "default");
  const key = toolWindowKey(instanceId, tool);
  const url = new URL(`${assetOrigin}/src/tool.html`);
  url.searchParams.set("tool", tool);
  url.searchParams.set("instanceId", instanceId);
  if (section) url.searchParams.set("section", section);

  const options = getToolWindowOptions(url.toString()) || { width: 460, height: 520, title: "Veyra Tool" };
  const existing = toolWindows.get(key);

  if (existing && existing.window && !existing.window.isDestroyed()) {
    if (existing.section !== section) {
      existing.window.loadURL(url.toString());
      toolWindows.set(key, { window: existing.window, section });
    }
    focusNativeWindow(existing.window);
    return { focused: true, tool, section };
  }

  toolWindows.delete(key);
  const win = new BrowserWindow({
    width: options.width,
    height: options.height,
    minWidth: Math.min(options.width, 360),
    minHeight: Math.min(options.height, 320),
    title: options.title,
    icon: iconPath,
    show: true,
    backgroundColor: "#070b0a",
    autoHideMenuBar: true,
    webPreferences: {
      plugins: true,
      nativeWindowOpen: true,
      preload: preloadPath,
      nodeIntegration: false,
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true
    }
  });
  win.setMenuBarVisibility(false);
  toolWindows.set(key, { window: win, section });
  win.loadURL(url.toString());
  win.once("closed", () => {
    const current = toolWindows.get(key);
    if (current && current.window === win) toolWindows.delete(key);
  });
  win.once("ready-to-show", () => focusNativeWindow(win));
  focusNativeWindow(win);
  return { opened: true, tool, section };
}

function newInstanceId() {
  return `client-${Date.now().toString(36)}-${randomBytes(4).toString("hex")}`;
}

function getToolWindowOptions(targetUrl) {
  try {
    const url = new URL(targetUrl);
    if (url.pathname !== "/src/tool.html") return undefined;
    const tool = url.searchParams.get("tool") || "advanced";
    const section = url.searchParams.get("section") || "";
    const titles = {
      scripts: "Load Script - Veyra",
      logs: "Logs - Veyra",
      packets: `${sectionLabel(section) || "Packets"} - Veyra`,
      skills: "Skills - Veyra",
      bank: "Bank - Veyra",
      plugins: "Plugins - Veyra",
      builder: "Script Builder - Veyra",
      advanced: "Advanced - Veyra",
      options: `${sectionLabel(section) || "Options"} - Veyra`,
      helpers: `${sectionLabel(section) || "Helpers"} - Veyra`,
      tools: `${sectionLabel(section) || "Tools"} - Veyra`
    };
    const size = toolWindowSize(tool, section);
    return {
      width: size[0],
      height: size[1],
      title: titles[tool] || "Veyra Tool"
    };
  } catch {
    return undefined;
  }
}

function toolWindowSize(tool, section) {
  const sectionSizes = {
    "helpers:runtime": [820, 540],
    "helpers:fast-travel": [760, 460],
    "helpers:current-drops": [560, 430],
    "packets:packet-interceptor": [820, 520],
    "packets:packet-spammer": [620, 430],
    "packets:packet-logger": [620, 480],
    "tools:loader": [620, 420],
    "tools:grabber": [620, 500],
    "tools:junk-items": [520, 440],
    "tools:stats": [500, 400],
    "tools:console": [560, 420],
    "builder:": [940, 620],
    "options:game-options": [520, 620],
    "options:army-options": [560, 600],
    "options:application-options": [520, 440],
    "options:core-options": [520, 440],
    "options:theme-options": [460, 360],
    "options:hotkeys": [460, 400]
  };
  const sizes = {
    scripts: [430, 640],
    logs: [680, 520],
    packets: [600, 500],
    skills: [430, 430],
    bank: [460, 480],
    plugins: [460, 340],
    advanced: [560, 540],
    options: [520, 500],
    helpers: [520, 500],
    tools: [520, 500],
    builder: [940, 620]
  };
  return sectionSizes[`${tool}:${section}`] || sizes[tool] || [460, 520];
}

function sectionLabel(section) {
  const labels = {
    "game-options": "Game Options",
    "army-options": "Army Options",
    "application-options": "Application Options",
    "core-options": "CoreBots Options",
    "theme-options": "Application Themes",
    hotkeys: "HotKeys",
    runtime: "Runtime",
    "fast-travel": "Fast Travel",
    "current-drops": "Current Drops",
    loader: "Loader",
    grabber: "Grabber",
    "junk-items": "Junk Items",
    stats: "Stats",
    console: "Console",
    "packet-spammer": "Packet Spammer",
    "packet-logger": "Packet Logger",
    "packet-interceptor": "Packet Interceptor"
  };
  return labels[section] || "";
}

function settingPath(name) {
  const safeName = String(name || "").replace(/[^a-z0-9_-]/gi, "");
  if (!safeName) throw new Error("Invalid settings name.");
  return join(app.getPath("appData"), "Veyra", "Settings", `${safeName}.json`);
}

function readJsonSetting(name) {
  const filePath = settingPath(name);
  if (!existsSync(filePath)) return null;
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function writeJsonSetting(name, value) {
  const filePath = settingPath(name);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  return filePath;
}

function launcherDataDir() {
  return join(app.getPath("userData"), "Launcher");
}

function accountVaultPath() {
  return join(launcherDataDir(), "accounts.vault.json");
}

function accountKeyPath() {
  return join(launcherDataDir(), "credential.key");
}

function readAccounts() {
  const filePath = accountVaultPath();
  if (!existsSync(filePath)) return [];
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAccounts(accounts) {
  mkdirSync(launcherDataDir(), { recursive: true });
  writeFileSync(accountVaultPath(), `${JSON.stringify(accounts, null, 2)}\n`, { encoding: "utf8", mode: 0o600 });
  return accounts.map(accountSummary);
}

function accountSummary(account) {
  return {
    id: String(account.id || ""),
    username: String(account.username || ""),
    label: String(account.label || account.username || ""),
    defaultServer: cleanServerName(account.defaultServer || ""),
    createdAt: String(account.createdAt || ""),
    updatedAt: String(account.updatedAt || "")
  };
}

function accountKey() {
  const filePath = accountKeyPath();
  mkdirSync(dirname(filePath), { recursive: true });
  if (existsSync(filePath)) return Buffer.from(readFileSync(filePath, "utf8"), "base64");
  const key = randomBytes(32);
  writeFileSync(filePath, key.toString("base64"), { encoding: "utf8", mode: 0o600 });
  return key;
}

function encryptPassword(password) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", accountKey(), iv);
  const encrypted = Buffer.concat([cipher.update(String(password || ""), "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `aesgcm:${iv.toString("base64")}:${tag.toString("base64")}:${encrypted.toString("base64")}`;
}

function decryptPassword(encryptedPassword) {
  const text = String(encryptedPassword || "");
  if (!text.startsWith("aesgcm:")) throw new Error("Account password is not in the Veyra launcher vault format. Re-save this account.");
  const [, ivRaw, tagRaw, encryptedRaw] = text.split(":");
  const decipher = createDecipheriv("aes-256-gcm", accountKey(), Buffer.from(ivRaw, "base64"));
  decipher.setAuthTag(Buffer.from(tagRaw, "base64"));
  return Buffer.concat([decipher.update(Buffer.from(encryptedRaw, "base64")), decipher.final()]).toString("utf8");
}

function saveLauncherAccount(input) {
  const username = String(input?.username || "").trim();
  const password = String(input?.password || "");
  if (!username || !password) throw new Error("Username and password are required.");

  const accounts = readAccounts();
  const now = new Date().toISOString();
  const existingIndex = accounts.findIndex((account) => String(account.username || "").toLowerCase() === username.toLowerCase());
  const existing = existingIndex >= 0 ? accounts[existingIndex] : {};
  const record = {
    id: String(existing.id || newInstanceId()),
    username,
    label: String(input?.label || username).trim() || username,
    defaultServer: cleanServerName(input?.defaultServer || ""),
    encryptedPassword: encryptPassword(password),
    createdAt: String(existing.createdAt || now),
    updatedAt: now
  };

  if (existingIndex >= 0) accounts[existingIndex] = record;
  else accounts.push(record);
  return writeAccounts(accounts);
}

function deleteLauncherAccount(id) {
  const accountId = String(id || "");
  return writeAccounts(readAccounts().filter((account) => String(account.id || "") !== accountId));
}

function launcherAccountCredentials(id) {
  const accountId = String(id || "");
  const account = readAccounts().find((candidate) => String(candidate.id || "") === accountId);
  if (!account) throw new Error("Account not found.");
  return {
    id: String(account.id || ""),
    username: String(account.username || ""),
    password: decryptPassword(account.encryptedPassword),
    label: String(account.label || account.username || ""),
    defaultServer: cleanServerName(account.defaultServer || "")
  };
}

async function launchAccounts(accountIds, serverSelection) {
  const ids = Array.isArray(accountIds) ? accountIds.map((id) => String(id || "")).filter(Boolean) : [];
  if (ids.length === 0) throw new Error("Select at least one account.");
  const requestedName = requestedServerName(serverSelection);
  const requestedServer = normalizeSelectedServer(serverSelection);
  const servers = await fetchGameServers().catch(() => []);
  const rootServer = pickServer(servers, requestedName) || requestedServer || servers[0] || null;
  const launched = [];

  for (const id of ids) {
    const account = launcherAccountCredentials(id);
    const server = launcherServerForAccount(account, servers, rootServer);
    const launchId = newInstanceId();
    launchPayloads.set(launchId, { ...account, server });
    createClientWindow({ launchId, accountLabel: account.label || account.username });
    launched.push({ id: account.id, username: account.username, label: account.label, server });
  }

  return launched;
}

function launcherServerForAccount(account, servers, rootServer) {
  const accountServerName = cleanServerName(account?.defaultServer || "");
  if (!accountServerName) return rootServer;
  return pickServer(servers, accountServerName) || normalizeSelectedServer({ name: accountServerName, label: accountServerName }) || rootServer;
}

function launchEmptyClient() {
  createClientWindow();
}

function getLaunchPayload(launchId) {
  return launchPayloads.get(String(launchId || "")) || null;
}

function pickServer(servers, serverName) {
  const requested = String(serverName || "").trim().toLowerCase();
  if (!requested) return servers[0] || null;
  return servers.find((server) => cleanServerName(server.name).toLowerCase() === cleanServerName(requested).toLowerCase()) || null;
}

function requestedServerName(serverSelection) {
  if (serverSelection && typeof serverSelection === "object") {
    return cleanServerName(serverSelection.name || serverSelection.sName || serverSelection.label || "");
  }
  return cleanServerName(serverSelection || "");
}

function normalizeSelectedServer(serverSelection) {
  if (!serverSelection || typeof serverSelection !== "object") return null;
  const raw = serverSelection.raw && typeof serverSelection.raw === "object" ? serverSelection.raw : {};
  const normalized = normalizeGameServer({ ...raw, ...serverSelection }, new Date().toLocaleTimeString([], { hour12: false }));
  return normalized.name ? normalized : null;
}

async function fetchGameServers() {
  const endpoints = ["https://content.aq.com/game/api/data/servers", "http://content.aq.com/game/api/data/servers"];
  let lastError;
  for (const endpoint of endpoints) {
    try {
      const raw = await requestJson(`${endpoint}?_=${Date.now()}`);
      const servers = normalizeGameServers(raw).filter((server) => server.online !== false);
      if (servers.length > 0) return servers;
      lastError = new Error("empty server list");
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Could not load AQW server list.");
}

function requestJson(url) {
  return new Promise((resolveRequest, rejectRequest) => {
    const requestFn = url.startsWith("http://") ? httpRequest : httpsRequest;
    const request = requestFn(
      url,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": `Veyra/${app.getVersion()}`
        }
      },
      (response) => {
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          if ((response.statusCode || 0) < 200 || (response.statusCode || 0) >= 300) {
            rejectRequest(new Error(`Server list failed with ${response.statusCode} ${response.statusMessage || ""}`.trim()));
            return;
          }
          try {
            resolveRequest(JSON.parse(body));
          } catch (error) {
            rejectRequest(error);
          }
        });
      }
    );
    request.on("error", rejectRequest);
    request.end();
  });
}

function normalizeGameServers(raw) {
  const refreshedAt = new Date().toLocaleTimeString([], { hour12: false });
  const entries = Array.isArray(raw) ? raw : Object.values(raw && typeof raw === "object" ? raw : {});
  return entries
    .map((entry) => normalizeGameServer(entry, refreshedAt))
    .filter((server) => server.name);
}

function normalizeGameServer(entry, refreshedAt) {
  const record = entry && typeof entry === "object" ? entry : {};
  const name = cleanServerName(record.sName || record.name || record.Name || "");
  const ip = String(record.sIP || record.ip || record.IP || "");
  const port = numberValue(record.iPort || record.port || record.Port || 5588);
  const playerCount = numberValue(record.iCount ?? record.playerCount ?? record.count ?? 0);
  const maxPlayers = numberValue(record.iMax ?? record.maxPlayers ?? record.max ?? 0);
  const online = booleanValue(record.bOnline ?? record.online ?? true);
  const upgrade = booleanValue(record.bUpg ?? record.upgrade ?? false);
  const language = String(record.sLang || record.language || "");
  const chat = numberValue(record.iChat ?? record.chat ?? 0);
  const level = numberValue(record.iLevel ?? record.level ?? 0);
  const raw = {
    ...record,
    sName: name,
    sIP: ip,
    iPort: port,
    iCount: playerCount,
    iMax: maxPlayers,
    bOnline: online ? 1 : 0,
    bUpg: upgrade ? 1 : 0,
    sLang: language,
    iChat: chat,
    iLevel: level
  };
  return {
    name,
    label: serverLabel(name, playerCount, maxPlayers, upgrade),
    ip,
    port,
    playerCount,
    maxPlayers,
    count: playerCount,
    max: maxPlayers,
    online,
    upgrade,
    language,
    chat,
    level,
    connectable: Boolean(ip) && port > 0,
    raw,
    refreshedAt
  };
}

function serverLabel(name, playerCount, maxPlayers, upgrade) {
  const count = playerCount > 0 || maxPlayers > 0 ? ` - ${playerCount}${maxPlayers > 0 ? `/${maxPlayers}` : ""}` : "";
  return `${name}${count}${upgrade ? " - Member" : ""}`;
}

function cleanServerName(value) {
  return String(value || "").replace(/\s+-\s+\d+(?:\/\d+)?\s*$/u, "").trim();
}

function numberValue(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function booleanValue(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return !["false", "0", "no"].includes(value.toLowerCase());
  return Boolean(value);
}

function builderScriptsDir() {
  return join(app.getPath("appData"), "Veyra", "BuilderScripts");
}

function scriptPacksDir() {
  return join(app.getPath("appData"), "Veyra", "ScriptPacks");
}

function builderScriptPath(script) {
  const sourceName = String((script && (script.id || script.name)) || "builder-script");
  const safeName = sourceName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
  if (!safeName) throw new Error("Invalid builder script name.");
  return join(builderScriptsDir(), `${safeName}.json`);
}

function readScriptPackScripts() {
  const dir = scriptPacksDir();
  mkdirSync(dir, { recursive: true });
  const packs = [];
  const scriptsById = new Map();
  for (const entry of readdirSync(dir)) {
    if (!entry.toLowerCase().endsWith(".json")) continue;
    const filePath = join(dir, entry);
    try {
      const pack = JSON.parse(readFileSync(filePath, "utf8"));
      const normalizedPack = normalizeInstalledScriptPack(pack, statSync(filePath).mtimeMs);
      if (!normalizedPack) continue;
      packs.push(normalizedPack.summary);
      for (const script of normalizedPack.scripts) {
        const id = String(script.id || "");
        if (!id) continue;
        const existing = scriptsById.get(id);
        if (!existing || compareScriptVersions(normalizedPack.summary.version, existing.packVersion) >= 0) {
          scriptsById.set(id, { script, packVersion: normalizedPack.summary.version, mtimeMs: normalizedPack.summary.mtimeMs });
        }
      }
    } catch {
      // One malformed downloaded pack should not hide the rest of the script catalog.
    }
  }
  const scripts = Array.from(scriptsById.values()).map((entry) => entry.script);
  scripts.sort((left, right) => String(left.name || left.id || "").localeCompare(String(right.name || right.id || "")));
  packs.sort((left, right) => String(left.id).localeCompare(String(right.id)));
  return { scripts, packs };
}

function normalizeInstalledScriptPack(pack, mtimeMs) {
  if (!pack || typeof pack !== "object") return undefined;
  const id = cleanId(pack.id || "official");
  const version = cleanVersion(pack.version);
  const scripts = normalizeScriptPackScripts(pack.scripts);
  if (!id || !version || scripts.length === 0) return undefined;
  return {
    summary: {
      id,
      version,
      name: String(pack.name || id),
      installedAt: typeof pack.installedAt === "string" ? pack.installedAt : "",
      mtimeMs
    },
    scripts
  };
}

function normalizeScriptPackScripts(scripts) {
  if (!Array.isArray(scripts)) return [];
  return scripts.filter((script) => script && typeof script === "object" && Array.isArray(script.actions));
}

function readBuilderScripts() {
  const dir = builderScriptsDir();
  mkdirSync(dir, { recursive: true });
  const scriptsById = new Map();
  for (const entry of readdirSync(dir)) {
    if (!entry.toLowerCase().endsWith(".json")) continue;
    const filePath = join(dir, entry);
    try {
      const script = JSON.parse(readFileSync(filePath, "utf8"));
      if (script && typeof script === "object") {
        const id = String(script.id || entry.replace(/\.json$/i, ""));
        const mtimeMs = statSync(filePath).mtimeMs;
        const existing = scriptsById.get(id);
        if (!existing || mtimeMs >= existing.mtimeMs) scriptsById.set(id, { script, mtimeMs });
      }
    } catch {
      // Ignore malformed builder files so one bad script does not break the catalog.
    }
  }
  const scripts = Array.from(scriptsById.values()).map((entry) => entry.script);
  scripts.sort((left, right) => String(left.name || left.id || "").localeCompare(String(right.name || right.id || "")));
  return { scripts };
}

function writeBuilderScript(script) {
  if (!script || typeof script !== "object") throw new Error("Builder script payload must be an object.");
  const filePath = builderScriptPath(script);
  mkdirSync(dirname(filePath), { recursive: true });
  deleteBuilderScriptDuplicates(script.id, filePath);
  writeFileSync(filePath, `${JSON.stringify(script, null, 2)}\n`, "utf8");
  return filePath;
}

function deleteBuilderScriptDuplicates(id, exceptPath) {
  const needle = String(id || "");
  if (!needle) return;
  const dir = builderScriptsDir();
  mkdirSync(dir, { recursive: true });
  const keepPath = resolve(exceptPath);
  for (const entry of readdirSync(dir)) {
    if (!entry.toLowerCase().endsWith(".json")) continue;
    const filePath = join(dir, entry);
    if (resolve(filePath) === keepPath) continue;
    try {
      const script = JSON.parse(readFileSync(filePath, "utf8"));
      if (String(script && script.id) === needle) rmSync(filePath, { force: true });
    } catch {
      // Malformed files are ignored here; readBuilderScripts already skips them.
    }
  }
}

function writeBuilderScripts(scripts) {
  if (!Array.isArray(scripts)) throw new Error("Builder script list payload must be an array.");
  const dir = builderScriptsDir();
  mkdirSync(dir, { recursive: true });
  for (const entry of readdirSync(dir)) {
    if (entry.toLowerCase().endsWith(".json")) rmSync(join(dir, entry), { force: true });
  }
  return scripts.map(writeBuilderScript);
}

function deleteBuilderScript(id) {
  const needle = String(id || "");
  if (!needle) return false;
  const dir = builderScriptsDir();
  mkdirSync(dir, { recursive: true });
  let deleted = false;
  for (const entry of readdirSync(dir)) {
    if (!entry.toLowerCase().endsWith(".json")) continue;
    const filePath = join(dir, entry);
    try {
      const script = JSON.parse(readFileSync(filePath, "utf8"));
      if (String(script && script.id) === needle || entry === `${needle}.json`) {
        rmSync(filePath, { force: true });
        deleted = true;
      }
    } catch {
      if (entry === `${needle}.json`) {
        rmSync(filePath, { force: true });
        deleted = true;
      }
    }
  }
  return deleted;
}

function readScriptUpdateSettings() {
  return normalizeScriptUpdateSettings(readJsonSetting("script-updates"));
}

function writeScriptUpdateSettings(settings) {
  const normalized = normalizeScriptUpdateSettings(settings);
  writeJsonSetting("script-updates", normalized);
  updateScriptUpdatesMenuItems();
  return normalized;
}

function normalizeScriptUpdateSettings(value) {
  const source = value && typeof value === "object" ? value : {};
  const installedPackages = source.installedPackages && typeof source.installedPackages === "object" ? source.installedPackages : {};
  const normalizedInstalled = {};
  for (const [id, version] of Object.entries(installedPackages)) {
    const safeId = cleanId(id);
    const safeVersion = cleanVersion(version);
    if (safeId && safeVersion) normalizedInstalled[safeId] = safeVersion;
  }
  return {
    autoDownload: booleanValue(source.autoDownload),
    channel: cleanId(source.channel || "stable") || "stable",
    manifestUrl: typeof source.manifestUrl === "string" && source.manifestUrl.trim() ? source.manifestUrl.trim() : "",
    installedPackages: normalizedInstalled,
    lastCheckedAt: typeof source.lastCheckedAt === "string" ? source.lastCheckedAt : "",
    lastInstalledAt: typeof source.lastInstalledAt === "string" ? source.lastInstalledAt : ""
  };
}

function scriptUpdatesManifestUrl(settings = readScriptUpdateSettings()) {
  return settings.manifestUrl || process.env.VEYRA_SCRIPT_UPDATES_MANIFEST_URL || `${defaultScriptUpdatesManifestBaseUrl}/${cleanId(settings.channel || "stable") || "stable"}.json`;
}

function cleanId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function cleanVersion(value) {
  return String(value || "").trim().replace(/^v/iu, "").slice(0, 64);
}

function scriptPackPath(id) {
  const safeId = cleanId(id);
  if (!safeId) throw new Error("Invalid script pack id.");
  return join(scriptPacksDir(), `${safeId}.json`);
}

async function openBuilderScriptInVsCode(script) {
  const filePath = writeBuilderScript(script);
  return openFileInVsCode(filePath);
}

async function openScriptInVsCode(scriptId) {
  const filePath = scriptSourcePath(scriptId);
  if (!filePath) throw new Error(`No editable source file is registered for script ${scriptId}.`);
  return openFileInVsCode(filePath);
}

async function openFileInVsCode(filePath) {
  const targetPath = resolve(filePath);
  if (!existsSync(targetPath)) throw new Error(`File does not exist: ${targetPath}`);
  const attempts = [];
  logEditorOpen(`open requested: ${targetPath}`);

  try {
    const uri = vscodeFileUri(targetPath);
    await shell.openExternal(uri);
    attempts.push(`uri:${uri}`);
    logEditorOpen(`shell.openExternal ok: ${uri}`);
    if (process.platform === "win32") {
      await spawnDetached(process.env.ComSpec || "cmd.exe", ["/d", "/c", "start", "", uri]);
      attempts.push(`cmd-start-uri:${uri}`);
      logEditorOpen(`cmd start uri ok: ${uri}`);
    }
  } catch (error) {
    attempts.push(`uri failed: ${error?.message || String(error)}`);
    logEditorOpen(`uri failed: ${error?.stack || error?.message || String(error)}`);
  }

  try {
    const cliResult = await openFileWithVsCodeCli(targetPath);
    logEditorOpen(`cli ok: ${JSON.stringify(cliResult)}`);
    return { filePath: targetPath, ...cliResult, attempts, logPath: editorOpenLogPath() };
  } catch (error) {
    attempts.push(`cli failed: ${error?.message || String(error)}`);
    logEditorOpen(`cli failed: ${error?.stack || error?.message || String(error)}`);
    if (attempts.some((attempt) => attempt.startsWith("uri:"))) {
      return { filePath: targetPath, result: "opened-vscode-uri", attempts, logPath: editorOpenLogPath() };
    }
    throw new Error(`Could not open VS Code for ${targetPath}. ${attempts.join(" | ")}`);
  }
}

async function openFileWithVsCodeCli(targetPath) {
  const codePath = findVsCodeExecutable();
  if (codePath) {
    if (process.platform === "win32") {
      await spawnVsCodeOnWindows(codePath, targetPath);
      return { codePath, result: "spawned-vscode-cli" };
    }
    await spawnDetached(codePath, ["--new-window", targetPath], false);
    return { codePath, result: "spawned-vscode" };
  }

  if (process.platform === "darwin") {
    await spawnDetached("open", ["-a", "Visual Studio Code", targetPath]);
    return { result: "spawned-macos-vscode" };
  }

  if (process.platform !== "win32") {
    await spawnDetached("code", ["--new-window", targetPath]);
    return { result: "spawned-code-command" };
  }

  await spawnDetached(process.env.ComSpec || "cmd.exe", ["/d", "/s", "/c", quoteCmdCommand(["code", "--new-window", targetPath])]);
  return { result: "spawned-code-command" };
}

function vscodeFileUri(filePath) {
  return `vscode://file/${encodeURI(filePath.replace(/\\/gu, "/"))}`;
}

async function spawnDetached(command, args, windowsHide = true) {
  logEditorOpen(`spawn: ${command} ${args.join(" ")}`);
  const child = spawn(command, args, {
    detached: true,
    stdio: "ignore",
    windowsHide,
    windowsVerbatimArguments: isWindowsCommandPrompt(command)
  });
  await waitForSpawn(child);
  child.unref();
}

async function spawnVsCodeOnWindows(codePath, targetPath) {
  if (/\.cmd$/iu.test(codePath) || /\.bat$/iu.test(codePath)) {
    await spawnDetached(process.env.ComSpec || "cmd.exe", ["/d", "/s", "/c", quoteCmdCommand([codePath, "--new-window", targetPath])]);
    return;
  }
  await spawnDetached(codePath, ["--new-window", targetPath], false);
}

function quoteCmdCommand(args) {
  const [command = "", ...commandArgs] = args;
  const commandPart = /[\\/\s]/u.test(command) ? quoteCmdArg(command) : command;
  return `"${[commandPart, ...commandArgs.map(quoteCmdArg)].join(" ")}"`;
}

function quoteCmdArg(arg) {
  return `"${String(arg).replace(/"/g, '""')}"`;
}

function isWindowsCommandPrompt(command) {
  return process.platform === "win32" && /(?:^|[\\/])cmd(?:\.exe)?$/i.test(command);
}

function logEditorOpen(message) {
  try {
    const logPath = editorOpenLogPath();
    mkdirSync(dirname(logPath), { recursive: true });
    appendFileSync(logPath, `[${new Date().toISOString()}] ${message}\n`, "utf8");
  } catch {
    // Editor diagnostics should never break the app.
  }
}

function editorOpenLogPath() {
  return join(app.getPath("userData"), "Logs", "editor-open.log");
}

function waitForSpawn(child) {
  return new Promise((resolveSpawn, rejectSpawn) => {
    const timeout = setTimeout(resolveSpawn, 350);
    child.once("error", (error) => {
      clearTimeout(timeout);
      rejectSpawn(error);
    });
    child.once("spawn", () => {
      clearTimeout(timeout);
      resolveSpawn();
    });
  });
}

function scriptSourcePath(scriptId) {
  const paths = {
    "leveling.high-level-xp": join(scriptsDir, "HighLevelXP.ts"),
    "leveling.class-xp": join(scriptsDir, "ClassXP.ts"),
    "zero-to-hero.do-all": join(scriptsDir, "ZeroToHeroKits", "ZeroToHeroKit0DoAll.ts"),
    "zero-to-hero.core": join(scriptsDir, "ZeroToHeroKits", "CoreZeroToHero.ts"),
    "zero-to-hero.member-farms": join(scriptsDir, "ZeroToHeroKits", "MemberFarmsKit.ts"),
    "zero-to-hero.ultra-preps.player1": join(scriptsDir, "ZeroToHeroKits", "ZeroToHeroPrepsForUltras.ts"),
    "zero-to-hero.ultra-preps.player2": join(scriptsDir, "ZeroToHeroKits", "ZeroToHeroPrepsForUltras.ts"),
    "zero-to-hero.ultra-preps.player3": join(scriptsDir, "ZeroToHeroKits", "ZeroToHeroPrepsForUltras.ts"),
    "zero-to-hero.ultra-preps.player4": join(scriptsDir, "ZeroToHeroKits", "ZeroToHeroPrepsForUltras.ts")
  };
  return paths[String(scriptId || "")] || "";
}

function findVsCodeExecutable() {
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

function isVsCodeExecutableCandidate(candidate) {
  if (process.platform !== "win32") return true;
  return /\.(cmd|bat|exe)$/i.test(candidate);
}

function whereExecutables(command) {
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

ipcMain.handle("open-scripts-folder", () => shell.openPath(scriptsDir));
ipcMain.handle("read-json-setting", (_event, name) => readJsonSetting(name));
ipcMain.handle("write-json-setting", (_event, name, value) => {
  const result = writeJsonSetting(name, value);
  if (String(name || "") === "script-updates") updateScriptUpdatesMenuItems();
  return result;
});
ipcMain.handle("read-script-pack-scripts", () => readScriptPackScripts());
ipcMain.handle("read-builder-scripts", () => readBuilderScripts());
ipcMain.handle("write-builder-script", (_event, script) => writeBuilderScript(script));
ipcMain.handle("write-builder-scripts", (_event, scripts) => writeBuilderScripts(scripts));
ipcMain.handle("delete-builder-script", (_event, id) => deleteBuilderScript(id));
ipcMain.handle("open-builder-script-vscode", (_event, script) => openBuilderScriptInVsCode(script));
ipcMain.handle("open-script-vscode", (_event, scriptId) => openScriptInVsCode(scriptId));
ipcMain.handle("launcher-list-accounts", () => readAccounts().map(accountSummary));
ipcMain.handle("launcher-save-account", (_event, account) => saveLauncherAccount(account));
ipcMain.handle("launcher-delete-account", (_event, id) => deleteLauncherAccount(id));
ipcMain.handle("launcher-list-servers", () => fetchGameServers());
ipcMain.handle("launcher-start-accounts", (_event, accountIds, serverName) => launchAccounts(accountIds, serverName));
ipcMain.handle("launcher-empty-client", () => launchEmptyClient());
ipcMain.handle("launcher-show", () => createLauncherWindow());
ipcMain.handle("launcher-get-payload", (_event, launchId) => getLaunchPayload(launchId));
ipcMain.handle("tool-window-show", (_event, payload) => showToolWindow(payload));

app.whenReady().then(() =>
  startAssetServer().then(() => {
    setupApplicationMenu();
    createLauncherWindow();
    setupUpdateChecker();
    setupScriptUpdates();
  })
);

app.on("before-quit", closeAssetServer);

app.on("window-all-closed", () => {
  closeAssetServer();
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) startAssetServer().then(createLauncherWindow);
});

function setupApplicationMenu() {
  const isMac = process.platform === "darwin";
  const checkForUpdatesItem = {
    id: "check-for-updates",
    label: "Check For Updates",
    click: () => void checkForUpdatesFromMenu()
  };
  const checkForScriptUpdatesItem = {
    id: "check-for-script-updates",
    label: "Check For Script Updates",
    click: () => void checkForScriptUpdatesFromMenu()
  };
  const autoDownloadScriptUpdatesItem = {
    id: "auto-download-script-updates",
    label: "Automatically Download Script Updates",
    type: "checkbox",
    click: (menuItem) => {
      const settings = readScriptUpdateSettings();
      writeScriptUpdateSettings({ ...settings, autoDownload: Boolean(menuItem.checked) });
    }
  };
  const template = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about" },
              { type: "separator" },
              checkForUpdatesItem,
              checkForScriptUpdatesItem,
              autoDownloadScriptUpdatesItem,
              { type: "separator" },
              { role: "services" },
              { type: "separator" },
              { role: "hide" },
              { role: "hideOthers" },
              { role: "unhide" },
              { type: "separator" },
              { role: "quit" }
            ]
          }
        ]
      : [
          {
            label: "File",
            submenu: [checkForUpdatesItem, checkForScriptUpdatesItem, autoDownloadScriptUpdatesItem, { type: "separator" }, { role: "quit" }]
          }
        ]),
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        ...(isMac ? [{ role: "pasteAndMatchStyle" }, { role: "delete" }, { role: "selectAll" }] : [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }])
      ]
    },
    {
      label: "Window",
      submenu: isMac ? [{ role: "minimize" }, { role: "zoom" }, { type: "separator" }, { role: "front" }] : [{ role: "minimize" }, { role: "close" }]
    },
    {
      role: "help",
      submenu: [
        {
          label: "Veyra Releases",
          click: () => shell.openExternal(githubReleasesUrl())
        }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  checkForUpdatesMenuItem = menu.getMenuItemById("check-for-updates");
  checkForScriptUpdatesMenuItem = menu.getMenuItemById("check-for-script-updates");
  autoDownloadScriptUpdatesMenuItem = menu.getMenuItemById("auto-download-script-updates");
  updateCheckForUpdatesMenuItem();
  updateScriptUpdatesMenuItems();
}

function updateCheckForUpdatesMenuItem() {
  if (!checkForUpdatesMenuItem) return;
  checkForUpdatesMenuItem.enabled = !updateChecking;
  checkForUpdatesMenuItem.label = updateChecking ? "Checking For Updates..." : "Check For Updates";
}

function updateScriptUpdatesMenuItems() {
  if (checkForScriptUpdatesMenuItem) {
    checkForScriptUpdatesMenuItem.enabled = !scriptUpdateChecking;
    checkForScriptUpdatesMenuItem.label = scriptUpdateChecking ? "Checking Script Updates..." : "Check For Script Updates";
  }
  if (autoDownloadScriptUpdatesMenuItem) {
    autoDownloadScriptUpdatesMenuItem.checked = readScriptUpdateSettings().autoDownload;
  }
}

async function checkForUpdatesFromMenu() {
  setupUpdateChecker();
  const parent = activeDialogWindow();

  if (!updatesEnabled()) {
    await showUpdateDialog(parent, {
      type: "info",
      title: "Check For Updates",
      message: "Update checks run in packaged builds.",
      detail: "Launch the installed Veyra app to check GitHub releases from the app menu.",
      buttons: ["OK"],
      defaultId: 0,
      cancelId: 0
    });
    return;
  }

  const status = await checkForUpdates();
  await showUpdateResult(status, parent);
}

async function showUpdateResult(status, parent) {
  if (status.state === "available") {
    const result = await showUpdateDialog(parent, {
      type: "info",
      title: "Update Available",
      message: `Veyra ${status.version} is available.`,
      detail: `You are running Veyra ${status.currentVersion}.`,
      buttons: ["Open Downloads", "Later"],
      defaultId: 0,
      cancelId: 1
    });
    if (result.response === 0) await openUpdateRelease();
    return;
  }

  if (status.state === "not-available") {
    await showUpdateDialog(parent, {
      type: "info",
      title: "Check For Updates",
      message: "Veyra is up to date.",
      detail: `Current version: ${status.currentVersion}`,
      buttons: ["OK"],
      defaultId: 0,
      cancelId: 0
    });
    return;
  }

  if (status.state === "error") {
    const result = await showUpdateDialog(parent, {
      type: "error",
      title: "Update Check Failed",
      message: "Could not check for Veyra updates.",
      detail: status.message || "GitHub did not return an update result.",
      buttons: ["Open Releases", "OK"],
      defaultId: 1,
      cancelId: 1
    });
    if (result.response === 0) await openUpdateRelease();
    return;
  }

  await showUpdateDialog(parent, {
    type: "info",
    title: "Check For Updates",
    message: status.message || "Update check finished.",
    buttons: ["OK"],
    defaultId: 0,
    cancelId: 0
  });
}

function activeDialogWindow() {
  const focused = BrowserWindow.getFocusedWindow();
  if (focused && !focused.isDestroyed()) return focused;
  if (launcherWindow && !launcherWindow.isDestroyed()) return launcherWindow;
  return BrowserWindow.getAllWindows().find((win) => !win.isDestroyed());
}

function showUpdateDialog(parent, options) {
  if (parent && !parent.isDestroyed()) return dialog.showMessageBox(parent, options);
  return dialog.showMessageBox(options);
}

function setupScriptUpdates() {
  updateScriptUpdatesMenuItems();
  if (!readScriptUpdateSettings().autoDownload) return;
  setTimeout(() => {
    void checkScriptUpdates({ install: true, silent: true })
      .then((status) => {
        if (status.state === "installed") return showScriptUpdateResult(status, activeDialogWindow());
      })
      .catch(() => undefined);
  }, 6500);
}

async function checkForScriptUpdatesFromMenu() {
  const parent = activeDialogWindow();
  const status = await checkScriptUpdates({ install: false, silent: false });

  if (status.state === "available") {
    const detail = status.available.map((entry) => `${entry.name || entry.id} ${entry.currentVersion || "not installed"} -> ${entry.version}`).join("\n");
    const result = await showUpdateDialog(parent, {
      type: "info",
      title: "Script Updates Available",
      message: `${status.available.length} script update${status.available.length === 1 ? "" : "s"} available.`,
      detail,
      buttons: ["Download and Install", "Later"],
      defaultId: 0,
      cancelId: 1
    });
    if (result.response !== 0) return;
    const installed = await checkScriptUpdates({ install: true, silent: false });
    await showScriptUpdateResult(installed, parent);
    return;
  }

  await showScriptUpdateResult(status, parent);
}

async function showScriptUpdateResult(status, parent) {
  if (status.state === "installed") {
    await showUpdateDialog(parent, {
      type: "info",
      title: "Script Updates Installed",
      message: `Installed ${status.installed.length} script pack${status.installed.length === 1 ? "" : "s"}.`,
      detail: status.installed.map((entry) => `${entry.name || entry.id} ${entry.version}`).join("\n"),
      buttons: ["OK"],
      defaultId: 0,
      cancelId: 0
    });
    return;
  }

  if (status.state === "not-available") {
    await showUpdateDialog(parent, {
      type: "info",
      title: "Check For Script Updates",
      message: "Scripts are up to date.",
      detail: installedScriptPacksDetail(),
      buttons: ["OK"],
      defaultId: 0,
      cancelId: 0
    });
    return;
  }

  if (status.state === "error") {
    await showUpdateDialog(parent, {
      type: "error",
      title: "Script Update Check Failed",
      message: "Could not check for script updates.",
      detail: status.message || "The script manifest could not be downloaded.",
      buttons: ["OK"],
      defaultId: 0,
      cancelId: 0
    });
  }
}

async function checkScriptUpdates(options = {}) {
  if (scriptUpdateChecking) return { state: "checking", available: [], installed: [], message: "Script update check already running." };
  scriptUpdateChecking = true;
  updateScriptUpdatesMenuItems();

  try {
    const settings = readScriptUpdateSettings();
    const manifestUrl = scriptUpdatesManifestUrl(settings);
    const manifest = normalizeScriptUpdatesManifest(await fetchJsonUrl(manifestUrl), manifestUrl);
    const installedPackages = { ...installedScriptPackageVersions(), ...settings.installedPackages };
    const available = manifest.packages.filter((entry) => isScriptPackageNewer(entry, installedPackages[entry.id]));
    const checkedSettings = writeScriptUpdateSettings({ ...settings, lastCheckedAt: new Date().toISOString(), installedPackages });

    if (available.length === 0) return { state: "not-available", available: [], installed: [], manifest };
    if (!options.install) return { state: "available", available, installed: [], manifest };

    const installed = [];
    const nextInstalled = { ...checkedSettings.installedPackages };
    for (const entry of available) {
      const installedPack = await installScriptPackage(entry, manifest.url);
      nextInstalled[installedPack.id] = installedPack.version;
      installed.push(installedPack);
    }
    writeScriptUpdateSettings({
      ...checkedSettings,
      installedPackages: nextInstalled,
      lastInstalledAt: installed.length > 0 ? new Date().toISOString() : checkedSettings.lastInstalledAt
    });
    if (installed.length > 0) notifyScriptPacksChanged(installed);
    return { state: installed.length > 0 ? "installed" : "not-available", available, installed, manifest };
  } catch (error) {
    return {
      state: "error",
      available: [],
      installed: [],
      message: error?.message || String(error)
    };
  } finally {
    scriptUpdateChecking = false;
    updateScriptUpdatesMenuItems();
  }
}

function normalizeScriptUpdatesManifest(value, manifestUrl) {
  const source = value && typeof value === "object" ? value : {};
  const packages = Array.isArray(source.packages) ? source.packages : [];
  return {
    schema: Number(source.schema || 1),
    channel: cleanId(source.channel || "stable") || "stable",
    version: cleanVersion(source.version || ""),
    url: manifestUrl,
    packages: packages.map((entry) => normalizeScriptPackageEntry(entry, manifestUrl)).filter(Boolean)
  };
}

function normalizeScriptPackageEntry(value, manifestUrl) {
  const source = value && typeof value === "object" ? value : {};
  const id = cleanId(source.id || "official");
  const version = cleanVersion(source.version);
  const type = String(source.type || "builder-scripts");
  const url = typeof source.url === "string" && source.url.trim() ? new URL(source.url.trim(), manifestUrl).toString() : "";
  if (!id || !version || !url || type !== "builder-scripts") return undefined;
  const minAppVersion = cleanVersion(source.minAppVersion || "");
  if (minAppVersion && compareVersions(app.getVersion(), minAppVersion) < 0) return undefined;
  return {
    id,
    name: String(source.name || id),
    version,
    type,
    url,
    sha256: typeof source.sha256 === "string" ? source.sha256.trim().toLowerCase() : "",
    currentVersion: ""
  };
}

function isScriptPackageNewer(entry, installedVersion) {
  entry.currentVersion = installedVersion || "";
  return compareScriptVersions(entry.version, installedVersion || "0.0.0") > 0;
}

async function installScriptPackage(entry, manifestUrl) {
  const packageUrl = new URL(entry.url, manifestUrl).toString();
  const body = await fetchTextUrl(packageUrl);
  if (entry.sha256) {
    const digest = createHash("sha256").update(body, "utf8").digest("hex");
    if (digest !== entry.sha256) throw new Error(`Script pack ${entry.id} checksum mismatch.`);
  }
  const pack = JSON.parse(body);
  const id = cleanId(pack.id || entry.id);
  const version = cleanVersion(pack.version || entry.version);
  const scripts = normalizeScriptPackScripts(pack.scripts);
  if (!id || !version || scripts.length === 0) throw new Error(`Script pack ${entry.id} did not contain runnable scripts.`);
  const installedPack = {
    schema: Number(pack.schema || 1),
    id,
    name: String(pack.name || entry.name || id),
    version,
    installedAt: new Date().toISOString(),
    sourceUrl: packageUrl,
    scripts
  };
  const filePath = scriptPackPath(id);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(installedPack, null, 2)}\n`, "utf8");
  return { id, name: installedPack.name, version, count: scripts.length, filePath };
}

function installedScriptPackageVersions() {
  const versions = {};
  for (const pack of readScriptPackScripts().packs) versions[pack.id] = pack.version;
  return versions;
}

function installedScriptPacksDetail() {
  const packs = readScriptPackScripts().packs;
  if (packs.length === 0) return "No downloaded script packs are installed yet.";
  return packs.map((pack) => `${pack.name || pack.id} ${pack.version}`).join("\n");
}

function notifyScriptPacksChanged(installed) {
  for (const win of BrowserWindow.getAllWindows()) {
    if (!win.isDestroyed()) win.webContents.send("script-packs-changed", { installed });
  }
}

function setupUpdateChecker() {
  if (updateCheckerInitialized) return;
  updateCheckerInitialized = true;

  if (!updatesEnabled()) {
    setUpdateStatus({
      state: "idle",
      message: "Update checks run in packaged builds.",
      canCheck: false,
      canOpen: false,
      releaseUrl: ""
    });
    return;
  }

  setUpdateStatus({
    state: "idle",
    message: "Ready to check for updates.",
    canCheck: true,
    canOpen: false,
    releaseUrl: ""
  });
  setTimeout(() => void checkForUpdates(), 3500);
}

async function checkForUpdates() {
  setupUpdateChecker();
  if (!updatesEnabled()) return updateStatus;
  if (updateChecking) return updateStatus;

  updateChecking = true;
  setUpdateStatus({
    state: "checking",
    message: "Checking GitHub for updates...",
    canCheck: false,
    canOpen: false,
    releaseUrl: "",
    percent: 0
  });

  try {
    const release = await fetchLatestGithubRelease();
    const version = releaseVersion(release);
    const releaseUrl = typeof release.html_url === "string" ? release.html_url : githubReleasesUrl();
    latestUpdateRelease = { version, url: releaseUrl, name: release.name || release.tag_name || version };

    if (compareVersions(version, app.getVersion()) > 0) {
      setUpdateStatus({
        state: "available",
        message: `Veyra ${version} is available.`,
        version,
        canCheck: true,
        canOpen: true,
        releaseUrl
      });
    } else {
      setUpdateStatus({
        state: "not-available",
        message: "Veyra is up to date.",
        version,
        canCheck: true,
        canOpen: false,
        releaseUrl
      });
    }
  } catch (error) {
    setUpdateStatus({
      state: "error",
      message: `Update check failed: ${error?.message || String(error)}`,
      canCheck: true,
      canOpen: true,
      releaseUrl: githubReleasesUrl()
    });
  } finally {
    updateChecking = false;
    updateCheckForUpdatesMenuItem();
  }
  return updateStatus;
}

async function openUpdateRelease() {
  const url = updateStatus.releaseUrl || latestUpdateRelease?.url || githubReleasesUrl();
  await shell.openExternal(url);
  return updateStatus;
}

function fetchLatestGithubRelease() {
  const path = `/repos/${updateRepo.owner}/${updateRepo.repo}/releases/latest`;
  return new Promise((resolveRelease, rejectRelease) => {
    const request = httpsRequest(
      {
        hostname: "api.github.com",
        path,
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `Veyra/${app.getVersion()}`
        }
      },
      (response) => {
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          if (response.statusCode < 200 || response.statusCode >= 300) {
            rejectRelease(new Error(`GitHub returned HTTP ${response.statusCode}`));
            return;
          }
          try {
            resolveRelease(JSON.parse(body));
          } catch (error) {
            rejectRelease(error);
          }
        });
      }
    );
    request.setTimeout(10000, () => {
      request.destroy(new Error("GitHub update check timed out."));
    });
    request.on("error", rejectRelease);
    request.end();
  });
}

async function fetchJsonUrl(url) {
  return JSON.parse(await fetchTextUrl(url));
}

function fetchTextUrl(url, redirects = 0) {
  return new Promise((resolveText, rejectText) => {
    const target = new URL(url);
    const requester = target.protocol === "http:" ? httpRequest : httpsRequest;
    const request = requester(
      target,
      {
        method: "GET",
        headers: {
          Accept: "application/json,text/plain,*/*",
          "User-Agent": `Veyra/${app.getVersion()}`
        }
      },
      (response) => {
        const location = response.headers.location;
        if (response.statusCode >= 300 && response.statusCode < 400 && location && redirects < 5) {
          response.resume();
          resolveText(fetchTextUrl(new URL(location, target).toString(), redirects + 1));
          return;
        }

        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          if (response.statusCode < 200 || response.statusCode >= 300) {
            rejectText(new Error(`${target.hostname} returned HTTP ${response.statusCode}`));
            return;
          }
          resolveText(body);
        });
      }
    );
    request.setTimeout(12000, () => {
      request.destroy(new Error(`${target.hostname} request timed out.`));
    });
    request.on("error", rejectText);
    request.end();
  });
}

function releaseVersion(release) {
  const values = [release?.tag_name, release?.name].filter(Boolean).map(String);
  for (const value of values) {
    const semver = value.match(/v?(\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?)/);
    if (semver) return semver[1];
    const mainTag = value.match(/^main-(\d+)(?:\.\d+)?$/);
    if (mainTag) return `0.1.${mainTag[1]}`;
  }
  return "0.0.0";
}

function compareVersions(left, right) {
  const a = versionParts(left);
  const b = versionParts(right);
  for (let index = 0; index < 3; index += 1) {
    if (a[index] !== b[index]) return a[index] > b[index] ? 1 : -1;
  }
  return 0;
}

function compareScriptVersions(left, right) {
  const a = scriptVersionParts(left);
  const b = scriptVersionParts(right);
  const length = Math.max(a.length, b.length, 1);
  for (let index = 0; index < length; index += 1) {
    const leftPart = a[index] || 0;
    const rightPart = b[index] || 0;
    if (leftPart !== rightPart) return leftPart > rightPart ? 1 : -1;
  }
  return 0;
}

function scriptVersionParts(version) {
  const parts = String(version || "")
    .replace(/^v/iu, "")
    .split(/[.+-]/u)
    .map((part) => Number(part.replace(/\D.*/u, "")))
    .filter((part) => Number.isFinite(part));
  return parts.length > 0 ? parts : [0];
}

function versionParts(version) {
  const match = String(version || "").match(/(\d+)\.(\d+)\.(\d+)/);
  if (!match) return [0, 0, 0];
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function githubReleasesUrl() {
  return `https://github.com/${updateRepo.owner}/${updateRepo.repo}/releases/latest`;
}

function updatesEnabled() {
  return app.isPackaged || process.env.VEYRA_ENABLE_UPDATE_CHECK_IN_DEV === "1";
}

function setUpdateStatus(next) {
  updateStatus = {
    ...updateStatus,
    ...next,
    currentVersion: app.getVersion(),
    isPackaged: app.isPackaged
  };
  updateCheckForUpdatesMenuItem();
}

function resolvePepperFlash() {
  const explicitPath = process.env.VEYRA_PEPPER_FLASH;
  if (explicitPath && existsSync(explicitPath)) {
    return {
      path: explicitPath,
      version: process.env.VEYRA_PEPPER_FLASH_VERSION || inferFlashVersion(explicitPath),
      reason: ""
    };
  }

  const candidates = getPepperFlashSearchRoots();

  for (const base of candidates) {
    const match = findPepperFlash(base);
    if (match) return match;
  }

  return {
    path: "",
    version: "",
    reason: missingPepperFlashReason()
  };
}

function startAssetServer() {
  if (assetServer) return Promise.resolve();

  assetServer = createHttpsServer(getHttpsServerOptions(), (request, response) => {
    try {
      const requestUrl = new URL(request.url || "/", "http://127.0.0.1");
      if (requestUrl.pathname.startsWith("/game/")) {
        proxyGameRequest(request, response, requestUrl);
        return;
      }

      const filePath = resolveAssetPath(requestUrl.pathname);
      if (!filePath) {
        response.writeHead(requestUrl.pathname === "/favicon.ico" ? 204 : 404);
        response.end();
        return;
      }

      response.writeHead(200, {
        "Content-Type": contentType(filePath),
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*"
      });
      response.end(readFileSync(filePath));
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(error && error.stack ? error.stack : String(error));
    }
  });

  return new Promise((resolveServer) => {
    const listenOnFallbackPort = () => {
      assetServer.removeListener("error", listenOnFallbackPort);
      assetServer.listen(0, "127.0.0.1", () => {
        const address = assetServer.address();
        assetOrigin = `https://game.aq.com:${address.port}`;
        resolveServer();
      });
    };

    assetServer.once("error", listenOnFallbackPort);
    assetServer.listen(443, "127.0.0.1", () => {
      assetServer.removeListener("error", listenOnFallbackPort);
      assetOrigin = "https://game.aq.com";
      resolveServer();
    });
  });
}

function closeAssetServer() {
  const server = assetServer;
  assetServer = undefined;
  assetOrigin = undefined;
  if (!server) return;
  try {
    server.close();
  } catch {
    // The app is already closing; a server close failure should not block quit.
  }
}

function getHttpsServerOptions() {
  ensureHttpsCertificate();
  if (existsSync(certKeyPath) && existsSync(certPemPath)) {
    return {
      key: readFileSync(certKeyPath),
      cert: readFileSync(certPemPath)
    };
  }
  return {
    pfx: readFileSync(certPath),
    passphrase: certPassphrase
  };
}

function ensureHttpsCertificate() {
  if (existsSync(certPath) || (existsSync(certKeyPath) && existsSync(certPemPath))) return;
  mkdirSync(certDir, { recursive: true });

  if (process.platform === "win32") {
    const escapedPath = psQuote(certPath);
    const escapedPass = psQuote(certPassphrase);
    const script = [
      `$cert = New-SelfSignedCertificate -DnsName 'game.aq.com','127.0.0.1','localhost' -CertStoreLocation 'Cert:\\CurrentUser\\My' -KeyExportPolicy Exportable -NotAfter (Get-Date).AddYears(3)`,
      `$pwd = ConvertTo-SecureString -String ${escapedPass} -AsPlainText -Force`,
      `Export-PfxCertificate -Cert $cert -FilePath ${escapedPath} -Password $pwd | Out-Null`
    ].join("; ");
    execFileSync("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script], { stdio: "ignore" });
    return;
  }

  execFileSync(
    "openssl",
    [
      "req",
      "-x509",
      "-newkey",
      "rsa:2048",
      "-nodes",
      "-keyout",
      certKeyPath,
      "-out",
      certPemPath,
      "-days",
      "1095",
      "-subj",
      "/CN=game.aq.com",
      "-addext",
      "subjectAltName=DNS:game.aq.com,IP:127.0.0.1,DNS:localhost"
    ],
    { stdio: "ignore" }
  );
}

function psQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

function resolveAssetPath(pathname) {
  if (pathname === "/" || pathname === "/src/index.html") return join(appDir, "src", "index.html");
  if (pathname === "/src/launcher.html") return join(appDir, "src", "launcher.html");
  if (pathname === "/src/tool.html") return join(appDir, "src", "tool.html");
  if (pathname === "/src/styles.css") return join(appDir, "src", "styles.css");
  if (pathname === "/swf/client.swf") return swfPath;
  if (pathname.startsWith("/dist/")) return safeJoin(appDir, pathname.slice(1));
  return undefined;
}

function safeJoin(root, relativePath) {
  const fullPath = resolve(root, relativePath);
  if (!fullPath.startsWith(resolve(root)) || !existsSync(fullPath) || !statSync(fullPath).isFile()) return undefined;
  return fullPath;
}

function contentType(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.endsWith(".html")) return "text/html; charset=utf-8";
  if (lower.endsWith(".css")) return "text/css; charset=utf-8";
  if (lower.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (lower.endsWith(".swf")) return "application/x-shockwave-flash";
  return "application/octet-stream";
}

function proxyGameRequest(request, response, requestUrl) {
  const targetUrl = new URL(`https://game.aq.com${requestUrl.pathname}${requestUrl.search}`);
  const proxy = httpsRequest(
    targetUrl,
    {
      method: request.method,
      headers: {
        ...request.headers,
        host: "game.aq.com",
        origin: "https://game.aq.com",
        referer: "https://game.aq.com/game/"
      }
    },
    (proxyResponse) => {
      response.writeHead(proxyResponse.statusCode || 502, {
        ...proxyResponse.headers,
        "Access-Control-Allow-Origin": "*"
      });
      proxyResponse.pipe(response);
    }
  );

  proxy.on("error", (error) => {
    response.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error && error.stack ? error.stack : String(error));
  });

  request.pipe(proxy);
}

function findPepperFlash(base) {
  try {
    const stack = [base];
    while (stack.length > 0) {
      const current = stack.pop();
      const entries = readdirSync(current, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(current, entry.name);
        if (isPepperFlashPlugin(entry.name)) {
          return {
            path: fullPath,
            version: inferFlashVersion(fullPath),
            reason: ""
          };
        }
        if (entry.isDirectory()) {
          stack.push(fullPath);
          continue;
        }
      }
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function getPepperFlashSearchRoots() {
  const roots = [bundledPepperFlashDir];
  if (process.platform === "win32") {
    roots.push(
      process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Artix Game Launcher", "resources", "plugins"),
      process.env["PROGRAMFILES(X86)"] && join(process.env["PROGRAMFILES(X86)"], "Artix Game Launcher", "resources", "plugins"),
      process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Google", "Chrome", "User Data", "PepperFlash"),
      process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Chromium", "User Data", "PepperFlash"),
      process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Microsoft", "Edge", "User Data", "PepperFlash"),
      process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Google", "Chrome", "Application"),
      process.env["PROGRAMFILES(X86)"] && join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application"),
      process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Microsoft", "Edge", "Application"),
      process.env["PROGRAMFILES(X86)"] && join(process.env["PROGRAMFILES(X86)"], "Microsoft", "Edge", "Application"),
      join(process.env.SystemRoot || "C:\\Windows", "System32", "Macromed", "Flash"),
      join(process.env.SystemRoot || "C:\\Windows", "SysWOW64", "Macromed", "Flash")
    );
  } else if (process.platform === "darwin") {
    roots.push(
      "/Applications/Artix Game Launcher.app/Contents/Resources/plugins",
      "/Applications/Artix Game Launcher.app/Contents/Resources/app.asar.unpacked/plugins",
      "/Applications/Artix Game Launcher.app/Contents/Resources",
      process.env.HOME && join(process.env.HOME, "Applications", "Artix Game Launcher.app", "Contents", "Resources", "plugins"),
      process.env.HOME && join(process.env.HOME, "Applications", "Artix Game Launcher.app", "Contents", "Resources", "app.asar.unpacked", "plugins"),
      process.env.HOME && join(process.env.HOME, "Library", "Application Support", "Google", "Chrome", "PepperFlash"),
      process.env.HOME && join(process.env.HOME, "Library", "Application Support", "Chromium", "PepperFlash"),
      "/Library/Internet Plug-Ins/PepperFlashPlayer",
      "/Library/Internet Plug-Ins"
    );
  }
  return roots.filter(Boolean).filter((root) => existsSync(root));
}

function isPepperFlashPlugin(name) {
  const lower = name.toLowerCase();
  return /^pepflashplayer.*\.dll$/.test(lower) || lower === "pepperflashplayer.plugin";
}

function missingPepperFlashReason() {
  const pluginName = process.platform === "darwin" ? "PepperFlashPlayer.plugin" : "pepflashplayer.dll";
  const platformHint =
    process.platform === "win32"
      ? "The installed NPSWF*.dll files are NPAPI and Electron cannot use them."
      : "Modern macOS installs usually do not include PPAPI Flash, and NPAPI plugins cannot be used.";
  return `No PPAPI ${pluginName} was found. Set VEYRA_PEPPER_FLASH to a Pepper Flash plugin path and VEYRA_PEPPER_FLASH_VERSION to its version. ${platformHint}`;
}

function inferFlashVersion(filePath) {
  if (process.env.VEYRA_PEPPER_FLASH_VERSION) return process.env.VEYRA_PEPPER_FLASH_VERSION;
  const metadataVersion = readPepperFlashVersionMetadata(filePath);
  if (metadataVersion) return metadataVersion;
  if (/artix game launcher/i.test(filePath)) return process.env.VEYRA_PEPPER_FLASH_VERSION || "32.0.0.371";
  const parts = dirname(filePath).split(/[\\/]/).reverse();
  const folderVersion = parts.find((part) => /^\d+\.\d+\.\d+\.\d+$/.test(part));
  if (folderVersion) return folderVersion;
  const fileVersion = filePath.match(/_(\d+)_(\d+)_(\d+)_(\d+)\.dll$/i);
  return fileVersion ? `${fileVersion[1]}.${fileVersion[2]}.${fileVersion[3]}.${fileVersion[4]}` : "34.0.0.330";
}

function readPepperFlashVersionMetadata(filePath) {
  const dirs = [];
  try {
    if (existsSync(filePath) && statSync(filePath).isDirectory()) dirs.push(filePath);
  } catch {
    // Ignore unreadable plugin bundles and fall back to path heuristics.
  }
  dirs.push(dirname(filePath), dirname(dirname(filePath)));

  for (const dir of dirs) {
    const versionFile = join(dir, "version.txt");
    const manifestFile = join(dir, "manifest.json");
    try {
      if (existsSync(versionFile)) {
        const version = readFileSync(versionFile, "utf8").trim();
        if (/^\d+\.\d+\.\d+\.\d+$/.test(version)) return version;
      }
      if (existsSync(manifestFile)) {
        const manifest = readFileSync(manifestFile, "utf8");
        const match = manifest.match(/"version"\s*:\s*"([^"]+)"/);
        if (match) return match[1];
      }
    } catch {
      // Ignore malformed local metadata and continue searching.
    }
  }
  return "";
}

function installFlashTrust() {
  const trustDir = getFlashTrustDir();
  if (!trustDir) return;

  try {
    mkdirSync(trustDir, { recursive: true });
    const trustedPaths = [
      rootDir,
      appDir,
      dirname(swfPath)
    ];
    writeFileSync(join(trustDir, "veyra.cfg"), Array.from(new Set(trustedPaths)).join("\n"), "utf8");
  } catch (error) {
    console.warn("Unable to write FlashPlayerTrust config.", error);
  }
}

function installFlashSettings() {
  const content = ["AssetCacheSize=20", ""].join("\n");
  for (const filePath of getFlashSettingsFiles()) {
    try {
      mkdirSync(dirname(filePath), { recursive: true });
      writeFileSync(filePath, content, "utf8");
    } catch (error) {
      console.warn("Unable to write Flash mms.cfg.", filePath, error);
    }
  }
}

function migrateGlobalFlashSharedObjects() {
  const sources = getGlobalFlashSharedObjectRoots();
  const targets = getVeyraPepperSharedObjectRoots();
  for (const source of sources) {
    if (!existsSync(source)) continue;
    for (const target of targets) {
      try {
        copyDirectory(source, target);
      } catch (error) {
        console.warn("Unable to migrate Flash SharedObjects.", source, target, error);
      }
    }
  }
}

function getGlobalFlashSharedObjectRoots() {
  const roots = [];
  if (process.platform === "win32" && process.env.APPDATA) {
    const sharedRoot = join(process.env.APPDATA, "Macromedia", "Flash Player", "#SharedObjects");
    try {
      if (existsSync(sharedRoot)) {
        for (const entry of readdirSync(sharedRoot, { withFileTypes: true })) {
          if (entry.isDirectory()) roots.push(join(sharedRoot, entry.name, "game.aq.com"));
        }
      }
    } catch {
      // Missing global Flash data is fine; the app will create its own profile.
    }
  } else if (process.platform === "darwin" && process.env.HOME) {
    const sharedRoot = join(process.env.HOME, "Library", "Preferences", "Macromedia", "Flash Player", "#SharedObjects");
    try {
      if (existsSync(sharedRoot)) {
        for (const entry of readdirSync(sharedRoot, { withFileTypes: true })) {
          if (entry.isDirectory()) roots.push(join(sharedRoot, entry.name, "game.aq.com"));
        }
      }
    } catch {
      // Missing global Flash data is fine; the app will create its own profile.
    }
  }
  return roots;
}

function getVeyraPepperSharedObjectRoots() {
  const base = getVeyraPepperWritableRoot();
  if (!base) return [];
  return [
    join(base, "#SharedObjects", "Veyra", "game.aq.com"),
    join(base, "#SharedObjects", "CDE5NDWY", "game.aq.com")
  ];
}

function getVeyraPepperWritableRoot() {
  if (process.platform === "win32" && process.env.LOCALAPPDATA) {
    return join(process.env.LOCALAPPDATA, "Veyra", "User Data", "Default", "Pepper Data", "Shockwave Flash", "WritableRoot");
  }
  if (process.platform === "darwin" && process.env.HOME) {
    return join(process.env.HOME, "Library", "Application Support", "Veyra", "Default", "Pepper Data", "Shockwave Flash", "WritableRoot");
  }
  return "";
}

function copyDirectory(source, target) {
  if (!existsSync(source)) return;
  mkdirSync(target, { recursive: true });
  for (const entry of readdirSync(source, { withFileTypes: true })) {
    const sourcePath = join(source, entry.name);
    const targetPath = join(target, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else if (entry.isFile() && shouldCopyFlashSharedObject(sourcePath, targetPath)) {
      copyFileSync(sourcePath, targetPath);
    }
  }
}

function shouldCopyFlashSharedObject(sourcePath, targetPath) {
  if (!existsSync(targetPath)) return true;
  if (/AQWUserPref\.sol$/i.test(sourcePath) && hasSavedAqwLogin(sourcePath) && !hasSavedAqwLogin(targetPath)) return true;
  return statSync(sourcePath).mtimeMs > statSync(targetPath).mtimeMs;
}

function hasSavedAqwLogin(filePath) {
  try {
    const text = readFileSync(filePath).toString("latin1");
    return /strUsername[\s\S]{0,16}[a-z0-9_ -]{2,}/i.test(text) && /strPassword[\s\S]{0,16}[^\x00]{6,}/i.test(text);
  } catch {
    return false;
  }
}

function getFlashSettingsFiles() {
  const files = [];
  if (process.platform === "win32") {
    if (process.env.LOCALAPPDATA) {
      files.push(join(process.env.LOCALAPPDATA, "Electron", "User Data", "Default", "Pepper Data", "Shockwave Flash", "System", "mms.cfg"));
      files.push(join(process.env.LOCALAPPDATA, "Veyra", "User Data", "Default", "Pepper Data", "Shockwave Flash", "System", "mms.cfg"));
    }
  } else if (process.platform === "darwin" && process.env.HOME) {
    files.push(join(process.env.HOME, "Library", "Preferences", "Macromedia", "Flash Player", "mms.cfg"));
  }
  return files;
}

function getFlashTrustDir() {
  if (process.platform === "win32") {
    const appData = process.env.APPDATA;
    return appData && join(appData, "Macromedia", "Flash Player", "#Security", "FlashPlayerTrust");
  }
  if (process.platform === "darwin") {
    return (
      process.env.HOME &&
      join(process.env.HOME, "Library", "Preferences", "Macromedia", "Flash Player", "#Security", "FlashPlayerTrust")
    );
  }
  return undefined;
}
