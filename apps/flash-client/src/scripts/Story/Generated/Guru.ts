import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Guru Story",
  "description": "This will finish the Guru Story.",
  "tags": [
    "story",
    "quest",
    "guru"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 47,
    "map": "Guru",
    "ids": [
      20
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 48,
    "map": "Guru",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 49,
    "map": "Guru",
    "monsters": [
      "LeatherWing"
    ]
  },
  {
    "kind": "plan",
    "questId": 50,
    "actions": []
  },
  {
    "kind": "kill",
    "questId": 51,
    "map": "River",
    "monsters": [
      "River Fishman"
    ]
  },
  {
    "kind": "kill",
    "questId": 52,
    "map": "Guru",
    "monsters": [
      "Wisteria"
    ]
  },
  {
    "kind": "kill",
    "questId": 53,
    "map": "Guru",
    "monsters": [
      "Wisteria"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.guru",
    category: "Story",
    map: "Guru",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
