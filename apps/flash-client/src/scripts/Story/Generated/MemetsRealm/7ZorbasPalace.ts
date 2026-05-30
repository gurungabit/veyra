import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Zorbas Palace",
  "description": "This will finish the Zorbas Palace quest.",
  "tags": [
    "story",
    "quest",
    "memets-realm",
    "zorbas-palace",
    "memets",
    "realm",
    "7zorbas",
    "palace"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 7474,
    "map": "zorbaspalace",
    "monsters": [
      "Cactus Creeper"
    ]
  },
  {
    "kind": "kill",
    "questId": 7475,
    "map": "zorbaspalace",
    "monsters": [
      "Oasis Monkey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7476,
    "map": "zorbaspalace",
    "ids": [
      7301
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 7477,
    "map": "zorbaspalace",
    "monsters": [
      "Palace Enforcer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7478,
    "map": "zorbaspalace",
    "monsters": [
      "Cactus Creeper"
    ]
  },
  {
    "kind": "kill",
    "questId": 7479,
    "map": "zorbaspalace",
    "monsters": [
      "Thwompcat"
    ]
  },
  {
    "kind": "kill",
    "questId": 7480,
    "map": "zorbaspalace",
    "monsters": [
      "Oasis Monkey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7481,
    "map": "zorbaspalace",
    "monsters": [
      "Palace Enforcer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7476,
    "map": "zorbaspalace",
    "ids": [
      7304
    ]
  },
  {
    "kind": "kill",
    "questId": 7481,
    "map": "zorbaspalace",
    "monsters": [
      "Lem-or"
    ]
  },
  {
    "kind": "kill",
    "questId": 7481,
    "map": "zorbaspalace",
    "monsters": [
      "Zorba the Bakk"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.memets-realm.7zorbas-palace",
    category: "Story",
    map: "zorbaspalace",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
