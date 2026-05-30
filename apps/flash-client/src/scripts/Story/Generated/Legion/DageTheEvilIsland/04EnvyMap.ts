import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Envy Map",
  "description": "This will finish the Envy Map quest.",
  "tags": [
    "story",
    "quest",
    "legion",
    "dage-the-evil-island",
    "envy-map",
    "dage",
    "the",
    "evil",
    "island",
    "04envy",
    "map"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 4884,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Legion Defector",
        "item": "Legion Defectors Beaten",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Fawning Sycophants Beaten",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4885,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Envy",
        "id": 4278,
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4886,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Hood"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Tunic"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Medallion"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Boots"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4887,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Clue"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Secret"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Gossip"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sincere but Unhelpful Praise"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4888,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Helm"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Chestplate"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Leggings"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Blade"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4889,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Legion Spy",
        "item": "Legion Spies Defeated",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4890,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Semi-Useful Information"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Cult Propaganda"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Another Clue"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Bad Puns"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4891,
    "map": "Envy",
    "monsters": [
      "Legion Defector",
      "Fawning Sycophant",
      "Disciple of Envy"
    ]
  },
  {
    "kind": "kill",
    "questId": 4892,
    "map": "Envy",
    "monsters": [
      "Envy"
    ]
  },
  {
    "kind": "kill",
    "questId": 4893,
    "map": "Envy",
    "monsters": [
      "Queen of Envy"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dage-the-evil-island.04envy-map",
    category: "Story",
    map: "Envy",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
