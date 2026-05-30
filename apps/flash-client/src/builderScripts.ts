import type { Bot, PlayerSnapshot } from "./bot.js";

export type BuilderActionKind =
  | "log"
  | "wait"
  | "join"
  | "jump"
  | "walk"
  | "hunt"
  | "huntForItem"
  | "getMapItem"
  | "buyItem"
  | "acceptQuest"
  | "completeQuest"
  | "pickupDrop"
  | "sendPacket"
  | "checkQuestUnlocked"
  | "breakLoop"
  | "breakIfQuestUnlocked"
  | "if"
  | "repeat"
  | "while";

export type BuilderConditionKind =
  | "always"
  | "loggedIn"
  | "mapIs"
  | "cellIs"
  | "levelAtLeast"
  | "levelBelow"
  | "classRankAtLeast"
  | "classRankBelow"
  | "dropVisible"
  | "inventoryQuantityAtLeast"
  | "questUnlocked"
  | "questCompleted"
  | "dailyQuestComplete";

export interface BuilderCondition {
  kind: BuilderConditionKind;
  value?: string | undefined;
  amount?: number | undefined;
  not?: boolean | undefined;
}

export interface BuilderAction {
  id: string;
  kind: BuilderActionKind;
  label?: string | undefined;
  map?: string | undefined;
  cell?: string | undefined;
  pad?: string | undefined;
  x?: number | undefined;
  y?: number | undefined;
  speed?: number | undefined;
  monster?: string | undefined;
  monsterId?: number | undefined;
  kills?: number | undefined;
  mapItemId?: number | undefined;
  quantity?: number | undefined;
  shopId?: number | undefined;
  itemName?: string | undefined;
  questId?: number | undefined;
  rewardId?: number | undefined;
  turnIns?: number | undefined;
  item?: string | undefined;
  ms?: number | undefined;
  message?: string | undefined;
  packet?: string | undefined;
  condition?: BuilderCondition | undefined;
  actions?: BuilderAction[] | undefined;
  elseActions?: BuilderAction[] | undefined;
  iterations?: number | undefined;
}

export interface BuilderScript {
  id: string;
  name: string;
  description: string;
  tags: string[];
  version: string;
  map: string;
  actions: BuilderAction[];
}

export interface BuilderScriptStore {
  scripts: BuilderScript[];
}

const QUEST_LOAD_TIMEOUT_MS = 15000;
const QUEST_LOAD_RETRY_MS = 300;
const QUEST_LOAD_REFRESH_MS = 1500;
const QUEST_ACTION_DELAY_MS = 900;
const SERVER_ACTION_MIN_INTERVAL_MS = 1100;

const lastServerActionAt = new WeakMap<Bot, number>();

interface QuestUnlockState {
  questId: number;
  loaded: boolean;
  unlocked: boolean;
  source: string;
  reason: string;
  name?: string | undefined;
  slot?: number | undefined;
  value?: number | undefined;
  current?: number | undefined;
  unlockTarget?: number | undefined;
}

class BuilderLoopBreak extends Error {
  constructor() {
    super("Break current builder loop.");
    this.name = "BuilderLoopBreak";
  }
}

function isBuilderLoopBreak(error: unknown): error is BuilderLoopBreak {
  return error instanceof BuilderLoopBreak || (error instanceof Error && error.name === "BuilderLoopBreak");
}

export function createDefaultBuilderScript(): BuilderScript {
  return {
    id: createBuilderId("builder-script"),
    name: "New Builder Script",
    description: "Created with Veyra Script Builder.",
    tags: ["builder"],
    version: "0.1.0",
    map: "battleon",
    actions: [newBuilderAction("log"), newBuilderAction("join")]
  };
}

export function newBuilderAction(kind: BuilderActionKind): BuilderAction {
  const base = { id: createBuilderId(kind), kind };
  switch (kind) {
    case "join":
      return { ...base, map: "battleon", cell: "Enter", pad: "Spawn" };
    case "jump":
      return { ...base, cell: "Enter", pad: "Spawn" };
    case "walk":
      return { ...base, x: 400, y: 300, speed: 8 };
    case "hunt":
      return { ...base, monster: "*", kills: 1 };
    case "huntForItem":
      return { ...base, monster: "*", itemName: "", quantity: 1, cell: "", pad: "Auto" };
    case "getMapItem":
      return { ...base, map: "", mapItemId: 0, quantity: 1 };
    case "buyItem":
      return { ...base, map: "", shopId: 0, itemName: "", quantity: 1 };
    case "acceptQuest":
      return { ...base, questId: 0 };
    case "completeQuest":
      return { ...base, questId: 0, rewardId: -1, turnIns: 1 };
    case "pickupDrop":
      return { ...base, item: "" };
    case "wait":
      return { ...base, ms: 1000 };
    case "sendPacket":
      return { ...base, packet: "%xt%zm%" };
    case "checkQuestUnlocked":
      return { ...base, questId: 0 };
    case "breakLoop":
      return base;
    case "breakIfQuestUnlocked":
      return { ...base, questId: 0 };
    case "if":
      return { ...base, condition: { kind: "loggedIn" }, actions: [], elseActions: [] };
    case "repeat":
      return { ...base, iterations: 3, actions: [] };
    case "while":
      return { ...base, condition: { kind: "loggedIn" }, actions: [] };
    case "log":
    default:
      return { ...base, message: "Builder script step." };
  }
}

export function normalizeBuilderScripts(value: unknown): BuilderScript[] {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Partial<BuilderScriptStore>) : {};
  const scripts = Array.isArray(source.scripts) ? source.scripts : Array.isArray(value) ? value : [];
  return scripts.map(normalizeBuilderScript).filter((script) => script.actions.length > 0);
}

export function normalizeBuilderScript(value: unknown): BuilderScript {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Partial<BuilderScript>) : {};
  const name = cleanText(source.name, "Builder Script");
  const actions = Array.isArray(source.actions) ? source.actions.map(normalizeBuilderAction) : [];
  return {
    id: cleanText(source.id, createBuilderId(name)),
    name,
    description: cleanText(source.description, "Created with Veyra Script Builder."),
    tags: Array.isArray(source.tags) ? source.tags.map(String).map((tag) => tag.trim()).filter(Boolean) : ["builder"],
    version: cleanText(source.version, "0.1.0"),
    map: cleanText(source.map, firstMap(actions) || "battleon"),
    actions
  };
}

export function normalizeBuilderAction(value: unknown): BuilderAction {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Partial<BuilderAction>) : {};
  const kind = isBuilderActionKind(source.kind) ? source.kind : "log";
  const fallback = newBuilderAction(kind);
  return {
    ...fallback,
    id: cleanText(source.id, fallback.id),
    label: typeof source.label === "string" ? source.label : undefined,
    map: typeof source.map === "string" ? source.map : fallback.map,
    cell: typeof source.cell === "string" ? source.cell : fallback.cell,
    pad: typeof source.pad === "string" ? source.pad : fallback.pad,
    x: finiteNumber(source.x, fallback.x),
    y: finiteNumber(source.y, fallback.y),
    speed: finiteNumber(source.speed, fallback.speed),
    monster: typeof source.monster === "string" ? source.monster : fallback.monster,
    monsterId: finiteNumber(source.monsterId, fallback.monsterId),
    kills: finiteNumber(source.kills, fallback.kills),
    mapItemId: finiteNumber(source.mapItemId, fallback.mapItemId),
    quantity: finiteNumber(source.quantity, fallback.quantity),
    shopId: finiteNumber(source.shopId, fallback.shopId),
    itemName: typeof source.itemName === "string" ? source.itemName : fallback.itemName,
    questId: finiteNumber(source.questId, fallback.questId),
    rewardId: finiteNumber(source.rewardId, fallback.rewardId),
    turnIns: finiteNumber(source.turnIns, fallback.turnIns),
    item: typeof source.item === "string" ? source.item : fallback.item,
    ms: finiteNumber(source.ms, fallback.ms),
    message: typeof source.message === "string" ? source.message : fallback.message,
    packet: typeof source.packet === "string" ? source.packet : fallback.packet,
    condition: normalizeCondition(source.condition ?? fallback.condition),
    actions: Array.isArray(source.actions) ? source.actions.map(normalizeBuilderAction) : fallback.actions,
    elseActions: Array.isArray(source.elseActions) ? source.elseActions.map(normalizeBuilderAction) : fallback.elseActions,
    iterations: finiteNumber(source.iterations, fallback.iterations)
  };
}

