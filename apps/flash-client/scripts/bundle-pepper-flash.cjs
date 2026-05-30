const { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } = require("fs");
const { basename, dirname, isAbsolute, join, relative, resolve } = require("path");

const appDir = resolve(__dirname, "..");
const vendorRoot = join(appDir, "vendor", "pepper-flash");

const source = resolveSourcePlugin();

if (!source) {
  console.error("No PPAPI Pepper Flash plugin was found.");
  console.error("Install the Artix Games Launcher, or set VEYRA_PEPPER_FLASH to PepperFlashPlayer.plugin/pepflashplayer.dll.");
  process.exit(1);
}

const sourcePath = resolve(source);
const version = process.env.VEYRA_PEPPER_FLASH_VERSION || inferFlashVersion(sourcePath);

mkdirSync(vendorRoot, { recursive: true });

if (!isInside(sourcePath, vendorRoot)) {
  const target = join(vendorRoot, basename(sourcePath));
  rmSync(target, { recursive: true, force: true });
  cpSync(sourcePath, target, { recursive: true });
  copyPeerFile(sourcePath, "manifest.json");
}

writeFileSync(join(vendorRoot, "version.txt"), `${version}\n`);

console.log(`Bundled Pepper Flash ${version} into ${vendorRoot}`);

function resolveSourcePlugin() {
  const explicitPath = process.env.VEYRA_PEPPER_FLASH && resolve(process.env.VEYRA_PEPPER_FLASH);
  if (explicitPath) {
    if (!existsSync(explicitPath)) {
      console.error(`VEYRA_PEPPER_FLASH does not exist: ${explicitPath}`);
      process.exit(1);
    }
    return isPepperFlashPlugin(basename(explicitPath)) ? explicitPath : findPepperFlash(explicitPath);
  }

  for (const root of getPepperFlashSearchRoots()) {
    const plugin = findPepperFlash(root);
    if (plugin && !isInside(plugin, vendorRoot)) return plugin;
  }

  return "";
}

function getPepperFlashSearchRoots() {
  if (process.platform === "win32") {
    return [
      process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Artix Game Launcher", "resources", "plugins"),
      process.env["PROGRAMFILES(X86)"] && join(process.env["PROGRAMFILES(X86)"], "Artix Game Launcher", "resources", "plugins"),
      process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Google", "Chrome", "User Data", "PepperFlash"),
      process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Chromium", "User Data", "PepperFlash"),
      process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Microsoft", "Edge", "User Data", "PepperFlash"),
      process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Google", "Chrome", "Application"),
      process.env["PROGRAMFILES(X86)"] && join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application"),
      process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Microsoft", "Edge", "Application"),
      process.env["PROGRAMFILES(X86)"] && join(process.env["PROGRAMFILES(X86)"], "Microsoft", "Edge", "Application")
    ].filter(Boolean);
  }

  if (process.platform === "darwin") {
    return [
      "/Applications/Artix Game Launcher.app/Contents/Resources/plugins",
      "/Applications/Artix Game Launcher.app/Contents/Resources/app.asar.unpacked/plugins",
      "/Applications/Artix Game Launcher.app/Contents/Resources",
      process.env.HOME && join(process.env.HOME, "Applications", "Artix Game Launcher.app", "Contents", "Resources", "plugins"),
      process.env.HOME && join(process.env.HOME, "Applications", "Artix Game Launcher.app", "Contents", "Resources", "app.asar.unpacked", "plugins"),
      process.env.HOME && join(process.env.HOME, "Library", "Application Support", "Google", "Chrome", "PepperFlash"),
      process.env.HOME && join(process.env.HOME, "Library", "Application Support", "Chromium", "PepperFlash"),
      "/Library/Internet Plug-Ins/PepperFlashPlayer",
      "/Library/Internet Plug-Ins"
    ].filter(Boolean);
  }

  return [];
}

function findPepperFlash(base) {
  try {
    const stack = [base];
    while (stack.length > 0) {
      const current = stack.pop();
      const entries = readdirSync(current, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(current, entry.name);
        if (isPepperFlashPlugin(entry.name)) return fullPath;
        if (entry.isDirectory()) stack.push(fullPath);
      }
    }
  } catch {
    return "";
  }
  return "";
}

function isPepperFlashPlugin(name) {
  const lower = name.toLowerCase();
  return /^pepflashplayer.*\.dll$/.test(lower) || lower === "pepperflashplayer.plugin";
}

function inferFlashVersion(filePath) {
  const metadataVersion = readVersionMetadata(filePath);
  if (metadataVersion) return metadataVersion;
  if (/artix game launcher/i.test(filePath)) return "32.0.0.371";
  const parts = dirname(filePath).split(/[\\/]/).reverse();
  const folderVersion = parts.find((part) => /^\d+\.\d+\.\d+\.\d+$/.test(part));
  if (folderVersion) return folderVersion;
  const fileVersion = filePath.match(/_(\d+)_(\d+)_(\d+)_(\d+)\.dll$/i);
  return fileVersion ? `${fileVersion[1]}.${fileVersion[2]}.${fileVersion[3]}.${fileVersion[4]}` : "34.0.0.330";
}

function readVersionMetadata(filePath) {
  const dirs = [];
  try {
    if (existsSync(filePath) && statSync(filePath).isDirectory()) dirs.push(filePath);
  } catch {
    // Keep falling back through the parent metadata locations.
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
        const match = readFileSync(manifestFile, "utf8").match(/"version"\s*:\s*"([^"]+)"/);
        if (match) return match[1];
      }
    } catch {
      // Ignore malformed metadata and keep searching.
    }
  }

  return "";
}

function copyPeerFile(sourcePath, fileName) {
  const sourcePeer = join(dirname(sourcePath), fileName);
  if (!existsSync(sourcePeer)) return;
  cpSync(sourcePeer, join(vendorRoot, fileName));
}

function isInside(child, parent) {
  const childPath = resolve(child);
  const parentPath = resolve(parent);
  const pathDiff = relative(parentPath, childPath);
  return pathDiff === "" || (pathDiff && !pathDiff.startsWith("..") && !isAbsolute(pathDiff));
}
