import type { FarmJoeRuntime } from "../FarmJoeKits/FarmJoeRuntime.js";

export async function runFireIslandPyrewatchStory(
  runtime: FarmJoeRuntime,
  includeDefenderBadge = true
): Promise<void> {
  const targetQuest = includeDefenderBadge ? 4081 : 4080;
  if (await runtime.isStoryQuestComplete(targetQuest)) {
    runtime.log(`Pyrewatch story is already complete through quest ${targetQuest}.`);
    return;
  }

  runtime.log(`Running Fire Island story through ${includeDefenderBadge ? "Pyrewatch Defender Badge" : "Spreading Like Wildfire"}.`);
  await runFireIslandEmberseaStory(runtime);
  await runtime.storyKillQuest(4070, "pyrewatch", ["Lavazard", "Fyreborn Tiger", "Caustocrush"]);
  await runtime.storyKillQuest(4071, "pyrewatch", "Fire Pikeman");
  await runtime.storyMapItemQuest(4072, "pyrewatch", 3159, 12);
  await runtime.storyKillQuest(4073, "pyrewatch", ["Firestorm Knight", "Firestorm Knight"]);
  await runtime.completeQuestPlan(4074, [
    { kind: "hunt", map: "pyrewatch", monster: "Fire Pikeman", item: "Pikeman Slain", quantity: 3 },
    { kind: "hunt", map: "pyrewatch", monster: "Fire Pikeman", item: "Firestorm Helm", quantity: 6 },
    { kind: "hunt", map: "pyrewatch", monster: "Flame Soldier", item: "Flame Soldier Slain", quantity: 3 },
    { kind: "hunt", map: "pyrewatch", monster: "Caustocrush", item: "Caustocrush Slain", quantity: 3 }
  ]);
  await runtime.storyMapItemQuest(4075, "pyrewatch", 3160, 5);
  await runtime.storyKillQuest(4075, "pyrewatch", "Lavazard");
  await runtime.completeQuestPlan(4076, [
    { kind: "hunt", map: "pyrewatch", monster: "Lavazard", item: "Kindling", quantity: 3 },
    { kind: "hunt", map: "pyrewatch", monster: "Caustocrush", item: "Flint and Steel" },
    { kind: "hunt", map: "pyrewatch", monster: "Coal Creeper", item: 28565, quantity: 6 }
  ]);
  await runtime.completeQuestPlan(4077, [
    { kind: "hunt", map: "pyrewatch", monster: "Lavazard", item: "Wickskin Root", quantity: 3 },
    { kind: "hunt", map: "pyrewatch", monster: "Lavazard", item: "Zard Marrow", quantity: 3 },
    { kind: "hunt", map: "pyrewatch", monster: "Living Lava", item: "Living Lava Blood", quantity: 2 },
    { kind: "mapItem", map: "pyrewatch", id: 3161, quantity: 5 }
  ]);
  await runtime.storyKillQuest(4078, "pyrewatch", "Storm Scout");
  await runtime.completeQuestPlan(4079, [
    { kind: "hunt", map: "pyrewatch", monster: "Storm Scout", item: "Polish" },
    { kind: "hunt", map: "pyrewatch", monster: "Flame Soldier", item: "Cloth" },
    { kind: "hunt", map: "pyrewatch", monster: "Flame Soldier", item: "Stand Legs", quantity: 8 },
    { kind: "hunt", map: "pyrewatch", monster: "Fyreborn Tiger", item: "Reflectors", quantity: 4 }
  ]);
  await runtime.storyMapItemQuest(4080, "pyrewatch", 3162, 4);
  if (includeDefenderBadge) await runtime.storyKillQuest(4081, "pyrewatch", "Storm Scout");
}

export async function runFireIslandEmberseaStory(runtime: FarmJoeRuntime): Promise<void> {
  if (await runtime.isStoryQuestComplete(4055)) return;
  runtime.log("Running Fire Island Embersea story.");
  await runtime.storyKillQuest(4054, "embersea", ["Flame Soldier", "Storm Scout"]);
  await runtime.storyMapItemQuest(4055, "embersea", 3153, 22);
  await runtime.storyKillQuest(4055, "embersea", "Living Lava");
  if (await runtime.isMember()) await runtime.storyKillQuest(4056, "embersea", ["Coal Creeper", "Pyradon", "Fyresyn"]);
}
