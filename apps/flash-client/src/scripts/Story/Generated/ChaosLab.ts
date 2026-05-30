import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Chaoslab Story",
  "description": "Finishes the story of chaos lab",
  "tags": [
    "story",
    "questline",
    "chaos",
    "alina",
    "artix",
    "cysero",
    "beleen",
    "dage",
    "hamster",
    "lab"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 3556,
    "map": "chaoslab",
    "ids": [
      2704,
      2706,
      2707,
      2708
    ]
  },
  {
    "kind": "kill",
    "questId": 3557,
    "map": "chaoslab",
    "monsters": [
      "Chaos Alina"
    ]
  },
  {
    "kind": "kill",
    "questId": 3558,
    "map": "chaoslab",
    "monsters": [
      "Chaorrupted Moglin"
    ]
  },
  {
    "kind": "kill",
    "questId": 3559,
    "map": "chaoslab",
    "monsters": [
      "Chaos Alina"
    ]
  },
  {
    "kind": "kill",
    "questId": 3560,
    "map": "chaoslab",
    "monsters": [
      "Chaorrupted Moglin"
    ]
  },
  {
    "kind": "kill",
    "questId": 3561,
    "map": "chaoslab",
    "monsters": [
      "Chaos Beleen"
    ]
  },
  {
    "kind": "kill",
    "questId": 3562,
    "map": "chaoslab",
    "monsters": [
      "Chaos Cysero"
    ]
  },
  {
    "kind": "kill",
    "questId": 3563,
    "map": "chaoslab",
    "monsters": [
      "Chaos Artix"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3564,
    "map": "chaoslab",
    "ids": [
      2705
    ]
  },
  {
    "kind": "kill",
    "questId": 3565,
    "map": "chaoslab",
    "monsters": [
      "Chaotic Server Hamster"
    ]
  },
  {
    "kind": "kill",
    "questId": 3566,
    "map": "chaoslab",
    "monsters": [
      "Chaos Alina",
      "Chaos Beleen",
      "Chaos Cysero",
      "Chaos Artix"
    ]
  },
  {
    "kind": "kill",
    "questId": 3567,
    "map": "chaoslab",
    "monsters": [
      "Ultra Chaotic Server Hamster"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.chaos-lab",
    category: "Story",
    map: "chaoslab",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
