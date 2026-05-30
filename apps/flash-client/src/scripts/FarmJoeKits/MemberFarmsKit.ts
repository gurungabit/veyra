import type { Bot } from "../../bot.js";
import { FarmJoeRuntime, type FarmJoeRuntimeOptions } from "./FarmJoeRuntime.js";

export const meta = {
  name: "Member Farms Kit",
  description: "Veyra member farms, AC drops, dual wield farms, and merge passes.",
  tags: ["farmjoe", "member", "kit", "legend"],
  version: "0.1.0"
};

const tachyonShop = [
  "Orange Tachyon Blade",
  "Blue Tachyon Blade",
  "Chrono Assassin Armor",
  "Dual Tachyon Blades"
];
const boneTowerShop = [
  "DeathKnight Lord",
  "DeathKnight's Blade",
  "DeathKnight Helm",
  "Silver DeathKnight Lord",
  "Silver DeathKnight's Blade",
  "Silver DeathKnight Helm",
  "Golden DeathKnight Lord",
  "Golden DeathKnight's Blade",
  "Golden DeathKnight Helm",
  "DeathKnight Lord Cape"
];

export class MemberFarmsKit {
  private readonly runtime: FarmJoeRuntime;

  constructor(bot: Bot, options: FarmJoeRuntimeOptions = {}) {
    this.runtime = new FarmJoeRuntime(bot, options);
  }

  async doAll(): Promise<void> {
    if (!(await this.runtime.isMember())) {
      this.runtime.log("This script is Member-Only.");
      return;
    }

    for (const daily of [
      "MonthlyTreasureChestKeys",
      "WheelofDoom",
      "FreeDailyBoost",
      "BeastMasterChallenge"
    ]) {
      await this.runtime.runTask(`CoreDailies.${daily}`);
    }

    await this.runtime.runTask("CoreSDKA.DoAll");
    await this.dragonBlade();
    await this.runtime.bank([
      "DragonBlade of Nulgath",
      "Legion DragonBlade of Nulgath",
      "Ebony DragonBlade of Nulgath",
      "Dual DragonBlades of Nulgath"
    ]);
    await this.runtime.runTask("LegendaryElementalWarrior.GetLEW");
    await this.runtime.bank("Legendary Elemental Warrior");

    await this.runtime.buyItem(undefined, 679, "Legendary Hero", 1, 11597);
    await this.runtime.buyItem(undefined, 679, "Dark Legendary Hero", 1, 11668);
    await this.runtime.rankClass("Legendary Hero");
    await this.runtime.rankClass("Dark Legendary Hero");

    await this.runtime.bank([
      "Taro's Prismatic Manslayer",
      "Taro's Dual Prismatic Manslayers",
      "Taro's BattleBlade"
    ]);
    await this.runtime.runTask("ArchfiendDragonEgg.GetAFDE");
    await this.runtime.bank("ArchFiend Baby Dragon Pet");
    await this.runtime.runTask("EvolvedShadowOrb.GetEvolvedShadowOrb");
    await this.runtime.bank("Evolved Shadow Orb");
    await this.runtime.runTask("TendurrrTheAssistantQuests.TendurrItems");
    await this.runtime.runTask("CoreNation.bagDrops bank");

    await this.runtime.runTask("CoinCollectorSet.GetItems");
    await this.babyDragonOfAwe();
    await this.fireWar();
    await this.cruxVipWeapon();
    await this.deepForestItems();
    await this.dualWield();
    await this.huntingMonster();

    for (const step of ["SpellRaiser.GetAll", "TheLostKnightAndBackupBlade.GetAll", "TrobbolierPet.GetAll"]) {
      await this.runtime.runTask(step);
    }

    await this.tachyonMerge();
    await this.boneTowerMerge();
    await this.runtime.runTask("ChronoAssassin.GetChronoAss");
    await this.runtime.bank("Chrono Assassin");
    await this.runtime.runTask("BonecastleTowerMerge.BuyAllMerge", "DeathKnight Lord");
    await this.runtime.bank("DeathKnight Lord");

    await this.runtime.runTask("CoreFarms.BeastMasterREP");
    this.runtime.log("BeastMaster and SkyGuard Grenadier purchases require northpointe to be active.");
    await this.runtime.buyItem("northpointe", 976, "BeastMaster", 1, 16031);
    await this.runtime.rankClass("BeastMaster");
    await this.runtime.runTask("CoreFarms.SkyguardREP");
    await this.runtime.buyItem("skyguard", 259, "SkyGuard Grenadier", 1, 7517);
    await this.runtime.rankClass("SkyGuard Grenadier");
  }

