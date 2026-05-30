import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Blood Moon",
  "description": "This will complete the Blood Moon story.",
  "tags": [
    "story",
    "quest",
    "blood",
    "moon",
    "maxius"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 6048,
    "map": "bloodmoon",
    "ids": [
      5451
    ]
  },
  {
    "kind": "kill",
    "questId": 6048,
    "map": "bloodmoon",
    "monsters": [
      "Darkness"
    ]
  },
  {
    "kind": "kill",
    "questId": 6049,
    "map": "bloodmoon",
    "monsters": [
      "Constantin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6050,
    "map": "bloodmoon",
    "ids": [
      5452
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6051,
    "map": "bloodmoon",
    "ids": [
      5453,
      5454,
      5455
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6052,
    "map": "bloodmoon",
    "ids": [
      5456
    ],
    "quantity": 2
  },
  {
    "kind": "kill",
    "questId": 6053,
    "map": "bloodmoon",
    "monsters": [
      "Spooky Fur"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6054,
    "map": "bloodmoon",
    "ids": [
      5457
    ]
  },
  {
    "kind": "kill",
    "questId": 6055,
    "map": "bloodmoon",
    "monsters": [
      "Frankentacles",
      "Spidderbeast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6056,
    "map": "bloodmoon",
    "ids": [
      5458
    ]
  },
  {
    "kind": "kill",
    "questId": 6057,
    "map": "bloodmoon",
    "monsters": [
      "Black Unicorn"
    ]
  },
  {
    "kind": "kill",
    "questId": 6058,
    "map": "bloodmoon",
    "monsters": [
      "Bubble"
    ]
  },
  {
    "kind": "kill",
    "questId": 6063,
    "map": "maxius",
    "monsters": [
      "Ghoul Minion"
    ]
  },
  {
    "kind": "plan",
    "questId": 6064,
    "actions": [
      {
        "kind": "hunt",
        "map": "maxius",
        "monster": 6,
        "item": "Count Maxius Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6065,
    "map": "maxius",
    "monsters": [
      "Vampire Minion"
    ]
  },
  {
    "kind": "plan",
    "questId": 6066,
    "actions": [
      {
        "kind": "hunt",
        "map": "maxius",
        "monster": "Barnabus",
        "item": "Barnabus Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6067,
    "actions": [
      {
        "kind": "jump",
        "cell": "r6"
      },
      {
        "kind": "hunt",
        "map": "maxius",
        "monster": 13,
        "item": "Count Maxius Slain"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.blood-moon",
    category: "Story",
    map: "bloodmoon",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
