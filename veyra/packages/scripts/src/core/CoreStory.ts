import type { Bot } from "@veyra/core";
import { CoreBots } from "./CoreBots.js";

export class CoreStory {
  private readonly core: CoreBots;

  constructor(private readonly bot: Bot) {
    this.core = new CoreBots(bot);
  }

  async completeQuestChain(questIds: number[], map: string, monster = "*"): Promise<void> {
    await this.core.join(map);
    for (const questId of questIds) {
      await this.bot.quests.accept(questId);
      await this.core.kill(monster);
      await this.bot.quests.complete(questId);
    }
  }
}

