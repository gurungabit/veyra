import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Pride",
  "description": "This will finish the Pride quest.",
  "tags": [
    "story",
    "quest",
    "7-deadly-dragons",
    "pride",
    "7deadly",
    "dragons",
    "02pride"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5917,
    "map": "Pride",
    "monsters": [
      "Storm Drakel"
    ]
  },
  {
    "kind": "kill",
    "questId": 5918,
    "map": "Pride",
    "monsters": [
      "Ball Lightning"
    ]
  },
  {
    "kind": "kill",
    "questId": 5919,
    "map": "Pride",
    "monsters": [
      "Rubber Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 5920,
    "map": "Pride",
    "monsters": [
      "Cellar Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5921,
    "map": "Pride",
    "ids": [
      5351
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5921,
    "map": "Pride",
    "ids": [
      5352
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 5922,
    "map": "Pride",
    "ids": [
      5353
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 5922,
    "map": "Pride",
    "monsters": [
      "Storm Drakel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5923,
    "map": "Pride",
    "ids": [
      5354
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5923,
    "map": "Pride",
    "monsters": [
      "Drakel Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5924,
    "map": "Pride",
    "ids": [
      5355
    ]
  },
  {
    "kind": "kill",
    "questId": 5924,
    "map": "Pride",
    "monsters": [
      "Elite Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5925,
    "map": "Pride",
    "ids": [
      5356
    ]
  },
  {
    "kind": "kill",
    "questId": 5925,
    "map": "Pride",
    "monsters": [
      "Storm Drakel"
    ]
  },
  {
    "kind": "kill",
    "questId": 5926,
    "map": "Pride",
    "monsters": [
      "Valsarian"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.7deadly-dragons.02pride",
    category: "Story",
    map: "Pride",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
