import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Astravia Castle",
  "description": "This will finish the Astravia Castle quest.",
  "tags": [
    "story",
    "quest",
    "elegy-of-madness",
    "darkon",
    "astravia",
    "castle",
    "elegyof",
    "madness",
    "3astravia"
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
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.elegyof-madness-darkon.3astravia-castle",
    category: "Story",
    map: "eridani",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
