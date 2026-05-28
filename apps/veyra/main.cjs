const { app, BrowserWindow, dialog, ipcMain, shell } = require("electron");
const { createServer: createHttpsServer, request: httpsRequest } = require("https");
const { execFileSync, spawn } = require("child_process");
const { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } = require("fs");
const { dirname, join, resolve } = require("path");

app.setName("Veyra");

const rootDir = resolve(__dirname, "../..");
const appDir = __dirname;
const preloadPath = join(appDir, "preload.cjs");
const scriptsDir = join(appDir, "src", "scripts");
const swfPath = resolve(process.env.VEYRA_CLIENT_SWF || join(rootDir, "apps", "windows-bridge", "client.swf"));
const certDir = join(appDir, "certs");
const certPath = join(certDir, "game-aq-dev.pfx");
const certKeyPath = join(certDir, "game-aq-dev.key");
const certPemPath = join(certDir, "game-aq-dev.pem");
const certPassphrase = "veyra-dev";
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
app.commandLine.appendSwitch("ignore-certificate-errors");
app.commandLine.appendSwitch("host-rules", "MAP game.aq.com 127.0.0.1");

let mainWindow;
let assetServer;
let assetOrigin;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1160,
    height: 760,
    minWidth: 960,
    minHeight: 620,
    title: "Veyra",
    backgroundColor: "#050505",
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
  mainWindow.setMenuBarVisibility(false);
  mainWindow.webContents.on("new-window", (event, targetUrl, frameName, disposition, options) => {
    const toolWindow = getToolWindowOptions(targetUrl);
    if (!toolWindow) return;
    Object.assign(options, {
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
  url.searchParams.set("swf", `${assetOrigin}/swf/client.swf`);
  url.searchParams.set("gameBase", `${assetOrigin}/game/`);
  if (flash.path) {
    url.searchParams.set("flashPath", flash.path);
    url.searchParams.set("flashVersion", flash.version || "");
  } else {
    url.searchParams.set("flashMissing", flash.reason);
  }

  mainWindow.loadURL(url.toString());
  mainWindow.once("closed", () => {
    mainWindow = undefined;
  });

  if (!flash.path) {
    mainWindow.once("ready-to-show", () => {
      dialog.showMessageBox(mainWindow, {
        type: "warning",
        title: "Pepper Flash not found",
        message: "Veyra needs a PPAPI Pepper Flash plugin.",
        detail: flash.reason
      });
    });
  }
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

function builderScriptsDir() {
  return join(app.getPath("appData"), "Veyra", "BuilderScripts");
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

async function openBuilderScriptInVsCode(script) {
  const filePath = writeBuilderScript(script);
  const codePath = findVsCodeExecutable();
  if (codePath) {
    const isCmd = /\.(cmd|bat)$/i.test(codePath);
    const child = isCmd
      ? spawn("cmd.exe", ["/d", "/s", "/c", `"${codePath}" -r "${filePath}"`], { detached: true, stdio: "ignore", windowsHide: true })
      : spawn(codePath, ["-r", filePath], { detached: true, stdio: "ignore", windowsHide: true });
    child.unref();
    return { filePath, codePath, result: "spawned-vscode" };
  }

  if (process.platform === "darwin") {
    const child = spawn("open", ["-a", "Visual Studio Code", filePath], { detached: true, stdio: "ignore" });
    child.unref();
    return { filePath, result: "spawned-macos-vscode" };
  }

  if (process.platform !== "win32") {
    const child = spawn("code", ["-r", filePath], { detached: true, stdio: "ignore" });
    child.unref();
    return { filePath, result: "spawned-code-command" };
  }

  const fallback = `code -r "${filePath}"`;
  const child = spawn("cmd.exe", ["/d", "/s", "/c", fallback], { detached: true, stdio: "ignore", windowsHide: true });
  child.unref();
  return { filePath, result: "spawned-code-command" };
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
  return candidates.find((candidate) => existsSync(candidate)) || "";
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
ipcMain.handle("write-json-setting", (_event, name, value) => writeJsonSetting(name, value));
ipcMain.handle("read-builder-scripts", () => readBuilderScripts());
ipcMain.handle("write-builder-script", (_event, script) => writeBuilderScript(script));
ipcMain.handle("write-builder-scripts", (_event, scripts) => writeBuilderScripts(scripts));
ipcMain.handle("delete-builder-script", (_event, id) => deleteBuilderScript(id));
ipcMain.handle("open-builder-script-vscode", (_event, script) => openBuilderScriptInVsCode(script));

app.whenReady().then(() => startAssetServer().then(createWindow));

app.on("window-all-closed", () => {
  if (assetServer) assetServer.close();
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

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
  const roots = [];
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
  if (/artix game launcher/i.test(filePath)) return process.env.VEYRA_PEPPER_FLASH_VERSION || "32.0.0.371";
  const parts = dirname(filePath).split(/[\\/]/).reverse();
  const folderVersion = parts.find((part) => /^\d+\.\d+\.\d+\.\d+$/.test(part));
  if (folderVersion) return folderVersion;
  const fileVersion = filePath.match(/_(\d+)_(\d+)_(\d+)_(\d+)\.dll$/i);
  return fileVersion ? `${fileVersion[1]}.${fileVersion[2]}.${fileVersion[3]}.${fileVersion[4]}` : "34.0.0.330";
}

function installFlashTrust() {
  const trustDir = getFlashTrustDir();
  if (!trustDir) return;

  try {
    mkdirSync(trustDir, { recursive: true });
    const trustedPaths = [
      rootDir,
      join(rootDir, "apps", "veyra"),
      join(rootDir, "apps", "windows-bridge"),
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
    const winRoot = process.env.SystemRoot || "C:\\Windows";
    files.push(join(winRoot, "System32", "Macromed", "Flash", "mms.cfg"));
    files.push(join(winRoot, "SysWOW64", "Macromed", "Flash", "mms.cfg"));
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
