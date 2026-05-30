import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Bocklin Grove",
  "description": "This will complete the Victoria Alteon's storyline in /bocklingrove.",
  "tags": [
    "story",
    "quest",
    "saga",
    "lynaria",
    "queen lynaria",
    "bocklingrove",
    "bocklin grove",
    "victoria",
    "victoria alteon",
    "01bocklin",
    "grove"
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
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lynaria.01bocklin-grove",
    category: "Story",
    map: "bocklingrove",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
