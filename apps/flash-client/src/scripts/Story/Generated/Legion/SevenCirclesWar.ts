import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(War) Seven Circles",
  "description": "This will finish the Seven Circles quest.",
  "tags": [
    "story",
    "quest",
    "legion",
    "seven-circles",
    "war",
    "seven",
    "circles"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 7968,
    "map": "sevencircles",
    "monsters": [
      "Limbo Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7969,
    "map": "sevencircles",
    "monsters": [
      "Luxuria Guard"
    ]
  },
  {
    "kind": "plan",
    "questId": 7970,
    "actions": [
      {
        "kind": "hunt",
        "map": "sevencircles",
        "cell": "r2",
        "pad": "Left",
        "monster": "Limbo Guard",
        "item": "Aura of Happiness",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "sevencircles",
        "cell": "r2",
        "pad": "Left",
        "monster": "Limbo Guard",
        "item": "Aura of Power"
      },
      {
        "kind": "hunt",
        "map": "sevencircles",
        "cell": "r3",
        "pad": "Left",
        "monster": "Luxuria Guard",
        "item": "Aura of Pleasure"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7971,
    "map": "sevencircles",
    "monsters": [
      "Luxuria"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7972,
    "map": "sevencircles",
    "ids": [
      8206
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 7973,
    "map": "sevencircles",
    "monsters": [
      "Gluttony Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7974,
    "map": "sevencircles",
    "monsters": [
      "Gluttony"
    ]
  },
  {
    "kind": "kill",
    "questId": 7975,
    "map": "sevencircles",
    "monsters": [
      "Avarice Guard"
    ]
  },
  {
    "kind": "plan",
    "questId": 7976,
    "actions": [
      {
        "kind": "hunt",
        "map": "sevencircles",
        "monster": "Limbo Guard",
        "item": "Limbo Guards Defeated",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "sevencircles",
        "monster": "Luxuria Guard",
        "item": "Lust Guards Defeated",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "sevencircles",
        "monster": "Gluttony Guard",
        "item": "Gluttony Guard Defeated"
      },
      {
        "kind": "hunt",
        "map": "sevencircles",
        "monster": "Avarice Guard",
        "item": "Avarice Guards Defeated",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7977,
    "map": "sevencircles",
    "monsters": [
      "Avarice"
    ]
  },
  {
    "kind": "kill",
    "questId": 7979,
    "map": "sevencircleswar",
    "monsters": [
      "Wrath Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7980,
    "map": "sevencircleswar",
    "monsters": [
      "Wrath Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7981,
    "map": "sevencircleswar",
    "monsters": [
      "Wrath Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7982,
    "map": "sevencircleswar",
    "monsters": [
      "Wrath"
    ]
  },
  {
    "kind": "kill",
    "questId": 7983,
    "map": "sevencircleswar",
    "monsters": [
      "Heresy Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7984,
    "map": "sevencircleswar",
    "monsters": [
      "Violence's Gatekeeper"
    ]
  },
  {
    "kind": "kill",
    "questId": 7985,
    "map": "sevencircleswar",
    "monsters": [
      "Violence Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7986,
    "map": "sevencircleswar",
    "monsters": [
      "Geryon"
    ]
  },
  {
    "kind": "kill",
    "questId": 7987,
    "map": "sevencircleswar",
    "monsters": [
      "Violence"
    ]
  },
  {
    "kind": "kill",
    "questId": 7988,
    "map": "sevencircleswar",
    "monsters": [
      "Treachery Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 7989,
    "map": "sevencircleswar",
    "monsters": [
      "Treachery"
    ]
  },
  {
    "kind": "plan",
    "questId": 7990,
    "actions": [
      {
        "kind": "hunt",
        "map": "sevencircleswar",
        "cell": "r17",
        "pad": "Left",
        "monster": "The Beast",
        "item": "The Beast Defeated"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.seven-circles-war",
    category: "Story",
    map: "sevencircles",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
