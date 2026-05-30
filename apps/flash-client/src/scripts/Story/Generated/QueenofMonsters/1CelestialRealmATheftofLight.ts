import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Complete Celestial Realm",
  "description": "This will complete the Celestial Realm story arc.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "celestial-realm-at-theft-of-light",
    "queenof",
    "monsters",
    "1celestial",
    "realm",
    "atheftof",
    "light"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 4495,
    "map": "celestialrealm",
    "ids": [
      3698
    ]
  },
  {
    "kind": "kill",
    "questId": 4495,
    "map": "celestialrealm",
    "monsters": [
      "Celestial Bird of Paradise",
      "Fallen Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4496,
    "map": "celestialrealm",
    "monsters": [
      "Celestial Bird of Paradise",
      "Fallen Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4497,
    "map": "celestialrealm",
    "ids": [
      3696
    ]
  },
  {
    "kind": "kill",
    "questId": 4498,
    "map": "celestialrealm",
    "monsters": [
      "Infernal Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4499,
    "map": "celestialrealm",
    "ids": [
      3693
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4500,
    "map": "lostruins",
    "ids": [
      3694
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4500,
    "map": "lostruins",
    "monsters": [
      "Underworld Hound"
    ]
  },
  {
    "kind": "kill",
    "questId": 4501,
    "map": "lostruins",
    "monsters": [
      "Fallen Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 4502,
    "actions": [
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": "Underworld Hound",
        "item": "Clue 1"
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": "Infernal Imp",
        "item": "Clue 2"
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": "Fallen Knight",
        "item": "Clue 3"
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "cell": "r5",
        "pad": "Left",
        "monster": "Infernal Knight",
        "item": "Clue 4"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4503,
    "actions": [
      {
        "kind": "buy",
        "map": "fishing",
        "shopId": 356,
        "item": "Holy Oil"
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": 8,
        "item": "Cage Key"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4504,
    "actions": [
      {
        "kind": "buy",
        "map": "embersea",
        "shopId": 1100,
        "item": "Potent Guard Potion",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": "Fallen Knight",
        "item": "Infernal Enemy Defeated",
        "quantity": 15
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4505,
    "actions": [
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": "Fallen Knight",
        "item": "Brimstone-Stained Gauntlet",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": "Underworld Hound",
        "item": "Onyx Spike",
        "quantity": 3
      },
      {
        "kind": "mapItem",
        "map": "lostruins",
        "id": 3697,
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4503,
    "actions": [
      {
        "kind": "buy",
        "map": "fishing",
        "shopId": 356,
        "item": "Holy Oil"
      },
      {
        "kind": "hunt",
        "map": "lostruins",
        "monster": 8,
        "item": "Cage Key"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4506,
    "map": "lostruins",
    "ids": [
      3695
    ]
  },
  {
    "kind": "kill",
    "questId": 4507,
    "map": "lostruins",
    "monsters": [
      "Infernal Warlord"
    ]
  },
  {
    "kind": "kill",
    "questId": 4509,
    "map": "lostruinswar",
    "monsters": [
      "Infernal Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 4508,
    "map": "lostruinswar",
    "monsters": [
      "Diabolical Warlord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5374,
    "map": "infernalspire",
    "monsters": [
      "Fallen Knight",
      "Underworld Hound"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5375,
    "map": "infernalspire",
    "ids": [
      4729
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5375,
    "map": "infernalspire",
    "ids": [
      4730
    ]
  },
  {
    "kind": "kill",
    "questId": 5375,
    "map": "infernalspire",
    "monsters": [
      "Fallen Knight",
      "Underworld Hound"
    ]
  },
  {
    "kind": "kill",
    "questId": 5376,
    "map": "infernalspire",
    "monsters": [
      "Helzekiel"
    ]
  },
  {
    "kind": "plan",
    "questId": 5377,
    "actions": [
      {
        "kind": "hunt",
        "map": "infernalspire",
        "cell": "r7",
        "pad": "Left",
        "monster": "Dungeon Fiend",
        "item": "Infernal Key",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "infernalspire",
        "cell": "r7",
        "pad": "Left",
        "monster": "Dungeon Fiend",
        "item": "Dungeon Fiend Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "infernalspire",
        "cell": "r7",
        "pad": "Left",
        "monster": "Infernal Hound",
        "item": "Infernal Hound Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5378,
    "map": "infernalspire",
    "ids": [
      4731
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 5379,
    "map": "infernalspire",
    "ids": [
      4732
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 5379,
    "map": "infernalspire",
    "monsters": [
      "Dungeon Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 5380,
    "map": "infernalspire",
    "monsters": [
      "Garvodeus"
    ]
  },
  {
    "kind": "plan",
    "questId": 5381,
    "actions": [
      {
        "kind": "hunt",
        "map": "infernalspire",
        "cell": "r13",
        "pad": "Left",
        "monster": "Fallen Knight",
        "item": "Override Code"
      },
      {
        "kind": "hunt",
        "map": "infernalspire",
        "cell": "r13",
        "pad": "Left",
        "monster": "Fallen Knight",
        "item": "Fallen Knight Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "infernalspire",
        "monster": "Infernal Imp",
        "item": "Infernal Imp Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5382,
    "map": "infernalspire",
    "ids": [
      4733
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5383,
    "map": "infernalspire",
    "ids": [
      4734
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 5384,
    "map": "infernalspire",
    "monsters": [
      "Azkorath"
    ]
  },
  {
    "kind": "plan",
    "questId": 5385,
    "actions": [
      {
        "kind": "hunt",
        "map": "infernalspire",
        "monster": "Infernal Knight",
        "item": "Infernal Knight Slain",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "infernalspire",
        "monster": "Grievous Fiend",
        "item": "Grievous Fiend Slain",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5386,
    "map": "infernalspire",
    "ids": [
      4735
    ]
  },
  {
    "kind": "kill",
    "questId": 5387,
    "map": "infernalspire",
    "monsters": [
      "Malxas"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.1celestial-realm-atheftof-light",
    category: "Story",
    map: "celestialrealm",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