  async dragonBlade(): Promise<void> {
    if (
      !(await this.runtime.contains("DragonBlade of Nulgath")) &&
      (await this.runtime.contains(
        ["Ebony DragonBlade of Nulgath", "Legion DragonBlade of Nulgath", "Dual DragonBlades of Nulgath"],
        1,
        true
      ))
    ) {
      this.runtime.log("DragonBlade appears owned in another form; check buyback if needed.");
      return;
    }
    await this.runtime.runTask("DragonBladeofNulgath.GetDragonBlade");
  }

  async cruxVipWeapon(): Promise<void> {
    if (await this.runtime.contains("Darkwave Khopesh")) {
      await this.runtime.bank("Darkwave Khopesh");
      return;
    }
    await this.runtime.runTask("CruxShip.StoryLine");
    await this.runtime.killMonster("cruxship", "r13", "Bottom", "Apephryx", "Darkwave Khopesh", 1, false);
    await this.runtime.bank("Darkwave Khopesh");
  }

  async fireWar(): Promise<void> {
    if (await this.runtime.contains("Ignited Guardian's Accoutrements")) {
      await this.runtime.bank("Ignited Guardian's Accoutrements");
      return;
    }
    await this.runtime.runTask("DragonFableOrigins.GreatFireWar");
    await this.runtime.buyItem("firewar", 1586, "Flame Guardian's Accoutrements");
    await this.runtime.hunt("firewar", "Uriax", "Dragon Eye", 2, false);
    while (!(await this.runtime.contains("Dragon Flame", 25))) {
      await this.runtime.hunt("firewar", "Fire Dragon", "Fire Dragon Slain", 3, true);
      await this.runtime.killMonster(
        "firewar",
        "r8",
        "Left",
        "Inferno Dragon",
        "Inferno Dragon Slain",
        2,
        true
      );
      await this.runtime.acceptDrops("Dragon Flame");
    }
    await this.runtime.buyItem("firewar", 1587, "Ignited Guardian's Accoutrements");
    await this.runtime.bank("Ignited Guardian's Accoutrements");
  }

  async deepForestItems(): Promise<void> {
    await this.runtime.runTask("CoreQOM.TheBook");
    if (!(await this.runtime.contains("Polished Necrotic Blade of Chaos"))) {
      await this.runtime.buyItem("castleundead", 45, "Necrotic Blade of Chaos");
      await this.runtime.buyItem("deepforest", 1999, "Gold Voucher 500k", 4);
      await this.runtime.buyItem("deepforest", 1999, "Polished Necrotic Blade of Chaos");
    }
    await this.runtime.bank("Polished Necrotic Blade of Chaos");
    if (!(await this.runtime.contains("Polished Dragon Sword of Chaos"))) {
      await this.runtime.buyItem("castleundead", 45, "Dragon Sword of Chaos");
      await this.runtime.buyItem("deepforest", 1999, "Gold Voucher 500k", 4);
      await this.runtime.buyItem("deepforest", 1999, "Polished Dragon Sword of Chaos");
    }
    await this.runtime.bank("Polished Dragon Sword of Chaos");
  }

