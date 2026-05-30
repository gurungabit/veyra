import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Poison Forest Story",
  "description": "This will finish the Poison Forest Story.",
  "tags": [
    "story",
    "quest",
    "poison-forest",
    "adam1a1quests"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 8009,
    "actions": [
      {
        "kind": "hunt",
        "map": "vendorbooths",
        "monster": "Caffeine Imp",
        "item": "Coffee Beans",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "djinn",
        "monster": "Lamia",
        "item": "Tasty Poison",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "charredpath",
        "monster": "Toxic Wisteria",
        "item": "Necessary Antidote"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8010,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Refined Ectoplasm",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "ectocave",
        "monster": "Ektorax",
        "item": "Ektorax's Ectoplasm"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8011,
    "actions": [
      {
        "kind": "hunt",
        "map": "extinction",
        "monster": "Slimed Drone",
        "item": "Iron II.0",
        "quantity": 4,
        "isTemp": false
      },
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Treeant",
        "item": "Wood",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "crashsite",
        "monster": "Dwakel Blaster",
        "item": "Big Iron Bolts",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "portalmaze",
        "monster": "Time Wraith",
        "item": "Piece of Cake",
        "quantity": 5
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.adam1a1quests",
    category: "Story",
    map: "vendorbooths",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
