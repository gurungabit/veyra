import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Downward Story",
  "description": "This will complete the Downward Story.",
  "tags": [
    "story",
    "quest",
    "downward"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 2861,
    "map": "arcangrove",
    "ids": [
      1752
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2862,
    "map": "battleontown",
    "ids": [
      1753
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2863,
    "map": "battleontown",
    "ids": [
      1754
    ]
  },
  {
    "kind": "kill",
    "questId": 2864,
    "map": "lair",
    "monsters": [
      "Bronze Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 2865,
    "map": "cornelis",
    "monsters": [
      "Gargoyle"
    ]
  },
  {
    "kind": "kill",
    "questId": 2866,
    "map": "Noobshire",
    "monsters": [
      "Kittarian Mouse Eater"
    ]
  },
  {
    "kind": "kill",
    "questId": 2867,
    "map": "giant",
    "monsters": [
      "Red Ant"
    ]
  },
  {
    "kind": "kill",
    "questId": 2868,
    "map": "mudluk",
    "monsters": [
      "Swamp Lurker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2869,
    "map": "battleontown",
    "ids": [
      1755
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2870,
    "map": "battleontown",
    "ids": [
      1756
    ]
  },
  {
    "kind": "kill",
    "questId": 2871,
    "map": "downward",
    "monsters": [
      "Unearthed Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 2872,
    "map": "downward",
    "monsters": [
      "Rotfeeder Worm"
    ]
  },
  {
    "kind": "kill",
    "questId": 2873,
    "map": "downward",
    "monsters": [
      "Rotfeeder Worm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2874,
    "map": "downward",
    "ids": [
      1757
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 2875,
    "map": "downward",
    "monsters": [
      "Rotfeeder Worm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2876,
    "map": "downward",
    "ids": [
      1758
    ]
  },
  {
    "kind": "kill",
    "questId": 2877,
    "map": "downward",
    "monsters": [
      "Rotfeeder Worm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2878,
    "map": "downward",
    "ids": [
      1759
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 2879,
    "map": "downward",
    "ids": [
      1760
    ]
  },
  {
    "kind": "kill",
    "questId": 2880,
    "map": "downward",
    "monsters": [
      "Mana Crystalized Undead"
    ]
  },
  {
    "kind": "kill",
    "questId": 2881,
    "map": "downward",
    "monsters": [
      "Gemmed Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2882,
    "map": "downward",
    "ids": [
      1761
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 2883,
    "map": "downward",
    "monsters": [
      "Gemmed Burrower"
    ]
  },
  {
    "kind": "kill",
    "questId": 2884,
    "map": "downward",
    "monsters": [
      "Crystal Mana Construct"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.downward",
    category: "Story",
    map: "arcangrove",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
