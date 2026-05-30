import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "WarMonger",
  "description": "Does the Quests from the Trainers in /Trainers",
  "tags": [
    "story",
    "trainers",
    "quests",
    "warmonger",
    "warrior",
    "mage",
    "healer",
    "rogue",
    "warlord"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 10158,
    "map": "crashsite",
    "monsters": [
      "Dwakel Blaster"
    ]
  },
  {
    "kind": "kill",
    "questId": 10163,
    "map": "bludrut",
    "monsters": [
      "Rock Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 10164,
    "map": "river",
    "monsters": [
      "River Fishman"
    ]
  },
  {
    "kind": "kill",
    "questId": 10165,
    "map": "marsh2",
    "monsters": [
      "Undead Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 10166,
    "map": "marsh2",
    "monsters": [
      "Thrax Ironhide"
    ]
  },
  {
    "kind": "kill",
    "questId": 10167,
    "map": "greenguardwest",
    "monsters": [
      "Ogug Stoneaxe"
    ]
  },
  {
    "kind": "kill",
    "questId": 10168,
    "map": "orctown",
    "monsters": [
      "Horc Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 10169,
    "map": "battleundera",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 10170,
    "map": "Castle",
    "monsters": [
      "Castle Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 10171,
    "map": "battleundera",
    "monsters": [
      "Bone Terror"
    ]
  },
  {
    "kind": "kill",
    "questId": 10173,
    "map": "FirePlaneWar",
    "monsters": [
      "Shadefire Onslaught"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.trainers-story",
    category: "Story",
    map: "crashsite",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
