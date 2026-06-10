import { createHash } from "node:crypto";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = resolve(repoRoot, "script-updates");
const configPath = resolve(outputDir, "packages.json");
const scriptsRoot = resolve(repoRoot, "apps/flash-client/src/scripts");
const storyIndexPath = resolve(repoRoot, "apps/flash-client/src/scripts/Story/index.ts");
let officialScriptCache;

const officialCoreScripts = [
  {
    id: "leveling.high-level-xp",
    category: "Leveling",
    map: "icestormunder",
    entry: "apps/flash-client/src/scripts/HighLevelXP.ts"
  },
  {
    id: "leveling.class-xp",
    category: "Leveling",
    map: "icestormunder",
    entry: "apps/flash-client/src/scripts/ClassXP.ts"
  },
  {
    id: "gold.battlegrounde",
    category: "Gold",
    map: "battlegrounde",
    entry: "apps/flash-client/src/scripts/BattleGroundEGold.ts"
  },
  {
    id: "reputation.embersea",
    category: "Reputation",
    map: "fireforge / pyrewatch",
    entry: "apps/flash-client/src/scripts/EmberseaRep.ts"
  },
  {
    id: "reputation.doomwood",
    category: "Reputation",
    map: "shadowfallwar",
    entry: "apps/flash-client/src/scripts/DoomwoodRep.ts"
  },
  {
    id: "reputation.horc",
    category: "Reputation",
    map: "bloodtuskwar",
    entry: "apps/flash-client/src/scripts/HorcRep.ts"
  },
  {
    id: "story.complete-all-stories",
    category: "Story",
    map: "all",
    entry: "apps/flash-client/src/scripts/AllStories.ts"
  },
  {
    id: "story.fire-island-embersea",
    category: "Story",
    map: "embersea",
    entry: "apps/flash-client/src/scripts/FireIslandEmberseaStory.ts"
  },
  {
    id: "story.fire-island-pyrewatch",
    category: "Story",
    map: "embersea / pyrewatch",
    entry: "apps/flash-client/src/scripts/FireIslandPyrewatchStory.ts"
  },
  {
    id: "zero-to-hero.do-all",
    category: "ZeroToHeroKits",
    map: "icestormunder",
    entry: "apps/flash-client/src/scripts/ZeroToHeroKits/ZeroToHeroKit0DoAll.ts"
  },
  {
    id: "other.free-boost-10m",
    category: "Official",
    map: "bloodtusk / cloister / nibbleon",
    entry: "apps/flash-client/src/scripts/FreeBoost10m.ts"
  }
];

const config = await readPackageConfig();
const channelVersion = config.channelVersion;
const packages = config.packages;

await removeOldGeneratedPackages(packages);

const manifestPackages = [];
for (const pack of packages) {
  const modules = await buildModuleSources();
  const moduleScripts = [];
  for (const script of pack.scripts) {
    const entry = resolve(repoRoot, script.entry);
    const typeScriptSource = await readFile(entry, "utf8");
    const meta = parseMeta(typeScriptSource, pack);
    moduleScripts.push({
      id: script.id,
      category: script.category,
      map: script.map,
      meta,
      modulePath: modulePathForEntry(script.entry)
    });
  }

  const packageBody = {
    schema: 2,
    id: pack.id,
    name: pack.name,
    version: pack.version,
    type: "module-scripts",
    modules,
    moduleScripts
  };
  const packageJson = `${JSON.stringify(packageBody, null, 2)}\n`;
  await writeFile(resolve(outputDir, pack.outputFile), packageJson, "utf8");
  manifestPackages.push({
    id: pack.id,
    name: pack.name,
    version: pack.version,
    type: "module-scripts",
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
    description: readStringProperty(meta, "description") || "Downloaded script.",
    tags: readArrayProperty(meta, "tags"),
    version: readStringProperty(meta, "version") || pack.version
  };
}

async function buildModuleSources() {
  const outdir = resolve(repoRoot, ".script-update-build");
  const entryPoints = await allTypeScriptFiles(scriptsRoot);
  const result = await build({
    absWorkingDir: repoRoot,
    entryPoints,
    bundle: false,
    format: "esm",
    platform: "browser",
    target: "es2020",
    outbase: scriptsRoot,
    outdir,
    entryNames: "[dir]/[name]",
    write: false,
    treeShaking: true,
    legalComments: "none",
    logLevel: "silent"
  });
  const modules = [];
  for (const file of result.outputFiles || []) {
    const path = normalizePath(relative(outdir, file.path));
    if (!path || !path.endsWith(".js")) continue;
    const source = file.text;
    modules.push({ path, source, sourceSha256: sha256(source) });
  }
  modules.sort((left, right) => left.path.localeCompare(right.path));
  if (modules.length === 0) throw new Error("Script module build did not produce modules.");
  return modules;
}

async function allTypeScriptFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await allTypeScriptFiles(fullPath)));
    else if (entry.isFile() && extname(entry.name) === ".ts") files.push(fullPath);
  }
  return files;
}

