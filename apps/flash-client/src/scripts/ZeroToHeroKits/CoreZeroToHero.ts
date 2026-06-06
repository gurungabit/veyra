import type { Bot } from "../../bot.js";
import {
  ZeroToHeroRuntime,
  isClassItem,
  itemName,
  type ZeroToHeroRuntimeOptions,
  type PetChoice
} from "./ZeroToHeroRuntime.js";

export const meta = {
  name: "CoreZeroToHero",
  description: "Veyra ZeroToHero progression, class setup, outfit, pet, and endgame flow.",
  tags: ["zero-to-hero", "progression", "core"],
  version: "2026.06.06.6"
};

const soloClasses = [
  "King's Echo",
  "Chaos Avenger",
  "Void Highlord",
  "Legion Revenant",
  "Dragon of Time",
  "ArchPaladin",
  "Lord Of Order",
  "Cryomancer",
  "Dragonslayer General",
  "Glacial Berserker",
  "Dragonslayer",
  "DragonSoul Shinobi",
  "Assassin",
  "Ninja Warrior",
  "Classic Ninja",
  "Ninja",
  "Ninja (Rare)",
  "Rogue (Rare)",
  "Rogue",
  "Healer (Rare)",
  "Healer"
];

const farmClasses = [
  "Legion Revenant",
  "ArchMage",
  "Dragon of Time",
  "Archfiend",
  "Blaze Binder",
  "Scarlet Sorceress",
  "Pyromancer",
  "Master Ranger",
  "Mage (Rare)",
  "Mage"
];
const dodgeClasses = [
  "Great Thief",
  "Yami No Ronin",
  "Chrono Assassin",
  "Horc Evader",
  "Assassin",
  "Ninja Warrior",
  "Classic Ninja",
  "Ninja",
  "Ninja (Rare)",
  "Rogue (Rare)",
  "Rogue"
];

export class CoreZeroToHero {
  private readonly runtime: ZeroToHeroRuntime;
  private readonly options: ZeroToHeroRuntimeOptions;
  private lastCheckedLevel = 0;
  private lastSolo = "";
  private lastFarm = "";
  private lastDodge = "";
  private soloClass = "";
  private farmClass = "";
  private dodgeClass = "";

  constructor(bot: Bot, options: ZeroToHeroRuntimeOptions = {}) {
    this.options = options;
    this.runtime = new ZeroToHeroRuntime(bot, options);
  }

  async doAll(): Promise<void> {
    await this.runtime.runTask("CoreAdvanced.GearStore", "initial gear save and enhancement pass");
    await this.level1to30();
    await this.level30to75();
    await this.level75to100();
    await this.endGame();
    await this.outfit();
    await this.pets("hotMama");
    await this.pets("akriloth");
    await this.runtime.runTask("CoreAdvanced.GearStore", "final gear save and enhancement pass");
  }

  async level1to30(): Promise<void> {
    await this.beginnerItems();
    this.runtime.log(
      "Class points may desync around Rank 9; if a class appears stuck, stop and relog before resuming."
    );
  }

  async level30to75(): Promise<void> {
    await this.setClass();
    if ((await this.runtime.snapshot()).level >= 30) await this.runtime.runTask("CoreDailies.EldersBlood");
    if (this.options.getBoosts) await this.ensureFarmerJoeBoosts();
    this.runtime.log("ZeroToHero level brackets: 30, 50, 55, 60, 65, 70, 75.");

    const handlers: Record<number, () => Promise<void>> = {
      30: () => this.handleLevel30(),
      50: () => this.handleLevel50(),
      55: () => this.handleLevel55(),
      60: () => this.handleLevel60(),
      65: () => this.handleLevel65(),
      70: () => this.handleLevel70(),
      75: () => this.handleLevel75()
    };

    for (const level of [30, 50, 55, 60, 65, 70, 75]) {
      const snapshot = await this.runtime.snapshot();
      if (snapshot.level <= level) await this.runtime.smartEnhance(snapshot.currentClassName);
      await this.runtime.farmExperience(level);
      const handler = handlers[level];
      if (handler) await handler();
      await this.bankAllUnusedClasses();
    }
  }

