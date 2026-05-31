import { appendFileSync } from "node:fs";
import { env, exit } from "node:process";
import semanticRelease from "semantic-release";

const result = await semanticRelease({ dryRun: true, ci: true }, { env, cwd: process.cwd(), stdout: process.stdout, stderr: process.stderr });
const outputs = {
  should_release: result ? "true" : "false",
  version: result?.nextRelease?.version ?? "",
  tag: result?.nextRelease?.gitTag ?? ""
};

for (const [name, value] of Object.entries(outputs)) {
  console.log(`${name}=${value}`);
}

if (env.GITHUB_OUTPUT) {
  appendFileSync(env.GITHUB_OUTPUT, Object.entries(outputs).map(([name, value]) => `${name}=${value}`).join("\n") + "\n");
}

exit(0);
