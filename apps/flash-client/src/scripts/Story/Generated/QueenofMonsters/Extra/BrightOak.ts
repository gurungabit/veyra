import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Bright Oak (Extra)",
  "description": "This will finish the Bright Oak quest.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "bright-oak",
    "extra",
    "brightoak",
    "queenof",
    "monsters",
    "bright",
    "oak"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4466,
    "map": "brightoak",
    "monsters": [
      "Bright Treeant"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4659,
    "map": "elfhame",
    "ids": [
      3983
    ]
  },
  {
    "kind": "kill",
    "questId": 4659,
    "map": "elfhame",
    "monsters": [
      "Ruin Stalker"
    ]
  },
  {
    "kind": "plan",
    "questId": 4660,
    "actions": [
      {
        "kind": "buy",
        "map": "sandsea",
        "shopId": 245,
        "item": "Water of Life"
      },
      {
        "kind": "hunt",
        "map": "brightoak",
        "cell": "r2",
        "pad": "Left",
        "monster": "Bright Treeant",
        "item": "Bright Ore",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "brightoak",
        "cell": "r2",
        "pad": "Left",
        "monster": "Wolfwood",
        "item": "Herbal Remedy",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4661,
    "map": "elfhame",
    "monsters": [
      "Blighted Deer "
    ]
  },
  {
    "kind": "plan",
    "questId": 4662,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 820,
    "actions": [
      {
        "kind": "hunt",
        "map": "cloister",
        "monster": "Acornent",
        "item": "Wiggly Worm",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "cloister",
        "monster": "Karasu",
        "item": "MegaMite",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 4662
  },
  {
    "kind": "plan",
    "questId": 4663,
    "actions": [
      {
        "kind": "hunt",
        "map": "elfhame",
        "monster": "Wolfrider",
        "item": "Wolfrider Maimed",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4664,
    "map": "elfhame",
    "monsters": [
      "Ratawampus"
    ]
  },
  {
    "kind": "plan",
    "questId": 4665,
    "actions": [
      {
        "kind": "hunt",
        "map": "elfhame",
        "monster": "Ratawampus",
        "item": "Ratawampus Cleared",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "elfhame",
        "monster": "Ruin Dweller",
        "item": "Ruin Dweller Cleared",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4666,
    "actions": [
      {
        "kind": "hunt",
        "map": "elfhame",
        "cell": "r2",
        "pad": "Left",
        "monster": "Ruin Stalker",
        "item": "Ruin Stalker Contained",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4667,
    "map": "elfhame",
    "ids": [
      3984
    ]
  },
  {
    "kind": "kill",
    "questId": 4668,
    "map": "elfhame",
    "monsters": [
      "Guardian Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 4469,
    "map": "Brightoak",
    "monsters": [
      "Hootbear"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4470,
    "map": "Brightoak",
    "ids": [
      3667
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4470,
    "map": "Brightoak",
    "monsters": [
      "Brightpool Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4467,
    "map": "Brightoak",
    "ids": [
      3666
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 4467,
    "map": "Brightoak",
    "monsters": [
      "Grove Spore"
    ]
  },
  {
    "kind": "kill",
    "questId": 4468,
    "map": "Brightoak",
    "monsters": [
      "Twisted Goblin"
    ]
  },
  {
    "kind": "plan",
    "questId": 4463,
    "actions": [
      {
        "kind": "hunt",
        "map": "brightoak",
        "cell": "r2",
        "pad": "Left",
        "monster": "Wolfwood",
        "item": "Corrupted Fang",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "brightoak",
        "cell": "r3",
        "pad": "Left",
        "monster": "Hootbear",
        "item": "Shriveled Claw",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "brightoak",
        "cell": "r6",
        "pad": "Left",
        "monster": "Tainted Earth",
        "item": "Muddy Vial",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4692,
    "map": "Darkheart",
    "ids": [
      4052
    ]
  },
  {
    "kind": "kill",
    "questId": 4693,
    "map": "Darkheart",
    "monsters": [
      "Mutated Leech"
    ]
  },
  {
    "kind": "kill",
    "questId": 4694,
    "map": "Darkheart",
    "monsters": [
      "Mutated Leech"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4695,
    "map": "Darkheart",
    "ids": [
      4053
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 4695,
    "map": "Darkheart",
    "monsters": [
      "Wisterrora"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4696,
    "map": "Darkheart",
    "ids": [
      4054
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 4696,
    "map": "Darkheart",
    "monsters": [
      "Toxic Grove Spider"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4697,
    "map": "Darkheart",
    "ids": [
      4055
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 4697,
    "map": "Brightoak",
    "monsters": [
      "Brightpool Guardian"
    ]
  },
  {
    "kind": "plan",
    "questId": 4698,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkheart",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Tainted Earth",
        "item": "Tainted Earth Removed",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Darkheart",
        "cell": "r2",
        "pad": "Left",
        "monster": "Toxic Grove Spider",
        "item": "Toxic Grove Spider Dispatched",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Darkheart",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Mutated Leech",
        "item": "Mutated Leech Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4699,
    "map": "Darkheart",
    "ids": [
      4056
    ]
  },
  {
    "kind": "kill",
    "questId": 4700,
    "map": "Darkheart",
    "monsters": [
      "Gaiazor"
    ]
  },
  {
    "kind": "plan",
    "questId": 4799,
    "actions": [
      {
        "kind": "join",
        "map": "Gaiazor"
      },
      {
        "kind": "mapItem",
        "id": 4204,
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4800,
    "actions": [
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wolfwood",
        "item": "Wolfwood Slain",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wisterrora",
        "item": "Wisterrora Slain",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Tree Golem",
        "item": "Tree Golem Slain",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4801,
    "actions": [
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Tree Golem",
        "item": "Lapis' Runestones"
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wolfwood",
        "item": "Flix's Fertilizer"
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wisterrora",
        "item": "Zephyr's Toolkit"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4802,
    "actions": [
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Tree Golem",
        "item": "Tree Golem Roots",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wisterrora",
        "item": "Wisterrora Thorns",
        "quantity": 5
      },
      {
        "kind": "mapItem",
        "id": 4205,
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4803,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkheart",
        "monster": "Toxic Grove Spider",
        "item": "Grove Spider Silk",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Bloodtusk",
        "monster": "Trollola Plant",
        "item": "Trollola Nectar",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Firestorm",
        "monster": "Sulfur Imp",
        "item": "Searbush",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4804,
    "map": "Gaiazor",
    "ids": [
      4206
    ]
  },
  {
    "kind": "plan",
    "questId": 4808,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4805,
    "actions": [
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wolfwood",
        "item": "Wolfwood Twigs",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wisterrora",
        "item": "Drop of Wisterrora Ichor"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 4806
  },
  {
    "kind": "plan",
    "questId": 4807,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Gaiazor",
        "id": 4207,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "Gaiazor",
        "id": 4208,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "Gaiazor",
        "id": 4209,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4808,
    "map": "Gaiazor",
    "ids": [
      4210
    ]
  },
  {
    "kind": "plan",
    "questId": 4808,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4805,
    "actions": [
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wolfwood",
        "item": "Wolfwood Twigs",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "Gaiazor",
        "monster": "Wisterrora",
        "item": "Drop of Wisterrora Ichor"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 4806
  },
  {
    "kind": "plan",
    "questId": 4807,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Gaiazor",
        "id": 4207,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "Gaiazor",
        "id": 4208,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "Gaiazor",
        "id": 4209,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4808,
    "map": "Gaiazor",
    "ids": [
      4210
    ]
  },
  {
    "kind": "kill",
    "questId": 4809,
    "map": "Gaiazor",
    "monsters": [
      "Nevanna"
    ]
  },
  {
    "kind": "kill",
    "questId": 4810,
    "map": "Gaiazor",
    "monsters": [
      "Gaiazor"
    ]
  },
  {
    "kind": "plan",
    "questId": 4471,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brightoak",
        "monster": "Bright Treeant",
        "item": "Treeant Trunk",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Brightoak",
        "cell": "r8",
        "pad": "Spawn",
        "monster": "Wolfwood",
        "item": "Wolfwood Fur",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4472,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brightoak",
        "monster": "Brightpool Guardian",
        "item": "Disciplined Guardian",
        "quantity": 7
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.extra.bright-oak",
    category: "Story",
    map: "brightoak",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