export function builderActionTitle(action: BuilderAction): string {
  switch (action.kind) {
    case "join":
      return `Join ${action.map || "map"} ${action.cell || "Enter"}/${action.pad || "Spawn"}`;
    case "jump":
      return `Jump ${action.cell || "Enter"}/${action.pad || "Spawn"}`;
    case "walk":
      return `Walk ${action.x ?? 0}, ${action.y ?? 0}`;
    case "hunt": {
      const target = action.cell ? ` @ ${action.cell}${action.pad ? `/${action.pad}` : ""}` : "";
      return `Hunt ${huntTargetLabel(action)} x${action.kills ?? 1}${target}`;
    }
    case "huntForItem": {
      const target = action.cell ? ` @ ${action.cell}${action.pad ? `/${action.pad}` : ""}` : "";
      return `Hunt ${huntTargetLabel(action)} for ${action.itemName || "item"} x${action.quantity ?? 1}${target}`;
    }
    case "getMapItem":
      return `Get map item ${action.mapItemId || 0} x${action.quantity ?? 1}`;
    case "buyItem":
      return `Buy ${action.itemName || "item"} x${action.quantity ?? 1}`;
    case "acceptQuest":
      return `Accept quest ${action.questId || 0}`;
    case "completeQuest":
      return `Complete quest ${action.questId || 0}`;
    case "pickupDrop":
      return `Pickup ${action.item || "drop"}`;
    case "wait":
      return `Wait ${action.ms ?? 1000}ms`;
    case "sendPacket":
      return "Send packet";
    case "checkQuestUnlocked":
      return `Check if quest ${action.questId || 0} is unlocked`;
    case "breakLoop":
      return "Break loop";
    case "breakIfQuestUnlocked":
      return `Break if quest ${action.questId || 0} unlocked`;
    case "if":
      return `If ${conditionTitle(action.condition)}`;
    case "repeat":
      return `Repeat x${action.iterations ?? 1}`;
    case "while":
      return `While ${conditionTitle(action.condition)}`;
    case "log":
    default:
      return `Log ${action.message || ""}`.trim();
  }
}

export function conditionTitle(condition?: BuilderCondition): string {
  const next = normalizeCondition(condition);
  const suffix = next.not ? " is false" : "";
  switch (next.kind) {
    case "loggedIn":
      return `logged in${suffix}`;
    case "mapIs":
      return `map is ${next.value || ""}${suffix}`;
    case "cellIs":
      return `cell is ${next.value || ""}${suffix}`;
    case "levelAtLeast":
      return `level >= ${next.amount ?? 1}${suffix}`;
    case "levelBelow":
      return `level < ${next.amount ?? 1}${suffix}`;
    case "classRankAtLeast":
      return `class rank >= ${next.amount ?? 1}${suffix}`;
    case "classRankBelow":
      return `class rank < ${next.amount ?? 1}${suffix}`;
    case "dropVisible":
      return `drop visible ${next.value || ""}${suffix}`;
    case "inventoryQuantityAtLeast":
      return `${next.value || "item"} qty >= ${next.amount ?? 1}${suffix}`;
    case "questUnlocked":
      return `quest ${next.amount ?? 0} unlocked${suffix}`;
    case "questCompleted":
      return `quest ${next.amount ?? 0} completed${suffix}`;
    case "dailyQuestComplete":
      return `daily quest ${next.amount ?? 0} complete${suffix}`;
    case "always":
    default:
      return `always${suffix}`;
  }
}

function huntTarget(action: BuilderAction): string | number {
  const monsterId = Math.floor(action.monsterId ?? 0);
  if (monsterId > 0) return monsterId;
  return action.monster || "*";
}

function huntTargetLabel(action: BuilderAction): string {
  const monsterId = Math.floor(action.monsterId ?? 0);
  if (monsterId > 0) return `monster ID ${monsterId}`;
  return action.monster || "*";
}

export async function runBuilderScript(bot: Bot, script: BuilderScript, options: { signal?: AbortSignal } = {}): Promise<void> {
  const normalized = normalizeBuilderScript(script);
  bot.log(`Builder started: ${normalized.name}.`);
  await bot.waitForLogin(options.signal);
  try {
    await runBuilderActions(bot, normalized.actions, options.signal, 0);
  } catch (error) {
    if (!isBuilderLoopBreak(error)) throw error;
    bot.log("Break Loop was reached outside a loop; stopping builder script.");
  }
  bot.log(`Builder finished: ${normalized.name}.`);
}

async function runBuilderActions(bot: Bot, actions: BuilderAction[], signal: AbortSignal | undefined, depth: number): Promise<void> {
  if (depth > 8) throw new Error("Builder nesting is too deep.");
  for (let index = 0; index < actions.length; index += 1) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    const action = normalizeBuilderAction(actions[index]);
    await runBuilderAction(bot, action, signal, depth);
  }
}

async function runBuilderAction(bot: Bot, action: BuilderAction, signal: AbortSignal | undefined, depth: number): Promise<void> {
  switch (action.kind) {
    case "log":
      bot.log(action.message || "Builder script step.");
      return;
    case "wait":
      await bot.delay(clamp(action.ms ?? 1000, 0, 600000), signal);
      return;
    case "join":
      await bot.join(action.map || "battleon", blankToUndefined(action.cell), blankToUndefined(action.pad));
      return;
    case "jump":
      await jumpIfNeeded(bot, action.cell || "Enter", action.pad || "Spawn", signal, undefined, true);
      return;
    case "walk":
      bot.log(`Walking to ${action.x ?? 400}, ${action.y ?? 300}.`);
      await bot.call("walkTo", Math.floor(action.x ?? 400), Math.floor(action.y ?? 300), Math.floor(action.speed ?? 8));
      return;
    case "hunt":
      if (action.map) {
        if (action.cell) await bot.join(action.map, action.cell, action.pad || "Spawn");
        else await bot.join(action.map);
        if (!action.cell) await jumpToMonsterCell(bot, huntTarget(action), signal, `hunting ${huntTargetLabel(action)}`);
      } else if (action.cell) {
        const pad = action.pad || "Auto";
        await jumpIfNeeded(bot, action.cell, pad, signal, `hunting ${huntTargetLabel(action)}`);
      }
      await huntMonster(bot, huntTarget(action), clamp(action.kills ?? 1, 1, 999), signal);
      return;
    case "huntForItem":
      await huntForItem(bot, action, signal);
      return;
    case "getMapItem":
      await getMapItem(bot, action, signal);
      return;
    case "buyItem":
      await buyItem(bot, action, signal);
      return;
    case "acceptQuest":
      await acceptQuest(bot, Math.floor(action.questId ?? 0), signal);
      return;
    case "completeQuest":
      await completeQuest(bot, Math.floor(action.questId ?? 0), Math.floor(action.rewardId ?? -1), clamp(action.turnIns ?? 1, 1, 999), signal);
      return;
    case "pickupDrop":
      if (action.item) {
        bot.log(`Picking up ${action.item}.`);
        await bot.call("acceptDrops", action.item);
      } else {
        bot.log("Picking up all current drops.");
        await bot.call("acceptAllDrops");
      }
      return;
    case "sendPacket":
      bot.log("Sending packet.");
      await bot.sendPacket(action.packet || "");
      return;
    case "checkQuestUnlocked": {
      const questId = Math.floor(action.questId ?? 0);
      if (questId <= 0) throw new Error("Check Quest Unlocked needs a valid quest ID.");
      const state = await questUnlockState(bot, questId, signal, 5000);
      bot.log(questUnlockStateMessage(state));
      return;
    }
    case "breakLoop":
      bot.log("Breaking this loop.");
      throw new BuilderLoopBreak();
    case "breakIfQuestUnlocked": {
      const questId = Math.floor(action.questId ?? 0);
      if (questId <= 0) throw new Error("Break If Quest Unlocked needs a valid quest ID.");
      const state = await questUnlockState(bot, questId, signal, 5000);
      if (state.unlocked) {
        bot.log(`${questUnlockStateMessage(state)} Breaking this loop.`);
        throw new BuilderLoopBreak();
      }
      bot.log(`${questUnlockStateMessage(state)} Continuing loop.`);
      return;
    }
    case "if":
      if (await evaluateCondition(bot, action.condition)) await runBuilderActions(bot, action.actions || [], signal, depth + 1);
      else await runBuilderActions(bot, action.elseActions || [], signal, depth + 1);
      return;
    case "repeat": {
      const iterations = clamp(action.iterations ?? 1, 1, 999);
      for (let index = 0; index < iterations; index += 1) {
        bot.log(`Repeat ${index + 1}/${iterations}.`);
        try {
          await runBuilderActions(bot, action.actions || [], signal, depth + 1);
        } catch (error) {
          if (!isBuilderLoopBreak(error)) throw error;
          return;
        }
      }
      return;
    }
    case "while": {
      let iteration = 0;
      const questId = questLoopQuestId(action);
      const allActions = action.actions || [];
      const oneTimeActions = questId > 0 ? leadingQuestSetupActions(allActions) : [];
      const loopActions = oneTimeActions.length > 0 ? allActions.slice(oneTimeActions.length) : allActions;
      if (oneTimeActions.length > 0) {
        bot.log(`Running ${oneTimeActions.length} quest setup step${oneTimeActions.length === 1 ? "" : "s"} before loop.`);
        await runQuestLoopActions(bot, oneTimeActions, questId, signal, depth + 1);
      }
      while (await evaluateCondition(bot, action.condition)) {
        if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
        iteration += 1;
        bot.log(`While loop ${iteration}.`);
        try {
          if (questId > 0) await runQuestLoopActions(bot, loopActions, questId, signal, depth + 1);
          else await runBuilderActions(bot, loopActions, signal, depth + 1);
        } catch (error) {
          if (!isBuilderLoopBreak(error)) throw error;
          return;
        }
        await bot.delay(50, signal);
      }
      return;
    }
  }
}