function modulePathForEntry(entry) {
  const absolute = resolve(repoRoot, entry);
  const normalizedAbsolute = normalizePath(absolute);
  const normalizedScriptsRoot = normalizePath(scriptsRoot);
  if (!normalizedAbsolute.startsWith(`${normalizedScriptsRoot}/`))
    throw new Error(`Script entry must live under apps/flash-client/src/scripts/: ${entry}`);
  return normalizePath(relative(scriptsRoot, resolve(dirname(absolute), `${basename(absolute, ".ts")}.js`)));
}

function normalizePath(value) {
  return String(value || "").replace(/\\/g, "/");
}

function readStringProperty(source, key) {
  return source.match(new RegExp(`["'\`]?${escapeRegExp(key)}["'\`]?\\s*:\\s*["'\`]([^"'\`]+)["'\`]`))?.[1];
}

function readArrayProperty(source, key) {
  const array = source.match(new RegExp(`["'\`]?${escapeRegExp(key)}["'\`]?\\s*:\\s*\\[([\\s\\S]*?)\\]`))?.[1];
  if (!array) return [];
  return [...array.matchAll(/["'`]([^"'`]+)["'`]/g)].map((match) => match[1]).filter(Boolean);
}

function sha256(value) {
  return createHash("sha256").update(value, "utf8").digest("hex");
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
  const packages = [];
  for (const pack of rawPackages) packages.push(await normalizePackageConfig(pack, channelVersion));
  if (packages.length === 0) throw new Error("script-updates/packages.json must define at least one package.");

  return { channelVersion, packages };
}

async function normalizePackageConfig(value, channelVersion) {
  if (!value || typeof value !== "object") throw new Error("Script package entries must be objects.");

  const id = cleanId(value.id);
  if (!id) throw new Error("Script package entries need an id.");
  const version = cleanVersion(value.version) || channelVersion;
  const configuredScripts = Array.isArray(value.scripts) ? value.scripts.map(normalizeScriptConfig) : [];
  const scripts = mergeScriptConfigs(value.includeOfficialScripts ? [...configuredScripts, ...(await officialScriptConfigs())] : configuredScripts);
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

async function officialScriptConfigs() {
  if (officialScriptCache) return officialScriptCache;
  officialScriptCache = mergeScriptConfigs([...officialCoreScripts, ...(await generatedStoryScriptConfigs())]);
  return officialScriptCache;
}

async function generatedStoryScriptConfigs() {
  const indexSource = await readFile(storyIndexPath, "utf8");
  const imports = [...indexSource.matchAll(/import\s+story\d+\s+from\s+["']\.\/(.+?)\.js["'];/g)];
  const scripts = [];
  for (const match of imports) {
    const storyPath = match[1];
    const entry = `apps/flash-client/src/scripts/Story/${storyPath}.ts`;
    const source = await readFile(resolve(repoRoot, entry), "utf8");
    const definition = definitionBlock(source);
    const id = cleanId(readStringProperty(definition, "id"));
    if (!id) continue;
    scripts.push({
      id,
      category: readStringProperty(definition, "category") || "Story",
      map: readStringProperty(definition, "map") || "",
      entry
    });
  }
  return scripts;
}

function definitionBlock(source) {
  return source.match(/defineGeneratedStory\(\s*\{([\s\S]*?)\}\s*,\s*steps\s*\)/)?.[1] || source;
}

function mergeScriptConfigs(scripts) {
  const byId = new Map();
  for (const script of scripts) byId.set(script.id, script);
  return Array.from(byId.values());
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
