import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "First Observatory",
  "description": "This will finish the First Observatory quest.",
  "tags": [
    "story",
    "quest",
    "elegy-of-madness",
    "darkon",
    "first-observatory",
    "elegyof",
    "madness",
    "7first",
    "observatory"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 8630,
    "map": "FirstObservatory",
    "ids": [
      10083
    ]
  },
  {
    "kind": "kill",
    "questId": 8631,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Scorpio"
    ]
  },
  {
    "kind": "kill",
    "questId": 8632,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Leo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8633,
    "map": "FirstObservatory",
    "ids": [
      10084
    ]
  },
  {
    "kind": "kill",
    "questId": 8633,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8634,
    "map": "FirstObservatory",
    "ids": [
      10085
    ]
  },
  {
    "kind": "kill",
    "questId": 8635,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8636,
    "map": "FirstObservatory",
    "ids": [
      10086,
      10087
    ]
  },
  {
    "kind": "kill",
    "questId": 8637,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret",
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8638,
    "map": "FirstObservatory",
    "ids": [
      10088,
      10089
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8639,
    "map": "FirstObservatory",
    "ids": [
      10090
    ]
  },
  {
    "kind": "kill",
    "questId": 8640,
    "map": "FirstObservatory",
    "monsters": [
      "Empress’ Finger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8641,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature",
      "Ancient Turret",
      "Empress’ Finger"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.elegyof-madness-darkon.7first-observatory",
    category: "Story",
    map: "FirstObservatory",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
