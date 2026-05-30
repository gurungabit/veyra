import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Tercessuinotlim",
  "description": "This will finish the Tercessuinotlim quest.",
  "tags": [
    "story",
    "quest",
    "tercessuinotlim",
    "nation"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "plan",
    "questId": 8469,
    "actions": [
      {
        "kind": "hunt",
        "map": "Tercessuinotlim",
        "monster": "Dark Makai",
        "item": "Makai Captured",
        "quantity": 15
      },
      {
        "kind": "hunt",
        "map": "ChaosLab",
        "monster": "Chaorrupted Moglin",
        "item": "Chaorrupted Mutation",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "RedDeath",
        "monster": "RedDeath Moglin",
        "item": "RedDeath Mutation",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "RedDeath",
        "monster": "Swamp Wraith",
        "item": "Wraith Mutation",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8470,
    "actions": [
      {
        "kind": "hunt",
        "map": "Underworld",
        "monster": "Revontheus",
        "item": "Revontheus Reviewed"
      },
      {
        "kind": "hunt",
        "map": "Underworld",
        "monster": "Bloodfiend",
        "item": "Bloodfiend Browbeaten",
        "quantity": 20
      },
      {
        "kind": "hunt",
        "map": "Underworld",
        "monster": "Dreadfiend of Nulgath",
        "item": "Dreadfiend Disciplined",
        "quantity": 20
      },
      {
        "kind": "hunt",
        "map": "Underworld",
        "monster": "Dilligas",
        "item": "Dilligas Demoted"
      },
      {
        "kind": "hunt",
        "map": "Underworld",
        "monster": "Klunk",
        "item": "Klunk Kriticized"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8471,
    "actions": [
      {
        "kind": "hunt",
        "map": "Pastelia",
        "monster": "Chaos Queen Beleen",
        "item": "Insanely Pink Energy"
      },
      {
        "kind": "hunt",
        "map": "Pastelia",
        "monster": "Happy Cloud",
        "item": "Fluffy Pink Energy",
        "quantity": 7
      },
      {
        "kind": "hunt",
        "map": "Pastelia",
        "monster": "Cutie Makai",
        "item": "Cutsey Pink Energy",
        "quantity": 8
      },
      {
        "kind": "hunt",
        "map": "SewerPink",
        "monster": "Cutie Grumbley",
        "item": "Slimy Pink Energy",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8472,
    "actions": [
      {
        "kind": "hunt",
        "map": "Fiendshard",
        "monster": "Dirtlicker",
        "item": "Dirtlicker's Dignity Decimated"
      },
      {
        "kind": "hunt",
        "map": "citadel",
        "monster": "Death's Head",
        "item": "Death's Head Demolished"
      },
      {
        "kind": "hunt",
        "map": "ShadowBlast",
        "monster": "CaesarisTheDark",
        "item": "Shadowblaster Shamed",
        "quantity": 10
      },
      {
        "kind": "hunt",
        "map": "QuibbleHunt",
        "monster": "Skew",
        "item": "Skew Straightened Out"
      },
      {
        "kind": "hunt",
        "map": "ShadowBlast",
        "monster": "Crag and Bamboozle",
        "item": "Crag and Bamboozle Cowering"
      },
      {
        "kind": "hunt",
        "map": "ShadowBlast",
        "monster": "Grimlord Boss",
        "item": "Grimlord Left Groveling"
      },
      {
        "kind": "hunt",
        "map": "tercessuinotlim",
        "monster": "Void Monk",
        "item": "Void Warrior Vanquished",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8473,
    "actions": [
      {
        "kind": "hunt",
        "map": "fiendshard",
        "cell": "r8",
        "pad": "Left",
        "monster": "Fiend Shard",
        "item": "Dirtlicker's Shard Shaving",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "fiendshard",
        "cell": "r9",
        "pad": "Left",
        "monster": 15,
        "item": "Nulgath's Shard Shaving",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "QuibbleHunt",
        "monster": "RogueFiend",
        "item": "Roguefiend Crystal Shaving",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8474,
    "actions": [
      {
        "kind": "hunt",
        "map": "hachiko",
        "monster": "Dai Tengu",
        "item": "101 Proof Blade Oil"
      },
      {
        "kind": "hunt",
        "map": "Tercessuinotlim",
        "monster": "Taro Blademaster",
        "item": "The Tale of Taro"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.nation.tercessuinotlim",
    category: "Story",
    map: "Tercessuinotlim",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
