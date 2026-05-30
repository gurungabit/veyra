import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "The World",
  "description": "This will finish the The World quest.",
  "tags": [
    "story",
    "quest",
    "elegy-of-madness",
    "darkon",
    "the-world",
    "elegyof",
    "madness",
    "9the",
    "world"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 8630,
    "map": "FirstObservatory",
    "ids": [
      10083
    ]
  },
  {
    "kind": "kill",
    "questId": 8631,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Scorpio"
    ]
  },
  {
    "kind": "kill",
    "questId": 8632,
    "map": "FirstObservatory",
    "monsters": [
      "Astra Leo"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8633,
    "map": "FirstObservatory",
    "ids": [
      10084
    ]
  },
  {
    "kind": "kill",
    "questId": 8633,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8634,
    "map": "FirstObservatory",
    "ids": [
      10085
    ]
  },
  {
    "kind": "kill",
    "questId": 8635,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8636,
    "map": "FirstObservatory",
    "ids": [
      10086,
      10087
    ]
  },
  {
    "kind": "kill",
    "questId": 8637,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Turret",
      "Ancient Creature"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8638,
    "map": "FirstObservatory",
    "ids": [
      10088,
      10089
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8639,
    "map": "FirstObservatory",
    "ids": [
      10090
    ]
  },
  {
    "kind": "kill",
    "questId": 8640,
    "map": "FirstObservatory",
    "monsters": [
      "Empress’ Finger"
    ]
  },
  {
    "kind": "kill",
    "questId": 8641,
    "map": "FirstObservatory",
    "monsters": [
      "Ancient Creature",
      "Ancient Turret",
      "Empress’ Finger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8678,
    "map": "genesisgarden",
    "ids": [
      10196
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 8679,
    "map": "genesisgarden",
    "monsters": [
      "Drago's Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8680,
    "map": "genesisgarden",
    "ids": [
      10197,
      10198,
      10199
    ]
  },
  {
    "kind": "kill",
    "questId": 8681,
    "map": "genesisgarden",
    "monsters": [
      "Drago's Soldier"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8682,
    "map": "genesisgarden",
    "ids": [
      10200,
      10201
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8683,
    "map": "genesisgarden",
    "ids": [
      10202
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8684,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Creature",
      "Plant Beast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8685,
    "map": "genesisgarden",
    "ids": [
      10203
    ]
  },
  {
    "kind": "kill",
    "questId": 8685,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Turret"
    ]
  },
  {
    "kind": "kill",
    "questId": 8686,
    "map": "genesisgarden",
    "monsters": [
      "Undead Humanoid"
    ]
  },
  {
    "kind": "kill",
    "questId": 8687,
    "map": "genesisgarden",
    "monsters": [
      "Ancient Mecha"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8723,
    "map": "theworld",
    "ids": [
      10289
    ]
  },
  {
    "kind": "kill",
    "questId": 8724,
    "map": "theworld",
    "monsters": [
      "Nothingness"
    ]
  },
  {
    "kind": "kill",
    "questId": 8725,
    "map": "theworld",
    "monsters": [
      "Re"
    ]
  },
  {
    "kind": "kill",
    "questId": 8726,
    "map": "theworld",
    "monsters": [
      "Fa"
    ]
  },
  {
    "kind": "kill",
    "questId": 8727,
    "map": "theworld",
    "monsters": [
      "Ti"
    ]
  },
  {
    "kind": "kill",
    "questId": 8728,
    "map": "theworld",
    "monsters": [
      "So"
    ]
  },
  {
    "kind": "kill",
    "questId": 8729,
    "map": "theworld",
    "monsters": [
      "Nothingness"
    ]
  },
  {
    "kind": "kill",
    "questId": 8730,
    "map": "theworld",
    "monsters": [
      "So"
    ]
  },
  {
    "kind": "kill",
    "questId": 8731,
    "map": "theworld",
    "monsters": [
      "So"
    ]
  },
  {
    "kind": "kill",
    "questId": 8732,
    "map": "theworld",
    "monsters": [
      "Darkon"
    ]
  },
  {
    "kind": "plan",
    "questId": 8733,
    "actions": [
      {
        "kind": "hunt",
        "map": "theworld",
        "monster": 12,
        "item": "Encore Darkon Defeated"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.elegyof-madness-darkon.9the-world",
    category: "Story",
    map: "FirstObservatory",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
