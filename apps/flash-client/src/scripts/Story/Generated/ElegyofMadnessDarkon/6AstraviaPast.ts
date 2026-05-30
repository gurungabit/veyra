import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Astravia Past",
  "description": "This will finish the Astravia Past quest.",
  "tags": [
    "story",
    "quest",
    "elegy-of-madness",
    "darkon",
    "astravia",
    "past",
    "elegyof",
    "madness",
    "6astravia"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 8386,
    "map": "astraviajudge",
    "ids": [
      9275
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8387,
    "map": "astraviajudge",
    "monsters": [
      "Hand"
    ]
  },
  {
    "kind": "kill",
    "questId": 8388,
    "map": "astraviajudge",
    "monsters": [
      "Trumpeter"
    ]
  },
  {
    "kind": "plan",
    "questId": 8389,
    "actions": [
      {
        "kind": "hunt",
        "map": "astraviajudge",
        "cell": "r4",
        "pad": "Left",
        "monster": "Juror",
        "item": "Jurors Repelled",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8390,
    "map": "astraviajudge",
    "ids": [
      9276
    ]
  },
  {
    "kind": "kill",
    "questId": 8390,
    "map": "astraviajudge",
    "monsters": [
      "Trumpeter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8391,
    "map": "astraviajudge",
    "ids": [
      9277
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8391,
    "map": "astraviajudge",
    "monsters": [
      "Hand"
    ]
  },
  {
    "kind": "kill",
    "questId": 8392,
    "map": "astraviajudge",
    "monsters": [
      "Trumpeter"
    ]
  },
  {
    "kind": "plan",
    "questId": 8393,
    "actions": [
      {
        "kind": "hunt",
        "map": "astraviajudge",
        "cell": "r4",
        "pad": "Left",
        "monster": "Juror",
        "item": "Jurors Shoved",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8394,
    "map": "astraviajudge",
    "ids": [
      9278
    ]
  },
  {
    "kind": "kill",
    "questId": 8394,
    "map": "astraviajudge",
    "monsters": [
      "Shades"
    ]
  },
  {
    "kind": "kill",
    "questId": 8395,
    "map": "astraviajudge",
    "monsters": [
      "La"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8521,
    "map": "eridanipast",
    "ids": [
      9681
    ]
  },
  {
    "kind": "kill",
    "questId": 8522,
    "map": "eridanipast",
    "monsters": [
      "Bandit",
      "Dog"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8523,
    "map": "eridanipast",
    "ids": [
      9676
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 8524,
    "map": "eridanipast",
    "monsters": [
      "Bandit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8525,
    "map": "eridanipast",
    "ids": [
      9677
    ]
  },
  {
    "kind": "kill",
    "questId": 8525,
    "map": "eridanipast",
    "monsters": [
      "Bat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8526,
    "map": "eridanipast",
    "ids": [
      9678
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8526,
    "map": "eridanipast",
    "ids": [
      9679
    ]
  },
  {
    "kind": "kill",
    "questId": 8527,
    "map": "eridanipast",
    "monsters": [
      "Bat",
      "Dog"
    ]
  },
  {
    "kind": "kill",
    "questId": 8528,
    "map": "eridanipast",
    "monsters": [
      "Bandit"
    ]
  },
  {
    "kind": "plan",
    "questId": 8529,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridanipast",
        "monster": 18,
        "item": "Paladin Dueled"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8530,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridanipast",
        "monster": "Bandit",
        "item": "Bandit Remnants",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8530,
    "map": "eridanipast",
    "ids": [
      9680
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8592,
    "map": "astraviapast",
    "ids": [
      10017
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8592,
    "map": "astraviapast",
    "ids": [
      10018
    ]
  },
  {
    "kind": "kill",
    "questId": 8593,
    "map": "astraviapast",
    "monsters": [
      "Astravian Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8594,
    "map": "astraviapast",
    "ids": [
      10019
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 8595,
    "map": "astraviapast",
    "monsters": [
      "Panicked Citizen"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8596,
    "map": "astraviapast",
    "ids": [
      10020
    ]
  },
  {
    "kind": "kill",
    "questId": 8596,
    "map": "astraviapast",
    "monsters": [
      "Astravian Soldier"
    ]
  },
  {
    "kind": "kill",
    "questId": 8597,
    "map": "astraviapast",
    "monsters": [
      "Regulus"
    ]
  },
  {
    "kind": "kill",
    "questId": 8598,
    "map": "astraviapast",
    "monsters": [
      "Titania"
    ]
  },
  {
    "kind": "kill",
    "questId": 8599,
    "map": "astraviapast",
    "monsters": [
      "Aurola"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8600,
    "map": "astraviapast",
    "ids": [
      10021
    ]
  },
  {
    "kind": "kill",
    "questId": 8601,
    "map": "astraviapast",
    "monsters": [
      "Forsaken Husk"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.elegyof-madness-darkon.6astravia-past",
    category: "Story",
    map: "astraviajudge",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