  async level75to100(): Promise<void> {
    this.runtime.log("Phase 1: Class preparation for 13 Lords of Chaos.");
    if (await this.runtime.contains("Dragon of Time")) await this.runtime.rankClass("Dragon of Time");
    else if (!(await this.runtime.contains(["Healer", "Healer (Rare)"], 1, true))) {
      await this.runtime.buyItem("classhalla", 176, "Healer");
      await this.runtime.rankClass("Healer");
    }

    this.runtime.log("Phase 2: Cape of Awe and 13 Lords of Chaos.");
    await this.runtime.runTask("CapeOfAwe.GetCoA");
    await this.runtime.equip("Cape of Awe");
    await this.setClass();
    await this.runtime.runTask("Core13LoC.Complete13LOC");

    this.runtime.log("Phase 3: Solo classes, LoO daily, and weapon enhancements.");
    await this.runtime.runTask("LordOfOrder.GetLoO");
    await this.setClass();
    await this.runtime.bank(["Highlord's Circlet", "Highlord's Locks", "Highlord's Hood", "Lord of Order"]);

    for (const className of ["Frost Spirit Reaver", "Northlands Monk", "Shaman"]) {
      if (!(await this.runtime.contains(className))) await this.runtime.runTask(`${className} acquisition`);
      if (await this.runtime.contains(className)) await this.runtime.rankClass(className);
    }

    await this.runtime.unlockEnhancement("ForgeWeaponEnhancement");
    await this.runtime.unlockEnhancement("Praxis");
    await this.runtime.farmExperience(80);

    this.runtime.log("Phase 4: Celestial Arena, cape enhancements, YnR, DoT, and final XP.");
    await this.runtime.runTask("CelestialArena.DoAll");
    await this.runtime.runTask("Blinding Bright of Awe.GetBBoA");
    for (const enhancement of ["ForgeCapeEnhancement", "Absolution", "Vainglory", "Avarice", "Lament"]) {
      await this.runtime.unlockEnhancement(enhancement);
    }
    await this.runtime.runTask("CoreYnR.GetYnR");
    await this.setClass();
    await this.runtime.runTask("DragonOfTime.GetDoT");
    await this.runtime.farmExperience(100);
    await this.setClass();
    await this.runtime.runTask("KingsEcho.GetKE");
    await this.runtime.runTask("ShadowrealmMerge.BuyAllMerge", "Hollowborn Reaper's Scythe");
    this.runtime.log("Level 75 to 100 progression complete.");
  }

  async endGame(): Promise<void> {
    if (this.options.outfit) await this.outfit();
    await this.setClass();
    this.runtime.log("P5: Preparing remaining forge enhancements and Apotheosis prerequisites.");
    await this.runtime.unlockEnhancement("HerosValiance");
    if (await this.runtime.contains("The Divine Will")) await this.runtime.unlockEnhancement("Elysium");
    else this.runtime.log("Skipping Elysium; The Divine Will is not owned.");
    if ((await this.runtime.contains("Void Highlord")) && (await this.runtime.contains("Roentgenium of Nulgath", 10)))
      await this.runtime.unlockEnhancement("Ravenous");
    else this.runtime.log("Skipping Ravenous; Void Highlord and 10 Roentgenium of Nulgath are required.");
    await this.runtime.runTask("ExaltedApotheosisPreReqs.PreReqs");
    this.runtime.log("P6: Max nation materials via Supplies.");
    await this.runtime.runTask("CoreNation.Supplies");
  }

  async outfit(): Promise<void> {
    await this.setClass();
    await this.shirtAndHat();
    await this.serversAreDown();
    await this.runtime.smartEnhance();
    await this.pets(this.options.petChoice ?? "none");
    if (this.options.equipOutfit) {
      await this.runtime.equip("NO BOTS Armor");
      await this.runtime.equip("Scarecrow Hat");
      await this.runtime.equip("The Server is Down");
      await this.runtime.equip("Hollowborn Reaper's Scythe");
      const pet = this.petItemName(this.options.petChoice ?? "none");
      if (pet) await this.runtime.equip(pet);
    }
    this.runtime.log("We are farmers, bum ba dum bum bum bum bum.");
  }

