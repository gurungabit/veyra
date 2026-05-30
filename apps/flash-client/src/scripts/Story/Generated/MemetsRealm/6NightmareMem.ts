import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Nightmare Mem",
  "description": "This will finish the Nightmare Mem quest.",
  "tags": [
    "story",
    "quest",
    "memets-realm",
    "nightmare-mem",
    "memets",
    "realm",
    "6nightmare",
    "mem"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4143,
    "map": "Nightmare",
    "monsters": [
      "Bobble Clown"
    ]
  },
  {
    "kind": "kill",
    "questId": 4144,
    "map": "Nightmare",
    "monsters": [
      "Crazy Clown"
    ]
  },
  {
    "kind": "kill",
    "questId": 4145,
    "map": "Nightmare",
    "monsters": [
      "Castle Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 4146,
    "map": "Nightmare",
    "monsters": [
      "Wrasp",
      "Sneak"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4147,
    "map": "Nightmare",
    "ids": [
      3262
    ]
  },
  {
    "kind": "kill",
    "questId": 4148,
    "map": "Nightmare",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 4149,
    "map": "Nightmare",
    "monsters": [
      "Needle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4150,
    "map": "Nightmare",
    "monsters": [
      "Broken Toy"
    ]
  },
  {
    "kind": "kill",
    "questId": 4151,
    "map": "Nightmare",
    "monsters": [
      "Unearthed Skeleton",
      "Rotfeeder Worm"
    ]
  },
  {
    "kind": "kill",
    "questId": 4152,
    "map": "Nightmare",
    "monsters": [
      "Fire Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 4153,
    "map": "Nightmare",
    "monsters": [
      "Flame Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 4154,
    "map": "Nightmare",
    "monsters": [
      "Anglerfish",
      "Deep Dweller",
      "Merdraconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 4155,
    "map": "Nightmare",
    "monsters": [
      "Unearthed Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 4156,
    "map": "Nightmare",
    "monsters": [
      "Nothing"
    ]
  },
  {
    "kind": "kill",
    "questId": 4157,
    "map": "Nightmare",
    "monsters": [
      "Devourax"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.memets-realm.6nightmare-mem",
    category: "Story",
    map: "Nightmare",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
