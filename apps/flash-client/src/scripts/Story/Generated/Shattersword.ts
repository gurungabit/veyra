import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Shatter Sword Story",
  "description": "This will finish the Shatter Sword Story.",
  "tags": [
    "story",
    "quest",
    "shatter-sword",
    "shattersword"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 2681,
    "actions": [
      {
        "kind": "mapItem",
        "map": "shattersword",
        "id": 1642,
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Forest Imp",
        "item": "Imp Removed",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2682,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r2",
        "pad": "Left",
        "monster": "Fallen Warrior",
        "item": "Guards Slain",
        "quantity": 4,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2683,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r3",
        "pad": "Left",
        "monster": "Dark Fairy",
        "item": "Faerie Defeated",
        "quantity": 6,
        "isTemp": false
      },
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r3",
        "pad": "Left",
        "monster": "Dark Fairy",
        "item": "Taint Reduced",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2684,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r6",
        "pad": "Right",
        "monster": "Shattersword Prisoner",
        "item": "Minions Slain",
        "quantity": 6,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2685,
    "actions": [
      {
        "kind": "mapItem",
        "map": "shattersword",
        "id": 1643,
        "quantity": 6
      },
      {
        "kind": "mapItem",
        "map": "shattersword",
        "id": 1644,
        "quantity": 3
      },
      {
        "kind": "mapItem",
        "map": "shattersword",
        "id": 1645,
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r2",
        "pad": "Left",
        "monster": "Fallen Warrior",
        "item": "Flint and Striker"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2686,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r6",
        "pad": "Right",
        "monster": "Shattersword Prisoner",
        "item": "Attackers Slain",
        "quantity": 7,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2691,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r3",
        "pad": "Left",
        "monster": "Dark Fairy",
        "item": "Dark Spark",
        "quantity": 25,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2687,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r7",
        "pad": "Right",
        "monster": "Forest Elf",
        "item": "Treewalker Sandals"
      },
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r7",
        "pad": "Right",
        "monster": "Forest Elf",
        "item": "Rappelling Gear"
      },
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r7",
        "pad": "Right",
        "monster": "Forest Elf",
        "item": "Sap-B-Gone",
        "quantity": 3,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2688,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Forest Imp",
        "item": "Imp Slain",
        "quantity": 6,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2689,
    "actions": [
      {
        "kind": "mapItem",
        "map": "shattersword",
        "id": 1646,
        "quantity": 7
      },
      {
        "kind": "mapItem",
        "map": "shattersword",
        "id": 1647,
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r6",
        "pad": "Right",
        "monster": "Shattersword Prisoner",
        "item": "Guards Slain",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2690,
    "actions": [
      {
        "kind": "hunt",
        "map": "shattersword",
        "cell": "r11",
        "pad": "Left",
        "monster": "Graveclaw the Defiler",
        "item": "Graveclaw Slain"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shattersword",
    category: "Story",
    map: "shattersword",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
