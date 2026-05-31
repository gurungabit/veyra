import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";
import { allStoriesPlan } from "./Story/AllStoriesPlan.js";
import { runStorySteps } from "./Story/StoryRuntime.js";

export const meta = {
  name: "Complete All Stories",
  description: "Runs the broad Veyra story completion route.",
  tags: ["story", "quest", "complete", "all"],
  version: "0.1.0"
};

export async function main(bot: Bot, options: ZeroToHeroRuntimeOptions = {}): Promise<void> {
  await runStorySteps(new ZeroToHeroRuntime(bot, options), allStoriesPlan, "Complete All Stories");
}
