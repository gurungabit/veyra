import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Vaden) Castle of Bones Story",
  "description": "This will finish the Castle of Bones story.",
  "tags": [
    "story",
    "castle",
    "bones",
    "farm",
    "vaden",
    "throne",
    "darkness",
    "throneof",
    "01a",
    "castleof"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4968,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4969,
    "map": "bonecastle",
    "monsters": [
      "Undead Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 4970,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4971,
    "map": "bonecastle",
    "monsters": [
      "Fallen Deathknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4972,
    "map": "bonecastle",
    "ids": [
      4342
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4972,
    "map": "bonecastle",
    "monsters": [
      "Fallen Deathknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4973,
    "map": "bonecastle",
    "monsters": [
      "Undead Waiter"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4343
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4344
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 4974,
    "map": "bonecastle",
    "ids": [
      4345
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 4974,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4975,
    "map": "bonecastle",
    "monsters": [
      "Ghoul"
    ]
  },
  {
    "kind": "kill",
    "questId": 4976,
    "map": "bonecastle",
    "monsters": [
      "The Butcher"
    ]
  },
  {
    "kind": "kill",
    "questId": 4977,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4978,
    "map": "bonecastle",
    "ids": [
      4346,
      4347,
      4348
    ]
  },
  {
    "kind": "kill",
    "questId": 4978,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4979,
    "map": "bonecastle",
    "ids": [
      4349,
      4350,
      4351
    ]
  },
  {
    "kind": "kill",
    "questId": 4979,
    "map": "bonecastle",
    "monsters": [
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "plan",
    "questId": 4980,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "monster": "Grateful Undead",
        "item": "Song Request Ticket",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "monster": "That 70's Zombie",
        "item": "Sweet Dancing Shoes",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4981,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r8",
        "pad": "Left",
        "monster": "Skeletal Warrior",
        "item": "Undead Humerus Bones",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4982,
    "actions": [
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Undead Guard",
        "item": "Yellow, Green"
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r3",
        "pad": "Bottom",
        "monster": "Undead Knight",
        "item": "Red, Red"
      },
      {
        "kind": "hunt",
        "map": "bonecastle",
        "cell": "r8",
        "pad": "Left",
        "monster": "Skeletal Warrior",
        "item": "Blue, Green, Red"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4983,
    "map": "bonecastle",
    "ids": [
      4352
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4984,
    "map": "bonecastle",
    "ids": [
      4353
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 4985,
    "map": "bonecastle",
    "monsters": [
      "Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4986,
    "map": "bonecastle",
    "monsters": [
      "Turtle",
      "Turtle",
      "Turtle",
      "Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 4987,
    "map": "bonecastle",
    "monsters": [
      "Snuggles, Torturer"
    ]
  },
  {
    "kind": "kill",
    "questId": 4988,
    "map": "bonecastle",
    "monsters": [
      "Jon Bones",
      "Oberon Marrowtell",
      "Baskerville",
      "Knight of Lichens"
    ]
  },
  {
    "kind": "kill",
    "questId": 4989,
    "map": "bonecastle",
    "monsters": [
      "Rot Tin Tin"
    ]
  },
  {
    "kind": "kill",
    "questId": 4990,
    "map": "bonecastle",
    "monsters": [
      "Undead Golden Knight",
      "Undead Golden Knight",
      "Undead Golden Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4991,
    "map": "bonecastle",
    "monsters": [
      "Undead Knight",
      "Skeletal Warrior"
    ]
  },
  {
    "kind": "kill",
    "questId": 4992,
    "map": "bonecastle",
    "monsters": [
      "Vaden"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.throneof-darkness.01a-vaden-castleof-bones",
    category: "Story",
    map: "bonecastle",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
