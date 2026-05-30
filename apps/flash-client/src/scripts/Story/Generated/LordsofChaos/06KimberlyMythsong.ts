import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Mythsong) Kimberly",
  "description": "This will finish the Kimberly quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "mythsong",
    "kimberly",
    "lordsof",
    "chaos",
    "06kimberly"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 648,
    "map": "stairway",
    "monsters": [
      "Grateful Undead",
      "Rock Lobster"
    ]
  },
  {
    "kind": "kill",
    "questId": 649,
    "map": "stairway",
    "monsters": [
      "Rock Lobster"
    ]
  },
  {
    "kind": "kill",
    "questId": 650,
    "map": "stairway",
    "monsters": [
      "Grateful Undead"
    ]
  },
  {
    "kind": "kill",
    "questId": 651,
    "map": "stairway",
    "monsters": [
      "Elwood Bruise",
      "Jake Bruise"
    ]
  },
  {
    "kind": "kill",
    "questId": 658,
    "map": "beehive",
    "monsters": [
      "Stinger"
    ]
  },
  {
    "kind": "kill",
    "questId": 659,
    "map": "beehive",
    "monsters": [
      "Killer Queen Bee"
    ]
  },
  {
    "kind": "plan",
    "questId": 660,
    "actions": [
      {
        "kind": "hunt",
        "map": "beehive",
        "cell": "r6",
        "pad": "Right",
        "monster": "*",
        "item": "No Shoes!"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 661
  },
  {
    "kind": "plan",
    "questId": 675,
    "actions": [
      {
        "kind": "hunt",
        "map": "orchestra",
        "cell": "R7",
        "pad": "Down",
        "monster": "Mozard",
        "item": "Fire Flea",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 676,
    "actions": [
      {
        "kind": "hunt",
        "map": "orchestra",
        "cell": "R4",
        "pad": "Down",
        "monster": "Pachelbel's Cannon ",
        "item": "Cannon Powder"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 677,
    "map": "orchestra",
    "monsters": [
      "Mozard"
    ]
  },
  {
    "kind": "kill",
    "questId": 678,
    "map": "orchestra",
    "monsters": [
      "Faust"
    ]
  },
  {
    "kind": "kill",
    "questId": 4827,
    "map": "stairway",
    "monsters": [
      "Rock Lobster",
      "Grateful Undead"
    ]
  },
  {
    "kind": "chain",
    "questId": 707
  },
  {
    "kind": "plan",
    "questId": 709,
    "actions": [
      {
        "kind": "hunt",
        "map": "palooza",
        "monster": "Pony Gary Yellow",
        "item": "Pony Gary Yellow Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 710,
    "actions": [
      {
        "kind": "hunt",
        "map": "palooza",
        "monster": "Kimberly",
        "item": "Kimberly Defeated"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.06kimberly-mythsong",
    category: "Story",
    map: "stairway",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
