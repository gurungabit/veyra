import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "UnderGround Lab Story",
  "description": "This will finish the UnderGround Lab Story.",
  "tags": [
    "story",
    "quest",
    "under-ground-lab",
    "under",
    "ground",
    "lab"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 3148,
    "map": "undergroundlab",
    "ids": [
      2144,
      2145,
      2146,
      2147,
      2148
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3149,
    "map": "undergroundlab",
    "ids": [
      2150,
      2151
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3149,
    "map": "undergroundlabb",
    "ids": [
      2152,
      2153
    ]
  },
  {
    "kind": "kill",
    "questId": 3150,
    "map": "undergroundlabb",
    "monsters": [
      "Green Screamer"
    ]
  },
  {
    "kind": "kill",
    "questId": 3151,
    "map": "undergroundlabb",
    "monsters": [
      "Soundbooth Horror"
    ]
  },
  {
    "kind": "kill",
    "questId": 3152,
    "map": "undergroundlabb",
    "monsters": [
      "Closet Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 3153,
    "map": "undergroundlabb",
    "monsters": [
      "Server Gremlin"
    ]
  },
  {
    "kind": "kill",
    "questId": 3154,
    "map": "undergroundlabb",
    "monsters": [
      "Window"
    ]
  },
  {
    "kind": "kill",
    "questId": 3155,
    "map": "undergroundlabb",
    "monsters": [
      "Invisible Ninjas",
      "Invisible Ninjas",
      "Invisible Ninjas",
      "Invisible Ninjas"
    ]
  },
  {
    "kind": "kill",
    "questId": 3156,
    "map": "undergroundlabb",
    "monsters": [
      "Rabid Server Hamster"
    ]
  },
  {
    "kind": "kill",
    "questId": 3157,
    "map": "undergroundlabb",
    "monsters": [
      "Ultra Brutalcorn"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.under-ground-lab",
    category: "Story",
    map: "undergroundlab",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
