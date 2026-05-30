import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Laken",
  "description": "This will finish the Laken quest.",
  "tags": [
    "story",
    "quest",
    "legion",
    "dage-the-evil-island",
    "laken",
    "dage",
    "the",
    "evil",
    "island",
    "05laken"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5648,
    "map": "Laken",
    "monsters": [
      "Cyborg Dog",
      "Augmented Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5649,
    "map": "Laken",
    "monsters": [
      "Mad Scientist"
    ]
  },
  {
    "kind": "kill",
    "questId": 5650,
    "map": "Laken",
    "monsters": [
      "Mad Scientist"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5651,
    "map": "Laken",
    "ids": [
      5123
    ]
  },
  {
    "kind": "kill",
    "questId": 5652,
    "map": "Laken",
    "monsters": [
      "Dr Eisenbacke"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5653,
    "map": "Laken",
    "ids": [
      5124
    ]
  },
  {
    "kind": "kill",
    "questId": 5653,
    "map": "Laken",
    "monsters": [
      "Dustbunny"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5654,
    "map": "Laken",
    "ids": [
      5125
    ]
  },
  {
    "kind": "kill",
    "questId": 5654,
    "map": "Laken",
    "monsters": [
      "Closet Moth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5655,
    "map": "Laken",
    "ids": [
      5126
    ]
  },
  {
    "kind": "plan",
    "questId": 5656,
    "actions": [
      {
        "kind": "jump",
        "cell": "r10a"
      },
      {
        "kind": "hunt",
        "map": "Laken",
        "cell": "r10a",
        "pad": "Left",
        "monster": "Ada",
        "item": "Spar With Ada"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5657,
    "actions": [
      {
        "kind": "jump",
        "cell": "r11"
      },
      {
        "kind": "hunt",
        "map": "Laken",
        "cell": "r11",
        "pad": "Left",
        "monster": "Ada",
        "item": "Spar Again"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5658,
    "actions": [
      {
        "kind": "jump",
        "cell": "r12"
      },
      {
        "kind": "hunt",
        "map": "Laken",
        "cell": "r12",
        "pad": "Left",
        "monster": "Ada",
        "item": "Spar One More Time"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dage-the-evil-island.05laken",
    category: "Story",
    map: "Laken",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
