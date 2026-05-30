import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "(Dwarfhold) Vath",
  "description": "This will finish the Vath quest.",
  "tags": [
    "story",
    "quest",
    "chaos-saga",
    "13-lords-of-chaos",
    "dwarfhold",
    "vath",
    "lordsof",
    "chaos",
    "03vath"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
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
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.lordsof-chaos.03vath-dwarfhold",
    category: "Story",
    map: "tavern",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