  async pets(petChoice: PetChoice = "none"): Promise<void> {
    if (petChoice === "none") return;
    if (petChoice === "hotMama" && !(await this.runtime.contains("Hot Mama"))) {
      await this.setClass();
      await this.runtime.hunt("battleundere", "Hot Mama", "Hot Mama", 1, false);
      await this.runtime.equip("Hot Mama");
    }
    if (petChoice === "akriloth" && !(await this.runtime.contains("Akriloth Pet"))) {
      await this.setClass();
      await this.runtime.hunt("gravestrike", "Ultra Akriloth", "Akriloth Pet", 1, false);
      await this.runtime.equip("Akriloth Pet");
    }
  }

  async setClass(): Promise<void> {
    const snapshot = await this.runtime.snapshot();
    const levelIncreased = snapshot.level > this.lastCheckedLevel;
    const unchanged =
      !levelIncreased &&
      this.lastSolo === this.soloClass &&
      this.lastFarm === this.farmClass &&
      this.lastDodge === this.dodgeClass;
    if (unchanged) return;

    this.soloClass = (await this.resolveClass(this.soloClass, soloClasses)) || this.soloClass;
    this.farmClass = (await this.resolveClass(this.farmClass, farmClasses)) || this.farmClass;
    this.dodgeClass = (await this.resolveClass(this.dodgeClass, dodgeClasses)) || this.dodgeClass;

    await this.rankIfNeeded(this.soloClass, "SoloClass");
    await this.rankIfNeeded(this.farmClass, "FarmClass");
    await this.rankIfNeeded(this.dodgeClass, "DodgeClass");
    if (this.soloClass) await this.runtime.equip(this.soloClass);

    this.lastCheckedLevel = snapshot.level;
    this.lastSolo = this.soloClass;
    this.lastFarm = this.farmClass;
    this.lastDodge = this.dodgeClass;
  }

  async dmgOverTimeEnh(): Promise<void> {
    const candidates = [
      "ShadowStalker of Time",
      "ShadowWeaver of Time",
      "ShadowWalker of Time",
      "Infinity Knight",
      "Interstellar Knight",
      "Void Highlord",
      "Dragon of Time",
      "Timeless Dark Caster",
      "Frostval Barbarian",
      "Blaze Binder",
      "DeathKnight",
      "DragonSoul Shinobi",
      "Shadow Dragon Shinobi",
      "Legion Revenant"
    ];
    const found = await this.runtime.equipFirst(candidates);
    await this.runtime.smartEnhance(found);
  }

  private async handleLevel30(): Promise<void> {
    if (
      !(await this.runtime.contains("Master Ranger")) ||
      !(await this.runtime.anyRank10(["Master Ranger"]))
    ) {
      if (await this.runtime.contains("Venom Head")) await this.runtime.sell("Venom Head");
      await this.runtime.runTask("MasterRanger.GetMR");
    }
    if (!(await this.runtime.contains("Dragonslayer")) || !(await this.runtime.anyRank10(["Dragonslayer"]))) {
      await this.runtime.runTask("Dragonslayer.GetDragonslayer");
    }
    await this.runtime.bladeOfAweRep();
    await this.runtime.buyItem("museum", 631, "Awethur's Accoutrements");
    await this.runtime.unlockEnhancement("ForgeHelmEnhancement");
  }

  private async handleLevel50(): Promise<void> {
    if (
      !(await this.runtime.contains("Scarlet Sorceress")) ||
      !(await this.runtime.anyRank10(["Scarlet Sorceress"]))
    )
      await this.runtime.runTask("ScarletSorceress.GetSSorc");
    const hasDragonslayerGeneral =
      (await this.runtime.contains("Dragonslayer General")) ||
      (await this.runtime.contains(35996)) ||
      (await this.runtime.contains(35963));
    if (!hasDragonslayerGeneral || !(await this.runtime.anyRank10(["Dragonslayer General", 35996, 35963])))
      await this.runtime.runTask("DragonslayerGeneral.GetDSGeneral");
    await this.runtime.runTask("BurningBlade.GetBurningBlade");
  }

  private async handleLevel55(): Promise<void> {
    if (!(await this.runtime.contains("Blaze Binder")) || !(await this.runtime.anyRank10(["Blaze Binder"])))
      await this.runtime.runTask("BlazeBinder.GetClass");
    if (!(await this.runtime.contains("Cryomancer")) || !(await this.runtime.anyRank10(["Cryomancer"])))
      await this.runtime.runTask("Cryomancer.DoCryomancer");
  }

