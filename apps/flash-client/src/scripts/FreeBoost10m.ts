import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "FreeBoost10m",
  description: "Farms Reagents for Zifwin for random 10-minute Gold, Class, and Reputation boosts.",
  tags: ["boost", "free boost", "gold", "class", "reputation", "zifwin"],
  version: "2026.06.02.9"
};

export interface FreeBoost10mOptions extends ZeroToHeroRuntimeOptions {
  boost?: string;
  maxTurnIns?: number;
}

const questId = 6208;
const maxStack = 99;
const boosts = [
  {
    key: "gold",
    label: "Gold",
    name: "GOLD Boost! (10 min)",
    aliases: ["gold", "g", "7140"]
  },
  {
    key: "class",
    label: "Class",
    name: "CLASS Boost! (10 min)",
    aliases: ["class", "cp", "class points", "c", "8877"]
  },
  {
    key: "reputation",
    label: "Reputation",
    name: "REPUTATION Boost! (10 min)",
    aliases: ["reputation", "rep", "r", "8879"]
  }
] as const;
type Boost = (typeof boosts)[number];
type BoostChoice = Boost["key"] | "all";

const reagentRoute = [
  { map: "bloodtusk", monster: "Trollola Plant", item: "Trollola Nectar", quantity: 2 },
  { map: "cloister", monster: "Acornent", item: "Nimblestem", quantity: 1 },
  { map: "nibbleon", monster: "Dark Makai", item: "Moglinberries", quantity: 3 }
] as const;

export async function main(bot: Bot, options: FreeBoost10mOptions = {}): Promise<void> {
  const runtime = new ZeroToHeroRuntime(bot, options);
  await runtime.ensureLoggedIn();

  const choice = resolveBoostChoice(options.boost);
  if (!choice) {
    runtime.log("No boost selected; stopping FreeBoost10m.");
    return;
  }

  const selectedBoosts = choice === "all" ? [...boosts] : boosts.filter((boost) => boost.key === choice);
  if (await targetsMet(runtime, selectedBoosts)) {
    runtime.log(`${selectedBoosts.map((boost) => boost.label).join(", ")} boost stack is already maxed at ${maxStack}.`);
    return;
  }

  const maxTurnIns = normalizeMaxTurnIns(options.maxTurnIns);
  runtime.log(`Farming ${meta.name}: ${selectedBoosts.map((boost) => boost.label).join(", ")} to max stack ${maxStack}.`);
  runtime.log("Quest rewards are random, so this can take a while.");

  let turnIns = 0;
  while (!options.signal?.aborted && !(await targetsMet(runtime, selectedBoosts))) {
    if (turnIns >= maxTurnIns) {
      runtime.log(`Stopped after ${turnIns} Reagents for Zifwin turn-ins; selected boost is not maxed yet.`);
      return;
    }

    await runtime.acceptDrops(boosts.map((boost) => boost.name));
    await runtime.acceptQuest(questId);
    await farmReagents(runtime);
    await runtime.completeQuest(questId);
    turnIns += 1;
    await runtime.acceptDrops(boosts.map((boost) => boost.name));
    await logProgress(runtime, selectedBoosts, turnIns);
    await bot.delay(700, options.signal);
  }

  runtime.log(`${selectedBoosts.map((boost) => boost.label).join(", ")} boost stack reached max ${maxStack}.`);
}

async function farmReagents(runtime: ZeroToHeroRuntime): Promise<void> {
  for (const reagent of reagentRoute) {
    while ((await runtime.quantity(reagent.item, false)) < reagent.quantity) {
      await runtime.hunt(reagent.map, reagent.monster, reagent.item, reagent.quantity, true);
    }
  }
}

async function targetsMet(
  runtime: ZeroToHeroRuntime,
  selectedBoosts: Boost[]
): Promise<boolean> {
  for (const boost of selectedBoosts) {
    if ((await runtime.quantity(boost.name, true)) < maxStack) return false;
  }
  return true;
}

async function logProgress(
  runtime: ZeroToHeroRuntime,
  selectedBoosts: Boost[],
  turnIns: number
): Promise<void> {
  const parts = [];
  for (const boost of selectedBoosts) {
    parts.push(`${boost.label} ${await runtime.quantity(boost.name, true)}/${maxStack}`);
  }
  runtime.log(`Turn-in ${turnIns}: ${parts.join(", ")}.`);
}

function resolveBoostChoice(optionValue?: string): BoostChoice | undefined {
  const optionChoice = normalizeBoostChoice(optionValue);
  if (optionChoice) return optionChoice;

  if (typeof globalThis.prompt !== "function") return undefined;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const answer = globalThis.prompt(
      "Which 10-minute boost should FreeBoost10m farm to max?\n\nEnter: Gold, Class, Reputation, or All",
      attempt === 0 ? "Class" : ""
    );
    if (answer === null) return undefined;
    const choice = normalizeBoostChoice(answer);
    if (choice) return choice;
  }

  return undefined;
}

function normalizeBoostChoice(value: unknown): BoostChoice | undefined {
  const key = String(value ?? "").trim().toLowerCase();
  if (!key) return undefined;
  if (["all", "a", "*"].includes(key)) return "all";
  return boosts.find((boost) => (boost.aliases as readonly string[]).includes(key))?.key;
}

function normalizeMaxTurnIns(value: number | undefined): number {
  if (value === undefined || value === null) return Number.POSITIVE_INFINITY;
  if (!Number.isFinite(value) || value <= 0) return Number.POSITIVE_INFINITY;
  return Math.floor(value);
}
