import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Throneof Darkness / Core To D",
  "description": "Runs the Throneof Darkness / Core To D story route.",
  "tags": [
    "story",
    "throneof",
    "darkness",
    "core",
    "to",
    "d"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4968,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4969,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4970,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4971,
    "map": "bonecastle",
    "monsters": [
      "Fallen Deathknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4972,
    "map": "bonecastle",
    "ids": [
      4342
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4972,
    "map": "bonecastle",
    "monsters": [
      "Fallen Deathknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4973,
    "map": "bonecastle",
    "monsters": [
      "Undead Waiter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4343
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4344
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4345
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4974,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4975,
    "map": "bonecastle",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "kill",
    "questId": 4976,
    "map": "bonecastle",
    "monsters": [
      "The Butcher"
    ]
  },
  {
    "kind": "kill",
    "questId": 4977,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4978,
    "map": "bonecastle",
    "ids": [
      4346,
      4347,
      4348
    ]
  },
  {
    "kind": "kill",
    "questId": 4978,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4979,
    "map": "bonecastle",
    "ids": [
      4349,
      4350,
      4351
    ]
  },
  {
    "kind": "kill",
    "questId": 4979,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "plan",
    "questId": 4980,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "monster": "Grateful Undead",
        "item": "Song Request Ticket",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "monster": "That 70's Zombie",
        "item": "Sweet Dancing Shoes",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4981,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r8",
        "pad": "Left",
        "monster": "Skeletal Warrior",
        "item": "Undead Humerus Bones",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4982,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Undead Guard",
        "item": "Yellow, Green"
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r3",
        "pad": "Bottom",
        "monster": "Undead Knight",
        "item": "Red, Red"
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r8",
        "pad": "Left",
        "monster": "Skeletal Warrior",
        "item": "Blue, Green, Red"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4983,
    "map": "bonecastle",
    "ids": [
      4352
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4984,
    "map": "bonecastle",
    "ids": [
      4353
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4985,
    "map": "bonecastle",
    "monsters": [
      "Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4986,
    "map": "bonecastle",
    "monsters": [
      "Turtle",
      "Turtle",
      "Turtle",
      "Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4987,
    "map": "bonecastle",
    "monsters": [
      "Snuggles, Torturer"
    ]
  },
  {
    "kind": "kill",
    "questId": 4988,
    "map": "bonecastle",
    "monsters": [
      "Jon Bones",
      "Oberon Marrowtell",
      "Baskerville",
      "Knight of Lichens"
    ]
  },
  {
    "kind": "kill",
    "questId": 4989,
    "map": "bonecastle",
    "monsters": [
      "Rot Tin Tin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4990,
    "map": "bonecastle",
    "monsters": [
      "Undead Golden Knight",
      "Undead Golden Knight",
      "Undead Golden Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4991,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight",
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 4992,
    "map": "bonecastle",
    "monsters": [
      "Vaden"
    ]
  },
  {
    "kind": "kill",
    "questId": 4968,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4969,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4970,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4971,
    "map": "bonecastle",
    "monsters": [
      "Fallen Deathknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4972,
    "map": "bonecastle",
    "ids": [
      4342
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4972,
    "map": "bonecastle",
    "monsters": [
      "Fallen Deathknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4973,
    "map": "bonecastle",
    "monsters": [
      "Undead Waiter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4343
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4344
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4345
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4974,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4975,
    "map": "bonecastle",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "kill",
    "questId": 4976,
    "map": "bonecastle",
    "monsters": [
      "The Butcher"
    ]
  },
  {
    "kind": "kill",
    "questId": 4977,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4978,
    "map": "bonecastle",
    "ids": [
      4346,
      4347,
      4348
    ]
  },
  {
    "kind": "kill",
    "questId": 4978,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4979,
    "map": "bonecastle",
    "ids": [
      4349,
      4350,
      4351
    ]
  },
  {
    "kind": "kill",
    "questId": 4979,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "plan",
    "questId": 4980,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "monster": "Grateful Undead",
        "item": "Song Request Ticket",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "monster": "That 70's Zombie",
        "item": "Sweet Dancing Shoes",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4981,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r8",
        "pad": "Left",
        "monster": "Skeletal Warrior",
        "item": "Undead Humerus Bones",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4982,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Undead Guard",
        "item": "Yellow, Green"
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r3",
        "pad": "Bottom",
        "monster": "Undead Knight",
        "item": "Red, Red"
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r8",
        "pad": "Left",
        "monster": "Skeletal Warrior",
        "item": "Blue, Green, Red"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4983,
    "map": "bonecastle",
    "ids": [
      4352
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4984,
    "map": "bonecastle",
    "ids": [
      4353
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4985,
    "map": "bonecastle",
    "monsters": [
      "Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4986,
    "map": "bonecastle",
    "monsters": [
      "Turtle",
      "Turtle",
      "Turtle",
      "Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4987,
    "map": "bonecastle",
    "monsters": [
      "Snuggles, Torturer"
    ]
  },
  {
    "kind": "kill",
    "questId": 4988,
    "map": "bonecastle",
    "monsters": [
      "Jon Bones",
      "Oberon Marrowtell",
      "Baskerville",
      "Knight of Lichens"
    ]
  },
  {
    "kind": "kill",
    "questId": 4989,
    "map": "bonecastle",
    "monsters": [
      "Rot Tin Tin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4990,
    "map": "bonecastle",
    "monsters": [
      "Undead Golden Knight",
      "Undead Golden Knight",
      "Undead Golden Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4991,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight",
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 4992,
    "map": "bonecastle",
    "monsters": [
      "Vaden"
    ]
  },
  {
    "kind": "kill",
    "questId": 4996,
    "map": "towersilver",
    "monsters": [
      "Flying Spyball"
    ]
  },
  {
    "kind": "kill",
    "questId": 4997,
    "map": "towersilver",
    "monsters": [
      "Fallen Emperor Statue"
    ]
  },
  {
    "kind": "kill",
    "questId": 4999,
    "map": "towersilver",
    "monsters": [
      "Undead Knight",
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4998,
    "map": "towersilver",
    "monsters": [
      "Fallen DeathKnight",
      "Undead Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 5000,
    "map": "towersilver",
    "monsters": [
      "Flying Spyball",
      "Fallen DeathKnight",
      "Undead Warrior",
      "Undead Knight",
      "Undead Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5001,
    "map": "towersilver",
    "ids": [
      4368,
      4369,
      4370,
      4371,
      4372
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5002,
    "map": "towersilver",
    "ids": [
      4373
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 5003,
    "map": "towersilver",
    "monsters": [
      "Bloody Scary"
    ]
  },
  {
    "kind": "kill",
    "questId": 5004,
    "map": "towersilver",
    "monsters": [
      "Bone Creeper"
    ]
  },
  {
    "kind": "kill",
    "questId": 5005,
    "map": "towersilver",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5006,
    "map": "towersilver",
    "ids": [
      4374
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5007,
    "map": "towersilver",
    "monsters": [
      "Undead Golden Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5008,
    "map": "towersilver",
    "monsters": [
      "Flester The Silver"
    ]
  },
  {
    "kind": "kill",
    "questId": 5009,
    "map": "towersilver",
    "monsters": [
      "Fallen DeathKnight",
      "Undead Knight",
      "Undead Warrior",
      "Ghoul",
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5010,
    "map": "towersilver",
    "monsters": [
      "Bloody Scary"
    ]
  },
  {
    "kind": "kill",
    "questId": 5011,
    "map": "towergold",
    "monsters": [
      "Grim Souldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 5012,
    "map": "towergold",
    "monsters": [
      "Undead Golden Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5013,
    "map": "towergold",
    "ids": [
      4375
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5013,
    "map": "towergold",
    "monsters": [
      "Skullspider"
    ]
  },
  {
    "kind": "kill",
    "questId": 5014,
    "map": "towergold",
    "monsters": [
      "Vampire Bat"
    ]
  },
  {
    "kind": "kill",
    "questId": 5015,
    "map": "towergold",
    "monsters": [
      "Webbed Ghoul"
    ]
  },
  {
    "kind": "kill",
    "questId": 5016,
    "map": "towergold",
    "monsters": [
      "Bone Widow"
    ]
  },
  {
    "kind": "kill",
    "questId": 5017,
    "map": "towergold",
    "monsters": [
      "Book Maggot"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5018,
    "map": "towergold",
    "ids": [
      4376
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5018,
    "map": "towergold",
    "monsters": [
      "Bone Creeper"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5019,
    "map": "towergold",
    "ids": [
      4377
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 5020,
    "map": "towergold",
    "monsters": [
      "Undead Knight",
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5021,
    "map": "towergold",
    "monsters": [
      "Fallen Emperor Statue"
    ]
  },
  {
    "kind": "kill",
    "questId": 5022,
    "map": "towergold",
    "monsters": [
      "Yurrod the Gold"
    ]
  },
  {
    "kind": "kill",
    "questId": 5034,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5035,
    "map": "portalmaze",
    "monsters": [
      "Heavy Lab Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5036,
    "map": "portalmaze",
    "monsters": [
      "Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 5037,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5038,
    "map": "portalmaze",
    "monsters": [
      "Jurassic Monkey"
    ]
  },
  {
    "kind": "kill",
    "questId": 5039,
    "map": "portalmaze",
    "monsters": [
      "Lazor Dino"
    ]
  },
  {
    "kind": "kill",
    "questId": 5040,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5041,
    "map": "portalmaze",
    "ids": [
      4408,
      4409,
      4410
    ]
  },
  {
    "kind": "kill",
    "questId": 5042,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5043,
    "map": "portalmaze",
    "monsters": [
      "Bucket Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5044,
    "map": "portalmaze",
    "monsters": [
      "Bucket Zombie",
      "Dancing Zombie",
      "Tunneling Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5045,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5046,
    "map": "portalmaze",
    "monsters": [
      "Pactagonal Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5047,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5048,
    "map": "portalmaze",
    "monsters": [
      "ChronoLord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5049,
    "map": "portalmaze",
    "monsters": [
      "Vorefax "
    ]
  },
  {
    "kind": "kill",
    "questId": 5050,
    "map": "portalmaze",
    "monsters": [
      "Mors Temporis"
    ]
  },
  {
    "kind": "kill",
    "questId": 5034,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5035,
    "map": "portalmaze",
    "monsters": [
      "Heavy Lab Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5036,
    "map": "portalmaze",
    "monsters": [
      "Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 5037,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5038,
    "map": "portalmaze",
    "monsters": [
      "Jurassic Monkey"
    ]
  },
  {
    "kind": "kill",
    "questId": 5039,
    "map": "portalmaze",
    "monsters": [
      "Lazor Dino"
    ]
  },
  {
    "kind": "kill",
    "questId": 5040,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5041,
    "map": "portalmaze",
    "ids": [
      4408,
      4409,
      4410
    ]
  },
  {
    "kind": "kill",
    "questId": 5042,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5043,
    "map": "portalmaze",
    "monsters": [
      "Bucket Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5044,
    "map": "portalmaze",
    "monsters": [
      "Bucket Zombie",
      "Dancing Zombie",
      "Tunneling Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5045,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5046,
    "map": "portalmaze",
    "monsters": [
      "Pactagonal Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5047,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5048,
    "map": "portalmaze",
    "monsters": [
      "ChronoLord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5049,
    "map": "portalmaze",
    "monsters": [
      "Vorefax "
    ]
  },
  {
    "kind": "kill",
    "questId": 5050,
    "map": "portalmaze",
    "monsters": [
      "Mors Temporis"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5068,
    "map": "tachyon",
    "ids": [
      4446
    ]
  },
  {
    "kind": "kill",
    "questId": 5068,
    "map": "tachyon",
    "monsters": [
      "Time Wraith",
      "Timestream Rider"
    ]
  },
  {
    "kind": "kill",
    "questId": 5069,
    "map": "tachyon",
    "monsters": [
      "Spacetime Anomaly"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5072,
    "map": "tachyon",
    "ids": [
      4447
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5072,
    "map": "tachyon",
    "monsters": [
      "Sandshark",
      "Bupers Camel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5073,
    "map": "tachyon",
    "ids": [
      4448
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5074,
    "map": "tachyon",
    "ids": [
      4449
    ]
  },
  {
    "kind": "kill",
    "questId": 5074,
    "map": "tachyon",
    "monsters": [
      "Time Wraith",
      "Timestream Rider"
    ]
  },
  {
    "kind": "kill",
    "questId": 5075,
    "map": "tachyon",
    "monsters": [
      "Medusoid"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5076,
    "map": "tachyon",
    "ids": [
      4450
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 5076,
    "map": "tachyon",
    "ids": [
      4451
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 5076,
    "map": "tachyon",
    "monsters": [
      "Jungle Tog",
      "Jungle Fury"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5077,
    "map": "tachyon",
    "ids": [
      4452
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5078,
    "map": "tachyon",
    "ids": [
      4453
    ]
  },
  {
    "kind": "kill",
    "questId": 5078,
    "map": "tachyon",
    "monsters": [
      "Time Wraith",
      "Timestream Rider"
    ]
  },
  {
    "kind": "kill",
    "questId": 5079,
    "map": "tachyon",
    "monsters": [
      "Void Serpent"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5080,
    "map": "tachyon",
    "ids": [
      4454
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5080,
    "map": "tachyon",
    "monsters": [
      "Ice Wolf",
      "Polar Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5081,
    "map": "tachyon",
    "ids": [
      4455
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5082,
    "map": "tachyon",
    "ids": [
      4456
    ]
  },
  {
    "kind": "kill",
    "questId": 5083,
    "map": "tachyon",
    "monsters": [
      "Svelgr the Devourer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5087,
    "map": "baconcat",
    "ids": [
      4466
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 5088,
    "map": "baconcat",
    "monsters": [
      "Yulgar Regular"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5089,
    "map": "baconcat",
    "ids": [
      4467
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5089,
    "map": "baconcat",
    "monsters": [
      "Yulgar Regular"
    ]
  },
  {
    "kind": "kill",
    "questId": 5090,
    "map": "baconcat",
    "monsters": [
      "Slime"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5091,
    "map": "baconcat",
    "ids": [
      4473
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5092,
    "map": "baconcat",
    "monsters": [
      "Baconcatzard",
      "Pizzacatzard"
    ]
  },
  {
    "kind": "plan",
    "questId": 5093,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 26,
        "item": "Scary Face Paint!",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 26,
        "item": "Honking Clown Nose",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 26,
        "item": "Rainbow Wig",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5094,
    "map": "baconcat",
    "ids": [
      4468
    ],
    "quantity": 9
  },
  {
    "kind": "kill",
    "questId": 5095,
    "map": "baconcat",
    "monsters": [
      "Fart Elemental",
      "Litter Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5096,
    "map": "baconcat",
    "monsters": [
      "King Strong",
      "Box",
      "King Strong"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5097,
    "map": "baconcat",
    "ids": [
      4469
    ],
    "quantity": 4
  },
  {
    "kind": "plan",
    "questId": 5098,
    "actions": [
      {
        "kind": "join",
        "map": "baconcat",
        "cell": "r11a",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 41,
        "item": "Oopy Defeated"
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 40,
        "item": "Bloopy Defeated"
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 42,
        "item": "Hoopy Defeated"
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "monster": 43,
        "item": "Frood Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5099,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcat",
        "cell": "r12",
        "pad": "Left",
        "monster": "Red Shell Turtle",
        "item": "Turtle Shells",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "baconcat",
        "cell": "r12",
        "pad": "Left",
        "monster": "Snapper Shrub",
        "item": "Power Flower",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5100,
    "map": "baconcat",
    "monsters": [
      "Horcio"
    ]
  },
  {
    "kind": "kill",
    "questId": 5109,
    "map": "baconcat",
    "monsters": [
      "Corn Minion"
    ]
  },
  {
    "kind": "kill",
    "questId": 5110,
    "map": "baconcat",
    "monsters": [
      "Non-GMO Brutalcorn"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5101,
    "map": "baconcat",
    "ids": [
      4470
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5102,
    "map": "baconcat",
    "monsters": [
      "Scent Trail"
    ]
  },
  {
    "kind": "kill",
    "questId": 5103,
    "map": "baconcat",
    "monsters": [
      "Buttermancer",
      "Potato Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5104,
    "map": "baconcat",
    "monsters": [
      "King of the Unbread"
    ]
  },
  {
    "kind": "kill",
    "questId": 5105,
    "map": "baconcat",
    "monsters": [
      "Chainsaw Actor"
    ]
  },
  {
    "kind": "kill",
    "questId": 5106,
    "map": "baconcat",
    "monsters": [
      "Paladin Actor"
    ]
  },
  {
    "kind": "kill",
    "questId": 5107,
    "map": "baconcat",
    "monsters": [
      "Kitty Boo Boo"
    ]
  },
  {
    "kind": "plan",
    "questId": 5108,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcatyou",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "*",
        "item": "Defeated YOURSELF!"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5111,
    "map": "baconcatlair",
    "monsters": [
      "Cloud Shark"
    ]
  },
  {
    "kind": "kill",
    "questId": 5112,
    "map": "baconcatlair",
    "monsters": [
      "Ice Cream Shark"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5113,
    "map": "baconcatlair",
    "ids": [
      4474
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5113,
    "map": "baconcatlair",
    "monsters": [
      "Ice Cream Shark"
    ]
  },
  {
    "kind": "plan",
    "questId": 5114,
    "actions": [
      {
        "kind": "buy",
        "map": "librarium",
        "shopId": 651,
        "item": "Really Big Pencil"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5115,
    "map": "baconcatlair",
    "ids": [
      4475
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5115,
    "map": "baconcatlair",
    "monsters": [
      "Sketchy Shark"
    ]
  },
  {
    "kind": "plan",
    "questId": 5116,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcat",
        "cell": "r12",
        "pad": "Left",
        "monster": "*",
        "item": "Cheat Codes",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5117,
    "map": "baconcatlair",
    "ids": [
      4476
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5117,
    "map": "baconcatlair",
    "monsters": [
      "8-bit Shark"
    ]
  },
  {
    "kind": "plan",
    "questId": 5118,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "Cat Clothed Shark",
        "item": "Kittarian Clothes",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": 14,
        "item": "Kittarian Spoon",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": 13,
        "item": "Kittarian Fork",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5119,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "Cloud Shark",
        "item": "Cloud Shark Farts",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "Ice Cream Shark",
        "item": "Shark Sprinkles",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "Sketchy Shark",
        "item": "College-Ruled Paper",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "8-Bit Shark",
        "item": "Great White DLC",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "Cat Clothed Shark",
        "item": "Kittarian Costumes",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5120,
    "map": "baconcatlair",
    "monsters": [
      "Cloud Shark"
    ]
  },
  {
    "kind": "kill",
    "questId": 5121,
    "map": "baconcatlair",
    "monsters": [
      "Robo Shark"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5122,
    "map": "baconcatlair",
    "ids": [
      4477
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5123,
    "map": "baconcatlair",
    "monsters": [
      "Robo Shark",
      "Robo Shark"
    ]
  },
  {
    "kind": "kill",
    "questId": 5124,
    "map": "baconcatlair",
    "monsters": [
      "Robo Shark"
    ]
  },
  {
    "kind": "kill",
    "questId": 5125,
    "map": "baconcatlair",
    "monsters": [
      "Shark Invader",
      "Shark Invader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5126,
    "map": "baconcatlair",
    "ids": [
      4480
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5126,
    "map": "baconcatlair",
    "monsters": [
      "Robo Shark"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5127,
    "map": "baconcatlair",
    "ids": [
      4479
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 5127,
    "map": "baconcatlair",
    "monsters": [
      "Party Shark",
      "Party Shark"
    ]
  },
  {
    "kind": "kill",
    "questId": 5128,
    "map": "baconcatlair",
    "monsters": [
      "Laser Remora"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5129,
    "map": "baconcatlair",
    "ids": [
      4478
    ]
  },
  {
    "kind": "kill",
    "questId": 5130,
    "map": "baconcatlair",
    "monsters": [
      "Cyborg Laser Shark"
    ]
  },
  {
    "kind": "plan",
    "questId": 5131,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcatlair",
        "monster": "Robo Shark",
        "item": "Wheel of Bacon Token",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5133,
    "map": "DeathPit",
    "ids": [
      4484,
      4485,
      4486,
      4487,
      4488,
      4489,
      4490,
      4491
    ]
  },
  {
    "kind": "kill",
    "questId": 5134,
    "map": "DeathPit",
    "monsters": [
      "Training Dummy"
    ]
  },
  {
    "kind": "kill",
    "questId": 5135,
    "map": "DeathPit",
    "monsters": [
      "Omar the Meek"
    ]
  },
  {
    "kind": "kill",
    "questId": 5136,
    "map": "DeathPit",
    "monsters": [
      "Sneevil"
    ]
  },
  {
    "kind": "kill",
    "questId": 5137,
    "map": "DeathPit",
    "monsters": [
      "Hattori"
    ]
  },
  {
    "kind": "kill",
    "questId": 5138,
    "map": "DeathPit",
    "monsters": [
      "Slime",
      "Giant Green Slime"
    ]
  },
  {
    "kind": "kill",
    "questId": 5139,
    "map": "DeathPit",
    "monsters": [
      "Sludgelord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5140,
    "map": "DeathPit",
    "monsters": [
      "Salamander"
    ]
  },
  {
    "kind": "kill",
    "questId": 5141,
    "map": "DeathPit",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 5142,
    "map": "DeathPit",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 5143,
    "map": "DeathPit",
    "monsters": [
      "Horc Gladiator"
    ]
  },
  {
    "kind": "kill",
    "questId": 5144,
    "map": "DeathPit",
    "monsters": [
      "Drakel Brawler"
    ]
  },
  {
    "kind": "kill",
    "questId": 5145,
    "map": "DeathPit",
    "monsters": [
      "Drakel Gladiator"
    ]
  },
  {
    "kind": "kill",
    "questId": 5146,
    "map": "DeathPit",
    "monsters": [
      "Drakel Battlemaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 5147,
    "map": "DeathPit",
    "monsters": [
      "General Gall"
    ]
  },
  {
    "kind": "kill",
    "questId": 5148,
    "map": "DeathPit",
    "monsters": [
      "Drakel Brawler"
    ]
  },
  {
    "kind": "kill",
    "questId": 5149,
    "map": "DeathPit",
    "monsters": [
      "General Velm"
    ]
  },
  {
    "kind": "kill",
    "questId": 5150,
    "map": "DeathPit",
    "monsters": [
      "Drakel Battlemaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 5151,
    "map": "DeathPit",
    "monsters": [
      "General Chud"
    ]
  },
  {
    "kind": "kill",
    "questId": 5152,
    "map": "DeathPit",
    "monsters": [
      "Drakel Battlemaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 5153,
    "map": "DeathPit",
    "monsters": [
      "General Hun'Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 5154,
    "map": "DeathPit",
    "monsters": [
      "Warlord Pax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5133,
    "map": "DeathPit",
    "ids": [
      4484,
      4485,
      4486,
      4487,
      4488,
      4489,
      4490,
      4491
    ]
  },
  {
    "kind": "kill",
    "questId": 5134,
    "map": "DeathPit",
    "monsters": [
      "Training Dummy"
    ]
  },
  {
    "kind": "kill",
    "questId": 5135,
    "map": "DeathPit",
    "monsters": [
      "Omar the Meek"
    ]
  },
  {
    "kind": "kill",
    "questId": 5136,
    "map": "DeathPit",
    "monsters": [
      "Sneevil"
    ]
  },
  {
    "kind": "kill",
    "questId": 5137,
    "map": "DeathPit",
    "monsters": [
      "Hattori"
    ]
  },
  {
    "kind": "kill",
    "questId": 5138,
    "map": "DeathPit",
    "monsters": [
      "Slime",
      "Giant Green Slime"
    ]
  },
  {
    "kind": "kill",
    "questId": 5139,
    "map": "DeathPit",
    "monsters": [
      "Sludgelord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5140,
    "map": "DeathPit",
    "monsters": [
      "Salamander"
    ]
  },
  {
    "kind": "kill",
    "questId": 5141,
    "map": "DeathPit",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 5142,
    "map": "DeathPit",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 5143,
    "map": "DeathPit",
    "monsters": [
      "Horc Gladiator"
    ]
  },
  {
    "kind": "kill",
    "questId": 5144,
    "map": "DeathPit",
    "monsters": [
      "Drakel Brawler"
    ]
  },
  {
    "kind": "kill",
    "questId": 5145,
    "map": "DeathPit",
    "monsters": [
      "Drakel Gladiator"
    ]
  },
  {
    "kind": "kill",
    "questId": 5146,
    "map": "DeathPit",
    "monsters": [
      "Drakel Battlemaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 5147,
    "map": "DeathPit",
    "monsters": [
      "General Gall"
    ]
  },
  {
    "kind": "kill",
    "questId": 5148,
    "map": "DeathPit",
    "monsters": [
      "Drakel Brawler"
    ]
  },
  {
    "kind": "kill",
    "questId": 5149,
    "map": "DeathPit",
    "monsters": [
      "General Velm"
    ]
  },
  {
    "kind": "kill",
    "questId": 5150,
    "map": "DeathPit",
    "monsters": [
      "Drakel Battlemaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 5151,
    "map": "DeathPit",
    "monsters": [
      "General Chud"
    ]
  },
  {
    "kind": "kill",
    "questId": 5152,
    "map": "DeathPit",
    "monsters": [
      "Drakel Battlemaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 5153,
    "map": "DeathPit",
    "monsters": [
      "General Hun'Gar"
    ]
  },
  {
    "kind": "kill",
    "questId": 5154,
    "map": "DeathPit",
    "monsters": [
      "Warlord Pax"
    ]
  },
  {
    "kind": "plan",
    "questId": 5155,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 5156,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 5157,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 5165,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 5166,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "cell": "r2",
        "pad": "Left",
        "monster": "Vortex Mage",
        "item": "Infinity Text Page",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5167,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Naga",
        "item": "Naga Slain",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Hawk",
        "item": "Hawk Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5168,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Gate Goblin",
        "item": "Balm Cartouche"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5169,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Walker",
        "item": "Scale Cartouche Fragment",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5170,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Dimensional Crystal",
        "item": "Quartz",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Gate Goblin",
        "item": "Lime",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Matter",
        "item": "Natron"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5171,
    "map": "whitehole",
    "ids": [
      4539
    ]
  },
  {
    "kind": "plan",
    "questId": 5172,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "cell": "r3",
        "pad": "Left",
        "monster": "Dimensional Crystal",
        "item": "Quartz",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "cell": "r6",
        "pad": "Left",
        "monster": "Gate Goblin",
        "item": "Lime",
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "cell": "r10",
        "pad": "Left",
        "monster": "Vortex Matter",
        "item": "Ash",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5173,
    "map": "whitehole",
    "ids": [
      4540
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 5173,
    "map": "whitehole",
    "ids": [
      4542
    ]
  },
  {
    "kind": "plan",
    "questId": 5174,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Hawk",
        "item": "Feather of Ma'at"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5175,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Hand of Ma'at",
        "item": "Judgement Passed"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5176,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Mage",
        "item": "Scroll Cartouche"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5177,
    "map": "whitehole",
    "ids": [
      4541
    ],
    "quantity": 4
  },
  {
    "kind": "plan",
    "questId": 5178,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Naga",
        "item": "Cartouche Fragment",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5179,
    "map": "whitehole",
    "ids": [
      4543
    ]
  },
  {
    "kind": "plan",
    "questId": 5180,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Crystal",
        "item": "Natron",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5181,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Guardian",
        "item": "Guardian Slain"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5182,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Dimensional Crystal",
        "item": "Quartz",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Gate Goblin",
        "item": "Lime",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Matter",
        "item": "Ash",
        "quantity": 1
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5183,
    "map": "whitehole",
    "ids": [
      4544
    ]
  },
  {
    "kind": "plan",
    "questId": 5184,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Dimensional Crystal",
        "item": "Sun Cartouche"
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Dimensional Crystal",
        "item": "Sky Cartouche"
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Matter",
        "item": "Star Cartouche"
      },
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Vortex Crystal",
        "item": "Moon Cartouche"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5185,
    "map": "whitehole",
    "ids": [
      4545
    ],
    "quantity": 4
  },
  {
    "kind": "plan",
    "questId": 5186,
    "actions": [
      {
        "kind": "hunt",
        "map": "whitehole",
        "monster": "Mehensi Serpent",
        "item": "Mehen Slain"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5187,
    "map": "whitehole",
    "ids": [
      4546
    ]
  },
  {
    "kind": "kill",
    "questId": 5189,
    "map": "fourdpyramid",
    "monsters": [
      "Sekt"
    ]
  },
  {
    "kind": "kill",
    "questId": 5190,
    "map": "fourdpyramid",
    "monsters": [
      "Negastri Hound"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5191,
    "map": "fourdpyramid",
    "ids": [
      4556
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5192,
    "map": "fourdpyramid",
    "ids": [
      4557
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5192,
    "map": "fourdpyramid",
    "monsters": [
      "Sekt's Mummy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5193,
    "map": "fourdpyramid",
    "ids": [
      4558
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5194,
    "map": "fourdpyramid",
    "monsters": [
      "Nega Mummy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5195,
    "map": "fourdpyramid",
    "ids": [
      4559
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5196,
    "map": "fourdpyramid",
    "ids": [
      4560
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5196,
    "map": "fourdpyramid",
    "monsters": [
      "Nega Mummy",
      "Guardian of Anubyx"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5197,
    "map": "fourdpyramid",
    "ids": [
      4561
    ],
    "quantity": 1
  },
  {
    "kind": "plan",
    "questId": 5198,
    "actions": [
      {
        "kind": "hunt",
        "map": "fourdpyramid",
        "monster": 19,
        "item": "White Gem",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "fourdpyramid",
        "monster": 20,
        "item": "Black Gem",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5199,
    "map": "fourdpyramid",
    "ids": [
      4562
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 5199,
    "map": "fourdpyramid",
    "ids": [
      4564
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5200,
    "map": "fourdpyramid",
    "monsters": [
      "Nega Mummy"
    ]
  },
  {
    "kind": "kill",
    "questId": 5201,
    "map": "fourdpyramid",
    "monsters": [
      "Guardian of Anubyx"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5202,
    "map": "fourdpyramid",
    "ids": [
      4565
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5203,
    "map": "fourdpyramid",
    "ids": [
      4566
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5204,
    "map": "fourdpyramid",
    "ids": [
      4567
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5205,
    "map": "fourdpyramid",
    "ids": [
      4568
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5205,
    "map": "fourdpyramid",
    "monsters": [
      "Tesseract Sprite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5206,
    "map": "fourdpyramid",
    "ids": [
      4569
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5207,
    "map": "fourdpyramid",
    "ids": [
      4570
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5207,
    "map": "fourdpyramid",
    "monsters": [
      "Tesseract Goblin"
    ]
  },
  {
    "kind": "plan",
    "questId": 5208,
    "actions": [
      {
        "kind": "hunt",
        "map": "fourdpyramid",
        "monster": 19,
        "item": "White Gem",
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "fourdpyramid",
        "monster": 20,
        "item": "Black Gem",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5209,
    "map": "fourdpyramid",
    "ids": [
      4571
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 5209,
    "map": "fourdpyramid",
    "ids": [
      4572
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5210,
    "map": "fourdpyramid",
    "ids": [
      4573
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 5211,
    "map": "fourdpyramid",
    "monsters": [
      "Black Plague"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5212,
    "map": "fourdpyramid",
    "ids": [
      4574
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 5213,
    "map": "yasaris",
    "ids": [
      4590
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5214,
    "map": "yasaris",
    "ids": [
      4576
    ]
  },
  {
    "kind": "kill",
    "questId": 5215,
    "map": "yasaris",
    "monsters": [
      "Vortex Hawk"
    ]
  },
  {
    "kind": "kill",
    "questId": 5216,
    "map": "yasaris",
    "monsters": [
      "Sacred Serpent"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5217,
    "map": "yasaris",
    "ids": [
      4577
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5218,
    "map": "yasaris",
    "ids": [
      4578
    ]
  },
  {
    "kind": "plan",
    "questId": 5219,
    "actions": [
      {
        "kind": "mapItem",
        "map": "yasaris",
        "id": 4579,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 5240
  },
  {
    "kind": "mapItem",
    "questId": 5220,
    "map": "yasaris",
    "ids": [
      4591
    ]
  },
  {
    "kind": "kill",
    "questId": 5221,
    "map": "yasaris",
    "monsters": [
      "Avatar of Anubyx",
      "Inverted Avatar"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5222,
    "map": "yasaris",
    "ids": [
      4580
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5223,
    "map": "yasaris",
    "ids": [
      4581
    ]
  },
  {
    "kind": "kill",
    "questId": 5224,
    "map": "yasaris",
    "monsters": [
      "Avatar of Anubyx",
      "Negastri Hound"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5225,
    "map": "yasaris",
    "ids": [
      4582
    ]
  },
  {
    "kind": "plan",
    "questId": 5226,
    "actions": [
      {
        "kind": "mapItem",
        "map": "yasaris",
        "id": 4583,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 5241
  },
  {
    "kind": "mapItem",
    "questId": 5227,
    "map": "yasaris",
    "ids": [
      4592
    ]
  },
  {
    "kind": "kill",
    "questId": 5228,
    "map": "yasaris",
    "monsters": [
      "Dimensional Crystal"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5229,
    "map": "yasaris",
    "ids": [
      4584
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5230,
    "map": "yasaris",
    "ids": [
      4585
    ]
  },
  {
    "kind": "kill",
    "questId": 5230,
    "map": "yasaris",
    "monsters": [
      "Tesseract Sprite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5231,
    "map": "yasaris",
    "ids": [
      4593
    ]
  },
  {
    "kind": "kill",
    "questId": 5232,
    "map": "yasaris",
    "monsters": [
      "Dimensional Crystal"
    ]
  },
  {
    "kind": "plan",
    "questId": 5233,
    "actions": [
      {
        "kind": "mapItem",
        "map": "yasaris",
        "id": 4595,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "yasaris",
        "id": 4586,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 5242
  },
  {
    "kind": "mapItem",
    "questId": 5234,
    "map": "yasaris",
    "ids": [
      4594
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5235,
    "map": "yasaris",
    "ids": [
      4587
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5235,
    "map": "yasaris",
    "monsters": [
      "Avatar of Serepthys"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5236,
    "map": "yasaris",
    "ids": [
      4588
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5237,
    "map": "yasaris",
    "monsters": [
      "Spirit of Ptahmun"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5238,
    "map": "yasaris",
    "ids": [
      4589
    ]
  },
  {
    "kind": "plan",
    "questId": 5238,
    "actions": [
      {
        "kind": "mapItem",
        "map": "yasaris",
        "id": 4589,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 5243
  },
  {
    "kind": "kill",
    "questId": 5239,
    "map": "yasaris",
    "monsters": [
      "Serepthys"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5298,
    "map": "hedgemaze",
    "ids": [
      4678
    ]
  },
  {
    "kind": "kill",
    "questId": 5298,
    "map": "hedgemaze",
    "monsters": [
      "Knight's Reflection"
    ]
  },
  {
    "kind": "plan",
    "questId": 5299,
    "actions": [
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "monster": "Mirrored Shard",
        "item": "Mirror Shard Slain",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "monster": 48,
        "item": "Hedge Goblin Slain",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "monster": 20,
        "item": "Minotaur Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5299,
    "map": "hedgemaze",
    "ids": [
      4679
    ]
  },
  {
    "kind": "kill",
    "questId": 5300,
    "map": "hedgemaze",
    "monsters": [
      "Knight's Reflection"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5301,
    "map": "hedgemaze",
    "ids": [
      4680
    ]
  },
  {
    "kind": "kill",
    "questId": 5302,
    "map": "hedgemaze",
    "monsters": [
      "Hedge Goblin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5303,
    "map": "hedgemaze",
    "ids": [
      4681
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 5304,
    "map": "hedgemaze",
    "monsters": [
      "Mirrored Shard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5305,
    "map": "hedgemaze",
    "ids": [
      4682
    ]
  },
  {
    "kind": "kill",
    "questId": 5306,
    "map": "hedgemaze",
    "monsters": [
      "Minotaur Prime"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5307,
    "map": "hedgemaze",
    "ids": [
      4683
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5308,
    "map": "hedgemaze",
    "ids": [
      4684
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5309,
    "map": "hedgemaze",
    "ids": [
      4685
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 5310,
    "actions": [
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "cell": "r21",
        "pad": "Right",
        "monster": "*",
        "item": "Maze Monster Killed",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5311,
    "map": "hedgemaze",
    "ids": [
      4686
    ]
  },
  {
    "kind": "kill",
    "questId": 5312,
    "map": "hedgemaze",
    "monsters": [
      "Shattered Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5313,
    "map": "hedgemaze",
    "monsters": [
      "Resurrected Minotaur"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5298,
    "map": "hedgemaze",
    "ids": [
      4678
    ]
  },
  {
    "kind": "kill",
    "questId": 5298,
    "map": "hedgemaze",
    "monsters": [
      "Knight's Reflection"
    ]
  },
  {
    "kind": "plan",
    "questId": 5299,
    "actions": [
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "monster": "Mirrored Shard",
        "item": "Mirror Shard Slain",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "monster": 48,
        "item": "Hedge Goblin Slain",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "monster": 20,
        "item": "Minotaur Slain",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5299,
    "map": "hedgemaze",
    "ids": [
      4679
    ]
  },
  {
    "kind": "kill",
    "questId": 5300,
    "map": "hedgemaze",
    "monsters": [
      "Knight's Reflection"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5301,
    "map": "hedgemaze",
    "ids": [
      4680
    ]
  },
  {
    "kind": "kill",
    "questId": 5302,
    "map": "hedgemaze",
    "monsters": [
      "Hedge Goblin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5303,
    "map": "hedgemaze",
    "ids": [
      4681
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 5304,
    "map": "hedgemaze",
    "monsters": [
      "Mirrored Shard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5305,
    "map": "hedgemaze",
    "ids": [
      4682
    ]
  },
  {
    "kind": "kill",
    "questId": 5306,
    "map": "hedgemaze",
    "monsters": [
      "Minotaur Prime"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5307,
    "map": "hedgemaze",
    "ids": [
      4683
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5308,
    "map": "hedgemaze",
    "ids": [
      4684
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5309,
    "map": "hedgemaze",
    "ids": [
      4685
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 5310,
    "actions": [
      {
        "kind": "hunt",
        "map": "hedgemaze",
        "cell": "r21",
        "pad": "Right",
        "monster": "*",
        "item": "Maze Monster Killed",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5311,
    "map": "hedgemaze",
    "ids": [
      4686
    ]
  },
  {
    "kind": "kill",
    "questId": 5312,
    "map": "hedgemaze",
    "monsters": [
      "Shattered Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5313,
    "map": "hedgemaze",
    "monsters": [
      "Resurrected Minotaur"
    ]
  },
  {
    "kind": "kill",
    "questId": 5314,
    "map": "towerofmirrors",
    "monsters": [
      "Glassgoyle",
      "Glass Serpent"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5315,
    "map": "towerofmirrors",
    "ids": [
      4691,
      4692
    ]
  },
  {
    "kind": "kill",
    "questId": 5315,
    "map": "towerofmirrors",
    "monsters": [
      "Silver Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5316,
    "map": "towerofmirrors",
    "monsters": [
      "Phans",
      "Phans"
    ]
  },
  {
    "kind": "plan",
    "questId": 5317,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": 36,
        "item": "Lathannos the Reversed Defeated"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5318,
    "map": "towerofmirrors",
    "ids": [
      4687,
      4693
    ]
  },
  {
    "kind": "kill",
    "questId": 5318,
    "map": "towerofmirrors",
    "monsters": [
      "Silver Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5319,
    "map": "towerofmirrors",
    "monsters": [
      "Runway Wraith",
      "Runway Wraith",
      "Runway Wraith",
      "Runway Wraith"
    ]
  },
  {
    "kind": "plan",
    "questId": 5320,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": 40,
        "item": "Lukrisio the Buffed Defeated"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5321,
    "map": "towerofmirrors",
    "ids": [
      4688,
      4694
    ]
  },
  {
    "kind": "kill",
    "questId": 5321,
    "map": "towerofmirrors",
    "monsters": [
      "Silver Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5322,
    "map": "towerofmirrors",
    "monsters": [
      "Pageant Mom",
      "Pageant Mom"
    ]
  },
  {
    "kind": "plan",
    "questId": 5323,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": 45,
        "item": "Mendeskar the Smudged Defeated"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5324,
    "map": "towerofmirrors",
    "ids": [
      4689,
      4695
    ]
  },
  {
    "kind": "kill",
    "questId": 5324,
    "map": "towerofmirrors",
    "monsters": [
      "Silver Elemental"
    ]
  },
  {
    "kind": "plan",
    "questId": 5325,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": "Stage Tech",
        "item": "Stage Tech Defeated",
        "quantity": 9
      },
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": "Stage Tech",
        "item": "Rope Ladder"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5326,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": 49,
        "item": "Atticus the Warped Defeated"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5327,
    "map": "towerofmirrors",
    "ids": [
      4690,
      4696
    ]
  },
  {
    "kind": "kill",
    "questId": 5327,
    "map": "towerofmirrors",
    "monsters": [
      "Silver Elemental"
    ]
  },
  {
    "kind": "plan",
    "questId": 5328,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": "Sasquatch",
        "item": "Sasquatches Defeated",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": "Sasquatch",
        "item": "Tracking Tag",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5329,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": 52,
        "item": "Leofire the Shattered Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5330,
    "map": "towerofmirrors",
    "monsters": [
      "Fervent Suitor"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5331,
    "map": "towerofmirrors",
    "ids": [
      4697
    ]
  },
  {
    "kind": "plan",
    "questId": 5332,
    "actions": [
      {
        "kind": "hunt",
        "map": "towerofmirrors",
        "monster": 32,
        "item": "Defeat the Groglurk"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5428,
    "map": "cursedshop",
    "ids": [
      4803
    ]
  },
  {
    "kind": "kill",
    "questId": 5429,
    "map": "cursedshop",
    "monsters": [
      "Antique Chair"
    ]
  },
  {
    "kind": "kill",
    "questId": 5430,
    "map": "cursedshop",
    "monsters": [
      "UnDresser"
    ]
  },
  {
    "kind": "kill",
    "questId": 5431,
    "map": "cursedshop",
    "monsters": [
      "Writing Desk"
    ]
  },
  {
    "kind": "kill",
    "questId": 5432,
    "map": "cursedshop",
    "monsters": [
      "Grandfather Clock"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5433,
    "map": "cursedshop",
    "ids": [
      4804,
      4805
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5434,
    "map": "cursedshop",
    "ids": [
      4806
    ]
  },
  {
    "kind": "kill",
    "questId": 5434,
    "map": "cursedshop",
    "monsters": [
      "Arcane Sentinel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5428,
    "map": "cursedshop",
    "ids": [
      4803
    ]
  },
  {
    "kind": "kill",
    "questId": 5429,
    "map": "cursedshop",
    "monsters": [
      "Antique Chair"
    ]
  },
  {
    "kind": "kill",
    "questId": 5430,
    "map": "cursedshop",
    "monsters": [
      "UnDresser"
    ]
  },
  {
    "kind": "kill",
    "questId": 5431,
    "map": "cursedshop",
    "monsters": [
      "Writing Desk"
    ]
  },
  {
    "kind": "kill",
    "questId": 5432,
    "map": "cursedshop",
    "monsters": [
      "Grandfather Clock"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5433,
    "map": "cursedshop",
    "ids": [
      4804,
      4805
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5434,
    "map": "cursedshop",
    "ids": [
      4806
    ]
  },
  {
    "kind": "kill",
    "questId": 5434,
    "map": "cursedshop",
    "monsters": [
      "Arcane Sentinel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5428,
    "map": "cursedshop",
    "ids": [
      4803
    ]
  },
  {
    "kind": "kill",
    "questId": 5429,
    "map": "cursedshop",
    "monsters": [
      "Antique Chair"
    ]
  },
  {
    "kind": "kill",
    "questId": 5430,
    "map": "cursedshop",
    "monsters": [
      "UnDresser"
    ]
  },
  {
    "kind": "kill",
    "questId": 5431,
    "map": "cursedshop",
    "monsters": [
      "Writing Desk"
    ]
  },
  {
    "kind": "kill",
    "questId": 5432,
    "map": "cursedshop",
    "monsters": [
      "Grandfather Clock"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5433,
    "map": "cursedshop",
    "ids": [
      4804,
      4805
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5434,
    "map": "cursedshop",
    "ids": [
      4806
    ]
  },
  {
    "kind": "kill",
    "questId": 5434,
    "map": "cursedshop",
    "monsters": [
      "Arcane Sentinel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5438,
    "map": "MysteriousDungeon",
    "ids": [
      4818
    ]
  },
  {
    "kind": "kill",
    "questId": 5439,
    "map": "MysteriousDungeon",
    "monsters": [
      "Skudly"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5440,
    "map": "MysteriousDungeon",
    "ids": [
      4808
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5441,
    "map": "MysteriousDungeon",
    "ids": [
      4809
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5442,
    "map": "MysteriousDungeon",
    "ids": [
      4810,
      4811,
      4812,
      4813,
      4814,
      4815,
      4816
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5443,
    "map": "MysteriousDungeon",
    "ids": [
      4817
    ]
  },
  {
    "kind": "kill",
    "questId": 5444,
    "map": "MysteriousDungeon",
    "monsters": [
      "Skudly"
    ]
  },
  {
    "kind": "kill",
    "questId": 5445,
    "map": "MysteriousDungeon",
    "monsters": [
      "Mysterious Stranger"
    ]
  },
  {
    "kind": "kill",
    "questId": 5446,
    "map": "MysteriousDungeon",
    "monsters": [
      "Vaden"
    ]
  },
  {
    "kind": "kill",
    "questId": 5447,
    "map": "MysteriousDungeon",
    "monsters": [
      "Xeight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5448,
    "map": "MysteriousDungeon",
    "monsters": [
      "Ziri"
    ]
  },
  {
    "kind": "kill",
    "questId": 5449,
    "map": "MysteriousDungeon",
    "monsters": [
      "Pax"
    ]
  },
  {
    "kind": "kill",
    "questId": 5450,
    "map": "MysteriousDungeon",
    "monsters": [
      "Sekt"
    ]
  },
  {
    "kind": "kill",
    "questId": 5451,
    "map": "MysteriousDungeon",
    "monsters": [
      "Scarletta"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.throneof-darkness.core-to-d",
    category: "Story",
    map: "bonecastle",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
