import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Dage Recruit Story",
  "description": "This will complete the Dage Recruit story.",
  "tags": [
    "story",
    "quest",
    "dage",
    "recruit",
    "legion",
    "staff",
    "birthday"
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
    "kind": "mapItem",
    "questId": 8561,
    "map": "dagerecruit",
    "ids": [
      9885
    ]
  },
  {
    "kind": "kill",
    "questId": 8561,
    "map": "dagerecruit",
    "monsters": [
      "Scared Wildcat"
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
    "kind": "kill",
    "questId": 8563,
    "map": "dagerecruit",
    "monsters": [
      "Scared Wildcat"
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
    "kind": "kill",
    "questId": 8571,
    "map": "dagerecruit",
    "monsters": [
      "Funa-yurei"
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
    "kind": "plan",
    "questId": 8585,
    "actions": [
      {
        "kind": "hunt",
        "map": "darkwarlegion",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Dreadfiend",
        "item": "Dreadfiend Defeated",
        "quantity": 6
      }
    ]
  },
  {
    "kind": "plan",
    "questId": 8586,
    "actions": [
      {
        "kind": "hunt",
        "map": "darkwarlegion",
        "cell": "Enter",
        "pad": "Spawn",
        "monster": "Dreadfiend",
        "item": "Nation's Dread",
        "quantity": 5
      }
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
  }
];

export const definition = defineGeneratedStory(
  {
    id: "story.legion.dage-recruit",
    category: "Story",
    map: "dagerecruit",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
