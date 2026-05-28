import type { Bot } from "@veyra/core";
import { CoreBots } from "./CoreBots.js";
import { CoreDailies } from "./CoreDailies.js";
import { CoreFarms } from "./CoreFarms.js";
import { CoreStory } from "./CoreStory.js";

export class CoreAdvanced {
  readonly core: CoreBots;
  readonly farms: CoreFarms;
  readonly dailies: CoreDailies;
  readonly story: CoreStory;

  constructor(bot: Bot) {
    this.core = new CoreBots(bot);
    this.farms = new CoreFarms(bot);
    this.dailies = new CoreDailies(bot);
    this.story = new CoreStory(bot);
  }
}

