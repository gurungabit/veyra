import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Nukemichi Story (Member)",
  "description": "This will finish the Nukemichi Story.",
  "tags": [
    "story",
    "quest",
    "nukemichi",
    "member",
    "mem"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 1587,
    "map": "akiba",
    "ids": [
      794
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 1588,
    "map": "akiba",
    "ids": [
      795
    ]
  },
  {
    "kind": "kill",
    "questId": 1589,
    "map": "akiba",
    "monsters": [
      "Kage Nopperabo"
    ]
  },
  {
    "kind": "kill",
    "questId": 1590,
    "map": "akiba",
    "monsters": [
      "Kage Nopperabo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1591,
    "map": "akiba",
    "ids": [
      796
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 1592,
    "map": "akiba",
    "monsters": [
      "Shadow Nukemichi"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nukemichi-mem",
    category: "Story",
    map: "akiba",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
