import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Dark Alliance",
  "description": "This will finish the Dark Alliance quest.",
  "tags": [
    "story",
    "quest",
    "shadow-war",
    "dark-alliance",
    "shadows",
    "of",
    "war",
    "13dark",
    "alliance"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 7419,
    "map": "darkally",
    "ids": [
      7179
    ],
    "quantity": 6
  },
  {
    "kind": "chain",
    "questId": 7419
  },
  {
    "kind": "kill",
    "questId": 7420,
    "map": "darkally",
    "monsters": [
      "Underworld Golem",
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7180
    ],
    "quantity": 1
  },
  {
    "kind": "mapItem",
    "questId": 7421,
    "map": "darkally",
    "ids": [
      7181
    ],
    "quantity": 8
  },
  {
    "kind": "plan",
    "questId": 7422,
    "actions": [
      {
        "kind": "join",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": "Dark Makai"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7423,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "cell": "r2",
        "pad": "Left",
        "monster": 4452,
        "item": "Shredded Shadow",
        "quantity": 9
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7424,
    "actions": [
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Defectors Slain",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "Darkally",
        "monster": "Legion Defector",
        "item": "Legion Soul",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7425,
    "map": "darkally",
    "monsters": [
      "Frozen Pyromancer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7426,
    "map": "darkally",
    "monsters": [
      "Underworld Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7427,
    "map": "darkally",
    "ids": [
      7182
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7428,
    "map": "darkally",
    "monsters": [
      "Underfiend"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7446,
    "map": "darkalliance",
    "ids": [
      7224
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 7446,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7447,
    "map": "darkalliance",
    "ids": [
      7225
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7447,
    "map": "darkalliance",
    "monsters": [
      "Shadowblade"
    ]
  },
  {
    "kind": "kill",
    "questId": 7448,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "kill",
    "questId": 7449,
    "map": "darkalliance",
    "monsters": [
      "Shadow Makai"
    ]
  },
  {
    "kind": "kill",
    "questId": 7450,
    "map": "darkalliance",
    "monsters": [
      "Shadow Void"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7451,
    "map": "darkalliance",
    "ids": [
      7226
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 7452,
    "map": "darkalliance",
    "ids": [
      7227
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7453,
    "map": "darkalliance",
    "monsters": [
      "Underlava"
    ]
  },
  {
    "kind": "kill",
    "questId": 7454,
    "map": "darkalliance",
    "monsters": [
      "Underworld Imp"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7455,
    "map": "darkalliance",
    "ids": [
      7228
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7456,
    "map": "darkalliance",
    "monsters": [
      "Underflame Guardian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7457,
    "map": "darkalliance",
    "ids": [
      7229
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7458,
    "map": "darkalliance",
    "monsters": [
      "Shadow"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7459,
    "map": "darkalliance",
    "ids": [
      7230
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7460,
    "map": "darkalliance",
    "monsters": [
      "ShadowFlame Nulgath"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-war.13dark-alliance",
    category: "Story",
    map: "darkally",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
