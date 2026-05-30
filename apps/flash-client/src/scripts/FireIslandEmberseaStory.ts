import type { Bot } from "../bot.js";
import { FarmJoeRuntime, type FarmJoeRuntimeOptions } from "./FarmJoeKits/FarmJoeRuntime.js";
import { runFireIslandEmberseaStory } from "./Story/FireIsland.js";

export const meta = {
  name: "FireIslandEmberseaStory",
  description: "Completes the Fire Island Embersea story.",
  tags: ["story", "fire island", "embersea"],
  version: "0.1.0"
};

export async function main(bot: Bot, options: FarmJoeRuntimeOptions = {}): Promise<void> {
  await runFireIslandEmberseaStory(new FarmJoeRuntime(bot, options));
}
