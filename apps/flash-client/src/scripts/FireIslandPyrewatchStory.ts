import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";
import { runFireIslandPyrewatchStory } from "./Story/FireIsland.js";

export const meta = {
  name: "FireIslandPyrewatchStory",
  description: "Completes Fire Island story through Pyrewatch and unlocks Spreading Like Wildfire.",
  tags: ["story", "fire island", "embersea", "pyrewatch", "spreading like wildfire"],
  version: "0.1.0"
};

export async function main(bot: Bot, options: ZeroToHeroRuntimeOptions = {}): Promise<void> {
  await runFireIslandPyrewatchStory(new ZeroToHeroRuntime(bot, options), true);
}
