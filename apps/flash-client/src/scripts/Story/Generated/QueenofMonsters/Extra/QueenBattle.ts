import { defineGeneratedStory, type StoryStep } from "../../runner.js";

export const meta = {
  "name": "Queen Battle (Extra)",
  "description": "This will finish the Queen Battle quest.",
  "tags": [
    "story",
    "quest",
    "queen-of-monsters",
    "queen-battle",
    "extra",
    "queenof",
    "monsters",
    "queen",
    "battle"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 8302,
    "map": "queenreign",
    "monsters": [
      "Samurai Nopperabo"
    ]
  },
  {
    "kind": "kill",
    "questId": 8303,
    "map": "queenreign",
    "monsters": [
      "Shadow Samurai"
    ]
  },
  {
    "kind": "plan",
    "questId": 8304,
    "actions": [
      {
        "kind": "hunt",
        "map": "queenreign",
        "monster": "Samurai Nopperabo",
        "item": "Yokai Energy",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "queenreign",
        "monster": "Shadow Samurai",
        "item": "Shadow Energy",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8304,
    "map": "queenreign",
    "ids": [
      9120
    ]
  },
  {
    "kind": "kill",
    "questId": 8305,
    "map": "queenreign",
    "monsters": [
      "Tsukumo-Gami"
    ]
  },
  {
    "kind": "kill",
    "questId": 8306,
    "map": "queenreign",
    "monsters": [
      "Jaaku's Shadow"
    ]
  },
  {
    "kind": "kill",
    "questId": 8307,
    "map": "queenreign",
    "monsters": [
      "Tsukumo-Gami"
    ]
  },
  {
    "kind": "kill",
    "questId": 8308,
    "map": "queenreign",
    "monsters": [
      "Jaaku"
    ]
  },
  {
    "kind": "kill",
    "questId": 8309,
    "map": "queenreign",
    "monsters": [
      "Plague Spreader"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8310,
    "map": "queenreign",
    "ids": [
      9121
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8311,
    "map": "queenreign",
    "monsters": [
      "Plaguemoss"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8312,
    "map": "queenreign",
    "ids": [
      9122
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8312,
    "map": "queenreign",
    "monsters": [
      "Plaguemoss"
    ]
  },
  {
    "kind": "kill",
    "questId": 8313,
    "map": "queenreign",
    "monsters": [
      "Plaguemoss"
    ]
  },
  {
    "kind": "kill",
    "questId": 8314,
    "map": "queenreign",
    "monsters": [
      "Extriki"
    ]
  },
  {
    "kind": "kill",
    "questId": 8315,
    "map": "queenreign",
    "monsters": [
      "Calcified Amethite"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8316,
    "map": "queenreign",
    "ids": [
      9123
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8317,
    "map": "queenreign",
    "monsters": [
      "Calcified Wyrm"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8318,
    "map": "queenreign",
    "ids": [
      9124
    ]
  },
  {
    "kind": "kill",
    "questId": 8318,
    "map": "queenreign",
    "monsters": [
      "Calcified Remains"
    ]
  },
  {
    "kind": "kill",
    "questId": 8319,
    "map": "queenreign",
    "monsters": [
      "Grou'luu"
    ]
  },
  {
    "kind": "kill",
    "questId": 8320,
    "map": "queenreign",
    "monsters": [
      "Water Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 8321,
    "map": "queenreign",
    "monsters": [
      "Sa-Laatan Spawn"
    ]
  },
  {
    "kind": "kill",
    "questId": 8322,
    "map": "queenreign",
    "monsters": [
      "Water Goblin"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8323,
    "map": "queenreign",
    "ids": [
      9125
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 8324,
    "map": "queenreign",
    "monsters": [
      "Water Goblin"
    ]
  },
  {
    "kind": "kill",
    "questId": 8325,
    "map": "queenreign",
    "monsters": [
      "Sa-Laatan"
    ]
  },
  {
    "kind": "kill",
    "questId": 8326,
    "map": "queenreign",
    "monsters": [
      "Sa-Laatan",
      "Grou'luu",
      "Extriki",
      "Jaaku"
    ]
  },
  {
    "kind": "kill",
    "questId": 8328,
    "map": "orbhunt",
    "monsters": [
      "Seed Stalker"
    ]
  },
  {
    "kind": "kill",
    "questId": 8329,
    "map": "orbhunt",
    "monsters": [
      "Ragewing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8330,
    "map": "orbhunt",
    "ids": [
      9156
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 8330,
    "map": "orbhunt",
    "ids": [
      9157
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8331,
    "map": "orbhunt",
    "monsters": [
      "Seed Stalker"
    ]
  },
  {
    "kind": "kill",
    "questId": 8332,
    "map": "orbhunt",
    "monsters": [
      "Chamat"
    ]
  },
  {
    "kind": "kill",
    "questId": 8333,
    "map": "orbhunt",
    "monsters": [
      "Lotus Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 8334,
    "map": "orbhunt",
    "monsters": [
      "Suffocated Light"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8335,
    "map": "orbhunt",
    "ids": [
      9158
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 8336,
    "map": "orbhunt",
    "ids": [
      9159
    ]
  },
  {
    "kind": "kill",
    "questId": 8336,
    "map": "orbhunt",
    "monsters": [
      "Lotus Spider"
    ]
  },
  {
    "kind": "kill",
    "questId": 8337,
    "map": "orbhunt",
    "monsters": [
      "Sek Duat I"
    ]
  },
  {
    "kind": "kill",
    "questId": 8338,
    "map": "orbhunt",
    "monsters": [
      "Horothotep"
    ]
  },
  {
    "kind": "kill",
    "questId": 8339,
    "map": "orbhunt",
    "monsters": [
      "Nax Beast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8340,
    "map": "orbhunt",
    "ids": [
      9160
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8340,
    "map": "orbhunt",
    "monsters": [
      "Hive"
    ]
  },
  {
    "kind": "kill",
    "questId": 8341,
    "map": "orbhunt",
    "monsters": [
      "Hive"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8342,
    "map": "orbhunt",
    "ids": [
      9161
    ],
    "quantity": 4
  },
  {
    "kind": "mapItem",
    "questId": 8342,
    "map": "orbhunt",
    "ids": [
      9162
    ]
  },
  {
    "kind": "kill",
    "questId": 8342,
    "map": "orbhunt",
    "monsters": [
      "Hive"
    ]
  },
  {
    "kind": "kill",
    "questId": 8343,
    "map": "orbhunt",
    "monsters": [
      "Kolyaban"
    ]
  },
  {
    "kind": "kill",
    "questId": 8344,
    "map": "orbhunt",
    "monsters": [
      "Ice Infernal"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8345,
    "map": "orbhunt",
    "ids": [
      9163
    ],
    "quantity": 4
  },
  {
    "kind": "kill",
    "questId": 8346,
    "map": "orbhunt",
    "monsters": [
      "Animus of Ice"
    ]
  },
  {
    "kind": "kill",
    "questId": 8347,
    "map": "orbhunt",
    "monsters": [
      "Lotus Spider",
      "Hive",
      "Ice Infernal",
      "Seed Stalker"
    ]
  },
  {
    "kind": "kill",
    "questId": 8348,
    "map": "orbhunt",
    "monsters": [
      "Quetzal"
    ]
  },
  {
    "kind": "kill",
    "questId": 8349,
    "map": "orbhunt",
    "monsters": [
      "Chamat",
      "Horothotep",
      "Kolyaban",
      "Quetzal"
    ]
  },
  {
    "kind": "kill",
    "questId": 8350,
    "map": "queenbattle",
    "monsters": [
      "Chaorruption"
    ]
  },
  {
    "kind": "kill",
    "questId": 8351,
    "map": "queenbattle",
    "monsters": [
      "Chaos Ghost"
    ]
  },
  {
    "kind": "kill",
    "questId": 8352,
    "map": "queenbattle",
    "monsters": [
      "Chaos Sp-eye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8353,
    "map": "queenbattle",
    "ids": [
      9204
    ]
  },
  {
    "kind": "kill",
    "questId": 8353,
    "map": "queenbattle",
    "monsters": [
      "Chaos Ghost"
    ]
  },
  {
    "kind": "plan",
    "questId": 8354,
    "actions": [
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Extriki Shade",
        "item": "Extriki Shade Banished"
      },
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Kolyaban Shade",
        "item": "Kolyaban Shade Banished"
      },
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Horothotep Shade",
        "item": "Horothotep Shade Banished"
      },
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Sa-Laatan Shade",
        "item": "Sa-Laatan Shade Banished"
      },
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Grou'luu Shade",
        "item": "Grou'luu Shade Banished"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 8355,
    "map": "queenbattle",
    "monsters": [
      "Chaos Dracolich"
    ]
  },
  {
    "kind": "kill",
    "questId": 8356,
    "map": "queenbattle",
    "monsters": [
      "Chaos General"
    ]
  },
  {
    "kind": "plan",
    "questId": 8357,
    "actions": [
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Chaos General",
        "item": "Potent Chaotic Energy",
        "quantity": 12,
        "isTemp": false
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 8357,
    "map": "queenbattle",
    "ids": [
      9205
    ]
  },
  {
    "kind": "kill",
    "questId": 8358,
    "map": "queenbattle",
    "monsters": [
      "Chaotic Guilt"
    ]
  },
  {
    "kind": "kill",
    "questId": 8359,
    "map": "queenbattle",
    "monsters": [
      "Chaos Giant"
    ]
  },
  {
    "kind": "plan",
    "questId": 8360,
    "actions": [
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Proto Chaos Champion",
        "item": "Proto Chaos Champion Defeated"
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8361,
    "actions": [
      {
        "kind": "hunt",
        "map": "queenbattle",
        "monster": "Queen of Monsters",
        "item": "Queen of Monsters Sealed"
      }
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.queenof-monsters.extra.queen-battle",
    category: "Story",
    map: "queenreign",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
