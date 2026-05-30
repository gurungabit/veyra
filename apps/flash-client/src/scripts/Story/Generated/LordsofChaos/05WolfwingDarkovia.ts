import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Darkovia) Wolfwing",
  "description": "This will finish the Wolfwing quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "darkovia",
    "wolfwing",
    "lordsof",
    "chaos",
    "05wolfwing"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 494,
    "map": "darkoviagrave",
    "ids": [
      97
    ]
  },
  {
    "kind": "kill",
    "questId": 495,
    "map": "darkoviagrave",
    "monsters": [
      "Skeletal Fire Mage"
    ]
  },
  {
    "kind": "kill",
    "questId": 496,
    "map": "darkoviagrave",
    "monsters": [
      "Rattlebones"
    ]
  },
  {
    "kind": "kill",
    "questId": 497,
    "map": "darkoviagrave",
    "monsters": [
      "Albino Bat"
    ]
  },
  {
    "kind": "kill",
    "questId": 498,
    "map": "darkoviagrave",
    "monsters": [
      "Blightfang"
    ]
  },
  {
    "kind": "kill",
    "questId": 308,
    "map": "greenguardeast",
    "monsters": [
      "Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 309,
    "map": "greenguardwest",
    "monsters": [
      "Slime"
    ]
  },
  {
    "kind": "kill",
    "questId": 310,
    "map": "greenguardwest",
    "monsters": [
      "Frogzard"
    ]
  },
  {
    "kind": "kill",
    "questId": 311,
    "map": "greenguardeast",
    "monsters": [
      "Spider"
    ]
  },
  {
    "kind": "plan",
    "questId": 514,
    "actions": []
  },
  {
    "kind": "plan",
    "questId": 515,
    "actions": [
      {
        "kind": "hunt",
        "map": "greenguardeast",
        "monster": "Spider",
        "item": "Spider Documentation"
      },
      {
        "kind": "hunt",
        "map": "greenguardeast",
        "monster": "Wolf",
        "item": "Wolf Documentation"
      },
      {
        "kind": "hunt",
        "map": "greenguardwest",
        "monster": "Slime",
        "item": "Slime Documentation"
      },
      {
        "kind": "hunt",
        "map": "greenguardwest",
        "monster": "Frogzard",
        "item": "Frogzard Documentation"
      },
      {
        "kind": "hunt",
        "map": "greenguardwest",
        "cell": "West12",
        "pad": "Up",
        "monster": "Big Bad Boar",
        "item": "Wereboar Documentation"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 514
  },
  {
    "kind": "kill",
    "questId": 516,
    "map": "darkoviaforest",
    "monsters": [
      "Dire Wolf"
    ]
  },
  {
    "kind": "plan",
    "questId": 517,
    "actions": [
      {
        "kind": "hunt",
        "map": "darkoviaforest",
        "monster": "Blood Maggot",
        "item": "Vial of Blood",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "darkoviaforest",
        "monster": "Blood Maggot",
        "item": "Vial of Sweat",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "darkoviaforest",
        "monster": "Blood Maggot",
        "item": "Vial of Tears"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 518,
    "map": "darkoviaforest",
    "monsters": [
      "Lich of the Stone"
    ]
  },
  {
    "kind": "kill",
    "questId": 519,
    "map": "safiria",
    "monsters": [
      "Blood Maggot"
    ]
  },
  {
    "kind": "kill",
    "questId": 520,
    "map": "safiria",
    "monsters": [
      "Albino Bat"
    ]
  },
  {
    "kind": "kill",
    "questId": 521,
    "map": "safiria",
    "monsters": [
      "Chaos Lycan"
    ]
  },
  {
    "kind": "kill",
    "questId": 522,
    "map": "safiria",
    "monsters": [
      "Twisted Paw"
    ]
  },
  {
    "kind": "kill",
    "questId": 534,
    "map": "lycan",
    "monsters": [
      "Dire Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 535,
    "map": "lycan",
    "monsters": [
      "Lycan Knight",
      "Lycan"
    ]
  },
  {
    "kind": "kill",
    "questId": 536,
    "map": "lycan",
    "monsters": [
      "Chaos Vampire Knight"
    ]
  },
  {
    "kind": "plan",
    "questId": 537,
    "actions": [
      {
        "kind": "hunt",
        "map": "lycan",
        "monster": "Sanguine",
        "item": "Sanguine Mask"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 552
  },
  {
    "kind": "plan",
    "questId": 564,
    "actions": [
      {
        "kind": "hunt",
        "map": "lycanwar",
        "cell": "Boss",
        "pad": "Left",
        "monster": "Edvard"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 564,
    "map": "chaoscave",
    "ids": [
      107
    ]
  },
  {
    "kind": "kill",
    "questId": 565,
    "map": "chaoscave",
    "monsters": [
      "Werepyre"
    ]
  },
  {
    "kind": "plan",
    "questId": 566,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaoscave",
        "cell": "r3",
        "pad": "Left",
        "monster": "Werepyre",
        "item": "Secret Words"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 567,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaoscave",
        "cell": "r5",
        "pad": "Left",
        "monster": "DracoWerePyre",
        "item": "DracoWerePyre Defeated"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 597
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.05wolfwing-darkovia",
    category: "Story",
    map: "darkoviagrave",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
