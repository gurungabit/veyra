import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "(Chaos Finale Bonus) Deadly Dungeon",
  "description": "This will finish the Deadly Dungeon quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "chaos-finale",
    "deadly-dungeon",
    "member",
    "lordsof",
    "chaos",
    "choas",
    "finale",
    "bonus",
    "mem",
    "deadly",
    "dungeon"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 3680,
    "map": "deadlydungeon",
    "monsters": [
      "Dire Muncher "
    ]
  },
  {
    "kind": "kill",
    "questId": 3681,
    "map": "deadlydungeon",
    "monsters": [
      "Hulking Dire Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3682,
    "map": "deadlydungeon",
    "monsters": [
      "Undead Dungeon Crawler"
    ]
  },
  {
    "kind": "kill",
    "questId": 3683,
    "map": "deadlydungeon",
    "monsters": [
      "Hulking Dire Wolf"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3684,
    "map": "deadlydungeon",
    "ids": [
      2764
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 3684,
    "map": "deadlydungeon",
    "monsters": [
      "Dire Draugr"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3685,
    "map": "deadlydungeon",
    "ids": [
      2756
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 3685,
    "map": "deadlydungeon",
    "monsters": [
      "Hulking Dire Wolf"
    ]
  },
  {
    "kind": "kill",
    "questId": 3686,
    "map": "deadlydungeon",
    "monsters": [
      "Weeping Spyball"
    ]
  },
  {
    "kind": "kill",
    "questId": 3687,
    "map": "deadlydungeon",
    "monsters": [
      "Dire Muncher "
    ]
  },
  {
    "kind": "kill",
    "questId": 3688,
    "map": "deadlydungeon",
    "monsters": [
      "Weeping Spyball"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3689,
    "map": "deadlydungeon",
    "ids": [
      2766
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 3689,
    "map": "deadlydungeon",
    "monsters": [
      "DoomKitten"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3690,
    "map": "deadlydungeon",
    "ids": [
      2765
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 3690,
    "map": "deadlydungeon",
    "monsters": [
      "Dire Draugr"
    ]
  },
  {
    "kind": "kill",
    "questId": 3691,
    "map": "deadlydungeon",
    "monsters": [
      "Giant Dungeon Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 3692,
    "map": "deadlydungeon",
    "monsters": [
      "Undead Dungeon Crawler"
    ]
  },
  {
    "kind": "kill",
    "questId": 3693,
    "map": "deadlydungeon",
    "monsters": [
      "Giant Dungeon Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 3694,
    "map": "deadlydungeon",
    "monsters": [
      "Dire Draugr"
    ]
  },
  {
    "kind": "kill",
    "questId": 3695,
    "map": "deadlydungeon",
    "monsters": [
      "Dire Draugr"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3696,
    "map": "deadlydungeon",
    "ids": [
      2767
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 3696,
    "map": "deadlydungeon",
    "monsters": [
      "DoomKitten"
    ]
  },
  {
    "kind": "kill",
    "questId": 3697,
    "map": "deadlydungeon",
    "monsters": [
      "Giant Dungeon Spider"
    ]
  },
  {
    "kind": "plan",
    "questId": 3698,
    "actions": [
      {
        "kind": "hunt",
        "map": "deadlydungeon",
        "monster": "Dire Draugr",
        "quantity": 100,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3699,
    "map": "deadlydungeon",
    "monsters": [
      "Chest Guardian"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.choas-finale-bonus-mem.deadly-dungeon-mem",
    category: "Story",
    map: "deadlydungeon",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
