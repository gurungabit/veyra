import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Super Death Story",
  "description": "This will finish the Super Death Story.",
  "tags": [
    "story",
    "quest",
    "superdeath",
    "super",
    "death"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8015,
    "map": "SuperDeath",
    "monsters": [
      "Shadow Cave Yeti"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8016,
    "map": "SuperDeath",
    "ids": [
      8330
    ]
  },
  {
    "kind": "kill",
    "questId": 8016,
    "map": "SuperDeath",
    "monsters": [
      "Shadow Cave Yeti",
      "Shadow Lava Crab",
      "Shadow Collector",
      "Shadow Cave Yeti"
    ]
  },
  {
    "kind": "kill",
    "questId": 8017,
    "map": "SuperDeath",
    "monsters": [
      "Igneous Lava Crab"
    ]
  },
  {
    "kind": "kill",
    "questId": 8018,
    "map": "SuperDeath",
    "monsters": [
      "Cinder Bender"
    ]
  },
  {
    "kind": "kill",
    "questId": 8019,
    "map": "SuperDeath",
    "monsters": [
      "Hottica"
    ]
  },
  {
    "kind": "kill",
    "questId": 8020,
    "map": "SuperDeath",
    "monsters": [
      "Slime Collector"
    ]
  },
  {
    "kind": "kill",
    "questId": 8021,
    "map": "SuperDeath",
    "monsters": [
      "Slime Lord"
    ]
  },
  {
    "kind": "kill",
    "questId": 8022,
    "map": "SuperDeath",
    "monsters": [
      "Electina"
    ]
  },
  {
    "kind": "kill",
    "questId": 8023,
    "map": "SuperDeath",
    "monsters": [
      "Rider"
    ]
  },
  {
    "kind": "kill",
    "questId": 8024,
    "map": "SuperDeath",
    "monsters": [
      "Blaster Master"
    ]
  },
  {
    "kind": "kill",
    "questId": 8025,
    "map": "SuperDeath",
    "monsters": [
      "General Smash"
    ]
  },
  {
    "kind": "kill",
    "questId": 8026,
    "map": "SuperDeath",
    "monsters": [
      "Cave Yeti"
    ]
  },
  {
    "kind": "kill",
    "questId": 8027,
    "map": "SuperDeath",
    "monsters": [
      "Khali May"
    ]
  },
  {
    "kind": "kill",
    "questId": 8028,
    "map": "SuperDeath",
    "monsters": [
      "Charries"
    ]
  },
  {
    "kind": "kill",
    "questId": 8029,
    "map": "SuperDeath",
    "monsters": [
      "Shadow Cave Bandit"
    ]
  },
  {
    "kind": "kill",
    "questId": 8030,
    "map": "SuperDeath",
    "monsters": [
      "Shadow Goo Pup",
      "Shadow Mutant",
      "Shadow Scorpion",
      "Shadow Cave Bandit"
    ]
  },
  {
    "kind": "kill",
    "questId": 8031,
    "map": "SuperDeath",
    "monsters": [
      "Hottica",
      "Electina",
      "General Smash",
      "Charries"
    ]
  },
  {
    "kind": "kill",
    "questId": 8032,
    "map": "SuperDeath",
    "monsters": [
      "Super Death"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.super-death",
    category: "Story",
    map: "SuperDeath",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
