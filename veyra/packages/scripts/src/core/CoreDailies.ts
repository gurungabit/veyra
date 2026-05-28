import type { Bot } from "@veyra/core";
import { CoreBots } from "./CoreBots.js";

export class CoreDailies {
  skipOnMaxStack = true;
  private readonly core: CoreBots;

  constructor(private readonly bot: Bot) {
    this.core = new CoreBots(bot);
  }

  async dailyRoutine(questId: number, map: string, monster: string, item: string, quantity = 1): Promise<void> {
    await this.bot.quests.accept(questId);
    await this.core.join(map);
    while (!(await this.bot.inventory.contains(item, quantity))) {
      await this.core.kill(monster);
      await this.bot.wait.delay(this.core.actionDelay);
    }
    await this.bot.quests.complete(questId);
  }
}

