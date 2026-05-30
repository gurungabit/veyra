import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Shadow Gates Story",
  "description": "This will finish the Shadow Gates Story.",
  "tags": [
    "story",
    "quest",
    "shadowgates",
    "shadow",
    "gates"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 183,
    "map": "battleundera",
    "monsters": [
      "Skeletal Fire Mage"
    ]
  },
  {
    "kind": "plan",
    "questId": 176,
    "actions": [
      {
        "kind": "hunt",
        "map": "swordhavenundead",
        "monster": "Skeletal Soldier",
        "item": "Slain Skeletal Soldier",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 177,
    "map": "swordhavenundead",
    "monsters": [
      "Skeletal Ice Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 178,
    "map": "swordhavenundead",
    "monsters": [
      "Undead Giant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 179,
    "map": "castleundead",
    "ids": [
      38
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 180,
    "map": "castleundead",
    "monsters": [
      "Skeletal Viking"
    ]
  },
  {
    "kind": "chain",
    "questId": 195
  },
  {
    "kind": "kill",
    "questId": 196,
    "map": "chaoscrypt",
    "monsters": [
      "Chaorrupted Armor"
    ]
  },
  {
    "kind": "plan",
    "questId": 6216,
    "actions": [
      {
        "kind": "mapItem",
        "map": "prison",
        "id": 39,
        "quantity": 5
      },
      {
        "kind": "buy",
        "map": "prison",
        "shopId": 1559,
        "item": 42993
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6217,
    "map": "chaoscrypt",
    "ids": [
      5662
    ]
  },
  {
    "kind": "kill",
    "questId": 6218,
    "map": "chaoscrypt",
    "monsters": [
      "Chaorrupted Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 6219,
    "map": "forestchaos",
    "monsters": [
      "Chaorrupted Bear",
      "Chaorrupted Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3285,
    "map": "ShadowGates",
    "monsters": [
      "Chaorrupted Rogue"
    ]
  },
  {
    "kind": "kill",
    "questId": 3286,
    "map": "ShadowGates",
    "monsters": [
      "Chaorrupted Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 3287,
    "map": "ShadowGates",
    "monsters": [
      "Chaos Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 3288,
    "map": "ShadowGates",
    "monsters": [
      "Chaorrupted Rogue"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3289,
    "map": "ShadowGates",
    "ids": [
      2327
    ]
  },
  {
    "kind": "kill",
    "questId": 3290,
    "map": "ShadowGates",
    "monsters": [
      "Chaorrupted Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3291,
    "map": "ShadowGates",
    "ids": [
      2328
    ]
  },
  {
    "kind": "kill",
    "questId": 3292,
    "map": "ShadowGates",
    "monsters": [
      "Chaorruption"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadow-gates",
    category: "Story",
    map: "battleundera",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
