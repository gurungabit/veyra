import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Gluttony",
  "description": "This will finish the Gluttony quest.",
  "tags": [
    "story",
    "quest",
    "7-deadly-dragons",
    "gluttony",
    "7deadly",
    "dragons",
    "01gluttony"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 5903,
    "map": "Gluttony",
    "monsters": [
      "Glutus"
    ]
  },
  {
    "kind": "kill",
    "questId": 5904,
    "map": "Gluttony",
    "monsters": [
      "Mucus"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5905,
    "map": "Gluttony",
    "ids": [
      5346
    ],
    "quantity": 2
  },
  {
    "kind": "kill",
    "questId": 5905,
    "map": "Gluttony",
    "monsters": [
      "Skeletal Slayer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5906,
    "map": "Gluttony",
    "ids": [
      5344
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5907,
    "map": "Gluttony",
    "ids": [
      5345
    ]
  },
  {
    "kind": "plan",
    "questId": 5908,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Gluttony",
        "id": 5347,
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "Gluttony",
        "cell": "r7",
        "pad": "Left",
        "monster": "Bowel Worm",
        "item": "Agitated Bowel Worm",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5909,
    "actions": [
      {
        "kind": "hunt",
        "map": "Gluttony",
        "cell": "r6",
        "pad": "Left",
        "monster": "Bile",
        "item": "Falgar's Bones",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5910,
    "map": "Gluttony",
    "ids": [
      5348
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5910,
    "map": "Gluttony",
    "monsters": [
      "Skeletal Slayer"
    ]
  },
  {
    "kind": "kill",
    "questId": 5911,
    "map": "Gluttony",
    "monsters": [
      "Bowel Worm",
      "Bile"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5912,
    "map": "Gluttony",
    "ids": [
      5349
    ]
  },
  {
    "kind": "kill",
    "questId": 5913,
    "map": "Gluttony",
    "monsters": [
      "Giant Tapeworm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5914,
    "map": "Gluttony",
    "ids": [
      5350
    ]
  },
  {
    "kind": "kill",
    "questId": 5915,
    "map": "Gluttony",
    "monsters": [
      "Deflated Glutus"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.7deadly-dragons.01gluttony",
    category: "Story",
    map: "Gluttony",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
