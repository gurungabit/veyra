import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Alden",
  "description": "This will finish the Alden quest.",
  "tags": [
    "story",
    "quest",
    "sepulchure-saga",
    "alden",
    "sepulchure",
    "saga",
    "01alden"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 6332,
    "map": "scarsgarde",
    "ids": [
      5860
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6333,
    "map": "scarsgarde",
    "ids": [
      5864
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6333,
    "map": "scarsgarde",
    "monsters": [
      "VenomWing"
    ]
  },
  {
    "kind": "kill",
    "questId": 6334,
    "map": "scarsgarde",
    "monsters": [
      "Garde Grif"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6335,
    "map": "scarsgarde",
    "ids": [
      5865
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6335,
    "map": "scarsgarde",
    "monsters": [
      "Tree"
    ]
  },
  {
    "kind": "kill",
    "questId": 6336,
    "map": "scarsgarde",
    "monsters": [
      "Garde Watch",
      "Garde Pikeman"
    ]
  },
  {
    "kind": "plan",
    "questId": 6338,
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
    "questId": 6338,
    "map": "scarsgarde",
    "ids": [
      5866,
      5867
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6339,
    "map": "scarsgarde",
    "ids": [
      5868
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 6339,
    "map": "scarsgarde",
    "ids": [
      5869
    ]
  },
  {
    "kind": "kill",
    "questId": 6340,
    "map": "scarsgarde",
    "monsters": [
      "Garde Knight",
      "Garde Pikeman"
    ]
  },
  {
    "kind": "kill",
    "questId": 6341,
    "map": "scarsgarde",
    "monsters": [
      "Garde Captain"
    ]
  },
  {
    "kind": "kill",
    "questId": 6342,
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
    id: "story.sepulchure-saga.01alden",
    category: "Story",
    map: "scarsgarde",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
