import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Lair Story",
  "description": "This will finish the Lair Story.",
  "tags": [
    "story",
    "quest",
    "lair"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 165,
    "map": "lair",
    "monsters": [
      "Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 166,
    "map": "lair",
    "monsters": [
      "Bronze Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 167,
    "map": "lair",
    "monsters": [
      "Dark Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 168,
    "map": "lair",
    "monsters": [
      "Red Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 1492,
    "map": "lair",
    "monsters": [
      "Bronze Draconian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1493,
    "map": "lair",
    "ids": [
      755
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1494,
    "map": "lair",
    "monsters": [
      "Red Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1495,
    "map": "lair",
    "ids": [
      753
    ]
  },
  {
    "kind": "chain",
    "questId": 1502
  },
  {
    "kind": "mapItem",
    "questId": 1503,
    "map": "lair",
    "ids": [
      754
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1504,
    "map": "lair",
    "monsters": [
      "Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 1505,
    "map": "lair",
    "monsters": [
      "Bronze Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 1506,
    "map": "lair",
    "monsters": [
      "Dark Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 1507,
    "map": "lair",
    "monsters": [
      "Onyx Lava Dragon"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lair",
    category: "Story",
    map: "lair",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
