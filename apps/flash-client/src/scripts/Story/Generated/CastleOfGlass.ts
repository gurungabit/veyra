import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Castle of Glass Story",
  "description": "This will complete the Castle of Glass story.",
  "tags": [
    "story",
    "quest",
    "castle-of-glass",
    "castle",
    "of",
    "glass"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 5339,
    "map": "castleofglass",
    "ids": [
      4698
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5340,
    "map": "castleofglass",
    "ids": [
      4699,
      4710
    ]
  },
  {
    "kind": "kill",
    "questId": 5340,
    "map": "castleofglass",
    "monsters": [
      "Glass Wyvern"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5341,
    "map": "castleofglass",
    "ids": [
      4700,
      4711
    ]
  },
  {
    "kind": "kill",
    "questId": 5341,
    "map": "castleofglass",
    "monsters": [
      "Glass Panther"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5342,
    "map": "castleofglass",
    "ids": [
      4701,
      4712
    ]
  },
  {
    "kind": "kill",
    "questId": 5342,
    "map": "castleofglass",
    "monsters": [
      "Mirror Knight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5343,
    "map": "castleofglass",
    "ids": [
      4702
    ]
  },
  {
    "kind": "kill",
    "questId": 5344,
    "map": "castleofglass",
    "monsters": [
      "Glass Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 5345,
    "map": "castleofglass",
    "monsters": [
      "Glass Wyvern"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5346,
    "map": "castleofglass",
    "ids": [
      4703
    ]
  },
  {
    "kind": "kill",
    "questId": 5347,
    "map": "castleofglass",
    "monsters": [
      "Glass Golem",
      "Glass Panther"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5348,
    "map": "castleofglass",
    "ids": [
      4704
    ]
  },
  {
    "kind": "kill",
    "questId": 5349,
    "map": "castleofglass",
    "monsters": [
      "Glass Golem",
      "Glass Panther",
      "Glass Wyvern"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5350,
    "map": "castleofglass",
    "ids": [
      4705
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5351,
    "map": "castleofglass",
    "ids": [
      4706
    ]
  },
  {
    "kind": "kill",
    "questId": 5352,
    "map": "castleofglass",
    "monsters": [
      "Shard Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5353,
    "map": "castleofglass",
    "ids": [
      4707
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5353,
    "map": "castleofglass",
    "monsters": [
      "Glass Golem"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5354,
    "map": "castleofglass",
    "ids": [
      4708
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5355,
    "map": "castleofglass",
    "ids": [
      4709
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 5356,
    "map": "castleofglass",
    "monsters": [
      "Chihuly"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.castle-of-glass",
    category: "Story",
    map: "castleofglass",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
