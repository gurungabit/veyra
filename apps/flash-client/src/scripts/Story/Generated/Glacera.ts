import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Glacera Story",
  "description": "This will finish the Glacera Story.",
  "tags": [
    "story",
    "quest",
    "glacera"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3949,
    "map": "glacera",
    "ids": [
      3049
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3950,
    "map": "Glacera",
    "ids": [
      3047
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3949,
    "map": "glacera",
    "ids": [
      3049
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3950,
    "map": "Glacera",
    "ids": [
      3047
    ]
  },
  {
    "kind": "kill",
    "questId": 3951,
    "map": "frozenruins",
    "monsters": [
      "Frost Invader",
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "kill",
    "questId": 3952,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3953,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3954,
    "map": "frozenruins",
    "monsters": [
      "Frost General"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3949,
    "map": "glacera",
    "ids": [
      3049
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3950,
    "map": "Glacera",
    "ids": [
      3047
    ]
  },
  {
    "kind": "kill",
    "questId": 3951,
    "map": "frozenruins",
    "monsters": [
      "Frost Invader",
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "kill",
    "questId": 3952,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3953,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3954,
    "map": "frozenruins",
    "monsters": [
      "Frost General"
    ]
  },
  {
    "kind": "kill",
    "questId": 3958,
    "map": "northstar",
    "monsters": [
      "Monstrous Refugee",
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 3959,
    "map": "northstar",
    "monsters": [
      "Frost Fangbeast",
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 3960,
    "map": "northstar",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3961,
    "map": "northstar",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3972,
    "map": "northstar",
    "ids": [
      3063
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3973,
    "map": "northstar",
    "monsters": [
      "Frost Fangbeast",
      "Frost Invader",
      "Frost Reaper",
      "Frost Superreaper",
      "Monstrous Refugee"
    ]
  },
  {
    "kind": "kill",
    "questId": 3974,
    "map": "northstar",
    "monsters": [
      "Frost Fangbeast",
      "Monstrous Refugee",
      "Frost Fangbeast",
      "Frost Invader",
      "Frost Reaper",
      "Monstrous Refugee"
    ]
  },
  {
    "kind": "kill",
    "questId": 3970,
    "map": "northstar",
    "monsters": [
      "The Queen's Gift"
    ]
  },
  {
    "kind": "kill",
    "questId": 3971,
    "map": "northstar",
    "monsters": [
      "Karok The Fallen"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3949,
    "map": "glacera",
    "ids": [
      3049
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3950,
    "map": "Glacera",
    "ids": [
      3047
    ]
  },
  {
    "kind": "kill",
    "questId": 3951,
    "map": "frozenruins",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 3952,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3953,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3954,
    "map": "frozenruins",
    "monsters": [
      "Frost General"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3949,
    "map": "glacera",
    "ids": [
      3049
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3950,
    "map": "Glacera",
    "ids": [
      3047
    ]
  },
  {
    "kind": "kill",
    "questId": 3951,
    "map": "frozenruins",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 3952,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3953,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3954,
    "map": "frozenruins",
    "monsters": [
      "Frost General"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5587,
    "map": "IceWindPass",
    "ids": [
      5074
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5588,
    "map": "IceWindPass",
    "monsters": [
      "Glacial Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5589,
    "map": "IceWindPass",
    "ids": [
      5075
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5589,
    "map": "IceWindPass",
    "monsters": [
      "Glacial Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5590,
    "map": "IceWindPass",
    "monsters": [
      "Polar Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 5591,
    "map": "IceWindPass",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5592,
    "map": "IceWindPass",
    "monsters": [
      "Frostspawn Symbiote"
    ]
  },
  {
    "kind": "kill",
    "questId": 5593,
    "map": "IceWindPass",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5594,
    "map": "IceWindPass",
    "monsters": [
      "Frostspawn Horror"
    ]
  },
  {
    "kind": "kill",
    "questId": 5595,
    "map": "IceWindPass",
    "monsters": [
      "Frostspawn Troll",
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5596,
    "map": "IceWindPass",
    "monsters": [
      "Polar Golem",
      "Glacial Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5601,
    "map": "icewindwar",
    "monsters": [
      "Soricomorpha"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3907,
    "map": "frozentower",
    "ids": [
      3022
    ]
  },
  {
    "kind": "kill",
    "questId": 3908,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3909,
    "map": "frozentower",
    "ids": [
      3019
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3910,
    "map": "frozentower",
    "ids": [
      3004
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3911,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm",
      "Frostwyrm"
    ]
  },
  {
    "kind": "kill",
    "questId": 3912,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3913,
    "map": "frozentower",
    "ids": [
      3005
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3914,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3915,
    "map": "frozentower",
    "ids": [
      3006
    ]
  },
  {
    "kind": "kill",
    "questId": 3916,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3917,
    "map": "frozentower",
    "ids": [
      3007
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3918,
    "map": "frozentower",
    "ids": [
      3013
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3919,
    "map": "frozentower",
    "ids": [
      3008
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3919,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3920,
    "map": "frozentower",
    "ids": [
      3020
    ]
  },
  {
    "kind": "kill",
    "questId": 3920,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental",
      "Ice Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3921,
    "map": "frozentower",
    "ids": [
      3017
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 3921,
    "map": "frozentower",
    "monsters": [
      "FrostDeep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 3922,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3923,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3924,
    "map": "frozentower",
    "ids": [
      3009
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3012
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 3925,
    "map": "frozentower",
    "ids": [
      3011
    ],
    "quantity": 4
  },
  {
    "kind": "chain",
    "questId": 3925
  },
  {
    "kind": "mapItem",
    "questId": 3926,
    "map": "frozentower",
    "ids": [
      3021
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3927,
    "map": "frozentower",
    "ids": [
      3014
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 3928,
    "map": "frozentower",
    "monsters": [
      "Arctic Eel"
    ]
  },
  {
    "kind": "kill",
    "questId": 3929,
    "map": "frozentower",
    "monsters": [
      "Polar Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3930,
    "map": "frozentower",
    "monsters": [
      "Twisted Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 3931,
    "map": "frozentower",
    "monsters": [
      "Frostwyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3932,
    "map": "frozentower",
    "ids": [
      3016
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3933,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3934,
    "map": "frozentower",
    "monsters": [
      "Rotten Ice"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3935,
    "map": "frozentower",
    "ids": [
      3018
    ],
    "quantity": 13
  },
  {
    "kind": "kill",
    "questId": 3935,
    "map": "frozentower",
    "monsters": [
      "Ice Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 3936,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Invader",
        "item": "FrostSpawn Invader defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3937,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozentower",
        "monster": "Frost Fangbeast",
        "item": "Fangbeasts defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3941,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3942,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3943,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3944,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3945,
    "map": "frozenruins",
    "ids": [
      3050
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3945,
    "map": "frozenruins",
    "monsters": [
      "Frozen Moglinster"
    ]
  },
  {
    "kind": "plan",
    "questId": 3946,
    "actions": [
      {
        "kind": "hunt",
        "map": "frozenruins",
        "monster": "Frost Reaper",
        "item": "Mercury"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3947,
    "actions": [
      {
        "kind": "join",
        "map": "glacera"
      },
      {
        "kind": "mapItem",
        "map": "glacera",
        "id": 3048,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3948,
    "map": "glacera",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3949,
    "map": "glacera",
    "ids": [
      3049
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 3950,
    "map": "Glacera",
    "ids": [
      3047
    ]
  },
  {
    "kind": "kill",
    "questId": 3951,
    "map": "frozenruins",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 3952,
    "map": "frozenruins",
    "monsters": [
      "Frost Fangbeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 3953,
    "map": "frozenruins",
    "monsters": [
      "Frost Reaper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3954,
    "map": "frozenruins",
    "monsters": [
      "Frost General"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5587,
    "map": "IceWindPass",
    "ids": [
      5074
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5588,
    "map": "IceWindPass",
    "monsters": [
      "Glacial Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5589,
    "map": "IceWindPass",
    "ids": [
      5075
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5589,
    "map": "IceWindPass",
    "monsters": [
      "Glacial Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5590,
    "map": "IceWindPass",
    "monsters": [
      "Polar Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 5591,
    "map": "IceWindPass",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5592,
    "map": "IceWindPass",
    "monsters": [
      "Frostspawn Symbiote"
    ]
  },
  {
    "kind": "kill",
    "questId": 5593,
    "map": "IceWindPass",
    "monsters": [
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5594,
    "map": "IceWindPass",
    "monsters": [
      "Frostspawn Horror"
    ]
  },
  {
    "kind": "kill",
    "questId": 5595,
    "map": "IceWindPass",
    "monsters": [
      "Frostspawn Troll",
      "Frost Invader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5596,
    "map": "IceWindPass",
    "monsters": [
      "Polar Golem",
      "Glacial Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5601,
    "map": "icewindwar",
    "monsters": [
      "Soricomorpha"
    ]
  },
  {
    "kind": "kill",
    "questId": 7832,
    "map": "IceDungeon",
    "monsters": [
      "Ice Symbiote",
      "Frosted Banshee",
      "Frozen Undead"
    ]
  },
  {
    "kind": "kill",
    "questId": 7833,
    "map": "IceDungeon",
    "monsters": [
      "Spirit of Ice",
      "Ice Crystal",
      "Frigid Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 7834,
    "map": "IceDungeon",
    "monsters": [
      "Living Ice",
      "Crystallized Elemental",
      "Frozen Demon"
    ]
  },
  {
    "kind": "kill",
    "questId": 7835,
    "map": "IceDungeon",
    "monsters": [
      "Image of Glace"
    ]
  },
  {
    "kind": "kill",
    "questId": 7836,
    "map": "IceDungeon",
    "monsters": [
      "Abel"
    ]
  },
  {
    "kind": "kill",
    "questId": 7837,
    "map": "IceDungeon",
    "monsters": [
      "Shade of Kyanos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7838,
    "map": "IceDungeon",
    "monsters": [
      "Frosted Banshee",
      "Frozen Undead",
      "Ice Symbiote"
    ]
  },
  {
    "kind": "kill",
    "questId": 7839,
    "map": "IceDungeon",
    "monsters": [
      "Spirit of Ice",
      "Ice Crystal",
      "Frigid Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 7840,
    "map": "IceDungeon",
    "monsters": [
      "Living Ice",
      "Crystallized Elemental",
      "Frozen Demon"
    ]
  },
  {
    "kind": "kill",
    "questId": 7841,
    "map": "IceDungeon",
    "monsters": [
      "Image of Glace",
      "Abel",
      "Shade of Kyanos"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.glacera",
    category: "Story",
    map: "frozentower",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
