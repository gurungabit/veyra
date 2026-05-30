import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Summer2015adventure Map / Core Summer",
  "description": "Runs the Summer2015adventure Map / Core Summer story route.",
  "tags": [
    "story",
    "summer2015adventure",
    "map",
    "core",
    "summer"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "chain",
    "questId": 4263
  },
  {
    "kind": "plan",
    "questId": 4264,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "cell": "r4",
        "pad": "Left",
        "monster": "*",
        "item": "Proof of Undead"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4265,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "cell": "r4",
        "pad": "Left",
        "monster": "*",
        "item": "Space Zombie Gun",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4266,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "cell": "r4",
        "pad": "Left",
        "monster": "*",
        "item": "Troopers Interrogated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4267,
    "map": "dreadspace",
    "monsters": [
      "Defense Turret",
      "Vaderix"
    ]
  },
  {
    "kind": "kill",
    "questId": 4268,
    "map": "dreadspace",
    "monsters": [
      "Cyber Horg"
    ]
  },
  {
    "kind": "plan",
    "questId": 4269,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Undead Space Warrior",
        "item": "Holodeck Force Field",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Undead Star Ranger",
        "item": "Holodeck EbilCorp AI"
      },
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Undead Space Marine",
        "item": "Holodeck Projector",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Cyber Horg",
        "item": "Holodeck Power Source"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4270,
    "map": "dreadspace",
    "monsters": [
      "Dra'gorn",
      "Dra'gorn",
      "Dra'gorn"
    ]
  },
  {
    "kind": "plan",
    "questId": 4271,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Red Trobble",
        "item": "Red Space Fabric",
        "quantity": 6,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4273,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Holo Gunslinger",
        "item": "Cowboy defeated",
        "quantity": 5,
        "isTemp": false
      },
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Vaderix",
        "item": "Alien defeated",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4272,
    "actions": [
      {
        "kind": "hunt",
        "map": "dreadspace",
        "monster": "Holo Gunslinger",
        "item": "J6's Helmet"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4274,
    "map": "dreadspace",
    "monsters": [
      "Jack"
    ]
  },
  {
    "kind": "kill",
    "questId": 4275,
    "map": "dreadspace",
    "monsters": [
      "Old Twilly"
    ]
  },
  {
    "kind": "kill",
    "questId": 4276,
    "map": "dreadspace",
    "monsters": [
      "Hologram Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4277,
    "map": "dreadspace",
    "ids": [
      3423
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 4278,
    "map": "dreadspace",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 4279,
    "map": "dreadspace",
    "monsters": [
      "Defense Turret"
    ]
  },
  {
    "kind": "kill",
    "questId": 4280,
    "map": "dreadspace",
    "monsters": [
      "Vaderix"
    ]
  },
  {
    "kind": "kill",
    "questId": 4281,
    "map": "dreadspace",
    "monsters": [
      "Undead Space Marine"
    ]
  },
  {
    "kind": "kill",
    "questId": 4282,
    "map": "dreadspace",
    "monsters": [
      "Undead Space Marine"
    ]
  },
  {
    "kind": "kill",
    "questId": 4283,
    "map": "dreadspace",
    "monsters": [
      "Undead Space Marine",
      "Undead Space Warrior",
      "Cyber Horg",
      "Vaderix"
    ]
  },
  {
    "kind": "kill",
    "questId": 4284,
    "map": "dreadspace",
    "monsters": [
      "Cyber Horg"
    ]
  },
  {
    "kind": "kill",
    "questId": 4285,
    "map": "dreadspace",
    "monsters": [
      "Dread Space"
    ]
  },
  {
    "kind": "kill",
    "questId": 4286,
    "map": "dreadspace",
    "monsters": [
      "Cyborg Beast Core"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4296,
    "map": "deadmoor",
    "ids": [
      3457
    ]
  },
  {
    "kind": "kill",
    "questId": 4297,
    "map": "deadmoor",
    "monsters": [
      "Deadmoor Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 4298,
    "map": "deadmoor",
    "monsters": [
      "Toxic Souleater"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4299,
    "map": "deadmoor",
    "ids": [
      3448
    ]
  },
  {
    "kind": "kill",
    "questId": 4300,
    "map": "deadmoor",
    "monsters": [
      "Nightmare"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4301,
    "map": "deadmoor",
    "ids": [
      3459
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4302,
    "map": "deadmoor",
    "ids": [
      3449,
      3450,
      3451,
      3452,
      3453,
      3454
    ]
  },
  {
    "kind": "kill",
    "questId": 4303,
    "map": "deadmoor",
    "monsters": [
      "Toxic Souleater"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4304,
    "map": "deadmoor",
    "ids": [
      3455
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 4305,
    "map": "deadmoor",
    "monsters": [
      "Geist"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4306,
    "map": "deadmoor",
    "ids": [
      3458,
      3460,
      3461,
      3462,
      3463,
      3464,
      3465
    ]
  },
  {
    "kind": "kill",
    "questId": 4307,
    "map": "deadmoor",
    "monsters": [
      "Banshee Mallora"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4312,
    "map": "Drearia",
    "ids": [
      3485
    ]
  },
  {
    "kind": "chain",
    "questId": 4312
  },
  {
    "kind": "kill",
    "questId": 4313,
    "map": "Drearia",
    "monsters": [
      "Dark Makai"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4314,
    "map": "Drearia",
    "ids": [
      3466
    ]
  },
  {
    "kind": "kill",
    "questId": 4314,
    "map": "Drearia",
    "monsters": [
      "Dark Makai"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4315,
    "map": "Drearia",
    "ids": [
      3467
    ]
  },
  {
    "kind": "kill",
    "questId": 4315,
    "map": "Drearia",
    "monsters": [
      "Green Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4316,
    "map": "Drearia",
    "ids": [
      3468
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4317,
    "map": "SwordHavenPink",
    "ids": [
      3469
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4318,
    "map": "SwordHavenPink",
    "ids": [
      3486
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4318,
    "map": "SwordHavenPink",
    "monsters": [
      "Pink Slime"
    ]
  },
  {
    "kind": "kill",
    "questId": 4319,
    "map": "SewerPink",
    "monsters": [
      "Pink Rat"
    ]
  },
  {
    "kind": "kill",
    "questId": 4320,
    "map": "SewerPink",
    "monsters": [
      "Cutie Grumbley"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4321,
    "map": "PineWoodPink",
    "ids": [
      3470
    ]
  },
  {
    "kind": "kill",
    "questId": 4321,
    "map": "PineWoodPink",
    "monsters": [
      "Pink Grizzly"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4322,
    "map": "PineWoodPink",
    "ids": [
      3471
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4322,
    "map": "PineWoodPink",
    "monsters": [
      "Pink Shell Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4323,
    "map": "PineWoodPink",
    "monsters": [
      "Sparkletooth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4324,
    "map": "Citadel",
    "ids": [
      3472
    ]
  },
  {
    "kind": "plan",
    "questId": 4325,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Citadel",
        "id": 3481
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4326,
    "map": "Pastelia",
    "monsters": [
      "Happy Cloud"
    ]
  },
  {
    "kind": "kill",
    "questId": 4327,
    "map": "Pastelia",
    "monsters": [
      "Cutie Makai"
    ]
  },
  {
    "kind": "kill",
    "questId": 4328,
    "map": "Pastelia",
    "monsters": [
      "Pink Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4329,
    "map": "Pastelia",
    "ids": [
      3473
    ]
  },
  {
    "kind": "kill",
    "questId": 4330,
    "map": "Pastelia",
    "monsters": [
      "Chaos Queen Beleen"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1293,
    "map": "Terrarium",
    "ids": [
      586
    ]
  },
  {
    "kind": "kill",
    "questId": 1294,
    "map": "Terrarium",
    "monsters": [
      "Dustbunny of Doom"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1295,
    "map": "Terrarium",
    "ids": [
      587
    ],
    "quantity": 10
  },
  {
    "kind": "mapItem",
    "questId": 1296,
    "map": "Terrarium",
    "ids": [
      588
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1297,
    "map": "Terrarium",
    "monsters": [
      "Death on Wings"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1298,
    "map": "Terrarium",
    "ids": [
      589,
      590,
      591,
      592,
      593
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1299,
    "map": "Terrarium",
    "ids": [
      593,
      594,
      595,
      596,
      604
    ]
  },
  {
    "kind": "kill",
    "questId": 1300,
    "map": "Terrarium",
    "monsters": [
      "Death on Wings"
    ]
  },
  {
    "kind": "kill",
    "questId": 1308,
    "map": "Terrarium",
    "monsters": [
      "Doppleganger of Fred",
      "Doppleganger of Will"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1309,
    "map": "Terrarium",
    "ids": [
      604
    ]
  },
  {
    "kind": "kill",
    "questId": 1339,
    "map": "prehistoric",
    "monsters": [
      "Gigantosaurus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1340,
    "map": "prehistoric",
    "ids": [
      630
    ],
    "quantity": 11
  },
  {
    "kind": "kill",
    "questId": 1341,
    "map": "prehistoric",
    "monsters": [
      "Gigantosaurus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1342,
    "map": "prehistoric",
    "ids": [
      631
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 1343,
    "map": "prehistoric",
    "monsters": [
      "Mother TerrorDOOMKill"
    ]
  },
  {
    "kind": "kill",
    "questId": 1344,
    "map": "Future",
    "monsters": [
      "Alien Dino"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1345,
    "map": "Future",
    "ids": [
      632
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 1346,
    "map": "Future",
    "ids": [
      633
    ],
    "quantity": 7
  },
  {
    "kind": "plan",
    "questId": 1347,
    "actions": [
      {
        "kind": "hunt",
        "map": "Future",
        "monster": "Red-Eyed Alien",
        "item": "Small Fragment Acquired",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "Future",
        "monster": "Red-Eyed Alien",
        "item": "Medium Piece Acquired",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1348,
    "actions": [
      {
        "kind": "hunt",
        "map": "Future",
        "monster": "The Collector",
        "item": "Collector Vanquished"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 4348
  },
  {
    "kind": "kill",
    "questId": 4349,
    "map": "livingdungeon",
    "monsters": [
      "Root of Evil"
    ]
  },
  {
    "kind": "kill",
    "questId": 4350,
    "map": "livingdungeon",
    "monsters": [
      "Seed Spitter"
    ]
  },
  {
    "kind": "kill",
    "questId": 4351,
    "map": "livingdungeon",
    "monsters": [
      "Evil Plant Horror",
      "Titan Decay"
    ]
  },
  {
    "kind": "kill",
    "questId": 4352,
    "map": "livingdungeon",
    "monsters": [
      "Weeping Widowmaker"
    ]
  },
  {
    "kind": "kill",
    "questId": 4353,
    "map": "livingdungeon",
    "monsters": [
      "Chia Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 4354,
    "map": "livingdungeon",
    "monsters": [
      "Titan Decay",
      "Seed Spitter",
      "Evil Plant Horror"
    ]
  },
  {
    "kind": "kill",
    "questId": 4355,
    "map": "livingdungeon",
    "monsters": [
      "Evil Tree Faerie"
    ]
  },
  {
    "kind": "kill",
    "questId": 4356,
    "map": "livingdungeon",
    "monsters": [
      "Vulchurion"
    ]
  },
  {
    "kind": "kill",
    "questId": 4357,
    "map": "livingdungeon",
    "monsters": [
      "Evil Plant Horror",
      "Evil Tree Faerie",
      "Vulchurion"
    ]
  },
  {
    "kind": "kill",
    "questId": 4358,
    "map": "livingdungeon",
    "monsters": [
      "Evil Plant Horror",
      "Evil Tree Faerie",
      "Vulchurion"
    ]
  },
  {
    "kind": "kill",
    "questId": 4359,
    "map": "livingdungeon",
    "monsters": [
      "Drayko"
    ]
  },
  {
    "kind": "kill",
    "questId": 4360,
    "map": "livingdungeon",
    "monsters": [
      "Evil Plant Horror",
      "Evil Tree Faerie"
    ]
  },
  {
    "kind": "kill",
    "questId": 4361,
    "map": "livingdungeon",
    "monsters": [
      "Evil Plant Horror",
      "Evil Tree Faerie"
    ]
  },
  {
    "kind": "kill",
    "questId": 4362,
    "map": "treetitanbattle",
    "monsters": [
      "Dakka the Dire Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 4363,
    "map": "livingdungeon",
    "monsters": [
      "Lil' Poot"
    ]
  },
  {
    "kind": "kill",
    "questId": 4364,
    "map": "livingdungeon",
    "monsters": [
      "Epic Drop"
    ]
  },
  {
    "kind": "plan",
    "questId": 4383,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4382,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4381,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4380,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4379,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4378,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 4377,
    "actions": [
      {
        "kind": "hunt",
        "map": "livingdungeon",
        "monster": "Root of Evil",
        "item": "Wooden Ring Piece",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 4378
  },
  {
    "kind": "chain",
    "questId": 4379
  },
  {
    "kind": "chain",
    "questId": 4380
  },
  {
    "kind": "chain",
    "questId": 4381
  },
  {
    "kind": "chain",
    "questId": 4382
  },
  {
    "kind": "chain",
    "questId": 4383
  },
  {
    "kind": "plan",
    "questId": 4384,
    "actions": [
      {
        "kind": "hunt",
        "map": "treetitanbattle",
        "monster": "Dakka the Dire Dragon",
        "item": "Dakka Defeated... again"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4389,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Cove Warrior",
        "item": "Ritual Materials",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Plessie",
        "item": "Plessie Fang Tooth"
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Island Girl",
        "item": "Candle",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4390,
    "actions": [
      {
        "kind": "mapItem",
        "map": "lunacove",
        "id": 3533,
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Cove Fisher",
        "item": "Bag of Chips"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4391,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Lunar Villager",
        "item": "Chips",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4392,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Lunar Villager",
        "item": "Villager Chastised",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Beach Ball",
        "item": "Deflated Beach Balls",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4393,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Coral Merdraconian",
        "item": "Coral Branch",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Plessie",
        "item": "Plessie Scale",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4395,
    "actions": [
      {
        "kind": "mapItem",
        "map": "lunacove",
        "id": 3534,
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4394,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Horde Knight",
        "item": "Horde Knight Defeated",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Horde Lycan",
        "item": "Horde Lycan Defeated",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4396,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Horde Knight",
        "item": "Lycanstone"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4397,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Gravefang",
        "item": "Gravefang Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4398,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Beach Werewolf",
        "item": "Beach Werewolf Defeated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Lunar Lycan",
        "item": "Lunar Lycan Subdued",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4399,
    "actions": [
      {
        "kind": "hunt",
        "map": "lunacove",
        "monster": "Moonrock",
        "item": "Moon Rock Smashed"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4365,
    "map": "goose",
    "monsters": [
      "Queen's Sage"
    ]
  },
  {
    "kind": "kill",
    "questId": 4366,
    "map": "goose",
    "monsters": [
      "Chris P. Bacon"
    ]
  },
  {
    "kind": "kill",
    "questId": 4367,
    "map": "goose",
    "monsters": [
      "Queen's Sage"
    ]
  },
  {
    "kind": "kill",
    "questId": 4368,
    "map": "goose",
    "monsters": [
      "Sock Gorilla"
    ]
  },
  {
    "kind": "kill",
    "questId": 4369,
    "map": "goose",
    "monsters": [
      "Can of Paint"
    ]
  },
  {
    "kind": "kill",
    "questId": 4370,
    "map": "goose",
    "monsters": [
      "Queen's ArchSage"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4371,
    "map": "goose",
    "ids": [
      3562
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4372,
    "map": "goose",
    "ids": [
      3561
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 4373,
    "map": "goose",
    "monsters": [
      "Queen's Sage"
    ]
  },
  {
    "kind": "kill",
    "questId": 4374,
    "map": "goose",
    "monsters": [
      "Can of Paint"
    ]
  },
  {
    "kind": "kill",
    "questId": 4375,
    "map": "goose",
    "monsters": [
      "Ancient Goose"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.summer2015adventure-map.core-summer",
    category: "Story",
    map: "dreadspace",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