function leadingQuestSetupActions(actions: BuilderAction[]): BuilderAction[] {
  const setup: BuilderAction[] = [];
  for (const action of actions) {
    if (normalizeBuilderAction(action).kind !== "getMapItem") break;
    setup.push(action);
  }
  return setup;
}

async function jumpIfNeeded(
  bot: Bot,
  cell: string,
  pad: string,
  signal: AbortSignal | undefined,
  context?: string,
  logSkip = false
): Promise<void> {
  const targetCell = (cell || "Enter").trim();
  const targetPad = (pad || "Spawn").trim();
  const snapshot = await bot.snapshot().catch(() => undefined);
  if (snapshot && sameCellPad(snapshot, targetCell, targetPad)) {
    if (logSkip) bot.log(`Already at ${snapshot.cell || targetCell}/${snapshot.pad || targetPad}; skipping jump.`);
    return;
  }

  bot.log(`Jumping to ${targetCell}/${targetPad}${context ? ` before ${context}` : ""}.`);
  await bot.jump(targetCell, targetPad);
  await bot.delay(250, signal);
}

function sameCellPad(snapshot: PlayerSnapshot, cell: string, pad: string): boolean {
  const targetCell = (cell || "Enter").trim().toLowerCase();
  const targetPad = (pad || "Spawn").trim().toLowerCase();
  const currentCell = (snapshot.cell || "").trim().toLowerCase();
  const currentPad = (snapshot.pad || "").trim().toLowerCase();
  return currentCell === targetCell && (targetPad === "auto" || currentPad === targetPad);
}

async function runQuestLoopActions(bot: Bot, actions: BuilderAction[], questId: number, signal: AbortSignal | undefined, depth: number): Promise<void> {
  const completeAction = actions.find((action) => action.kind === "completeQuest" && Math.floor(action.questId ?? 0) === questId);
  for (const action of actions) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");

    if (action.kind !== "completeQuest" && completeAction) {
      const readiness = await questCompletionReadiness(bot, questId, signal).catch(() => undefined);
      if (readiness?.ready) {
        bot.log(`Quest ${questId} is ready; skipping remaining farm steps and turning in.`);
        await runCompleteQuestAction(bot, completeAction, signal);
        return;
      }
    }

    if (action.kind === "completeQuest") {
      await runCompleteQuestAction(bot, action, signal);
      return;
    }

    const normalized = normalizeBuilderAction(action);
    if (normalized.kind === "getMapItem") {
      const progress = await mapItemRequirementProgress(bot, questId, normalized, signal).catch(() => undefined);
      if (progress?.complete) {
        bot.log(`Map item ${normalized.mapItemId ?? 0} already satisfied (${progress.current}/${progress.required}); skipping get.`);
        continue;
      }
      await getMapItemForQuest(bot, questId, normalized, signal);
      continue;
    }

    if (normalized.kind === "huntForItem") {
      await huntForItem(bot, normalized, signal, questId);
    } else {
      await runBuilderAction(bot, normalized, signal, depth);
    }

    await handleQuestDrops(bot, questId, signal);

    if (completeAction) {
      const readiness = await questCompletionReadiness(bot, questId, signal).catch(() => undefined);
      if (readiness?.ready) {
        bot.log(`Quest ${questId} is ready; skipping remaining farm steps and turning in.`);
        await runCompleteQuestAction(bot, completeAction, signal);
        return;
      }
    }
  }
}

async function mapItemRequirementProgress(
  bot: Bot,
  questId: number,
  action: BuilderAction,
  signal?: AbortSignal
): Promise<{ current: number; required: number; complete: boolean } | undefined> {
  const mapItemId = Math.floor(action.mapItemId ?? 0);
  if (questId <= 0 || mapItemId <= 0) return undefined;

  await sendGetQuestPacket(bot, questId).catch(() => undefined);
  await bot.delay(150, signal);

  const quest = await findQuestInTree(bot, questId);
  if (!quest) return undefined;

  const explicitName = (action.itemName || action.item || "").trim().toLowerCase();
  for (const requirement of questRequirementRecords(quest)) {
    const name = stringFrom(firstFrom(requirement, ["sName", "Name", "name", "strName"])).trim();
    const nameMatches = explicitName.length > 0 && name.toLowerCase() === explicitName;
    const id = optionalNumberFrom(requirement, ["MapItemID", "iMapItemID", "mapItemId", "mapItemID", "ItemID", "iID", "id", "ID"]);
    const idMatches = id === mapItemId;
    if (!nameMatches && !idMatches) continue;

    const required = Math.max(
      clamp(action.quantity ?? 1, 1, 999),
      optionalNumberFrom(requirement, ["iQty", "Qty", "Quantity", "iReqQty", "ReqQty", "Required", "required", "quantity"]) ?? 1
    );
    let current = optionalNumberFrom(requirement, ["iQtyNow", "QtyNow", "Current", "current", "iHave", "Have", "have", "iGot", "Got", "got"]);
    if (current === undefined) current = await carriedItemQuantity(bot, String(id ?? mapItemId));
    if (current === 0 && name) current = await carriedItemQuantity(bot, name);
    return { current, required, complete: current >= required };
  }

  return undefined;
}

async function runCompleteQuestAction(bot: Bot, action: BuilderAction, signal?: AbortSignal): Promise<"completed" | "not-ready"> {
  return completeQuest(bot, Math.floor(action.questId ?? 0), Math.floor(action.rewardId ?? -1), clamp(action.turnIns ?? 1, 1, 999), signal);
}

