import type { ZeroToHeroRuntime, MonsterTarget, VeyraQuestAction } from "../ZeroToHeroKits/ZeroToHeroRuntime.js";

const storyStepDelayMs = 1400;

export type StoryPlanTarget = MonsterTarget;

export type StoryStep =
  | { kind: "chain"; questId: number; rewardId?: number }
  | {
      kind: "kill";
      questId: number;
      map: string;
      monsters: StoryPlanTarget | StoryPlanTarget[];
      item?: string | number;
      quantity?: number;
      isTemp?: boolean;
    }
  | { kind: "mapItem"; questId: number; map: string; ids: number | number[]; quantity?: number }
  | { kind: "plan"; questId: number; actions: VeyraQuestAction[]; rewardId?: number; repeatable?: boolean }
  | { kind: "achievements"; ids: number[]; field?: string; map?: string; labels?: string[]; stopIfHas?: number };

export async function runStorySteps(
  runtime: ZeroToHeroRuntime,
  steps: StoryStep[],
  label = "story route"
): Promise<void> {
  runtime.log(`Running ${label} (${steps.length} story steps).`);
  for (const step of steps) {
    await runStoryStep(runtime, step);
    await runtime.bot.delay(storyStepDelayMs, runtime.signal);
  }
}

export async function runStoryStep(runtime: ZeroToHeroRuntime, step: StoryStep): Promise<void> {
  switch (step.kind) {
    case "chain":
      await runtime.chainQuest(step.questId, step.rewardId ?? -1);
      return;
    case "kill":
      await runtime.storyKillQuest(
        step.questId,
        step.map,
        step.monsters,
        step.item,
        step.quantity ?? 1,
        step.isTemp ?? true
      );
      return;
    case "mapItem":
      await runtime.storyMapItemQuest(step.questId, step.map, step.ids, step.quantity ?? 1);
      return;
    case "plan":
      await runtime.completeQuestPlan(step.questId, step.actions, step.rewardId ?? -1, step.repeatable ?? false);
      return;
    case "achievements":
      await runAchievementStep(runtime, step);
      return;
  }
}

async function runAchievementStep(
  runtime: ZeroToHeroRuntime,
  step: Extract<StoryStep, { kind: "achievements" }>
): Promise<void> {
  const field = step.field ?? "ia0";
  if (step.stopIfHas && (await hasAchievement(runtime, step.stopIfHas, field))) {
    runtime.log(`Tutorial achievements already complete through achievement ${step.stopIfHas}.`);
    return;
  }

  if (step.map) await runtime.join(step.map);
  runtime.log("Doing Tutorial Badges to look a bit more legit.");

  for (const [index, id] of step.ids.entries()) {
    if (await hasAchievement(runtime, id, field)) {
      runtime.log(`Achievement: ${step.labels?.[index] ?? id}, Status: already set.`);
      continue;
    }

    const room = (await runtime.snapshot()).room || 1;
    runtime.log(`Setting tutorial achievement ${id}${step.labels?.[index] ? ` (${step.labels[index]})` : ""}.`);
    await runtime.bot.sendPacket(`%xt%zm%setAchievement%${room}%${field}%${id}%1%`);
    await runtime.bot.delay(1700, runtime.signal);
  }
}

async function hasAchievement(runtime: ZeroToHeroRuntime, id: number, field: string): Promise<boolean> {
  const value = await runtime.bot.callGameFunction<unknown>("world.getAchievement", field, id).catch(() => 0);
  if (typeof value === "boolean") return value;
  return Number(value) > 0;
}
