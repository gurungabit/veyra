import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Ship Wreck Story",
  "description": "This will finish the Ship Wreck Story.",
  "tags": [
    "story",
    "quest",
    "shipwreck",
    "ship",
    "wreck"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 4418,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Gilded Merdraconian",
        "item": "Mangled Merdraconian",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4419,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Cursed Pirate",
        "item": "Pirate Interrogated",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Gilded Crystal Undead",
        "item": "Captured Crystal Crew",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4420,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Cursed Pirate",
        "item": "Pirate Pistols",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4421,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Cursed Pirate",
        "item": "Snatched Material",
        "quantity": 12
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4422,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Gilded Water",
        "item": "Liquified Living Water",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4423,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Cursed Pirate",
        "item": "Detained Crewman",
        "quantity": 12
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4424,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Gilded Merdraconian",
        "item": "Powerfully Persuaded Merdraconian",
        "quantity": 11
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4425,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Gilded Crystal Undead",
        "item": "Crystallized Crowbar"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4426,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Captain Nubar",
        "item": "No More Nubar"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4427,
    "actions": [
      {
        "kind": "mapItem",
        "map": "shipwreck",
        "id": 3573,
        "quantity": 1
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4428,
    "actions": [
      {
        "kind": "hunt",
        "map": "shipwreck",
        "monster": "Lobthulhu",
        "item": "Lobster a la mode"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.ship-wreck",
    category: "Story",
    map: "shipwreck",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
