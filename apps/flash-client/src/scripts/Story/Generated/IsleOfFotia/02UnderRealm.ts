import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "UnderRealm",
  "description": "This will finish the UnderRealm quest.",
  "tags": [
    "story",
    "quest",
    "isle-of-fotia",
    "underrealm",
    "isle",
    "of",
    "fotia",
    "02under",
    "realm"
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
  },
  {
    "kind": "kill",
    "questId": 3010,
    "map": "UnderRealm",
    "monsters": [
      "Underworld Soul"
    ]
  },
  {
    "kind": "kill",
    "questId": 3011,
    "map": "UnderRealm",
    "monsters": [
      "Grief"
    ]
  },
  {
    "kind": "kill",
    "questId": 3012,
    "map": "UnderRealm",
    "monsters": [
      "Anxiety"
    ]
  },
  {
    "kind": "kill",
    "questId": 3013,
    "map": "UnderRealm",
    "monsters": [
      "Disease"
    ]
  },
  {
    "kind": "kill",
    "questId": 3014,
    "map": "UnderRealm",
    "monsters": [
      "Old Age"
    ]
  },
  {
    "kind": "kill",
    "questId": 3015,
    "map": "UnderRealm",
    "monsters": [
      "Fear"
    ]
  },
  {
    "kind": "kill",
    "questId": 3016,
    "map": "UnderRealm",
    "monsters": [
      "Hunger"
    ]
  },
  {
    "kind": "kill",
    "questId": 3017,
    "map": "UnderRealm",
    "monsters": [
      "Death"
    ]
  },
  {
    "kind": "kill",
    "questId": 3018,
    "map": "UnderRealm",
    "monsters": [
      "Agony"
    ]
  },
  {
    "kind": "kill",
    "questId": 3019,
    "map": "UnderRealm",
    "monsters": [
      "Sleep"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.isle-of-fotia.02under-realm",
    category: "Story",
    map: "fotia",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
