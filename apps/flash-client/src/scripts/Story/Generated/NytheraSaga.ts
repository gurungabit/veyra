import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Nythera Saga Story",
  "description": "This will finish the Nythera Saga Story.",
  "tags": [
    "story",
    "quest",
    "nythera",
    "saga"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 437,
    "map": "NorthLands",
    "ids": [
      77
    ]
  },
  {
    "kind": "kill",
    "questId": 437,
    "map": "NorthLands",
    "monsters": [
      "Snow Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 438,
    "map": "NorthLands",
    "monsters": [
      "Snow Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 439,
    "map": "NorthLands",
    "monsters": [
      "Snow Golem",
      "Snow Golem",
      "Snow Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 440,
    "map": "NorthLands",
    "monsters": [
      "Snow Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8690,
    "map": "NorthLands",
    "ids": [
      80
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8689,
    "map": "NorthLands",
    "ids": [
      10205
    ]
  },
  {
    "kind": "kill",
    "questId": 443,
    "map": "NorthLands",
    "monsters": [
      "Water Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 444,
    "map": "NorthLands",
    "monsters": [
      "Aisha's Drake"
    ]
  },
  {
    "kind": "kill",
    "questId": 447,
    "map": "KingCoal",
    "monsters": [
      "Snow Golem",
      "Ice Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 448,
    "map": "KingCoal",
    "monsters": [
      "Snow Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 449,
    "map": "KingCoal",
    "monsters": [
      "Snow Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 450,
    "map": "Swallowed",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 451,
    "map": "Swallowed",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 452,
    "map": "Swallowed",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 453,
    "map": "Swallowed",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 454,
    "map": "Swallowed",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 455,
    "map": "Swallowed",
    "monsters": [
      "Rhinovirus"
    ]
  },
  {
    "kind": "plan",
    "questId": 898,
    "actions": [
      {
        "kind": "mapItem",
        "map": "BlindingSnow",
        "id": 233,
        "quantity": 10
      },
      {
        "kind": "mapItem",
        "map": "Northlands",
        "id": 235,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 899,
    "map": "BlindingSnow",
    "monsters": [
      "Nythera"
    ]
  },
  {
    "kind": "kill",
    "questId": 900,
    "map": "BlindingSnow",
    "monsters": [
      "Chaorrupted Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 901,
    "map": "Void",
    "monsters": [
      "Void Larva"
    ]
  },
  {
    "kind": "kill",
    "questId": 902,
    "map": "Void",
    "monsters": [
      "Void Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 903,
    "map": "palooza",
    "monsters": [
      "Discordia",
      "Discordia",
      "Discordia",
      "Discordia"
    ]
  },
  {
    "kind": "kill",
    "questId": 904,
    "map": "Void",
    "monsters": [
      "Void Dragon"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nythera-saga",
    category: "Story",
    map: "NorthLands",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
