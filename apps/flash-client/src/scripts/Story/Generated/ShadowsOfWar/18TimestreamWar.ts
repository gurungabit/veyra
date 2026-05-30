import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "TimestreamWar",
  "description": "This will finish the TimestreamWar quest.",
  "tags": [
    "story",
    "quest",
    "shadow-war",
    "timestream-war",
    "shadows",
    "of",
    "war",
    "18timestream"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8803,
    "map": "Timekeep",
    "ids": [
      10455,
      10456,
      10457
    ]
  },
  {
    "kind": "kill",
    "questId": 8804,
    "map": "Timekeep",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8805,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8806,
    "map": "Timekeep",
    "ids": [
      10458
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8807,
    "map": "Timekeep",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8808,
    "map": "Timekeep",
    "ids": [
      10459,
      10460
    ]
  },
  {
    "kind": "kill",
    "questId": 8809,
    "map": "Timekeep",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8810,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp",
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8811,
    "map": "Timekeep",
    "monsters": [
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8812,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8813,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar",
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "plan",
    "questId": 8814,
    "actions": [
      {
        "kind": "hunt",
        "map": "Streamwar",
        "monster": "Decaying Locust",
        "item": "Timestream Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8816,
    "map": "Streamwar",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8817,
    "map": "Streamwar",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8818,
    "map": "streamwar",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 8819,
    "map": "streamwar",
    "monsters": [
      "Second Speaker"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-war.18timestream-war",
    category: "Story",
    map: "ruinedcrown",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
