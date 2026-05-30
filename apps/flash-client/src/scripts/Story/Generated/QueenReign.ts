import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Queen Reign Story",
  "description": "This will finish the Queen Reign Story.",
  "tags": [
    "story",
    "quest",
    "queen-reign",
    "queen",
    "reign"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8302,
    "map": "queenreign",
    "monsters": [
      "Samurai Nopperabo"
    ]
  },
  {
    "kind": "kill",
    "questId": 8303,
    "map": "queenreign",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "plan",
    "questId": 8304,
    "actions": [
      {
        "kind": "hunt",
        "map": "queenreign",
        "monster": "Samurai Nopperabo",
        "item": "Yokai Energy",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "queenreign",
        "monster": "Shadow Samurai",
        "item": "Shadow Energy",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8304,
    "map": "queenreign",
    "ids": [
      9120
    ]
  },
  {
    "kind": "kill",
    "questId": 8305,
    "map": "queenreign",
    "monsters": [
      "Tsukumo-Gami"
    ]
  },
  {
    "kind": "kill",
    "questId": 8306,
    "map": "queenreign",
    "monsters": [
      "Jaaku's Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 8307,
    "map": "queenreign",
    "monsters": [
      "Jaaku's Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 8308,
    "map": "queenreign",
    "monsters": [
      "Jaaku"
    ]
  },
  {
    "kind": "kill",
    "questId": 8309,
    "map": "queenreign",
    "monsters": [
      "Plague Spreader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8310,
    "map": "queenreign",
    "ids": [
      9121
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8311,
    "map": "queenreign",
    "monsters": [
      "Plaguemoss"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8312,
    "map": "queenreign",
    "ids": [
      9122
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8312,
    "map": "queenreign",
    "monsters": [
      "Plague Spreader"
    ]
  },
  {
    "kind": "kill",
    "questId": 8313,
    "map": "queenreign",
    "monsters": [
      "Plague Spreader"
    ]
  },
  {
    "kind": "kill",
    "questId": 8314,
    "map": "queenreign",
    "monsters": [
      "Extriki"
    ]
  },
  {
    "kind": "kill",
    "questId": 8315,
    "map": "queenreign",
    "monsters": [
      "Calcified Amethite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8316,
    "map": "queenreign",
    "ids": [
      9123
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8317,
    "map": "queenreign",
    "monsters": [
      "Calcified Wyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8318,
    "map": "queenreign",
    "ids": [
      9124
    ]
  },
  {
    "kind": "kill",
    "questId": 8318,
    "map": "queenreign",
    "monsters": [
      "Calcified Remains"
    ]
  },
  {
    "kind": "kill",
    "questId": 8319,
    "map": "queenreign",
    "monsters": [
      "Grou'luu"
    ]
  },
  {
    "kind": "kill",
    "questId": 8320,
    "map": "queenreign",
    "monsters": [
      "Water Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 8321,
    "map": "queenreign",
    "monsters": [
      "Sa-Laatan Spawn"
    ]
  },
  {
    "kind": "kill",
    "questId": 8322,
    "map": "queenreign",
    "monsters": [
      "Sa-Laatan Spawn"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8323,
    "map": "queenreign",
    "ids": [
      9125
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8324,
    "map": "queenreign",
    "monsters": [
      "Water Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 8325,
    "map": "queenreign",
    "monsters": [
      "Sa-Laatan"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queen-reign",
    category: "Story",
    map: "queenreign",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
