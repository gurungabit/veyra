import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Yokai Story",
  "description": "This will finish the Yokai Story.",
  "tags": [
    "story",
    "quest",
    "yokai"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 6450,
    "actions": [
      {
        "kind": "hunt",
        "map": "ShogunWar",
        "monster": "Shadow Samurai",
        "item": "Shadow Medallions",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6451,
    "actions": [
      {
        "kind": "hunt",
        "map": "ShogunWar",
        "monster": 8,
        "item": "Kijimuna Pollen",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "ShogunWar",
        "monster": 7,
        "item": "Reishi Spores",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6452,
    "map": "ShogunWar",
    "ids": [
      5956
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6453,
    "map": "ShogunWar",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "kill",
    "questId": 6454,
    "map": "ShogunWar",
    "monsters": [
      "Bamboo Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6455,
    "map": "ShogunWar",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6456,
    "map": "ShogunWar",
    "ids": [
      5957,
      5958,
      5959,
      5960
    ]
  },
  {
    "kind": "kill",
    "questId": 6457,
    "map": "ShogunWar",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "kill",
    "questId": 6458,
    "map": "ShogunWar",
    "monsters": [
      "Bamboo Treeant"
    ]
  },
  {
    "kind": "plan",
    "questId": 6459,
    "actions": [
      {
        "kind": "hunt",
        "map": "ShogunWar",
        "monster": 25,
        "item": "Orochi Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6460,
    "map": "ShogunWar",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "kill",
    "questId": 6461,
    "map": "ShogunWar",
    "monsters": [
      "Kijimuna",
      "Reishi",
      "Bamboo Treeant"
    ]
  },
  {
    "kind": "plan",
    "questId": 6462,
    "actions": [
      {
        "kind": "hunt",
        "map": "shinringrove",
        "monster": "Kame",
        "item": "Kame Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6463,
    "actions": [
      {
        "kind": "hunt",
        "map": "shinringrove",
        "monster": "Reishi",
        "item": "Reishi Caps",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "shinringrove",
        "monster": "Tsurubebi",
        "item": "Tsurubebi Flame",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6464,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 6464,
    "map": "shinringrove",
    "ids": [
      5962
    ]
  },
  {
    "kind": "chain",
    "questId": 6464
  },
  {
    "kind": "mapItem",
    "questId": 6465,
    "map": "greenshell",
    "ids": [
      5964
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6465,
    "map": "greenshell",
    "monsters": [
      "Tsurubebi"
    ]
  },
  {
    "kind": "kill",
    "questId": 6466,
    "map": "greenshell",
    "monsters": [
      "Tsukumogami"
    ]
  },
  {
    "kind": "kill",
    "questId": 6467,
    "map": "shinringrove",
    "monsters": [
      "Kodama"
    ]
  },
  {
    "kind": "kill",
    "questId": 6468,
    "map": "shinringrove",
    "monsters": [
      "Moglinberry Bush"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6469,
    "map": "greenshell",
    "ids": [
      5965
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 6469,
    "map": "shinringrove",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6470,
    "map": "greenshell",
    "ids": [
      5966
    ]
  },
  {
    "kind": "kill",
    "questId": 6470,
    "map": "greenshell",
    "monsters": [
      "Merdraconian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6471,
    "map": "greenshell",
    "ids": [
      5967
    ]
  },
  {
    "kind": "plan",
    "questId": 6472,
    "actions": [
      {
        "kind": "hunt",
        "map": "greenshell",
        "monster": "Nagami",
        "item": "Nagami Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6473,
    "actions": [
      {
        "kind": "hunt",
        "map": "shinringrove",
        "monster": "Moglinberry Bush",
        "item": "Moglinberry Bushels ",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "shinringrove",
        "monster": "Reishi",
        "item": "Reishi Caps",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6474,
    "map": "heiwavalley",
    "monsters": [
      "Abumi Guchi"
    ]
  },
  {
    "kind": "plan",
    "questId": 6475,
    "actions": [
      {
        "kind": "hunt",
        "map": "heiwavalley",
        "monster": "Shadow Samurai",
        "item": "Pilfered Armor",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "heiwavalley",
        "monster": "Shadow Samurai",
        "item": "Stolen Sword",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6476,
    "map": "heiwavalley",
    "ids": [
      5968
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6476,
    "map": "heiwavalley",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "kill",
    "questId": 6477,
    "map": "heiwavalley",
    "monsters": [
      "Goryo"
    ]
  },
  {
    "kind": "plan",
    "questId": 6478,
    "actions": [
      {
        "kind": "hunt",
        "map": "heiwavalley",
        "monster": "Kosenjobi",
        "item": "Spectral Heat",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6478,
    "actions": [
      {
        "kind": "buy",
        "map": "heiwavalley",
        "shopId": 1608,
        "item": "Wasabi"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6479,
    "map": "heiwavalley",
    "monsters": [
      "Abumi Guchi"
    ]
  },
  {
    "kind": "kill",
    "questId": 6480,
    "map": "heiwavalley",
    "monsters": [
      "Inugami"
    ]
  },
  {
    "kind": "plan",
    "questId": 6481,
    "actions": [
      {
        "kind": "hunt",
        "map": "heiwavalley",
        "monster": "Inugami",
        "item": "Spirit Eyes",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6481,
    "map": "heiwavalley",
    "ids": [
      5970
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 6482,
    "map": "heiwavalley",
    "ids": [
      5971
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6482,
    "map": "heiwavalley",
    "ids": [
      5972
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 6483,
    "actions": [
      {
        "kind": "hunt",
        "map": "heiwavalley",
        "monster": 15,
        "item": "Onryo Slain"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6485,
    "map": "shadowfortress",
    "monsters": [
      "Restless Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 6486,
    "map": "shadowfortress",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6487,
    "map": "shadowfortress",
    "ids": [
      5973
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6488,
    "map": "shadowfortress",
    "ids": [
      5974
    ]
  },
  {
    "kind": "kill",
    "questId": 6488,
    "map": "shadowfortress",
    "monsters": [
      "Living Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 6489,
    "map": "shadowfortress",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6490,
    "map": "shadowfortress",
    "ids": [
      5975
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 6490,
    "map": "shadowfortress",
    "monsters": [
      "Creeping Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 6491,
    "map": "shadowfortress",
    "monsters": [
      "7th Head of Orochi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6492,
    "map": "shadowfortress",
    "ids": [
      5976,
      5979
    ]
  },
  {
    "kind": "plan",
    "questId": 6493,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": "6th Head of Orochi",
        "item": "6th Head Defeated"
      },
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": "5th Head of Orochi",
        "item": "5th Head Defeated"
      },
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": "4th Head of Orochi",
        "item": "4th Head Defeated"
      },
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": "3rd Head of Orochi",
        "item": "3rd Head Defeated"
      },
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": "2nd Head of Orochi",
        "item": "2nd Head Defeated"
      },
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": "1st Head of Orochi",
        "item": "1st Head Defeated"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6493,
    "map": "shadowfortress",
    "ids": [
      5977
    ]
  },
  {
    "kind": "plan",
    "questId": 6494,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowfortress",
        "monster": 31,
        "item": "Jaaku Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6494,
    "actions": []
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.yokai",
    category: "Story",
    map: "ShogunWar",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
