import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Lost Villa",
  "description": "This script will complete the questline in /lostvilla.",
  "tags": [
    "story",
    "lostvilla",
    "diabolical",
    "hikari",
    "ira",
    "lost",
    "villa"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8048,
    "map": "forestreach",
    "monsters": [
      "Monstrous Imp",
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 8049,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8050,
    "map": "forestreach",
    "ids": [
      8362
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8050,
    "map": "forestreach",
    "monsters": [
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8051,
    "map": "forestreach",
    "ids": [
      8363
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8051,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "kill",
    "questId": 8052,
    "map": "forestreach",
    "monsters": [
      "EldritchWing",
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "kill",
    "questId": 8053,
    "map": "forestreach",
    "monsters": [
      "Eldritch Parasite",
      "Monstrous Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 8054,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter",
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8055,
    "map": "forestreach",
    "ids": [
      8364
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8056,
    "map": "backroom",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8057,
    "map": "backroom",
    "ids": [
      8365
    ]
  },
  {
    "kind": "kill",
    "questId": 8058,
    "map": "backroom",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8059,
    "map": "backroom",
    "ids": [
      8366
    ]
  },
  {
    "kind": "kill",
    "questId": 8060,
    "map": "backroom",
    "monsters": [
      "Book Wyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 8067,
    "map": "deepforest",
    "monsters": [
      "Creeping Gaze"
    ]
  },
  {
    "kind": "kill",
    "questId": 8068,
    "map": "deepforest",
    "monsters": [
      "Eldritch Stalker"
    ]
  },
  {
    "kind": "kill",
    "questId": 8069,
    "map": "deepforest",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8070,
    "map": "deepforest",
    "ids": [
      8415
    ]
  },
  {
    "kind": "kill",
    "questId": 8071,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8072,
    "map": "deepforest",
    "ids": [
      8416
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8073,
    "map": "deepforest",
    "monsters": [
      "Creeping Gaze"
    ]
  },
  {
    "kind": "kill",
    "questId": 8074,
    "map": "deepforest",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8075,
    "map": "deepforest",
    "ids": [
      8418
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8076,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "kill",
    "questId": 8077,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "kill",
    "questId": 8078,
    "map": "deepforest",
    "monsters": [
      "Cthulhoid"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8079,
    "map": "deepforest",
    "ids": [
      8419
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 8079,
    "map": "deepforest",
    "ids": [
      8420
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 8080,
    "map": "deepforest",
    "monsters": [
      "Aberrant Horror"
    ]
  },
  {
    "kind": "kill",
    "questId": 7875,
    "map": "timevoid",
    "monsters": [
      "Unending Avatar"
    ]
  },
  {
    "kind": "kill",
    "questId": 7876,
    "map": "twilightedge",
    "monsters": [
      "ChaosWeaver Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 7877,
    "map": "mudluk",
    "monsters": [
      "Tiger Leech"
    ]
  },
  {
    "kind": "kill",
    "questId": 7878,
    "map": "deathsrealm",
    "monsters": [
      "Death Alive"
    ]
  },
  {
    "kind": "kill",
    "questId": 7879,
    "map": "thevoid",
    "monsters": [
      "Void Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 7880,
    "actions": [
      {
        "kind": "hunt",
        "map": "banished",
        "cell": "r14",
        "pad": "Left",
        "monster": "Desterrat Moya",
        "item": "Infected Tentacle"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8458,
    "map": "transformation",
    "monsters": [
      "Eldritch Abomination"
    ]
  },
  {
    "kind": "kill",
    "questId": 8459,
    "map": "blackhorn",
    "monsters": [
      "Bonefeeder Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 8460,
    "map": "noxustower",
    "monsters": [
      "Lightguard Caster"
    ]
  },
  {
    "kind": "kill",
    "questId": 8461,
    "map": "aozorahills",
    "monsters": [
      "Ghostly Hasu"
    ]
  },
  {
    "kind": "plan",
    "questId": 8462,
    "actions": []
  },
  {
    "kind": "kill",
    "questId": 8463,
    "map": "ghostnexus",
    "monsters": [
      "Manifestation of Grief"
    ]
  },
  {
    "kind": "kill",
    "questId": 8464,
    "map": "somnia",
    "monsters": [
      "Dream Larva"
    ]
  },
  {
    "kind": "kill",
    "questId": 8048,
    "map": "forestreach",
    "monsters": [
      "Monstrous Imp",
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 8049,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8050,
    "map": "forestreach",
    "ids": [
      8362
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8050,
    "map": "forestreach",
    "monsters": [
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8051,
    "map": "forestreach",
    "ids": [
      8363
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8051,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter"
    ]
  },
  {
    "kind": "kill",
    "questId": 8052,
    "map": "forestreach",
    "monsters": [
      "EldritchWing",
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "kill",
    "questId": 8053,
    "map": "forestreach",
    "monsters": [
      "Eldritch Parasite",
      "Monstrous Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 8054,
    "map": "forestreach",
    "monsters": [
      "Chaos Spitter",
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8055,
    "map": "forestreach",
    "ids": [
      8364
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8056,
    "map": "backroom",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8057,
    "map": "backroom",
    "ids": [
      8365
    ]
  },
  {
    "kind": "kill",
    "questId": 8058,
    "map": "backroom",
    "monsters": [
      "Chaos Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8059,
    "map": "backroom",
    "ids": [
      8366
    ]
  },
  {
    "kind": "kill",
    "questId": 8060,
    "map": "backroom",
    "monsters": [
      "Book Wyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 8067,
    "map": "deepforest",
    "monsters": [
      "Creeping Gaze"
    ]
  },
  {
    "kind": "kill",
    "questId": 8068,
    "map": "deepforest",
    "monsters": [
      "Eldritch Stalker"
    ]
  },
  {
    "kind": "kill",
    "questId": 8069,
    "map": "deepforest",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8070,
    "map": "deepforest",
    "ids": [
      8415
    ]
  },
  {
    "kind": "kill",
    "questId": 8071,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8072,
    "map": "deepforest",
    "ids": [
      8416
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8073,
    "map": "deepforest",
    "monsters": [
      "Creeping Gaze"
    ]
  },
  {
    "kind": "kill",
    "questId": 8074,
    "map": "deepforest",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8075,
    "map": "deepforest",
    "ids": [
      8418
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8076,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "kill",
    "questId": 8077,
    "map": "deepforest",
    "monsters": [
      "Deep Truffle"
    ]
  },
  {
    "kind": "kill",
    "questId": 8078,
    "map": "deepforest",
    "monsters": [
      "Cthulhoid"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8079,
    "map": "deepforest",
    "ids": [
      8419
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 8079,
    "map": "deepforest",
    "ids": [
      8420
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 8080,
    "map": "deepforest",
    "monsters": [
      "Aberrant Horror"
    ]
  },
  {
    "kind": "kill",
    "questId": 9040,
    "map": "brokenwoods",
    "monsters": [
      "Extrikiti"
    ]
  },
  {
    "kind": "kill",
    "questId": 9041,
    "map": "deepforest",
    "monsters": [
      "Aberrant Horror"
    ]
  },
  {
    "kind": "chain",
    "questId": 746
  },
  {
    "kind": "chain",
    "questId": 739,
    "rewardId": 5420
  },
  {
    "kind": "chain",
    "questId": 9042
  },
  {
    "kind": "kill",
    "questId": 9043,
    "map": "thevoid",
    "monsters": [
      "Dark Djinn"
    ]
  },
  {
    "kind": "kill",
    "questId": 9044,
    "map": "brokenwoods",
    "monsters": [
      "Eldritch Amalgamation"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9561,
    "map": "lostvilla",
    "ids": [
      12649,
      12650
    ]
  },
  {
    "kind": "kill",
    "questId": 9561,
    "map": "lostvilla",
    "monsters": [
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 9562,
    "map": "lostvilla",
    "monsters": [
      "Gorewyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9563,
    "map": "lostvilla",
    "ids": [
      12651
    ]
  },
  {
    "kind": "kill",
    "questId": 9563,
    "map": "lostvilla",
    "monsters": [
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9564,
    "map": "lostvilla",
    "ids": [
      12652
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 9564,
    "map": "lostvilla",
    "monsters": [
      "Diabolical Hoard"
    ]
  },
  {
    "kind": "kill",
    "questId": 9565,
    "map": "lostvilla",
    "monsters": [
      "Gorewyrm",
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9566,
    "map": "lostvilla",
    "ids": [
      12653
    ]
  },
  {
    "kind": "kill",
    "questId": 9566,
    "map": "lostvilla",
    "monsters": [
      "Diabolical Hoard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9567,
    "map": "lostvilla",
    "ids": [
      12654
    ]
  },
  {
    "kind": "kill",
    "questId": 9567,
    "map": "noxustower",
    "monsters": [
      "Lightguard Caster"
    ]
  },
  {
    "kind": "kill",
    "questId": 9568,
    "map": "lostvilla",
    "monsters": [
      "Mutilated Atrocity"
    ]
  },
  {
    "kind": "kill",
    "questId": 9569,
    "map": "lostvilla",
    "monsters": [
      "Eldritch Parasite"
    ]
  },
  {
    "kind": "kill",
    "questId": 9570,
    "map": "lostvilla",
    "monsters": [
      "Covetous Disgrace"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lost-villa",
    category: "Story",
    map: "forestreach",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
