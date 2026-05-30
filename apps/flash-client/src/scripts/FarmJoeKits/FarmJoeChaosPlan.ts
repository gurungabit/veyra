export type ChaosPlanTarget = string | number;

export type ChaosPlanAction =
  | {
      kind: "hunt";
      map: string;
      monster: ChaosPlanTarget;
      item?: string;
      quantity?: number;
      isTemp?: boolean;
      cell?: string;
      pad?: string;
    }
  | { kind: "mapItem"; map?: string; id: number; quantity?: number }
  | {
      kind: "buy";
      map?: string;
      shopId: number;
      item: string | number;
      quantity?: number;
      shopItemId?: number;
    };

export type ChaosPlanStep =
  | { kind: "chain"; questId: number }
  | { kind: "kill"; questId: number; map: string; monsters: ChaosPlanTarget[] }
  | { kind: "mapItem"; questId: number; map: string; ids: number[]; quantity?: number }
  | { kind: "plan"; questId: number; actions: ChaosPlanAction[] };

export const chaosStoryPlan: ChaosPlanStep[] = [
  { kind: "kill", questId: 183, map: "battleundera", monsters: ["Skeletal Fire Mage"] },
  {
    kind: "plan",
    questId: 176,
    actions: [
      {
        kind: "hunt",
        map: "swordhavenundead",
        monster: "Skeletal Soldier",
        item: "Slain Skeletal Soldier",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 177, map: "swordhavenundead", monsters: ["Skeletal Ice Mage"] },
  { kind: "kill", questId: 178, map: "swordhavenundead", monsters: ["Undead Giant"] },
  { kind: "mapItem", questId: 179, map: "castleundead", ids: [38], quantity: 5 },
  { kind: "kill", questId: 180, map: "castleundead", monsters: ["Skeletal Viking"] },
  { kind: "chain", questId: 195 },
  { kind: "kill", questId: 196, map: "chaoscrypt", monsters: ["Chaorrupted Armor"] },
  {
    kind: "plan",
    questId: 6216,
    actions: [
      { kind: "mapItem", id: 39, quantity: 5, map: "prison" },
      { kind: "buy", map: "prison", shopId: 1559, item: 42993 }
    ]
  },
  { kind: "mapItem", questId: 6217, map: "chaoscrypt", ids: [5662] },
  { kind: "kill", questId: 6218, map: "chaoscrypt", monsters: ["Chaorrupted Knight"] },
  { kind: "kill", questId: 6219, map: "forestchaos", monsters: ["Chaorrupted Bear", "Chaorrupted Wolf"] },
  { kind: "kill", questId: 245, map: "mobius", monsters: ["Chaos Sp-Eye"] },
  { kind: "mapItem", questId: 246, map: "mobius", ids: [42], quantity: 5 },
  { kind: "kill", questId: 247, map: "mobius", monsters: ["Fire Imp"] },
  { kind: "mapItem", questId: 260, map: "mobius", ids: [44] },
  { kind: "kill", questId: 248, map: "mobius", monsters: ["Cyclops Raider"] },
  { kind: "kill", questId: 249, map: "mobius", monsters: ["Slugfit"] },
  { kind: "kill", questId: 250, map: "faerie", monsters: ["Chainsaw Sneevil"] },
  { kind: "mapItem", questId: 251, map: "faerie", ids: [43], quantity: 7 },
  { kind: "kill", questId: 252, map: "faerie", monsters: ["Chainsaw Sneevil"] },
  { kind: "kill", questId: 255, map: "faerie", monsters: ["Cyclops Warlord"] },
  { kind: "kill", questId: 256, map: "faerie", monsters: ["Aracara"] },
  { kind: "kill", questId: 257, map: "cornelis", monsters: ["Gargoyle"] },
  { kind: "mapItem", questId: 261, map: "cornelis", ids: [45] },
  { kind: "kill", questId: 258, map: "cornelis", monsters: ["Gargoyle"] },
  { kind: "mapItem", questId: 262, map: "cornelis", ids: [46] },
  { kind: "kill", questId: 259, map: "cornelis", monsters: ["Stone Golem"] },
  { kind: "mapItem", questId: 263, map: "cornelis", ids: [47] },
  { kind: "mapItem", questId: 266, map: "mobius", ids: [48] },
  { kind: "mapItem", questId: 267, map: "mobius", ids: [49] },
  { kind: "kill", questId: 264, map: "mobius", monsters: ["Cyclops Raider"] },
  {
    kind: "plan",
    questId: 265,
    actions: [
      {
        kind: "hunt",
        map: "faerie",
        monster: "Chainsaw Sneevil",
        item: "Cardboard Box",
        quantity: 4,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 268, map: "relativity", monsters: ["Cyclops Raider"] },
  { kind: "kill", questId: 269, map: "relativity", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 270, map: "relativity", monsters: ["Head Gargoyle"] },
  { kind: "mapItem", questId: 271, map: "hydra", ids: [50, 51, 52] },
  {
    kind: "plan",
    questId: 272,
    actions: [
      { kind: "hunt", map: "escherion", monster: "Escherion", item: "Defeated Escherion", isTemp: true }
    ]
  },
  { kind: "mapItem", questId: 319, map: "tavern", ids: [56], quantity: 7 },
  { kind: "kill", questId: 320, map: "pines", monsters: ["Pine Grizzly"] },
  { kind: "kill", questId: 321, map: "pines", monsters: ["Red Shell Turtle"] },
  { kind: "kill", questId: 322, map: "pines", monsters: ["Twistedtooth"] },
  { kind: "kill", questId: 324, map: "pines", monsters: ["Red Shell Turtle"] },
  { kind: "kill", questId: 325, map: "pines", monsters: ["Pine Grizzly"] },
  { kind: "kill", questId: 326, map: "pines", monsters: ["LeatherWing"] },
  {
    kind: "plan",
    questId: 327,
    actions: [{ kind: "hunt", map: "pines", monster: "Pine Troll", item: "Pine Air Freshener", isTemp: true }]
  },
  { kind: "chain", questId: 323 },
  { kind: "mapItem", questId: 344, map: "dwarfhold", ids: [60] },
  { kind: "kill", questId: 331, map: "mountainpath", monsters: ["Ore Balboa"] },
  { kind: "kill", questId: 332, map: "mountainpath", monsters: ["Vultragon"] },
  { kind: "kill", questId: 333, map: "dwarfhold", monsters: ["Chaos Drow"] },
  { kind: "kill", questId: 334, map: "dwarfhold", monsters: ["Glow Worm"] },
  { kind: "kill", questId: 335, map: "dwarfhold", monsters: ["Albino Bat"] },
  { kind: "kill", questId: 336, map: "dwarfhold", monsters: ["Chaotic Draconian"] },
  { kind: "mapItem", questId: 337, map: "dwarfhold", ids: [59], quantity: 7 },
  { kind: "kill", questId: 338, map: "dwarfhold", monsters: ["Chaos Drow"] },
  { kind: "kill", questId: 339, map: "dwarfhold", monsters: ["Chaotic Draconian"] },
  {
    kind: "plan",
    questId: 340,
    actions: [{ kind: "hunt", map: "dwarfhold", monster: "Albino Bat", item: "Block of Talc", isTemp: true }]
  },
  { kind: "chain", questId: 343 },
  {
    kind: "plan",
    questId: 341,
    actions: [{ kind: "hunt", map: "dwarfhold", monster: "Amadeus", item: "Key Mold", isTemp: true }]
  },
  { kind: "mapItem", questId: 346, map: "uppercity", ids: [61] },
  { kind: "kill", questId: 347, map: "uppercity", monsters: ["Drow Assassin"] },
  { kind: "kill", questId: 348, map: "uppercity", monsters: ["Chaotic Draconian"] },
  { kind: "kill", questId: 349, map: "uppercity", monsters: ["Chaos Egg"] },
  { kind: "kill", questId: 350, map: "uppercity", monsters: ["Terradactyl"] },
  { kind: "kill", questId: 351, map: "uppercity", monsters: ["Rhino Beetle"] },
  { kind: "kill", questId: 352, map: "uppercity", monsters: ["Cave Lizard"] },
  {
    kind: "plan",
    questId: 353,
    actions: [
      { kind: "hunt", map: "dwarfprison", monster: "Balboa", item: "Balboa Core", quantity: 4, isTemp: true },
      { kind: "hunt", map: "dwarfprison", monster: "Chaos Drow", item: "Magnesium Flare", isTemp: true },
      {
        kind: "hunt",
        map: "dwarfprison",
        monster: "Albino Bat",
        item: "Rusted Claw",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 353,
    actions: [
      { kind: "hunt", map: "dwarfprison", monster: "Balboa", item: "Balboa Core", quantity: 4, isTemp: true },
      {
        kind: "hunt",
        map: "dwarfprison",
        monster: "Albino Bat",
        item: "Rusted Claw",
        quantity: 3,
        isTemp: true
      },
      { kind: "hunt", map: "dwarfprison", monster: "Chaos Drow", item: "Magnesium Flare", isTemp: true }
    ]
  },
  { kind: "kill", questId: 355, map: "dwarfprison", monsters: ["Warden Elfis"] },
  { kind: "kill", questId: 356, map: "dwarfprison", monsters: ["Albino Bat", "Balboa", "Chaos Drow"] },
  { kind: "chain", questId: 357 },
  { kind: "mapItem", questId: 362, map: "roc", ids: [62] },
  { kind: "mapItem", questId: 363, map: "stalagbite", ids: [63] },
  { kind: "mapItem", questId: 380, map: "yokaiboat", ids: [64] },
  {
    kind: "plan",
    questId: 381,
    actions: [
      {
        kind: "hunt",
        map: "yokaiboat",
        cell: "r4",
        pad: "Spawn",
        monster: "*",
        item: "Sail Permit",
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 382, map: "dragonkoi", monsters: ["Ryoku"] },
  {
    kind: "plan",
    questId: 402,
    actions: [
      {
        kind: "hunt",
        map: "hachiko",
        monster: "Samurai Nopperabo",
        item: "Samurai Questioned",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "hachiko",
        monster: "Ninja Nopperabo",
        item: "Ninja Questioned",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 403,
    actions: [
      {
        kind: "hunt",
        map: "hachiko",
        cell: "Ox",
        pad: "Center",
        monster: "Samurai Nopperabo",
        item: "Note from DT",
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 405,
    actions: [
      {
        kind: "hunt",
        map: "hachiko",
        cell: "Tiger",
        pad: "Center",
        monster: "Samurai Nopperabo",
        item: "Rat-Ox-Tiger Piece",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "hachiko",
        cell: "Snake",
        pad: "Center",
        monster: "Ninja Nopperabo",
        item: "Rabbit-Dragon-Snake piece",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "hachiko",
        cell: "Horse",
        pad: "Center",
        monster: "Samurai Nopperabo",
        item: "Horse-Sheep-Monkey piece",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "hachiko",
        cell: "Pig",
        pad: "Center",
        monster: "Ninja Nopperabo",
        item: "Rooster-Dog-Pig Piece",
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 406, map: "hachiko", monsters: ["Dai Tengu"] },
  { kind: "mapItem", questId: 466, map: "bamboo", ids: [90] },
  { kind: "kill", questId: 467, map: "bamboo", monsters: ["Tanuki", "Tanuki"] },
  { kind: "kill", questId: 468, map: "bamboo", monsters: ["SoulTaker"] },
  { kind: "mapItem", questId: 469, map: "junkyard", ids: [91] },
  {
    kind: "plan",
    questId: 470,
    actions: [
      { kind: "hunt", map: "Junkyard", monster: 1, item: "Wild Kara-Kasa", quantity: 5, isTemp: true },
      { kind: "hunt", map: "Junkyard", monster: 2, item: "Wild Bakezouri", quantity: 1, isTemp: true },
      { kind: "hunt", map: "Junkyard", monster: 4, item: "Wild Bura-Bura", quantity: 4, isTemp: true },
      { kind: "hunt", map: "Junkyard", monster: 3, item: "Wild Biwa-Bokuboku", quantity: 3, isTemp: true },
      { kind: "hunt", map: "Junkyard", monster: 12, item: "Wild Koto-Furunushi", quantity: 2, isTemp: true }
    ]
  },
  { kind: "kill", questId: 471, map: "junkyard", monsters: ["Onibaba"] },
  { kind: "kill", questId: 473, map: "yokairiver", monsters: ["Funa-Yurei", "Funa-Yurei", "Funa-Yurei"] },
  {
    kind: "plan",
    questId: 474,
    actions: [
      {
        kind: "hunt",
        map: "yokairiver",
        cell: "r4",
        pad: "Left",
        monster: "Kappa Ninja",
        item: "Dried Nori Leaf",
        quantity: 6,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "yokairiver",
        cell: "r4",
        pad: "Left",
        monster: "Kappa Ninja",
        item: "Sumeshi Bundle",
        quantity: 3,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "yokairiver",
        cell: "r4",
        pad: "Left",
        monster: "Kappa Ninja",
        item: "Fresh Cucumber",
        quantity: 1,
        isTemp: true
      },
      { kind: "mapItem", id: 92, quantity: 1, map: "yokairiver" }
    ]
  },
  { kind: "kill", questId: 476, map: "yokairiver", monsters: ["Nure Onna"] },
  { kind: "kill", questId: 477, map: "yokaigrave", monsters: ["Skello Kitty"] },
  { kind: "kill", questId: 478, map: "yokaigrave", monsters: ["Ninja Nopperabo", "Samurai Nopperabo"] },
  { kind: "kill", questId: 479, map: "yokaigrave", monsters: ["Neko Mata"] },
  { kind: "kill", questId: 481, map: "odokuro", monsters: ["O-dokuro"] },
  { kind: "kill", questId: 484, map: "yokaiwar", monsters: ["O-Dokuro's Head"] },
  { kind: "kill", questId: 488, map: "kitsune", monsters: ["kitsune"] },
  { kind: "mapItem", questId: 494, map: "darkoviagrave", ids: [97] },
  { kind: "kill", questId: 495, map: "darkoviagrave", monsters: ["Skeletal Fire Mage"] },
  { kind: "kill", questId: 496, map: "darkoviagrave", monsters: ["Rattlebones"] },
  { kind: "kill", questId: 497, map: "darkoviagrave", monsters: ["Albino Bat"] },
  { kind: "kill", questId: 498, map: "darkoviagrave", monsters: ["Blightfang"] },
  { kind: "kill", questId: 308, map: "greenguardeast", monsters: ["Wolf"] },
  { kind: "kill", questId: 309, map: "greenguardwest", monsters: ["Slime"] },
  { kind: "kill", questId: 310, map: "greenguardwest", monsters: ["Frogzard"] },
  { kind: "kill", questId: 311, map: "greenguardeast", monsters: ["Spider"] },
  {
    kind: "plan",
    questId: 514,
    actions: [
      { kind: "hunt", map: "greenguardeast", monster: "Spider", item: "Spider Documentation", isTemp: true },
      { kind: "hunt", map: "greenguardeast", monster: "Wolf", item: "Wolf Documentation", isTemp: true },
      { kind: "hunt", map: "greenguardwest", monster: "Slime", item: "Slime Documentation", isTemp: true },
      {
        kind: "hunt",
        map: "greenguardwest",
        monster: "Frogzard",
        item: "Frogzard Documentation",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "greenguardwest",
        cell: "West12",
        pad: "Up",
        monster: "Big Bad Boar",
        item: "Wereboar Documentation",
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 516, map: "darkoviaforest", monsters: ["Dire Wolf"] },
  {
    kind: "plan",
    questId: 517,
    actions: [
      {
        kind: "hunt",
        map: "darkoviaforest",
        monster: "Blood Maggot",
        item: "Vial of Blood",
        quantity: 3,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "darkoviaforest",
        monster: "Blood Maggot",
        item: "Vial of Sweat",
        quantity: 2,
        isTemp: true
      },
      { kind: "hunt", map: "darkoviaforest", monster: "Blood Maggot", item: "Vial of Tears", isTemp: true }
    ]
  },
  { kind: "kill", questId: 518, map: "darkoviaforest", monsters: ["Lich of the Stone"] },
  { kind: "kill", questId: 519, map: "safiria", monsters: ["Blood Maggot"] },
  { kind: "kill", questId: 520, map: "safiria", monsters: ["Albino Bat"] },
  { kind: "kill", questId: 521, map: "safiria", monsters: ["Chaos Lycan"] },
  { kind: "kill", questId: 522, map: "safiria", monsters: ["Twisted Paw"] },
  { kind: "kill", questId: 534, map: "lycan", monsters: ["Dire Wolf"] },
  { kind: "kill", questId: 535, map: "lycan", monsters: ["Lycan Knight", "Lycan"] },
  { kind: "kill", questId: 536, map: "lycan", monsters: ["Chaos Vampire Knight"] },
  {
    kind: "plan",
    questId: 537,
    actions: [{ kind: "hunt", map: "lycan", monster: "Sanguine", item: "Sanguine Mask", isTemp: true }]
  },
  { kind: "chain", questId: 552 },
  { kind: "mapItem", questId: 564, map: "chaoscave", ids: [107] },
  { kind: "kill", questId: 565, map: "chaoscave", monsters: ["Werepyre"] },
  {
    kind: "plan",
    questId: 566,
    actions: [
      {
        kind: "hunt",
        map: "chaoscave",
        cell: "r3",
        pad: "Left",
        monster: "Werepyre",
        item: "Secret Words",
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 567,
    actions: [
      {
        kind: "hunt",
        map: "chaoscave",
        cell: "r5",
        pad: "Left",
        monster: "DracoWerePyre",
        item: "DracoWerePyre Defeated",
        isTemp: true
      }
    ]
  },
  { kind: "chain", questId: 597 },
  { kind: "kill", questId: 648, map: "stairway", monsters: ["Grateful Undead", "Rock Lobster"] },
  { kind: "kill", questId: 649, map: "stairway", monsters: ["Rock Lobster"] },
  { kind: "kill", questId: 650, map: "stairway", monsters: ["Grateful Undead"] },
  { kind: "kill", questId: 651, map: "stairway", monsters: ["Elwood Bruise", "Jake Bruise"] },
  { kind: "kill", questId: 658, map: "beehive", monsters: ["Stinger"] },
  { kind: "kill", questId: 659, map: "beehive", monsters: ["Killer Queen Bee"] },
  {
    kind: "plan",
    questId: 660,
    actions: [
      {
        kind: "hunt",
        map: "beehive",
        cell: "r6",
        pad: "Right",
        monster: "*",
        item: "No Shoes!",
        isTemp: true
      }
    ]
  },
  { kind: "chain", questId: 661 },
  {
    kind: "plan",
    questId: 675,
    actions: [
      {
        kind: "hunt",
        map: "orchestra",
        cell: "R7",
        pad: "Down",
        monster: "Mozard",
        item: "Fire Flea",
        quantity: 15,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 676,
    actions: [
      {
        kind: "hunt",
        map: "orchestra",
        cell: "R4",
        pad: "Down",
        monster: "Pachelbel's Cannon ",
        item: "Cannon Powder",
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 677, map: "orchestra", monsters: ["Mozard"] },
  { kind: "kill", questId: 678, map: "orchestra", monsters: ["Faust"] },
  { kind: "kill", questId: 4827, map: "stairway", monsters: ["Rock Lobster", "Grateful Undead"] },
  { kind: "chain", questId: 707 },
  {
    kind: "plan",
    questId: 709,
    actions: [
      {
        kind: "hunt",
        map: "palooza",
        monster: "Pony Gary Yellow",
        item: "Pony Gary Yellow Defeated",
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 710,
    actions: [{ kind: "hunt", map: "palooza", monster: "Kimberly", item: "Kimberly Defeated", isTemp: true }]
  },
  { kind: "mapItem", questId: 805, map: "arcangrove", ids: [139] },
  { kind: "mapItem", questId: 806, map: "cloister", ids: [142] },
  { kind: "mapItem", questId: 807, map: "cloister", ids: [140] },
  { kind: "kill", questId: 808, map: "cloister", monsters: ["Acornent"] },
  { kind: "kill", questId: 809, map: "cloister", monsters: ["Karasu"] },
  {
    kind: "plan",
    questId: 810,
    actions: [
      { kind: "mapItem", id: 141, quantity: 3, map: "cloister" },
      { kind: "buy", map: "embersea", shopId: 1100, item: 5572, quantity: 17967 }
    ]
  },
  { kind: "kill", questId: 811, map: "cloister", monsters: ["Wendigo"] },
  { kind: "mapItem", questId: 813, map: "mudluk", ids: [143] },
  { kind: "kill", questId: 814, map: "mudluk", monsters: ["Swamp Lurker"] },
  { kind: "kill", questId: 815, map: "mudluk", monsters: ["Swamp Lurker"] },
  { kind: "kill", questId: 816, map: "arcangrove", monsters: ["Gorillaphant"] },
  { kind: "kill", questId: 817, map: "mudluk", monsters: ["Swamp Frogdrake"] },
  { kind: "kill", questId: 818, map: "mudluk", monsters: ["Tiger Leech"] },
  { kind: "mapItem", questId: 825, map: "natatorium", ids: [144] },
  { kind: "mapItem", questId: 826, map: "natatorium", ids: [145], quantity: 12 },
  { kind: "kill", questId: 827, map: "natatorium", monsters: ["Anglerfish"] },
  { kind: "kill", questId: 828, map: "natatorium", monsters: ["Merdraconian"] },
  {
    kind: "plan",
    questId: 829,
    actions: [
      {
        kind: "hunt",
        map: "arcangrove",
        monster: "Seed Spitter",
        item: "Brain Coral",
        quantity: 5,
        isTemp: true
      },
      { kind: "hunt", map: "cloister", monster: "Acornent", item: "Staghorns", quantity: 4, isTemp: true },
      { kind: "hunt", map: "cloister", monster: "Karasu", item: "Sea Fan", quantity: 3, isTemp: true },
      { kind: "hunt", map: "cloister", monster: "Wendigo", item: "Sea Whip", isTemp: true },
      { kind: "hunt", map: "mudluk", monster: "Swamp Frogdrake", item: "Anemones", quantity: 6, isTemp: true }
    ]
  },
  { kind: "kill", questId: 830, map: "natatorium", monsters: ["Nessie"] },
  { kind: "mapItem", questId: 831, map: "gilead", ids: [146] },
  {
    kind: "plan",
    questId: 832,
    actions: [
      {
        kind: "hunt",
        map: "gilead",
        monster: "Earth Elemental",
        item: "Dregs Essence",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "arcangrove",
        monster: "Seed Spitter",
        item: "Spitter Spirit",
        quantity: 4,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 833,
    actions: [
      {
        kind: "hunt",
        map: "gilead",
        monster: "Water Elemental",
        item: "Aqueous Essence",
        quantity: 5,
        isTemp: true
      },
      { kind: "hunt", map: "natatorium", monster: "Merdraconian", item: "MerCore", quantity: 6, isTemp: true }
    ]
  },
  {
    kind: "plan",
    questId: 834,
    actions: [
      {
        kind: "hunt",
        map: "gilead",
        monster: "Wind Elemental",
        item: "Welkin Essence",
        quantity: 5,
        isTemp: true
      },
      { kind: "hunt", map: "cloister", monster: "Karasu", item: "Karasu Soul", quantity: 8, isTemp: true }
    ]
  },
  {
    kind: "plan",
    questId: 835,
    actions: [
      {
        kind: "hunt",
        map: "gilead",
        monster: "Fire Elemental",
        item: "Pyre Essence",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "mudluk",
        monster: "Swamp Frogdrake",
        item: "Fire Salamander",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 836, map: "gilead", monsters: ["Mana Elemental"] },
  { kind: "mapItem", questId: 838, map: "mafic", ids: [147] },
  { kind: "kill", questId: 839, map: "mafic", monsters: ["Volcanic Maggot"] },
  { kind: "kill", questId: 840, map: "mafic", monsters: ["Scoria Serpent"] },
  { kind: "kill", questId: 841, map: "mafic", monsters: ["Living Fire"] },
  { kind: "kill", questId: 842, map: "mafic", monsters: ["Mafic Dragon"] },
  { kind: "kill", questId: 843, map: "elemental", monsters: ["Mana Imp"] },
  { kind: "kill", questId: 844, map: "elemental", monsters: ["Mana Falcon"] },
  {
    kind: "plan",
    questId: 845,
    actions: [
      { kind: "hunt", map: "mafic", monster: "Mafic Dragon", item: "Astral Orb of Mafic", isTemp: true },
      { kind: "hunt", map: "cloister", monster: "Wendigo", item: "Astral Orb of the Cloister", isTemp: true },
      { kind: "hunt", map: "mudluk", monster: "Tiger Leech", item: "Astral Orb of Mudluk", isTemp: true },
      { kind: "hunt", map: "natatorium", monster: "Nessie", item: "Astral Orb of Natatorium", isTemp: true },
      { kind: "hunt", map: "gilead", monster: "Mana Elemental", item: "Astral Orb of Gilead", isTemp: true }
    ]
  },
  {
    kind: "plan",
    questId: 846,
    actions: [
      { kind: "hunt", map: "elemental", monster: "Mana Golem", item: "Mana Golem Defeated", isTemp: true }
    ]
  },
  { kind: "kill", questId: 847, map: "ledgermayne", monsters: ["Ledgermayne"] },
  { kind: "mapItem", questId: 930, map: "sandport", ids: [251] },
  { kind: "kill", questId: 931, map: "sandport", monsters: ["Sandshark"] },
  { kind: "kill", questId: 932, map: "sandport", monsters: ["Tomb Robber"] },
  { kind: "kill", questId: 933, map: "sandport", monsters: ["Tomb Robber"] },
  {
    kind: "plan",
    questId: 934,
    actions: [
      {
        kind: "hunt",
        map: "sandport",
        cell: "r6",
        pad: "Left",
        monster: "Sell-Sword Leader",
        item: "Sell-Sword Leader Defeated",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "sandport",
        cell: "r5",
        pad: "Left",
        monster: "Horc Sell-Sword",
        item: "Horc Sell-Swords Defeated",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 967, map: "pyramid", monsters: ["Golden Scarab"] },
  { kind: "kill", questId: 968, map: "pyramid", monsters: ["Anubis Deathguard"] },
  { kind: "kill", questId: 969, map: "pyramid", monsters: ["Mummy"] },
  { kind: "kill", questId: 970, map: "pyramid", monsters: ["Golden Scarab"] },
  { kind: "mapItem", questId: 971, map: "pyramid", ids: [304] },
  {
    kind: "plan",
    questId: 972,
    actions: [
      {
        kind: "hunt",
        map: "wanders",
        cell: "r2",
        pad: "Right",
        monster: "Kalestri Worshiper",
        item: "Dark Medallion",
        quantity: 8,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 973,
    actions: [
      {
        kind: "hunt",
        map: "wanders",
        cell: "r3",
        pad: "Right",
        monster: "Kalestri Hound",
        item: "Hound Defeated",
        quantity: 10,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 974,
    actions: [
      {
        kind: "hunt",
        map: "wanders",
        cell: "r3",
        pad: "Right",
        monster: "Kalestri Hound",
        item: "Evil Essence",
        quantity: 10,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 975,
    actions: [
      {
        kind: "hunt",
        map: "wanders",
        cell: "r5",
        pad: "Right",
        monster: "Lotus Spider",
        item: "Spider Defeated",
        quantity: 10,
        isTemp: true
      }
    ]
  },
  { kind: "plan", questId: 976, actions: [{ kind: "mapItem", id: 306, quantity: 1, map: "wanders" }] },
  {
    kind: "plan",
    questId: 977,
    actions: [
      {
        kind: "hunt",
        map: "wanders",
        cell: "r5",
        pad: "Right",
        monster: "Lotus Spider",
        item: "Dreamsand",
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 978,
    actions: [{ kind: "hunt", map: "wanders", monster: 46, item: "Sek-Duat Defeated", isTemp: true }]
  },
  { kind: "mapItem", questId: 995, map: "sandcastle", ids: [361] },
  { kind: "kill", questId: 996, map: "sandcastle", monsters: ["War Hyena"] },
  { kind: "kill", questId: 997, map: "sandcastle", monsters: ["War Mummy"] },
  { kind: "kill", questId: 998, map: "sandcastle", monsters: ["War Hyena"] },
  { kind: "kill", questId: 999, map: "sandcastle", monsters: ["Chaos Sphinx"] },
  { kind: "kill", questId: 1000, map: "djinn", monsters: ["Lamia"] },
  { kind: "kill", questId: 1001, map: "sandsea", monsters: ["Desert Vase"] },
  { kind: "kill", questId: 1002, map: "sandsea", monsters: ["Bupers Camel"] },
  { kind: "kill", questId: 1003, map: "djinn", monsters: ["Harpy"] },
  { kind: "mapItem", questId: 1004, map: "djinn", ids: [370], quantity: 5 },
  { kind: "kill", questId: 1005, map: "djinn", monsters: ["Tibicenas"] },
  { kind: "mapItem", questId: 1232, map: "bloodtusk", ids: [523] },
  {
    kind: "plan",
    questId: 1233,
    actions: [
      {
        kind: "hunt",
        map: "crossroads",
        monster: "Lemurphant",
        item: "Lemurphant Stones",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "crossroads",
        monster: "Koalion",
        item: "Golden Down-fur",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  { kind: "mapItem", questId: 1234, map: "crossroads", ids: [525] },
  { kind: "mapItem", questId: 1235, map: "crossroads", ids: [521], quantity: 10 },
  { kind: "chain", questId: 1236 },
  { kind: "mapItem", questId: 1237, map: "crossroads", ids: [524], quantity: 5 },
  { kind: "mapItem", questId: 1237, map: "crossroads", ids: [522], quantity: 5 },
  { kind: "chain", questId: 1241 },
  { kind: "chain", questId: 1273 },
  { kind: "mapItem", questId: 1280, map: "ravinetemple", ids: [553] },
  { kind: "mapItem", questId: 1281, map: "ravinetemple", ids: [554], quantity: 5 },
  { kind: "mapItem", questId: 1281, map: "ravinetemple", ids: [555, 556], quantity: 10 },
  { kind: "kill", questId: 1282, map: "ravinetemple", monsters: ["Temple Guardian"] },
  { kind: "mapItem", questId: 1283, map: "ravinetemple", ids: [557], quantity: 10 },
  { kind: "kill", questId: 1283, map: "ravinetemple", monsters: ["Temple Guardian"] },
  { kind: "kill", questId: 1284, map: "ravinetemple", monsters: ["Temple Guardian"] },
  { kind: "mapItem", questId: 1375, map: "alliance", ids: [679, 680] },
  {
    kind: "plan",
    questId: 1376,
    actions: [
      {
        kind: "hunt",
        map: "alliance",
        monster: "Good Soldier",
        item: "Good Soldier Vanquished",
        quantity: 10,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "alliance",
        monster: "Evil Soldier",
        item: "Evil Soldier Vanquished",
        quantity: 10,
        isTemp: true
      }
    ]
  },
  { kind: "mapItem", questId: 1377, map: "alliance", ids: [675], quantity: 10 },
  { kind: "mapItem", questId: 1378, map: "alliance", ids: [676] },
  { kind: "kill", questId: 1379, map: "alliance", monsters: ["Chaorrupted Evil Soldier"] },
  {
    kind: "plan",
    questId: 1380,
    actions: [
      { kind: "hunt", map: "alliance", monster: "General Cynari", item: "Cynari Defeated!", isTemp: true },
      { kind: "hunt", map: "alliance", monster: "General Tibias", item: "Tibias Defeated!", isTemp: true }
    ]
  },
  { kind: "kill", questId: 1424, map: "ancienttemple", monsters: ["Chaotic Vulture"] },
  { kind: "mapItem", questId: 1425, map: "ancienttemple", ids: [706], quantity: 7 },
  { kind: "kill", questId: 1425, map: "ancienttemple", monsters: ["Chaotic Vulture"] },
  { kind: "kill", questId: 1426, map: "ancienttemple", monsters: ["Chaos Troll Spirit"] },
  { kind: "kill", questId: 1427, map: "ancienttemple", monsters: ["Serpentress"] },
  { kind: "mapItem", questId: 1428, map: "ancienttemple", ids: [707] },
  { kind: "mapItem", questId: 1456, map: "orecavern", ids: [717] },
  { kind: "mapItem", questId: 1457, map: "orecavern", ids: [719], quantity: 5 },
  { kind: "kill", questId: 1457, map: "orecavern", monsters: ["Crashroom"] },
  { kind: "mapItem", questId: 1458, map: "orecavern", ids: [718], quantity: 5 },
  { kind: "kill", questId: 1459, map: "orecavern", monsters: ["Chaorrupted Evil Soldier"] },
  { kind: "kill", questId: 1460, map: "orecavern", monsters: ["Naga Baas"] },
  { kind: "mapItem", questId: 1469, map: "dreamnexus", ids: [734, 735, 736, 737] },
  {
    kind: "plan",
    questId: 1470,
    actions: [
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Dark Wyvern",
        item: "Wyvern Scales",
        quantity: 2,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Dark Wyvern",
        item: "Wyvern Claws",
        quantity: 2,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Aether Serpent",
        item: "Serpent Fangs",
        quantity: 2,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Aether Serpent",
        item: "Serpent Hair",
        quantity: 2,
        isTemp: true
      }
    ]
  },
  { kind: "mapItem", questId: 1471, map: "dreamnexus", ids: [738], quantity: 10 },
  { kind: "mapItem", questId: 1471, map: "dreamnexus", ids: [739], quantity: 11 },
  {
    kind: "plan",
    questId: 1472,
    actions: [
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Solar Phoenix",
        item: "Phoenix Tear",
        quantity: 10,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Solar Phoenix",
        item: "Phoenix Blood",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 1473,
    actions: [
      {
        kind: "hunt",
        map: "dreamnexus",
        cell: "r17a",
        pad: "Up",
        monster: "Khasaanda",
        item: "Khasaanda Defeated!",
        isTemp: false
      }
    ]
  },
  { kind: "mapItem", questId: 1226, map: "bloodtusk", ids: [523] },
  { kind: "kill", questId: 1227, map: "crossroads", monsters: ["Lemurphant", "Koalion"] },
  { kind: "mapItem", questId: 1228, map: "crossroads", ids: [525] },
  { kind: "mapItem", questId: 1229, map: "crossroads", ids: [521], quantity: 10 },
  { kind: "chain", questId: 1230 },
  { kind: "mapItem", questId: 1231, map: "crossroads", ids: [522], quantity: 5 },
  { kind: "mapItem", questId: 1231, map: "crossroads", ids: [524], quantity: 10 },
  { kind: "plan", questId: 1240, actions: [] },
  { kind: "chain", questId: 1272 },
  { kind: "mapItem", questId: 1274, map: "ravinetemple", ids: [553] },
  { kind: "mapItem", questId: 1275, map: "ravinetemple", ids: [554], quantity: 5 },
  { kind: "mapItem", questId: 1275, map: "ravinetemple", ids: [555, 556], quantity: 10 },
  { kind: "kill", questId: 1276, map: "ravinetemple", monsters: ["Temple Guardian"] },
  { kind: "mapItem", questId: 1277, map: "ravinetemple", ids: [557], quantity: 10 },
  { kind: "kill", questId: 1277, map: "ravinetemple", monsters: ["Temple Guardian"] },
  { kind: "kill", questId: 1278, map: "ravinetemple", monsters: ["Temple Guardian"] },
  { kind: "mapItem", questId: 1369, map: "alliance", ids: [679, 680] },
  { kind: "kill", questId: 1370, map: "alliance", monsters: ["Good Soldier", "Evil Soldier"] },
  { kind: "mapItem", questId: 1371, map: "alliance", ids: [675], quantity: 10 },
  { kind: "mapItem", questId: 1372, map: "alliance", ids: [676] },
  { kind: "kill", questId: 1373, map: "alliance", monsters: ["Chaorrupted Evil Soldier"] },
  { kind: "kill", questId: 1374, map: "alliance", monsters: ["General Cynari", "General Tibias"] },
  { kind: "kill", questId: 1419, map: "ancienttemple", monsters: ["Chaotic Vulture"] },
  { kind: "mapItem", questId: 1420, map: "ancienttemple", ids: [706], quantity: 7 },
  { kind: "kill", questId: 1420, map: "ancienttemple", monsters: ["Chaotic Vulture"] },
  { kind: "kill", questId: 1421, map: "ancienttemple", monsters: ["Chaos Troll Spirit"] },
  { kind: "kill", questId: 1422, map: "ancienttemple", monsters: ["Serpentress"] },
  { kind: "mapItem", questId: 1423, map: "ancienttemple", ids: [707] },
  { kind: "mapItem", questId: 1451, map: "orecavern", ids: [717] },
  { kind: "mapItem", questId: 1452, map: "orecavern", ids: [719], quantity: 5 },
  { kind: "kill", questId: 1452, map: "orecavern", monsters: ["Crashroom"] },
  { kind: "mapItem", questId: 1453, map: "orecavern", ids: [718], quantity: 5 },
  { kind: "kill", questId: 1454, map: "orecavern", monsters: ["Chaorrupted Evil Soldier"] },
  { kind: "kill", questId: 1455, map: "orecavern", monsters: ["Naga Baas"] },
  { kind: "mapItem", questId: 1464, map: "dreamnexus", ids: [734, 735, 736, 737] },
  {
    kind: "plan",
    questId: 1465,
    actions: [
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Dark Wyvern",
        item: "Wyvern Scales",
        quantity: 2,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Dark Wyvern",
        item: "Wyvern Claws",
        quantity: 2,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Aether Serpent",
        item: "Serpent Fangs",
        quantity: 2,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dreamnexus",
        monster: "Aether Serpent",
        item: "Serpent Hair",
        quantity: 2,
        isTemp: true
      }
    ]
  },
  { kind: "mapItem", questId: 1466, map: "dreamnexus", ids: [738], quantity: 10 },
  { kind: "mapItem", questId: 1466, map: "dreamnexus", ids: [739], quantity: 11 },
  { kind: "kill", questId: 1467, map: "dreamnexus", monsters: ["Solar Phoenix", "Solar Phoenix"] },
  { kind: "kill", questId: 1468, map: "dreamnexus", monsters: ["Khasaanda"] },
  { kind: "mapItem", questId: 2239, map: "thespan", ids: [1358, 1359, 1360, 1361, 1362, 1363] },
  { kind: "kill", questId: 2240, map: "timelibrary", monsters: ["Sneak", "Tog", "Shadowscythe"] },
  { kind: "mapItem", questId: 2241, map: "timelibrary", ids: [1365], quantity: 3 },
  { kind: "mapItem", questId: 2242, map: "timelibrary", ids: [1366], quantity: 2 },
  { kind: "mapItem", questId: 2243, map: "timelibrary", ids: [1367] },
  { kind: "mapItem", questId: 2244, map: "timelibrary", ids: [1368] },
  { kind: "kill", questId: 2253, map: "timevoid", monsters: ["Ephemerite"] },
  { kind: "mapItem", questId: 2254, map: "timevoid", ids: [1438], quantity: 16 },
  { kind: "mapItem", questId: 2255, map: "timevoid", ids: [1439], quantity: 12 },
  { kind: "kill", questId: 2255, map: "timevoid", monsters: ["Ephemerite", "Time-Travel Fairy"] },
  { kind: "kill", questId: 2256, map: "timevoid", monsters: ["Time-Travel Fairy", "Void Phoenix"] },
  { kind: "mapItem", questId: 2257, map: "timevoid", ids: [1440, 1441, 1442, 1443] },
  { kind: "kill", questId: 2258, map: "timevoid", monsters: ["Unending Avatar"] },
  { kind: "mapItem", questId: 2376, map: "aqlesson", ids: [1467] },
  { kind: "kill", questId: 2377, map: "aqlesson", monsters: ["Ninja"] },
  { kind: "mapItem", questId: 2378, map: "aqlesson", ids: [1468], quantity: 8 },
  { kind: "mapItem", questId: 2378, map: "aqlesson", ids: [1469] },
  { kind: "mapItem", questId: 2379, map: "aqlesson", ids: [1470, 1471], quantity: 3 },
  { kind: "kill", questId: 2379, map: "aqlesson", monsters: ["Eternite Ore", "Water Elemental"] },
  { kind: "mapItem", questId: 2380, map: "aqlesson", ids: [1473, 1472], quantity: 3 },
  { kind: "kill", questId: 2380, map: "aqlesson", monsters: ["Ice Elemental", "Fire Elemental"] },
  { kind: "kill", questId: 2381, map: "aqlesson", monsters: ["Void Dragon"] },
  { kind: "kill", questId: 2382, map: "aqlesson", monsters: ["Firezard"] },
  { kind: "kill", questId: 2383, map: "aqlesson", monsters: ["Ice Elemental"] },
  { kind: "mapItem", questId: 2384, map: "thespan", ids: [1474] },
  { kind: "kill", questId: 2385, map: "aqlesson", monsters: ["Akriloth"] },
  { kind: "kill", questId: 2386, map: "aqlesson", monsters: ["Carnax"] },
  { kind: "mapItem", questId: 2470, map: "dflesson", ids: [1549], quantity: 8 },
  {
    kind: "plan",
    questId: 2471,
    actions: [
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Fire Elemental",
        item: "Slain Flame Elemental",
        quantity: 8,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Fire Elemental",
        item: "Chaos Gemerald",
        quantity: 4,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 2472,
    actions: [
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Lava Slime",
        item: "Slain Slime",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Fire Elemental",
        item: "Slain Elemental",
        quantity: 6,
        isTemp: true
      },
      { kind: "hunt", map: "dflesson", monster: "Fire Elemental", item: "Blue Clue", isTemp: true }
    ]
  },
  {
    kind: "plan",
    questId: 2473,
    actions: [
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Tog",
        item: "Life AND the Universe",
        quantity: 4,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Agitated Orb",
        item: "Everything",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "dflesson",
        monster: "Agitated Orb",
        item: "Hoopy Frood's Towel",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 2474, map: "dflesson", monsters: ["Vultragon"] },
  { kind: "kill", questId: 2475, map: "dflesson", monsters: ["Chaos Sp-Eye"] },
  { kind: "kill", questId: 2476, map: "dflesson", monsters: ["Chaorrupted Evil Soldier"] },
  { kind: "kill", questId: 2477, map: "dflesson", monsters: ["Lava Golem", "Fire Elemental"] },
  { kind: "kill", questId: 2478, map: "dflesson", monsters: ["Chaotic Horcboar", "Chaotic Chicken"] },
  { kind: "kill", questId: 2479, map: "dflesson", monsters: ["Fluffy the Dracolich"] },
  { kind: "mapItem", questId: 2504, map: "mqlesson", ids: [1580] },
  { kind: "kill", questId: 2505, map: "mqlesson", monsters: ["Asteroid"] },
  { kind: "mapItem", questId: 2506, map: "mqlesson", ids: [1581], quantity: 5 },
  { kind: "kill", questId: 2507, map: "mqlesson", monsters: ["MystRaven Student"] },
  { kind: "kill", questId: 2508, map: "mqlesson", monsters: ["Training Globe"] },
  { kind: "kill", questId: 2509, map: "mqlesson", monsters: ["MystRaven Student"] },
  { kind: "kill", questId: 2510, map: "mqlesson", monsters: ["Chaos Shadowscythe"] },
  {
    kind: "plan",
    questId: 2511,
    actions: [
      { kind: "hunt", map: "mqlesson", monster: "Chaos Shadowscythe", item: "Truth Glasses", isTemp: true },
      {
        kind: "hunt",
        map: "mqlesson",
        monster: "Chaos Shadowscythe",
        item: "Darkness Destroyed",
        quantity: 13,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 2512, map: "mqlesson", monsters: ["Dragonoid"] },
  { kind: "kill", questId: 2513, map: "deepchaos", monsters: ["Chaotic Merdrac"] },
  { kind: "kill", questId: 2515, map: "deepchaos", monsters: ["Chaos Angler"] },
  { kind: "mapItem", questId: 2516, map: "deepchaos", ids: [1582], quantity: 3 },
  { kind: "kill", questId: 2517, map: "deepchaos", monsters: ["Kathool"] },
  {
    kind: "plan",
    questId: 2518,
    actions: [
      {
        kind: "hunt",
        map: "timespace",
        monster: "Astral Ephemerite",
        item: "Star Death",
        quantity: 6,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 2519,
    actions: [
      { kind: "hunt", map: "mqlesson", monster: "Dragonoid", item: "Dragonoid of Hours", isTemp: false },
      { kind: "hunt", map: "timespace", monster: "Chaos Lord Iadoa", item: "Iadoa Defeated", isTemp: true }
    ]
  },
  { kind: "kill", questId: 2520, map: "ultravoid", monsters: ["Ultra Kathool"] },
  { kind: "kill", questId: 2521, map: "ultravoid", monsters: ["Ultra Iadoa"] },
  { kind: "kill", questId: 2388, map: "ultracarnax", monsters: ["Ultra-Carnax"] },
  { kind: "kill", questId: 2612, map: "blackhorn", monsters: ["Restless Undead"] },
  { kind: "mapItem", questId: 2613, map: "blackhorn", ids: [1615], quantity: 10 },
  { kind: "kill", questId: 2614, map: "blackhorn", monsters: ["Tomb Spider"] },
  { kind: "mapItem", questId: 2615, map: "blackhorn", ids: [1616] },
  { kind: "kill", questId: 2615, map: "blackhorn", monsters: ["Restless Undead", "Tomb Spider"] },
  { kind: "mapItem", questId: 2616, map: "blackhorn", ids: [1617] },
  { kind: "kill", questId: 2617, map: "blackhorn", monsters: ["Bonefeeder Spider"] },
  { kind: "mapItem", questId: 2618, map: "blackhorn", ids: [1618] },
  { kind: "kill", questId: 2619, map: "blackhorn", monsters: ["Tomb Spider"] },
  { kind: "kill", questId: 2620, map: "blackhorn", monsters: ["Restless Undead"] },
  { kind: "mapItem", questId: 2621, map: "blackhorn", ids: [1619] },
  { kind: "mapItem", questId: 2622, map: "onslaughttower", ids: [1620, 1621, 1622, 1623] },
  { kind: "kill", questId: 2623, map: "onslaughttower", monsters: ["Golden Caster"] },
  { kind: "kill", questId: 2624, map: "onslaughttower", monsters: ["Golden Caster"] },
  { kind: "mapItem", questId: 2625, map: "onslaughttower", ids: [1624], quantity: 8 },
  { kind: "mapItem", questId: 2626, map: "onslaughttower", ids: [1625] },
  { kind: "mapItem", questId: 2627, map: "onslaughttower", ids: [1626], quantity: 4 },
  { kind: "kill", questId: 2628, map: "onslaughttower", monsters: ["Golden Caster"] },
  { kind: "mapItem", questId: 2629, map: "onslaughttower", ids: [1627] },
  { kind: "kill", questId: 2630, map: "onslaughttower", monsters: ["Maximillian Lionfang"] },
  { kind: "kill", questId: 2666, map: "falguard", monsters: ["Chaonslaught Caster"] },
  { kind: "mapItem", questId: 2667, map: "falguard", ids: [1628], quantity: 6 },
  {
    kind: "kill",
    questId: 2668,
    map: "falguard",
    monsters: ["Chaonslaught Warrior", "Chaonslaught Cavalry"]
  },
  { kind: "mapItem", questId: 2669, map: "falguard", ids: [1629] },
  { kind: "kill", questId: 2670, map: "falguard", monsters: ["Chaonslaught Warrior"] },
  { kind: "mapItem", questId: 2671, map: "falguard", ids: [1630] },
  { kind: "mapItem", questId: 2672, map: "falguard", ids: [1631] },
  { kind: "kill", questId: 2673, map: "falguard", monsters: ["Chaonslaught Caster"] },
  { kind: "mapItem", questId: 2674, map: "falguard", ids: [1632] },
  { kind: "kill", questId: 2675, map: "falguard", monsters: ["Primarch"] },
  { kind: "kill", questId: 2720, map: "deathpits", monsters: ["Rotting Darkblood"] },
  { kind: "mapItem", questId: 2721, map: "deathpits", ids: [1691], quantity: 5 },
  { kind: "kill", questId: 2722, map: "deathpits", monsters: ["Rotting Darkblood"] },
  { kind: "kill", questId: 2723, map: "deathpits", monsters: ["Rotting Darkblood"] },
  { kind: "kill", questId: 2724, map: "deathpits", monsters: ["Ghastly Darkblood"] },
  { kind: "kill", questId: 2725, map: "deathpits", monsters: ["Ghastly Darkblood"] },
  { kind: "mapItem", questId: 2726, map: "deathpits", ids: [1692], quantity: 6 },
  { kind: "kill", questId: 2727, map: "deathpits", monsters: ["Rotting Darkblood"] },
  { kind: "kill", questId: 2728, map: "deathpits", monsters: ["Ghastly Darkblood"] },
  { kind: "kill", questId: 2729, map: "deathpits", monsters: ["Sundered Darkblood"] },
  { kind: "mapItem", questId: 2730, map: "deathpits", ids: [1693], quantity: 9 },
  {
    kind: "plan",
    questId: 2731,
    actions: [
      { kind: "hunt", map: "deathpits", monster: "Sundered Darkblood", item: "Primarch Mace", isTemp: true },
      {
        kind: "hunt",
        map: "deathpits",
        monster: "Rotting Darkblood",
        item: "Primarch Trident",
        isTemp: true
      },
      { kind: "hunt", map: "deathpits", monster: "Ghastly Darkblood", item: "Primarch Spear", isTemp: true }
    ]
  },
  { kind: "mapItem", questId: 2732, map: "deathpits", ids: [1694], quantity: 12 },
  { kind: "mapItem", questId: 2740, map: "deathpits", ids: [1695], quantity: 1 },
  { kind: "kill", questId: 2740, map: "deathpits", monsters: ["Wrathful Vestis"] },
  { kind: "mapItem", questId: 2792, map: "venomvaults", ids: [1724] },
  { kind: "kill", questId: 2793, map: "venomvaults", monsters: ["Chaonslaught Warrior"] },
  { kind: "mapItem", questId: 2794, map: "venomvaults", ids: [1725] },
  { kind: "mapItem", questId: 2796, map: "venomvaults", ids: [1726] },
  { kind: "kill", questId: 2797, map: "venomvaults", monsters: ["Chaonslaught Caster"] },
  { kind: "mapItem", questId: 2798, map: "venomvaults", ids: [1727], quantity: 5 },
  { kind: "kill", questId: 2799, map: "venomvaults", monsters: ["Chaonslaught Caster"] },
  { kind: "kill", questId: 2800, map: "venomvaults", monsters: ["Chaonslaught Warrior"] },
  { kind: "kill", questId: 2801, map: "venomvaults", monsters: ["Chaonslaught Caster"] },
  { kind: "mapItem", questId: 2802, map: "venomvaults", ids: [1728], quantity: 3 },
  { kind: "kill", questId: 2803, map: "venomvaults", monsters: ["Chaonslaught Caster"] },
  { kind: "kill", questId: 2804, map: "venomvaults", monsters: ["Manticore"] },
  { kind: "plan", questId: 2805, actions: [{ kind: "mapItem", id: 1729, quantity: 4, map: "stormtemple" }] },
  {
    kind: "plan",
    questId: 2806,
    actions: [
      {
        kind: "hunt",
        map: "stormtemple",
        cell: "r1",
        pad: "Left",
        monster: "Chaonslaught Warrior",
        item: "Lightning Boots",
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 2807, map: "stormtemple", monsters: ["Chaonslaught Caster"] },
  { kind: "kill", questId: 2808, map: "stormtemple", monsters: ["Chaonslaught Caster"] },
  { kind: "mapItem", questId: 2809, map: "stormtemple", ids: [1730], quantity: 3 },
  { kind: "kill", questId: 2810, map: "stormtemple", monsters: ["Chaonslaught Caster"] },
  { kind: "mapItem", questId: 2811, map: "stormtemple", ids: [1731] },
  { kind: "kill", questId: 2812, map: "stormtemple", monsters: ["Chaonslaught Cavalry"] },
  { kind: "mapItem", questId: 2813, map: "stormtemple", ids: [1732] },
  { kind: "kill", questId: 2814, map: "stormtemple", monsters: ["Chaos Lord Lionfang"] },
  { kind: "mapItem", questId: 2909, map: "battleoff", ids: [1779] },
  { kind: "mapItem", questId: 2910, map: "battleoff", ids: [1780], quantity: 8 },
  { kind: "kill", questId: 2911, map: "battleoff", monsters: ["Evil Moglin"] },
  { kind: "kill", questId: 2912, map: "battleoff", monsters: ["Evil Moglin"] },
  { kind: "kill", questId: 2913, map: "brightfall", monsters: ["Undead Minion"] },
  { kind: "kill", questId: 2914, map: "brightfall", monsters: ["Undead Mage"] },
  { kind: "mapItem", questId: 2915, map: "brightfall", ids: [1781], quantity: 6 },
  { kind: "mapItem", questId: 2916, map: "brightfall", ids: [1782], quantity: 8 },
  { kind: "kill", questId: 2917, map: "brightfall", monsters: ["Painadin Overlord"] },
  { kind: "chain", questId: 2918 },
  { kind: "kill", questId: 2919, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "kill", questId: 2920, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "kill", questId: 2921, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "kill", questId: 2922, map: "overworld", monsters: ["Undead Mage"] },
  { kind: "mapItem", questId: 2923, map: "overworld", ids: [1800], quantity: 6 },
  { kind: "kill", questId: 2924, map: "overworld", monsters: ["Undead Bruiser"] },
  { kind: "kill", questId: 2925, map: "overworld", monsters: ["Undead Bruiser"] },
  { kind: "kill", questId: 2926, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "mapItem", questId: 2927, map: "overworld", ids: [1801], quantity: 8 },
  { kind: "kill", questId: 2928, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "kill", questId: 2929, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "kill", questId: 2930, map: "overworld", monsters: ["Undead Minion"] },
  { kind: "mapItem", questId: 2931, map: "overworld", ids: [1802], quantity: 10 },
  { kind: "kill", questId: 2932, map: "overworld", monsters: ["Undead Artix"] },
  { kind: "kill", questId: 3166, map: "reddeath", monsters: ["Fire Leech"] },
  { kind: "mapItem", questId: 3167, map: "reddeath", ids: [2178, 2179] },
  { kind: "kill", questId: 3167, map: "reddeath", monsters: ["Reddeath Moglin"] },
  { kind: "mapItem", questId: 3168, map: "reddeath", ids: [2180] },
  { kind: "kill", questId: 3169, map: "reddeath", monsters: ["Fire Leech"] },
  { kind: "kill", questId: 3170, map: "reddeath", monsters: ["Grim Widow"] },
  { kind: "kill", questId: 3171, map: "reddeath", monsters: ["Swamp Wraith"] },
  { kind: "kill", questId: 3172, map: "reddeath", monsters: ["Swamp Wraith"] },
  { kind: "mapItem", questId: 3183, map: "battleontown", ids: [2203] },
  {
    kind: "plan",
    questId: 3187,
    actions: [
      {
        kind: "hunt",
        map: "earthstorm",
        monster: "Shard Spinner",
        item: "Reflective Fragment",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "bloodtuskwar",
        monster: "Chaotic Horcboar",
        item: "Vials of Blood",
        quantity: 5,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "bloodtuskwar",
        monster: "Chaos Tigriff",
        item: "Feathers",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 3188,
    actions: [
      { kind: "hunt", map: "mirrorportal", monster: 1, item: "Chaos Harpy Defeated", isTemp: true },
      { kind: "buy", map: "mirrorportal", shopId: 774, item: "Shriekward Potion", quantity: 99 }
    ]
  },
  {
    kind: "plan",
    questId: 3189,
    actions: [
      {
        kind: "hunt",
        map: "mirrorportal",
        cell: "r4",
        pad: "Right",
        monster: "Chaos Lord Xiang",
        item: "Chaos Lord Xiang Defeated",
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 3077, map: "archives", monsters: ["Chaos Bandit"] },
  { kind: "kill", questId: 3078, map: "archives", monsters: ["Camouflaged Sp-eye"] },
  { kind: "kill", questId: 3079, map: "archives", monsters: ["Chaos Bandit", "Camouflaged Sp-eye"] },
  { kind: "mapItem", questId: 3080, map: "archives", ids: [1937] },
  { kind: "kill", questId: 3080, map: "archives", monsters: ["Chaos Bandit"] },
  { kind: "kill", questId: 3081, map: "archives", monsters: ["Chaos Rat"] },
  { kind: "kill", questId: 3082, map: "archives", monsters: ["Chaos Spider"] },
  { kind: "kill", questId: 3083, map: "archives", monsters: ["Chaos Rat", "Chaos Spider"] },
  { kind: "kill", questId: 3084, map: "archives", monsters: ["Sludgelord"] },
  { kind: "kill", questId: 3094, map: "armory", monsters: ["Chaorrupted Prisoner"] },
  { kind: "mapItem", questId: 3095, map: "armory", ids: [1956], quantity: 4 },
  { kind: "kill", questId: 3095, map: "armory", monsters: ["Chaorrupted Prisoner"] },
  { kind: "kill", questId: 3096, map: "armory", monsters: ["Chaos Drifter"] },
  { kind: "kill", questId: 3089, map: "armory", monsters: ["Chaorrupted Prisoner"] },
  { kind: "kill", questId: 3090, map: "armory", monsters: ["Chaos Mage"] },
  { kind: "kill", questId: 3091, map: "armory", monsters: ["Chaos Mage"] },
  { kind: "mapItem", questId: 3092, map: "armory", ids: [1957] },
  { kind: "kill", questId: 3093, map: "armory", monsters: ["Chaos General"] },
  { kind: "kill", questId: 3120, map: "ceremony", monsters: ["Chaos Invader"] },
  {
    kind: "plan",
    questId: 3121,
    actions: [
      { kind: "mapItem", id: 2108, quantity: 1, map: "yulgar" },
      { kind: "mapItem", id: 2109, quantity: 1, map: "yulgar" },
      { kind: "mapItem", id: 2110, quantity: 1, map: "yulgar" },
      { kind: "mapItem", id: 2111, quantity: 1, map: "archives" },
      { kind: "mapItem", id: 2112, quantity: 1, map: "swordhaven" },
      { kind: "mapItem", id: 2113, quantity: 1, map: "swordhaven" },
      { kind: "mapItem", id: 2114, quantity: 1, map: "swordhaven" },
      { kind: "mapItem", id: 2115, quantity: 1, map: "swordhaven" }
    ]
  },
  { kind: "mapItem", questId: 3122, map: "swordhaven", ids: [2116], quantity: 8 },
  { kind: "kill", questId: 3123, map: "mafic", monsters: ["Living Fire"] },
  { kind: "kill", questId: 3124, map: "ceremony", monsters: ["Chaos Invader"] },
  { kind: "mapItem", questId: 3125, map: "ceremony", ids: [2118], quantity: 6 },
  { kind: "mapItem", questId: 3126, map: "ceremony", ids: [2119] },
  { kind: "kill", questId: 3126, map: "ceremony", monsters: ["Chaos Invader"] },
  { kind: "kill", questId: 3127, map: "ceremony", monsters: ["Chaos Justicar"] },
  { kind: "mapItem", questId: 3133, map: "chaosaltar", ids: [2127], quantity: 12 },
  { kind: "kill", questId: 3134, map: "chaosaltar", monsters: ["Princess Thrall"] },
  { kind: "kill", questId: 3158, map: "castleroof", monsters: ["Chaos Dragon"] },
  { kind: "mapItem", questId: 3159, map: "swordhavenfalls", ids: [2158] },
  { kind: "kill", questId: 3160, map: "swordhavenfalls", monsters: ["Chaos Lord Alteon"] },
  { kind: "chain", questId: 3578 },
  { kind: "chain", questId: 3579 },
  { kind: "chain", questId: 3580 },
  { kind: "chain", questId: 3581 },
  { kind: "chain", questId: 3582 },
  { kind: "chain", questId: 3583 },
  { kind: "chain", questId: 3584 },
  { kind: "chain", questId: 3585 },
  { kind: "chain", questId: 3586 },
  { kind: "chain", questId: 3587 },
  { kind: "chain", questId: 3588 },
  { kind: "chain", questId: 3589 },
  { kind: "chain", questId: 3590 },
  { kind: "chain", questId: 3591 },
  { kind: "chain", questId: 3764 },
  { kind: "mapItem", questId: 3765, map: "mountdoomskull", ids: [2726] },
  { kind: "chain", questId: 3766 },
  { kind: "chain", questId: 3779 },
  { kind: "kill", questId: 3781, map: "newfinale", monsters: ["Alliance Virago"] },
  { kind: "kill", questId: 3788, map: "newfinale", monsters: ["Chaos Challenger"] },
  { kind: "kill", questId: 3783, map: "newfinale", monsters: ["Alliance Virago"] },
  { kind: "kill", questId: 3785, map: "newfinale", monsters: ["Alliance Virago"] },
  { kind: "kill", questId: 3790, map: "newfinale", monsters: ["Memory of Vampires"] },
  { kind: "kill", questId: 3787, map: "newfinale", monsters: ["Alliance Virago"] },
  { kind: "chain", questId: 3608 },
  { kind: "chain", questId: 3618 },
  { kind: "chain", questId: 3609 },
  { kind: "chain", questId: 3610 },
  { kind: "chain", questId: 3611 },
  { kind: "chain", questId: 3612 },
  { kind: "chain", questId: 3613 },
  { kind: "chain", questId: 3614 },
  { kind: "chain", questId: 3615 },
  { kind: "chain", questId: 3616 },
  { kind: "chain", questId: 3617 },
  { kind: "chain", questId: 3619 },
  { kind: "chain", questId: 3791 },
  { kind: "chain", questId: 3792 },
  { kind: "kill", questId: 3794, map: "newfinale", monsters: ["Alliance Soldier"] },
  { kind: "mapItem", questId: 3795, map: "drakathfight", ids: [2894] },
  { kind: "kill", questId: 3620, map: "shadowrise", monsters: ["Darkness Elemental"] },
  { kind: "mapItem", questId: 3796, map: "shadowrise", ids: [2895] },
  { kind: "chain", questId: 3797 },
  { kind: "plan", questId: 3798, actions: [{ kind: "mapItem", id: 2896, quantity: 1, map: "shadowattack" }] },
  {
    kind: "plan",
    questId: 3799,
    actions: [{ kind: "hunt", map: "shadowattack", monster: "Death", item: "You Beat Death?!", isTemp: true }]
  },
  { kind: "plan", questId: 3875, actions: [] },
  { kind: "plan", questId: 3876, actions: [] },
  { kind: "plan", questId: 3877, actions: [] },
  { kind: "plan", questId: 3878, actions: [] },
  {
    kind: "plan",
    questId: 3879,
    actions: [
      { kind: "hunt", map: "chaosrealm", monster: 13, item: "Chaos Lord Alteon Defeated", isTemp: true }
    ]
  },
  { kind: "plan", questId: 3880, actions: [] },
  { kind: "plan", questId: 3881, actions: [] },
  { kind: "chain", questId: 3812 },
  { kind: "chain", questId: 3813 },
  { kind: "chain", questId: 3814 },
  {
    kind: "plan",
    questId: 3815,
    actions: [
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sir Knight",
        item: "Enemy Defeated",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 3816,
    actions: [
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sir Knight",
        item: "Enemy Defeated",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 3817,
    actions: [
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sir Knight",
        item: "Enemy Defeated",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 3818,
    actions: [
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sir Knight",
        item: "Enemy Defeated",
        quantity: 3,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 3819,
    actions: [
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sir Knight",
        item: "Enemy Defeated",
        quantity: 2,
        isTemp: true
      }
    ]
  },
  {
    kind: "plan",
    questId: 3820,
    actions: [
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sir Knight",
        item: "Enemy Defeated",
        quantity: 5,
        isTemp: true
      }
    ]
  },
  { kind: "kill", questId: 3821, map: "falcontower", monsters: ["DragonLord"] },
  { kind: "kill", questId: 3822, map: "falcontower", monsters: ["Dragon Drakath"] },
  { kind: "kill", questId: 3823, map: "falcontower", monsters: ["Sepulchure"] },
  { kind: "kill", questId: 3824, map: "falcontower", monsters: ["Alteon"] }
];