  async dualWield(): Promise<void> {
    if (!(await this.runtime.contains("Golden 8th Birthday Candle")))
      await this.runtime.buyItem(undefined, 1317, "Golden 8th Birthday Candle");
    if (!(await this.runtime.contains("Golden 8th Birthday Candle"))) {
      this.runtime.log("Golden Candle not found; skipping dual wield script.");
      return;
    }

    while (!(await this.runtime.contains("Weapon Reflection", 12))) {
      await this.runtime.acceptQuest(5518);
      await this.runtime.hunt("nostalgiaquest", "Skeletal Viking", "Reflected Glory", 5, true);
      await this.runtime.hunt("nostalgiaquest", "Skeletal Warrior", "Divided Light", 5, true);
      await this.runtime.completeQuest(5518);
      await this.runtime.acceptDrops("Weapon Reflection");
    }

    await this.buyDual("Dual Boom Went The Dynamite", "Boom Went The Dynamite", async () =>
      this.runtime.hunt("banished", "Desterrat Moya", "Boom Went The Dynamite", 1, false)
    );
    await this.buyDual("Dual Unarmed", "Unarmed", async () =>
      this.runtime.buyItem(undefined, 1536, "Unarmed")
    );
    await this.buyDual("Dual Leviasea Sword", "Leviasea Sword", async () =>
      this.runtime.buyItem("yulgar", 69, "Leviasea Sword")
    );
    await this.buyDual("Dual Ddog Sea Serpent Sword", "Ddog Sea Serpent Sword", async () => {
      await this.runtime.acceptQuest(554);
      await this.runtime.runTask("CoreNation.FarmUni13", "1");
      await this.runtime.hunt("underworld", "Undead Legend", "Undead Legend Rune", 1, true);
      await this.runtime.completeQuest(554);
    });
    await this.buyDual("Dual Soulreaper of Nulgath", "Soulreaper of Nulgath", async () => {
      await this.runtime.acceptQuest(571);
      await this.runtime.runTask("CoreNation materials", "Diamond x10, DCS x5, Tainted Gem x5, Uni13 x1");
      await this.runtime.hunt("twilight", "Abaddon", "Abaddon's Terror", 1, false);
      await this.runtime.completeQuest(571);
    });
    await this.buyDual("Dual Godly Mace of the Ancients", "Godly Mace of the Ancients", async () =>
      this.runtime.buyItem("citadel", 44, "Godly Mace of the Ancients")
    );
    await this.buyDual("Dual Balor's Cruelty", "Balor's Cruelty", async () =>
      this.runtime.hunt("twilight", "Abaddon", "Balor's Cruelty", 1, false)
    );
    await this.buyDual("Dual Abaddon's Terrors", "Abaddon's Terror", async () =>
      this.runtime.hunt("twilight", "Abaddon", "Abaddon's Terror", 1, false)
    );
    await this.buyDual("Dual Mighty Sword Of The Dragons", "Mighty Sword Of The Dragons", async () =>
      this.runtime.runTask("Mighty Sword Of The Dragons quest chain")
    );
    await this.buyDual("Dual Frostbite", "Frostbite", async () => {
      await this.runtime.buyItem("blindingsnow", 236, "Frosted Falchion");
      await this.runtime.buyItem("underworld", 238, "Frostbite");
    });
    if (await this.runtime.contains("DragonBlade of Nulgath"))
      await this.buyDual("Dual DragonBlades of Nulgath", "DragonBlade of Nulgath");
  }

  async babyDragonOfAwe(): Promise<void> {
    if (await this.runtime.contains("Baby Dragon of Awe")) {
      await this.runtime.bank("Baby Dragon of Awe");
      return;
    }
    if (!(await this.runtime.contains("Guardian Patent"))) {
      const guardian = Number(
        await this.runtime.bot.getGameObject<unknown>("world.myAvatar.objData.intAQ").catch(() => 0)
      );
      if (guardian > 0) await this.runtime.buyItem("museum", 53, "Guardian Patent");
      else this.runtime.log("Active AQ Guardian account required for Guardian Patent.");
    }
    if (!(await this.runtime.contains("Guardian Patent"))) {
      this.runtime.log("Guardian Patent not found; skipping Baby Dragon of Awe.");
      return;
    }
    await this.runtime.buyItem("battleon", 10, "Baby Red Dragon");
    await this.runtime.buyItem("museum", 632, "Baby Dragon of Awe");
  }

