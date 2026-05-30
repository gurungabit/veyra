import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Aria's Greenhouse Story",
  "description": "This will finish the Aria's and Kylokos' Greenhouse quests.",
  "tags": [
    "story",
    "quest",
    "aria",
    "greenhouse",
    "nature",
    "water",
    "fire",
    "energy",
    "ariagreenhouse",
    "starfest",
    "star festival",
    "kylokos"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 10179,
    "map": "faerie",
    "ids": [
      14392,
      14393
    ]
  },
  {
    "kind": "kill",
    "questId": 10180,
    "map": "pines",
    "monsters": [
      "Red Shell Turtle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10181,
    "map": "cloister",
    "ids": [
      14394
    ]
  },
  {
    "kind": "kill",
    "questId": 10181,
    "map": "cloister",
    "monsters": [
      "Karasu"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10182,
    "map": "darkoviaforest",
    "ids": [
      14395
    ]
  },
  {
    "kind": "kill",
    "questId": 10183,
    "map": "northlands",
    "monsters": [
      "Snow Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10184,
    "map": "deleuzetundra",
    "ids": [
      14396,
      14397
    ]
  },
  {
    "kind": "kill",
    "questId": 10184,
    "map": "deleuzetundra",
    "monsters": [
      "Empty Creature"
    ]
  },
  {
    "kind": "kill",
    "questId": 10185,
    "map": "yokaitreasure",
    "monsters": [
      "Quicksilver"
    ]
  },
  {
    "kind": "kill",
    "questId": 10186,
    "map": "hakuwar",
    "monsters": [
      "Zakhvatchik"
    ]
  },
  {
    "kind": "kill",
    "questId": 10187,
    "map": "yokairealm",
    "monsters": [
      "Mikoto Kukol'nyy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10188,
    "map": "vivaldicavern",
    "ids": [
      14398
    ]
  },
  {
    "kind": "kill",
    "questId": 10189,
    "map": "farm",
    "monsters": [
      "Scarecrow"
    ]
  },
  {
    "kind": "kill",
    "questId": 10190,
    "map": "pirates",
    "monsters": [
      "Fishman Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 10191,
    "map": "natatorium",
    "monsters": [
      "Merdraconian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10192,
    "map": "feverfew",
    "ids": [
      14399
    ]
  },
  {
    "kind": "kill",
    "questId": 10192,
    "map": "feverfew",
    "monsters": [
      "Coral Creeper"
    ]
  },
  {
    "kind": "kill",
    "questId": 10193,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Pirate Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 10194,
    "map": "sunlightzone",
    "monsters": [
      "Blighted Water"
    ]
  },
  {
    "kind": "kill",
    "questId": 10195,
    "map": "midnightzone",
    "monsters": [
      "Venerated Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 10196,
    "map": "abyssalzone",
    "monsters": [
      "Blighted Water"
    ]
  },
  {
    "kind": "chain",
    "questId": 10198
  },
  {
    "kind": "mapItem",
    "questId": 10203,
    "map": "sinclaircove",
    "ids": [
      14400
    ]
  },
  {
    "kind": "kill",
    "questId": 10204,
    "map": "greendragon",
    "monsters": [
      "Greenguard Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 10205,
    "map": "bludrut2",
    "monsters": [
      "Fire Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 10206,
    "map": "lair",
    "monsters": [
      "Water Draconian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10207,
    "map": "mafic",
    "ids": [
      14402
    ]
  },
  {
    "kind": "kill",
    "questId": 10207,
    "map": "mafic",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "kill",
    "questId": 10208,
    "map": "embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 10209,
    "map": "lavarun",
    "monsters": [
      "Phedra"
    ]
  },
  {
    "kind": "kill",
    "questId": 10210,
    "map": "firewar",
    "monsters": [
      "Uriax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10211,
    "map": "fireplanewar",
    "ids": [
      14403
    ],
    "quantity": 11
  },
  {
    "kind": "kill",
    "questId": 10211,
    "map": "fireplanewar",
    "monsters": [
      "Shadefire Onslaught"
    ]
  },
  {
    "kind": "kill",
    "questId": 10212,
    "map": "wartraining",
    "monsters": [
      "Fire Champion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10213,
    "map": "kingeldfell",
    "ids": [
      14404
    ]
  },
  {
    "kind": "kill",
    "questId": 10214,
    "map": "dwarfhold",
    "monsters": [
      "Chaos Drow"
    ]
  },
  {
    "kind": "kill",
    "questId": 10215,
    "map": "uppercity",
    "monsters": [
      "Drow Assassin"
    ]
  },
  {
    "kind": "kill",
    "questId": 10216,
    "map": "venomvaults",
    "monsters": [
      "Chaonslaught Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10217,
    "map": "stormtemple",
    "ids": [
      14405
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 10217,
    "map": "stormtemple",
    "monsters": [
      "Chaonslaught Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 10218,
    "map": "thunderfang",
    "monsters": [
      "Tonitru"
    ]
  },
  {
    "kind": "kill",
    "questId": 10219,
    "map": "pride",
    "monsters": [
      "Valsarian"
    ]
  },
  {
    "kind": "kill",
    "questId": 10220,
    "map": "balemorale",
    "monsters": [
      "Skye Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 10221,
    "map": "loughshine",
    "monsters": [
      "Energy Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 10222,
    "map": "naoisegrave",
    "monsters": [
      "Volgritian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 10223,
    "map": "terminagrove",
    "ids": [
      14406
    ]
  },
  {
    "kind": "kill",
    "questId": 10309,
    "map": "starfield",
    "monsters": [
      "Nova Seed"
    ]
  },
  {
    "kind": "kill",
    "questId": 10310,
    "map": "hedgemaze",
    "monsters": [
      "Minotaur"
    ]
  },
  {
    "kind": "kill",
    "questId": 10311,
    "map": "fableforest",
    "monsters": [
      "Fire Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 10312,
    "map": "ashray",
    "monsters": [
      "Kitefin Shark Bait"
    ]
  },
  {
    "kind": "kill",
    "questId": 10313,
    "map": "kolyaban",
    "monsters": [
      "Tentacled Darkblood"
    ]
  },
  {
    "kind": "kill",
    "questId": 10314,
    "map": "comet",
    "monsters": [
      "Vaderix"
    ]
  },
  {
    "kind": "kill",
    "questId": 10315,
    "map": "atlaspromenade",
    "monsters": [
      "Atlas Light Magus"
    ]
  },
  {
    "kind": "kill",
    "questId": 10316,
    "map": "victormatsuri",
    "monsters": [
      "Kitsune Himawari"
    ]
  },
  {
    "kind": "kill",
    "questId": 10317,
    "map": "hakuwar",
    "monsters": [
      "Long Kukol'nyy"
    ]
  },
  {
    "kind": "kill",
    "questId": 10318,
    "map": "yokaiportal",
    "monsters": [
      "Kitsune Spirits"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.aria-greenhouse",
    category: "Story",
    map: "faerie",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
