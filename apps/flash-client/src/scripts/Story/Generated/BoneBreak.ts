import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Bone Break Story",
  "description": "This will complete the Bone Break Story.",
  "tags": [
    "story",
    "quest",
    "bone-break",
    "bone",
    "break"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 3892,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonebreak",
        "monster": "Bone Leech",
        "item": "Venomous Leech Fang",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "bonebreak",
        "monster": "Marsh Treeant",
        "item": "Dread Tree Branch",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "bonebreak",
        "monster": "Marsh Thing",
        "item": "Marsh Weed",
        "quantity": 12
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3893,
    "map": "bonebreak",
    "monsters": [
      "Undead Berserker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3894,
    "map": "bonebreak",
    "ids": [
      2990
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3894,
    "map": "bonebreak",
    "monsters": [
      "Kidnapped Prisoner"
    ]
  },
  {
    "kind": "plan",
    "questId": 3895,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonebreak",
        "monster": "Unbroken Minion",
        "item": "Unbroken Minion Defeated",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "bonebreak",
        "monster": "Undead Berserker",
        "item": "Berserker Warrior Defeated",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "bonebreak",
        "monster": "Bone Leech",
        "item": "Bone Leech Defeated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3896,
    "map": "bonebreak",
    "monsters": [
      "Undead Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 3897,
    "map": "bonebreak",
    "monsters": [
      "Bonebreaker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5977,
    "map": "bonebreak",
    "ids": [
      5418
    ]
  },
  {
    "kind": "kill",
    "questId": 5978,
    "map": "bonebreak",
    "monsters": [
      "Undead Berserker",
      "Bone Leech"
    ]
  },
  {
    "kind": "kill",
    "questId": 5979,
    "map": "bonebreak",
    "monsters": [
      "Marsh Thing"
    ]
  },
  {
    "kind": "kill",
    "questId": 5980,
    "map": "bonebreak",
    "monsters": [
      "Kidnapped Prisoner"
    ]
  },
  {
    "kind": "kill",
    "questId": 5981,
    "map": "bonebreak",
    "monsters": [
      "Killek BoneBreaker"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.bone-break",
    category: "Story",
    map: "bonebreak",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
