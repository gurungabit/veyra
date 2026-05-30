import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Shadow Slayer",
  "description": "This will finish the Shadow Slayer Story.",
  "tags": [
    "story",
    "quest",
    "shadow-slayer",
    "shadow",
    "slayer",
    "k"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 8829,
    "actions": [
      {
        "kind": "hunt",
        "map": "arcangrove",
        "monster": "Gorillaphant",
        "item": "Gorillaphant Ear"
      },
      {
        "kind": "hunt",
        "map": "boxes",
        "monster": "Sneevil",
        "item": "Sneevil Ear"
      },
      {
        "kind": "hunt",
        "map": "terrarium",
        "monster": "Dustbunny of Doom",
        "item": "Dustbunny of Doom Ear"
      },
      {
        "kind": "hunt",
        "map": "uppercity",
        "monster": "Drow Assassin",
        "item": "Drow Ear"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8830,
    "actions": [
      {
        "kind": "hunt",
        "map": "Maxius",
        "monster": "Ghoul Minion",
        "item": "Crimson BoneLord Tome"
      },
      {
        "kind": "packet",
        "packet": "%xt%zm%updateQuest%1%8060%"
      },
      {
        "kind": "hunt",
        "map": "backroom",
        "monster": "Book Wyrm",
        "item": "Book of Monsters Mace"
      },
      {
        "kind": "buy",
        "map": "chronohub",
        "shopId": 2024,
        "item": "Chronomancer's Opus"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8831,
    "map": "newfinale",
    "monsters": [
      "Shadow Slayer"
    ]
  },
  {
    "kind": "plan",
    "questId": 8832,
    "actions": [
      {
        "kind": "hunt",
        "map": "dragonchallenge",
        "monster": "Greenguard Dragon",
        "item": "Greenguard Dragon Ribs"
      },
      {
        "kind": "hunt",
        "map": "battlefowl",
        "monster": "ChickenCow",
        "item": "Chickencow Wings"
      },
      {
        "kind": "hunt",
        "map": "pirates",
        "monster": "Shark Bait",
        "item": "Shark Bait Fillet"
      },
      {
        "kind": "hunt",
        "map": "greenguardwest",
        "cell": "West12",
        "pad": "Up",
        "monster": "Big Bad Boar",
        "item": "Big Bad Boar Sausage"
      },
      {
        "kind": "hunt",
        "map": "trunk",
        "monster": "GreenGuard Basilisk",
        "item": "GreenGuard Basilisk Tail"
      },
      {
        "kind": "hunt",
        "map": "Well",
        "monster": "Gell Oh No",
        "item": "Gell Oh No Jello"
      },
      {
        "kind": "hunt",
        "map": "deathgazer",
        "monster": "Deathgazer",
        "item": "Deathgazer Takoyaki"
      },
      {
        "kind": "hunt",
        "map": "river",
        "monster": "Kuro",
        "item": "Kuro Geso Karaage"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8833,
    "actions": [
      {
        "kind": "buy",
        "map": "embersea",
        "shopId": 1100,
        "item": 1749,
        "quantity": 25
      },
      {
        "kind": "buy",
        "map": "embersea",
        "shopId": 1100,
        "item": 5572,
        "quantity": 25
      },
      {
        "kind": "hunt",
        "map": "cleric",
        "monster": "Chaos Dragon",
        "item": "Medicinal Unguent"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8834,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 717,
    "map": "giant",
    "ids": [
      119
    ]
  },
  {
    "kind": "kill",
    "questId": 718,
    "map": "giant",
    "monsters": [
      "Red Ant"
    ]
  },
  {
    "kind": "kill",
    "questId": 719,
    "map": "giant",
    "monsters": [
      "Dust Bunny"
    ]
  },
  {
    "kind": "kill",
    "questId": 720,
    "map": "giant",
    "monsters": [
      "Giant Cat"
    ]
  },
  {
    "kind": "kill",
    "questId": 721,
    "map": "smuurvil",
    "monsters": [
      "Smuurvil"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 722,
    "map": "smuurvil",
    "ids": [
      122
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 723,
    "map": "smuurvil",
    "monsters": [
      "Smuurvil"
    ]
  },
  {
    "kind": "kill",
    "questId": 724,
    "map": "smuurvil",
    "monsters": [
      "Smuurvilette"
    ]
  },
  {
    "kind": "kill",
    "questId": 725,
    "map": "smuurvil",
    "monsters": [
      "Papa Smuurvil"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 737,
    "map": "table",
    "ids": [
      123,
      124,
      125,
      126,
      127,
      128
    ]
  },
  {
    "kind": "chain",
    "questId": 743
  },
  {
    "kind": "kill",
    "questId": 747,
    "map": "andre",
    "monsters": [
      "Giant Foot"
    ]
  },
  {
    "kind": "kill",
    "questId": 748,
    "map": "andre",
    "monsters": [
      "Giant Flea"
    ]
  },
  {
    "kind": "kill",
    "questId": 749,
    "map": "andre",
    "monsters": [
      "Giant Necklace"
    ]
  },
  {
    "kind": "chain",
    "questId": 746
  },
  {
    "kind": "plan",
    "questId": 741,
    "actions": [
      {
        "kind": "hunt",
        "map": "table",
        "monster": "Roach",
        "item": "Gold Roach Leg",
        "quantity": 10
      }
    ],
    "rewardId": 5401
  },
  {
    "kind": "kill",
    "questId": 8834,
    "map": "elemental",
    "monsters": [
      "Tree of Destiny"
    ]
  },
  {
    "kind": "plan",
    "questId": 8266,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 1075,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomwood",
        "monster": "Doomwood Ectomancer",
        "item": "Dried Wasabi Powder",
        "quantity": 4
      },
      {
        "kind": "mapItem",
        "map": "lightguard",
        "id": 428,
        "quantity": 1
      },
      {
        "kind": "join",
        "map": "lightguard"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5944,
    "actions": []
  },
  {
    "kind": "chain",
    "questId": 8266
  },
  {
    "kind": "plan",
    "questId": 8835,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 8263,
    "actions": [
      {
        "kind": "hunt",
        "map": "cellar",
        "monster": "GreenRat",
        "item": "Green Mystery Meat",
        "quantity": 10,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8265,
    "actions": [
      {
        "kind": "hunt",
        "map": "odokuro",
        "cell": "Boss",
        "pad": "Right",
        "monster": "O-dokuro",
        "item": "Bone Hurt Juice",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 8835
  },
  {
    "kind": "kill",
    "questId": 9837,
    "map": "badmoon",
    "monsters": [
      "Dire Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 9838,
    "map": "badmoon",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9839,
    "map": "badmoon",
    "ids": [
      13445,
      13446,
      13447
    ]
  },
  {
    "kind": "kill",
    "questId": 9841,
    "map": "badmoon",
    "monsters": [
      "Hunter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9842,
    "map": "badmoon",
    "ids": [
      13448
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 9842,
    "map": "badmoon",
    "ids": [
      13449
    ]
  },
  {
    "kind": "kill",
    "questId": 9842,
    "map": "badmoon",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "kill",
    "questId": 9843,
    "map": "badmoon",
    "monsters": [
      "Tindalion Hound"
    ]
  },
  {
    "kind": "kill",
    "questId": 9844,
    "map": "badmoon",
    "monsters": [
      "Hunter"
    ]
  },
  {
    "kind": "kill",
    "questId": 9845,
    "map": "badmoon",
    "monsters": [
      "Twisted Hunter"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadow-slayer-k",
    category: "Story",
    map: "arcangrove",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
