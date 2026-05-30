import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "The Reshaper",
  "description": "This will finish the The Reshaper quest.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "the-reshaper",
    "queenof",
    "monsters",
    "7the",
    "reshaper"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5849,
    "map": "Pilgrimage",
    "monsters": [
      "SpiderWing",
      "Urstrix"
    ]
  },
  {
    "kind": "kill",
    "questId": 5850,
    "map": "Pilgrimage",
    "monsters": [
      "Ravenous Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 5851,
    "map": "Pilgrimage",
    "monsters": [
      "Extrikiti"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5852,
    "map": "Pilgrimage",
    "ids": [
      5289
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5852,
    "map": "Pilgrimage",
    "ids": [
      5288
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 5852,
    "map": "Pilgrimage",
    "monsters": [
      "Extrikiti",
      "Extrikiti"
    ]
  },
  {
    "kind": "plan",
    "questId": 5853,
    "actions": [
      {
        "kind": "mapItem",
        "map": "pilgrimage",
        "id": 5290,
        "quantity": 6
      },
      {
        "kind": "mapItem",
        "map": "pilgrimage",
        "id": 5291
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5854,
    "map": "Pilgrimage",
    "ids": [
      5292
    ]
  },
  {
    "kind": "kill",
    "questId": 5854,
    "map": "Pilgrimage",
    "monsters": [
      "Ravenous Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 5855,
    "map": "Pilgrimage",
    "monsters": [
      "Lucky"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6276,
    "map": "guardiantree",
    "ids": [
      5769
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6276,
    "map": "guardiantree",
    "monsters": [
      "Blossoming Treeant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6277,
    "map": "guardiantree",
    "ids": [
      5776
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 6277,
    "map": "guardiantree",
    "ids": [
      5770
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6278,
    "map": "guardiantree",
    "monsters": [
      "Corrupted Zard"
    ]
  },
  {
    "kind": "plan",
    "questId": 6279,
    "actions": [
      {
        "kind": "hunt",
        "map": "guardiantree",
        "cell": "r2a",
        "pad": "Bottom",
        "monster": "Seed Spitter",
        "item": "Perfect Seed"
      },
      {
        "kind": "mapItem",
        "map": "guardiantree",
        "id": 5771
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6280,
    "map": "guardiantree",
    "ids": [
      5772
    ]
  },
  {
    "kind": "kill",
    "questId": 6281,
    "map": "guardiantree",
    "monsters": [
      "Blossoming Treeant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6282,
    "map": "guardiantree",
    "ids": [
      5773
    ]
  },
  {
    "kind": "kill",
    "questId": 6282,
    "map": "guardiantree",
    "monsters": [
      "Pollen Cloud"
    ]
  },
  {
    "kind": "plan",
    "questId": 6283,
    "actions": [
      {
        "kind": "hunt",
        "map": "guardiantree",
        "cell": "r8",
        "pad": "Left",
        "monster": "Seed Spitter",
        "item": "Life Energy",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6284,
    "map": "guardiantree",
    "ids": [
      5774
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6285,
    "map": "guardiantree",
    "ids": [
      5775
    ],
    "quantity": 2
  },
  {
    "kind": "kill",
    "questId": 6285,
    "map": "guardiantree",
    "monsters": [
      "Myconid"
    ]
  },
  {
    "kind": "plan",
    "questId": 6286,
    "actions": [
      {
        "kind": "hunt",
        "map": "guardiantree",
        "cell": "r12",
        "pad": "Left",
        "monster": "Terrane"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5856,
    "map": "TwistedCavern",
    "ids": [
      5293
    ]
  },
  {
    "kind": "kill",
    "questId": 5856,
    "map": "TwistedCavern",
    "monsters": [
      "Extrikiti"
    ]
  },
  {
    "kind": "kill",
    "questId": 5857,
    "map": "TwistedCavern",
    "monsters": [
      "Infesting Swarm"
    ]
  },
  {
    "kind": "plan",
    "questId": 5858,
    "actions": [
      {
        "kind": "hunt",
        "map": "TwistedCavern",
        "monster": "Fungal Lord",
        "item": "Fungal Lord Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "TwistedCavern",
        "monster": "Seed Stalker",
        "item": "Seed Stalker Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "TwistedCavern",
        "monster": "Seed Stalker",
        "item": "Scrap of Brown Cloth"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5859,
    "map": "TwistedCavern",
    "monsters": [
      "Seed Stalker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5860,
    "map": "TwistedCavern",
    "ids": [
      5294
    ]
  },
  {
    "kind": "kill",
    "questId": 5860,
    "map": "TwistedCavern",
    "monsters": [
      "SpiderWing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5861,
    "map": "TwistedCavern",
    "ids": [
      5295
    ],
    "quantity": 6
  },
  {
    "kind": "plan",
    "questId": 5862,
    "actions": [
      {
        "kind": "hunt",
        "map": "TwistedCavern",
        "monster": "Urstrix",
        "item": "Urstrix Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "TwistedCavern",
        "monster": "Fungal Lord",
        "item": "Fungal Lord Slain",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5863,
    "map": "TwistedCavern",
    "monsters": [
      "Wall of Vines"
    ]
  },
  {
    "kind": "kill",
    "questId": 5864,
    "map": "TwistedCavern",
    "monsters": [
      "Lore Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 5866,
    "map": "BrokenWoods",
    "monsters": [
      "Urstrix",
      "SpiderWing"
    ]
  },
  {
    "kind": "plan",
    "questId": 5867,
    "actions": [
      {
        "kind": "hunt",
        "map": "brightoak",
        "monster": "Hootbear",
        "item": "Hootbear Feathers",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "BrokenWoods",
        "monster": "Urstrix",
        "item": "Urstrix Feathers",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "pines",
        "monster": "LeatherWing",
        "item": "LeatherWing Claws",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "BrokenWoods",
        "monster": "SpiderWing",
        "item": "SpiderWing Claws",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5868,
    "map": "BrokenWoods",
    "ids": [
      5296
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 5868,
    "map": "BrokenWoods",
    "ids": [
      5297
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5868,
    "map": "BrokenWoods",
    "monsters": [
      "Fungal Lord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5869,
    "map": "BrokenWoods",
    "monsters": [
      "Extrikiti"
    ]
  },
  {
    "kind": "kill",
    "questId": 5870,
    "map": "BrokenWoods",
    "monsters": [
      "Urstrix",
      "SpiderWing"
    ]
  },
  {
    "kind": "kill",
    "questId": 5871,
    "map": "charredpath",
    "monsters": [
      "Ravenous Parasite",
      "Plague Spreader"
    ]
  },
  {
    "kind": "plan",
    "questId": 5872,
    "actions": [
      {
        "kind": "buy",
        "map": "embersea",
        "shopId": 1100,
        "item": 1749,
        "quantity": 25
      },
      {
        "kind": "hunt",
        "map": "Arcangrove",
        "monster": "Seed Spitter",
        "item": "Uncorrupted Spitter Seeds",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "poisonforest",
        "monster": "Treeant",
        "item": "Treeant Berries",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5873,
    "map": "brokenwoods",
    "monsters": [
      "Hive"
    ]
  },
  {
    "kind": "plan",
    "questId": 5874,
    "actions": [
      {
        "kind": "hunt",
        "map": "Kolyaban",
        "monster": "Poisonous Darkblood",
        "item": "Acolyte's Medallion",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5876,
    "map": "Kolyaban",
    "monsters": [
      "Twisted Aria"
    ]
  },
  {
    "kind": "kill",
    "questId": 5877,
    "map": "Kolyaban",
    "monsters": [
      "Kolyaban"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.7the-reshaper",
    category: "Story",
    map: "Pilgrimage",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
