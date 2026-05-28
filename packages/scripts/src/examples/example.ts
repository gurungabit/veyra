import type { Bot } from "@veyra/core";
import type { ScriptContext } from "@veyra/runtime";
export const meta = {
  name: "Example",
  description: "Minimal Veyra bridge and client smoke test.",
  tags: ["example"],
  version: "1.0.0"
};

export async function main(bot: Bot, context: ScriptContext): Promise<void> {
  context.log("Starting example script.");
  const health = await bot.flash.health();
  context.log(health.ready ? "Bridge reports client ready." : `Bridge not ready: ${health.detail ?? "unknown"}`);
  const callbackResult = await bot.flash.call("isTrue");
  context.log(`Flash callback round trip: ${String(callbackResult)}`);
  await bot.wait.delay(250, context.signal);
}
