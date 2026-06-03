import type { Bot } from "../../bot.js";
import { CoreZeroToHero } from "./CoreZeroToHero.js";
import type { ZeroToHeroRuntimeOptions } from "./ZeroToHeroRuntime.js";

export const meta = {
  name: "ZeroToHeroKit0DoAll",
  description: "Runs the full Veyra ZeroToHero progression kit.",
  tags: ["zero-to-hero", "do all", "progression"],
  version: "2026.06.03.4"
};

export async function main(bot: Bot, options: ZeroToHeroRuntimeOptions = {}): Promise<void> {
  await new CoreZeroToHero(bot, options).doAll();
}
