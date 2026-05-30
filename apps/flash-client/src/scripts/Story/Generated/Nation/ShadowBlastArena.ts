import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "ShadowBlast Arena",
  "description": "This will finish the ShadowBlast Arena quest.",
  "tags": [
    "story",
    "quest",
    "nation",
    "shadowblast arena",
    "shadow",
    "blast",
    "arena"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 4733,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "Legion Airstrike",
        "item": "Legion Rookie Defeated",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "CaesarIsTheDark",
        "item": "Nation Rookie Defeated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4734,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "Legion Fenrir",
        "item": "Legion Veteran Defeated",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "Carnage",
        "item": "Nation Veteran Defeated",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4735,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "Legion Cannon",
        "item": "Legion Elite Defeated",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "Minotaurofwar",
        "item": "Nation Elite Defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4736,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowblast",
        "monster": "Shadow Destroyer",
        "item": "Shadowscythe Destroyer Vanquished"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.shadow-blast-arena",
    category: "Story",
    map: "shadowblast",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