async function handleQuestDrops(bot: Bot, questId: number, signal?: AbortSignal): Promise<void> {
  if (questId <= 0) return;
  const quest = await findQuestInTree(bot, questId).catch(() => undefined);
  if (!quest) return;

  const whitelist = questDropWhitelist(quest);
  if (whitelist.length === 0) return;

  const drops = parseMaybeJson<Record<string, unknown>[]>(await bot.call<unknown>("getCurrentDrops").catch(() => [])) ?? [];
  if (drops.length === 0) return;

  const visibleQuestDrops = drops.filter((drop) => dropMatchesWhitelist(drop, whitelist));
  const settings = await bot.gameOptions().catch(() => undefined);
  const rejectUnlisted = optionEnabled(settings, "quest-drops-only") || optionEnabled(settings, "reject-all-drops");
  const acceptAC = optionEnabled(settings, "accept-ac-drops");

  if (visibleQuestDrops.length === 0 && !rejectUnlisted) return;

  const whitelistCsv = whitelist.join(",");
  if (rejectUnlisted) {
    await rejectExceptDrops(bot, whitelistCsv, acceptAC);
  } else {
    await bot.call("acceptDrops", whitelistCsv);
  }

  if (visibleQuestDrops.length > 0) {
    const names = Array.from(
      new Set(
        visibleQuestDrops
          .map((drop) => stringFrom(firstFrom(drop, ["displayName", "name", "id", "ID"]), "drop").trim())
          .filter(Boolean)
      )
    );
    bot.log(`Accepted quest drop${names.length === 1 ? "" : "s"}: ${names.slice(0, 4).join(", ")}.`);
  }
  await bot.delay(150, signal);
}

async function rejectExceptDrops(bot: Bot, whitelistCsv: string, acceptAC: boolean): Promise<void> {
  try {
    await bot.call("rejectExcept", whitelistCsv, acceptAC);
    return;
  } catch {
    if (acceptAC) await bot.call("acceptACDrops").catch(() => undefined);
    await bot.call("rejectExcept", whitelistCsv);
  }
}

function questDropWhitelist(quest: Record<string, unknown>): string[] {
  const values = new Set<string>();
  for (const requirement of questRequirementRecords(quest)) {
    addWhitelistValue(values, firstFrom(requirement, ["sName", "Name", "name", "strName"]));
    addWhitelistValue(values, firstFrom(requirement, ["ItemID", "id", "ID", "iID"]));
  }
  return Array.from(values);
}

function addWhitelistValue(values: Set<string>, value: unknown): void {
  const text = normalizeDropKey(value);
  if (text) values.add(text);
}

function dropMatchesWhitelist(drop: Record<string, unknown>, whitelist: string[]): boolean {
  const keys = [
    normalizeDropKey(firstFrom(drop, ["name", "displayName", "sName", "Name"])),
    normalizeDropKey(firstFrom(drop, ["id", "ID", "ItemID", "iID"]))
  ].filter(Boolean);
  return keys.some((key) => whitelist.includes(key));
}

function normalizeDropKey(value: unknown): string {
  return stringFrom(value)
    .toLowerCase()
    .replace(/\s+x\s*\d+$/, "")
    .trim();
}

function optionEnabled(settings: unknown, option: string): boolean {
  const record = settings && typeof settings === "object" ? (settings as { values?: Record<string, unknown> }) : {};
  return record.values?.[option] === true;
}

function questLoopQuestId(action: BuilderAction): number {
  const condition = normalizeCondition(action.condition);
  if (condition.kind !== "questCompleted" || condition.not !== true) return 0;
  return Math.floor(condition.amount ?? 0);
}

async function huntMonster(bot: Bot, monster: string | number, kills: number, signal?: AbortSignal): Promise<void> {
  for (let kill = 1; kill <= kills; kill += 1) {
    bot.log(`Hunting ${monster} ${kill}/${kills}.`);
    await defeatOneMonster(bot, monster, signal);
  }
}

async function huntForItem(bot: Bot, action: BuilderAction, signal?: AbortSignal, questId = 0): Promise<void> {
  const item = (action.itemName || action.item || "").trim();
  if (!item) throw new Error("Hunt For Item needs an item name or ID.");
  const targetQuantity = clamp(action.quantity ?? 1, 1, 9999);
  if (action.map) {
    if (action.cell) await bot.join(action.map, action.cell, action.pad || "Spawn");
    else await bot.join(action.map);
    if (!action.cell) await jumpToMonsterCell(bot, huntTarget(action), signal, `hunting ${huntTargetLabel(action)} for ${item}`);
  } else if (action.cell) {
    const pad = action.pad || "Auto";
    await jumpIfNeeded(bot, action.cell, pad, signal, `hunting ${huntTargetLabel(action)} for ${item}`);
  }

  let current = await carriedItemQuantity(bot, item);
  if (current >= targetQuantity) {
    bot.log(`${item} is already at ${current}/${targetQuantity}.`);
    return;
  }

  while (current < targetQuantity) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    if (action.map && !action.cell) await jumpToMonsterCell(bot, huntTarget(action), signal, `hunting ${huntTargetLabel(action)} for ${item}`);
    bot.log(`Hunting ${huntTargetLabel(action)} for ${item}: ${current}/${targetQuantity}.`);
    await defeatOneMonster(bot, huntTarget(action), signal);
    if (questId > 0) await handleQuestDrops(bot, questId, signal);
    await bot.delay(250, signal);
    current = await carriedItemQuantity(bot, item);
  }
  bot.log(`${item} reached ${current}/${targetQuantity}.`);
}

async function jumpToMonsterCell(bot: Bot, monster: string | number, signal: AbortSignal | undefined, context: string): Promise<void> {
  const position = await findMonsterPosition(bot, monster).catch(() => undefined);
  if (!position?.cell) return;
  await jumpIfNeeded(bot, position.cell, position.pad || "Auto", signal, context);
}

async function findMonsterPosition(bot: Bot, monster: string | number): Promise<{ cell: string; pad: string } | undefined> {
  const raw = await bot.call<unknown>("getMonsters").catch(() => []);
  const monsters = parseMaybeJson<Record<string, unknown>[]>(raw) ?? [];
  const targetId = typeof monster === "number" ? monster : 0;
  const targetName = typeof monster === "number" ? "" : (monster || "*").trim().toLowerCase();
  const candidates = monsters.filter((entry) => {
    if (typeof monster === "number") {
      return optionalNumberFrom(entry, ["MonMapID", "MapID", "monMapId", "MonID", "MonsterID", "id", "ID"]) === targetId;
    }
    const name = stringFrom(firstFrom(entry, ["strMonName", "sName", "Name", "name"])).toLowerCase();
    return targetName === "*" || name.includes(targetName);
  });
  if (candidates.length === 0) return undefined;
  candidates.sort((a, b) => (optionalNumberFrom(a, ["intHP", "HP", "hp"]) ?? 0) - (optionalNumberFrom(b, ["intHP", "HP", "hp"]) ?? 0));
  const best = candidates[0];
  if (!best) return undefined;
  const cell = stringFrom(firstFrom(best, ["strFrame", "frame", "Frame", "cell", "Cell"])).trim();
  const pad = stringFrom(firstFrom(best, ["strPad", "pad", "Pad"]), "Auto").trim() || "Auto";
  return cell ? { cell, pad } : undefined;
}

async function defeatOneMonster(bot: Bot, monster: string | number, signal?: AbortSignal): Promise<void> {
  const deadline = Date.now() + 75000;
  let engaged = false;
  while (Date.now() < deadline) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    const snapshot = await bot.snapshot().catch(() => undefined);
    if (snapshot && !snapshot.alive) {
      await bot.respawn(signal);
      engaged = false;
      continue;
    }
    await bot.attack(monster).catch(() => undefined);
    await bot.useAvailableSkills().catch(() => undefined);
    const target = await bot.call<unknown>("getTargetMonster").catch(() => undefined);
    const parsed = parseMaybeJson<Record<string, unknown>>(target) ?? {};
    const hasTarget = Object.keys(parsed).length > 0;
    const hp = Number(parsed.intHP ?? parsed.HP ?? 0);
    engaged = engaged || hasTarget;
    if (engaged && (!hasTarget || hp <= 0)) {
      await bot.delay(550, signal);
      return;
    }
    await bot.delay(350, signal);
  }
  throw new Error(`Timed out hunting ${monster}.`);
}

