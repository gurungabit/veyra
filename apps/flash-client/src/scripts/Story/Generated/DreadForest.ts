import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Dread Forest Story",
  "description": "This will finish the Dread Forest Story.",
  "tags": [
    "story",
    "quest",
    "dread-forest",
    "dread",
    "forest"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8711,
    "map": "dreadforest",
    "monsters": [
      "Treacherous Bandit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8712,
    "map": "dreadforest",
    "ids": [
      10267
    ]
  },
  {
    "kind": "kill",
    "questId": 8712,
    "map": "dreadforest",
    "monsters": [
      "Noble’s Servant"
    ]
  },
  {
    "kind": "kill",
    "questId": 8713,
    "map": "dreadforest",
    "monsters": [
      "Noble's Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8714,
    "map": "dreadforest",
    "monsters": [
      "Treacherous Bandit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8715,
    "map": "dreadforest",
    "ids": [
      10268
    ]
  },
  {
    "kind": "kill",
    "questId": 8715,
    "map": "dreadforest",
    "monsters": [
      "Noble's Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8716,
    "map": "dreadforest",
    "monsters": [
      "Reignolds' Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8717,
    "map": "dreadforest",
    "ids": [
      10269,
      10270,
      10271
    ]
  },
  {
    "kind": "kill",
    "questId": 8718,
    "map": "dreadforest",
    "monsters": [
      "Taxidermied Servant"
    ]
  },
  {
    "kind": "kill",
    "questId": 8719,
    "map": "dreadforest",
    "monsters": [
      "Taxidermied Servant",
      "Reignolds' Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8720,
    "map": "dreadforest",
    "monsters": [
      "Lord Reignolds"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8721,
    "map": "dreadforest",
    "ids": [
      10272
    ]
  },
  {
    "kind": "kill",
    "questId": 8722,
    "map": "dreadforest",
    "monsters": [
      "Reignolds' Knight",
      "Taxidermied Servant",
      "Lord Reignolds"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.dread-forest",
    category: "Story",
    map: "dreadforest",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
