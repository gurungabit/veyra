import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Originul",
  "description": "This will finish the Originul quest.",
  "tags": [
    "story",
    "quest",
    "originul",
    "nation"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 7881,
    "map": "Originul",
    "monsters": [
      "Inquisitor Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7882,
    "map": "Originul",
    "monsters": [
      "Inquisitor Captain"
    ]
  },
  {
    "kind": "kill",
    "questId": 7883,
    "map": "Originul",
    "monsters": [
      "Grand Inquisitor"
    ]
  },
  {
    "kind": "kill",
    "questId": 7884,
    "map": "Originul",
    "monsters": [
      "Inquisitor Guard",
      "Inquisitor Captain",
      "Grand Inquisitor"
    ]
  },
  {
    "kind": "kill",
    "questId": 7885,
    "map": "Originul",
    "monsters": [
      "Bloodfiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 7886,
    "map": "Originul",
    "monsters": [
      "Bloodfiend"
    ]
  },
  {
    "kind": "plan",
    "questId": 7887,
    "actions": [
      {
        "kind": "hunt",
        "map": "Originul",
        "cell": "r7",
        "pad": "left",
        "monster": "Dreadfiend",
        "item": "Dreadfiend Executed",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7888,
    "map": "Originul",
    "monsters": [
      "Fiend Champion"
    ]
  },
  {
    "kind": "plan",
    "questId": 7889,
    "actions": [
      {
        "kind": "hunt",
        "map": "Originul",
        "cell": "r10",
        "pad": "Top",
        "monster": "Bloodfiend",
        "item": "Mutineer Crushed",
        "quantity": 25
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.originul",
    category: "Story",
    map: "Originul",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
