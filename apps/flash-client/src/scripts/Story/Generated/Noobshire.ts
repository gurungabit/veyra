import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Noobshire Story",
  "description": "This will finish the Noobshire Story.",
  "tags": [
    "story",
    "quest",
    "noobshire"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 32,
    "map": "noobshire",
    "monsters": [
      "Kittarian Mouse Eater"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 33,
    "map": "noobshire",
    "ids": [
      11
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 33,
    "map": "noobshire",
    "monsters": [
      "Horc Noob"
    ]
  },
  {
    "kind": "kill",
    "questId": 35,
    "map": "noobshire",
    "monsters": [
      "Kittarian Mouse Eater"
    ]
  },
  {
    "kind": "kill",
    "questId": 36,
    "map": "noobshire",
    "monsters": [
      "Kittarian Mouse Flayer"
    ]
  },
  {
    "kind": "kill",
    "questId": 37,
    "map": "noobshire",
    "monsters": [
      "Horc Noob"
    ]
  },
  {
    "kind": "kill",
    "questId": 38,
    "map": "noobshire",
    "monsters": [
      "Horc Trainer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 39,
    "map": "noobshire",
    "ids": [
      12
    ]
  },
  {
    "kind": "kill",
    "questId": 39,
    "map": "noobshire",
    "monsters": [
      "Horc Noob"
    ]
  },
  {
    "kind": "kill",
    "questId": 117,
    "map": "Tutor",
    "monsters": [
      "Horc Noob"
    ]
  },
  {
    "kind": "kill",
    "questId": 118,
    "map": "Tutor",
    "monsters": [
      "Horc Tutor Trainer"
    ]
  },
  {
    "kind": "kill",
    "questId": 2188,
    "map": "orctown",
    "monsters": [
      "General Porkon"
    ]
  },
  {
    "kind": "kill",
    "questId": 2189,
    "map": "noobshire",
    "monsters": [
      "Horc Noob"
    ]
  },
  {
    "kind": "plan",
    "questId": 2190,
    "actions": [
      {
        "kind": "hunt",
        "map": "newbie",
        "monster": "Dogear",
        "item": "Front Wheel Location"
      },
      {
        "kind": "hunt",
        "map": "newbie",
        "monster": "Dogear",
        "item": "Frame Location"
      },
      {
        "kind": "hunt",
        "map": "newbie",
        "monster": "Dogear",
        "item": "Back Wheel Location"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2191,
    "map": "bloodtusk",
    "ids": [
      1270
    ]
  },
  {
    "kind": "kill",
    "questId": 2192,
    "map": "bloodtusk",
    "monsters": [
      "Horc Boar Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 2193,
    "map": "bloodtusk",
    "monsters": [
      "Rhison"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2194,
    "map": "noobshire",
    "ids": [
      1271
    ]
  },
  {
    "kind": "kill",
    "questId": 2195,
    "map": "sandport",
    "monsters": [
      "Horc Sell-Sword"
    ]
  },
  {
    "kind": "kill",
    "questId": 2196,
    "map": "giant",
    "monsters": [
      "Giant Cat"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.noobshire",
    category: "Story",
    map: "noobshire",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
