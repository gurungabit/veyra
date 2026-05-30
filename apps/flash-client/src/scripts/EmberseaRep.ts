import type { Bot } from "../bot.js";
import { FarmJoeRuntime, type FarmJoeRuntimeOptions } from "./FarmJoeKits/FarmJoeRuntime.js";
import { runEmberseaRep } from "./Reputation/Embersea.js";

export const meta = {
  name: "EmberseaREP",
  description: "Farms Embersea reputation to Rank 10 for Flame Sigil and Blaze Binder.",
  tags: ["reputation", "rep", "embersea", "fireforge", "pyrewatch", "flame sigil"],
  version: "0.1.0"
};

export interface EmberseaRepOptions extends FarmJoeRuntimeOptions {
  targetRank?: number;
}

export async function main(bot: Bot, options: EmberseaRepOptions = {}): Promise<void> {
  await runEmberseaRep(new FarmJoeRuntime(bot, options), options.targetRank ?? 10);
}
