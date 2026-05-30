import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Shinkansen Story",
  "description": "This will finish the Shinkansen Story.",
  "tags": [
    "story",
    "quest",
    "shinkansen"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 8116,
    "map": "Shinkansen",
    "ids": [
      8496
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8116,
    "map": "Shinkansen",
    "monsters": [
      "Temptation 1"
    ]
  },
  {
    "kind": "kill",
    "questId": 8117,
    "map": "Shinkansen",
    "monsters": [
      "Trash Pile"
    ]
  },
  {
    "kind": "kill",
    "questId": 8118,
    "map": "Shinkansen",
    "monsters": [
      "Civilian"
    ]
  },
  {
    "kind": "chain",
    "questId": 8120
  },
  {
    "kind": "chain",
    "questId": 8119
  },
  {
    "kind": "kill",
    "questId": 8121,
    "map": "Shinkansen",
    "monsters": [
      "Crystallis Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8122,
    "map": "Shinkansen",
    "monsters": [
      "Crystallis Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8123,
    "map": "Shinkansen",
    "monsters": [
      "Saint Apa",
      "Saint Eta"
    ]
  },
  {
    "kind": "kill",
    "questId": 8124,
    "map": "Shinkansen",
    "monsters": [
      "Crystallis Soldier"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shinkansen",
    category: "Story",
    map: "Shinkansen",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
