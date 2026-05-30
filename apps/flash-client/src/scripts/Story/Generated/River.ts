import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "River Story",
  "description": "This will finish the River Story.",
  "tags": [
    "story",
    "quest",
    "river"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 63,
    "map": "river",
    "monsters": [
      "River Fishman"
    ]
  },
  {
    "kind": "kill",
    "questId": 64,
    "map": "river",
    "monsters": [
      "Zardman Fisher"
    ]
  },
  {
    "kind": "kill",
    "questId": 65,
    "map": "river",
    "monsters": [
      "Zardman Fisher"
    ]
  },
  {
    "kind": "kill",
    "questId": 66,
    "map": "river",
    "monsters": [
      "Kuro"
    ]
  },
  {
    "kind": "kill",
    "questId": 72,
    "map": "river",
    "monsters": [
      "Kuro"
    ]
  },
  {
    "kind": "kill",
    "questId": 74,
    "map": "shallow",
    "monsters": [
      "Water Elemental"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.river",
    category: "Story",
    map: "river",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
