import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Thunderfang Story",
  "description": "does the quest from dragonmaster stormscythe in /thunderfang",
  "tags": [
    "story",
    "thunderfang",
    "stormcachemerge",
    "thunder",
    "fang"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4240,
    "map": "thunderfang",
    "monsters": [
      "Storm Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 4241,
    "map": "thunderfang",
    "monsters": [
      "Lightning Ball"
    ]
  },
  {
    "kind": "kill",
    "questId": 4242,
    "map": "thunderfang",
    "monsters": [
      "Lightning Ball",
      "Energy Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 4243,
    "map": "thunderfang",
    "monsters": [
      "Energy Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 4244,
    "map": "thunderfang",
    "monsters": [
      "Tonitru"
    ]
  },
  {
    "kind": "kill",
    "questId": 4245,
    "map": "thunderfang",
    "monsters": [
      "Lightning Ball"
    ]
  },
  {
    "kind": "kill",
    "questId": 4246,
    "map": "thunderfang",
    "monsters": [
      "Storm Draconian"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.thunder-fang",
    category: "Story",
    map: "thunderfang",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
