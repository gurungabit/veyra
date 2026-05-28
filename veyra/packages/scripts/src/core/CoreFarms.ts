import type { Bot } from "@veyra/core";
import { CoreBots } from "./CoreBots.js";

export interface ExperienceOptions {
  targetLevel?: number;
  rankUpClass?: boolean;
  signal?: AbortSignal;
  log?: (message: string) => void;
}

interface FarmRoute {
  minLevel: number;
  maxLevel: number;
  map: string;
  cell: string;
  pad: string;
  monster: string | number;
  label: string;
}

const experienceRoutes: FarmRoute[] = [
  { minLevel: 1, maxLevel: 10, map: "oaklore", cell: "r3", pad: "Left", monster: "Bone Berserker", label: "Oaklore Bone Berserker" },
  {
    minLevel: 10,
    maxLevel: 20,
    map: "swordhavenundead",
    cell: "Gates",
    pad: "Left",
    monster: "Undead Giant",
    label: "Swordhaven Undead Giant"
  },
  { minLevel: 20, maxLevel: 25, map: "icestormarena", cell: "r7", pad: "Left", monster: "*", label: "Ice Storm Arena r7" },
  { minLevel: 25, maxLevel: 30, map: "icestormarena", cell: "r10", pad: "Left", monster: "*", label: "Ice Storm Arena r10" },
  { minLevel: 30, maxLevel: 50, map: "icestormarena", cell: "r11", pad: "Left", monster: "*", label: "Ice Storm Arena r11" },
  { minLevel: 50, maxLevel: 61, map: "icestormarena", cell: "r16", pad: "Left", monster: "*", label: "Ice Storm Arena r16" },
  { minLevel: 61, maxLevel: 75, map: "battlegrounde", cell: "r2", pad: "center", monster: "*", label: "Battle Ground E" },
  { minLevel: 75, maxLevel: 101, map: "icestormunder", cell: "r2", pad: "Top", monster: "*", label: "Ice Storm Under" }
];

const highLevelXpRoute: FarmRoute = { minLevel: 75, maxLevel: 101, map: "icestormunder", cell: "r2", pad: "Top", monster: "*", label: "Ice Storm Under" };

export class CoreFarms {
  doGoldBoost = false;
  doClassBoost = false;
  doRepBoost = false;
  doExpBoost = false;

  private readonly core: CoreBots;

  constructor(private readonly bot: Bot) {
    this.core = new CoreBots(bot);
  }

  async farmMonster(map: string, monster: string, item: string, quantity = 1): Promise<void> {
    await this.core.join(map);
    while (!(await this.bot.inventory.contains(item, quantity))) {
      await this.core.kill(monster);
      await this.bot.wait.delay(this.core.actionDelay);
    }
  }

  async experience(options: ExperienceOptions = {}): Promise<void> {
    const targetLevel = clampLevel(options.targetLevel ?? 100);
    const log = options.log ?? ((message: string) => this.bot.log(message));
    let snapshot = await this.core.ensureLoggedIn(options.signal, log);

    if (!options.rankUpClass && snapshot.level >= targetLevel) {
      log(`Already level ${snapshot.level}; target level ${targetLevel} is complete.`);
      return;
    }

    log(`Starting XP farm from level ${snapshot.level} toward ${targetLevel}.`);
    while (!options.signal?.aborted) {
      snapshot = await this.bot.player.snapshot();
      if (!snapshot.loggedIn) {
        snapshot = await this.core.ensureLoggedIn(options.signal, log);
      }
      if (!options.rankUpClass && snapshot.level >= targetLevel) {
        log(`Reached target level ${targetLevel}.`);
        return;
      }
      if (options.rankUpClass && snapshot.currentClassRank >= 10) {
        log("Current class rank is 10.");
        return;
      }

      const route = selectExperienceRoute(snapshot.level);
      const routeCeiling = Math.min(route.maxLevel, targetLevel);
      log(`Farming ${route.label} until level ${routeCeiling}.`);
      await this.runExperienceRoute(route, routeCeiling, options);
    }
  }

  async icestormArena(targetLevel = 100, options: Omit<ExperienceOptions, "targetLevel"> = {}): Promise<void> {
    await this.experience({ ...options, targetLevel });
  }

  async highLevelXP(options: ExperienceOptions = {}): Promise<void> {
    const targetLevel = clampHighLevelTarget(options.targetLevel ?? 100);
    const log = options.log ?? ((message: string) => this.bot.log(message));
    let snapshot = await this.core.ensureLoggedIn(options.signal, log);

    if (!options.rankUpClass && snapshot.level >= targetLevel) {
      log(`Already level ${snapshot.level}; target level ${targetLevel} is complete.`);
      return;
    }

    log(`Starting HighLevelXP at icestormunder until level ${targetLevel}.`);
    while (!options.signal?.aborted) {
      snapshot = await this.bot.player.snapshot();
      if (!snapshot.loggedIn) {
        snapshot = await this.core.ensureLoggedIn(options.signal, log);
      }
      if (!options.rankUpClass && snapshot.level >= targetLevel) {
        log(`Reached target level ${targetLevel}.`);
        return;
      }
      if (options.rankUpClass && snapshot.currentClassRank >= 10) {
        log("Current class rank is 10.");
        return;
      }

      await this.runExperienceRoute(highLevelXpRoute, targetLevel, options);
    }
  }

  private async runExperienceRoute(route: FarmRoute, targetLevel: number, options: ExperienceOptions): Promise<void> {
    for (;;) {
      if (options.signal?.aborted) return;
      const snapshot = await this.bot.player.snapshot();
      if (!snapshot.loggedIn || (!options.rankUpClass && snapshot.level >= targetLevel) || (options.rankUpClass && snapshot.currentClassRank >= 10)) {
        return;
      }

      if (!snapshot.alive) {
        options.log?.("Waiting for respawn.");
        await this.bot.wait.delay(1000, options.signal);
        continue;
      }

      if (snapshot.map.toLowerCase() !== route.map.toLowerCase()) {
        await this.core.join(route.map, route.cell, route.pad);
      }

      const positioned = await this.bot.player.snapshot();
      if (positioned.cell !== route.cell) {
        await this.bot.map.jump(route.cell, route.pad);
        await this.bot.wait.delay(this.core.actionDelay, options.signal);
      }

      await this.bot.combat.attack(route.monster);
      await this.bot.combat.useAvailableSkills();
      await this.bot.wait.delay(450, options.signal);
    }
  }
}

function selectExperienceRoute(level: number): FarmRoute {
  return experienceRoutes.find((route) => level >= route.minLevel && level < route.maxLevel) ?? experienceRoutes.at(-1)!;
}

function clampLevel(level: number): number {
  if (!Number.isFinite(level)) return 100;
  return Math.max(1, Math.min(Math.floor(level), 100));
}

function clampHighLevelTarget(level: number): number {
  if (!Number.isFinite(level)) return 100;
  return Math.max(75, Math.min(Math.floor(level), 100));
}
