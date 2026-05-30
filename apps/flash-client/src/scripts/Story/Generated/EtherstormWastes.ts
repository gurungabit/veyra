import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Etherstorm Wastes Story",
  "description": "This will finish the Etherstorm Wastes Story.",
  "tags": [
    "story",
    "quest",
    "etherstorm-wastes",
    "etherstorm",
    "wastes"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [
  {
    "kind": "mapItem",
    "questId": 1384,
    "map": "dragonplane",
    "ids": [
      682,
      683,
      684,
      685,
      686
    ]
  },
  {
    "kind": "kill",
    "questId": 1385,
    "map": "dragonplane",
    "monsters": [
      "Fire Elemental",
      "Earth Elemental",
      "Water Elemental",
      "Wind Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1386,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1387,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1388,
    "map": "dragonplane",
    "monsters": [
      "Earth Elemental",
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1389,
    "map": "dragonplane",
    "ids": [
      689
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1390,
    "map": "dragonplane",
    "monsters": [
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1391,
    "map": "dragonplane",
    "ids": [
      696
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1392,
    "map": "dragonplane",
    "monsters": [
      "Moganth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1393,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1394,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1395,
    "map": "water",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1532,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp",
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1533,
    "map": "firestorm",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1542,
    "map": "firestorm",
    "ids": [
      784
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1543,
    "map": "firestorm",
    "ids": [
      785
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1545,
    "map": "firestorm",
    "ids": [
      786
    ],
    "quantity": 20
  },
  {
    "kind": "kill",
    "questId": 1546,
    "map": "firestorm",
    "monsters": [
      "FireStorm Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 1547,
    "map": "firestorm",
    "monsters": [
      "Ssikari"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1384,
    "map": "dragonplane",
    "ids": [
      682,
      683,
      684,
      685,
      686
    ]
  },
  {
    "kind": "kill",
    "questId": 1385,
    "map": "dragonplane",
    "monsters": [
      "Fire Elemental",
      "Earth Elemental",
      "Water Elemental",
      "Wind Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1386,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1387,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1388,
    "map": "dragonplane",
    "monsters": [
      "Earth Elemental",
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1389,
    "map": "dragonplane",
    "ids": [
      689
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1390,
    "map": "dragonplane",
    "monsters": [
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1391,
    "map": "dragonplane",
    "ids": [
      696
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1392,
    "map": "dragonplane",
    "monsters": [
      "Moganth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1393,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1394,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1395,
    "map": "water",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1396,
    "map": "water",
    "monsters": [
      "Water Elemental",
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1397,
    "map": "water",
    "ids": [
      690
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1398,
    "map": "water",
    "monsters": [
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1399,
    "map": "water",
    "ids": [
      691
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1400,
    "map": "water",
    "monsters": [
      "Udaroth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1401,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1402,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1403,
    "map": "wind",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1384,
    "map": "dragonplane",
    "ids": [
      682,
      683,
      684,
      685,
      686
    ]
  },
  {
    "kind": "kill",
    "questId": 1385,
    "map": "dragonplane",
    "monsters": [
      "Fire Elemental",
      "Earth Elemental",
      "Water Elemental",
      "Wind Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1386,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1387,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1388,
    "map": "dragonplane",
    "monsters": [
      "Earth Elemental",
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1389,
    "map": "dragonplane",
    "ids": [
      689
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1390,
    "map": "dragonplane",
    "monsters": [
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1391,
    "map": "dragonplane",
    "ids": [
      696
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1392,
    "map": "dragonplane",
    "monsters": [
      "Moganth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1393,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1394,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1395,
    "map": "water",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1396,
    "map": "water",
    "monsters": [
      "Water Elemental",
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1397,
    "map": "water",
    "ids": [
      690
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1398,
    "map": "water",
    "monsters": [
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1399,
    "map": "water",
    "ids": [
      691
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1400,
    "map": "water",
    "monsters": [
      "Udaroth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1401,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1402,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1403,
    "map": "wind",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1404,
    "map": "wind",
    "monsters": [
      "Wind Elemental",
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1405,
    "map": "wind",
    "ids": [
      695
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1406,
    "map": "wind",
    "monsters": [
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1407,
    "map": "wind",
    "ids": [
      692
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1408,
    "map": "wind",
    "monsters": [
      "Cellot"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1409,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1410,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1411,
    "map": "fire",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1384,
    "map": "dragonplane",
    "ids": [
      682,
      683,
      684,
      685,
      686
    ]
  },
  {
    "kind": "kill",
    "questId": 1385,
    "map": "dragonplane",
    "monsters": [
      "Fire Elemental",
      "Earth Elemental",
      "Water Elemental",
      "Wind Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1386,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1387,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1388,
    "map": "dragonplane",
    "monsters": [
      "Earth Elemental",
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1389,
    "map": "dragonplane",
    "ids": [
      689
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1390,
    "map": "dragonplane",
    "monsters": [
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1391,
    "map": "dragonplane",
    "ids": [
      696
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1392,
    "map": "dragonplane",
    "monsters": [
      "Moganth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1393,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1394,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1395,
    "map": "water",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1396,
    "map": "water",
    "monsters": [
      "Water Elemental",
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1397,
    "map": "water",
    "ids": [
      690
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1398,
    "map": "water",
    "monsters": [
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1399,
    "map": "water",
    "ids": [
      691
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1400,
    "map": "water",
    "monsters": [
      "Udaroth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1401,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1402,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1403,
    "map": "wind",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1404,
    "map": "wind",
    "monsters": [
      "Wind Elemental",
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1405,
    "map": "wind",
    "ids": [
      695
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1406,
    "map": "wind",
    "monsters": [
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1407,
    "map": "wind",
    "ids": [
      692
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1408,
    "map": "wind",
    "monsters": [
      "Cellot"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1409,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1410,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1411,
    "map": "fire",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1412,
    "map": "fire",
    "monsters": [
      "Fire Elemental",
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1413,
    "map": "fire",
    "ids": [
      693
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1414,
    "map": "fire",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1415,
    "map": "fire",
    "ids": [
      694
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 1416,
    "map": "fire",
    "monsters": [
      "Zellare"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1417,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1384,
    "map": "dragonplane",
    "ids": [
      682,
      683,
      684,
      685,
      686
    ]
  },
  {
    "kind": "kill",
    "questId": 1385,
    "map": "dragonplane",
    "monsters": [
      "Fire Elemental",
      "Earth Elemental",
      "Water Elemental",
      "Wind Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1386,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1387,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1388,
    "map": "dragonplane",
    "monsters": [
      "Earth Elemental",
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1389,
    "map": "dragonplane",
    "ids": [
      689
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1390,
    "map": "dragonplane",
    "monsters": [
      "Living Earth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1391,
    "map": "dragonplane",
    "ids": [
      696
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1392,
    "map": "dragonplane",
    "monsters": [
      "Moganth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1393,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1394,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1395,
    "map": "water",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1396,
    "map": "water",
    "monsters": [
      "Water Elemental",
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1397,
    "map": "water",
    "ids": [
      690
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1398,
    "map": "water",
    "monsters": [
      "Living Water"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1399,
    "map": "water",
    "ids": [
      691
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1400,
    "map": "water",
    "monsters": [
      "Udaroth"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1401,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1402,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1403,
    "map": "wind",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1404,
    "map": "wind",
    "monsters": [
      "Wind Elemental",
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1405,
    "map": "wind",
    "ids": [
      695
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 1406,
    "map": "wind",
    "monsters": [
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1407,
    "map": "wind",
    "ids": [
      692
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1408,
    "map": "wind",
    "monsters": [
      "Cellot"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1409,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1410,
    "map": "dragonplane",
    "ids": [
      687
    ],
    "quantity": 6
  },
  {
    "kind": "mapItem",
    "questId": 1411,
    "map": "fire",
    "ids": [
      688
    ]
  },
  {
    "kind": "kill",
    "questId": 1412,
    "map": "fire",
    "monsters": [
      "Fire Elemental",
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1413,
    "map": "fire",
    "ids": [
      693
    ],
    "quantity": 6
  },
  {
    "kind": "kill",
    "questId": 1414,
    "map": "fire",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1415,
    "map": "fire",
    "ids": [
      694
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 1416,
    "map": "fire",
    "monsters": [
      "Zellare"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1417,
    "map": "dragonplane",
    "ids": [
      688
    ]
  },
  {
    "kind": "plan",
    "questId": 1418,
    "actions": [
      {
        "kind": "hunt",
        "map": "desoloth",
        "monster": "Desoloth",
        "item": "Desoloth Freed!"
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1532,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp",
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1533,
    "map": "firestorm",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1542,
    "map": "firestorm",
    "ids": [
      784
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1543,
    "map": "firestorm",
    "ids": [
      785
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1545,
    "map": "firestorm",
    "ids": [
      786
    ],
    "quantity": 20
  },
  {
    "kind": "kill",
    "questId": 1546,
    "map": "firestorm",
    "monsters": [
      "FireStorm Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 1547,
    "map": "firestorm",
    "monsters": [
      "Ssikari"
    ]
  },
  {
    "kind": "kill",
    "questId": 1532,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp",
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1533,
    "map": "firestorm",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1542,
    "map": "firestorm",
    "ids": [
      784
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1543,
    "map": "firestorm",
    "ids": [
      785
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1545,
    "map": "firestorm",
    "ids": [
      786
    ],
    "quantity": 20
  },
  {
    "kind": "kill",
    "questId": 1546,
    "map": "firestorm",
    "monsters": [
      "FireStorm Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 1547,
    "map": "firestorm",
    "monsters": [
      "Ssikari"
    ]
  },
  {
    "kind": "kill",
    "questId": 1571,
    "map": "airstorm",
    "monsters": [
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1572,
    "map": "airstorm",
    "ids": [
      827
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1573,
    "map": "airstorm",
    "ids": [
      823
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1574,
    "map": "airstorm",
    "monsters": [
      "KingCrystal",
      "Air Crystal"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1575,
    "map": "firestorm",
    "ids": [
      824
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1575,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1576,
    "map": "airstorm",
    "monsters": [
      "Energy Tornado"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1577,
    "map": "firestorm",
    "ids": [
      825
    ]
  },
  {
    "kind": "kill",
    "questId": 1532,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp",
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1533,
    "map": "firestorm",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1542,
    "map": "firestorm",
    "ids": [
      784
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1543,
    "map": "firestorm",
    "ids": [
      785
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1545,
    "map": "firestorm",
    "ids": [
      786
    ],
    "quantity": 20
  },
  {
    "kind": "kill",
    "questId": 1546,
    "map": "firestorm",
    "monsters": [
      "FireStorm Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 1547,
    "map": "firestorm",
    "monsters": [
      "Ssikari"
    ]
  },
  {
    "kind": "kill",
    "questId": 1571,
    "map": "airstorm",
    "monsters": [
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1572,
    "map": "airstorm",
    "ids": [
      827
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1573,
    "map": "airstorm",
    "ids": [
      823
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1574,
    "map": "airstorm",
    "monsters": [
      "KingCrystal",
      "Air Crystal"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1575,
    "map": "firestorm",
    "ids": [
      824
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1575,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1576,
    "map": "airstorm",
    "monsters": [
      "Energy Tornado"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1577,
    "map": "firestorm",
    "ids": [
      825
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1616,
    "map": "waterstorm",
    "ids": [
      840
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1616,
    "map": "waterstorm",
    "ids": [
      841
    ]
  },
  {
    "kind": "kill",
    "questId": 1617,
    "map": "waterstorm",
    "monsters": [
      "Marsh Lurker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1618,
    "map": "waterstorm",
    "ids": [
      842
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1619,
    "map": "waterstorm",
    "ids": [
      843
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1619,
    "map": "waterstorm",
    "monsters": [
      "Living Water",
      "Living Water"
    ]
  },
  {
    "kind": "kill",
    "questId": 1620,
    "map": "waterstorm",
    "monsters": [
      "Fishwing",
      "Fishwing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1621,
    "map": "waterstorm",
    "ids": [
      844
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 1621,
    "map": "waterstorm",
    "monsters": [
      "Fishman Soldier",
      "Marsh Lurker",
      "Frogdrake"
    ]
  },
  {
    "kind": "kill",
    "questId": 1622,
    "map": "waterstorm",
    "monsters": [
      "Deep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 1532,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp",
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1533,
    "map": "firestorm",
    "monsters": [
      "Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1542,
    "map": "firestorm",
    "ids": [
      784
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1543,
    "map": "firestorm",
    "ids": [
      785
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1545,
    "map": "firestorm",
    "ids": [
      786
    ],
    "quantity": 20
  },
  {
    "kind": "kill",
    "questId": 1546,
    "map": "firestorm",
    "monsters": [
      "FireStorm Hatchling"
    ]
  },
  {
    "kind": "kill",
    "questId": 1547,
    "map": "firestorm",
    "monsters": [
      "Ssikari"
    ]
  },
  {
    "kind": "kill",
    "questId": 1571,
    "map": "airstorm",
    "monsters": [
      "Living Air"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1572,
    "map": "airstorm",
    "ids": [
      827
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1573,
    "map": "airstorm",
    "ids": [
      823
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1574,
    "map": "airstorm",
    "monsters": [
      "KingCrystal",
      "Air Crystal"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1575,
    "map": "firestorm",
    "ids": [
      824
    ],
    "quantity": 12
  },
  {
    "kind": "kill",
    "questId": 1575,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 1576,
    "map": "airstorm",
    "monsters": [
      "Energy Tornado"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1577,
    "map": "firestorm",
    "ids": [
      825
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1616,
    "map": "waterstorm",
    "ids": [
      840
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1616,
    "map": "waterstorm",
    "ids": [
      841
    ]
  },
  {
    "kind": "kill",
    "questId": 1617,
    "map": "waterstorm",
    "monsters": [
      "Marsh Lurker"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1618,
    "map": "waterstorm",
    "ids": [
      842
    ],
    "quantity": 13
  },
  {
    "kind": "mapItem",
    "questId": 1619,
    "map": "waterstorm",
    "ids": [
      843
    ],
    "quantity": 10
  },
  {
    "kind": "kill",
    "questId": 1619,
    "map": "waterstorm",
    "monsters": [
      "Living Water",
      "Living Water"
    ]
  },
  {
    "kind": "kill",
    "questId": 1620,
    "map": "waterstorm",
    "monsters": [
      "Fishwing",
      "Fishwing"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1621,
    "map": "waterstorm",
    "ids": [
      844
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 1621,
    "map": "waterstorm",
    "monsters": [
      "Fishman Soldier",
      "Marsh Lurker",
      "Frogdrake"
    ]
  },
  {
    "kind": "kill",
    "questId": 1622,
    "map": "waterstorm",
    "monsters": [
      "Deep Dweller"
    ]
  },
  {
    "kind": "kill",
    "questId": 1633,
    "map": "earthstorm",
    "monsters": [
      "Wind Elemental",
      "Water Elemental",
      "Earth Elemental",
      "Fire Elemental"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1634,
    "map": "earthstorm",
    "ids": [
      860
    ],
    "quantity": 3
  },
  {
    "kind": "kill",
    "questId": 1634,
    "map": "earthstorm",
    "monsters": [
      "Sapphire Golem",
      "Crystallized Living Fire"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 1635,
    "map": "earthstorm",
    "ids": [
      862
    ],
    "quantity": 8
  },
  {
    "kind": "kill",
    "questId": 1635,
    "map": "earthstorm",
    "monsters": [
      "Crystalized Jellyfish",
      "Diamond Golem"
    ]
  },
  {
    "kind": "plan",
    "questId": 1636,
    "actions": [
      {
        "kind": "mapItem",
        "map": "earthstorm",
        "id": 861,
        "quantity": 8
      },
      {
        "kind": "mapItem",
        "map": "earthstorm",
        "id": 863,
        "quantity": 1
      },
      {
        "kind": "hunt",
        "map": "earthstorm",
        "monster": "Shard Spinner",
        "item": "G Tone",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "earthstorm",
        "monster": "Shard Spinner",
        "item": "B Tone",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "earthstorm",
        "monster": "Shard Spinner",
        "item": "D Tone",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "earthstorm",
        "monster": "Shard Spinner",
        "item": "E Tone",
        "quantity": 2
      },
      {
        "kind": "hunt",
        "map": "earthstorm",
        "monster": "Emerald Golem",
        "item": "Greenglass Bells",
        "quantity": 8
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 1637,
    "map": "earthstorm",
    "monsters": [
      "Ruby Golem"
    ]
  },
  {
    "kind": "kill",
    "questId": 1638,
    "map": "earthstorm",
    "monsters": [
      "Amethite"
    ]
  },
  {
    "kind": "kill",
    "questId": 1639,
    "map": "earthstorm",
    "monsters": [
      "Arradia"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3497,
    "map": "firestorm",
    "ids": [
      2646
    ]
  },
  {
    "kind": "kill",
    "questId": 3498,
    "map": "firestorm",
    "monsters": [
      "Sulfur Imp"
    ]
  },
  {
    "kind": "kill",
    "questId": 3499,
    "map": "shadowfall",
    "monsters": [
      "Skeletal Knight"
    ]
  },
  {
    "kind": "kill",
    "questId": 3501,
    "map": "fotia",
    "monsters": [
      "Femme Cult Worshiper"
    ]
  },
  {
    "kind": "kill",
    "questId": 3502,
    "map": "dragonplane",
    "monsters": [
      "Earth Elemental",
      "Fire Elemental",
      "Water Elemental",
      "Wind Elemental"
    ]
  },
  {
    "kind": "kill",
    "questId": 3503,
    "map": "Natatorium",
    "monsters": [
      "Merdraconian"
    ]
  },
  {
    "kind": "plan",
    "questId": 3504,
    "actions": [
      {
        "kind": "hunt",
        "map": "wanders",
        "cell": "r5",
        "pad": "Left",
        "monster": "Lotus Spider",
        "item": "Lotus Petal",
        "quantity": 5
      },
      {
        "kind": "hunt",
        "map": "wanders",
        "cell": "r2",
        "pad": "Down",
        "monster": "Kalestri Worshiper",
        "item": "Talisman of Renewal",
        "quantity": 5
      }
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3505,
    "map": "dragonrune",
    "ids": [
      2649,
      2650,
      2651,
      2652,
      2653
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3506,
    "map": "dragonhame",
    "ids": [
      2647
    ],
    "quantity": 8
  },
  {
    "kind": "mapItem",
    "questId": 3506,
    "map": "dragonhame",
    "ids": [
      2648
    ]
  },
  {
    "kind": "kill",
    "questId": 3507,
    "map": "dragonhame",
    "monsters": [
      "Infected Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 3509,
    "map": "dragonhame",
    "monsters": [
      "Infected Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 3511,
    "actions": [
      {
        "kind": "hunt",
        "map": "lair",
        "monster": "Dark Draconian",
        "item": "Superior Dragon Blood",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "lair",
        "monster": "Venom Draconian",
        "item": "Draconian Venom",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "lair",
        "monster": "Water Draconian",
        "item": "Draconian Tears",
        "quantity": 3
      },
      {
        "kind": "hunt",
        "map": "lair",
        "monster": "Wyvern",
        "item": "Wyvern Scales",
        "quantity": 3
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3512,
    "map": "lair",
    "monsters": [
      "Dark Draconian"
    ]
  },
  {
    "kind": "kill",
    "questId": 3513,
    "map": "lair",
    "monsters": [
      "Red Dragon"
    ]
  },
  {
    "kind": "plan",
    "questId": 3514,
    "actions": [
      {
        "kind": "hunt",
        "map": "swordhavenundead",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "*",
        "item": "Undead Slain",
        "quantity": 13
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3515,
    "map": "temple",
    "monsters": [
      "Dracolich"
    ]
  },
  {
    "kind": "kill",
    "questId": 3516,
    "map": "DragonPlane",
    "monsters": [
      "Wind Elemental",
      "Earth Elemental",
      "Fire Elemental",
      "Water Elemental"
    ]
  },
  {
    "kind": "plan",
    "questId": 3517,
    "actions": [
      {
        "kind": "hunt",
        "map": "battleundera",
        "monster": "Skeletal Fire Mage",
        "item": "Undead Fire Marrow",
        "quantity": 6
      },
      {
        "kind": "hunt",
        "map": "battleundera",
        "monster": "Skeletal Ice Mage",
        "item": "Undead Ice Marrow",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "kill",
    "questId": 3518,
    "map": "battleundera",
    "monsters": [
      "Lich"
    ]
  },
  {
    "kind": "kill",
    "questId": 3519,
    "map": "dragonheart",
    "monsters": [
      "Zombie Dragon"
    ]
  },
  {
    "kind": "kill",
    "questId": 3520,
    "map": "infirmary",
    "monsters": [
      "Proto-Earth Dracolich"
    ]
  },
  {
    "kind": "chain",
    "questId": 3522
  },
  {
    "kind": "mapItem",
    "questId": 3523,
    "map": "dragonheart",
    "ids": [
      2660
    ],
    "quantity": 5
  },
  {
    "kind": "kill",
    "questId": 3524,
    "map": "dragonheart",
    "monsters": [
      "Infected Dragonling"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3525,
    "map": "dragonheart",
    "ids": [
      2661
    ]
  },
  {
    "kind": "kill",
    "questId": 3526,
    "map": "dragonheart",
    "monsters": [
      "Zombie Dragon"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3527,
    "map": "dragonheart",
    "ids": [
      2662
    ]
  },
  {
    "kind": "kill",
    "questId": 3527,
    "map": "dragonheart",
    "monsters": [
      "Proto-Water Dracolich"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3528,
    "map": "dragonheart",
    "ids": [
      2663
    ],
    "quantity": 7
  },
  {
    "kind": "mapItem",
    "questId": 3529,
    "map": "dragonheart",
    "ids": [
      2664
    ]
  },
  {
    "kind": "kill",
    "questId": 3529,
    "map": "dragonheart",
    "monsters": [
      "Proto-Fire Dracolich"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3530,
    "map": "dragonheart",
    "ids": [
      2665
    ],
    "quantity": 7
  },
  {
    "kind": "mapItem",
    "questId": 3531,
    "map": "dragonheart",
    "ids": [
      2666
    ]
  },
  {
    "kind": "kill",
    "questId": 3531,
    "map": "dragonheart",
    "monsters": [
      "Proto-Earth Dracolich"
    ]
  },
  {
    "kind": "mapItem",
    "questId": 3532,
    "map": "dragonheart",
    "ids": [
      2667
    ],
    "quantity": 7
  },
  {
    "kind": "mapItem",
    "questId": 3533,
    "map": "dragonheart",
    "ids": [
      2668
    ]
  },
  {
    "kind": "kill",
    "questId": 3533,
    "map": "dragonheart",
    "monsters": [
      "Proto-Air Dracolich"
    ]
  },
  {
    "kind": "kill",
    "questId": 3534,
    "map": "dragonheart",
    "monsters": [
      "Deluge Dracolich",
      "Inferno Dracolich",
      "Granite Dracolich",
      "Tempest Dracolich"
    ]
  },
  {
    "kind": "kill",
    "questId": 3535,
    "map": "dragonheart",
    "monsters": [
      "Avatar of Desolich"
    ]
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.etherstorm-wastes",
    category: "Story",
    map: "dragonplane",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
