import { createHash } from "node:crypto";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = resolve(repoRoot, "script-updates");
const channelVersion = "2026.06.01.0";

const packages = [
  {
    id: "free-acs",
    name: "Free ACs",
    version: channelVersion,
    outputFile: `free-acs-${channelVersion}.json`,
    scripts: [
      {
        id: "other.free-acs",
        category: "Official",
        map: "borgars",
        entry: "script-updates/src/FreeAcs.ts"
      }
    ]
  }
];

await removeOldGeneratedPackages();

const manifestPackages = [];
for (const pack of packages) {
  const moduleScripts = [];
  for (const script of pack.scripts) {
    const entry = resolve(repoRoot, script.entry);
    const source = await readFile(entry, "utf8");
    const meta = parseMeta(source, pack);
    const bundled = await bundleScript(entry);
    const sourceSha256 = sha256(bundled);
    moduleScripts.push({
      id: script.id,
      category: script.category,
      map: script.map,
      meta,
      source: bundled,
      sourceSha256
    });
  }

  const packageBody = {
    schema: 2,
    id: pack.id,
    name: pack.name,
    version: pack.version,
    type: "typescript-scripts",
    moduleScripts
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

async function bundleScript(entry) {
  const result = await build({
    entryPoints: [entry],
    absWorkingDir: repoRoot,
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "es2020",
    sourcemap: false,
    write: false,
    treeShaking: true,
    legalComments: "none",
    logLevel: "silent"
  });
  const output = result.outputFiles[0]?.text;
  if (!output) throw new Error(`esbuild did not produce output for ${entry}`);
  return output;
}

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

async function removeOldGeneratedPackages() {
  for (const entry of await readdir(outputDir)) {
    if (/^free-acs-.+\.json$/u.test(basename(entry))) await rm(resolve(outputDir, entry), { force: true });
  }
}
