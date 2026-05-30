import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Dragon Road Story (Upholder)",
  "description": "This will finish the Dragon Road Story.",
  "tags": [
    "story",
    "quest",
    "dragon-road",
    "dragon",
    "road",
    "upholder"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 4534,
    "actions": [
      {
        "kind": "mapItem",
        "map": "BattleonTown",
        "id": 3750,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "Arcangrove",
        "id": 3751,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "Dragonrune",
        "id": 3752,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4535,
    "actions": [
      {
        "kind": "mapItem",
        "map": "DragonRoad",
        "id": 3761,
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "Natatorium",
        "monster": "Anglerfish",
        "item": "First DragonStar Found"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4536,
    "actions": [
      {
        "kind": "mapItem",
        "map": "OnslaughtTower",
        "id": 3754,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "DragonRoad",
        "id": 3762,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4537,
    "actions": [
      {
        "kind": "join",
        "map": "XanTown"
      },
      {
        "kind": "jump",
        "cell": "r12"
      },
      {
        "kind": "mapItem",
        "map": "XanTown",
        "id": 3756,
        "quantity": 1
      },
      {
        "kind": "jump",
        "cell": "r12",
        "pad": "Left"
      },
      {
        "kind": "mapItem",
        "map": "DragonRoad",
        "id": 3763,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4538,
    "map": "Lair",
    "monsters": [
      "Onyx Lava Dragon",
      "Onyx Lava Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 4539,
    "actions": [
      {
        "kind": "mapItem",
        "map": "DragonRoad",
        "id": 3765,
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "EarthStorm",
        "monster": "Diamond Golem",
        "item": "Fifth DragonStar Found"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4540,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Bamboo",
        "id": 3758,
        "quantity": 1
      },
      {
        "kind": "mapItem",
        "map": "DragonRoad",
        "id": 3766,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4541,
    "map": "DragonRoad",
    "monsters": [
      "Desert Wolf Bandit"
    ]
  },
  {
    "kind": "kill",
    "questId": 4542,
    "map": "DragonRoad",
    "monsters": [
      "Oinklong"
    ]
  },
  {
    "kind": "kill",
    "questId": 4543,
    "map": "DragonRoad",
    "monsters": [
      "Horccolo"
    ]
  },
  {
    "kind": "kill",
    "questId": 4544,
    "map": "DragonRoad",
    "monsters": [
      "Cyborg 71",
      "Cyborg 81"
    ]
  },
  {
    "kind": "kill",
    "questId": 4545,
    "map": "DragonRoad",
    "monsters": [
      "Majic Guu"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4546,
    "map": "DragonRoad",
    "ids": [
      3759
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 4547,
    "map": "DragonRoad",
    "monsters": [
      "Super Dragon Twig"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.dragon-road-upholder",
    category: "Story",
    map: "BattleonTown",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
