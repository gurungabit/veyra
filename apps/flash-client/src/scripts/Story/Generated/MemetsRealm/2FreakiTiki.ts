import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "FreakiTiki",
  "description": "This will finish the FreakiTiki quest.",
  "tags": [
    "story",
    "quest",
    "memets-realm",
    "freakitiki",
    "memets",
    "realm",
    "2freaki",
    "tiki"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 5558,
    "map": "yulgar",
    "ids": [
      5034
    ]
  },
  {
    "kind": "kill",
    "questId": 5559,
    "map": "thespan",
    "monsters": [
      "Minx Fairy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5560,
    "map": "freakitiki",
    "ids": [
      5038
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5561,
    "map": "freakitiki",
    "ids": [
      5035
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5561,
    "map": "freakitiki",
    "monsters": [
      "Spineapple",
      "Palm Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 5562,
    "map": "pirates",
    "monsters": [
      "Undead Pirate",
      "Undead Pirate"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5563,
    "map": "freakitiki",
    "ids": [
      5039
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5564,
    "map": "freakitiki",
    "ids": [
      5036
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 5564,
    "map": "freakitiki",
    "monsters": [
      "Tiki Sneak",
      "Palm Treeant"
    ]
  },
  {
    "kind": "kill",
    "questId": 5565,
    "map": "fotia",
    "monsters": [
      "Fotia Spirit"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5566,
    "map": "freakitiki",
    "ids": [
      5040
    ]
  },
  {
    "kind": "kill",
    "questId": 5567,
    "map": "freakitiki",
    "monsters": [
      "Sneak Venom",
      "Sugar Imp",
      "Spicy Heat"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5568,
    "map": "freakitiki",
    "ids": [
      5037
    ]
  },
  {
    "kind": "plan",
    "questId": 5569,
    "actions": [
      {
        "kind": "hunt",
        "map": "freakitiki",
        "monster": 22,
        "item": "Subdue Memehano"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5570,
    "actions": [
      {
        "kind": "hunt",
        "map": "freakitiki",
        "monster": 22,
        "item": "Subdue Memehano"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5571,
    "actions": [
      {
        "kind": "hunt",
        "map": "freakitiki",
        "monster": 32,
        "item": "Subdue Memehano"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.memets-realm.2freaki-tiki",
    category: "Story",
    map: "yulgar",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
