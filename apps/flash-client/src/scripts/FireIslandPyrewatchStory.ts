import type { Bot } from "../bot.js";
import { FarmJoeRuntime, type FarmJoeRuntimeOptions } from "./FarmJoeKits/FarmJoeRuntime.js";
import { runFireIslandPyrewatchStory } from "./Story/FireIsland.js";

export const meta = {
  name: "FireIslandPyrewatchStory",
  description: "Completes Fire Island story through Pyrewatch and unlocks Spreading Like Wildfire.",
  tags: ["story", "fire island", "embersea", "pyrewatch", "spreading like wildfire"],
  version: "0.1.0"
};

export async function main(bot: Bot, options: FarmJoeRuntimeOptions = {}): Promise<void> {
  await runFireIslandPyrewatchStory(new FarmJoeRuntime(bot, options), true);
}
