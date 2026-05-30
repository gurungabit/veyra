const { existsSync, readdirSync, statSync } = require("node:fs");
const { basename, join, resolve } = require("node:path");

const appDir = resolve(__dirname, "..");
const platform = platformArg();
const platforms = platform === "all" ? ["darwin", "win32"] : [platform];
const requiredFiles = [
  join(appDir, "client.swf"),
  join(appDir, "dist", "renderer.js"),
  join(appDir, "dist", "toolWindow.js"),
  join(appDir, "src", "index.html"),
  join(appDir, "src", "tool.html"),
  join(appDir, "src", "styles.css"),
  join(appDir, "main.cjs"),
  join(appDir, "preload.cjs")
];

let ok = true;

for (const filePath of requiredFiles) {
  if (!existsSync(filePath)) {
    ok = false;
    console.error(`Missing package asset: ${filePath}`);
  }
}

if (process.env.VEYRA_ALLOW_EXTERNAL_FLASH !== "1") {
  for (const targetPlatform of platforms) {
    const plugin = findBundledPepperFlash(targetPlatform);
    if (!plugin) {
      ok = false;
      console.error(`Missing bundled ${pepperFlashLabel(targetPlatform)}.`);
      console.error(
        `Set VEYRA_PEPPER_FLASH to that plugin path and run "pnpm flash:bundle", or set VEYRA_ALLOW_EXTERNAL_FLASH=1 to build without bundling Flash.`
      );
    }
  }
}

if (!ok) process.exit(1);

console.log(`Package assets verified for ${platforms.join(", ")}.`);

function platformArg() {
  const flag = process.argv.find((arg) => arg.startsWith("--platform="));
  const value = flag ? flag.slice("--platform=".length) : process.platform;
  if (value === "mac" || value === "macos") return "darwin";
  if (value === "win" || value === "windows") return "win32";
  if (value === "all") return "all";
  return value;
}

function findBundledPepperFlash(targetPlatform) {
  const vendorRoot = join(appDir, "vendor", "pepper-flash");
  if (!existsSync(vendorRoot)) return "";
  return findFile(vendorRoot, (filePath) => isPepperFlashPlugin(targetPlatform, basename(filePath)));
}

function findFile(root, predicate) {
  try {
    const stack = [root];
    while (stack.length > 0) {
      const current = stack.pop();
      for (const entry of readdirSync(current, { withFileTypes: true })) {
        const fullPath = join(current, entry.name);
        if (entry.isDirectory()) {
          if (predicate(fullPath)) return fullPath;
          stack.push(fullPath);
          continue;
        }
        if (entry.isFile() && predicate(fullPath) && statSync(fullPath).size > 0) return fullPath;
      }
    }
  } catch {
    return "";
  }
  return "";
}

function isPepperFlashPlugin(targetPlatform, name) {
  const lower = name.toLowerCase();
  if (targetPlatform === "darwin") return lower === "pepperflashplayer.plugin";
  if (targetPlatform === "win32") return /^pepflashplayer.*\.dll$/.test(lower);
  return false;
}

function pepperFlashLabel(targetPlatform) {
  if (targetPlatform === "darwin") return "macOS PepperFlashPlayer.plugin";
  if (targetPlatform === "win32") return "Windows pepflashplayer.dll";
  return `${targetPlatform} Pepper Flash plugin`;
}
