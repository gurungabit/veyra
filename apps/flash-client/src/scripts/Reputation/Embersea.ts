import type { ZeroToHeroRuntime } from "../ZeroToHeroKits/ZeroToHeroRuntime.js";
import { runFireIslandPyrewatchStory } from "../Story/FireIsland.js";

const EMBERSEA_FACTION_ID = 43;

export async function runEmberseaRep(runtime: ZeroToHeroRuntime, targetRank = 10): Promise<void> {
  const currentRank = await runtime.factionRank(EMBERSEA_FACTION_ID);
  if (currentRank >= targetRank) {
    runtime.log(`Embersea reputation is already Rank ${currentRank}; skipping reputation farm.`);
    return;
  }

  runtime.log(`Flame Sigil requires Embersea Rank ${targetRank}; farming Embersea from Rank ${currentRank}.`);
  await ensureSpreadingLikeWildfireUnlocked(runtime);
  if (await runtime.isStoryQuestComplete(4080)) {
    await farmEmberseaRepWithPyrewatch(runtime, targetRank);
  } else {
    await farmEmberseaRepWithBlazebinders(runtime, targetRank);
  }

  const finalRank = await runtime.factionRank(EMBERSEA_FACTION_ID);
  if (finalRank < targetRank) {
    throw new Error(`Flame Sigil requires Embersea Rank ${targetRank}; current Embersea Rank is ${finalRank}.`);
  }
}

async function ensureSpreadingLikeWildfireUnlocked(runtime: ZeroToHeroRuntime): Promise<void> {
  if (await runtime.isStoryQuestComplete(4080)) return;
  runtime.log("Spreading Like Wildfire quest 4080 is story-locked; running Pyrewatch story first.");
  await runFireIslandPyrewatchStory(runtime, false);
}

async function farmEmberseaRepWithPyrewatch(runtime: ZeroToHeroRuntime, targetRank: number): Promise<void> {
  runtime.log("Embersea route: Spreading Like Wildfire quest 4080 via Pyrewatch map items.");
  await runtime.farmFactionQuest({
    factionId: EMBERSEA_FACTION_ID,
    factionName: "Embersea",
    targetRank,
    questId: 4080,
    action: async () => {
      await runtime.getMapItem("pyrewatch", 3162, 4);
    }
  });
}

async function farmEmberseaRepWithBlazebinders(runtime: ZeroToHeroRuntime, targetRank: number): Promise<void> {
  runtime.log("Embersea route: Slay the Blazebinders quest 4228 via fireforge Blazebinders.");
  await runtime.farmFactionQuest({
    factionId: EMBERSEA_FACTION_ID,
    factionName: "Embersea",
    targetRank,
    questId: 4228,
    action: async () => {
      await runtime.hunt("fireforge", "Blazebinder", "Defeated Blazebinder", 5, true);
    },
    afterComplete: async () => {
      await runtime.acceptDrops("Defeated Blazebinder");
    }
  });
}
