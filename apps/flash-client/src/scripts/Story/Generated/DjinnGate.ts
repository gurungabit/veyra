import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Djinn Gate Story",
  "description": "This will finish the Djinn Gate story.",
  "tags": [
    "story",
    "quest",
    "djinn-gate",
    "djinn",
    "gate"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 6153,
    "actions": [
      {
        "kind": "hunt",
        "map": "mobius",
        "cell": "Slugfit",
        "pad": "Bottom",
        "monster": "Slugfit",
        "item": "Fragment 1"
      },
      {
        "kind": "hunt",
        "map": "mobius",
        "cell": "Slugfit",
        "pad": "Bottom",
        "monster": "Cyclops Warlord",
        "item": "Fragment 4"
      },
      {
        "kind": "hunt",
        "map": "faerie",
        "cell": "TopRock",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 2"
      },
      {
        "kind": "hunt",
        "map": "faerie",
        "cell": "Side4",
        "pad": "Right",
        "monster": "*",
        "item": "Fragment 3"
      },
      {
        "kind": "hunt",
        "map": "cornelis",
        "cell": "Side1",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 5"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6154,
    "actions": [
      {
        "kind": "hunt",
        "map": "arcangrove",
        "cell": "Left",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 6"
      },
      {
        "kind": "hunt",
        "map": "cloister",
        "cell": "r8",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 7"
      },
      {
        "kind": "hunt",
        "map": "gilead",
        "cell": "Fail",
        "pad": "Right",
        "monster": "Bubblin",
        "item": "Fragment 8"
      },
      {
        "kind": "hunt",
        "map": "natatorium",
        "cell": "r3",
        "pad": "Left",
        "monster": "Merdraconian",
        "item": "Fragment 9"
      },
      {
        "kind": "hunt",
        "map": "mafic",
        "cell": "r2",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 10"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6155,
    "actions": [
      {
        "kind": "hunt",
        "map": "mythsong",
        "cell": "Hill",
        "pad": "Right",
        "monster": "*",
        "item": "Fragment 11"
      },
      {
        "kind": "hunt",
        "map": "palooza",
        "monster": "Rock Lobster",
        "item": "Fragment 12"
      },
      {
        "kind": "hunt",
        "map": "palooza",
        "monster": "Stinger",
        "item": "Fragment 13"
      },
      {
        "kind": "hunt",
        "map": "beehive",
        "monster": "Killer Queen Bee",
        "item": "Fragment 14"
      },
      {
        "kind": "hunt",
        "map": "palooza",
        "monster": "Mozard",
        "item": "Fragment 15"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6156,
    "actions": [
      {
        "kind": "hunt",
        "map": "forestchaos",
        "cell": "Boss",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 16"
      },
      {
        "kind": "hunt",
        "map": "guru",
        "cell": "Field2",
        "pad": "Left",
        "monster": "*",
        "item": "Fragment 17"
      },
      {
        "kind": "hunt",
        "map": "marsh",
        "cell": "Forest3",
        "pad": "Left",
        "monster": "Dark Witch",
        "item": "Fragment 18"
      },
      {
        "kind": "hunt",
        "map": "marsh",
        "cell": "Forest3",
        "pad": "Left",
        "monster": "Spider",
        "item": "Fragment 19"
      },
      {
        "kind": "hunt",
        "map": "marsh2",
        "cell": "End",
        "pad": "Left",
        "monster": "Soulseeker",
        "item": "Fragment 20"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6157,
    "actions": [
      {
        "kind": "hunt",
        "map": "pirates",
        "cell": "End",
        "pad": "Left",
        "monster": "Shark Bait",
        "item": "Fragment 21"
      },
      {
        "kind": "hunt",
        "map": "pirates",
        "cell": "End",
        "pad": "Left",
        "monster": "Fishwing",
        "item": "Fragment 25"
      },
      {
        "kind": "hunt",
        "map": "yokairiver",
        "cell": "r2",
        "pad": "Left",
        "monster": "Kappa Ninja",
        "item": "Fragment 22"
      },
      {
        "kind": "hunt",
        "map": "bamboo",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "*",
        "item": "Fragment 23"
      },
      {
        "kind": "hunt",
        "map": "yokaiwar",
        "cell": "War2",
        "pad": "Left",
        "monster": "Samurai Nopperabo",
        "item": "Fragment 24"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6158,
    "actions": [
      {
        "kind": "hunt",
        "map": "bloodtitan",
        "cell": "Ultra",
        "pad": "Left",
        "monster": "*",
        "item": "Potent Blood Titan Mana"
      },
      {
        "kind": "hunt",
        "map": "phoenixrise",
        "cell": "r8",
        "pad": "Left",
        "monster": "*",
        "item": "Potent CinderClaw Mana"
      },
      {
        "kind": "hunt",
        "map": "thevoid",
        "cell": "r16",
        "pad": "Left",
        "monster": "*",
        "item": "Potent Reaper Mana"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 6159,
    "map": "djinngate",
    "ids": [
      5571
    ],
    "quantity": 5
  },
  {
    "kind": "plan",
    "questId": 6160,
    "actions": [
      {
        "kind": "hunt",
        "map": "djinngate",
        "monster": "Harpy",
        "item": "Djinn's Essence",
        "quantity": 100,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6161,
    "actions": [
      {
        "kind": "hunt",
        "map": "djinngate",
        "monster": "Gedoz",
        "item": "Gedoz the Malignant Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 6161,
    "map": "DjinnGate",
    "monsters": [
      "Gedoz"
    ]
  },
  {
    "kind": "kill",
    "questId": 6162,
    "map": "DjinnGate",
    "monsters": [
      "Harpy",
      "Lamia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7301,
    "map": "AshfallCamp",
    "monsters": [
      "Smoldur"
    ]
  },
  {
    "kind": "kill",
    "questId": 7302,
    "map": "LavaRun",
    "monsters": [
      "Phedra"
    ]
  },
  {
    "kind": "kill",
    "questId": 7303,
    "map": "Marsh",
    "monsters": [
      "Dark Witch"
    ]
  },
  {
    "kind": "kill",
    "questId": 7304,
    "map": "AirStorm",
    "monsters": [
      "Energy Tornado"
    ]
  },
  {
    "kind": "kill",
    "questId": 7305,
    "map": "DragonPlane",
    "monsters": [
      "Moganth"
    ]
  },
  {
    "kind": "kill",
    "questId": 7306,
    "map": "MountainPath",
    "monsters": [
      "Balboa"
    ]
  },
  {
    "kind": "kill",
    "questId": 7307,
    "map": "Natatorium",
    "monsters": [
      "Marianus"
    ]
  },
  {
    "kind": "kill",
    "questId": 7308,
    "map": "IcePlane",
    "monsters": [
      "Frostblade"
    ]
  },
  {
    "kind": "kill",
    "questId": 7309,
    "map": "Pyramid",
    "monsters": [
      "Mummy"
    ]
  },
  {
    "kind": "kill",
    "questId": 7310,
    "map": "DreadSpace",
    "monsters": [
      "Dread Space"
    ]
  },
  {
    "kind": "kill",
    "questId": 7311,
    "map": "ShadowVault",
    "monsters": [
      "Ancient Doomknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7312,
    "map": "CelestialArenaD",
    "monsters": [
      "Queen of Hope"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.djinn-gate",
    category: "Story",
    map: "mobius",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
