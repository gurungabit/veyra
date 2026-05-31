import { readFileSync, writeFileSync } from "node:fs";

const version = process.argv[2] || process.env.RELEASE_VERSION;
if (!version || !/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(version)) {
  throw new Error(`Expected a semantic version, got: ${version || "(empty)"}`);
}

for (const file of ["package.json", "apps/flash-client/package.json"]) {
  const data = JSON.parse(readFileSync(file, "utf8"));
  data.version = version;
  writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

console.log(`Veyra release version ${version}`);
