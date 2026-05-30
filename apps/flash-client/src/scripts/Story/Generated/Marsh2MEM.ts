import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Marsh 2 Story (Member)",
  "description": "This will finish the Marsh 2 Story.",
  "tags": [
    "story",
    "quest",
    "marsh2",
    "member",
    "mem"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 1474,
    "map": "marsh2",
    "ids": [
      720
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 1475,
    "map": "marsh2",
    "monsters": [
      "Undead Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 1476,
    "map": "marsh2",
    "monsters": [
      "Ghoul",
      "Marsh Lurker"
    ]
  },
  {
    "kind": "kill",
    "questId": 1477,
    "map": "marsh2",
    "monsters": [
      "Lich",
      "Lesser Shadow Serpent"
    ]
  },
  {
    "kind": "kill",
    "questId": 1478,
    "map": "marsh2",
    "monsters": [
      "Thrax Ironhide",
      "Lesser Groglurk"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1479,
    "map": "marsh2",
    "ids": [
      723
    ]
  },
  {
    "kind": "kill",
    "questId": 1480,
    "map": "marsh2",
    "monsters": [
      "Marsh Vault Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1481,
    "map": "marsh2",
    "ids": [
      721
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.marsh2-mem",
    category: "Story",
    map: "marsh2",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
