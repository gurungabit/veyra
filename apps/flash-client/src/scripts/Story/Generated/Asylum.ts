import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Asylum Story",
  "description": "This will complete the Asylum story.",
  "tags": [
    "story",
    "quest",
    "asylum"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 2454,
    "map": "mirrormaze",
    "monsters": [
      "Insane Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2455,
    "map": "mirrormaze",
    "ids": [
      1522
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2456,
    "map": "mirrormaze",
    "ids": [
      1523
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 2457,
    "map": "mirrormaze",
    "monsters": [
      "Insane Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2458,
    "map": "mirrormaze",
    "ids": [
      1524
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2459,
    "map": "catacombs",
    "ids": [
      1525,
      1526,
      1527,
      1528,
      1529,
      1530
    ]
  },
  {
    "kind": "kill",
    "questId": 2460,
    "map": "catacombs",
    "monsters": [
      "Scorpion Cultist"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2461,
    "map": "catacombs",
    "ids": [
      1531
    ]
  },
  {
    "kind": "kill",
    "questId": 2462,
    "map": "catacombs",
    "monsters": [
      "Scorpion Cultist"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2463,
    "map": "catacombs",
    "ids": [
      1532
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 2464,
    "map": "catacombs",
    "ids": [
      1533
    ]
  },
  {
    "kind": "plan",
    "questId": 2465,
    "actions": [
      {
        "kind": "hunt",
        "map": "catacombs",
        "cell": "Frame6",
        "pad": "Left",
        "monster": "Dr. De'Sawed",
        "item": "Disarmed De'Sawed"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2466,
    "actions": [
      {
        "kind": "hunt",
        "map": "catacombs",
        "cell": "Boss2",
        "pad": "Left",
        "monster": "Dr. De'Sawed",
        "item": "De'Sawed Defeated"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.asylum",
    category: "Story",
    map: "mirrormaze",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
