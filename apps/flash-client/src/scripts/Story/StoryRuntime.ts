import type { FarmJoeRuntime, MonsterTarget, VeyraQuestAction } from "../FarmJoeKits/FarmJoeRuntime.js";

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
  | { kind: "plan"; questId: number; actions: VeyraQuestAction[]; rewardId?: number; repeatable?: boolean };

export async function runStorySteps(
  runtime: FarmJoeRuntime,
  steps: StoryStep[],
  label = "story route"
): Promise<void> {
  runtime.log(`Running ${label} (${steps.length} story steps).`);
  for (const step of steps) {
    await runStoryStep(runtime, step);
    await runtime.bot.delay(storyStepDelayMs, runtime.signal);
  }
}

export async function runStoryStep(runtime: FarmJoeRuntime, step: StoryStep): Promise<void> {
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
  }
}
