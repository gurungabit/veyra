import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Ubear Story",
  "description": "This will finish the Ubear Story.",
  "tags": [
    "story",
    "quest",
    "ubear"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 7430,
    "actions": [
      {
        "kind": "buy",
        "map": "ubear",
        "shopId": 1851,
        "item": "Ubear Token"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7431,
    "map": "ubear",
    "monsters": [
      "Giant Bee"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7432,
    "map": "ubear",
    "ids": [
      7199
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7432,
    "map": "ubear",
    "monsters": [
      "Honey Glob"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7433,
    "map": "ubear",
    "ids": [
      7200
    ]
  },
  {
    "kind": "kill",
    "questId": 7433,
    "map": "ubear",
    "monsters": [
      "Giant Bee"
    ]
  },
  {
    "kind": "kill",
    "questId": 7434,
    "map": "ubear",
    "monsters": [
      "Lil' Poot"
    ]
  },
  {
    "kind": "kill",
    "questId": 7435,
    "map": "ubear",
    "monsters": [
      "Cornholio"
    ]
  },
  {
    "kind": "plan",
    "questId": 7436,
    "actions": [
      {
        "kind": "buy",
        "map": "limft",
        "shopId": 1852,
        "item": "LIMFT Token"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7437,
    "map": "limft",
    "monsters": [
      "Electrical Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7438,
    "map": "limft",
    "ids": [
      7201
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7438,
    "map": "limft",
    "monsters": [
      "Smoke Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7439,
    "map": "limft",
    "ids": [
      7202
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7439,
    "map": "limft",
    "monsters": [
      "Smoke Elemental",
      "Sock Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7440,
    "map": "limft",
    "ids": [
      7203
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7441,
    "map": "limft",
    "monsters": [
      "Sock Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 7442,
    "map": "limft",
    "monsters": [
      "Ubear"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.ubear",
    category: "Story",
    map: "ubear",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
