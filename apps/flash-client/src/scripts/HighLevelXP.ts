import type { Bot, PlayerSnapshot } from "../bot.js";

export const meta = {
  name: "HighLevelXP",
  description: "Leveling.cs/CoreFarms.cs high-level XP route for icestormunder.",
  tags: ["leveling", "xp", "icestormunder"],
  version: "0.1.0"
};

export interface HighLevelXPOptions {
  targetLevel?: number;
  signal?: AbortSignal;
}

export async function main(bot: Bot, options: HighLevelXPOptions = {}): Promise<void> {
  const targetLevel = clampTargetLevel(options.targetLevel ?? 100);
  bot.log(`Starting ${meta.name}: icestormunder until level ${targetLevel}.`);

  let snapshot = await bot.waitForLogin(options.signal);
  if (snapshot.level >= targetLevel) {
    bot.log(`Already level ${snapshot.level}; target ${targetLevel} is complete.`);
    return;
  }

  while (!options.signal?.aborted) {
    snapshot = await bot.snapshot();
    if (!snapshot.loggedIn) snapshot = await bot.waitForLogin(options.signal);
    if (snapshot.level >= targetLevel) {
      bot.log(`Reached target level ${targetLevel}.`);
      return;
    }

    await ensureIceStormUnder(bot, snapshot, options.signal);
    await bot.attack("*");
    await bot.useAvailableSkills();
    await bot.delay(450, options.signal);
  }
}

async function ensureIceStormUnder(bot: Bot, snapshot: PlayerSnapshot, signal?: AbortSignal): Promise<void> {
  if (!snapshot.alive) {
    bot.log("Waiting for respawn.");
    await bot.delay(1000, signal);
    return;
  }

  if (snapshot.map.toLowerCase() !== "icestormunder") {
    await bot.join("icestormunder", "r2", "Top");
    await bot.delay(1500, signal);
    return;
  }

  if (snapshot.cell !== "r2") {
    await bot.jump("r2", "Top");
    await bot.delay(600, signal);
  }
}

function clampTargetLevel(level: number): number {
  if (!Number.isFinite(level)) return 100;
  return Math.max(75, Math.min(Math.floor(level), 100));
}