async function getMapItem(bot: Bot, action: BuilderAction, signal?: AbortSignal): Promise<void> {
  const mapItemId = Math.floor(action.mapItemId ?? 0);
  if (mapItemId <= 0) throw new Error("Get Map Item needs a valid map item ID.");
  const quantity = clamp(action.quantity ?? 1, 1, 999);
  let current = await carriedItemQuantity(bot, String(mapItemId));
  if (current >= quantity) {
    bot.log(`Map item ${mapItemId} already at ${current}/${quantity}; skipping get.`);
    return;
  }

  if (action.map) await bot.join(action.map, "Enter", "Spawn");

  let attempts = 0;
  while (current < quantity && attempts < quantity + 10) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    attempts += 1;
    const room = await currentRoom(bot);
    bot.log(`Getting map item ${mapItemId} ${current + 1}/${quantity}.`);
    await throttleServerAction(bot, signal);
    await bot.sendPacket(`%xt%zm%getMapItem%${room}%${mapItemId}%`);
    await bot.delay(1000, signal);
    current = await carriedItemQuantity(bot, String(mapItemId));
  }

  if (current >= quantity) bot.log(`Map item ${mapItemId} reached ${current}/${quantity}.`);
  else bot.log(`Map item ${mapItemId} still reads ${current}/${quantity}; quest readiness will decide whether to continue.`);
}

async function getMapItemForQuest(bot: Bot, questId: number, action: BuilderAction, signal?: AbortSignal): Promise<void> {
  const mapItemId = Math.floor(action.mapItemId ?? 0);
  if (mapItemId <= 0) throw new Error("Get Map Item needs a valid map item ID.");
  if (action.map) await bot.join(action.map, blankToUndefined(action.cell), blankToUndefined(action.pad));

  let progress = await mapItemRequirementProgress(bot, questId, action, signal).catch(() => undefined);
  if (progress?.complete) {
    bot.log(`Map item ${mapItemId} already satisfied (${progress.current}/${progress.required}); skipping get.`);
    return;
  }

  const fallbackRequired = clamp(action.quantity ?? 1, 1, 999);
  const required = Math.max(progress?.required ?? 0, fallbackRequired);
  const current = progress?.current ?? 0;
  const packetsToSend = clamp(required - current > 0 ? required - current : fallbackRequired, 1, fallbackRequired);

  for (let attempt = 0; attempt < packetsToSend; attempt += 1) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");

    const target = progress?.required ?? required;
    const room = await currentRoom(bot);
    bot.log(`Getting map item ${mapItemId} ${Math.min(current + attempt + 1, target)}/${target}.`);
    await throttleServerAction(bot, signal);
    await bot.sendPacket(`%xt%zm%getMapItem%${room}%${mapItemId}%`);
    await bot.delay(1000, signal);
  }

  progress = await mapItemRequirementProgress(bot, questId, action, signal).catch(() => undefined);
  if (progress?.complete) {
    bot.log(`Map item ${mapItemId} reached ${progress.current}/${progress.required}.`);
    return;
  }
  const readiness = await questCompletionReadiness(bot, questId, signal).catch(() => undefined);
  if (readiness?.ready) {
    bot.log(`Quest ${questId} is ready after map item ${mapItemId}.`);
    return;
  }

  bot.log(`Map item ${mapItemId} pass complete; continuing quest steps.`);
}

async function buyItem(bot: Bot, action: BuilderAction, signal?: AbortSignal): Promise<void> {
  const shopId = Math.floor(action.shopId ?? 0);
  const itemName = (action.itemName || action.item || "").trim();
  if (shopId <= 0) throw new Error("Buy Item needs a valid shop ID.");
  if (!itemName) throw new Error("Buy Item needs an item name.");
  const targetQuantity = clamp(action.quantity ?? 1, 1, 999);
  let owned = await inventoryQuantity(bot, itemName);
  if (owned >= targetQuantity) {
    bot.log(`${itemName} is already at ${owned}/${targetQuantity}.`);
    return;
  }

  if (action.map) await bot.join(action.map, "Enter", "Spawn");

  for (let attempt = 1; attempt <= 5; attempt += 1) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    const shopInfo = await loadShop(bot, shopId, signal);
    const shopItem = findShopItem(shopInfo, itemName);
    if (!shopItem) {
      const names = shopItemsFrom(shopInfo)
        .map((item) => stringFrom(firstFrom(item, ["sName", "Name", "name", "strName"])))
        .filter(Boolean)
        .slice(0, 8)
        .join(", ");
      throw new Error(`Could not find ${itemName} in shop ${shopId}${names ? `. Found: ${names}` : "."}`);
    }

    const itemId = numberFrom(shopItem, ["ItemID", "iID", "itemId", "id", "ID"]);
    const shopItemId = numberFrom(shopItem, ["ShopItemID", "iShopItemID", "shopItemId", "iSel"]);
    if (itemId <= 0) throw new Error(`Shop ${shopId} item ${itemName} has no usable ItemID.`);

    const buyQuantity = clamp(targetQuantity - owned, 1, targetQuantity);
    bot.log(`Buying ${itemName} ${owned}/${targetQuantity}${attempt > 1 ? ` (retry ${attempt})` : ""}.`);
    await bot.call("buyItemByID", itemId, shopItemId > 0 ? shopItemId : -1, buyQuantity);
    await bot.delay(1200, signal);

    owned = await waitForInventoryQuantity(bot, itemName, targetQuantity, 5000, signal);
    if (owned >= targetQuantity) {
      bot.log(`${itemName} reached ${owned}/${targetQuantity}.`);
      return;
    }
  }

  throw new Error(`${itemName} stayed at ${owned}/${targetQuantity} after buying from shop ${shopId}.`);
}

async function loadShop(bot: Bot, shopId: number, signal?: AbortSignal): Promise<Record<string, unknown>> {
  bot.log(`Loading shop ${shopId}.`);
  await bot.callGameFunction("world.sendLoadShopRequest", shopId);
  const deadline = Date.now() + 10000;
  let lastShop: Record<string, unknown> = {};

  while (Date.now() < deadline) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    const shop = asRecord(await bot.getGameObject<unknown>("world.shopinfo").catch(() => ({})));
    if (Object.keys(shop).length > 0) lastShop = shop;
    const loadedId = numberFrom(shop, ["ShopID", "shopId", "iShopID", "id", "ID"]);
    if (loadedId === shopId && shopItemsFrom(shop).length > 0) return shop;
    await bot.delay(350, signal);
  }

  const loadedId = numberFrom(lastShop, ["ShopID", "shopId", "iShopID", "id", "ID"]);
  throw new Error(`Timed out loading shop ${shopId}${loadedId > 0 ? `; last loaded shop was ${loadedId}` : ""}.`);
}

function findShopItem(shopInfo: Record<string, unknown>, itemNameOrId: string): Record<string, unknown> | undefined {
  const needle = itemNameOrId.trim().toLowerCase();
  const idNeedle = Number(itemNameOrId);
  return shopItemsFrom(shopInfo).find((item) => {
    const name = stringFrom(firstFrom(item, ["sName", "Name", "name", "strName"])).trim().toLowerCase();
    const itemId = numberFrom(item, ["ItemID", "iID", "itemId", "id", "ID"]);
    return name === needle || (Number.isFinite(idNeedle) && itemId === idNeedle);
  });
}

function shopItemsFrom(shopInfo: Record<string, unknown>): Record<string, unknown>[] {
  return recordsFrom(firstFrom(shopInfo, ["items", "Items", "shopItems", "ShopItems"]) ?? []);
}

async function waitForInventoryQuantity(bot: Bot, itemNameOrId: string, quantity: number, timeoutMs: number, signal?: AbortSignal): Promise<number> {
  const deadline = Date.now() + timeoutMs;
  let current = await inventoryQuantity(bot, itemNameOrId);
  while (Date.now() < deadline) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    if (current >= quantity) return current;
    await bot.delay(350, signal);
    current = await inventoryQuantity(bot, itemNameOrId);
  }
  return current;
}

