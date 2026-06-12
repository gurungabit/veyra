import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "ArchPaladin",
  description: "Farms the full ArchPaladin questline and buys the class.",
  tags: ["good", "paladin", "archpaladin", "class", "support", "tank"],
  version: "2026.06.11.10"
};

export interface ArchPaladinOptions extends ZeroToHeroRuntimeOptions {}

export async function main(bot: Bot, options: ArchPaladinOptions = {}): Promise<void> {
  const runtime = new ZeroToHeroRuntime(bot, options);
  await runtime.ensureLoggedIn();
  runtime.log("Starting ArchPaladin farm.");
  await runtime.runTask("ArchPaladin.GetAP", "ArchPaladin");
  runtime.log("ArchPaladin farm complete.");
}
