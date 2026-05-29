const { existsSync, writeFileSync } = require("fs");
const { dirname, join } = require("path");

try {
  const electronEntry = require.resolve("electron");
  const electronRoot = dirname(electronEntry);
  const pathFile = join(electronRoot, "path.txt");
  const electronExe = join(electronRoot, "dist", "electron.exe");

  if (process.platform === "win32" && existsSync(pathFile) && existsSync(electronExe)) {
    writeFileSync(pathFile, "electron.exe");
  }
} catch (error) {
  console.warn("Unable to normalize Electron executable path.", error);
}