async function acceptQuest(bot: Bot, questId: number, signal?: AbortSignal): Promise<void> {
  if (questId <= 0) throw new Error("Accept Quest needs a valid quest ID.");
  if (await isQuestCompleted(bot, questId).catch(() => false)) {
    bot.log(`Quest ${questId} is already completed; skipping accept.`);
    return;
  }
  if (await isQuestInProgress(bot, questId)) {
    bot.log(`Quest ${questId} is already accepted.`);
    return;
  }

  await sendGetQuestPacket(bot, questId).catch(() => undefined);
  await bot.delay(350, signal);
  let helperError: unknown;
  for (let attempt = 1; attempt <= 8; attempt += 1) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    bot.log(`Accepting quest ${questId}${attempt > 1 ? ` (retry ${attempt})` : ""}.`);
    try {
      await throttleServerAction(bot, signal);
      await bot.callGameFunction("world.acceptQuest", questId);
    } catch (error) {
      helperError = error;
      if (!isExpectedQuestHelperNullError(error)) {
        bot.log(`Quest helper failed; trying packet fallback. ${firstErrorLine(error)}`);
      }
      await sendAcceptQuestPacket(bot, questId);
    }
    if (await waitForQuestInProgress(bot, questId, true, 5000, signal)) {
      await bot.delay(QUEST_ACTION_DELAY_MS, signal);
      return;
    }
    if (await isQuestCompleted(bot, questId).catch(() => false)) {
      bot.log(`Quest ${questId} is already completed; skipping accept.`);
      return;
    }
    await sendGetQuestPacket(bot, questId).catch(() => undefined);
    await bot.delay(QUEST_ACTION_DELAY_MS, signal);
  }

  const suffix = helperError instanceof Error ? ` Last Flash error: ${firstErrorLine(helperError)}` : "";
  throw new Error(`Quest ${questId} was not accepted after hidden getQuest + helper retries.${suffix}`);
}

async function completeQuest(bot: Bot, questId: number, rewardId: number, turnIns: number, signal?: AbortSignal): Promise<"completed" | "not-ready"> {
  if (questId <= 0) throw new Error("Complete Quest needs a valid quest ID.");
  await ensureQuestLoaded(bot, questId, signal);
  await bot.delay(QUEST_ACTION_DELAY_MS, signal);

  const readiness = await questCompletionReadiness(bot, questId, signal);
  if (readiness && !readiness.ready) {
    bot.log(`Quest ${questId} is not ready yet${readiness.summary ? `: ${readiness.summary}` : ""}.`);
    return "not-ready";
  }

  bot.log(`Completing quest ${questId}.`);
  let helperError: unknown;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    if (attempt > 1) bot.log(`Completing quest ${questId} (retry ${attempt}).`);
    try {
      await throttleServerAction(bot, signal);
      if (turnIns <= 1) await bot.callGameFunction("world.tryQuestComplete", questId, rewardId, false);
      else await sendCompleteQuestPacket(bot, questId, rewardId, turnIns);
    } catch (error) {
      helperError = error;
      bot.log(`Quest complete helper failed; trying packet fallback. ${firstErrorLine(error)}`);
      await sendCompleteQuestPacket(bot, questId, rewardId, turnIns);
    }
    if (await waitForQuestInProgress(bot, questId, false, 3500, signal)) {
      await bot.delay(QUEST_ACTION_DELAY_MS, signal);
      return "completed";
    }
    if ((await isQuestInProgress(bot, questId).catch(() => false)) && !(await isQuestCompleted(bot, questId).catch(() => false))) {
      bot.log(`Quest ${questId} is not ready to complete yet; continuing the farm loop.`);
      await bot.delay(QUEST_ACTION_DELAY_MS, signal);
      return "not-ready";
    }
    await bot.delay(500, signal);
  }

  if ((await isQuestInProgress(bot, questId).catch(() => false)) && !(await isQuestCompleted(bot, questId).catch(() => false))) {
    bot.log(`Quest ${questId} is not ready to complete yet; continuing the farm loop.`);
    await bot.delay(QUEST_ACTION_DELAY_MS, signal);
    return "not-ready";
  }

  const suffix = helperError instanceof Error ? ` Last Flash error: ${firstErrorLine(helperError)}` : "";
  throw new Error(`Quest ${questId} was not completed after retries.${suffix}`);
}

function isExpectedQuestHelperNullError(error: unknown): boolean {
  return firstErrorLine(error).includes("TypeError #1010");
}

function firstErrorLine(error: unknown): string {
  if (error instanceof Error) return (error.message || error.name).split("\n")[0] || error.name;
  return String(error);
}

async function sendAcceptQuestPacket(bot: Bot, questId: number): Promise<void> {
  const room = await currentRoom(bot);
  await throttleServerAction(bot);
  await bot.sendPacket(`%xt%zm%acceptQuest%${room}%${questId}%`);
}

async function sendGetQuestPacket(bot: Bot, questId: number): Promise<void> {
  const room = await currentRoom(bot);
  await throttleServerAction(bot);
  await bot.sendPacket(`%xt%zm%getQuest%${room}%${questId}%`);
}

async function sendCompleteQuestPacket(bot: Bot, questId: number, rewardId: number, turnIns: number): Promise<void> {
  const room = await currentRoom(bot);
  await throttleServerAction(bot);
  await bot.sendPacket(`%xt%zm%tryQuestComplete%${room}%${questId}%${rewardId}%false%${turnIns}%wvz%`);
}

async function currentRoom(bot: Bot): Promise<number> {
  const snapshot = await bot.snapshot().catch(() => undefined);
  return snapshot && snapshot.room > 0 ? Math.floor(snapshot.room) : 1;
}

async function waitForQuestInProgress(bot: Bot, questId: number, expected: boolean, timeoutMs: number, signal?: AbortSignal): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    if ((await isQuestInProgress(bot, questId)) === expected) return true;
    await bot.delay(250, signal);
  }
  return false;
}

async function isQuestInProgress(bot: Bot, questId: number): Promise<boolean> {
  const direct = await bot.callGameFunction<unknown>("world.isQuestInProgress", questId).catch(() => undefined);
  if (direct !== undefined) return toBoolean(direct);
  const quest = await findQuestInTree(bot, questId);
  const status = stringFrom(firstFrom(quest || {}, ["sStatus", "Status", "status"])).toLowerCase();
  return status === "p" || status === "active" || toBoolean(firstFrom(quest || {}, ["bAccepted", "Active", "active"]));
}

async function questCompletionReadiness(bot: Bot, questId: number, signal?: AbortSignal): Promise<{ ready: boolean; summary: string } | undefined> {
  await sendGetQuestPacket(bot, questId).catch(() => undefined);
  await bot.delay(250, signal);

  let directNotReady = false;
  for (const path of ["world.canTurnInQuest", "world.canCompleteQuest", "world.isQuestReadyToTurnIn"]) {
    const direct = await bot.callGameFunction<unknown>(path, questId).catch(() => undefined);
    if (typeof direct === "boolean" || typeof direct === "number" || typeof direct === "string") {
      const ready = toBoolean(direct);
      if (ready) return { ready: true, summary: "" };
      directNotReady = true;
      break;
    }
  }

  const quest = await findQuestInTree(bot, questId);
  if (!quest) return undefined;
  const directFlag = booleanFromRecord(quest, ["bCanComplete", "canComplete", "bComplete", "isComplete", "readyToComplete"]);
  if (directFlag !== undefined) return { ready: directFlag, summary: "" };

  const requirements = questRequirementRecords(quest);
  const progress: string[] = [];
  let known = 0;
  let ready = true;

  for (const requirement of requirements) {
    const target = optionalNumberFrom(requirement, ["iQty", "Qty", "Quantity", "iReqQty", "ReqQty", "Required", "required", "quantity"]);
    if (target === undefined || target <= 0) continue;
    const id = stringFrom(firstFrom(requirement, ["ItemID", "id", "ID", "iID"]));
    const name = stringFrom(firstFrom(requirement, ["sName", "Name", "name", "strName"]));
    let current = optionalNumberFrom(requirement, ["iQtyNow", "QtyNow", "Current", "current", "iHave", "Have", "have", "iGot", "Got", "got"]);
    if (current === undefined && (id || name)) current = await carriedItemQuantity(bot, id || name);
    if (current === undefined) continue;
    known += 1;
    if (current < target) ready = false;
    progress.push(`${name || id || "requirement"} ${current}/${target}`);
  }

  if (known === 0) return directNotReady ? { ready: false, summary: "" } : undefined;
  return { ready, summary: progress.join(", ") };
}

