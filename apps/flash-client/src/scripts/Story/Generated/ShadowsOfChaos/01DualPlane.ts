import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Dual Plane",
  "description": "This will finish the Dual Plane quest.",
  "tags": [
    "story",
    "quest",
    "shadow-chaos",
    "dual-plane",
    "shadows",
    "of",
    "chaos",
    "01dual",
    "plane"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-chaos.01dual-plane",
    category: "Story",
    map: "dualplane",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
