import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Complete Dage The Evil Island Story",
  "description": "This will complete the Dage The Evil Island story.",
  "tags": [
    "story",
    "quest",
    "legion",
    "dage-the-evil-island",
    "complete",
    "all",
    "dage",
    "the",
    "evil",
    "island",
    "00do"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 4084,
    "map": "DarkFortress",
    "monsters": [
      "Dark Makai",
      "Cloaked Fiend"
    ]
  },
  {
    "kind": "plan",
    "questId": 4085,
    "actions": [
      {
        "kind": "hunt",
        "map": "DarkFortress",
        "monster": "Ninja Spy",
        "item": "Spy Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "DarkFortress",
        "monster": "Cloaked Fiend",
        "item": "Elemental Slain",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "DarkFortress",
        "monster": "Cloaked Fiend",
        "item": "Cloaked Fiend Slain",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4086,
    "actions": [
      {
        "kind": "hunt",
        "map": "DarkFortress",
        "monster": "Infernalfiend",
        "item": "Ultra Dark Mystery Stone"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4088,
    "map": "DarkFortress",
    "monsters": [
      "Cloaked Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 4089,
    "map": "DarkFortress",
    "monsters": [
      "Dark Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 4090,
    "map": "DarkFortress",
    "monsters": [
      "Dark Elemental",
      "Cloaked Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 4091,
    "map": "DarkFortress",
    "monsters": [
      "Wilhelm"
    ]
  },
  {
    "kind": "kill",
    "questId": 4092,
    "map": "DarkFortress",
    "monsters": [
      "Dage The Evil"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4181,
    "map": "Seraph",
    "ids": [
      3280
    ]
  },
  {
    "kind": "kill",
    "questId": 4182,
    "map": "Seraph",
    "monsters": [
      "Seraphic Recruit"
    ]
  },
  {
    "kind": "kill",
    "questId": 4183,
    "map": "Seraph",
    "monsters": [
      "Legion Infiltrator",
      "Seraphic Recruit",
      "Legion Augur"
    ]
  },
  {
    "kind": "kill",
    "questId": 4184,
    "map": "Seraph",
    "monsters": [
      "Legion Augur"
    ]
  },
  {
    "kind": "plan",
    "questId": 4185,
    "actions": [
      {
        "kind": "hunt",
        "map": "Seraph",
        "cell": "r6",
        "pad": "Left",
        "monster": "Legion Infiltrator",
        "item": "Legion Infiltrators Defeated",
        "quantity": 10,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4185,
    "actions": [
      {
        "kind": "hunt",
        "map": "Seraph",
        "cell": "r6",
        "pad": "Left",
        "monster": "Legion Infiltrator",
        "item": "Legion Infiltrators Defeated",
        "quantity": 10,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4186,
    "map": "LegionCrypt",
    "monsters": [
      "Gravedigger"
    ]
  },
  {
    "kind": "kill",
    "questId": 4187,
    "map": "LegionCrypt",
    "monsters": [
      "Undead Infantry"
    ]
  },
  {
    "kind": "kill",
    "questId": 4188,
    "map": "LegionCrypt",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4189,
    "map": "LegionCrypt",
    "ids": [
      3295
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4189,
    "map": "LegionCrypt",
    "monsters": [
      "Gravedigger"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4190,
    "map": "LegionCrypt",
    "ids": [
      3296
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 4190,
    "map": "LegionCrypt",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 4191,
    "map": "LegionCrypt",
    "ids": [
      3297
    ]
  },
  {
    "kind": "kill",
    "questId": 4192,
    "map": "LegionCrypt",
    "monsters": [
      "Gravedigger",
      "Legion Doomknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4193,
    "map": "LegionCrypt",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 4194,
    "map": "LegionCrypt",
    "monsters": [
      "Vincenzo"
    ]
  },
  {
    "kind": "kill",
    "questId": 4195,
    "map": "LegionCrypt",
    "monsters": [
      "Brutus"
    ]
  },
  {
    "kind": "plan",
    "questId": 4884,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Legion Defector",
        "item": "Legion Defectors Beaten",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Fawning Sycophants Beaten",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4885,
    "actions": [
      {
        "kind": "mapItem",
        "map": "Envy",
        "id": 4278,
        "quantity": 4
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4886,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Hood"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Tunic"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Medallion"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sycophant Boots"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4887,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Clue"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Secret"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Gossip"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Fawning Sycophant",
        "item": "Sincere but Unhelpful Praise"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4888,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Helm"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Chestplate"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Leggings"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Disciple Blade"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4889,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Legion Spy",
        "item": "Legion Spies Defeated",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 4890,
    "actions": [
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Semi-Useful Information"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Cult Propaganda"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Another Clue"
      },
      {
        "kind": "hunt",
        "map": "Envy",
        "monster": "Disciple of Envy",
        "item": "Bad Puns"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 4891,
    "map": "Envy",
    "monsters": [
      "Legion Defector",
      "Fawning Sycophant",
      "Disciple of Envy"
    ]
  },
  {
    "kind": "kill",
    "questId": 4892,
    "map": "Envy",
    "monsters": [
      "Envy"
    ]
  },
  {
    "kind": "kill",
    "questId": 4893,
    "map": "Envy",
    "monsters": [
      "Queen of Envy"
    ]
  },
  {
    "kind": "kill",
    "questId": 5648,
    "map": "Laken",
    "monsters": [
      "Cyborg Dog",
      "Augmented Guard"
    ]
  },
  {
    "kind": "kill",
    "questId": 5649,
    "map": "Laken",
    "monsters": [
      "Mad Scientist"
    ]
  },
  {
    "kind": "kill",
    "questId": 5650,
    "map": "Laken",
    "monsters": [
      "Mad Scientist"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5651,
    "map": "Laken",
    "ids": [
      5123
    ]
  },
  {
    "kind": "kill",
    "questId": 5652,
    "map": "Laken",
    "monsters": [
      "Dr Eisenbacke"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5653,
    "map": "Laken",
    "ids": [
      5124
    ]
  },
  {
    "kind": "kill",
    "questId": 5653,
    "map": "Laken",
    "monsters": [
      "Dustbunny"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5654,
    "map": "Laken",
    "ids": [
      5125
    ]
  },
  {
    "kind": "kill",
    "questId": 5654,
    "map": "Laken",
    "monsters": [
      "Closet Moth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 5655,
    "map": "Laken",
    "ids": [
      5126
    ]
  },
  {
    "kind": "plan",
    "questId": 5656,
    "actions": [
      {
        "kind": "jump",
        "cell": "r10a"
      },
      {
        "kind": "hunt",
        "map": "Laken",
        "cell": "r10a",
        "pad": "Left",
        "monster": "Ada",
        "item": "Spar With Ada"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5657,
    "actions": [
      {
        "kind": "jump",
        "cell": "r11"
      },
      {
        "kind": "hunt",
        "map": "Laken",
        "cell": "r11",
        "pad": "Left",
        "monster": "Ada",
        "item": "Spar Again"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 5658,
    "actions": [
      {
        "kind": "jump",
        "cell": "r12"
      },
      {
        "kind": "hunt",
        "map": "Laken",
        "cell": "r12",
        "pad": "Left",
        "monster": "Ada",
        "item": "Spar One More Time"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dage-the-evil-island.00do-all-dage-the-evil-island",
    category: "Story",
    map: "DarkFortress",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
