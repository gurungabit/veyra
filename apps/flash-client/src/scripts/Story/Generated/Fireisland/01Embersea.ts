import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Embersea",
  "description": "This will finish the Embersea quest.",
  "tags": [
    "story",
    "quest",
    "fire-island",
    "embersea",
    "fireisland",
    "01embersea"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.fireisland.01embersea",
    category: "Story",
    map: "Embersea",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
