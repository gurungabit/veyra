import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Yokai Realm",
  "description": "This script will complete \"Yokai Realm\" storyline.",
  "tags": [
    "story",
    "quest",
    "saga",
    "dragons",
    "dragon",
    "yokai",
    "realm",
    "yokairealm",
    "complete",
    "all",
    "of",
    "06yokai"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 9378,
    "map": "yokaipirate",
    "ids": [
      12133,
      12134,
      12135
    ]
  },
  {
    "kind": "kill",
    "questId": 9379,
    "map": "yokaipirate",
    "monsters": [
      "Disguised Pirate"
    ]
  },
  {
    "kind": "plan",
    "questId": 9380,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": "Serpent Warrior",
        "item": "Serpent Badge",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9380,
    "map": "yokaipirate",
    "ids": [
      12136,
      12137
    ]
  },
  {
    "kind": "kill",
    "questId": 9381,
    "map": "yokaipirate",
    "monsters": [
      "Disguised Pirate"
    ]
  },
  {
    "kind": "kill",
    "questId": 9382,
    "map": "yokaipirate",
    "monsters": [
      "Noble Owl"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9383,
    "map": "yokaipirate",
    "ids": [
      12138
    ],
    "quantity": 7
  },
  {
    "kind": "plan",
    "questId": 9384,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": "Disguised Pirate",
        "item": "Pirate Interrogated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": "Serpent Warrior",
        "item": "Warrior Interrogated",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9384,
    "map": "yokaipirate",
    "ids": [
      12139
    ]
  },
  {
    "kind": "kill",
    "questId": 9385,
    "map": "yokaipirate",
    "monsters": [
      "Noble Owl"
    ]
  },
  {
    "kind": "plan",
    "questId": 9386,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": 1,
        "item": "Knight Captured",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 9387,
    "actions": [
      {
        "kind": "hunt",
        "map": "yokaipirate",
        "monster": 11,
        "item": "Neverglades Lord Dueled"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9396,
    "map": "yokaitreasure",
    "ids": [
      12162,
      12163,
      12164
    ]
  },
  {
    "kind": "kill",
    "questId": 9397,
    "map": "yokaitreasure",
    "monsters": [
      "Needle Mouth"
    ]
  },
  {
    "kind": "kill",
    "questId": 9398,
    "map": "yokaitreasure",
    "monsters": [
      "Quicksilver"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9399,
    "map": "yokaitreasure",
    "ids": [
      12165,
      12166
    ]
  },
  {
    "kind": "kill",
    "questId": 9400,
    "map": "yokaitreasure",
    "monsters": [
      "Imperial Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 9401,
    "map": "yokaitreasure",
    "monsters": [
      "Needle Mouth"
    ]
  },
  {
    "kind": "kill",
    "questId": 9402,
    "map": "yokaitreasure",
    "monsters": [
      "Imperial Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9403,
    "map": "yokaitreasure",
    "ids": [
      12167
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 9404,
    "map": "yokaitreasure",
    "monsters": [
      "Needle Mouth",
      "Imperial Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 9405,
    "map": "yokaitreasure",
    "monsters": [
      "Admiral Zheng"
    ]
  },
  {
    "kind": "kill",
    "questId": 9590,
    "map": "hakuvillage",
    "monsters": [
      "Tsukumogami"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9591,
    "map": "hakuvillage",
    "ids": [
      12706
    ]
  },
  {
    "kind": "kill",
    "questId": 9591,
    "map": "hakuvillage",
    "monsters": [
      "Mountain Oni"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9592,
    "map": "hakuvillage",
    "ids": [
      12707
    ]
  },
  {
    "kind": "kill",
    "questId": 9592,
    "map": "hakuvillage",
    "monsters": [
      "Tsukumogami"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9593,
    "map": "hakuvillage",
    "ids": [
      12708,
      12709
    ]
  },
  {
    "kind": "kill",
    "questId": 9593,
    "map": "hakuvillage",
    "monsters": [
      "Kitsune Spy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9594,
    "map": "hakuvillage",
    "ids": [
      12710
    ]
  },
  {
    "kind": "kill",
    "questId": 9594,
    "map": "hakuvillage",
    "monsters": [
      "Nagami"
    ]
  },
  {
    "kind": "kill",
    "questId": 9595,
    "map": "hakuvillage",
    "monsters": [
      "Kitsune Spy"
    ]
  },
  {
    "kind": "kill",
    "questId": 9596,
    "map": "hakuvillage",
    "monsters": [
      "Mountain Oni"
    ]
  },
  {
    "kind": "kill",
    "questId": 9597,
    "map": "hakuvillage",
    "monsters": [
      "Tsukumogami"
    ]
  },
  {
    "kind": "kill",
    "questId": 9598,
    "map": "hakuvillage",
    "monsters": [
      "Nagami"
    ]
  },
  {
    "kind": "kill",
    "questId": 9599,
    "map": "hakuvillage",
    "monsters": [
      "Dai Tengu"
    ]
  },
  {
    "kind": "kill",
    "questId": 9601,
    "map": "hakuwar",
    "monsters": [
      "Dark Zmey"
    ]
  },
  {
    "kind": "kill",
    "questId": 9603,
    "map": "hakuwar",
    "monsters": [
      "Kitsune Spy"
    ]
  },
  {
    "kind": "kill",
    "questId": 9604,
    "map": "hakuwar",
    "monsters": [
      "Dark Zmey"
    ]
  },
  {
    "kind": "kill",
    "questId": 9605,
    "map": "hakuwar",
    "monsters": [
      "Mountain Oni"
    ]
  },
  {
    "kind": "kill",
    "questId": 9606,
    "map": "hakuwar",
    "monsters": [
      "Zmey Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 9607,
    "map": "hakuwar",
    "monsters": [
      "Zakhvatchik"
    ]
  },
  {
    "kind": "plan",
    "questId": 9667,
    "actions": []
  },
  {
    "kind": "kill",
    "questId": 9668,
    "map": "yokaiportal",
    "monsters": [
      "Oni Spirits"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9669,
    "map": "yokaiportal",
    "ids": [
      12985,
      12986
    ]
  },
  {
    "kind": "kill",
    "questId": 9670,
    "map": "yokaiportal",
    "monsters": [
      "Kitsune Spirits"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9671,
    "map": "yokaiportal",
    "ids": [
      12987,
      12988
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9672,
    "map": "yokaiportal",
    "ids": [
      12989,
      12995,
      12990
    ]
  },
  {
    "kind": "kill",
    "questId": 9672,
    "map": "yokaiportal",
    "monsters": [
      "Snake Shikigami"
    ]
  },
  {
    "kind": "kill",
    "questId": 9673,
    "map": "yokaiportal",
    "monsters": [
      "Puppeted Dragonling"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9674,
    "map": "yokaiportal",
    "ids": [
      12991,
      12992,
      12993
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9675,
    "map": "yokaiportal",
    "ids": [
      12994
    ]
  },
  {
    "kind": "kill",
    "questId": 9675,
    "map": "yokaiportal",
    "monsters": [
      "Kitsune Spirits",
      "Puppeted Dragonling"
    ]
  },
  {
    "kind": "kill",
    "questId": 9676,
    "map": "yokaiportal",
    "monsters": [
      "Kitsune Kukol'nyy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9680,
    "map": "yokairealm",
    "ids": [
      13036,
      13037
    ]
  },
  {
    "kind": "kill",
    "questId": 9680,
    "map": "yokairealm",
    "monsters": [
      "Snake Shikigami"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9681,
    "map": "yokairealm",
    "ids": [
      13038,
      13039
    ]
  },
  {
    "kind": "kill",
    "questId": 9681,
    "map": "yokairealm",
    "monsters": [
      "Snake Shikigami"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9682,
    "map": "yokairealm",
    "ids": [
      13040,
      13041
    ]
  },
  {
    "kind": "kill",
    "questId": 9682,
    "map": "yokairealm",
    "monsters": [
      "Puppeted Dragonling"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9683,
    "map": "yokairealm",
    "ids": [
      13042,
      13043
    ]
  },
  {
    "kind": "kill",
    "questId": 9683,
    "map": "yokairealm",
    "monsters": [
      "Dark Zmey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9684,
    "map": "yokairealm",
    "ids": [
      13044
    ]
  },
  {
    "kind": "kill",
    "questId": 9684,
    "map": "yokairealm",
    "monsters": [
      "Puppeted Dragonling",
      "Dark Zmey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9685,
    "map": "yokairealm",
    "ids": [
      13045,
      13046
    ]
  },
  {
    "kind": "kill",
    "questId": 9685,
    "map": "yokairealm",
    "monsters": [
      "Oni Spirits"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 9686,
    "map": "yokairealm",
    "ids": [
      13047
    ]
  },
  {
    "kind": "kill",
    "questId": 9686,
    "map": "yokairealm",
    "monsters": [
      "Kitsune Spirits"
    ]
  },
  {
    "kind": "kill",
    "questId": 9687,
    "map": "yokairealm",
    "monsters": [
      "Oni Spirits",
      "Kitsune Spirits"
    ]
  },
  {
    "kind": "kill",
    "questId": 9688,
    "map": "yokairealm",
    "monsters": [
      "Inugami"
    ]
  },
  {
    "kind": "kill",
    "questId": 9689,
    "map": "yokairealm",
    "monsters": [
      "Mikoto Kukol'nyy"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.dragons-of-yokai.06yokai-realm",
    category: "Story",
    map: "yokaipirate",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
