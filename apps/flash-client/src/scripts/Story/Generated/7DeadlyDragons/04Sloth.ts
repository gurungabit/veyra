import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Sloth",
  "description": "This will finish the Sloth quest.",
  "tags": [
    "story",
    "quest",
    "7-deadly-dragons",
    "sloth",
    "7deadly",
    "dragons",
    "04sloth"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 5944,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 5945,
    "map": "Sloth",
    "ids": [
      5382
    ]
  },
  {
    "kind": "kill",
    "questId": 5945,
    "map": "Sloth",
    "monsters": [
      "Plague Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5946,
    "map": "Sloth",
    "monsters": [
      "Snotgoblin",
      "Wandering Plague"
    ]
  },
  {
    "kind": "kill",
    "questId": 5947,
    "map": "Sloth",
    "monsters": [
      "Plague Zombie"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5948,
    "map": "Sloth",
    "ids": [
      5387
    ]
  },
  {
    "kind": "kill",
    "questId": 5949,
    "map": "Sloth",
    "monsters": [
      "Marsh Thing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5950,
    "map": "Sloth",
    "ids": [
      5383
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 5951,
    "map": "Sloth",
    "ids": [
      5389
    ]
  },
  {
    "kind": "plan",
    "questId": 5952,
    "actions": [
      {
        "kind": "buy",
        "map": "Dragonhame",
        "shopId": 865,
        "item": "Airther Vitae"
      },
      {
        "kind": "buy",
        "map": "embersea",
        "shopId": 1100,
        "item": 1749
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5953,
    "map": "Sloth",
    "ids": [
      5391
    ]
  },
  {
    "kind": "kill",
    "questId": 5954,
    "map": "Sloth",
    "monsters": [
      "Plague Zombie"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5955,
    "map": "Sloth",
    "ids": [
      5384
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 5956,
    "map": "Sloth",
    "ids": [
      5385
    ]
  },
  {
    "kind": "kill",
    "questId": 5956,
    "map": "Sloth",
    "monsters": [
      "SnotGoblin Prime"
    ]
  },
  {
    "kind": "kill",
    "questId": 5957,
    "map": "Sloth",
    "monsters": [
      "Phlegnn"
    ]
  },
  {
    "kind": "kill",
    "questId": 5958,
    "map": "Sloth",
    "monsters": [
      "Cured Phlegnn"
    ]
  },
  {
    "kind": "kill",
    "questId": 5960,
    "map": "Sloth",
    "monsters": [
      "Actual Sloth Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 5959,
    "map": "Sloth",
    "monsters": [
      "Mutated Plague"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.7deadly-dragons.04sloth",
    category: "Story",
    map: "Sloth",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
