import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { AppDirectories, ScriptInfo } from "./models.js";

export interface ScriptSourceConfig {
  manifestUrl: string;
}

export interface ScriptCatalogOptions {
  source?: ScriptSourceConfig;
  directories: AppDirectories;
}

export class ScriptCatalog {
  constructor(private readonly options: ScriptCatalogOptions) {}

  async fetchManifest(signal?: AbortSignal): Promise<ScriptInfo[]> {
    if (!this.options.source?.manifestUrl) {
      return [];
    }

    const response = await fetch(this.options.source.manifestUrl, signal ? { signal } : undefined);
    if (!response.ok) {
      throw new Error(`Script manifest request failed with HTTP ${response.status}.`);
    }

    return (await response.json()) as ScriptInfo[];
  }

  async download(script: ScriptInfo, signal?: AbortSignal): Promise<string> {
    if (!script.downloadUrl) {
      throw new Error(`Script ${script.name} has no download URL.`);
    }

    const response = await fetch(script.downloadUrl, signal ? { signal } : undefined);
    if (!response.ok) {
      throw new Error(`Script download failed with HTTP ${response.status}.`);
    }

    const content = await response.text();
    const target = join(this.options.directories.scripts, script.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, content, "utf8");
    return target;
  }

  async isOutdated(script: ScriptInfo): Promise<boolean> {
    const target = join(this.options.directories.scripts, script.path);
    try {
      const content = await readFile(target);
      if (content.byteLength !== script.size) return true;
      if (!script.sha256) return false;
      const hash = createHash("sha256").update(content).digest("hex");
      return hash !== script.sha256;
    } catch {
      return true;
    }
  }
}
