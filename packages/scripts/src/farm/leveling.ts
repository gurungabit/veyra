import type { Bot } from "@veyra/core";
import type { ScriptContext } from "@veyra/runtime";
import { CoreFarms } from "../core/CoreFarms.js";

export const meta = {
  name: "Leveling [1-100]",
  description: "Farms XP to max level using the TypeScript leveling route.",
  tags: ["leveling", "level", "xp", "experience", "farm", "exp"],
  version: "1.0.0"
};

export async function main(bot: Bot, context: ScriptContext): Promise<void> {
  context.log("Starting XP farm.");
  const farms = new CoreFarms(bot);
  farms.doExpBoost = true;
  await farms.experience({
    targetLevel: 100,
    signal: context.signal,
    log: (message) => context.log(message)
  });
}
