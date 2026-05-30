import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "The Book",
  "description": "This will finish the The Book quest.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "the-book",
    "queenof",
    "monsters",
    "8the",
    "book"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8048,
    "map": "forestreach",
    "monsters": [
      "Monstrous Imp",
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 8049,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8050,
    "map": "forestreach",
    "ids": [
      8362
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8050,
    "map": "forestreach",
    "monsters": [
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8051,
    "map": "forestreach",
    "ids": [
      8363
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8051,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "kill",
    "questId": 8052,
    "map": "forestreach",
    "monsters": [
      "EldritchWing",
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "kill",
    "questId": 8053,
    "map": "forestreach",
    "monsters": [
      "Eldritch Parasite",
      "Monstrous Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 8054,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter",
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8055,
    "map": "forestreach",
    "ids": [
      8364
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8056,
    "map": "backroom",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8057,
    "map": "backroom",
    "ids": [
      8365
    ]
  },
  {
    "kind": "kill",
    "questId": 8058,
    "map": "backroom",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8059,
    "map": "backroom",
    "ids": [
      8366
    ]
  },
  {
    "kind": "kill",
    "questId": 8060,
    "map": "backroom",
    "monsters": [
      "Book Wyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 8067,
    "map": "deepforest",
    "monsters": [
      "Creeping Gaze"
    ]
  },
  {
    "kind": "kill",
    "questId": 8068,
    "map": "deepforest",
    "monsters": [
      "Eldritch Stalker"
    ]
  },
  {
    "kind": "kill",
    "questId": 8069,
    "map": "deepforest",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8070,
    "map": "deepforest",
    "ids": [
      8415
    ]
  },
  {
    "kind": "kill",
    "questId": 8071,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8072,
    "map": "deepforest",
    "ids": [
      8416
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8073,
    "map": "deepforest",
    "monsters": [
      "Creeping Gaze"
    ]
  },
  {
    "kind": "kill",
    "questId": 8074,
    "map": "deepforest",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8075,
    "map": "deepforest",
    "ids": [
      8418
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8076,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "kill",
    "questId": 8077,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "kill",
    "questId": 8078,
    "map": "deepforest",
    "monsters": [
      "Cthulhoid"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8079,
    "map": "deepforest",
    "ids": [
      8419
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 8079,
    "map": "deepforest",
    "ids": [
      8420
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 8080,
    "map": "deepforest",
    "monsters": [
      "Aberrant Horror"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.8the-book",
    category: "Story",
    map: "forestreach",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
