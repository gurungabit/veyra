import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Xeven) Paradox Portal Story",
  "description": "This will finish the Paradox Portal story.",
  "tags": [
    "story",
    "paradox",
    "portal",
    "farm",
    "xeven",
    "throne",
    "darkness",
    "throneof",
    "02a"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5034,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5035,
    "map": "portalmaze",
    "monsters": [
      "Heavy Lab Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5036,
    "map": "portalmaze",
    "monsters": [
      "Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 5037,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5038,
    "map": "portalmaze",
    "monsters": [
      "Jurassic Monkey"
    ]
  },
  {
    "kind": "kill",
    "questId": 5039,
    "map": "portalmaze",
    "monsters": [
      "Lazor Dino"
    ]
  },
  {
    "kind": "kill",
    "questId": 5040,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5041,
    "map": "portalmaze",
    "ids": [
      4408,
      4409,
      4410
    ]
  },
  {
    "kind": "kill",
    "questId": 5042,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5043,
    "map": "portalmaze",
    "monsters": [
      "Bucket Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5044,
    "map": "portalmaze",
    "monsters": [
      "Bucket Zombie",
      "Dancing Zombie",
      "Tunneling Zombie"
    ]
  },
  {
    "kind": "kill",
    "questId": 5045,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5046,
    "map": "portalmaze",
    "monsters": [
      "Pactagonal Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 5047,
    "map": "portalmaze",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "kill",
    "questId": 5048,
    "map": "portalmaze",
    "monsters": [
      "ChronoLord"
    ]
  },
  {
    "kind": "kill",
    "questId": 5049,
    "map": "portalmaze",
    "monsters": [
      "Vorefax "
    ]
  },
  {
    "kind": "kill",
    "questId": 5050,
    "map": "portalmaze",
    "monsters": [
      "Mors Temporis"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.throneof-darkness.02a-xeven-paradox-portal",
    category: "Story",
    map: "portalmaze",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
