import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Ghost Nexus",
  "description": "This will finish the Ghost Nexus quest.",
  "tags": [
    "story",
    "quest",
    "shadow-war",
    "ghost-nexus",
    "shadows",
    "of",
    "war",
    "10ghost",
    "nexus"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 7050,
    "map": "aozorahills",
    "ids": [
      6643
    ],
    "quantity": 5
  },
  {
    "kind": "mapItem",
    "questId": 7050,
    "map": "aozorahills",
    "ids": [
      6644
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7050,
    "map": "aozorahills",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7051,
    "map": "aozorahills",
    "ids": [
      6645
    ]
  },
  {
    "kind": "kill",
    "questId": 7052,
    "map": "aozorahills",
    "monsters": [
      "Aozora Kijimuna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7053,
    "map": "aozorahills",
    "monsters": [
      "Osanshouo"
    ]
  },
  {
    "kind": "kill",
    "questId": 7054,
    "map": "aozorahills",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7055,
    "map": "aozorahills",
    "ids": [
      6646
    ]
  },
  {
    "kind": "kill",
    "questId": 7055,
    "map": "aozorahills",
    "monsters": [
      "Fuyurei"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7056,
    "map": "aozorahills",
    "ids": [
      6647
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7057,
    "map": "aozorahills",
    "ids": [
      6648
    ]
  },
  {
    "kind": "kill",
    "questId": 7057,
    "map": "aozorahills",
    "monsters": [
      "Aozora Kijimuna"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7058,
    "map": "aozorahills",
    "ids": [
      6649
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7059,
    "map": "aozorahills",
    "ids": [
      6650
    ]
  },
  {
    "kind": "kill",
    "questId": 7059,
    "map": "aozorahills",
    "monsters": [
      "Reishi"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7060,
    "map": "aozorahills",
    "ids": [
      6651
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 7061,
    "map": "aozorahills",
    "monsters": [
      "Kosenjobi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7062,
    "map": "aozorahills",
    "monsters": [
      "Ghostly Hasu"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7106,
    "map": "ghostnexus",
    "ids": [
      6700
    ]
  },
  {
    "kind": "kill",
    "questId": 7107,
    "map": "ghostnexus",
    "monsters": [
      "Chaos Goat"
    ]
  },
  {
    "kind": "kill",
    "questId": 7108,
    "map": "ghostnexus",
    "monsters": [
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7109,
    "map": "ghostnexus",
    "ids": [
      6701
    ]
  },
  {
    "kind": "kill",
    "questId": 7110,
    "map": "ghostnexus",
    "monsters": [
      "Chaos Goat",
      "Chaos Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 7111,
    "map": "ghostnexus",
    "monsters": [
      "Gnarltooth"
    ]
  },
  {
    "kind": "kill",
    "questId": 7112,
    "map": "ghostnexus",
    "monsters": [
      "Infernal Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7113,
    "map": "ghostnexus",
    "monsters": [
      "Abumi Guchi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7114,
    "map": "ghostnexus",
    "monsters": [
      "Infernal Knight",
      "Abumi Guchi"
    ]
  },
  {
    "kind": "kill",
    "questId": 7115,
    "map": "ghostnexus",
    "monsters": [
      "Nether Warlock"
    ]
  },
  {
    "kind": "kill",
    "questId": 7116,
    "map": "ghostnexus",
    "monsters": [
      "Manifestation of Grief"
    ]
  },
  {
    "kind": "kill",
    "questId": 7117,
    "map": "ghostnexus",
    "monsters": [
      "Manifestation of Rage"
    ]
  },
  {
    "kind": "kill",
    "questId": 7118,
    "map": "ghostnexus",
    "monsters": [
      "Mahou's Anguish"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-war.10ghost-nexus",
    category: "Story",
    map: "aozorahills",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
