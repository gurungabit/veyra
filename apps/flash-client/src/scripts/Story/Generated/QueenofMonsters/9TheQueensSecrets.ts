import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "The Queen's Secrets",
  "description": "This will finish the The Queen's Secrets quest.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "the-queens-secrets",
    "queenof",
    "monsters",
    "9the",
    "queens",
    "secrets"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8083,
    "map": "transformation",
    "monsters": [
      "Monstrite"
    ]
  },
  {
    "kind": "kill",
    "questId": 8084,
    "map": "transformation",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "kill",
    "questId": 8085,
    "map": "transformation",
    "monsters": [
      "Tentastrike"
    ]
  },
  {
    "kind": "kill",
    "questId": 8086,
    "map": "transformation",
    "monsters": [
      "Tentaflame"
    ]
  },
  {
    "kind": "kill",
    "questId": 8087,
    "map": "transformation",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "plan",
    "questId": 8088,
    "actions": [
      {
        "kind": "hunt",
        "map": "transformation",
        "monster": "Monstrite",
        "item": "Mortar Stone"
      },
      {
        "kind": "hunt",
        "map": "transformation",
        "monster": "Monstrite",
        "item": "Pestle Stone"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8089,
    "map": "transformation",
    "ids": [
      8435
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8089,
    "map": "transformation",
    "ids": [
      8436
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8089,
    "map": "transformation",
    "ids": [
      8437
    ]
  },
  {
    "kind": "kill",
    "questId": 8090,
    "map": "transformation",
    "monsters": [
      "Deep Tunneler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8091,
    "map": "transformation",
    "monsters": [
      "Monstrite"
    ]
  },
  {
    "kind": "kill",
    "questId": 8092,
    "map": "transformation",
    "monsters": [
      "Tentastrike",
      "Deep Tunneler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8093,
    "map": "transformation",
    "monsters": [
      "Eldritch Abomination"
    ]
  },
  {
    "kind": "kill",
    "questId": 8094,
    "map": "transformation",
    "monsters": [
      "Queen of Monsters"
    ]
  },
  {
    "kind": "kill",
    "questId": 8096,
    "map": "downbelow",
    "monsters": [
      "Earthwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 8097,
    "map": "downbelow",
    "monsters": [
      "Rumbling Rubble"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8098,
    "map": "downbelow",
    "ids": [
      8491
    ]
  },
  {
    "kind": "kill",
    "questId": 8098,
    "map": "downbelow",
    "monsters": [
      "Monstrous Flame"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8099,
    "map": "downbelow",
    "ids": [
      8492
    ]
  },
  {
    "kind": "kill",
    "questId": 8099,
    "map": "downbelow",
    "monsters": [
      "Earthwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 8100,
    "map": "downbelow",
    "monsters": [
      "Tentarachnid"
    ]
  },
  {
    "kind": "kill",
    "questId": 8101,
    "map": "downbelow",
    "monsters": [
      "Creeping Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8102,
    "map": "downbelow",
    "ids": [
      8493
    ]
  },
  {
    "kind": "kill",
    "questId": 8102,
    "map": "downbelow",
    "monsters": [
      "Creeping Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 8103,
    "map": "downbelow",
    "monsters": [
      "Guardian Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8104,
    "map": "downbelow",
    "ids": [
      8494
    ]
  },
  {
    "kind": "kill",
    "questId": 8104,
    "map": "downbelow",
    "monsters": [
      "Living Rage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8105,
    "map": "downbelow",
    "ids": [
      8495
    ]
  },
  {
    "kind": "kill",
    "questId": 8105,
    "map": "downbelow",
    "monsters": [
      "Living Rage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8106,
    "map": "downbelow",
    "monsters": [
      "Anka"
    ]
  },
  {
    "kind": "plan",
    "questId": 8107,
    "actions": [
      {
        "kind": "hunt",
        "map": "downbelow",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Earthwyrm",
        "item": "Anka's Followers Slain",
        "quantity": 1000,
        "isTemp": false
      },
      {
        "kind": "hunt",
        "map": "downbelow",
        "monster": "Anka",
        "item": "Soul of Vengeance",
        "quantity": 25,
        "isTemp": false
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.9the-queens-secrets",
    category: "Story",
    map: "transformation",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
