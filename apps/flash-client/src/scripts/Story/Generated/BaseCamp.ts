import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Base Camp Storyline",
  "description": "This will complete the storyline in /basecamp.",
  "tags": [
    "story",
    "quest",
    "base camp",
    "basecamp",
    "puff",
    "base",
    "camp"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 10272,
    "actions": [
      {
        "kind": "hunt",
        "map": "orctown",
        "monster": "General Porkon",
        "item": "Burlap Sack"
      },
      {
        "kind": "hunt",
        "map": "ubear",
        "monster": "Honey Glob",
        "item": "Lifetime Subscription to Ubear"
      },
      {
        "kind": "hunt",
        "map": "chaoslab",
        "monster": "Chaorrupted Moglin",
        "item": "Chauffeur Moglin"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 10272,
    "actions": [
      {
        "kind": "buy",
        "map": "arcangrove",
        "shopId": 211,
        "item": "Potion of Sleeping",
        "quantity": 15
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.base-camp",
    category: "Story",
    map: "orctown",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
