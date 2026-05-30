import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Junkheap",
  "description": "This will finish the Junkheap quest.",
  "tags": [
    "story",
    "quest",
    "shadow-war",
    "junkheap",
    "shadows",
    "of",
    "war",
    "07junkheap"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6949,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6950,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 6951,
    "map": "junkhoard",
    "monsters": [
      "Portal Manifestation"
    ]
  },
  {
    "kind": "kill",
    "questId": 6952,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 6953,
    "map": "junkhoard",
    "monsters": [
      "Portal Manifestation"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6954,
    "map": "junkhoard",
    "ids": [
      6497
    ]
  },
  {
    "kind": "kill",
    "questId": 6955,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6956,
    "map": "junkhoard",
    "monsters": [
      "Coal Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6957,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6958,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6959,
    "map": "junkhoard",
    "ids": [
      6498
    ]
  },
  {
    "kind": "kill",
    "questId": 6960,
    "map": "junkhoard",
    "monsters": [
      "Magpie Junk Heap"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6961,
    "map": "junkheap",
    "ids": [
      6500
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6962,
    "map": "junkheap",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6963,
    "map": "junkheap",
    "ids": [
      6501
    ]
  },
  {
    "kind": "kill",
    "questId": 6963,
    "map": "junkheap",
    "monsters": [
      "Tiny Manifestation"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6964,
    "map": "junkheap",
    "ids": [
      6502
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6965,
    "map": "junkheap",
    "ids": [
      6503
    ]
  },
  {
    "kind": "kill",
    "questId": 6965,
    "map": "junkheap",
    "monsters": [
      "Shadowflame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 6966,
    "map": "junkheap",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 6967,
    "map": "junkheap",
    "monsters": [
      "Dark Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6968,
    "map": "junkheap",
    "monsters": [
      "Shadow Imp",
      "Shadow Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6969,
    "map": "junkheap",
    "ids": [
      6504
    ]
  },
  {
    "kind": "kill",
    "questId": 6970,
    "map": "junkheap",
    "monsters": [
      "Dark Treeant",
      "Shadowflame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 6971,
    "map": "junkheap",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 6972,
    "map": "junkheap",
    "monsters": [
      "Shadowflame Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 6973,
    "map": "junkheap",
    "monsters": [
      "Shadowflame Yulgar"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6974,
    "map": "junkhoard",
    "ids": [
      6505
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-war.07junkheap",
    category: "Story",
    map: "junkhoard",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
