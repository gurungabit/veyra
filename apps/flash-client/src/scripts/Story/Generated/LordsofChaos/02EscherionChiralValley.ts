import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Chiral Valley) Escherion",
  "description": "This will finish the Escherion quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "chiral-valley",
    "escherion",
    "lordsof",
    "chaos",
    "02escherion",
    "chiral",
    "valley"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 245,
    "map": "mobius",
    "monsters": [
      "Chaos Sp-Eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 246,
    "map": "mobius",
    "ids": [
      42
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 247,
    "map": "mobius",
    "monsters": [
      "Fire Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 260,
    "map": "mobius",
    "ids": [
      44
    ]
  },
  {
    "kind": "kill",
    "questId": 248,
    "map": "mobius",
    "monsters": [
      "Cyclops Raider"
    ]
  },
  {
    "kind": "kill",
    "questId": 249,
    "map": "mobius",
    "monsters": [
      "Slugfit"
    ]
  },
  {
    "kind": "kill",
    "questId": 250,
    "map": "faerie",
    "monsters": [
      "Chainsaw Sneevil"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 251,
    "map": "faerie",
    "ids": [
      43
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 252,
    "map": "faerie",
    "monsters": [
      "Chainsaw Sneevil"
    ]
  },
  {
    "kind": "kill",
    "questId": 255,
    "map": "faerie",
    "monsters": [
      "Cyclops Warlord"
    ]
  },
  {
    "kind": "kill",
    "questId": 256,
    "map": "faerie",
    "monsters": [
      "Aracara"
    ]
  },
  {
    "kind": "kill",
    "questId": 257,
    "map": "cornelis",
    "monsters": [
      "Gargoyle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 261,
    "map": "cornelis",
    "ids": [
      45
    ]
  },
  {
    "kind": "kill",
    "questId": 258,
    "map": "cornelis",
    "monsters": [
      "Gargoyle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 262,
    "map": "cornelis",
    "ids": [
      46
    ]
  },
  {
    "kind": "kill",
    "questId": 259,
    "map": "cornelis",
    "monsters": [
      "Stone Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 263,
    "map": "cornelis",
    "ids": [
      47
    ]
  },
  {
    "kind": "mapItem",
    "questId": 266,
    "map": "mobius",
    "ids": [
      48
    ]
  },
  {
    "kind": "mapItem",
    "questId": 267,
    "map": "mobius",
    "ids": [
      49
    ]
  },
  {
    "kind": "kill",
    "questId": 264,
    "map": "mobius",
    "monsters": [
      "Cyclops Raider"
    ]
  },
  {
    "kind": "plan",
    "questId": 265,
    "actions": [
      {
        "kind": "hunt",
        "map": "faerie",
        "monster": "Chainsaw Sneevil",
        "item": "Cardboard Box",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 268,
    "map": "relativity",
    "monsters": [
      "Cyclops Raider"
    ]
  },
  {
    "kind": "kill",
    "questId": 269,
    "map": "relativity",
    "monsters": [
      "Fire Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 270,
    "map": "relativity",
    "monsters": [
      "Head Gargoyle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 271,
    "map": "hydra",
    "ids": [
      50,
      51,
      52
    ]
  },
  {
    "kind": "plan",
    "questId": 272,
    "actions": []
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.02escherion-chiral-valley",
    category: "Story",
    map: "mobius",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
