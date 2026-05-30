import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Shadows Of War / Core So W",
  "description": "Runs the Shadows Of War / Core So W story route.",
  "tags": [
    "story",
    "shadows",
    "of",
    "war",
    "core",
    "so",
    "w"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6846,
    "map": "shadowwar",
    "monsters": [
      "Shadowflame Slasher"
    ]
  },
  {
    "kind": "kill",
    "questId": 6847,
    "map": "shadowwar",
    "monsters": [
      "Seed Spitter"
    ]
  },
  {
    "kind": "plan",
    "questId": 6848,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "monster": "Shadowflame Slasher",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6849,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "monster": "Umbral Goo",
        "item": "Shadow Samples",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6850,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "cell": "r2",
        "pad": "Left",
        "monster": "*",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6851,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "monster": "Shadowflame Scout",
        "item": "Useful Clue",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6852,
    "actions": [
      {
        "kind": "hunt",
        "map": "malgor",
        "monster": "Malgor",
        "item": "Defeat Malgor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6856,
    "map": "shadowlordkeep",
    "ids": [
      6390
    ]
  },
  {
    "kind": "kill",
    "questId": 6856,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 6857,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Gunner"
    ]
  },
  {
    "kind": "plan",
    "questId": 6858,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowlordkeep",
        "monster": "Shadow Mage"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6859,
    "map": "shadowlordkeep",
    "ids": [
      6391
    ]
  },
  {
    "kind": "kill",
    "questId": 6860,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 6861,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6862,
    "map": "shadowlordkeep",
    "ids": [
      6392
    ]
  },
  {
    "kind": "kill",
    "questId": 6862,
    "map": "shadowlordkeep",
    "monsters": [
      "Stray Energy"
    ]
  },
  {
    "kind": "kill",
    "questId": 6863,
    "map": "shadowlordkeep",
    "monsters": [
      "Portal Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6864,
    "map": "timestream",
    "ids": [
      6393
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6856,
    "map": "shadowlordkeep",
    "ids": [
      6390
    ]
  },
  {
    "kind": "kill",
    "questId": 6856,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 6857,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Gunner"
    ]
  },
  {
    "kind": "plan",
    "questId": 6858,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowlordkeep",
        "monster": "Shadow Mage"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6859,
    "map": "shadowlordkeep",
    "ids": [
      6391
    ]
  },
  {
    "kind": "kill",
    "questId": 6860,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 6861,
    "map": "shadowlordkeep",
    "monsters": [
      "Shadow Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6862,
    "map": "shadowlordkeep",
    "ids": [
      6392
    ]
  },
  {
    "kind": "kill",
    "questId": 6862,
    "map": "shadowlordkeep",
    "monsters": [
      "Stray Energy"
    ]
  },
  {
    "kind": "kill",
    "questId": 6863,
    "map": "shadowlordkeep",
    "monsters": [
      "Portal Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6864,
    "map": "timestream",
    "ids": [
      6393
    ]
  },
  {
    "kind": "kill",
    "questId": 6865,
    "map": "timestream",
    "monsters": [
      "Spacetime Energy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6866,
    "map": "timestream",
    "ids": [
      6394
    ]
  },
  {
    "kind": "kill",
    "questId": 6867,
    "map": "timestream",
    "monsters": [
      "ShadowKnight Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 6873,
    "map": "granitecove",
    "monsters": [
      "Blacksea Pirate"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6874,
    "map": "granitecove",
    "ids": [
      6433
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6875,
    "map": "granitecove",
    "ids": [
      6434,
      6435,
      6436
    ]
  },
  {
    "kind": "kill",
    "questId": 6876,
    "map": "granitecove",
    "monsters": [
      "Jungle Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6877,
    "map": "granitecove",
    "monsters": [
      "Island Monkey"
    ]
  },
  {
    "kind": "kill",
    "questId": 6878,
    "map": "granitecove",
    "monsters": [
      "Jungle Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6879,
    "map": "granitecove",
    "monsters": [
      "Blacksea Pirate"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6880,
    "map": "granitecove",
    "ids": [
      6438
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 6881,
    "map": "granitecove",
    "monsters": [
      "Tattersail Pirate"
    ]
  },
  {
    "kind": "kill",
    "questId": 6882,
    "map": "granitecove",
    "monsters": [
      "Blacktooth Bill"
    ]
  },
  {
    "kind": "kill",
    "questId": 6883,
    "map": "granitecove",
    "monsters": [
      "Pirate Queen Teja"
    ]
  },
  {
    "kind": "kill",
    "questId": 6886,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Scallywag"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6887,
    "map": "blackseakeep",
    "ids": [
      6446
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6887,
    "map": "blackseakeep",
    "monsters": [
      "Pure Darkness"
    ]
  },
  {
    "kind": "kill",
    "questId": 6888,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Privateer"
    ]
  },
  {
    "kind": "kill",
    "questId": 6889,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Scallywag"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6890,
    "map": "blackseakeep",
    "ids": [
      6448
    ]
  },
  {
    "kind": "kill",
    "questId": 6891,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Privateer"
    ]
  },
  {
    "kind": "kill",
    "questId": 6892,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Pirate Mage",
      "Blacksea Pirate Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6893,
    "map": "blackseakeep",
    "ids": [
      6449
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 6894,
    "map": "blackseakeep",
    "monsters": [
      "Blacksea Privateer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6895,
    "map": "blackseakeep",
    "ids": [
      6450
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 6896,
    "map": "blackseakeep",
    "monsters": [
      "First Mate Bloodbone"
    ]
  },
  {
    "kind": "kill",
    "questId": 6949,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6950,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 6951,
    "map": "junkhoard",
    "monsters": [
      "Portal Manifestation"
    ]
  },
  {
    "kind": "kill",
    "questId": 6952,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 6953,
    "map": "junkhoard",
    "monsters": [
      "Portal Manifestation"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6954,
    "map": "junkhoard",
    "ids": [
      6497
    ]
  },
  {
    "kind": "kill",
    "questId": 6955,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6956,
    "map": "junkhoard",
    "monsters": [
      "Coal Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6957,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6958,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6959,
    "map": "junkhoard",
    "ids": [
      6498
    ]
  },
  {
    "kind": "kill",
    "questId": 6960,
    "map": "junkhoard",
    "monsters": [
      "Magpie Junk Heap"
    ]
  },
  {
    "kind": "kill",
    "questId": 6949,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6950,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 6951,
    "map": "junkhoard",
    "monsters": [
      "Portal Manifestation"
    ]
  },
  {
    "kind": "kill",
    "questId": 6952,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 6953,
    "map": "junkhoard",
    "monsters": [
      "Portal Manifestation"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6954,
    "map": "junkhoard",
    "ids": [
      6497
    ]
  },
  {
    "kind": "kill",
    "questId": 6955,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6956,
    "map": "junkhoard",
    "monsters": [
      "Coal Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6957,
    "map": "junkhoard",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "kill",
    "questId": 6958,
    "map": "junkhoard",
    "monsters": [
      "Junk Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6959,
    "map": "junkhoard",
    "ids": [
      6498
    ]
  },
  {
    "kind": "kill",
    "questId": 6960,
    "map": "junkhoard",
    "monsters": [
      "Magpie Junk Heap"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6961,
    "map": "junkheap",
    "ids": [
      6500
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6962,
    "map": "junkheap",
    "monsters": [
      "Magpie"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6963,
    "map": "junkheap",
    "ids": [
      6501
    ]
  },
  {
    "kind": "kill",
    "questId": 6963,
    "map": "junkheap",
    "monsters": [
      "Tiny Manifestation"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6964,
    "map": "junkheap",
    "ids": [
      6502
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6965,
    "map": "junkheap",
    "ids": [
      6503
    ]
  },
  {
    "kind": "kill",
    "questId": 6965,
    "map": "junkheap",
    "monsters": [
      "Shadowflame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 6966,
    "map": "junkheap",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 6967,
    "map": "junkheap",
    "monsters": [
      "Dark Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 6968,
    "map": "junkheap",
    "monsters": [
      "Shadow Imp",
      "Shadow Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6969,
    "map": "junkheap",
    "ids": [
      6504
    ]
  },
  {
    "kind": "kill",
    "questId": 6970,
    "map": "junkheap",
    "monsters": [
      "Dark Treeant",
      "Shadowflame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 6971,
    "map": "junkheap",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 6972,
    "map": "junkheap",
    "monsters": [
      "Shadowflame Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 6973,
    "map": "junkheap",
    "monsters": [
      "Shadowflame Yulgar"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6974,
    "map": "junkhoard",
    "ids": [
      6505
    ]
  },
  {
    "kind": "kill",
    "questId": 6993,
    "map": "shadowgrove",
    "monsters": [
      "Shadow Dragonlord"
    ]
  },
  {
    "kind": "kill",
    "questId": 6994,
    "map": "shadowgrove",
    "monsters": [
      "Shadow Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 6995,
    "map": "shadowgrove",
    "monsters": [
      "Shadow Dragonlord"
    ]
  },
  {
    "kind": "kill",
    "questId": 6996,
    "map": "shadowgrove",
    "monsters": [
      "Shadow Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 6997,
    "map": "shadowgrove",
    "monsters": [
      "Mutant Shadow Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 6998,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowgrove",
        "cell": "r9",
        "pad": "Left",
        "monster": "Mutant Shadow Dragon",
        "item": "Mutant Dragon Oil",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6999,
    "map": "shadowgrove",
    "monsters": [
      "Titan Shadow Dragonlord"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7050,
    "map": "aozorahills",
    "ids": [
      6643
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 7050,
    "map": "aozorahills",
    "ids": [
      6644
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7050,
    "map": "aozorahills",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7051,
    "map": "aozorahills",
    "ids": [
      6645
    ]
  },
  {
    "kind": "kill",
    "questId": 7052,
    "map": "aozorahills",
    "monsters": [
      "Aozora Kijimuna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7053,
    "map": "aozorahills",
    "monsters": [
      "Osanshouo"
    ]
  },
  {
    "kind": "kill",
    "questId": 7054,
    "map": "aozorahills",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7055,
    "map": "aozorahills",
    "ids": [
      6646
    ]
  },
  {
    "kind": "kill",
    "questId": 7055,
    "map": "aozorahills",
    "monsters": [
      "Fuyurei"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7056,
    "map": "aozorahills",
    "ids": [
      6647
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7057,
    "map": "aozorahills",
    "ids": [
      6648
    ]
  },
  {
    "kind": "kill",
    "questId": 7057,
    "map": "aozorahills",
    "monsters": [
      "Aozora Kijimuna"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7058,
    "map": "aozorahills",
    "ids": [
      6649
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7059,
    "map": "aozorahills",
    "ids": [
      6650
    ]
  },
  {
    "kind": "kill",
    "questId": 7059,
    "map": "aozorahills",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7060,
    "map": "aozorahills",
    "ids": [
      6651
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 7061,
    "map": "aozorahills",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7062,
    "map": "aozorahills",
    "monsters": [
      "Ghostly Hasu"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7050,
    "map": "aozorahills",
    "ids": [
      6643
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 7050,
    "map": "aozorahills",
    "ids": [
      6644
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7050,
    "map": "aozorahills",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7051,
    "map": "aozorahills",
    "ids": [
      6645
    ]
  },
  {
    "kind": "kill",
    "questId": 7052,
    "map": "aozorahills",
    "monsters": [
      "Aozora Kijimuna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7053,
    "map": "aozorahills",
    "monsters": [
      "Osanshouo"
    ]
  },
  {
    "kind": "kill",
    "questId": 7054,
    "map": "aozorahills",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7055,
    "map": "aozorahills",
    "ids": [
      6646
    ]
  },
  {
    "kind": "kill",
    "questId": 7055,
    "map": "aozorahills",
    "monsters": [
      "Fuyurei"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7056,
    "map": "aozorahills",
    "ids": [
      6647
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7057,
    "map": "aozorahills",
    "ids": [
      6648
    ]
  },
  {
    "kind": "kill",
    "questId": 7057,
    "map": "aozorahills",
    "monsters": [
      "Aozora Kijimuna"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7058,
    "map": "aozorahills",
    "ids": [
      6649
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7059,
    "map": "aozorahills",
    "ids": [
      6650
    ]
  },
  {
    "kind": "kill",
    "questId": 7059,
    "map": "aozorahills",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7060,
    "map": "aozorahills",
    "ids": [
      6651
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 7061,
    "map": "aozorahills",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7062,
    "map": "aozorahills",
    "monsters": [
      "Ghostly Hasu"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7106,
    "map": "ghostnexus",
    "ids": [
      6700
    ]
  },
  {
    "kind": "kill",
    "questId": 7107,
    "map": "ghostnexus",
    "monsters": [
      "Chaos Goat"
    ]
  },
  {
    "kind": "kill",
    "questId": 7108,
    "map": "ghostnexus",
    "monsters": [
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7109,
    "map": "ghostnexus",
    "ids": [
      6701
    ]
  },
  {
    "kind": "kill",
    "questId": 7110,
    "map": "ghostnexus",
    "monsters": [
      "Chaos Goat",
      "Chaos Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 7111,
    "map": "ghostnexus",
    "monsters": [
      "Gnarltooth"
    ]
  },
  {
    "kind": "kill",
    "questId": 7112,
    "map": "ghostnexus",
    "monsters": [
      "Infernal Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7113,
    "map": "ghostnexus",
    "monsters": [
      "Abumi Guchi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7114,
    "map": "ghostnexus",
    "monsters": [
      "Infernal Knight",
      "Abumi Guchi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7115,
    "map": "ghostnexus",
    "monsters": [
      "Nether Warlock"
    ]
  },
  {
    "kind": "kill",
    "questId": 7116,
    "map": "ghostnexus",
    "monsters": [
      "Manifestation of Grief"
    ]
  },
  {
    "kind": "kill",
    "questId": 7117,
    "map": "ghostnexus",
    "monsters": [
      "Manifestation of Rage"
    ]
  },
  {
    "kind": "kill",
    "questId": 7118,
    "map": "ghostnexus",
    "monsters": [
      "Mahou's Anguish"
    ]
  },
  {
    "kind": "plan",
    "questId": 7340,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowsong",
        "monster": "Shadowflame Troll"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7341,
    "map": "shadowsong",
    "monsters": [
      "Tune-A-Fish"
    ]
  },
  {
    "kind": "kill",
    "questId": 7342,
    "map": "shadowsong",
    "monsters": [
      "Beatle"
    ]
  },
  {
    "kind": "kill",
    "questId": 7343,
    "map": "shadowsong",
    "monsters": [
      "Shattered Crystal"
    ]
  },
  {
    "kind": "plan",
    "questId": 7344,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowsong",
        "monster": "Shadowflame Ur-Troll",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7345,
    "map": "shadowsong",
    "monsters": [
      "Mozard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7346,
    "map": "shadowsong",
    "monsters": [
      "Pachelbel's Cannon"
    ]
  },
  {
    "kind": "kill",
    "questId": 7347,
    "map": "shadowsong",
    "monsters": [
      "Mozard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7348,
    "map": "shadowsong",
    "monsters": [
      "Oh'Garr"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7419,
    "map": "darkally",
    "ids": [
      7179
    ],
    "quantity": 6
  },
  {
    "kind": "chain",
    "questId": 7419
  },
  {
    "kind": "kill",
    "questId": 7420,
    "map": "darkally",
    "monsters": [
      "Underworld Golem",
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7180
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7181
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7422,
    "actions": [
      {
        "kind": "join",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": "Dark Makai"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7423,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": 4452,
        "item": "Shredded Shadow",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7424,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Defectors Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Legion Soul",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7425,
    "map": "darkally",
    "monsters": [
      "Frozen Pyromancer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7426,
    "map": "darkally",
    "monsters": [
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7427,
    "map": "darkally",
    "ids": [
      7182
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7428,
    "map": "darkally",
    "monsters": [
      "Underfiend"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7419,
    "map": "darkally",
    "ids": [
      7179
    ],
    "quantity": 6
  },
  {
    "kind": "chain",
    "questId": 7419
  },
  {
    "kind": "kill",
    "questId": 7420,
    "map": "darkally",
    "monsters": [
      "Underworld Golem",
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7180
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7181
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7422,
    "actions": [
      {
        "kind": "join",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": "Dark Makai"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7423,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": 4452,
        "item": "Shredded Shadow",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7424,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Defectors Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Legion Soul",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7425,
    "map": "darkally",
    "monsters": [
      "Frozen Pyromancer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7426,
    "map": "darkally",
    "monsters": [
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7427,
    "map": "darkally",
    "ids": [
      7182
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7428,
    "map": "darkally",
    "monsters": [
      "Underfiend"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7446,
    "map": "darkalliance",
    "ids": [
      7224
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 7446,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7447,
    "map": "darkalliance",
    "ids": [
      7225
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7447,
    "map": "darkalliance",
    "monsters": [
      "Shadowblade"
    ]
  },
  {
    "kind": "kill",
    "questId": 7448,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "kill",
    "questId": 7449,
    "map": "darkalliance",
    "monsters": [
      "Shadow Makai"
    ]
  },
  {
    "kind": "kill",
    "questId": 7450,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7451,
    "map": "darkalliance",
    "ids": [
      7226
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 7452,
    "map": "darkalliance",
    "ids": [
      7227
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7453,
    "map": "darkalliance",
    "monsters": [
      "Underlava"
    ]
  },
  {
    "kind": "kill",
    "questId": 7454,
    "map": "darkalliance",
    "monsters": [
      "Underworld Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7455,
    "map": "darkalliance",
    "ids": [
      7228
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7456,
    "map": "darkalliance",
    "monsters": [
      "Underflame Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7457,
    "map": "darkalliance",
    "ids": [
      7229
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7458,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7459,
    "map": "darkalliance",
    "ids": [
      7230
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7460,
    "map": "darkalliance",
    "monsters": [
      "ShadowFlame Nulgath"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7419,
    "map": "darkally",
    "ids": [
      7179
    ],
    "quantity": 6
  },
  {
    "kind": "chain",
    "questId": 7419
  },
  {
    "kind": "kill",
    "questId": 7420,
    "map": "darkally",
    "monsters": [
      "Underworld Golem",
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7180
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7181
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7422,
    "actions": [
      {
        "kind": "join",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": "Dark Makai"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7423,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": 4452,
        "item": "Shredded Shadow",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7424,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Defectors Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Legion Soul",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7425,
    "map": "darkally",
    "monsters": [
      "Frozen Pyromancer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7426,
    "map": "darkally",
    "monsters": [
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7427,
    "map": "darkally",
    "ids": [
      7182
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7428,
    "map": "darkally",
    "monsters": [
      "Underfiend"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7446,
    "map": "darkalliance",
    "ids": [
      7224
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 7446,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7447,
    "map": "darkalliance",
    "ids": [
      7225
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7447,
    "map": "darkalliance",
    "monsters": [
      "Shadowblade"
    ]
  },
  {
    "kind": "kill",
    "questId": 7448,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "kill",
    "questId": 7449,
    "map": "darkalliance",
    "monsters": [
      "Shadow Makai"
    ]
  },
  {
    "kind": "kill",
    "questId": 7450,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7451,
    "map": "darkalliance",
    "ids": [
      7226
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 7452,
    "map": "darkalliance",
    "ids": [
      7227
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7453,
    "map": "darkalliance",
    "monsters": [
      "Underlava"
    ]
  },
  {
    "kind": "kill",
    "questId": 7454,
    "map": "darkalliance",
    "monsters": [
      "Underworld Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7455,
    "map": "darkalliance",
    "ids": [
      7228
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7456,
    "map": "darkalliance",
    "monsters": [
      "Underflame Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7457,
    "map": "darkalliance",
    "ids": [
      7229
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7458,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7459,
    "map": "darkalliance",
    "ids": [
      7230
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7460,
    "map": "darkalliance",
    "monsters": [
      "ShadowFlame Nulgath"
    ]
  },
  {
    "kind": "kill",
    "questId": 7461,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7462,
    "map": "innershadows",
    "ids": [
      7271
    ]
  },
  {
    "kind": "kill",
    "questId": 7462,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "kill",
    "questId": 7463,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7464,
    "map": "innershadows",
    "ids": [
      7272
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7465,
    "map": "innershadows",
    "ids": [
      7273
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 7466,
    "map": "innershadows",
    "monsters": [
      "Shadowcrow"
    ]
  },
  {
    "kind": "kill",
    "questId": 7467,
    "map": "innershadows",
    "monsters": [
      "Shadow ShadowScythe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7468,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7469,
    "map": "innershadows",
    "ids": [
      7274
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7470,
    "map": "innershadows",
    "monsters": [
      "ShadowSpitter",
      "Shadowcrow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7471,
    "map": "innershadows",
    "ids": [
      7275
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7472,
    "map": "innershadows",
    "monsters": [
      "Krahen"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7419,
    "map": "darkally",
    "ids": [
      7179
    ],
    "quantity": 6
  },
  {
    "kind": "chain",
    "questId": 7419
  },
  {
    "kind": "kill",
    "questId": 7420,
    "map": "darkally",
    "monsters": [
      "Underworld Golem",
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7180
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7181
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7422,
    "actions": [
      {
        "kind": "join",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": "Dark Makai"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7423,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": 4452,
        "item": "Shredded Shadow",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7424,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Defectors Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Legion Soul",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7425,
    "map": "darkally",
    "monsters": [
      "Frozen Pyromancer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7426,
    "map": "darkally",
    "monsters": [
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7427,
    "map": "darkally",
    "ids": [
      7182
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7428,
    "map": "darkally",
    "monsters": [
      "Underfiend"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7446,
    "map": "darkalliance",
    "ids": [
      7224
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 7446,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7447,
    "map": "darkalliance",
    "ids": [
      7225
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7447,
    "map": "darkalliance",
    "monsters": [
      "Shadowblade"
    ]
  },
  {
    "kind": "kill",
    "questId": 7448,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "kill",
    "questId": 7449,
    "map": "darkalliance",
    "monsters": [
      "Shadow Makai"
    ]
  },
  {
    "kind": "kill",
    "questId": 7450,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7451,
    "map": "darkalliance",
    "ids": [
      7226
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 7452,
    "map": "darkalliance",
    "ids": [
      7227
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7453,
    "map": "darkalliance",
    "monsters": [
      "Underlava"
    ]
  },
  {
    "kind": "kill",
    "questId": 7454,
    "map": "darkalliance",
    "monsters": [
      "Underworld Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7455,
    "map": "darkalliance",
    "ids": [
      7228
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7456,
    "map": "darkalliance",
    "monsters": [
      "Underflame Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7457,
    "map": "darkalliance",
    "ids": [
      7229
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7458,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7459,
    "map": "darkalliance",
    "ids": [
      7230
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7460,
    "map": "darkalliance",
    "monsters": [
      "ShadowFlame Nulgath"
    ]
  },
  {
    "kind": "kill",
    "questId": 7461,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7462,
    "map": "innershadows",
    "ids": [
      7271
    ]
  },
  {
    "kind": "kill",
    "questId": 7462,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "kill",
    "questId": 7463,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7464,
    "map": "innershadows",
    "ids": [
      7272
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7465,
    "map": "innershadows",
    "ids": [
      7273
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 7466,
    "map": "innershadows",
    "monsters": [
      "Shadowcrow"
    ]
  },
  {
    "kind": "kill",
    "questId": 7467,
    "map": "innershadows",
    "monsters": [
      "Shadow ShadowScythe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7468,
    "map": "innershadows",
    "monsters": [
      "Infected Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7469,
    "map": "innershadows",
    "ids": [
      7274
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7470,
    "map": "innershadows",
    "monsters": [
      "ShadowSpitter",
      "Shadowcrow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7471,
    "map": "innershadows",
    "ids": [
      7275
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7472,
    "map": "innershadows",
    "monsters": [
      "Krahen"
    ]
  },
  {
    "kind": "kill",
    "questId": 8125,
    "map": "fireplanewar",
    "monsters": [
      "Shadowflame Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8126,
    "map": "fireplanewar",
    "monsters": [
      "Shadowflame Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8127,
    "map": "fireplanewar",
    "monsters": [
      "Shadefire Onslaught"
    ]
  },
  {
    "kind": "kill",
    "questId": 8128,
    "map": "fireplanewar",
    "monsters": [
      "Shadowflame Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8129,
    "map": "fireplanewar",
    "ids": [
      8523
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8129,
    "map": "fireplanewar",
    "monsters": [
      "Shadowflame Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8130,
    "map": "fireplanewar",
    "monsters": [
      "Shadefire Onslaught"
    ]
  },
  {
    "kind": "kill",
    "questId": 8131,
    "map": "fireplanewar",
    "monsters": [
      "ShadowClaw"
    ]
  },
  {
    "kind": "kill",
    "questId": 8132,
    "map": "fireplanewar",
    "monsters": [
      "Shadefire Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8133,
    "map": "fireplanewar",
    "ids": [
      8524
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8133,
    "map": "fireplanewar",
    "monsters": [
      "Living Shadowflame"
    ]
  },
  {
    "kind": "kill",
    "questId": 8134,
    "map": "fireplanewar",
    "monsters": [
      "Living Shadowflame"
    ]
  },
  {
    "kind": "kill",
    "questId": 8135,
    "map": "fireplanewar",
    "monsters": [
      "ShadowFlame Phedra"
    ]
  },
  {
    "kind": "kill",
    "questId": 8136,
    "map": "shadowfireplane",
    "monsters": [
      "Living Shadowflame"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8137,
    "map": "shadowfireplane",
    "ids": [
      8544
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8138,
    "map": "shadowfireplane",
    "monsters": [
      "Onslaught Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8139,
    "map": "shadowfireplane",
    "ids": [
      8542
    ]
  },
  {
    "kind": "plan",
    "questId": 8140,
    "actions": [
      {
        "kind": "mapItem",
        "id": 8543
      },
      {
        "kind": "hunt",
        "map": "shadowfireplane",
        "cell": "r6",
        "pad": "Left",
        "monster": "Shadow Wing",
        "item": "Shadow Flamewing Defeated",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "shadowfireplane",
        "cell": "r6",
        "pad": "Left",
        "monster": "Shadowfire Summoner",
        "item": "Shadowfire Summoner Defeated",
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8141,
    "map": "shadowfireplane",
    "monsters": [
      "Shadowfire Corporal",
      "Onslaught Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8142,
    "map": "shadowfireplane",
    "monsters": [
      "Shadowfire Tiger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8143,
    "map": "shadowfireplane",
    "monsters": [
      "Shadowfire Corporal"
    ]
  },
  {
    "kind": "kill",
    "questId": 8144,
    "map": "shadowfireplane",
    "monsters": [
      "Elius"
    ]
  },
  {
    "kind": "kill",
    "questId": 8179,
    "map": "fireinvasion",
    "monsters": [
      "Onslaught Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8180,
    "map": "fireinvasion",
    "ids": [
      8728
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8180,
    "map": "fireinvasion",
    "monsters": [
      "Shadowfire Tiger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8181,
    "map": "fireinvasion",
    "monsters": [
      "Shadefire Cavalry"
    ]
  },
  {
    "kind": "kill",
    "questId": 8182,
    "map": "fireinvasion",
    "monsters": [
      "Shadowfire Corporal"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8183,
    "map": "fireinvasion",
    "ids": [
      8729
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8183,
    "map": "fireinvasion",
    "monsters": [
      "Shadefire Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 8184,
    "map": "fireinvasion",
    "monsters": [
      "Shadefire Major"
    ]
  },
  {
    "kind": "plan",
    "questId": 8185,
    "actions": [
      {
        "kind": "hunt",
        "map": "fireinvasion",
        "cell": "r8",
        "pad": "Top",
        "monster": "Shadefire Elemental",
        "item": "Elemental Slain",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "fireinvasion",
        "cell": "r7",
        "pad": "Top",
        "monster": "Shadowfire Tiger",
        "item": "Tiger Slain",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8186,
    "map": "fireinvasion",
    "monsters": [
      "Living Shadowflame"
    ]
  },
  {
    "kind": "kill",
    "questId": 8187,
    "map": "fireinvasion",
    "monsters": [
      "Shadefire Colonel"
    ]
  },
  {
    "kind": "kill",
    "questId": 8188,
    "map": "fireinvasion",
    "monsters": [
      "Living Shadowflame"
    ]
  },
  {
    "kind": "kill",
    "questId": 8189,
    "map": "fireinvasion",
    "monsters": [
      "Onslaught Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8190,
    "map": "fireinvasion",
    "monsters": [
      "Shadefire General"
    ]
  },
  {
    "kind": "kill",
    "questId": 8191,
    "map": "fireinvasion",
    "monsters": [
      "Shadowflame Kyron"
    ]
  },
  {
    "kind": "kill",
    "questId": 8192,
    "map": "fireinvasion",
    "monsters": [
      "Living Shadowflame",
      "Shadefire Cavalry"
    ]
  },
  {
    "kind": "kill",
    "questId": 8193,
    "map": "wartraining",
    "monsters": [
      "Simulated Shadefire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8194,
    "map": "wartraining",
    "ids": [
      8746
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8195,
    "map": "wartraining",
    "monsters": [
      "Simulated Major"
    ]
  },
  {
    "kind": "kill",
    "questId": 8196,
    "map": "wartraining",
    "monsters": [
      "Simulated Elius"
    ]
  },
  {
    "kind": "kill",
    "questId": 8197,
    "map": "wartraining",
    "monsters": [
      "Simulated Fire"
    ]
  },
  {
    "kind": "kill",
    "questId": 8198,
    "map": "wartraining",
    "monsters": [
      "Simulated Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 8199,
    "map": "wartraining",
    "monsters": [
      "Simulated Fire"
    ]
  },
  {
    "kind": "kill",
    "questId": 8200,
    "map": "wartraining",
    "monsters": [
      "Fire Champion"
    ]
  },
  {
    "kind": "kill",
    "questId": 8201,
    "map": "wartraining",
    "monsters": [
      "Warfury Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8202,
    "map": "wartraining",
    "monsters": [
      "Warfury Elite"
    ]
  },
  {
    "kind": "kill",
    "questId": 8203,
    "map": "wartraining",
    "monsters": [
      "Varga"
    ]
  },
  {
    "kind": "kill",
    "questId": 8204,
    "map": "wartraining",
    "monsters": [
      "Warfury Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8233,
    "map": "fireavatar",
    "monsters": [
      "Shadefire Colonel"
    ]
  },
  {
    "kind": "kill",
    "questId": 8234,
    "map": "fireavatar",
    "monsters": [
      "Shadefire Major"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8235,
    "map": "fireavatar",
    "ids": [
      8859
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8236,
    "map": "fireavatar",
    "monsters": [
      "Shadefire Cavalry"
    ]
  },
  {
    "kind": "kill",
    "questId": 8237,
    "map": "fireavatar",
    "monsters": [
      "Shadefire Colonel"
    ]
  },
  {
    "kind": "kill",
    "questId": 8238,
    "map": "fireavatar",
    "monsters": [
      "Elius"
    ]
  },
  {
    "kind": "kill",
    "questId": 8239,
    "map": "fireavatar",
    "monsters": [
      "Living Shadowflame"
    ]
  },
  {
    "kind": "kill",
    "questId": 8240,
    "map": "fireavatar",
    "monsters": [
      "Shadefire Elemental"
    ]
  },
  {
    "kind": "plan",
    "questId": 8241,
    "actions": [
      {
        "kind": "hunt",
        "map": "fireavatar",
        "cell": "r8",
        "pad": "Left",
        "monster": "Shadow Lava",
        "item": "Shadow Lava Defeated",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8242,
    "actions": [
      {
        "kind": "hunt",
        "map": "fireavatar",
        "cell": "r7",
        "pad": "Left",
        "monster": "Living Shadowflame",
        "item": "Power Restored",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8243,
    "map": "fireavatar",
    "monsters": [
      "Fire Orb",
      "Avatar Tyndarius"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8803,
    "map": "Timekeep",
    "ids": [
      10455,
      10456,
      10457
    ]
  },
  {
    "kind": "kill",
    "questId": 8804,
    "map": "Timekeep",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8805,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8806,
    "map": "Timekeep",
    "ids": [
      10458
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8807,
    "map": "Timekeep",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8808,
    "map": "Timekeep",
    "ids": [
      10459,
      10460
    ]
  },
  {
    "kind": "kill",
    "questId": 8809,
    "map": "Timekeep",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8810,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp",
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8811,
    "map": "Timekeep",
    "monsters": [
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8812,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8813,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar",
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8803,
    "map": "Timekeep",
    "ids": [
      10455,
      10456,
      10457
    ]
  },
  {
    "kind": "kill",
    "questId": 8804,
    "map": "Timekeep",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8805,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8806,
    "map": "Timekeep",
    "ids": [
      10458
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8807,
    "map": "Timekeep",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8808,
    "map": "Timekeep",
    "ids": [
      10459,
      10460
    ]
  },
  {
    "kind": "kill",
    "questId": 8809,
    "map": "Timekeep",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8810,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp",
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8811,
    "map": "Timekeep",
    "monsters": [
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8812,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8813,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar",
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "plan",
    "questId": 8814,
    "actions": [
      {
        "kind": "hunt",
        "map": "Streamwar",
        "monster": "Decaying Locust",
        "item": "Timestream Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8816,
    "map": "Streamwar",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8817,
    "map": "Streamwar",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8818,
    "map": "streamwar",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 8819,
    "map": "streamwar",
    "monsters": [
      "Second Speaker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8803,
    "map": "Timekeep",
    "ids": [
      10455,
      10456,
      10457
    ]
  },
  {
    "kind": "kill",
    "questId": 8804,
    "map": "Timekeep",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8805,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8806,
    "map": "Timekeep",
    "ids": [
      10458
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8807,
    "map": "Timekeep",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8808,
    "map": "Timekeep",
    "ids": [
      10459,
      10460
    ]
  },
  {
    "kind": "kill",
    "questId": 8809,
    "map": "Timekeep",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8810,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp",
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8811,
    "map": "Timekeep",
    "monsters": [
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8812,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8813,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar",
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "plan",
    "questId": 8814,
    "actions": [
      {
        "kind": "hunt",
        "map": "Streamwar",
        "monster": "Decaying Locust",
        "item": "Timestream Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8816,
    "map": "Streamwar",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8817,
    "map": "Streamwar",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8818,
    "map": "streamwar",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 8819,
    "map": "streamwar",
    "monsters": [
      "Second Speaker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8859,
    "map": "DeadLines",
    "ids": [
      10601
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 8860,
    "map": "DeadLines",
    "ids": [
      10602
    ]
  },
  {
    "kind": "kill",
    "questId": 8860,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8861,
    "map": "DeadLines",
    "ids": [
      10603,
      10604
    ]
  },
  {
    "kind": "kill",
    "questId": 8861,
    "map": "DeadLines",
    "monsters": [
      "Shadowfall Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8862,
    "map": "DeadLines",
    "ids": [
      10605,
      10606
    ]
  },
  {
    "kind": "kill",
    "questId": 8862,
    "map": "DeadLines",
    "monsters": [
      "Swordhaven Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8863,
    "map": "DeadLines",
    "ids": [
      10607,
      10608
    ]
  },
  {
    "kind": "kill",
    "questId": 8863,
    "map": "DeadLines",
    "monsters": [
      "Shadowfall Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8864,
    "map": "DeadLines",
    "ids": [
      10609,
      10610
    ]
  },
  {
    "kind": "kill",
    "questId": 8864,
    "map": "DeadLines",
    "monsters": [
      "Swordhaven Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8865,
    "map": "DeadLines",
    "ids": [
      10611,
      10612
    ]
  },
  {
    "kind": "kill",
    "questId": 8865,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8866,
    "map": "DeadLines",
    "ids": [
      10613
    ]
  },
  {
    "kind": "kill",
    "questId": 8866,
    "map": "DeadLines",
    "monsters": [
      "Chaos Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8867,
    "map": "DeadLines",
    "ids": [
      10614
    ]
  },
  {
    "kind": "kill",
    "questId": 8867,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8868,
    "map": "DeadLines",
    "monsters": [
      "Eternal Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8803,
    "map": "Timekeep",
    "ids": [
      10455,
      10456,
      10457
    ]
  },
  {
    "kind": "kill",
    "questId": 8804,
    "map": "Timekeep",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8805,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8806,
    "map": "Timekeep",
    "ids": [
      10458
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8807,
    "map": "Timekeep",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8808,
    "map": "Timekeep",
    "ids": [
      10459,
      10460
    ]
  },
  {
    "kind": "kill",
    "questId": 8809,
    "map": "Timekeep",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8810,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp",
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8811,
    "map": "Timekeep",
    "monsters": [
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8812,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8813,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar",
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "plan",
    "questId": 8814,
    "actions": [
      {
        "kind": "hunt",
        "map": "Streamwar",
        "monster": "Decaying Locust",
        "item": "Timestream Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8816,
    "map": "Streamwar",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8817,
    "map": "Streamwar",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8818,
    "map": "streamwar",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 8819,
    "map": "streamwar",
    "monsters": [
      "Second Speaker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8859,
    "map": "DeadLines",
    "ids": [
      10601
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 8860,
    "map": "DeadLines",
    "ids": [
      10602
    ]
  },
  {
    "kind": "kill",
    "questId": 8860,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8861,
    "map": "DeadLines",
    "ids": [
      10603,
      10604
    ]
  },
  {
    "kind": "kill",
    "questId": 8861,
    "map": "DeadLines",
    "monsters": [
      "Shadowfall Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8862,
    "map": "DeadLines",
    "ids": [
      10605,
      10606
    ]
  },
  {
    "kind": "kill",
    "questId": 8862,
    "map": "DeadLines",
    "monsters": [
      "Swordhaven Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8863,
    "map": "DeadLines",
    "ids": [
      10607,
      10608
    ]
  },
  {
    "kind": "kill",
    "questId": 8863,
    "map": "DeadLines",
    "monsters": [
      "Shadowfall Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8864,
    "map": "DeadLines",
    "ids": [
      10609,
      10610
    ]
  },
  {
    "kind": "kill",
    "questId": 8864,
    "map": "DeadLines",
    "monsters": [
      "Swordhaven Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8865,
    "map": "DeadLines",
    "ids": [
      10611,
      10612
    ]
  },
  {
    "kind": "kill",
    "questId": 8865,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8866,
    "map": "DeadLines",
    "ids": [
      10613
    ]
  },
  {
    "kind": "kill",
    "questId": 8866,
    "map": "DeadLines",
    "monsters": [
      "Chaos Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8867,
    "map": "DeadLines",
    "ids": [
      10614
    ]
  },
  {
    "kind": "kill",
    "questId": 8867,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8868,
    "map": "DeadLines",
    "monsters": [
      "Eternal Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8956,
    "map": "worldscore",
    "ids": [
      10877
    ]
  },
  {
    "kind": "kill",
    "questId": 8956,
    "map": "worldscore",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8957,
    "map": "worldscore",
    "ids": [
      10878
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8957,
    "map": "worldscore",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8958,
    "map": "worldscore",
    "ids": [
      10879
    ]
  },
  {
    "kind": "kill",
    "questId": 8958,
    "map": "worldscore",
    "monsters": [
      "Infernal Mockery"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8959,
    "map": "worldscore",
    "ids": [
      10880
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8959,
    "map": "worldscore",
    "monsters": [
      "Infernal Mockery"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8960,
    "map": "worldscore",
    "ids": [
      10881
    ]
  },
  {
    "kind": "kill",
    "questId": 8960,
    "map": "worldscore",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8961,
    "map": "worldscore",
    "ids": [
      10882
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8962,
    "map": "worldscore",
    "monsters": [
      "Crystalized Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8963,
    "map": "worldscore",
    "ids": [
      10883
    ]
  },
  {
    "kind": "kill",
    "questId": 8963,
    "map": "worldscore",
    "monsters": [
      "Infernal Mockery"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8964,
    "map": "worldscore",
    "ids": [
      10884
    ]
  },
  {
    "kind": "kill",
    "questId": 8964,
    "map": "worldscore",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "kill",
    "questId": 8965,
    "map": "worldscore",
    "monsters": [
      "Mask of Tranquility"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8778,
    "map": "ruinedcrown",
    "ids": [
      10380,
      10382,
      10383
    ]
  },
  {
    "kind": "kill",
    "questId": 8779,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8780,
    "map": "ruinedcrown",
    "ids": [
      10384
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8781,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8782,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Knight",
      "Mana-Burdened Minion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8784,
    "map": "ruinedcrown",
    "ids": [
      10385
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8783,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8785,
    "map": "ruinedcrown",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8786,
    "map": "ruinedcrown",
    "ids": [
      10386
    ]
  },
  {
    "kind": "kill",
    "questId": 8786,
    "map": "ruinedcrown",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8787,
    "map": "ruinedcrown",
    "monsters": [
      "Calamitous Warlic"
    ]
  },
  {
    "kind": "plan",
    "questId": 8788,
    "actions": [
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Frenzied Mana",
        "item": "Mana Residue",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Mana-Burdened Mage",
        "item": "Mage's Blood Sample",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "ruinedcrown",
        "monster": "Calamitous Warlic",
        "item": "Warlic's Favor"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8803,
    "map": "Timekeep",
    "ids": [
      10455,
      10456,
      10457
    ]
  },
  {
    "kind": "kill",
    "questId": 8804,
    "map": "Timekeep",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8805,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8806,
    "map": "Timekeep",
    "ids": [
      10458
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8807,
    "map": "Timekeep",
    "monsters": [
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8808,
    "map": "Timekeep",
    "ids": [
      10459,
      10460
    ]
  },
  {
    "kind": "kill",
    "questId": 8809,
    "map": "Timekeep",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8810,
    "map": "Timekeep",
    "monsters": [
      "Distorted Imp",
      "Mana-Burdened Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 8811,
    "map": "Timekeep",
    "monsters": [
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8812,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 8813,
    "map": "Timekeep",
    "monsters": [
      "Mal-formed Gar",
      "Mumbler",
      "Decaying Locust"
    ]
  },
  {
    "kind": "plan",
    "questId": 8814,
    "actions": [
      {
        "kind": "hunt",
        "map": "Streamwar",
        "monster": "Decaying Locust",
        "item": "Timestream Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8816,
    "map": "Streamwar",
    "monsters": [
      "Mumbler"
    ]
  },
  {
    "kind": "kill",
    "questId": 8817,
    "map": "Streamwar",
    "monsters": [
      "Decaying Locust"
    ]
  },
  {
    "kind": "kill",
    "questId": 8818,
    "map": "streamwar",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "kill",
    "questId": 8819,
    "map": "streamwar",
    "monsters": [
      "Second Speaker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8859,
    "map": "DeadLines",
    "ids": [
      10601
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 8860,
    "map": "DeadLines",
    "ids": [
      10602
    ]
  },
  {
    "kind": "kill",
    "questId": 8860,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8861,
    "map": "DeadLines",
    "ids": [
      10603,
      10604
    ]
  },
  {
    "kind": "kill",
    "questId": 8861,
    "map": "DeadLines",
    "monsters": [
      "Shadowfall Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8862,
    "map": "DeadLines",
    "ids": [
      10605,
      10606
    ]
  },
  {
    "kind": "kill",
    "questId": 8862,
    "map": "DeadLines",
    "monsters": [
      "Swordhaven Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8863,
    "map": "DeadLines",
    "ids": [
      10607,
      10608
    ]
  },
  {
    "kind": "kill",
    "questId": 8863,
    "map": "DeadLines",
    "monsters": [
      "Shadowfall Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8864,
    "map": "DeadLines",
    "ids": [
      10609,
      10610
    ]
  },
  {
    "kind": "kill",
    "questId": 8864,
    "map": "DeadLines",
    "monsters": [
      "Swordhaven Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8865,
    "map": "DeadLines",
    "ids": [
      10611,
      10612
    ]
  },
  {
    "kind": "kill",
    "questId": 8865,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8866,
    "map": "DeadLines",
    "ids": [
      10613
    ]
  },
  {
    "kind": "kill",
    "questId": 8866,
    "map": "DeadLines",
    "monsters": [
      "Chaos Mage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8867,
    "map": "DeadLines",
    "ids": [
      10614
    ]
  },
  {
    "kind": "kill",
    "questId": 8867,
    "map": "DeadLines",
    "monsters": [
      "Frenzied Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 8868,
    "map": "DeadLines",
    "monsters": [
      "Eternal Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8956,
    "map": "worldscore",
    "ids": [
      10877
    ]
  },
  {
    "kind": "kill",
    "questId": 8956,
    "map": "worldscore",
    "monsters": [
      "False Wyvern"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8957,
    "map": "worldscore",
    "ids": [
      10878
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8957,
    "map": "worldscore",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8958,
    "map": "worldscore",
    "ids": [
      10879
    ]
  },
  {
    "kind": "kill",
    "questId": 8958,
    "map": "worldscore",
    "monsters": [
      "Infernal Mockery"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8959,
    "map": "worldscore",
    "ids": [
      10880
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8959,
    "map": "worldscore",
    "monsters": [
      "Infernal Mockery"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8960,
    "map": "worldscore",
    "ids": [
      10881
    ]
  },
  {
    "kind": "kill",
    "questId": 8960,
    "map": "worldscore",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8961,
    "map": "worldscore",
    "ids": [
      10882
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8962,
    "map": "worldscore",
    "monsters": [
      "Crystalized Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8963,
    "map": "worldscore",
    "ids": [
      10883
    ]
  },
  {
    "kind": "kill",
    "questId": 8963,
    "map": "worldscore",
    "monsters": [
      "Infernal Mockery"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8964,
    "map": "worldscore",
    "ids": [
      10884
    ]
  },
  {
    "kind": "kill",
    "questId": 8964,
    "map": "worldscore",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "kill",
    "questId": 8965,
    "map": "worldscore",
    "monsters": [
      "Mask of Tranquility"
    ]
  },
  {
    "kind": "kill",
    "questId": 9116,
    "map": "manacradle",
    "monsters": [
      "Elemental Attempt"
    ]
  },
  {
    "kind": "kill",
    "questId": 9117,
    "map": "manacradle",
    "monsters": [
      "Crystalized Mana"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9118,
    "map": "manacradle",
    "ids": [
      11268
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 9118,
    "map": "manacradle",
    "ids": [
      11269
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 9119,
    "map": "manacradle",
    "monsters": [
      "Crystalized Mana",
      "Elemental Attempt"
    ]
  },
  {
    "kind": "kill",
    "questId": 9120,
    "map": "manacradle",
    "monsters": [
      "Dark Tainted Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 9121,
    "map": "manacradle",
    "monsters": [
      "Darkness Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9122,
    "map": "manacradle",
    "ids": [
      11270
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 9123,
    "map": "manacradle",
    "ids": [
      11271
    ]
  },
  {
    "kind": "kill",
    "questId": 9123,
    "map": "manacradle",
    "monsters": [
      "Darkness Elemental",
      "Dark Tainted Mana"
    ]
  },
  {
    "kind": "kill",
    "questId": 9124,
    "map": "manacradle",
    "monsters": [
      "Malgor"
    ]
  },
  {
    "kind": "kill",
    "questId": 9125,
    "map": "manacradle",
    "monsters": [
      "The Mainyu"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-war.core-so-w",
    category: "Story",
    map: "shadowwar",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
