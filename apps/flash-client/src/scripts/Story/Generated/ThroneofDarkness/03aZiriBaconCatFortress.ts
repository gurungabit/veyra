import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Ziri) Bacon Cat Fortress Story",
  "description": "This will finish the Bacon Cat Fortress story.",
  "tags": [
    "story",
    "bacon",
    "cat",
    "fortress",
    "farm",
    "ziri",
    "throne",
    "darkness",
    "throneof",
    "03a"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
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
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.throneof-darkness.03a-ziri-bacon-cat-fortress",
    category: "Story",
    map: "baconcat",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
