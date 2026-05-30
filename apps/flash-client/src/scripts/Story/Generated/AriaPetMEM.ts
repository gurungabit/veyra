import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Aria Pet Story (Member)",
  "description": "This will finish the Aria Pet quest.",
  "tags": [
    "story",
    "quest",
    "aria",
    "pet",
    "member",
    "mem"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 10,
    "map": "farm",
    "monsters": [
      "Scarecrow"
    ]
  },
  {
    "kind": "kill",
    "questId": 41,
    "map": "sewer",
    "monsters": [
      "Greenrat"
    ]
  },
  {
    "kind": "kill",
    "questId": 42,
    "map": "river",
    "monsters": [
      "River Fishman"
    ]
  },
  {
    "kind": "kill",
    "questId": 43,
    "map": "pirates",
    "monsters": [
      "Shark Bait"
    ]
  },
  {
    "kind": "kill",
    "questId": 44,
    "map": "guru",
    "monsters": [
      "Trobble"
    ]
  },
  {
    "kind": "kill",
    "questId": 45,
    "map": "swordhaven",
    "monsters": [
      "Slime"
    ]
  },
  {
    "kind": "kill",
    "questId": 46,
    "map": "marsh2",
    "monsters": [
      "Soulseeker"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.aria-pet-mem",
    category: "Story",
    map: "farm",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
