import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import type { ScriptInfo, ScriptMetadata } from "@veyra/core";

export interface ManifestOptions {
  rootDir: string;
  baseDownloadUrl?: string;
}

export async function generateManifest(options: ManifestOptions): Promise<ScriptInfo[]> {
  const files = await listTypeScriptFiles(options.rootDir);
  const scripts: ScriptInfo[] = [];

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const metadata = parseTypeScriptMetadata(source);
    if (!metadata) continue;

    const path = relative(options.rootDir, file).replace(/\\/g, "/");
    const bytes = Buffer.from(source.replace(/\u200B|\uFEFF/g, ""), "utf8");
    const scriptInfo: ScriptInfo = {
      ...metadata,
      path,
      fileName: path.split("/").at(-1) ?? path,
      size: bytes.byteLength,
      sha256: createHash("sha256").update(bytes).digest("hex")
    };
    if (options.baseDownloadUrl) {
      scriptInfo.downloadUrl = `${options.baseDownloadUrl.replace(/\/$/, "")}/${path}`;
    }
    scripts.push(scriptInfo);
  }

  return scripts.sort((a, b) => a.path.localeCompare(b.path));
}

async function listTypeScriptFiles(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = join(rootDir, entry.name);
    if (entry.isDirectory()) files.push(...(await listTypeScriptFiles(fullPath)));
    if (entry.isFile() && entry.name.endsWith(".ts") && !entry.name.endsWith(".d.ts")) files.push(fullPath);
  }
  return files;
}

function parseTypeScriptMetadata(source: string): ScriptMetadata | null {
  const metaObject = source.match(/export\s+const\s+meta\s*=\s*({[\s\S]*?});/);
  if (!metaObject?.[1]) return null;

  const name = readStringProperty(metaObject[1], "name") ?? "Unnamed";
  const description = readStringProperty(metaObject[1], "description") ?? "No description provided.";
  const version = readStringProperty(metaObject[1], "version");
  const tags = readArrayProperty(metaObject[1], "tags");

  const metadata: ScriptMetadata = {
    name,
    description,
    tags: tags.length > 0 ? tags : ["no-tags"]
  };
  if (version) {
    metadata.version = version;
  }
  return metadata;
}

function readStringProperty(source: string, key: string): string | undefined {
  return source.match(new RegExp(`${key}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`))?.[1];
}

function readArrayProperty(source: string, key: string): string[] {
  const array = source.match(new RegExp(`${key}\\s*:\\s*\\[([\\s\\S]*?)\\]`))?.[1];
  if (!array) return [];
  return [...array.matchAll(/["'`]([^"'`]+)["'`]/g)].map((match) => match[1] ?? "").filter(Boolean);
}
