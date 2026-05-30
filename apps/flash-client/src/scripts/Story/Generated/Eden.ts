import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Eden Story",
  "description": "This will finish the Eden Story.",
  "tags": [
    "story",
    "quest",
    "eden"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 8116,
    "map": "Shinkansen",
    "ids": [
      8496
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8116,
    "map": "Shinkansen",
    "monsters": [
      "Temptation 1"
    ]
  },
  {
    "kind": "kill",
    "questId": 8117,
    "map": "Shinkansen",
    "monsters": [
      "Trash Pile"
    ]
  },
  {
    "kind": "kill",
    "questId": 8118,
    "map": "Shinkansen",
    "monsters": [
      "Civilian"
    ]
  },
  {
    "kind": "chain",
    "questId": 8120
  },
  {
    "kind": "chain",
    "questId": 8119
  },
  {
    "kind": "kill",
    "questId": 8121,
    "map": "Shinkansen",
    "monsters": [
      "Crystallis Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8122,
    "map": "Shinkansen",
    "monsters": [
      "Crystallis Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8123,
    "map": "Shinkansen",
    "monsters": [
      "Saint Apa",
      "Saint Eta"
    ]
  },
  {
    "kind": "kill",
    "questId": 8124,
    "map": "Shinkansen",
    "monsters": [
      "Crystallis Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8795,
    "map": "eden",
    "monsters": [
      "Harmless Choir"
    ]
  },
  {
    "kind": "plan",
    "questId": 8796,
    "actions": [
      {
        "kind": "hunt",
        "map": "eden",
        "monster": "Cosplayer",
        "item": "Pictures Taken",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "eden",
        "monster": "Klawaii Machine",
        "item": "Prize Won"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8797,
    "map": "eden",
    "monsters": [
      "SalaryMan",
      "SalaryMan"
    ]
  },
  {
    "kind": "plan",
    "questId": 8798,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 8798,
    "map": "eden",
    "ids": [
      10448
    ],
    "quantity": 5
  },
  {
    "kind": "chain",
    "questId": 8798
  },
  {
    "kind": "kill",
    "questId": 8799,
    "map": "eden",
    "monsters": [
      "CRC Power Armor"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8800,
    "map": "eden",
    "ids": [
      10449
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8800,
    "map": "eden",
    "monsters": [
      "Yokaified Experiment 1"
    ]
  },
  {
    "kind": "kill",
    "questId": 8801,
    "map": "eden",
    "monsters": [
      "Major Anomaly"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.eden",
    category: "Story",
    map: "Shinkansen",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
