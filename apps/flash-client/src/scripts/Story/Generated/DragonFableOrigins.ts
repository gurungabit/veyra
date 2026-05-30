import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Dragon Fable Origins Story",
  "description": "This will finish the Dragon Fable Origins Story.",
  "tags": [
    "story",
    "quest",
    "dragon fable origins",
    "firewar",
    "northmountain",
    "charredplains",
    "drakonnan",
    "dragon",
    "fable",
    "origins"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6294,
    "map": "firewar",
    "monsters": [
      "Fire Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 6295,
    "map": "firewar",
    "monsters": [
      "Fire Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 6296,
    "actions": [
      {
        "kind": "hunt",
        "map": "firewar",
        "cell": "r8",
        "pad": "Right",
        "monster": "Inferno Dragon",
        "item": "Pyritium Shards",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 6297
  },
  {
    "kind": "kill",
    "questId": 6298,
    "map": "firewar",
    "monsters": [
      "Uriax"
    ]
  },
  {
    "kind": "plan",
    "questId": 6299,
    "actions": [
      {
        "kind": "join",
        "map": "firewar",
        "cell": "r10",
        "pad": "Left"
      },
      {
        "kind": "jump",
        "cell": "r10",
        "pad": "Left"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6301,
    "actions": [
      {
        "kind": "hunt",
        "map": "northmountain",
        "monster": "Ice Elemental",
        "item": "Monsters Defeated",
        "quantity": 8
      },
      {
        "kind": "mapItem",
        "id": 5812
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6302,
    "map": "northmountain",
    "monsters": [
      "Ice Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6303,
    "map": "northmountain",
    "monsters": [
      "Ursice Savage"
    ]
  },
  {
    "kind": "kill",
    "questId": 6304,
    "map": "northmountain",
    "monsters": [
      "Ice Spitter"
    ]
  },
  {
    "kind": "kill",
    "questId": 6305,
    "map": "northmountain",
    "monsters": [
      "Ice Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6306,
    "map": "northmountain",
    "ids": [
      5813
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 6306,
    "map": "northmountain",
    "ids": [
      5814
    ]
  },
  {
    "kind": "kill",
    "questId": 6307,
    "map": "northmountain",
    "monsters": [
      "Izotz"
    ]
  },
  {
    "kind": "kill",
    "questId": 6308,
    "map": "charredplains",
    "monsters": [
      "Fire Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6309,
    "map": "charredplains",
    "ids": [
      5815
    ]
  },
  {
    "kind": "kill",
    "questId": 6310,
    "map": "charredplains",
    "monsters": [
      "Akriloth"
    ]
  },
  {
    "kind": "kill",
    "questId": 6311,
    "map": "northmountain",
    "monsters": [
      "Izotz"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6312,
    "map": "drakonnan",
    "ids": [
      5827
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6313,
    "map": "drakonnan",
    "monsters": [
      "Fire Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 6314,
    "map": "drakonnan",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 6315,
    "map": "drakonnan",
    "monsters": [
      "Fire Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 6316,
    "map": "northmountain",
    "monsters": [
      "Ice Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6317,
    "map": "northmountain",
    "ids": [
      5826
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 6318,
    "map": "drakonnan",
    "monsters": [
      "Fire Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6319,
    "map": "drakonnan",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "kill",
    "questId": 6320,
    "map": "drakonnan",
    "monsters": [
      "Fire Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 6321,
    "map": "drakonnan",
    "monsters": [
      "Living Lava"
    ]
  },
  {
    "kind": "kill",
    "questId": 6322,
    "map": "drakonnan",
    "monsters": [
      "Fire Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6323,
    "map": "drakonnan",
    "monsters": [
      "Fire Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 6324,
    "map": "drakonnan",
    "monsters": [
      "Drakonnan"
    ]
  },
  {
    "kind": "kill",
    "questId": 6325,
    "map": "drakonnan",
    "monsters": [
      "Ultra Drakonnan"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.dragon-fable-origins",
    category: "Story",
    map: "firewar",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
