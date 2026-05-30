import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "PockeyMogs Story",
  "description": "Compeletes the PockeyMogs Story",
  "tags": [
    "story",
    "lim",
    "pockeymogs"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5261,
    "map": "greenguardwest",
    "monsters": [
      "Mogzard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5262,
    "map": "river",
    "monsters": [
      "Fishlin"
    ]
  },
  {
    "kind": "kill",
    "questId": 5263,
    "map": "sewer",
    "monsters": [
      "Groglin"
    ]
  },
  {
    "kind": "kill",
    "questId": 5264,
    "map": "willowcreek",
    "monsters": [
      "Mogdrake"
    ]
  },
  {
    "kind": "kill",
    "questId": 5265,
    "map": "swordhaven",
    "monsters": [
      "Mucklin"
    ]
  },
  {
    "kind": "kill",
    "questId": 5266,
    "map": "arcangrove",
    "monsters": [
      "Linix"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5267,
    "map": "crossroads",
    "ids": [
      4613
    ]
  },
  {
    "kind": "kill",
    "questId": 5268,
    "map": "pockeymogs",
    "monsters": [
      "Moglurker"
    ]
  },
  {
    "kind": "kill",
    "questId": 5269,
    "map": "pockeymogs",
    "monsters": [
      "Zaplin"
    ]
  },
  {
    "kind": "kill",
    "questId": 5270,
    "map": "pockeymogs",
    "monsters": [
      "Blood Moggot"
    ]
  },
  {
    "kind": "kill",
    "questId": 5271,
    "map": "pockeymogs",
    "monsters": [
      "Flamog"
    ]
  },
  {
    "kind": "kill",
    "questId": 5272,
    "map": "pockeymogs",
    "monsters": [
      "Vizally"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.pockeymogs-story",
    category: "Story",
    map: "greenguardwest",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
