import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Safiria Story (Member)",
  "description": "This will finish the Safiria Story.",
  "tags": [
    "story",
    "quest",
    "safiria",
    "member"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 1939,
    "map": "Safiria",
    "monsters": [
      "Chaos Lycan"
    ]
  },
  {
    "kind": "kill",
    "questId": 1940,
    "map": "Safiria",
    "monsters": [
      "Blood Maggot"
    ]
  },
  {
    "kind": "kill",
    "questId": 1941,
    "map": "Safiria",
    "monsters": [
      "Chaos Lycan"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1942,
    "map": "Safiria",
    "ids": [
      962
    ],
    "quantity": 4
  },
  {
    "kind": "plan",
    "questId": 1943,
    "actions": [
      {
        "kind": "hunt",
        "map": "djinn",
        "cell": "r6",
        "pad": "Up",
        "monster": "Ultra Tibicenas",
        "item": "Djinn's Magic Trace",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1944,
    "actions": [
      {
        "kind": "hunt",
        "map": "mqlesson",
        "monster": "Dragonoid",
        "item": "Dragonoid of Hours"
      },
      {
        "kind": "hunt",
        "map": "ultravoid",
        "cell": "Frame2",
        "pad": "Left",
        "monster": "Ultra Iadoa",
        "item": "Chronomancer's Magic Trace",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1945,
    "actions": [
      {
        "kind": "hunt",
        "map": "ultralionfang",
        "cell": "Enter",
        "pad": "Spanw",
        "monster": "Ultra Lionfang",
        "item": "Darkblood's Magic Trace",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 1946,
    "actions": [
      {
        "kind": "hunt",
        "map": "ancienttrigoras",
        "cell": "r2a",
        "pad": "Spawn",
        "monster": "Ancient Trigoras",
        "item": "Dragon's Magic Trace",
        "quantity": 5,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1947,
    "map": "battledoom",
    "monsters": [
      "Shadow Safiria"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.safiria-member",
    category: "Story",
    map: "Safiria",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
