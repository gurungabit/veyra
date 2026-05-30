import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Lynaria",
  "description": "This will finish the Lynaria quest.",
  "tags": [
    "story",
    "quest",
    "sepulchure-saga",
    "lynaria",
    "sepulchure",
    "saga",
    "02lynaria"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 6343,
    "map": "scarsgarde",
    "ids": [
      5861
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6344,
    "map": "scarsgarde",
    "ids": [
      5864
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6344,
    "map": "scarsgarde",
    "monsters": [
      "VenomWing"
    ]
  },
  {
    "kind": "kill",
    "questId": 6345,
    "map": "scarsgarde",
    "monsters": [
      "Garde Grif"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6346,
    "map": "scarsgarde",
    "ids": [
      5865
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6346,
    "map": "scarsgarde",
    "monsters": [
      "Tree"
    ]
  },
  {
    "kind": "kill",
    "questId": 6347,
    "map": "scarsgarde",
    "monsters": [
      "Garde Watch",
      "Garde Pikeman"
    ]
  },
  {
    "kind": "kill",
    "questId": 6348,
    "map": "scarsgarde",
    "monsters": [
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch"
    ]
  },
  {
    "kind": "plan",
    "questId": 6349,
    "actions": [
      {
        "kind": "hunt",
        "map": "scarsgarde",
        "cell": "r35",
        "pad": "Left",
        "monster": "Garde Knight",
        "item": "Passcode A"
      },
      {
        "kind": "hunt",
        "map": "scarsgarde",
        "cell": "r35",
        "pad": "Left",
        "monster": "Garde Knight",
        "item": "Passcode C"
      },
      {
        "kind": "hunt",
        "map": "scarsgarde",
        "cell": "r35",
        "pad": "Left",
        "monster": "Garde Pikeman",
        "item": "Passcode B"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6349,
    "map": "scarsgarde",
    "ids": [
      5866,
      5867
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6350,
    "map": "scarsgarde",
    "ids": [
      5868
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 6350,
    "map": "scarsgarde",
    "ids": [
      5869
    ]
  },
  {
    "kind": "kill",
    "questId": 6351,
    "map": "scarsgarde",
    "monsters": [
      "Garde Knight",
      "Garde Pikeman"
    ]
  },
  {
    "kind": "kill",
    "questId": 6352,
    "map": "scarsgarde",
    "monsters": [
      "Garde Captain"
    ]
  },
  {
    "kind": "kill",
    "questId": 6353,
    "map": "scarsgarde",
    "monsters": [
      "Garde Knight",
      "Garde Watch",
      "Garde Pikeman"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.sepulchure-saga.02lynaria",
    category: "Story",
    map: "scarsgarde",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
