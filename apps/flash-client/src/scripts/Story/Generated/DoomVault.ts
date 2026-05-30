import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Doom Vault (A) Story",
  "description": "This will finish the Doom Vault (A) Story.",
  "tags": [
    "story",
    "quest",
    "doom-vault-a",
    "binky",
    "doom",
    "vault"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 2952,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 1,
        "item": "Soldier Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2953,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 4,
        "item": "Fighter Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2954,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 6,
        "item": "Mage Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2955,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 13,
        "item": "Shelleton Slain",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2965,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 18,
        "item": "Spyball Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2966,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "cell": "r14",
        "pad": "Left",
        "monster": "*",
        "item": "Hand of the Princess"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2967,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 22,
        "item": "Ectomancer Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2968,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 25,
        "item": "Stone Key"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2969,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 30,
        "item": "Grim Soul",
        "quantity": 50
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2970,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 34,
        "item": "Princess Key"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2971,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 37,
        "item": "Angler Slain"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2974,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 38,
        "item": "Mage Slain",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2981,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 45,
        "item": "Lich Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2982,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 48,
        "item": "Fighter Slain",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2983,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 51,
        "item": "Ectomancer Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3006,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 54,
        "item": "Shelleton Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3007,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 58,
        "item": "Raxgore's Key"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3008,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 60,
        "item": "King Slayer"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.doom-vault",
    category: "Story",
    map: "doomvault",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
