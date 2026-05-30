import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Cyseros) Secret",
  "description": "This will finish the Cyseros Secret story.",
  "tags": [
    "story",
    "cyseros",
    "secret",
    "summer",
    "2015",
    "adventure",
    "map",
    "farm",
    "summer2015adventure",
    "7cyseros"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4365,
    "map": "goose",
    "monsters": [
      "Queen's Sage"
    ]
  },
  {
    "kind": "kill",
    "questId": 4366,
    "map": "goose",
    "monsters": [
      "Chris P. Bacon"
    ]
  },
  {
    "kind": "kill",
    "questId": 4367,
    "map": "goose",
    "monsters": [
      "Queen's Sage"
    ]
  },
  {
    "kind": "kill",
    "questId": 4368,
    "map": "goose",
    "monsters": [
      "Sock Gorilla"
    ]
  },
  {
    "kind": "kill",
    "questId": 4369,
    "map": "goose",
    "monsters": [
      "Can of Paint"
    ]
  },
  {
    "kind": "kill",
    "questId": 4370,
    "map": "goose",
    "monsters": [
      "Queen's ArchSage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4371,
    "map": "goose",
    "ids": [
      3562
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4372,
    "map": "goose",
    "ids": [
      3561
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 4373,
    "map": "goose",
    "monsters": [
      "Queen's Sage"
    ]
  },
  {
    "kind": "kill",
    "questId": 4374,
    "map": "goose",
    "monsters": [
      "Can of Paint"
    ]
  },
  {
    "kind": "kill",
    "questId": 4375,
    "map": "goose",
    "monsters": [
      "Ancient Goose"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.summer2015adventure-map.7cyseros-secret",
    category: "Story",
    map: "goose",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
