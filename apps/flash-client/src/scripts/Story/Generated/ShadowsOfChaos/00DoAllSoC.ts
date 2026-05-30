import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Complete Shadows of Chaos Story",
  "description": "This will complete the Shadows of Chaos story arc.",
  "tags": [
    "story",
    "quest",
    "shadows-of-chaos",
    "complete",
    "all",
    "shadows",
    "of",
    "chaos",
    "00do",
    "so",
    "c"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "kill",
    "questId": 6846,
    "map": "shadowwar",
    "monsters": [
      "Shadowflame Slasher"
    ]
  },
  {
    "kind": "kill",
    "questId": 6847,
    "map": "shadowwar",
    "monsters": [
      "Seed Spitter"
    ]
  },
  {
    "kind": "plan",
    "questId": 6848,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "monster": "Shadowflame Slasher",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6849,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "monster": "Umbral Goo",
        "item": "Shadow Samples",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6850,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "cell": "r2",
        "pad": "Left",
        "monster": "*",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6851,
    "actions": [
      {
        "kind": "hunt",
        "map": "shadowwar",
        "monster": "Shadowflame Scout",
        "item": "Useful Clue",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 6852,
    "actions": [
      {
        "kind": "hunt",
        "map": "malgor",
        "monster": "Malgor",
        "item": "Defeat Malgor"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7728,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Paladin",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7729,
    "map": "Shadowoff",
    "ids": [
      7699
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7729,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7730,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7731,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7732,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7728,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Paladin",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7729,
    "map": "Shadowoff",
    "ids": [
      7699
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7729,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7730,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7731,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7732,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7733,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall light"
    ]
  },
  {
    "kind": "kill",
    "questId": 7734,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard",
      "ShadowFlame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7735,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7736,
    "map": "BrightShadow",
    "ids": [
      7701
    ]
  },
  {
    "kind": "kill",
    "questId": 7737,
    "map": "BrightShadow",
    "monsters": [
      "Gravelyn the Good"
    ]
  },
  {
    "kind": "kill",
    "questId": 7738,
    "map": "BrightShadow",
    "monsters": [
      "Brightfall light",
      "Brightfall Guard",
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7728,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Paladin",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7729,
    "map": "Shadowoff",
    "ids": [
      7699
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7729,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7730,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7731,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7732,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7733,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall light"
    ]
  },
  {
    "kind": "kill",
    "questId": 7734,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard",
      "ShadowFlame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7735,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7736,
    "map": "BrightShadow",
    "ids": [
      7701
    ]
  },
  {
    "kind": "kill",
    "questId": 7737,
    "map": "BrightShadow",
    "monsters": [
      "Gravelyn the Good"
    ]
  },
  {
    "kind": "kill",
    "questId": 7738,
    "map": "BrightShadow",
    "monsters": [
      "Brightfall light",
      "Brightfall Guard",
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7740,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7741,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7742,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7743,
    "map": "BrightChaos",
    "ids": [
      7731
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7743,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Flame"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7744,
    "map": "BrightChaos",
    "ids": [
      7732
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7744,
    "map": "BrightChaos",
    "monsters": [
      "Hidden Monster"
    ]
  },
  {
    "kind": "kill",
    "questId": 7745,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Trap"
    ]
  },
  {
    "kind": "kill",
    "questId": 7746,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7747,
    "map": "BrightChaos",
    "ids": [
      7733
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7748,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 7749,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7750,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7728,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Paladin",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7729,
    "map": "Shadowoff",
    "ids": [
      7699
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7729,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7730,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7731,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7732,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7733,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall light"
    ]
  },
  {
    "kind": "kill",
    "questId": 7734,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard",
      "ShadowFlame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7735,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7736,
    "map": "BrightShadow",
    "ids": [
      7701
    ]
  },
  {
    "kind": "kill",
    "questId": 7737,
    "map": "BrightShadow",
    "monsters": [
      "Gravelyn the Good"
    ]
  },
  {
    "kind": "kill",
    "questId": 7738,
    "map": "BrightShadow",
    "monsters": [
      "Brightfall light",
      "Brightfall Guard",
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7740,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7741,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7742,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7743,
    "map": "BrightChaos",
    "ids": [
      7731
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7743,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Flame"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7744,
    "map": "BrightChaos",
    "ids": [
      7732
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7744,
    "map": "BrightChaos",
    "monsters": [
      "Hidden Monster"
    ]
  },
  {
    "kind": "kill",
    "questId": 7745,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Trap"
    ]
  },
  {
    "kind": "kill",
    "questId": 7746,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7747,
    "map": "BrightChaos",
    "ids": [
      7733
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7748,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 7749,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7750,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7756,
    "map": "BrightForest",
    "monsters": [
      "Shadow Flame",
      "ShadowFlame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 7757,
    "map": "BrightForest",
    "monsters": [
      "ShadowFlame Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7758,
    "map": "BrightForest",
    "ids": [
      7754
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 7758,
    "map": "BrightForest",
    "ids": [
      7755
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7728,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Paladin",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7729,
    "map": "Shadowoff",
    "ids": [
      7699
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7729,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7730,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7731,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7732,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7733,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall light"
    ]
  },
  {
    "kind": "kill",
    "questId": 7734,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard",
      "ShadowFlame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7735,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7736,
    "map": "BrightShadow",
    "ids": [
      7701
    ]
  },
  {
    "kind": "kill",
    "questId": 7737,
    "map": "BrightShadow",
    "monsters": [
      "Gravelyn the Good"
    ]
  },
  {
    "kind": "kill",
    "questId": 7738,
    "map": "BrightShadow",
    "monsters": [
      "Brightfall light",
      "Brightfall Guard",
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7740,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7741,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7742,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7743,
    "map": "BrightChaos",
    "ids": [
      7731
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7743,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Flame"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7744,
    "map": "BrightChaos",
    "ids": [
      7732
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7744,
    "map": "BrightChaos",
    "monsters": [
      "Hidden Monster"
    ]
  },
  {
    "kind": "kill",
    "questId": 7745,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Trap"
    ]
  },
  {
    "kind": "kill",
    "questId": 7746,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7747,
    "map": "BrightChaos",
    "ids": [
      7733
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7748,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 7749,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7750,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7756,
    "map": "BrightForest",
    "monsters": [
      "Shadow Flame",
      "ShadowFlame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 7757,
    "map": "BrightForest",
    "monsters": [
      "ShadowFlame Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7758,
    "map": "BrightForest",
    "ids": [
      7754
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 7758,
    "map": "BrightForest",
    "ids": [
      7755
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7759,
    "map": "BrightForestPast",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7760,
    "map": "BrightForestPast",
    "ids": [
      7753
    ]
  },
  {
    "kind": "kill",
    "questId": 7760,
    "map": "BrightForestPast",
    "monsters": [
      "Spacetime Energy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7761,
    "map": "BrightForestPast",
    "ids": [
      7756
    ]
  },
  {
    "kind": "kill",
    "questId": 7762,
    "map": "BrightForestPast",
    "monsters": [
      "Undead Minion"
    ]
  },
  {
    "kind": "kill",
    "questId": 7763,
    "map": "BrightForestPast",
    "monsters": [
      "Undead Minion",
      "Twisted Treeant"
    ]
  },
  {
    "kind": "plan",
    "questId": 7764,
    "actions": [
      {
        "kind": "hunt",
        "map": "BrightForestPast",
        "cell": "r8",
        "pad": "Left",
        "monster": "Twisted Treeant",
        "item": "Twisted Treeant Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7765,
    "actions": [
      {
        "kind": "mapItem",
        "map": "BrightForestPast",
        "id": 7757,
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "BrightForestPast",
        "cell": "r8",
        "pad": "Left",
        "monster": "Treeant",
        "item": "Purified Oil",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7766,
    "map": "BrightForestPast",
    "ids": [
      7758
    ]
  },
  {
    "kind": "kill",
    "questId": 7561,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7562,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7563,
    "map": "dualplane",
    "ids": [
      7459
    ]
  },
  {
    "kind": "kill",
    "questId": 7564,
    "map": "dualplane",
    "monsters": [
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7565,
    "map": "dualplane",
    "monsters": [
      "SpiderWing",
      "Terrarsite"
    ]
  },
  {
    "kind": "kill",
    "questId": 7566,
    "map": "dualplane",
    "monsters": [
      "Droognax"
    ]
  },
  {
    "kind": "kill",
    "questId": 7567,
    "map": "dualplane",
    "monsters": [
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "kill",
    "questId": 7568,
    "map": "dualplane",
    "monsters": [
      "Netherpit Bruiser"
    ]
  },
  {
    "kind": "kill",
    "questId": 7569,
    "map": "dualplane",
    "monsters": [
      "Terrarsite",
      "Netherpit Lackey"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7570,
    "map": "dualplane",
    "ids": [
      7460
    ]
  },
  {
    "kind": "kill",
    "questId": 7571,
    "map": "dualplane",
    "monsters": [
      "Xiang"
    ]
  },
  {
    "kind": "plan",
    "questId": 7685,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Shadow Medal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7686,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Shadowflame Scout",
        "item": "Mega Shadow Medal",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7687,
    "actions": [
      {
        "kind": "hunt",
        "map": "chaosamulet",
        "monster": "Goldun",
        "item": "Goldun Defeated"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 7688,
    "map": "chaosamulet",
    "monsters": [
      "Goldun",
      "Shadowflame Berserker"
    ]
  },
  {
    "kind": "kill",
    "questId": 7690,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7691,
    "map": "lagunabeach",
    "ids": [
      7636
    ]
  },
  {
    "kind": "kill",
    "questId": 7692,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7693,
    "map": "lagunabeach",
    "ids": [
      7637
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7693,
    "map": "lagunabeach",
    "monsters": [
      "Chaos Kelp"
    ]
  },
  {
    "kind": "kill",
    "questId": 7694,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7695,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7638
    ],
    "quantity": 3
  },
  {
    "kind": "mapItem",
    "questId": 7696,
    "map": "lagunabeach",
    "ids": [
      7639
    ]
  },
  {
    "kind": "kill",
    "questId": 7697,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7698,
    "map": "lagunabeach",
    "ids": [
      7640
    ]
  },
  {
    "kind": "kill",
    "questId": 7698,
    "map": "lagunabeach",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7699,
    "map": "lagunabeach",
    "monsters": [
      "Heart of Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7700,
    "map": "lagunabeach",
    "monsters": [
      "Flying Fisheye"
    ]
  },
  {
    "kind": "kill",
    "questId": 7702,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7703,
    "map": "laguna",
    "ids": [
      7675
    ]
  },
  {
    "kind": "kill",
    "questId": 7704,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7705,
    "map": "laguna",
    "ids": [
      7676
    ]
  },
  {
    "kind": "kill",
    "questId": 7705,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Gunner"
    ]
  },
  {
    "kind": "kill",
    "questId": 7706,
    "map": "laguna",
    "monsters": [
      "Captain Laguna"
    ]
  },
  {
    "kind": "kill",
    "questId": 7707,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7708,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7709,
    "map": "laguna",
    "monsters": [
      "Chaos Burrower"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7710,
    "map": "laguna",
    "ids": [
      7678
    ]
  },
  {
    "kind": "kill",
    "questId": 7710,
    "map": "laguna",
    "monsters": [
      "ShadowChaos Brigand"
    ]
  },
  {
    "kind": "kill",
    "questId": 7711,
    "map": "laguna",
    "monsters": [
      "Writhing Chaos"
    ]
  },
  {
    "kind": "kill",
    "questId": 7712,
    "map": "laguna",
    "monsters": [
      "Chaos Roe"
    ]
  },
  {
    "kind": "kill",
    "questId": 7728,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Paladin",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7729,
    "map": "Shadowoff",
    "ids": [
      7699
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7729,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7730,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7731,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Scout",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7732,
    "map": "Shadowoff",
    "monsters": [
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7733,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall light"
    ]
  },
  {
    "kind": "kill",
    "questId": 7734,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard",
      "ShadowFlame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7735,
    "map": "BrightShadow",
    "monsters": [
      "BrightFall Guard"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7736,
    "map": "BrightShadow",
    "ids": [
      7701
    ]
  },
  {
    "kind": "kill",
    "questId": 7737,
    "map": "BrightShadow",
    "monsters": [
      "Gravelyn the Good"
    ]
  },
  {
    "kind": "kill",
    "questId": 7738,
    "map": "BrightShadow",
    "monsters": [
      "Brightfall light",
      "Brightfall Guard",
      "Shadowflame Paladin"
    ]
  },
  {
    "kind": "kill",
    "questId": 7740,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia"
    ]
  },
  {
    "kind": "kill",
    "questId": 7741,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "kill",
    "questId": 7742,
    "map": "BrightChaos",
    "monsters": [
      "Shadowflame Militia",
      "Shadowflame Sorcerer"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7743,
    "map": "BrightChaos",
    "ids": [
      7731
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7743,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Flame"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7744,
    "map": "BrightChaos",
    "ids": [
      7732
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 7744,
    "map": "BrightChaos",
    "monsters": [
      "Hidden Monster"
    ]
  },
  {
    "kind": "kill",
    "questId": 7745,
    "map": "BrightChaos",
    "monsters": [
      "Shadow Trap"
    ]
  },
  {
    "kind": "kill",
    "questId": 7746,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7747,
    "map": "BrightChaos",
    "ids": [
      7733
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 7748,
    "map": "BrightChaos",
    "monsters": [
      "ShadowBeast"
    ]
  },
  {
    "kind": "kill",
    "questId": 7749,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7750,
    "map": "BrightChaos",
    "monsters": [
      "Blight"
    ]
  },
  {
    "kind": "kill",
    "questId": 7756,
    "map": "BrightForest",
    "monsters": [
      "Shadow Flame",
      "ShadowFlame Scout"
    ]
  },
  {
    "kind": "kill",
    "questId": 7757,
    "map": "BrightForest",
    "monsters": [
      "ShadowFlame Scout"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7758,
    "map": "BrightForest",
    "ids": [
      7754
    ],
    "quantity": 2
  },
  {
    "kind": "mapItem",
    "questId": 7758,
    "map": "BrightForest",
    "ids": [
      7755
    ],
    "quantity": 1
  },
  {
    "kind": "kill",
    "questId": 7759,
    "map": "BrightForestPast",
    "monsters": [
      "Time Wraith"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7760,
    "map": "BrightForestPast",
    "ids": [
      7753
    ]
  },
  {
    "kind": "kill",
    "questId": 7760,
    "map": "BrightForestPast",
    "monsters": [
      "Spacetime Energy"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7761,
    "map": "BrightForestPast",
    "ids": [
      7756
    ]
  },
  {
    "kind": "kill",
    "questId": 7762,
    "map": "BrightForestPast",
    "monsters": [
      "Undead Minion"
    ]
  },
  {
    "kind": "kill",
    "questId": 7763,
    "map": "BrightForestPast",
    "monsters": [
      "Undead Minion",
      "Twisted Treeant"
    ]
  },
  {
    "kind": "plan",
    "questId": 7764,
    "actions": [
      {
        "kind": "hunt",
        "map": "BrightForestPast",
        "cell": "r8",
        "pad": "Left",
        "monster": "Twisted Treeant",
        "item": "Twisted Treeant Slain",
        "quantity": 10
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 7765,
    "actions": [
      {
        "kind": "mapItem",
        "map": "BrightForestPast",
        "id": 7757,
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "BrightForestPast",
        "cell": "r8",
        "pad": "Left",
        "monster": "Treeant",
        "item": "Purified Oil",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 7766,
    "map": "BrightForestPast",
    "ids": [
      7758
    ]
  },
  {
    "kind": "kill",
    "questId": 7767,
    "map": "BrightForest",
    "monsters": [
      "ShadowFlame Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 7768,
    "map": "BrightForest",
    "monsters": [
      "ShadowFlame Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 7768,
    "map": "BrightForest",
    "monsters": [
      "Shadowflame Scout",
      "Shadowflame Warrior"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.shadows-of-chaos.00do-all-so-c",
    category: "Story",
    map: "shadowwar",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
