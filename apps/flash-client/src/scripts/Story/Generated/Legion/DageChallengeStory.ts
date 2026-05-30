import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Dage Challenge Story",
  "description": "This will finish the Dage Challenge Story quest.",
  "tags": [
    "story",
    "quest",
    "legion",
    "dage-challenge-story",
    "dage",
    "challenge"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 8544,
    "actions": [
      {
        "kind": "hunt",
        "map": "Dage",
        "monster": "Dage the Evil",
        "item": "Dage Dueled"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8545,
    "actions": [
      {
        "kind": "hunt",
        "map": "underworld",
        "monster": "Dark Makai",
        "item": "Dage's Favor",
        "quantity": 200,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8546,
    "actions": [
      {
        "kind": "hunt",
        "map": "legionarena",
        "monster": "Legion Fiend Rider",
        "item": "Fiend Rider's Approval"
      },
      {
        "kind": "hunt",
        "map": "frozenlair",
        "monster": "Lich Lord",
        "item": "Lich Lord's Approval"
      },
      {
        "kind": "hunt",
        "map": "dagefortress",
        "monster": "Grrrberus",
        "item": "Grrrberus's Grr Grrr"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dage-challenge-story",
    category: "Story",
    map: "Dage",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