function questRequirementRecords(quest: Record<string, unknown>): Record<string, unknown>[] {
  const candidates = [
    quest.oItems,
    quest.items,
    quest.Requirements,
    quest.requirements,
    quest.reqs,
    quest.objectives,
    quest.turnin
  ];
  for (const candidate of candidates) {
    const records = recordsFrom(candidate);
    if (records.length > 0) return records;
  }
  return [];
}

async function carriedItemQuantity(bot: Bot, item: string): Promise<number> {
  const needle = item.trim().toLowerCase();
  if (!needle) return 0;
  const sources = await Promise.all([
    bot.getGameObject<unknown>("world.myAvatar.items").catch(() => []),
    bot.getGameObject<unknown>("world.myAvatar.tempitems").catch(() => []),
    bot.getGameObject<unknown>("world.myAvatar.tempItems").catch(() => []),
    bot.getGameObject<unknown>("world.myAvatar.objData.items").catch(() => [])
  ]);
  let total = 0;
  for (const source of sources) {
    for (const entry of recordsFrom(source)) {
      const name = stringFrom(firstFrom(entry, ["sName", "Name", "name", "strName"])).toLowerCase();
      const id = stringFrom(firstFrom(entry, ["ItemID", "id", "ID", "iID"])).toLowerCase();
      if (name === needle || id === needle) total += optionalNumberFrom(entry, ["iQty", "iQtyNow", "Qty", "Quantity", "quantity"]) ?? 1;
    }
  }
  return total;
}

async function evaluateCondition(bot: Bot, condition?: BuilderCondition): Promise<boolean> {
  const next = normalizeCondition(condition);
  let result = false;
  if (next.kind === "always") result = true;
  else if (next.kind === "dropVisible") result = await isDropVisible(bot, next.value || "");
  else if (next.kind === "inventoryQuantityAtLeast") result = (await inventoryQuantity(bot, next.value || "")) >= (next.amount ?? 1);
  else if (next.kind === "questUnlocked") result = await isQuestUnlocked(bot, Math.floor(next.amount ?? 0), undefined, 3500);
  else if (next.kind === "questCompleted") result = await isQuestCompleted(bot, Math.floor(next.amount ?? 0));
  else if (next.kind === "dailyQuestComplete") result = await isDailyQuestComplete(bot, Math.floor(next.amount ?? 0));
  else {
    const snapshot = await bot.snapshot();
    result = evaluateSnapshotCondition(snapshot, next);
  }
  return next.not ? !result : result;
}

function evaluateSnapshotCondition(snapshot: PlayerSnapshot, condition: BuilderCondition): boolean {
  switch (condition.kind) {
    case "loggedIn":
      return snapshot.loggedIn;
    case "mapIs":
      return snapshot.map.toLowerCase() === (condition.value || "").toLowerCase();
    case "cellIs":
      return snapshot.cell.toLowerCase() === (condition.value || "").toLowerCase();
    case "levelAtLeast":
      return snapshot.level >= (condition.amount ?? 1);
    case "levelBelow":
      return snapshot.level < (condition.amount ?? 1);
    case "classRankAtLeast":
      return snapshot.currentClassRank >= (condition.amount ?? 1);
    case "classRankBelow":
      return snapshot.currentClassRank < (condition.amount ?? 1);
    case "always":
    default:
      return true;
  }
}

async function isDropVisible(bot: Bot, item: string): Promise<boolean> {
  const drops = parseMaybeJson<Record<string, unknown>[]>(await bot.call<unknown>("getCurrentDrops").catch(() => [])) ?? [];
  const needle = item.trim().toLowerCase();
  if (!needle) return drops.length > 0;
  return drops.some((drop) => stringFrom(drop.name ?? drop.displayName).toLowerCase().includes(needle) || stringFrom(drop.id) === needle);
}

async function inventoryQuantity(bot: Bot, item: string): Promise<number> {
  const items = parseMaybeJson<Record<string, unknown>[]>(await bot.getGameObject<unknown>("world.myAvatar.items").catch(() => [])) ?? [];
  const needle = item.trim().toLowerCase();
  let total = 0;
  for (const entry of items) {
    const name = stringFrom(entry.sName ?? entry.Name ?? entry.name).toLowerCase();
    const id = stringFrom(entry.ItemID ?? entry.iID ?? entry.id);
    if (name === needle || id === needle) total += Number(entry.iQty ?? entry.iQtyNow ?? entry.quantity ?? 1);
  }
  return total;
}

async function isQuestCompleted(bot: Bot, questId: number): Promise<boolean> {
  if (questId <= 0) return false;
  const quest = await ensureQuestLoaded(bot, questId);
  if (!quest) return false;

  const slot = numberFrom(quest, ["iSlot", "Slot", "slot", "iIndex"]);
  const value = numberFrom(quest, ["iValue", "Value", "value"]);
  if (slot < 0) return true;
  if (value <= 0) return false;
  const currentValue = Number(await bot.callGameFunction<unknown>("world.getQuestValue", slot).catch(() => 0));
  return Number.isFinite(currentValue) && currentValue >= value;
}

async function isQuestUnlocked(bot: Bot, questId: number, signal?: AbortSignal, timeoutMs = 3500): Promise<boolean> {
  return (await questUnlockState(bot, questId, signal, timeoutMs)).unlocked;
}

async function questUnlockState(bot: Bot, questId: number, signal?: AbortSignal, timeoutMs = 5000): Promise<QuestUnlockState> {
  if (questId <= 0) return { questId, loaded: false, unlocked: false, source: "invalid", reason: "invalid quest ID" };
  if (await isQuestInProgress(bot, questId).catch(() => false)) {
    return { questId, loaded: true, unlocked: true, source: "active-quest", reason: "quest is already in progress" };
  }
  const direct = await callOptionalGameFunction(bot, ["world.isQuestUnlocked", "world.questIsUnlocked"], questId);
  if (direct !== undefined && toBoolean(direct)) {
    return { questId, loaded: true, unlocked: true, source: "flash-helper", reason: "world helper returned true" };
  }

  await requestQuestData(bot, questId).catch(() => undefined);
  if (!(await findQuestInTree(bot, questId))) await sendGetQuestPacket(bot, questId).catch(() => undefined);
  await bot.delay(250, signal);

  const existing = await findQuestInTree(bot, questId);
  if (existing) return questRecordUnlockState(bot, questId, existing);

  const deadline = Date.now() + timeoutMs;
  let nextRefresh = 0;
  while (Date.now() < deadline) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    if (Date.now() >= nextRefresh) {
      await requestQuestData(bot, questId).catch(() => undefined);
      if (!(await findQuestInTree(bot, questId))) await sendGetQuestPacket(bot, questId).catch(() => undefined);
      nextRefresh = Date.now() + 900;
    }
    const quest = await findQuestInTree(bot, questId);
    if (quest) return questRecordUnlockState(bot, questId, quest);
    await bot.delay(250, signal);
  }
  return {
    questId,
    loaded: false,
    unlocked: false,
    source: direct !== undefined ? "flash-helper-false-no-quest-record" : "no-quest-record",
    reason: "quest data did not load into world.questTree"
  };
}

