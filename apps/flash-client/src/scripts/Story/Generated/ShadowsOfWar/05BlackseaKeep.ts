import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Blacksea Keep",
  "description": "This will finish the Blacksea Keep quest.",
  "tags": [
    "story",
    "quest",
    "shadow-war",
    "blacksea-keep",
    "shadows",
    "of",
    "war",
    "05blacksea",
    "keep"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6886,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Scallywag"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6887,
    "map": "blackseakeep",
    "ids": [
      6446
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6887,
    "map": "blackseakeep",
    "monsters": [
      "Pure Darkness"
    ]
  },
  {
    "kind": "kill",
    "questId": 6888,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Privateer"
    ]
  },
  {
    "kind": "kill",
    "questId": 6889,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Scallywag"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6890,
    "map": "blackseakeep",
    "ids": [
      6448
    ]
  },
  {
    "kind": "kill",
    "questId": 6891,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Privateer"
    ]
  },
  {
    "kind": "kill",
    "questId": 6892,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Pirate Mage",
      "Blacksea Pirate Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6893,
    "map": "blackseakeep",
    "ids": [
      6449
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 6894,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Privateer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6895,
    "map": "blackseakeep",
    "ids": [
      6450
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 6896,
    "map": "blackseakeep",
    "monsters": [
      "First Mate Bloodbone"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-war.05blacksea-keep",
    category: "Story",
    map: "blackseakeep",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
