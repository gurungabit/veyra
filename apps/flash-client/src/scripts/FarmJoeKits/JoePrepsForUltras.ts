import type { Bot } from "../../bot.js";
import { FarmJoeRuntime, type FarmJoeRuntimeOptions, type PlayerNumber } from "./FarmJoeRuntime.js";

export const meta = {
  name: "JoePrepsForUltras",
  description: "Veyra conversion of JoePrepsForUltras.cs. Prepares role-specific ultra boss classes, stories, potions, scrolls, gear, and enhancements.",
  tags: ["farmjoe", "ultra", "boss", "preparation", "converted"],
  version: "0.1.0"
};

export interface JoePrepsOptions extends FarmJoeRuntimeOptions {
  player?: PlayerNumber;
}

const enhancementsByPlayer: Record<PlayerNumber, string[]> = {
  Player1: ["ArcanasConcerto", "Ravenous", "Lacerate", "Dauntless", "Vainglory", "Avarice", "Absolution", "Lament", "ForgeHelm"],
  Player2: ["Valiance", "ArcanasConcerto", "Dauntless", "Lament", "Vainglory", "Penitence", "Absolution"],
  Player3: ["Health Vamp/AweBlast", "Dauntless", "Penitence", "Avarice", "Absolution", "ForgeHelm"],
  Player4: ["Ravenous", "Elysium", "ArcanasConcerto", "Dauntless", "Valiance", "Penitence", "Lament", "ForgeHelm"]
};

const enhancementQuestIds: Record<string, number> = {
  "Health Vamp/AweBlast": 2937,
  ForgeWeapon: 8738,
  Lacerate: 8739,
  Valiance: 8741,
  ArcanasConcerto: 8742,
  Absolution: 8743,
  Vainglory: 8744,
  Avarice: 8745,
  Elysium: 8821,
  Penitence: 8822,
  Lament: 8823,
  ForgeHelm: 8828,
  Dauntless: 9172,
  Ravenous: 9560
};

export class JoePrepsForUltras {
  private readonly runtime: FarmJoeRuntime;
  private readonly player: PlayerNumber;

  constructor(bot: Bot, options: JoePrepsOptions = {}) {
    this.runtime = new FarmJoeRuntime(bot, options);
    this.player = options.player ?? "Player1";
  }

  async playerSetup(): Promise<void> {
    this.runtime.log(`Setting up for ${this.player}.`);
    switch (this.player) {
      case "Player1":
        await this.setupPlayerOne();
        break;
      case "Player2":
        await this.setupPlayerTwo();
        break;
      case "Player3":
        await this.setupPlayerThree();
        break;
      case "Player4":
        await this.setupPlayerFour();
        break;
      default:
        this.runtime.log("Invalid player number selected. Please choose Player1, Player2, Player3, or Player4.");
        break;
    }
    await this.otherPrep();
  }

  async otherPrep(): Promise<void> {
    this.runtime.log("Performing general preparations for all players.");
    await this.runtime.farmExperience(100);
    await this.runtime.farmGold();
    await this.runtime.bladeOfAweRep();
    await this.checkAndUnlockEnhancements();

    this.runtime.log("Getting potions and scrolls.");
    await this.runtime.externalStep("PotionBuyer.INeedYourStrongestPotions", "Potent Malevolence Elixir x10");
    await this.runtime.externalStep("BuyScrolls.BuyScroll", "Scroll of Enrage x1000");
    const lifeStealQty = await this.runtime.quantity("Scroll of Life Steal");
    if (lifeStealQty < 99) await this.runtime.buyItem("terminatemple", 2328, "Scroll of Life Steal", 99 - lifeStealQty);

    this.runtime.log("Completing all storylines.");
    await this.runtime.externalStep("AllStories.CompleteAll");
    if (!(await this.runtime.contains("Necrotic Sword of Doom"))) {
      this.runtime.log("Starting Necrotic Sword of Doom farm.");
      await this.runtime.externalStep("CoreNSOD.GetNSOD");
      if (await this.runtime.contains("Necrotic Sword of Doom")) this.runtime.log("Successfully obtained Necrotic Sword of Doom.");
      else this.runtime.log("NSOD farm checkpoint completed; continue manually or with a dedicated script if still missing.");
    } else {
      this.runtime.log("Necrotic Sword of Doom already obtained.");
    }
  }

