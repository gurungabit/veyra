import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Void Refuge Story",
  "description": "This script will complete the storyline in /voidrefuge",
  "tags": [
    "story",
    "voidrefuge",
    "refuge",
    "nation",
    "nulgath",
    "ana di carcano",
    "gravelyn",
    "void"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 9522,
    "map": "voidrefuge",
    "monsters": [
      "Lightguard Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 9523,
    "map": "voidrefuge",
    "monsters": [
      "Paladin Ascendant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9524,
    "map": "voidrefuge",
    "ids": [
      12572
    ]
  },
  {
    "kind": "kill",
    "questId": 9524,
    "map": "voidrefuge",
    "monsters": [
      "Nation Caster"
    ]
  },
  {
    "kind": "kill",
    "questId": 9525,
    "map": "voidrefuge",
    "monsters": [
      "Nation Outrider"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9526,
    "map": "voidrefuge",
    "ids": [
      12573
    ]
  },
  {
    "kind": "kill",
    "questId": 9526,
    "map": "voidrefuge",
    "monsters": [
      "Lightguard Paladin",
      "Paladin Ascendant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9527,
    "map": "voidrefuge",
    "ids": [
      12574
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 9527,
    "map": "voidrefuge",
    "monsters": [
      "Nation Caster"
    ]
  },
  {
    "kind": "kill",
    "questId": 9528,
    "map": "voidrefuge",
    "monsters": [
      "Nation Outrider"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9529,
    "map": "voidrefuge",
    "ids": [
      12575,
      12576,
      12577
    ]
  },
  {
    "kind": "kill",
    "questId": 9530,
    "map": "voidrefuge",
    "monsters": [
      "Paladin Ascendant",
      "Nation Outrider"
    ]
  },
  {
    "kind": "kill",
    "questId": 9531,
    "map": "voidrefuge",
    "monsters": [
      "Carnage"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.void-refuge",
    category: "Story",
    map: "voidrefuge",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
