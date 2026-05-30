import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Horc) Khasaanda",
  "description": "This will finish the Khasaanda quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "horc",
    "khasaanda",
    "lordsof",
    "chaos",
    "09khasaanda"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 1232,
    "actions": [
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Chinchilizard",
        "item": "Scaly Skin Scrub",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "bloodtusk",
        "monster": "Trollola Plant",
        "item": "Perfumed Trollola Flower",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1232,
    "map": "bloodtusk",
    "ids": [
      523
    ]
  },
  {
    "kind": "plan",
    "questId": 1233,
    "actions": [
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Lemurphant",
        "item": "Lemurphant Stones",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Koalion",
        "item": "Golden Down-fur",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1234,
    "actions": [
      {
        "kind": "hunt",
        "map": "bloodtusk",
        "monster": 21,
        "item": "Polished Rocks",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Lemurphant",
        "item": "Lemurphant Ivory",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Chinchilizard",
        "item": "Liz-Leather Thongs",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1234,
    "map": "crossroads",
    "ids": [
      525
    ]
  },
  {
    "kind": "plan",
    "questId": 1235,
    "actions": [
      {
        "kind": "hunt",
        "map": "bloodtusk",
        "monster": "Trollola Plant",
        "item": "Trollola Plant Resin",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Lemurphant",
        "item": "Lemurphant Musk",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Koalion",
        "item": "Fur for Firestarting",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1235,
    "map": "crossroads",
    "ids": [
      521
    ],
    "quantity": 10
  },
  {
    "kind": "chain",
    "questId": 1236
  },
  {
    "kind": "plan",
    "questId": 1237,
    "actions": [
      {
        "kind": "hunt",
        "map": "bloodtusk",
        "monster": "Rock",
        "item": "Skin of the Mountain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Koalion",
        "item": "Koalion Claw",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "crossroads",
        "monster": "Lemurphant",
        "item": "Lemurphant Tusks",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1237,
    "map": "crossroads",
    "ids": [
      524
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 1237,
    "map": "crossroads",
    "ids": [
      522
    ],
    "quantity": 5
  },
  {
    "kind": "chain",
    "questId": 1237
  },
  {
    "kind": "chain",
    "questId": 1241
  },
  {
    "kind": "chain",
    "questId": 1273
  },
  {
    "kind": "mapItem",
    "questId": 1280,
    "map": "ravinetemple",
    "ids": [
      553
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1281,
    "map": "ravinetemple",
    "ids": [
      554
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 1281,
    "map": "ravinetemple",
    "ids": [
      555,
      556
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1282,
    "map": "ravinetemple",
    "monsters": [
      "Temple Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1283,
    "map": "ravinetemple",
    "ids": [
      557
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1283,
    "map": "ravinetemple",
    "monsters": [
      "Temple Guardian"
    ]
  },
  {
    "kind": "kill",
    "questId": 1284,
    "map": "ravinetemple",
    "monsters": [
      "Temple Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1375,
    "map": "alliance",
    "ids": [
      679,
      680
    ]
  },
  {
    "kind": "plan",
    "questId": 1376,
    "actions": [
      {
        "kind": "hunt",
        "map": "alliance",
        "monster": "Good Soldier",
        "item": "Good Soldier Vanquished",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "alliance",
        "monster": "Evil Soldier",
        "item": "Evil Soldier Vanquished",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1377,
    "map": "alliance",
    "ids": [
      675
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 1378,
    "map": "alliance",
    "ids": [
      676
    ]
  },
  {
    "kind": "kill",
    "questId": 1379,
    "map": "alliance",
    "monsters": [
      "Chaorrupted Evil Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 1380,
    "actions": [
      {
        "kind": "hunt",
        "map": "alliance",
        "monster": "General Cynari",
        "item": "Cynari Defeated!"
      },
      {
        "kind": "hunt",
        "map": "alliance",
        "monster": "General Tibias",
        "item": "Tibias Defeated!"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1424,
    "map": "ancienttemple",
    "monsters": [
      "Chaotic Vulture"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1425,
    "map": "ancienttemple",
    "ids": [
      706
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 1425,
    "map": "ancienttemple",
    "monsters": [
      "Chaotic Vulture"
    ]
  },
  {
    "kind": "kill",
    "questId": 1426,
    "map": "ancienttemple",
    "monsters": [
      "Chaos Troll Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 1427,
    "map": "ancienttemple",
    "monsters": [
      "Serpentress"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1428,
    "map": "ancienttemple",
    "ids": [
      707
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1456,
    "map": "orecavern",
    "ids": [
      717
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1457,
    "map": "orecavern",
    "ids": [
      719
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1457,
    "map": "orecavern",
    "monsters": [
      "Crashroom"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1458,
    "map": "orecavern",
    "ids": [
      718
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1459,
    "map": "orecavern",
    "monsters": [
      "Chaorrupted Evil Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 1460,
    "map": "orecavern",
    "monsters": [
      "Naga Baas"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1469,
    "map": "dreamnexus",
    "ids": [
      734,
      735,
      736,
      737
    ]
  },
  {
    "kind": "plan",
    "questId": 1470,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "monster": "Dark Wyvern",
        "item": "Wyvern Scales",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "monster": "Dark Wyvern",
        "item": "Wyvern Claws",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "monster": "Aether Serpent",
        "item": "Serpent Fangs",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "monster": "Aether Serpent",
        "item": "Serpent Hair",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1471,
    "map": "dreamnexus",
    "ids": [
      738
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 1471,
    "map": "dreamnexus",
    "ids": [
      739
    ],
    "quantity": 11
  },
  {
    "kind": "plan",
    "questId": 1472,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "monster": "Solar Phoenix",
        "item": "Phoenix Tear",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "monster": "Solar Phoenix",
        "item": "Phoenix Blood",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1473,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreamnexus",
        "cell": "r17a",
        "pad": "Up",
        "monster": "Khasaanda",
        "item": "Khasaanda Defeated!"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.09khasaanda-horc",
    category: "Story",
    map: "crossroads",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
