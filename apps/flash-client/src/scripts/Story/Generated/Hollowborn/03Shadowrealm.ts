import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Shadowrealm",
  "description": "This script will complete the Whispering Helmet's storyline in /shadowrealm.",
  "tags": [
    "story",
    "hollowborn",
    "saga",
    "lae",
    "whispering",
    "helmet",
    "whispering helmet",
    "treasure",
    "hunt",
    "treasure hunt",
    "03shadowrealm"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 9783,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 9784,
    "map": "lycan",
    "monsters": [
      "Sanguine"
    ]
  },
  {
    "kind": "kill",
    "questId": 9785,
    "map": "umbral",
    "monsters": [
      "Rapaxi"
    ]
  },
  {
    "kind": "kill",
    "questId": 9786,
    "map": "battleundera",
    "monsters": [
      "Bone Terror"
    ]
  },
  {
    "kind": "plan",
    "questId": 9787,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowrise",
        "cell": "r15",
        "pad": "Left",
        "monster": "Infernal Warrior",
        "item": "Marred Armor Piece"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 9788,
    "map": "dagerecruit",
    "monsters": [
      "Nuckelavee"
    ]
  },
  {
    "kind": "kill",
    "questId": 9790,
    "map": "darkally",
    "monsters": [
      "Underfiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 9791,
    "map": "yasaris",
    "monsters": [
      "Avatar of Anubyx"
    ]
  },
  {
    "kind": "kill",
    "questId": 9792,
    "map": "wrath",
    "monsters": [
      "Gorgorath"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9793,
    "map": "greed",
    "ids": [
      13314
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.hollowborn.03shadowrealm",
    category: "Story",
    map: "bonecastle",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
