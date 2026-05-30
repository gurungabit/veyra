import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Draco Con Story",
  "description": "This will finish the Draco Con story.",
  "tags": [
    "story",
    "quest",
    "dracocon",
    "draco",
    "con"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5357,
    "map": "dracocon",
    "monsters": [
      "Zombie Tog",
      "Zombie Dravir"
    ]
  },
  {
    "kind": "kill",
    "questId": 5358,
    "map": "dracocon",
    "monsters": [
      "Zombie Dravir"
    ]
  },
  {
    "kind": "kill",
    "questId": 5359,
    "map": "dracocon",
    "monsters": [
      "Angry Wisp",
      "Red Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 5360,
    "map": "dracocon",
    "monsters": [
      "Undead Soldier",
      "Zombie Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5361,
    "map": "dracocon",
    "ids": [
      4723
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5361,
    "map": "dracocon",
    "monsters": [
      "Villager"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5362,
    "map": "dracocon",
    "ids": [
      4724
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 5363,
    "map": "dracocon",
    "monsters": [
      "Zombie Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5364,
    "map": "dracocon",
    "ids": [
      4725
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5364,
    "map": "dracocon",
    "monsters": [
      "Battle Gem"
    ]
  },
  {
    "kind": "kill",
    "questId": 5365,
    "map": "dracocon",
    "monsters": [
      "Dragon Training Dummy"
    ]
  },
  {
    "kind": "kill",
    "questId": 5366,
    "map": "dracocon",
    "monsters": [
      "Angry Wisp"
    ]
  },
  {
    "kind": "kill",
    "questId": 5367,
    "map": "dracocon",
    "monsters": [
      "Zombie Tog"
    ]
  },
  {
    "kind": "kill",
    "questId": 5368,
    "map": "dracocon",
    "monsters": [
      "Strong Drag"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5369,
    "map": "dracocon",
    "ids": [
      4726
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5370,
    "map": "dracocon",
    "ids": [
      4727
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 5371,
    "map": "dracocon",
    "ids": [
      4728
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5372,
    "map": "dracocon",
    "monsters": [
      "Drummer",
      "Guitarist",
      "Keyboardist",
      "Singer"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.draco-con",
    category: "Story",
    map: "dracocon",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
