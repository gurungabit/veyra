import type { Bot, PlayerSnapshot } from "../bot.js";

export const meta = {
  name: "ClassXP",
  description: "Ranks the equipped class to rank 10 using the current high-level XP route.",
  tags: ["class", "class xp", "rank", "icestormunder"],
  version: "0.1.0"
};

export interface ClassXPOptions {
  targetRank?: number;
  signal?: AbortSignal;
}

export async function main(bot: Bot, options: ClassXPOptions = {}): Promise<void> {
  const targetRank = clampTargetRank(options.targetRank ?? 10);
  bot.log(`Starting ${meta.name}: equipped class until rank ${targetRank}.`);

  let snapshot = await bot.waitForLogin(options.signal);
  bot.log(`Equipped class: ${snapshot.currentClassName}; rank ${rankLabel(snapshot)}.`);

  while (!options.signal?.aborted) {
    snapshot = await bot.snapshot();
    if (!snapshot.loggedIn) snapshot = await bot.waitForLogin(options.signal);

    const rank = normalizedClassRank(snapshot);
    if (rank >= targetRank) {
      bot.log(`${snapshot.currentClassName} reached rank ${rank}.`);
      return;
    }

    await ensureClassXpRoute(bot, snapshot, options.signal);
    await bot.attack("*");
    await bot.useAvailableSkills();
    await bot.delay(450, options.signal);
  }
}

async function ensureClassXpRoute(bot: Bot, snapshot: PlayerSnapshot, signal?: AbortSignal): Promise<void> {
  if (!snapshot.alive) {
    await bot.respawn(signal);
    return;
  }

  const route = snapshot.level >= 75
    ? { map: "icestormunder", cell: "r2", pad: "Top" }
    : { map: "battlegrounde", cell: "r2", pad: "Left" };

  if (snapshot.map.toLowerCase() !== route.map) {
    await bot.join(route.map, route.cell, route.pad);
    await bot.delay(1500, signal);
    return;
  }

  if (snapshot.cell !== route.cell) {
    await bot.jump(route.cell, route.pad);
    await bot.delay(600, signal);
  }
}

function normalizedClassRank(snapshot: PlayerSnapshot): number {
  if (snapshot.currentClassRank > 0) return snapshot.currentClassRank;
  const cp = snapshot.currentClassPoints;
  if (cp >= 302500) return 10;
  if (cp >= 202500) return 9;
  if (cp >= 129600) return 8;
  if (cp >= 78400) return 7;
  if (cp >= 44100) return 6;
  if (cp >= 22500) return 5;
  if (cp >= 10000) return 4;
  if (cp >= 3600) return 3;
  if (cp >= 900) return 2;
  return 1;
}

function rankLabel(snapshot: PlayerSnapshot): string {
  const cp = snapshot.currentClassPoints ? `, ${snapshot.currentClassPoints} CP` : "";
  return `${normalizedClassRank(snapshot)}${cp}`;
}

function clampTargetRank(rank: number): number {
  if (!Number.isFinite(rank)) return 10;
  return Math.max(1, Math.min(Math.floor(rank), 10));
}
