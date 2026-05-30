import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Wrath",
  "description": "This will finish the Wrath quest.",
  "tags": [
    "story",
    "quest",
    "7-deadly-dragons",
    "wrath",
    "7deadly",
    "dragons",
    "07wrath"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6110,
    "map": "Wrath",
    "monsters": [
      "Fishbones",
      "Bone Terror"
    ]
  },
  {
    "kind": "kill",
    "questId": 6111,
    "map": "Wrath",
    "monsters": [
      "Dark Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6112,
    "map": "Wrath",
    "ids": [
      5541
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6112,
    "map": "Wrath",
    "monsters": [
      "Bone Terror"
    ]
  },
  {
    "kind": "plan",
    "questId": 1075,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Dried Wasabi Powder",
        "quantity": 4
      },
      {
        "kind": "mapItem",
        "map": "lightguard",
        "id": 428,
        "quantity": 1
      },
      {
        "kind": "join",
        "map": "lightguard"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 6113
  },
  {
    "kind": "mapItem",
    "questId": 6114,
    "map": "Wrath",
    "ids": [
      5542
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 6115,
    "map": "Wrath",
    "ids": [
      5540
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6116,
    "map": "Wrath",
    "ids": [
      5544
    ]
  },
  {
    "kind": "kill",
    "questId": 6116,
    "map": "Wrath",
    "monsters": [
      "Undead Pirate"
    ]
  },
  {
    "kind": "kill",
    "questId": 6117,
    "map": "Wrath",
    "monsters": [
      "Mutineer",
      "Mutineer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6118,
    "map": "Wrath",
    "ids": [
      5545
    ]
  },
  {
    "kind": "kill",
    "questId": 6119,
    "map": "Wrath",
    "monsters": [
      "Droghor"
    ]
  },
  {
    "kind": "kill",
    "questId": 6120,
    "map": "Wrath",
    "monsters": [
      "Gorgorath"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6163,
    "map": "Dragonbone",
    "ids": [
      5587
    ]
  },
  {
    "kind": "kill",
    "questId": 6163,
    "map": "Dragonbone",
    "monsters": [
      "Bone Dragonling",
      "Dark Fire"
    ]
  },
  {
    "kind": "kill",
    "questId": 6164,
    "map": "Dragonbone",
    "monsters": [
      "Bone Terror"
    ]
  },
  {
    "kind": "kill",
    "questId": 6165,
    "map": "Dragonbone",
    "monsters": [
      "Bone Wyvern"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6166,
    "map": "Dragonbone",
    "ids": [
      5588
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6167,
    "map": "Dragonbone",
    "ids": [
      5589
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6168,
    "map": "Dragonbone",
    "ids": [
      5590
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6169,
    "map": "Dragonbone",
    "ids": [
      5591
    ]
  },
  {
    "kind": "kill",
    "questId": 6169,
    "map": "Dragonbone",
    "monsters": [
      "Dragonshade"
    ]
  },
  {
    "kind": "kill",
    "questId": 6170,
    "map": "Dragonbone",
    "monsters": [
      "Gorgorath"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.7deadly-dragons.07wrath",
    category: "Story",
    map: "Wrath",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
