import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Ice Plane Story",
  "description": "This will finish the Ice Plane Story.",
  "tags": [
    "story",
    "quest",
    "ice plane",
    "iceplane",
    "ice",
    "plane",
    "glace",
    "quetzal"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5777,
    "map": "iceplane",
    "monsters": [
      "Spirit of Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5778,
    "map": "iceplane",
    "ids": [
      5218
    ]
  },
  {
    "kind": "kill",
    "questId": 5778,
    "map": "iceplane",
    "monsters": [
      "Frozen Jellyfish"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5779,
    "map": "iceplane",
    "ids": [
      5219,
      5220
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5780,
    "map": "iceplane",
    "ids": [
      5221
    ]
  },
  {
    "kind": "kill",
    "questId": 5780,
    "map": "iceplane",
    "monsters": [
      "Crystalline Shade"
    ]
  },
  {
    "kind": "kill",
    "questId": 5781,
    "map": "iceplane",
    "monsters": [
      "Frostblade"
    ]
  },
  {
    "kind": "kill",
    "questId": 5782,
    "map": "iceplane",
    "monsters": [
      "Animus of Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 5783,
    "map": "iceplane",
    "monsters": [
      "Enfield"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.ice-plane",
    category: "Story",
    map: "iceplane",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
