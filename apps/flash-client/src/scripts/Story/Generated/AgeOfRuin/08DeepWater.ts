import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Deep Water",
  "description": "This script completes the storyline in /trenchobserve.",
  "tags": [
    "story",
    "age",
    "of",
    "ruin",
    "saga",
    "quest",
    "deep",
    "water",
    "trenchobserve",
    "observation",
    "deck",
    "08deep"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
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
  },
  {
    "kind": "mapItem",
    "questId": 9213,
    "map": "terminatemple",
    "ids": [
      11625,
      11626,
      11627
    ]
  },
  {
    "kind": "kill",
    "questId": 9213,
    "map": "terminatemple",
    "monsters": [
      "Termina Defender"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9214,
    "map": "terminatemple",
    "ids": [
      11628,
      11629,
      11630
    ]
  },
  {
    "kind": "kill",
    "questId": 9214,
    "map": "terminatemple",
    "monsters": [
      "Clandestine Guard"
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
  },
  {
    "kind": "plan",
    "questId": 9348,
    "actions": []
  },
  {
    "kind": "chain",
    "questId": 9348
  },
  {
    "kind": "mapItem",
    "questId": 9351,
    "map": "terminatemple",
    "ids": [
      12050,
      12051
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9719,
    "map": "balemorale",
    "ids": [
      12933
    ]
  },
  {
    "kind": "kill",
    "questId": 9720,
    "map": "balemorale",
    "monsters": [
      "Lightguard Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 9721,
    "map": "balemorale",
    "monsters": [
      "Noble's Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9722,
    "map": "balemorale",
    "ids": [
      13177,
      13178
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9723,
    "map": "balemorale",
    "ids": [
      13179,
      13180
    ]
  },
  {
    "kind": "kill",
    "questId": 9723,
    "map": "balemorale",
    "monsters": [
      "Chaos Spider"
    ]
  },
  {
    "kind": "plan",
    "questId": 9724,
    "actions": [
      {
        "kind": "hunt",
        "map": "balemorale",
        "cell": "r13",
        "pad": "Left",
        "monster": "*",
        "item": "Chaotic Shard",
        "quantity": 50
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9725,
    "map": "balemorale",
    "ids": [
      13181
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 9725,
    "map": "balemorale",
    "ids": [
      13182
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9726,
    "map": "balemorale",
    "ids": [
      13183
    ]
  },
  {
    "kind": "kill",
    "questId": 9726,
    "map": "balemorale",
    "monsters": [
      "Chaos Spider",
      "Chaos Crystal"
    ]
  },
  {
    "kind": "kill",
    "questId": 9727,
    "map": "balemorale",
    "monsters": [
      "Skye Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9728,
    "map": "balemorale",
    "ids": [
      13184
    ],
    "quantity": 7
  },
  {
    "kind": "mapItem",
    "questId": 9728,
    "map": "balemorale",
    "ids": [
      13185
    ]
  },
  {
    "kind": "plan",
    "questId": 9729,
    "actions": [
      {
        "kind": "hunt",
        "map": "balemorale",
        "monster": "Queen Victoria",
        "item": "Queen Victoria Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 9732,
    "map": "castleeblana",
    "monsters": [
      "Skye Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9733,
    "map": "castleeblana",
    "ids": [
      13202
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 9733,
    "map": "castleeblana",
    "ids": [
      13203
    ]
  },
  {
    "kind": "kill",
    "questId": 9734,
    "map": "castleeblana",
    "monsters": [
      "Skye Executor"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9735,
    "map": "castleeblana",
    "ids": [
      13204
    ]
  },
  {
    "kind": "kill",
    "questId": 9735,
    "map": "castleeblana",
    "monsters": [
      "Skye Warrior",
      "Skye Executor",
      "Skye Executor"
    ]
  },
  {
    "kind": "kill",
    "questId": 9736,
    "map": "castleeblana",
    "monsters": [
      "Bananach Raven"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9737,
    "map": "castleeblana",
    "ids": [
      13205
    ]
  },
  {
    "kind": "kill",
    "questId": 9737,
    "map": "castleeblana",
    "monsters": [
      "Fear Gorta"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9738,
    "map": "castleeblana",
    "ids": [
      13206
    ]
  },
  {
    "kind": "kill",
    "questId": 9738,
    "map": "castleeblana",
    "monsters": [
      "Bananach Raven",
      "Fear Gorta"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9739,
    "map": "castleeblana",
    "ids": [
      13207,
      13208
    ]
  },
  {
    "kind": "kill",
    "questId": 9740,
    "map": "castleeblana",
    "monsters": [
      "Skye Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 9741,
    "map": "castleeblana",
    "monsters": [
      "Warden Indradeep"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9755,
    "map": "loughshine",
    "ids": [
      13273
    ]
  },
  {
    "kind": "kill",
    "questId": 9755,
    "map": "loughshine",
    "monsters": [
      "Skye Cailleach"
    ]
  },
  {
    "kind": "kill",
    "questId": 9756,
    "map": "loughshine",
    "monsters": [
      "Scorched Elder Yew"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9757,
    "map": "loughshine",
    "ids": [
      13274
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 9757,
    "map": "loughshine",
    "ids": [
      13275
    ]
  },
  {
    "kind": "kill",
    "questId": 9758,
    "map": "loughshine",
    "monsters": [
      "Skye Cailleach",
      "Scorched Elder Yew"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9759,
    "map": "loughshine",
    "ids": [
      13276
    ]
  },
  {
    "kind": "kill",
    "questId": 9760,
    "map": "loughshine",
    "monsters": [
      "Skye Executor"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9761,
    "map": "loughshine",
    "ids": [
      13277
    ]
  },
  {
    "kind": "kill",
    "questId": 9761,
    "map": "loughshine",
    "monsters": [
      "Energy Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9762,
    "map": "loughshine",
    "ids": [
      13278
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 9762,
    "map": "loughshine",
    "ids": [
      13279
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9763,
    "map": "loughshine",
    "ids": [
      13280
    ]
  },
  {
    "kind": "kill",
    "questId": 9763,
    "map": "loughshine",
    "monsters": [
      "Skye Executor",
      "Energy Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 9764,
    "map": "loughshine",
    "monsters": [
      "Warden Iseul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9768,
    "map": "naoisegrave",
    "ids": [
      13296
    ]
  },
  {
    "kind": "kill",
    "questId": 9768,
    "map": "naoisegrave",
    "monsters": [
      "Bananach Raven"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9769,
    "map": "naoisegrave",
    "ids": [
      13297
    ]
  },
  {
    "kind": "kill",
    "questId": 9769,
    "map": "naoisegrave",
    "monsters": [
      "Energy Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9774,
    "map": "naoisegrave",
    "ids": [
      13298,
      13299
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9770,
    "map": "naoisegrave",
    "ids": [
      13300
    ]
  },
  {
    "kind": "kill",
    "questId": 9770,
    "map": "naoisegrave",
    "monsters": [
      "Energy Elemental",
      "Bananach Raven"
    ]
  },
  {
    "kind": "kill",
    "questId": 9771,
    "map": "naoisegrave",
    "monsters": [
      "Ice Guardian"
    ]
  },
  {
    "kind": "kill",
    "questId": 9772,
    "map": "naoisegrave",
    "monsters": [
      "Bone Dragonling"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9773,
    "map": "naoisegrave",
    "ids": [
      13301
    ]
  },
  {
    "kind": "kill",
    "questId": 9773,
    "map": "naoisegrave",
    "monsters": [
      "Warden Iseul"
    ]
  },
  {
    "kind": "kill",
    "questId": 9775,
    "map": "naoisegrave",
    "monsters": [
      "Ice Guardian"
    ]
  },
  {
    "kind": "kill",
    "questId": 9776,
    "map": "naoisegrave",
    "monsters": [
      "Bone Dragonling"
    ]
  },
  {
    "kind": "kill",
    "questId": 9777,
    "map": "naoisegrave",
    "monsters": [
      "Volgritian"
    ]
  },
  {
    "kind": "kill",
    "questId": 9805,
    "map": "liatarahill",
    "monsters": [
      "Undead Garde"
    ]
  },
  {
    "kind": "kill",
    "questId": 9806,
    "map": "liatarahill",
    "monsters": [
      "Garde Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 9807,
    "map": "liatarahill",
    "monsters": [
      "Undead Garde",
      "Garde Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9808,
    "map": "liatarahill",
    "ids": [
      13364,
      13365
    ]
  },
  {
    "kind": "kill",
    "questId": 9809,
    "map": "liatarahill",
    "monsters": [
      "King Duncan"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9810,
    "map": "liatarahill",
    "ids": [
      13368
    ]
  },
  {
    "kind": "kill",
    "questId": 9810,
    "map": "liatarahill",
    "monsters": [
      "Undead Garde",
      "Garde Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9811,
    "map": "liatarahill",
    "ids": [
      13366
    ]
  },
  {
    "kind": "kill",
    "questId": 9811,
    "map": "liatarahill",
    "monsters": [
      "Ice Guardian"
    ]
  },
  {
    "kind": "kill",
    "questId": 9812,
    "map": "liatarahill",
    "monsters": [
      "Skye Cailleach"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9813,
    "map": "liatarahill",
    "ids": [
      13367
    ]
  },
  {
    "kind": "kill",
    "questId": 9813,
    "map": "liatarahill",
    "monsters": [
      "Ice Guardian",
      "Skye Cailleach"
    ]
  },
  {
    "kind": "kill",
    "questId": 9814,
    "map": "liatarahill",
    "monsters": [
      "Warden Illaria"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9819,
    "map": "castlegaheris",
    "ids": [
      13378
    ]
  },
  {
    "kind": "kill",
    "questId": 9819,
    "map": "castlegaheris",
    "monsters": [
      "Energy Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 9820,
    "map": "castlegaheris",
    "monsters": [
      "Ice Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9821,
    "map": "castlegaheris",
    "ids": [
      13379,
      13380,
      13381
    ]
  },
  {
    "kind": "kill",
    "questId": 9822,
    "map": "castlegaheris",
    "monsters": [
      "Energy Elemental",
      "Ice Guardian"
    ]
  },
  {
    "kind": "kill",
    "questId": 9823,
    "map": "castlegaheris",
    "monsters": [
      "Dark Cage"
    ]
  },
  {
    "kind": "kill",
    "questId": 9824,
    "map": "castlegaheris",
    "monsters": [
      "Glacial Crystal"
    ]
  },
  {
    "kind": "kill",
    "questId": 9825,
    "map": "castlegaheris",
    "monsters": [
      "Elemental Hybrid"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9826,
    "map": "castlegaheris",
    "ids": [
      13382,
      13383
    ]
  },
  {
    "kind": "kill",
    "questId": 9827,
    "map": "castlegaheris",
    "monsters": [
      "Glacial Crystal",
      "Elemental Hybrid"
    ]
  },
  {
    "kind": "kill",
    "questId": 9828,
    "map": "castlegaheris",
    "monsters": [
      "Thundersnow Storm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9832,
    "map": "coldthunder",
    "ids": [
      13403
    ]
  },
  {
    "kind": "plan",
    "questId": 9833,
    "actions": []
  },
  {
    "kind": "chain",
    "questId": 9833
  },
  {
    "kind": "mapItem",
    "questId": 9851,
    "map": "terminatemple",
    "ids": [
      13541,
      13542
    ]
  },
  {
    "kind": "kill",
    "questId": 9225,
    "map": "ashray",
    "monsters": [
      "Kitefin Shark Bait"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9226,
    "map": "ashray",
    "ids": [
      11663,
      11664
    ]
  },
  {
    "kind": "kill",
    "questId": 9226,
    "map": "ashray",
    "monsters": [
      "Ashray Fisherman"
    ]
  },
  {
    "kind": "kill",
    "questId": 9227,
    "map": "ashray",
    "monsters": [
      "Ghostly Eel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9228,
    "map": "ashray",
    "ids": [
      11665
    ]
  },
  {
    "kind": "kill",
    "questId": 9228,
    "map": "ashray",
    "monsters": [
      "Stagnant Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9229,
    "map": "ashray",
    "ids": [
      11666
    ]
  },
  {
    "kind": "kill",
    "questId": 9229,
    "map": "ashray",
    "monsters": [
      "Ashray Fisherman"
    ]
  },
  {
    "kind": "kill",
    "questId": 9230,
    "map": "ashray",
    "monsters": [
      "Kitefin Shark Bait"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9231,
    "map": "ashray",
    "ids": [
      11667
    ]
  },
  {
    "kind": "kill",
    "questId": 9231,
    "map": "ashray",
    "monsters": [
      "Ghostly Eel"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9232,
    "map": "ashray",
    "ids": [
      11668
    ]
  },
  {
    "kind": "kill",
    "questId": 9232,
    "map": "ashray",
    "monsters": [
      "Stagnant Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9233,
    "map": "ashray",
    "ids": [
      11669,
      11670
    ]
  },
  {
    "kind": "kill",
    "questId": 9234,
    "map": "ashray",
    "monsters": [
      "Seafoam Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 9242,
    "map": "sunlightzone",
    "monsters": [
      "Blighted Water"
    ]
  },
  {
    "kind": "kill",
    "questId": 9243,
    "map": "sunlightzone",
    "monsters": [
      "Spectral Jellyfish"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9244,
    "map": "sunlightzone",
    "ids": [
      11705,
      11706
    ]
  },
  {
    "kind": "kill",
    "questId": 9244,
    "map": "sunlightzone",
    "monsters": [
      "Blighted Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9245,
    "map": "sunlightzone",
    "ids": [
      11707
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 9245,
    "map": "sunlightzone",
    "monsters": [
      "Spectral Jellyfish"
    ]
  },
  {
    "kind": "kill",
    "questId": 9246,
    "map": "sunlightzone",
    "monsters": [
      "Spectral Jellyfish",
      "Blighted Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9247,
    "map": "sunlightzone",
    "ids": [
      11708,
      11709,
      11710
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9248,
    "map": "sunlightzone",
    "ids": [
      11711
    ]
  },
  {
    "kind": "kill",
    "questId": 9248,
    "map": "sunlightzone",
    "monsters": [
      "Astravian Illusion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9249,
    "map": "sunlightzone",
    "ids": [
      11712
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 9249,
    "map": "sunlightzone",
    "monsters": [
      "Infernal Illusion"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9250,
    "map": "sunlightzone",
    "ids": [
      11713
    ]
  },
  {
    "kind": "kill",
    "questId": 9250,
    "map": "sunlightzone",
    "monsters": [
      "Seraphic Illusion"
    ]
  },
  {
    "kind": "kill",
    "questId": 9251,
    "map": "sunlightzone",
    "monsters": [
      "Marine Snow"
    ]
  },
  {
    "kind": "kill",
    "questId": 9258,
    "map": "twilightzone",
    "monsters": [
      "Whale Louse"
    ]
  },
  {
    "kind": "kill",
    "questId": 9259,
    "map": "twilightzone",
    "monsters": [
      "Polymelia Lamprey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9260,
    "map": "twilightzone",
    "ids": [
      11749
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9260,
    "map": "twilightzone",
    "ids": [
      11750
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 9261,
    "map": "twilightzone",
    "monsters": [
      "Whale Louse",
      "Polymelia Lamprey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9262,
    "map": "twilightzone",
    "ids": [
      11751,
      11752
    ]
  },
  {
    "kind": "kill",
    "questId": 9263,
    "map": "twilightzone",
    "monsters": [
      "Decay Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 9264,
    "map": "twilightzone",
    "monsters": [
      "Ice Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9265,
    "map": "twilightzone",
    "ids": [
      11753,
      11754,
      11755
    ]
  },
  {
    "kind": "kill",
    "questId": 9266,
    "map": "twilightzone",
    "monsters": [
      "Decay Spirit",
      "Ice Guardian"
    ]
  },
  {
    "kind": "plan",
    "questId": 9267,
    "actions": [
      {
        "kind": "hunt",
        "map": "twilightzone",
        "monster": "Leviathan",
        "item": "Leviathan Fought"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9268,
    "map": "twilightzone",
    "ids": [
      11756
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9292,
    "map": "midnightzone",
    "ids": [
      11842,
      11843,
      11844
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9293,
    "map": "midnightzone",
    "ids": [
      11845
    ]
  },
  {
    "kind": "kill",
    "questId": 9293,
    "map": "midnightzone",
    "monsters": [
      "Polymelia Lamprey"
    ]
  },
  {
    "kind": "kill",
    "questId": 9294,
    "map": "midnightzone",
    "monsters": [
      "Vowed ShadowSlayer",
      "Vowed ShadowSlayer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9295,
    "map": "midnightzone",
    "ids": [
      11846
    ]
  },
  {
    "kind": "kill",
    "questId": 9295,
    "map": "midnightzone",
    "monsters": [
      "Undead Prisoner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9296,
    "map": "midnightzone",
    "ids": [
      11847
    ]
  },
  {
    "kind": "kill",
    "questId": 9296,
    "map": "midnightzone",
    "monsters": [
      "Undead Prisoner",
      "Vowed ShadowSlayer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9297,
    "map": "midnightzone",
    "ids": [
      11848
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 9297,
    "map": "midnightzone",
    "monsters": [
      "Shadow Viscera"
    ]
  },
  {
    "kind": "kill",
    "questId": 9298,
    "map": "midnightzone",
    "monsters": [
      "Venerated Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 9299,
    "map": "midnightzone",
    "monsters": [
      "Shadow Viscera",
      "Venerated Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9300,
    "map": "midnightzone",
    "ids": [
      11849
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 9300,
    "map": "midnightzone",
    "ids": [
      11850
    ]
  },
  {
    "kind": "plan",
    "questId": 9301,
    "actions": [
      {
        "kind": "hunt",
        "map": "midnightzone",
        "monster": "Sparagmos",
        "item": "Sparagmos A.I. Defeated"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9306,
    "map": "abyssalzone",
    "ids": [
      11914
    ]
  },
  {
    "kind": "kill",
    "questId": 9306,
    "map": "abyssalzone",
    "monsters": [
      "Kitefin Shark Bait"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9307,
    "map": "abyssalzone",
    "ids": [
      11893
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 9307,
    "map": "abyssalzone",
    "ids": [
      11894
    ]
  },
  {
    "kind": "kill",
    "questId": 9308,
    "map": "abyssalzone",
    "monsters": [
      "Blighted Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9309,
    "map": "abyssalzone",
    "ids": [
      11895
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 9309,
    "map": "abyssalzone",
    "monsters": [
      "Shadow Viscera"
    ]
  },
  {
    "kind": "kill",
    "questId": 9310,
    "map": "abyssalzone",
    "monsters": [
      "Shadow Viscera",
      "Blighted Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9311,
    "map": "abyssalzone",
    "ids": [
      11896
    ]
  },
  {
    "kind": "kill",
    "questId": 9311,
    "map": "abyssalzone",
    "monsters": [
      "Foam Scavenger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9312,
    "map": "abyssalzone",
    "ids": [
      11897
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 9312,
    "map": "abyssalzone",
    "ids": [
      11898
    ]
  },
  {
    "kind": "kill",
    "questId": 9313,
    "map": "abyssalzone",
    "monsters": [
      "Necro Adipocere"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9314,
    "map": "abyssalzone",
    "ids": [
      11899
    ]
  },
  {
    "kind": "kill",
    "questId": 9314,
    "map": "abyssalzone",
    "monsters": [
      "Necro Adipocere",
      "Foam Scavenger"
    ]
  },
  {
    "kind": "plan",
    "questId": 9315,
    "actions": [
      {
        "kind": "hunt",
        "map": "abyssalzone",
        "monster": "The Ashray",
        "item": "The Ashray Vanquished"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9329,
    "map": "trenchobserve",
    "ids": [
      11975
    ]
  },
  {
    "kind": "kill",
    "questId": 9329,
    "map": "trenchobserve",
    "monsters": [
      "Venerated Wraith"
    ]
  },
  {
    "kind": "plan",
    "questId": 9330,
    "actions": [
      {
        "kind": "mapItem",
        "map": "trenchobserve",
        "id": 11976
      },
      {
        "kind": "hunt",
        "map": "trenchobserve",
        "monster": "Seabase Turret",
        "item": "Turret Screws",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9331,
    "map": "trenchobserve",
    "ids": [
      11977
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 9332,
    "map": "trenchobserve",
    "monsters": [
      "Venerated Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9333,
    "map": "trenchobserve",
    "ids": [
      11978
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 9333,
    "map": "trenchobserve",
    "monsters": [
      "Seabase Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9334,
    "map": "trenchobserve",
    "ids": [
      11979,
      11981
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9334,
    "map": "trenchobserve",
    "ids": [
      11980
    ],
    "quantity": 2
  },
  {
    "kind": "kill",
    "questId": 9335,
    "map": "trenchobserve",
    "monsters": [
      "Sea Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 9336,
    "map": "trenchobserve",
    "monsters": [
      "Necro Adipocere"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9337,
    "map": "trenchobserve",
    "ids": [
      11982
    ]
  },
  {
    "kind": "kill",
    "questId": 9337,
    "map": "trenchobserve",
    "monsters": [
      "Necro Adipocere",
      "Sea Spirit"
    ]
  },
  {
    "kind": "plan",
    "questId": 9338,
    "actions": [
      {
        "kind": "hunt",
        "map": "trenchobserve",
        "monster": "Lady Noelle",
        "item": "Lady Noelle Defeated"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.age-of-ruin.08deep-water",
    category: "Story",
    map: "ruinedcrown",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
