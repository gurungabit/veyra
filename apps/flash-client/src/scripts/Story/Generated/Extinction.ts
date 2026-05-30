import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Extinction Story",
  "description": "This will finish the Extinction Story.",
  "tags": [
    "story",
    "quest",
    "extinction"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 3855,
    "map": "extinction",
    "ids": [
      2956
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 3855,
    "map": "extinction",
    "monsters": [
      "Control Panel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3856,
    "map": "extinction",
    "monsters": [
      "Cyworg"
    ]
  },
  {
    "kind": "kill",
    "questId": 3857,
    "map": "extinction",
    "monsters": [
      "Pink Slime",
      "Gelatinous Slime"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3858,
    "map": "extinction",
    "ids": [
      2957
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 3859,
    "map": "extinction",
    "monsters": [
      "Slimed Drone"
    ]
  },
  {
    "kind": "kill",
    "questId": 3860,
    "map": "extinction",
    "monsters": [
      "Freezer Drone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3861,
    "map": "extinction",
    "ids": [
      2958
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 3862,
    "map": "extinction",
    "monsters": [
      "Lard"
    ]
  },
  {
    "kind": "kill",
    "questId": 3863,
    "map": "extinction",
    "monsters": [
      "Freezer Drone"
    ]
  },
  {
    "kind": "kill",
    "questId": 3864,
    "map": "extinction",
    "monsters": [
      "SN.O.W."
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.extinction",
    category: "Story",
    map: "extinction",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
