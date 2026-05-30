import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Fireisland / Core Fireisland",
  "description": "Runs the Fireisland / Core Fireisland story route.",
  "tags": [
    "story",
    "fireisland",
    "core"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  },
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  },
  {
    "kind": "kill",
    "questId": 4070,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard",
      "Fyreborn Tiger",
      "Caustocrush"
    ]
  },
  {
    "kind": "kill",
    "questId": 4071,
    "map": "pyrewatch",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4072,
    "map": "pyrewatch",
    "ids": [
      3159
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 4073,
    "map": "pyrewatch",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 4074,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Pikeman Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Firestorm Helm",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Flame Soldier Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Caustocrush Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4075,
    "map": "pyrewatch",
    "ids": [
      3160
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4075,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard"
    ]
  },
  {
    "kind": "plan",
    "questId": 4076,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Kindling",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Flint and Steel"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Coal Creeper",
        "item": "Coal",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4077,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Wickskin Root",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Zard Marrow",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Living Lava",
        "item": "Living Lava Blood",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4077,
    "map": "Pyrewatch",
    "ids": [
      3161
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4078,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "plan",
    "questId": 4079,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Storm Scout",
        "item": "Polish"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Cloth"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Stand Legs",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fyreborn Tiger",
        "item": "Reflectors",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4080,
    "map": "Pyrewatch",
    "ids": [
      3162
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4081,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  },
  {
    "kind": "kill",
    "questId": 4070,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard",
      "Fyreborn Tiger",
      "Caustocrush"
    ]
  },
  {
    "kind": "kill",
    "questId": 4071,
    "map": "pyrewatch",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4072,
    "map": "pyrewatch",
    "ids": [
      3159
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 4073,
    "map": "pyrewatch",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 4074,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Pikeman Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Firestorm Helm",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Flame Soldier Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Caustocrush Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4075,
    "map": "pyrewatch",
    "ids": [
      3160
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4075,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard"
    ]
  },
  {
    "kind": "plan",
    "questId": 4076,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Kindling",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Flint and Steel"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Coal Creeper",
        "item": "Coal",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4077,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Wickskin Root",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Zard Marrow",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Living Lava",
        "item": "Living Lava Blood",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4077,
    "map": "Pyrewatch",
    "ids": [
      3161
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4078,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "plan",
    "questId": 4079,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Storm Scout",
        "item": "Polish"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Cloth"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Stand Legs",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fyreborn Tiger",
        "item": "Reflectors",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4080,
    "map": "Pyrewatch",
    "ids": [
      3162
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4081,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4128,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4129,
    "map": "feverfew",
    "monsters": [
      "Locked Chest"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4130,
    "map": "feverfew",
    "ids": [
      3246,
      3247
    ]
  },
  {
    "kind": "chain",
    "questId": 4130
  },
  {
    "kind": "mapItem",
    "questId": 4131,
    "map": "feverfew",
    "ids": [
      3245
    ]
  },
  {
    "kind": "kill",
    "questId": 4131,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Major",
      "Firestorm Knight",
      "Firestorm Major"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4132,
    "map": "feverfew",
    "ids": [
      3244
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 4133,
    "map": "feverfew",
    "ids": [
      3243
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4133,
    "map": "feverfew",
    "monsters": [
      "Twisted Undine"
    ]
  },
  {
    "kind": "plan",
    "questId": 4134,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Salamander Tongue",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Feverfew Vase",
        "item": "Adderoot Powder",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Shadowbane Brine",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Charred Claw",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Whispered Regret"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4135,
    "map": "feverfew",
    "ids": [
      3248
    ]
  },
  {
    "kind": "kill",
    "questId": 4136,
    "map": "feverfew",
    "monsters": [
      "Blazebinder"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4137,
    "map": "feverfew",
    "ids": [
      3242
    ],
    "quantity": 10
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Burning Ember",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Stoneskin Shard",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Last Breath",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Undine's Tear",
        "quantity": 3
      },
      {
        "kind": "jump",
        "cell": "Cut2",
        "pad": "Left"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4139,
    "map": "feverfew",
    "monsters": [
      "Feverfew Vase",
      "Twisted Undine",
      "Locked Chest"
    ]
  },
  {
    "kind": "kill",
    "questId": 4140,
    "map": "feverfew",
    "monsters": [
      "Coral Creeper",
      "Twisted Undine",
      "Salamander"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4141,
    "map": "feverfew",
    "ids": [
      3241
    ]
  },
  {
    "kind": "kill",
    "questId": 4142,
    "map": "feverfew",
    "monsters": [
      "Major Thermas"
    ]
  },
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  },
  {
    "kind": "kill",
    "questId": 4070,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard",
      "Fyreborn Tiger",
      "Caustocrush"
    ]
  },
  {
    "kind": "kill",
    "questId": 4071,
    "map": "pyrewatch",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4072,
    "map": "pyrewatch",
    "ids": [
      3159
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 4073,
    "map": "pyrewatch",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 4074,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Pikeman Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Firestorm Helm",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Flame Soldier Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Caustocrush Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4075,
    "map": "pyrewatch",
    "ids": [
      3160
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4075,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard"
    ]
  },
  {
    "kind": "plan",
    "questId": 4076,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Kindling",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Flint and Steel"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Coal Creeper",
        "item": "Coal",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4077,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Wickskin Root",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Zard Marrow",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Living Lava",
        "item": "Living Lava Blood",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4077,
    "map": "Pyrewatch",
    "ids": [
      3161
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4078,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "plan",
    "questId": 4079,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Storm Scout",
        "item": "Polish"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Cloth"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Stand Legs",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fyreborn Tiger",
        "item": "Reflectors",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4080,
    "map": "Pyrewatch",
    "ids": [
      3162
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4081,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4128,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4129,
    "map": "feverfew",
    "monsters": [
      "Locked Chest"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4130,
    "map": "feverfew",
    "ids": [
      3246,
      3247
    ]
  },
  {
    "kind": "chain",
    "questId": 4130
  },
  {
    "kind": "mapItem",
    "questId": 4131,
    "map": "feverfew",
    "ids": [
      3245
    ]
  },
  {
    "kind": "kill",
    "questId": 4131,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Major",
      "Firestorm Knight",
      "Firestorm Major"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4132,
    "map": "feverfew",
    "ids": [
      3244
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 4133,
    "map": "feverfew",
    "ids": [
      3243
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4133,
    "map": "feverfew",
    "monsters": [
      "Twisted Undine"
    ]
  },
  {
    "kind": "plan",
    "questId": 4134,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Salamander Tongue",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Feverfew Vase",
        "item": "Adderoot Powder",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Shadowbane Brine",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Charred Claw",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Whispered Regret"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4135,
    "map": "feverfew",
    "ids": [
      3248
    ]
  },
  {
    "kind": "kill",
    "questId": 4136,
    "map": "feverfew",
    "monsters": [
      "Blazebinder"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4137,
    "map": "feverfew",
    "ids": [
      3242
    ],
    "quantity": 10
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Burning Ember",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Stoneskin Shard",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Last Breath",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Undine's Tear",
        "quantity": 3
      },
      {
        "kind": "jump",
        "cell": "Cut2",
        "pad": "Left"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4139,
    "map": "feverfew",
    "monsters": [
      "Feverfew Vase",
      "Twisted Undine",
      "Locked Chest"
    ]
  },
  {
    "kind": "kill",
    "questId": 4140,
    "map": "feverfew",
    "monsters": [
      "Coral Creeper",
      "Twisted Undine",
      "Salamander"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4141,
    "map": "feverfew",
    "ids": [
      3241
    ]
  },
  {
    "kind": "kill",
    "questId": 4142,
    "map": "feverfew",
    "monsters": [
      "Major Thermas"
    ]
  },
  {
    "kind": "kill",
    "questId": 4201,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll",
      "Infernal Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4202,
    "map": "phoenixrise",
    "monsters": [
      "Infernal Goblin",
      "Lava Troll",
      "Gargrowl"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4203,
    "map": "phoenixrise",
    "ids": [
      3283
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4204,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll",
      "Firestorm Tiger",
      "Infernal Goblin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4205,
    "map": "phoenixrise",
    "ids": [
      3285
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4206,
    "map": "phoenixrise",
    "ids": [
      3282
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 4207,
    "map": "phoenixrise",
    "monsters": [
      "Pyrric Ursus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4208,
    "map": "phoenixrise",
    "ids": [
      3284
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 4208,
    "map": "phoenixrise",
    "monsters": [
      "Infernal Goblin"
    ]
  },
  {
    "kind": "plan",
    "questId": 4209,
    "actions": [
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Lava Troll",
        "item": "Lava Troll Disarmed",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Infernal Goblin",
        "item": "Goblin Claws",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Firestorm Tiger",
        "item": "Tiger Fang",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Pyrric Ursus",
        "item": "Ursus Shard",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4210,
    "actions": [
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Lava Troll",
        "item": "Sacred Flame"
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Infernal Goblin",
        "item": "Lava Rune",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Firestorm Tiger",
        "item": "Tiger Claw",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Pyrric Ursus",
        "item": "Pyrric Gem"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4211,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll"
    ]
  },
  {
    "kind": "kill",
    "questId": 4212,
    "map": "phoenixrise",
    "monsters": [
      "Gargrowl"
    ]
  },
  {
    "kind": "kill",
    "questId": 4213,
    "map": "phoenixrise",
    "monsters": [
      "Cinderclaw"
    ]
  },
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  },
  {
    "kind": "kill",
    "questId": 4070,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard",
      "Fyreborn Tiger",
      "Caustocrush"
    ]
  },
  {
    "kind": "kill",
    "questId": 4071,
    "map": "pyrewatch",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4072,
    "map": "pyrewatch",
    "ids": [
      3159
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 4073,
    "map": "pyrewatch",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 4074,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Pikeman Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Firestorm Helm",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Flame Soldier Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Caustocrush Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4075,
    "map": "pyrewatch",
    "ids": [
      3160
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4075,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard"
    ]
  },
  {
    "kind": "plan",
    "questId": 4076,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Kindling",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Flint and Steel"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Coal Creeper",
        "item": "Coal",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4077,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Wickskin Root",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Zard Marrow",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Living Lava",
        "item": "Living Lava Blood",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4077,
    "map": "Pyrewatch",
    "ids": [
      3161
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4078,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "plan",
    "questId": 4079,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Storm Scout",
        "item": "Polish"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Cloth"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Stand Legs",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fyreborn Tiger",
        "item": "Reflectors",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4080,
    "map": "Pyrewatch",
    "ids": [
      3162
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4081,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4128,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4129,
    "map": "feverfew",
    "monsters": [
      "Locked Chest"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4130,
    "map": "feverfew",
    "ids": [
      3246,
      3247
    ]
  },
  {
    "kind": "chain",
    "questId": 4130
  },
  {
    "kind": "mapItem",
    "questId": 4131,
    "map": "feverfew",
    "ids": [
      3245
    ]
  },
  {
    "kind": "kill",
    "questId": 4131,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Major",
      "Firestorm Knight",
      "Firestorm Major"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4132,
    "map": "feverfew",
    "ids": [
      3244
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 4133,
    "map": "feverfew",
    "ids": [
      3243
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4133,
    "map": "feverfew",
    "monsters": [
      "Twisted Undine"
    ]
  },
  {
    "kind": "plan",
    "questId": 4134,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Salamander Tongue",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Feverfew Vase",
        "item": "Adderoot Powder",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Shadowbane Brine",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Charred Claw",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Whispered Regret"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4135,
    "map": "feverfew",
    "ids": [
      3248
    ]
  },
  {
    "kind": "kill",
    "questId": 4136,
    "map": "feverfew",
    "monsters": [
      "Blazebinder"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4137,
    "map": "feverfew",
    "ids": [
      3242
    ],
    "quantity": 10
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Burning Ember",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Stoneskin Shard",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Last Breath",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Undine's Tear",
        "quantity": 3
      },
      {
        "kind": "jump",
        "cell": "Cut2",
        "pad": "Left"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4139,
    "map": "feverfew",
    "monsters": [
      "Feverfew Vase",
      "Twisted Undine",
      "Locked Chest"
    ]
  },
  {
    "kind": "kill",
    "questId": 4140,
    "map": "feverfew",
    "monsters": [
      "Coral Creeper",
      "Twisted Undine",
      "Salamander"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4141,
    "map": "feverfew",
    "ids": [
      3241
    ]
  },
  {
    "kind": "kill",
    "questId": 4142,
    "map": "feverfew",
    "monsters": [
      "Major Thermas"
    ]
  },
  {
    "kind": "kill",
    "questId": 4201,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll",
      "Infernal Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4202,
    "map": "phoenixrise",
    "monsters": [
      "Infernal Goblin",
      "Lava Troll",
      "Gargrowl"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4203,
    "map": "phoenixrise",
    "ids": [
      3283
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4204,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll",
      "Firestorm Tiger",
      "Infernal Goblin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4205,
    "map": "phoenixrise",
    "ids": [
      3285
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4206,
    "map": "phoenixrise",
    "ids": [
      3282
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 4207,
    "map": "phoenixrise",
    "monsters": [
      "Pyrric Ursus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4208,
    "map": "phoenixrise",
    "ids": [
      3284
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 4208,
    "map": "phoenixrise",
    "monsters": [
      "Infernal Goblin"
    ]
  },
  {
    "kind": "plan",
    "questId": 4209,
    "actions": [
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Lava Troll",
        "item": "Lava Troll Disarmed",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Infernal Goblin",
        "item": "Goblin Claws",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Firestorm Tiger",
        "item": "Tiger Fang",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Pyrric Ursus",
        "item": "Ursus Shard",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4210,
    "actions": [
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Lava Troll",
        "item": "Sacred Flame"
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Infernal Goblin",
        "item": "Lava Rune",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Firestorm Tiger",
        "item": "Tiger Claw",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Pyrric Ursus",
        "item": "Pyrric Gem"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4211,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll"
    ]
  },
  {
    "kind": "kill",
    "questId": 4212,
    "map": "phoenixrise",
    "monsters": [
      "Gargrowl"
    ]
  },
  {
    "kind": "kill",
    "questId": 4213,
    "map": "phoenixrise",
    "monsters": [
      "Cinderclaw"
    ]
  },
  {
    "kind": "kill",
    "questId": 4216,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4217,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 4218,
    "map": "Fireforge",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "kill",
    "questId": 4219,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4220,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Corporal"
    ]
  },
  {
    "kind": "kill",
    "questId": 4221,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Tiger"
    ]
  },
  {
    "kind": "kill",
    "questId": 4222,
    "map": "Fireforge",
    "monsters": [
      "Tiger Cavalry"
    ]
  },
  {
    "kind": "kill",
    "questId": 4223,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Major"
    ]
  },
  {
    "kind": "kill",
    "questId": 4224,
    "map": "Fireforge",
    "monsters": [
      "Blazebinder"
    ]
  },
  {
    "kind": "kill",
    "questId": 4225,
    "map": "Fireforge",
    "monsters": [
      "Firestorm General"
    ]
  },
  {
    "kind": "kill",
    "questId": 4226,
    "map": "Fireforge",
    "monsters": [
      "Flamewing"
    ]
  },
  {
    "kind": "kill",
    "questId": 4230,
    "map": "Fireforge",
    "monsters": [
      "Tyndarius"
    ]
  },
  {
    "kind": "kill",
    "questId": 4054,
    "map": "Embersea",
    "monsters": [
      "Flame Soldier",
      "Storm Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4055,
    "map": "Embersea",
    "ids": [
      3153
    ],
    "quantity": 22
  },
  {
    "kind": "kill",
    "questId": 4055,
    "map": "Embersea",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 4056,
    "map": "Embersea",
    "monsters": [
      "Coal Creeper",
      "Pyradon",
      "Fyresyn"
    ]
  },
  {
    "kind": "kill",
    "questId": 4070,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard",
      "Fyreborn Tiger",
      "Caustocrush"
    ]
  },
  {
    "kind": "kill",
    "questId": 4071,
    "map": "pyrewatch",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4072,
    "map": "pyrewatch",
    "ids": [
      3159
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 4073,
    "map": "pyrewatch",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 4074,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Pikeman Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fire Pikeman",
        "item": "Firestorm Helm",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Flame Soldier Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Caustocrush Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4075,
    "map": "pyrewatch",
    "ids": [
      3160
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4075,
    "map": "pyrewatch",
    "monsters": [
      "Lavazard"
    ]
  },
  {
    "kind": "plan",
    "questId": 4076,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Kindling",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Caustocrush",
        "item": "Flint and Steel"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Coal Creeper",
        "item": "Coal",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4077,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Wickskin Root",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Lavazard",
        "item": "Zard Marrow",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Living Lava",
        "item": "Living Lava Blood",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4077,
    "map": "Pyrewatch",
    "ids": [
      3161
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4078,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "plan",
    "questId": 4079,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Storm Scout",
        "item": "Polish"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Cloth"
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Flame Soldier",
        "item": "Stand Legs",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Pyrewatch",
        "monster": "Fyreborn Tiger",
        "item": "Reflectors",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4080,
    "map": "Pyrewatch",
    "ids": [
      3162
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4081,
    "map": "Pyrewatch",
    "monsters": [
      "Storm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4128,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4129,
    "map": "feverfew",
    "monsters": [
      "Locked Chest"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4130,
    "map": "feverfew",
    "ids": [
      3246,
      3247
    ]
  },
  {
    "kind": "chain",
    "questId": 4130
  },
  {
    "kind": "mapItem",
    "questId": 4131,
    "map": "feverfew",
    "ids": [
      3245
    ]
  },
  {
    "kind": "kill",
    "questId": 4131,
    "map": "feverfew",
    "monsters": [
      "Firestorm Knight",
      "Firestorm Major",
      "Firestorm Knight",
      "Firestorm Major"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4132,
    "map": "feverfew",
    "ids": [
      3244
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 4133,
    "map": "feverfew",
    "ids": [
      3243
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4133,
    "map": "feverfew",
    "monsters": [
      "Twisted Undine"
    ]
  },
  {
    "kind": "plan",
    "questId": 4134,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Salamander Tongue",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Feverfew Vase",
        "item": "Adderoot Powder",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Shadowbane Brine",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Charred Claw",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Whispered Regret"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4135,
    "map": "feverfew",
    "ids": [
      3248
    ]
  },
  {
    "kind": "kill",
    "questId": 4136,
    "map": "feverfew",
    "monsters": [
      "Blazebinder"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4137,
    "map": "feverfew",
    "ids": [
      3242
    ],
    "quantity": 10
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4138,
    "actions": [
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Salamander",
        "item": "Burning Ember",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Coral Creeper",
        "item": "Stoneskin Shard",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Firestorm Knight",
        "item": "Last Breath",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "feverfew",
        "monster": "Twisted Undine",
        "item": "Undine's Tear",
        "quantity": 3
      },
      {
        "kind": "jump",
        "cell": "Cut2",
        "pad": "Left"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4139,
    "map": "feverfew",
    "monsters": [
      "Feverfew Vase",
      "Twisted Undine",
      "Locked Chest"
    ]
  },
  {
    "kind": "kill",
    "questId": 4140,
    "map": "feverfew",
    "monsters": [
      "Coral Creeper",
      "Twisted Undine",
      "Salamander"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4141,
    "map": "feverfew",
    "ids": [
      3241
    ]
  },
  {
    "kind": "kill",
    "questId": 4142,
    "map": "feverfew",
    "monsters": [
      "Major Thermas"
    ]
  },
  {
    "kind": "kill",
    "questId": 4201,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll",
      "Infernal Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4202,
    "map": "phoenixrise",
    "monsters": [
      "Infernal Goblin",
      "Lava Troll",
      "Gargrowl"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4203,
    "map": "phoenixrise",
    "ids": [
      3283
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4204,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll",
      "Firestorm Tiger",
      "Infernal Goblin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4205,
    "map": "phoenixrise",
    "ids": [
      3285
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4206,
    "map": "phoenixrise",
    "ids": [
      3282
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 4207,
    "map": "phoenixrise",
    "monsters": [
      "Pyrric Ursus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4208,
    "map": "phoenixrise",
    "ids": [
      3284
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 4208,
    "map": "phoenixrise",
    "monsters": [
      "Infernal Goblin"
    ]
  },
  {
    "kind": "plan",
    "questId": 4209,
    "actions": [
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Lava Troll",
        "item": "Lava Troll Disarmed",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Infernal Goblin",
        "item": "Goblin Claws",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Firestorm Tiger",
        "item": "Tiger Fang",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Pyrric Ursus",
        "item": "Ursus Shard",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4210,
    "actions": [
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Lava Troll",
        "item": "Sacred Flame"
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Infernal Goblin",
        "item": "Lava Rune",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Firestorm Tiger",
        "item": "Tiger Claw",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "monster": "Pyrric Ursus",
        "item": "Pyrric Gem"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4211,
    "map": "phoenixrise",
    "monsters": [
      "Lava Troll"
    ]
  },
  {
    "kind": "kill",
    "questId": 4212,
    "map": "phoenixrise",
    "monsters": [
      "Gargrowl"
    ]
  },
  {
    "kind": "kill",
    "questId": 4213,
    "map": "phoenixrise",
    "monsters": [
      "Cinderclaw"
    ]
  },
  {
    "kind": "kill",
    "questId": 4216,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 4217,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 4218,
    "map": "Fireforge",
    "monsters": [
      "Fire Pikeman"
    ]
  },
  {
    "kind": "kill",
    "questId": 4219,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4220,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Corporal"
    ]
  },
  {
    "kind": "kill",
    "questId": 4221,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Tiger"
    ]
  },
  {
    "kind": "kill",
    "questId": 4222,
    "map": "Fireforge",
    "monsters": [
      "Tiger Cavalry"
    ]
  },
  {
    "kind": "kill",
    "questId": 4223,
    "map": "Fireforge",
    "monsters": [
      "Firestorm Major"
    ]
  },
  {
    "kind": "kill",
    "questId": 4224,
    "map": "Fireforge",
    "monsters": [
      "Blazebinder"
    ]
  },
  {
    "kind": "kill",
    "questId": 4225,
    "map": "Fireforge",
    "monsters": [
      "Firestorm General"
    ]
  },
  {
    "kind": "kill",
    "questId": 4226,
    "map": "Fireforge",
    "monsters": [
      "Flamewing"
    ]
  },
  {
    "kind": "kill",
    "questId": 4230,
    "map": "Fireforge",
    "monsters": [
      "Tyndarius"
    ]
  },
  {
    "kind": "kill",
    "questId": 4231,
    "map": "Lavarun",
    "monsters": [
      "Phedra"
    ]
  },
  {
    "kind": "kill",
    "questId": 4232,
    "map": "Lavarun",
    "monsters": [
      "Mega Tyndarius"
    ]
  },
  {
    "kind": "kill",
    "questId": 4235,
    "map": "Lavarun",
    "monsters": [
      "Firestorm Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 4107,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Marauder",
        "item": "Pieces of Gossip",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Looter",
        "item": "Bits of Hearsay",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Overheard Conversations",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4108,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Marauder",
        "item": "Cryptic Key",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Looter",
        "item": "Partial Cipher",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Reliable(?) Translation",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4109,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Marauder",
        "item": "Burned Letter"
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Looter",
        "item": "Smudged Letter"
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Barely Legible Letter"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4110,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Marauder",
        "item": "Marauders slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Fyreborn Tiger",
        "item": "Fyreborn Tigers slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Fyresyn",
        "item": "Fyresyn slain",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Looter",
        "item": "Looters slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Bandits slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4111,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Bags of Mercantile Goods",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Boxes of Raw Materials",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4112,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Talmin's Propoganda",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Talmin's Doctrine",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4113,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Fyresyn",
        "item": "Fyresyns Put Down",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Fyreborn Tiger",
        "item": "Fyreborn Tigers Put Down",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Pyradon",
        "item": "Pyradons Put Down",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4114,
    "actions": [
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Bandit",
        "item": "Bandit's Ear",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Marauder",
        "item": "Marauder's Finger",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Brimstone",
        "monster": "Brimstone Looter",
        "item": "Looter's Tooth",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4115,
    "map": "Brimstone",
    "monsters": [
      "Chief Talmin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4143,
    "map": "Nightmare",
    "monsters": [
      "Bobble Clown"
    ]
  },
  {
    "kind": "kill",
    "questId": 4144,
    "map": "Nightmare",
    "monsters": [
      "Crazy Clown"
    ]
  },
  {
    "kind": "kill",
    "questId": 4145,
    "map": "Nightmare",
    "monsters": [
      "Castle Spider"
    ]
  },
  {
    "kind": "plan",
    "questId": 4146,
    "actions": [
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Wrasp",
        "item": "Grappling Hook"
      },
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Wrasp",
        "item": "Rope"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4147,
    "map": "Nightmare",
    "ids": [
      3262
    ]
  },
  {
    "kind": "kill",
    "questId": 4148,
    "map": "Nightmare",
    "monsters": [
      "Germs"
    ]
  },
  {
    "kind": "kill",
    "questId": 4149,
    "map": "Nightmare",
    "monsters": [
      "Needle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4150,
    "map": "Nightmare",
    "monsters": [
      "Broken Toy"
    ]
  },
  {
    "kind": "plan",
    "questId": 4151,
    "actions": [
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Unearthed Skeleton",
        "item": "Skeleton Deboned",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Rotfeeder Worm",
        "item": "Rotfeeder squished",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4152,
    "map": "Nightmare",
    "monsters": [
      "Fire Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 4153,
    "map": "Nightmare",
    "monsters": [
      "Flame Elemental"
    ]
  },
  {
    "kind": "plan",
    "questId": 4154,
    "actions": [
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Anglerfish",
        "item": "Anglerfish Defeated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Merdraconian",
        "item": "Merdraconian Defeated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "Nightmare",
        "monster": "Deep Dweller",
        "item": "Deep Dweller defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4155,
    "map": "Nightmare",
    "monsters": [
      "Unearthed Skeleton"
    ]
  },
  {
    "kind": "kill",
    "questId": 4156,
    "map": "Nightmare",
    "monsters": [
      "Nothing"
    ]
  },
  {
    "kind": "kill",
    "questId": 4157,
    "map": "Nightmare",
    "monsters": [
      "Devourax"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.fireisland.core-fireisland",
    category: "Story",
    map: "Embersea",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
