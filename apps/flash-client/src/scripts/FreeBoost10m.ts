import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "FreeBoost10m",
  description: "Farms Reagents for Zifwin for random 10-minute Gold, Class, and Reputation boosts.",
  tags: ["boost", "free boost", "gold", "class", "reputation", "zifwin"],
  version: "2026.06.03.3"
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

  runtime.log("Choose which 10-minute boost to farm.");
  const choice = await resolveBoostChoice(options.boost, options.signal);
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

async function resolveBoostChoice(optionValue?: string, signal?: AbortSignal): Promise<BoostChoice | undefined> {
  const optionChoice = normalizeBoostChoice(optionValue);
  if (optionChoice) return optionChoice;

  return requestBoostChoice(signal);
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

function requestBoostChoice(signal?: AbortSignal): Promise<BoostChoice | undefined> {
  if (signal?.aborted) return Promise.resolve(undefined);
  return requestBoostChoiceWindow(signal)?.catch(() => requestBoostChoiceOverlay(signal)) ?? requestBoostChoiceOverlay(signal);
}

function requestBoostChoiceWindow(signal?: AbortSignal): Promise<BoostChoice | undefined> | undefined {
  if (typeof window === "undefined" || typeof document === "undefined") return undefined;

  const popup = window.open("", "veyra-freeboost10m-picker", "width=430,height=320,resizable=yes");
  if (!popup) return undefined;

  return new Promise((resolve, reject) => {
    let resolved = false;
    const finish = (choice: BoostChoice | undefined): void => {
      if (resolved) return;
      resolved = true;
      signal?.removeEventListener("abort", onAbort);
      window.clearInterval(closeTimer);
      try {
        popup.close();
      } catch {
        // The user may have already closed the detached picker.
      }
      resolve(choice);
    };

    const onAbort = (): void => finish(undefined);
    const closeTimer = window.setInterval(() => {
      if (popup.closed) finish(undefined);
    }, 350);

    signal?.addEventListener("abort", onAbort, { once: true });
    try {
      writeBoostChoiceWindow(popup, finish);
      popup.focus();
    } catch (error) {
      signal?.removeEventListener("abort", onAbort);
      window.clearInterval(closeTimer);
      try {
        popup.close();
      } catch {
        // Nothing to clean up if the detached picker failed while opening.
      }
      reject(error);
    }
  });
}

function writeBoostChoiceWindow(
  popup: Window,
  finish: (choice: BoostChoice | undefined) => void
): void {
  popup.document.open();
  popup.document.write(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>FreeBoost10m</title>
    <style>
      :root {
        color-scheme: dark;
        font-family: Bahnschrift, "Segoe UI", sans-serif;
        background: #111310;
        color: #f3efe7;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          linear-gradient(rgba(200, 216, 184, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200, 216, 184, 0.035) 1px, transparent 1px),
          #111310;
        background-size: 28px 28px;
      }
      main {
        width: min(390px, calc(100vw - 28px));
        border: 1px solid #343b34;
        border-radius: 8px;
        background: rgba(23, 26, 23, 0.97);
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.48);
        padding: 20px;
      }
      h1 {
        margin: 0 0 8px;
        color: #c8d8b8;
        font-size: 26px;
        line-height: 1.1;
      }
      p {
        margin: 0 0 18px;
        color: #b4ad9f;
        font-size: 14px;
        line-height: 1.4;
      }
      .choices {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      button {
        min-height: 44px;
        border: 1px solid #4d584c;
        border-radius: 6px;
        background: #222720;
        color: #f3efe7;
        font: inherit;
        font-size: 18px;
        cursor: pointer;
      }
      button.primary {
        background: #91a287;
        color: #11150f;
      }
      button.cancel {
        width: 100%;
        margin-top: 12px;
        min-height: 38px;
        background: transparent;
        color: #b4ad9f;
        font-size: 15px;
      }
      button:hover { border-color: #c8d8b8; }
    </style>
  </head>
  <body>
    <main>
      <h1>Choose Boost</h1>
      <p>FreeBoost10m will farm the selected 10-minute boost until it reaches 99.</p>
      <div class="choices">
        <button class="primary" data-choice="class">Class</button>
        <button data-choice="gold">Gold</button>
        <button data-choice="reputation">Reputation</button>
        <button data-choice="all">All</button>
      </div>
      <button class="cancel" data-choice="">Cancel</button>
    </main>
  </body>
</html>`);
  popup.document.close();

  popup.document.querySelectorAll<HTMLButtonElement>("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = normalizeBoostChoice(button.dataset.choice);
      finish(choice);
    });
  });
  popup.document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") finish(undefined);
  });
  popup.document.querySelector<HTMLButtonElement>("button")?.focus();
}

function requestBoostChoiceOverlay(signal?: AbortSignal): Promise<BoostChoice | undefined> {
  if (typeof document === "undefined") return Promise.resolve(undefined);
  if (signal?.aborted) return Promise.resolve(undefined);

  return new Promise((resolve) => {
    document.getElementById("veyra-freeboost10m-dialog")?.remove();
    const restoreFlash = hideFlashForDialog();

    const overlay = document.createElement("div");
    overlay.id = "veyra-freeboost10m-dialog";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Choose FreeBoost10m boost");
    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      zIndex: "2147483647",
      display: "grid",
      placeItems: "center",
      background: "rgba(0, 0, 0, 0.62)",
      fontFamily: "Bahnschrift, Segoe UI, sans-serif"
    });

    const card = document.createElement("section");
    Object.assign(card.style, {
      width: "min(420px, calc(100vw - 40px))",
      border: "1px solid #4a405d",
      borderRadius: "8px",
      background: "#171824",
      color: "#f2edff",
      boxShadow: "0 18px 48px rgba(0, 0, 0, 0.55)",
      padding: "22px"
    });

    const title = document.createElement("h2");
    title.textContent = "Choose Boost";
    Object.assign(title.style, {
      margin: "0 0 10px",
      color: "#d6b6ff",
      fontSize: "28px",
      lineHeight: "1.1"
    });

    const body = document.createElement("p");
    body.textContent = "FreeBoost10m will farm the selected 10-minute boost until it reaches 99.";
    Object.assign(body.style, {
      margin: "0 0 18px",
      color: "#c7c8df",
      fontSize: "15px",
      lineHeight: "1.4"
    });

    const grid = document.createElement("div");
    Object.assign(grid.style, {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px"
    });

    const choices: Array<{ label: string; value: BoostChoice }> = [
      { label: "Class", value: "class" },
      { label: "Gold", value: "gold" },
      { label: "Reputation", value: "reputation" },
      { label: "All", value: "all" }
    ];

    const cleanup = (choice: BoostChoice | undefined): void => {
      signal?.removeEventListener("abort", onAbort);
      document.removeEventListener("keydown", onKeyDown);
      overlay.remove();
      restoreFlash();
      resolve(choice);
    };

    const onAbort = (): void => cleanup(undefined);
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") cleanup(undefined);
    };

    for (const choice of choices) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice.label;
      Object.assign(button.style, {
        minHeight: "44px",
        border: "1px solid #6d5f83",
        borderRadius: "6px",
        background: choice.value === "class" ? "#c9a5ff" : "#2f3045",
        color: choice.value === "class" ? "#161421" : "#f2edff",
        fontSize: "18px",
        cursor: "pointer"
      });
      button.addEventListener("click", () => cleanup(choice.value));
      grid.appendChild(button);
    }

    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.textContent = "Cancel";
    Object.assign(cancel.style, {
      width: "100%",
      marginTop: "12px",
      minHeight: "38px",
      border: "1px solid #4a405d",
      borderRadius: "6px",
      background: "transparent",
      color: "#c7c8df",
      fontSize: "15px",
      cursor: "pointer"
    });
    cancel.addEventListener("click", () => cleanup(undefined));

    card.append(title, body, grid, cancel);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    document.addEventListener("keydown", onKeyDown);
    signal?.addEventListener("abort", onAbort, { once: true });
    (grid.querySelector("button") as HTMLButtonElement | null)?.focus();
  });
}

function hideFlashForDialog(): () => void {
  const flash = document.getElementById("flash-game") as HTMLElement | null;
  if (!flash) return () => undefined;

  const previousVisibility = flash.style.visibility;
  const previousPointerEvents = flash.style.pointerEvents;
  flash.style.visibility = "hidden";
  flash.style.pointerEvents = "none";

  return () => {
    flash.style.visibility = previousVisibility;
    flash.style.pointerEvents = previousPointerEvents;
  };
}
