import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Complete Elegy of Madness Story",
  "description": "This will complete the Astravia story.",
  "tags": [
    "story",
    "quest",
    "elegy-of-madness",
    "darkon",
    "complete",
    "all",
    "astravia",
    "elegyof",
    "madness",
    "0complete"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 7769,
    "map": "eridani",
    "ids": [
      7783
    ]
  },
  {
    "kind": "kill",
    "questId": 7769,
    "map": "eridani",
    "monsters": [
      "Maggot-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7770,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Maggot-Like Creature",
        "item": "Dress Scraps",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7771,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "r10",
        "pad": "Right",
        "monster": "Rat-Like Creature",
        "item": "Rats Exterminated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7772,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "r10",
        "pad": "Right",
        "monster": "Bat-Like Creature",
        "item": "Meat Cuts",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7773,
    "map": "eridani",
    "monsters": [
      "Wolf-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7774,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 3,
        "item": "Rat-Like Creature Slain"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 13,
        "item": "Bat-Like Creature Slain"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 1,
        "item": "Maggot-Like Creatures Slain",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7774,
    "map": "eridani",
    "ids": [
      7784
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7775,
    "map": "eridani",
    "ids": [
      7785
    ]
  },
  {
    "kind": "kill",
    "questId": 7775,
    "map": "eridani",
    "monsters": [
      "Wolf-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7776,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 8,
        "item": "Creature 15 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 11,
        "item": "Creature 16 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 5,
        "item": "Creature 34 Hunted",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7777,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 17,
        "item": "Creature 30 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 2,
        "item": "Creature 31 Hunted"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7778,
    "map": "eridani",
    "ids": [
      7786
    ]
  },
  {
    "kind": "kill",
    "questId": 7778,
    "map": "eridani",
    "monsters": [
      "Door"
    ]
  },
  {
    "kind": "kill",
    "questId": 7779,
    "map": "eridani",
    "monsters": [
      "Creature 6"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7769,
    "map": "eridani",
    "ids": [
      7783
    ]
  },
  {
    "kind": "kill",
    "questId": 7769,
    "map": "eridani",
    "monsters": [
      "Maggot-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7770,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Maggot-Like Creature",
        "item": "Dress Scraps",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7771,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "r10",
        "pad": "Right",
        "monster": "Rat-Like Creature",
        "item": "Rats Exterminated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7772,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "r10",
        "pad": "Right",
        "monster": "Bat-Like Creature",
        "item": "Meat Cuts",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7773,
    "map": "eridani",
    "monsters": [
      "Wolf-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7774,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 3,
        "item": "Rat-Like Creature Slain"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 13,
        "item": "Bat-Like Creature Slain"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 1,
        "item": "Maggot-Like Creatures Slain",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7774,
    "map": "eridani",
    "ids": [
      7784
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7775,
    "map": "eridani",
    "ids": [
      7785
    ]
  },
  {
    "kind": "kill",
    "questId": 7775,
    "map": "eridani",
    "monsters": [
      "Wolf-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7776,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 8,
        "item": "Creature 15 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 11,
        "item": "Creature 16 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 5,
        "item": "Creature 34 Hunted",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7777,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 17,
        "item": "Creature 30 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 2,
        "item": "Creature 31 Hunted"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7778,
    "map": "eridani",
    "ids": [
      7786
    ]
  },
  {
    "kind": "kill",
    "questId": 7778,
    "map": "eridani",
    "monsters": [
      "Door"
    ]
  },
  {
    "kind": "kill",
    "questId": 7779,
    "map": "eridani",
    "monsters": [
      "Creature 6"
    ]
  },
  {
    "kind": "kill",
    "questId": 7993,
    "map": "astravia",
    "monsters": [
      "Monstrous Dove"
    ]
  },
  {
    "kind": "kill",
    "questId": 7994,
    "map": "astravia",
    "monsters": [
      "Drago's Spy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7995,
    "map": "astravia",
    "ids": [
      8264,
      8265,
      8266
    ]
  },
  {
    "kind": "kill",
    "questId": 7995,
    "map": "astravia",
    "monsters": [
      "Astravian Mercenary"
    ]
  },
  {
    "kind": "plan",
    "questId": 7996,
    "actions": [
      {
        "kind": "hunt",
        "map": "astravia",
        "cell": "r6",
        "pad": "Bottom",
        "monster": "Creature 27",
        "item": "Creature 27 Slain",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7997,
    "map": "astravia",
    "monsters": [
      "Creature 28"
    ]
  },
  {
    "kind": "kill",
    "questId": 7998,
    "map": "astravia",
    "monsters": [
      "Ti"
    ]
  },
  {
    "kind": "kill",
    "questId": 7999,
    "map": "astravia",
    "monsters": [
      "Creature 27"
    ]
  },
  {
    "kind": "kill",
    "questId": 8000,
    "map": "astravia",
    "monsters": [
      "The Moon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7769,
    "map": "eridani",
    "ids": [
      7783
    ]
  },
  {
    "kind": "kill",
    "questId": 7769,
    "map": "eridani",
    "monsters": [
      "Maggot-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7770,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Maggot-Like Creature",
        "item": "Dress Scraps",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7771,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "r10",
        "pad": "Right",
        "monster": "Rat-Like Creature",
        "item": "Rats Exterminated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7772,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "cell": "r10",
        "pad": "Right",
        "monster": "Bat-Like Creature",
        "item": "Meat Cuts",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7773,
    "map": "eridani",
    "monsters": [
      "Wolf-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7774,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 3,
        "item": "Rat-Like Creature Slain"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 13,
        "item": "Bat-Like Creature Slain"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 1,
        "item": "Maggot-Like Creatures Slain",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7774,
    "map": "eridani",
    "ids": [
      7784
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7775,
    "map": "eridani",
    "ids": [
      7785
    ]
  },
  {
    "kind": "kill",
    "questId": 7775,
    "map": "eridani",
    "monsters": [
      "Wolf-Like Creature"
    ]
  },
  {
    "kind": "plan",
    "questId": 7776,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 8,
        "item": "Creature 15 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 11,
        "item": "Creature 16 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 5,
        "item": "Creature 34 Hunted",
        "quantity": 7
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7777,
    "actions": [
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 17,
        "item": "Creature 30 Hunted"
      },
      {
        "kind": "hunt",
        "map": "eridani",
        "monster": 2,
        "item": "Creature 31 Hunted"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7778,
    "map": "eridani",
    "ids": [
      7786
    ]
  },
  {
    "kind": "kill",
    "questId": 7778,
    "map": "eridani",
    "monsters": [
      "Door"
    ]
  },
  {
    "kind": "kill",
    "questId": 7779,
    "map": "eridani",
    "monsters": [
      "Creature 6"
    ]
  },
  {
    "kind": "kill",
    "questId": 7993,
    "map": "astravia",
    "monsters": [
      "Monstrous Dove"
    ]
  },
  {
    "kind": "kill",
    "questId": 7994,
    "map": "astravia",
    "monsters": [
      "Drago's Spy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7995,
    "map": "astravia",
    "ids": [
      8264,
      8265,
      8266
    ]
  },
  {
    "kind": "kill",
    "questId": 7995,
    "map": "astravia",
    "monsters": [
      "Astravian Mercenary"
    ]
  },
  {
    "kind": "plan",
    "questId": 7996,
    "actions": [
      {
        "kind": "hunt",
        "map": "astravia",
        "cell": "r6",
        "pad": "Bottom",
        "monster": "Creature 27",
        "item": "Creature 27 Slain",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7997,
    "map": "astravia",
    "monsters": [
      "Creature 28"
    ]
  },
  {
    "kind": "kill",
    "questId": 7998,
    "map": "astravia",
    "monsters": [
      "Ti"
    ]
  },
  {
    "kind": "kill",
    "questId": 7999,
    "map": "astravia",
    "monsters": [
      "Creature 27"
    ]
  },
  {
    "kind": "kill",
    "questId": 8000,
    "map": "astravia",
    "monsters": [
      "The Moon"
    ]
  },
  {
    "kind": "plan",
    "questId": 8247,
    "actions": [
      {
        "kind": "hunt",
        "map": "astraviacastle",
        "cell": "r3",
        "pad": "Left",
        "monster": "*",
        "item": "Key Pieces",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8248,
    "actions": [
      {
        "kind": "hunt",
        "map": "astraviacastle",
        "cell": "r3",
        "pad": "Left",
        "monster": "*",
        "item": "Creatures Shoo'd",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8248,
    "map": "astraviacastle",
    "ids": [
      8891
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 8249,
    "map": "astraviacastle",
    "ids": [
      8892
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8249,
    "map": "astraviacastle",
    "monsters": [
      "Creature 20"
    ]
  },
  {
    "kind": "plan",
    "questId": 8250,
    "actions": [
      {
        "kind": "hunt",
        "map": "astraviacastle",
        "cell": "r3",
        "pad": "Left",
        "monster": "*",
        "item": "Creatures Repelled",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8250,
    "map": "astraviacastle",
    "ids": [
      8893
    ]
  },
  {
    "kind": "plan",
    "questId": 8251,
    "actions": [
      {
        "kind": "hunt",
        "map": "astraviacastle",
        "cell": "r3",
        "pad": "Left",
        "monster": "*",
        "item": "Creatures Defeated",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8251,
    "map": "astraviacastle",
    "ids": [
      8894
    ]
  },
  {
    "kind": "kill",
    "questId": 8252,
    "map": "astraviacastle",
    "monsters": [
      "Creature 20"
    ]
  },
  {
    "kind": "kill",
    "questId": 8253,
    "map": "astraviacastle",
    "monsters": [
      "Astravian Royal Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8254,
    "map": "astraviacastle",
    "ids": [
      8895
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8254,
    "map": "astraviacastle",
    "monsters": [
      "Storage Spider"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8255,
    "map": "astraviacastle",
    "ids": [
      8896
    ]
  },
  {
    "kind": "kill",
    "questId": 8256,
    "map": "astraviacastle",
    "monsters": [
      "The Sun"
    ]
  },
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
  },
  {
    "kind": "mapItem",
    "questId": 8630,
    "map": "FirstObservatory",
    "ids": [
      10083
    ]
  },
  {
    "kind": "kill",
    "questId": 8631,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Scorpio"
    ]
  },
  {
    "kind": "kill",
    "questId": 8632,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Leo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8633,
    "map": "FirstObservatory",
    "ids": [
      10084
    ]
  },
  {
    "kind": "kill",
    "questId": 8633,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8634,
    "map": "FirstObservatory",
    "ids": [
      10085
    ]
  },
  {
    "kind": "kill",
    "questId": 8635,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8636,
    "map": "FirstObservatory",
    "ids": [
      10086,
      10087
    ]
  },
  {
    "kind": "kill",
    "questId": 8637,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret",
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8638,
    "map": "FirstObservatory",
    "ids": [
      10088,
      10089
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8639,
    "map": "FirstObservatory",
    "ids": [
      10090
    ]
  },
  {
    "kind": "kill",
    "questId": 8640,
    "map": "FirstObservatory",
    "monsters": [
      "Empress’ Finger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8641,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature",
      "Ancient Turret",
      "Empress’ Finger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8630,
    "map": "FirstObservatory",
    "ids": [
      10083
    ]
  },
  {
    "kind": "kill",
    "questId": 8631,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Scorpio"
    ]
  },
  {
    "kind": "kill",
    "questId": 8632,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Leo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8633,
    "map": "FirstObservatory",
    "ids": [
      10084
    ]
  },
  {
    "kind": "kill",
    "questId": 8633,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8634,
    "map": "FirstObservatory",
    "ids": [
      10085
    ]
  },
  {
    "kind": "kill",
    "questId": 8635,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8636,
    "map": "FirstObservatory",
    "ids": [
      10086,
      10087
    ]
  },
  {
    "kind": "kill",
    "questId": 8637,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret",
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8638,
    "map": "FirstObservatory",
    "ids": [
      10088,
      10089
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8639,
    "map": "FirstObservatory",
    "ids": [
      10090
    ]
  },
  {
    "kind": "kill",
    "questId": 8640,
    "map": "FirstObservatory",
    "monsters": [
      "Empress’ Finger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8641,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature",
      "Ancient Turret",
      "Empress’ Finger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8678,
    "map": "genesisgarden",
    "ids": [
      10196
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8679,
    "map": "genesisgarden",
    "monsters": [
      "Drago's Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8680,
    "map": "genesisgarden",
    "ids": [
      10197,
      10198,
      10199
    ]
  },
  {
    "kind": "kill",
    "questId": 8681,
    "map": "genesisgarden",
    "monsters": [
      "Drago's Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8682,
    "map": "genesisgarden",
    "ids": [
      10200,
      10201
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8683,
    "map": "genesisgarden",
    "ids": [
      10202
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8684,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Creature",
      "Plant Beast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8685,
    "map": "genesisgarden",
    "ids": [
      10203
    ]
  },
  {
    "kind": "kill",
    "questId": 8685,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "kill",
    "questId": 8686,
    "map": "genesisgarden",
    "monsters": [
      "Undead Humanoid"
    ]
  },
  {
    "kind": "kill",
    "questId": 8687,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Mecha"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8630,
    "map": "FirstObservatory",
    "ids": [
      10083
    ]
  },
  {
    "kind": "kill",
    "questId": 8631,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Scorpio"
    ]
  },
  {
    "kind": "kill",
    "questId": 8632,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Leo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8633,
    "map": "FirstObservatory",
    "ids": [
      10084
    ]
  },
  {
    "kind": "kill",
    "questId": 8633,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8634,
    "map": "FirstObservatory",
    "ids": [
      10085
    ]
  },
  {
    "kind": "kill",
    "questId": 8635,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8636,
    "map": "FirstObservatory",
    "ids": [
      10086,
      10087
    ]
  },
  {
    "kind": "kill",
    "questId": 8637,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret",
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8638,
    "map": "FirstObservatory",
    "ids": [
      10088,
      10089
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8639,
    "map": "FirstObservatory",
    "ids": [
      10090
    ]
  },
  {
    "kind": "kill",
    "questId": 8640,
    "map": "FirstObservatory",
    "monsters": [
      "Empress’ Finger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8641,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature",
      "Ancient Turret",
      "Empress’ Finger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8678,
    "map": "genesisgarden",
    "ids": [
      10196
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8679,
    "map": "genesisgarden",
    "monsters": [
      "Drago's Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8680,
    "map": "genesisgarden",
    "ids": [
      10197,
      10198,
      10199
    ]
  },
  {
    "kind": "kill",
    "questId": 8681,
    "map": "genesisgarden",
    "monsters": [
      "Drago's Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8682,
    "map": "genesisgarden",
    "ids": [
      10200,
      10201
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8683,
    "map": "genesisgarden",
    "ids": [
      10202
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8684,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Creature",
      "Plant Beast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8685,
    "map": "genesisgarden",
    "ids": [
      10203
    ]
  },
  {
    "kind": "kill",
    "questId": 8685,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "kill",
    "questId": 8686,
    "map": "genesisgarden",
    "monsters": [
      "Undead Humanoid"
    ]
  },
  {
    "kind": "kill",
    "questId": 8687,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Mecha"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8723,
    "map": "theworld",
    "ids": [
      10289
    ]
  },
  {
    "kind": "kill",
    "questId": 8724,
    "map": "theworld",
    "monsters": [
      "Nothingness"
    ]
  },
  {
    "kind": "kill",
    "questId": 8725,
    "map": "theworld",
    "monsters": [
      "Re"
    ]
  },
  {
    "kind": "kill",
    "questId": 8726,
    "map": "theworld",
    "monsters": [
      "Fa"
    ]
  },
  {
    "kind": "kill",
    "questId": 8727,
    "map": "theworld",
    "monsters": [
      "Ti"
    ]
  },
  {
    "kind": "kill",
    "questId": 8728,
    "map": "theworld",
    "monsters": [
      "So"
    ]
  },
  {
    "kind": "kill",
    "questId": 8729,
    "map": "theworld",
    "monsters": [
      "Nothingness"
    ]
  },
  {
    "kind": "kill",
    "questId": 8730,
    "map": "theworld",
    "monsters": [
      "So"
    ]
  },
  {
    "kind": "kill",
    "questId": 8731,
    "map": "theworld",
    "monsters": [
      "So"
    ]
  },
  {
    "kind": "kill",
    "questId": 8732,
    "map": "theworld",
    "monsters": [
      "Darkon"
    ]
  },
  {
    "kind": "plan",
    "questId": 8733,
    "actions": [
      {
        "kind": "hunt",
        "map": "theworld",
        "monster": 12,
        "item": "Encore Darkon Defeated"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.elegyof-madness-darkon.0complete-all",
    category: "Story",
    map: "eridani",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
