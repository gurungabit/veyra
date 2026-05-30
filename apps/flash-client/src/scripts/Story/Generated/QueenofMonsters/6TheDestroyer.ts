import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "The Destroyer",
  "description": "This will finish the The Destroyer quest.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "the-destroyer",
    "queenof",
    "monsters",
    "6the",
    "destroyer"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 5791,
    "map": "therift",
    "ids": [
      5228
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5803,
    "map": "charredpath",
    "ids": [
      5248
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5804,
    "map": "crashsite",
    "ids": [
      5249
    ]
  },
  {
    "kind": "kill",
    "questId": 5804,
    "map": "crashsite",
    "monsters": [
      "Dwakel Warrior"
    ]
  },
  {
    "kind": "plan",
    "questId": 5805,
    "actions": [
      {
        "kind": "mapItem",
        "map": "charredpath",
        "id": 5256,
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "charredpath",
        "cell": "r3",
        "pad": "Left",
        "monster": "Noxious Fumes",
        "item": "Noxious Fumes Eradicated",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "charredpath",
        "cell": "r3",
        "pad": "Left",
        "monster": "Toxic Bile",
        "item": "Toxic Bile Eradicated",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5806,
    "map": "charredpath",
    "ids": [
      5250
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5806,
    "map": "charredpath",
    "monsters": [
      "Ragewing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5807,
    "map": "charredpath",
    "ids": [
      5251
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 5807,
    "map": "charredpath",
    "monsters": [
      "Toxic Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 5808,
    "map": "charredpath",
    "monsters": [
      "Infected Hare"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5809,
    "map": "charredpath",
    "ids": [
      5252
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5809,
    "map": "charredpath",
    "monsters": [
      "Plague Spreader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5810,
    "map": "charredpath",
    "ids": [
      5255
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5811,
    "map": "therift",
    "ids": [
      5253
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5811,
    "map": "therift",
    "monsters": [
      "Mana Chest"
    ]
  },
  {
    "kind": "kill",
    "questId": 5812,
    "map": "charredpath",
    "monsters": [
      "Toxic Wisteria"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5813,
    "map": "charredpath",
    "ids": [
      5254
    ]
  },
  {
    "kind": "kill",
    "questId": 5819,
    "map": "charredpath",
    "monsters": [
      "Noxious Fumes"
    ]
  },
  {
    "kind": "kill",
    "questId": 5820,
    "map": "charredpath",
    "monsters": [
      "Plague Spreader"
    ]
  },
  {
    "kind": "kill",
    "questId": 5821,
    "map": "charredpath",
    "monsters": [
      "Infected Hare"
    ]
  },
  {
    "kind": "kill",
    "questId": 5822,
    "map": "farm",
    "monsters": [
      "Treeant"
    ]
  },
  {
    "kind": "plan",
    "questId": 5823,
    "actions": [
      {
        "kind": "hunt",
        "map": "baconcat",
        "cell": "r8",
        "pad": "Left",
        "monster": "Litter Elemental"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5824,
    "map": "charredpath",
    "monsters": [
      "Zognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 5830,
    "map": "charredpath",
    "monsters": [
      "Ravenous Parasite"
    ]
  },
  {
    "kind": "plan",
    "questId": 5831,
    "actions": [
      {
        "kind": "hunt",
        "map": "skytower",
        "cell": "r3",
        "pad": "Bottom",
        "monster": "Sunstone",
        "item": "Sunstone",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "skytower",
        "cell": "r3",
        "pad": "Bottom",
        "monster": "Moonstone",
        "item": "Moonstone",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "skytower",
        "cell": "r3",
        "pad": "Bottom",
        "monster": "Star Sapphire",
        "item": "Star Sapphire",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 5832,
    "map": "sewerpink",
    "monsters": [
      "Cutie Grumbley"
    ]
  },
  {
    "kind": "plan",
    "questId": 5833,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 5834,
    "actions": [
      {
        "kind": "hunt",
        "map": "therift",
        "monster": "Mana Chest",
        "item": "Liquid Mana",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "therift",
        "monster": "Ravenous Parasite",
        "item": "Parasite \"Spice\"",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 5833
  },
  {
    "kind": "mapItem",
    "questId": 5835,
    "map": "charredpath",
    "ids": [
      5270
    ]
  },
  {
    "kind": "kill",
    "questId": 5836,
    "map": "charredpath",
    "monsters": [
      "Pustulisk"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5837,
    "map": "underglade",
    "ids": [
      5271
    ]
  },
  {
    "kind": "kill",
    "questId": 5838,
    "map": "underglade",
    "monsters": [
      "Tree Nymph",
      "Forest Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 5839,
    "map": "underglade",
    "monsters": [
      "Slime Spore"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5840,
    "map": "underglade",
    "ids": [
      5272
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 5840,
    "map": "underglade",
    "monsters": [
      "Forest Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 5841,
    "map": "underglade",
    "monsters": [
      "Blackened Earth"
    ]
  },
  {
    "kind": "kill",
    "questId": 5842,
    "map": "underglade",
    "monsters": [
      "Luminous Fungus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5843,
    "map": "underglade",
    "ids": [
      5273
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5843,
    "map": "underglade",
    "monsters": [
      "Forest Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 5844,
    "map": "underglade",
    "monsters": [
      "Twisted Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 5845,
    "map": "underglade",
    "monsters": [
      "Gemstone Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 5846,
    "map": "underglade",
    "monsters": [
      "Lunamoss"
    ]
  },
  {
    "kind": "kill",
    "questId": 5847,
    "map": "extriki",
    "monsters": [
      "Extriki"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.6the-destroyer",
    category: "Story",
    map: "therift",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
