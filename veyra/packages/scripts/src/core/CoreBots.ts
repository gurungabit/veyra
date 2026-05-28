import type { Bot, PlayerSnapshot } from "@veyra/core";

export class CoreBots {
  actionDelay = 700;
  exitCombatDelay = 1600;

  constructor(private readonly bot: Bot) {}

  runCore(): void {
    this.bot.log("Core runtime initialized.");
  }

  async join(map: string, cell = "Enter", pad = "Spawn"): Promise<void> {
    await this.bot.map.join(map, cell, pad);
    await this.bot.wait.forMapLoad();
  }

  async jump(cell = "Enter", pad = "Spawn"): Promise<void> {
    await this.bot.map.jump(cell, pad);
    await this.bot.wait.delay(this.actionDelay);
  }

  async kill(monster = "*"): Promise<void> {
    await this.bot.combat.attack(monster);
  }

  async ensureLoggedIn(signal?: AbortSignal, log: (message: string) => void = (message) => this.bot.log(message)): Promise<PlayerSnapshot> {
    let announced = false;
    for (;;) {
      const snapshot = await this.bot.player.snapshot();
      if (snapshot.loggedIn && snapshot.username && snapshot.level > 0) {
        return snapshot;
      }

      if (!announced) {
        log("Waiting for a logged-in character before starting.");
        announced = true;
      }
      await this.bot.wait.delay(1000, signal);
    }
  }

  async ensureItem(name: string, quantity = 1): Promise<boolean> {
    return this.bot.inventory.contains(name, quantity);
  }
}
