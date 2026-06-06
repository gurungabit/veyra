import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "DoomwoodREP",
  description: "Farms DoomWood reputation to Rank 10 from Shadowfall War repeatable quests.",
  tags: ["reputation", "rep", "doomwood", "shadowfallwar"],
  version: "2026.06.06.1"
};

export interface DoomwoodRepOptions extends ZeroToHeroRuntimeOptions {
  targetRank?: number;
}

export async function main(bot: Bot, options: DoomwoodRepOptions = {}): Promise<void> {
  await new ZeroToHeroRuntime(bot, options).doomwoodRep(options.targetRank ?? 10, "DoomwoodREP");
}
