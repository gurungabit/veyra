import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Shadowfall Rise",
  "description": "This will finish the Shadowfall Rise quest.",
  "tags": [
    "story",
    "quest",
    "sepulchure-saga",
    "shadowfall-rise",
    "sepulchure",
    "saga",
    "04shadowfall",
    "rise"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6539,
    "map": "noxustower",
    "monsters": [
      "Slimeskull"
    ]
  },
  {
    "kind": "kill",
    "questId": 6540,
    "map": "noxustower",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6541,
    "map": "noxustower",
    "monsters": [
      "Sanguine Souleater"
    ]
  },
  {
    "kind": "kill",
    "questId": 6542,
    "map": "noxustower",
    "monsters": [
      "Lightguard Caster"
    ]
  },
  {
    "kind": "kill",
    "questId": 6543,
    "map": "noxustower",
    "monsters": [
      "Lightguard Caster"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6544,
    "map": "noxustower",
    "ids": [
      6018
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 6544,
    "map": "noxustower",
    "monsters": [
      "Lightguard Caster"
    ]
  },
  {
    "kind": "kill",
    "questId": 6545,
    "map": "noxustower",
    "monsters": [
      "Lightguard Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 6546,
    "map": "noxustower",
    "monsters": [
      "Lightguard Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 6547,
    "map": "noxustower",
    "monsters": [
      "Slimeskull",
      "Lightguard Caster",
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6548,
    "map": "noxustower",
    "ids": [
      6019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6549,
    "map": "noxustower",
    "ids": [
      6020
    ]
  },
  {
    "kind": "kill",
    "questId": 6550,
    "map": "noxustower",
    "monsters": [
      "General Goldhammer"
    ]
  },
  {
    "kind": "kill",
    "questId": 6560,
    "map": "lightguardwar",
    "monsters": [
      "Citadel Crusader"
    ]
  },
  {
    "kind": "kill",
    "questId": 6561,
    "map": "lightguardwar",
    "monsters": [
      "Citadel Crusader"
    ]
  },
  {
    "kind": "kill",
    "questId": 6562,
    "map": "lightguardwar",
    "monsters": [
      "Citadel Crusader"
    ]
  },
  {
    "kind": "kill",
    "questId": 6563,
    "map": "lightguardwar",
    "monsters": [
      "Slimeskull"
    ]
  },
  {
    "kind": "kill",
    "questId": 6564,
    "map": "lightguardwar",
    "monsters": [
      "Lightguard Engine"
    ]
  },
  {
    "kind": "kill",
    "questId": 6565,
    "map": "lightguardwar",
    "monsters": [
      "Scorching Flame"
    ]
  },
  {
    "kind": "kill",
    "questId": 6566,
    "map": "lightguardwar",
    "monsters": [
      "Citadel Crusader"
    ]
  },
  {
    "kind": "kill",
    "questId": 6567,
    "map": "lightguardwar",
    "monsters": [
      "Sigrid Sunshield"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6581,
    "map": "lumafortress",
    "ids": [
      6098
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 6581,
    "map": "lumafortress",
    "monsters": [
      "Invasive Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6582,
    "map": "lumafortress",
    "ids": [
      6099
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 6582,
    "map": "lumafortress",
    "monsters": [
      "Light Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6583,
    "map": "lumafortress",
    "monsters": [
      "Light Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6584,
    "map": "lumafortress",
    "monsters": [
      "Hapless Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 6585,
    "map": "lumafortress",
    "monsters": [
      "Light Treeant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6586,
    "map": "lumafortress",
    "ids": [
      6100
    ]
  },
  {
    "kind": "kill",
    "questId": 6586,
    "map": "lumafortress",
    "monsters": [
      "Lightwing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6587,
    "map": "lumafortress",
    "ids": [
      6101
    ]
  },
  {
    "kind": "kill",
    "questId": 6588,
    "map": "lumafortress",
    "monsters": [
      "Light Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6589,
    "map": "lumafortress",
    "monsters": [
      "Living Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 6590,
    "map": "lumafortress",
    "monsters": [
      "Skeleton Minion"
    ]
  },
  {
    "kind": "plan",
    "questId": 6591,
    "actions": [
      {
        "kind": "hunt",
        "map": "lumafortress",
        "cell": "r4",
        "pad": "Left",
        "monster": "Corrupted Luma",
        "item": "Luma Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6592,
    "map": "lumafortress",
    "monsters": [
      "Light Elemental"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.sepulchure-saga.04shadowfall-rise",
    category: "Story",
    map: "noxustower",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
