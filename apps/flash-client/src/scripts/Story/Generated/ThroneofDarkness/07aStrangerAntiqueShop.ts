import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Stranger) Antique Shop Story",
  "description": "This will finish the Antique Shop story.",
  "tags": [
    "story",
    "antique",
    "shop",
    "farm",
    "throne",
    "darkness",
    "stranger",
    "throneof",
    "07a"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 5428,
    "map": "cursedshop",
    "ids": [
      4803
    ]
  },
  {
    "kind": "kill",
    "questId": 5429,
    "map": "cursedshop",
    "monsters": [
      "Antique Chair"
    ]
  },
  {
    "kind": "kill",
    "questId": 5430,
    "map": "cursedshop",
    "monsters": [
      "UnDresser"
    ]
  },
  {
    "kind": "kill",
    "questId": 5431,
    "map": "cursedshop",
    "monsters": [
      "Writing Desk"
    ]
  },
  {
    "kind": "kill",
    "questId": 5432,
    "map": "cursedshop",
    "monsters": [
      "Grandfather Clock"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5433,
    "map": "cursedshop",
    "ids": [
      4804,
      4805
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5434,
    "map": "cursedshop",
    "ids": [
      4806
    ]
  },
  {
    "kind": "kill",
    "questId": 5434,
    "map": "cursedshop",
    "monsters": [
      "Arcane Sentinel"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.throneof-darkness.07a-stranger-antique-shop",
    category: "Story",
    map: "cursedshop",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
