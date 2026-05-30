import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Lightguard Story",
  "description": "This will finish the Lightguard Story.",
  "tags": [
    "story",
    "quest",
    "light-guard",
    "lightguard",
    "mem"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 2031,
    "map": "doomwood",
    "ids": [
      983
    ]
  },
  {
    "kind": "kill",
    "questId": 2032,
    "map": "doomwood",
    "monsters": [
      "Doomwood Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 2033,
    "map": "doomwood",
    "monsters": [
      "Doomwood Bonemuncher",
      "Doomwood Ectomancer"
    ]
  },
  {
    "kind": "kill",
    "questId": 2034,
    "map": "doomwood",
    "monsters": [
      "Doomwood Bonemuncher"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2035,
    "map": "lightguard",
    "ids": [
      982
    ]
  },
  {
    "kind": "kill",
    "questId": 2036,
    "map": "lightguard",
    "monsters": [
      "Mysterious Spirit"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lightguard-mem",
    category: "Story",
    map: "doomwood",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