  private async handleLevel60(): Promise<void> {
    if (
      !(await this.runtime.contains("DragonSoul Shinobi")) ||
      !(await this.runtime.anyRank10(["DragonSoul Shinobi"]))
    )
      await this.runtime.runTask("DragonShinobi.GetDSS");
    await this.runtime.unlockEnhancement("Lacerate");
  }

  private async handleLevel65(): Promise<void> {
    if (
      !(await this.runtime.contains("Glacial Berserker")) ||
      !(await this.runtime.anyRank10(["Glacial Berserker"]))
    )
      await this.runtime.runTask("GlacialBerserker.GetGB");
  }

  private async handleLevel70(): Promise<void> {
    if (!(await this.runtime.contains("Horc Evader")) || !(await this.runtime.anyRank10(["Horc Evader"])))
      await this.runtime.runTask("HorcEvader.GetHE");
    for (const enhancement of ["Smite", "Vim", "Pneuma", "Examen", "Anima"])
      await this.runtime.unlockEnhancement(enhancement);
    if (!(await this.runtime.contains("ArchPaladin")) || !(await this.runtime.anyRank10(["ArchPaladin"])))
      await this.runtime.runTask("ArchPaladin.GetAP");
  }

  private async handleLevel75(): Promise<void> {
    if (!(await this.runtime.contains("Archfiend DoomLord")))
      await this.runtime.runTask("EnoughDOOMforanArchfiend.AFDL");
    if (!(await this.runtime.contains("Archfiend")) || !(await this.runtime.anyRank10(["Archfiend"])))
      await this.runtime.runTask("Archfiend.GetArchfiend");
  }

  private async beginnerItems(): Promise<void> {
    const hasHighTier =
      (await this.runtime.contains(soloClasses.slice(0, -9), 1, true)) &&
      (await this.runtime.contains(farmClasses.slice(0, -2), 1, true));
    const hasBothRank10Beginners =
      (await this.runtime.contains(["Assassin", "Ninja Warrior", "Ninja"], 1, true)) &&
      (await this.runtime.anyRank10(["Ninja"])) &&
      (await this.runtime.contains(["Mage (Rare)", "Mage"], 1, true)) &&
      (await this.runtime.anyRank10(["Mage"])) &&
      (await this.runtime.snapshot()).level >= 30;
    if (hasHighTier || hasBothRank10Beginners) {
      this.runtime.log("Account is level 30+ or has starter classes; skipping beginner items.");
      return;
    }

    await this.runtime.runTask("Tutorial.Badges");
    await this.runtime.buyItem("classhalla", 299, "Battle Oracle Hood");
    await this.runtime.buyItem("classhalla", 299, "Battle Oracle Wings");
    await this.runtime.buyItem("classhalla", 299, "Battle Oracle Battlestaff");
    await this.runtime.equip("Battle Oracle Hood");
    await this.runtime.equip("Battle Oracle Wings");
    await this.runtime.equip("Battle Oracle Battlestaff");
    await this.runtime.farmExperience(10);

    if (!(await this.runtime.contains(["Rogue (Rare)", "Rogue"], 1, true)))
      await this.runtime.buyItem("classhalla", 172, "Rogue");
    if (!(await this.runtime.contains(["Assassin", "Ninja Warrior", "Ninja"], 1, true))) {
      await this.runtime.rankClass("Rogue");
      await this.runtime.farmExperience(25);
      await this.setClass();
      await this.runtime.runTask("Mazumi.MazumiQuests");
      await this.runtime.buyItem("classhalla", 178, "Ninja");
    }
    await this.setClass();
    if (!(await this.runtime.contains(["Mage (Rare)", "Mage"], 1, true)))
      await this.runtime.buyItem("classhalla", 174, 15653, 1, 9845);
    await this.setClass();
  }

  private async shirtAndHat(): Promise<void> {
    await this.runtime.runTask("SynderesMerge.BuyAllMerge", "NO BOTS Armor");
    await this.runtime.buyItem("yulgar", 16, "Scarecrow Hat");
  }

