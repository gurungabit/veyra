import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "(Chaos Finale Bonus) Pyramid of Pain",
  "description": "This will finish the Pyramid of Pain quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "chaos-finale",
    "bonus",
    "pyramid-of-pain",
    "member",
    "lordsof",
    "chaos",
    "choas",
    "finale",
    "mem",
    "pyramidof",
    "pain"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 3640,
    "map": "pyramidpain",
    "monsters": [
      "Cactus Creeper ",
      "Golden Scarab "
    ]
  },
  {
    "kind": "kill",
    "questId": 3641,
    "map": "pyramidpain",
    "monsters": [
      "Pyramid Vase"
    ]
  },
  {
    "kind": "kill",
    "questId": 3642,
    "map": "pyramidpain",
    "monsters": [
      "Cactus Creeper "
    ]
  },
  {
    "kind": "kill",
    "questId": 3643,
    "map": "pyramidpain",
    "monsters": [
      "Golden Scarab "
    ]
  },
  {
    "kind": "kill",
    "questId": 3644,
    "map": "pyramidpain",
    "monsters": [
      "Cactus Creeper ",
      "Golden Scarab "
    ]
  },
  {
    "kind": "kill",
    "questId": 3645,
    "map": "pyramidpain",
    "monsters": [
      "Sandshark "
    ]
  },
  {
    "kind": "kill",
    "questId": 3646,
    "map": "pyramidpain",
    "monsters": [
      "Kalestri Worshipper "
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3647,
    "map": "pyramidpain",
    "ids": [
      2758
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3648,
    "map": "pyramidpain",
    "monsters": [
      "Tomb Robber "
    ]
  },
  {
    "kind": "kill",
    "questId": 3649,
    "map": "pyramidpain",
    "monsters": [
      "Sandshark "
    ]
  },
  {
    "kind": "kill",
    "questId": 3650,
    "map": "pyramidpain",
    "monsters": [
      "Pyramid Vase"
    ]
  },
  {
    "kind": "kill",
    "questId": 3651,
    "map": "pyramidpain",
    "monsters": [
      "Cactus Creeper ",
      "Golden Scarab "
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3652,
    "map": "pyramidpain",
    "ids": [
      2770
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3653,
    "map": "pyramidpain",
    "monsters": [
      "Kalestri Worshipper "
    ]
  },
  {
    "kind": "kill",
    "questId": 3655,
    "map": "pyramidpain",
    "monsters": [
      "Golden Scarab "
    ]
  },
  {
    "kind": "kill",
    "questId": 3654,
    "map": "pyramidpain",
    "monsters": [
      "Golden Scarab "
    ]
  },
  {
    "kind": "kill",
    "questId": 3656,
    "map": "pyramidpain",
    "monsters": [
      "Chaorrupted Robber "
    ]
  },
  {
    "kind": "kill",
    "questId": 3657,
    "map": "pyramidpain",
    "monsters": [
      "Kalestri Worshipper "
    ]
  },
  {
    "kind": "kill",
    "questId": 3658,
    "map": "pyramidpain",
    "monsters": [
      "Pyramid Vase"
    ]
  },
  {
    "kind": "kill",
    "questId": 3659,
    "map": "pyramidpain",
    "monsters": [
      "Viridi"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.choas-finale-bonus-mem.pyramidof-pain-mem",
    category: "Story",
    map: "pyramidpain",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
