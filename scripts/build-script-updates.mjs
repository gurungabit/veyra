import { createHash } from "node:crypto";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = resolve(repoRoot, "script-updates");
const configPath = resolve(outputDir, "packages.json");

const config = await readPackageConfig();
const channelVersion = config.channelVersion;
const packages = config.packages;

await removeOldGeneratedPackages(packages);

const manifestPackages = [];
for (const pack of packages) {
  const scripts = [];
  for (const script of pack.scripts) {
    const entry = resolve(repoRoot, script.entry);
    const source = await readFile(entry, "utf8");
    const meta = parseMeta(source, pack);
    scripts.push({
      id: script.id,
      category: script.category,
      map: script.map,
      meta,
      url: relativeScriptUpdateUrl(script.entry),
      sha256: sha256(source)
    });
  }

  const packageBody = {
    schema: 2,
    id: pack.id,
    name: pack.name,
    version: pack.version,
    type: "typescript-scripts",
    scripts
  };
  const packageJson = `${JSON.stringify(packageBody, null, 2)}\n`;
  await writeFile(resolve(outputDir, pack.outputFile), packageJson, "utf8");
  manifestPackages.push({
    id: pack.id,
    name: pack.name,
    version: pack.version,
    type: "typescript-scripts",
    url: pack.outputFile,
    sha256: sha256(packageJson)
  });
}

const manifest = {
  schema: 1,
  channel: "stable",
  version: channelVersion,
  packages: manifestPackages
};
await writeFile(resolve(outputDir, "stable.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

function parseMeta(source, pack) {
  const meta = source.match(/export\s+const\s+meta\s*=\s*({[\s\S]*?});/)?.[1] || "";
  return {
    name: readStringProperty(meta, "name") || pack.name,
    description: readStringProperty(meta, "description") || "Downloaded TypeScript script.",
    tags: readArrayProperty(meta, "tags"),
    version: readStringProperty(meta, "version") || pack.version
  };
}

function readStringProperty(source, key) {
  return source.match(new RegExp(`${key}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`))?.[1];
}

function readArrayProperty(source, key) {
  const array = source.match(new RegExp(`${key}\\s*:\\s*\\[([\\s\\S]*?)\\]`))?.[1];
  if (!array) return [];
  return [...array.matchAll(/["'`]([^"'`]+)["'`]/g)].map((match) => match[1]).filter(Boolean);
}

function sha256(value) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

function relativeScriptUpdateUrl(entry) {
  const normalized = String(entry || "").replace(/\\/g, "/");
  const prefix = "script-updates/";
  if (!normalized.startsWith(prefix)) throw new Error(`Script entry must live under ${prefix}: ${entry}`);
  return normalized.slice(prefix.length);
}

async function removeOldGeneratedPackages() {
  for (const entry of await readdir(outputDir)) {
    const name = basename(entry);
    if (packages.some((pack) => pack.generatedFilePattern.test(name) && name !== pack.outputFile)) {
      await rm(resolve(outputDir, entry), { force: true });
    }
  }
}

async function readPackageConfig() {
  const raw = JSON.parse(await readFile(configPath, "utf8"));
  const channelVersion = cleanVersion(raw.channelVersion);
  if (!channelVersion) throw new Error("script-updates/packages.json must define channelVersion.");

  const rawPackages = Array.isArray(raw.packages) ? raw.packages : [];
  const packages = rawPackages.map((pack) => normalizePackageConfig(pack, channelVersion));
  if (packages.length === 0) throw new Error("script-updates/packages.json must define at least one package.");

  return { channelVersion, packages };
}

function normalizePackageConfig(value, channelVersion) {
  if (!value || typeof value !== "object") throw new Error("Script package entries must be objects.");

  const id = cleanId(value.id);
  if (!id) throw new Error("Script package entries need an id.");
  const version = cleanVersion(value.version) || channelVersion;
  const scripts = Array.isArray(value.scripts) ? value.scripts.map(normalizeScriptConfig) : [];
  if (scripts.length === 0) throw new Error(`Script package ${id} must list at least one script.`);

  return {
    id,
    name: String(value.name || id),
    version,
    outputFile: String(value.outputFile || `${id}-${version}.json`),
    generatedFilePattern: new RegExp(`^${escapeRegExp(id)}-.+\\.json$`, "u"),
    scripts
  };
}

function normalizeScriptConfig(value) {
  if (!value || typeof value !== "object") throw new Error("Script entries must be objects.");
  const id = cleanId(value.id);
  const entry = String(value.entry || "").trim();
  if (!id || !entry) throw new Error("Script entries need id and entry.");
  return {
    id,
    category: String(value.category || "Official"),
    map: String(value.map || ""),
    entry
  };
}

function cleanId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanVersion(value) {
  return String(value || "").trim().replace(/^v/iu, "");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
