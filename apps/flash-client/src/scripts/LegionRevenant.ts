import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "LegionRevenant",
  description: "Farms Legion Revenant using the SKua CoreLR route ported to Veyra.",
  tags: ["legion", "revenant", "fealty", "class", "lr"],
  version: "2026.06.11.9"
};

export interface LegionRevenantOptions extends ZeroToHeroRuntimeOptions {}

export async function main(bot: Bot, options: LegionRevenantOptions = {}): Promise<void> {
  const runtime = new ZeroToHeroRuntime(bot, options);
  await runtime.ensureLoggedIn();
  runtime.log("Starting Legion Revenant farm.");
  await runtime.runTask("CoreLR.GetLR", "Legion Revenant");
  runtime.log("Legion Revenant farm complete.");
}
