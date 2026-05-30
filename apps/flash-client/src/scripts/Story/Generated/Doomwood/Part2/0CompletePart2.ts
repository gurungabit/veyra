import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Complete Doomwood Part 2",
  "description": "This will complete the Doomwood Part 2 quest.",
  "tags": [
    "story",
    "quest",
    "doomwood",
    "complete",
    "part2",
    "0complete"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 2044,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r6",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2045,
    "map": "necrodungeon",
    "ids": [
      1001
    ]
  },
  {
    "kind": "kill",
    "questId": 2045,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1015
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1002
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2047,
    "map": "necrodungeon",
    "ids": [
      1003
    ]
  },
  {
    "kind": "kill",
    "questId": 2047,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2048,
    "map": "necrodungeon",
    "ids": [
      1004
    ]
  },
  {
    "kind": "kill",
    "questId": 2048,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier",
      "Ghoul"
    ]
  },
  {
    "kind": "plan",
    "questId": 2049,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r11",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1005
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 2050,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull",
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1017
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1006
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2052,
    "map": "necrodungeon",
    "ids": [
      1007
    ]
  },
  {
    "kind": "kill",
    "questId": 2052,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2053,
    "map": "necrodungeon",
    "ids": [
      1008
    ]
  },
  {
    "kind": "kill",
    "questId": 2053,
    "map": "necrodungeon",
    "monsters": [
      "Doom Crawler"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1009
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1018
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 2054,
    "map": "necrodungeon",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2055,
    "map": "necrodungeon",
    "ids": [
      1010
    ]
  },
  {
    "kind": "kill",
    "questId": 2055,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 2056,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r18",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1011
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2058,
    "map": "necrodungeon",
    "ids": [
      1012
    ]
  },
  {
    "kind": "kill",
    "questId": 2058,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1019
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1013
    ]
  },
  {
    "kind": "plan",
    "questId": 2060,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 49,
        "item": "Dracolich Head 1 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 50,
        "item": "Dracolich Head 2 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 46,
        "item": "Dracolich Head 3 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 47,
        "item": "Dracolich Head 4 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 48,
        "item": "Dracolich Head 5 Defeated!"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2061,
    "map": "necrodungeon",
    "ids": [
      1020
    ]
  },
  {
    "kind": "plan",
    "questId": 2044,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r6",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2045,
    "map": "necrodungeon",
    "ids": [
      1001
    ]
  },
  {
    "kind": "kill",
    "questId": 2045,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1015
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2046,
    "map": "necrodungeon",
    "ids": [
      1002
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2047,
    "map": "necrodungeon",
    "ids": [
      1003
    ]
  },
  {
    "kind": "kill",
    "questId": 2047,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2048,
    "map": "necrodungeon",
    "ids": [
      1004
    ]
  },
  {
    "kind": "kill",
    "questId": 2048,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier",
      "Ghoul"
    ]
  },
  {
    "kind": "plan",
    "questId": 2049,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r11",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1005
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2050,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 2050,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull",
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1017
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2051,
    "map": "necrodungeon",
    "ids": [
      1006
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2052,
    "map": "necrodungeon",
    "ids": [
      1007
    ]
  },
  {
    "kind": "kill",
    "questId": 2052,
    "map": "necrodungeon",
    "monsters": [
      "SlimeSkull"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2053,
    "map": "necrodungeon",
    "ids": [
      1008
    ]
  },
  {
    "kind": "kill",
    "questId": 2053,
    "map": "necrodungeon",
    "monsters": [
      "Doom Crawler"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1009
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2054,
    "map": "necrodungeon",
    "ids": [
      1018
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 2054,
    "map": "necrodungeon",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2055,
    "map": "necrodungeon",
    "ids": [
      1010
    ]
  },
  {
    "kind": "kill",
    "questId": 2055,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "plan",
    "questId": 2056,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "cell": "r18",
        "pad": "Down",
        "monster": "*",
        "item": "1 Floor Descended",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1016
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2057,
    "map": "necrodungeon",
    "ids": [
      1011
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2058,
    "map": "necrodungeon",
    "ids": [
      1012
    ]
  },
  {
    "kind": "kill",
    "questId": 2058,
    "map": "necrodungeon",
    "monsters": [
      "Necropolis Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1019
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 2059,
    "map": "necrodungeon",
    "ids": [
      1013
    ]
  },
  {
    "kind": "plan",
    "questId": 2060,
    "actions": [
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 49,
        "item": "Dracolich Head 1 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 50,
        "item": "Dracolich Head 2 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 46,
        "item": "Dracolich Head 3 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 47,
        "item": "Dracolich Head 4 Defeated!"
      },
      {
        "kind": "hunt",
        "map": "necrodungeon",
        "monster": 48,
        "item": "Dracolich Head 5 Defeated!"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2061,
    "map": "necrodungeon",
    "ids": [
      1020
    ]
  },
  {
    "kind": "kill",
    "questId": 2070,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2071,
    "map": "necrocavern",
    "ids": [
      1042
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 2071,
    "map": "necrocavern",
    "monsters": [
      "Shadow Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2072,
    "map": "necrocavern",
    "ids": [
      1044
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2072,
    "map": "necrocavern",
    "ids": [
      1045
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 2072,
    "map": "necrocavern",
    "monsters": [
      "Shadow Imp",
      "Shadowstone Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 2073,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 2074,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Elemental",
      "Shadow Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 2075,
    "map": "necrocavern",
    "ids": [
      1043
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 2076,
    "map": "necrocavern",
    "monsters": [
      "Shadow Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 2077,
    "map": "necrocavern",
    "monsters": [
      "Shadowstone Support"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.doomwood.part2.0complete-part2",
    category: "Story",
    map: "necrodungeon",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
