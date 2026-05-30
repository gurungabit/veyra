import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Aranx Quests",
  "description": "This script will do all quests of aranx in /darkdimension, /icedimension, /Ivoliss, /Pocketdimension and /sanddimension",
  "tags": [
    "story",
    "aranx",
    "darkdimension",
    "icedimension",
    "ivoliss",
    "pocketdimension",
    "sanddimension",
    "quests"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6496,
    "map": "pocketdimension",
    "monsters": [
      "Nothing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6497,
    "map": "pocketdimension",
    "ids": [
      5988
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 6498,
    "map": "icedimension",
    "ids": [
      5989
    ]
  },
  {
    "kind": "kill",
    "questId": 6498,
    "map": "icedimension",
    "monsters": [
      "Ice Spitter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6499,
    "map": "icedimension",
    "ids": [
      5990
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6499,
    "map": "icedimension",
    "monsters": [
      "Ice Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6500,
    "map": "sanddimension",
    "ids": [
      5991
    ]
  },
  {
    "kind": "kill",
    "questId": 6500,
    "map": "sanddimension",
    "monsters": [
      "Lotus Spider"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6501,
    "map": "sanddimension",
    "ids": [
      5992
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6501,
    "map": "sanddimension",
    "monsters": [
      "Lotus Spider"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6502,
    "map": "darkdimension",
    "ids": [
      5993
    ]
  },
  {
    "kind": "kill",
    "questId": 6502,
    "map": "darkdimension",
    "monsters": [
      "Void Phoenix"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6503,
    "map": "darkdimension",
    "ids": [
      5994
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6503,
    "map": "darkdimension",
    "monsters": [
      "Void Phoenix"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6504,
    "map": "ivoliss",
    "ids": [
      5995
    ]
  },
  {
    "kind": "kill",
    "questId": 6505,
    "map": "ivoliss",
    "monsters": [
      "ivoliss"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6506,
    "map": "ivoliss",
    "ids": [
      5996
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6506,
    "map": "ivoliss",
    "ids": [
      5998
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6507,
    "map": "ivoliss",
    "ids": [
      5997
    ]
  },
  {
    "kind": "kill",
    "questId": 6508,
    "map": "ivoliss",
    "monsters": [
      "Arthelyn"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.aranx-quests",
    category: "Story",
    map: "pocketdimension",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
