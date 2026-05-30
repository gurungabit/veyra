import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Dark War Legion and Nation",
  "description": "This will finish the Dark War Legion and Nation quest.",
  "tags": [
    "story",
    "quest",
    "legion",
    "dark-war-legion-and-nation",
    "dark",
    "war",
    "legionand",
    "nation"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8556,
    "map": "dagerecruit",
    "monsters": [
      "Dark Makai"
    ]
  },
  {
    "kind": "plan",
    "questId": 8557,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Dreadfiend",
        "item": "Fiend Energy Collected",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8557,
    "map": "dagerecruit",
    "ids": [
      9883
    ],
    "quantity": 4
  },
  {
    "kind": "plan",
    "questId": 8558,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Dreadfiend",
        "item": "Dreadfiend Defeated",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8559,
    "map": "dagerecruit",
    "ids": [
      9884
    ]
  },
  {
    "kind": "plan",
    "questId": 8560,
    "actions": [
      {
        "kind": "join",
        "map": "dagerecruit"
      },
      {
        "kind": "jump",
        "cell": "r3",
        "pad": "Left"
      },
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "cell": "r3",
        "pad": "Left",
        "monster": "Graython",
        "item": "Graython Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8561,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Scared Wildcat",
        "item": "Wildlife Cleared",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8561,
    "map": "dagerecruit",
    "ids": [
      9885
    ]
  },
  {
    "kind": "plan",
    "questId": 8562,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Dreadfiend",
        "item": "Void Crystals",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8563,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Scared Wildcat",
        "item": "Death Charge",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8563,
    "map": "dagerecruit",
    "ids": [
      9885
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8564,
    "map": "dagerecruit",
    "ids": [
      9886
    ]
  },
  {
    "kind": "kill",
    "questId": 8565,
    "map": "dagerecruit",
    "monsters": [
      "Nuckelavee"
    ]
  },
  {
    "kind": "kill",
    "questId": 8566,
    "map": "dagerecruit",
    "monsters": [
      "Bloodfiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8567,
    "map": "dagerecruit",
    "monsters": [
      "Bloodfiend"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8568,
    "map": "dagerecruit",
    "ids": [
      9887
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8569,
    "map": "dagerecruit",
    "monsters": [
      "Infernal Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8570,
    "map": "dagerecruit",
    "monsters": [
      "Smaras"
    ]
  },
  {
    "kind": "plan",
    "questId": 8571,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Funa-yurei",
        "item": "Funa-Yurei Defeated",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8572,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Funa-yurei",
        "item": "Yokai Energy",
        "quantity": 4
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8572,
    "map": "dagerecruit",
    "ids": [
      9888
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8573,
    "map": "dagerecruit",
    "monsters": [
      "Shadow Clone"
    ]
  },
  {
    "kind": "kill",
    "questId": 8574,
    "map": "dagerecruit",
    "monsters": [
      "Shadow Clone"
    ]
  },
  {
    "kind": "plan",
    "questId": 8575,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Hebimaru",
        "item": "Hebimaru Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8576,
    "actions": [
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Dreadfiend",
        "item": "Dreadfiend Defeated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Dark Makai",
        "item": "Dark Makai Defeated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Bloodfiend ",
        "item": "Bloodfiend Defeated",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "dagerecruit",
        "monster": "Infernal Fiend",
        "item": "Infernal Fiend Defeated",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8584,
    "map": "darkwarlegion",
    "monsters": [
      "Dreadfiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8586,
    "map": "darkwarlegion",
    "monsters": [
      "Dreadfiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8587,
    "map": "darkwarlegion",
    "monsters": [
      "Manslayer Fiend"
    ]
  },
  {
    "kind": "kill",
    "questId": 8588,
    "map": "darkwarlegion",
    "monsters": [
      "Dirtlicker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 319,
    "map": "tavern",
    "ids": [
      56
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 320,
    "map": "pines",
    "monsters": [
      "Pine Grizzly"
    ]
  },
  {
    "kind": "kill",
    "questId": 321,
    "map": "pines",
    "monsters": [
      "Red Shell Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 322,
    "map": "pines",
    "monsters": [
      "Twistedtooth"
    ]
  },
  {
    "kind": "kill",
    "questId": 324,
    "map": "pines",
    "monsters": [
      "Red Shell Turtle"
    ]
  },
  {
    "kind": "kill",
    "questId": 325,
    "map": "pines",
    "monsters": [
      "Pine Grizzly"
    ]
  },
  {
    "kind": "kill",
    "questId": 326,
    "map": "pines",
    "monsters": [
      "LeatherWing"
    ]
  },
  {
    "kind": "plan",
    "questId": 327,
    "actions": [
      {
        "kind": "hunt",
        "map": "pines",
        "monster": "Pine Troll",
        "item": "Pine Air Freshener"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 323
  },
  {
    "kind": "mapItem",
    "questId": 344,
    "map": "dwarfhold",
    "ids": [
      60
    ]
  },
  {
    "kind": "kill",
    "questId": 331,
    "map": "mountainpath",
    "monsters": [
      "Ore Balboa"
    ]
  },
  {
    "kind": "kill",
    "questId": 332,
    "map": "mountainpath",
    "monsters": [
      "Vultragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 333,
    "map": "dwarfhold",
    "monsters": [
      "Chaos Drow"
    ]
  },
  {
    "kind": "kill",
    "questId": 334,
    "map": "dwarfhold",
    "monsters": [
      "Glow Worm"
    ]
  },
  {
    "kind": "kill",
    "questId": 335,
    "map": "dwarfhold",
    "monsters": [
      "Albino Bat"
    ]
  },
  {
    "kind": "kill",
    "questId": 336,
    "map": "dwarfhold",
    "monsters": [
      "Chaotic Draconian"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 337,
    "map": "dwarfhold",
    "ids": [
      59
    ],
    "quantity": 7
  },
  {
    "kind": "kill",
    "questId": 338,
    "map": "dwarfhold",
    "monsters": [
      "Chaos Drow"
    ]
  },
  {
    "kind": "kill",
    "questId": 339,
    "map": "dwarfhold",
    "monsters": [
      "Chaotic Draconian"
    ]
  },
  {
    "kind": "plan",
    "questId": 340,
    "actions": [
      {
        "kind": "hunt",
        "map": "dwarfhold",
        "monster": "Albino Bat",
        "item": "Block of Talc"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 343
  },
  {
    "kind": "plan",
    "questId": 341,
    "actions": [
      {
        "kind": "hunt",
        "map": "dwarfhold",
        "monster": "Amadeus",
        "item": "Key Mold"
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 346,
    "map": "uppercity",
    "ids": [
      61
    ]
  },
  {
    "kind": "kill",
    "questId": 347,
    "map": "uppercity",
    "monsters": [
      "Drow Assassin"
    ]
  },
  {
    "kind": "kill",
    "questId": 348,
    "map": "uppercity",
    "monsters": [
      "Chaotic Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 349,
    "map": "uppercity",
    "monsters": [
      "Chaos Egg"
    ]
  },
  {
    "kind": "kill",
    "questId": 350,
    "map": "uppercity",
    "monsters": [
      "Terradactyl"
    ]
  },
  {
    "kind": "kill",
    "questId": 351,
    "map": "uppercity",
    "monsters": [
      "Rhino Beetle"
    ]
  },
  {
    "kind": "kill",
    "questId": 352,
    "map": "uppercity",
    "monsters": [
      "Cave Lizard"
    ]
  },
  {
    "kind": "plan",
    "questId": 353,
    "actions": [
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Balboa",
        "item": "Balboa Core",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Chaos Drow",
        "item": "Magnesium Flare"
      },
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Albino Bat",
        "item": "Rusted Claw",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 353,
    "actions": [
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Balboa",
        "item": "Balboa Core",
        "quantity": 4
      },
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Albino Bat",
        "item": "Rusted Claw",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Chaos Drow",
        "item": "Magnesium Flare"
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 354
  },
  {
    "kind": "kill",
    "questId": 355,
    "map": "dwarfprison",
    "monsters": [
      "Warden Elfis"
    ]
  },
  {
    "kind": "kill",
    "questId": 356,
    "map": "dwarfprison",
    "monsters": [
      "Albino Bat",
      "Balboa",
      "Chaos Drow"
    ]
  },
  {
    "kind": "plan",
    "questId": 356,
    "actions": [
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Albino Bat",
        "item": "Nitrate Elements",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Chaos Drow",
        "item": "Drow Shoelaces",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "dwarfprison",
        "monster": "Balboa",
        "item": "Flint Stone",
        "quantity": 2
      }
    ]
  },
  {
    "kind": "chain",
    "questId": 357
  },
  {
    "kind": "mapItem",
    "questId": 362,
    "map": "roc",
    "ids": [
      62
    ]
  },
  {
    "kind": "mapItem",
    "questId": 363,
    "map": "stalagbite",
    "ids": [
      63
    ]
  },
  {
    "kind": "kill",
    "questId": 8580,
    "map": "darkwarnation",
    "monsters": [
      "Legion Doomknight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8581,
    "map": "darkwarnation",
    "monsters": [
      "Legion Dread Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 8582,
    "map": "darkwarnation",
    "monsters": [
      "War"
    ]
  },
  {
    "kind": "kill",
    "questId": 8583,
    "map": "darkwarnation",
    "monsters": [
      "Dage the Evil"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dark-war-legionand-nation",
    category: "Story",
    map: "dagerecruit",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
