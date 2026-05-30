import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Swordhaven) Alteon",
  "description": "This will finish the Alteon quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "swordhaven",
    "alteon",
    "lordsof",
    "chaos",
    "13alteon"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 3077,
    "map": "archives",
    "monsters": [
      "Chaos Bandit"
    ]
  },
  {
    "kind": "kill",
    "questId": 3078,
    "map": "archives",
    "monsters": [
      "Camouflaged Sp-eye"
    ]
  },
  {
    "kind": "kill",
    "questId": 3079,
    "map": "archives",
    "monsters": [
      "Chaos Bandit",
      "Camouflaged Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3080,
    "map": "archives",
    "ids": [
      1937
    ]
  },
  {
    "kind": "kill",
    "questId": 3080,
    "map": "archives",
    "monsters": [
      "Chaos Bandit"
    ]
  },
  {
    "kind": "kill",
    "questId": 3081,
    "map": "archives",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "kill",
    "questId": 3082,
    "map": "archives",
    "monsters": [
      "Chaos Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 3083,
    "map": "archives",
    "monsters": [
      "Chaos Rat",
      "Chaos Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 3084,
    "map": "archives",
    "monsters": [
      "Sludgelord"
    ]
  },
  {
    "kind": "kill",
    "questId": 3094,
    "map": "armory",
    "monsters": [
      "Chaorrupted Prisoner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3095,
    "map": "armory",
    "ids": [
      1956
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 3095,
    "map": "armory",
    "monsters": [
      "Chaorrupted Prisoner"
    ]
  },
  {
    "kind": "kill",
    "questId": 3096,
    "map": "armory",
    "monsters": [
      "Chaos Drifter"
    ]
  },
  {
    "kind": "kill",
    "questId": 3089,
    "map": "armory",
    "monsters": [
      "Chaorrupted Prisoner"
    ]
  },
  {
    "kind": "kill",
    "questId": 3090,
    "map": "armory",
    "monsters": [
      "Chaos Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 3091,
    "map": "armory",
    "monsters": [
      "Chaos Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3092,
    "map": "armory",
    "ids": [
      1957
    ]
  },
  {
    "kind": "kill",
    "questId": 3093,
    "map": "armory",
    "monsters": [
      "Chaos General"
    ]
  },
  {
    "kind": "kill",
    "questId": 3120,
    "map": "ceremony",
    "monsters": [
      "Chaos Invader"
    ]
  },
  {
    "kind": "plan",
    "questId": 3121,
    "actions": [
      {
        "kind": "mapItem",
        "map": "yulgar",
        "id": 2108,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "yulgar",
        "id": 2109,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "yulgar",
        "id": 2110,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "archives",
        "id": 2111,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "swordhaven",
        "id": 2112,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "swordhaven",
        "id": 2113,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "swordhaven",
        "id": 2114,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "swordhaven",
        "id": 2115,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3122,
    "map": "swordhaven",
    "ids": [
      2116
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 3123,
    "map": "mafic",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "kill",
    "questId": 3124,
    "map": "ceremony",
    "monsters": [
      "Chaos Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3125,
    "map": "ceremony",
    "ids": [
      2118
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3126,
    "map": "ceremony",
    "ids": [
      2119
    ]
  },
  {
    "kind": "kill",
    "questId": 3126,
    "map": "ceremony",
    "monsters": [
      "Chaos Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 3127,
    "map": "ceremony",
    "monsters": [
      "Chaos Justicar"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3133,
    "map": "chaosaltar",
    "ids": [
      2127
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 3134,
    "map": "chaosaltar",
    "monsters": [
      "Princess Thrall"
    ]
  },
  {
    "kind": "kill",
    "questId": 3158,
    "map": "castleroof",
    "monsters": [
      "Chaos Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3159,
    "map": "swordhavenfalls",
    "ids": [
      2158
    ]
  },
  {
    "kind": "kill",
    "questId": 3160,
    "map": "swordhavenfalls",
    "monsters": [
      "Chaos Lord Alteon"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.13alteon-swordhaven",
    category: "Story",
    map: "archives",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
