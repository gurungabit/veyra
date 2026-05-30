import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "(Chaos Finale Bonus) Killer Catacombs",
  "description": "This will finish the Killer Catacombs quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "chaos-finale",
    "bonus",
    "killer-catacombs",
    "member",
    "lordsof",
    "chaos",
    "choas",
    "finale",
    "mem",
    "killer",
    "catacombs"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 3660,
    "map": "killercatacombs",
    "monsters": [
      "Tomb Robber "
    ]
  },
  {
    "kind": "kill",
    "questId": 3661,
    "map": "killercatacombs",
    "monsters": [
      "Tomb Robber "
    ]
  },
  {
    "kind": "kill",
    "questId": 3662,
    "map": "killercatacombs",
    "monsters": [
      "Ravenous Maw"
    ]
  },
  {
    "kind": "kill",
    "questId": 3663,
    "map": "killercatacombs",
    "monsters": [
      "Ravenous Maw"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3664,
    "map": "killercatacombs",
    "ids": [
      2762
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 3665,
    "map": "killercatacombs",
    "monsters": [
      "Sundered Darkblood "
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3666,
    "map": "killercatacombs",
    "ids": [
      2761
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 3666,
    "map": "killercatacombs",
    "monsters": [
      "Sundered Darkblood "
    ]
  },
  {
    "kind": "kill",
    "questId": 3667,
    "map": "killercatacombs",
    "monsters": [
      "Starved Maw "
    ]
  },
  {
    "kind": "kill",
    "questId": 3668,
    "map": "killercatacombs",
    "monsters": [
      "Sundered Darkblood "
    ]
  },
  {
    "kind": "kill",
    "questId": 3669,
    "map": "killercatacombs",
    "monsters": [
      "Ravenous Maw"
    ]
  },
  {
    "kind": "kill",
    "questId": 3670,
    "map": "killercatacombs",
    "monsters": [
      "Starved Maw ",
      "Ravenous Maw"
    ]
  },
  {
    "kind": "kill",
    "questId": 3671,
    "map": "killercatacombs",
    "monsters": [
      "Living Armor "
    ]
  },
  {
    "kind": "kill",
    "questId": 3672,
    "map": "killercatacombs",
    "monsters": [
      "Living Armor "
    ]
  },
  {
    "kind": "kill",
    "questId": 3673,
    "map": "killercatacombs",
    "monsters": [
      "Starved Maw ",
      "Ravenous Maw",
      "Living Armor "
    ]
  },
  {
    "kind": "kill",
    "questId": 3674,
    "map": "killercatacombs",
    "monsters": [
      "Living Armor "
    ]
  },
  {
    "kind": "kill",
    "questId": 3675,
    "map": "killercatacombs",
    "monsters": [
      "Ravenous Maw",
      "Starved Maw",
      "Living Armor "
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3676,
    "map": "killercatacombs",
    "ids": [
      2763
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 3676,
    "map": "killercatacombs",
    "monsters": [
      "Living Armor"
    ]
  },
  {
    "kind": "kill",
    "questId": 3677,
    "map": "killercatacombs",
    "monsters": [
      "Unstable Spirit Orb",
      "Living Armor ",
      "Sundered Darkblood "
    ]
  },
  {
    "kind": "plan",
    "questId": 3678,
    "actions": [
      {
        "kind": "hunt",
        "map": "killercatacombs",
        "monster": 73,
        "item": "Dracolich Slain"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 3679,
    "actions": [
      {
        "kind": "hunt",
        "map": "killercatacombs",
        "monster": 74,
        "item": "Dracolich Necromancer Ended"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.choas-finale-bonus-mem.killer-catacombs-mem",
    category: "Story",
    map: "killercatacombs",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
