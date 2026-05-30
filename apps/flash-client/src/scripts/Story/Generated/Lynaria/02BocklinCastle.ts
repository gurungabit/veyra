import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Bocklin Castle",
  "description": "This will complete the Victoria Alteon's storyline in /bocklincastle.",
  "tags": [
    "story",
    "quest",
    "saga",
    "lynaria",
    "queen lynaria",
    "bocklincastle",
    "bocklin castle",
    "victoria",
    "victoria alteon",
    "02bocklin",
    "castle"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 10230,
    "map": "bocklingrove",
    "ids": [
      14429
    ]
  },
  {
    "kind": "kill",
    "questId": 10230,
    "map": "bocklingrove",
    "monsters": [
      "Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 10231,
    "map": "bocklingrove",
    "monsters": [
      "Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 10232,
    "map": "bocklingrove",
    "monsters": [
      "Sp-Eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10233,
    "map": "bocklingrove",
    "ids": [
      14430,
      14431
    ]
  },
  {
    "kind": "kill",
    "questId": 10234,
    "map": "bocklingrove",
    "monsters": [
      "Garde Grif"
    ]
  },
  {
    "kind": "kill",
    "questId": 10235,
    "map": "bocklingrove",
    "monsters": [
      "Undead Garde"
    ]
  },
  {
    "kind": "kill",
    "questId": 10236,
    "map": "bocklingrove",
    "monsters": [
      "Garde Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 10239,
    "map": "bocklingrove",
    "monsters": [
      "Elder Necromancer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10243,
    "map": "bocklincastle",
    "ids": [
      14446
    ]
  },
  {
    "kind": "kill",
    "questId": 10243,
    "map": "bocklincastle",
    "monsters": [
      "Undead Garde"
    ]
  },
  {
    "kind": "kill",
    "questId": 10244,
    "map": "bocklincastle",
    "monsters": [
      "Garde Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10245,
    "map": "bocklincastle",
    "ids": [
      14451,
      14447
    ]
  },
  {
    "kind": "kill",
    "questId": 10247,
    "map": "bocklincastle",
    "monsters": [
      "Warped Revenant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10248,
    "map": "bocklincastle",
    "ids": [
      14448
    ]
  },
  {
    "kind": "kill",
    "questId": 10248,
    "map": "bocklincastle",
    "monsters": [
      "Forsaken Necromancer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10249,
    "map": "bocklincastle",
    "ids": [
      14449
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 10250,
    "map": "bocklincastle",
    "ids": [
      14450
    ]
  },
  {
    "kind": "kill",
    "questId": 10250,
    "map": "bocklincastle",
    "monsters": [
      "Faceless Ritualist"
    ]
  },
  {
    "kind": "kill",
    "questId": 10252,
    "map": "bocklincastle",
    "monsters": [
      "Headless Knight"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lynaria.02bocklin-castle",
    category: "Story",
    map: "bocklingrove",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
