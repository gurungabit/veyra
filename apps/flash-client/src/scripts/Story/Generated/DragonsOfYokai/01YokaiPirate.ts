import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Yokai Pirate",
  "description": "This script will complete \"Yokai Pirate\" storyline.",
  "tags": [
    "story",
    "quest",
    "saga",
    "dragons",
    "dragon",
    "yokai",
    "pirate",
    "complete",
    "all",
    "of",
    "01yokai"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 9378,
    "map": "yokaipirate",
    "ids": [
      12133,
      12134,
      12135
    ]
  },
  {
    "kind": "kill",
    "questId": 9379,
    "map": "yokaipirate",
    "monsters": [
      "Disguised Pirate"
    ]
  },
  {
    "kind": "plan",
    "questId": 9380,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": "Serpent Warrior",
        "item": "Serpent Badge",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9380,
    "map": "yokaipirate",
    "ids": [
      12136,
      12137
    ]
  },
  {
    "kind": "kill",
    "questId": 9381,
    "map": "yokaipirate",
    "monsters": [
      "Disguised Pirate"
    ]
  },
  {
    "kind": "kill",
    "questId": 9382,
    "map": "yokaipirate",
    "monsters": [
      "Noble Owl"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9383,
    "map": "yokaipirate",
    "ids": [
      12138
    ],
    "quantity": 7
  },
  {
    "kind": "plan",
    "questId": 9384,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": "Disguised Pirate",
        "item": "Pirate Interrogated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": "Serpent Warrior",
        "item": "Warrior Interrogated",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9384,
    "map": "yokaipirate",
    "ids": [
      12139
    ]
  },
  {
    "kind": "kill",
    "questId": 9385,
    "map": "yokaipirate",
    "monsters": [
      "Noble Owl"
    ]
  },
  {
    "kind": "plan",
    "questId": 9386,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": 1,
        "item": "Knight Captured",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 9387,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": 11,
        "item": "Neverglades Lord Dueled"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.dragons-of-yokai.01yokai-pirate",
    category: "Story",
    map: "yokaipirate",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
