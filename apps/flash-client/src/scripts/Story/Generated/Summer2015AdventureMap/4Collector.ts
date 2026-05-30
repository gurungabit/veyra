import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Summer) Collector",
  "description": "This will finish the Collector story.",
  "tags": [
    "story",
    "collector",
    "summer",
    "2015",
    "adventure",
    "map",
    "farm",
    "summer2015adventure",
    "4collector"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 1293,
    "map": "Terrarium",
    "ids": [
      586
    ]
  },
  {
    "kind": "kill",
    "questId": 1294,
    "map": "Terrarium",
    "monsters": [
      "Dustbunny of Doom"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1295,
    "map": "Terrarium",
    "ids": [
      587
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 1296,
    "map": "Terrarium",
    "ids": [
      588
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1297,
    "map": "Terrarium",
    "monsters": [
      "Death on Wings"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1298,
    "map": "Terrarium",
    "ids": [
      589,
      590,
      591,
      592,
      593
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1299,
    "map": "Terrarium",
    "ids": [
      593,
      594,
      595,
      596,
      604
    ]
  },
  {
    "kind": "kill",
    "questId": 1300,
    "map": "Terrarium",
    "monsters": [
      "Death on Wings"
    ]
  },
  {
    "kind": "kill",
    "questId": 1308,
    "map": "Terrarium",
    "monsters": [
      "Doppleganger of Fred",
      "Doppleganger of Will"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1309,
    "map": "Terrarium",
    "ids": [
      604
    ]
  },
  {
    "kind": "kill",
    "questId": 1339,
    "map": "prehistoric",
    "monsters": [
      "Gigantosaurus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1340,
    "map": "prehistoric",
    "ids": [
      630
    ],
    "quantity": 11
  },
  {
    "kind": "kill",
    "questId": 1341,
    "map": "prehistoric",
    "monsters": [
      "Gigantosaurus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1342,
    "map": "prehistoric",
    "ids": [
      631
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 1343,
    "map": "prehistoric",
    "monsters": [
      "Mother TerrorDOOMKill"
    ]
  },
  {
    "kind": "kill",
    "questId": 1344,
    "map": "Future",
    "monsters": [
      "Alien Dino"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1345,
    "map": "Future",
    "ids": [
      632
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 1346,
    "map": "Future",
    "ids": [
      633
    ],
    "quantity": 7
  },
  {
    "kind": "plan",
    "questId": 1347,
    "actions": [
      {
        "kind": "hunt",
        "map": "Future",
        "monster": "Red-Eyed Alien",
        "item": "Small Fragment Acquired",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Future",
        "monster": "Red-Eyed Alien",
        "item": "Medium Piece Acquired",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1348,
    "actions": [
      {
        "kind": "hunt",
        "map": "Future",
        "monster": "The Collector",
        "item": "Collector Vanquished"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.summer2015adventure-map.4collector",
    category: "Story",
    map: "Terrarium",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
