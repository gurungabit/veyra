import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Citadel Ruins",
  "description": "This will finish the Citadel Ruins quest.",
  "tags": [
    "story",
    "quest",
    "nation",
    "citadel-ruins",
    "citadel",
    "ruins"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 144,
    "map": "Citadel",
    "monsters": [
      "Inquisitor Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 145,
    "map": "Citadel",
    "monsters": [
      "Crusader"
    ]
  },
  {
    "kind": "kill",
    "questId": 146,
    "map": "Citadel",
    "monsters": [
      "Inquisitor Captain"
    ]
  },
  {
    "kind": "kill",
    "questId": 147,
    "map": "Citadel",
    "monsters": [
      "Burning Witch"
    ]
  },
  {
    "kind": "kill",
    "questId": 148,
    "map": "Citadel",
    "monsters": [
      "Inquisitor Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 149,
    "map": "Citadel",
    "monsters": [
      "Inquisitor Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 181,
    "map": "Citadel",
    "monsters": [
      "Belrot The Fiend"
    ]
  },
  {
    "kind": "plan",
    "questId": 182,
    "actions": [
      {
        "kind": "hunt",
        "map": "Citadel",
        "monster": "Grand Inquisitor",
        "item": "Ring of Evil Intent"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 560,
    "map": "underworld",
    "monsters": [
      "Undead Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 585,
    "map": "Tercessuinotlim",
    "monsters": [
      "Legion Fenrir"
    ]
  },
  {
    "kind": "plan",
    "questId": 668,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 6172,
    "map": "citadelruins",
    "ids": [
      5592
    ]
  },
  {
    "kind": "kill",
    "questId": 6172,
    "map": "citadelruins",
    "monsters": [
      "Mana Sprites"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6173,
    "map": "citadelruins",
    "ids": [
      5602
    ]
  },
  {
    "kind": "plan",
    "questId": 6174,
    "actions": [
      {
        "kind": "hunt",
        "map": "citadelruins",
        "monster": "Inquisitor Hobo",
        "item": "Inquisitor Hobos Defeated",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "citadelruins",
        "monster": "Inquisitor Hobo",
        "item": "Inquisitors' Manifesto",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6175,
    "map": "citadelruins",
    "ids": [
      5593
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 6175,
    "map": "citadelruins",
    "monsters": [
      "Inquisitor Hobo"
    ]
  },
  {
    "kind": "plan",
    "questId": 6176,
    "actions": [
      {
        "kind": "hunt",
        "map": "citadelruins",
        "monster": "Inquisitor Heavy",
        "item": "Heavies Beat Down",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "citadelruins",
        "monster": "Inquisitor Heavy",
        "item": "Citadel Key"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6176,
    "map": "citadelruins",
    "ids": [
      5603
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6177,
    "map": "citadelruins",
    "ids": [
      5594,
      5595,
      5596
    ]
  },
  {
    "kind": "kill",
    "questId": 6177,
    "map": "citadelruins",
    "monsters": [
      "Inquisitor Hobo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6178,
    "map": "citadelruins",
    "ids": [
      5597
    ]
  },
  {
    "kind": "kill",
    "questId": 6178,
    "map": "citadelruins",
    "monsters": [
      "Mana Sprites"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6179,
    "map": "citadelruins",
    "ids": [
      5598
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6180,
    "map": "citadelruins",
    "ids": [
      5599,
      5600,
      5601
    ]
  },
  {
    "kind": "kill",
    "questId": 6180,
    "map": "citadelruins",
    "monsters": [
      "Inquisitor Hobo"
    ]
  },
  {
    "kind": "kill",
    "questId": 6181,
    "map": "citadelruins",
    "monsters": [
      "Grand Inquisitor Murry"
    ]
  },
  {
    "kind": "kill",
    "questId": 6182,
    "map": "citadelruins",
    "monsters": [
      "Enn'tröpy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4312,
    "map": "drearia",
    "ids": [
      3485
    ]
  },
  {
    "kind": "kill",
    "questId": 4312,
    "map": "drearia",
    "monsters": [
      "Dark Makai",
      "Evil Elemental",
      "Green Rat"
    ]
  },
  {
    "kind": "kill",
    "questId": 4313,
    "map": "drearia",
    "monsters": [
      "Dark Makai"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4314,
    "map": "drearia",
    "ids": [
      3466
    ]
  },
  {
    "kind": "kill",
    "questId": 4314,
    "map": "drearia",
    "monsters": [
      "Green Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4315,
    "map": "drearia",
    "ids": [
      3467
    ]
  },
  {
    "kind": "kill",
    "questId": 4315,
    "map": "drearia",
    "monsters": [
      "Green Rat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4316,
    "map": "drearia",
    "ids": [
      3468
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4317,
    "map": "swordhavenpink",
    "ids": [
      3469
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4318,
    "map": "swordhavenpink",
    "ids": [
      3486
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4318,
    "map": "swordhavenpink",
    "monsters": [
      "Pink Slime"
    ]
  },
  {
    "kind": "kill",
    "questId": 4319,
    "map": "sewerpink",
    "monsters": [
      "Pink Rat"
    ]
  },
  {
    "kind": "kill",
    "questId": 4320,
    "map": "sewerpink",
    "monsters": [
      "Cutie Grumbley"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4321,
    "map": "pinewoodpink",
    "ids": [
      3470
    ]
  },
  {
    "kind": "kill",
    "questId": 4321,
    "map": "pinewoodpink",
    "monsters": [
      "Pink Grizzly"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4322,
    "map": "pinewoodpink",
    "ids": [
      3471
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4322,
    "map": "pinewoodpink",
    "monsters": [
      "Pink Shell Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4323,
    "map": "pinewoodpink",
    "monsters": [
      "Sparkletooth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4324,
    "map": "Citadel",
    "ids": [
      3472
    ]
  },
  {
    "kind": "kill",
    "questId": 4325,
    "map": "pinewoodpink",
    "monsters": [
      "Pink Grizzly"
    ]
  },
  {
    "kind": "kill",
    "questId": 6669,
    "map": "forest",
    "monsters": [
      "Boss Zardman"
    ]
  },
  {
    "kind": "kill",
    "questId": 6671,
    "map": "bludrut2",
    "monsters": [
      "Shadow Creeper"
    ]
  },
  {
    "kind": "kill",
    "questId": 6672,
    "map": "marsh2",
    "monsters": [
      "Thrax Ironhide"
    ]
  },
  {
    "kind": "kill",
    "questId": 6673,
    "map": "sleuthhound",
    "monsters": [
      "Harmoire"
    ]
  },
  {
    "kind": "kill",
    "questId": 6674,
    "map": "noobshire",
    "monsters": [
      "Kittarian Mouse Eater"
    ]
  },
  {
    "kind": "plan",
    "questId": 6675,
    "actions": [
      {
        "kind": "hunt",
        "map": "doomvault",
        "monster": 21,
        "item": "Your Princess is Not in This Castle"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6676,
    "map": "beachparty",
    "monsters": [
      "Sun Flare"
    ]
  },
  {
    "kind": "kill",
    "questId": 6677,
    "map": "marsh",
    "monsters": [
      "Dreadspider"
    ]
  },
  {
    "kind": "kill",
    "questId": 6678,
    "map": "iceplane",
    "monsters": [
      "Enfield"
    ]
  },
  {
    "kind": "kill",
    "questId": 6679,
    "map": "lair",
    "monsters": [
      "Red Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 6680,
    "map": "ledgermayne",
    "monsters": [
      "Ledgermayne"
    ]
  },
  {
    "kind": "kill",
    "questId": 6681,
    "map": "palace",
    "monsters": [
      "Invisible"
    ]
  },
  {
    "kind": "kill",
    "questId": 6682,
    "map": "underlair",
    "monsters": [
      "ArchFiend DragonLord"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.citadel-ruins",
    category: "Story",
    map: "Citadel",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