  private async setupPlayerOne(): Promise<void> {
    this.runtime.log("Setting up Player 1 (Tank/Support).");
    await this.runtime.externalStep("CoreLR.GetLR", "Legion Revenant");
    await this.runtime.externalStep("ArchPaladin.GetAP");
    await this.runtime.externalStep("StoneCrusher.GetSC");
    await this.warnIfMissingManual("Chaos Avenger", "Chaos Avenger must be obtained manually because it requires ultras.");
  }

  private async setupPlayerTwo(): Promise<void> {
    this.runtime.log("Setting up Player 2 (DPS/Chrono).");
    await this.warnIfMissingManual("Quantum Chronomancer", "Quantum Chronomancer must be bought for 6k ACs in /heromart, or use Arachnomancer instead.");
    await this.runtime.externalStep("CoreLR.GetLR", "Legion Revenant");
    await this.warnIfMissingManual("Chaos Avenger", "Chaos Avenger must be obtained manually because it requires ultras.");
    await this.runtime.externalStep("StoneCrusher.GetSC");
  }

  private async setupPlayerThree(): Promise<void> {
    this.runtime.log("Setting up Player 3 (Support).");
    await this.runtime.externalStep("LordOfOrder.GetLoO");
    await this.runtime.externalStep("CoreLR.GetLR", "Legion Revenant");
  }

  private async setupPlayerFour(): Promise<void> {
    this.runtime.log("Setting up Player 4 (DPS/Support).");
    await this.runtime.externalStep("ArchPaladin.GetAP");
    await this.warnIfMissingManual("LightCaster", "LightCaster requires 1000 ACs to purchase; pre-farming materials checkpoint logged.");
    if (!(await this.runtime.contains("Verus DoomKnight"))) await this.runtime.externalStep("VerusDoomKnightClass.GetClass");
    else this.runtime.log("Verus DoomKnight found.");
  }

  private async checkAndUnlockEnhancements(): Promise<void> {
    const enhancements = enhancementsByPlayer[this.player];
    this.runtime.log(`Checking enhancements for ${this.player}.`);
    const missing: string[] = [];

    for (const enhancement of enhancements) {
      const questId = enhancementQuestIds[enhancement];
      if (!questId) {
        this.runtime.log(`Enhancement ${enhancement} not found in reference list.`);
        continue;
      }
      const completed = await this.runtime.isQuestCompleted(questId);
      this.runtime.log(`${enhancement} - ${completed ? "complete" : "missing"}.`);
      if (!completed) missing.push(enhancement);
    }

    if (missing.length === 0) {
      this.runtime.log("No missing enhancements for your player role.");
      return;
    }

    this.runtime.log("Unlocking missing enhancements.");
    for (const enhancement of missing) {
      if (enhancement === "Health Vamp/AweBlast") await this.runtime.bladeOfAweRep();
      else await this.runtime.unlockEnhancement(enhancement, enhancementQuestIds[enhancement]);
    }
  }

  private async warnIfMissingManual(item: string, message: string): Promise<void> {
    if (await this.runtime.contains(item)) this.runtime.log(`${item} found.`);
    else this.runtime.log(`Note: ${message}`);
  }
}

export async function runForPlayer(bot: Bot, player: PlayerNumber, options: FarmJoeRuntimeOptions = {}): Promise<void> {
  await new JoePrepsForUltras(bot, { ...options, player }).playerSetup();
}

export async function main(bot: Bot, options: JoePrepsOptions = {}): Promise<void> {
  await new JoePrepsForUltras(bot, options).playerSetup();
}
