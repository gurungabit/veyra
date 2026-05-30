import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "WatchTower Story",
  "description": "This will finish the WatchTower Story.",
  "tags": [
    "story",
    "quest",
    "watch-tower",
    "watch",
    "tower"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 2602,
    "map": "watchtower",
    "ids": [
      1605
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 2602,
    "map": "watchtower",
    "monsters": [
      "Chaorrupted Wolf",
      "Chaotic Gorillaphant"
    ]
  },
  {
    "kind": "kill",
    "questId": 2603,
    "map": "watchtower",
    "monsters": [
      "Chaos Spider",
      "Storagebox"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2604,
    "map": "watchtower",
    "ids": [
      1606
    ]
  },
  {
    "kind": "kill",
    "questId": 2604,
    "map": "watchtower",
    "monsters": [
      "Chaorrupted Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 2605,
    "map": "watchtower",
    "monsters": [
      "Chaorrupted Prisoner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2606,
    "map": "watchtower",
    "ids": [
      1607,
      1608
    ]
  },
  {
    "kind": "kill",
    "questId": 2606,
    "map": "watchtower",
    "monsters": [
      "Chaos Gorillaphant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2607,
    "map": "watchtower",
    "ids": [
      1609
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 2607,
    "map": "watchtower",
    "monsters": [
      "Chaos Sp-Eye"
    ]
  },
  {
    "kind": "kill",
    "questId": 2608,
    "map": "watchtower",
    "monsters": [
      "Chaorrupted Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2609,
    "map": "watchtower",
    "ids": [
      1610
    ]
  },
  {
    "kind": "kill",
    "questId": 2609,
    "map": "watchtower",
    "monsters": [
      "Chaorrupted Good Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 2610,
    "map": "watchtower",
    "monsters": [
      "Chaos Knight"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.watch-tower",
    category: "Story",
    map: "watchtower",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
