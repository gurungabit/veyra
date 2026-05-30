import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Complete Doomwood Story",
  "description": "This will complete the Doomwood story.",
  "tags": [
    "story",
    "quest",
    "doomwood",
    "complete",
    "all",
    "0complete"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "chain",
    "questId": 1080
  },
  {
    "kind": "plan",
    "questId": 1064,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ball of Ectoplasm",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Bonespike Collar",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r8",
        "pad": "Right",
        "monster": "Doomwood Soldier",
        "item": "Distal Fingerbone",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1065,
    "map": "doomwood",
    "ids": [
      423
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 1066,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r6",
        "pad": "Right",
        "monster": "*",
        "item": "Warrior Reinforced"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1067,
    "map": "doomwood",
    "ids": [
      422
    ]
  },
  {
    "kind": "kill",
    "questId": 1068,
    "map": "doomwood",
    "monsters": [
      "Undead Paladin"
    ]
  },
  {
    "kind": "plan",
    "questId": 1069,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Muncher Mandibles",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Stained Skulls",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ecto-Coated Cloth Scraps",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Soldier",
        "item": "Fractured Tibia",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1070,
    "actions": [
      {
        "kind": "mapItem",
        "map": "doomundead",
        "id": 427
      },
      {
        "kind": "hunt",
        "map": "doomundead",
        "cell": "r3",
        "pad": "Right",
        "monster": "*",
        "item": "Light Knight Lifeforce",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 1089
  },
  {
    "kind": "chain",
    "questId": 1080
  },
  {
    "kind": "plan",
    "questId": 1064,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ball of Ectoplasm",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Bonespike Collar",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r8",
        "pad": "Right",
        "monster": "Doomwood Soldier",
        "item": "Distal Fingerbone",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1065,
    "map": "doomwood",
    "ids": [
      423
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 1066,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r6",
        "pad": "Right",
        "monster": "*",
        "item": "Warrior Reinforced"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1067,
    "map": "doomwood",
    "ids": [
      422
    ]
  },
  {
    "kind": "kill",
    "questId": 1068,
    "map": "doomwood",
    "monsters": [
      "Undead Paladin"
    ]
  },
  {
    "kind": "plan",
    "questId": 1069,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Muncher Mandibles",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Stained Skulls",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ecto-Coated Cloth Scraps",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Soldier",
        "item": "Fractured Tibia",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1070,
    "actions": [
      {
        "kind": "mapItem",
        "map": "doomundead",
        "id": 427
      },
      {
        "kind": "hunt",
        "map": "doomundead",
        "cell": "r3",
        "pad": "Right",
        "monster": "*",
        "item": "Light Knight Lifeforce",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 1089
  },
  {
    "kind": "mapItem",
    "questId": 1081,
    "map": "maul",
    "ids": [
      435
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1082,
    "map": "maul",
    "ids": [
      434
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 1083,
    "map": "maul",
    "monsters": [
      "Personal Chopper",
      "Slimeskull"
    ]
  },
  {
    "kind": "plan",
    "questId": 1084,
    "actions": [
      {
        "kind": "hunt",
        "map": "maul",
        "cell": "r2",
        "pad": "Left",
        "monster": "*",
        "item": "Body Part Donation",
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "maul",
        "id": 436,
        "quantity": 2
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1085,
    "map": "maul",
    "monsters": [
      "Creature Creation"
    ]
  },
  {
    "kind": "chain",
    "questId": 1080
  },
  {
    "kind": "plan",
    "questId": 1064,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ball of Ectoplasm",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Bonespike Collar",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r8",
        "pad": "Right",
        "monster": "Doomwood Soldier",
        "item": "Distal Fingerbone",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1065,
    "map": "doomwood",
    "ids": [
      423
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 1066,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r6",
        "pad": "Right",
        "monster": "*",
        "item": "Warrior Reinforced"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1067,
    "map": "doomwood",
    "ids": [
      422
    ]
  },
  {
    "kind": "kill",
    "questId": 1068,
    "map": "doomwood",
    "monsters": [
      "Undead Paladin"
    ]
  },
  {
    "kind": "plan",
    "questId": 1069,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Muncher Mandibles",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Stained Skulls",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ecto-Coated Cloth Scraps",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Soldier",
        "item": "Fractured Tibia",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1070,
    "actions": [
      {
        "kind": "mapItem",
        "map": "doomundead",
        "id": 427
      },
      {
        "kind": "hunt",
        "map": "doomundead",
        "cell": "r3",
        "pad": "Right",
        "monster": "*",
        "item": "Light Knight Lifeforce",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 1089
  },
  {
    "kind": "mapItem",
    "questId": 1081,
    "map": "maul",
    "ids": [
      435
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1082,
    "map": "maul",
    "ids": [
      434
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 1083,
    "map": "maul",
    "monsters": [
      "Personal Chopper",
      "Slimeskull"
    ]
  },
  {
    "kind": "plan",
    "questId": 1084,
    "actions": [
      {
        "kind": "hunt",
        "map": "maul",
        "cell": "r2",
        "pad": "Left",
        "monster": "*",
        "item": "Body Part Donation",
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "maul",
        "id": 436,
        "quantity": 2
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1085,
    "map": "maul",
    "monsters": [
      "Creature Creation"
    ]
  },
  {
    "kind": "plan",
    "questId": 1087,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrotower",
        "cell": "r2",
        "pad": "Left",
        "monster": "Doomwood Treeant",
        "item": "Pain-per",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "necrotower",
        "cell": "r2",
        "pad": "Left",
        "monster": "Slimeskull",
        "item": "Toxic Goo",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1088,
    "map": "doomwood",
    "monsters": [
      "Doomwood Soldier",
      "Doomwood Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 1090,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrotower",
        "monster": 4,
        "item": "Seal Components"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1091,
    "map": "necrotower",
    "ids": [
      438
    ]
  },
  {
    "kind": "chain",
    "questId": 1092
  },
  {
    "kind": "chain",
    "questId": 1080
  },
  {
    "kind": "plan",
    "questId": 1064,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ball of Ectoplasm",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Bonespike Collar",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r8",
        "pad": "Right",
        "monster": "Doomwood Soldier",
        "item": "Distal Fingerbone",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1065,
    "map": "doomwood",
    "ids": [
      423
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 1066,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "cell": "r6",
        "pad": "Right",
        "monster": "*",
        "item": "Warrior Reinforced"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1067,
    "map": "doomwood",
    "ids": [
      422
    ]
  },
  {
    "kind": "kill",
    "questId": 1068,
    "map": "doomwood",
    "monsters": [
      "Undead Paladin"
    ]
  },
  {
    "kind": "plan",
    "questId": 1069,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Muncher Mandibles",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Bonemuncher",
        "item": "Stained Skulls",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Ecto-Coated Cloth Scraps",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Soldier",
        "item": "Fractured Tibia",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1070,
    "actions": [
      {
        "kind": "mapItem",
        "map": "doomundead",
        "id": 427
      },
      {
        "kind": "hunt",
        "map": "doomundead",
        "cell": "r3",
        "pad": "Right",
        "monster": "*",
        "item": "Light Knight Lifeforce",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 1089
  },
  {
    "kind": "mapItem",
    "questId": 1081,
    "map": "maul",
    "ids": [
      435
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1082,
    "map": "maul",
    "ids": [
      434
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 1083,
    "map": "maul",
    "monsters": [
      "Personal Chopper",
      "Slimeskull"
    ]
  },
  {
    "kind": "plan",
    "questId": 1084,
    "actions": [
      {
        "kind": "hunt",
        "map": "maul",
        "cell": "r2",
        "pad": "Left",
        "monster": "*",
        "item": "Body Part Donation",
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "maul",
        "id": 436,
        "quantity": 2
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1085,
    "map": "maul",
    "monsters": [
      "Creature Creation"
    ]
  },
  {
    "kind": "plan",
    "questId": 1087,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrotower",
        "cell": "r2",
        "pad": "Left",
        "monster": "Doomwood Treeant",
        "item": "Pain-per",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "necrotower",
        "cell": "r2",
        "pad": "Left",
        "monster": "Slimeskull",
        "item": "Toxic Goo",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1088,
    "map": "doomwood",
    "monsters": [
      "Doomwood Soldier",
      "Doomwood Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 1090,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrotower",
        "monster": 4,
        "item": "Seal Components"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1091,
    "map": "necrotower",
    "ids": [
      438
    ]
  },
  {
    "kind": "chain",
    "questId": 1092
  },
  {
    "kind": "kill",
    "questId": 1112,
    "map": "necroU",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1113,
    "map": "necroU",
    "ids": [
      450
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 1114,
    "actions": [
      {
        "kind": "hunt",
        "map": "necroU",
        "monster": "Ghoul",
        "item": "Undead Wishes"
      },
      {
        "kind": "hunt",
        "map": "necroU",
        "monster": "Doomwood Soldier",
        "item": "Undead Dreams"
      },
      {
        "kind": "hunt",
        "map": "necroU",
        "monster": "Doomwood Soldier",
        "item": "Undead Ambitions"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1115,
    "map": "necroU",
    "ids": [
      449
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1116,
    "map": "necroU",
    "monsters": [
      "Doomwood Soldier",
      "Doomwood Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1117,
    "map": "necroU",
    "ids": [
      451
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 1117,
    "map": "necroU",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1118,
    "map": "necroU",
    "ids": [
      452
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1118,
    "map": "necroU",
    "monsters": [
      "Slimeskull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1119,
    "map": "necroU",
    "ids": [
      453
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1120,
    "map": "necroU",
    "monsters": [
      "Doomwood Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1121,
    "map": "necroU",
    "ids": [
      454
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 1121,
    "map": "necroU",
    "ids": [
      455
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 1121,
    "map": "necroU",
    "monsters": [
      "Shelleton",
      "Necro U"
    ]
  },
  {
    "kind": "chain",
    "questId": 1154
  },
  {
    "kind": "kill",
    "questId": 1170,
    "map": "vordredboss",
    "monsters": [
      "Ultra Vordred"
    ]
  },
  {
    "kind": "plan",
    "questId": 1123,
    "actions": [
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r2",
        "pad": "Up",
        "monster": "SlimeSkull",
        "item": "Slimeskull Trophy",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r2",
        "pad": "Up",
        "monster": "Doomwood Bonemuncher",
        "item": "Munched Boneshard",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r2",
        "pad": "Up",
        "monster": "Shelleton",
        "item": "Shelleton Shrapnel",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1124,
    "actions": [
      {
        "kind": "mapItem",
        "map": "temple",
        "id": 456,
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r3",
        "pad": "Up",
        "monster": "Undead Mage",
        "item": "Necrotic Rune",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r3",
        "pad": "Up",
        "monster": "Doomwood Ectomancer",
        "item": "Ecto-Covered Rune",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1125,
    "actions": [
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r4",
        "pad": "Up",
        "monster": "Ghoul",
        "item": "Ghoulish Gear"
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r4",
        "pad": "Up",
        "monster": "Lich",
        "item": "Haunted Habiliment"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1126,
    "actions": [
      {
        "kind": "mapItem",
        "map": "temple",
        "id": 457,
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r5",
        "pad": "Up",
        "monster": "Skeletal Fire Mage",
        "item": "Flame Extinguished",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1127,
    "map": "temple",
    "monsters": [
      "Doomwood Ectomancer"
    ]
  },
  {
    "kind": "plan",
    "questId": 1128,
    "actions": [
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r2",
        "pad": "Up",
        "monster": "Doomwood Bonemuncher",
        "item": "Masticated Mandible",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r7",
        "pad": "Up",
        "monster": "Sanguine Souleater",
        "item": "Freed Soul",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1129,
    "map": "temple",
    "ids": [
      458
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1130,
    "map": "temple",
    "monsters": [
      "Doomwood Ectomancer",
      "Skeletal Fire Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1131,
    "map": "temple",
    "ids": [
      459
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 1131,
    "map": "temple",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "kill",
    "questId": 1132,
    "map": "temple",
    "monsters": [
      "Doomwood Ectomancer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1133,
    "map": "temple",
    "ids": [
      460
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1133,
    "map": "temple",
    "monsters": [
      "Sanguine Souleater"
    ]
  },
  {
    "kind": "kill",
    "questId": 1134,
    "map": "temple",
    "monsters": [
      "SlimeSkull",
      "Doomwood Ectomancer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1135,
    "map": "temple",
    "ids": [
      461
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1137,
    "map": "temple",
    "monsters": [
      "Doomwood Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 1138,
    "map": "temple",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1139,
    "map": "temple",
    "ids": [
      462
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1140,
    "map": "temple",
    "monsters": [
      "Doomwood Bonemuncher",
      "Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 1141,
    "map": "temple",
    "monsters": [
      "Undead Mage",
      "Skeletal Fire Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1142,
    "map": "temple",
    "ids": [
      463
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1142,
    "map": "temple",
    "monsters": [
      "Shelleton",
      "Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 1143,
    "map": "temple",
    "monsters": [
      "Lich"
    ]
  },
  {
    "kind": "kill",
    "questId": 1144,
    "map": "temple",
    "monsters": [
      "Dracolich"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1145,
    "map": "temple",
    "ids": [
      464
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1146,
    "map": "temple",
    "monsters": [
      "Doomwood Bonemuncher"
    ]
  },
  {
    "kind": "kill",
    "questId": 1147,
    "map": "temple",
    "monsters": [
      "Cryptkeeper Lich"
    ]
  },
  {
    "kind": "plan",
    "questId": 1148,
    "actions": [
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r2",
        "pad": "Up",
        "monster": "Shelleton",
        "item": "Basilisk's Scale"
      },
      {
        "kind": "hunt",
        "map": "temple",
        "cell": "r2",
        "pad": "Up",
        "monster": "Shelleton",
        "item": "Scroll of Magic Inversion"
      },
      {
        "kind": "jump",
        "cell": "Enter",
        "pad": "Spawn"
      },
      {
        "kind": "buy",
        "map": "temple",
        "shopId": 287,
        "item": "Scroll of Cure Petrification"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1155,
    "map": "lab",
    "ids": [
      488
    ]
  },
  {
    "kind": "kill",
    "questId": 1156,
    "map": "lab",
    "monsters": [
      "Ant Giant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1157,
    "map": "lab",
    "ids": [
      489
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 1157,
    "map": "lab",
    "monsters": [
      "Ant Giant"
    ]
  },
  {
    "kind": "kill",
    "questId": 1158,
    "map": "lab",
    "monsters": [
      "Ant Giant"
    ]
  },
  {
    "kind": "kill",
    "questId": 1159,
    "map": "lab",
    "monsters": [
      "Ant Giant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1160,
    "map": "lab",
    "ids": [
      490
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1161,
    "map": "lab",
    "ids": [
      491
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 1161,
    "map": "lab",
    "monsters": [
      "Giant Scorpion"
    ]
  },
  {
    "kind": "kill",
    "questId": 1162,
    "map": "lab",
    "monsters": [
      "Ant Giant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1163,
    "map": "lab",
    "ids": [
      492
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 1164,
    "map": "mountain",
    "ids": [
      493
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1169,
    "map": "mountain",
    "ids": [
      494
    ]
  },
  {
    "kind": "plan",
    "questId": 2044,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r6",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2045,
    "map": "necrodungeon",
    "ids": [
      1001
    ]
  },
  {
    "kind": "kill",
    "questId": 2045,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1015
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1002
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2047,
    "map": "necrodungeon",
    "ids": [
      1003
    ]
  },
  {
    "kind": "kill",
    "questId": 2047,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2048,
    "map": "necrodungeon",
    "ids": [
      1004
    ]
  },
  {
    "kind": "kill",
    "questId": 2048,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier",
      "Ghoul"
    ]
  },
  {
    "kind": "plan",
    "questId": 2049,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r11",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1005
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 2050,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull",
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1017
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1006
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2052,
    "map": "necrodungeon",
    "ids": [
      1007
    ]
  },
  {
    "kind": "kill",
    "questId": 2052,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2053,
    "map": "necrodungeon",
    "ids": [
      1008
    ]
  },
  {
    "kind": "kill",
    "questId": 2053,
    "map": "necrodungeon",
    "monsters": [
      "Doom Crawler"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1009
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1018
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 2054,
    "map": "necrodungeon",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2055,
    "map": "necrodungeon",
    "ids": [
      1010
    ]
  },
  {
    "kind": "kill",
    "questId": 2055,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 2056,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r18",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1011
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2058,
    "map": "necrodungeon",
    "ids": [
      1012
    ]
  },
  {
    "kind": "kill",
    "questId": 2058,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1019
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1013
    ]
  },
  {
    "kind": "plan",
    "questId": 2060,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 49,
        "item": "Dracolich Head 1 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 50,
        "item": "Dracolich Head 2 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 46,
        "item": "Dracolich Head 3 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 47,
        "item": "Dracolich Head 4 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 48,
        "item": "Dracolich Head 5 Defeated!"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2061,
    "map": "necrodungeon",
    "ids": [
      1020
    ]
  },
  {
    "kind": "plan",
    "questId": 2044,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r6",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2045,
    "map": "necrodungeon",
    "ids": [
      1001
    ]
  },
  {
    "kind": "kill",
    "questId": 2045,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1015
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1002
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2047,
    "map": "necrodungeon",
    "ids": [
      1003
    ]
  },
  {
    "kind": "kill",
    "questId": 2047,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2048,
    "map": "necrodungeon",
    "ids": [
      1004
    ]
  },
  {
    "kind": "kill",
    "questId": 2048,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier",
      "Ghoul"
    ]
  },
  {
    "kind": "plan",
    "questId": 2049,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r11",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1005
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 2050,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull",
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1017
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1006
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2052,
    "map": "necrodungeon",
    "ids": [
      1007
    ]
  },
  {
    "kind": "kill",
    "questId": 2052,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2053,
    "map": "necrodungeon",
    "ids": [
      1008
    ]
  },
  {
    "kind": "kill",
    "questId": 2053,
    "map": "necrodungeon",
    "monsters": [
      "Doom Crawler"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1009
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1018
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 2054,
    "map": "necrodungeon",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2055,
    "map": "necrodungeon",
    "ids": [
      1010
    ]
  },
  {
    "kind": "kill",
    "questId": 2055,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 2056,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r18",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1011
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2058,
    "map": "necrodungeon",
    "ids": [
      1012
    ]
  },
  {
    "kind": "kill",
    "questId": 2058,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1019
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1013
    ]
  },
  {
    "kind": "plan",
    "questId": 2060,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 49,
        "item": "Dracolich Head 1 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 50,
        "item": "Dracolich Head 2 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 46,
        "item": "Dracolich Head 3 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 47,
        "item": "Dracolich Head 4 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 48,
        "item": "Dracolich Head 5 Defeated!"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2061,
    "map": "necrodungeon",
    "ids": [
      1020
    ]
  },
  {
    "kind": "kill",
    "questId": 2070,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2071,
    "map": "necrocavern",
    "ids": [
      1042
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 2071,
    "map": "necrocavern",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2072,
    "map": "necrocavern",
    "ids": [
      1044
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2072,
    "map": "necrocavern",
    "ids": [
      1045
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 2072,
    "map": "necrocavern",
    "monsters": [
      "Shadow Imp",
      "Shadowstone Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 2073,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 2074,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Elemental",
      "Shadow Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2075,
    "map": "necrocavern",
    "ids": [
      1043
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 2076,
    "map": "necrocavern",
    "monsters": [
      "Shadow Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 2077,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Support"
    ]
  },
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7603,
    "map": "stonewood",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7604,
    "map": "stonewood",
    "ids": [
      7510
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7604,
    "map": "stonewood",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 7605,
    "map": "stonewood",
    "monsters": [
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7511
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7512
    ]
  },
  {
    "kind": "kill",
    "questId": 7607,
    "map": "stonewood",
    "monsters": [
      "BioKnight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7608,
    "map": "stonewood",
    "ids": [
      7513
    ]
  },
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7603,
    "map": "stonewood",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7604,
    "map": "stonewood",
    "ids": [
      7510
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7604,
    "map": "stonewood",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 7605,
    "map": "stonewood",
    "monsters": [
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7511
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7512
    ]
  },
  {
    "kind": "kill",
    "questId": 7607,
    "map": "stonewood",
    "monsters": [
      "BioKnight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7608,
    "map": "stonewood",
    "ids": [
      7513
    ]
  },
  {
    "kind": "kill",
    "questId": 7609,
    "map": "techdungeon",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7610,
    "map": "techdungeon",
    "ids": [
      7515
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7610,
    "map": "techdungeon",
    "monsters": [
      "Rotting Rat"
    ]
  },
  {
    "kind": "plan",
    "questId": 7611,
    "actions": [
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Armor Piece",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Helm"
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Deadtech Polearm"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7612,
    "map": "techdungeon",
    "ids": [
      7514
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7613,
    "map": "techdungeon",
    "ids": [
      7516
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7614,
    "map": "techdungeon",
    "ids": [
      7517
    ]
  },
  {
    "kind": "kill",
    "questId": 7614,
    "map": "techdungeon",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7615,
    "map": "techdungeon",
    "monsters": [
      "Kalron the Cryptborg"
    ]
  },
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7603,
    "map": "stonewood",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7604,
    "map": "stonewood",
    "ids": [
      7510
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7604,
    "map": "stonewood",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 7605,
    "map": "stonewood",
    "monsters": [
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7511
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7512
    ]
  },
  {
    "kind": "kill",
    "questId": 7607,
    "map": "stonewood",
    "monsters": [
      "BioKnight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7608,
    "map": "stonewood",
    "ids": [
      7513
    ]
  },
  {
    "kind": "kill",
    "questId": 7609,
    "map": "techdungeon",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7610,
    "map": "techdungeon",
    "ids": [
      7515
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7610,
    "map": "techdungeon",
    "monsters": [
      "Rotting Rat"
    ]
  },
  {
    "kind": "plan",
    "questId": 7611,
    "actions": [
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Armor Piece",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Helm"
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Deadtech Polearm"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7612,
    "map": "techdungeon",
    "ids": [
      7514
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7613,
    "map": "techdungeon",
    "ids": [
      7516
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7614,
    "map": "techdungeon",
    "ids": [
      7517
    ]
  },
  {
    "kind": "kill",
    "questId": 7614,
    "map": "techdungeon",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7615,
    "map": "techdungeon",
    "monsters": [
      "Kalron the Cryptborg"
    ]
  },
  {
    "kind": "plan",
    "questId": 7623,
    "actions": [
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7528,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7624,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r2",
        "pad": "Right",
        "monster": "Asherion",
        "item": "Defeat Asherion"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7625,
    "actions": [
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7529,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7626,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r2",
        "pad": "Right",
        "monster": "Doomwood Treeant",
        "item": "Sturdy Wood",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7626,
    "map": "stonewooddeep",
    "ids": [
      7530
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7627,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Treeant",
        "item": "Area Cleared",
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7531,
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7628,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Left",
        "monster": "Target Dummy",
        "item": "Target Dummy Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7629,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Slime Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7630,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Stolen Armor",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7631,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Left",
        "monster": "CryptHacker",
        "item": "Crypthacker Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Left",
        "monster": "CryptHacker",
        "item": "Unidentified Clue"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7632,
    "map": "stonewooddeep",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7633,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Acid Ooze",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Right",
        "monster": "NecroDrone",
        "item": "Explosive Tech",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7634,
    "map": "stonewooddeep",
    "ids": [
      7532
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7635,
    "map": "stonewooddeep",
    "ids": [
      7533
    ]
  },
  {
    "kind": "kill",
    "questId": 7636,
    "map": "stonewooddeep",
    "monsters": [
      "Sir Kut"
    ]
  },
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7603,
    "map": "stonewood",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7604,
    "map": "stonewood",
    "ids": [
      7510
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7604,
    "map": "stonewood",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 7605,
    "map": "stonewood",
    "monsters": [
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7511
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7512
    ]
  },
  {
    "kind": "kill",
    "questId": 7607,
    "map": "stonewood",
    "monsters": [
      "BioKnight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7608,
    "map": "stonewood",
    "ids": [
      7513
    ]
  },
  {
    "kind": "kill",
    "questId": 7609,
    "map": "techdungeon",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7610,
    "map": "techdungeon",
    "ids": [
      7515
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7610,
    "map": "techdungeon",
    "monsters": [
      "Rotting Rat"
    ]
  },
  {
    "kind": "plan",
    "questId": 7611,
    "actions": [
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Armor Piece",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Helm"
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Deadtech Polearm"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7612,
    "map": "techdungeon",
    "ids": [
      7514
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7613,
    "map": "techdungeon",
    "ids": [
      7516
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7614,
    "map": "techdungeon",
    "ids": [
      7517
    ]
  },
  {
    "kind": "kill",
    "questId": 7614,
    "map": "techdungeon",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7615,
    "map": "techdungeon",
    "monsters": [
      "Kalron the Cryptborg"
    ]
  },
  {
    "kind": "plan",
    "questId": 7623,
    "actions": [
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7528,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7624,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r2",
        "pad": "Right",
        "monster": "Asherion",
        "item": "Defeat Asherion"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7625,
    "actions": [
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7529,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7626,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r2",
        "pad": "Right",
        "monster": "Doomwood Treeant",
        "item": "Sturdy Wood",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7626,
    "map": "stonewooddeep",
    "ids": [
      7530
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7627,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Treeant",
        "item": "Area Cleared",
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7531,
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7628,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Left",
        "monster": "Target Dummy",
        "item": "Target Dummy Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7629,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Slime Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7630,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Stolen Armor",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7631,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Left",
        "monster": "CryptHacker",
        "item": "Crypthacker Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Left",
        "monster": "CryptHacker",
        "item": "Unidentified Clue"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7632,
    "map": "stonewooddeep",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7633,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Acid Ooze",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Right",
        "monster": "NecroDrone",
        "item": "Explosive Tech",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7634,
    "map": "stonewooddeep",
    "ids": [
      7532
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7635,
    "map": "stonewooddeep",
    "ids": [
      7533
    ]
  },
  {
    "kind": "kill",
    "questId": 7636,
    "map": "stonewooddeep",
    "monsters": [
      "Sir Kut"
    ]
  },
  {
    "kind": "kill",
    "questId": 7637,
    "map": "techfortress",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7638,
    "map": "techfortress",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "kill",
    "questId": 7639,
    "map": "techfortress",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7640,
    "map": "techfortress",
    "ids": [
      7561
    ]
  },
  {
    "kind": "kill",
    "questId": 7640,
    "map": "techfortress",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7641,
    "actions": [
      {
        "kind": "hunt",
        "map": "techfortress",
        "monster": "NecroDrone",
        "item": "NecroMedals",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7642,
    "map": "techfortress",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7643,
    "map": "techfortress",
    "monsters": [
      "CPU"
    ]
  },
  {
    "kind": "kill",
    "questId": 7644,
    "map": "techfortress",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7645,
    "map": "techfortress",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7646,
    "map": "techfortress",
    "monsters": [
      "Vortrix"
    ]
  },
  {
    "kind": "kill",
    "questId": 7653,
    "map": "techfortress",
    "monsters": [
      "MechaVortrix"
    ]
  },
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7603,
    "map": "stonewood",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7604,
    "map": "stonewood",
    "ids": [
      7510
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7604,
    "map": "stonewood",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 7605,
    "map": "stonewood",
    "monsters": [
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7511
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 7606,
    "map": "stonewood",
    "ids": [
      7512
    ]
  },
  {
    "kind": "kill",
    "questId": 7607,
    "map": "stonewood",
    "monsters": [
      "BioKnight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7608,
    "map": "stonewood",
    "ids": [
      7513
    ]
  },
  {
    "kind": "kill",
    "questId": 7609,
    "map": "techdungeon",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7610,
    "map": "techdungeon",
    "ids": [
      7515
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7610,
    "map": "techdungeon",
    "monsters": [
      "Rotting Rat"
    ]
  },
  {
    "kind": "plan",
    "questId": 7611,
    "actions": [
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Armor Piece",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Guard Helm"
      },
      {
        "kind": "hunt",
        "map": "techdungeon",
        "cell": "r4",
        "pad": "Left",
        "monster": "DoomBorg Guard",
        "item": "Deadtech Polearm"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7612,
    "map": "techdungeon",
    "ids": [
      7514
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7613,
    "map": "techdungeon",
    "ids": [
      7516
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7614,
    "map": "techdungeon",
    "ids": [
      7517
    ]
  },
  {
    "kind": "kill",
    "questId": 7614,
    "map": "techdungeon",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7615,
    "map": "techdungeon",
    "monsters": [
      "Kalron the Cryptborg"
    ]
  },
  {
    "kind": "plan",
    "questId": 7623,
    "actions": [
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7528,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7624,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r2",
        "pad": "Right",
        "monster": "Asherion",
        "item": "Defeat Asherion"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7625,
    "actions": [
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7529,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7626,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r2",
        "pad": "Right",
        "monster": "Doomwood Treeant",
        "item": "Sturdy Wood",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7626,
    "map": "stonewooddeep",
    "ids": [
      7530
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7627,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Treeant",
        "item": "Area Cleared",
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "stonewooddeep",
        "id": 7531,
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7628,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Left",
        "monster": "Target Dummy",
        "item": "Target Dummy Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7629,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Slime Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7630,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Stolen Armor",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7631,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Left",
        "monster": "CryptHacker",
        "item": "Crypthacker Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Left",
        "monster": "CryptHacker",
        "item": "Unidentified Clue"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7632,
    "map": "stonewooddeep",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7633,
    "actions": [
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r3",
        "pad": "Right",
        "monster": "Doomwood Slime",
        "item": "Acid Ooze",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "stonewooddeep",
        "cell": "r7",
        "pad": "Right",
        "monster": "NecroDrone",
        "item": "Explosive Tech",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7634,
    "map": "stonewooddeep",
    "ids": [
      7532
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7635,
    "map": "stonewooddeep",
    "ids": [
      7533
    ]
  },
  {
    "kind": "kill",
    "questId": 7636,
    "map": "stonewooddeep",
    "monsters": [
      "Sir Kut"
    ]
  },
  {
    "kind": "kill",
    "questId": 7637,
    "map": "techfortress",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7638,
    "map": "techfortress",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "kill",
    "questId": 7639,
    "map": "techfortress",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7640,
    "map": "techfortress",
    "ids": [
      7561
    ]
  },
  {
    "kind": "kill",
    "questId": 7640,
    "map": "techfortress",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7641,
    "actions": [
      {
        "kind": "hunt",
        "map": "techfortress",
        "monster": "NecroDrone",
        "item": "NecroMedals",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7642,
    "map": "techfortress",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7643,
    "map": "techfortress",
    "monsters": [
      "CPU"
    ]
  },
  {
    "kind": "kill",
    "questId": 7644,
    "map": "techfortress",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7645,
    "map": "techfortress",
    "monsters": [
      "DoomBorg Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7646,
    "map": "techfortress",
    "monsters": [
      "Vortrix"
    ]
  },
  {
    "kind": "kill",
    "questId": 7653,
    "map": "techfortress",
    "monsters": [
      "MechaVortrix"
    ]
  },
  {
    "kind": "kill",
    "questId": 2093,
    "map": "doomhaven",
    "monsters": [
      "Skeletal Soldier"
    ]
  },
  {
    "kind": "chain",
    "questId": 2093
  },
  {
    "kind": "kill",
    "questId": 2094,
    "map": "doomhaven",
    "monsters": [
      "Skeletal Ice Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 2095,
    "map": "doomhaven",
    "monsters": [
      "Angry Undead Giant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2096,
    "map": "doomhaven",
    "ids": [
      1174
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 2097,
    "map": "doomhaven",
    "monsters": [
      "Skeletal Viking"
    ]
  },
  {
    "kind": "kill",
    "questId": 2124,
    "map": "doomwar",
    "monsters": [
      "Angry Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 2125,
    "map": "doomwar",
    "monsters": [
      "Zombie Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 2126,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwar",
        "cell": "r5",
        "pad": "Left",
        "monster": "*",
        "item": "Fallen Friend Defeated",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 2127,
    "map": "doomwar",
    "monsters": [
      "Zombie King Alteon"
    ]
  },
  {
    "kind": "kill",
    "questId": 2128,
    "map": "sepulchure",
    "monsters": [
      "Dark Sepulchure"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.doomwood.0complete-doomwood",
    category: "Story",
    map: "doomwood",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
