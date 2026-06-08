import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "HorcREP",
  description: "Farms Horc reputation to Rank 10 using the ZeroToHero Bloodtusk War route.",
  tags: ["reputation", "rep", "horc", "bloodtuskwar", "horc evader"],
  version: "2026.06.07.21"
};

export interface HorcRepOptions extends ZeroToHeroRuntimeOptions {
  targetRank?: number;
}

export async function main(bot: Bot, options: HorcRepOptions = {}): Promise<void> {
  await new ZeroToHeroRuntime(bot, options).horcRep(options.targetRank ?? 10, "HorcREP");
}
