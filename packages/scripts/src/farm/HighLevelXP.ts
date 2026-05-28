import type { Bot } from "@veyra/core";
import type { ScriptContext } from "@veyra/runtime";
import { CoreFarms } from "../core/CoreFarms.js";

export const meta = {
  name: "HighLevelXP",
  description: "CoreFarms high-level XP farm at icestormunder r2 Top.",
  tags: ["leveling", "xp", "experience", "icestormunder", "high-level"],
  version: "1.0.0"
};

export async function main(bot: Bot, context: ScriptContext): Promise<void> {
  context.log("Starting HighLevelXP.");
  const farms = new CoreFarms(bot);
  farms.doExpBoost = true;
  await farms.highLevelXP({
    targetLevel: 100,
    signal: context.signal,
    log: (message) => context.log(message)
  });
}
