import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Fiendshard",
  "description": "This will finish the Fiendshard quest.",
  "tags": [
    "story",
    "quest",
    "nation",
    "fiendshard"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 7881,
    "map": "Originul",
    "monsters": [
      "Inquisitor Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7882,
    "map": "Originul",
    "monsters": [
      "Inquisitor Captain"
    ]
  },
  {
    "kind": "kill",
    "questId": 7883,
    "map": "Originul",
    "monsters": [
      "Grand Inquisitor"
    ]
  },
  {
    "kind": "kill",
    "questId": 7884,
    "map": "Originul",
    "monsters": [
      "Inquisitor Guard",
      "Inquisitor Captain",
      "Grand Inquisitor"
    ]
  },
  {
    "kind": "kill",
    "questId": 7885,
    "map": "Originul",
    "monsters": [
      "Bloodfiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 7886,
    "map": "Originul",
    "monsters": [
      "Bloodfiend"
    ]
  },
  {
    "kind": "plan",
    "questId": 7887,
    "actions": [
      {
        "kind": "hunt",
        "map": "Originul",
        "cell": "r7",
        "pad": "left",
        "monster": "Dreadfiend",
        "item": "Dreadfiend Executed",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7888,
    "map": "Originul",
    "monsters": [
      "Fiend Champion"
    ]
  },
  {
    "kind": "plan",
    "questId": 7889,
    "actions": [
      {
        "kind": "hunt",
        "map": "Originul",
        "cell": "r10",
        "pad": "Top",
        "monster": "Bloodfiend",
        "item": "Mutineer Crushed",
        "quantity": 25
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7892,
    "actions": [
      {
        "kind": "hunt",
        "map": "Fiendshard",
        "cell": "r2",
        "pad": "Left",
        "monster": "Rogue Fiend",
        "item": "Rogue Fiends Defeated",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7892,
    "map": "Fiendshard",
    "ids": [
      7983
    ]
  },
  {
    "kind": "plan",
    "questId": 7893,
    "actions": [
      {
        "kind": "hunt",
        "map": "Fiendshard",
        "cell": "r2",
        "pad": "Left",
        "monster": "Rogue Fiend",
        "item": "Fiends Interrogated",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7894,
    "actions": [
      {
        "kind": "hunt",
        "map": "Fiendshard",
        "cell": "r2",
        "pad": "Left",
        "monster": "Rogue Fiend",
        "item": "Key Fragments Located",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7895,
    "actions": [
      {
        "kind": "hunt",
        "map": "fiendshard",
        "cell": "r2",
        "pad": "Left",
        "monster": "Rogue Fiend",
        "item": "Rogue Fiend Defeated",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "fiendshard",
        "cell": "r5",
        "pad": "Left",
        "monster": "Paladin Fiend",
        "item": "Paladin Fiend Defeated",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "fiendshard",
        "monster": "Void Knight",
        "item": "Void Knight Defeated",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7895,
    "map": "Fiendshard",
    "ids": [
      7984
    ]
  },
  {
    "kind": "kill",
    "questId": 7896,
    "map": "Fiendshard",
    "monsters": [
      "Paladin Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 7897,
    "map": "Fiendshard",
    "monsters": [
      "Dirtlicker",
      "Fiend Shard"
    ]
  },
  {
    "kind": "plan",
    "questId": 7898,
    "actions": [
      {
        "kind": "hunt",
        "map": "fiendshard",
        "cell": "r9",
        "pad": "Left",
        "monster": "Paladin Fiend",
        "item": "Fiends Fended Off",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "fiendshard",
        "cell": "r9",
        "pad": "Left",
        "monster": 15,
        "item": 59059,
        "quantity": 1
      },
      {
        "kind": "jump",
        "cell": "Enter",
        "pad": "Spawn"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.fiendshard",
    category: "Story",
    map: "Originul",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
