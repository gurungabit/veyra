import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Fotia",
  "description": "This will finish the Fotia quest.",
  "tags": [
    "story",
    "quest",
    "isle-of-fotia",
    "fotia",
    "isle",
    "of",
    "01fotia"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 2942,
    "map": "fotia",
    "monsters": [
      "Fotia Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 2943,
    "map": "Fotia",
    "monsters": [
      "Fotia Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 2944,
    "map": "Fotia",
    "monsters": [
      "Fotia Spirit"
    ]
  },
  {
    "kind": "kill",
    "questId": 2945,
    "map": "Fotia",
    "monsters": [
      "Femme Cult Worshiper"
    ]
  },
  {
    "kind": "kill",
    "questId": 2946,
    "map": "BattleUnderA",
    "monsters": [
      "Skeletal Fire Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 2947,
    "map": "BattleUnderA",
    "monsters": [
      "Skeletal Ice Mage"
    ]
  },
  {
    "kind": "plan",
    "questId": 2948,
    "actions": [
      {
        "kind": "hunt",
        "map": "evilwarnul",
        "cell": "r2",
        "pad": "Down",
        "monster": "*",
        "item": "Archfiend's Favor",
        "quantity": 50,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 2949,
    "actions": []
  },
  {
    "kind": "mapItem",
    "questId": 2949,
    "map": "Fotia",
    "ids": [
      1838
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.isle-of-fotia.01fotia",
    category: "Story",
    map: "fotia",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
