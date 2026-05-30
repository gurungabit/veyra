import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Dwarves Vs Giants Story",
  "description": "This will finish the Dwarves Vs Giants story.",
  "tags": [
    "story",
    "quest",
    "dvg",
    "dwarves",
    "vs",
    "giants"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 2778,
    "map": "dvg",
    "monsters": [
      "Draam"
    ]
  },
  {
    "kind": "kill",
    "questId": 2779,
    "map": "dvg",
    "monsters": [
      "Tergum"
    ]
  },
  {
    "kind": "kill",
    "questId": 2780,
    "map": "dvg",
    "monsters": [
      "Slork"
    ]
  },
  {
    "kind": "kill",
    "questId": 2781,
    "map": "dvg",
    "monsters": [
      "Krashh"
    ]
  },
  {
    "kind": "kill",
    "questId": 2782,
    "map": "dvg",
    "monsters": [
      "Blixx",
      "Meatball"
    ]
  },
  {
    "kind": "kill",
    "questId": 2783,
    "map": "dvg",
    "monsters": [
      "Munthor"
    ]
  },
  {
    "kind": "kill",
    "questId": 2784,
    "map": "dvgchallenge",
    "monsters": [
      "Meatball"
    ]
  },
  {
    "kind": "kill",
    "questId": 2785,
    "map": "dvgchallenge",
    "monsters": [
      "Blixx"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.dwarves-vs-giants",
    category: "Story",
    map: "dvg",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
