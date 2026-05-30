const { existsSync } = require("node:fs");
const { delimiter, join, resolve } = require("node:path");
const { spawnSync } = require("node:child_process");

const appDir = resolve(__dirname, "..");
const rootDir = resolve(appDir, "../..");
const flexHome = resolveFlexHome();
const playerGlobalHome = resolve(process.env.PLAYERGLOBAL_HOME || join(flexHome, "frameworks", "libs", "player"));
const compiler = resolveCompiler(flexHome);
const sourceRoot = join(appDir, "as3-client", "src");
const mainSource = join(sourceRoot, "veyra", "Main.as");
const output = join(appDir, "client.swf");
const targetPlayer = process.env.VEYRA_SWF_TARGET_PLAYER || "32.0";

if (!existsSync(mainSource)) {
  throw new Error(`AS3 client source was not found at ${mainSource}`);
}

const env = {
  ...process.env,
  FLEX_HOME: flexHome,
  PLAYERGLOBAL_HOME: playerGlobalHome,
  PATH: buildPath(process.env.PATH || "")
};

const args = [
  `+env.PLAYERGLOBAL_HOME=${playerGlobalHome}`,
  "-source-path",
  sourceRoot,
  "-default-size",
  "958",
  "550",
  "-output",
  output,
  mainSource,
  "-target-player",
  targetPlayer,
  "-optimize"
];

const result = spawnSync(compiler, args, {
  env,
  shell: process.platform === "win32",
  stdio: "inherit"
});

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

console.log(`Built ${output}`);

function resolveFlexHome() {
  const candidates = [
    process.env.FLEX_HOME,
    process.env.AS3_SDK,
    join(rootDir, ".toolchains", "apache-flex-sdk-4.16.1-bin"),
    join(rootDir, "..", ".toolchains", "apache-flex-sdk-4.16.1-bin"),
    join(rootDir, ".as3-sdk"),
    join(rootDir, "..", ".as3-sdk")
  ].filter(Boolean);

  for (const candidate of candidates) {
    const resolved = resolve(candidate);
    if (existsSync(resolveCompiler(resolved))) return resolved;
  }

  throw new Error(
    "Apache Flex SDK was not found. Set FLEX_HOME to the SDK root, or install it under .toolchains/apache-flex-sdk-4.16.1-bin."
  );
}

function resolveCompiler(sdkRoot) {
  return join(sdkRoot, "bin", process.platform === "win32" ? "mxmlc.bat" : "mxmlc");
}

function buildPath(existingPath) {
  if (process.platform !== "darwin") return existingPath;
  const javaBins = [
    "/opt/homebrew/opt/openjdk@21/bin",
    "/usr/local/opt/openjdk@21/bin",
    "/opt/homebrew/opt/openjdk/bin",
    "/usr/local/opt/openjdk/bin"
  ].filter((candidate) => existsSync(candidate));
  return [...javaBins, existingPath].filter(Boolean).join(delimiter);
}
