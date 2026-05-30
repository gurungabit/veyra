import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Moon Lab",
  "description": "This will finish the Moon Lab quest.",
  "tags": [
    "story",
    "quest",
    "memets-realm",
    "moon-lab",
    "memets",
    "realm",
    "3moon",
    "lab"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 6091,
    "map": "moonlab",
    "ids": [
      5523
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6092,
    "map": "moonlab",
    "ids": [
      5524
    ]
  },
  {
    "kind": "kill",
    "questId": 6093,
    "map": "moonlab",
    "monsters": [
      "Infected Rodent"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6094,
    "map": "moonlab",
    "ids": [
      5527
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6094,
    "map": "moonlab",
    "monsters": [
      "Chlorine Trifluoride"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6095,
    "map": "moonlab",
    "ids": [
      5525
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 6095,
    "map": "moonlab",
    "ids": [
      5526
    ]
  },
  {
    "kind": "kill",
    "questId": 6095,
    "map": "moonlab",
    "monsters": [
      "Slime Mold"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6096,
    "map": "moonlab",
    "ids": [
      5528
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 6096,
    "map": "moonlab",
    "monsters": [
      "Engorged Slime Mold"
    ]
  },
  {
    "kind": "kill",
    "questId": 6097,
    "map": "moonlab",
    "monsters": [
      "Infected Cat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6098,
    "map": "moonlab",
    "ids": [
      5529,
      5530
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6099,
    "map": "moonlab",
    "ids": [
      5531
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 6099,
    "map": "moonlab",
    "monsters": [
      "Mutated Slime Mold"
    ]
  },
  {
    "kind": "kill",
    "questId": 6100,
    "map": "moonlab",
    "monsters": [
      "Infected Scientist",
      "Infected Scientist"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6101,
    "map": "moonlab",
    "ids": [
      5532,
      5533
    ]
  },
  {
    "kind": "kill",
    "questId": 6102,
    "map": "moonlab",
    "monsters": [
      "Escaped Experiment"
    ]
  },
  {
    "kind": "kill",
    "questId": 6103,
    "map": "moonlab",
    "monsters": [
      "Nightmare Zorbak"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.memets-realm.3moon-lab",
    category: "Story",
    map: "moonlab",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