  async huntingMonster(): Promise<void> {
    await this.getItems(
      "rotfinger",
      "rotfinger",
      "Horned Meat Horror Helm",
      "Macabre Horror Hammer",
      "Macabre Meat Horror",
      "Macabre Meat Ripper",
      "Macabre Meat Slicer",
      "Rotfinger's ArmBlades",
      "Rotfinger's Bow",
      "Rotfinger's Scythe",
      "Rotfinger's Staff",
      "Scream of Agony"
    );
    await this.getItems(
      "bonebreak",
      "Killek BoneBreaker",
      "Axe of Boneshearing",
      "Dark BonePiercer Spikes",
      "Killek BoneBreaker"
    );
    await this.getItems("bonebreak", "Unbroken Minion", "Berserker Minion Mace");
    await this.getItems("bonebreak", "Undead Berserker", "Berserker Minion Skull Mace");
    await this.getItems("bonebreak", "Bonebreaker", "Undead Berserker Guard", "Undead Berserker Guard Helm");
    await this.getItems(
      "deadfly",
      "Deadfly",
      "BlackSkulls Knuckle",
      "Deadfly Morph",
      "Deadfly's Armor",
      "Dual BlackSkulls Knuckles"
    );
    await this.getItems(
      "oddities",
      "Cursed Spirit",
      "Cursed Spirit Hunter",
      "Reaver of Wrath",
      "Scary Machete",
      "Scary Machetes",
      "Spirit Scythe of Wrath",
      "Spooky Spirit Hunter",
      "Spooky Spirit Hunter Hat",
      "Spooky Spirit Hunter Hat + Locks",
      "Spooky Spirit Hunter Hood",
      "Unlucky Farmer",
      "Unlucky Farmer's Hood",
      "Unlucky Portal Cape"
    );
    await this.getItems(
      "wormhole",
      "Trobbolegion",
      "Blue Trobbolier Morph",
      "Gold Trobbolier Morph",
      "Mutated Pink Trobbolier Morph",
      "Silver Trobbolier Morph"
    );
    await this.getItems(
      "gonnagetcha",
      "Shrade Cultist",
      "Cultist Knife",
      "Dual Cultist Knife",
      "Missing Keys Plaque"
    );
    await this.getItems("gonnagetcha", "Murkonian", "GonnaGetcha Trident");
    await this.getItems(
      "gonnagetcha",
      "Shrade",
      "DeathHunter Hair",
      "DeathHunter Hood",
      "DeathHunter Locks",
      "Fanged Cultist Mask",
      "Feral Cultist Mask",
      "Malevolent Cultist Mask",
      "Shadow Cultist Armor"
    );
    await this.getItems(
      "splatterwardage",
      "Shrade",
      "Celtic Hunter Blade",
      "Underworld Shrade",
      "Underworld Shrade Axe",
      "Underworld Shrade Helm",
      "Underworld Shrade Minion",
      "Well-wet Hair"
    );
    await this.getItems(
      "greymoor",
      "Shrade",
      "Necrotic Caster",
      "Necrotic Caster Cross Back",
      "Necrotic Caster Grave Spade",
      "Necrotic Caster Hair",
      "Necrotic Caster Locks",
      "Necrotic Caster Locks Morph",
      "Necrotic Caster Mask",
      "Necrotic Caster Mask Morph",
      "Necrotic Caster Masked Locks",
      "Necrotic Caster Scroll"
    );
    await this.getItems(
      "battledoom",
      "13th Doom Lord",
      "Doom Lord Vaal and Vayle",
      "Dual Skull Half-Axes",
      "Skulled Half-Axe",
      "SkullBorne Dagger",
      "Vaal's Doom Visage",
      "Vayle's Doom Hood",
      "Weeping Axe of DOOM"
    );
    await this.getItems(
      "crownsreachfxiii",
      "Shub-Hathrys",
      "Tentacled Tophat and Beard",
      "Tentacled Tophat and Locks"
    );
  }

  async tachyonMerge(): Promise<void> {
    if (await this.runtime.contains(tachyonShop)) return;
    for (const item of tachyonShop) {
      await this.runtime.runTask("TachyonMerge.BuyAllMerge", item);
      await this.runtime.bank(item);
    }
  }

  async boneTowerMerge(): Promise<void> {
    if (await this.runtime.contains(boneTowerShop)) return;
    await this.runtime.runTask("BonecastleTowerMerge.BuyAllMerge", "Silver DeathKnight Lord");
    await this.runtime.runTask("BonecastleTowerMerge.BuyAllMerge", "Golden DeathKnight Lord");
    for (const item of boneTowerShop) {
      await this.runtime.runTask("BonecastleTowerMerge.BuyAllMerge", item);
      await this.runtime.bank(item);
    }
  }

  private async getItems(map: string, monster: string, ...items: string[]): Promise<void> {
    if (await this.runtime.contains(items)) return;
    for (const item of items) {
      await this.runtime.hunt(map, monster, item, 1, false);
      await this.runtime.bank(item);
    }
  }

  private async buyDual(
    dualName: string,
    baseName: string,
    acquireBase?: () => Promise<void>
  ): Promise<void> {
    if (await this.runtime.contains(dualName)) {
      await this.runtime.bank(dualName);
      return;
    }
    if (!(await this.runtime.contains(baseName))) {
      if (acquireBase) await acquireBase();
      else {
        this.runtime.log(`${baseName} is missing; skipping ${dualName}.`);
        return;
      }
    }
    await this.runtime.buyItem("nostalgiaquest", 1311, dualName);
    await this.runtime.bank(dualName);
  }
}

export async function main(bot: Bot, options: FarmJoeRuntimeOptions = {}): Promise<void> {
  await new MemberFarmsKit(bot, options).doAll();
}