  private async serversAreDown(): Promise<void> {
    if (await this.runtime.contains("The Server is Down")) return;
    await this.setClass();
    await this.runtime.hunt("undergroundlabb", "Rabid Server Hamster", "The Server is Down", 1, false);
    await this.runtime.equip("The Server is Down");
  }

  private async ensureFarmerJoeBoosts(): Promise<void> {
    const snapshot = await this.runtime.snapshot();
    await this.runtime.farmFishingBoost("REP", 10);
    if (snapshot.level < 100) await this.runtime.farmFishingBoost("XP", 10);

    const targets = [
      { label: "Gold", name: "GOLD Boost! (10 min)", quantity: 10 },
      { label: "Class", name: "CLASS Boost! (10 min)", quantity: 10 },
      { label: "Reputation", name: "REPUTATION Boost! (10 min)", quantity: 10 }
    ];
    if (await this.freeBoostTargetsMet(targets)) return;

    this.runtime.log("GetBoosts: farming Zifwin 10-minute Gold/Class/Reputation boosts to 10.");
    let turnIns = 0;
    while (!(await this.freeBoostTargetsMet(targets))) {
      if (this.options.maxFarmLoops && turnIns >= this.options.maxFarmLoops) {
        this.runtime.log(`Stopped GetBoosts after ${turnIns} Zifwin turn-ins due to maxFarmLoops.`);
        return;
      }
      await this.runtime.acceptDrops(targets.map((target) => target.name));
      await this.runtime.acceptQuest(6208);
      await this.runtime.hunt("bloodtusk", "Trollola Plant", "Trollola Nectar", 2, true);
      await this.runtime.hunt("cloister", "Acornent", "Nimblestem", 1, true);
      await this.runtime.hunt("nibbleon", "Dark Makai", "Moglinberries", 3, true);
      await this.runtime.completeQuest(6208);
      await this.runtime.acceptDrops(targets.map((target) => target.name));
      turnIns += 1;
      await this.logFreeBoostProgress(targets, turnIns);
    }
  }

  private async freeBoostTargetsMet(targets: Array<{ name: string; quantity: number }>): Promise<boolean> {
    for (const target of targets) {
      if ((await this.runtime.quantity(target.name, true)) < target.quantity) return false;
    }
    return true;
  }

  private async logFreeBoostProgress(
    targets: Array<{ label: string; name: string; quantity: number }>,
    turnIns: number
  ): Promise<void> {
    const parts = [];
    for (const target of targets) {
      parts.push(`${target.label} ${await this.runtime.quantity(target.name, true)}/${target.quantity}`);
    }
    this.runtime.log(`GetBoosts turn-in ${turnIns}: ${parts.join(", ")}.`);
  }

  private petItemName(petChoice: PetChoice): string {
    if (petChoice === "hotMama") return "Hot Mama";
    if (petChoice === "akriloth") return "Akriloth Pet";
    return "";
  }

  private async resolveClass(current: string, pool: string[]): Promise<string> {
    if (
      current &&
      current.toLowerCase() !== "generic" &&
      pool.some((name) => name.toLowerCase() === current.toLowerCase()) &&
      (await this.runtime.contains(current))
    ) {
      return current;
    }
    for (const candidate of pool) {
      if (await this.runtime.contains(candidate)) return candidate;
    }
    return current;
  }

  private async bankAllUnusedClasses(): Promise<void> {
    const keep = new Set(
      [this.soloClass, this.farmClass, this.dodgeClass].filter(Boolean).map((name) => name.toLowerCase())
    );
    const items = await this.runtime.inventoryOnly();
    const toBank = items
      .filter(isClassItem)
      .map(itemName)
      .filter((name) => name && !keep.has(name.toLowerCase()));
    if (toBank.length > 0) await this.runtime.bank(toBank);
  }

  private async rankIfNeeded(className: string, label: string): Promise<void> {
    if (!className) return;
    if (!(await this.runtime.contains(className))) {
      this.runtime.log(`WARNING: ${label} class '${className}' is not in inventory.`);
      return;
    }
    if (await this.runtime.anyRank10([className])) return;
    this.runtime.log(`${label} resolved -> ${className}.`);
    await this.runtime.rankClass(className);
  }
}

export async function main(bot: Bot, options: ZeroToHeroRuntimeOptions = {}): Promise<void> {
  await new CoreZeroToHero(bot, options).doAll();
}
