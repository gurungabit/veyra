import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "LegionRevenant",
  description: "Farms the full Legion Revenant Fealty questline and buys the class.",
  tags: ["legion", "revenant", "fealty", "class", "lr"],
  version: "2026.06.11.11"
};

export interface LegionRevenantOptions extends ZeroToHeroRuntimeOptions {}

export async function main(bot: Bot, options: LegionRevenantOptions = {}): Promise<void> {
  const runtime = new ZeroToHeroRuntime(bot, options);
  await runtime.ensureLoggedIn();
  runtime.log("Starting Legion Revenant farm.");
  await runtime.runTask("CoreLR.GetLR", "Legion Revenant");
  runtime.log("Legion Revenant farm complete.");
}
