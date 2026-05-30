import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "NecroU",
  "description": "This will finish the NecroU quest.",
  "tags": [
    "story",
    "quest",
    "doomwood",
    "necrou",
    "part1",
    "4necro",
    "u"
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
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.doomwood.part1.4necro-u",
    category: "Story",
    map: "doomwood",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
