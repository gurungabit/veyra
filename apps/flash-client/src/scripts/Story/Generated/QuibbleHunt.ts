import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Quibble Hunt Story",
  "description": "This will finish the Quibble Hunt Story.",
  "tags": [
    "story",
    "quest",
    "quibble-hunt",
    "quibble",
    "hunt"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5878,
    "map": "quibblehunt",
    "monsters": [
      "Void Larva"
    ]
  },
  {
    "kind": "kill",
    "questId": 5879,
    "map": "quibblehunt",
    "monsters": [
      "Aerodu Defense Machine",
      "Nimbo"
    ]
  },
  {
    "kind": "kill",
    "questId": 5880,
    "map": "quibblehunt",
    "monsters": [
      "Void Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5881,
    "map": "quibblehunt",
    "monsters": [
      "Entropy Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 5882,
    "map": "quibblehunt",
    "monsters": [
      "Void Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5883,
    "map": "quibblehunt",
    "monsters": [
      "Jimmy the Eye-Pod",
      "Master Twang"
    ]
  },
  {
    "kind": "kill",
    "questId": 5884,
    "map": "quibblehunt",
    "monsters": [
      "Void Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5885,
    "map": "quibblehunt",
    "monsters": [
      "RogueFiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 5886,
    "map": "quibblehunt",
    "monsters": [
      "Void Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5887,
    "map": "quibblehunt",
    "monsters": [
      "Braken Tentacle",
      "Jellyfish",
      "Braken Tentacle"
    ]
  },
  {
    "kind": "kill",
    "questId": 5888,
    "map": "quibblehunt",
    "monsters": [
      "Void Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5889,
    "map": "quibblehunt",
    "ids": [
      5311
    ]
  },
  {
    "kind": "kill",
    "questId": 5890,
    "map": "quibblehunt",
    "monsters": [
      "Clawg"
    ]
  },
  {
    "kind": "kill",
    "questId": 5891,
    "map": "quibblehunt",
    "monsters": [
      "Dricken"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.quibble-hunt",
    category: "Story",
    map: "quibblehunt",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
