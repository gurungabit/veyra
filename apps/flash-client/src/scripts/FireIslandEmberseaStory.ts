import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";
import { runFireIslandEmberseaStory } from "./Story/FireIsland.js";

export const meta = {
  name: "FireIslandEmberseaStory",
  description: "Completes the Fire Island Embersea story.",
  tags: ["story", "fire island", "embersea"],
  version: "0.1.0"
};

export async function main(bot: Bot, options: ZeroToHeroRuntimeOptions = {}): Promise<void> {
  await runFireIslandEmberseaStory(new ZeroToHeroRuntime(bot, options));
}
