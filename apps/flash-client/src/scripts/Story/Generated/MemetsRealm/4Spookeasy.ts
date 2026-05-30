import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Spookeasy",
  "description": "This will finish the Spookeasy quest.",
  "tags": [
    "story",
    "quest",
    "memets-realm",
    "spookeasy",
    "memets",
    "realm",
    "4spookeasy"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6656,
    "map": "spookeasy",
    "monsters": [
      "Happy Cloud"
    ]
  },
  {
    "kind": "kill",
    "questId": 6657,
    "map": "spookeasy",
    "monsters": [
      "Happy Balloon"
    ]
  },
  {
    "kind": "kill",
    "questId": 6658,
    "map": "spookeasy",
    "monsters": [
      "Nightmare Goo"
    ]
  },
  {
    "kind": "kill",
    "questId": 6659,
    "map": "spookeasy",
    "monsters": [
      "Nightmare Shade"
    ]
  },
  {
    "kind": "plan",
    "questId": 6660,
    "actions": [
      {
        "kind": "hunt",
        "map": "spookeasy",
        "cell": "r6",
        "pad": "Left",
        "monster": "*",
        "item": "Dream Dust",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6661,
    "map": "spookeasy",
    "monsters": [
      "Nightmare Goo"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.memets-realm.4spookeasy",
    category: "Story",
    map: "spookeasy",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
