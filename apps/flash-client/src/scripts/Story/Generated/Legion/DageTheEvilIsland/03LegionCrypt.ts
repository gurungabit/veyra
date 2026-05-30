import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Legion Crypt",
  "description": "This will finish the Legion Crypt quest.",
  "tags": [
    "story",
    "quest",
    "legion",
    "dage-the-evil-island",
    "legion-crypt",
    "dage",
    "the",
    "evil",
    "island",
    "03legion",
    "crypt"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4186,
    "map": "LegionCrypt",
    "monsters": [
      "Gravedigger"
    ]
  },
  {
    "kind": "kill",
    "questId": 4187,
    "map": "LegionCrypt",
    "monsters": [
      "Undead Infantry"
    ]
  },
  {
    "kind": "kill",
    "questId": 4188,
    "map": "LegionCrypt",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4189,
    "map": "LegionCrypt",
    "ids": [
      3295
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4189,
    "map": "LegionCrypt",
    "monsters": [
      "Gravedigger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4190,
    "map": "LegionCrypt",
    "ids": [
      3296
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4190,
    "map": "LegionCrypt",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4191,
    "map": "LegionCrypt",
    "ids": [
      3297
    ]
  },
  {
    "kind": "kill",
    "questId": 4192,
    "map": "LegionCrypt",
    "monsters": [
      "Gravedigger",
      "Legion Doomknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4193,
    "map": "LegionCrypt",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4194,
    "map": "LegionCrypt",
    "monsters": [
      "Vincenzo"
    ]
  },
  {
    "kind": "kill",
    "questId": 4195,
    "map": "LegionCrypt",
    "monsters": [
      "Brutus"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dage-the-evil-island.03legion-crypt",
    category: "Story",
    map: "LegionCrypt",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
