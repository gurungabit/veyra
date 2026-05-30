import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Fiend Past",
  "description": "This will finish the Fiend Past quest.",
  "tags": [
    "story",
    "quest",
    "fiend-past",
    "nation",
    "fiend",
    "past"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8478,
    "map": "fiendpast",
    "monsters": [
      "Newborn Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8479,
    "map": "fiendpast",
    "monsters": [
      "Hex Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8480,
    "map": "fiendpast",
    "monsters": [
      "Hex Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8481,
    "map": "fiendpast",
    "monsters": [
      "Fiend Champion"
    ]
  },
  {
    "kind": "kill",
    "questId": 8482,
    "map": "fiendpast",
    "monsters": [
      "DoomBringer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8483,
    "map": "fiendpast",
    "ids": [
      9556
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 8484,
    "map": "fiendpast",
    "monsters": [
      "Doom Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 8485,
    "map": "fiendpast",
    "monsters": [
      "Scarvitas"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8486,
    "map": "fiendpast",
    "ids": [
      9557
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8486,
    "map": "fiendpast",
    "monsters": [
      "Avarice Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 8487,
    "map": "fiendpast",
    "monsters": [
      "Void Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8488,
    "map": "fiendpast",
    "monsters": [
      "Avarice"
    ]
  },
  {
    "kind": "plan",
    "questId": 8489,
    "actions": [
      {
        "kind": "hunt",
        "map": "fiendpast",
        "cell": "r11",
        "pad": "Left",
        "monster": "Baelgar",
        "item": "Baelgar Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8490,
    "map": "fiendpast",
    "monsters": [
      "Proto-Legion Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8491,
    "map": "fiendpast",
    "monsters": [
      "Nation Defector"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8492,
    "map": "fiendpast",
    "ids": [
      9558
    ],
    "quantity": 6
  },
  {
    "kind": "plan",
    "questId": 8493,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 8493,
    "map": "fiendpast",
    "ids": [
      9559
    ]
  },
  {
    "kind": "chain",
    "questId": 8493
  },
  {
    "kind": "kill",
    "questId": 8494,
    "map": "fiendpast",
    "monsters": [
      "Dage the Lich"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.fiend-past",
    category: "Story",
    map: "fiendpast",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
