import { join } from "node:path";
import { homedir } from "node:os";
import type { AppDirectories } from "./models.js";

export function getDefaultDataRoot(env: NodeJS.ProcessEnv = process.env): string {
  const appData = env.APPDATA;
  if (appData && appData.trim().length > 0) {
    return join(appData, "Veyra");
  }

  return join(homedir(), ".veyra");
}

export function getAppDirectories(root = getDefaultDataRoot()): AppDirectories {
  return {
    root,
    scripts: join(root, "Scripts"),
    settings: join(root, "Settings"),
    logs: join(root, "Logs"),
    plugins: join(root, "Plugins"),
    cache: join(root, "Cache"),
    scriptCommitFile: join(root, "scripts-commit.txt")
  };
}