async function questRecordUnlockState(bot: Bot, questId: number, quest: Record<string, unknown>): Promise<QuestUnlockState> {
  const name = stringFrom(firstFrom(quest, ["sName", "Name", "name", "strName"]));
  const explicit = booleanFromRecord(quest, ["bUnlocked", "unlocked", "Unlocked", "isUnlocked"]);
  if (explicit !== undefined) {
    return {
      questId,
      loaded: true,
      unlocked: explicit,
      source: "quest-record-explicit",
      reason: `quest record explicit unlock flag is ${explicit}`,
      name
    };
  }
  const slot = numberFrom(quest, ["iSlot", "Slot", "slot", "iIndex"]);
  const value = numberFrom(quest, ["iValue", "Value", "value"]);
  if (slot < 0) {
    return { questId, loaded: true, unlocked: true, source: "quest-record", reason: "slot is negative", name, slot, value };
  }
  if (value <= 0) {
    return { questId, loaded: true, unlocked: true, source: "quest-record", reason: "required value is zero", name, slot, value };
  }
  const rawCurrent = await bot.callGameFunction<unknown>("world.getQuestValue", slot).catch(() => undefined);
  const currentValue = Number(rawCurrent);
  const unlockTarget = Math.max(0, value - 1);
  const current = Number.isFinite(currentValue) ? currentValue : 0;
  return {
    questId,
    loaded: true,
    unlocked: current >= unlockTarget,
    source: "quest-record",
    reason: "Quest unlock check: world.getQuestValue(slot) >= quest.Value - 1",
    name,
    slot,
    value,
    current,
    unlockTarget
  };
}

async function requestQuestData(bot: Bot, questId: number): Promise<void> {
  await throttleServerAction(bot);
  await bot.callGameFunction("world.showQuests", String(questId), "q").catch(() => undefined);
}

async function throttleServerAction(bot: Bot, signal?: AbortSignal, minIntervalMs = SERVER_ACTION_MIN_INTERVAL_MS): Promise<void> {
  const last = lastServerActionAt.get(bot) ?? 0;
  const waitMs = last + minIntervalMs - Date.now();
  if (waitMs > 0) await bot.delay(waitMs, signal);
  lastServerActionAt.set(bot, Date.now());
}

function blankToUndefined(value: string | undefined): string | undefined {
  const next = String(value ?? "").trim();
  return next ? next : undefined;
}

function questUnlockStateMessage(state: QuestUnlockState): string {
  const name = state.name ? ` (${state.name})` : "";
  const proof =
    state.slot !== undefined
      ? ` slot ${state.slot}, current ${state.current ?? "?"}, unlock target ${state.unlockTarget ?? "?"}, complete target ${state.value ?? "?"}`
      : "";
  return `Quest ${state.questId}${name} is ${state.unlocked ? "" : "not "}unlocked [${state.source}${proof}; ${state.reason}].`;
}

async function callOptionalGameFunction(bot: Bot, paths: string[], ...args: unknown[]): Promise<unknown> {
  for (const path of paths) {
    try {
      return await bot.callGameFunction<unknown>(path, ...args);
    } catch {
      // Optional AQW helpers differ across client builds.
    }
  }
  return undefined;
}

async function isDailyQuestComplete(bot: Bot, questId: number): Promise<boolean> {
  if (questId <= 0) return false;
  const quest = await ensureQuestLoaded(bot, questId);
  if (!quest) return false;
  const field = stringFrom(firstFrom(quest, ["sField", "Field", "field"]));
  const index = numberFrom(quest, ["iIndex", "Index", "index"]);
  if (!field || index <= 0) return false;
  const achievement = Number(await bot.callGameFunction<unknown>("world.getAchievement", field, index).catch(() => 0));
  return Number.isFinite(achievement) && achievement > 0;
}

async function ensureQuestLoaded(bot: Bot, questId: number, signal?: AbortSignal): Promise<Record<string, unknown> | undefined> {
  const existing = await findQuestInTree(bot, questId);
  if (existing) return existing;
  const deadline = Date.now() + QUEST_LOAD_TIMEOUT_MS;
  let nextRefresh = 0;
  while (Date.now() < deadline) {
    if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
    if (Date.now() >= nextRefresh) {
      await requestQuestData(bot, questId).catch(() => undefined);
      if (!(await findQuestInTree(bot, questId))) await sendGetQuestPacket(bot, questId).catch(() => undefined);
      nextRefresh = Date.now() + QUEST_LOAD_REFRESH_MS;
    }
    const quest = await findQuestInTree(bot, questId);
    if (quest) return quest;
    await bot.delay(QUEST_LOAD_RETRY_MS, signal);
  }
  return undefined;
}

async function findQuestInTree(bot: Bot, questId: number): Promise<Record<string, unknown> | undefined> {
  const tree = await bot.getGameObject<unknown>("world.questTree").catch(() => undefined);
  return recordsFrom(tree).find((quest) => numberFrom(quest, ["QuestID", "ID", "id", "questId"]) === questId);
}

function normalizeCondition(value: unknown): BuilderCondition {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Partial<BuilderCondition>) : {};
  const kind = isConditionKind(source.kind) ? source.kind : "always";
  return {
    kind,
    value: typeof source.value === "string" ? source.value : "",
    amount: finiteNumber(source.amount, 1),
    not: source.not === true
  };
}

function firstMap(actions: BuilderAction[]): string {
  for (const action of actions) {
    if (action.kind === "join" && action.map) return action.map;
    const nested = firstMap([...(action.actions || []), ...(action.elseActions || [])]);
    if (nested) return nested;
  }
  return "";
}

function createBuilderId(seed: string): string {
  const safe = seed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "builder";
  const suffix = Math.random().toString(36).slice(2, 8);
  return `builder.${safe}.${suffix}`;
}

function isBuilderActionKind(value: unknown): value is BuilderActionKind {
  return (
    value === "log" ||
    value === "wait" ||
    value === "join" ||
    value === "jump" ||
    value === "walk" ||
    value === "hunt" ||
    value === "huntForItem" ||
    value === "getMapItem" ||
    value === "buyItem" ||
    value === "acceptQuest" ||
    value === "completeQuest" ||
    value === "pickupDrop" ||
    value === "sendPacket" ||
    value === "checkQuestUnlocked" ||
    value === "breakLoop" ||
    value === "breakIfQuestUnlocked" ||
    value === "if" ||
    value === "repeat" ||
    value === "while"
  );
}

function isConditionKind(value: unknown): value is BuilderConditionKind {
  return (
    value === "always" ||
    value === "loggedIn" ||
    value === "mapIs" ||
    value === "cellIs" ||
    value === "levelAtLeast" ||
    value === "levelBelow" ||
    value === "classRankAtLeast" ||
    value === "classRankBelow" ||
    value === "dropVisible" ||
    value === "inventoryQuantityAtLeast" ||
    value === "questUnlocked" ||
    value === "questCompleted" ||
    value === "dailyQuestComplete"
  );
}

function recordsFrom(raw: unknown): Record<string, unknown>[] {
  const parsed = parseMaybeJson<unknown>(raw);
  if (Array.isArray(parsed)) return parsed.map(asRecord).filter((record) => Object.keys(record).length > 0);
  if (parsed && typeof parsed === "object") {
    return Object.entries(parsed as Record<string, unknown>).map(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value)) return { ID: key, ...(value as Record<string, unknown>) };
      return { ID: key, value };
    });
  }
  return [];
}

function asRecord(value: unknown): Record<string, unknown> {
  const parsed = parseMaybeJson<unknown>(value);
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : {};
}

function firstFrom(record: Record<string, unknown>, keys: string[]): unknown {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null && record[key] !== "") return record[key];
  }
  return undefined;
}

function numberFrom(record: Record<string, unknown>, keys: string[]): number {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return 0;
}

function optionalNumberFrom(record: Record<string, unknown>, keys: string[]): number | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string" && value.trim()) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return undefined;
}

function booleanFromRecord(record: Record<string, unknown>, keys: string[]): boolean | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value !== 0;
    if (typeof value === "string" && value.trim()) return toBoolean(value);
  }
  return undefined;
}

function cleanText(value: unknown, fallback: string): string {
  const text = typeof value === "string" ? value.trim() : "";
  return text || fallback;
}

function finiteNumber(value: unknown, fallback: number | undefined): number | undefined {
  if (fallback === undefined && value === undefined) return undefined;
  const parsed = Number(value ?? fallback ?? 0);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, Math.floor(value)));
}

function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return false;
}

function stringFrom(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
  return fallback;
}

function parseMaybeJson<T>(value: unknown): T | undefined {
  if (typeof value !== "string") return value as T;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}
