import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Thorns Garde",
  "description": "This will finish the Thorns Garde quest.",
  "tags": [
    "story",
    "quest",
    "doomwood",
    "thornsgarde",
    "part3",
    "1thornsgarde"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 7589,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone",
      "NecroMech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7590,
    "map": "thorngarde",
    "ids": [
      7485
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7590,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7591,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7592,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "plan",
    "questId": 7593,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "Cured Meat",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "Bag of Grain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Jug of Water",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7594,
    "map": "thorngarde",
    "ids": [
      7486
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7595,
    "map": "thorngarde",
    "ids": [
      7487,
      7488
    ]
  },
  {
    "kind": "kill",
    "questId": 7595,
    "map": "thorngarde",
    "monsters": [
      "NecroDrone"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7596,
    "map": "thorngarde",
    "ids": [
      7489,
      7490,
      7491
    ]
  },
  {
    "kind": "kill",
    "questId": 7596,
    "map": "thorngarde",
    "monsters": [
      "NecroMech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7597,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7598,
    "map": "thorngarde",
    "monsters": [
      "CryptHacker",
      "NecroDrone"
    ]
  },
  {
    "kind": "plan",
    "questId": 7599,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "NecroDrone Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7600,
    "map": "thorngarde",
    "monsters": [
      "Zyrus the BioKnight"
    ]
  },
  {
    "kind": "plan",
    "questId": 7601,
    "actions": [
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroDrone",
        "item": "Deadtech Power Core",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "NecroMech",
        "item": "NecroMech Targeting Systems",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "CryptHacker",
        "item": "CryptHacker Circuitry",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "thorngarde",
        "monster": "Zyrus the BioKnight",
        "item": "BioKnight Engine",
        "quantity": 3
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.doomwood.part3.1thornsgarde",
    category: "Story",
    map: "thorngarde",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
