import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Neo Fortress",
  "description": "This script will complete the storyline in /neofortress.",
  "tags": [
    "story",
    "hollowborn",
    "saga",
    "trygve",
    "neofortress",
    "lae",
    "02neo",
    "fortress"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8289,
    "map": "trygve",
    "monsters": [
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8290,
    "map": "trygve",
    "ids": [
      9036
    ]
  },
  {
    "kind": "kill",
    "questId": 8290,
    "map": "trygve",
    "monsters": [
      "Blood Eagle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8291,
    "map": "trygve",
    "ids": [
      9037
    ]
  },
  {
    "kind": "kill",
    "questId": 8291,
    "map": "trygve",
    "monsters": [
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8292,
    "map": "trygve",
    "ids": [
      9038
    ]
  },
  {
    "kind": "kill",
    "questId": 8292,
    "map": "trygve",
    "monsters": [
      "Rune Boar"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8293,
    "map": "trygve",
    "ids": [
      9039
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8293,
    "map": "trygve",
    "monsters": [
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8294,
    "map": "trygve",
    "ids": [
      9040
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8295,
    "map": "trygve",
    "monsters": [
      "Blood Eagle",
      "Rune Boar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8296,
    "map": "trygve",
    "monsters": [
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "kill",
    "questId": 8297,
    "map": "trygve",
    "monsters": [
      "Blood Eagle",
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "kill",
    "questId": 8298,
    "map": "trygve",
    "monsters": [
      "Gramiel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9281,
    "map": "neofortress",
    "ids": [
      11806
    ],
    "quantity": 9
  },
  {
    "kind": "kill",
    "questId": 9282,
    "map": "neofortress",
    "monsters": [
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "kill",
    "questId": 9283,
    "map": "neofortress",
    "monsters": [
      "Vindicator Hound"
    ]
  },
  {
    "kind": "kill",
    "questId": 9284,
    "map": "neofortress",
    "monsters": [
      "Vindicator Beast"
    ]
  },
  {
    "kind": "kill",
    "questId": 9285,
    "map": "neofortress",
    "monsters": [
      "Vindicator Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9286,
    "map": "neofortress",
    "ids": [
      11807
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 9287,
    "map": "neofortress",
    "monsters": [
      "Vindicator General"
    ]
  },
  {
    "kind": "kill",
    "questId": 9288,
    "map": "neofortress",
    "monsters": [
      "Vindicator Recruit"
    ]
  },
  {
    "kind": "kill",
    "questId": 9289,
    "map": "neofortress",
    "monsters": [
      "Vindicator General"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9290,
    "map": "neofortress",
    "ids": [
      11808
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.hollowborn.02neo-fortress",
    category: "Story",
    map: "trygve",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
