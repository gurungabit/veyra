import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Yokai) Kitsune",
  "description": "This will finish the Kitsune quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "yokai",
    "kitsune",
    "lordsof",
    "chaos",
    "04kitsune"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 380,
    "map": "yokaiboat",
    "ids": [
      64
    ]
  },
  {
    "kind": "chain",
    "questId": 380
  },
  {
    "kind": "plan",
    "questId": 381,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaiboat",
        "cell": "r4",
        "pad": "Spawn",
        "monster": "*",
        "item": "Sail Permit"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 382,
    "map": "dragonkoi",
    "monsters": [
      "Ryoku"
    ]
  },
  {
    "kind": "plan",
    "questId": 402,
    "actions": [
      {
        "kind": "hunt",
        "map": "hachiko",
        "monster": "Samurai Nopperabo",
        "item": "Samurai Questioned",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "hachiko",
        "monster": "Ninja Nopperabo",
        "item": "Ninja Questioned",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 403,
    "actions": [
      {
        "kind": "hunt",
        "map": "hachiko",
        "cell": "Ox",
        "pad": "Center",
        "monster": "Samurai Nopperabo",
        "item": "Note from DT"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 405,
    "actions": [
      {
        "kind": "hunt",
        "map": "hachiko",
        "cell": "Tiger",
        "pad": "Center",
        "monster": "Samurai Nopperabo",
        "item": "Rat-Ox-Tiger Piece"
      },
      {
        "kind": "hunt",
        "map": "hachiko",
        "cell": "Snake",
        "pad": "Center",
        "monster": "Ninja Nopperabo",
        "item": "Rabbit-Dragon-Snake piece"
      },
      {
        "kind": "hunt",
        "map": "hachiko",
        "cell": "Horse",
        "pad": "Center",
        "monster": "Samurai Nopperabo",
        "item": "Horse-Sheep-Monkey piece"
      },
      {
        "kind": "hunt",
        "map": "hachiko",
        "cell": "Pig",
        "pad": "Center",
        "monster": "Ninja Nopperabo",
        "item": "Rooster-Dog-Pig Piece"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 406,
    "map": "hachiko",
    "monsters": [
      "Dai Tengu"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 466,
    "map": "bamboo",
    "ids": [
      90
    ]
  },
  {
    "kind": "kill",
    "questId": 467,
    "map": "bamboo",
    "monsters": [
      "Tanuki",
      "Tanuki"
    ]
  },
  {
    "kind": "kill",
    "questId": 468,
    "map": "bamboo",
    "monsters": [
      "SoulTaker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 469,
    "map": "junkyard",
    "ids": [
      91
    ]
  },
  {
    "kind": "plan",
    "questId": 470,
    "actions": [
      {
        "kind": "hunt",
        "map": "Junkyard",
        "monster": 1,
        "item": "Wild Kara-Kasa",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Junkyard",
        "monster": 2,
        "item": "Wild Bakezouri",
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "Junkyard",
        "monster": 4,
        "item": "Wild Bura-Bura",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "Junkyard",
        "monster": 3,
        "item": "Wild Biwa-Bokuboku",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Junkyard",
        "monster": 12,
        "item": "Wild Koto-Furunushi",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 471,
    "map": "junkyard",
    "monsters": [
      "Onibaba"
    ]
  },
  {
    "kind": "kill",
    "questId": 473,
    "map": "yokairiver",
    "monsters": [
      "Funa-Yurei",
      "Funa-Yurei",
      "Funa-Yurei"
    ]
  },
  {
    "kind": "plan",
    "questId": 474,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokairiver",
        "cell": "r4",
        "pad": "Left",
        "monster": "Kappa Ninja",
        "item": "Dried Nori Leaf",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "yokairiver",
        "cell": "r4",
        "pad": "Left",
        "monster": "Kappa Ninja",
        "item": "Sumeshi Bundle",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "yokairiver",
        "cell": "r4",
        "pad": "Left",
        "monster": "Kappa Ninja",
        "item": "Fresh Cucumber",
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "yokairiver",
        "id": 92,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 476,
    "map": "yokairiver",
    "monsters": [
      "Nure Onna"
    ]
  },
  {
    "kind": "kill",
    "questId": 477,
    "map": "yokaigrave",
    "monsters": [
      "Skello Kitty"
    ]
  },
  {
    "kind": "kill",
    "questId": 478,
    "map": "yokaigrave",
    "monsters": [
      "Ninja Nopperabo",
      "Samurai Nopperabo"
    ]
  },
  {
    "kind": "kill",
    "questId": 479,
    "map": "yokaigrave",
    "monsters": [
      "Neko Mata"
    ]
  },
  {
    "kind": "kill",
    "questId": 481,
    "map": "odokuro",
    "monsters": [
      "O-dokuro"
    ]
  },
  {
    "kind": "kill",
    "questId": 484,
    "map": "yokaiwar",
    "monsters": [
      "O-Dokuro's Head"
    ]
  },
  {
    "kind": "kill",
    "questId": 488,
    "map": "kitsune",
    "monsters": [
      "kitsune"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.04kitsune-yokai",
    category: "Story",
    map: "yokaiboat",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
