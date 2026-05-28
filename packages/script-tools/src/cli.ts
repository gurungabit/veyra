#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateManifest } from "./manifest.js";

const [, , command, rootArg, outputArg] = process.argv;

if (command !== "manifest" || !rootArg) {
  console.error("Usage: veyra-scripts manifest <scripts-root> [output]");
  process.exit(1);
}

const manifest = await generateManifest({ rootDir: resolve(rootArg) });
const json = `${JSON.stringify(manifest, null, 2)}\n`;

if (outputArg) {
  await writeFile(resolve(outputArg), json, "utf8");
} else {
  process.stdout.write(json);
}

