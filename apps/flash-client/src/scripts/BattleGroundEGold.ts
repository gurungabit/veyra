import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "BattleGroundEGold",
  description: "Farms gold using ZeroToHero's BattleGroundE quest route. Requires level 61+.",
  tags: ["gold", "farm", "battlegrounde", "zero-to-hero"],
  version: "2026.06.10.3"
};

export interface BattleGroundEGoldOptions extends ZeroToHeroRuntimeOptions {
  targetGold?: number;
}

export async function main(bot: Bot, options: BattleGroundEGoldOptions = {}): Promise<void> {
  await new ZeroToHeroRuntime(bot, options).battleGroundEGold(options.targetGold ?? 100000000);
}
