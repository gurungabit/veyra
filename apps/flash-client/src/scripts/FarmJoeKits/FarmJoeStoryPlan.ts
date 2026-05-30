export type StoryPlanTarget = string | number;

export type StoryPlanStep =
  | { kind: "chain"; questId: number }
  | { kind: "kill"; questId: number; map: string; monsters: StoryPlanTarget[] }
  | { kind: "mapItem"; questId: number; map: string; ids: number[]; quantity?: number };

export const allStoriesPlan: StoryPlanStep[] = [
  { kind: "chain", questId: 2299 },
  { kind: "chain", questId: 2322 },
  { kind: "chain", questId: 592 },
  { kind: "chain", questId: 10047 },
  { kind: "chain", questId: 1239 },
  { kind: "chain", questId: 1238 },
  { kind: "chain", questId: 3075 },
  { kind: "chain", questId: 3076 },
  { kind: "chain", questId: 4069 },
  { kind: "chain", questId: 1213 },
  { kind: "chain", questId: 9108 },
  { kind: "chain", questId: 9107 },
  {
    kind: "kill",
    questId: 5903,
    map: "gluttony",
    monsters: ["Glutus"]
  },
  {
    kind: "kill",
    questId: 5904,
    map: "gluttony",
    monsters: ["Mucus"]
  },
  {
    kind: "kill",
    questId: 5905,
    map: "gluttony",
    monsters: ["Skeletal Slayer"]
  },
  {
    kind: "kill",
    questId: 5910,
    map: "gluttony",
    monsters: ["Skeletal Slayer"]
  },
  {
    kind: "kill",
    questId: 5911,
    map: "gluttony",
    monsters: ["Bowel Worm", "Bile"]
  },
  {
    kind: "kill",
    questId: 5913,
    map: "gluttony",
    monsters: ["Giant Tapeworm"]
  },
  {
    kind: "kill",
    questId: 5915,
    map: "gluttony",
    monsters: ["Deflated Glutus"]
  },
  {
    kind: "kill",
    questId: 5917,
    map: "pride",
    monsters: ["Storm Drakel"]
  },
  {
    kind: "kill",
    questId: 5918,
    map: "pride",
    monsters: ["Ball Lightning"]
  },
  {
    kind: "kill",
    questId: 5919,
    map: "pride",
    monsters: ["Rubber Treeant"]
  },
  {
    kind: "kill",
    questId: 5920,
    map: "pride",
    monsters: ["Cellar Guard"]
  },
  {
    kind: "kill",
    questId: 5922,
    map: "pride",
    monsters: ["Storm Drakel"]
  },
  {
    kind: "kill",
    questId: 5923,
    map: "pride",
    monsters: ["Drakel Guard"]
  },
  {
    kind: "kill",
    questId: 5924,
    map: "pride",
    monsters: ["Elite Guard"]
  },
  {
    kind: "kill",
    questId: 5925,
    map: "pride",
    monsters: ["Storm Drakel"]
  },
  {
    kind: "kill",
    questId: 5926,
    map: "pride",
    monsters: ["Valsarian"]
  },
  {
    kind: "kill",
    questId: 5934,
    map: "greed",
    monsters: ["Sneevil Looter"]
  },
  {
    kind: "kill",
    questId: 5937,
    map: "greed",
    monsters: ["Jelly-Like Cube"]
  },
  {
    kind: "kill",
    questId: 5940,
    map: "greed",
    monsters: ["Ice Crystal", "Glacial Horror"]
  },
  {
    kind: "kill",
    questId: 5941,
    map: "greed",
    monsters: ["Kobold"]
  },
  {
    kind: "kill",
    questId: 5943,
    map: "greed",
    monsters: ["Goregold"]
  },
  {
    kind: "kill",
    questId: 5945,
    map: "sloth",
    monsters: ["Plague Zombie"]
  },
  {
    kind: "kill",
    questId: 5946,
    map: "sloth",
    monsters: ["Snotgoblin", "Wandering Plague"]
  },
  {
    kind: "kill",
    questId: 5947,
    map: "sloth",
    monsters: ["Plague Zombie"]
  },
  {
    kind: "kill",
    questId: 5949,
    map: "sloth",
    monsters: ["Marsh Thing"]
  },
  {
    kind: "kill",
    questId: 5954,
    map: "sloth",
    monsters: ["Plague Zombie"]
  },
  {
    kind: "kill",
    questId: 5956,
    map: "sloth",
    monsters: ["SnotGoblin Prime"]
  },
  {
    kind: "kill",
    questId: 5957,
    map: "sloth",
    monsters: ["Phlegnn"]
  },
  {
    kind: "kill",
    questId: 5958,
    map: "sloth",
    monsters: ["Cured Phlegnn"]
  },
  {
    kind: "kill",
    questId: 5960,
    map: "sloth",
    monsters: ["Actual Sloth Dragon"]
  },
  {
    kind: "kill",
    questId: 5959,
    map: "sloth",
    monsters: ["Mutated Plague"]
  },
  {
    kind: "kill",
    questId: 5961,
    map: "lust",
    monsters: ["Devoted Admirer"]
  },
  {
    kind: "kill",
    questId: 5963,
    map: "lust",
    monsters: ["Golden Vase"]
  },
  {
    kind: "kill",
    questId: 5964,
    map: "lust",
    monsters: ["Enamored Guard"]
  },
  {
    kind: "kill",
    questId: 5965,
    map: "lust",
    monsters: ["Devoted Admirer"]
  },
  {
    kind: "kill",
    questId: 5966,
    map: "lust",
    monsters: ["Enamored Guard"]
  },
  {
    kind: "kill",
    questId: 5968,
    map: "lust",
    monsters: ["Elite Guard"]
  },
  {
    kind: "kill",
    questId: 5969,
    map: "lust",
    monsters: ["Viscyra"]
  },
  {
    kind: "kill",
    questId: 5970,
    map: "lust",
    monsters: ["Lascivia"]
  },
  {
    kind: "kill",
    questId: 5971,
    map: "lust",
    monsters: ["Elite Guard"]
  },
  {
    kind: "kill",
    questId: 5972,
    map: "lust",
    monsters: ["Golden Vase", "Golden Vase"]
  },
  {
    kind: "kill",
    questId: 5973,
    map: "lust",
    monsters: ["Devoted Admirer"]
  },
  {
    kind: "kill",
    questId: 5974,
    map: "lust",
    monsters: ["Elite Guard"]
  },
  {
    kind: "kill",
    questId: 5976,
    map: "lust",
    monsters: ["Killek Deadchewer"]
  },
  {
    kind: "kill",
    questId: 5985,
    map: "dragoncrown",
    monsters: ["Fire Sprite"]
  },
  {
    kind: "kill",
    questId: 5986,
    map: "dragoncrown",
    monsters: ["Llama", "Rampaging Boar"]
  },
  {
    kind: "kill",
    questId: 5987,
    map: "dragoncrown",
    monsters: ["Rock Elemental", "Earth Elemental"]
  },
  {
    kind: "kill",
    questId: 5990,
    map: "dragoncrown",
    monsters: ["Torgat"]
  },
  {
    kind: "kill",
    questId: 5991,
    map: "dragoncrown",
    monsters: ["Fressa"]
  },
  {
    kind: "kill",
    questId: 5992,
    map: "dragoncrown",
    monsters: ["Radroth"]
  },
  {
    kind: "kill",
    questId: 5993,
    map: "dragoncrown",
    monsters: ["Nizex"]
  },
  {
    kind: "kill",
    questId: 5994,
    map: "dragoncrown",
    monsters: ["Tathu"]
  },
  {
    kind: "kill",
    questId: 5995,
    map: "dragoncrown",
    monsters: ["Lanshen"]
  },
  {
    kind: "kill",
    questId: 5996,
    map: "dragoncrown",
    monsters: ["Ashax"]
  },
  {
    kind: "kill",
    questId: 5997,
    map: "dragoncrown",
    monsters: ["Letori"]
  },
  {
    kind: "kill",
    questId: 5998,
    map: "dragoncrown",
    monsters: ["Nayzol"]
  },
  {
    kind: "kill",
    questId: 5999,
    map: "dragoncrown",
    monsters: ["Zathas"]
  },
  {
    kind: "kill",
    questId: 6000,
    map: "dragoncrown",
    monsters: ["Argo"]
  },
  {
    kind: "kill",
    questId: 6001,
    map: "maloth",
    monsters: ["Ukki"]
  },
  {
    kind: "kill",
    questId: 6002,
    map: "maloth",
    monsters: ["Kagan"]
  },
  {
    kind: "kill",
    questId: 6003,
    map: "maloth",
    monsters: ["Golgar"]
  },
  {
    kind: "kill",
    questId: 6004,
    map: "maloth",
    monsters: ["Golgar", "Castle Guard", "Scroll Keeper", "Nervous Serf", "Locked Chest"]
  },
  {
    kind: "kill",
    questId: 6005,
    map: "maloth",
    monsters: ["Maloth"]
  },
  {
    kind: "kill",
    questId: 6110,
    map: "wrath",
    monsters: ["Fishbones", "Bone Terror"]
  },
  {
    kind: "kill",
    questId: 6111,
    map: "wrath",
    monsters: ["Dark Fire"]
  },
  {
    kind: "kill",
    questId: 6112,
    map: "wrath",
    monsters: ["Bone Terror"]
  },
  {
    kind: "kill",
    questId: 6116,
    map: "wrath",
    monsters: ["Undead Pirate"]
  },
  {
    kind: "kill",
    questId: 6117,
    map: "wrath",
    monsters: ["Mutineer", "Mutineer"]
  },
  {
    kind: "kill",
    questId: 6119,
    map: "wrath",
    monsters: ["Droghor"]
  },
  {
    kind: "kill",
    questId: 6120,
    map: "wrath",
    monsters: ["Gorgorath"]
  },
  {
    kind: "kill",
    questId: 6163,
    map: "dragonbone",
    monsters: ["Bone Dragonling", "Dark Fire"]
  },
  {
    kind: "kill",
    questId: 6164,
    map: "dragonbone",
    monsters: ["Bone Terror"]
  },
  {
    kind: "kill",
    questId: 6165,
    map: "dragonbone",
    monsters: ["Bone Wyvern"]
  },
  {
    kind: "kill",
    questId: 6169,
    map: "dragonbone",
    monsters: ["Dragonshade"]
  },
  {
    kind: "kill",
    questId: 6170,
    map: "dragonbone",
    monsters: ["Gorgorath"]
  },
  {
    kind: "mapItem",
    questId: 5905,
    map: "gluttony",
    ids: [5346, 2]
  },
  { kind: "mapItem", questId: 5906, map: "gluttony", ids: [5344] },
  { kind: "mapItem", questId: 5907, map: "gluttony", ids: [5345] },
  {
    kind: "mapItem",
    questId: 5910,
    map: "gluttony",
    ids: [5348, 5]
  },
  { kind: "mapItem", questId: 5912, map: "gluttony", ids: [5349] },
  { kind: "mapItem", questId: 5914, map: "gluttony", ids: [5350] },
  { kind: "mapItem", questId: 5921, map: "pride", ids: [5351] },
  { kind: "mapItem", questId: 5921, map: "pride", ids: [5352, 6] },
  { kind: "mapItem", questId: 5922, map: "pride", ids: [5353, 8] },
  { kind: "mapItem", questId: 5923, map: "pride", ids: [5354, 4] },
  { kind: "mapItem", questId: 5924, map: "pride", ids: [5355] },
  { kind: "mapItem", questId: 5925, map: "pride", ids: [5356] },
  { kind: "mapItem", questId: 5935, map: "greed", ids: [5372] },
  { kind: "mapItem", questId: 5936, map: "greed", ids: [5373] },
  { kind: "mapItem", questId: 5938, map: "greed", ids: [5374, 5] },
  {
    kind: "mapItem",
    questId: 5939,
    map: "greed",
    ids: [5377, 5378]
  },
  { kind: "mapItem", questId: 5941, map: "greed", ids: [5375, 5] },
  { kind: "mapItem", questId: 5942, map: "greed", ids: [5376, 3] },
  { kind: "mapItem", questId: 5945, map: "sloth", ids: [5382] },
  { kind: "mapItem", questId: 5948, map: "sloth", ids: [5387] },
  { kind: "mapItem", questId: 5950, map: "sloth", ids: [5383, 8] },
  { kind: "mapItem", questId: 5951, map: "sloth", ids: [5389] },
  { kind: "mapItem", questId: 5953, map: "sloth", ids: [5391] },
  {
    kind: "mapItem",
    questId: 5955,
    map: "sloth",
    ids: [5384, 10]
  },
  { kind: "mapItem", questId: 5956, map: "sloth", ids: [5385] },
  {
    kind: "mapItem",
    questId: 5962,
    map: "lust",
    ids: [5405, 5406, 5407, 5408, 5409]
  },
  {
    kind: "mapItem",
    questId: 5965,
    map: "lust",
    ids: [5410, 5411]
  },
  { kind: "mapItem", questId: 5967, map: "lust", ids: [5412, 5] },
  { kind: "mapItem", questId: 5968, map: "lust", ids: [5413] },
  { kind: "mapItem", questId: 5969, map: "lust", ids: [5414] },
  { kind: "mapItem", questId: 5974, map: "lust", ids: [5415, 8] },
  {
    kind: "mapItem",
    questId: 5975,
    map: "lust",
    ids: [5416, 5417]
  },
  {
    kind: "mapItem",
    questId: 5983,
    map: "dragoncrown",
    ids: [5420]
  },
  {
    kind: "mapItem",
    questId: 5984,
    map: "dragoncrown",
    ids: [5421]
  },
  {
    kind: "mapItem",
    questId: 5985,
    map: "dragoncrown",
    ids: [5422, 6]
  },
  {
    kind: "mapItem",
    questId: 5988,
    map: "dragoncrown",
    ids: [5423]
  },
  {
    kind: "mapItem",
    questId: 5989,
    map: "dragoncrown",
    ids: [5424]
  },
  { kind: "mapItem", questId: 6112, map: "wrath", ids: [5541, 6] },
  { kind: "mapItem", questId: 6114, map: "wrath", ids: [5542, 6] },
  { kind: "mapItem", questId: 6115, map: "wrath", ids: [5540] },
  { kind: "mapItem", questId: 6116, map: "wrath", ids: [5544] },
  { kind: "mapItem", questId: 6118, map: "wrath", ids: [5545] },
  {
    kind: "mapItem",
    questId: 6163,
    map: "dragonbone",
    ids: [5587]
  },
  {
    kind: "mapItem",
    questId: 6166,
    map: "dragonbone",
    ids: [5588]
  },
  {
    kind: "mapItem",
    questId: 6167,
    map: "dragonbone",
    ids: [5589]
  },
  {
    kind: "mapItem",
    questId: 6168,
    map: "dragonbone",
    ids: [5590]
  },
  {
    kind: "mapItem",
    questId: 6169,
    map: "dragonbone",
    ids: [5591]
  },
  {
    kind: "kill",
    questId: 6901,
    map: "volcano",
    monsters: ["Lava Golem"]
  },
  {
    kind: "kill",
    questId: 6902,
    map: "embersea",
    monsters: ["Living Lava"]
  },
  {
    kind: "kill",
    questId: 6903,
    map: "ashfallcamp",
    monsters: ["Lava Dragoblin"]
  },
  {
    kind: "kill",
    questId: 6904,
    map: "gilead",
    monsters: ["Water Elemental"]
  },
  {
    kind: "kill",
    questId: 6905,
    map: "crossroads",
    monsters: ["Koalion"]
  },
  {
    kind: "kill",
    questId: 6906,
    map: "mountain",
    monsters: ["Giant Scorpion"]
  },
  {
    kind: "kill",
    questId: 6910,
    map: "void",
    monsters: ["Void Bear"]
  },
  {
    kind: "kill",
    questId: 6911,
    map: "void",
    monsters: ["Void Elemental"]
  },
  {
    kind: "kill",
    questId: 6912,
    map: "void",
    monsters: ["Void Dragon"]
  },
  {
    kind: "mapItem",
    questId: 6907,
    map: "void",
    ids: [6453]
  },
  {
    kind: "mapItem",
    questId: 6909,
    map: "void",
    ids: [6454]
  },
  { kind: "chain", questId: 6914 },
  {
    kind: "kill",
    questId: 9213,
    map: "terminatemple",
    monsters: ["Termina Defender"]
  },
  {
    kind: "kill",
    questId: 9214,
    map: "terminatemple",
    monsters: ["Clandestine Guard"]
  },
  {
    kind: "kill",
    questId: 9225,
    map: "ashray",
    monsters: ["Kitefin Shark Bait"]
  },
  {
    kind: "kill",
    questId: 9226,
    map: "ashray",
    monsters: ["Ashray Fisherman"]
  },
  {
    kind: "kill",
    questId: 9227,
    map: "ashray",
    monsters: ["Ghostly Eel"]
  },
  {
    kind: "kill",
    questId: 9228,
    map: "ashray",
    monsters: ["Stagnant Water"]
  },
  {
    kind: "kill",
    questId: 9229,
    map: "ashray",
    monsters: ["Ashray Fisherman"]
  },
  {
    kind: "kill",
    questId: 9230,
    map: "ashray",
    monsters: ["Kitefin Shark Bait"]
  },
  {
    kind: "kill",
    questId: 9231,
    map: "ashray",
    monsters: ["Ghostly Eel"]
  },
  {
    kind: "kill",
    questId: 9232,
    map: "ashray",
    monsters: ["Stagnant Water"]
  },
  {
    kind: "kill",
    questId: 9234,
    map: "ashray",
    monsters: ["Seafoam Elemental"]
  },
  {
    kind: "kill",
    questId: 9242,
    map: "sunlightzone",
    monsters: ["Blighted Water"]
  },
  {
    kind: "kill",
    questId: 9243,
    map: "sunlightzone",
    monsters: ["Spectral Jellyfish"]
  },
  {
    kind: "kill",
    questId: 9244,
    map: "sunlightzone",
    monsters: ["Blighted Water"]
  },
  {
    kind: "kill",
    questId: 9245,
    map: "sunlightzone",
    monsters: ["Spectral Jellyfish"]
  },
  {
    kind: "kill",
    questId: 9246,
    map: "sunlightzone",
    monsters: ["Spectral Jellyfish", "Blighted Water"]
  },
  {
    kind: "kill",
    questId: 9248,
    map: "sunlightzone",
    monsters: ["Astravian Illusion"]
  },
  {
    kind: "kill",
    questId: 9249,
    map: "sunlightzone",
    monsters: ["Infernal Illusion"]
  },
  {
    kind: "kill",
    questId: 9250,
    map: "sunlightzone",
    monsters: ["Seraphic Illusion"]
  },
  {
    kind: "kill",
    questId: 9251,
    map: "sunlightzone",
    monsters: ["Marine Snow"]
  },
  {
    kind: "kill",
    questId: 9258,
    map: "twilightzone",
    monsters: ["Whale Louse"]
  },
  {
    kind: "kill",
    questId: 9259,
    map: "twilightzone",
    monsters: ["Polymelia Lamprey"]
  },
  {
    kind: "kill",
    questId: 9261,
    map: "twilightzone",
    monsters: ["Whale Louse", "Polymelia Lamprey"]
  },
  {
    kind: "kill",
    questId: 9263,
    map: "twilightzone",
    monsters: ["Decay Spirit"]
  },
  {
    kind: "kill",
    questId: 9264,
    map: "twilightzone",
    monsters: ["Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9266,
    map: "twilightzone",
    monsters: ["Decay Spirit", "Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9270,
    map: "twilightzone",
    monsters: ["Polymelia Lamprey"]
  },
  {
    kind: "kill",
    questId: 9271,
    map: "sunlightzone",
    monsters: ["Blighted Water"]
  },
  {
    kind: "kill",
    questId: 9272,
    map: "sunlightzone",
    monsters: ["Infernal Illusion", "Astravian Illusion"]
  },
  {
    kind: "kill",
    questId: 9273,
    map: "sunlightzone",
    monsters: ["Marine Snow"]
  },
  {
    kind: "kill",
    questId: 9293,
    map: "midnightzone",
    monsters: ["Polymelia Lamprey"]
  },
  {
    kind: "kill",
    questId: 9294,
    map: "midnightzone",
    monsters: ["Vowed ShadowSlayer", "Vowed ShadowSlayer"]
  },
  {
    kind: "kill",
    questId: 9295,
    map: "midnightzone",
    monsters: ["Undead Prisoner"]
  },
  {
    kind: "kill",
    questId: 9296,
    map: "midnightzone",
    monsters: ["Undead Prisoner", "Vowed ShadowSlayer"]
  },
  {
    kind: "kill",
    questId: 9297,
    map: "midnightzone",
    monsters: ["Shadow Viscera"]
  },
  {
    kind: "kill",
    questId: 9298,
    map: "midnightzone",
    monsters: ["Venerated Wraith"]
  },
  {
    kind: "kill",
    questId: 9299,
    map: "midnightzone",
    monsters: ["Shadow Viscera", "Venerated Wraith"]
  },
  {
    kind: "kill",
    questId: 9306,
    map: "abyssalzone",
    monsters: ["Kitefin Shark Bait"]
  },
  {
    kind: "kill",
    questId: 9308,
    map: "abyssalzone",
    monsters: ["Blighted Water"]
  },
  {
    kind: "kill",
    questId: 9309,
    map: "abyssalzone",
    monsters: ["Shadow Viscera"]
  },
  {
    kind: "kill",
    questId: 9310,
    map: "abyssalzone",
    monsters: ["Shadow Viscera", "Blighted Water"]
  },
  {
    kind: "kill",
    questId: 9311,
    map: "abyssalzone",
    monsters: ["Foam Scavenger"]
  },
  {
    kind: "kill",
    questId: 9313,
    map: "abyssalzone",
    monsters: ["Necro Adipocere"]
  },
  {
    kind: "kill",
    questId: 9314,
    map: "abyssalzone",
    monsters: ["Necro Adipocere", "Foam Scavenger"]
  },
  {
    kind: "kill",
    questId: 9329,
    map: "trenchobserve",
    monsters: ["Venerated Wraith"]
  },
  {
    kind: "kill",
    questId: 9332,
    map: "trenchobserve",
    monsters: ["Venerated Wraith"]
  },
  {
    kind: "kill",
    questId: 9333,
    map: "trenchobserve",
    monsters: ["Seabase Turret"]
  },
  {
    kind: "kill",
    questId: 9335,
    map: "trenchobserve",
    monsters: ["Sea Spirit"]
  },
  {
    kind: "kill",
    questId: 9336,
    map: "trenchobserve",
    monsters: ["Necro Adipocere"]
  },
  {
    kind: "kill",
    questId: 9337,
    map: "trenchobserve",
    monsters: ["Necro Adipocere", "Sea Spirit"]
  },
  {
    kind: "kill",
    questId: 9720,
    map: "balemorale",
    monsters: ["Lightguard Paladin"]
  },
  {
    kind: "kill",
    questId: 9721,
    map: "balemorale",
    monsters: ["Noble's Knight"]
  },
  {
    kind: "kill",
    questId: 9723,
    map: "balemorale",
    monsters: ["Chaos Spider"]
  },
  {
    kind: "kill",
    questId: 9726,
    map: "balemorale",
    monsters: ["Chaos Spider", "Chaos Crystal"]
  },
  {
    kind: "kill",
    questId: 9727,
    map: "balemorale",
    monsters: ["Skye Warrior"]
  },
  {
    kind: "kill",
    questId: 9732,
    map: "castleeblana",
    monsters: ["Skye Warrior"]
  },
  {
    kind: "kill",
    questId: 9734,
    map: "castleeblana",
    monsters: ["Skye Executor"]
  },
  {
    kind: "kill",
    questId: 9735,
    map: "castleeblana",
    monsters: ["Skye Warrior", "Skye Executor", "Skye Executor"]
  },
  {
    kind: "kill",
    questId: 9736,
    map: "castleeblana",
    monsters: ["Bananach Raven"]
  },
  {
    kind: "kill",
    questId: 9737,
    map: "castleeblana",
    monsters: ["Fear Gorta"]
  },
  {
    kind: "kill",
    questId: 9738,
    map: "castleeblana",
    monsters: ["Bananach Raven", "Fear Gorta"]
  },
  {
    kind: "kill",
    questId: 9740,
    map: "castleeblana",
    monsters: ["Skye Warrior"]
  },
  {
    kind: "kill",
    questId: 9741,
    map: "castleeblana",
    monsters: ["Warden Indradeep"]
  },
  {
    kind: "kill",
    questId: 9755,
    map: "loughshine",
    monsters: ["Skye Cailleach"]
  },
  {
    kind: "kill",
    questId: 9756,
    map: "loughshine",
    monsters: ["Scorched Elder Yew"]
  },
  {
    kind: "kill",
    questId: 9758,
    map: "loughshine",
    monsters: ["Skye Cailleach", "Scorched Elder Yew"]
  },
  {
    kind: "kill",
    questId: 9760,
    map: "loughshine",
    monsters: ["Skye Executor"]
  },
  {
    kind: "kill",
    questId: 9761,
    map: "loughshine",
    monsters: ["Energy Elemental"]
  },
  {
    kind: "kill",
    questId: 9763,
    map: "loughshine",
    monsters: ["Skye Executor", "Energy Elemental"]
  },
  {
    kind: "kill",
    questId: 9764,
    map: "loughshine",
    monsters: ["Warden Iseul"]
  },
  {
    kind: "kill",
    questId: 9768,
    map: "naoisegrave",
    monsters: ["Bananach Raven"]
  },
  {
    kind: "kill",
    questId: 9769,
    map: "naoisegrave",
    monsters: ["Energy Elemental"]
  },
  {
    kind: "kill",
    questId: 9770,
    map: "naoisegrave",
    monsters: ["Energy Elemental", "Bananach Raven"]
  },
  {
    kind: "kill",
    questId: 9771,
    map: "naoisegrave",
    monsters: ["Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9772,
    map: "naoisegrave",
    monsters: ["Bone Dragonling"]
  },
  {
    kind: "kill",
    questId: 9773,
    map: "naoisegrave",
    monsters: ["Warden Iseul"]
  },
  {
    kind: "kill",
    questId: 9775,
    map: "naoisegrave",
    monsters: ["Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9776,
    map: "naoisegrave",
    monsters: ["Bone Dragonling"]
  },
  {
    kind: "kill",
    questId: 9777,
    map: "naoisegrave",
    monsters: ["Volgritian"]
  },
  {
    kind: "kill",
    questId: 9805,
    map: "liatarahill",
    monsters: ["Undead Garde"]
  },
  {
    kind: "kill",
    questId: 9806,
    map: "liatarahill",
    monsters: ["Garde Wraith"]
  },
  {
    kind: "kill",
    questId: 9807,
    map: "liatarahill",
    monsters: ["Undead Garde", "Garde Wraith"]
  },
  {
    kind: "kill",
    questId: 9809,
    map: "liatarahill",
    monsters: ["King Duncan"]
  },
  {
    kind: "kill",
    questId: 9810,
    map: "liatarahill",
    monsters: ["Undead Garde", "Garde Wraith"]
  },
  {
    kind: "kill",
    questId: 9811,
    map: "liatarahill",
    monsters: ["Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9812,
    map: "liatarahill",
    monsters: ["Skye Cailleach"]
  },
  {
    kind: "kill",
    questId: 9813,
    map: "liatarahill",
    monsters: ["Ice Guardian", "Skye Cailleach"]
  },
  {
    kind: "kill",
    questId: 9814,
    map: "liatarahill",
    monsters: ["Warden Illaria"]
  },
  {
    kind: "kill",
    questId: 9819,
    map: "castlegaheris",
    monsters: ["Energy Elemental"]
  },
  {
    kind: "kill",
    questId: 9820,
    map: "castlegaheris",
    monsters: ["Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9822,
    map: "castlegaheris",
    monsters: ["Energy Elemental", "Ice Guardian"]
  },
  {
    kind: "kill",
    questId: 9823,
    map: "castlegaheris",
    monsters: ["Dark Cage"]
  },
  {
    kind: "kill",
    questId: 9824,
    map: "castlegaheris",
    monsters: ["Glacial Crystal"]
  },
  {
    kind: "kill",
    questId: 9825,
    map: "castlegaheris",
    monsters: ["Elemental Hybrid"]
  },
  {
    kind: "kill",
    questId: 9827,
    map: "castlegaheris",
    monsters: ["Glacial Crystal", "Elemental Hybrid"]
  },
  {
    kind: "kill",
    questId: 9828,
    map: "castlegaheris",
    monsters: ["Thundersnow Storm"]
  },
  {
    kind: "kill",
    questId: 10359,
    map: "mountmaleno",
    monsters: ["Soul Raven"]
  },
  {
    kind: "kill",
    questId: 10375,
    map: "sanctuaryaiwass",
    monsters: ["Dove"]
  },
  {
    kind: "kill",
    questId: 10376,
    map: "sanctuaryaiwass",
    monsters: ["Albedo Elemental"]
  },
  {
    kind: "kill",
    questId: 10377,
    map: "sanctuaryaiwass",
    monsters: ["Albedo Match"]
  },
  {
    kind: "kill",
    questId: 10381,
    map: "sanctuaryaiwass",
    monsters: ["Albedo Match"]
  },
  {
    kind: "kill",
    questId: 10384,
    map: "sanctuaryaiwass",
    monsters: ["Anima Animus Aiwass"]
  },
  {
    kind: "kill",
    questId: 10714,
    map: "rubedopeak",
    monsters: ["Rubedo Match"]
  },
  {
    kind: "mapItem",
    questId: 9213,
    map: "terminatemple",
    ids: [11625, 11626, 11627]
  },
  {
    kind: "mapItem",
    questId: 9214,
    map: "terminatemple",
    ids: [11628, 11629, 11630]
  },
  {
    kind: "mapItem",
    questId: 9351,
    map: "terminatemple",
    ids: [12050, 12051]
  },
  {
    kind: "mapItem",
    questId: 9851,
    map: "terminatemple",
    ids: [13541, 13542]
  },
  {
    kind: "mapItem",
    questId: 9226,
    map: "ashray",
    ids: [11663, 11664]
  },
  { kind: "mapItem", questId: 9228, map: "ashray", ids: [11665] },
  { kind: "mapItem", questId: 9229, map: "ashray", ids: [11666] },
  { kind: "mapItem", questId: 9231, map: "ashray", ids: [11667] },
  { kind: "mapItem", questId: 9232, map: "ashray", ids: [11668] },
  {
    kind: "mapItem",
    questId: 9233,
    map: "ashray",
    ids: [11669, 11670]
  },
  {
    kind: "mapItem",
    questId: 9244,
    map: "sunlightzone",
    ids: [11705, 11706]
  },
  {
    kind: "mapItem",
    questId: 9245,
    map: "sunlightzone",
    ids: [11707, 3]
  },
  {
    kind: "mapItem",
    questId: 9247,
    map: "sunlightzone",
    ids: [11708, 11709, 11710]
  },
  { kind: "mapItem", questId: 9248, map: "sunlightzone", ids: [11711] },
  {
    kind: "mapItem",
    questId: 9249,
    map: "sunlightzone",
    ids: [11712, 5]
  },
  { kind: "mapItem", questId: 9250, map: "sunlightzone", ids: [11713] },
  { kind: "mapItem", questId: 9260, map: "twilightzone", ids: [11749] },
  {
    kind: "mapItem",
    questId: 9260,
    map: "twilightzone",
    ids: [11750, 4]
  },
  {
    kind: "mapItem",
    questId: 9262,
    map: "twilightzone",
    ids: [11751, 11752]
  },
  {
    kind: "mapItem",
    questId: 9265,
    map: "twilightzone",
    ids: [11753, 11754, 11755]
  },
  { kind: "mapItem", questId: 9268, map: "twilightzone", ids: [11756] },
  {
    kind: "mapItem",
    questId: 9292,
    map: "midnightzone",
    ids: [11842, 11843, 11844]
  },
  { kind: "mapItem", questId: 9293, map: "midnightzone", ids: [11845] },
  { kind: "mapItem", questId: 9295, map: "midnightzone", ids: [11846] },
  { kind: "mapItem", questId: 9296, map: "midnightzone", ids: [11847] },
  {
    kind: "mapItem",
    questId: 9297,
    map: "midnightzone",
    ids: [11848, 3]
  },
  {
    kind: "mapItem",
    questId: 9300,
    map: "midnightzone",
    ids: [11849, 4]
  },
  { kind: "mapItem", questId: 9300, map: "midnightzone", ids: [11850] },
  { kind: "mapItem", questId: 9306, map: "abyssalzone", ids: [11914] },
  {
    kind: "mapItem",
    questId: 9307,
    map: "abyssalzone",
    ids: [11893, 6]
  },
  { kind: "mapItem", questId: 9307, map: "abyssalzone", ids: [11894] },
  {
    kind: "mapItem",
    questId: 9309,
    map: "abyssalzone",
    ids: [11895, 3]
  },
  { kind: "mapItem", questId: 9311, map: "abyssalzone", ids: [11896] },
  {
    kind: "mapItem",
    questId: 9312,
    map: "abyssalzone",
    ids: [11897, 6]
  },
  { kind: "mapItem", questId: 9312, map: "abyssalzone", ids: [11898] },
  { kind: "mapItem", questId: 9314, map: "abyssalzone", ids: [11899] },
  {
    kind: "mapItem",
    questId: 9329,
    map: "trenchobserve",
    ids: [11975]
  },
  {
    kind: "mapItem",
    questId: 9331,
    map: "trenchobserve",
    ids: [11977, 4]
  },
  {
    kind: "mapItem",
    questId: 9333,
    map: "trenchobserve",
    ids: [11978, 4]
  },
  {
    kind: "mapItem",
    questId: 9334,
    map: "trenchobserve",
    ids: [11979, 11981]
  },
  {
    kind: "mapItem",
    questId: 9334,
    map: "trenchobserve",
    ids: [11980, 2]
  },
  {
    kind: "mapItem",
    questId: 9337,
    map: "trenchobserve",
    ids: [11982]
  },
  { kind: "mapItem", questId: 9719, map: "balemorale", ids: [12933] },
  {
    kind: "mapItem",
    questId: 9722,
    map: "balemorale",
    ids: [13177, 13178]
  },
  {
    kind: "mapItem",
    questId: 9723,
    map: "balemorale",
    ids: [13179, 13180]
  },
  {
    kind: "mapItem",
    questId: 9725,
    map: "balemorale",
    ids: [13181, 5]
  },
  { kind: "mapItem", questId: 9725, map: "balemorale", ids: [13182] },
  { kind: "mapItem", questId: 9726, map: "balemorale", ids: [13183] },
  {
    kind: "mapItem",
    questId: 9728,
    map: "balemorale",
    ids: [13184, 7]
  },
  { kind: "mapItem", questId: 9728, map: "balemorale", ids: [13185] },
  {
    kind: "mapItem",
    questId: 9733,
    map: "castleeblana",
    ids: [13202, 5]
  },
  { kind: "mapItem", questId: 9733, map: "castleeblana", ids: [13203] },
  { kind: "mapItem", questId: 9735, map: "castleeblana", ids: [13204] },
  { kind: "mapItem", questId: 9737, map: "castleeblana", ids: [13205] },
  { kind: "mapItem", questId: 9738, map: "castleeblana", ids: [13206] },
  {
    kind: "mapItem",
    questId: 9739,
    map: "castleeblana",
    ids: [13207, 13208]
  },
  { kind: "mapItem", questId: 9755, map: "loughshine", ids: [13273] },
  {
    kind: "mapItem",
    questId: 9757,
    map: "loughshine",
    ids: [13274, 5]
  },
  { kind: "mapItem", questId: 9757, map: "loughshine", ids: [13275] },
  { kind: "mapItem", questId: 9759, map: "loughshine", ids: [13276] },
  { kind: "mapItem", questId: 9761, map: "loughshine", ids: [13277] },
  {
    kind: "mapItem",
    questId: 9762,
    map: "loughshine",
    ids: [13278, 5]
  },
  { kind: "mapItem", questId: 9762, map: "loughshine", ids: [13279] },
  { kind: "mapItem", questId: 9763, map: "loughshine", ids: [13280] },
  { kind: "mapItem", questId: 9768, map: "naoisegrave", ids: [13296] },
  { kind: "mapItem", questId: 9769, map: "naoisegrave", ids: [13297] },
  {
    kind: "mapItem",
    questId: 9774,
    map: "naoisegrave",
    ids: [13298, 13299]
  },
  { kind: "mapItem", questId: 9770, map: "naoisegrave", ids: [13300] },
  { kind: "mapItem", questId: 9773, map: "naoisegrave", ids: [13301] },
  {
    kind: "mapItem",
    questId: 9808,
    map: "liatarahill",
    ids: [13364, 13365]
  },
  { kind: "mapItem", questId: 9810, map: "liatarahill", ids: [13368] },
  { kind: "mapItem", questId: 9811, map: "liatarahill", ids: [13366] },
  { kind: "mapItem", questId: 9813, map: "liatarahill", ids: [13367] },
  {
    kind: "mapItem",
    questId: 9819,
    map: "castlegaheris",
    ids: [13378]
  },
  {
    kind: "mapItem",
    questId: 9821,
    map: "castlegaheris",
    ids: [13379, 13380, 13381]
  },
  {
    kind: "mapItem",
    questId: 9826,
    map: "castlegaheris",
    ids: [13382, 13383]
  },
  { kind: "mapItem", questId: 9832, map: "coldthunder", ids: [13403] },
  {
    kind: "mapItem",
    questId: 10347,
    map: "thelimacity",
    ids: [14770, 14771]
  },
  {
    kind: "mapItem",
    questId: 10349,
    map: "thelimacity",
    ids: [14772, 14773]
  },
  { kind: "mapItem", questId: 10351, map: "thelimacity", ids: [14774] },
  {
    kind: "mapItem",
    questId: 10352,
    map: "thelimacity",
    ids: [14775, 4]
  },
  { kind: "mapItem", questId: 10359, map: "mountmaleno", ids: [14805] },
  {
    kind: "mapItem",
    questId: 10363,
    map: "mountmaleno",
    ids: [14808, 14809]
  },
  { kind: "mapItem", questId: 10364, map: "mountmaleno", ids: [14810] },
  { kind: "mapItem", questId: 10365, map: "mountmaleno", ids: [14811] },
  { kind: "mapItem", questId: 10366, map: "mountmaleno", ids: [14812] },
  {
    kind: "mapItem",
    questId: 10414,
    map: "forgealbedo",
    ids: [14959, 14960, 14961]
  },
  { kind: "mapItem", questId: 10415, map: "forgealbedo", ids: [14962] },
  {
    kind: "mapItem",
    questId: 10416,
    map: "forgealbedo",
    ids: [14963, 4]
  },
  {
    kind: "mapItem",
    questId: 10417,
    map: "forgealbedo",
    ids: [14964, 4]
  },
  {
    kind: "mapItem",
    questId: 10420,
    map: "forgealbedo",
    ids: [14965, 6]
  },
  { kind: "mapItem", questId: 10609, map: "fortluma", ids: [15542] },
  { kind: "mapItem", questId: 10610, map: "fortluma", ids: [15543] },
  {
    kind: "mapItem",
    questId: 10611,
    map: "fortluma",
    ids: [15544, 15545]
  },
  { kind: "mapItem", questId: 10614, map: "fortluma", ids: [15546] },
  { kind: "mapItem", questId: 10615, map: "fortluma", ids: [15547] },
  { kind: "mapItem", questId: 10617, map: "fortluma", ids: [15548] },
  {
    kind: "mapItem",
    questId: 10678,
    map: "warwickforest",
    ids: [15656]
  },
  {
    kind: "mapItem",
    questId: 10679,
    map: "warwickforest",
    ids: [15657]
  },
  {
    kind: "mapItem",
    questId: 10681,
    map: "warwickforest",
    ids: [15658]
  },
  {
    kind: "mapItem",
    questId: 10682,
    map: "warwickforest",
    ids: [15659]
  },
  {
    kind: "mapItem",
    questId: 10683,
    map: "warwickforest",
    ids: [15660]
  },
  {
    kind: "mapItem",
    questId: 10684,
    map: "warwickforest",
    ids: [15661]
  },
  {
    kind: "mapItem",
    questId: 10685,
    map: "warwickforest",
    ids: [15662, 5]
  },
  {
    kind: "kill",
    questId: 1068,
    map: "doomwood",
    monsters: ["Undead Paladin"]
  },
  {
    kind: "kill",
    questId: 1083,
    map: "maul",
    monsters: ["Personal Chopper", "Slimeskull"]
  },
  {
    kind: "kill",
    questId: 1085,
    map: "maul",
    monsters: ["Creature Creation"]
  },
  {
    kind: "kill",
    questId: 1088,
    map: "doomwood",
    monsters: ["Doomwood Soldier", "Doomwood Soldier"]
  },
  {
    kind: "kill",
    questId: 1112,
    map: "necrou",
    monsters: ["Ghoul"]
  },
  {
    kind: "kill",
    questId: 1116,
    map: "necrou",
    monsters: ["Doomwood Soldier", "Doomwood Soldier"]
  },
  {
    kind: "kill",
    questId: 1117,
    map: "necrou",
    monsters: ["Doomwood Treeant"]
  },
  {
    kind: "kill",
    questId: 1118,
    map: "necrou",
    monsters: ["Slimeskull"]
  },
  {
    kind: "kill",
    questId: 1120,
    map: "necrou",
    monsters: ["Doomwood Soldier"]
  },
  {
    kind: "kill",
    questId: 1121,
    map: "necrou",
    monsters: ["Shelleton", "Necro U"]
  },
  {
    kind: "kill",
    questId: 1170,
    map: "vordredboss",
    monsters: ["Ultra Vordred"]
  },
  {
    kind: "kill",
    questId: 1127,
    map: "temple",
    monsters: ["Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 1130,
    map: "temple",
    monsters: ["Doomwood Ectomancer", "Skeletal Fire Mage"]
  },
  {
    kind: "kill",
    questId: 1131,
    map: "temple",
    monsters: ["Ghoul"]
  },
  {
    kind: "kill",
    questId: 1132,
    map: "temple",
    monsters: ["Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 1133,
    map: "temple",
    monsters: ["Sanguine Souleater"]
  },
  {
    kind: "kill",
    questId: 1134,
    map: "temple",
    monsters: ["SlimeSkull", "Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 1137,
    map: "temple",
    monsters: ["Doomwood Soldier"]
  },
  {
    kind: "kill",
    questId: 1138,
    map: "temple",
    monsters: ["Ghoul"]
  },
  {
    kind: "kill",
    questId: 1140,
    map: "temple",
    monsters: ["Doomwood Bonemuncher", "Skeleton"]
  },
  {
    kind: "kill",
    questId: 1141,
    map: "temple",
    monsters: ["Undead Mage", "Skeletal Fire Mage"]
  },
  {
    kind: "kill",
    questId: 1142,
    map: "temple",
    monsters: ["Shelleton", "Skeleton"]
  },
  {
    kind: "kill",
    questId: 1143,
    map: "temple",
    monsters: ["Lich"]
  },
  {
    kind: "kill",
    questId: 1144,
    map: "temple",
    monsters: ["Dracolich"]
  },
  {
    kind: "kill",
    questId: 1146,
    map: "temple",
    monsters: ["Doomwood Bonemuncher"]
  },
  {
    kind: "kill",
    questId: 1147,
    map: "temple",
    monsters: ["Cryptkeeper Lich"]
  },
  {
    kind: "kill",
    questId: 1156,
    map: "lab",
    monsters: ["Ant Giant"]
  },
  {
    kind: "kill",
    questId: 1157,
    map: "lab",
    monsters: ["Ant Giant"]
  },
  {
    kind: "kill",
    questId: 1158,
    map: "lab",
    monsters: ["Ant Giant"]
  },
  {
    kind: "kill",
    questId: 1159,
    map: "lab",
    monsters: ["Ant Giant"]
  },
  {
    kind: "kill",
    questId: 1161,
    map: "lab",
    monsters: ["Giant Scorpion"]
  },
  {
    kind: "kill",
    questId: 1162,
    map: "lab",
    monsters: ["Ant Giant"]
  },
  {
    kind: "kill",
    questId: 2045,
    map: "necrodungeon",
    monsters: ["Necropolis Soldier"]
  },
  {
    kind: "kill",
    questId: 2047,
    map: "necrodungeon",
    monsters: ["SlimeSkull"]
  },
  {
    kind: "kill",
    questId: 2048,
    map: "necrodungeon",
    monsters: ["Necropolis Soldier", "Ghoul"]
  },
  {
    kind: "kill",
    questId: 2050,
    map: "necrodungeon",
    monsters: ["SlimeSkull", "Necropolis Soldier"]
  },
  {
    kind: "kill",
    questId: 2052,
    map: "necrodungeon",
    monsters: ["SlimeSkull"]
  },
  {
    kind: "kill",
    questId: 2053,
    map: "necrodungeon",
    monsters: ["Doom Crawler"]
  },
  {
    kind: "kill",
    questId: 2054,
    map: "necrodungeon",
    monsters: ["Ghoul"]
  },
  {
    kind: "kill",
    questId: 2055,
    map: "necrodungeon",
    monsters: ["Necropolis Soldier"]
  },
  {
    kind: "kill",
    questId: 2058,
    map: "necrodungeon",
    monsters: ["Necropolis Soldier"]
  },
  {
    kind: "kill",
    questId: 2070,
    map: "necrocavern",
    monsters: ["Shadowstone Elemental"]
  },
  {
    kind: "kill",
    questId: 2071,
    map: "necrocavern",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 2072,
    map: "necrocavern",
    monsters: ["Shadow Imp", "Shadowstone Elemental"]
  },
  {
    kind: "kill",
    questId: 2073,
    map: "necrocavern",
    monsters: ["Shadowstone Elemental"]
  },
  {
    kind: "kill",
    questId: 2074,
    map: "necrocavern",
    monsters: ["Shadowstone Elemental", "Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 2076,
    map: "necrocavern",
    monsters: ["Shadow Dragon"]
  },
  {
    kind: "kill",
    questId: 2077,
    map: "necrocavern",
    monsters: ["Shadowstone Support"]
  },
  {
    kind: "kill",
    questId: 7589,
    map: "thorngarde",
    monsters: ["CryptHacker", "NecroDrone", "NecroMech"]
  },
  {
    kind: "kill",
    questId: 7590,
    map: "thorngarde",
    monsters: ["NecroMech"]
  },
  {
    kind: "kill",
    questId: 7591,
    map: "thorngarde",
    monsters: ["NecroMech"]
  },
  {
    kind: "kill",
    questId: 7592,
    map: "thorngarde",
    monsters: ["CryptHacker"]
  },
  {
    kind: "kill",
    questId: 7595,
    map: "thorngarde",
    monsters: ["NecroDrone"]
  },
  {
    kind: "kill",
    questId: 7596,
    map: "thorngarde",
    monsters: ["NecroMech"]
  },
  {
    kind: "kill",
    questId: 7597,
    map: "thorngarde",
    monsters: ["CryptHacker"]
  },
  {
    kind: "kill",
    questId: 7598,
    map: "thorngarde",
    monsters: ["CryptHacker", "NecroDrone"]
  },
  {
    kind: "kill",
    questId: 7600,
    map: "thorngarde",
    monsters: ["Zyrus the BioKnight"]
  },
  {
    kind: "kill",
    questId: 7603,
    map: "stonewood",
    monsters: ["NecroDrone"]
  },
  {
    kind: "kill",
    questId: 7604,
    map: "stonewood",
    monsters: ["Doomwood Treeant"]
  },
  {
    kind: "kill",
    questId: 7605,
    map: "stonewood",
    monsters: ["NecroDrone", "NecroMech"]
  },
  {
    kind: "kill",
    questId: 7607,
    map: "stonewood",
    monsters: ["BioKnight"]
  },
  {
    kind: "kill",
    questId: 7609,
    map: "techdungeon",
    monsters: ["NecroMech"]
  },
  {
    kind: "kill",
    questId: 7610,
    map: "techdungeon",
    monsters: ["Rotting Rat"]
  },
  {
    kind: "kill",
    questId: 7614,
    map: "techdungeon",
    monsters: ["DoomBorg Guard"]
  },
  {
    kind: "kill",
    questId: 7615,
    map: "techdungeon",
    monsters: ["Kalron the Cryptborg"]
  },
  {
    kind: "kill",
    questId: 7632,
    map: "stonewooddeep",
    monsters: ["CryptHacker"]
  },
  {
    kind: "kill",
    questId: 7636,
    map: "stonewooddeep",
    monsters: ["Sir Kut"]
  },
  {
    kind: "kill",
    questId: 7637,
    map: "techfortress",
    monsters: ["CryptHacker"]
  },
  {
    kind: "kill",
    questId: 7638,
    map: "techfortress",
    monsters: ["NecroDrone"]
  },
  {
    kind: "kill",
    questId: 7639,
    map: "techfortress",
    monsters: ["CryptHacker"]
  },
  {
    kind: "kill",
    questId: 7640,
    map: "techfortress",
    monsters: ["NecroDrone"]
  },
  {
    kind: "kill",
    questId: 7642,
    map: "techfortress",
    monsters: ["NecroMech"]
  },
  {
    kind: "kill",
    questId: 7643,
    map: "techfortress",
    monsters: ["CPU"]
  },
  {
    kind: "kill",
    questId: 7644,
    map: "techfortress",
    monsters: ["DoomBorg Guard"]
  },
  {
    kind: "kill",
    questId: 7645,
    map: "techfortress",
    monsters: ["DoomBorg Guard"]
  },
  {
    kind: "kill",
    questId: 7646,
    map: "techfortress",
    monsters: ["Vortrix"]
  },
  {
    kind: "kill",
    questId: 7653,
    map: "techfortress",
    monsters: ["MechaVortrix"]
  },
  {
    kind: "kill",
    questId: 2093,
    map: "doomhaven",
    monsters: ["Skeletal Soldier"]
  },
  {
    kind: "kill",
    questId: 2094,
    map: "doomhaven",
    monsters: ["Skeletal Ice Mage"]
  },
  {
    kind: "kill",
    questId: 2095,
    map: "doomhaven",
    monsters: ["Angry Undead Giant"]
  },
  {
    kind: "kill",
    questId: 2097,
    map: "doomhaven",
    monsters: ["Skeletal Viking"]
  },
  {
    kind: "kill",
    questId: 2124,
    map: "doomwar",
    monsters: ["Angry Zombie"]
  },
  {
    kind: "kill",
    questId: 2125,
    map: "doomwar",
    monsters: ["Zombie Dragon"]
  },
  {
    kind: "kill",
    questId: 2127,
    map: "doomwar",
    monsters: ["Zombie King Alteon"]
  },
  {
    kind: "kill",
    questId: 2128,
    map: "sepulchure",
    monsters: ["Dark Sepulchure"]
  },
  {
    kind: "mapItem",
    questId: 1065,
    map: "doomwood",
    ids: [423, 5]
  },
  { kind: "mapItem", questId: 1067, map: "doomwood", ids: [422] },
  { kind: "mapItem", questId: 1081, map: "maul", ids: [435] },
  { kind: "mapItem", questId: 1082, map: "maul", ids: [434, 13] },
  { kind: "mapItem", questId: 1091, map: "necrotower", ids: [438] },
  { kind: "mapItem", questId: 1113, map: "necrou", ids: [450, 5] },
  { kind: "mapItem", questId: 1115, map: "necrou", ids: [449, 6] },
  { kind: "mapItem", questId: 1117, map: "necrou", ids: [451, 3] },
  { kind: "mapItem", questId: 1118, map: "necrou", ids: [452, 5] },
  { kind: "mapItem", questId: 1119, map: "necrou", ids: [453, 5] },
  { kind: "mapItem", questId: 1121, map: "necrou", ids: [454, 3] },
  { kind: "mapItem", questId: 1121, map: "necrou", ids: [455, 3] },
  { kind: "mapItem", questId: 1129, map: "temple", ids: [458, 12] },
  { kind: "mapItem", questId: 1131, map: "temple", ids: [459, 8] },
  { kind: "mapItem", questId: 1133, map: "temple", ids: [460, 10] },
  { kind: "mapItem", questId: 1135, map: "temple", ids: [461, 12] },
  { kind: "mapItem", questId: 1139, map: "temple", ids: [462, 10] },
  { kind: "mapItem", questId: 1142, map: "temple", ids: [463, 6] },
  { kind: "mapItem", questId: 1145, map: "temple", ids: [464, 10] },
  { kind: "mapItem", questId: 1155, map: "lab", ids: [488] },
  { kind: "mapItem", questId: 1157, map: "lab", ids: [489, 3] },
  { kind: "mapItem", questId: 1160, map: "lab", ids: [490, 6] },
  { kind: "mapItem", questId: 1161, map: "lab", ids: [491, 7] },
  { kind: "mapItem", questId: 1163, map: "lab", ids: [492, 10] },
  { kind: "mapItem", questId: 1164, map: "mountain", ids: [493] },
  { kind: "mapItem", questId: 1169, map: "mountain", ids: [494] },
  {
    kind: "mapItem",
    questId: 2045,
    map: "necrodungeon",
    ids: [1001]
  },
  {
    kind: "mapItem",
    questId: 2046,
    map: "necrodungeon",
    ids: [1015, 5]
  },
  {
    kind: "mapItem",
    questId: 2046,
    map: "necrodungeon",
    ids: [1002]
  },
  {
    kind: "mapItem",
    questId: 2047,
    map: "necrodungeon",
    ids: [1003]
  },
  {
    kind: "mapItem",
    questId: 2048,
    map: "necrodungeon",
    ids: [1004]
  },
  {
    kind: "mapItem",
    questId: 2050,
    map: "necrodungeon",
    ids: [1005]
  },
  {
    kind: "mapItem",
    questId: 2050,
    map: "necrodungeon",
    ids: [1016, 3]
  },
  {
    kind: "mapItem",
    questId: 2051,
    map: "necrodungeon",
    ids: [1017, 5]
  },
  {
    kind: "mapItem",
    questId: 2051,
    map: "necrodungeon",
    ids: [1006]
  },
  {
    kind: "mapItem",
    questId: 2052,
    map: "necrodungeon",
    ids: [1007]
  },
  {
    kind: "mapItem",
    questId: 2053,
    map: "necrodungeon",
    ids: [1008]
  },
  {
    kind: "mapItem",
    questId: 2054,
    map: "necrodungeon",
    ids: [1009]
  },
  {
    kind: "mapItem",
    questId: 2054,
    map: "necrodungeon",
    ids: [1018, 8]
  },
  {
    kind: "mapItem",
    questId: 2055,
    map: "necrodungeon",
    ids: [1010]
  },
  {
    kind: "mapItem",
    questId: 2057,
    map: "necrodungeon",
    ids: [1016, 5]
  },
  {
    kind: "mapItem",
    questId: 2057,
    map: "necrodungeon",
    ids: [1011]
  },
  {
    kind: "mapItem",
    questId: 2058,
    map: "necrodungeon",
    ids: [1012]
  },
  {
    kind: "mapItem",
    questId: 2059,
    map: "necrodungeon",
    ids: [1019, 5]
  },
  {
    kind: "mapItem",
    questId: 2059,
    map: "necrodungeon",
    ids: [1013]
  },
  {
    kind: "mapItem",
    questId: 2061,
    map: "necrodungeon",
    ids: [1020]
  },
  {
    kind: "mapItem",
    questId: 2071,
    map: "necrocavern",
    ids: [1042, 6]
  },
  {
    kind: "mapItem",
    questId: 2072,
    map: "necrocavern",
    ids: [1044]
  },
  {
    kind: "mapItem",
    questId: 2072,
    map: "necrocavern",
    ids: [1045, 3]
  },
  {
    kind: "mapItem",
    questId: 2075,
    map: "necrocavern",
    ids: [1043, 5]
  },
  {
    kind: "mapItem",
    questId: 7590,
    map: "thorngarde",
    ids: [7485, 5]
  },
  {
    kind: "mapItem",
    questId: 7594,
    map: "thorngarde",
    ids: [7486]
  },
  {
    kind: "mapItem",
    questId: 7595,
    map: "thorngarde",
    ids: [7487, 7488]
  },
  {
    kind: "mapItem",
    questId: 7596,
    map: "thorngarde",
    ids: [7489, 7490, 7491]
  },
  {
    kind: "mapItem",
    questId: 7604,
    map: "stonewood",
    ids: [7510, 6]
  },
  {
    kind: "mapItem",
    questId: 7606,
    map: "stonewood",
    ids: [7511, 4]
  },
  { kind: "mapItem", questId: 7606, map: "stonewood", ids: [7512] },
  { kind: "mapItem", questId: 7608, map: "stonewood", ids: [7513] },
  {
    kind: "mapItem",
    questId: 7610,
    map: "techdungeon",
    ids: [7515, 6]
  },
  {
    kind: "mapItem",
    questId: 7612,
    map: "techdungeon",
    ids: [7514]
  },
  {
    kind: "mapItem",
    questId: 7613,
    map: "techdungeon",
    ids: [7516]
  },
  {
    kind: "mapItem",
    questId: 7614,
    map: "techdungeon",
    ids: [7517]
  },
  {
    kind: "mapItem",
    questId: 7626,
    map: "stonewooddeep",
    ids: [7530, 8]
  },
  {
    kind: "mapItem",
    questId: 7634,
    map: "stonewooddeep",
    ids: [7532]
  },
  {
    kind: "mapItem",
    questId: 7635,
    map: "stonewooddeep",
    ids: [7533]
  },
  {
    kind: "mapItem",
    questId: 7640,
    map: "techfortress",
    ids: [7561]
  },
  {
    kind: "mapItem",
    questId: 2096,
    map: "doomhaven",
    ids: [1174, 5]
  },
  { kind: "chain", questId: 1080 },
  { kind: "chain", questId: 1089 },
  { kind: "chain", questId: 1154 },
  {
    kind: "kill",
    questId: 9379,
    map: "yokaipirate",
    monsters: ["Disguised Pirate"]
  },
  {
    kind: "kill",
    questId: 9381,
    map: "yokaipirate",
    monsters: ["Disguised Pirate"]
  },
  {
    kind: "kill",
    questId: 9382,
    map: "yokaipirate",
    monsters: ["Noble Owl"]
  },
  {
    kind: "kill",
    questId: 9385,
    map: "yokaipirate",
    monsters: ["Noble Owl"]
  },
  {
    kind: "kill",
    questId: 9397,
    map: "yokaitreasure",
    monsters: ["Needle Mouth"]
  },
  {
    kind: "kill",
    questId: 9398,
    map: "yokaitreasure",
    monsters: ["Quicksilver"]
  },
  {
    kind: "kill",
    questId: 9400,
    map: "yokaitreasure",
    monsters: ["Imperial Warrior"]
  },
  {
    kind: "kill",
    questId: 9401,
    map: "yokaitreasure",
    monsters: ["Needle Mouth"]
  },
  {
    kind: "kill",
    questId: 9402,
    map: "yokaitreasure",
    monsters: ["Imperial Warrior"]
  },
  {
    kind: "kill",
    questId: 9404,
    map: "yokaitreasure",
    monsters: ["Needle Mouth", "Imperial Warrior"]
  },
  {
    kind: "kill",
    questId: 9405,
    map: "yokaitreasure",
    monsters: ["Admiral Zheng"]
  },
  {
    kind: "kill",
    questId: 9590,
    map: "hakuvillage",
    monsters: ["Tsukumogami"]
  },
  {
    kind: "kill",
    questId: 9591,
    map: "hakuvillage",
    monsters: ["Mountain Oni"]
  },
  {
    kind: "kill",
    questId: 9592,
    map: "hakuvillage",
    monsters: ["Tsukumogami"]
  },
  {
    kind: "kill",
    questId: 9593,
    map: "hakuvillage",
    monsters: ["Kitsune Spy"]
  },
  {
    kind: "kill",
    questId: 9594,
    map: "hakuvillage",
    monsters: ["Nagami"]
  },
  {
    kind: "kill",
    questId: 9595,
    map: "hakuvillage",
    monsters: ["Kitsune Spy"]
  },
  {
    kind: "kill",
    questId: 9596,
    map: "hakuvillage",
    monsters: ["Mountain Oni"]
  },
  {
    kind: "kill",
    questId: 9597,
    map: "hakuvillage",
    monsters: ["Tsukumogami"]
  },
  {
    kind: "kill",
    questId: 9598,
    map: "hakuvillage",
    monsters: ["Nagami"]
  },
  {
    kind: "kill",
    questId: 9599,
    map: "hakuvillage",
    monsters: ["Dai Tengu"]
  },
  {
    kind: "kill",
    questId: 9601,
    map: "hakuwar",
    monsters: ["Dark Zmey"]
  },
  {
    kind: "kill",
    questId: 9603,
    map: "hakuwar",
    monsters: ["Kitsune Spy"]
  },
  {
    kind: "kill",
    questId: 9604,
    map: "hakuwar",
    monsters: ["Dark Zmey"]
  },
  {
    kind: "kill",
    questId: 9605,
    map: "hakuwar",
    monsters: ["Mountain Oni"]
  },
  {
    kind: "kill",
    questId: 9606,
    map: "hakuwar",
    monsters: ["Zmey Warrior"]
  },
  {
    kind: "kill",
    questId: 9607,
    map: "hakuwar",
    monsters: ["Zakhvatchik"]
  },
  {
    kind: "kill",
    questId: 9668,
    map: "yokaiportal",
    monsters: ["Oni Spirits"]
  },
  {
    kind: "kill",
    questId: 9670,
    map: "yokaiportal",
    monsters: ["Kitsune Spirits"]
  },
  {
    kind: "kill",
    questId: 9672,
    map: "yokaiportal",
    monsters: ["Snake Shikigami"]
  },
  {
    kind: "kill",
    questId: 9673,
    map: "yokaiportal",
    monsters: ["Puppeted Dragonling"]
  },
  {
    kind: "kill",
    questId: 9675,
    map: "yokaiportal",
    monsters: ["Kitsune Spirits", "Puppeted Dragonling"]
  },
  {
    kind: "kill",
    questId: 9676,
    map: "yokaiportal",
    monsters: ["Kitsune Kukol'nyy"]
  },
  {
    kind: "kill",
    questId: 9680,
    map: "yokairealm",
    monsters: ["Snake Shikigami"]
  },
  {
    kind: "kill",
    questId: 9681,
    map: "yokairealm",
    monsters: ["Snake Shikigami"]
  },
  {
    kind: "kill",
    questId: 9682,
    map: "yokairealm",
    monsters: ["Puppeted Dragonling"]
  },
  {
    kind: "kill",
    questId: 9683,
    map: "yokairealm",
    monsters: ["Dark Zmey"]
  },
  {
    kind: "kill",
    questId: 9684,
    map: "yokairealm",
    monsters: ["Puppeted Dragonling", "Dark Zmey"]
  },
  {
    kind: "kill",
    questId: 9685,
    map: "yokairealm",
    monsters: ["Oni Spirits"]
  },
  {
    kind: "kill",
    questId: 9686,
    map: "yokairealm",
    monsters: ["Kitsune Spirits"]
  },
  {
    kind: "kill",
    questId: 9687,
    map: "yokairealm",
    monsters: ["Oni Spirits", "Kitsune Spirits"]
  },
  {
    kind: "kill",
    questId: 9688,
    map: "yokairealm",
    monsters: ["Inugami"]
  },
  {
    kind: "kill",
    questId: 9689,
    map: "yokairealm",
    monsters: ["Mikoto Kukol'nyy"]
  },
  {
    kind: "kill",
    questId: 9798,
    map: "lavarun",
    monsters: ["Firestorm Tiger"]
  },
  {
    kind: "kill",
    questId: 9799,
    map: "dreampalace",
    monsters: ["Flaming Harpy"]
  },
  {
    kind: "kill",
    questId: 9801,
    map: "hakuwar",
    monsters: ["Zakhvatchik", "Zmey Warrior"]
  },
  {
    kind: "kill",
    questId: 9802,
    map: "novashrine",
    monsters: ["Nova Empyrean"]
  },
  {
    kind: "mapItem",
    questId: 9378,
    map: "yokaipirate",
    ids: [12133, 12134, 12135]
  },
  {
    kind: "mapItem",
    questId: 9380,
    map: "yokaipirate",
    ids: [12136, 12137]
  },
  {
    kind: "mapItem",
    questId: 9383,
    map: "yokaipirate",
    ids: [12138, 7]
  },
  {
    kind: "mapItem",
    questId: 9384,
    map: "yokaipirate",
    ids: [12139]
  },
  {
    kind: "mapItem",
    questId: 9396,
    map: "yokaitreasure",
    ids: [12162, 12163, 12164]
  },
  {
    kind: "mapItem",
    questId: 9399,
    map: "yokaitreasure",
    ids: [12165, 12166]
  },
  {
    kind: "mapItem",
    questId: 9403,
    map: "yokaitreasure",
    ids: [12167, 4]
  },
  {
    kind: "mapItem",
    questId: 9591,
    map: "hakuvillage",
    ids: [12706]
  },
  {
    kind: "mapItem",
    questId: 9592,
    map: "hakuvillage",
    ids: [12707]
  },
  {
    kind: "mapItem",
    questId: 9593,
    map: "hakuvillage",
    ids: [12708, 12709]
  },
  {
    kind: "mapItem",
    questId: 9594,
    map: "hakuvillage",
    ids: [12710]
  },
  {
    kind: "mapItem",
    questId: 9669,
    map: "yokaiportal",
    ids: [12985, 12986]
  },
  {
    kind: "mapItem",
    questId: 9671,
    map: "yokaiportal",
    ids: [12987, 12988]
  },
  {
    kind: "mapItem",
    questId: 9672,
    map: "yokaiportal",
    ids: [12989, 12995, 12990]
  },
  {
    kind: "mapItem",
    questId: 9674,
    map: "yokaiportal",
    ids: [12991, 12992, 12993]
  },
  {
    kind: "mapItem",
    questId: 9675,
    map: "yokaiportal",
    ids: [12994]
  },
  {
    kind: "mapItem",
    questId: 9680,
    map: "yokairealm",
    ids: [13036, 13037]
  },
  {
    kind: "mapItem",
    questId: 9681,
    map: "yokairealm",
    ids: [13038, 13039]
  },
  {
    kind: "mapItem",
    questId: 9682,
    map: "yokairealm",
    ids: [13040, 13041]
  },
  {
    kind: "mapItem",
    questId: 9683,
    map: "yokairealm",
    ids: [13042, 13043]
  },
  {
    kind: "mapItem",
    questId: 9684,
    map: "yokairealm",
    ids: [13044]
  },
  {
    kind: "mapItem",
    questId: 9685,
    map: "yokairealm",
    ids: [13045, 13046]
  },
  {
    kind: "mapItem",
    questId: 9686,
    map: "yokairealm",
    ids: [13047]
  },
  {
    kind: "kill",
    questId: 7769,
    map: "eridani",
    monsters: ["Maggot-Like Creature"]
  },
  {
    kind: "kill",
    questId: 7773,
    map: "eridani",
    monsters: ["Wolf-Like Creature"]
  },
  {
    kind: "kill",
    questId: 7775,
    map: "eridani",
    monsters: ["Wolf-Like Creature"]
  },
  {
    kind: "kill",
    questId: 7778,
    map: "eridani",
    monsters: ["Door"]
  },
  {
    kind: "kill",
    questId: 7779,
    map: "eridani",
    monsters: ["Creature 6"]
  },
  {
    kind: "kill",
    questId: 7993,
    map: "astravia",
    monsters: ["Monstrous Dove"]
  },
  {
    kind: "kill",
    questId: 7994,
    map: "astravia",
    monsters: ["Drago's Spy"]
  },
  {
    kind: "kill",
    questId: 7995,
    map: "astravia",
    monsters: ["Astravian Mercenary"]
  },
  {
    kind: "kill",
    questId: 7997,
    map: "astravia",
    monsters: ["Creature 28"]
  },
  {
    kind: "kill",
    questId: 7998,
    map: "astravia",
    monsters: ["Ti"]
  },
  {
    kind: "kill",
    questId: 7999,
    map: "astravia",
    monsters: ["Creature 27"]
  },
  {
    kind: "kill",
    questId: 8000,
    map: "astravia",
    monsters: ["The Moon"]
  },
  {
    kind: "kill",
    questId: 8249,
    map: "astraviacastle",
    monsters: ["Creature 20"]
  },
  {
    kind: "kill",
    questId: 8252,
    map: "astraviacastle",
    monsters: ["Creature 20"]
  },
  {
    kind: "kill",
    questId: 8253,
    map: "astraviacastle",
    monsters: ["Astravian Royal Guard"]
  },
  {
    kind: "kill",
    questId: 8254,
    map: "astraviacastle",
    monsters: ["Storage Spider"]
  },
  {
    kind: "kill",
    questId: 8256,
    map: "astraviacastle",
    monsters: ["The Sun"]
  },
  {
    kind: "kill",
    questId: 8387,
    map: "astraviajudge",
    monsters: ["Hand"]
  },
  {
    kind: "kill",
    questId: 8388,
    map: "astraviajudge",
    monsters: ["Trumpeter"]
  },
  {
    kind: "kill",
    questId: 8390,
    map: "astraviajudge",
    monsters: ["Trumpeter"]
  },
  {
    kind: "kill",
    questId: 8391,
    map: "astraviajudge",
    monsters: ["Hand"]
  },
  {
    kind: "kill",
    questId: 8392,
    map: "astraviajudge",
    monsters: ["Trumpeter"]
  },
  {
    kind: "kill",
    questId: 8394,
    map: "astraviajudge",
    monsters: ["Shades"]
  },
  {
    kind: "kill",
    questId: 8395,
    map: "astraviajudge",
    monsters: ["La"]
  },
  {
    kind: "kill",
    questId: 8522,
    map: "eridanipast",
    monsters: ["Bandit", "Dog"]
  },
  {
    kind: "kill",
    questId: 8524,
    map: "eridanipast",
    monsters: ["Bandit"]
  },
  {
    kind: "kill",
    questId: 8525,
    map: "eridanipast",
    monsters: ["Bat"]
  },
  {
    kind: "kill",
    questId: 8527,
    map: "eridanipast",
    monsters: ["Bat", "Dog"]
  },
  {
    kind: "kill",
    questId: 8528,
    map: "eridanipast",
    monsters: ["Bandit"]
  },
  {
    kind: "kill",
    questId: 8593,
    map: "astraviapast",
    monsters: ["Astravian Soldier"]
  },
  {
    kind: "kill",
    questId: 8595,
    map: "astraviapast",
    monsters: ["Panicked Citizen"]
  },
  {
    kind: "kill",
    questId: 8596,
    map: "astraviapast",
    monsters: ["Astravian Soldier"]
  },
  {
    kind: "kill",
    questId: 8597,
    map: "astraviapast",
    monsters: ["Regulus"]
  },
  {
    kind: "kill",
    questId: 8598,
    map: "astraviapast",
    monsters: ["Titania"]
  },
  {
    kind: "kill",
    questId: 8599,
    map: "astraviapast",
    monsters: ["Aurola"]
  },
  {
    kind: "kill",
    questId: 8601,
    map: "astraviapast",
    monsters: ["Forsaken Husk"]
  },
  {
    kind: "kill",
    questId: 8631,
    map: "firstobservatory",
    monsters: ["Astra Scorpio"]
  },
  {
    kind: "kill",
    questId: 8632,
    map: "firstobservatory",
    monsters: ["Astra Leo"]
  },
  {
    kind: "kill",
    questId: 8633,
    map: "firstobservatory",
    monsters: ["Ancient Turret"]
  },
  {
    kind: "kill",
    questId: 8635,
    map: "firstobservatory",
    monsters: ["Ancient Creature"]
  },
  {
    kind: "kill",
    questId: 8637,
    map: "firstobservatory",
    monsters: ["Ancient Turret", "Ancient Creature"]
  },
  {
    kind: "kill",
    questId: 8640,
    map: "firstobservatory",
    monsters: ["Empress’ Finger"]
  },
  {
    kind: "kill",
    questId: 8641,
    map: "firstobservatory",
    monsters: ["Ancient Creature", "Ancient Turret", "Empress’ Finger"]
  },
  {
    kind: "kill",
    questId: 8679,
    map: "genesisgarden",
    monsters: ["Drago's Soldier"]
  },
  {
    kind: "kill",
    questId: 8681,
    map: "genesisgarden",
    monsters: ["Drago's Soldier"]
  },
  {
    kind: "kill",
    questId: 8684,
    map: "genesisgarden",
    monsters: ["Ancient Creature", "Plant Beast"]
  },
  {
    kind: "kill",
    questId: 8685,
    map: "genesisgarden",
    monsters: ["Ancient Turret"]
  },
  {
    kind: "kill",
    questId: 8686,
    map: "genesisgarden",
    monsters: ["Undead Humanoid"]
  },
  {
    kind: "kill",
    questId: 8687,
    map: "genesisgarden",
    monsters: ["Ancient Mecha"]
  },
  {
    kind: "kill",
    questId: 8724,
    map: "theworld",
    monsters: ["Nothingness"]
  },
  {
    kind: "kill",
    questId: 8725,
    map: "theworld",
    monsters: ["Re"]
  },
  {
    kind: "kill",
    questId: 8726,
    map: "theworld",
    monsters: ["Fa"]
  },
  {
    kind: "kill",
    questId: 8727,
    map: "theworld",
    monsters: ["Ti"]
  },
  {
    kind: "kill",
    questId: 8728,
    map: "theworld",
    monsters: ["So"]
  },
  {
    kind: "kill",
    questId: 8729,
    map: "theworld",
    monsters: ["Nothingness"]
  },
  {
    kind: "kill",
    questId: 8730,
    map: "theworld",
    monsters: ["So"]
  },
  {
    kind: "kill",
    questId: 8731,
    map: "theworld",
    monsters: ["So"]
  },
  {
    kind: "kill",
    questId: 8732,
    map: "theworld",
    monsters: ["Darkon"]
  },
  {
    kind: "mapItem",
    questId: 7769,
    map: "eridani",
    ids: [7783]
  },
  {
    kind: "mapItem",
    questId: 7774,
    map: "eridani",
    ids: [7784]
  },
  {
    kind: "mapItem",
    questId: 7775,
    map: "eridani",
    ids: [7785]
  },
  {
    kind: "mapItem",
    questId: 7778,
    map: "eridani",
    ids: [7786]
  },
  {
    kind: "mapItem",
    questId: 7995,
    map: "astravia",
    ids: [8264, 8265, 8266]
  },
  {
    kind: "mapItem",
    questId: 8248,
    map: "astraviacastle",
    ids: [8891, 6]
  },
  {
    kind: "mapItem",
    questId: 8249,
    map: "astraviacastle",
    ids: [8892, 6]
  },
  {
    kind: "mapItem",
    questId: 8250,
    map: "astraviacastle",
    ids: [8893]
  },
  {
    kind: "mapItem",
    questId: 8251,
    map: "astraviacastle",
    ids: [8894]
  },
  {
    kind: "mapItem",
    questId: 8254,
    map: "astraviacastle",
    ids: [8895, 3]
  },
  {
    kind: "mapItem",
    questId: 8255,
    map: "astraviacastle",
    ids: [8896]
  },
  {
    kind: "mapItem",
    questId: 8386,
    map: "astraviajudge",
    ids: [9275, 6]
  },
  {
    kind: "mapItem",
    questId: 8390,
    map: "astraviajudge",
    ids: [9276]
  },
  {
    kind: "mapItem",
    questId: 8391,
    map: "astraviajudge",
    ids: [9277, 8]
  },
  {
    kind: "mapItem",
    questId: 8394,
    map: "astraviajudge",
    ids: [9278]
  },
  {
    kind: "mapItem",
    questId: 8521,
    map: "eridanipast",
    ids: [9681]
  },
  {
    kind: "mapItem",
    questId: 8523,
    map: "eridanipast",
    ids: [9676, 8]
  },
  {
    kind: "mapItem",
    questId: 8525,
    map: "eridanipast",
    ids: [9677]
  },
  {
    kind: "mapItem",
    questId: 8526,
    map: "eridanipast",
    ids: [9678]
  },
  {
    kind: "mapItem",
    questId: 8526,
    map: "eridanipast",
    ids: [9679]
  },
  {
    kind: "mapItem",
    questId: 8530,
    map: "eridanipast",
    ids: [9680]
  },
  {
    kind: "mapItem",
    questId: 8592,
    map: "astraviapast",
    ids: [10017]
  },
  {
    kind: "mapItem",
    questId: 8592,
    map: "astraviapast",
    ids: [10018]
  },
  {
    kind: "mapItem",
    questId: 8594,
    map: "astraviapast",
    ids: [10019, 7]
  },
  {
    kind: "mapItem",
    questId: 8596,
    map: "astraviapast",
    ids: [10020]
  },
  {
    kind: "mapItem",
    questId: 8600,
    map: "astraviapast",
    ids: [10021]
  },
  {
    kind: "mapItem",
    questId: 8630,
    map: "firstobservatory",
    ids: [10083]
  },
  {
    kind: "mapItem",
    questId: 8633,
    map: "firstobservatory",
    ids: [10084]
  },
  {
    kind: "mapItem",
    questId: 8634,
    map: "firstobservatory",
    ids: [10085]
  },
  {
    kind: "mapItem",
    questId: 8636,
    map: "firstobservatory",
    ids: [10086, 10087]
  },
  {
    kind: "mapItem",
    questId: 8638,
    map: "firstobservatory",
    ids: [10088, 10089]
  },
  {
    kind: "mapItem",
    questId: 8639,
    map: "firstobservatory",
    ids: [10090]
  },
  {
    kind: "mapItem",
    questId: 8678,
    map: "genesisgarden",
    ids: [10196, 6]
  },
  {
    kind: "mapItem",
    questId: 8680,
    map: "genesisgarden",
    ids: [10197, 10198, 10199]
  },
  {
    kind: "mapItem",
    questId: 8682,
    map: "genesisgarden",
    ids: [10200, 10201]
  },
  {
    kind: "mapItem",
    questId: 8683,
    map: "genesisgarden",
    ids: [10202, 5]
  },
  {
    kind: "mapItem",
    questId: 8685,
    map: "genesisgarden",
    ids: [10203]
  },
  {
    kind: "mapItem",
    questId: 8723,
    map: "theworld",
    ids: [10289]
  },
  {
    kind: "kill",
    questId: 4054,
    map: "embersea",
    monsters: ["Flame Soldier", "Storm Scout"]
  },
  {
    kind: "kill",
    questId: 4055,
    map: "embersea",
    monsters: ["Living Lava"]
  },
  {
    kind: "kill",
    questId: 4056,
    map: "embersea",
    monsters: ["Coal Creeper", "Pyradon", "Fyresyn"]
  },
  {
    kind: "kill",
    questId: 4070,
    map: "pyrewatch",
    monsters: ["Lavazard", "Fyreborn Tiger", "Caustocrush"]
  },
  {
    kind: "kill",
    questId: 4071,
    map: "pyrewatch",
    monsters: ["Fire Pikeman"]
  },
  {
    kind: "kill",
    questId: 4073,
    map: "pyrewatch",
    monsters: ["Firestorm Knight", "Firestorm Knight"]
  },
  {
    kind: "kill",
    questId: 4075,
    map: "pyrewatch",
    monsters: ["Lavazard"]
  },
  {
    kind: "kill",
    questId: 4078,
    map: "pyrewatch",
    monsters: ["Storm Scout"]
  },
  {
    kind: "kill",
    questId: 4081,
    map: "pyrewatch",
    monsters: ["Storm Scout"]
  },
  {
    kind: "kill",
    questId: 4128,
    map: "feverfew",
    monsters: ["Firestorm Knight"]
  },
  {
    kind: "kill",
    questId: 4129,
    map: "feverfew",
    monsters: ["Locked Chest"]
  },
  {
    kind: "kill",
    questId: 4131,
    map: "feverfew",
    monsters: ["Firestorm Knight", "Firestorm Major", "Firestorm Knight", "Firestorm Major"]
  },
  {
    kind: "kill",
    questId: 4133,
    map: "feverfew",
    monsters: ["Twisted Undine"]
  },
  {
    kind: "kill",
    questId: 4136,
    map: "feverfew",
    monsters: ["Blazebinder"]
  },
  {
    kind: "kill",
    questId: 4139,
    map: "feverfew",
    monsters: ["Feverfew Vase", "Twisted Undine", "Locked Chest"]
  },
  {
    kind: "kill",
    questId: 4140,
    map: "feverfew",
    monsters: ["Coral Creeper", "Twisted Undine", "Salamander"]
  },
  {
    kind: "kill",
    questId: 4142,
    map: "feverfew",
    monsters: ["Major Thermas"]
  },
  {
    kind: "kill",
    questId: 4201,
    map: "phoenixrise",
    monsters: ["Lava Troll", "Infernal Goblin"]
  },
  {
    kind: "kill",
    questId: 4202,
    map: "phoenixrise",
    monsters: ["Infernal Goblin", "Lava Troll", "Gargrowl"]
  },
  {
    kind: "kill",
    questId: 4204,
    map: "phoenixrise",
    monsters: ["Lava Troll", "Firestorm Tiger", "Infernal Goblin"]
  },
  {
    kind: "kill",
    questId: 4207,
    map: "phoenixrise",
    monsters: ["Pyrric Ursus"]
  },
  {
    kind: "kill",
    questId: 4208,
    map: "phoenixrise",
    monsters: ["Infernal Goblin"]
  },
  {
    kind: "kill",
    questId: 4211,
    map: "phoenixrise",
    monsters: ["Lava Troll"]
  },
  {
    kind: "kill",
    questId: 4212,
    map: "phoenixrise",
    monsters: ["Gargrowl"]
  },
  {
    kind: "kill",
    questId: 4213,
    map: "phoenixrise",
    monsters: ["Cinderclaw"]
  },
  {
    kind: "kill",
    questId: 4216,
    map: "fireforge",
    monsters: ["Firestorm Scout"]
  },
  {
    kind: "kill",
    questId: 4217,
    map: "fireforge",
    monsters: ["Firestorm Soldier"]
  },
  {
    kind: "kill",
    questId: 4218,
    map: "fireforge",
    monsters: ["Fire Pikeman"]
  },
  {
    kind: "kill",
    questId: 4219,
    map: "fireforge",
    monsters: ["Firestorm Knight"]
  },
  {
    kind: "kill",
    questId: 4220,
    map: "fireforge",
    monsters: ["Firestorm Corporal"]
  },
  {
    kind: "kill",
    questId: 4221,
    map: "fireforge",
    monsters: ["Firestorm Tiger"]
  },
  {
    kind: "kill",
    questId: 4222,
    map: "fireforge",
    monsters: ["Tiger Cavalry"]
  },
  {
    kind: "kill",
    questId: 4223,
    map: "fireforge",
    monsters: ["Firestorm Major"]
  },
  {
    kind: "kill",
    questId: 4224,
    map: "fireforge",
    monsters: ["Blazebinder"]
  },
  {
    kind: "kill",
    questId: 4225,
    map: "fireforge",
    monsters: ["Firestorm General"]
  },
  {
    kind: "kill",
    questId: 4226,
    map: "fireforge",
    monsters: ["Flamewing"]
  },
  {
    kind: "kill",
    questId: 4230,
    map: "fireforge",
    monsters: ["Tyndarius"]
  },
  {
    kind: "kill",
    questId: 4231,
    map: "lavarun",
    monsters: ["Phedra"]
  },
  {
    kind: "kill",
    questId: 4232,
    map: "lavarun",
    monsters: ["Mega Tyndarius"]
  },
  {
    kind: "kill",
    questId: 4235,
    map: "lavarun",
    monsters: ["Firestorm Soldier"]
  },
  {
    kind: "kill",
    questId: 4115,
    map: "brimstone",
    monsters: ["Chief Talmin"]
  },
  {
    kind: "kill",
    questId: 4143,
    map: "nightmare",
    monsters: ["Bobble Clown"]
  },
  {
    kind: "kill",
    questId: 4144,
    map: "nightmare",
    monsters: ["Crazy Clown"]
  },
  {
    kind: "kill",
    questId: 4145,
    map: "nightmare",
    monsters: ["Castle Spider"]
  },
  {
    kind: "kill",
    questId: 4148,
    map: "nightmare",
    monsters: ["Germs"]
  },
  {
    kind: "kill",
    questId: 4149,
    map: "nightmare",
    monsters: ["Needle"]
  },
  {
    kind: "kill",
    questId: 4150,
    map: "nightmare",
    monsters: ["Broken Toy"]
  },
  {
    kind: "kill",
    questId: 4152,
    map: "nightmare",
    monsters: ["Fire Imp"]
  },
  {
    kind: "kill",
    questId: 4153,
    map: "nightmare",
    monsters: ["Flame Elemental"]
  },
  {
    kind: "kill",
    questId: 4155,
    map: "nightmare",
    monsters: ["Unearthed Skeleton"]
  },
  {
    kind: "kill",
    questId: 4156,
    map: "nightmare",
    monsters: ["Nothing"]
  },
  {
    kind: "kill",
    questId: 4157,
    map: "nightmare",
    monsters: ["Devourax"]
  },
  {
    kind: "mapItem",
    questId: 4055,
    map: "embersea",
    ids: [3153, 22]
  },
  {
    kind: "mapItem",
    questId: 4072,
    map: "pyrewatch",
    ids: [3159, 12]
  },
  {
    kind: "mapItem",
    questId: 4075,
    map: "pyrewatch",
    ids: [3160, 5]
  },
  {
    kind: "mapItem",
    questId: 4077,
    map: "pyrewatch",
    ids: [3161, 5]
  },
  {
    kind: "mapItem",
    questId: 4080,
    map: "pyrewatch",
    ids: [3162, 4]
  },
  {
    kind: "mapItem",
    questId: 4130,
    map: "feverfew",
    ids: [3246, 3247]
  },
  {
    kind: "mapItem",
    questId: 4131,
    map: "feverfew",
    ids: [3245]
  },
  {
    kind: "mapItem",
    questId: 4132,
    map: "feverfew",
    ids: [3244, 5]
  },
  {
    kind: "mapItem",
    questId: 4133,
    map: "feverfew",
    ids: [3243, 5]
  },
  {
    kind: "mapItem",
    questId: 4135,
    map: "feverfew",
    ids: [3248]
  },
  {
    kind: "mapItem",
    questId: 4137,
    map: "feverfew",
    ids: [3242, 10]
  },
  {
    kind: "mapItem",
    questId: 4141,
    map: "feverfew",
    ids: [3241]
  },
  {
    kind: "mapItem",
    questId: 4203,
    map: "phoenixrise",
    ids: [3283, 4]
  },
  {
    kind: "mapItem",
    questId: 4205,
    map: "phoenixrise",
    ids: [3285]
  },
  {
    kind: "mapItem",
    questId: 4206,
    map: "phoenixrise",
    ids: [3282, 6]
  },
  {
    kind: "mapItem",
    questId: 4208,
    map: "phoenixrise",
    ids: [3284, 7]
  },
  {
    kind: "mapItem",
    questId: 4147,
    map: "nightmare",
    ids: [3262]
  },
  {
    kind: "kill",
    questId: 3097,
    map: "skullpunch",
    monsters: ["Fishbones"]
  },
  {
    kind: "kill",
    questId: 3099,
    map: "skullpunch",
    monsters: ["Fishbones"]
  },
  {
    kind: "kill",
    questId: 3100,
    map: "vampirates",
    monsters: ["Creepy Bat"]
  },
  {
    kind: "kill",
    questId: 3101,
    map: "vampirates",
    monsters: ["Creepy Bat"]
  },
  {
    kind: "kill",
    questId: 3102,
    map: "vampirates",
    monsters: ["Vampirate"]
  },
  {
    kind: "kill",
    questId: 3103,
    map: "vampirates",
    monsters: ["Creepy Bat", "Vampirate"]
  },
  {
    kind: "kill",
    questId: 3105,
    map: "vampirates",
    monsters: ["Stranglerfish"]
  },
  {
    kind: "kill",
    questId: 3106,
    map: "vampirates",
    monsters: ["Murderaconian", "Vampirate", "Vampirate"]
  },
  {
    kind: "kill",
    questId: 3107,
    map: "vampirates",
    monsters: ["Bracken Kraken"]
  },
  {
    kind: "kill",
    questId: 3108,
    map: "vampirates",
    monsters: ["Vampirate"]
  },
  {
    kind: "kill",
    questId: 3111,
    map: "treasureisland",
    monsters: ["Captain Von Poach"]
  },
  {
    kind: "kill",
    questId: 3114,
    map: "skullpunch",
    monsters: ["Fishbones", "Vampirate"]
  },
  {
    kind: "kill",
    questId: 3115,
    map: "skullpunch",
    monsters: ["Fishbones", "Fishbones", "Fishbones", "Fishbones"]
  },
  {
    kind: "kill",
    questId: 3116,
    map: "skullpunch",
    monsters: ["Fishbones"]
  },
  {
    kind: "kill",
    questId: 3118,
    map: "skullpunch",
    monsters: ["Shelleton"]
  },
  {
    kind: "kill",
    questId: 3119,
    map: "chaoskraken",
    monsters: ["Chaos Kraken"]
  },
  {
    kind: "kill",
    questId: 751,
    map: "brain",
    monsters: ["Slimed Girl"]
  },
  {
    kind: "kill",
    questId: 752,
    map: "brain",
    monsters: ["Slimed Boy"]
  },
  {
    kind: "kill",
    questId: 753,
    map: "brain",
    monsters: ["Brain Slurper"]
  },
  {
    kind: "kill",
    questId: 755,
    map: "brain",
    monsters: ["Slimed Girl"]
  },
  {
    kind: "kill",
    questId: 757,
    map: "ebildread",
    monsters: [
      "Pink Ghostly Sheet",
      "Pink Ghostly Sheet",
      "Pink Ghostly Sheet",
      "Pink Ghostly Sheet",
      "Pink Ghostly Sheet",
      "Pink Ghostly Sheet"
    ]
  },
  {
    kind: "kill",
    questId: 758,
    map: "ebildread",
    monsters: [
      "Pink Skeletal Soldier",
      "Pink Skeletal Soldier",
      "Pink Skeletal Soldier",
      "Pink Skeletal Soldier",
      "Pink Skeletal Soldier",
      "Pink Skeletal Soldier"
    ]
  },
  {
    kind: "kill",
    questId: 759,
    map: "ebildread",
    monsters: ["Jay Sun"]
  },
  {
    kind: "kill",
    questId: 760,
    map: "ebildread",
    monsters: ["Pink Hand"]
  },
  {
    kind: "kill",
    questId: 764,
    map: "superlowe",
    monsters: ["Super Lowe-Viathan"]
  },
  {
    kind: "kill",
    questId: 1044,
    map: "fivesaloon",
    monsters: ["Bulletless Bandit"]
  },
  {
    kind: "kill",
    questId: 1046,
    map: "fivesaloon",
    monsters: ["Storagebox"]
  },
  {
    kind: "kill",
    questId: 1047,
    map: "fivesaloon",
    monsters: ["Bulletless Bandit"]
  },
  {
    kind: "kill",
    questId: 1049,
    map: "fivesaloon",
    monsters: ["One-Armed Bandit"]
  },
  {
    kind: "kill",
    questId: 1051,
    map: "train",
    monsters: ["Ghostly Conductor"]
  },
  {
    kind: "kill",
    questId: 1053,
    map: "train",
    monsters: ["Coal Ghoul"]
  },
  {
    kind: "kill",
    questId: 1056,
    map: "blackstone",
    monsters: ["Necrosian Soldier"]
  },
  {
    kind: "kill",
    questId: 1057,
    map: "blackstone",
    monsters: ["Yahorneth"]
  },
  {
    kind: "kill",
    questId: 1552,
    map: "firetown",
    monsters: ["Fire Elemental", "Fire Elemental", "Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 1553,
    map: "firetown",
    monsters: ["Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 1555,
    map: "fireriver",
    monsters: ["Swamp Thing"]
  },
  {
    kind: "kill",
    questId: 1556,
    map: "fireriver",
    monsters: ["Lava Bat"]
  },
  {
    kind: "kill",
    questId: 1558,
    map: "firetunnel",
    monsters: ["Volcanic Ash Imp"]
  },
  {
    kind: "kill",
    questId: 1560,
    map: "firetunnel",
    monsters: ["Elder Magma Wyrm"]
  },
  {
    kind: "kill",
    questId: 1562,
    map: "firetunnel",
    monsters: ["Elder Magma Wyrm"]
  },
  {
    kind: "kill",
    questId: 1564,
    map: "firetown",
    monsters: ["Burnt Tree"]
  },
  {
    kind: "kill",
    questId: 1961,
    map: "sleezter",
    monsters: ["BunnyMinion"]
  },
  {
    kind: "kill",
    questId: 1962,
    map: "sleezter",
    monsters: ["BunnyMinion"]
  },
  {
    kind: "kill",
    questId: 1965,
    map: "sleezter",
    monsters: ["BunnyMinion"]
  },
  {
    kind: "kill",
    questId: 1967,
    map: "sleezter",
    monsters: ["BunnyMinion"]
  },
  {
    kind: "kill",
    questId: 1968,
    map: "sleezter",
    monsters: ["Sleezter Bunny"]
  },
  {
    kind: "kill",
    questId: 1970,
    map: "sleezter",
    monsters: ["BunnyMinion"]
  },
  {
    kind: "kill",
    questId: 2223,
    map: "neverlore",
    monsters: ["Whablobble"]
  },
  {
    kind: "kill",
    questId: 2224,
    map: "neverworld",
    monsters: ["Spid-Squider"]
  },
  {
    kind: "kill",
    questId: 2225,
    map: "neverworld",
    monsters: ["Snackistopheles"]
  },
  {
    kind: "kill",
    questId: 2229,
    map: "neverworld",
    monsters: ["Generator"]
  },
  {
    kind: "kill",
    questId: 2230,
    map: "neverworld",
    monsters: ["Fishizzle"]
  },
  {
    kind: "kill",
    questId: 2231,
    map: "neverworld",
    monsters: ["Kennel Door"]
  },
  {
    kind: "kill",
    questId: 2233,
    map: "neverworld",
    monsters: ["Fishizzle"]
  },
  {
    kind: "kill",
    questId: 5051,
    map: "wormhole",
    monsters: ["Goth Girl", "Vamp Boy"]
  },
  {
    kind: "kill",
    questId: 5052,
    map: "wormhole",
    monsters: ["Deadshirt"]
  },
  {
    kind: "kill",
    questId: 5053,
    map: "wormhole",
    monsters: ["Cursed Alien"]
  },
  {
    kind: "kill",
    questId: 5055,
    map: "wormhole",
    monsters: ["Undead Astronaut", "Undead Astronaut"]
  },
  {
    kind: "kill",
    questId: 5056,
    map: "wormhole",
    monsters: ["Xenodog"]
  },
  {
    kind: "kill",
    questId: 5057,
    map: "wormhole",
    monsters: ["Green Trobbolier"]
  },
  {
    kind: "kill",
    questId: 5059,
    map: "wormhole",
    monsters: ["Space Horror"]
  },
  {
    kind: "kill",
    questId: 5060,
    map: "wormhole",
    monsters: ["Volatile Current"]
  },
  {
    kind: "kill",
    questId: 5062,
    map: "wormhole",
    monsters: ["Stormslasher", "Undead Space Marine"]
  },
  {
    kind: "kill",
    questId: 5063,
    map: "wormhole",
    monsters: ["Stormslasher"]
  },
  {
    kind: "kill",
    questId: 5064,
    map: "wormhole",
    monsters: ["Guardian"]
  },
  {
    kind: "kill",
    questId: 5065,
    map: "wormhole",
    monsters: ["Space Ghost", "Singularity"]
  },
  {
    kind: "kill",
    questId: 5066,
    map: "wormhole",
    monsters: ["Trobbolegion"]
  },
  {
    kind: "kill",
    questId: 5637,
    map: "crownsreachfxiii",
    monsters: ["Blood Maggot"]
  },
  {
    kind: "kill",
    questId: 5639,
    map: "safiria",
    monsters: ["Albino Bat"]
  },
  {
    kind: "kill",
    questId: 5640,
    map: "battleundera",
    monsters: ["Skeletal Fire Mage"]
  },
  {
    kind: "kill",
    questId: 5641,
    map: "crownsreachfxiii",
    monsters: ["Vampire Bat"]
  },
  {
    kind: "kill",
    questId: 5642,
    map: "crownsreachfxiii",
    monsters: ["Eldritch Parasite"]
  },
  {
    kind: "kill",
    questId: 5643,
    map: "crownsreachfxiii",
    monsters: ["Panicking Villager"]
  },
  {
    kind: "kill",
    questId: 5644,
    map: "crownsreachfxiii",
    monsters: ["Crawling Ooze"]
  },
  {
    kind: "kill",
    questId: 5645,
    map: "crownsreachfxiii",
    monsters: ["Crawling Ooze"]
  },
  {
    kind: "kill",
    questId: 5646,
    map: "crownsreachfxiii",
    monsters: ["Shub-Hathrys"]
  },
  {
    kind: "kill",
    questId: 6259,
    map: "gonnagetcha",
    monsters: ["Vengeful Ghost"]
  },
  {
    kind: "kill",
    questId: 6260,
    map: "gonnagetcha",
    monsters: ["Restless Spirit"]
  },
  {
    kind: "kill",
    questId: 6261,
    map: "gonnagetcha",
    monsters: ["Restless Spirit"]
  },
  {
    kind: "kill",
    questId: 6263,
    map: "gonnagetcha",
    monsters: ["Murkonian", "Murkonian"]
  },
  {
    kind: "kill",
    questId: 6264,
    map: "gonnagetcha",
    monsters: ["Black Knight Spirit"]
  },
  {
    kind: "kill",
    questId: 6266,
    map: "gonnagetcha",
    monsters: ["Shrade Cultist"]
  },
  {
    kind: "kill",
    questId: 6267,
    map: "gonnagetcha",
    monsters: ["Bride of Shrade"]
  },
  {
    kind: "kill",
    questId: 6268,
    map: "gonnagetcha",
    monsters: ["Shrade"]
  },
  {
    kind: "kill",
    questId: 6269,
    map: "gonnagetcha",
    monsters: ["Shrade Cultist", "Vengeful Ghost"]
  },
  {
    kind: "kill",
    questId: 6409,
    map: "greymoor",
    monsters: ["Auto Gremlin", "Auto Gremlin", "Auto Gremlin"]
  },
  {
    kind: "kill",
    questId: 6410,
    map: "greymoor",
    monsters: ["Oil Elemental"]
  },
  {
    kind: "kill",
    questId: 6411,
    map: "greymoor",
    monsters: ["Huge Auto Gremlin"]
  },
  {
    kind: "kill",
    questId: 6412,
    map: "greymoor",
    monsters: ["Energy Elemental"]
  },
  {
    kind: "kill",
    questId: 6414,
    map: "greymoor",
    monsters: ["Spooky Treeant"]
  },
  {
    kind: "kill",
    questId: 6416,
    map: "greymoor",
    monsters: ["Spooky Treeant"]
  },
  {
    kind: "kill",
    questId: 6421,
    map: "greymoor",
    monsters: ["Spooky Treeant"]
  },
  {
    kind: "kill",
    questId: 6420,
    map: "greymoor",
    monsters: ["Shrade"]
  },
  {
    kind: "kill",
    questId: 7394,
    map: "puzzlebox",
    monsters: ["Bones of the Doomed"]
  },
  {
    kind: "kill",
    questId: 7398,
    map: "puzzlebox",
    monsters: ["Bones of the Doomed"]
  },
  {
    kind: "kill",
    questId: 7400,
    map: "splatterwardage",
    monsters: ["Bladehands"]
  },
  {
    kind: "kill",
    questId: 7402,
    map: "splatterwardage",
    monsters: ["Bladehands"]
  },
  {
    kind: "kill",
    questId: 7404,
    map: "splatterwardage",
    monsters: ["Bladehands"]
  },
  {
    kind: "kill",
    questId: 7406,
    map: "splatterwardage",
    monsters: ["Shrade"]
  },
  {
    kind: "kill",
    questId: 7401,
    map: "splatterwarshrade",
    monsters: ["Legion Maw"]
  },
  {
    kind: "kill",
    questId: 7403,
    map: "splatterwarshrade",
    monsters: ["Legion Maw"]
  },
  {
    kind: "kill",
    questId: 7405,
    map: "splatterwarshrade",
    monsters: ["Legion Maw"]
  },
  {
    kind: "kill",
    questId: 7407,
    map: "splatterwarshrade",
    monsters: ["Dage The Evil"]
  },
  {
    kind: "kill",
    questId: 8217,
    map: "deadfly",
    monsters: ["Grave Flies"]
  },
  {
    kind: "kill",
    questId: 8219,
    map: "deadfly",
    monsters: ["Skeletal Minion"]
  },
  {
    kind: "kill",
    questId: 8220,
    map: "deadfly",
    monsters: ["Gutripper"]
  },
  {
    kind: "kill",
    questId: 8221,
    map: "deadfly",
    monsters: ["Skeletal Mage"]
  },
  {
    kind: "kill",
    questId: 8223,
    map: "deadfly",
    monsters: ["Grave Flies"]
  },
  {
    kind: "kill",
    questId: 8225,
    map: "deadfly",
    monsters: ["Skeletal Mage"]
  },
  {
    kind: "kill",
    questId: 8226,
    map: "deadfly",
    monsters: ["Deadfly"]
  },
  {
    kind: "kill",
    questId: 8227,
    map: "deadfly",
    monsters: ["Skeletal Minion"]
  },
  {
    kind: "kill",
    questId: 8229,
    map: "rotfinger",
    monsters: ["Lost Soul"]
  },
  {
    kind: "kill",
    questId: 8230,
    map: "rotfinger",
    monsters: ["Blade Master"]
  },
  {
    kind: "kill",
    questId: 8232,
    map: "rotfinger",
    monsters: ["Rotfinger"]
  },
  {
    kind: "kill",
    questId: 8656,
    map: "oddities",
    monsters: ["Cursed Doll-Head"]
  },
  {
    kind: "kill",
    questId: 8657,
    map: "oddities",
    monsters: ["Writing Desk"]
  },
  {
    kind: "kill",
    questId: 8658,
    map: "oddities",
    monsters: ["Cursed Curio", "Gothic Chest", "Oddity Swarm"]
  },
  {
    kind: "kill",
    questId: 8659,
    map: "oddities",
    monsters: ["Creepy Baby"]
  },
  {
    kind: "kill",
    questId: 8660,
    map: "oddities",
    monsters: ["Oddity Swarm", "Cursed Doll-Head"]
  },
  {
    kind: "kill",
    questId: 8662,
    map: "oddities",
    monsters: ["Opera Glasses"]
  },
  {
    kind: "kill",
    questId: 8664,
    map: "oddities",
    monsters: ["Dready Bear"]
  },
  {
    kind: "kill",
    questId: 8666,
    map: "oddities",
    monsters: ["Cursed Spirit"]
  },
  {
    kind: "kill",
    questId: 8667,
    map: "oddities",
    monsters: ["Cursed Curio", "Creepy Baby", "Cursed Spirit"]
  },
  {
    kind: "kill",
    questId: 9045,
    map: "blackmaze",
    monsters: ["Globlin"]
  },
  {
    kind: "kill",
    questId: 9047,
    map: "blackmaze",
    monsters: ["Shadow Demon"]
  },
  {
    kind: "kill",
    questId: 9048,
    map: "blackmaze",
    monsters: ["Screamon"]
  },
  {
    kind: "kill",
    questId: 9049,
    map: "blackmaze",
    monsters: ["Screamon"]
  },
  {
    kind: "kill",
    questId: 9050,
    map: "blackmaze",
    monsters: ["Possessed Bones"]
  },
  {
    kind: "kill",
    questId: 9051,
    map: "blackmaze",
    monsters: ["Shadow Demon"]
  },
  {
    kind: "kill",
    questId: 9052,
    map: "blackmaze",
    monsters: ["Vi'eel Dreaddacovra"]
  },
  {
    kind: "kill",
    questId: 9053,
    map: "blackmaze",
    monsters: ["Screamon", "Globlin", "Shadow Demon"]
  },
  {
    kind: "kill",
    questId: 9054,
    map: "blackmaze",
    monsters: ["Possessed Bones"]
  },
  {
    kind: "kill",
    questId: 9055,
    map: "blackmaze",
    monsters: ["Shadow Fernando"]
  },
  {
    kind: "mapItem",
    questId: 3098,
    map: "skullpunch",
    ids: [1990]
  },
  {
    kind: "mapItem",
    questId: 3104,
    map: "vampirates",
    ids: [1959]
  },
  {
    kind: "mapItem",
    questId: 3109,
    map: "treasureisland",
    ids: [1986, 1987, 1988, 1989]
  },
  {
    kind: "mapItem",
    questId: 3110,
    map: "treasureisland",
    ids: [1958]
  },
  {
    kind: "mapItem",
    questId: 754,
    map: "brain",
    ids: [132]
  },
  {
    kind: "mapItem",
    questId: 1043,
    map: "fivesaloon",
    ids: [406]
  },
  {
    kind: "mapItem",
    questId: 1045,
    map: "fivesaloon",
    ids: [407]
  },
  {
    kind: "mapItem",
    questId: 1048,
    map: "fivesaloon",
    ids: [408]
  },
  {
    kind: "mapItem",
    questId: 1050,
    map: "train",
    ids: [409]
  },
  {
    kind: "mapItem",
    questId: 1052,
    map: "train",
    ids: [410]
  },
  {
    kind: "mapItem",
    questId: 1054,
    map: "blackstone",
    ids: [411, 12]
  },
  {
    kind: "mapItem",
    questId: 1055,
    map: "blackstone",
    ids: [412, 12]
  },
  {
    kind: "mapItem",
    questId: 1554,
    map: "firetown",
    ids: [790, 10]
  },
  {
    kind: "mapItem",
    questId: 1557,
    map: "fireriver",
    ids: [792, 10]
  },
  {
    kind: "mapItem",
    questId: 1559,
    map: "firetunnel",
    ids: [791, 10]
  },
  {
    kind: "mapItem",
    questId: 1963,
    map: "sleezter",
    ids: [973, 6]
  },
  {
    kind: "mapItem",
    questId: 1964,
    map: "sleezter",
    ids: [974]
  },
  {
    kind: "mapItem",
    questId: 1966,
    map: "sleezter",
    ids: [975]
  },
  {
    kind: "mapItem",
    questId: 1969,
    map: "sleezter",
    ids: [976, 6]
  },
  {
    kind: "mapItem",
    questId: 1971,
    map: "sleezter",
    ids: [977]
  },
  {
    kind: "mapItem",
    questId: 1972,
    map: "sleezter",
    ids: [978]
  },
  {
    kind: "mapItem",
    questId: 2222,
    map: "neverlore",
    ids: [1315]
  },
  {
    kind: "mapItem",
    questId: 2225,
    map: "neverworld",
    ids: [1316, 10]
  },
  {
    kind: "mapItem",
    questId: 2226,
    map: "neverworld",
    ids: [1317]
  },
  {
    kind: "mapItem",
    questId: 2227,
    map: "neverworld",
    ids: [1318, 5]
  },
  {
    kind: "mapItem",
    questId: 2227,
    map: "neverworld",
    ids: [1326]
  },
  {
    kind: "mapItem",
    questId: 2228,
    map: "neverworld",
    ids: [1321]
  },
  {
    kind: "mapItem",
    questId: 2230,
    map: "neverworld",
    ids: [1319]
  },
  {
    kind: "mapItem",
    questId: 2232,
    map: "neverworld",
    ids: [1320, 10]
  },
  {
    kind: "mapItem",
    questId: 5052,
    map: "wormhole",
    ids: [4420, 4421, 4422]
  },
  {
    kind: "mapItem",
    questId: 5054,
    map: "wormhole",
    ids: [4423, 4424, 4425, 4426]
  },
  {
    kind: "mapItem",
    questId: 5058,
    map: "wormhole",
    ids: [4428]
  },
  {
    kind: "mapItem",
    questId: 5060,
    map: "wormhole",
    ids: [4427, 6]
  },
  {
    kind: "mapItem",
    questId: 5637,
    map: "crownsreachfxiii",
    ids: [5115, 8]
  },
  {
    kind: "mapItem",
    questId: 5639,
    map: "safiria",
    ids: [5114]
  },
  {
    kind: "mapItem",
    questId: 5641,
    map: "crownsreachfxiii",
    ids: [5116]
  },
  {
    kind: "mapItem",
    questId: 6259,
    map: "gonnagetcha",
    ids: [5735]
  },
  {
    kind: "mapItem",
    questId: 6260,
    map: "gonnagetcha",
    ids: [5736, 3]
  },
  {
    kind: "mapItem",
    questId: 6261,
    map: "gonnagetcha",
    ids: [5737]
  },
  {
    kind: "mapItem",
    questId: 6262,
    map: "gonnagetcha",
    ids: [5738, 5739]
  },
  {
    kind: "mapItem",
    questId: 6264,
    map: "gonnagetcha",
    ids: [5740, 5741]
  },
  {
    kind: "mapItem",
    questId: 6265,
    map: "gonnagetcha",
    ids: [5742, 5743]
  },
  {
    kind: "mapItem",
    questId: 6266,
    map: "gonnagetcha",
    ids: [5744, 6]
  },
  {
    kind: "mapItem",
    questId: 6413,
    map: "greymoor",
    ids: [5912, 5]
  },
  {
    kind: "mapItem",
    questId: 6415,
    map: "greymoor",
    ids: [5913, 5914]
  },
  {
    kind: "mapItem",
    questId: 6417,
    map: "greymoor",
    ids: [5915]
  },
  {
    kind: "mapItem",
    questId: 6418,
    map: "greymoor",
    ids: [5916, 5]
  },
  {
    kind: "mapItem",
    questId: 6419,
    map: "greymoor",
    ids: [5917, 4]
  },
  {
    kind: "mapItem",
    questId: 7399,
    map: "puzzlebox",
    ids: [7165]
  },
  {
    kind: "mapItem",
    questId: 8218,
    map: "deadfly",
    ids: [8766, 8]
  },
  {
    kind: "mapItem",
    questId: 8219,
    map: "deadfly",
    ids: [8767, 7]
  },
  {
    kind: "mapItem",
    questId: 8222,
    map: "deadfly",
    ids: [8768]
  },
  {
    kind: "mapItem",
    questId: 8224,
    map: "deadfly",
    ids: [8769, 8770]
  },
  {
    kind: "mapItem",
    questId: 8225,
    map: "deadfly",
    ids: [8771]
  },
  {
    kind: "mapItem",
    questId: 8230,
    map: "rotfinger",
    ids: [8773, 5]
  },
  {
    kind: "mapItem",
    questId: 8231,
    map: "rotfinger",
    ids: [8774, 10]
  },
  {
    kind: "mapItem",
    questId: 8655,
    map: "oddities",
    ids: [10149]
  },
  {
    kind: "mapItem",
    questId: 8656,
    map: "oddities",
    ids: [10150, 4]
  },
  {
    kind: "mapItem",
    questId: 8656,
    map: "oddities",
    ids: [10151]
  },
  {
    kind: "mapItem",
    questId: 8658,
    map: "oddities",
    ids: [10152]
  },
  {
    kind: "mapItem",
    questId: 8658,
    map: "oddities",
    ids: [10153, 2]
  },
  {
    kind: "mapItem",
    questId: 8658,
    map: "oddities",
    ids: [10154]
  },
  {
    kind: "mapItem",
    questId: 8661,
    map: "oddities",
    ids: [10155, 6]
  },
  {
    kind: "mapItem",
    questId: 8665,
    map: "oddities",
    ids: [10156]
  },
  {
    kind: "mapItem",
    questId: 9045,
    map: "blackmaze",
    ids: [11085]
  },
  {
    kind: "mapItem",
    questId: 9046,
    map: "blackmaze",
    ids: [11086, 2]
  },
  {
    kind: "mapItem",
    questId: 9046,
    map: "blackmaze",
    ids: [11087]
  },
  {
    kind: "mapItem",
    questId: 9048,
    map: "blackmaze",
    ids: [11088]
  },
  {
    kind: "mapItem",
    questId: 9048,
    map: "blackmaze",
    ids: [11089, 3]
  },
  {
    kind: "mapItem",
    questId: 9049,
    map: "blackmaze",
    ids: [11090, 2]
  },
  {
    kind: "mapItem",
    questId: 9050,
    map: "blackmaze",
    ids: [11091, 4]
  },
  {
    kind: "mapItem",
    questId: 9051,
    map: "blackmaze",
    ids: [11092, 2]
  },
  {
    kind: "mapItem",
    questId: 9054,
    map: "blackmaze",
    ids: [11093]
  },
  { kind: "chain", questId: 750 },
  { kind: "chain", questId: 756 },
  { kind: "chain", questId: 761 },
  { kind: "chain", questId: 762 },
  { kind: "chain", questId: 763 },
  { kind: "chain", questId: 1042 },
  { kind: "chain", questId: 1561 },
  { kind: "chain", questId: 2021 },
  { kind: "chain", questId: 2234 },
  {
    kind: "kill",
    questId: 8289,
    map: "trygve",
    monsters: ["Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 8290,
    map: "trygve",
    monsters: ["Blood Eagle"]
  },
  {
    kind: "kill",
    questId: 8291,
    map: "trygve",
    monsters: ["Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 8292,
    map: "trygve",
    monsters: ["Rune Boar"]
  },
  {
    kind: "kill",
    questId: 8293,
    map: "trygve",
    monsters: ["Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 8295,
    map: "trygve",
    monsters: ["Blood Eagle", "Rune Boar"]
  },
  {
    kind: "kill",
    questId: 8296,
    map: "trygve",
    monsters: ["Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 8297,
    map: "trygve",
    monsters: ["Blood Eagle", "Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 8298,
    map: "trygve",
    monsters: ["Gramiel"]
  },
  {
    kind: "kill",
    questId: 9282,
    map: "neofortress",
    monsters: ["Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 9283,
    map: "neofortress",
    monsters: ["Vindicator Hound"]
  },
  {
    kind: "kill",
    questId: 9284,
    map: "neofortress",
    monsters: ["Vindicator Beast"]
  },
  {
    kind: "kill",
    questId: 9285,
    map: "neofortress",
    monsters: ["Vindicator Soldier"]
  },
  {
    kind: "kill",
    questId: 9287,
    map: "neofortress",
    monsters: ["Vindicator General"]
  },
  {
    kind: "kill",
    questId: 9288,
    map: "neofortress",
    monsters: ["Vindicator Recruit"]
  },
  {
    kind: "kill",
    questId: 9289,
    map: "neofortress",
    monsters: ["Vindicator General"]
  },
  {
    kind: "kill",
    questId: 9487,
    map: "hbchallenge",
    monsters: ["Sentient Hollow"]
  },
  {
    kind: "kill",
    questId: 9488,
    map: "hbchallenge",
    monsters: ["Hollowborn Vampire"]
  },
  {
    kind: "kill",
    questId: 9489,
    map: "hbchallenge",
    monsters: ["Hollowborn Lycan"]
  },
  {
    kind: "kill",
    questId: 9783,
    map: "bonecastle",
    monsters: ["Undead Guard"]
  },
  {
    kind: "kill",
    questId: 9784,
    map: "lycan",
    monsters: ["Sanguine"]
  },
  {
    kind: "kill",
    questId: 9785,
    map: "umbral",
    monsters: ["Rapaxi"]
  },
  {
    kind: "kill",
    questId: 9786,
    map: "battleundera",
    monsters: ["Bone Terror"]
  },
  {
    kind: "kill",
    questId: 9788,
    map: "dagerecruit",
    monsters: ["Nuckelavee"]
  },
  {
    kind: "kill",
    questId: 9790,
    map: "darkally",
    monsters: ["Underfiend"]
  },
  {
    kind: "kill",
    questId: 9791,
    map: "yasaris",
    monsters: ["Avatar of Anubyx"]
  },
  {
    kind: "kill",
    questId: 9792,
    map: "wrath",
    monsters: ["Gorgorath"]
  },
  {
    kind: "mapItem",
    questId: 8290,
    map: "trygve",
    ids: [9036]
  },
  {
    kind: "mapItem",
    questId: 8291,
    map: "trygve",
    ids: [9037]
  },
  {
    kind: "mapItem",
    questId: 8292,
    map: "trygve",
    ids: [9038]
  },
  {
    kind: "mapItem",
    questId: 8293,
    map: "trygve",
    ids: [9039, 3]
  },
  {
    kind: "mapItem",
    questId: 8294,
    map: "trygve",
    ids: [9040, 8]
  },
  {
    kind: "mapItem",
    questId: 9281,
    map: "neofortress",
    ids: [11806, 9]
  },
  {
    kind: "mapItem",
    questId: 9286,
    map: "neofortress",
    ids: [11807, 5]
  },
  {
    kind: "mapItem",
    questId: 9290,
    map: "neofortress",
    ids: [11808]
  },
  {
    kind: "mapItem",
    questId: 9793,
    map: "greed",
    ids: [13314]
  },
  {
    kind: "mapItem",
    questId: 9858,
    map: "neotower",
    ids: [13581]
  },
  {
    kind: "mapItem",
    questId: 9979,
    map: "dawnsanctum",
    ids: [13853]
  },
  {
    kind: "mapItem",
    questId: 9981,
    map: "dawnsanctum",
    ids: [13854]
  },
  {
    kind: "kill",
    questId: 2942,
    map: "fotia",
    monsters: ["Fotia Elemental"]
  },
  {
    kind: "kill",
    questId: 2943,
    map: "fotia",
    monsters: ["Fotia Spirit"]
  },
  {
    kind: "kill",
    questId: 2944,
    map: "fotia",
    monsters: ["Fotia Spirit"]
  },
  {
    kind: "kill",
    questId: 2945,
    map: "fotia",
    monsters: ["Femme Cult Worshiper"]
  },
  {
    kind: "kill",
    questId: 2946,
    map: "battleundera",
    monsters: ["Skeletal Fire Mage"]
  },
  {
    kind: "kill",
    questId: 2947,
    map: "battleundera",
    monsters: ["Skeletal Ice Mage"]
  },
  {
    kind: "kill",
    questId: 3010,
    map: "underrealm",
    monsters: ["Underworld Soul"]
  },
  {
    kind: "kill",
    questId: 3011,
    map: "underrealm",
    monsters: ["Grief"]
  },
  {
    kind: "kill",
    questId: 3012,
    map: "underrealm",
    monsters: ["Anxiety"]
  },
  {
    kind: "kill",
    questId: 3013,
    map: "underrealm",
    monsters: ["Disease"]
  },
  {
    kind: "kill",
    questId: 3014,
    map: "underrealm",
    monsters: ["Old Age"]
  },
  {
    kind: "kill",
    questId: 3015,
    map: "underrealm",
    monsters: ["Fear"]
  },
  {
    kind: "kill",
    questId: 3016,
    map: "underrealm",
    monsters: ["Hunger"]
  },
  {
    kind: "kill",
    questId: 3017,
    map: "underrealm",
    monsters: ["Death"]
  },
  {
    kind: "kill",
    questId: 3018,
    map: "underrealm",
    monsters: ["Agony"]
  },
  {
    kind: "kill",
    questId: 3019,
    map: "underrealm",
    monsters: ["Sleep"]
  },
  {
    kind: "kill",
    questId: 3022,
    map: "styx",
    monsters: ["Sullen Soul"]
  },
  {
    kind: "kill",
    questId: 3023,
    map: "styx",
    monsters: ["Wrathful Soul"]
  },
  {
    kind: "kill",
    questId: 3024,
    map: "styx",
    monsters: ["Styx Hydra"]
  },
  {
    kind: "kill",
    questId: 3025,
    map: "styx",
    monsters: ["Cerberus"]
  },
  {
    kind: "kill",
    questId: 3034,
    map: "judgement",
    monsters: ["Underworld Imp"]
  },
  {
    kind: "kill",
    questId: 3035,
    map: "judgement",
    monsters: ["Raven"]
  },
  {
    kind: "kill",
    questId: 3039,
    map: "judgement",
    monsters: ["Rhadamanthys"]
  },
  {
    kind: "kill",
    questId: 3040,
    map: "judgement",
    monsters: ["Minos"]
  },
  {
    kind: "kill",
    questId: 3041,
    map: "judgement",
    monsters: ["Aeacus"]
  },
  {
    kind: "kill",
    questId: 3042,
    map: "judgement",
    monsters: ["Ultra Aeacus"]
  },
  {
    kind: "kill",
    questId: 4249,
    map: "dagefortress",
    monsters: ["Sullied Master"]
  },
  {
    kind: "kill",
    questId: 4250,
    map: "dagefortress",
    monsters: ["Tainted Seneschal"]
  },
  {
    kind: "kill",
    questId: 4258,
    map: "dagefortress",
    monsters: ["Grrrberus"]
  },
  {
    kind: "mapItem",
    questId: 2949,
    map: "fotia",
    ids: [1838]
  },
  {
    kind: "mapItem",
    questId: 3038,
    map: "judgement",
    ids: [1914]
  },
  {
    kind: "mapItem",
    questId: 4250,
    map: "dagefortress",
    ids: [3406]
  },
  {
    kind: "mapItem",
    questId: 4256,
    map: "dagefortress",
    ids: [3404]
  },
  {
    kind: "kill",
    questId: 793,
    map: "prison",
    monsters: ["King Alteon's Knight"]
  },
  { kind: "chain", questId: 792 },
  {
    kind: "kill",
    questId: 4084,
    map: "darkfortress",
    monsters: ["Dark Makai", "Cloaked Fiend"]
  },
  {
    kind: "kill",
    questId: 4088,
    map: "darkfortress",
    monsters: ["Cloaked Fiend"]
  },
  {
    kind: "kill",
    questId: 4089,
    map: "darkfortress",
    monsters: ["Dark Elemental"]
  },
  {
    kind: "kill",
    questId: 4090,
    map: "darkfortress",
    monsters: ["Dark Elemental", "Cloaked Fiend"]
  },
  {
    kind: "kill",
    questId: 4091,
    map: "darkfortress",
    monsters: ["Wilhelm"]
  },
  {
    kind: "kill",
    questId: 4092,
    map: "darkfortress",
    monsters: ["Dage The Evil"]
  },
  {
    kind: "kill",
    questId: 4182,
    map: "seraph",
    monsters: ["Seraphic Recruit"]
  },
  {
    kind: "kill",
    questId: 4183,
    map: "seraph",
    monsters: ["Legion Infiltrator", "Seraphic Recruit", "Legion Augur"]
  },
  {
    kind: "kill",
    questId: 4184,
    map: "seraph",
    monsters: ["Legion Augur"]
  },
  {
    kind: "kill",
    questId: 4186,
    map: "legioncrypt",
    monsters: ["Gravedigger"]
  },
  {
    kind: "kill",
    questId: 4187,
    map: "legioncrypt",
    monsters: ["Undead Infantry"]
  },
  {
    kind: "kill",
    questId: 4188,
    map: "legioncrypt",
    monsters: ["Legion Doomknight"]
  },
  {
    kind: "kill",
    questId: 4189,
    map: "legioncrypt",
    monsters: ["Gravedigger"]
  },
  {
    kind: "kill",
    questId: 4190,
    map: "legioncrypt",
    monsters: ["Legion Doomknight"]
  },
  {
    kind: "kill",
    questId: 4192,
    map: "legioncrypt",
    monsters: ["Gravedigger", "Legion Doomknight"]
  },
  {
    kind: "kill",
    questId: 4193,
    map: "legioncrypt",
    monsters: ["Legion Doomknight"]
  },
  {
    kind: "kill",
    questId: 4194,
    map: "legioncrypt",
    monsters: ["Vincenzo"]
  },
  {
    kind: "kill",
    questId: 4195,
    map: "legioncrypt",
    monsters: ["Brutus"]
  },
  {
    kind: "kill",
    questId: 4891,
    map: "envy",
    monsters: ["Legion Defector", "Fawning Sycophant", "Disciple of Envy"]
  },
  {
    kind: "kill",
    questId: 4892,
    map: "envy",
    monsters: ["Envy"]
  },
  {
    kind: "kill",
    questId: 4893,
    map: "envy",
    monsters: ["Queen of Envy"]
  },
  {
    kind: "kill",
    questId: 5648,
    map: "laken",
    monsters: ["Cyborg Dog", "Augmented Guard"]
  },
  {
    kind: "kill",
    questId: 5649,
    map: "laken",
    monsters: ["Mad Scientist"]
  },
  {
    kind: "kill",
    questId: 5650,
    map: "laken",
    monsters: ["Mad Scientist"]
  },
  {
    kind: "kill",
    questId: 5652,
    map: "laken",
    monsters: ["Dr Eisenbacke"]
  },
  {
    kind: "kill",
    questId: 5653,
    map: "laken",
    monsters: ["Dustbunny"]
  },
  {
    kind: "kill",
    questId: 5654,
    map: "laken",
    monsters: ["Closet Moth"]
  },
  {
    kind: "mapItem",
    questId: 4181,
    map: "seraph",
    ids: [3280]
  },
  {
    kind: "mapItem",
    questId: 4189,
    map: "legioncrypt",
    ids: [3295, 5]
  },
  {
    kind: "mapItem",
    questId: 4190,
    map: "legioncrypt",
    ids: [3296, 5]
  },
  {
    kind: "mapItem",
    questId: 4191,
    map: "legioncrypt",
    ids: [3297]
  },
  {
    kind: "mapItem",
    questId: 5651,
    map: "laken",
    ids: [5123]
  },
  {
    kind: "mapItem",
    questId: 5653,
    map: "laken",
    ids: [5124]
  },
  {
    kind: "mapItem",
    questId: 5654,
    map: "laken",
    ids: [5125]
  },
  {
    kind: "mapItem",
    questId: 5655,
    map: "laken",
    ids: [5126]
  },
  {
    kind: "mapItem",
    questId: 10127,
    map: "atlasfalls",
    ids: [14283, 14284]
  },
  {
    kind: "mapItem",
    questId: 10129,
    map: "atlasfalls",
    ids: [14285, 4]
  },
  {
    kind: "mapItem",
    questId: 10130,
    map: "atlasfalls",
    ids: [14286, 14287]
  },
  {
    kind: "mapItem",
    questId: 10131,
    map: "atlasfalls",
    ids: [14288, 4]
  },
  { kind: "mapItem", questId: 10132, map: "atlasfalls", ids: [14289] },
  {
    kind: "mapItem",
    questId: 10134,
    map: "atlasfalls",
    ids: [14290, 4]
  },
  { kind: "mapItem", questId: 10135, map: "atlasfalls", ids: [14291] },
  {
    kind: "mapItem",
    questId: 10116,
    map: "atlaskingdom",
    ids: [14252]
  },
  {
    kind: "mapItem",
    questId: 10117,
    map: "atlaskingdom",
    ids: [14253, 14254, 14255]
  },
  {
    kind: "mapItem",
    questId: 10119,
    map: "atlaskingdom",
    ids: [14256, 14257]
  },
  {
    kind: "mapItem",
    questId: 10121,
    map: "atlaskingdom",
    ids: [14258, 14259, 14260]
  },
  {
    kind: "mapItem",
    questId: 10106,
    map: "atlaspromenade",
    ids: [14204]
  },
  {
    kind: "mapItem",
    questId: 10108,
    map: "atlaspromenade",
    ids: [14205]
  },
  {
    kind: "mapItem",
    questId: 10109,
    map: "atlaspromenade",
    ids: [14206]
  },
  {
    kind: "mapItem",
    questId: 10110,
    map: "atlaspromenade",
    ids: [14207]
  },
  {
    kind: "mapItem",
    questId: 10114,
    map: "atlaspromenade",
    ids: [14208]
  },
  {
    kind: "kill",
    questId: 8556,
    map: "dagerecruit",
    monsters: ["Dark Makai"]
  },
  {
    kind: "kill",
    questId: 8565,
    map: "dagerecruit",
    monsters: ["Nuckelavee"]
  },
  {
    kind: "kill",
    questId: 8566,
    map: "dagerecruit",
    monsters: ["Bloodfiend"]
  },
  {
    kind: "kill",
    questId: 8567,
    map: "dagerecruit",
    monsters: ["Bloodfiend"]
  },
  {
    kind: "kill",
    questId: 8569,
    map: "dagerecruit",
    monsters: ["Infernal Fiend"]
  },
  {
    kind: "kill",
    questId: 8570,
    map: "dagerecruit",
    monsters: ["Smaras"]
  },
  {
    kind: "kill",
    questId: 8573,
    map: "dagerecruit",
    monsters: ["Shadow Clone"]
  },
  {
    kind: "kill",
    questId: 8574,
    map: "dagerecruit",
    monsters: ["Shadow Clone"]
  },
  {
    kind: "kill",
    questId: 8584,
    map: "darkwarlegion",
    monsters: ["Dreadfiend"]
  },
  {
    kind: "kill",
    questId: 8586,
    map: "darkwarlegion",
    monsters: ["Dreadfiend"]
  },
  {
    kind: "kill",
    questId: 8587,
    map: "darkwarlegion",
    monsters: ["Manslayer Fiend"]
  },
  {
    kind: "kill",
    questId: 8588,
    map: "darkwarlegion",
    monsters: ["Dirtlicker"]
  },
  {
    kind: "kill",
    questId: 8580,
    map: "darkwarnation",
    monsters: ["Legion Doomknight"]
  },
  {
    kind: "kill",
    questId: 8581,
    map: "darkwarnation",
    monsters: ["Legion Dread Knight"]
  },
  {
    kind: "kill",
    questId: 8582,
    map: "darkwarnation",
    monsters: ["War"]
  },
  {
    kind: "kill",
    questId: 8583,
    map: "darkwarnation",
    monsters: ["Dage the Evil"]
  },
  {
    kind: "mapItem",
    questId: 8557,
    map: "dagerecruit",
    ids: [9883, 4]
  },
  {
    kind: "mapItem",
    questId: 8559,
    map: "dagerecruit",
    ids: [9884]
  },
  {
    kind: "mapItem",
    questId: 8561,
    map: "dagerecruit",
    ids: [9885]
  },
  {
    kind: "mapItem",
    questId: 8563,
    map: "dagerecruit",
    ids: [9885]
  },
  {
    kind: "mapItem",
    questId: 8564,
    map: "dagerecruit",
    ids: [9886]
  },
  {
    kind: "mapItem",
    questId: 8568,
    map: "dagerecruit",
    ids: [9887, 4]
  },
  {
    kind: "mapItem",
    questId: 8572,
    map: "dagerecruit",
    ids: [9888, 4]
  },
  {
    kind: "kill",
    questId: 2902,
    map: "ravenscar",
    monsters: ["Restless Undead", "Restless Undead"]
  },
  {
    kind: "kill",
    questId: 2904,
    map: "ravenscar",
    monsters: ["Restless Undead"]
  },
  {
    kind: "kill",
    questId: 2905,
    map: "ravenscar",
    monsters: ["Undead Soldier"]
  },
  {
    kind: "kill",
    questId: 2906,
    map: "ravenscar",
    monsters: ["Shadowman"]
  },
  { kind: "mapItem", questId: 2901, map: "ravenscar", ids: [1767] },
  { kind: "mapItem", questId: 2903, map: "ravenscar", ids: [1768] },
  { kind: "mapItem", questId: 2907, map: "ravenscar", ids: [1769] },
  {
    kind: "kill",
    questId: 6238,
    map: "worldsoul",
    monsters: ["Dwakel Infiltrator", "Dwakel Infiltrator", "Dwakel Infiltrator", "Dwakel Infiltrator"]
  },
  {
    kind: "kill",
    questId: 6239,
    map: "worldsoul",
    monsters: ["Divine Water Elemental"]
  },
  {
    kind: "kill",
    questId: 6240,
    map: "worldsoul",
    monsters: ["Divine Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 6241,
    map: "worldsoul",
    monsters: ["Skeletal Squatter"]
  },
  {
    kind: "kill",
    questId: 6242,
    map: "worldsoul",
    monsters: ["Radioactive Hydra"]
  },
  {
    kind: "kill",
    questId: 6243,
    map: "worldsoul",
    monsters: ["Legion Dreadmarch"]
  },
  {
    kind: "kill",
    questId: 6245,
    map: "worldsoul",
    monsters: ["Core Guardian"]
  },
  { kind: "mapItem", questId: 6241, map: "worldsoul", ids: [5681, 3] },
  { kind: "mapItem", questId: 6243, map: "worldsoul", ids: [5680] },
  { kind: "mapItem", questId: 6244, map: "worldsoul", ids: [5682] },
  {
    kind: "kill",
    questId: 7968,
    map: "sevencircles",
    monsters: ["Limbo Guard"]
  },
  {
    kind: "kill",
    questId: 7969,
    map: "sevencircles",
    monsters: ["Luxuria Guard"]
  },
  {
    kind: "kill",
    questId: 7971,
    map: "sevencircles",
    monsters: ["Luxuria"]
  },
  {
    kind: "kill",
    questId: 7973,
    map: "sevencircles",
    monsters: ["Gluttony Guard"]
  },
  {
    kind: "kill",
    questId: 7974,
    map: "sevencircles",
    monsters: ["Gluttony"]
  },
  {
    kind: "kill",
    questId: 7975,
    map: "sevencircles",
    monsters: ["Avarice Guard"]
  },
  {
    kind: "kill",
    questId: 7977,
    map: "sevencircles",
    monsters: ["Avarice"]
  },
  {
    kind: "kill",
    questId: 7979,
    map: "sevencircleswar",
    monsters: ["Wrath Guard"]
  },
  {
    kind: "kill",
    questId: 7980,
    map: "sevencircleswar",
    monsters: ["Wrath Guard"]
  },
  {
    kind: "kill",
    questId: 7981,
    map: "sevencircleswar",
    monsters: ["Wrath Guard"]
  },
  {
    kind: "kill",
    questId: 7982,
    map: "sevencircleswar",
    monsters: ["Wrath"]
  },
  {
    kind: "kill",
    questId: 7983,
    map: "sevencircleswar",
    monsters: ["Heresy Guard"]
  },
  {
    kind: "kill",
    questId: 7984,
    map: "sevencircleswar",
    monsters: ["Violence's Gatekeeper"]
  },
  {
    kind: "kill",
    questId: 7985,
    map: "sevencircleswar",
    monsters: ["Violence Guard"]
  },
  {
    kind: "kill",
    questId: 7986,
    map: "sevencircleswar",
    monsters: ["Geryon"]
  },
  {
    kind: "kill",
    questId: 7987,
    map: "sevencircleswar",
    monsters: ["Violence"]
  },
  {
    kind: "kill",
    questId: 7988,
    map: "sevencircleswar",
    monsters: ["Treachery Guard"]
  },
  {
    kind: "kill",
    questId: 7989,
    map: "sevencircleswar",
    monsters: ["Treachery"]
  },
  {
    kind: "mapItem",
    questId: 7972,
    map: "sevencircles",
    ids: [8206, 3]
  },
  {
    kind: "kill",
    questId: 6239,
    map: "worldsoul",
    monsters: ["Divine Water Elemental"]
  },
  {
    kind: "kill",
    questId: 6240,
    map: "worldsoul",
    monsters: ["Divine Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 6241,
    map: "worldsoul",
    monsters: ["Skeletal Squatter"]
  },
  {
    kind: "kill",
    questId: 6242,
    map: "worldsoul",
    monsters: ["Radioactive Hydra"]
  },
  {
    kind: "kill",
    questId: 6243,
    map: "worldsoul",
    monsters: ["Legion Dreadmarch"]
  },
  {
    kind: "kill",
    questId: 6244,
    map: "worldsoul",
    monsters: ["Legion Dreadmarch"]
  },
  {
    kind: "kill",
    questId: 6245,
    map: "worldsoul",
    monsters: ["Core Guardian"]
  },
  { kind: "mapItem", questId: 6241, map: "worldsoul", ids: [5681, 3] },
  { kind: "mapItem", questId: 6243, map: "worldsoul", ids: [5680] },
  { kind: "mapItem", questId: 6244, map: "worldsoul", ids: [5682] },
  {
    kind: "kill",
    questId: 183,
    map: "battleundera",
    monsters: ["Skeletal Fire Mage"]
  },
  {
    kind: "kill",
    questId: 177,
    map: "swordhavenundead",
    monsters: ["Skeletal Ice Mage"]
  },
  {
    kind: "kill",
    questId: 178,
    map: "swordhavenundead",
    monsters: ["Undead Giant"]
  },
  {
    kind: "kill",
    questId: 180,
    map: "castleundead",
    monsters: ["Skeletal Viking"]
  },
  {
    kind: "kill",
    questId: 196,
    map: "chaoscrypt",
    monsters: ["Chaorrupted Armor"]
  },
  {
    kind: "kill",
    questId: 6218,
    map: "chaoscrypt",
    monsters: ["Chaorrupted Knight"]
  },
  {
    kind: "kill",
    questId: 6219,
    map: "forestchaos",
    monsters: ["Chaorrupted Bear", "Chaorrupted Wolf"]
  },
  {
    kind: "kill",
    questId: 245,
    map: "mobius",
    monsters: ["Chaos Sp-Eye"]
  },
  {
    kind: "kill",
    questId: 247,
    map: "mobius",
    monsters: ["Fire Imp"]
  },
  {
    kind: "kill",
    questId: 248,
    map: "mobius",
    monsters: ["Cyclops Raider"]
  },
  {
    kind: "kill",
    questId: 249,
    map: "mobius",
    monsters: ["Slugfit"]
  },
  {
    kind: "kill",
    questId: 250,
    map: "faerie",
    monsters: ["Chainsaw Sneevil"]
  },
  {
    kind: "kill",
    questId: 252,
    map: "faerie",
    monsters: ["Chainsaw Sneevil"]
  },
  {
    kind: "kill",
    questId: 255,
    map: "faerie",
    monsters: ["Cyclops Warlord"]
  },
  {
    kind: "kill",
    questId: 256,
    map: "faerie",
    monsters: ["Aracara"]
  },
  {
    kind: "kill",
    questId: 257,
    map: "cornelis",
    monsters: ["Gargoyle"]
  },
  {
    kind: "kill",
    questId: 258,
    map: "cornelis",
    monsters: ["Gargoyle"]
  },
  {
    kind: "kill",
    questId: 259,
    map: "cornelis",
    monsters: ["Stone Golem"]
  },
  {
    kind: "kill",
    questId: 264,
    map: "mobius",
    monsters: ["Cyclops Raider"]
  },
  {
    kind: "kill",
    questId: 268,
    map: "relativity",
    monsters: ["Cyclops Raider"]
  },
  {
    kind: "kill",
    questId: 269,
    map: "relativity",
    monsters: ["Fire Imp"]
  },
  {
    kind: "kill",
    questId: 270,
    map: "relativity",
    monsters: ["Head Gargoyle"]
  },
  {
    kind: "kill",
    questId: 320,
    map: "pines",
    monsters: ["Pine Grizzly"]
  },
  {
    kind: "kill",
    questId: 321,
    map: "pines",
    monsters: ["Red Shell Turtle"]
  },
  {
    kind: "kill",
    questId: 322,
    map: "pines",
    monsters: ["Twistedtooth"]
  },
  {
    kind: "kill",
    questId: 324,
    map: "pines",
    monsters: ["Red Shell Turtle"]
  },
  {
    kind: "kill",
    questId: 325,
    map: "pines",
    monsters: ["Pine Grizzly"]
  },
  {
    kind: "kill",
    questId: 326,
    map: "pines",
    monsters: ["LeatherWing"]
  },
  {
    kind: "kill",
    questId: 331,
    map: "mountainpath",
    monsters: ["Ore Balboa"]
  },
  {
    kind: "kill",
    questId: 332,
    map: "mountainpath",
    monsters: ["Vultragon"]
  },
  {
    kind: "kill",
    questId: 333,
    map: "dwarfhold",
    monsters: ["Chaos Drow"]
  },
  {
    kind: "kill",
    questId: 334,
    map: "dwarfhold",
    monsters: ["Glow Worm"]
  },
  {
    kind: "kill",
    questId: 335,
    map: "dwarfhold",
    monsters: ["Albino Bat"]
  },
  {
    kind: "kill",
    questId: 336,
    map: "dwarfhold",
    monsters: ["Chaotic Draconian"]
  },
  {
    kind: "kill",
    questId: 338,
    map: "dwarfhold",
    monsters: ["Chaos Drow"]
  },
  {
    kind: "kill",
    questId: 339,
    map: "dwarfhold",
    monsters: ["Chaotic Draconian"]
  },
  {
    kind: "kill",
    questId: 347,
    map: "uppercity",
    monsters: ["Drow Assassin"]
  },
  {
    kind: "kill",
    questId: 348,
    map: "uppercity",
    monsters: ["Chaotic Draconian"]
  },
  {
    kind: "kill",
    questId: 349,
    map: "uppercity",
    monsters: ["Chaos Egg"]
  },
  {
    kind: "kill",
    questId: 350,
    map: "uppercity",
    monsters: ["Terradactyl"]
  },
  {
    kind: "kill",
    questId: 351,
    map: "uppercity",
    monsters: ["Rhino Beetle"]
  },
  {
    kind: "kill",
    questId: 352,
    map: "uppercity",
    monsters: ["Cave Lizard"]
  },
  {
    kind: "kill",
    questId: 355,
    map: "dwarfprison",
    monsters: ["Warden Elfis"]
  },
  {
    kind: "kill",
    questId: 356,
    map: "dwarfprison",
    monsters: ["Albino Bat", "Balboa", "Chaos Drow"]
  },
  {
    kind: "kill",
    questId: 382,
    map: "dragonkoi",
    monsters: ["Ryoku"]
  },
  {
    kind: "kill",
    questId: 406,
    map: "hachiko",
    monsters: ["Dai Tengu"]
  },
  {
    kind: "kill",
    questId: 467,
    map: "bamboo",
    monsters: ["Tanuki", "Tanuki"]
  },
  {
    kind: "kill",
    questId: 468,
    map: "bamboo",
    monsters: ["SoulTaker"]
  },
  {
    kind: "kill",
    questId: 471,
    map: "junkyard",
    monsters: ["Onibaba"]
  },
  {
    kind: "kill",
    questId: 473,
    map: "yokairiver",
    monsters: ["Funa-Yurei", "Funa-Yurei", "Funa-Yurei"]
  },
  {
    kind: "kill",
    questId: 476,
    map: "yokairiver",
    monsters: ["Nure Onna"]
  },
  {
    kind: "kill",
    questId: 477,
    map: "yokaigrave",
    monsters: ["Skello Kitty"]
  },
  {
    kind: "kill",
    questId: 478,
    map: "yokaigrave",
    monsters: ["Ninja Nopperabo", "Samurai Nopperabo"]
  },
  {
    kind: "kill",
    questId: 479,
    map: "yokaigrave",
    monsters: ["Neko Mata"]
  },
  {
    kind: "kill",
    questId: 481,
    map: "odokuro",
    monsters: ["O-dokuro"]
  },
  {
    kind: "kill",
    questId: 484,
    map: "yokaiwar",
    monsters: ["O-Dokuro's Head"]
  },
  {
    kind: "kill",
    questId: 488,
    map: "kitsune",
    monsters: ["kitsune"]
  },
  {
    kind: "kill",
    questId: 495,
    map: "darkoviagrave",
    monsters: ["Skeletal Fire Mage"]
  },
  {
    kind: "kill",
    questId: 496,
    map: "darkoviagrave",
    monsters: ["Rattlebones"]
  },
  {
    kind: "kill",
    questId: 497,
    map: "darkoviagrave",
    monsters: ["Albino Bat"]
  },
  {
    kind: "kill",
    questId: 498,
    map: "darkoviagrave",
    monsters: ["Blightfang"]
  },
  {
    kind: "kill",
    questId: 308,
    map: "greenguardeast",
    monsters: ["Wolf"]
  },
  {
    kind: "kill",
    questId: 309,
    map: "greenguardwest",
    monsters: ["Slime"]
  },
  {
    kind: "kill",
    questId: 310,
    map: "greenguardwest",
    monsters: ["Frogzard"]
  },
  {
    kind: "kill",
    questId: 311,
    map: "greenguardeast",
    monsters: ["Spider"]
  },
  {
    kind: "kill",
    questId: 516,
    map: "darkoviaforest",
    monsters: ["Dire Wolf"]
  },
  {
    kind: "kill",
    questId: 518,
    map: "darkoviaforest",
    monsters: ["Lich of the Stone"]
  },
  {
    kind: "kill",
    questId: 519,
    map: "safiria",
    monsters: ["Blood Maggot"]
  },
  {
    kind: "kill",
    questId: 520,
    map: "safiria",
    monsters: ["Albino Bat"]
  },
  {
    kind: "kill",
    questId: 521,
    map: "safiria",
    monsters: ["Chaos Lycan"]
  },
  {
    kind: "kill",
    questId: 522,
    map: "safiria",
    monsters: ["Twisted Paw"]
  },
  {
    kind: "kill",
    questId: 534,
    map: "lycan",
    monsters: ["Dire Wolf"]
  },
  {
    kind: "kill",
    questId: 535,
    map: "lycan",
    monsters: ["Lycan Knight", "Lycan"]
  },
  {
    kind: "kill",
    questId: 536,
    map: "lycan",
    monsters: ["Chaos Vampire Knight"]
  },
  {
    kind: "kill",
    questId: 565,
    map: "chaoscave",
    monsters: ["Werepyre"]
  },
  {
    kind: "kill",
    questId: 648,
    map: "stairway",
    monsters: ["Grateful Undead", "Rock Lobster"]
  },
  {
    kind: "kill",
    questId: 649,
    map: "stairway",
    monsters: ["Rock Lobster"]
  },
  {
    kind: "kill",
    questId: 650,
    map: "stairway",
    monsters: ["Grateful Undead"]
  },
  {
    kind: "kill",
    questId: 651,
    map: "stairway",
    monsters: ["Elwood Bruise", "Jake Bruise"]
  },
  {
    kind: "kill",
    questId: 658,
    map: "beehive",
    monsters: ["Stinger"]
  },
  {
    kind: "kill",
    questId: 659,
    map: "beehive",
    monsters: ["Killer Queen Bee"]
  },
  {
    kind: "kill",
    questId: 677,
    map: "orchestra",
    monsters: ["Mozard"]
  },
  {
    kind: "kill",
    questId: 678,
    map: "orchestra",
    monsters: ["Faust"]
  },
  {
    kind: "kill",
    questId: 4827,
    map: "stairway",
    monsters: ["Rock Lobster", "Grateful Undead"]
  },
  {
    kind: "kill",
    questId: 808,
    map: "cloister",
    monsters: ["Acornent"]
  },
  {
    kind: "kill",
    questId: 809,
    map: "cloister",
    monsters: ["Karasu"]
  },
  {
    kind: "kill",
    questId: 811,
    map: "cloister",
    monsters: ["Wendigo"]
  },
  {
    kind: "kill",
    questId: 814,
    map: "mudluk",
    monsters: ["Swamp Lurker"]
  },
  {
    kind: "kill",
    questId: 815,
    map: "mudluk",
    monsters: ["Swamp Lurker"]
  },
  {
    kind: "kill",
    questId: 816,
    map: "arcangrove",
    monsters: ["Gorillaphant"]
  },
  {
    kind: "kill",
    questId: 817,
    map: "mudluk",
    monsters: ["Swamp Frogdrake"]
  },
  {
    kind: "kill",
    questId: 818,
    map: "mudluk",
    monsters: ["Tiger Leech"]
  },
  {
    kind: "kill",
    questId: 827,
    map: "natatorium",
    monsters: ["Anglerfish"]
  },
  {
    kind: "kill",
    questId: 828,
    map: "natatorium",
    monsters: ["Merdraconian"]
  },
  {
    kind: "kill",
    questId: 830,
    map: "natatorium",
    monsters: ["Nessie"]
  },
  {
    kind: "kill",
    questId: 836,
    map: "gilead",
    monsters: ["Mana Elemental"]
  },
  {
    kind: "kill",
    questId: 839,
    map: "mafic",
    monsters: ["Volcanic Maggot"]
  },
  {
    kind: "kill",
    questId: 840,
    map: "mafic",
    monsters: ["Scoria Serpent"]
  },
  {
    kind: "kill",
    questId: 841,
    map: "mafic",
    monsters: ["Living Fire"]
  },
  {
    kind: "kill",
    questId: 842,
    map: "mafic",
    monsters: ["Mafic Dragon"]
  },
  {
    kind: "kill",
    questId: 843,
    map: "elemental",
    monsters: ["Mana Imp"]
  },
  {
    kind: "kill",
    questId: 844,
    map: "elemental",
    monsters: ["Mana Falcon"]
  },
  {
    kind: "kill",
    questId: 847,
    map: "ledgermayne",
    monsters: ["Ledgermayne"]
  },
  {
    kind: "kill",
    questId: 931,
    map: "sandport",
    monsters: ["Sandshark"]
  },
  {
    kind: "kill",
    questId: 932,
    map: "sandport",
    monsters: ["Tomb Robber"]
  },
  {
    kind: "kill",
    questId: 933,
    map: "sandport",
    monsters: ["Tomb Robber"]
  },
  {
    kind: "kill",
    questId: 967,
    map: "pyramid",
    monsters: ["Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 968,
    map: "pyramid",
    monsters: ["Anubis Deathguard"]
  },
  {
    kind: "kill",
    questId: 969,
    map: "pyramid",
    monsters: ["Mummy"]
  },
  {
    kind: "kill",
    questId: 970,
    map: "pyramid",
    monsters: ["Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 996,
    map: "sandcastle",
    monsters: ["War Hyena"]
  },
  {
    kind: "kill",
    questId: 997,
    map: "sandcastle",
    monsters: ["War Mummy"]
  },
  {
    kind: "kill",
    questId: 998,
    map: "sandcastle",
    monsters: ["War Hyena"]
  },
  {
    kind: "kill",
    questId: 999,
    map: "sandcastle",
    monsters: ["Chaos Sphinx"]
  },
  {
    kind: "kill",
    questId: 1000,
    map: "djinn",
    monsters: ["Lamia"]
  },
  {
    kind: "kill",
    questId: 1001,
    map: "sandsea",
    monsters: ["Desert Vase"]
  },
  {
    kind: "kill",
    questId: 1002,
    map: "sandsea",
    monsters: ["Bupers Camel"]
  },
  {
    kind: "kill",
    questId: 1003,
    map: "djinn",
    monsters: ["Harpy"]
  },
  {
    kind: "kill",
    questId: 1005,
    map: "djinn",
    monsters: ["Tibicenas"]
  },
  {
    kind: "kill",
    questId: 1282,
    map: "ravinetemple",
    monsters: ["Temple Guardian"]
  },
  {
    kind: "kill",
    questId: 1283,
    map: "ravinetemple",
    monsters: ["Temple Guardian"]
  },
  {
    kind: "kill",
    questId: 1284,
    map: "ravinetemple",
    monsters: ["Temple Guardian"]
  },
  {
    kind: "kill",
    questId: 1379,
    map: "alliance",
    monsters: ["Chaorrupted Evil Soldier"]
  },
  {
    kind: "kill",
    questId: 1424,
    map: "ancienttemple",
    monsters: ["Chaotic Vulture"]
  },
  {
    kind: "kill",
    questId: 1425,
    map: "ancienttemple",
    monsters: ["Chaotic Vulture"]
  },
  {
    kind: "kill",
    questId: 1426,
    map: "ancienttemple",
    monsters: ["Chaos Troll Spirit"]
  },
  {
    kind: "kill",
    questId: 1427,
    map: "ancienttemple",
    monsters: ["Serpentress"]
  },
  {
    kind: "kill",
    questId: 1457,
    map: "orecavern",
    monsters: ["Crashroom"]
  },
  {
    kind: "kill",
    questId: 1459,
    map: "orecavern",
    monsters: ["Chaorrupted Evil Soldier"]
  },
  {
    kind: "kill",
    questId: 1460,
    map: "orecavern",
    monsters: ["Naga Baas"]
  },
  {
    kind: "kill",
    questId: 1227,
    map: "crossroads",
    monsters: ["Lemurphant", "Koalion"]
  },
  {
    kind: "kill",
    questId: 1276,
    map: "ravinetemple",
    monsters: ["Temple Guardian"]
  },
  {
    kind: "kill",
    questId: 1277,
    map: "ravinetemple",
    monsters: ["Temple Guardian"]
  },
  {
    kind: "kill",
    questId: 1278,
    map: "ravinetemple",
    monsters: ["Temple Guardian"]
  },
  {
    kind: "kill",
    questId: 1370,
    map: "alliance",
    monsters: ["Good Soldier", "Evil Soldier"]
  },
  {
    kind: "kill",
    questId: 1373,
    map: "alliance",
    monsters: ["Chaorrupted Evil Soldier"]
  },
  {
    kind: "kill",
    questId: 1374,
    map: "alliance",
    monsters: ["General Cynari", "General Tibias"]
  },
  {
    kind: "kill",
    questId: 1419,
    map: "ancienttemple",
    monsters: ["Chaotic Vulture"]
  },
  {
    kind: "kill",
    questId: 1420,
    map: "ancienttemple",
    monsters: ["Chaotic Vulture"]
  },
  {
    kind: "kill",
    questId: 1421,
    map: "ancienttemple",
    monsters: ["Chaos Troll Spirit"]
  },
  {
    kind: "kill",
    questId: 1422,
    map: "ancienttemple",
    monsters: ["Serpentress"]
  },
  {
    kind: "kill",
    questId: 1452,
    map: "orecavern",
    monsters: ["Crashroom"]
  },
  {
    kind: "kill",
    questId: 1454,
    map: "orecavern",
    monsters: ["Chaorrupted Evil Soldier"]
  },
  {
    kind: "kill",
    questId: 1455,
    map: "orecavern",
    monsters: ["Naga Baas"]
  },
  {
    kind: "kill",
    questId: 1467,
    map: "dreamnexus",
    monsters: ["Solar Phoenix", "Solar Phoenix"]
  },
  {
    kind: "kill",
    questId: 1468,
    map: "dreamnexus",
    monsters: ["Khasaanda"]
  },
  {
    kind: "kill",
    questId: 2240,
    map: "timelibrary",
    monsters: ["Sneak", "Tog", "Shadowscythe"]
  },
  {
    kind: "kill",
    questId: 2253,
    map: "timevoid",
    monsters: ["Ephemerite"]
  },
  {
    kind: "kill",
    questId: 2255,
    map: "timevoid",
    monsters: ["Ephemerite", "Time-Travel Fairy"]
  },
  {
    kind: "kill",
    questId: 2256,
    map: "timevoid",
    monsters: ["Time-Travel Fairy", "Void Phoenix"]
  },
  {
    kind: "kill",
    questId: 2258,
    map: "timevoid",
    monsters: ["Unending Avatar"]
  },
  {
    kind: "kill",
    questId: 2377,
    map: "aqlesson",
    monsters: ["Ninja"]
  },
  {
    kind: "kill",
    questId: 2379,
    map: "aqlesson",
    monsters: ["Eternite Ore", "Water Elemental"]
  },
  {
    kind: "kill",
    questId: 2380,
    map: "aqlesson",
    monsters: ["Ice Elemental", "Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 2381,
    map: "aqlesson",
    monsters: ["Void Dragon"]
  },
  {
    kind: "kill",
    questId: 2382,
    map: "aqlesson",
    monsters: ["Firezard"]
  },
  {
    kind: "kill",
    questId: 2383,
    map: "aqlesson",
    monsters: ["Ice Elemental"]
  },
  {
    kind: "kill",
    questId: 2385,
    map: "aqlesson",
    monsters: ["Akriloth"]
  },
  {
    kind: "kill",
    questId: 2386,
    map: "aqlesson",
    monsters: ["Carnax"]
  },
  {
    kind: "kill",
    questId: 2474,
    map: "dflesson",
    monsters: ["Vultragon"]
  },
  {
    kind: "kill",
    questId: 2475,
    map: "dflesson",
    monsters: ["Chaos Sp-Eye"]
  },
  {
    kind: "kill",
    questId: 2476,
    map: "dflesson",
    monsters: ["Chaorrupted Evil Soldier"]
  },
  {
    kind: "kill",
    questId: 2477,
    map: "dflesson",
    monsters: ["Lava Golem", "Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 2478,
    map: "dflesson",
    monsters: ["Chaotic Horcboar", "Chaotic Chicken"]
  },
  {
    kind: "kill",
    questId: 2479,
    map: "dflesson",
    monsters: ["Fluffy the Dracolich"]
  },
  {
    kind: "kill",
    questId: 2505,
    map: "mqlesson",
    monsters: ["Asteroid"]
  },
  {
    kind: "kill",
    questId: 2507,
    map: "mqlesson",
    monsters: ["MystRaven Student"]
  },
  {
    kind: "kill",
    questId: 2508,
    map: "mqlesson",
    monsters: ["Training Globe"]
  },
  {
    kind: "kill",
    questId: 2509,
    map: "mqlesson",
    monsters: ["MystRaven Student"]
  },
  {
    kind: "kill",
    questId: 2510,
    map: "mqlesson",
    monsters: ["Chaos Shadowscythe"]
  },
  {
    kind: "kill",
    questId: 2512,
    map: "mqlesson",
    monsters: ["Dragonoid"]
  },
  {
    kind: "kill",
    questId: 2513,
    map: "deepchaos",
    monsters: ["Chaotic Merdrac"]
  },
  {
    kind: "kill",
    questId: 2515,
    map: "deepchaos",
    monsters: ["Chaos Angler"]
  },
  {
    kind: "kill",
    questId: 2517,
    map: "deepchaos",
    monsters: ["Kathool"]
  },
  {
    kind: "kill",
    questId: 2520,
    map: "ultravoid",
    monsters: ["Ultra Kathool"]
  },
  {
    kind: "kill",
    questId: 2521,
    map: "ultravoid",
    monsters: ["Ultra Iadoa"]
  },
  {
    kind: "kill",
    questId: 2388,
    map: "ultracarnax",
    monsters: ["Ultra-Carnax"]
  },
  {
    kind: "kill",
    questId: 2612,
    map: "blackhorn",
    monsters: ["Restless Undead"]
  },
  {
    kind: "kill",
    questId: 2614,
    map: "blackhorn",
    monsters: ["Tomb Spider"]
  },
  {
    kind: "kill",
    questId: 2615,
    map: "blackhorn",
    monsters: ["Restless Undead", "Tomb Spider"]
  },
  {
    kind: "kill",
    questId: 2617,
    map: "blackhorn",
    monsters: ["Bonefeeder Spider"]
  },
  {
    kind: "kill",
    questId: 2619,
    map: "blackhorn",
    monsters: ["Tomb Spider"]
  },
  {
    kind: "kill",
    questId: 2620,
    map: "blackhorn",
    monsters: ["Restless Undead"]
  },
  {
    kind: "kill",
    questId: 2623,
    map: "onslaughttower",
    monsters: ["Golden Caster"]
  },
  {
    kind: "kill",
    questId: 2624,
    map: "onslaughttower",
    monsters: ["Golden Caster"]
  },
  {
    kind: "kill",
    questId: 2628,
    map: "onslaughttower",
    monsters: ["Golden Caster"]
  },
  {
    kind: "kill",
    questId: 2630,
    map: "onslaughttower",
    monsters: ["Maximillian Lionfang"]
  },
  {
    kind: "kill",
    questId: 2666,
    map: "falguard",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2668,
    map: "falguard",
    monsters: ["Chaonslaught Warrior", "Chaonslaught Cavalry"]
  },
  {
    kind: "kill",
    questId: 2670,
    map: "falguard",
    monsters: ["Chaonslaught Warrior"]
  },
  {
    kind: "kill",
    questId: 2673,
    map: "falguard",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2675,
    map: "falguard",
    monsters: ["Primarch"]
  },
  {
    kind: "kill",
    questId: 2720,
    map: "deathpits",
    monsters: ["Rotting Darkblood"]
  },
  {
    kind: "kill",
    questId: 2722,
    map: "deathpits",
    monsters: ["Rotting Darkblood"]
  },
  {
    kind: "kill",
    questId: 2723,
    map: "deathpits",
    monsters: ["Rotting Darkblood"]
  },
  {
    kind: "kill",
    questId: 2724,
    map: "deathpits",
    monsters: ["Ghastly Darkblood"]
  },
  {
    kind: "kill",
    questId: 2725,
    map: "deathpits",
    monsters: ["Ghastly Darkblood"]
  },
  {
    kind: "kill",
    questId: 2727,
    map: "deathpits",
    monsters: ["Rotting Darkblood"]
  },
  {
    kind: "kill",
    questId: 2728,
    map: "deathpits",
    monsters: ["Ghastly Darkblood"]
  },
  {
    kind: "kill",
    questId: 2729,
    map: "deathpits",
    monsters: ["Sundered Darkblood"]
  },
  {
    kind: "kill",
    questId: 2740,
    map: "deathpits",
    monsters: ["Wrathful Vestis"]
  },
  {
    kind: "kill",
    questId: 2793,
    map: "venomvaults",
    monsters: ["Chaonslaught Warrior"]
  },
  {
    kind: "kill",
    questId: 2797,
    map: "venomvaults",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2799,
    map: "venomvaults",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2800,
    map: "venomvaults",
    monsters: ["Chaonslaught Warrior"]
  },
  {
    kind: "kill",
    questId: 2801,
    map: "venomvaults",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2803,
    map: "venomvaults",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2804,
    map: "venomvaults",
    monsters: ["Manticore"]
  },
  {
    kind: "kill",
    questId: 2807,
    map: "stormtemple",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2808,
    map: "stormtemple",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2810,
    map: "stormtemple",
    monsters: ["Chaonslaught Caster"]
  },
  {
    kind: "kill",
    questId: 2812,
    map: "stormtemple",
    monsters: ["Chaonslaught Cavalry"]
  },
  {
    kind: "kill",
    questId: 2814,
    map: "stormtemple",
    monsters: ["Chaos Lord Lionfang"]
  },
  {
    kind: "kill",
    questId: 2911,
    map: "battleoff",
    monsters: ["Evil Moglin"]
  },
  {
    kind: "kill",
    questId: 2912,
    map: "battleoff",
    monsters: ["Evil Moglin"]
  },
  {
    kind: "kill",
    questId: 2913,
    map: "brightfall",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2914,
    map: "brightfall",
    monsters: ["Undead Mage"]
  },
  {
    kind: "kill",
    questId: 2917,
    map: "brightfall",
    monsters: ["Painadin Overlord"]
  },
  {
    kind: "kill",
    questId: 2919,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2920,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2921,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2922,
    map: "overworld",
    monsters: ["Undead Mage"]
  },
  {
    kind: "kill",
    questId: 2924,
    map: "overworld",
    monsters: ["Undead Bruiser"]
  },
  {
    kind: "kill",
    questId: 2925,
    map: "overworld",
    monsters: ["Undead Bruiser"]
  },
  {
    kind: "kill",
    questId: 2926,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2928,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2929,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2930,
    map: "overworld",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 2932,
    map: "overworld",
    monsters: ["Undead Artix"]
  },
  {
    kind: "kill",
    questId: 3166,
    map: "reddeath",
    monsters: ["Fire Leech"]
  },
  {
    kind: "kill",
    questId: 3167,
    map: "reddeath",
    monsters: ["Reddeath Moglin"]
  },
  {
    kind: "kill",
    questId: 3169,
    map: "reddeath",
    monsters: ["Fire Leech"]
  },
  {
    kind: "kill",
    questId: 3170,
    map: "reddeath",
    monsters: ["Grim Widow"]
  },
  {
    kind: "kill",
    questId: 3171,
    map: "reddeath",
    monsters: ["Swamp Wraith"]
  },
  {
    kind: "kill",
    questId: 3172,
    map: "reddeath",
    monsters: ["Swamp Wraith"]
  },
  {
    kind: "kill",
    questId: 3077,
    map: "archives",
    monsters: ["Chaos Bandit"]
  },
  {
    kind: "kill",
    questId: 3078,
    map: "archives",
    monsters: ["Camouflaged Sp-eye"]
  },
  {
    kind: "kill",
    questId: 3079,
    map: "archives",
    monsters: ["Chaos Bandit", "Camouflaged Sp-eye"]
  },
  {
    kind: "kill",
    questId: 3080,
    map: "archives",
    monsters: ["Chaos Bandit"]
  },
  {
    kind: "kill",
    questId: 3081,
    map: "archives",
    monsters: ["Chaos Rat"]
  },
  {
    kind: "kill",
    questId: 3082,
    map: "archives",
    monsters: ["Chaos Spider"]
  },
  {
    kind: "kill",
    questId: 3083,
    map: "archives",
    monsters: ["Chaos Rat", "Chaos Spider"]
  },
  {
    kind: "kill",
    questId: 3084,
    map: "archives",
    monsters: ["Sludgelord"]
  },
  {
    kind: "kill",
    questId: 3094,
    map: "armory",
    monsters: ["Chaorrupted Prisoner"]
  },
  {
    kind: "kill",
    questId: 3095,
    map: "armory",
    monsters: ["Chaorrupted Prisoner"]
  },
  {
    kind: "kill",
    questId: 3096,
    map: "armory",
    monsters: ["Chaos Drifter"]
  },
  {
    kind: "kill",
    questId: 3089,
    map: "armory",
    monsters: ["Chaorrupted Prisoner"]
  },
  {
    kind: "kill",
    questId: 3090,
    map: "armory",
    monsters: ["Chaos Mage"]
  },
  {
    kind: "kill",
    questId: 3091,
    map: "armory",
    monsters: ["Chaos Mage"]
  },
  {
    kind: "kill",
    questId: 3093,
    map: "armory",
    monsters: ["Chaos General"]
  },
  {
    kind: "kill",
    questId: 3120,
    map: "ceremony",
    monsters: ["Chaos Invader"]
  },
  {
    kind: "kill",
    questId: 3123,
    map: "mafic",
    monsters: ["Living Fire"]
  },
  {
    kind: "kill",
    questId: 3124,
    map: "ceremony",
    monsters: ["Chaos Invader"]
  },
  {
    kind: "kill",
    questId: 3126,
    map: "ceremony",
    monsters: ["Chaos Invader"]
  },
  {
    kind: "kill",
    questId: 3127,
    map: "ceremony",
    monsters: ["Chaos Justicar"]
  },
  {
    kind: "kill",
    questId: 3134,
    map: "chaosaltar",
    monsters: ["Princess Thrall"]
  },
  {
    kind: "kill",
    questId: 3158,
    map: "castleroof",
    monsters: ["Chaos Dragon"]
  },
  {
    kind: "kill",
    questId: 3160,
    map: "swordhavenfalls",
    monsters: ["Chaos Lord Alteon"]
  },
  {
    kind: "kill",
    questId: 3781,
    map: "newfinale",
    monsters: ["Alliance Virago"]
  },
  {
    kind: "kill",
    questId: 3788,
    map: "newfinale",
    monsters: ["Chaos Challenger"]
  },
  {
    kind: "kill",
    questId: 3783,
    map: "newfinale",
    monsters: ["Alliance Virago"]
  },
  {
    kind: "kill",
    questId: 3785,
    map: "newfinale",
    monsters: ["Alliance Virago"]
  },
  {
    kind: "kill",
    questId: 3790,
    map: "newfinale",
    monsters: ["Memory of Vampires"]
  },
  {
    kind: "kill",
    questId: 3787,
    map: "newfinale",
    monsters: ["Alliance Virago"]
  },
  {
    kind: "kill",
    questId: 3794,
    map: "newfinale",
    monsters: ["Alliance Soldier"]
  },
  {
    kind: "kill",
    questId: 3620,
    map: "shadowrise",
    monsters: ["Darkness Elemental"]
  },
  {
    kind: "kill",
    questId: 3821,
    map: "falcontower",
    monsters: ["DragonLord"]
  },
  {
    kind: "kill",
    questId: 3822,
    map: "falcontower",
    monsters: ["Dragon Drakath"]
  },
  {
    kind: "kill",
    questId: 3823,
    map: "falcontower",
    monsters: ["Sepulchure"]
  },
  {
    kind: "kill",
    questId: 3824,
    map: "falcontower",
    monsters: ["Alteon"]
  },
  {
    kind: "mapItem",
    questId: 179,
    map: "castleundead",
    ids: [38, 5]
  },
  {
    kind: "mapItem",
    questId: 6217,
    map: "chaoscrypt",
    ids: [5662]
  },
  { kind: "mapItem", questId: 246, map: "mobius", ids: [42, 5] },
  { kind: "mapItem", questId: 260, map: "mobius", ids: [44] },
  { kind: "mapItem", questId: 251, map: "faerie", ids: [43, 7] },
  { kind: "mapItem", questId: 261, map: "cornelis", ids: [45] },
  { kind: "mapItem", questId: 262, map: "cornelis", ids: [46] },
  { kind: "mapItem", questId: 263, map: "cornelis", ids: [47] },
  { kind: "mapItem", questId: 266, map: "mobius", ids: [48] },
  { kind: "mapItem", questId: 267, map: "mobius", ids: [49] },
  {
    kind: "mapItem",
    questId: 271,
    map: "hydra",
    ids: [50, 51, 52]
  },
  { kind: "mapItem", questId: 319, map: "tavern", ids: [56, 7] },
  { kind: "mapItem", questId: 344, map: "dwarfhold", ids: [60] },
  {
    kind: "mapItem",
    questId: 337,
    map: "dwarfhold",
    ids: [59, 7]
  },
  { kind: "mapItem", questId: 346, map: "uppercity", ids: [61] },
  { kind: "mapItem", questId: 362, map: "roc", ids: [62] },
  { kind: "mapItem", questId: 363, map: "stalagbite", ids: [63] },
  { kind: "mapItem", questId: 380, map: "yokaiboat", ids: [64] },
  { kind: "mapItem", questId: 466, map: "bamboo", ids: [90] },
  { kind: "mapItem", questId: 469, map: "junkyard", ids: [91] },
  {
    kind: "mapItem",
    questId: 494,
    map: "darkoviagrave",
    ids: [97]
  },
  { kind: "mapItem", questId: 564, map: "chaoscave", ids: [107] },
  { kind: "mapItem", questId: 805, map: "arcangrove", ids: [139] },
  { kind: "mapItem", questId: 806, map: "cloister", ids: [142] },
  { kind: "mapItem", questId: 807, map: "cloister", ids: [140] },
  { kind: "mapItem", questId: 813, map: "mudluk", ids: [143] },
  { kind: "mapItem", questId: 825, map: "natatorium", ids: [144] },
  {
    kind: "mapItem",
    questId: 826,
    map: "natatorium",
    ids: [145, 12]
  },
  { kind: "mapItem", questId: 831, map: "gilead", ids: [146] },
  { kind: "mapItem", questId: 838, map: "mafic", ids: [147] },
  { kind: "mapItem", questId: 930, map: "sandport", ids: [251] },
  { kind: "mapItem", questId: 971, map: "pyramid", ids: [304] },
  { kind: "mapItem", questId: 995, map: "sandcastle", ids: [361] },
  { kind: "mapItem", questId: 1004, map: "djinn", ids: [370, 5] },
  { kind: "mapItem", questId: 1232, map: "bloodtusk", ids: [523] },
  {
    kind: "mapItem",
    questId: 1234,
    map: "crossroads",
    ids: [525]
  },
  {
    kind: "mapItem",
    questId: 1235,
    map: "crossroads",
    ids: [521, 10]
  },
  {
    kind: "mapItem",
    questId: 1237,
    map: "crossroads",
    ids: [524, 5]
  },
  {
    kind: "mapItem",
    questId: 1237,
    map: "crossroads",
    ids: [522, 5]
  },
  {
    kind: "mapItem",
    questId: 1280,
    map: "ravinetemple",
    ids: [553]
  },
  {
    kind: "mapItem",
    questId: 1281,
    map: "ravinetemple",
    ids: [554, 5]
  },
  {
    kind: "mapItem",
    questId: 1281,
    map: "ravinetemple",
    ids: [555, 556, 10]
  },
  {
    kind: "mapItem",
    questId: 1283,
    map: "ravinetemple",
    ids: [557, 10]
  },
  {
    kind: "mapItem",
    questId: 1375,
    map: "alliance",
    ids: [679, 680]
  },
  {
    kind: "mapItem",
    questId: 1377,
    map: "alliance",
    ids: [675, 10]
  },
  { kind: "mapItem", questId: 1378, map: "alliance", ids: [676] },
  {
    kind: "mapItem",
    questId: 1425,
    map: "ancienttemple",
    ids: [706, 7]
  },
  {
    kind: "mapItem",
    questId: 1428,
    map: "ancienttemple",
    ids: [707]
  },
  { kind: "mapItem", questId: 1456, map: "orecavern", ids: [717] },
  {
    kind: "mapItem",
    questId: 1457,
    map: "orecavern",
    ids: [719, 5]
  },
  {
    kind: "mapItem",
    questId: 1458,
    map: "orecavern",
    ids: [718, 5]
  },
  {
    kind: "mapItem",
    questId: 1469,
    map: "dreamnexus",
    ids: [734, 735, 736, 737]
  },
  {
    kind: "mapItem",
    questId: 1471,
    map: "dreamnexus",
    ids: [738, 10]
  },
  {
    kind: "mapItem",
    questId: 1471,
    map: "dreamnexus",
    ids: [739, 11]
  },
  { kind: "mapItem", questId: 1226, map: "bloodtusk", ids: [523] },
  {
    kind: "mapItem",
    questId: 1228,
    map: "crossroads",
    ids: [525]
  },
  {
    kind: "mapItem",
    questId: 1229,
    map: "crossroads",
    ids: [521, 10]
  },
  {
    kind: "mapItem",
    questId: 1231,
    map: "crossroads",
    ids: [522, 5]
  },
  {
    kind: "mapItem",
    questId: 1231,
    map: "crossroads",
    ids: [524, 10]
  },
  {
    kind: "mapItem",
    questId: 1274,
    map: "ravinetemple",
    ids: [553]
  },
  {
    kind: "mapItem",
    questId: 1275,
    map: "ravinetemple",
    ids: [554, 5]
  },
  {
    kind: "mapItem",
    questId: 1275,
    map: "ravinetemple",
    ids: [555, 556, 10]
  },
  {
    kind: "mapItem",
    questId: 1277,
    map: "ravinetemple",
    ids: [557, 10]
  },
  {
    kind: "mapItem",
    questId: 1369,
    map: "alliance",
    ids: [679, 680]
  },
  {
    kind: "mapItem",
    questId: 1371,
    map: "alliance",
    ids: [675, 10]
  },
  { kind: "mapItem", questId: 1372, map: "alliance", ids: [676] },
  {
    kind: "mapItem",
    questId: 1420,
    map: "ancienttemple",
    ids: [706, 7]
  },
  {
    kind: "mapItem",
    questId: 1423,
    map: "ancienttemple",
    ids: [707]
  },
  { kind: "mapItem", questId: 1451, map: "orecavern", ids: [717] },
  {
    kind: "mapItem",
    questId: 1452,
    map: "orecavern",
    ids: [719, 5]
  },
  {
    kind: "mapItem",
    questId: 1453,
    map: "orecavern",
    ids: [718, 5]
  },
  {
    kind: "mapItem",
    questId: 1464,
    map: "dreamnexus",
    ids: [734, 735, 736, 737]
  },
  {
    kind: "mapItem",
    questId: 1466,
    map: "dreamnexus",
    ids: [738, 10]
  },
  {
    kind: "mapItem",
    questId: 1466,
    map: "dreamnexus",
    ids: [739, 11]
  },
  {
    kind: "mapItem",
    questId: 2239,
    map: "thespan",
    ids: [1358, 1359, 1360, 1361, 1362, 1363]
  },
  {
    kind: "mapItem",
    questId: 2241,
    map: "timelibrary",
    ids: [1365, 3]
  },
  {
    kind: "mapItem",
    questId: 2242,
    map: "timelibrary",
    ids: [1366, 2]
  },
  {
    kind: "mapItem",
    questId: 2243,
    map: "timelibrary",
    ids: [1367]
  },
  {
    kind: "mapItem",
    questId: 2244,
    map: "timelibrary",
    ids: [1368]
  },
  {
    kind: "mapItem",
    questId: 2254,
    map: "timevoid",
    ids: [1438, 16]
  },
  {
    kind: "mapItem",
    questId: 2255,
    map: "timevoid",
    ids: [1439, 12]
  },
  {
    kind: "mapItem",
    questId: 2257,
    map: "timevoid",
    ids: [1440, 1441, 1442, 1443]
  },
  { kind: "mapItem", questId: 2376, map: "aqlesson", ids: [1467] },
  {
    kind: "mapItem",
    questId: 2378,
    map: "aqlesson",
    ids: [1468, 8]
  },
  { kind: "mapItem", questId: 2378, map: "aqlesson", ids: [1469] },
  {
    kind: "mapItem",
    questId: 2379,
    map: "aqlesson",
    ids: [1470, 1471, 3]
  },
  {
    kind: "mapItem",
    questId: 2380,
    map: "aqlesson",
    ids: [1473, 1472, 3]
  },
  { kind: "mapItem", questId: 2384, map: "thespan", ids: [1474] },
  {
    kind: "mapItem",
    questId: 2470,
    map: "dflesson",
    ids: [1549, 8]
  },
  { kind: "mapItem", questId: 2504, map: "mqlesson", ids: [1580] },
  {
    kind: "mapItem",
    questId: 2506,
    map: "mqlesson",
    ids: [1581, 5]
  },
  {
    kind: "mapItem",
    questId: 2516,
    map: "deepchaos",
    ids: [1582, 3]
  },
  {
    kind: "mapItem",
    questId: 2613,
    map: "blackhorn",
    ids: [1615, 10]
  },
  {
    kind: "mapItem",
    questId: 2615,
    map: "blackhorn",
    ids: [1616]
  },
  {
    kind: "mapItem",
    questId: 2616,
    map: "blackhorn",
    ids: [1617]
  },
  {
    kind: "mapItem",
    questId: 2618,
    map: "blackhorn",
    ids: [1618]
  },
  {
    kind: "mapItem",
    questId: 2621,
    map: "blackhorn",
    ids: [1619]
  },
  {
    kind: "mapItem",
    questId: 2622,
    map: "onslaughttower",
    ids: [1620, 1621, 1622, 1623]
  },
  {
    kind: "mapItem",
    questId: 2625,
    map: "onslaughttower",
    ids: [1624, 8]
  },
  {
    kind: "mapItem",
    questId: 2626,
    map: "onslaughttower",
    ids: [1625]
  },
  {
    kind: "mapItem",
    questId: 2627,
    map: "onslaughttower",
    ids: [1626, 4]
  },
  {
    kind: "mapItem",
    questId: 2629,
    map: "onslaughttower",
    ids: [1627]
  },
  {
    kind: "mapItem",
    questId: 2667,
    map: "falguard",
    ids: [1628, 6]
  },
  { kind: "mapItem", questId: 2669, map: "falguard", ids: [1629] },
  { kind: "mapItem", questId: 2671, map: "falguard", ids: [1630] },
  { kind: "mapItem", questId: 2672, map: "falguard", ids: [1631] },
  { kind: "mapItem", questId: 2674, map: "falguard", ids: [1632] },
  {
    kind: "mapItem",
    questId: 2721,
    map: "deathpits",
    ids: [1691, 5]
  },
  {
    kind: "mapItem",
    questId: 2726,
    map: "deathpits",
    ids: [1692, 6]
  },
  {
    kind: "mapItem",
    questId: 2730,
    map: "deathpits",
    ids: [1693, 9]
  },
  {
    kind: "mapItem",
    questId: 2732,
    map: "deathpits",
    ids: [1694, 12]
  },
  {
    kind: "mapItem",
    questId: 2740,
    map: "deathpits",
    ids: [1695, 1]
  },
  {
    kind: "mapItem",
    questId: 2792,
    map: "venomvaults",
    ids: [1724]
  },
  {
    kind: "mapItem",
    questId: 2794,
    map: "venomvaults",
    ids: [1725]
  },
  {
    kind: "mapItem",
    questId: 2796,
    map: "venomvaults",
    ids: [1726]
  },
  {
    kind: "mapItem",
    questId: 2798,
    map: "venomvaults",
    ids: [1727, 5]
  },
  {
    kind: "mapItem",
    questId: 2802,
    map: "venomvaults",
    ids: [1728, 3]
  },
  {
    kind: "mapItem",
    questId: 2809,
    map: "stormtemple",
    ids: [1730, 3]
  },
  {
    kind: "mapItem",
    questId: 2811,
    map: "stormtemple",
    ids: [1731]
  },
  {
    kind: "mapItem",
    questId: 2813,
    map: "stormtemple",
    ids: [1732]
  },
  {
    kind: "mapItem",
    questId: 2909,
    map: "battleoff",
    ids: [1779]
  },
  {
    kind: "mapItem",
    questId: 2910,
    map: "battleoff",
    ids: [1780, 8]
  },
  {
    kind: "mapItem",
    questId: 2915,
    map: "brightfall",
    ids: [1781, 6]
  },
  {
    kind: "mapItem",
    questId: 2916,
    map: "brightfall",
    ids: [1782, 8]
  },
  {
    kind: "mapItem",
    questId: 2923,
    map: "overworld",
    ids: [1800, 6]
  },
  {
    kind: "mapItem",
    questId: 2927,
    map: "overworld",
    ids: [1801, 8]
  },
  {
    kind: "mapItem",
    questId: 2931,
    map: "overworld",
    ids: [1802, 10]
  },
  {
    kind: "mapItem",
    questId: 3167,
    map: "reddeath",
    ids: [2178, 2179]
  },
  { kind: "mapItem", questId: 3168, map: "reddeath", ids: [2180] },
  {
    kind: "mapItem",
    questId: 3183,
    map: "battleontown",
    ids: [2203]
  },
  { kind: "mapItem", questId: 3080, map: "archives", ids: [1937] },
  {
    kind: "mapItem",
    questId: 3095,
    map: "armory",
    ids: [1956, 4]
  },
  { kind: "mapItem", questId: 3092, map: "armory", ids: [1957] },
  {
    kind: "mapItem",
    questId: 3122,
    map: "swordhaven",
    ids: [2116, 8]
  },
  {
    kind: "mapItem",
    questId: 3125,
    map: "ceremony",
    ids: [2118, 6]
  },
  { kind: "mapItem", questId: 3126, map: "ceremony", ids: [2119] },
  {
    kind: "mapItem",
    questId: 3133,
    map: "chaosaltar",
    ids: [2127, 12]
  },
  {
    kind: "mapItem",
    questId: 3159,
    map: "swordhavenfalls",
    ids: [2158]
  },
  {
    kind: "mapItem",
    questId: 3765,
    map: "mountdoomskull",
    ids: [2726]
  },
  {
    kind: "mapItem",
    questId: 3795,
    map: "drakathfight",
    ids: [2894]
  },
  {
    kind: "mapItem",
    questId: 3796,
    map: "shadowrise",
    ids: [2895]
  },
  { kind: "chain", questId: 195 },
  { kind: "chain", questId: 323 },
  { kind: "chain", questId: 343 },
  { kind: "chain", questId: 357 },
  { kind: "chain", questId: 552 },
  { kind: "chain", questId: 597 },
  { kind: "chain", questId: 661 },
  { kind: "chain", questId: 707 },
  { kind: "chain", questId: 1236 },
  { kind: "chain", questId: 1241 },
  { kind: "chain", questId: 1273 },
  { kind: "chain", questId: 1230 },
  { kind: "chain", questId: 1272 },
  { kind: "chain", questId: 2918 },
  { kind: "chain", questId: 3578 },
  { kind: "chain", questId: 3579 },
  { kind: "chain", questId: 3580 },
  { kind: "chain", questId: 3581 },
  { kind: "chain", questId: 3582 },
  { kind: "chain", questId: 3583 },
  { kind: "chain", questId: 3584 },
  { kind: "chain", questId: 3585 },
  { kind: "chain", questId: 3586 },
  { kind: "chain", questId: 3587 },
  { kind: "chain", questId: 3588 },
  { kind: "chain", questId: 3589 },
  { kind: "chain", questId: 3590 },
  { kind: "chain", questId: 3591 },
  { kind: "chain", questId: 3764 },
  { kind: "chain", questId: 3766 },
  { kind: "chain", questId: 3779 },
  { kind: "chain", questId: 3608 },
  { kind: "chain", questId: 3618 },
  { kind: "chain", questId: 3609 },
  { kind: "chain", questId: 3610 },
  { kind: "chain", questId: 3611 },
  { kind: "chain", questId: 3612 },
  { kind: "chain", questId: 3613 },
  { kind: "chain", questId: 3614 },
  { kind: "chain", questId: 3615 },
  { kind: "chain", questId: 3616 },
  { kind: "chain", questId: 3617 },
  { kind: "chain", questId: 3619 },
  { kind: "chain", questId: 3791 },
  { kind: "chain", questId: 3792 },
  { kind: "chain", questId: 3797 },
  { kind: "chain", questId: 3812 },
  { kind: "chain", questId: 3813 },
  { kind: "chain", questId: 3814 },
  {
    kind: "kill",
    questId: 3680,
    map: "deadlydungeon",
    monsters: ["Dire Muncher"]
  },
  {
    kind: "kill",
    questId: 3681,
    map: "deadlydungeon",
    monsters: ["Hulking Dire Wolf"]
  },
  {
    kind: "kill",
    questId: 3682,
    map: "deadlydungeon",
    monsters: ["Undead Dungeon Crawler"]
  },
  {
    kind: "kill",
    questId: 3683,
    map: "deadlydungeon",
    monsters: ["Hulking Dire Wolf"]
  },
  {
    kind: "kill",
    questId: 3684,
    map: "deadlydungeon",
    monsters: ["Dire Draugr"]
  },
  {
    kind: "kill",
    questId: 3685,
    map: "deadlydungeon",
    monsters: ["Hulking Dire Wolf"]
  },
  {
    kind: "kill",
    questId: 3686,
    map: "deadlydungeon",
    monsters: ["Weeping Spyball"]
  },
  {
    kind: "kill",
    questId: 3687,
    map: "deadlydungeon",
    monsters: ["Dire Muncher"]
  },
  {
    kind: "kill",
    questId: 3688,
    map: "deadlydungeon",
    monsters: ["Weeping Spyball"]
  },
  {
    kind: "kill",
    questId: 3689,
    map: "deadlydungeon",
    monsters: ["DoomKitten"]
  },
  {
    kind: "kill",
    questId: 3690,
    map: "deadlydungeon",
    monsters: ["Dire Draugr"]
  },
  {
    kind: "kill",
    questId: 3691,
    map: "deadlydungeon",
    monsters: ["Giant Dungeon Spider"]
  },
  {
    kind: "kill",
    questId: 3692,
    map: "deadlydungeon",
    monsters: ["Undead Dungeon Crawler"]
  },
  {
    kind: "kill",
    questId: 3693,
    map: "deadlydungeon",
    monsters: ["Giant Dungeon Spider"]
  },
  {
    kind: "kill",
    questId: 3694,
    map: "deadlydungeon",
    monsters: ["Dire Draugr"]
  },
  {
    kind: "kill",
    questId: 3695,
    map: "deadlydungeon",
    monsters: ["Dire Draugr"]
  },
  {
    kind: "kill",
    questId: 3696,
    map: "deadlydungeon",
    monsters: ["DoomKitten"]
  },
  {
    kind: "kill",
    questId: 3697,
    map: "deadlydungeon",
    monsters: ["Giant Dungeon Spider"]
  },
  {
    kind: "kill",
    questId: 3699,
    map: "deadlydungeon",
    monsters: ["Chest Guardian"]
  },
  {
    kind: "mapItem",
    questId: 3684,
    map: "deadlydungeon",
    ids: [2764, 1]
  },
  {
    kind: "mapItem",
    questId: 3685,
    map: "deadlydungeon",
    ids: [2756, 8]
  },
  {
    kind: "mapItem",
    questId: 3689,
    map: "deadlydungeon",
    ids: [2766, 1]
  },
  {
    kind: "mapItem",
    questId: 3690,
    map: "deadlydungeon",
    ids: [2765, 1]
  },
  {
    kind: "mapItem",
    questId: 3696,
    map: "deadlydungeon",
    ids: [2767, 1]
  },
  {
    kind: "kill",
    questId: 3660,
    map: "killercatacombs",
    monsters: ["Tomb Robber"]
  },
  {
    kind: "kill",
    questId: 3661,
    map: "killercatacombs",
    monsters: ["Tomb Robber"]
  },
  {
    kind: "kill",
    questId: 3662,
    map: "killercatacombs",
    monsters: ["Ravenous Maw"]
  },
  {
    kind: "kill",
    questId: 3663,
    map: "killercatacombs",
    monsters: ["Ravenous Maw"]
  },
  {
    kind: "kill",
    questId: 3665,
    map: "killercatacombs",
    monsters: ["Sundered Darkblood"]
  },
  {
    kind: "kill",
    questId: 3666,
    map: "killercatacombs",
    monsters: ["Sundered Darkblood"]
  },
  {
    kind: "kill",
    questId: 3667,
    map: "killercatacombs",
    monsters: ["Starved Maw"]
  },
  {
    kind: "kill",
    questId: 3668,
    map: "killercatacombs",
    monsters: ["Sundered Darkblood"]
  },
  {
    kind: "kill",
    questId: 3669,
    map: "killercatacombs",
    monsters: ["Ravenous Maw"]
  },
  {
    kind: "kill",
    questId: 3670,
    map: "killercatacombs",
    monsters: ["Starved Maw", "Ravenous Maw"]
  },
  {
    kind: "kill",
    questId: 3671,
    map: "killercatacombs",
    monsters: ["Living Armor"]
  },
  {
    kind: "kill",
    questId: 3672,
    map: "killercatacombs",
    monsters: ["Living Armor"]
  },
  {
    kind: "kill",
    questId: 3673,
    map: "killercatacombs",
    monsters: ["Starved Maw", "Ravenous Maw", "Living Armor"]
  },
  {
    kind: "kill",
    questId: 3674,
    map: "killercatacombs",
    monsters: ["Living Armor"]
  },
  {
    kind: "kill",
    questId: 3675,
    map: "killercatacombs",
    monsters: ["Ravenous Maw", "Starved Maw", "Living Armor"]
  },
  {
    kind: "kill",
    questId: 3676,
    map: "killercatacombs",
    monsters: ["Living Armor"]
  },
  {
    kind: "kill",
    questId: 3677,
    map: "killercatacombs",
    monsters: ["Unstable Spirit Orb", "Living Armor", "Sundered Darkblood"]
  },
  {
    kind: "mapItem",
    questId: 3664,
    map: "killercatacombs",
    ids: [2762, 8]
  },
  {
    kind: "mapItem",
    questId: 3666,
    map: "killercatacombs",
    ids: [2761, 3]
  },
  {
    kind: "mapItem",
    questId: 3676,
    map: "killercatacombs",
    ids: [2763, 10]
  },
  {
    kind: "kill",
    questId: 3640,
    map: "pyramidpain",
    monsters: ["Cactus Creeper", "Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 3641,
    map: "pyramidpain",
    monsters: ["Pyramid Vase"]
  },
  {
    kind: "kill",
    questId: 3642,
    map: "pyramidpain",
    monsters: ["Cactus Creeper"]
  },
  {
    kind: "kill",
    questId: 3643,
    map: "pyramidpain",
    monsters: ["Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 3644,
    map: "pyramidpain",
    monsters: ["Cactus Creeper", "Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 3645,
    map: "pyramidpain",
    monsters: ["Sandshark"]
  },
  {
    kind: "kill",
    questId: 3646,
    map: "pyramidpain",
    monsters: ["Kalestri Worshipper"]
  },
  {
    kind: "kill",
    questId: 3648,
    map: "pyramidpain",
    monsters: ["Tomb Robber"]
  },
  {
    kind: "kill",
    questId: 3649,
    map: "pyramidpain",
    monsters: ["Sandshark"]
  },
  {
    kind: "kill",
    questId: 3650,
    map: "pyramidpain",
    monsters: ["Pyramid Vase"]
  },
  {
    kind: "kill",
    questId: 3651,
    map: "pyramidpain",
    monsters: ["Cactus Creeper", "Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 3653,
    map: "pyramidpain",
    monsters: ["Kalestri Worshipper"]
  },
  {
    kind: "kill",
    questId: 3655,
    map: "pyramidpain",
    monsters: ["Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 3654,
    map: "pyramidpain",
    monsters: ["Golden Scarab"]
  },
  {
    kind: "kill",
    questId: 3656,
    map: "pyramidpain",
    monsters: ["Chaorrupted Robber"]
  },
  {
    kind: "kill",
    questId: 3657,
    map: "pyramidpain",
    monsters: ["Kalestri Worshipper"]
  },
  {
    kind: "kill",
    questId: 3658,
    map: "pyramidpain",
    monsters: ["Pyramid Vase"]
  },
  {
    kind: "kill",
    questId: 3659,
    map: "pyramidpain",
    monsters: ["Viridi"]
  },
  {
    kind: "mapItem",
    questId: 3647,
    map: "pyramidpain",
    ids: [2758, 7]
  },
  {
    kind: "mapItem",
    questId: 3652,
    map: "pyramidpain",
    ids: [2770, 13]
  },
  {
    kind: "mapItem",
    questId: 10230,
    map: "bocklingrove",
    ids: [14429]
  },
  {
    kind: "mapItem",
    questId: 10233,
    map: "bocklingrove",
    ids: [14430, 14431]
  },
  {
    kind: "mapItem",
    questId: 10243,
    map: "bocklincastle",
    ids: [14446]
  },
  {
    kind: "mapItem",
    questId: 10245,
    map: "bocklincastle",
    ids: [14451, 14447]
  },
  {
    kind: "mapItem",
    questId: 10248,
    map: "bocklincastle",
    ids: [14448]
  },
  {
    kind: "mapItem",
    questId: 10249,
    map: "bocklincastle",
    ids: [14449, 6]
  },
  {
    kind: "mapItem",
    questId: 10250,
    map: "bocklincastle",
    ids: [14450]
  },
  {
    kind: "mapItem",
    questId: 10258,
    map: "bocklinsanctum",
    ids: [14478, 6]
  },
  {
    kind: "mapItem",
    questId: 10260,
    map: "bocklinsanctum",
    ids: [14479]
  },
  {
    kind: "mapItem",
    questId: 10261,
    map: "bocklinsanctum",
    ids: [14480]
  },
  {
    kind: "mapItem",
    questId: 10263,
    map: "bocklinsanctum",
    ids: [14481, 14482]
  },
  { kind: "chain", questId: 9541 },
  {
    kind: "kill",
    questId: 7282,
    map: "brightfall",
    monsters: ["Painadin Overlord"]
  },
  {
    kind: "kill",
    questId: 7283,
    map: "timevoid",
    monsters: ["Unending Avatar"]
  },
  { kind: "mapItem", questId: 7284, map: "downward", ids: [6908] },
  { kind: "mapItem", questId: 7292, map: "thespan", ids: [6910] },
  { kind: "chain", questId: 7288 },
  {
    kind: "kill",
    questId: 6669,
    map: "forest",
    monsters: ["Boss Zardman"]
  },
  {
    kind: "kill",
    questId: 6671,
    map: "bludrut2",
    monsters: ["Shadow Creeper"]
  },
  {
    kind: "kill",
    questId: 6672,
    map: "marsh2",
    monsters: ["Thrax Ironhide"]
  },
  {
    kind: "kill",
    questId: 6673,
    map: "sleuthhound",
    monsters: ["Harmoire"]
  },
  {
    kind: "kill",
    questId: 6674,
    map: "noobshire",
    monsters: ["Kittarian Mouse Eater"]
  },
  {
    kind: "kill",
    questId: 6676,
    map: "beachparty",
    monsters: ["Sun Flare"]
  },
  {
    kind: "kill",
    questId: 6677,
    map: "marsh",
    monsters: ["Dreadspider"]
  },
  {
    kind: "kill",
    questId: 6678,
    map: "iceplane",
    monsters: ["Enfield"]
  },
  {
    kind: "kill",
    questId: 6679,
    map: "lair",
    monsters: ["Red Dragon"]
  },
  {
    kind: "kill",
    questId: 6680,
    map: "ledgermayne",
    monsters: ["Ledgermayne"]
  },
  {
    kind: "kill",
    questId: 6681,
    map: "palace",
    monsters: ["Invisible"]
  },
  {
    kind: "kill",
    questId: 6682,
    map: "underlair",
    monsters: ["ArchFiend DragonLord"]
  },
  {
    kind: "kill",
    questId: 4312,
    map: "drearia",
    monsters: ["Dark Makai", "Evil Elemental", "Green Rat"]
  },
  {
    kind: "kill",
    questId: 4313,
    map: "drearia",
    monsters: ["Dark Makai"]
  },
  {
    kind: "kill",
    questId: 4314,
    map: "drearia",
    monsters: ["Green Rat"]
  },
  {
    kind: "kill",
    questId: 4315,
    map: "drearia",
    monsters: ["Green Rat"]
  },
  {
    kind: "kill",
    questId: 4318,
    map: "swordhavenpink",
    monsters: ["Pink Slime"]
  },
  {
    kind: "kill",
    questId: 4319,
    map: "sewerpink",
    monsters: ["Pink Rat"]
  },
  {
    kind: "kill",
    questId: 4320,
    map: "sewerpink",
    monsters: ["Cutie Grumbley"]
  },
  {
    kind: "kill",
    questId: 4321,
    map: "pinewoodpink",
    monsters: ["Pink Grizzly"]
  },
  {
    kind: "kill",
    questId: 4322,
    map: "pinewoodpink",
    monsters: ["Pink Shell Turtle"]
  },
  {
    kind: "kill",
    questId: 4323,
    map: "pinewoodpink",
    monsters: ["Sparkletooth"]
  },
  {
    kind: "kill",
    questId: 4325,
    map: "pinewoodpink",
    monsters: ["Pink Grizzly"]
  },
  {
    kind: "kill",
    questId: 144,
    map: "citadel",
    monsters: ["Inquisitor Guard"]
  },
  {
    kind: "kill",
    questId: 145,
    map: "citadel",
    monsters: ["Crusader"]
  },
  {
    kind: "kill",
    questId: 146,
    map: "citadel",
    monsters: ["Inquisitor Captain"]
  },
  {
    kind: "kill",
    questId: 147,
    map: "citadel",
    monsters: ["Burning Witch"]
  },
  {
    kind: "kill",
    questId: 148,
    map: "citadel",
    monsters: ["Inquisitor Guard"]
  },
  {
    kind: "kill",
    questId: 149,
    map: "citadel",
    monsters: ["Inquisitor Guard"]
  },
  {
    kind: "kill",
    questId: 181,
    map: "citadel",
    monsters: ["Belrot The Fiend"]
  },
  {
    kind: "kill",
    questId: 560,
    map: "underworld",
    monsters: ["Undead Bruiser"]
  },
  {
    kind: "kill",
    questId: 585,
    map: "tercessuinotlim",
    monsters: ["Legion Fenrir"]
  },
  {
    kind: "kill",
    questId: 6172,
    map: "citadelruins",
    monsters: ["Mana Sprites"]
  },
  {
    kind: "kill",
    questId: 6175,
    map: "citadelruins",
    monsters: ["Inquisitor Hobo"]
  },
  {
    kind: "kill",
    questId: 6177,
    map: "citadelruins",
    monsters: ["Inquisitor Hobo"]
  },
  {
    kind: "kill",
    questId: 6178,
    map: "citadelruins",
    monsters: ["Mana Sprites"]
  },
  {
    kind: "kill",
    questId: 6180,
    map: "citadelruins",
    monsters: ["Inquisitor Hobo"]
  },
  {
    kind: "kill",
    questId: 6181,
    map: "citadelruins",
    monsters: ["Grand Inquisitor Murry"]
  },
  {
    kind: "kill",
    questId: 6182,
    map: "citadelruins",
    monsters: ["Enn'tröpy"]
  },
  { kind: "mapItem", questId: 4312, map: "drearia", ids: [3485] },
  { kind: "mapItem", questId: 4314, map: "drearia", ids: [3466] },
  { kind: "mapItem", questId: 4315, map: "drearia", ids: [3467] },
  { kind: "mapItem", questId: 4316, map: "drearia", ids: [3468] },
  {
    kind: "mapItem",
    questId: 4317,
    map: "swordhavenpink",
    ids: [3469]
  },
  {
    kind: "mapItem",
    questId: 4318,
    map: "swordhavenpink",
    ids: [3486, 5]
  },
  {
    kind: "mapItem",
    questId: 4321,
    map: "pinewoodpink",
    ids: [3470]
  },
  {
    kind: "mapItem",
    questId: 4322,
    map: "pinewoodpink",
    ids: [3471, 5]
  },
  { kind: "mapItem", questId: 4324, map: "citadel", ids: [3472] },
  {
    kind: "mapItem",
    questId: 6172,
    map: "citadelruins",
    ids: [5592]
  },
  {
    kind: "mapItem",
    questId: 6173,
    map: "citadelruins",
    ids: [5602]
  },
  {
    kind: "mapItem",
    questId: 6175,
    map: "citadelruins",
    ids: [5593, 5]
  },
  {
    kind: "mapItem",
    questId: 6176,
    map: "citadelruins",
    ids: [5603]
  },
  {
    kind: "mapItem",
    questId: 6177,
    map: "citadelruins",
    ids: [5594, 5595, 5596]
  },
  {
    kind: "mapItem",
    questId: 6178,
    map: "citadelruins",
    ids: [5597]
  },
  {
    kind: "mapItem",
    questId: 6179,
    map: "citadelruins",
    ids: [5598]
  },
  {
    kind: "mapItem",
    questId: 6180,
    map: "citadelruins",
    ids: [5599, 5600, 5601]
  },
  {
    kind: "mapItem",
    questId: 10025,
    map: "deleuzetundra",
    ids: [14048, 5]
  },
  {
    kind: "mapItem",
    questId: 10025,
    map: "deleuzetundra",
    ids: [14049]
  },
  {
    kind: "mapItem",
    questId: 10027,
    map: "deleuzetundra",
    ids: [14050, 14051]
  },
  {
    kind: "mapItem",
    questId: 10028,
    map: "deleuzetundra",
    ids: [14052]
  },
  {
    kind: "mapItem",
    questId: 10029,
    map: "deleuzetundra",
    ids: [14053, 5]
  },
  {
    kind: "mapItem",
    questId: 10030,
    map: "deleuzetundra",
    ids: [14054]
  },
  {
    kind: "kill",
    questId: 7896,
    map: "fiendshard",
    monsters: ["Paladin Fiend"]
  },
  {
    kind: "kill",
    questId: 7897,
    map: "fiendshard",
    monsters: ["Dirtlicker", "Fiend Shard"]
  },
  { kind: "mapItem", questId: 7892, map: "fiendshard", ids: [7983] },
  { kind: "mapItem", questId: 7895, map: "fiendshard", ids: [7984] },
  {
    kind: "kill",
    questId: 8478,
    map: "fiendpast",
    monsters: ["Newborn Fiend"]
  },
  {
    kind: "kill",
    questId: 8479,
    map: "fiendpast",
    monsters: ["Hex Fiend"]
  },
  {
    kind: "kill",
    questId: 8480,
    map: "fiendpast",
    monsters: ["Hex Fiend"]
  },
  {
    kind: "kill",
    questId: 8481,
    map: "fiendpast",
    monsters: ["Fiend Champion"]
  },
  {
    kind: "kill",
    questId: 8482,
    map: "fiendpast",
    monsters: ["DoomBringer"]
  },
  {
    kind: "kill",
    questId: 8484,
    map: "fiendpast",
    monsters: ["Doom Wraith"]
  },
  {
    kind: "kill",
    questId: 8485,
    map: "fiendpast",
    monsters: ["Scarvitas"]
  },
  {
    kind: "kill",
    questId: 8486,
    map: "fiendpast",
    monsters: ["Avarice Guard"]
  },
  {
    kind: "kill",
    questId: 8487,
    map: "fiendpast",
    monsters: ["Void Fiend"]
  },
  {
    kind: "kill",
    questId: 8488,
    map: "fiendpast",
    monsters: ["Avarice"]
  },
  {
    kind: "kill",
    questId: 8490,
    map: "fiendpast",
    monsters: ["Proto-Legion Knight"]
  },
  {
    kind: "kill",
    questId: 8491,
    map: "fiendpast",
    monsters: ["Nation Defector"]
  },
  {
    kind: "kill",
    questId: 8494,
    map: "fiendpast",
    monsters: ["Dage the Lich"]
  },
  { kind: "mapItem", questId: 8483, map: "fiendpast", ids: [9556, 3] },
  { kind: "mapItem", questId: 8486, map: "fiendpast", ids: [9557, 4] },
  { kind: "mapItem", questId: 8492, map: "fiendpast", ids: [9558, 6] },
  { kind: "mapItem", questId: 8493, map: "fiendpast", ids: [9559] },
  { kind: "mapItem", questId: 10562, map: "fiendvoid", ids: [15413] },
  { kind: "mapItem", questId: 10562, map: "fiendvoid", ids: [15415] },
  { kind: "mapItem", questId: 10566, map: "fiendvoid", ids: [15414] },
  {
    kind: "mapItem",
    questId: 10036,
    map: "obliviontundra",
    ids: [14064]
  },
  {
    kind: "kill",
    questId: 7881,
    map: "originul",
    monsters: ["Inquisitor Guard"]
  },
  {
    kind: "kill",
    questId: 7882,
    map: "originul",
    monsters: ["Inquisitor Captain"]
  },
  {
    kind: "kill",
    questId: 7883,
    map: "originul",
    monsters: ["Grand Inquisitor"]
  },
  {
    kind: "kill",
    questId: 7884,
    map: "originul",
    monsters: ["Inquisitor Guard", "Inquisitor Captain", "Grand Inquisitor"]
  },
  {
    kind: "kill",
    questId: 7885,
    map: "originul",
    monsters: ["Bloodfiend"]
  },
  {
    kind: "kill",
    questId: 7886,
    map: "originul",
    monsters: ["Bloodfiend"]
  },
  {
    kind: "kill",
    questId: 7888,
    map: "originul",
    monsters: ["Fiend Champion"]
  },
  {
    kind: "mapItem",
    questId: 10552,
    map: "tercesarchive",
    ids: [15393]
  },
  {
    kind: "mapItem",
    questId: 10552,
    map: "tercesarchive",
    ids: [15394]
  },
  {
    kind: "mapItem",
    questId: 10557,
    map: "tercesarchive",
    ids: [15395]
  },
  {
    kind: "mapItem",
    questId: 10575,
    map: "tercesinvasion",
    ids: [15432]
  },
  {
    kind: "mapItem",
    questId: 10576,
    map: "tercesinvasion",
    ids: [15433]
  },
  {
    kind: "mapItem",
    questId: 10578,
    map: "tercesinvasion",
    ids: [15434, 15435, 15436]
  },
  {
    kind: "kill",
    questId: 9522,
    map: "voidrefuge",
    monsters: ["Lightguard Paladin"]
  },
  {
    kind: "kill",
    questId: 9523,
    map: "voidrefuge",
    monsters: ["Paladin Ascendant"]
  },
  {
    kind: "kill",
    questId: 9524,
    map: "voidrefuge",
    monsters: ["Nation Caster"]
  },
  {
    kind: "kill",
    questId: 9525,
    map: "voidrefuge",
    monsters: ["Nation Outrider"]
  },
  {
    kind: "kill",
    questId: 9526,
    map: "voidrefuge",
    monsters: ["Lightguard Paladin", "Paladin Ascendant"]
  },
  {
    kind: "kill",
    questId: 9527,
    map: "voidrefuge",
    monsters: ["Nation Caster"]
  },
  {
    kind: "kill",
    questId: 9528,
    map: "voidrefuge",
    monsters: ["Nation Outrider"]
  },
  {
    kind: "kill",
    questId: 9530,
    map: "voidrefuge",
    monsters: ["Paladin Ascendant", "Nation Outrider"]
  },
  {
    kind: "kill",
    questId: 9531,
    map: "voidrefuge",
    monsters: ["Carnage"]
  },
  { kind: "mapItem", questId: 9524, map: "voidrefuge", ids: [12572] },
  { kind: "mapItem", questId: 9526, map: "voidrefuge", ids: [12573] },
  {
    kind: "mapItem",
    questId: 9527,
    map: "voidrefuge",
    ids: [12574, 5]
  },
  {
    kind: "mapItem",
    questId: 9529,
    map: "voidrefuge",
    ids: [12575, 12576, 12577]
  },
  {
    kind: "kill",
    questId: 9543,
    map: "voidchasm",
    monsters: ["Paladin Ascendant"]
  },
  {
    kind: "kill",
    questId: 9544,
    map: "voidchasm",
    monsters: ["Nation Outrider"]
  },
  {
    kind: "kill",
    questId: 9545,
    map: "voidchasm",
    monsters: ["Paladin Ascendant"]
  },
  {
    kind: "kill",
    questId: 9547,
    map: "voidchasm",
    monsters: ["Nation Outrider"]
  },
  {
    kind: "kill",
    questId: 9548,
    map: "voidchasm",
    monsters: ["Void Fang"]
  },
  {
    kind: "kill",
    questId: 9549,
    map: "voidchasm",
    monsters: ["The Hushed"]
  },
  {
    kind: "kill",
    questId: 9550,
    map: "voidchasm",
    monsters: ["The Hushed", "Void Fang"]
  },
  {
    kind: "kill",
    questId: 9551,
    map: "voidchasm",
    monsters: ["Carnage"]
  },
  {
    kind: "kill",
    questId: 9552,
    map: "voidchasm",
    monsters: ["Carcano"]
  },
  { kind: "mapItem", questId: 9545, map: "voidchasm", ids: [12619, 6] },
  {
    kind: "mapItem",
    questId: 9546,
    map: "voidchasm",
    ids: [12620, 12621]
  },
  { kind: "mapItem", questId: 9547, map: "voidchasm", ids: [12622] },
  {
    kind: "mapItem",
    questId: 9549,
    map: "voidchasm",
    ids: [12623, 12627, 12628]
  },
  { kind: "mapItem", questId: 9550, map: "voidchasm", ids: [12624, 4] },
  {
    kind: "mapItem",
    questId: 9551,
    map: "voidchasm",
    ids: [12625, 12626]
  },
  {
    kind: "kill",
    questId: 4495,
    map: "celestialrealm",
    monsters: ["Celestial Bird of Paradise", "Fallen Knight"]
  },
  {
    kind: "kill",
    questId: 4496,
    map: "celestialrealm",
    monsters: ["Celestial Bird of Paradise", "Fallen Knight"]
  },
  {
    kind: "kill",
    questId: 4498,
    map: "celestialrealm",
    monsters: ["Infernal Knight"]
  },
  {
    kind: "kill",
    questId: 4500,
    map: "lostruins",
    monsters: ["Underworld Hound"]
  },
  {
    kind: "kill",
    questId: 4501,
    map: "lostruins",
    monsters: ["Fallen Knight"]
  },
  {
    kind: "kill",
    questId: 4507,
    map: "lostruins",
    monsters: ["Infernal Warlord"]
  },
  {
    kind: "kill",
    questId: 4509,
    map: "lostruinswar",
    monsters: ["Infernal Imp"]
  },
  {
    kind: "kill",
    questId: 4508,
    map: "lostruinswar",
    monsters: ["Diabolical Warlord"]
  },
  {
    kind: "kill",
    questId: 5374,
    map: "infernalspire",
    monsters: ["Fallen Knight", "Underworld Hound"]
  },
  {
    kind: "kill",
    questId: 5375,
    map: "infernalspire",
    monsters: ["Fallen Knight", "Underworld Hound"]
  },
  {
    kind: "kill",
    questId: 5376,
    map: "infernalspire",
    monsters: ["Helzekiel"]
  },
  {
    kind: "kill",
    questId: 5379,
    map: "infernalspire",
    monsters: ["Dungeon Fiend"]
  },
  {
    kind: "kill",
    questId: 5380,
    map: "infernalspire",
    monsters: ["Garvodeus"]
  },
  {
    kind: "kill",
    questId: 5384,
    map: "infernalspire",
    monsters: ["Azkorath"]
  },
  {
    kind: "kill",
    questId: 5387,
    map: "infernalspire",
    monsters: ["Malxas"]
  },
  {
    kind: "kill",
    questId: 5406,
    map: "doompally",
    monsters: ["Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 5407,
    map: "doompally",
    monsters: ["Doomwood Soldier"]
  },
  {
    kind: "kill",
    questId: 5408,
    map: "doompally",
    monsters: ["Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 5410,
    map: "doompally",
    monsters: ["Doomwood Bonemuncher"]
  },
  {
    kind: "kill",
    questId: 5412,
    map: "doompally",
    monsters: ["Doomwood Treeant"]
  },
  {
    kind: "kill",
    questId: 5413,
    map: "doompally",
    monsters: ["Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 5414,
    map: "doompally",
    monsters: ["Doomwood Bonemuncher"]
  },
  {
    kind: "kill",
    questId: 5416,
    map: "doompally",
    monsters: ["Skeletal Subjugator"]
  },
  {
    kind: "kill",
    questId: 5487,
    map: "darkoviainvasion",
    monsters: ["Underworld Hound", "Infernal Imp"]
  },
  {
    kind: "kill",
    questId: 5489,
    map: "darkoviainvasion",
    monsters: ["Grievous Fiend"]
  },
  {
    kind: "kill",
    questId: 5491,
    map: "safiriainvasion",
    monsters: ["Fallen Knight", "Infernal Knight"]
  },
  {
    kind: "kill",
    questId: 5494,
    map: "safiriainvasion",
    monsters: ["Blood Maggot"]
  },
  {
    kind: "kill",
    questId: 5495,
    map: "safiriainvasion",
    monsters: ["Ma'alech"]
  },
  {
    kind: "kill",
    questId: 5497,
    map: "lycaninvasion",
    monsters: ["Infernal Knight", "Fallen Knight"]
  },
  {
    kind: "kill",
    questId: 5498,
    map: "lycaninvasion",
    monsters: ["Dire Wolf"]
  },
  {
    kind: "kill",
    questId: 5500,
    map: "lycaninvasion",
    monsters: ["Lord Balax'el"]
  },
  {
    kind: "kill",
    questId: 5501,
    map: "safiriainvasion",
    monsters: ["Fallen Knight"]
  },
  {
    kind: "kill",
    questId: 5502,
    map: "safiriainvasion",
    monsters: ["Shadow Imp", "Revenant"]
  },
  {
    kind: "kill",
    questId: 5503,
    map: "safiriainvasion",
    monsters: ["Noddharath"]
  },
  {
    kind: "kill",
    questId: 5544,
    map: "shadowfallinvasion",
    monsters: ["Infernal Imp", "Infernal Knight"]
  },
  {
    kind: "kill",
    questId: 5546,
    map: "shadowfallinvasion",
    monsters: ["Infernal Imp"]
  },
  {
    kind: "kill",
    questId: 5549,
    map: "shadowfallinvasion",
    monsters: ["Bone Creeper"]
  },
  {
    kind: "kill",
    questId: 5555,
    map: "shadowfallinvasion",
    monsters: ["Diabolical Scryer"]
  },
  {
    kind: "kill",
    questId: 5557,
    map: "shadowfallinvasion",
    monsters: ["Lord Balax'el"]
  },
  {
    kind: "kill",
    questId: 5576,
    map: "shadowfallinvasion",
    monsters: ["Nethermage"]
  },
  {
    kind: "kill",
    questId: 5577,
    map: "shadowfallinvasion",
    monsters: ["Diabolical Scryer"]
  },
  {
    kind: "kill",
    questId: 5581,
    map: "castleinvasion",
    monsters: ["Infernal Knight", "Fallen Knight", "Nethermage"]
  },
  {
    kind: "kill",
    questId: 5584,
    map: "castleinvasion",
    monsters: ["Infernal Imp", "Underworld Hound"]
  },
  {
    kind: "kill",
    questId: 5586,
    map: "castleinvasion",
    monsters: ["Lord Balax'el"]
  },
  {
    kind: "kill",
    questId: 5804,
    map: "crashsite",
    monsters: ["Dwakel Warrior"]
  },
  {
    kind: "kill",
    questId: 5806,
    map: "charredpath",
    monsters: ["Ragewing"]
  },
  {
    kind: "kill",
    questId: 5807,
    map: "charredpath",
    monsters: ["Toxic Treeant"]
  },
  {
    kind: "kill",
    questId: 5808,
    map: "charredpath",
    monsters: ["Infected Hare"]
  },
  {
    kind: "kill",
    questId: 5809,
    map: "charredpath",
    monsters: ["Plague Spreader"]
  },
  {
    kind: "kill",
    questId: 5811,
    map: "therift",
    monsters: ["Mana Chest"]
  },
  {
    kind: "kill",
    questId: 5812,
    map: "charredpath",
    monsters: ["Toxic Wisteria"]
  },
  {
    kind: "kill",
    questId: 5819,
    map: "charredpath",
    monsters: ["Noxious Fumes"]
  },
  {
    kind: "kill",
    questId: 5820,
    map: "charredpath",
    monsters: ["Plague Spreader"]
  },
  {
    kind: "kill",
    questId: 5821,
    map: "charredpath",
    monsters: ["Infected Hare"]
  },
  {
    kind: "kill",
    questId: 5822,
    map: "farm",
    monsters: ["Treeant"]
  },
  {
    kind: "kill",
    questId: 5824,
    map: "charredpath",
    monsters: ["Zognax"]
  },
  {
    kind: "kill",
    questId: 5830,
    map: "charredpath",
    monsters: ["Ravenous Parasite"]
  },
  {
    kind: "kill",
    questId: 5832,
    map: "sewerpink",
    monsters: ["Cutie Grumbley"]
  },
  {
    kind: "kill",
    questId: 5836,
    map: "charredpath",
    monsters: ["Pustulisk"]
  },
  {
    kind: "kill",
    questId: 5838,
    map: "underglade",
    monsters: ["Tree Nymph", "Forest Spirit"]
  },
  {
    kind: "kill",
    questId: 5839,
    map: "underglade",
    monsters: ["Slime Spore"]
  },
  {
    kind: "kill",
    questId: 5840,
    map: "underglade",
    monsters: ["Forest Spirit"]
  },
  {
    kind: "kill",
    questId: 5841,
    map: "underglade",
    monsters: ["Blackened Earth"]
  },
  {
    kind: "kill",
    questId: 5842,
    map: "underglade",
    monsters: ["Luminous Fungus"]
  },
  {
    kind: "kill",
    questId: 5843,
    map: "underglade",
    monsters: ["Forest Spirit"]
  },
  {
    kind: "kill",
    questId: 5844,
    map: "underglade",
    monsters: ["Twisted Goblin"]
  },
  {
    kind: "kill",
    questId: 5845,
    map: "underglade",
    monsters: ["Gemstone Elemental"]
  },
  {
    kind: "kill",
    questId: 5846,
    map: "underglade",
    monsters: ["Lunamoss"]
  },
  {
    kind: "kill",
    questId: 5847,
    map: "extriki",
    monsters: ["Extriki"]
  },
  {
    kind: "kill",
    questId: 5849,
    map: "pilgrimage",
    monsters: ["SpiderWing", "Urstrix"]
  },
  {
    kind: "kill",
    questId: 5850,
    map: "pilgrimage",
    monsters: ["Ravenous Parasite"]
  },
  {
    kind: "kill",
    questId: 5851,
    map: "pilgrimage",
    monsters: ["Extrikiti"]
  },
  {
    kind: "kill",
    questId: 5852,
    map: "pilgrimage",
    monsters: ["Extrikiti", "Extrikiti"]
  },
  {
    kind: "kill",
    questId: 5854,
    map: "pilgrimage",
    monsters: ["Ravenous Parasite"]
  },
  {
    kind: "kill",
    questId: 5855,
    map: "pilgrimage",
    monsters: ["Lucky"]
  },
  {
    kind: "kill",
    questId: 6276,
    map: "guardiantree",
    monsters: ["Blossoming Treeant"]
  },
  {
    kind: "kill",
    questId: 6278,
    map: "guardiantree",
    monsters: ["Corrupted Zard"]
  },
  {
    kind: "kill",
    questId: 6281,
    map: "guardiantree",
    monsters: ["Blossoming Treeant"]
  },
  {
    kind: "kill",
    questId: 6282,
    map: "guardiantree",
    monsters: ["Pollen Cloud"]
  },
  {
    kind: "kill",
    questId: 6285,
    map: "guardiantree",
    monsters: ["Myconid"]
  },
  {
    kind: "kill",
    questId: 5856,
    map: "twistedcavern",
    monsters: ["Extrikiti"]
  },
  {
    kind: "kill",
    questId: 5857,
    map: "twistedcavern",
    monsters: ["Infesting Swarm"]
  },
  {
    kind: "kill",
    questId: 5859,
    map: "twistedcavern",
    monsters: ["Seed Stalker"]
  },
  {
    kind: "kill",
    questId: 5860,
    map: "twistedcavern",
    monsters: ["SpiderWing"]
  },
  {
    kind: "kill",
    questId: 5863,
    map: "twistedcavern",
    monsters: ["Wall of Vines"]
  },
  {
    kind: "kill",
    questId: 5864,
    map: "twistedcavern",
    monsters: ["Lore Golem"]
  },
  {
    kind: "kill",
    questId: 5866,
    map: "brokenwoods",
    monsters: ["Urstrix", "SpiderWing"]
  },
  {
    kind: "kill",
    questId: 5868,
    map: "brokenwoods",
    monsters: ["Fungal Lord"]
  },
  {
    kind: "kill",
    questId: 5869,
    map: "brokenwoods",
    monsters: ["Extrikiti"]
  },
  {
    kind: "kill",
    questId: 5870,
    map: "brokenwoods",
    monsters: ["Urstrix", "SpiderWing"]
  },
  {
    kind: "kill",
    questId: 5871,
    map: "charredpath",
    monsters: ["Ravenous Parasite", "Plague Spreader"]
  },
  {
    kind: "kill",
    questId: 5873,
    map: "brokenwoods",
    monsters: ["Hive"]
  },
  {
    kind: "kill",
    questId: 5876,
    map: "kolyaban",
    monsters: ["Twisted Aria"]
  },
  {
    kind: "kill",
    questId: 5877,
    map: "kolyaban",
    monsters: ["Kolyaban"]
  },
  {
    kind: "kill",
    questId: 8048,
    map: "forestreach",
    monsters: ["Monstrous Imp", "Eldritch Parasite"]
  },
  {
    kind: "kill",
    questId: 8049,
    map: "forestreach",
    monsters: ["Chaos Spitter"]
  },
  {
    kind: "kill",
    questId: 8050,
    map: "forestreach",
    monsters: ["Chaos Sp-eye"]
  },
  {
    kind: "kill",
    questId: 8051,
    map: "forestreach",
    monsters: ["Chaos Spitter"]
  },
  {
    kind: "kill",
    questId: 8052,
    map: "forestreach",
    monsters: ["EldritchWing", "Chaos Sp-eye"]
  },
  {
    kind: "kill",
    questId: 8053,
    map: "forestreach",
    monsters: ["Eldritch Parasite", "Monstrous Imp"]
  },
  {
    kind: "kill",
    questId: 8054,
    map: "forestreach",
    monsters: ["Chaos Spitter", "Chaos Sp-eye"]
  },
  {
    kind: "kill",
    questId: 8056,
    map: "backroom",
    monsters: ["Chaos Rat"]
  },
  {
    kind: "kill",
    questId: 8058,
    map: "backroom",
    monsters: ["Chaos Rat"]
  },
  {
    kind: "kill",
    questId: 8060,
    map: "backroom",
    monsters: ["Book Wyrm"]
  },
  {
    kind: "kill",
    questId: 8067,
    map: "deepforest",
    monsters: ["Creeping Gaze"]
  },
  {
    kind: "kill",
    questId: 8068,
    map: "deepforest",
    monsters: ["Eldritch Stalker"]
  },
  {
    kind: "kill",
    questId: 8069,
    map: "deepforest",
    monsters: ["Terrarsite"]
  },
  {
    kind: "kill",
    questId: 8071,
    map: "deepforest",
    monsters: ["Deep Truffle"]
  },
  {
    kind: "kill",
    questId: 8073,
    map: "deepforest",
    monsters: ["Creeping Gaze"]
  },
  {
    kind: "kill",
    questId: 8074,
    map: "deepforest",
    monsters: ["Terrarsite"]
  },
  {
    kind: "kill",
    questId: 8076,
    map: "deepforest",
    monsters: ["Deep Truffle"]
  },
  {
    kind: "kill",
    questId: 8077,
    map: "deepforest",
    monsters: ["Deep Truffle"]
  },
  {
    kind: "kill",
    questId: 8078,
    map: "deepforest",
    monsters: ["Cthulhoid"]
  },
  {
    kind: "kill",
    questId: 8080,
    map: "deepforest",
    monsters: ["Aberrant Horror"]
  },
  {
    kind: "kill",
    questId: 8083,
    map: "transformation",
    monsters: ["Monstrite"]
  },
  {
    kind: "kill",
    questId: 8084,
    map: "transformation",
    monsters: ["Chaos Spitter"]
  },
  {
    kind: "kill",
    questId: 8085,
    map: "transformation",
    monsters: ["Tentastrike"]
  },
  {
    kind: "kill",
    questId: 8086,
    map: "transformation",
    monsters: ["Tentaflame"]
  },
  {
    kind: "kill",
    questId: 8087,
    map: "transformation",
    monsters: ["Chaos Spitter"]
  },
  {
    kind: "kill",
    questId: 8090,
    map: "transformation",
    monsters: ["Deep Tunneler"]
  },
  {
    kind: "kill",
    questId: 8091,
    map: "transformation",
    monsters: ["Monstrite"]
  },
  {
    kind: "kill",
    questId: 8092,
    map: "transformation",
    monsters: ["Tentastrike", "Deep Tunneler"]
  },
  {
    kind: "kill",
    questId: 8093,
    map: "transformation",
    monsters: ["Eldritch Abomination"]
  },
  {
    kind: "kill",
    questId: 8094,
    map: "transformation",
    monsters: ["Queen of Monsters"]
  },
  {
    kind: "kill",
    questId: 8096,
    map: "downbelow",
    monsters: ["Earthwyrm"]
  },
  {
    kind: "kill",
    questId: 8097,
    map: "downbelow",
    monsters: ["Rumbling Rubble"]
  },
  {
    kind: "kill",
    questId: 8098,
    map: "downbelow",
    monsters: ["Monstrous Flame"]
  },
  {
    kind: "kill",
    questId: 8099,
    map: "downbelow",
    monsters: ["Earthwyrm"]
  },
  {
    kind: "kill",
    questId: 8100,
    map: "downbelow",
    monsters: ["Tentarachnid"]
  },
  {
    kind: "kill",
    questId: 8101,
    map: "downbelow",
    monsters: ["Creeping Shadow"]
  },
  {
    kind: "kill",
    questId: 8102,
    map: "downbelow",
    monsters: ["Creeping Shadow"]
  },
  {
    kind: "kill",
    questId: 8103,
    map: "downbelow",
    monsters: ["Guardian Golem"]
  },
  {
    kind: "kill",
    questId: 8104,
    map: "downbelow",
    monsters: ["Living Rage"]
  },
  {
    kind: "kill",
    questId: 8105,
    map: "downbelow",
    monsters: ["Living Rage"]
  },
  {
    kind: "kill",
    questId: 8106,
    map: "downbelow",
    monsters: ["Anka"]
  },
  {
    kind: "mapItem",
    questId: 4495,
    map: "celestialrealm",
    ids: [3698]
  },
  {
    kind: "mapItem",
    questId: 4497,
    map: "celestialrealm",
    ids: [3696]
  },
  {
    kind: "mapItem",
    questId: 4499,
    map: "celestialrealm",
    ids: [3693]
  },
  {
    kind: "mapItem",
    questId: 4500,
    map: "lostruins",
    ids: [3694, 3]
  },
  {
    kind: "mapItem",
    questId: 4506,
    map: "lostruins",
    ids: [3695]
  },
  {
    kind: "mapItem",
    questId: 5375,
    map: "infernalspire",
    ids: [4729]
  },
  {
    kind: "mapItem",
    questId: 5375,
    map: "infernalspire",
    ids: [4730]
  },
  {
    kind: "mapItem",
    questId: 5378,
    map: "infernalspire",
    ids: [4731, 6]
  },
  {
    kind: "mapItem",
    questId: 5379,
    map: "infernalspire",
    ids: [4732, 6]
  },
  {
    kind: "mapItem",
    questId: 5382,
    map: "infernalspire",
    ids: [4733]
  },
  {
    kind: "mapItem",
    questId: 5383,
    map: "infernalspire",
    ids: [4734, 4]
  },
  {
    kind: "mapItem",
    questId: 5386,
    map: "infernalspire",
    ids: [4735]
  },
  {
    kind: "mapItem",
    questId: 5409,
    map: "doompally",
    ids: [4758]
  },
  {
    kind: "mapItem",
    questId: 5410,
    map: "doompally",
    ids: [4759, 5]
  },
  {
    kind: "mapItem",
    questId: 5411,
    map: "doompally",
    ids: [4761]
  },
  {
    kind: "mapItem",
    questId: 5411,
    map: "doompally",
    ids: [4760, 6]
  },
  {
    kind: "mapItem",
    questId: 5415,
    map: "doompally",
    ids: [4762]
  },
  {
    kind: "mapItem",
    questId: 5488,
    map: "darkoviainvasion",
    ids: [4905, 6]
  },
  {
    kind: "mapItem",
    questId: 5490,
    map: "safiriainvasion",
    ids: [4904]
  },
  {
    kind: "mapItem",
    questId: 5492,
    map: "safiriainvasion",
    ids: [4895, 6]
  },
  {
    kind: "mapItem",
    questId: 5492,
    map: "safiriainvasion",
    ids: [4896]
  },
  {
    kind: "mapItem",
    questId: 5493,
    map: "safiriainvasion",
    ids: [4897, 9]
  },
  {
    kind: "mapItem",
    questId: 5494,
    map: "safiriainvasion",
    ids: [4898, 4899]
  },
  {
    kind: "mapItem",
    questId: 5496,
    map: "lycaninvasion",
    ids: [4900]
  },
  {
    kind: "mapItem",
    questId: 5499,
    map: "lycaninvasion",
    ids: [4901]
  },
  {
    kind: "mapItem",
    questId: 5499,
    map: "lycaninvasion",
    ids: [4903, 6]
  },
  {
    kind: "mapItem",
    questId: 5501,
    map: "safiriainvasion",
    ids: [4902]
  },
  {
    kind: "mapItem",
    questId: 5543,
    map: "shadowfallinvasion",
    ids: [5024]
  },
  {
    kind: "mapItem",
    questId: 5545,
    map: "shadowfallinvasion",
    ids: [5025, 4]
  },
  {
    kind: "mapItem",
    questId: 5545,
    map: "shadowfallinvasion",
    ids: [5026, 4]
  },
  {
    kind: "mapItem",
    questId: 5547,
    map: "shadowfallinvasion",
    ids: [5027, 5]
  },
  {
    kind: "mapItem",
    questId: 5548,
    map: "shadowfallinvasion",
    ids: [5028]
  },
  {
    kind: "mapItem",
    questId: 5550,
    map: "shadowfallinvasion",
    ids: [5029]
  },
  {
    kind: "mapItem",
    questId: 5553,
    map: "shadowfallinvasion",
    ids: [5030, 9]
  },
  {
    kind: "mapItem",
    questId: 5554,
    map: "shadowfallinvasion",
    ids: [5031]
  },
  {
    kind: "mapItem",
    questId: 5555,
    map: "shadowfallinvasion",
    ids: [5032]
  },
  {
    kind: "mapItem",
    questId: 5556,
    map: "shadowfallinvasion",
    ids: [5033]
  },
  {
    kind: "mapItem",
    questId: 5579,
    map: "castleinvasion",
    ids: [5055, 5]
  },
  {
    kind: "mapItem",
    questId: 5579,
    map: "castleinvasion",
    ids: [5056]
  },
  {
    kind: "mapItem",
    questId: 5580,
    map: "castleinvasion",
    ids: [5058, 5]
  },
  {
    kind: "mapItem",
    questId: 5583,
    map: "castleinvasion",
    ids: [5057, 4]
  },
  { kind: "mapItem", questId: 5791, map: "therift", ids: [5228] },
  {
    kind: "mapItem",
    questId: 5803,
    map: "charredpath",
    ids: [5248]
  },
  {
    kind: "mapItem",
    questId: 5804,
    map: "crashsite",
    ids: [5249]
  },
  {
    kind: "mapItem",
    questId: 5806,
    map: "charredpath",
    ids: [5250, 6]
  },
  {
    kind: "mapItem",
    questId: 5807,
    map: "charredpath",
    ids: [5251, 3]
  },
  {
    kind: "mapItem",
    questId: 5809,
    map: "charredpath",
    ids: [5252, 6]
  },
  {
    kind: "mapItem",
    questId: 5810,
    map: "charredpath",
    ids: [5255]
  },
  {
    kind: "mapItem",
    questId: 5811,
    map: "therift",
    ids: [5253, 4]
  },
  {
    kind: "mapItem",
    questId: 5813,
    map: "charredpath",
    ids: [5254]
  },
  {
    kind: "mapItem",
    questId: 5835,
    map: "charredpath",
    ids: [5270]
  },
  {
    kind: "mapItem",
    questId: 5837,
    map: "underglade",
    ids: [5271]
  },
  {
    kind: "mapItem",
    questId: 5840,
    map: "underglade",
    ids: [5272, 8]
  },
  {
    kind: "mapItem",
    questId: 5843,
    map: "underglade",
    ids: [5273, 6]
  },
  {
    kind: "mapItem",
    questId: 5852,
    map: "pilgrimage",
    ids: [5289]
  },
  {
    kind: "mapItem",
    questId: 5852,
    map: "pilgrimage",
    ids: [5288, 3]
  },
  {
    kind: "mapItem",
    questId: 5854,
    map: "pilgrimage",
    ids: [5292]
  },
  {
    kind: "mapItem",
    questId: 6276,
    map: "guardiantree",
    ids: [5769, 5]
  },
  {
    kind: "mapItem",
    questId: 6277,
    map: "guardiantree",
    ids: [5776, 5]
  },
  {
    kind: "mapItem",
    questId: 6277,
    map: "guardiantree",
    ids: [5770, 5]
  },
  {
    kind: "mapItem",
    questId: 6280,
    map: "guardiantree",
    ids: [5772]
  },
  {
    kind: "mapItem",
    questId: 6282,
    map: "guardiantree",
    ids: [5773]
  },
  {
    kind: "mapItem",
    questId: 6284,
    map: "guardiantree",
    ids: [5774]
  },
  {
    kind: "mapItem",
    questId: 6285,
    map: "guardiantree",
    ids: [5775, 2]
  },
  {
    kind: "mapItem",
    questId: 5856,
    map: "twistedcavern",
    ids: [5293]
  },
  {
    kind: "mapItem",
    questId: 5860,
    map: "twistedcavern",
    ids: [5294]
  },
  {
    kind: "mapItem",
    questId: 5861,
    map: "twistedcavern",
    ids: [5295, 6]
  },
  {
    kind: "mapItem",
    questId: 5868,
    map: "brokenwoods",
    ids: [5296, 4]
  },
  {
    kind: "mapItem",
    questId: 5868,
    map: "brokenwoods",
    ids: [5297, 4]
  },
  {
    kind: "mapItem",
    questId: 8050,
    map: "forestreach",
    ids: [8362, 5]
  },
  {
    kind: "mapItem",
    questId: 8051,
    map: "forestreach",
    ids: [8363, 5]
  },
  {
    kind: "mapItem",
    questId: 8055,
    map: "forestreach",
    ids: [8364, 5]
  },
  {
    kind: "mapItem",
    questId: 8057,
    map: "backroom",
    ids: [8365]
  },
  {
    kind: "mapItem",
    questId: 8059,
    map: "backroom",
    ids: [8366]
  },
  {
    kind: "mapItem",
    questId: 8070,
    map: "deepforest",
    ids: [8415]
  },
  {
    kind: "mapItem",
    questId: 8072,
    map: "deepforest",
    ids: [8416, 8]
  },
  {
    kind: "mapItem",
    questId: 8075,
    map: "deepforest",
    ids: [8418, 8]
  },
  {
    kind: "mapItem",
    questId: 8079,
    map: "deepforest",
    ids: [8419, 4]
  },
  {
    kind: "mapItem",
    questId: 8079,
    map: "deepforest",
    ids: [8420, 1]
  },
  {
    kind: "mapItem",
    questId: 8089,
    map: "transformation",
    ids: [8435]
  },
  {
    kind: "mapItem",
    questId: 8089,
    map: "transformation",
    ids: [8436]
  },
  {
    kind: "mapItem",
    questId: 8089,
    map: "transformation",
    ids: [8437]
  },
  {
    kind: "mapItem",
    questId: 8098,
    map: "downbelow",
    ids: [8491]
  },
  {
    kind: "mapItem",
    questId: 8099,
    map: "downbelow",
    ids: [8492]
  },
  {
    kind: "mapItem",
    questId: 8102,
    map: "downbelow",
    ids: [8493]
  },
  {
    kind: "mapItem",
    questId: 8104,
    map: "downbelow",
    ids: [8494]
  },
  {
    kind: "mapItem",
    questId: 8105,
    map: "downbelow",
    ids: [8495]
  },
  {
    kind: "kill",
    questId: 4638,
    map: "rivensylth",
    monsters: ["Cave Creeper"]
  },
  {
    kind: "kill",
    questId: 4640,
    map: "rivensylth",
    monsters: ["Mushroom"]
  },
  {
    kind: "kill",
    questId: 4641,
    map: "pines",
    monsters: ["Pine Grizzly"]
  },
  {
    kind: "kill",
    questId: 4642,
    map: "rivensylth",
    monsters: ["Cave Creeper"]
  },
  {
    kind: "kill",
    questId: 4644,
    map: "rivensylth",
    monsters: ["Avada"]
  },
  {
    kind: "kill",
    questId: 4466,
    map: "brightoak",
    monsters: ["Bright Treeant"]
  },
  {
    kind: "kill",
    questId: 4659,
    map: "elfhame",
    monsters: ["Ruin Stalker"]
  },
  {
    kind: "kill",
    questId: 4661,
    map: "elfhame",
    monsters: ["Blighted Deer"]
  },
  {
    kind: "kill",
    questId: 4664,
    map: "elfhame",
    monsters: ["Ratawampus"]
  },
  {
    kind: "kill",
    questId: 4668,
    map: "elfhame",
    monsters: ["Guardian Spirit"]
  },
  {
    kind: "kill",
    questId: 4469,
    map: "brightoak",
    monsters: ["Hootbear"]
  },
  {
    kind: "kill",
    questId: 4470,
    map: "brightoak",
    monsters: ["Brightpool Guardian"]
  },
  {
    kind: "kill",
    questId: 4467,
    map: "brightoak",
    monsters: ["Grove Spore"]
  },
  {
    kind: "kill",
    questId: 4468,
    map: "brightoak",
    monsters: ["Twisted Goblin"]
  },
  {
    kind: "kill",
    questId: 4693,
    map: "darkheart",
    monsters: ["Mutated Leech"]
  },
  {
    kind: "kill",
    questId: 4694,
    map: "darkheart",
    monsters: ["Mutated Leech"]
  },
  {
    kind: "kill",
    questId: 4695,
    map: "darkheart",
    monsters: ["Wisterrora"]
  },
  {
    kind: "kill",
    questId: 4696,
    map: "darkheart",
    monsters: ["Toxic Grove Spider"]
  },
  {
    kind: "kill",
    questId: 4697,
    map: "brightoak",
    monsters: ["Brightpool Guardian"]
  },
  {
    kind: "kill",
    questId: 4700,
    map: "darkheart",
    monsters: ["Gaiazor"]
  },
  {
    kind: "kill",
    questId: 4809,
    map: "gaiazor",
    monsters: ["Nevanna"]
  },
  {
    kind: "kill",
    questId: 4810,
    map: "gaiazor",
    monsters: ["Gaiazor"]
  },
  {
    kind: "mapItem",
    questId: 4637,
    map: "rivensylth",
    ids: [3944]
  },
  {
    kind: "mapItem",
    questId: 4639,
    map: "rivensylth",
    ids: [3945, 4]
  },
  {
    kind: "mapItem",
    questId: 4641,
    map: "rivensylth",
    ids: [3948, 4]
  },
  {
    kind: "mapItem",
    questId: 4643,
    map: "rivensylth",
    ids: [3946]
  },
  {
    kind: "mapItem",
    questId: 4659,
    map: "elfhame",
    ids: [3983]
  },
  {
    kind: "mapItem",
    questId: 4667,
    map: "elfhame",
    ids: [3984]
  },
  {
    kind: "mapItem",
    questId: 4470,
    map: "brightoak",
    ids: [3667, 5]
  },
  {
    kind: "mapItem",
    questId: 4467,
    map: "brightoak",
    ids: [3666, 10]
  },
  {
    kind: "mapItem",
    questId: 4692,
    map: "darkheart",
    ids: [4052]
  },
  {
    kind: "mapItem",
    questId: 4695,
    map: "darkheart",
    ids: [4053, 6]
  },
  {
    kind: "mapItem",
    questId: 4696,
    map: "darkheart",
    ids: [4054, 6]
  },
  {
    kind: "mapItem",
    questId: 4697,
    map: "darkheart",
    ids: [4055, 7]
  },
  {
    kind: "mapItem",
    questId: 4699,
    map: "darkheart",
    ids: [4056]
  },
  {
    kind: "mapItem",
    questId: 4804,
    map: "gaiazor",
    ids: [4206]
  },
  {
    kind: "mapItem",
    questId: 4808,
    map: "gaiazor",
    ids: [4210]
  },
  {
    kind: "kill",
    questId: 6013,
    map: "celestialarenab",
    monsters: ["Slork Construct"]
  },
  {
    kind: "kill",
    questId: 6014,
    map: "celestialarenab",
    monsters: ["Azkorath Construct"]
  },
  {
    kind: "kill",
    questId: 6015,
    map: "celestialarenab",
    monsters: ["Blessed Inquisitor"]
  },
  {
    kind: "kill",
    questId: 6016,
    map: "celestialarenab",
    monsters: ["Lich Ravager Construct"]
  },
  {
    kind: "kill",
    questId: 6017,
    map: "celestialarenab",
    monsters: ["Ring Guardian Construct"]
  },
  {
    kind: "kill",
    questId: 6018,
    map: "celestialarenab",
    monsters: ["Serepthys Construct"]
  },
  {
    kind: "kill",
    questId: 6019,
    map: "celestialarenab",
    monsters: ["Yaomo Construct"]
  },
  {
    kind: "kill",
    questId: 6020,
    map: "celestialarenab",
    monsters: ["Cerberus Construct"]
  },
  {
    kind: "kill",
    questId: 6021,
    map: "celestialarenab",
    monsters: ["Infernal Warrior Construct"]
  },
  {
    kind: "kill",
    questId: 6022,
    map: "celestialarenab",
    monsters: ["Infernal Warlord Construct"]
  },
  {
    kind: "kill",
    questId: 6023,
    map: "celestialarenac",
    monsters: ["Conquest Construct"]
  },
  {
    kind: "kill",
    questId: 6024,
    map: "celestialarenac",
    monsters: ["War Construct"]
  },
  {
    kind: "kill",
    questId: 6025,
    map: "celestialarenac",
    monsters: ["Death Construct"]
  },
  {
    kind: "kill",
    questId: 6026,
    map: "celestialarenac",
    monsters: ["Famine Construct"]
  },
  {
    kind: "kill",
    questId: 6027,
    map: "celestialarenac",
    monsters: ["Diabolical Warlord Construct"]
  },
  {
    kind: "kill",
    questId: 6028,
    map: "celestialarenac",
    monsters: ["Undead Raxgore Construct"]
  },
  {
    kind: "kill",
    questId: 6029,
    map: "celestialarenac",
    monsters: ["Blessed Karok"]
  },
  {
    kind: "kill",
    questId: 6030,
    map: "celestialarenac",
    monsters: ["Kezeroth Construct"]
  },
  {
    kind: "kill",
    questId: 6031,
    map: "celestialarenac",
    monsters: ["Shadow Lord Construct"]
  },
  {
    kind: "kill",
    questId: 6032,
    map: "celestialarenac",
    monsters: ["Desolich Construct"]
  },
  {
    kind: "kill",
    questId: 6033,
    map: "celestialarenad",
    monsters: ["Queen of Hope"]
  },
  {
    kind: "kill",
    questId: 6034,
    map: "celestialarenad",
    monsters: ["Malxas Construct"]
  },
  {
    kind: "kill",
    questId: 6035,
    map: "celestialarenad",
    monsters: ["Blessed Gladius"]
  },
  {
    kind: "kill",
    questId: 6036,
    map: "celestialarenad",
    monsters: ["High Celestial Priest"]
  },
  {
    kind: "kill",
    questId: 6037,
    map: "celestialarenad",
    monsters: ["Blessed Enfield"]
  },
  {
    kind: "kill",
    questId: 6038,
    map: "celestialarenad",
    monsters: ["Avatar of Spirits"]
  },
  {
    kind: "kill",
    questId: 6039,
    map: "celestialarenad",
    monsters: ["Avatar of Time"]
  },
  {
    kind: "kill",
    questId: 6040,
    map: "celestialarenad",
    monsters: ["Avatar of Life"]
  },
  {
    kind: "kill",
    questId: 6041,
    map: "celestialarenad",
    monsters: ["Fallen Abezeth"]
  },
  {
    kind: "kill",
    questId: 6042,
    map: "celestialarenad",
    monsters: ["Aranx"]
  },
  {
    kind: "kill",
    questId: 7674,
    map: "celestialpast",
    monsters: ["Blessed Deer", "Blessed Bear", "Blessed Centaur", "Blessed Hydra"]
  },
  {
    kind: "kill",
    questId: 7675,
    map: "celestialpast",
    monsters: ["Blessed Deer"]
  },
  {
    kind: "kill",
    questId: 7676,
    map: "celestialpast",
    monsters: ["Blessed Deer"]
  },
  {
    kind: "kill",
    questId: 7677,
    map: "celestialpast",
    monsters: ["Blessed Deer", "Blessed Centaur", "Blessed Hydra", "Blessed Bear"]
  },
  {
    kind: "kill",
    questId: 7678,
    map: "celestialpast",
    monsters: ["Well Guardian"]
  },
  {
    kind: "kill",
    questId: 7679,
    map: "celestialpast",
    monsters: ["Infernal Soldier"]
  },
  {
    kind: "kill",
    questId: 7680,
    map: "celestialpast",
    monsters: ["Infernal Soldier"]
  },
  {
    kind: "kill",
    questId: 7681,
    map: "celestialpast",
    monsters: ["Azalith"]
  },
  {
    kind: "mapItem",
    questId: 7675,
    map: "celestialpast",
    ids: [7592]
  },
  {
    kind: "mapItem",
    questId: 7676,
    map: "celestialpast",
    ids: [7593]
  },
  {
    kind: "mapItem",
    questId: 7677,
    map: "celestialpast",
    ids: [7594]
  },
  {
    kind: "mapItem",
    questId: 7678,
    map: "celestialpast",
    ids: [7595]
  },
  {
    kind: "kill",
    questId: 6076,
    map: "dragonchallenge",
    monsters: ["Greenguard Dragon"]
  },
  {
    kind: "kill",
    questId: 6077,
    map: "goldenarena",
    monsters: ["Blessed Dragon"]
  },
  {
    kind: "kill",
    questId: 6078,
    map: "citadel",
    monsters: ["Grand Inquisitor"]
  },
  {
    kind: "kill",
    questId: 6079,
    map: "goldenarena",
    monsters: ["Blessed Inquisitor"]
  },
  {
    kind: "kill",
    questId: 6080,
    map: "airship",
    monsters: ["Gladius"]
  },
  {
    kind: "kill",
    questId: 6081,
    map: "goldenarena",
    monsters: ["Blessed Gladius"]
  },
  {
    kind: "kill",
    questId: 6082,
    map: "northstar",
    monsters: ["Karok The Fallen"]
  },
  {
    kind: "kill",
    questId: 6083,
    map: "goldenarena",
    monsters: ["Blessed Karok"]
  },
  {
    kind: "kill",
    questId: 6084,
    map: "envy",
    monsters: ["Queen of Envy"]
  },
  {
    kind: "kill",
    questId: 6085,
    map: "goldenarena",
    monsters: ["Queen of Hope"]
  },
  {
    kind: "mapItem",
    questId: 10087,
    map: "infernaldianoia",
    ids: [14174, 7]
  },
  {
    kind: "mapItem",
    questId: 10074,
    map: "infernalparadise",
    ids: [14158, 5]
  },
  {
    kind: "mapItem",
    questId: 10077,
    map: "infernalparadise",
    ids: [14159, 5]
  },
  {
    kind: "mapItem",
    questId: 10079,
    map: "infernalparadise",
    ids: [14160, 6]
  },
  {
    kind: "kill",
    questId: 4349,
    map: "livingdungeon",
    monsters: ["Root of Evil"]
  },
  {
    kind: "kill",
    questId: 4350,
    map: "livingdungeon",
    monsters: ["Seed Spitter"]
  },
  {
    kind: "kill",
    questId: 4351,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Titan Decay"]
  },
  {
    kind: "kill",
    questId: 4352,
    map: "livingdungeon",
    monsters: ["Weeping Widowmaker"]
  },
  {
    kind: "kill",
    questId: 4353,
    map: "livingdungeon",
    monsters: ["Chia Warrior"]
  },
  {
    kind: "kill",
    questId: 4354,
    map: "livingdungeon",
    monsters: ["Titan Decay", "Seed Spitter", "Evil Plant Horror"]
  },
  {
    kind: "kill",
    questId: 4355,
    map: "livingdungeon",
    monsters: ["Evil Tree Faerie"]
  },
  {
    kind: "kill",
    questId: 4356,
    map: "livingdungeon",
    monsters: ["Vulchurion"]
  },
  {
    kind: "kill",
    questId: 4357,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie", "Vulchurion"]
  },
  {
    kind: "kill",
    questId: 4358,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie", "Vulchurion"]
  },
  {
    kind: "kill",
    questId: 4359,
    map: "livingdungeon",
    monsters: ["Drayko"]
  },
  {
    kind: "kill",
    questId: 4360,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie"]
  },
  {
    kind: "kill",
    questId: 4361,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie"]
  },
  {
    kind: "kill",
    questId: 4362,
    map: "treetitanbattle",
    monsters: ["Dakka the Dire Dragon"]
  },
  {
    kind: "kill",
    questId: 4363,
    map: "livingdungeon",
    monsters: ["Lil' Poot"]
  },
  {
    kind: "kill",
    questId: 4364,
    map: "livingdungeon",
    monsters: ["Epic Drop"]
  },
  { kind: "chain", questId: 4348 },
  {
    kind: "kill",
    questId: 8302,
    map: "queenreign",
    monsters: ["Samurai Nopperabo"]
  },
  {
    kind: "kill",
    questId: 8303,
    map: "queenreign",
    monsters: ["Shadow Samurai"]
  },
  {
    kind: "kill",
    questId: 8305,
    map: "queenreign",
    monsters: ["Tsukumo-Gami"]
  },
  {
    kind: "kill",
    questId: 8306,
    map: "queenreign",
    monsters: ["Jaaku's Shadow"]
  },
  {
    kind: "kill",
    questId: 8307,
    map: "queenreign",
    monsters: ["Tsukumo-Gami"]
  },
  {
    kind: "kill",
    questId: 8308,
    map: "queenreign",
    monsters: ["Jaaku"]
  },
  {
    kind: "kill",
    questId: 8309,
    map: "queenreign",
    monsters: ["Plague Spreader"]
  },
  {
    kind: "kill",
    questId: 8311,
    map: "queenreign",
    monsters: ["Plaguemoss"]
  },
  {
    kind: "kill",
    questId: 8312,
    map: "queenreign",
    monsters: ["Plaguemoss"]
  },
  {
    kind: "kill",
    questId: 8313,
    map: "queenreign",
    monsters: ["Plaguemoss"]
  },
  {
    kind: "kill",
    questId: 8314,
    map: "queenreign",
    monsters: ["Extriki"]
  },
  {
    kind: "kill",
    questId: 8315,
    map: "queenreign",
    monsters: ["Calcified Amethite"]
  },
  {
    kind: "kill",
    questId: 8317,
    map: "queenreign",
    monsters: ["Calcified Wyrm"]
  },
  {
    kind: "kill",
    questId: 8318,
    map: "queenreign",
    monsters: ["Calcified Remains"]
  },
  {
    kind: "kill",
    questId: 8319,
    map: "queenreign",
    monsters: ["Grou'luu"]
  },
  {
    kind: "kill",
    questId: 8320,
    map: "queenreign",
    monsters: ["Water Goblin"]
  },
  {
    kind: "kill",
    questId: 8321,
    map: "queenreign",
    monsters: ["Sa-Laatan Spawn"]
  },
  {
    kind: "kill",
    questId: 8322,
    map: "queenreign",
    monsters: ["Water Goblin"]
  },
  {
    kind: "kill",
    questId: 8324,
    map: "queenreign",
    monsters: ["Water Goblin"]
  },
  {
    kind: "kill",
    questId: 8325,
    map: "queenreign",
    monsters: ["Sa-Laatan"]
  },
  {
    kind: "kill",
    questId: 8326,
    map: "queenreign",
    monsters: ["Sa-Laatan", "Grou'luu", "Extriki", "Jaaku"]
  },
  {
    kind: "kill",
    questId: 8328,
    map: "orbhunt",
    monsters: ["Seed Stalker"]
  },
  {
    kind: "kill",
    questId: 8329,
    map: "orbhunt",
    monsters: ["Ragewing"]
  },
  {
    kind: "kill",
    questId: 8331,
    map: "orbhunt",
    monsters: ["Seed Stalker"]
  },
  {
    kind: "kill",
    questId: 8332,
    map: "orbhunt",
    monsters: ["Chamat"]
  },
  {
    kind: "kill",
    questId: 8333,
    map: "orbhunt",
    monsters: ["Lotus Spider"]
  },
  {
    kind: "kill",
    questId: 8334,
    map: "orbhunt",
    monsters: ["Suffocated Light"]
  },
  {
    kind: "kill",
    questId: 8336,
    map: "orbhunt",
    monsters: ["Lotus Spider"]
  },
  {
    kind: "kill",
    questId: 8337,
    map: "orbhunt",
    monsters: ["Sek Duat I"]
  },
  {
    kind: "kill",
    questId: 8338,
    map: "orbhunt",
    monsters: ["Horothotep"]
  },
  {
    kind: "kill",
    questId: 8339,
    map: "orbhunt",
    monsters: ["Nax Beast"]
  },
  {
    kind: "kill",
    questId: 8340,
    map: "orbhunt",
    monsters: ["Hive"]
  },
  {
    kind: "kill",
    questId: 8341,
    map: "orbhunt",
    monsters: ["Hive"]
  },
  {
    kind: "kill",
    questId: 8342,
    map: "orbhunt",
    monsters: ["Hive"]
  },
  {
    kind: "kill",
    questId: 8343,
    map: "orbhunt",
    monsters: ["Kolyaban"]
  },
  {
    kind: "kill",
    questId: 8344,
    map: "orbhunt",
    monsters: ["Ice Infernal"]
  },
  {
    kind: "kill",
    questId: 8346,
    map: "orbhunt",
    monsters: ["Animus of Ice"]
  },
  {
    kind: "kill",
    questId: 8347,
    map: "orbhunt",
    monsters: ["Lotus Spider", "Hive", "Ice Infernal", "Seed Stalker"]
  },
  {
    kind: "kill",
    questId: 8348,
    map: "orbhunt",
    monsters: ["Quetzal"]
  },
  {
    kind: "kill",
    questId: 8349,
    map: "orbhunt",
    monsters: ["Chamat", "Horothotep", "Kolyaban", "Quetzal"]
  },
  {
    kind: "mapItem",
    questId: 8304,
    map: "queenreign",
    ids: [9120]
  },
  {
    kind: "mapItem",
    questId: 8310,
    map: "queenreign",
    ids: [9121, 4]
  },
  {
    kind: "mapItem",
    questId: 8312,
    map: "queenreign",
    ids: [9122, 4]
  },
  {
    kind: "mapItem",
    questId: 8316,
    map: "queenreign",
    ids: [9123, 4]
  },
  {
    kind: "mapItem",
    questId: 8318,
    map: "queenreign",
    ids: [9124]
  },
  {
    kind: "mapItem",
    questId: 8323,
    map: "queenreign",
    ids: [9125, 5]
  },
  {
    kind: "mapItem",
    questId: 8330,
    map: "orbhunt",
    ids: [9156, 4]
  },
  {
    kind: "mapItem",
    questId: 8330,
    map: "orbhunt",
    ids: [9157, 4]
  },
  {
    kind: "mapItem",
    questId: 8335,
    map: "orbhunt",
    ids: [9158, 4]
  },
  {
    kind: "mapItem",
    questId: 8336,
    map: "orbhunt",
    ids: [9159]
  },
  {
    kind: "mapItem",
    questId: 8340,
    map: "orbhunt",
    ids: [9160, 4]
  },
  {
    kind: "mapItem",
    questId: 8342,
    map: "orbhunt",
    ids: [9161, 4]
  },
  {
    kind: "mapItem",
    questId: 8342,
    map: "orbhunt",
    ids: [9162]
  },
  {
    kind: "mapItem",
    questId: 8345,
    map: "orbhunt",
    ids: [9163, 4]
  },
  {
    kind: "kill",
    questId: 8350,
    map: "queenbattle",
    monsters: ["Chaorruption"]
  },
  {
    kind: "kill",
    questId: 8351,
    map: "queenbattle",
    monsters: ["Chaos Ghost"]
  },
  {
    kind: "kill",
    questId: 8352,
    map: "queenbattle",
    monsters: ["Chaos Sp-eye"]
  },
  {
    kind: "kill",
    questId: 8353,
    map: "queenbattle",
    monsters: ["Chaos Ghost"]
  },
  {
    kind: "kill",
    questId: 8355,
    map: "queenbattle",
    monsters: ["Chaos Dracolich"]
  },
  {
    kind: "kill",
    questId: 8356,
    map: "queenbattle",
    monsters: ["Chaos General"]
  },
  {
    kind: "kill",
    questId: 8358,
    map: "queenbattle",
    monsters: ["Chaotic Guilt"]
  },
  {
    kind: "kill",
    questId: 8359,
    map: "queenbattle",
    monsters: ["Chaos Giant"]
  },
  {
    kind: "mapItem",
    questId: 8353,
    map: "queenbattle",
    ids: [9204]
  },
  {
    kind: "mapItem",
    questId: 8357,
    map: "queenbattle",
    ids: [9205]
  },
  {
    kind: "kill",
    questId: 6333,
    map: "scarsgarde",
    monsters: ["VenomWing"]
  },
  {
    kind: "kill",
    questId: 6334,
    map: "scarsgarde",
    monsters: ["Garde Grif"]
  },
  {
    kind: "kill",
    questId: 6335,
    map: "scarsgarde",
    monsters: ["Tree"]
  },
  {
    kind: "kill",
    questId: 6336,
    map: "scarsgarde",
    monsters: ["Garde Watch", "Garde Pikeman"]
  },
  {
    kind: "kill",
    questId: 6340,
    map: "scarsgarde",
    monsters: ["Garde Knight", "Garde Pikeman"]
  },
  {
    kind: "kill",
    questId: 6341,
    map: "scarsgarde",
    monsters: ["Garde Captain"]
  },
  {
    kind: "kill",
    questId: 6342,
    map: "scarsgarde",
    monsters: ["Garde Knight", "Garde Watch", "Garde Pikeman"]
  },
  {
    kind: "kill",
    questId: 6344,
    map: "scarsgarde",
    monsters: ["VenomWing"]
  },
  {
    kind: "kill",
    questId: 6345,
    map: "scarsgarde",
    monsters: ["Garde Grif"]
  },
  {
    kind: "kill",
    questId: 6346,
    map: "scarsgarde",
    monsters: ["Tree"]
  },
  {
    kind: "kill",
    questId: 6347,
    map: "scarsgarde",
    monsters: ["Garde Watch", "Garde Pikeman"]
  },
  {
    kind: "kill",
    questId: 6348,
    map: "scarsgarde",
    monsters: [
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch",
      "Garde Watch"
    ]
  },
  {
    kind: "kill",
    questId: 6351,
    map: "scarsgarde",
    monsters: ["Garde Knight", "Garde Pikeman"]
  },
  {
    kind: "kill",
    questId: 6352,
    map: "scarsgarde",
    monsters: ["Garde Captain"]
  },
  {
    kind: "kill",
    questId: 6353,
    map: "scarsgarde",
    monsters: ["Garde Knight", "Garde Watch", "Garde Pikeman"]
  },
  {
    kind: "kill",
    questId: 6357,
    map: "valleyofdoom",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6358,
    map: "valleyofdoom",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6360,
    map: "valleyofdoom",
    monsters: ["Shadow Beast", "Shadow Person"]
  },
  {
    kind: "kill",
    questId: 6361,
    map: "valleyofdoom",
    monsters: ["Doom Guardian"]
  },
  {
    kind: "kill",
    questId: 6366,
    map: "guardiantower",
    monsters: ["Slime"]
  },
  {
    kind: "kill",
    questId: 6367,
    map: "guardiantower",
    monsters: ["Yargol Magebane"]
  },
  {
    kind: "kill",
    questId: 6369,
    map: "valleyofdoom",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6371,
    map: "ebonslate",
    monsters: ["Mind Con-Troll"]
  },
  {
    kind: "kill",
    questId: 6372,
    map: "ebonslate",
    monsters: ["Sp-Eye"]
  },
  {
    kind: "kill",
    questId: 6373,
    map: "ebonslate",
    monsters: ["Ebonslate Guard"]
  },
  {
    kind: "kill",
    questId: 6374,
    map: "ebonslate",
    monsters: ["Lycan Brute", "Lycan Brute"]
  },
  {
    kind: "kill",
    questId: 6376,
    map: "ebonslate",
    monsters: ["Ebonslate Knight"]
  },
  {
    kind: "kill",
    questId: 6377,
    map: "ebonslate",
    monsters: ["Mind Con-Troll"]
  },
  {
    kind: "kill",
    questId: 6379,
    map: "ebonslate",
    monsters: ["Ebonslate Knight"]
  },
  {
    kind: "kill",
    questId: 6380,
    map: "ebonslate",
    monsters: ["Ebonslate Bruiser"]
  },
  {
    kind: "kill",
    questId: 6382,
    map: "guardiantowerb",
    monsters: ["Slime"]
  },
  {
    kind: "kill",
    questId: 6383,
    map: "guardiantowerb",
    monsters: ["Slime"]
  },
  {
    kind: "kill",
    questId: 6384,
    map: "guardiantowerb",
    monsters: ["Yargol Magebane"]
  },
  {
    kind: "kill",
    questId: 6385,
    map: "guardiantowerb",
    monsters: ["Slime"]
  },
  {
    kind: "kill",
    questId: 6386,
    map: "guardiantowerb",
    monsters: ["Guardian Selby", "Guardian Garen"]
  },
  {
    kind: "kill",
    questId: 6387,
    map: "guardiantowerb",
    monsters: ["Guardian Garen", "Guardian Selby"]
  },
  {
    kind: "kill",
    questId: 6388,
    map: "guardiantowerb",
    monsters: ["Guardian Bolton"]
  },
  {
    kind: "kill",
    questId: 6389,
    map: "ebondungeon",
    monsters: ["Ebonslate Imp"]
  },
  {
    kind: "kill",
    questId: 6391,
    map: "ebondungeon",
    monsters: ["Ebon Dungeon Guard"]
  },
  {
    kind: "kill",
    questId: 6392,
    map: "ebondungeon",
    monsters: ["Elite Dungeon Guard"]
  },
  {
    kind: "kill",
    questId: 6394,
    map: "ebondungeon",
    monsters: ["Dethrix"]
  },
  {
    kind: "kill",
    questId: 6395,
    map: "ebondungeon",
    monsters: ["Ebon Dungeon Guard"]
  },
  {
    kind: "kill",
    questId: 6399,
    map: "alteonfight",
    monsters: ["King Alteon"]
  },
  {
    kind: "kill",
    questId: 6401,
    map: "darkplane",
    monsters: ["Shadow Beast"]
  },
  {
    kind: "kill",
    questId: 6402,
    map: "darkplane",
    monsters: ["Guardian Knight"]
  },
  {
    kind: "kill",
    questId: 6403,
    map: "darkplane",
    monsters: ["Light Spirit"]
  },
  {
    kind: "kill",
    questId: 6404,
    map: "darkplane",
    monsters: ["Shadow Beast"]
  },
  {
    kind: "kill",
    questId: 6406,
    map: "darkplane",
    monsters: ["Guardian Knight"]
  },
  {
    kind: "kill",
    questId: 6407,
    map: "darkplane",
    monsters: ["Victorious"]
  },
  {
    kind: "kill",
    questId: 6408,
    map: "darkplane",
    monsters: ["Shadow Beast"]
  },
  {
    kind: "kill",
    questId: 6539,
    map: "noxustower",
    monsters: ["Slimeskull"]
  },
  {
    kind: "kill",
    questId: 6540,
    map: "noxustower",
    monsters: ["Doomwood Treeant"]
  },
  {
    kind: "kill",
    questId: 6541,
    map: "noxustower",
    monsters: ["Sanguine Souleater"]
  },
  {
    kind: "kill",
    questId: 6542,
    map: "noxustower",
    monsters: ["Lightguard Caster"]
  },
  {
    kind: "kill",
    questId: 6543,
    map: "noxustower",
    monsters: ["Lightguard Caster"]
  },
  {
    kind: "kill",
    questId: 6544,
    map: "noxustower",
    monsters: ["Lightguard Caster"]
  },
  {
    kind: "kill",
    questId: 6545,
    map: "noxustower",
    monsters: ["Lightguard Wolf"]
  },
  {
    kind: "kill",
    questId: 6546,
    map: "noxustower",
    monsters: ["Lightguard Paladin"]
  },
  {
    kind: "kill",
    questId: 6547,
    map: "noxustower",
    monsters: ["Slimeskull", "Lightguard Caster", "Doomwood Treeant"]
  },
  {
    kind: "kill",
    questId: 6550,
    map: "noxustower",
    monsters: ["General Goldhammer"]
  },
  {
    kind: "kill",
    questId: 6560,
    map: "lightguardwar",
    monsters: ["Citadel Crusader"]
  },
  {
    kind: "kill",
    questId: 6561,
    map: "lightguardwar",
    monsters: ["Citadel Crusader"]
  },
  {
    kind: "kill",
    questId: 6562,
    map: "lightguardwar",
    monsters: ["Citadel Crusader"]
  },
  {
    kind: "kill",
    questId: 6563,
    map: "lightguardwar",
    monsters: ["Slimeskull"]
  },
  {
    kind: "kill",
    questId: 6564,
    map: "lightguardwar",
    monsters: ["Lightguard Engine"]
  },
  {
    kind: "kill",
    questId: 6565,
    map: "lightguardwar",
    monsters: ["Scorching Flame"]
  },
  {
    kind: "kill",
    questId: 6566,
    map: "lightguardwar",
    monsters: ["Citadel Crusader"]
  },
  {
    kind: "kill",
    questId: 6567,
    map: "lightguardwar",
    monsters: ["Sigrid Sunshield"]
  },
  {
    kind: "kill",
    questId: 6581,
    map: "lumafortress",
    monsters: ["Invasive Shadow"]
  },
  {
    kind: "kill",
    questId: 6582,
    map: "lumafortress",
    monsters: ["Light Treeant"]
  },
  {
    kind: "kill",
    questId: 6583,
    map: "lumafortress",
    monsters: ["Light Elemental"]
  },
  {
    kind: "kill",
    questId: 6584,
    map: "lumafortress",
    monsters: ["Hapless Skeleton"]
  },
  {
    kind: "kill",
    questId: 6585,
    map: "lumafortress",
    monsters: ["Light Treeant"]
  },
  {
    kind: "kill",
    questId: 6586,
    map: "lumafortress",
    monsters: ["Lightwing"]
  },
  {
    kind: "kill",
    questId: 6588,
    map: "lumafortress",
    monsters: ["Light Elemental"]
  },
  {
    kind: "kill",
    questId: 6589,
    map: "lumafortress",
    monsters: ["Living Shadow"]
  },
  {
    kind: "kill",
    questId: 6590,
    map: "lumafortress",
    monsters: ["Skeleton Minion"]
  },
  {
    kind: "kill",
    questId: 6592,
    map: "lumafortress",
    monsters: ["Light Elemental"]
  },
  {
    kind: "mapItem",
    questId: 6332,
    map: "scarsgarde",
    ids: [5860]
  },
  {
    kind: "mapItem",
    questId: 6333,
    map: "scarsgarde",
    ids: [5864, 6]
  },
  {
    kind: "mapItem",
    questId: 6335,
    map: "scarsgarde",
    ids: [5865, 5]
  },
  {
    kind: "mapItem",
    questId: 6338,
    map: "scarsgarde",
    ids: [5866, 5867]
  },
  {
    kind: "mapItem",
    questId: 6339,
    map: "scarsgarde",
    ids: [5868, 8]
  },
  {
    kind: "mapItem",
    questId: 6339,
    map: "scarsgarde",
    ids: [5869]
  },
  {
    kind: "mapItem",
    questId: 6343,
    map: "scarsgarde",
    ids: [5861]
  },
  {
    kind: "mapItem",
    questId: 6344,
    map: "scarsgarde",
    ids: [5864, 6]
  },
  {
    kind: "mapItem",
    questId: 6346,
    map: "scarsgarde",
    ids: [5865, 5]
  },
  {
    kind: "mapItem",
    questId: 6349,
    map: "scarsgarde",
    ids: [5866, 5867]
  },
  {
    kind: "mapItem",
    questId: 6350,
    map: "scarsgarde",
    ids: [5868, 8]
  },
  {
    kind: "mapItem",
    questId: 6350,
    map: "scarsgarde",
    ids: [5869]
  },
  {
    kind: "mapItem",
    questId: 6359,
    map: "valleyofdoom",
    ids: [5873, 8]
  },
  {
    kind: "mapItem",
    questId: 6362,
    map: "valleyofdoom",
    ids: [5872]
  },
  {
    kind: "mapItem",
    questId: 6365,
    map: "guardiantower",
    ids: [5871]
  },
  {
    kind: "mapItem",
    questId: 6370,
    map: "ebonslate",
    ids: [5895]
  },
  {
    kind: "mapItem",
    questId: 6373,
    map: "ebonslate",
    ids: [5896]
  },
  {
    kind: "mapItem",
    questId: 6374,
    map: "ebonslate",
    ids: [5897]
  },
  {
    kind: "mapItem",
    questId: 6375,
    map: "ebonslate",
    ids: [5898]
  },
  {
    kind: "mapItem",
    questId: 6378,
    map: "ebonslate",
    ids: [5899]
  },
  {
    kind: "mapItem",
    questId: 6388,
    map: "guardiantowerb",
    ids: [5901]
  },
  {
    kind: "mapItem",
    questId: 6390,
    map: "ebondungeon",
    ids: [5902]
  },
  {
    kind: "mapItem",
    questId: 6393,
    map: "ebondungeon",
    ids: [5903, 5904]
  },
  {
    kind: "mapItem",
    questId: 6400,
    map: "alteonfight",
    ids: [5910]
  },
  {
    kind: "mapItem",
    questId: 6405,
    map: "darkplane",
    ids: [5911]
  },
  {
    kind: "mapItem",
    questId: 6544,
    map: "noxustower",
    ids: [6018, 4]
  },
  {
    kind: "mapItem",
    questId: 6548,
    map: "noxustower",
    ids: [6019]
  },
  {
    kind: "mapItem",
    questId: 6549,
    map: "noxustower",
    ids: [6020]
  },
  {
    kind: "mapItem",
    questId: 6581,
    map: "lumafortress",
    ids: [6098, 8]
  },
  {
    kind: "mapItem",
    questId: 6582,
    map: "lumafortress",
    ids: [6099, 7]
  },
  {
    kind: "mapItem",
    questId: 6586,
    map: "lumafortress",
    ids: [6100]
  },
  {
    kind: "mapItem",
    questId: 6587,
    map: "lumafortress",
    ids: [6101]
  },
  {
    kind: "kill",
    questId: 7561,
    map: "dualplane",
    monsters: ["Terrarsite"]
  },
  {
    kind: "kill",
    questId: 7562,
    map: "dualplane",
    monsters: ["Droognax"]
  },
  {
    kind: "kill",
    questId: 7564,
    map: "dualplane",
    monsters: ["Terrarsite"]
  },
  {
    kind: "kill",
    questId: 7565,
    map: "dualplane",
    monsters: ["SpiderWing", "Terrarsite"]
  },
  {
    kind: "kill",
    questId: 7566,
    map: "dualplane",
    monsters: ["Droognax"]
  },
  {
    kind: "kill",
    questId: 7567,
    map: "dualplane",
    monsters: ["Netherpit Lackey"]
  },
  {
    kind: "kill",
    questId: 7568,
    map: "dualplane",
    monsters: ["Netherpit Bruiser"]
  },
  {
    kind: "kill",
    questId: 7569,
    map: "dualplane",
    monsters: ["Terrarsite", "Netherpit Lackey"]
  },
  {
    kind: "kill",
    questId: 7571,
    map: "dualplane",
    monsters: ["Xiang"]
  },
  {
    kind: "kill",
    questId: 7688,
    map: "chaosamulet",
    monsters: ["Goldun", "Shadowflame Berserker"]
  },
  {
    kind: "kill",
    questId: 7690,
    map: "lagunabeach",
    monsters: ["Flying Fisheye"]
  },
  {
    kind: "kill",
    questId: 7692,
    map: "lagunabeach",
    monsters: ["ShadowChaos Brigand"]
  },
  {
    kind: "kill",
    questId: 7693,
    map: "lagunabeach",
    monsters: ["Chaos Kelp"]
  },
  {
    kind: "kill",
    questId: 7694,
    map: "lagunabeach",
    monsters: ["ShadowChaos Brigand"]
  },
  {
    kind: "kill",
    questId: 7695,
    map: "lagunabeach",
    monsters: ["Flying Fisheye"]
  },
  {
    kind: "kill",
    questId: 7697,
    map: "lagunabeach",
    monsters: ["ShadowChaos Brigand"]
  },
  {
    kind: "kill",
    questId: 7698,
    map: "lagunabeach",
    monsters: ["ShadowChaos Gunner"]
  },
  {
    kind: "kill",
    questId: 7699,
    map: "lagunabeach",
    monsters: ["Heart of Chaos"]
  },
  {
    kind: "kill",
    questId: 7700,
    map: "lagunabeach",
    monsters: ["Flying Fisheye"]
  },
  {
    kind: "kill",
    questId: 7702,
    map: "laguna",
    monsters: ["ShadowChaos Brigand"]
  },
  {
    kind: "kill",
    questId: 7704,
    map: "laguna",
    monsters: ["ShadowChaos Gunner"]
  },
  {
    kind: "kill",
    questId: 7705,
    map: "laguna",
    monsters: ["ShadowChaos Gunner"]
  },
  {
    kind: "kill",
    questId: 7706,
    map: "laguna",
    monsters: ["Captain Laguna"]
  },
  {
    kind: "kill",
    questId: 7707,
    map: "laguna",
    monsters: ["ShadowChaos Brigand"]
  },
  {
    kind: "kill",
    questId: 7708,
    map: "laguna",
    monsters: ["Chaos Roe"]
  },
  {
    kind: "kill",
    questId: 7709,
    map: "laguna",
    monsters: ["Chaos Burrower"]
  },
  {
    kind: "kill",
    questId: 7710,
    map: "laguna",
    monsters: ["ShadowChaos Brigand"]
  },
  {
    kind: "kill",
    questId: 7711,
    map: "laguna",
    monsters: ["Writhing Chaos"]
  },
  {
    kind: "kill",
    questId: 7712,
    map: "laguna",
    monsters: ["Chaos Roe"]
  },
  {
    kind: "kill",
    questId: 7728,
    map: "shadowoff",
    monsters: ["Shadowflame Militia", "Shadowflame Paladin", "Shadowflame Scout", "Shadowflame Sorcerer"]
  },
  {
    kind: "kill",
    questId: 7729,
    map: "shadowoff",
    monsters: ["Shadowflame Sorcerer"]
  },
  {
    kind: "kill",
    questId: 7730,
    map: "shadowoff",
    monsters: ["Shadowflame Militia"]
  },
  {
    kind: "kill",
    questId: 7731,
    map: "shadowoff",
    monsters: ["Shadowflame Militia", "Shadowflame Scout", "Shadowflame Sorcerer"]
  },
  {
    kind: "kill",
    questId: 7732,
    map: "shadowoff",
    monsters: ["Shadowflame Paladin"]
  },
  {
    kind: "kill",
    questId: 7733,
    map: "brightshadow",
    monsters: ["BrightFall light"]
  },
  {
    kind: "kill",
    questId: 7734,
    map: "brightshadow",
    monsters: ["BrightFall Guard", "ShadowFlame Paladin"]
  },
  {
    kind: "kill",
    questId: 7735,
    map: "brightshadow",
    monsters: ["BrightFall Guard"]
  },
  {
    kind: "kill",
    questId: 7737,
    map: "brightshadow",
    monsters: ["Gravelyn the Good"]
  },
  {
    kind: "kill",
    questId: 7738,
    map: "brightshadow",
    monsters: ["Brightfall light", "Brightfall Guard", "Shadowflame Paladin"]
  },
  {
    kind: "kill",
    questId: 7740,
    map: "brightchaos",
    monsters: ["Shadowflame Militia"]
  },
  {
    kind: "kill",
    questId: 7741,
    map: "brightchaos",
    monsters: ["Shadowflame Sorcerer"]
  },
  {
    kind: "kill",
    questId: 7742,
    map: "brightchaos",
    monsters: ["Shadowflame Militia", "Shadowflame Sorcerer"]
  },
  {
    kind: "kill",
    questId: 7743,
    map: "brightchaos",
    monsters: ["Shadow Flame"]
  },
  {
    kind: "kill",
    questId: 7744,
    map: "brightchaos",
    monsters: ["Hidden Monster"]
  },
  {
    kind: "kill",
    questId: 7745,
    map: "brightchaos",
    monsters: ["Shadow Trap"]
  },
  {
    kind: "kill",
    questId: 7746,
    map: "brightchaos",
    monsters: ["ShadowBeast"]
  },
  {
    kind: "kill",
    questId: 7748,
    map: "brightchaos",
    monsters: ["ShadowBeast"]
  },
  {
    kind: "kill",
    questId: 7749,
    map: "brightchaos",
    monsters: ["Blight"]
  },
  {
    kind: "kill",
    questId: 7750,
    map: "brightchaos",
    monsters: ["Blight"]
  },
  {
    kind: "kill",
    questId: 7756,
    map: "brightforest",
    monsters: ["Shadow Flame", "ShadowFlame Scout"]
  },
  {
    kind: "kill",
    questId: 7757,
    map: "brightforest",
    monsters: ["ShadowFlame Scout"]
  },
  {
    kind: "kill",
    questId: 7759,
    map: "brightforestpast",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 7760,
    map: "brightforestpast",
    monsters: ["Spacetime Energy"]
  },
  {
    kind: "kill",
    questId: 7762,
    map: "brightforestpast",
    monsters: ["Undead Minion"]
  },
  {
    kind: "kill",
    questId: 7763,
    map: "brightforestpast",
    monsters: ["Undead Minion", "Twisted Treeant"]
  },
  {
    kind: "kill",
    questId: 7767,
    map: "brightforest",
    monsters: ["ShadowFlame Dragon"]
  },
  {
    kind: "kill",
    questId: 7768,
    map: "brightforest",
    monsters: ["ShadowFlame Dragon"]
  },
  {
    kind: "kill",
    questId: 7768,
    map: "brightforest",
    monsters: ["Shadowflame Scout", "Shadowflame Warrior"]
  },
  {
    kind: "mapItem",
    questId: 7563,
    map: "dualplane",
    ids: [7459]
  },
  {
    kind: "mapItem",
    questId: 7570,
    map: "dualplane",
    ids: [7460]
  },
  {
    kind: "mapItem",
    questId: 7691,
    map: "lagunabeach",
    ids: [7636]
  },
  {
    kind: "mapItem",
    questId: 7693,
    map: "lagunabeach",
    ids: [7637, 5]
  },
  {
    kind: "mapItem",
    questId: 7696,
    map: "lagunabeach",
    ids: [7638, 3]
  },
  {
    kind: "mapItem",
    questId: 7696,
    map: "lagunabeach",
    ids: [7639]
  },
  {
    kind: "mapItem",
    questId: 7698,
    map: "lagunabeach",
    ids: [7640]
  },
  { kind: "mapItem", questId: 7703, map: "laguna", ids: [7675] },
  { kind: "mapItem", questId: 7705, map: "laguna", ids: [7676] },
  { kind: "mapItem", questId: 7710, map: "laguna", ids: [7678] },
  {
    kind: "mapItem",
    questId: 7729,
    map: "shadowoff",
    ids: [7699, 6]
  },
  {
    kind: "mapItem",
    questId: 7736,
    map: "brightshadow",
    ids: [7701]
  },
  {
    kind: "mapItem",
    questId: 7743,
    map: "brightchaos",
    ids: [7731, 6]
  },
  {
    kind: "mapItem",
    questId: 7744,
    map: "brightchaos",
    ids: [7732, 5]
  },
  {
    kind: "mapItem",
    questId: 7747,
    map: "brightchaos",
    ids: [7733, 6]
  },
  {
    kind: "mapItem",
    questId: 7758,
    map: "brightforest",
    ids: [7754, 2]
  },
  {
    kind: "mapItem",
    questId: 7758,
    map: "brightforest",
    ids: [7755, 1]
  },
  {
    kind: "mapItem",
    questId: 7760,
    map: "brightforestpast",
    ids: [7753]
  },
  {
    kind: "mapItem",
    questId: 7761,
    map: "brightforestpast",
    ids: [7756]
  },
  {
    kind: "mapItem",
    questId: 7766,
    map: "brightforestpast",
    ids: [7758]
  },
  {
    kind: "kill",
    questId: 6846,
    map: "shadowwar",
    monsters: ["Shadowflame Slasher"]
  },
  {
    kind: "kill",
    questId: 6847,
    map: "shadowwar",
    monsters: ["Seed Spitter"]
  },
  {
    kind: "kill",
    questId: 6856,
    map: "shadowlordkeep",
    monsters: ["Shadow Gunner"]
  },
  {
    kind: "kill",
    questId: 6857,
    map: "shadowlordkeep",
    monsters: ["Shadow Gunner"]
  },
  {
    kind: "kill",
    questId: 6860,
    map: "shadowlordkeep",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6861,
    map: "shadowlordkeep",
    monsters: ["Shadow Mage"]
  },
  {
    kind: "kill",
    questId: 6862,
    map: "shadowlordkeep",
    monsters: ["Stray Energy"]
  },
  {
    kind: "kill",
    questId: 6863,
    map: "shadowlordkeep",
    monsters: ["Portal Guard"]
  },
  {
    kind: "kill",
    questId: 6865,
    map: "timestream",
    monsters: ["Spacetime Energy"]
  },
  {
    kind: "kill",
    questId: 6867,
    map: "timestream",
    monsters: ["ShadowKnight Gar"]
  },
  {
    kind: "kill",
    questId: 6873,
    map: "granitecove",
    monsters: ["Blacksea Pirate"]
  },
  {
    kind: "kill",
    questId: 6876,
    map: "granitecove",
    monsters: ["Jungle Treeant"]
  },
  {
    kind: "kill",
    questId: 6877,
    map: "granitecove",
    monsters: ["Island Monkey"]
  },
  {
    kind: "kill",
    questId: 6878,
    map: "granitecove",
    monsters: ["Jungle Treeant"]
  },
  {
    kind: "kill",
    questId: 6879,
    map: "granitecove",
    monsters: ["Blacksea Pirate"]
  },
  {
    kind: "kill",
    questId: 6881,
    map: "granitecove",
    monsters: ["Tattersail Pirate"]
  },
  {
    kind: "kill",
    questId: 6882,
    map: "granitecove",
    monsters: ["Blacktooth Bill"]
  },
  {
    kind: "kill",
    questId: 6883,
    map: "granitecove",
    monsters: ["Pirate Queen Teja"]
  },
  {
    kind: "kill",
    questId: 6886,
    map: "blackseakeep",
    monsters: ["Blacksea Scallywag"]
  },
  {
    kind: "kill",
    questId: 6887,
    map: "blackseakeep",
    monsters: ["Pure Darkness"]
  },
  {
    kind: "kill",
    questId: 6888,
    map: "blackseakeep",
    monsters: ["Blacksea Privateer"]
  },
  {
    kind: "kill",
    questId: 6889,
    map: "blackseakeep",
    monsters: ["Blacksea Scallywag"]
  },
  {
    kind: "kill",
    questId: 6891,
    map: "blackseakeep",
    monsters: ["Blacksea Privateer"]
  },
  {
    kind: "kill",
    questId: 6892,
    map: "blackseakeep",
    monsters: ["Blacksea Pirate Mage", "Blacksea Pirate Mage"]
  },
  {
    kind: "kill",
    questId: 6894,
    map: "blackseakeep",
    monsters: ["Blacksea Privateer"]
  },
  {
    kind: "kill",
    questId: 6896,
    map: "blackseakeep",
    monsters: ["First Mate Bloodbone"]
  },
  {
    kind: "kill",
    questId: 6949,
    map: "junkhoard",
    monsters: ["Magpie"]
  },
  {
    kind: "kill",
    questId: 6950,
    map: "junkhoard",
    monsters: ["Junk Golem"]
  },
  {
    kind: "kill",
    questId: 6951,
    map: "junkhoard",
    monsters: ["Portal Manifestation"]
  },
  {
    kind: "kill",
    questId: 6952,
    map: "junkhoard",
    monsters: ["Junk Golem"]
  },
  {
    kind: "kill",
    questId: 6953,
    map: "junkhoard",
    monsters: ["Portal Manifestation"]
  },
  {
    kind: "kill",
    questId: 6955,
    map: "junkhoard",
    monsters: ["Magpie"]
  },
  {
    kind: "kill",
    questId: 6956,
    map: "junkhoard",
    monsters: ["Coal Elemental"]
  },
  {
    kind: "kill",
    questId: 6957,
    map: "junkhoard",
    monsters: ["Magpie"]
  },
  {
    kind: "kill",
    questId: 6958,
    map: "junkhoard",
    monsters: ["Junk Golem"]
  },
  {
    kind: "kill",
    questId: 6960,
    map: "junkhoard",
    monsters: ["Magpie Junk Heap"]
  },
  {
    kind: "kill",
    questId: 6962,
    map: "junkheap",
    monsters: ["Magpie"]
  },
  {
    kind: "kill",
    questId: 6963,
    map: "junkheap",
    monsters: ["Tiny Manifestation"]
  },
  {
    kind: "kill",
    questId: 6965,
    map: "junkheap",
    monsters: ["Shadowflame Scout"]
  },
  {
    kind: "kill",
    questId: 6966,
    map: "junkheap",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6967,
    map: "junkheap",
    monsters: ["Dark Treeant"]
  },
  {
    kind: "kill",
    questId: 6968,
    map: "junkheap",
    monsters: ["Shadow Imp", "Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6970,
    map: "junkheap",
    monsters: ["Dark Treeant", "Shadowflame Scout"]
  },
  {
    kind: "kill",
    questId: 6971,
    map: "junkheap",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 6972,
    map: "junkheap",
    monsters: ["Shadowflame Bruiser"]
  },
  {
    kind: "kill",
    questId: 6973,
    map: "junkheap",
    monsters: ["Shadowflame Yulgar"]
  },
  {
    kind: "kill",
    questId: 6993,
    map: "shadowgrove",
    monsters: ["Shadow Dragonlord"]
  },
  {
    kind: "kill",
    questId: 6994,
    map: "shadowgrove",
    monsters: ["Shadow Wyvern"]
  },
  {
    kind: "kill",
    questId: 6995,
    map: "shadowgrove",
    monsters: ["Shadow Dragonlord"]
  },
  {
    kind: "kill",
    questId: 6996,
    map: "shadowgrove",
    monsters: ["Shadow Wyvern"]
  },
  {
    kind: "kill",
    questId: 6997,
    map: "shadowgrove",
    monsters: ["Mutant Shadow Dragon"]
  },
  {
    kind: "kill",
    questId: 6999,
    map: "shadowgrove",
    monsters: ["Titan Shadow Dragonlord"]
  },
  {
    kind: "kill",
    questId: 7050,
    map: "aozorahills",
    monsters: ["Reishi"]
  },
  {
    kind: "kill",
    questId: 7052,
    map: "aozorahills",
    monsters: ["Aozora Kijimuna"]
  },
  {
    kind: "kill",
    questId: 7053,
    map: "aozorahills",
    monsters: ["Osanshouo"]
  },
  {
    kind: "kill",
    questId: 7054,
    map: "aozorahills",
    monsters: ["Kosenjobi"]
  },
  {
    kind: "kill",
    questId: 7055,
    map: "aozorahills",
    monsters: ["Fuyurei"]
  },
  {
    kind: "kill",
    questId: 7057,
    map: "aozorahills",
    monsters: ["Aozora Kijimuna"]
  },
  {
    kind: "kill",
    questId: 7059,
    map: "aozorahills",
    monsters: ["Reishi"]
  },
  {
    kind: "kill",
    questId: 7061,
    map: "aozorahills",
    monsters: ["Kosenjobi"]
  },
  {
    kind: "kill",
    questId: 7062,
    map: "aozorahills",
    monsters: ["Ghostly Hasu"]
  },
  {
    kind: "kill",
    questId: 7107,
    map: "ghostnexus",
    monsters: ["Chaos Goat"]
  },
  {
    kind: "kill",
    questId: 7108,
    map: "ghostnexus",
    monsters: ["Chaos Sp-eye"]
  },
  {
    kind: "kill",
    questId: 7110,
    map: "ghostnexus",
    monsters: ["Chaos Goat", "Chaos Wolf"]
  },
  {
    kind: "kill",
    questId: 7111,
    map: "ghostnexus",
    monsters: ["Gnarltooth"]
  },
  {
    kind: "kill",
    questId: 7112,
    map: "ghostnexus",
    monsters: ["Infernal Knight"]
  },
  {
    kind: "kill",
    questId: 7113,
    map: "ghostnexus",
    monsters: ["Abumi Guchi"]
  },
  {
    kind: "kill",
    questId: 7114,
    map: "ghostnexus",
    monsters: ["Infernal Knight", "Abumi Guchi"]
  },
  {
    kind: "kill",
    questId: 7115,
    map: "ghostnexus",
    monsters: ["Nether Warlock"]
  },
  {
    kind: "kill",
    questId: 7116,
    map: "ghostnexus",
    monsters: ["Manifestation of Grief"]
  },
  {
    kind: "kill",
    questId: 7117,
    map: "ghostnexus",
    monsters: ["Manifestation of Rage"]
  },
  {
    kind: "kill",
    questId: 7118,
    map: "ghostnexus",
    monsters: ["Mahou's Anguish"]
  },
  {
    kind: "kill",
    questId: 7341,
    map: "shadowsong",
    monsters: ["Tune-A-Fish"]
  },
  {
    kind: "kill",
    questId: 7342,
    map: "shadowsong",
    monsters: ["Beatle"]
  },
  {
    kind: "kill",
    questId: 7343,
    map: "shadowsong",
    monsters: ["Shattered Crystal"]
  },
  {
    kind: "kill",
    questId: 7345,
    map: "shadowsong",
    monsters: ["Mozard"]
  },
  {
    kind: "kill",
    questId: 7346,
    map: "shadowsong",
    monsters: ["Pachelbel's Cannon"]
  },
  {
    kind: "kill",
    questId: 7347,
    map: "shadowsong",
    monsters: ["Mozard"]
  },
  {
    kind: "kill",
    questId: 7348,
    map: "shadowsong",
    monsters: ["Oh'Garr"]
  },
  {
    kind: "kill",
    questId: 7420,
    map: "darkally",
    monsters: ["Underworld Golem", "Underworld Golem"]
  },
  {
    kind: "kill",
    questId: 7425,
    map: "darkally",
    monsters: ["Frozen Pyromancer"]
  },
  {
    kind: "kill",
    questId: 7426,
    map: "darkally",
    monsters: ["Underworld Golem"]
  },
  {
    kind: "kill",
    questId: 7428,
    map: "darkally",
    monsters: ["Underfiend"]
  },
  {
    kind: "kill",
    questId: 7446,
    map: "darkalliance",
    monsters: ["Shadow"]
  },
  {
    kind: "kill",
    questId: 7447,
    map: "darkalliance",
    monsters: ["Shadowblade"]
  },
  {
    kind: "kill",
    questId: 7448,
    map: "darkalliance",
    monsters: ["Shadow Void"]
  },
  {
    kind: "kill",
    questId: 7449,
    map: "darkalliance",
    monsters: ["Shadow Makai"]
  },
  {
    kind: "kill",
    questId: 7450,
    map: "darkalliance",
    monsters: ["Shadow Void"]
  },
  {
    kind: "kill",
    questId: 7453,
    map: "darkalliance",
    monsters: ["Underlava"]
  },
  {
    kind: "kill",
    questId: 7454,
    map: "darkalliance",
    monsters: ["Underworld Imp"]
  },
  {
    kind: "kill",
    questId: 7456,
    map: "darkalliance",
    monsters: ["Underflame Guardian"]
  },
  {
    kind: "kill",
    questId: 7458,
    map: "darkalliance",
    monsters: ["Shadow"]
  },
  {
    kind: "kill",
    questId: 7460,
    map: "darkalliance",
    monsters: ["ShadowFlame Nulgath"]
  },
  {
    kind: "kill",
    questId: 7461,
    map: "innershadows",
    monsters: ["Infected Minion"]
  },
  {
    kind: "kill",
    questId: 7462,
    map: "innershadows",
    monsters: ["Infected Minion"]
  },
  {
    kind: "kill",
    questId: 7463,
    map: "innershadows",
    monsters: ["Infected Minion"]
  },
  {
    kind: "kill",
    questId: 7466,
    map: "innershadows",
    monsters: ["Shadowcrow"]
  },
  {
    kind: "kill",
    questId: 7467,
    map: "innershadows",
    monsters: ["Shadow ShadowScythe"]
  },
  {
    kind: "kill",
    questId: 7468,
    map: "innershadows",
    monsters: ["Infected Minion"]
  },
  {
    kind: "kill",
    questId: 7470,
    map: "innershadows",
    monsters: ["ShadowSpitter", "Shadowcrow"]
  },
  {
    kind: "kill",
    questId: 7472,
    map: "innershadows",
    monsters: ["Krahen"]
  },
  {
    kind: "kill",
    questId: 8125,
    map: "fireplanewar",
    monsters: ["Shadowflame Soldier"]
  },
  {
    kind: "kill",
    questId: 8126,
    map: "fireplanewar",
    monsters: ["Shadowflame Soldier"]
  },
  {
    kind: "kill",
    questId: 8127,
    map: "fireplanewar",
    monsters: ["Shadefire Onslaught"]
  },
  {
    kind: "kill",
    questId: 8128,
    map: "fireplanewar",
    monsters: ["Shadowflame Soldier"]
  },
  {
    kind: "kill",
    questId: 8129,
    map: "fireplanewar",
    monsters: ["Shadowflame Soldier"]
  },
  {
    kind: "kill",
    questId: 8130,
    map: "fireplanewar",
    monsters: ["Shadefire Onslaught"]
  },
  {
    kind: "kill",
    questId: 8131,
    map: "fireplanewar",
    monsters: ["ShadowClaw"]
  },
  {
    kind: "kill",
    questId: 8132,
    map: "fireplanewar",
    monsters: ["Shadefire Elemental"]
  },
  {
    kind: "kill",
    questId: 8133,
    map: "fireplanewar",
    monsters: ["Living Shadowflame"]
  },
  {
    kind: "kill",
    questId: 8134,
    map: "fireplanewar",
    monsters: ["Living Shadowflame"]
  },
  {
    kind: "kill",
    questId: 8135,
    map: "fireplanewar",
    monsters: ["ShadowFlame Phedra"]
  },
  {
    kind: "kill",
    questId: 8136,
    map: "shadowfireplane",
    monsters: ["Living Shadowflame"]
  },
  {
    kind: "kill",
    questId: 8138,
    map: "shadowfireplane",
    monsters: ["Onslaught Knight"]
  },
  {
    kind: "kill",
    questId: 8141,
    map: "shadowfireplane",
    monsters: ["Shadowfire Corporal", "Onslaught Knight"]
  },
  {
    kind: "kill",
    questId: 8142,
    map: "shadowfireplane",
    monsters: ["Shadowfire Tiger"]
  },
  {
    kind: "kill",
    questId: 8143,
    map: "shadowfireplane",
    monsters: ["Shadowfire Corporal"]
  },
  {
    kind: "kill",
    questId: 8144,
    map: "shadowfireplane",
    monsters: ["Elius"]
  },
  {
    kind: "kill",
    questId: 8179,
    map: "fireinvasion",
    monsters: ["Onslaught Knight"]
  },
  {
    kind: "kill",
    questId: 8180,
    map: "fireinvasion",
    monsters: ["Shadowfire Tiger"]
  },
  {
    kind: "kill",
    questId: 8181,
    map: "fireinvasion",
    monsters: ["Shadefire Cavalry"]
  },
  {
    kind: "kill",
    questId: 8182,
    map: "fireinvasion",
    monsters: ["Shadowfire Corporal"]
  },
  {
    kind: "kill",
    questId: 8183,
    map: "fireinvasion",
    monsters: ["Shadefire Elemental"]
  },
  {
    kind: "kill",
    questId: 8184,
    map: "fireinvasion",
    monsters: ["Shadefire Major"]
  },
  {
    kind: "kill",
    questId: 8186,
    map: "fireinvasion",
    monsters: ["Living Shadowflame"]
  },
  {
    kind: "kill",
    questId: 8187,
    map: "fireinvasion",
    monsters: ["Shadefire Colonel"]
  },
  {
    kind: "kill",
    questId: 8188,
    map: "fireinvasion",
    monsters: ["Living Shadowflame"]
  },
  {
    kind: "kill",
    questId: 8189,
    map: "fireinvasion",
    monsters: ["Onslaught Knight"]
  },
  {
    kind: "kill",
    questId: 8190,
    map: "fireinvasion",
    monsters: ["Shadefire General"]
  },
  {
    kind: "kill",
    questId: 8191,
    map: "fireinvasion",
    monsters: ["Shadowflame Kyron"]
  },
  {
    kind: "kill",
    questId: 8192,
    map: "fireinvasion",
    monsters: ["Living Shadowflame", "Shadefire Cavalry"]
  },
  {
    kind: "kill",
    questId: 8193,
    map: "wartraining",
    monsters: ["Simulated Shadefire"]
  },
  {
    kind: "kill",
    questId: 8195,
    map: "wartraining",
    monsters: ["Simulated Major"]
  },
  {
    kind: "kill",
    questId: 8196,
    map: "wartraining",
    monsters: ["Simulated Elius"]
  },
  {
    kind: "kill",
    questId: 8197,
    map: "wartraining",
    monsters: ["Simulated Fire"]
  },
  {
    kind: "kill",
    questId: 8198,
    map: "wartraining",
    monsters: ["Simulated Elemental"]
  },
  {
    kind: "kill",
    questId: 8199,
    map: "wartraining",
    monsters: ["Simulated Fire"]
  },
  {
    kind: "kill",
    questId: 8200,
    map: "wartraining",
    monsters: ["Fire Champion"]
  },
  {
    kind: "kill",
    questId: 8201,
    map: "wartraining",
    monsters: ["Warfury Soldier"]
  },
  {
    kind: "kill",
    questId: 8202,
    map: "wartraining",
    monsters: ["Warfury Elite"]
  },
  {
    kind: "kill",
    questId: 8203,
    map: "wartraining",
    monsters: ["Varga"]
  },
  {
    kind: "kill",
    questId: 8204,
    map: "wartraining",
    monsters: ["Warfury Soldier"]
  },
  {
    kind: "kill",
    questId: 8233,
    map: "fireavatar",
    monsters: ["Shadefire Colonel"]
  },
  {
    kind: "kill",
    questId: 8234,
    map: "fireavatar",
    monsters: ["Shadefire Major"]
  },
  {
    kind: "kill",
    questId: 8236,
    map: "fireavatar",
    monsters: ["Shadefire Cavalry"]
  },
  {
    kind: "kill",
    questId: 8237,
    map: "fireavatar",
    monsters: ["Shadefire Colonel"]
  },
  {
    kind: "kill",
    questId: 8238,
    map: "fireavatar",
    monsters: ["Elius"]
  },
  {
    kind: "kill",
    questId: 8239,
    map: "fireavatar",
    monsters: ["Living Shadowflame"]
  },
  {
    kind: "kill",
    questId: 8240,
    map: "fireavatar",
    monsters: ["Shadefire Elemental"]
  },
  {
    kind: "kill",
    questId: 8243,
    map: "fireavatar",
    monsters: ["Fire Orb", "Avatar Tyndarius"]
  },
  {
    kind: "kill",
    questId: 8779,
    map: "ruinedcrown",
    monsters: ["Mana-Burdened Knight", "Mana-Burdened Minion"]
  },
  {
    kind: "kill",
    questId: 8781,
    map: "ruinedcrown",
    monsters: ["Mana-Burdened Mage"]
  },
  {
    kind: "kill",
    questId: 8782,
    map: "ruinedcrown",
    monsters: ["Mana-Burdened Knight", "Mana-Burdened Minion"]
  },
  {
    kind: "kill",
    questId: 8783,
    map: "ruinedcrown",
    monsters: ["Frenzied Mana"]
  },
  {
    kind: "kill",
    questId: 8785,
    map: "ruinedcrown",
    monsters: ["Mana-Burdened Mage"]
  },
  {
    kind: "kill",
    questId: 8786,
    map: "ruinedcrown",
    monsters: ["Frenzied Mana"]
  },
  {
    kind: "kill",
    questId: 8787,
    map: "ruinedcrown",
    monsters: ["Calamitous Warlic"]
  },
  {
    kind: "kill",
    questId: 8804,
    map: "timekeep",
    monsters: ["Decaying Locust"]
  },
  {
    kind: "kill",
    questId: 8805,
    map: "timekeep",
    monsters: ["Distorted Imp"]
  },
  {
    kind: "kill",
    questId: 8807,
    map: "timekeep",
    monsters: ["Mana-Burdened Mage"]
  },
  {
    kind: "kill",
    questId: 8809,
    map: "timekeep",
    monsters: ["Mumbler"]
  },
  {
    kind: "kill",
    questId: 8810,
    map: "timekeep",
    monsters: ["Distorted Imp", "Mana-Burdened Mage"]
  },
  {
    kind: "kill",
    questId: 8811,
    map: "timekeep",
    monsters: ["Mumbler", "Decaying Locust"]
  },
  {
    kind: "kill",
    questId: 8812,
    map: "timekeep",
    monsters: ["Mal-formed Gar"]
  },
  {
    kind: "kill",
    questId: 8813,
    map: "timekeep",
    monsters: ["Mal-formed Gar", "Mumbler", "Decaying Locust"]
  },
  {
    kind: "kill",
    questId: 8816,
    map: "streamwar",
    monsters: ["Mumbler"]
  },
  {
    kind: "kill",
    questId: 8817,
    map: "streamwar",
    monsters: ["Decaying Locust"]
  },
  {
    kind: "kill",
    questId: 8818,
    map: "streamwar",
    monsters: ["False Wyvern"]
  },
  {
    kind: "kill",
    questId: 8819,
    map: "streamwar",
    monsters: ["Second Speaker"]
  },
  {
    kind: "kill",
    questId: 8860,
    map: "deadlines",
    monsters: ["Frenzied Mana"]
  },
  {
    kind: "kill",
    questId: 8861,
    map: "deadlines",
    monsters: ["Shadowfall Warrior"]
  },
  {
    kind: "kill",
    questId: 8862,
    map: "deadlines",
    monsters: ["Swordhaven Knight"]
  },
  {
    kind: "kill",
    questId: 8863,
    map: "deadlines",
    monsters: ["Shadowfall Warrior"]
  },
  {
    kind: "kill",
    questId: 8864,
    map: "deadlines",
    monsters: ["Swordhaven Knight"]
  },
  {
    kind: "kill",
    questId: 8865,
    map: "deadlines",
    monsters: ["Frenzied Mana"]
  },
  {
    kind: "kill",
    questId: 8866,
    map: "deadlines",
    monsters: ["Chaos Mage"]
  },
  {
    kind: "kill",
    questId: 8867,
    map: "deadlines",
    monsters: ["Frenzied Mana"]
  },
  {
    kind: "kill",
    questId: 8868,
    map: "deadlines",
    monsters: ["Eternal Dragon"]
  },
  {
    kind: "kill",
    questId: 8956,
    map: "worldscore",
    monsters: ["False Wyvern"]
  },
  {
    kind: "kill",
    questId: 8957,
    map: "worldscore",
    monsters: ["Elemental Attempt"]
  },
  {
    kind: "kill",
    questId: 8958,
    map: "worldscore",
    monsters: ["Infernal Mockery"]
  },
  {
    kind: "kill",
    questId: 8959,
    map: "worldscore",
    monsters: ["Infernal Mockery"]
  },
  {
    kind: "kill",
    questId: 8960,
    map: "worldscore",
    monsters: ["Elemental Attempt"]
  },
  {
    kind: "kill",
    questId: 8962,
    map: "worldscore",
    monsters: ["Crystalized Mana"]
  },
  {
    kind: "kill",
    questId: 8963,
    map: "worldscore",
    monsters: ["Infernal Mockery"]
  },
  {
    kind: "kill",
    questId: 8964,
    map: "worldscore",
    monsters: ["Elemental Attempt"]
  },
  {
    kind: "kill",
    questId: 8965,
    map: "worldscore",
    monsters: ["Mask of Tranquility"]
  },
  {
    kind: "kill",
    questId: 9116,
    map: "manacradle",
    monsters: ["Elemental Attempt"]
  },
  {
    kind: "kill",
    questId: 9117,
    map: "manacradle",
    monsters: ["Crystalized Mana"]
  },
  {
    kind: "kill",
    questId: 9119,
    map: "manacradle",
    monsters: ["Crystalized Mana", "Elemental Attempt"]
  },
  {
    kind: "kill",
    questId: 9120,
    map: "manacradle",
    monsters: ["Dark Tainted Mana"]
  },
  {
    kind: "kill",
    questId: 9121,
    map: "manacradle",
    monsters: ["Darkness Elemental"]
  },
  {
    kind: "kill",
    questId: 9123,
    map: "manacradle",
    monsters: ["Darkness Elemental", "Dark Tainted Mana"]
  },
  {
    kind: "kill",
    questId: 9124,
    map: "manacradle",
    monsters: ["Malgor"]
  },
  {
    kind: "kill",
    questId: 9125,
    map: "manacradle",
    monsters: ["The Mainyu"]
  },
  {
    kind: "mapItem",
    questId: 6856,
    map: "shadowlordkeep",
    ids: [6390]
  },
  {
    kind: "mapItem",
    questId: 6859,
    map: "shadowlordkeep",
    ids: [6391]
  },
  {
    kind: "mapItem",
    questId: 6862,
    map: "shadowlordkeep",
    ids: [6392]
  },
  { kind: "mapItem", questId: 6864, map: "timestream", ids: [6393] },
  { kind: "mapItem", questId: 6866, map: "timestream", ids: [6394] },
  {
    kind: "mapItem",
    questId: 6874,
    map: "granitecove",
    ids: [6433]
  },
  {
    kind: "mapItem",
    questId: 6875,
    map: "granitecove",
    ids: [6434, 6435, 6436]
  },
  {
    kind: "mapItem",
    questId: 6880,
    map: "granitecove",
    ids: [6438, 10]
  },
  {
    kind: "mapItem",
    questId: 6887,
    map: "blackseakeep",
    ids: [6446, 6]
  },
  {
    kind: "mapItem",
    questId: 6890,
    map: "blackseakeep",
    ids: [6448]
  },
  {
    kind: "mapItem",
    questId: 6893,
    map: "blackseakeep",
    ids: [6449, 7]
  },
  {
    kind: "mapItem",
    questId: 6895,
    map: "blackseakeep",
    ids: [6450, 8]
  },
  { kind: "mapItem", questId: 6954, map: "junkhoard", ids: [6497] },
  { kind: "mapItem", questId: 6959, map: "junkhoard", ids: [6498] },
  {
    kind: "mapItem",
    questId: 6961,
    map: "junkheap",
    ids: [6500, 5]
  },
  { kind: "mapItem", questId: 6963, map: "junkheap", ids: [6501] },
  { kind: "mapItem", questId: 6964, map: "junkheap", ids: [6502] },
  { kind: "mapItem", questId: 6965, map: "junkheap", ids: [6503] },
  { kind: "mapItem", questId: 6969, map: "junkheap", ids: [6504] },
  { kind: "mapItem", questId: 6974, map: "junkhoard", ids: [6505] },
  {
    kind: "mapItem",
    questId: 7050,
    map: "aozorahills",
    ids: [6643, 5]
  },
  {
    kind: "mapItem",
    questId: 7050,
    map: "aozorahills",
    ids: [6644, 5]
  },
  {
    kind: "mapItem",
    questId: 7051,
    map: "aozorahills",
    ids: [6645]
  },
  {
    kind: "mapItem",
    questId: 7055,
    map: "aozorahills",
    ids: [6646]
  },
  {
    kind: "mapItem",
    questId: 7056,
    map: "aozorahills",
    ids: [6647, 3]
  },
  {
    kind: "mapItem",
    questId: 7057,
    map: "aozorahills",
    ids: [6648]
  },
  {
    kind: "mapItem",
    questId: 7058,
    map: "aozorahills",
    ids: [6649, 3]
  },
  {
    kind: "mapItem",
    questId: 7059,
    map: "aozorahills",
    ids: [6650]
  },
  {
    kind: "mapItem",
    questId: 7060,
    map: "aozorahills",
    ids: [6651, 3]
  },
  { kind: "mapItem", questId: 7106, map: "ghostnexus", ids: [6700] },
  { kind: "mapItem", questId: 7109, map: "ghostnexus", ids: [6701] },
  {
    kind: "mapItem",
    questId: 7419,
    map: "darkally",
    ids: [7179, 6]
  },
  {
    kind: "mapItem",
    questId: 7421,
    map: "darkally",
    ids: [7180, 1]
  },
  {
    kind: "mapItem",
    questId: 7421,
    map: "darkally",
    ids: [7181, 8]
  },
  {
    kind: "mapItem",
    questId: 7427,
    map: "darkally",
    ids: [7182, 1]
  },
  {
    kind: "mapItem",
    questId: 7446,
    map: "darkalliance",
    ids: [7224, 8]
  },
  {
    kind: "mapItem",
    questId: 7447,
    map: "darkalliance",
    ids: [7225, 1]
  },
  {
    kind: "mapItem",
    questId: 7451,
    map: "darkalliance",
    ids: [7226, 8]
  },
  {
    kind: "mapItem",
    questId: 7452,
    map: "darkalliance",
    ids: [7227, 1]
  },
  {
    kind: "mapItem",
    questId: 7455,
    map: "darkalliance",
    ids: [7228, 6]
  },
  {
    kind: "mapItem",
    questId: 7457,
    map: "darkalliance",
    ids: [7229, 1]
  },
  {
    kind: "mapItem",
    questId: 7459,
    map: "darkalliance",
    ids: [7230, 1]
  },
  {
    kind: "mapItem",
    questId: 7462,
    map: "innershadows",
    ids: [7271]
  },
  {
    kind: "mapItem",
    questId: 7464,
    map: "innershadows",
    ids: [7272]
  },
  {
    kind: "mapItem",
    questId: 7465,
    map: "innershadows",
    ids: [7273, 8]
  },
  {
    kind: "mapItem",
    questId: 7469,
    map: "innershadows",
    ids: [7274, 5]
  },
  {
    kind: "mapItem",
    questId: 7471,
    map: "innershadows",
    ids: [7275, 5]
  },
  {
    kind: "mapItem",
    questId: 8129,
    map: "fireplanewar",
    ids: [8523, 5]
  },
  {
    kind: "mapItem",
    questId: 8133,
    map: "fireplanewar",
    ids: [8524, 5]
  },
  {
    kind: "mapItem",
    questId: 8137,
    map: "shadowfireplane",
    ids: [8544, 5]
  },
  {
    kind: "mapItem",
    questId: 8139,
    map: "shadowfireplane",
    ids: [8542]
  },
  {
    kind: "mapItem",
    questId: 8180,
    map: "fireinvasion",
    ids: [8728, 3]
  },
  {
    kind: "mapItem",
    questId: 8183,
    map: "fireinvasion",
    ids: [8729, 6]
  },
  {
    kind: "mapItem",
    questId: 8194,
    map: "wartraining",
    ids: [8746, 4]
  },
  {
    kind: "mapItem",
    questId: 8235,
    map: "fireavatar",
    ids: [8859, 4]
  },
  {
    kind: "mapItem",
    questId: 8778,
    map: "ruinedcrown",
    ids: [10380, 10382, 10383]
  },
  {
    kind: "mapItem",
    questId: 8780,
    map: "ruinedcrown",
    ids: [10384, 6]
  },
  {
    kind: "mapItem",
    questId: 8784,
    map: "ruinedcrown",
    ids: [10385, 6]
  },
  {
    kind: "mapItem",
    questId: 8786,
    map: "ruinedcrown",
    ids: [10386]
  },
  {
    kind: "mapItem",
    questId: 8803,
    map: "timekeep",
    ids: [10455, 10456, 10457]
  },
  {
    kind: "mapItem",
    questId: 8806,
    map: "timekeep",
    ids: [10458, 6]
  },
  {
    kind: "mapItem",
    questId: 8808,
    map: "timekeep",
    ids: [10459, 10460]
  },
  {
    kind: "mapItem",
    questId: 8859,
    map: "deadlines",
    ids: [10601, 6]
  },
  { kind: "mapItem", questId: 8860, map: "deadlines", ids: [10602] },
  {
    kind: "mapItem",
    questId: 8861,
    map: "deadlines",
    ids: [10603, 10604]
  },
  {
    kind: "mapItem",
    questId: 8862,
    map: "deadlines",
    ids: [10605, 10606]
  },
  {
    kind: "mapItem",
    questId: 8863,
    map: "deadlines",
    ids: [10607, 10608]
  },
  {
    kind: "mapItem",
    questId: 8864,
    map: "deadlines",
    ids: [10609, 10610]
  },
  {
    kind: "mapItem",
    questId: 8865,
    map: "deadlines",
    ids: [10611, 10612]
  },
  { kind: "mapItem", questId: 8866, map: "deadlines", ids: [10613] },
  { kind: "mapItem", questId: 8867, map: "deadlines", ids: [10614] },
  {
    kind: "mapItem",
    questId: 8956,
    map: "worldscore",
    ids: [10877]
  },
  {
    kind: "mapItem",
    questId: 8957,
    map: "worldscore",
    ids: [10878, 5]
  },
  {
    kind: "mapItem",
    questId: 8958,
    map: "worldscore",
    ids: [10879]
  },
  {
    kind: "mapItem",
    questId: 8959,
    map: "worldscore",
    ids: [10880, 4]
  },
  {
    kind: "mapItem",
    questId: 8960,
    map: "worldscore",
    ids: [10881]
  },
  {
    kind: "mapItem",
    questId: 8961,
    map: "worldscore",
    ids: [10882, 4]
  },
  {
    kind: "mapItem",
    questId: 8963,
    map: "worldscore",
    ids: [10883]
  },
  {
    kind: "mapItem",
    questId: 8964,
    map: "worldscore",
    ids: [10884]
  },
  {
    kind: "mapItem",
    questId: 9118,
    map: "manacradle",
    ids: [11268, 3]
  },
  {
    kind: "mapItem",
    questId: 9118,
    map: "manacradle",
    ids: [11269, 3]
  },
  {
    kind: "mapItem",
    questId: 9122,
    map: "manacradle",
    ids: [11270, 5]
  },
  {
    kind: "mapItem",
    questId: 9123,
    map: "manacradle",
    ids: [11271]
  },
  {
    kind: "kill",
    questId: 4267,
    map: "dreadspace",
    monsters: ["Defense Turret", "Vaderix"]
  },
  {
    kind: "kill",
    questId: 4268,
    map: "dreadspace",
    monsters: ["Cyber Horg"]
  },
  {
    kind: "kill",
    questId: 4270,
    map: "dreadspace",
    monsters: ["Dra'gorn", "Dra'gorn", "Dra'gorn"]
  },
  {
    kind: "kill",
    questId: 4274,
    map: "dreadspace",
    monsters: ["Jack"]
  },
  {
    kind: "kill",
    questId: 4275,
    map: "dreadspace",
    monsters: ["Old Twilly"]
  },
  {
    kind: "kill",
    questId: 4276,
    map: "dreadspace",
    monsters: ["Hologram Turret"]
  },
  {
    kind: "kill",
    questId: 4278,
    map: "dreadspace",
    monsters: ["Trobble"]
  },
  {
    kind: "kill",
    questId: 4279,
    map: "dreadspace",
    monsters: ["Defense Turret"]
  },
  {
    kind: "kill",
    questId: 4280,
    map: "dreadspace",
    monsters: ["Vaderix"]
  },
  {
    kind: "kill",
    questId: 4281,
    map: "dreadspace",
    monsters: ["Undead Space Marine"]
  },
  {
    kind: "kill",
    questId: 4282,
    map: "dreadspace",
    monsters: ["Undead Space Marine"]
  },
  {
    kind: "kill",
    questId: 4283,
    map: "dreadspace",
    monsters: ["Undead Space Marine", "Undead Space Warrior", "Cyber Horg", "Vaderix"]
  },
  {
    kind: "kill",
    questId: 4284,
    map: "dreadspace",
    monsters: ["Cyber Horg"]
  },
  {
    kind: "kill",
    questId: 4285,
    map: "dreadspace",
    monsters: ["Dread Space"]
  },
  {
    kind: "kill",
    questId: 4286,
    map: "dreadspace",
    monsters: ["Cyborg Beast Core"]
  },
  {
    kind: "kill",
    questId: 4297,
    map: "deadmoor",
    monsters: ["Deadmoor Wraith"]
  },
  {
    kind: "kill",
    questId: 4298,
    map: "deadmoor",
    monsters: ["Toxic Souleater"]
  },
  {
    kind: "kill",
    questId: 4300,
    map: "deadmoor",
    monsters: ["Nightmare"]
  },
  {
    kind: "kill",
    questId: 4303,
    map: "deadmoor",
    monsters: ["Toxic Souleater"]
  },
  {
    kind: "kill",
    questId: 4305,
    map: "deadmoor",
    monsters: ["Geist"]
  },
  {
    kind: "kill",
    questId: 4307,
    map: "deadmoor",
    monsters: ["Banshee Mallora"]
  },
  {
    kind: "kill",
    questId: 4313,
    map: "drearia",
    monsters: ["Dark Makai"]
  },
  {
    kind: "kill",
    questId: 4314,
    map: "drearia",
    monsters: ["Dark Makai"]
  },
  {
    kind: "kill",
    questId: 4315,
    map: "drearia",
    monsters: ["Green Rat"]
  },
  {
    kind: "kill",
    questId: 4318,
    map: "swordhavenpink",
    monsters: ["Pink Slime"]
  },
  {
    kind: "kill",
    questId: 4319,
    map: "sewerpink",
    monsters: ["Pink Rat"]
  },
  {
    kind: "kill",
    questId: 4320,
    map: "sewerpink",
    monsters: ["Cutie Grumbley"]
  },
  {
    kind: "kill",
    questId: 4321,
    map: "pinewoodpink",
    monsters: ["Pink Grizzly"]
  },
  {
    kind: "kill",
    questId: 4322,
    map: "pinewoodpink",
    monsters: ["Pink Shell Turtle"]
  },
  {
    kind: "kill",
    questId: 4323,
    map: "pinewoodpink",
    monsters: ["Sparkletooth"]
  },
  {
    kind: "kill",
    questId: 4326,
    map: "pastelia",
    monsters: ["Happy Cloud"]
  },
  {
    kind: "kill",
    questId: 4327,
    map: "pastelia",
    monsters: ["Cutie Makai"]
  },
  {
    kind: "kill",
    questId: 4328,
    map: "pastelia",
    monsters: ["Pink Rat"]
  },
  {
    kind: "kill",
    questId: 4330,
    map: "pastelia",
    monsters: ["Chaos Queen Beleen"]
  },
  {
    kind: "kill",
    questId: 1294,
    map: "terrarium",
    monsters: ["Dustbunny of Doom"]
  },
  {
    kind: "kill",
    questId: 1297,
    map: "terrarium",
    monsters: ["Death on Wings"]
  },
  {
    kind: "kill",
    questId: 1300,
    map: "terrarium",
    monsters: ["Death on Wings"]
  },
  {
    kind: "kill",
    questId: 1308,
    map: "terrarium",
    monsters: ["Doppleganger of Fred", "Doppleganger of Will"]
  },
  {
    kind: "kill",
    questId: 1339,
    map: "prehistoric",
    monsters: ["Gigantosaurus"]
  },
  {
    kind: "kill",
    questId: 1341,
    map: "prehistoric",
    monsters: ["Gigantosaurus"]
  },
  {
    kind: "kill",
    questId: 1343,
    map: "prehistoric",
    monsters: ["Mother TerrorDOOMKill"]
  },
  {
    kind: "kill",
    questId: 1344,
    map: "future",
    monsters: ["Alien Dino"]
  },
  {
    kind: "kill",
    questId: 4349,
    map: "livingdungeon",
    monsters: ["Root of Evil"]
  },
  {
    kind: "kill",
    questId: 4350,
    map: "livingdungeon",
    monsters: ["Seed Spitter"]
  },
  {
    kind: "kill",
    questId: 4351,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Titan Decay"]
  },
  {
    kind: "kill",
    questId: 4352,
    map: "livingdungeon",
    monsters: ["Weeping Widowmaker"]
  },
  {
    kind: "kill",
    questId: 4353,
    map: "livingdungeon",
    monsters: ["Chia Warrior"]
  },
  {
    kind: "kill",
    questId: 4354,
    map: "livingdungeon",
    monsters: ["Titan Decay", "Seed Spitter", "Evil Plant Horror"]
  },
  {
    kind: "kill",
    questId: 4355,
    map: "livingdungeon",
    monsters: ["Evil Tree Faerie"]
  },
  {
    kind: "kill",
    questId: 4356,
    map: "livingdungeon",
    monsters: ["Vulchurion"]
  },
  {
    kind: "kill",
    questId: 4357,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie", "Vulchurion"]
  },
  {
    kind: "kill",
    questId: 4358,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie", "Vulchurion"]
  },
  {
    kind: "kill",
    questId: 4359,
    map: "livingdungeon",
    monsters: ["Drayko"]
  },
  {
    kind: "kill",
    questId: 4360,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie"]
  },
  {
    kind: "kill",
    questId: 4361,
    map: "livingdungeon",
    monsters: ["Evil Plant Horror", "Evil Tree Faerie"]
  },
  {
    kind: "kill",
    questId: 4362,
    map: "treetitanbattle",
    monsters: ["Dakka the Dire Dragon"]
  },
  {
    kind: "kill",
    questId: 4363,
    map: "livingdungeon",
    monsters: ["Lil' Poot"]
  },
  {
    kind: "kill",
    questId: 4364,
    map: "livingdungeon",
    monsters: ["Epic Drop"]
  },
  {
    kind: "kill",
    questId: 4365,
    map: "goose",
    monsters: ["Queen's Sage"]
  },
  {
    kind: "kill",
    questId: 4366,
    map: "goose",
    monsters: ["Chris P. Bacon"]
  },
  {
    kind: "kill",
    questId: 4367,
    map: "goose",
    monsters: ["Queen's Sage"]
  },
  {
    kind: "kill",
    questId: 4368,
    map: "goose",
    monsters: ["Sock Gorilla"]
  },
  {
    kind: "kill",
    questId: 4369,
    map: "goose",
    monsters: ["Can of Paint"]
  },
  {
    kind: "kill",
    questId: 4370,
    map: "goose",
    monsters: ["Queen's ArchSage"]
  },
  {
    kind: "kill",
    questId: 4373,
    map: "goose",
    monsters: ["Queen's Sage"]
  },
  {
    kind: "kill",
    questId: 4374,
    map: "goose",
    monsters: ["Can of Paint"]
  },
  {
    kind: "kill",
    questId: 4375,
    map: "goose",
    monsters: ["Ancient Goose"]
  },
  {
    kind: "mapItem",
    questId: 4277,
    map: "dreadspace",
    ids: [3423, 6]
  },
  {
    kind: "mapItem",
    questId: 4296,
    map: "deadmoor",
    ids: [3457]
  },
  {
    kind: "mapItem",
    questId: 4299,
    map: "deadmoor",
    ids: [3448]
  },
  {
    kind: "mapItem",
    questId: 4301,
    map: "deadmoor",
    ids: [3459]
  },
  {
    kind: "mapItem",
    questId: 4302,
    map: "deadmoor",
    ids: [3449, 3450, 3451, 3452, 3453, 3454]
  },
  {
    kind: "mapItem",
    questId: 4304,
    map: "deadmoor",
    ids: [3455, 7]
  },
  {
    kind: "mapItem",
    questId: 4306,
    map: "deadmoor",
    ids: [3458, 3460, 3461, 3462, 3463, 3464, 3465]
  },
  {
    kind: "mapItem",
    questId: 4312,
    map: "drearia",
    ids: [3485]
  },
  {
    kind: "mapItem",
    questId: 4314,
    map: "drearia",
    ids: [3466]
  },
  {
    kind: "mapItem",
    questId: 4315,
    map: "drearia",
    ids: [3467]
  },
  {
    kind: "mapItem",
    questId: 4316,
    map: "drearia",
    ids: [3468]
  },
  {
    kind: "mapItem",
    questId: 4317,
    map: "swordhavenpink",
    ids: [3469]
  },
  {
    kind: "mapItem",
    questId: 4318,
    map: "swordhavenpink",
    ids: [3486, 5]
  },
  {
    kind: "mapItem",
    questId: 4321,
    map: "pinewoodpink",
    ids: [3470]
  },
  {
    kind: "mapItem",
    questId: 4322,
    map: "pinewoodpink",
    ids: [3471, 5]
  },
  {
    kind: "mapItem",
    questId: 4324,
    map: "citadel",
    ids: [3472]
  },
  {
    kind: "mapItem",
    questId: 4329,
    map: "pastelia",
    ids: [3473]
  },
  {
    kind: "mapItem",
    questId: 1293,
    map: "terrarium",
    ids: [586]
  },
  {
    kind: "mapItem",
    questId: 1295,
    map: "terrarium",
    ids: [587, 10]
  },
  {
    kind: "mapItem",
    questId: 1296,
    map: "terrarium",
    ids: [588, 12]
  },
  {
    kind: "mapItem",
    questId: 1298,
    map: "terrarium",
    ids: [589, 590, 591, 592, 593]
  },
  {
    kind: "mapItem",
    questId: 1299,
    map: "terrarium",
    ids: [593, 594, 595, 596, 604]
  },
  {
    kind: "mapItem",
    questId: 1309,
    map: "terrarium",
    ids: [604]
  },
  {
    kind: "mapItem",
    questId: 1340,
    map: "prehistoric",
    ids: [630, 11]
  },
  {
    kind: "mapItem",
    questId: 1342,
    map: "prehistoric",
    ids: [631, 4]
  },
  {
    kind: "mapItem",
    questId: 1345,
    map: "future",
    ids: [632, 2]
  },
  {
    kind: "mapItem",
    questId: 1346,
    map: "future",
    ids: [633, 7]
  },
  {
    kind: "mapItem",
    questId: 4371,
    map: "goose",
    ids: [3562]
  },
  {
    kind: "mapItem",
    questId: 4372,
    map: "goose",
    ids: [3561, 8]
  },
  { kind: "chain", questId: 4263 },
  { kind: "chain", questId: 4348 },
  {
    kind: "kill",
    questId: 4968,
    map: "bonecastle",
    monsters: ["Undead Guard"]
  },
  {
    kind: "kill",
    questId: 4969,
    map: "bonecastle",
    monsters: ["Undead Guard"]
  },
  {
    kind: "kill",
    questId: 4970,
    map: "bonecastle",
    monsters: ["Undead Knight"]
  },
  {
    kind: "kill",
    questId: 4971,
    map: "bonecastle",
    monsters: ["Fallen Deathknight"]
  },
  {
    kind: "kill",
    questId: 4972,
    map: "bonecastle",
    monsters: ["Fallen Deathknight"]
  },
  {
    kind: "kill",
    questId: 4973,
    map: "bonecastle",
    monsters: ["Undead Waiter"]
  },
  {
    kind: "kill",
    questId: 4974,
    map: "bonecastle",
    monsters: ["Undead Knight"]
  },
  {
    kind: "kill",
    questId: 4975,
    map: "bonecastle",
    monsters: ["Ghoul"]
  },
  {
    kind: "kill",
    questId: 4976,
    map: "bonecastle",
    monsters: ["The Butcher"]
  },
  {
    kind: "kill",
    questId: 4977,
    map: "bonecastle",
    monsters: ["Skeletal Warrior"]
  },
  {
    kind: "kill",
    questId: 4978,
    map: "bonecastle",
    monsters: ["Skeletal Warrior"]
  },
  {
    kind: "kill",
    questId: 4979,
    map: "bonecastle",
    monsters: ["Skeletal Warrior"]
  },
  {
    kind: "kill",
    questId: 4985,
    map: "bonecastle",
    monsters: ["Turtle"]
  },
  {
    kind: "kill",
    questId: 4986,
    map: "bonecastle",
    monsters: ["Turtle", "Turtle", "Turtle", "Turtle"]
  },
  {
    kind: "kill",
    questId: 4987,
    map: "bonecastle",
    monsters: ["Snuggles, Torturer"]
  },
  {
    kind: "kill",
    questId: 4988,
    map: "bonecastle",
    monsters: ["Jon Bones", "Oberon Marrowtell", "Baskerville", "Knight of Lichens"]
  },
  {
    kind: "kill",
    questId: 4989,
    map: "bonecastle",
    monsters: ["Rot Tin Tin"]
  },
  {
    kind: "kill",
    questId: 4990,
    map: "bonecastle",
    monsters: ["Undead Golden Knight", "Undead Golden Knight", "Undead Golden Knight"]
  },
  {
    kind: "kill",
    questId: 4991,
    map: "bonecastle",
    monsters: ["Undead Knight", "Skeletal Warrior"]
  },
  {
    kind: "kill",
    questId: 4992,
    map: "bonecastle",
    monsters: ["Vaden"]
  },
  {
    kind: "kill",
    questId: 4996,
    map: "towersilver",
    monsters: ["Flying Spyball"]
  },
  {
    kind: "kill",
    questId: 4997,
    map: "towersilver",
    monsters: ["Fallen Emperor Statue"]
  },
  {
    kind: "kill",
    questId: 4999,
    map: "towersilver",
    monsters: ["Undead Knight", "Undead Guard"]
  },
  {
    kind: "kill",
    questId: 4998,
    map: "towersilver",
    monsters: ["Fallen DeathKnight", "Undead Warrior"]
  },
  {
    kind: "kill",
    questId: 5000,
    map: "towersilver",
    monsters: ["Flying Spyball", "Fallen DeathKnight", "Undead Warrior", "Undead Knight", "Undead Guard"]
  },
  {
    kind: "kill",
    questId: 5003,
    map: "towersilver",
    monsters: ["Bloody Scary"]
  },
  {
    kind: "kill",
    questId: 5004,
    map: "towersilver",
    monsters: ["Bone Creeper"]
  },
  {
    kind: "kill",
    questId: 5005,
    map: "towersilver",
    monsters: ["Ghoul"]
  },
  {
    kind: "kill",
    questId: 5007,
    map: "towersilver",
    monsters: ["Undead Golden Knight"]
  },
  {
    kind: "kill",
    questId: 5008,
    map: "towersilver",
    monsters: ["Flester The Silver"]
  },
  {
    kind: "kill",
    questId: 5009,
    map: "towersilver",
    monsters: ["Fallen DeathKnight", "Undead Knight", "Undead Warrior", "Ghoul", "Undead Guard"]
  },
  {
    kind: "kill",
    questId: 5010,
    map: "towersilver",
    monsters: ["Bloody Scary"]
  },
  {
    kind: "kill",
    questId: 5011,
    map: "towergold",
    monsters: ["Grim Souldier"]
  },
  {
    kind: "kill",
    questId: 5012,
    map: "towergold",
    monsters: ["Undead Golden Knight"]
  },
  {
    kind: "kill",
    questId: 5013,
    map: "towergold",
    monsters: ["Skullspider"]
  },
  {
    kind: "kill",
    questId: 5014,
    map: "towergold",
    monsters: ["Vampire Bat"]
  },
  {
    kind: "kill",
    questId: 5015,
    map: "towergold",
    monsters: ["Webbed Ghoul"]
  },
  {
    kind: "kill",
    questId: 5016,
    map: "towergold",
    monsters: ["Bone Widow"]
  },
  {
    kind: "kill",
    questId: 5017,
    map: "towergold",
    monsters: ["Book Maggot"]
  },
  {
    kind: "kill",
    questId: 5018,
    map: "towergold",
    monsters: ["Bone Creeper"]
  },
  {
    kind: "kill",
    questId: 5020,
    map: "towergold",
    monsters: ["Undead Knight", "Undead Guard"]
  },
  {
    kind: "kill",
    questId: 5021,
    map: "towergold",
    monsters: ["Fallen Emperor Statue"]
  },
  {
    kind: "kill",
    questId: 5022,
    map: "towergold",
    monsters: ["Yurrod the Gold"]
  },
  {
    kind: "kill",
    questId: 5034,
    map: "portalmaze",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 5035,
    map: "portalmaze",
    monsters: ["Heavy Lab Guard"]
  },
  {
    kind: "kill",
    questId: 5036,
    map: "portalmaze",
    monsters: ["Hatchling"]
  },
  {
    kind: "kill",
    questId: 5037,
    map: "portalmaze",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 5038,
    map: "portalmaze",
    monsters: ["Jurassic Monkey"]
  },
  {
    kind: "kill",
    questId: 5039,
    map: "portalmaze",
    monsters: ["Lazor Dino"]
  },
  {
    kind: "kill",
    questId: 5040,
    map: "portalmaze",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 5042,
    map: "portalmaze",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 5043,
    map: "portalmaze",
    monsters: ["Bucket Zombie"]
  },
  {
    kind: "kill",
    questId: 5044,
    map: "portalmaze",
    monsters: ["Bucket Zombie", "Dancing Zombie", "Tunneling Zombie"]
  },
  {
    kind: "kill",
    questId: 5045,
    map: "portalmaze",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 5046,
    map: "portalmaze",
    monsters: ["Pactagonal Knight"]
  },
  {
    kind: "kill",
    questId: 5047,
    map: "portalmaze",
    monsters: ["Time Wraith"]
  },
  {
    kind: "kill",
    questId: 5048,
    map: "portalmaze",
    monsters: ["ChronoLord"]
  },
  {
    kind: "kill",
    questId: 5049,
    map: "portalmaze",
    monsters: ["Vorefax"]
  },
  {
    kind: "kill",
    questId: 5050,
    map: "portalmaze",
    monsters: ["Mors Temporis"]
  },
  {
    kind: "kill",
    questId: 5068,
    map: "tachyon",
    monsters: ["Time Wraith", "Timestream Rider"]
  },
  {
    kind: "kill",
    questId: 5069,
    map: "tachyon",
    monsters: ["Spacetime Anomaly"]
  },
  {
    kind: "kill",
    questId: 5072,
    map: "tachyon",
    monsters: ["Sandshark", "Bupers Camel"]
  },
  {
    kind: "kill",
    questId: 5074,
    map: "tachyon",
    monsters: ["Time Wraith", "Timestream Rider"]
  },
  {
    kind: "kill",
    questId: 5075,
    map: "tachyon",
    monsters: ["Medusoid"]
  },
  {
    kind: "kill",
    questId: 5076,
    map: "tachyon",
    monsters: ["Jungle Tog", "Jungle Fury"]
  },
  {
    kind: "kill",
    questId: 5078,
    map: "tachyon",
    monsters: ["Time Wraith", "Timestream Rider"]
  },
  {
    kind: "kill",
    questId: 5079,
    map: "tachyon",
    monsters: ["Void Serpent"]
  },
  {
    kind: "kill",
    questId: 5080,
    map: "tachyon",
    monsters: ["Ice Wolf", "Polar Elemental"]
  },
  {
    kind: "kill",
    questId: 5083,
    map: "tachyon",
    monsters: ["Svelgr the Devourer"]
  },
  {
    kind: "kill",
    questId: 5088,
    map: "baconcat",
    monsters: ["Yulgar Regular"]
  },
  {
    kind: "kill",
    questId: 5089,
    map: "baconcat",
    monsters: ["Yulgar Regular"]
  },
  {
    kind: "kill",
    questId: 5090,
    map: "baconcat",
    monsters: ["Slime"]
  },
  {
    kind: "kill",
    questId: 5092,
    map: "baconcat",
    monsters: ["Baconcatzard", "Pizzacatzard"]
  },
  {
    kind: "kill",
    questId: 5095,
    map: "baconcat",
    monsters: ["Fart Elemental", "Litter Elemental"]
  },
  {
    kind: "kill",
    questId: 5096,
    map: "baconcat",
    monsters: ["King Strong", "Box", "King Strong"]
  },
  {
    kind: "kill",
    questId: 5100,
    map: "baconcat",
    monsters: ["Horcio"]
  },
  {
    kind: "kill",
    questId: 5109,
    map: "baconcat",
    monsters: ["Corn Minion"]
  },
  {
    kind: "kill",
    questId: 5110,
    map: "baconcat",
    monsters: ["Non-GMO Brutalcorn"]
  },
  {
    kind: "kill",
    questId: 5102,
    map: "baconcat",
    monsters: ["Scent Trail"]
  },
  {
    kind: "kill",
    questId: 5103,
    map: "baconcat",
    monsters: ["Buttermancer", "Potato Knight"]
  },
  {
    kind: "kill",
    questId: 5104,
    map: "baconcat",
    monsters: ["King of the Unbread"]
  },
  {
    kind: "kill",
    questId: 5105,
    map: "baconcat",
    monsters: ["Chainsaw Actor"]
  },
  {
    kind: "kill",
    questId: 5106,
    map: "baconcat",
    monsters: ["Paladin Actor"]
  },
  {
    kind: "kill",
    questId: 5107,
    map: "baconcat",
    monsters: ["Kitty Boo Boo"]
  },
  {
    kind: "kill",
    questId: 5111,
    map: "baconcatlair",
    monsters: ["Cloud Shark"]
  },
  {
    kind: "kill",
    questId: 5112,
    map: "baconcatlair",
    monsters: ["Ice Cream Shark"]
  },
  {
    kind: "kill",
    questId: 5113,
    map: "baconcatlair",
    monsters: ["Ice Cream Shark"]
  },
  {
    kind: "kill",
    questId: 5115,
    map: "baconcatlair",
    monsters: ["Sketchy Shark"]
  },
  {
    kind: "kill",
    questId: 5117,
    map: "baconcatlair",
    monsters: ["8-bit Shark"]
  },
  {
    kind: "kill",
    questId: 5120,
    map: "baconcatlair",
    monsters: ["Cloud Shark"]
  },
  {
    kind: "kill",
    questId: 5121,
    map: "baconcatlair",
    monsters: ["Robo Shark"]
  },
  {
    kind: "kill",
    questId: 5123,
    map: "baconcatlair",
    monsters: ["Robo Shark", "Robo Shark"]
  },
  {
    kind: "kill",
    questId: 5124,
    map: "baconcatlair",
    monsters: ["Robo Shark"]
  },
  {
    kind: "kill",
    questId: 5125,
    map: "baconcatlair",
    monsters: ["Shark Invader", "Shark Invader"]
  },
  {
    kind: "kill",
    questId: 5126,
    map: "baconcatlair",
    monsters: ["Robo Shark"]
  },
  {
    kind: "kill",
    questId: 5127,
    map: "baconcatlair",
    monsters: ["Party Shark", "Party Shark"]
  },
  {
    kind: "kill",
    questId: 5128,
    map: "baconcatlair",
    monsters: ["Laser Remora"]
  },
  {
    kind: "kill",
    questId: 5130,
    map: "baconcatlair",
    monsters: ["Cyborg Laser Shark"]
  },
  {
    kind: "kill",
    questId: 5134,
    map: "deathpit",
    monsters: ["Training Dummy"]
  },
  {
    kind: "kill",
    questId: 5135,
    map: "deathpit",
    monsters: ["Omar the Meek"]
  },
  {
    kind: "kill",
    questId: 5136,
    map: "deathpit",
    monsters: ["Sneevil"]
  },
  {
    kind: "kill",
    questId: 5137,
    map: "deathpit",
    monsters: ["Hattori"]
  },
  {
    kind: "kill",
    questId: 5138,
    map: "deathpit",
    monsters: ["Slime", "Giant Green Slime"]
  },
  {
    kind: "kill",
    questId: 5139,
    map: "deathpit",
    monsters: ["Sludgelord"]
  },
  {
    kind: "kill",
    questId: 5140,
    map: "deathpit",
    monsters: ["Salamander"]
  },
  {
    kind: "kill",
    questId: 5141,
    map: "deathpit",
    monsters: ["Trobble"]
  },
  {
    kind: "kill",
    questId: 5142,
    map: "deathpit",
    monsters: ["Trobble"]
  },
  {
    kind: "kill",
    questId: 5143,
    map: "deathpit",
    monsters: ["Horc Gladiator"]
  },
  {
    kind: "kill",
    questId: 5144,
    map: "deathpit",
    monsters: ["Drakel Brawler"]
  },
  {
    kind: "kill",
    questId: 5145,
    map: "deathpit",
    monsters: ["Drakel Gladiator"]
  },
  {
    kind: "kill",
    questId: 5146,
    map: "deathpit",
    monsters: ["Drakel Battlemaster"]
  },
  {
    kind: "kill",
    questId: 5147,
    map: "deathpit",
    monsters: ["General Gall"]
  },
  {
    kind: "kill",
    questId: 5148,
    map: "deathpit",
    monsters: ["Drakel Brawler"]
  },
  {
    kind: "kill",
    questId: 5149,
    map: "deathpit",
    monsters: ["General Velm"]
  },
  {
    kind: "kill",
    questId: 5150,
    map: "deathpit",
    monsters: ["Drakel Battlemaster"]
  },
  {
    kind: "kill",
    questId: 5151,
    map: "deathpit",
    monsters: ["General Chud"]
  },
  {
    kind: "kill",
    questId: 5152,
    map: "deathpit",
    monsters: ["Drakel Battlemaster"]
  },
  {
    kind: "kill",
    questId: 5153,
    map: "deathpit",
    monsters: ["General Hun'Gar"]
  },
  {
    kind: "kill",
    questId: 5154,
    map: "deathpit",
    monsters: ["Warlord Pax"]
  },
  {
    kind: "kill",
    questId: 5189,
    map: "fourdpyramid",
    monsters: ["Sekt"]
  },
  {
    kind: "kill",
    questId: 5190,
    map: "fourdpyramid",
    monsters: ["Negastri Hound"]
  },
  {
    kind: "kill",
    questId: 5192,
    map: "fourdpyramid",
    monsters: ["Sekt's Mummy"]
  },
  {
    kind: "kill",
    questId: 5194,
    map: "fourdpyramid",
    monsters: ["Nega Mummy"]
  },
  {
    kind: "kill",
    questId: 5196,
    map: "fourdpyramid",
    monsters: ["Nega Mummy", "Guardian of Anubyx"]
  },
  {
    kind: "kill",
    questId: 5200,
    map: "fourdpyramid",
    monsters: ["Nega Mummy"]
  },
  {
    kind: "kill",
    questId: 5201,
    map: "fourdpyramid",
    monsters: ["Guardian of Anubyx"]
  },
  {
    kind: "kill",
    questId: 5205,
    map: "fourdpyramid",
    monsters: ["Tesseract Sprite"]
  },
  {
    kind: "kill",
    questId: 5207,
    map: "fourdpyramid",
    monsters: ["Tesseract Goblin"]
  },
  {
    kind: "kill",
    questId: 5211,
    map: "fourdpyramid",
    monsters: ["Black Plague"]
  },
  {
    kind: "kill",
    questId: 5215,
    map: "yasaris",
    monsters: ["Vortex Hawk"]
  },
  {
    kind: "kill",
    questId: 5216,
    map: "yasaris",
    monsters: ["Sacred Serpent"]
  },
  {
    kind: "kill",
    questId: 5221,
    map: "yasaris",
    monsters: ["Avatar of Anubyx", "Inverted Avatar"]
  },
  {
    kind: "kill",
    questId: 5224,
    map: "yasaris",
    monsters: ["Avatar of Anubyx", "Negastri Hound"]
  },
  {
    kind: "kill",
    questId: 5228,
    map: "yasaris",
    monsters: ["Dimensional Crystal"]
  },
  {
    kind: "kill",
    questId: 5230,
    map: "yasaris",
    monsters: ["Tesseract Sprite"]
  },
  {
    kind: "kill",
    questId: 5232,
    map: "yasaris",
    monsters: ["Dimensional Crystal"]
  },
  {
    kind: "kill",
    questId: 5235,
    map: "yasaris",
    monsters: ["Avatar of Serepthys"]
  },
  {
    kind: "kill",
    questId: 5237,
    map: "yasaris",
    monsters: ["Spirit of Ptahmun"]
  },
  {
    kind: "kill",
    questId: 5239,
    map: "yasaris",
    monsters: ["Serepthys"]
  },
  {
    kind: "kill",
    questId: 5298,
    map: "hedgemaze",
    monsters: ["Knight's Reflection"]
  },
  {
    kind: "kill",
    questId: 5300,
    map: "hedgemaze",
    monsters: ["Knight's Reflection"]
  },
  {
    kind: "kill",
    questId: 5302,
    map: "hedgemaze",
    monsters: ["Hedge Goblin"]
  },
  {
    kind: "kill",
    questId: 5304,
    map: "hedgemaze",
    monsters: ["Mirrored Shard"]
  },
  {
    kind: "kill",
    questId: 5306,
    map: "hedgemaze",
    monsters: ["Minotaur Prime"]
  },
  {
    kind: "kill",
    questId: 5312,
    map: "hedgemaze",
    monsters: ["Shattered Knight"]
  },
  {
    kind: "kill",
    questId: 5313,
    map: "hedgemaze",
    monsters: ["Resurrected Minotaur"]
  },
  {
    kind: "kill",
    questId: 5314,
    map: "towerofmirrors",
    monsters: ["Glassgoyle", "Glass Serpent"]
  },
  {
    kind: "kill",
    questId: 5315,
    map: "towerofmirrors",
    monsters: ["Silver Elemental"]
  },
  {
    kind: "kill",
    questId: 5316,
    map: "towerofmirrors",
    monsters: ["Phans", "Phans"]
  },
  {
    kind: "kill",
    questId: 5318,
    map: "towerofmirrors",
    monsters: ["Silver Elemental"]
  },
  {
    kind: "kill",
    questId: 5319,
    map: "towerofmirrors",
    monsters: ["Runway Wraith", "Runway Wraith", "Runway Wraith", "Runway Wraith"]
  },
  {
    kind: "kill",
    questId: 5321,
    map: "towerofmirrors",
    monsters: ["Silver Elemental"]
  },
  {
    kind: "kill",
    questId: 5322,
    map: "towerofmirrors",
    monsters: ["Pageant Mom", "Pageant Mom"]
  },
  {
    kind: "kill",
    questId: 5324,
    map: "towerofmirrors",
    monsters: ["Silver Elemental"]
  },
  {
    kind: "kill",
    questId: 5327,
    map: "towerofmirrors",
    monsters: ["Silver Elemental"]
  },
  {
    kind: "kill",
    questId: 5330,
    map: "towerofmirrors",
    monsters: ["Fervent Suitor"]
  },
  {
    kind: "kill",
    questId: 5429,
    map: "cursedshop",
    monsters: ["Antique Chair"]
  },
  {
    kind: "kill",
    questId: 5430,
    map: "cursedshop",
    monsters: ["UnDresser"]
  },
  {
    kind: "kill",
    questId: 5431,
    map: "cursedshop",
    monsters: ["Writing Desk"]
  },
  {
    kind: "kill",
    questId: 5432,
    map: "cursedshop",
    monsters: ["Grandfather Clock"]
  },
  {
    kind: "kill",
    questId: 5434,
    map: "cursedshop",
    monsters: ["Arcane Sentinel"]
  },
  {
    kind: "kill",
    questId: 5439,
    map: "mysteriousdungeon",
    monsters: ["Skudly"]
  },
  {
    kind: "kill",
    questId: 5444,
    map: "mysteriousdungeon",
    monsters: ["Skudly"]
  },
  {
    kind: "kill",
    questId: 5445,
    map: "mysteriousdungeon",
    monsters: ["Mysterious Stranger"]
  },
  {
    kind: "kill",
    questId: 5446,
    map: "mysteriousdungeon",
    monsters: ["Vaden"]
  },
  {
    kind: "kill",
    questId: 5447,
    map: "mysteriousdungeon",
    monsters: ["Xeight"]
  },
  {
    kind: "kill",
    questId: 5448,
    map: "mysteriousdungeon",
    monsters: ["Ziri"]
  },
  {
    kind: "kill",
    questId: 5449,
    map: "mysteriousdungeon",
    monsters: ["Pax"]
  },
  {
    kind: "kill",
    questId: 5450,
    map: "mysteriousdungeon",
    monsters: ["Sekt"]
  },
  {
    kind: "kill",
    questId: 5451,
    map: "mysteriousdungeon",
    monsters: ["Scarletta"]
  },
  {
    kind: "mapItem",
    questId: 4972,
    map: "bonecastle",
    ids: [4342, 3]
  },
  {
    kind: "mapItem",
    questId: 4974,
    map: "bonecastle",
    ids: [4343, 2]
  },
  {
    kind: "mapItem",
    questId: 4974,
    map: "bonecastle",
    ids: [4344, 2]
  },
  {
    kind: "mapItem",
    questId: 4974,
    map: "bonecastle",
    ids: [4345, 3]
  },
  {
    kind: "mapItem",
    questId: 4978,
    map: "bonecastle",
    ids: [4346, 4347, 4348]
  },
  {
    kind: "mapItem",
    questId: 4979,
    map: "bonecastle",
    ids: [4349, 4350, 4351]
  },
  {
    kind: "mapItem",
    questId: 4983,
    map: "bonecastle",
    ids: [4352]
  },
  {
    kind: "mapItem",
    questId: 4984,
    map: "bonecastle",
    ids: [4353, 4]
  },
  {
    kind: "mapItem",
    questId: 5001,
    map: "towersilver",
    ids: [4368, 4369, 4370, 4371, 4372]
  },
  {
    kind: "mapItem",
    questId: 5002,
    map: "towersilver",
    ids: [4373, 3]
  },
  {
    kind: "mapItem",
    questId: 5006,
    map: "towersilver",
    ids: [4374, 5]
  },
  {
    kind: "mapItem",
    questId: 5013,
    map: "towergold",
    ids: [4375, 5]
  },
  {
    kind: "mapItem",
    questId: 5018,
    map: "towergold",
    ids: [4376, 6]
  },
  {
    kind: "mapItem",
    questId: 5019,
    map: "towergold",
    ids: [4377, 3]
  },
  {
    kind: "mapItem",
    questId: 5041,
    map: "portalmaze",
    ids: [4408, 4409, 4410]
  },
  {
    kind: "mapItem",
    questId: 5068,
    map: "tachyon",
    ids: [4446]
  },
  {
    kind: "mapItem",
    questId: 5072,
    map: "tachyon",
    ids: [4447, 4]
  },
  {
    kind: "mapItem",
    questId: 5073,
    map: "tachyon",
    ids: [4448]
  },
  {
    kind: "mapItem",
    questId: 5074,
    map: "tachyon",
    ids: [4449]
  },
  {
    kind: "mapItem",
    questId: 5076,
    map: "tachyon",
    ids: [4450, 3]
  },
  {
    kind: "mapItem",
    questId: 5076,
    map: "tachyon",
    ids: [4451, 3]
  },
  {
    kind: "mapItem",
    questId: 5077,
    map: "tachyon",
    ids: [4452]
  },
  {
    kind: "mapItem",
    questId: 5078,
    map: "tachyon",
    ids: [4453]
  },
  {
    kind: "mapItem",
    questId: 5080,
    map: "tachyon",
    ids: [4454, 5]
  },
  {
    kind: "mapItem",
    questId: 5081,
    map: "tachyon",
    ids: [4455]
  },
  {
    kind: "mapItem",
    questId: 5082,
    map: "tachyon",
    ids: [4456]
  },
  {
    kind: "mapItem",
    questId: 5087,
    map: "baconcat",
    ids: [4466, 7]
  },
  {
    kind: "mapItem",
    questId: 5089,
    map: "baconcat",
    ids: [4467, 1]
  },
  {
    kind: "mapItem",
    questId: 5091,
    map: "baconcat",
    ids: [4473, 1]
  },
  {
    kind: "mapItem",
    questId: 5094,
    map: "baconcat",
    ids: [4468, 9]
  },
  {
    kind: "mapItem",
    questId: 5097,
    map: "baconcat",
    ids: [4469, 4]
  },
  {
    kind: "mapItem",
    questId: 5101,
    map: "baconcat",
    ids: [4470, 1]
  },
  {
    kind: "mapItem",
    questId: 5113,
    map: "baconcatlair",
    ids: [4474, 6]
  },
  {
    kind: "mapItem",
    questId: 5115,
    map: "baconcatlair",
    ids: [4475, 4]
  },
  {
    kind: "mapItem",
    questId: 5117,
    map: "baconcatlair",
    ids: [4476, 4]
  },
  {
    kind: "mapItem",
    questId: 5122,
    map: "baconcatlair",
    ids: [4477, 4]
  },
  {
    kind: "mapItem",
    questId: 5126,
    map: "baconcatlair",
    ids: [4480, 6]
  },
  {
    kind: "mapItem",
    questId: 5127,
    map: "baconcatlair",
    ids: [4479, 3]
  },
  {
    kind: "mapItem",
    questId: 5129,
    map: "baconcatlair",
    ids: [4478]
  },
  {
    kind: "mapItem",
    questId: 5133,
    map: "deathpit",
    ids: [4484, 4485, 4486, 4487, 4488, 4489, 4490, 4491]
  },
  {
    kind: "mapItem",
    questId: 5171,
    map: "whitehole",
    ids: [4539]
  },
  {
    kind: "mapItem",
    questId: 5173,
    map: "whitehole",
    ids: [4540, 4]
  },
  {
    kind: "mapItem",
    questId: 5173,
    map: "whitehole",
    ids: [4542]
  },
  {
    kind: "mapItem",
    questId: 5177,
    map: "whitehole",
    ids: [4541, 4]
  },
  {
    kind: "mapItem",
    questId: 5179,
    map: "whitehole",
    ids: [4543]
  },
  {
    kind: "mapItem",
    questId: 5183,
    map: "whitehole",
    ids: [4544]
  },
  {
    kind: "mapItem",
    questId: 5185,
    map: "whitehole",
    ids: [4545, 4]
  },
  {
    kind: "mapItem",
    questId: 5187,
    map: "whitehole",
    ids: [4546]
  },
  {
    kind: "mapItem",
    questId: 5191,
    map: "fourdpyramid",
    ids: [4556, 1]
  },
  {
    kind: "mapItem",
    questId: 5192,
    map: "fourdpyramid",
    ids: [4557, 1]
  },
  {
    kind: "mapItem",
    questId: 5193,
    map: "fourdpyramid",
    ids: [4558, 1]
  },
  {
    kind: "mapItem",
    questId: 5195,
    map: "fourdpyramid",
    ids: [4559, 1]
  },
  {
    kind: "mapItem",
    questId: 5196,
    map: "fourdpyramid",
    ids: [4560, 1]
  },
  {
    kind: "mapItem",
    questId: 5197,
    map: "fourdpyramid",
    ids: [4561, 1]
  },
  {
    kind: "mapItem",
    questId: 5199,
    map: "fourdpyramid",
    ids: [4562, 4]
  },
  {
    kind: "mapItem",
    questId: 5199,
    map: "fourdpyramid",
    ids: [4564, 1]
  },
  {
    kind: "mapItem",
    questId: 5202,
    map: "fourdpyramid",
    ids: [4565, 1]
  },
  {
    kind: "mapItem",
    questId: 5203,
    map: "fourdpyramid",
    ids: [4566, 1]
  },
  {
    kind: "mapItem",
    questId: 5204,
    map: "fourdpyramid",
    ids: [4567, 1]
  },
  {
    kind: "mapItem",
    questId: 5205,
    map: "fourdpyramid",
    ids: [4568, 1]
  },
  {
    kind: "mapItem",
    questId: 5206,
    map: "fourdpyramid",
    ids: [4569, 1]
  },
  {
    kind: "mapItem",
    questId: 5207,
    map: "fourdpyramid",
    ids: [4570, 1]
  },
  {
    kind: "mapItem",
    questId: 5209,
    map: "fourdpyramid",
    ids: [4571, 4]
  },
  {
    kind: "mapItem",
    questId: 5209,
    map: "fourdpyramid",
    ids: [4572, 1]
  },
  {
    kind: "mapItem",
    questId: 5210,
    map: "fourdpyramid",
    ids: [4573, 1]
  },
  {
    kind: "mapItem",
    questId: 5212,
    map: "fourdpyramid",
    ids: [4574, 1]
  },
  {
    kind: "mapItem",
    questId: 5213,
    map: "yasaris",
    ids: [4590]
  },
  {
    kind: "mapItem",
    questId: 5214,
    map: "yasaris",
    ids: [4576]
  },
  {
    kind: "mapItem",
    questId: 5217,
    map: "yasaris",
    ids: [4577]
  },
  {
    kind: "mapItem",
    questId: 5218,
    map: "yasaris",
    ids: [4578]
  },
  {
    kind: "mapItem",
    questId: 5220,
    map: "yasaris",
    ids: [4591]
  },
  {
    kind: "mapItem",
    questId: 5222,
    map: "yasaris",
    ids: [4580]
  },
  {
    kind: "mapItem",
    questId: 5223,
    map: "yasaris",
    ids: [4581]
  },
  {
    kind: "mapItem",
    questId: 5225,
    map: "yasaris",
    ids: [4582]
  },
  {
    kind: "mapItem",
    questId: 5227,
    map: "yasaris",
    ids: [4592]
  },
  {
    kind: "mapItem",
    questId: 5229,
    map: "yasaris",
    ids: [4584]
  },
  {
    kind: "mapItem",
    questId: 5230,
    map: "yasaris",
    ids: [4585]
  },
  {
    kind: "mapItem",
    questId: 5231,
    map: "yasaris",
    ids: [4593]
  },
  {
    kind: "mapItem",
    questId: 5234,
    map: "yasaris",
    ids: [4594]
  },
  {
    kind: "mapItem",
    questId: 5235,
    map: "yasaris",
    ids: [4587, 4]
  },
  {
    kind: "mapItem",
    questId: 5236,
    map: "yasaris",
    ids: [4588, 4]
  },
  {
    kind: "mapItem",
    questId: 5238,
    map: "yasaris",
    ids: [4589]
  },
  {
    kind: "mapItem",
    questId: 5298,
    map: "hedgemaze",
    ids: [4678]
  },
  {
    kind: "mapItem",
    questId: 5299,
    map: "hedgemaze",
    ids: [4679]
  },
  {
    kind: "mapItem",
    questId: 5301,
    map: "hedgemaze",
    ids: [4680]
  },
  {
    kind: "mapItem",
    questId: 5303,
    map: "hedgemaze",
    ids: [4681, 12]
  },
  {
    kind: "mapItem",
    questId: 5305,
    map: "hedgemaze",
    ids: [4682]
  },
  {
    kind: "mapItem",
    questId: 5307,
    map: "hedgemaze",
    ids: [4683]
  },
  {
    kind: "mapItem",
    questId: 5308,
    map: "hedgemaze",
    ids: [4684]
  },
  {
    kind: "mapItem",
    questId: 5309,
    map: "hedgemaze",
    ids: [4685, 5]
  },
  {
    kind: "mapItem",
    questId: 5311,
    map: "hedgemaze",
    ids: [4686]
  },
  {
    kind: "mapItem",
    questId: 5315,
    map: "towerofmirrors",
    ids: [4691, 4692]
  },
  {
    kind: "mapItem",
    questId: 5318,
    map: "towerofmirrors",
    ids: [4687, 4693]
  },
  {
    kind: "mapItem",
    questId: 5321,
    map: "towerofmirrors",
    ids: [4688, 4694]
  },
  {
    kind: "mapItem",
    questId: 5324,
    map: "towerofmirrors",
    ids: [4689, 4695]
  },
  {
    kind: "mapItem",
    questId: 5327,
    map: "towerofmirrors",
    ids: [4690, 4696]
  },
  {
    kind: "mapItem",
    questId: 5331,
    map: "towerofmirrors",
    ids: [4697]
  },
  {
    kind: "mapItem",
    questId: 5428,
    map: "cursedshop",
    ids: [4803]
  },
  {
    kind: "mapItem",
    questId: 5433,
    map: "cursedshop",
    ids: [4804, 4805]
  },
  {
    kind: "mapItem",
    questId: 5434,
    map: "cursedshop",
    ids: [4806]
  },
  {
    kind: "mapItem",
    questId: 5438,
    map: "mysteriousdungeon",
    ids: [4818]
  },
  {
    kind: "mapItem",
    questId: 5440,
    map: "mysteriousdungeon",
    ids: [4808]
  },
  {
    kind: "mapItem",
    questId: 5441,
    map: "mysteriousdungeon",
    ids: [4809]
  },
  {
    kind: "mapItem",
    questId: 5442,
    map: "mysteriousdungeon",
    ids: [4810, 4811, 4812, 4813, 4814, 4815, 4816]
  },
  {
    kind: "mapItem",
    questId: 5443,
    map: "mysteriousdungeon",
    ids: [4817]
  },
  { kind: "chain", questId: 5240 },
  { kind: "chain", questId: 5241 },
  { kind: "chain", questId: 5242 },
  { kind: "chain", questId: 5243 },
  {
    kind: "kill",
    questId: 6496,
    map: "pocketdimension",
    monsters: ["Nothing"]
  },
  {
    kind: "kill",
    questId: 6498,
    map: "icedimension",
    monsters: ["Ice Spitter"]
  },
  {
    kind: "kill",
    questId: 6499,
    map: "icedimension",
    monsters: ["Ice Elemental"]
  },
  {
    kind: "kill",
    questId: 6500,
    map: "sanddimension",
    monsters: ["Lotus Spider"]
  },
  {
    kind: "kill",
    questId: 6501,
    map: "sanddimension",
    monsters: ["Lotus Spider"]
  },
  {
    kind: "kill",
    questId: 6502,
    map: "darkdimension",
    monsters: ["Void Phoenix"]
  },
  {
    kind: "kill",
    questId: 6503,
    map: "darkdimension",
    monsters: ["Void Phoenix"]
  },
  { kind: "kill", questId: 6505, map: "ivoliss", monsters: ["ivoliss"] },
  { kind: "kill", questId: 6508, map: "ivoliss", monsters: ["Arthelyn"] },
  { kind: "mapItem", questId: 6497, map: "pocketdimension", ids: [5988, 3] },
  { kind: "mapItem", questId: 6498, map: "icedimension", ids: [5989] },
  { kind: "mapItem", questId: 6499, map: "icedimension", ids: [5990, 5] },
  { kind: "mapItem", questId: 6500, map: "sanddimension", ids: [5991] },
  { kind: "mapItem", questId: 6501, map: "sanddimension", ids: [5992, 5] },
  { kind: "mapItem", questId: 6502, map: "darkdimension", ids: [5993] },
  { kind: "mapItem", questId: 6503, map: "darkdimension", ids: [5994, 5] },
  { kind: "mapItem", questId: 6504, map: "ivoliss", ids: [5995] },
  { kind: "mapItem", questId: 6506, map: "ivoliss", ids: [5996] },
  { kind: "mapItem", questId: 6506, map: "ivoliss", ids: [5998] },
  { kind: "mapItem", questId: 6507, map: "ivoliss", ids: [5997] },
  {
    kind: "kill",
    questId: 3371,
    map: "arcangrove",
    monsters: ["Chaos Sprites"]
  },
  {
    kind: "kill",
    questId: 3372,
    map: "arcangrove",
    monsters: ["Gorillaphant"]
  },
  {
    kind: "kill",
    questId: 3373,
    map: "arcangrove",
    monsters: ["Seed Spitter"]
  },
  {
    kind: "kill",
    questId: 3374,
    map: "arcangrove",
    monsters: ["Seed Spitter"]
  },
  { kind: "mapItem", questId: 3373, map: "arcangrove", ids: [2505, 6] },
  {
    kind: "mapItem",
    questId: 3375,
    map: "arcangrove",
    ids: [2514, 2515, 2516, 2517]
  },
  { kind: "kill", questId: 10181, map: "cloister", monsters: ["Karasu"] },
  {
    kind: "kill",
    questId: 10184,
    map: "deleuzetundra",
    monsters: ["Empty Creature"]
  },
  {
    kind: "kill",
    questId: 10192,
    map: "feverfew",
    monsters: ["Coral Creeper"]
  },
  {
    kind: "kill",
    questId: 10207,
    map: "mafic",
    monsters: ["Living Fire"]
  },
  {
    kind: "kill",
    questId: 10211,
    map: "fireplanewar",
    monsters: ["Shadefire Onslaught"]
  },
  {
    kind: "kill",
    questId: 10217,
    map: "stormtemple",
    monsters: ["Chaonslaught Warrior"]
  },
  { kind: "mapItem", questId: 10179, map: "faerie", ids: [14392, 14393] },
  { kind: "mapItem", questId: 10181, map: "cloister", ids: [14394] },
  { kind: "mapItem", questId: 10182, map: "darkoviaforest", ids: [14395] },
  {
    kind: "mapItem",
    questId: 10184,
    map: "deleuzetundra",
    ids: [14396, 14397]
  },
  { kind: "mapItem", questId: 10188, map: "vivaldicavern", ids: [14398] },
  { kind: "mapItem", questId: 10192, map: "feverfew", ids: [14399] },
  { kind: "mapItem", questId: 10203, map: "sinclaircove", ids: [14400] },
  { kind: "mapItem", questId: 10207, map: "mafic", ids: [14402] },
  {
    kind: "mapItem",
    questId: 10211,
    map: "fireplanewar",
    ids: [14403, 11]
  },
  { kind: "mapItem", questId: 10213, map: "kingeldfell", ids: [14404] },
  { kind: "mapItem", questId: 10217, map: "stormtemple", ids: [14405, 8] },
  { kind: "mapItem", questId: 10223, map: "terminagrove", ids: [14406] },
  { kind: "chain", questId: 10198 },
  { kind: "kill", questId: 10, map: "farm", monsters: ["Scarecrow"] },
  { kind: "kill", questId: 41, map: "sewer", monsters: ["Greenrat"] },
  { kind: "kill", questId: 42, map: "river", monsters: ["River Fishman"] },
  { kind: "kill", questId: 43, map: "pirates", monsters: ["Shark Bait"] },
  { kind: "kill", questId: 44, map: "guru", monsters: ["Trobble"] },
  { kind: "kill", questId: 45, map: "swordhaven", monsters: ["Slime"] },
  { kind: "kill", questId: 46, map: "marsh2", monsters: ["Soulseeker"] },
  {
    kind: "kill",
    questId: 3232,
    map: "grimskullannex",
    monsters: ["Grim Fighter"]
  },
  {
    kind: "kill",
    questId: 3233,
    map: "grimskullannex",
    monsters: ["Grim Mage"]
  },
  {
    kind: "kill",
    questId: 3234,
    map: "grimskullannex",
    monsters: ["Grim Soldier"]
  },
  {
    kind: "kill",
    questId: 3235,
    map: "battlewedding",
    monsters: ["Silver Knight"]
  },
  {
    kind: "kill",
    questId: 3236,
    map: "battlewedding",
    monsters: ["Dark Knight"]
  },
  {
    kind: "kill",
    questId: 3237,
    map: "battlewedding",
    monsters: ["BrutalCorn"]
  },
  {
    kind: "kill",
    questId: 3238,
    map: "battlewedding",
    monsters: ["EbilCorp Ninja"]
  },
  {
    kind: "kill",
    questId: 3239,
    map: "battlewedding",
    monsters: ["EbilCorp Ninja"]
  },
  {
    kind: "kill",
    questId: 3240,
    map: "battlewedding",
    monsters: ["EbilCorp Shadowscythe"]
  },
  {
    kind: "kill",
    questId: 3241,
    map: "battlewedding",
    monsters: ["Platinum Mech Dragon"]
  },
  {
    kind: "kill",
    questId: 3242,
    map: "battlewedding",
    monsters: ["EbilCorp Ninja"]
  },
  {
    kind: "kill",
    questId: 3243,
    map: "battlewedding",
    monsters: ["Bellhop Human"]
  },
  {
    kind: "kill",
    questId: 3244,
    map: "battlewedding",
    monsters: ["Nightwyvern"]
  },
  {
    kind: "kill",
    questId: 3245,
    map: "battlewedding",
    monsters: ["Nightwyvern"]
  },
  {
    kind: "kill",
    questId: 3246,
    map: "battlewedding",
    monsters: ["Iron Hero"]
  },
  {
    kind: "kill",
    questId: 3247,
    map: "battlewedding",
    monsters: ["Bellhop Human"]
  },
  {
    kind: "kill",
    questId: 3248,
    map: "battlewedding",
    monsters: ["Evil Hotel Manager"]
  },
  {
    kind: "kill",
    questId: 3249,
    map: "battlewedding",
    monsters: ["Flying Eye"]
  },
  {
    kind: "kill",
    questId: 3250,
    map: "battlewedding",
    monsters: ["Jimmy the Eye Heart"]
  },
  {
    kind: "kill",
    questId: 3251,
    map: "battlewedding",
    monsters: ["BrutalCorn"]
  },
  {
    kind: "kill",
    questId: 3252,
    map: "battlewedding",
    monsters: ["Evil Hotel Manager"]
  },
  {
    kind: "kill",
    questId: 3253,
    map: "battlewedding",
    monsters: ["Platinum Mech Dragon"]
  },
  { kind: "chain", questId: 3231 },
  { kind: "kill", questId: 2454, map: "mirrormaze", monsters: ["Insane Ghoul"] },
  { kind: "kill", questId: 2457, map: "mirrormaze", monsters: ["Insane Ghoul"] },
  {
    kind: "kill",
    questId: 2460,
    map: "catacombs",
    monsters: ["Scorpion Cultist"]
  },
  {
    kind: "kill",
    questId: 2462,
    map: "catacombs",
    monsters: ["Scorpion Cultist"]
  },
  { kind: "mapItem", questId: 2455, map: "mirrormaze", ids: [1522] },
  { kind: "mapItem", questId: 2456, map: "mirrormaze", ids: [1523, 6] },
  { kind: "mapItem", questId: 2458, map: "mirrormaze", ids: [1524] },
  {
    kind: "mapItem",
    questId: 2459,
    map: "catacombs",
    ids: [1525, 1526, 1527, 1528, 1529, 1530]
  },
  { kind: "mapItem", questId: 2461, map: "catacombs", ids: [1531] },
  { kind: "mapItem", questId: 2463, map: "catacombs", ids: [1532, 10] },
  { kind: "mapItem", questId: 2464, map: "catacombs", ids: [1533] },
  {
    kind: "kill",
    questId: 7875,
    map: "timevoid",
    monsters: ["Unending Avatar"]
  },
  {
    kind: "kill",
    questId: 7876,
    map: "twilightedge",
    monsters: ["ChaosWeaver Warrior"]
  },
  { kind: "kill", questId: 7877, map: "mudluk", monsters: ["Tiger Leech"] },
  { kind: "kill", questId: 7878, map: "deathsrealm", monsters: ["Death Alive"] },
  { kind: "kill", questId: 7879, map: "thevoid", monsters: ["Void Dragon"] },
  {
    kind: "kill",
    questId: 8458,
    map: "transformation",
    monsters: ["Eldritch Abomination"]
  },
  {
    kind: "kill",
    questId: 8459,
    map: "blackhorn",
    monsters: ["Bonefeeder Spider"]
  },
  {
    kind: "kill",
    questId: 8460,
    map: "noxustower",
    monsters: ["Lightguard Caster"]
  },
  {
    kind: "kill",
    questId: 8461,
    map: "aozorahills",
    monsters: ["Ghostly Hasu"]
  },
  {
    kind: "kill",
    questId: 8463,
    map: "ghostnexus",
    monsters: ["Manifestation of Grief"]
  },
  { kind: "kill", questId: 8464, map: "somnia", monsters: ["Dream Larva"] },
  {
    kind: "kill",
    questId: 2027,
    map: "doomwood",
    monsters: ["Doomwood Ectomancer"]
  },
  { kind: "kill", questId: 2028, map: "banished", monsters: ["Desterrat Moya"] },
  { kind: "kill", questId: 9040, map: "brokenwoods", monsters: ["Extrikiti"] },
  {
    kind: "kill",
    questId: 9041,
    map: "deepforest",
    monsters: ["Aberrant Horror"]
  },
  { kind: "kill", questId: 9043, map: "thevoid", monsters: ["Dark Djinn"] },
  {
    kind: "kill",
    questId: 9044,
    map: "brokenwoods",
    monsters: ["Eldritch Amalgamation"]
  },
  { kind: "mapItem", questId: 2022, map: "northlands", ids: [979] },
  { kind: "mapItem", questId: 2024, map: "banished", ids: [980] },
  { kind: "mapItem", questId: 2026, map: "banished", ids: [981, 7] },
  { kind: "chain", questId: 746 },
  {
    kind: "kill",
    questId: 374,
    map: "battleundera",
    monsters: ["Skeletal Warrior"]
  },
  {
    kind: "kill",
    questId: 376,
    map: "battleundera",
    monsters: ["Bone Terror"]
  },
  {
    kind: "kill",
    questId: 377,
    map: "battleundera",
    monsters: ["Skeletal Warrior"]
  },
  {
    kind: "kill",
    questId: 689,
    map: "battleunderb",
    monsters: ["Skeleton Warrior"]
  },
  {
    kind: "kill",
    questId: 690,
    map: "battleunderb",
    monsters: ["Skeleton Warrior"]
  },
  {
    kind: "kill",
    questId: 691,
    map: "battleunderb",
    monsters: ["Skeleton Warrior"]
  },
  {
    kind: "kill",
    questId: 692,
    map: "battleunderb",
    monsters: ["Undead Champion"]
  },
  {
    kind: "kill",
    questId: 936,
    map: "battleunderc",
    monsters: ["Blue Crystalized Undead"]
  },
  {
    kind: "kill",
    questId: 937,
    map: "battleunderc",
    monsters: ["Blue Crystalized Undead"]
  },
  {
    kind: "kill",
    questId: 938,
    map: "battleunderc",
    monsters: ["Crystalized Jellyfish"]
  },
  {
    kind: "kill",
    questId: 5927,
    map: "battleundere",
    monsters: ["Lava Guard"]
  },
  {
    kind: "kill",
    questId: 5928,
    map: "battleundere",
    monsters: ["Hot Mama"]
  },
  { kind: "mapItem", questId: 935, map: "battleunderb", ids: [253] },
  { kind: "mapItem", questId: 2212, map: "battleunderd", ids: [1286, 8] },
  { kind: "mapItem", questId: 2215, map: "battleunderd", ids: [1288] },
  { kind: "mapItem", questId: 5927, map: "battleundere", ids: [5362] },
  {
    kind: "kill",
    questId: 3356,
    map: "beleensdream",
    monsters: ["Beach Crab"]
  },
  {
    kind: "kill",
    questId: 3357,
    map: "beleensdream",
    monsters: ["Chinchilla"]
  },
  {
    kind: "kill",
    questId: 3358,
    map: "beleensdream",
    monsters: ["Fortune Cookie"]
  },
  {
    kind: "kill",
    questId: 3359,
    map: "beleensdream",
    monsters: ["Bulloon"]
  },
  {
    kind: "kill",
    questId: 3360,
    map: "beleensdream",
    monsters: ["Disgruntled Draconian"]
  },
  {
    kind: "kill",
    questId: 3361,
    map: "beleensdream",
    monsters: ["Disgruntled Doomkitten"]
  },
  {
    kind: "kill",
    questId: 3362,
    map: "beleensdream",
    monsters: ["Heart Elemental"]
  },
  {
    kind: "kill",
    questId: 3365,
    map: "beleensdream",
    monsters: ["Bluddron the Betrayer"]
  },
  { kind: "mapItem", questId: 3359, map: "beleensdream", ids: [2475] },
  { kind: "mapItem", questId: 3359, map: "beleensdream", ids: [2476, 3] },
  { kind: "mapItem", questId: 3364, map: "beleensdream", ids: [2477] },
  { kind: "kill", questId: 6048, map: "bloodmoon", monsters: ["Darkness"] },
  { kind: "kill", questId: 6049, map: "bloodmoon", monsters: ["Constantin"] },
  { kind: "kill", questId: 6053, map: "bloodmoon", monsters: ["Spooky Fur"] },
  {
    kind: "kill",
    questId: 6055,
    map: "bloodmoon",
    monsters: ["Frankentacles", "Spidderbeast"]
  },
  {
    kind: "kill",
    questId: 6057,
    map: "bloodmoon",
    monsters: ["Black Unicorn"]
  },
  { kind: "kill", questId: 6058, map: "bloodmoon", monsters: ["Bubble"] },
  { kind: "kill", questId: 6063, map: "maxius", monsters: ["Ghoul Minion"] },
  { kind: "kill", questId: 6065, map: "maxius", monsters: ["Vampire Minion"] },
  { kind: "mapItem", questId: 6048, map: "bloodmoon", ids: [5451] },
  { kind: "mapItem", questId: 6050, map: "bloodmoon", ids: [5452] },
  { kind: "mapItem", questId: 6051, map: "bloodmoon", ids: [5453, 5454, 5455] },
  { kind: "mapItem", questId: 6052, map: "bloodmoon", ids: [5456, 2] },
  { kind: "mapItem", questId: 6054, map: "bloodmoon", ids: [5457] },
  { kind: "mapItem", questId: 6056, map: "bloodmoon", ids: [5458] },
  { kind: "kill", questId: 100, map: "bludrut", monsters: ["Rattlebones"] },
  { kind: "kill", questId: 101, map: "bludrut", monsters: ["Rock Elemental"] },
  { kind: "kill", questId: 102, map: "bludrut2", monsters: ["Shadow Creeper"] },
  { kind: "kill", questId: 103, map: "bludrut2", monsters: ["Fire Elemental"] },
  { kind: "kill", questId: 104, map: "bludrut3", monsters: ["Siren"] },
  { kind: "kill", questId: 105, map: "bludrut3", monsters: ["Ice Elemental"] },
  { kind: "kill", questId: 106, map: "bludrut4", monsters: ["Shadow Serpent"] },
  { kind: "kill", questId: 107, map: "bludrut4", monsters: ["Evil Elemental"] },
  { kind: "kill", questId: 1686, map: "bludrut", monsters: ["Rattlebones"] },
  { kind: "kill", questId: 1687, map: "bludrut2", monsters: ["Shadow Creeper"] },
  { kind: "kill", questId: 1691, map: "bludrut3", monsters: ["IT"] },
  { kind: "mapItem", questId: 1685, map: "bludrut", ids: [891] },
  { kind: "mapItem", questId: 1688, map: "bludrut2", ids: [892] },
  { kind: "mapItem", questId: 1690, map: "bludrut3", ids: [894] },
  { kind: "mapItem", questId: 1692, map: "bludrut2", ids: [893] },
  {
    kind: "kill",
    questId: 3893,
    map: "bonebreak",
    monsters: ["Undead Berserker"]
  },
  {
    kind: "kill",
    questId: 3894,
    map: "bonebreak",
    monsters: ["Kidnapped Prisoner"]
  },
  {
    kind: "kill",
    questId: 3896,
    map: "bonebreak",
    monsters: ["Undead Berserker"]
  },
  { kind: "kill", questId: 3897, map: "bonebreak", monsters: ["Bonebreaker"] },
  {
    kind: "kill",
    questId: 5978,
    map: "bonebreak",
    monsters: ["Undead Berserker", "Bone Leech"]
  },
  { kind: "kill", questId: 5979, map: "bonebreak", monsters: ["Marsh Thing"] },
  {
    kind: "kill",
    questId: 5980,
    map: "bonebreak",
    monsters: ["Kidnapped Prisoner"]
  },
  {
    kind: "kill",
    questId: 5981,
    map: "bonebreak",
    monsters: ["Killek BoneBreaker"]
  },
  { kind: "mapItem", questId: 3894, map: "bonebreak", ids: [2990, 13] },
  { kind: "mapItem", questId: 5977, map: "bonebreak", ids: [5418] },
  {
    kind: "kill",
    questId: 7510,
    map: "extinction",
    monsters: ["Lard", "Freezer Drone"]
  },
  { kind: "kill", questId: 7511, map: "battlefowl", monsters: ["Chickencow"] },
  { kind: "kill", questId: 7512, map: "freakitiki", monsters: ["Sugar Imp"] },
  { kind: "kill", questId: 7513, map: "stalagbite", monsters: ["Balboa"] },
  { kind: "kill", questId: 7514, map: "pirates", monsters: ["Fishwing"] },
  { kind: "kill", questId: 7522, map: "borgars", monsters: ["Burglinster"] },
  { kind: "mapItem", questId: 7515, map: "arcangrove", ids: [7370] },
  { kind: "mapItem", questId: 7516, map: "thespan", ids: [7371] },
  { kind: "mapItem", questId: 7519, map: "brightfortress", ids: [7372] },
  { kind: "mapItem", questId: 7521, map: "borgars", ids: [7373] },
  { kind: "chain", questId: 7517 },
  {
    kind: "kill",
    questId: 4954,
    map: "dreamforest",
    monsters: ["Green Rat", "Crow"]
  },
  {
    kind: "kill",
    questId: 4958,
    map: "dreamforest",
    monsters: ["Crow"]
  },
  {
    kind: "kill",
    questId: 4961,
    map: "dreamforest",
    monsters: ["Acrobat", "Acrobat"]
  },
  {
    kind: "kill",
    questId: 4962,
    map: "dreamforest",
    monsters: ["Acrobat", "Fire Dancer", "Elephant Trainer"]
  },
  {
    kind: "mapItem",
    questId: 4953,
    map: "dreamforest",
    ids: [4326, 5]
  },
  {
    kind: "mapItem",
    questId: 4955,
    map: "dreamforest",
    ids: [4327, 4]
  },
  {
    kind: "mapItem",
    questId: 4955,
    map: "dreamforest",
    ids: [4328, 3]
  },
  { kind: "mapItem", questId: 4955, map: "dreamforest", ids: [4329] },
  { kind: "mapItem", questId: 4956, map: "northpointe", ids: [4330] },
  {
    kind: "mapItem",
    questId: 4957,
    map: "dreamforest",
    ids: [4331, 5]
  },
  { kind: "mapItem", questId: 4959, map: "dreamforest", ids: [4332] },
  {
    kind: "mapItem",
    questId: 4960,
    map: "dreamforest",
    ids: [4333, 6]
  },
  { kind: "mapItem", questId: 4960, map: "dreamforest", ids: [4334] },
  {
    kind: "mapItem",
    questId: 4965,
    map: "dreamforest",
    ids: [4335, 10]
  },
  {
    kind: "kill",
    questId: 5340,
    map: "castleofglass",
    monsters: ["Glass Wyvern"]
  },
  {
    kind: "kill",
    questId: 5341,
    map: "castleofglass",
    monsters: ["Glass Panther"]
  },
  {
    kind: "kill",
    questId: 5342,
    map: "castleofglass",
    monsters: ["Mirror Knight"]
  },
  {
    kind: "kill",
    questId: 5344,
    map: "castleofglass",
    monsters: ["Glass Golem"]
  },
  {
    kind: "kill",
    questId: 5345,
    map: "castleofglass",
    monsters: ["Glass Wyvern"]
  },
  {
    kind: "kill",
    questId: 5347,
    map: "castleofglass",
    monsters: ["Glass Golem", "Glass Panther"]
  },
  {
    kind: "kill",
    questId: 5349,
    map: "castleofglass",
    monsters: ["Glass Golem", "Glass Panther", "Glass Wyvern"]
  },
  {
    kind: "kill",
    questId: 5352,
    map: "castleofglass",
    monsters: ["Shard Golem"]
  },
  {
    kind: "kill",
    questId: 5353,
    map: "castleofglass",
    monsters: ["Glass Golem"]
  },
  {
    kind: "kill",
    questId: 5356,
    map: "castleofglass",
    monsters: ["Chihuly"]
  },
  { kind: "mapItem", questId: 5339, map: "castleofglass", ids: [4698] },
  {
    kind: "mapItem",
    questId: 5340,
    map: "castleofglass",
    ids: [4699, 4710]
  },
  {
    kind: "mapItem",
    questId: 5341,
    map: "castleofglass",
    ids: [4700, 4711]
  },
  {
    kind: "mapItem",
    questId: 5342,
    map: "castleofglass",
    ids: [4701, 4712]
  },
  { kind: "mapItem", questId: 5343, map: "castleofglass", ids: [4702] },
  { kind: "mapItem", questId: 5346, map: "castleofglass", ids: [4703] },
  { kind: "mapItem", questId: 5348, map: "castleofglass", ids: [4704] },
  { kind: "mapItem", questId: 5350, map: "castleofglass", ids: [4705] },
  { kind: "mapItem", questId: 5351, map: "castleofglass", ids: [4706] },
  { kind: "mapItem", questId: 5353, map: "castleofglass", ids: [4707, 5] },
  { kind: "mapItem", questId: 5354, map: "castleofglass", ids: [4708] },
  { kind: "mapItem", questId: 5355, map: "castleofglass", ids: [4709, 7] },
  {
    kind: "kill",
    questId: 5244,
    map: "castletunnels",
    monsters: ["Vampire Bat", "Blood Maggot"]
  },
  {
    kind: "kill",
    questId: 5247,
    map: "castletunnels",
    monsters: ["Blood Maggot"]
  },
  {
    kind: "kill",
    questId: 5249,
    map: "castletunnels",
    monsters: ["Vampire Ghoul", "Vampire Ghoul"]
  },
  {
    kind: "kill",
    questId: 5252,
    map: "castletunnels",
    monsters: ["Blood Symbiote", "Blood Symbiote"]
  },
  {
    kind: "kill",
    questId: 5255,
    map: "castletunnels",
    monsters: ["Blood Dragon"]
  },
  { kind: "mapItem", questId: 5244, map: "castletunnels", ids: [4597] },
  { kind: "mapItem", questId: 5245, map: "castletunnels", ids: [4598, 4] },
  { kind: "mapItem", questId: 5246, map: "castletunnels", ids: [4599, 4] },
  { kind: "mapItem", questId: 5248, map: "castletunnels", ids: [4600] },
  { kind: "mapItem", questId: 5250, map: "castletunnels", ids: [4601] },
  {
    kind: "mapItem",
    questId: 5251,
    map: "castletunnels",
    ids: [4602, 4603]
  },
  { kind: "mapItem", questId: 5253, map: "castletunnels", ids: [4604] },
  { kind: "mapItem", questId: 5254, map: "castletunnels", ids: [4605] },
  {
    kind: "kill",
    questId: 1021,
    map: "vertigo",
    monsters: ["Fear Muncher", "Banished Banshee"]
  },
  {
    kind: "kill",
    questId: 1022,
    map: "vertigo",
    monsters: ["Cloaked Fiend", "Banished Banshee"]
  },
  {
    kind: "kill",
    questId: 1023,
    map: "vertigo",
    monsters: ["Cloaked Fiend", "Abandoned Dolly"]
  },
  { kind: "kill", questId: 1024, map: "vertigo", monsters: ["Vertigo"] },
  {
    kind: "kill",
    questId: 1025,
    map: "darkness",
    monsters: ["Fear Muncher", "Banished Banshee"]
  },
  {
    kind: "kill",
    questId: 1026,
    map: "darkness",
    monsters: ["Cloaked Fiend"]
  },
  {
    kind: "kill",
    questId: 1027,
    map: "darkness",
    monsters: ["Banished Banshee", "Abandoned Dolly"]
  },
  { kind: "kill", questId: 1029, map: "darkness", monsters: ["Nyctox"] },
  {
    kind: "kill",
    questId: 1031,
    map: "feardeath",
    monsters: ["Abandoned Dolly"]
  },
  {
    kind: "kill",
    questId: 1032,
    map: "feardeath",
    monsters: ["Fear Muncher"]
  },
  {
    kind: "kill",
    questId: 1033,
    map: "feardeath",
    monsters: ["Fear Muncher", "Abandoned Dolly", "Banished Banshee", "Cloaked Fiend"]
  },
  { kind: "kill", questId: 1034, map: "feardeath", monsters: ["Thanotops"] },
  { kind: "kill", questId: 1035, map: "fear", monsters: ["Fear"] },
  { kind: "mapItem", questId: 1020, map: "vertigo", ids: [390] },
  { kind: "mapItem", questId: 1028, map: "darkness", ids: [392, 10] },
  { kind: "mapItem", questId: 1030, map: "feardeath", ids: [391] },
  { kind: "kill", questId: 1627, map: "cornelis", monsters: ["Gargoyle"] },
  {
    kind: "kill",
    questId: 1630,
    map: "cornelis",
    monsters: ["Gargantugoyle"]
  },
  { kind: "mapItem", questId: 1625, map: "cornelis", ids: [856] },
  { kind: "mapItem", questId: 1626, map: "cornelis", ids: [857, 20] },
  { kind: "mapItem", questId: 1629, map: "cornelis", ids: [858] },
  { kind: "mapItem", questId: 1631, map: "cornelis", ids: [859] },
  {
    kind: "mapItem",
    questId: 2291,
    map: "cleric",
    ids: [1453, 1454, 1455, 1456, 1457]
  },
  {
    kind: "kill",
    questId: 4603,
    map: "cruxship",
    monsters: ["Treasure Hunter"]
  },
  { kind: "mapItem", questId: 4604, map: "cruxship", ids: [3902, 3] },
  { kind: "kill", questId: 8870, map: "aqlesson", monsters: ["Carnax"] },
  {
    kind: "kill",
    questId: 3539,
    map: "darkdungeon",
    monsters: ["Dungeon Minion"]
  },
  {
    kind: "kill",
    questId: 3540,
    map: "darkdungeon",
    monsters: ["Dungeon Paladin"]
  },
  {
    kind: "kill",
    questId: 3541,
    map: "darkdungeon",
    monsters: ["Shadow Imp"]
  },
  {
    kind: "kill",
    questId: 3543,
    map: "darkdungeon",
    monsters: ["Cockatrice"]
  },
  {
    kind: "mapItem",
    questId: 3538,
    map: "darkdungeon",
    ids: [2671, 2672, 2673]
  },
  { kind: "mapItem", questId: 3541, map: "darkdungeon", ids: [2674, 4] },
  { kind: "mapItem", questId: 3542, map: "darkdungeon", ids: [2679, 5] },
  {
    kind: "kill",
    questId: 2421,
    map: "swordhavenundead",
    monsters: ["Skeletal Soldier"]
  },
  {
    kind: "kill",
    questId: 2424,
    map: "deathsrealm",
    monsters: ["Undead Mage"]
  },
  {
    kind: "kill",
    questId: 2425,
    map: "deathsrealm",
    monsters: ["Undead Mage"]
  },
  { kind: "kill", questId: 2427, map: "elemental", monsters: ["Mana Imp"] },
  {
    kind: "kill",
    questId: 2430,
    map: "deathsrealm",
    monsters: ["Death Alive"]
  },
  { kind: "mapItem", questId: 2425, map: "deathsrealm", ids: [1485] },
  { kind: "mapItem", questId: 2426, map: "trainers", ids: [1491] },
  {
    kind: "mapItem",
    questId: 2428,
    map: "deathsrealm",
    ids: [1487, 1488, 1489]
  },
  { kind: "mapItem", questId: 2429, map: "deathsrealm", ids: [1490] },
  { kind: "kill", questId: 6161, map: "djinngate", monsters: ["Gedoz"] },
  {
    kind: "kill",
    questId: 6162,
    map: "djinngate",
    monsters: ["Harpy", "Lamia"]
  },
  { kind: "kill", questId: 7301, map: "ashfallcamp", monsters: ["Smoldur"] },
  { kind: "kill", questId: 7302, map: "lavarun", monsters: ["Phedra"] },
  { kind: "kill", questId: 7303, map: "marsh", monsters: ["Dark Witch"] },
  {
    kind: "kill",
    questId: 7304,
    map: "airstorm",
    monsters: ["Energy Tornado"]
  },
  { kind: "kill", questId: 7305, map: "dragonplane", monsters: ["Moganth"] },
  { kind: "kill", questId: 7306, map: "mountainpath", monsters: ["Balboa"] },
  { kind: "kill", questId: 7307, map: "natatorium", monsters: ["Marianus"] },
  { kind: "kill", questId: 7308, map: "iceplane", monsters: ["Frostblade"] },
  { kind: "kill", questId: 7309, map: "pyramid", monsters: ["Mummy"] },
  { kind: "kill", questId: 7310, map: "dreadspace", monsters: ["Dread Space"] },
  {
    kind: "kill",
    questId: 7311,
    map: "shadowvault",
    monsters: ["Ancient Doomknight"]
  },
  {
    kind: "kill",
    questId: 7312,
    map: "celestialarenad",
    monsters: ["Queen of Hope"]
  },
  { kind: "mapItem", questId: 6159, map: "djinngate", ids: [5571, 5] },
  {
    kind: "kill",
    questId: 6270,
    map: "djinnguard",
    monsters: ["Jaan al Bahar"]
  },
  {
    kind: "kill",
    questId: 6271,
    map: "djinnguard",
    monsters: ["Jaan al Hawa"]
  },
  {
    kind: "kill",
    questId: 6272,
    map: "djinnguard",
    monsters: ["Jaan al Ard"]
  },
  {
    kind: "kill",
    questId: 6273,
    map: "djinnguard",
    monsters: ["Jaan al Nair"]
  },
  {
    kind: "kill",
    questId: 6274,
    map: "djinnguard",
    monsters: ["Image of Crulon"]
  },
  {
    kind: "kill",
    questId: 2972,
    map: "doomvaultb",
    monsters: ["Grimmer Soldier"]
  },
  {
    kind: "kill",
    questId: 2973,
    map: "doomvaultb",
    monsters: ["Grimmer Fighter"]
  },
  {
    kind: "kill",
    questId: 2975,
    map: "doomvaultb",
    monsters: ["Grimmer Lich"]
  },
  {
    kind: "kill",
    questId: 2976,
    map: "doomvaultb",
    monsters: ["Weeping Spyball"]
  },
  {
    kind: "kill",
    questId: 2977,
    map: "doomvaultb",
    monsters: ["Grimmer Ectomancer"]
  },
  {
    kind: "kill",
    questId: 2978,
    map: "doomvaultb",
    monsters: ["Grimmer Shelleton"]
  },
  {
    kind: "kill",
    questId: 2979,
    map: "doomvaultb",
    monsters: ["Grimmer Fighter"]
  },
  {
    kind: "kill",
    questId: 2980,
    map: "doomvaultb",
    monsters: ["Grimmer Fire Mage"]
  },
  {
    kind: "kill",
    questId: 2984,
    map: "doomvaultb",
    monsters: ["Grimmer Lich"]
  },
  {
    kind: "kill",
    questId: 2985,
    map: "doomvaultb",
    monsters: ["Weeping Spyball"]
  },
  {
    kind: "kill",
    questId: 2986,
    map: "doomvaultb",
    monsters: ["Grimmer Fighter"]
  },
  {
    kind: "kill",
    questId: 2987,
    map: "doomvaultb",
    monsters: ["Grimmer Lich"]
  },
  {
    kind: "kill",
    questId: 2988,
    map: "doomvaultb",
    monsters: ["Grimmer Fighter"]
  },
  {
    kind: "kill",
    questId: 2989,
    map: "doomvaultb",
    monsters: ["Weeping Spyball"]
  },
  {
    kind: "kill",
    questId: 2991,
    map: "doomvaultb",
    monsters: ["Grimmer Shelleton"]
  },
  {
    kind: "kill",
    questId: 2992,
    map: "doomvaultb",
    monsters: ["Grimmer Soldier"]
  },
  {
    kind: "kill",
    questId: 2993,
    map: "doomvaultb",
    monsters: ["Grimmer Lich"]
  },
  {
    kind: "kill",
    questId: 2994,
    map: "doomvaultb",
    monsters: ["Grimmer Lich"]
  },
  {
    kind: "kill",
    questId: 2996,
    map: "doomvaultb",
    monsters: ["Grimmer Fire Mage"]
  },
  {
    kind: "kill",
    questId: 2997,
    map: "doomvaultb",
    monsters: ["Grimmer Fighter"]
  },
  {
    kind: "kill",
    questId: 2998,
    map: "doomvaultb",
    monsters: ["Grimmer Ectomancer"]
  },
  {
    kind: "kill",
    questId: 2999,
    map: "doomvaultb",
    monsters: ["Grimmer Soldier"]
  },
  { kind: "chain", questId: 2990 },
  { kind: "chain", questId: 2995 },
  { kind: "chain", questId: 3000 },
  { kind: "kill", questId: 2864, map: "lair", monsters: ["Bronze Draconian"] },
  { kind: "kill", questId: 2865, map: "cornelis", monsters: ["Gargoyle"] },
  {
    kind: "kill",
    questId: 2866,
    map: "noobshire",
    monsters: ["Kittarian Mouse Eater"]
  },
  { kind: "kill", questId: 2867, map: "giant", monsters: ["Red Ant"] },
  { kind: "kill", questId: 2868, map: "mudluk", monsters: ["Swamp Lurker"] },
  {
    kind: "kill",
    questId: 2871,
    map: "downward",
    monsters: ["Unearthed Skeleton"]
  },
  { kind: "kill", questId: 2872, map: "downward", monsters: ["Rotfeeder Worm"] },
  { kind: "kill", questId: 2873, map: "downward", monsters: ["Rotfeeder Worm"] },
  { kind: "kill", questId: 2875, map: "downward", monsters: ["Rotfeeder Worm"] },
  { kind: "kill", questId: 2877, map: "downward", monsters: ["Rotfeeder Worm"] },
  {
    kind: "kill",
    questId: 2880,
    map: "downward",
    monsters: ["Mana Crystalized Undead"]
  },
  {
    kind: "kill",
    questId: 2881,
    map: "downward",
    monsters: ["Gemmed Burrower"]
  },
  {
    kind: "kill",
    questId: 2883,
    map: "downward",
    monsters: ["Gemmed Burrower"]
  },
  {
    kind: "kill",
    questId: 2884,
    map: "downward",
    monsters: ["Crystal Mana Construct"]
  },
  { kind: "mapItem", questId: 2861, map: "arcangrove", ids: [1752] },
  { kind: "mapItem", questId: 2862, map: "battleontown", ids: [1753] },
  { kind: "mapItem", questId: 2863, map: "battleontown", ids: [1754] },
  { kind: "mapItem", questId: 2869, map: "battleontown", ids: [1755] },
  { kind: "mapItem", questId: 2870, map: "battleontown", ids: [1756] },
  { kind: "mapItem", questId: 2874, map: "downward", ids: [1757, 6] },
  { kind: "mapItem", questId: 2876, map: "downward", ids: [1758] },
  { kind: "mapItem", questId: 2878, map: "downward", ids: [1759, 8] },
  { kind: "mapItem", questId: 2879, map: "downward", ids: [1760] },
  { kind: "mapItem", questId: 2882, map: "downward", ids: [1761, 6] },
  {
    kind: "kill",
    questId: 5357,
    map: "dracocon",
    monsters: ["Zombie Tog", "Zombie Dravir"]
  },
  { kind: "kill", questId: 5358, map: "dracocon", monsters: ["Zombie Dravir"] },
  {
    kind: "kill",
    questId: 5359,
    map: "dracocon",
    monsters: ["Angry Wisp", "Red Spirit"]
  },
  {
    kind: "kill",
    questId: 5360,
    map: "dracocon",
    monsters: ["Undead Soldier", "Zombie Warrior"]
  },
  { kind: "kill", questId: 5361, map: "dracocon", monsters: ["Villager"] },
  { kind: "kill", questId: 5363, map: "dracocon", monsters: ["Zombie Warrior"] },
  { kind: "kill", questId: 5364, map: "dracocon", monsters: ["Battle Gem"] },
  {
    kind: "kill",
    questId: 5365,
    map: "dracocon",
    monsters: ["Dragon Training Dummy"]
  },
  { kind: "kill", questId: 5366, map: "dracocon", monsters: ["Angry Wisp"] },
  { kind: "kill", questId: 5367, map: "dracocon", monsters: ["Zombie Tog"] },
  { kind: "kill", questId: 5368, map: "dracocon", monsters: ["Strong Drag"] },
  {
    kind: "kill",
    questId: 5372,
    map: "dracocon",
    monsters: ["Drummer", "Guitarist", "Keyboardist", "Singer"]
  },
  { kind: "mapItem", questId: 5361, map: "dracocon", ids: [4723, 5] },
  { kind: "mapItem", questId: 5362, map: "dracocon", ids: [4724, 13] },
  { kind: "mapItem", questId: 5364, map: "dracocon", ids: [4725, 5] },
  { kind: "mapItem", questId: 5369, map: "dracocon", ids: [4726] },
  { kind: "mapItem", questId: 5370, map: "dracocon", ids: [4727, 4] },
  { kind: "mapItem", questId: 5371, map: "dracocon", ids: [4728, 6] },
  {
    kind: "kill",
    questId: 6294,
    map: "firewar",
    monsters: ["Fire Dragon"]
  },
  {
    kind: "kill",
    questId: 6295,
    map: "firewar",
    monsters: ["Fire Dragon"]
  },
  { kind: "kill", questId: 6298, map: "firewar", monsters: ["Uriax"] },
  {
    kind: "kill",
    questId: 6302,
    map: "northmountain",
    monsters: ["Ice Elemental"]
  },
  {
    kind: "kill",
    questId: 6303,
    map: "northmountain",
    monsters: ["Ursice Savage"]
  },
  {
    kind: "kill",
    questId: 6304,
    map: "northmountain",
    monsters: ["Ice Spitter"]
  },
  {
    kind: "kill",
    questId: 6305,
    map: "northmountain",
    monsters: ["Ice Elemental"]
  },
  {
    kind: "kill",
    questId: 6307,
    map: "northmountain",
    monsters: ["Izotz"]
  },
  {
    kind: "kill",
    questId: 6308,
    map: "charredplains",
    monsters: ["Fire Dragon"]
  },
  {
    kind: "kill",
    questId: 6310,
    map: "charredplains",
    monsters: ["Akriloth"]
  },
  {
    kind: "kill",
    questId: 6311,
    map: "northmountain",
    monsters: ["Izotz"]
  },
  {
    kind: "kill",
    questId: 6313,
    map: "drakonnan",
    monsters: ["Fire Dragon"]
  },
  {
    kind: "kill",
    questId: 6314,
    map: "drakonnan",
    monsters: ["Living Lava"]
  },
  {
    kind: "kill",
    questId: 6315,
    map: "drakonnan",
    monsters: ["Fire Dragon"]
  },
  {
    kind: "kill",
    questId: 6316,
    map: "northmountain",
    monsters: ["Ice Elemental"]
  },
  {
    kind: "kill",
    questId: 6318,
    map: "drakonnan",
    monsters: ["Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 6319,
    map: "drakonnan",
    monsters: ["Living Fire"]
  },
  {
    kind: "kill",
    questId: 6320,
    map: "drakonnan",
    monsters: ["Fire Dragon"]
  },
  {
    kind: "kill",
    questId: 6321,
    map: "drakonnan",
    monsters: ["Living Lava"]
  },
  {
    kind: "kill",
    questId: 6322,
    map: "drakonnan",
    monsters: ["Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 6323,
    map: "drakonnan",
    monsters: ["Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 6324,
    map: "drakonnan",
    monsters: ["Drakonnan"]
  },
  {
    kind: "kill",
    questId: 6325,
    map: "drakonnan",
    monsters: ["Ultra Drakonnan"]
  },
  {
    kind: "mapItem",
    questId: 6306,
    map: "northmountain",
    ids: [5813, 4]
  },
  {
    kind: "mapItem",
    questId: 6306,
    map: "northmountain",
    ids: [5814]
  },
  {
    kind: "mapItem",
    questId: 6309,
    map: "charredplains",
    ids: [5815]
  },
  { kind: "mapItem", questId: 6312, map: "drakonnan", ids: [5827, 5] },
  {
    kind: "mapItem",
    questId: 6317,
    map: "northmountain",
    ids: [5826, 6]
  },
  {
    kind: "kill",
    questId: 4538,
    map: "lair",
    monsters: ["Onyx Lava Dragon", "Onyx Lava Dragon"]
  },
  {
    kind: "kill",
    questId: 4541,
    map: "dragonroad",
    monsters: ["Desert Wolf Bandit"]
  },
  {
    kind: "kill",
    questId: 4542,
    map: "dragonroad",
    monsters: ["Oinklong"]
  },
  {
    kind: "kill",
    questId: 4543,
    map: "dragonroad",
    monsters: ["Horccolo"]
  },
  {
    kind: "kill",
    questId: 4544,
    map: "dragonroad",
    monsters: ["Cyborg 71", "Cyborg 81"]
  },
  {
    kind: "kill",
    questId: 4545,
    map: "dragonroad",
    monsters: ["Majic Guu"]
  },
  {
    kind: "kill",
    questId: 4547,
    map: "dragonroad",
    monsters: ["Super Dragon Twig"]
  },
  {
    kind: "mapItem",
    questId: 4546,
    map: "dragonroad",
    ids: [3759, 10]
  },
  {
    kind: "kill",
    questId: 7869,
    map: "dreampalace",
    monsters: ["Flaming Harpy", "Golmoth"]
  },
  {
    kind: "kill",
    questId: 7870,
    map: "dreampalace",
    monsters: ["Zelkur", "Lotus Spider"]
  },
  {
    kind: "kill",
    questId: 7871,
    map: "dreampalace",
    monsters: ["Palace Hound", "Gazeroth"]
  },
  {
    kind: "kill",
    questId: 7872,
    map: "dreampalace",
    monsters: ["Zal", "Ethereal Harpy"]
  },
  {
    kind: "kill",
    questId: 7874,
    map: "dreampalace",
    monsters: ["Guardian Hound", "Zahad"]
  },
  { kind: "mapItem", questId: 7873, map: "dreampalace", ids: [7944] },
  {
    kind: "kill",
    questId: 1743,
    map: "dwarfhold",
    monsters: ["Chaotic Draconian"]
  },
  { kind: "kill", questId: 1744, map: "dwarfhold", monsters: ["Glow Worm"] },
  {
    kind: "kill",
    questId: 1747,
    map: "dwarfhold",
    monsters: ["Chaotic Draconian"]
  },
  {
    kind: "kill",
    questId: 1748,
    map: "dwarfhold",
    monsters: ["Chaotic Draconian"]
  },
  { kind: "kill", questId: 1749, map: "dwarfhold", monsters: ["Glow Worm"] },
  { kind: "kill", questId: 1750, map: "dwarfhold", monsters: ["Amadeus"] },
  { kind: "kill", questId: 1751, map: "dwarfhold", monsters: ["Albino Bat"] },
  { kind: "kill", questId: 1753, map: "dwarfhold", monsters: ["Chaos Drow"] },
  { kind: "kill", questId: 1754, map: "dwarfhold", monsters: ["Glow Worm"] },
  { kind: "kill", questId: 1755, map: "dwarfhold", monsters: ["Albino Bat"] },
  { kind: "kill", questId: 1757, map: "dwarfhold", monsters: ["Albino Bat"] },
  { kind: "kill", questId: 3376, map: "dwarfhold", monsters: ["Chaos Drow"] },
  {
    kind: "kill",
    questId: 3377,
    map: "dwarfhold",
    monsters: ["Chaotic Draconian"]
  },
  { kind: "kill", questId: 3378, map: "dwarfhold", monsters: ["Gemrald"] },
  { kind: "kill", questId: 3379, map: "dwarfhold", monsters: ["Glow Worm"] },
  { kind: "mapItem", questId: 1745, map: "dwarfhold", ids: [929, 12] },
  { kind: "mapItem", questId: 1746, map: "dwarfhold", ids: [930, 15] },
  { kind: "mapItem", questId: 1752, map: "dwarfhold", ids: [931, 8] },
  { kind: "mapItem", questId: 1756, map: "dwarfhold", ids: [932, 10] },
  {
    kind: "mapItem",
    questId: 3380,
    map: "dwarfhold",
    ids: [2506, 2508, 2509, 2510, 2511]
  },
  { kind: "kill", questId: 2778, map: "dvg", monsters: ["Draam"] },
  { kind: "kill", questId: 2779, map: "dvg", monsters: ["Tergum"] },
  { kind: "kill", questId: 2780, map: "dvg", monsters: ["Slork"] },
  { kind: "kill", questId: 2781, map: "dvg", monsters: ["Krashh"] },
  {
    kind: "kill",
    questId: 2782,
    map: "dvg",
    monsters: ["Blixx", "Meatball"]
  },
  { kind: "kill", questId: 2783, map: "dvg", monsters: ["Munthor"] },
  {
    kind: "kill",
    questId: 2784,
    map: "dvgchallenge",
    monsters: ["Meatball"]
  },
  {
    kind: "kill",
    questId: 2785,
    map: "dvgchallenge",
    monsters: ["Blixx"]
  },
  { kind: "kill", questId: 8795, map: "eden", monsters: ["Harmless Choir"] },
  { kind: "kill", questId: 8797, map: "eden", monsters: ["SalaryMan", "SalaryMan"] },
  { kind: "kill", questId: 8799, map: "eden", monsters: ["CRC Power Armor"] },
  { kind: "kill", questId: 8800, map: "eden", monsters: ["Yokaified Experiment 1"] },
  { kind: "kill", questId: 8801, map: "eden", monsters: ["Major Anomaly"] },
  { kind: "mapItem", questId: 8798, map: "eden", ids: [10448, 5] },
  { kind: "mapItem", questId: 8800, map: "eden", ids: [10449, 3] },
  {
    kind: "kill",
    questId: 1385,
    map: "dragonplane",
    monsters: ["Fire Elemental", "Earth Elemental", "Water Elemental", "Wind Elemental"]
  },
  {
    kind: "kill",
    questId: 1388,
    map: "dragonplane",
    monsters: ["Earth Elemental", "Living Earth"]
  },
  {
    kind: "kill",
    questId: 1390,
    map: "dragonplane",
    monsters: ["Living Earth"]
  },
  {
    kind: "kill",
    questId: 1392,
    map: "dragonplane",
    monsters: ["Moganth"]
  },
  {
    kind: "kill",
    questId: 1396,
    map: "water",
    monsters: ["Water Elemental", "Living Water"]
  },
  {
    kind: "kill",
    questId: 1398,
    map: "water",
    monsters: ["Living Water"]
  },
  { kind: "kill", questId: 1400, map: "water", monsters: ["Udaroth"] },
  {
    kind: "kill",
    questId: 1404,
    map: "wind",
    monsters: ["Wind Elemental", "Living Air"]
  },
  { kind: "kill", questId: 1406, map: "wind", monsters: ["Living Air"] },
  { kind: "kill", questId: 1408, map: "wind", monsters: ["Cellot"] },
  {
    kind: "kill",
    questId: 1412,
    map: "fire",
    monsters: ["Fire Elemental", "Living Fire"]
  },
  {
    kind: "kill",
    questId: 1414,
    map: "fire",
    monsters: ["Living Fire"]
  },
  { kind: "kill", questId: 1416, map: "fire", monsters: ["Zellare"] },
  {
    kind: "kill",
    questId: 1532,
    map: "firestorm",
    monsters: ["Sulfur Imp", "Sulfur Imp"]
  },
  {
    kind: "kill",
    questId: 1533,
    map: "firestorm",
    monsters: ["Living Fire"]
  },
  {
    kind: "kill",
    questId: 1546,
    map: "firestorm",
    monsters: ["FireStorm Hatchling"]
  },
  {
    kind: "kill",
    questId: 1547,
    map: "firestorm",
    monsters: ["Ssikari"]
  },
  {
    kind: "kill",
    questId: 1571,
    map: "airstorm",
    monsters: ["Living Air"]
  },
  {
    kind: "kill",
    questId: 1574,
    map: "airstorm",
    monsters: ["KingCrystal", "Air Crystal"]
  },
  {
    kind: "kill",
    questId: 1575,
    map: "firestorm",
    monsters: ["Sulfur Imp"]
  },
  {
    kind: "kill",
    questId: 1576,
    map: "airstorm",
    monsters: ["Energy Tornado"]
  },
  {
    kind: "kill",
    questId: 1617,
    map: "waterstorm",
    monsters: ["Marsh Lurker"]
  },
  {
    kind: "kill",
    questId: 1619,
    map: "waterstorm",
    monsters: ["Living Water", "Living Water"]
  },
  {
    kind: "kill",
    questId: 1620,
    map: "waterstorm",
    monsters: ["Fishwing", "Fishwing"]
  },
  {
    kind: "kill",
    questId: 1621,
    map: "waterstorm",
    monsters: ["Fishman Soldier", "Marsh Lurker", "Frogdrake"]
  },
  {
    kind: "kill",
    questId: 1622,
    map: "waterstorm",
    monsters: ["Deep Dweller"]
  },
  {
    kind: "kill",
    questId: 1633,
    map: "earthstorm",
    monsters: ["Wind Elemental", "Water Elemental", "Earth Elemental", "Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 1634,
    map: "earthstorm",
    monsters: ["Sapphire Golem", "Crystallized Living Fire"]
  },
  {
    kind: "kill",
    questId: 1635,
    map: "earthstorm",
    monsters: ["Crystalized Jellyfish", "Diamond Golem"]
  },
  {
    kind: "kill",
    questId: 1637,
    map: "earthstorm",
    monsters: ["Ruby Golem"]
  },
  {
    kind: "kill",
    questId: 1638,
    map: "earthstorm",
    monsters: ["Amethite"]
  },
  {
    kind: "kill",
    questId: 1639,
    map: "earthstorm",
    monsters: ["Arradia"]
  },
  {
    kind: "kill",
    questId: 3498,
    map: "firestorm",
    monsters: ["Sulfur Imp"]
  },
  {
    kind: "kill",
    questId: 3499,
    map: "shadowfall",
    monsters: ["Skeletal Knight"]
  },
  {
    kind: "kill",
    questId: 3501,
    map: "fotia",
    monsters: ["Femme Cult Worshiper"]
  },
  {
    kind: "kill",
    questId: 3502,
    map: "dragonplane",
    monsters: ["Earth Elemental", "Fire Elemental", "Water Elemental", "Wind Elemental"]
  },
  {
    kind: "kill",
    questId: 3503,
    map: "natatorium",
    monsters: ["Merdraconian"]
  },
  {
    kind: "kill",
    questId: 3507,
    map: "dragonhame",
    monsters: ["Infected Dragon"]
  },
  {
    kind: "kill",
    questId: 3509,
    map: "dragonhame",
    monsters: ["Infected Dragon"]
  },
  {
    kind: "kill",
    questId: 3512,
    map: "lair",
    monsters: ["Dark Draconian"]
  },
  { kind: "kill", questId: 3513, map: "lair", monsters: ["Red Dragon"] },
  {
    kind: "kill",
    questId: 3515,
    map: "temple",
    monsters: ["Dracolich"]
  },
  {
    kind: "kill",
    questId: 3516,
    map: "dragonplane",
    monsters: ["Wind Elemental", "Earth Elemental", "Fire Elemental", "Water Elemental"]
  },
  {
    kind: "kill",
    questId: 3518,
    map: "battleundera",
    monsters: ["Lich"]
  },
  {
    kind: "kill",
    questId: 3519,
    map: "dragonheart",
    monsters: ["Zombie Dragon"]
  },
  {
    kind: "kill",
    questId: 3520,
    map: "infirmary",
    monsters: ["Proto-Earth Dracolich"]
  },
  {
    kind: "kill",
    questId: 3524,
    map: "dragonheart",
    monsters: ["Infected Dragonling"]
  },
  {
    kind: "kill",
    questId: 3526,
    map: "dragonheart",
    monsters: ["Zombie Dragon"]
  },
  {
    kind: "kill",
    questId: 3527,
    map: "dragonheart",
    monsters: ["Proto-Water Dracolich"]
  },
  {
    kind: "kill",
    questId: 3529,
    map: "dragonheart",
    monsters: ["Proto-Fire Dracolich"]
  },
  {
    kind: "kill",
    questId: 3531,
    map: "dragonheart",
    monsters: ["Proto-Earth Dracolich"]
  },
  {
    kind: "kill",
    questId: 3533,
    map: "dragonheart",
    monsters: ["Proto-Air Dracolich"]
  },
  {
    kind: "kill",
    questId: 3534,
    map: "dragonheart",
    monsters: ["Deluge Dracolich", "Inferno Dracolich", "Granite Dracolich", "Tempest Dracolich"]
  },
  {
    kind: "kill",
    questId: 3535,
    map: "dragonheart",
    monsters: ["Avatar of Desolich"]
  },
  {
    kind: "mapItem",
    questId: 1384,
    map: "dragonplane",
    ids: [682, 683, 684, 685, 686]
  },
  { kind: "mapItem", questId: 1386, map: "dragonplane", ids: [687, 6] },
  { kind: "mapItem", questId: 1387, map: "dragonplane", ids: [688] },
  { kind: "mapItem", questId: 1389, map: "dragonplane", ids: [689, 5] },
  { kind: "mapItem", questId: 1391, map: "dragonplane", ids: [696, 5] },
  { kind: "mapItem", questId: 1393, map: "dragonplane", ids: [688] },
  { kind: "mapItem", questId: 1394, map: "dragonplane", ids: [687, 6] },
  { kind: "mapItem", questId: 1395, map: "water", ids: [688] },
  { kind: "mapItem", questId: 1397, map: "water", ids: [690, 6] },
  { kind: "mapItem", questId: 1399, map: "water", ids: [691, 6] },
  { kind: "mapItem", questId: 1401, map: "dragonplane", ids: [688] },
  { kind: "mapItem", questId: 1402, map: "dragonplane", ids: [687, 6] },
  { kind: "mapItem", questId: 1403, map: "wind", ids: [688] },
  { kind: "mapItem", questId: 1405, map: "wind", ids: [695, 5] },
  { kind: "mapItem", questId: 1407, map: "wind", ids: [692, 6] },
  { kind: "mapItem", questId: 1409, map: "dragonplane", ids: [688] },
  { kind: "mapItem", questId: 1410, map: "dragonplane", ids: [687, 6] },
  { kind: "mapItem", questId: 1411, map: "fire", ids: [688] },
  { kind: "mapItem", questId: 1413, map: "fire", ids: [693, 6] },
  { kind: "mapItem", questId: 1415, map: "fire", ids: [694, 8] },
  { kind: "mapItem", questId: 1417, map: "dragonplane", ids: [688] },
  { kind: "mapItem", questId: 1542, map: "firestorm", ids: [784, 13] },
  { kind: "mapItem", questId: 1543, map: "firestorm", ids: [785] },
  { kind: "mapItem", questId: 1545, map: "firestorm", ids: [786, 20] },
  { kind: "mapItem", questId: 1572, map: "airstorm", ids: [827] },
  { kind: "mapItem", questId: 1573, map: "airstorm", ids: [823, 10] },
  { kind: "mapItem", questId: 1575, map: "firestorm", ids: [824, 12] },
  { kind: "mapItem", questId: 1577, map: "firestorm", ids: [825] },
  { kind: "mapItem", questId: 1616, map: "waterstorm", ids: [840] },
  { kind: "mapItem", questId: 1616, map: "waterstorm", ids: [841] },
  { kind: "mapItem", questId: 1618, map: "waterstorm", ids: [842, 13] },
  { kind: "mapItem", questId: 1619, map: "waterstorm", ids: [843, 10] },
  { kind: "mapItem", questId: 1621, map: "waterstorm", ids: [844, 3] },
  { kind: "mapItem", questId: 1634, map: "earthstorm", ids: [860, 3] },
  { kind: "mapItem", questId: 1635, map: "earthstorm", ids: [862, 8] },
  { kind: "mapItem", questId: 3497, map: "firestorm", ids: [2646] },
  {
    kind: "mapItem",
    questId: 3505,
    map: "dragonrune",
    ids: [2649, 2650, 2651, 2652, 2653]
  },
  { kind: "mapItem", questId: 3506, map: "dragonhame", ids: [2647, 8] },
  { kind: "mapItem", questId: 3506, map: "dragonhame", ids: [2648] },
  { kind: "mapItem", questId: 3523, map: "dragonheart", ids: [2660, 5] },
  { kind: "mapItem", questId: 3525, map: "dragonheart", ids: [2661] },
  { kind: "mapItem", questId: 3527, map: "dragonheart", ids: [2662] },
  { kind: "mapItem", questId: 3528, map: "dragonheart", ids: [2663, 7] },
  { kind: "mapItem", questId: 3529, map: "dragonheart", ids: [2664] },
  { kind: "mapItem", questId: 3530, map: "dragonheart", ids: [2665, 7] },
  { kind: "mapItem", questId: 3531, map: "dragonheart", ids: [2666] },
  { kind: "mapItem", questId: 3532, map: "dragonheart", ids: [2667, 7] },
  { kind: "mapItem", questId: 3533, map: "dragonheart", ids: [2668] },
  { kind: "chain", questId: 3522 },
  {
    kind: "kill",
    questId: 8146,
    map: "timeinn",
    monsters: ["Ice Elemental", "Fire Elemental"]
  },
  { kind: "kill", questId: 8147, map: "timeinn", monsters: ["Ezrajal"] },
  {
    kind: "kill",
    questId: 8148,
    map: "timeinn",
    monsters: ["Nature Elemental", "Wind Elemental"]
  },
  { kind: "kill", questId: 8149, map: "timeinn", monsters: ["The Warden"] },
  {
    kind: "kill",
    questId: 8150,
    map: "timeinn",
    monsters: ["Energy Elemental", "Water Elemental"]
  },
  {
    kind: "kill",
    questId: 8151,
    map: "timeinn",
    monsters: ["The Engineer"]
  },
  {
    kind: "kill",
    questId: 3855,
    map: "extinction",
    monsters: ["Control Panel"]
  },
  { kind: "kill", questId: 3856, map: "extinction", monsters: ["Cyworg"] },
  {
    kind: "kill",
    questId: 3857,
    map: "extinction",
    monsters: ["Pink Slime", "Gelatinous Slime"]
  },
  {
    kind: "kill",
    questId: 3859,
    map: "extinction",
    monsters: ["Slimed Drone"]
  },
  {
    kind: "kill",
    questId: 3860,
    map: "extinction",
    monsters: ["Freezer Drone"]
  },
  { kind: "kill", questId: 3862, map: "extinction", monsters: ["Lard"] },
  {
    kind: "kill",
    questId: 3863,
    map: "extinction",
    monsters: ["Freezer Drone"]
  },
  { kind: "kill", questId: 3864, map: "extinction", monsters: ["SN.O.W."] },
  { kind: "mapItem", questId: 3855, map: "extinction", ids: [2956, 5] },
  { kind: "mapItem", questId: 3858, map: "extinction", ids: [2957, 5] },
  { kind: "mapItem", questId: 3861, map: "extinction", ids: [2958, 5] },
  {
    kind: "kill",
    questId: 3300,
    map: "greendragon",
    monsters: ["Greenguard Dragon"]
  },
  {
    kind: "kill",
    questId: 3302,
    map: "fableforest",
    monsters: ["Fire Elemental"]
  },
  {
    kind: "kill",
    questId: 3304,
    map: "fableforest",
    monsters: ["Bloodwolf"]
  },
  {
    kind: "kill",
    questId: 3305,
    map: "fableforest",
    monsters: ["Water Elemental"]
  },
  { kind: "kill", questId: 3306, map: "fableforest", monsters: ["Aqueevil"] },
  {
    kind: "kill",
    questId: 3307,
    map: "fableforest",
    monsters: ["Earth Elemental"]
  },
  {
    kind: "kill",
    questId: 3308,
    map: "fableforest",
    monsters: ["Undead Satyr"]
  },
  {
    kind: "kill",
    questId: 3309,
    map: "fableforest",
    monsters: ["Wind Elemental"]
  },
  {
    kind: "kill",
    questId: 3310,
    map: "fableforest",
    monsters: ["Forest Fury"]
  },
  {
    kind: "kill",
    questId: 3313,
    map: "fableforest",
    monsters: ["Forest Guardian"]
  },
  { kind: "mapItem", questId: 3301, map: "fableforest", ids: [2425] },
  { kind: "mapItem", questId: 3311, map: "fableforest", ids: [2424] },
  { kind: "kill", questId: 9100, map: "battleodium", monsters: ["Diemond"] },
  {
    kind: "kill",
    questId: 9103,
    map: "greyguard",
    monsters: ["Gloombloom", "Carcass Creeper", "Fearweaver", "Darkbark", "Twilighteeth", "Maulignant"]
  },
  {
    kind: "kill",
    questId: 9105,
    map: "greyguard",
    monsters: ["Carcass Creeper"]
  },
  { kind: "kill", questId: 9106, map: "greyguard", monsters: ["Odium"] },
  { kind: "mapItem", questId: 9099, map: "battleodium", ids: [11202] },
  { kind: "mapItem", questId: 9101, map: "battleodium", ids: [11203, 3] },
  { kind: "mapItem", questId: 9103, map: "greyguard", ids: [11205] },
  {
    kind: "kill",
    questId: 3634,
    map: "chaosnorth",
    monsters: ["Chaotic Symbiote", "Chaorruption"]
  },
  {
    kind: "kill",
    questId: 3635,
    map: "chaosnorth",
    monsters: ["Chaorrupted Mage", "Chaorrupted Mage", "Chaorrupted Mage"]
  },
  {
    kind: "kill",
    questId: 3637,
    map: "chaosnorth",
    monsters: ["Chaorruption", "Chaos Sp-Eye", "Chaorrupted Imp", "Chaorrupted Mage"]
  },
  {
    kind: "kill",
    questId: 3638,
    map: "chaosnorth",
    monsters: ["Chaorrupted Xan"]
  },
  {
    kind: "kill",
    questId: 6699,
    map: "marchosiasfight",
    monsters: ["Marchosias"]
  },
  {
    kind: "kill",
    questId: 6700,
    map: "huntersmoon",
    monsters: ["Dark Fire"]
  },
  {
    kind: "kill",
    questId: 6701,
    map: "huntersmoon",
    monsters: ["Eclipsed One"]
  },
  {
    kind: "kill",
    questId: 6704,
    map: "huntersmoon",
    monsters: ["Blood Moon Hooligan"]
  },
  {
    kind: "kill",
    questId: 6705,
    map: "huntersmoon",
    monsters: ["Dark Fire"]
  },
  {
    kind: "kill",
    questId: 6706,
    map: "huntersmoon",
    monsters: ["Eclipsed One"]
  },
  {
    kind: "kill",
    questId: 6710,
    map: "huntersmoon",
    monsters: ["Eclipsed One"]
  },
  {
    kind: "kill",
    questId: 6712,
    map: "huntersmoon",
    monsters: ["Spirit of Voland"]
  },
  {
    kind: "kill",
    questId: 6799,
    map: "mooncursedlair",
    monsters: ["Shard of Moonlight"]
  },
  {
    kind: "kill",
    questId: 6800,
    map: "mooncursedlair",
    monsters: ["Eclipsed One"]
  },
  {
    kind: "kill",
    questId: 6801,
    map: "mooncursedlair",
    monsters: ["Tainted Grizzly"]
  },
  {
    kind: "kill",
    questId: 6803,
    map: "mooncursedlair",
    monsters: ["Corrupted Bear"]
  },
  {
    kind: "kill",
    questId: 6804,
    map: "mooncursedlair",
    monsters: ["Corrupted Sludge"]
  },
  {
    kind: "kill",
    questId: 6806,
    map: "mooncursedlair",
    monsters: ["Eclipsed One"]
  },
  {
    kind: "kill",
    questId: 6807,
    map: "mooncursedlair",
    monsters: ["Blood Moon Minion"]
  },
  {
    kind: "kill",
    questId: 6808,
    map: "mooncursedlair",
    monsters: ["Matted Yuck"]
  },
  {
    kind: "kill",
    questId: 6810,
    map: "mooncursedlair",
    monsters: ["Marchosias"]
  },
  { kind: "mapItem", questId: 6702, map: "huntersmoon", ids: [6195] },
  { kind: "mapItem", questId: 6703, map: "huntersmoon", ids: [6194, 6] },
  { kind: "mapItem", questId: 6708, map: "huntersmoon", ids: [6193] },
  { kind: "mapItem", questId: 6709, map: "huntersmoon", ids: [6192, 10] },
  { kind: "mapItem", questId: 6711, map: "huntersmoon", ids: [6191] },
  { kind: "mapItem", questId: 6802, map: "mooncursedlair", ids: [6325] },
  { kind: "mapItem", questId: 6805, map: "mooncursedlair", ids: [6326] },
  { kind: "mapItem", questId: 6809, map: "mooncursedlair", ids: [6327] },
  {
    kind: "kill",
    questId: 942,
    map: "gamehaven",
    monsters: ["Evil Arcade Machine"]
  },
  {
    kind: "kill",
    questId: 943,
    map: "gamehaven",
    monsters: ["Evil Console Machine"]
  },
  {
    kind: "kill",
    questId: 946,
    map: "warehouse",
    monsters: ["Delivery Sneevil"]
  },
  { kind: "kill", questId: 947, map: "warehouse", monsters: ["Snapper Shrub"] },
  { kind: "kill", questId: 951, map: "arcadion", monsters: ["Megadude"] },
  { kind: "kill", questId: 952, map: "arcadion", monsters: ["Blue Hedgehog"] },
  { kind: "kill", questId: 953, map: "arcadion", monsters: ["Orc Plumber"] },
  { kind: "mapItem", questId: 941, map: "gamehaven", ids: [267, 10] },
  { kind: "mapItem", questId: 944, map: "gamehaven", ids: [269] },
  { kind: "mapItem", questId: 945, map: "warehouse", ids: [270, 10] },
  { kind: "mapItem", questId: 948, map: "warehouse", ids: [272] },
  { kind: "mapItem", questId: 950, map: "arcadion", ids: [271, 8] },
  { kind: "chain", questId: 940 },
  { kind: "kill", questId: 718, map: "giant", monsters: ["Red Ant"] },
  { kind: "kill", questId: 719, map: "giant", monsters: ["Dust Bunny"] },
  { kind: "kill", questId: 720, map: "giant", monsters: ["Giant Cat"] },
  { kind: "kill", questId: 721, map: "smuurvil", monsters: ["Smuurvil"] },
  { kind: "kill", questId: 723, map: "smuurvil", monsters: ["Smuurvil"] },
  {
    kind: "kill",
    questId: 724,
    map: "smuurvil",
    monsters: ["Smuurvilette"]
  },
  {
    kind: "kill",
    questId: 725,
    map: "smuurvil",
    monsters: ["Papa Smuurvil"]
  },
  { kind: "kill", questId: 747, map: "andre", monsters: ["Giant Foot"] },
  { kind: "kill", questId: 748, map: "andre", monsters: ["Giant Flea"] },
  {
    kind: "kill",
    questId: 749,
    map: "andre",
    monsters: ["Giant Necklace"]
  },
  { kind: "mapItem", questId: 717, map: "giant", ids: [119] },
  { kind: "mapItem", questId: 722, map: "smuurvil", ids: [122, 12] },
  {
    kind: "mapItem",
    questId: 737,
    map: "table",
    ids: [123, 124, 125, 126, 127, 128]
  },
  { kind: "chain", questId: 743 },
  {
    kind: "kill",
    questId: 3908,
    map: "frozentower",
    monsters: ["Polar Elemental"]
  },
  {
    kind: "kill",
    questId: 3911,
    map: "frozentower",
    monsters: ["Frostwyrm", "Frostwyrm"]
  },
  {
    kind: "kill",
    questId: 3912,
    map: "frozentower",
    monsters: ["FrostDeep Dweller"]
  },
  { kind: "kill", questId: 3914, map: "frozentower", monsters: ["Twisted Ice"] },
  {
    kind: "kill",
    questId: 3916,
    map: "frozentower",
    monsters: ["Polar Elemental"]
  },
  {
    kind: "kill",
    questId: 3919,
    map: "frozentower",
    monsters: ["Polar Elemental"]
  },
  {
    kind: "kill",
    questId: 3920,
    map: "frozentower",
    monsters: ["Polar Elemental", "Ice Wolf"]
  },
  {
    kind: "kill",
    questId: 3921,
    map: "frozentower",
    monsters: ["FrostDeep Dweller"]
  },
  {
    kind: "kill",
    questId: 3922,
    map: "frozentower",
    monsters: ["Polar Elemental"]
  },
  { kind: "kill", questId: 3923, map: "frozentower", monsters: ["Frostwyrm"] },
  { kind: "kill", questId: 3928, map: "frozentower", monsters: ["Arctic Eel"] },
  {
    kind: "kill",
    questId: 3929,
    map: "frozentower",
    monsters: ["Polar Elemental"]
  },
  { kind: "kill", questId: 3930, map: "frozentower", monsters: ["Twisted Ice"] },
  { kind: "kill", questId: 3931, map: "frozentower", monsters: ["Frostwyrm"] },
  { kind: "kill", questId: 3933, map: "frozentower", monsters: ["Ice Wolf"] },
  { kind: "kill", questId: 3934, map: "frozentower", monsters: ["Rotten Ice"] },
  { kind: "kill", questId: 3935, map: "frozentower", monsters: ["Ice Wolf"] },
  {
    kind: "kill",
    questId: 3941,
    map: "frozenruins",
    monsters: ["Frost Fangbeast"]
  },
  { kind: "kill", questId: 3942, map: "frozenruins", monsters: ["Frost Reaper"] },
  { kind: "kill", questId: 3943, map: "frozenruins", monsters: ["Frost Reaper"] },
  { kind: "kill", questId: 3944, map: "frozenruins", monsters: ["Frost Reaper"] },
  {
    kind: "kill",
    questId: 3945,
    map: "frozenruins",
    monsters: ["Frozen Moglinster"]
  },
  { kind: "kill", questId: 3948, map: "glacera", monsters: ["Frost Invader"] },
  {
    kind: "kill",
    questId: 3951,
    map: "frozenruins",
    monsters: ["Frost Invader", "Frozen Moglinster"]
  },
  {
    kind: "kill",
    questId: 3952,
    map: "frozenruins",
    monsters: ["Frost Fangbeast"]
  },
  { kind: "kill", questId: 3953, map: "frozenruins", monsters: ["Frost Reaper"] },
  {
    kind: "kill",
    questId: 3954,
    map: "frozenruins",
    monsters: ["Frost General"]
  },
  {
    kind: "kill",
    questId: 3958,
    map: "northstar",
    monsters: ["Monstrous Refugee", "Frost Invader"]
  },
  {
    kind: "kill",
    questId: 3959,
    map: "northstar",
    monsters: ["Frost Fangbeast", "Frost Invader"]
  },
  { kind: "kill", questId: 3960, map: "northstar", monsters: ["Frost Reaper"] },
  { kind: "kill", questId: 3961, map: "northstar", monsters: ["Frost Reaper"] },
  {
    kind: "kill",
    questId: 3973,
    map: "northstar",
    monsters: ["Frost Fangbeast", "Frost Invader", "Frost Reaper", "Frost Superreaper", "Monstrous Refugee"]
  },
  {
    kind: "kill",
    questId: 3974,
    map: "northstar",
    monsters: [
      "Frost Fangbeast",
      "Monstrous Refugee",
      "Frost Fangbeast",
      "Frost Invader",
      "Frost Reaper",
      "Monstrous Refugee"
    ]
  },
  {
    kind: "kill",
    questId: 3970,
    map: "northstar",
    monsters: ["The Queen's Gift"]
  },
  {
    kind: "kill",
    questId: 3971,
    map: "northstar",
    monsters: ["Karok The Fallen"]
  },
  {
    kind: "kill",
    questId: 3951,
    map: "frozenruins",
    monsters: ["Frost Invader"]
  },
  {
    kind: "kill",
    questId: 5588,
    map: "icewindpass",
    monsters: ["Glacial Elemental"]
  },
  {
    kind: "kill",
    questId: 5589,
    map: "icewindpass",
    monsters: ["Glacial Elemental"]
  },
  { kind: "kill", questId: 5590, map: "icewindpass", monsters: ["Polar Golem"] },
  {
    kind: "kill",
    questId: 5591,
    map: "icewindpass",
    monsters: ["Frost Invader"]
  },
  {
    kind: "kill",
    questId: 5592,
    map: "icewindpass",
    monsters: ["Frostspawn Symbiote"]
  },
  {
    kind: "kill",
    questId: 5593,
    map: "icewindpass",
    monsters: ["Frost Invader"]
  },
  {
    kind: "kill",
    questId: 5594,
    map: "icewindpass",
    monsters: ["Frostspawn Horror"]
  },
  {
    kind: "kill",
    questId: 5595,
    map: "icewindpass",
    monsters: ["Frostspawn Troll", "Frost Invader"]
  },
  {
    kind: "kill",
    questId: 5596,
    map: "icewindpass",
    monsters: ["Polar Golem", "Glacial Elemental"]
  },
  { kind: "kill", questId: 5601, map: "icewindwar", monsters: ["Soricomorpha"] },
  {
    kind: "kill",
    questId: 7832,
    map: "icedungeon",
    monsters: ["Ice Symbiote", "Frosted Banshee", "Frozen Undead"]
  },
  {
    kind: "kill",
    questId: 7833,
    map: "icedungeon",
    monsters: ["Spirit of Ice", "Ice Crystal", "Frigid Spirit"]
  },
  {
    kind: "kill",
    questId: 7834,
    map: "icedungeon",
    monsters: ["Living Ice", "Crystallized Elemental", "Frozen Demon"]
  },
  {
    kind: "kill",
    questId: 7835,
    map: "icedungeon",
    monsters: ["Image of Glace"]
  },
  { kind: "kill", questId: 7836, map: "icedungeon", monsters: ["Abel"] },
  {
    kind: "kill",
    questId: 7837,
    map: "icedungeon",
    monsters: ["Shade of Kyanos"]
  },
  {
    kind: "kill",
    questId: 7838,
    map: "icedungeon",
    monsters: ["Frosted Banshee", "Frozen Undead", "Ice Symbiote"]
  },
  {
    kind: "kill",
    questId: 7839,
    map: "icedungeon",
    monsters: ["Spirit of Ice", "Ice Crystal", "Frigid Spirit"]
  },
  {
    kind: "kill",
    questId: 7840,
    map: "icedungeon",
    monsters: ["Living Ice", "Crystallized Elemental", "Frozen Demon"]
  },
  {
    kind: "kill",
    questId: 7841,
    map: "icedungeon",
    monsters: ["Image of Glace", "Abel", "Shade of Kyanos"]
  },
  { kind: "mapItem", questId: 3907, map: "frozentower", ids: [3022] },
  { kind: "mapItem", questId: 3909, map: "frozentower", ids: [3019] },
  { kind: "mapItem", questId: 3910, map: "frozentower", ids: [3004, 13] },
  { kind: "mapItem", questId: 3913, map: "frozentower", ids: [3005, 13] },
  { kind: "mapItem", questId: 3915, map: "frozentower", ids: [3006] },
  { kind: "mapItem", questId: 3917, map: "frozentower", ids: [3007, 6] },
  { kind: "mapItem", questId: 3918, map: "frozentower", ids: [3013] },
  { kind: "mapItem", questId: 3919, map: "frozentower", ids: [3008, 6] },
  { kind: "mapItem", questId: 3920, map: "frozentower", ids: [3020] },
  { kind: "mapItem", questId: 3921, map: "frozentower", ids: [3017, 6] },
  { kind: "mapItem", questId: 3924, map: "frozentower", ids: [3009, 6] },
  { kind: "mapItem", questId: 3925, map: "frozentower", ids: [3012, 4] },
  { kind: "mapItem", questId: 3925, map: "frozentower", ids: [3011, 4] },
  { kind: "mapItem", questId: 3926, map: "frozentower", ids: [3021] },
  { kind: "mapItem", questId: 3927, map: "frozentower", ids: [3014, 7] },
  { kind: "mapItem", questId: 3932, map: "frozentower", ids: [3016, 13] },
  { kind: "mapItem", questId: 3935, map: "frozentower", ids: [3018, 13] },
  { kind: "mapItem", questId: 3945, map: "frozenruins", ids: [3050, 10] },
  { kind: "mapItem", questId: 3949, map: "glacera", ids: [3049, 6] },
  { kind: "mapItem", questId: 3950, map: "glacera", ids: [3047] },
  { kind: "mapItem", questId: 3972, map: "northstar", ids: [3063, 10] },
  { kind: "mapItem", questId: 5587, map: "icewindpass", ids: [5074, 5] },
  { kind: "mapItem", questId: 5589, map: "icewindpass", ids: [5075, 5] },
  { kind: "kill", questId: 48, map: "guru", monsters: ["Trobble"] },
  { kind: "kill", questId: 49, map: "guru", monsters: ["LeatherWing"] },
  { kind: "kill", questId: 51, map: "river", monsters: ["River Fishman"] },
  { kind: "kill", questId: 52, map: "guru", monsters: ["Wisteria"] },
  { kind: "kill", questId: 53, map: "guru", monsters: ["Wisteria"] },
  { kind: "mapItem", questId: 47, map: "guru", ids: [20, 10] },
  { kind: "kill", questId: 5777, map: "iceplane", monsters: ["Spirit of Ice"] },
  {
    kind: "kill",
    questId: 5778,
    map: "iceplane",
    monsters: ["Frozen Jellyfish"]
  },
  {
    kind: "kill",
    questId: 5780,
    map: "iceplane",
    monsters: ["Crystalline Shade"]
  },
  { kind: "kill", questId: 5781, map: "iceplane", monsters: ["Frostblade"] },
  { kind: "kill", questId: 5782, map: "iceplane", monsters: ["Animus of Ice"] },
  { kind: "kill", questId: 5783, map: "iceplane", monsters: ["Enfield"] },
  { kind: "mapItem", questId: 5778, map: "iceplane", ids: [5218] },
  { kind: "mapItem", questId: 5779, map: "iceplane", ids: [5219, 5220] },
  { kind: "mapItem", questId: 5780, map: "iceplane", ids: [5221] },
  { kind: "kill", questId: 698, map: "forest", monsters: ["Zardman Grunt"] },
  { kind: "kill", questId: 699, map: "boxes", monsters: ["Sneeviltron"] },
  { kind: "kill", questId: 1171, map: "moonyard", monsters: ["Junkyard Wall"] },
  { kind: "kill", questId: 1173, map: "moonyardb", monsters: ["Robo Guard"] },
  {
    kind: "kill",
    questId: 1177,
    map: "marsh2",
    monsters: ["Lesser Shadow Serpent"]
  },
  { kind: "kill", questId: 1178, map: "marsh2", monsters: ["Lesser Groglurk"] },
  { kind: "kill", questId: 2173, map: "djinn", monsters: ["Harpy"] },
  { kind: "kill", questId: 2841, map: "alley", monsters: ["Trash Can"] },
  { kind: "kill", questId: 2842, map: "alley", monsters: ["Thug Bully"] },
  { kind: "kill", questId: 2843, map: "alley", monsters: ["Thug Bully"] },
  { kind: "kill", questId: 2849, map: "alley", monsters: ["Thug Boss"] },
  {
    kind: "kill",
    questId: 2844,
    map: "alley",
    monsters: ["Security Cam", "Guard Robot"]
  },
  { kind: "kill", questId: 2845, map: "alley", monsters: ["Guard Dog Robot"] },
  { kind: "kill", questId: 2846, map: "alley", monsters: ["Guard Dog Robot"] },
  { kind: "kill", questId: 2851, map: "alley", monsters: ["Thug Minion"] },
  { kind: "mapItem", questId: 694, map: "zephyrus", ids: [116, 117] },
  { kind: "mapItem", questId: 1172, map: "moonyard", ids: [495] },
  { kind: "mapItem", questId: 2837, map: "hyperspace", ids: [1742] },
  { kind: "mapItem", questId: 2838, map: "hyperspace", ids: [1743] },
  { kind: "mapItem", questId: 2839, map: "hyperspace", ids: [1744] },
  { kind: "mapItem", questId: 2840, map: "hyperspace", ids: [1745] },
  { kind: "mapItem", questId: 2850, map: "hyperspace", ids: [1751] },
  { kind: "mapItem", questId: 2852, map: "hyperspace", ids: [1749] },
  { kind: "chain", questId: 674 },
  { kind: "chain", questId: 693 },
  { kind: "chain", questId: 2168 },
  { kind: "chain", questId: 2169 },
  { kind: "chain", questId: 2170 },
  { kind: "chain", questId: 2171 },
  { kind: "chain", questId: 2856 },
  { kind: "chain", questId: 2858 },
  { kind: "mapItem", questId: 9944, map: "laewed", ids: [13769, 13770] },
  { kind: "mapItem", questId: 9946, map: "laewed", ids: [13771, 13772] },
  { kind: "mapItem", questId: 9948, map: "laewed", ids: [13773, 13774] },
  { kind: "mapItem", questId: 9949, map: "laewed", ids: [13775] },
  { kind: "mapItem", questId: 9950, map: "laewed", ids: [13776] },
  { kind: "kill", questId: 109, map: "lair", monsters: ["Wyvern"] },
  { kind: "kill", questId: 110, map: "lair", monsters: ["Wyvern"] },
  { kind: "kill", questId: 111, map: "lair", monsters: ["Wyvern"] },
  { kind: "kill", questId: 169, map: "lair", monsters: ["Wyvern"] },
  { kind: "kill", questId: 165, map: "lair", monsters: ["Wyvern"] },
  { kind: "kill", questId: 166, map: "lair", monsters: ["Bronze Draconian"] },
  { kind: "kill", questId: 167, map: "lair", monsters: ["Dark Draconian"] },
  { kind: "kill", questId: 168, map: "lair", monsters: ["Red Dragon"] },
  { kind: "kill", questId: 1492, map: "lair", monsters: ["Bronze Draconian"] },
  { kind: "kill", questId: 1494, map: "lair", monsters: ["Red Dragon"] },
  { kind: "kill", questId: 1504, map: "lair", monsters: ["Wyvern"] },
  { kind: "kill", questId: 1505, map: "lair", monsters: ["Bronze Draconian"] },
  { kind: "kill", questId: 1506, map: "lair", monsters: ["Dark Draconian"] },
  { kind: "kill", questId: 1507, map: "lair", monsters: ["Onyx Lava Dragon"] },
  { kind: "mapItem", questId: 1493, map: "lair", ids: [755, 10] },
  { kind: "mapItem", questId: 1495, map: "lair", ids: [753] },
  { kind: "mapItem", questId: 1503, map: "lair", ids: [754, 12] },
  { kind: "chain", questId: 1502 },
  {
    kind: "kill",
    questId: 2032,
    map: "doomwood",
    monsters: ["Doomwood Treeant"]
  },
  {
    kind: "kill",
    questId: 2033,
    map: "doomwood",
    monsters: ["Doomwood Bonemuncher", "Doomwood Ectomancer"]
  },
  {
    kind: "kill",
    questId: 2034,
    map: "doomwood",
    monsters: ["Doomwood Bonemuncher"]
  },
  {
    kind: "kill",
    questId: 2036,
    map: "lightguard",
    monsters: ["Mysterious Spirit"]
  },
  { kind: "mapItem", questId: 2031, map: "doomwood", ids: [983] },
  { kind: "mapItem", questId: 2035, map: "lightguard", ids: [982] },
  {
    kind: "kill",
    questId: 7132,
    map: "lightoviacave",
    monsters: ["Imbalanced Knight"]
  },
  {
    kind: "kill",
    questId: 7133,
    map: "lightoviacave",
    monsters: ["Imbalanced Mage"]
  },
  {
    kind: "kill",
    questId: 7135,
    map: "lightoviacave",
    monsters: ["Imbalanced Knight"]
  },
  {
    kind: "kill",
    questId: 7136,
    map: "lightoviacave",
    monsters: ["Evil ArchMage Brentan"]
  },
  { kind: "mapItem", questId: 7133, map: "lightoviacave", ids: [6767, 6] },
  { kind: "mapItem", questId: 7134, map: "lightoviacave", ids: [6768, 6] },
  {
    kind: "kill",
    questId: 9561,
    map: "lostvilla",
    monsters: ["Eldritch Parasite"]
  },
  { kind: "kill", questId: 9562, map: "lostvilla", monsters: ["Gorewyrm"] },
  {
    kind: "kill",
    questId: 9563,
    map: "lostvilla",
    monsters: ["Eldritch Parasite"]
  },
  {
    kind: "kill",
    questId: 9564,
    map: "lostvilla",
    monsters: ["Diabolical Hoard"]
  },
  {
    kind: "kill",
    questId: 9565,
    map: "lostvilla",
    monsters: ["Gorewyrm", "Eldritch Parasite"]
  },
  {
    kind: "kill",
    questId: 9566,
    map: "lostvilla",
    monsters: ["Diabolical Hoard"]
  },
  {
    kind: "kill",
    questId: 9567,
    map: "noxustower",
    monsters: ["Lightguard Caster"]
  },
  {
    kind: "kill",
    questId: 9568,
    map: "lostvilla",
    monsters: ["Mutilated Atrocity"]
  },
  {
    kind: "kill",
    questId: 9569,
    map: "lostvilla",
    monsters: ["Eldritch Parasite"]
  },
  {
    kind: "kill",
    questId: 9570,
    map: "lostvilla",
    monsters: ["Covetous Disgrace"]
  },
  { kind: "mapItem", questId: 9561, map: "lostvilla", ids: [12649, 12650] },
  { kind: "mapItem", questId: 9563, map: "lostvilla", ids: [12651] },
  { kind: "mapItem", questId: 9564, map: "lostvilla", ids: [12652, 3] },
  { kind: "mapItem", questId: 9566, map: "lostvilla", ids: [12653] },
  { kind: "mapItem", questId: 9567, map: "lostvilla", ids: [12654] },
  { kind: "kill", questId: 1058, map: "manor", monsters: ["Amethyst Golem"] },
  { kind: "kill", questId: 1060, map: "manor", monsters: ["Frigid Frogdrake"] },
  { kind: "kill", questId: 1062, map: "manor", monsters: ["Bird of Paradise"] },
  { kind: "mapItem", questId: 1059, map: "manor", ids: [403, 10] },
  { kind: "mapItem", questId: 1060, map: "manor", ids: [402] },
  { kind: "mapItem", questId: 1061, map: "manor", ids: [404, 10] },
  {
    kind: "kill",
    questId: 1475,
    map: "marsh2",
    monsters: ["Undead Berserker"]
  },
  {
    kind: "kill",
    questId: 1476,
    map: "marsh2",
    monsters: ["Ghoul", "Marsh Lurker"]
  },
  {
    kind: "kill",
    questId: 1477,
    map: "marsh2",
    monsters: ["Lich", "Lesser Shadow Serpent"]
  },
  {
    kind: "kill",
    questId: 1478,
    map: "marsh2",
    monsters: ["Thrax Ironhide", "Lesser Groglurk"]
  },
  {
    kind: "kill",
    questId: 1480,
    map: "marsh2",
    monsters: ["Marsh Vault Guardian"]
  },
  { kind: "mapItem", questId: 1474, map: "marsh2", ids: [720, 8] },
  { kind: "mapItem", questId: 1479, map: "marsh2", ids: [723] },
  { kind: "mapItem", questId: 1481, map: "marsh2", ids: [721] },
  { kind: "kill", questId: 90, map: "pirates", monsters: ["Fishman Soldier"] },
  {
    kind: "kill",
    questId: 92,
    map: "greenguardwest",
    monsters: ["Breken the Vile", "Ogug Stoneaxe"]
  },
  { kind: "kill", questId: 2367, map: "mobius", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 2368, map: "mobius", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 2370, map: "mobius", monsters: ["Slugfit"] },
  { kind: "kill", questId: 2372, map: "guru", monsters: ["Wisteria"] },
  { kind: "kill", questId: 2373, map: "natatorium", monsters: ["Marianus"] },
  { kind: "kill", questId: 2374, map: "pines", monsters: ["Pine Troll"] },
  {
    kind: "kill",
    questId: 2375,
    map: "greendragon",
    monsters: ["Greenguard Dragon"]
  },
  { kind: "kill", questId: 2355, map: "mobius", monsters: ["Chaos Sp-eye"] },
  { kind: "kill", questId: 2357, map: "mobius", monsters: ["Chaos Sp-eye"] },
  { kind: "kill", questId: 2359, map: "mobius", monsters: ["Slugfit"] },
  { kind: "kill", questId: 2361, map: "guru", monsters: ["Wisteria"] },
  { kind: "kill", questId: 2362, map: "natatorium", monsters: ["Marianus"] },
  { kind: "kill", questId: 2363, map: "pines", monsters: ["Pine Troll"] },
  {
    kind: "kill",
    questId: 2364,
    map: "greendragon",
    monsters: ["Greenguard Dragon"]
  },
  { kind: "kill", questId: 3366, map: "mobius", monsters: ["Chaos Sp-eye"] },
  { kind: "kill", questId: 3367, map: "mobius", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 3368, map: "mobius", monsters: ["Cyclops Raider"] },
  { kind: "kill", questId: 3369, map: "faerie", monsters: ["Cyclops Warlord"] },
  { kind: "mapItem", questId: 2365, map: "mobius", ids: [1465] },
  { kind: "mapItem", questId: 2366, map: "mobius", ids: [1463, 10] },
  { kind: "mapItem", questId: 2369, map: "mobius", ids: [1464, 10] },
  { kind: "mapItem", questId: 2371, map: "mobius", ids: [1466] },
  { kind: "mapItem", questId: 2354, map: "mobius", ids: [1465] },
  { kind: "mapItem", questId: 2356, map: "mobius", ids: [1461, 10] },
  { kind: "mapItem", questId: 2358, map: "mobius", ids: [1462, 10] },
  { kind: "mapItem", questId: 2360, map: "mobius", ids: [1466] },
  { kind: "mapItem", questId: 3370, map: "mobius", ids: [2504, 6] },
  {
    kind: "kill",
    questId: 7034,
    map: "redfurvalley",
    monsters: ["Guard Drone"]
  },
  {
    kind: "kill",
    questId: 7035,
    map: "redfurvalley",
    monsters: ["Harvester Drone"]
  },
  { kind: "kill", questId: 7036, map: "redfurvalley", monsters: ["Spy Drone"] },
  { kind: "kill", questId: 7039, map: "mustycave", monsters: ["Guard Drone"] },
  {
    kind: "kill",
    questId: 7041,
    map: "mustycave",
    monsters: ["Harvester Drone"]
  },
  { kind: "kill", questId: 7042, map: "mustycave", monsters: ["Spy Drone"] },
  { kind: "kill", questId: 7043, map: "nibbleon", monsters: ["Void Mage"] },
  { kind: "kill", questId: 7045, map: "mustycave", monsters: ["Guard Drone"] },
  { kind: "kill", questId: 7046, map: "mustycave", monsters: ["Guard Drone"] },
  { kind: "kill", questId: 7048, map: "mustycave", monsters: ["Mogdring"] },
  { kind: "mapItem", questId: 7038, map: "mustycave", ids: [6588] },
  { kind: "mapItem", questId: 7039, map: "mustycave", ids: [6589] },
  { kind: "mapItem", questId: 7040, map: "mustycave", ids: [6590, 6] },
  {
    kind: "mapItem",
    questId: 7044,
    map: "mustycave",
    ids: [6591, 6592, 6593, 6594]
  },
  { kind: "mapItem", questId: 7047, map: "mustycave", ids: [6595] },
  {
    kind: "kill",
    questId: 32,
    map: "noobshire",
    monsters: ["Kittarian Mouse Eater"]
  },
  { kind: "kill", questId: 33, map: "noobshire", monsters: ["Horc Noob"] },
  {
    kind: "kill",
    questId: 35,
    map: "noobshire",
    monsters: ["Kittarian Mouse Eater"]
  },
  {
    kind: "kill",
    questId: 36,
    map: "noobshire",
    monsters: ["Kittarian Mouse Flayer"]
  },
  { kind: "kill", questId: 37, map: "noobshire", monsters: ["Horc Noob"] },
  { kind: "kill", questId: 38, map: "noobshire", monsters: ["Horc Trainer"] },
  { kind: "kill", questId: 39, map: "noobshire", monsters: ["Horc Noob"] },
  { kind: "kill", questId: 117, map: "tutor", monsters: ["Horc Noob"] },
  {
    kind: "kill",
    questId: 118,
    map: "tutor",
    monsters: ["Horc Tutor Trainer"]
  },
  { kind: "kill", questId: 2188, map: "orctown", monsters: ["General Porkon"] },
  { kind: "kill", questId: 2189, map: "noobshire", monsters: ["Horc Noob"] },
  {
    kind: "kill",
    questId: 2192,
    map: "bloodtusk",
    monsters: ["Horc Boar Scout"]
  },
  { kind: "kill", questId: 2193, map: "bloodtusk", monsters: ["Rhison"] },
  {
    kind: "kill",
    questId: 2195,
    map: "sandport",
    monsters: ["Horc Sell-Sword"]
  },
  { kind: "kill", questId: 2196, map: "giant", monsters: ["Giant Cat"] },
  { kind: "mapItem", questId: 33, map: "noobshire", ids: [11, 6] },
  { kind: "mapItem", questId: 39, map: "noobshire", ids: [12] },
  { kind: "mapItem", questId: 2191, map: "bloodtusk", ids: [1270] },
  { kind: "mapItem", questId: 2194, map: "noobshire", ids: [1271] },
  {
    kind: "kill",
    questId: 1589,
    map: "akiba",
    monsters: ["Kage Nopperabo"]
  },
  {
    kind: "kill",
    questId: 1590,
    map: "akiba",
    monsters: ["Kage Nopperabo"]
  },
  {
    kind: "kill",
    questId: 1592,
    map: "akiba",
    monsters: ["Shadow Nukemichi"]
  },
  { kind: "mapItem", questId: 1587, map: "akiba", ids: [794, 10] },
  { kind: "mapItem", questId: 1588, map: "akiba", ids: [795] },
  { kind: "mapItem", questId: 1591, map: "akiba", ids: [796, 8] },
  { kind: "kill", questId: 437, map: "northlands", monsters: ["Snow Golem"] },
  { kind: "kill", questId: 438, map: "northlands", monsters: ["Snow Golem"] },
  {
    kind: "kill",
    questId: 439,
    map: "northlands",
    monsters: ["Snow Golem", "Snow Golem", "Snow Golem"]
  },
  { kind: "kill", questId: 440, map: "northlands", monsters: ["Snow Golem"] },
  {
    kind: "kill",
    questId: 443,
    map: "northlands",
    monsters: ["Water Draconian"]
  },
  {
    kind: "kill",
    questId: 444,
    map: "northlands",
    monsters: ["Aisha's Drake"]
  },
  {
    kind: "kill",
    questId: 447,
    map: "kingcoal",
    monsters: ["Snow Golem", "Ice Elemental"]
  },
  { kind: "kill", questId: 448, map: "kingcoal", monsters: ["Snow Golem"] },
  { kind: "kill", questId: 449, map: "kingcoal", monsters: ["Snow Golem"] },
  { kind: "kill", questId: 450, map: "swallowed", monsters: ["Germs"] },
  { kind: "kill", questId: 451, map: "swallowed", monsters: ["Germs"] },
  { kind: "kill", questId: 452, map: "swallowed", monsters: ["Germs"] },
  { kind: "kill", questId: 453, map: "swallowed", monsters: ["Germs"] },
  { kind: "kill", questId: 454, map: "swallowed", monsters: ["Germs"] },
  { kind: "kill", questId: 455, map: "swallowed", monsters: ["Rhinovirus"] },
  { kind: "kill", questId: 899, map: "blindingsnow", monsters: ["Nythera"] },
  {
    kind: "kill",
    questId: 900,
    map: "blindingsnow",
    monsters: ["Chaorrupted Wolf"]
  },
  { kind: "kill", questId: 901, map: "void", monsters: ["Void Larva"] },
  { kind: "kill", questId: 902, map: "void", monsters: ["Void Elemental"] },
  {
    kind: "kill",
    questId: 903,
    map: "palooza",
    monsters: ["Discordia", "Discordia", "Discordia", "Discordia"]
  },
  { kind: "kill", questId: 904, map: "void", monsters: ["Void Dragon"] },
  { kind: "mapItem", questId: 437, map: "northlands", ids: [77] },
  { kind: "mapItem", questId: 8690, map: "northlands", ids: [80] },
  { kind: "mapItem", questId: 8689, map: "northlands", ids: [10205] },
  {
    kind: "kill",
    questId: 1535,
    map: "pirates",
    monsters: ["Undead Pirate"]
  },
  {
    kind: "kill",
    questId: 1537,
    map: "pirates",
    monsters: ["Undead Pirate"]
  },
  {
    kind: "kill",
    questId: 1538,
    map: "pirates",
    monsters: ["Undead Pirate"]
  },
  {
    kind: "kill",
    questId: 1539,
    map: "pirates",
    monsters: ["Undead Pirate"]
  },
  {
    kind: "kill",
    questId: 1541,
    map: "pirates",
    monsters: ["Undead Pirate"]
  },
  { kind: "mapItem", questId: 1534, map: "pirates", ids: [769, 3] },
  { kind: "mapItem", questId: 1536, map: "pirates", ids: [770] },
  { kind: "mapItem", questId: 1540, map: "pirates", ids: [771, 10] },
  { kind: "mapItem", questId: 1541, map: "pirates", ids: [772, 10] },
  {
    kind: "kill",
    questId: 1948,
    map: "poisonforest",
    monsters: ["Marsh Lurker", "Traitor Knight"]
  },
  {
    kind: "kill",
    questId: 1952,
    map: "poisonforest",
    monsters: ["Burning Loyalist"]
  },
  {
    kind: "kill",
    questId: 1954,
    map: "poisonforest",
    monsters: ["Traitor Knight"]
  },
  {
    kind: "kill",
    questId: 1955,
    map: "poisonforest",
    monsters: ["Xavier Lionfang"]
  },
  { kind: "mapItem", questId: 1948, map: "poisonforest", ids: [964, 3] },
  { kind: "mapItem", questId: 1948, map: "poisonforest", ids: [965, 3] },
  { kind: "mapItem", questId: 1954, map: "poisonforest", ids: [970] },
  { kind: "mapItem", questId: 1955, map: "poisonforest", ids: [969, 11] },
  {
    kind: "kill",
    questId: 8302,
    map: "queenreign",
    monsters: ["Samurai Nopperabo"]
  },
  {
    kind: "kill",
    questId: 8303,
    map: "queenreign",
    monsters: ["Shadow Samurai"]
  },
  {
    kind: "kill",
    questId: 8305,
    map: "queenreign",
    monsters: ["Tsukumo-Gami"]
  },
  {
    kind: "kill",
    questId: 8306,
    map: "queenreign",
    monsters: ["Jaaku's Shadow"]
  },
  {
    kind: "kill",
    questId: 8307,
    map: "queenreign",
    monsters: ["Jaaku's Shadow"]
  },
  { kind: "kill", questId: 8308, map: "queenreign", monsters: ["Jaaku"] },
  {
    kind: "kill",
    questId: 8309,
    map: "queenreign",
    monsters: ["Plague Spreader"]
  },
  { kind: "kill", questId: 8311, map: "queenreign", monsters: ["Plaguemoss"] },
  {
    kind: "kill",
    questId: 8312,
    map: "queenreign",
    monsters: ["Plague Spreader"]
  },
  {
    kind: "kill",
    questId: 8313,
    map: "queenreign",
    monsters: ["Plague Spreader"]
  },
  { kind: "kill", questId: 8314, map: "queenreign", monsters: ["Extriki"] },
  {
    kind: "kill",
    questId: 8315,
    map: "queenreign",
    monsters: ["Calcified Amethite"]
  },
  {
    kind: "kill",
    questId: 8317,
    map: "queenreign",
    monsters: ["Calcified Wyrm"]
  },
  {
    kind: "kill",
    questId: 8318,
    map: "queenreign",
    monsters: ["Calcified Remains"]
  },
  { kind: "kill", questId: 8319, map: "queenreign", monsters: ["Grou'luu"] },
  {
    kind: "kill",
    questId: 8320,
    map: "queenreign",
    monsters: ["Water Goblin"]
  },
  {
    kind: "kill",
    questId: 8321,
    map: "queenreign",
    monsters: ["Sa-Laatan Spawn"]
  },
  {
    kind: "kill",
    questId: 8322,
    map: "queenreign",
    monsters: ["Sa-Laatan Spawn"]
  },
  {
    kind: "kill",
    questId: 8324,
    map: "queenreign",
    monsters: ["Water Goblin"]
  },
  { kind: "kill", questId: 8325, map: "queenreign", monsters: ["Sa-Laatan"] },
  { kind: "mapItem", questId: 8304, map: "queenreign", ids: [9120] },
  { kind: "mapItem", questId: 8310, map: "queenreign", ids: [9121, 4] },
  { kind: "mapItem", questId: 8312, map: "queenreign", ids: [9122, 4] },
  { kind: "mapItem", questId: 8316, map: "queenreign", ids: [9123, 4] },
  { kind: "mapItem", questId: 8318, map: "queenreign", ids: [9124] },
  { kind: "mapItem", questId: 8323, map: "queenreign", ids: [9125, 5] },
  {
    kind: "kill",
    questId: 5878,
    map: "quibblehunt",
    monsters: ["Void Larva"]
  },
  {
    kind: "kill",
    questId: 5879,
    map: "quibblehunt",
    monsters: ["Aerodu Defense Machine", "Nimbo"]
  },
  {
    kind: "kill",
    questId: 5880,
    map: "quibblehunt",
    monsters: ["Void Elemental"]
  },
  {
    kind: "kill",
    questId: 5881,
    map: "quibblehunt",
    monsters: ["Entropy Dragon"]
  },
  {
    kind: "kill",
    questId: 5882,
    map: "quibblehunt",
    monsters: ["Void Elemental"]
  },
  {
    kind: "kill",
    questId: 5883,
    map: "quibblehunt",
    monsters: ["Jimmy the Eye-Pod", "Master Twang"]
  },
  {
    kind: "kill",
    questId: 5884,
    map: "quibblehunt",
    monsters: ["Void Elemental"]
  },
  {
    kind: "kill",
    questId: 5885,
    map: "quibblehunt",
    monsters: ["RogueFiend"]
  },
  {
    kind: "kill",
    questId: 5886,
    map: "quibblehunt",
    monsters: ["Void Elemental"]
  },
  {
    kind: "kill",
    questId: 5887,
    map: "quibblehunt",
    monsters: ["Braken Tentacle", "Jellyfish", "Braken Tentacle"]
  },
  {
    kind: "kill",
    questId: 5888,
    map: "quibblehunt",
    monsters: ["Void Elemental"]
  },
  { kind: "kill", questId: 5890, map: "quibblehunt", monsters: ["Clawg"] },
  { kind: "kill", questId: 5891, map: "quibblehunt", monsters: ["Dricken"] },
  { kind: "mapItem", questId: 5889, map: "quibblehunt", ids: [5311] },
  {
    kind: "kill",
    questId: 3439,
    map: "twilightedge",
    monsters: ["ChaosWeaver Warrior"]
  },
  {
    kind: "kill",
    questId: 3450,
    map: "ravenloss",
    monsters: ["ChaosWeaver Magi"]
  },
  {
    kind: "kill",
    questId: 3451,
    map: "ravenloss",
    monsters: ["ChaosWeaver Knight"]
  },
  {
    kind: "kill",
    questId: 3453,
    map: "ravenloss",
    monsters: ["Weaver Queen's Hound"]
  },
  {
    kind: "kill",
    questId: 3454,
    map: "ravenloss",
    monsters: ["ChaosWeaver Knight"]
  },
  {
    kind: "kill",
    questId: 3455,
    map: "ravenloss",
    monsters: ["ChaosWeaver Knight"]
  },
  {
    kind: "kill",
    questId: 3456,
    map: "ravenloss",
    monsters: ["ChaosWeaver Magi"]
  },
  {
    kind: "kill",
    questId: 3457,
    map: "ravenloss",
    monsters: ["ChaosWeaver Magi"]
  },
  {
    kind: "kill",
    questId: 3459,
    map: "ravenloss",
    monsters: ["Evolved Dreadspider"]
  },
  {
    kind: "kill",
    questId: 3460,
    map: "chaosweb",
    monsters: ["ChaosWeaver Cleric"]
  },
  { kind: "mapItem", questId: 3428, map: "twilightedge", ids: [2577] },
  { kind: "mapItem", questId: 3452, map: "ravenloss", ids: [2594] },
  { kind: "mapItem", questId: 3458, map: "ravenloss", ids: [2595] },
  { kind: "kill", questId: 63, map: "river", monsters: ["River Fishman"] },
  { kind: "kill", questId: 64, map: "river", monsters: ["Zardman Fisher"] },
  { kind: "kill", questId: 65, map: "river", monsters: ["Zardman Fisher"] },
  { kind: "kill", questId: 66, map: "river", monsters: ["Kuro"] },
  { kind: "kill", questId: 72, map: "river", monsters: ["Kuro"] },
  { kind: "kill", questId: 74, map: "shallow", monsters: ["Water Elemental"] },
  {
    kind: "kill",
    questId: 1939,
    map: "safiria",
    monsters: ["Chaos Lycan"]
  },
  {
    kind: "kill",
    questId: 1940,
    map: "safiria",
    monsters: ["Blood Maggot"]
  },
  {
    kind: "kill",
    questId: 1941,
    map: "safiria",
    monsters: ["Chaos Lycan"]
  },
  {
    kind: "kill",
    questId: 1947,
    map: "battledoom",
    monsters: ["Shadow Safiria"]
  },
  { kind: "mapItem", questId: 1942, map: "safiria", ids: [962, 4] },
  {
    kind: "kill",
    questId: 3285,
    map: "shadowgates",
    monsters: ["Chaorrupted Rogue"]
  },
  {
    kind: "kill",
    questId: 3286,
    map: "shadowgates",
    monsters: ["Chaorrupted Mage"]
  },
  {
    kind: "kill",
    questId: 3287,
    map: "shadowgates",
    monsters: ["Chaos Warrior"]
  },
  {
    kind: "kill",
    questId: 3288,
    map: "shadowgates",
    monsters: ["Chaorrupted Rogue"]
  },
  {
    kind: "kill",
    questId: 3290,
    map: "shadowgates",
    monsters: ["Chaorrupted Mage"]
  },
  {
    kind: "kill",
    questId: 3292,
    map: "shadowgates",
    monsters: ["Chaorruption"]
  },
  { kind: "mapItem", questId: 3289, map: "shadowgates", ids: [2327] },
  { kind: "mapItem", questId: 3291, map: "shadowgates", ids: [2328] },
  {
    kind: "kill",
    questId: 8831,
    map: "newfinale",
    monsters: ["Shadow Slayer"]
  },
  {
    kind: "kill",
    questId: 8834,
    map: "elemental",
    monsters: ["Tree of Destiny"]
  },
  { kind: "mapItem", questId: 9839, map: "badmoon", ids: [13445, 13447] },
  { kind: "mapItem", questId: 9842, map: "badmoon", ids: [13448, 3] },
  { kind: "mapItem", questId: 9842, map: "badmoon", ids: [13449] },
  { kind: "chain", questId: 746 },
  {
    kind: "kill",
    questId: 6782,
    map: "shadowvault",
    monsters: ["Fallen Adventurer"]
  },
  {
    kind: "kill",
    questId: 6783,
    map: "shadowvault",
    monsters: ["Shadowscythe Minion", "Fallen Adventurer"]
  },
  {
    kind: "kill",
    questId: 6784,
    map: "shadowvault",
    monsters: ["Shadowscythe Guard"]
  },
  {
    kind: "kill",
    questId: 6788,
    map: "shadowvault",
    monsters: ["Spiderscythe", "Shadowscythe Minion"]
  },
  {
    kind: "kill",
    questId: 6789,
    map: "shadowvault",
    monsters: ["Fallen Adventurer", "Spiderscythe", "Shadowscythe Minion"]
  },
  {
    kind: "kill",
    questId: 6790,
    map: "shadowvault",
    monsters: ["Shadowstryke"]
  },
  { kind: "kill", questId: 6791, map: "shadowvault", monsters: ["Darkness"] },
  {
    kind: "kill",
    questId: 6793,
    map: "shadowvault",
    monsters: ["Ancient Doomknight"]
  },
  { kind: "mapItem", questId: 6781, map: "shadowvault", ids: [6310] },
  { kind: "mapItem", questId: 6787, map: "shadowvault", ids: [6312] },
  { kind: "mapItem", questId: 6788, map: "shadowvault", ids: [6313] },
  { kind: "mapItem", questId: 6790, map: "shadowvault", ids: [6314] },
  { kind: "mapItem", questId: 6791, map: "shadowvault", ids: [6315, 5] },
  { kind: "mapItem", questId: 6792, map: "shadowvault", ids: [6316] },
  {
    kind: "kill",
    questId: 7123,
    map: "shadowvoid",
    monsters: ["Light Matter"]
  },
  {
    kind: "kill",
    questId: 7124,
    map: "shadowvoid",
    monsters: ["Shadowsprite"]
  },
  {
    kind: "kill",
    questId: 7125,
    map: "shadowvoid",
    monsters: ["Light Matter"]
  },
  {
    kind: "kill",
    questId: 7126,
    map: "shadowvoid",
    monsters: ["Shadowfiend"]
  },
  {
    kind: "kill",
    questId: 7127,
    map: "shadowvoid",
    monsters: ["Shadowfiend"]
  },
  {
    kind: "kill",
    questId: 7128,
    map: "shadowvoid",
    monsters: ["Shadowfiend", "Light Matter"]
  },
  {
    kind: "kill",
    questId: 7130,
    map: "shadowvoid",
    monsters: ["Light Matter"]
  },
  {
    kind: "kill",
    questId: 7131,
    map: "shadowvoid",
    monsters: ["Fragment of Doom"]
  },
  { kind: "mapItem", questId: 7129, map: "shadowvoid", ids: [6765] },
  { kind: "mapItem", questId: 7130, map: "shadowvoid", ids: [6766] },
  {
    kind: "kill",
    questId: 8116,
    map: "shinkansen",
    monsters: ["Temptation 1"]
  },
  { kind: "kill", questId: 8117, map: "shinkansen", monsters: ["Trash Pile"] },
  { kind: "kill", questId: 8118, map: "shinkansen", monsters: ["Civilian"] },
  {
    kind: "kill",
    questId: 8121,
    map: "shinkansen",
    monsters: ["Crystallis Soldier"]
  },
  {
    kind: "kill",
    questId: 8122,
    map: "shinkansen",
    monsters: ["Crystallis Soldier"]
  },
  {
    kind: "kill",
    questId: 8123,
    map: "shinkansen",
    monsters: ["Saint Apa", "Saint Eta"]
  },
  {
    kind: "kill",
    questId: 8124,
    map: "shinkansen",
    monsters: ["Crystallis Soldier"]
  },
  { kind: "mapItem", questId: 8116, map: "shinkansen", ids: [8496, 3] },
  { kind: "chain", questId: 8120 },
  { kind: "chain", questId: 8119 },
  {
    kind: "kill",
    questId: 883,
    map: "airship",
    monsters: ["Sky Pirate Draconian"]
  },
  {
    kind: "kill",
    questId: 885,
    map: "airship",
    monsters: ["Rehydrated Gell Oh No"]
  },
  {
    kind: "kill",
    questId: 886,
    map: "airship",
    monsters: ["Sky Pirate Dragon"]
  },
  {
    kind: "kill",
    questId: 887,
    map: "airship",
    monsters: ["Sky Pirate Draconian", "Rehydrated Gell Oh No", "Sky Pirate Dragon"]
  },
  { kind: "kill", questId: 888, map: "airship", monsters: ["Gladius"] },
  {
    kind: "kill",
    questId: 1039,
    map: "academy",
    monsters: ["Chaobold", "Bronze Sky Pirate"]
  },
  { kind: "kill", questId: 1041, map: "academy", monsters: ["Inbunche"] },
  {
    kind: "kill",
    questId: 1104,
    map: "anders",
    monsters: ["Dravir", "Copper Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 1105,
    map: "anders",
    monsters: ["Dravir", "Copper Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 1106,
    map: "anders",
    monsters: ["Copper Sky Pirate", "Copper Sky Pirate", "Dravir"]
  },
  { kind: "kill", questId: 1107, map: "anders", monsters: ["Iron Hoof"] },
  {
    kind: "kill",
    questId: 1222,
    map: "dreammaze",
    monsters: ["Nightmare Lieutenant"]
  },
  {
    kind: "kill",
    questId: 1286,
    map: "strategy",
    monsters: ["Dravir Pirate"]
  },
  {
    kind: "kill",
    questId: 1289,
    map: "strategy",
    monsters: ["Dravir Pirate Captain"]
  },
  {
    kind: "kill",
    questId: 1290,
    map: "strategy",
    monsters: ["Dravir Pirate", "Dravir Pirate", "Dravir Pirate", "Dravir Pirate", "Dravir Pirate"]
  },
  {
    kind: "kill",
    questId: 1697,
    map: "piratebase",
    monsters: ["Security Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 1698,
    map: "piratebase",
    monsters: ["Chaorrupted Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 1699,
    map: "piratebase",
    monsters: ["Chaorrupted Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 1700,
    map: "piratebase",
    monsters: ["Chaorrupted SkyGeneral"]
  },
  {
    kind: "kill",
    questId: 2038,
    map: "highcommand",
    monsters: ["Storagebox", "Bronze Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 2040,
    map: "highcommand",
    monsters: ["Bronze Sky Pirate", "Chaorrupted Invader"]
  },
  {
    kind: "kill",
    questId: 2041,
    map: "piratebase",
    monsters: ["Chaorrupted Sky Pirate", "Chaorrupted Sky Pirate"]
  },
  {
    kind: "kill",
    questId: 2042,
    map: "highcommand",
    monsters: ["M3CH4-D34TH"]
  },
  {
    kind: "kill",
    questId: 2252,
    map: "bunker",
    monsters: ["Chaos Beast Attempt"]
  },
  { kind: "kill", questId: 2487, map: "chaosguard", monsters: ["Exos"] },
  { kind: "mapItem", questId: 884, map: "airship", ids: [217, 10] },
  { kind: "mapItem", questId: 1038, map: "academy", ids: [399] },
  { kind: "mapItem", questId: 1039, map: "academy", ids: [400, 5] },
  { kind: "mapItem", questId: 1040, map: "academy", ids: [401, 15] },
  { kind: "mapItem", questId: 1105, map: "anders", ids: [439, 10] },
  { kind: "mapItem", questId: 1105, map: "anders", ids: [440, 2] },
  { kind: "mapItem", questId: 1106, map: "anders", ids: [441] },
  { kind: "mapItem", questId: 1215, map: "dreammaze", ids: [519] },
  { kind: "mapItem", questId: 1287, map: "strategy", ids: [558] },
  { kind: "mapItem", questId: 1288, map: "strategy", ids: [559] },
  { kind: "mapItem", questId: 1697, map: "piratebase", ids: [896, 14] },
  { kind: "mapItem", questId: 1697, map: "piratebase", ids: [895] },
  { kind: "mapItem", questId: 1698, map: "piratebase", ids: [897, 10] },
  { kind: "mapItem", questId: 2038, map: "highcommand", ids: [997, 4] },
  { kind: "mapItem", questId: 2039, map: "highcommand", ids: [1000] },
  { kind: "mapItem", questId: 2043, map: "highcommand", ids: [996, 10] },
  { kind: "mapItem", questId: 2043, map: "highcommand", ids: [998, 999] },
  { kind: "chain", questId: 889 },
  { kind: "chain", questId: 884 },
  { kind: "chain", questId: 2482 },
  {
    kind: "kill",
    questId: 6824,
    map: "dreadrock",
    monsters: ["Azal the Infernal"]
  },
  { kind: "kill", questId: 6825, map: "spirepast", monsters: ["Infernal Imp"] },
  { kind: "kill", questId: 6826, map: "spirepast", monsters: ["Infernal Imp"] },
  { kind: "kill", questId: 6827, map: "spirepast", monsters: ["Rookie Guard"] },
  { kind: "kill", questId: 6828, map: "spirepast", monsters: ["Infernal Imp"] },
  {
    kind: "kill",
    questId: 6829,
    map: "spirepast",
    monsters: ["Celestial Knight"]
  },
  {
    kind: "kill",
    questId: 6830,
    map: "spirepast",
    monsters: ["Celestial Knight"]
  },
  {
    kind: "kill",
    questId: 6831,
    map: "spirepast",
    monsters: ["Infernal Guard", "Infernal Hound"]
  },
  {
    kind: "kill",
    questId: 6832,
    map: "spirepast",
    monsters: ["Infernal Hound"]
  },
  {
    kind: "kill",
    questId: 6833,
    map: "spirepast",
    monsters: ["Celestial Knight"]
  },
  {
    kind: "kill",
    questId: 6834,
    map: "spirepast",
    monsters: ["Infernal Guard Captain"]
  },
  {
    kind: "kill",
    questId: 8015,
    map: "superdeath",
    monsters: ["Shadow Cave Yeti"]
  },
  {
    kind: "kill",
    questId: 8016,
    map: "superdeath",
    monsters: ["Shadow Cave Yeti", "Shadow Lava Crab", "Shadow Collector", "Shadow Cave Yeti"]
  },
  {
    kind: "kill",
    questId: 8017,
    map: "superdeath",
    monsters: ["Igneous Lava Crab"]
  },
  {
    kind: "kill",
    questId: 8018,
    map: "superdeath",
    monsters: ["Cinder Bender"]
  },
  { kind: "kill", questId: 8019, map: "superdeath", monsters: ["Hottica"] },
  {
    kind: "kill",
    questId: 8020,
    map: "superdeath",
    monsters: ["Slime Collector"]
  },
  { kind: "kill", questId: 8021, map: "superdeath", monsters: ["Slime Lord"] },
  { kind: "kill", questId: 8022, map: "superdeath", monsters: ["Electina"] },
  { kind: "kill", questId: 8023, map: "superdeath", monsters: ["Rider"] },
  {
    kind: "kill",
    questId: 8024,
    map: "superdeath",
    monsters: ["Blaster Master"]
  },
  {
    kind: "kill",
    questId: 8025,
    map: "superdeath",
    monsters: ["General Smash"]
  },
  { kind: "kill", questId: 8026, map: "superdeath", monsters: ["Cave Yeti"] },
  { kind: "kill", questId: 8027, map: "superdeath", monsters: ["Khali May"] },
  { kind: "kill", questId: 8028, map: "superdeath", monsters: ["Charries"] },
  {
    kind: "kill",
    questId: 8029,
    map: "superdeath",
    monsters: ["Shadow Cave Bandit"]
  },
  {
    kind: "kill",
    questId: 8030,
    map: "superdeath",
    monsters: ["Shadow Goo Pup", "Shadow Mutant", "Shadow Scorpion", "Shadow Cave Bandit"]
  },
  {
    kind: "kill",
    questId: 8031,
    map: "superdeath",
    monsters: ["Hottica", "Electina", "General Smash", "Charries"]
  },
  {
    kind: "kill",
    questId: 8032,
    map: "superdeath",
    monsters: ["Super Death"]
  },
  { kind: "mapItem", questId: 8016, map: "superdeath", ids: [8330] },
  {
    kind: "kill",
    questId: 8760,
    map: "titanattack",
    monsters: ["Corrosive Crawler", "Chaorrupted Bandit"]
  },
  {
    kind: "kill",
    questId: 8761,
    map: "titanattack",
    monsters: ["Supply Caravan"]
  },
  {
    kind: "kill",
    questId: 8762,
    map: "titanattack",
    monsters: ["Chaos Wyvern", "Corrosive Crawler"]
  },
  {
    kind: "kill",
    questId: 8763,
    map: "titanattack",
    monsters: ["Chaorrupted Bandit", "AntiTitan Corps"]
  },
  {
    kind: "kill",
    questId: 8765,
    map: "titanattack",
    monsters: ["AntiTitan Corps"]
  },
  {
    kind: "kill",
    questId: 8766,
    map: "titanattack",
    monsters: ["Corrosive Crawler", "Supply Caravan"]
  },
  {
    kind: "kill",
    questId: 8768,
    map: "titanattack",
    monsters: ["Corrosive Crawler"]
  },
  {
    kind: "kill",
    questId: 8771,
    map: "titanattack",
    monsters: ["Titanic Vindicator"]
  },
  {
    kind: "kill",
    questId: 8772,
    map: "titanattack",
    monsters: ["Titanic Paladin", "Titanic DoomKnight"]
  },
  {
    kind: "kill",
    questId: 8773,
    map: "titanstrike",
    monsters: ["Titanic Paladin"]
  },
  {
    kind: "kill",
    questId: 8774,
    map: "titanstrike",
    monsters: ["Titanic DoomKnight"]
  },
  {
    kind: "kill",
    questId: 8775,
    map: "titanstrike",
    monsters: ["Titanic Destroyer"]
  },
  {
    kind: "kill",
    questId: 8776,
    map: "titanstrike",
    monsters: ["Titanic Paladin", "Titanic DoomKnight", "Titanic Destroyer"]
  },
  {
    kind: "kill",
    questId: 8777,
    map: "titandrakath",
    monsters: ["Titan Drakath"]
  },
  {
    kind: "mapItem",
    questId: 8759,
    map: "titanattack",
    ids: [10345, 10346, 10347, 10348, 10349]
  },
  { kind: "mapItem", questId: 8764, map: "titanattack", ids: [10350, 3] },
  { kind: "mapItem", questId: 8766, map: "titanattack", ids: [10351, 8] },
  { kind: "mapItem", questId: 8770, map: "titanattack", ids: [10352] },
  {
    kind: "kill",
    questId: 2708,
    map: "tournament",
    monsters: ["Suspicious Spy Bot"]
  },
  {
    kind: "kill",
    questId: 2709,
    map: "tournament",
    monsters: ["Mercenary", "SandStalker"]
  },
  {
    kind: "kill",
    questId: 2710,
    map: "tournament",
    monsters: ["Greenguard Bandit"]
  },
  {
    kind: "kill",
    questId: 2711,
    map: "tournament",
    monsters: ["Princess Tara"]
  },
  {
    kind: "kill",
    questId: 2713,
    map: "tournament",
    monsters: ["Khai Khaldun"]
  },
  {
    kind: "kill",
    questId: 2714,
    map: "tournament",
    monsters: ["Johann Wryce"]
  },
  {
    kind: "kill",
    questId: 2715,
    map: "tournament",
    monsters: ["Knight of Thorns"]
  },
  { kind: "kill", questId: 2716, map: "tournament", monsters: ["Roderick"] },
  {
    kind: "kill",
    questId: 2717,
    map: "tournament",
    monsters: ["Lord Brentan"]
  },
  { kind: "mapItem", questId: 2708, map: "tournament", ids: [1682, 5] },
  { kind: "mapItem", questId: 2711, map: "tournament", ids: [1683] },
  { kind: "mapItem", questId: 2712, map: "tournament", ids: [1684] },
  {
    kind: "kill",
    questId: 1603,
    map: "trunk",
    monsters: ["GreenGuard Basilisk"]
  },
  { kind: "kill", questId: 1606, map: "greenguardeast", monsters: ["Spider"] },
  { kind: "kill", questId: 1607, map: "tower", monsters: ["Strange Knight"] },
  { kind: "mapItem", questId: 1604, map: "tower", ids: [836, 4] },
  { kind: "mapItem", questId: 1605, map: "tower", ids: [837] },
  { kind: "mapItem", questId: 1608, map: "tower", ids: [838] },
  { kind: "mapItem", questId: 1609, map: "tower", ids: [839, 12] },
  { kind: "kill", questId: 7431, map: "ubear", monsters: ["Giant Bee"] },
  { kind: "kill", questId: 7432, map: "ubear", monsters: ["Honey Glob"] },
  { kind: "kill", questId: 7433, map: "ubear", monsters: ["Giant Bee"] },
  { kind: "kill", questId: 7434, map: "ubear", monsters: ["Lil' Poot"] },
  { kind: "kill", questId: 7435, map: "ubear", monsters: ["Cornholio"] },
  { kind: "kill", questId: 7437, map: "limft", monsters: ["Electrical Fire"] },
  { kind: "kill", questId: 7438, map: "limft", monsters: ["Smoke Elemental"] },
  {
    kind: "kill",
    questId: 7439,
    map: "limft",
    monsters: ["Smoke Elemental", "Sock Golem"]
  },
  { kind: "kill", questId: 7441, map: "limft", monsters: ["Sock Golem"] },
  { kind: "kill", questId: 7442, map: "limft", monsters: ["Ubear"] },
  { kind: "mapItem", questId: 7432, map: "ubear", ids: [7199, 5] },
  { kind: "mapItem", questId: 7433, map: "ubear", ids: [7200] },
  { kind: "mapItem", questId: 7438, map: "limft", ids: [7201, 6] },
  { kind: "mapItem", questId: 7439, map: "limft", ids: [7202, 5] },
  { kind: "mapItem", questId: 7440, map: "limft", ids: [7203, 6] },
  {
    kind: "kill",
    questId: 3150,
    map: "undergroundlabb",
    monsters: ["Green Screamer"]
  },
  {
    kind: "kill",
    questId: 3151,
    map: "undergroundlabb",
    monsters: ["Soundbooth Horror"]
  },
  {
    kind: "kill",
    questId: 3152,
    map: "undergroundlabb",
    monsters: ["Closet Skeleton"]
  },
  {
    kind: "kill",
    questId: 3153,
    map: "undergroundlabb",
    monsters: ["Server Gremlin"]
  },
  {
    kind: "kill",
    questId: 3154,
    map: "undergroundlabb",
    monsters: ["Window"]
  },
  {
    kind: "kill",
    questId: 3155,
    map: "undergroundlabb",
    monsters: ["Invisible Ninjas", "Invisible Ninjas", "Invisible Ninjas", "Invisible Ninjas"]
  },
  {
    kind: "kill",
    questId: 3156,
    map: "undergroundlabb",
    monsters: ["Rabid Server Hamster"]
  },
  {
    kind: "kill",
    questId: 3157,
    map: "undergroundlabb",
    monsters: ["Ultra Brutalcorn"]
  },
  {
    kind: "mapItem",
    questId: 3148,
    map: "undergroundlab",
    ids: [2144, 2145, 2146, 2147, 2148]
  },
  {
    kind: "mapItem",
    questId: 3149,
    map: "undergroundlab",
    ids: [2150, 2151]
  },
  {
    kind: "mapItem",
    questId: 3149,
    map: "undergroundlabb",
    ids: [2152, 2153]
  },
  {
    kind: "kill",
    questId: 6687,
    map: "lairdefend",
    monsters: ["Soul Wyvern"]
  },
  {
    kind: "kill",
    questId: 6689,
    map: "lairdefend",
    monsters: ["Flame Dragon General"]
  },
  {
    kind: "kill",
    questId: 6692,
    map: "lairattack",
    monsters: ["Dracomancer"]
  },
  {
    kind: "kill",
    questId: 6693,
    map: "lairattack",
    monsters: ["Dragon Defender"]
  },
  {
    kind: "kill",
    questId: 6694,
    map: "lairattack",
    monsters: ["Flame Dragon General"]
  },
  {
    kind: "kill",
    questId: 2602,
    map: "watchtower",
    monsters: ["Chaorrupted Wolf", "Chaotic Gorillaphant"]
  },
  {
    kind: "kill",
    questId: 2603,
    map: "watchtower",
    monsters: ["Chaos Spider", "Storagebox"]
  },
  {
    kind: "kill",
    questId: 2604,
    map: "watchtower",
    monsters: ["Chaorrupted Knight"]
  },
  {
    kind: "kill",
    questId: 2605,
    map: "watchtower",
    monsters: ["Chaorrupted Prisoner"]
  },
  {
    kind: "kill",
    questId: 2606,
    map: "watchtower",
    monsters: ["Chaos Gorillaphant"]
  },
  {
    kind: "kill",
    questId: 2607,
    map: "watchtower",
    monsters: ["Chaos Sp-Eye"]
  },
  {
    kind: "kill",
    questId: 2608,
    map: "watchtower",
    monsters: ["Chaorrupted Knight"]
  },
  {
    kind: "kill",
    questId: 2609,
    map: "watchtower",
    monsters: ["Chaorrupted Good Soldier"]
  },
  {
    kind: "kill",
    questId: 2610,
    map: "watchtower",
    monsters: ["Chaos Knight"]
  },
  { kind: "mapItem", questId: 2602, map: "watchtower", ids: [1605, 6] },
  { kind: "mapItem", questId: 2604, map: "watchtower", ids: [1606] },
  { kind: "mapItem", questId: 2606, map: "watchtower", ids: [1607, 1608] },
  { kind: "mapItem", questId: 2607, map: "watchtower", ids: [1609, 4] },
  { kind: "mapItem", questId: 2609, map: "watchtower", ids: [1610] },
  {
    kind: "mapItem",
    questId: 10321,
    map: "whitetigerpoint",
    ids: [14656]
  },
  {
    kind: "mapItem",
    questId: 10321,
    map: "whitetigerpoint",
    ids: [14657, 2]
  },
  {
    kind: "mapItem",
    questId: 10323,
    map: "whitetigerpoint",
    ids: [14658]
  },
  {
    kind: "mapItem",
    questId: 10323,
    map: "whitetigerpoint",
    ids: [14659, 2]
  },
  {
    kind: "mapItem",
    questId: 10327,
    map: "whitetigerpoint",
    ids: [14660]
  },
  {
    kind: "kill",
    questId: 27,
    map: "forest",
    monsters: ["Zardman Grunt", "Boss Zardman"]
  },
  {
    kind: "kill",
    questId: 59,
    map: "willowcreek",
    monsters: ["Mosquito", "Frogdrake"]
  },
  { kind: "kill", questId: 22, map: "willowcreek", monsters: ["Frogzard"] },
  { kind: "kill", questId: 24, map: "willowcreek", monsters: ["Spider"] },
  { kind: "kill", questId: 58, map: "willowcreek", monsters: ["Speyeder"] },
  { kind: "kill", questId: 23, map: "willowcreek", monsters: ["Snail"] },
  { kind: "kill", questId: 25, map: "willowcreek", monsters: ["Werewolf"] },
  { kind: "mapItem", questId: 1219, map: "willowcreek", ids: [14] },
  { kind: "mapItem", questId: 1599, map: "willowcreek", ids: [15] },
  { kind: "mapItem", questId: 26, map: "willowcreek", ids: [16] },
  { kind: "kill", questId: 1242, map: "volcano", monsters: ["Lava Golem"] },
  { kind: "kill", questId: 1243, map: "volcano", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1244, map: "volcano", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1245, map: "volcano", monsters: ["Lava Golem"] },
  { kind: "kill", questId: 1246, map: "volcano", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1247, map: "volcano", monsters: ["Fire Imp"] },
  {
    kind: "kill",
    questId: 1249,
    map: "volcano",
    monsters: ["Flamethrower Dwakel"]
  },
  { kind: "kill", questId: 1250, map: "volcano", monsters: ["Fire Imp"] },
  {
    kind: "kill",
    questId: 1251,
    map: "volcano",
    monsters: ["Flamethrower Dwakel"]
  },
  { kind: "kill", questId: 1252, map: "volcano", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1253, map: "volcano", monsters: ["Flame Elemental"] },
  { kind: "kill", questId: 1255, map: "volcano", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1256, map: "volcano", monsters: ["Fire Imp"] },
  {
    kind: "kill",
    questId: 1258,
    map: "volcano",
    monsters: ["Flamethrower Dwakel"]
  },
  {
    kind: "kill",
    questId: 1259,
    map: "volcano",
    monsters: ["Fire Imp", "Flame Elemental"]
  },
  { kind: "kill", questId: 1260, map: "volcano", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1261, map: "volcano", monsters: ["Magman"] },
  { kind: "kill", questId: 1734, map: "xantown", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1735, map: "xantown", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1736, map: "xantown", monsters: ["Fire Imp"] },
  { kind: "kill", questId: 1740, map: "xantown", monsters: ["Xan"] },
  { kind: "kill", questId: 2152, map: "xancave", monsters: ["Lava Goblin"] },
  { kind: "kill", questId: 2154, map: "xancave", monsters: ["Lava Goblin"] },
  {
    kind: "kill",
    questId: 2155,
    map: "xancave",
    monsters: ["Lava Goblin", "Lava Goblin"]
  },
  {
    kind: "kill",
    questId: 2156,
    map: "xancave",
    monsters: ["Shurpu Ring Guardian"]
  },
  { kind: "mapItem", questId: 1243, map: "volcano", ids: [526, 3] },
  { kind: "mapItem", questId: 1245, map: "volcano", ids: [527, 8] },
  { kind: "mapItem", questId: 1248, map: "volcano", ids: [528, 12] },
  { kind: "mapItem", questId: 1250, map: "volcano", ids: [529, 8] },
  { kind: "mapItem", questId: 1252, map: "volcano", ids: [530, 10] },
  { kind: "mapItem", questId: 1254, map: "volcano", ids: [531, 12] },
  { kind: "mapItem", questId: 1257, map: "volcano", ids: [532, 10] },
  { kind: "mapItem", questId: 1260, map: "volcano", ids: [533, 6] },
  { kind: "mapItem", questId: 1733, map: "xantown", ids: [922] },
  { kind: "mapItem", questId: 1737, map: "xantown", ids: [923, 4] },
  { kind: "mapItem", questId: 1738, map: "xantown", ids: [924] },
  { kind: "mapItem", questId: 1739, map: "xantown", ids: [925] },
  { kind: "mapItem", questId: 2151, map: "xancave", ids: [1220] },
  { kind: "mapItem", questId: 2153, map: "xancave", ids: [1221] },
  { kind: "mapItem", questId: 2155, map: "xancave", ids: [1223, 8] },
  { kind: "mapItem", questId: 2157, map: "xancave", ids: [1222] },
  { kind: "kill", questId: 6453, map: "shogunwar", monsters: ["Shadow Samurai"] },
  { kind: "kill", questId: 6454, map: "shogunwar", monsters: ["Bamboo Treeant"] },
  { kind: "kill", questId: 6455, map: "shogunwar", monsters: ["Shadow Samurai"] },
  { kind: "kill", questId: 6457, map: "shogunwar", monsters: ["Reishi"] },
  { kind: "kill", questId: 6458, map: "shogunwar", monsters: ["Bamboo Treeant"] },
  { kind: "kill", questId: 6460, map: "shogunwar", monsters: ["Shadow Samurai"] },
  {
    kind: "kill",
    questId: 6461,
    map: "shogunwar",
    monsters: ["Kijimuna", "Reishi", "Bamboo Treeant"]
  },
  { kind: "kill", questId: 6465, map: "greenshell", monsters: ["Tsurubebi"] },
  { kind: "kill", questId: 6466, map: "greenshell", monsters: ["Tsukumogami"] },
  { kind: "kill", questId: 6467, map: "shinringrove", monsters: ["Kodama"] },
  {
    kind: "kill",
    questId: 6468,
    map: "shinringrove",
    monsters: ["Moglinberry Bush"]
  },
  { kind: "kill", questId: 6469, map: "shinringrove", monsters: ["Reishi"] },
  { kind: "kill", questId: 6470, map: "greenshell", monsters: ["Merdraconian"] },
  { kind: "kill", questId: 6474, map: "heiwavalley", monsters: ["Abumi Guchi"] },
  { kind: "kill", questId: 6476, map: "heiwavalley", monsters: ["Kosenjobi"] },
  { kind: "kill", questId: 6477, map: "heiwavalley", monsters: ["Goryo"] },
  { kind: "kill", questId: 6479, map: "heiwavalley", monsters: ["Abumi Guchi"] },
  { kind: "kill", questId: 6480, map: "heiwavalley", monsters: ["Inugami"] },
  {
    kind: "kill",
    questId: 6485,
    map: "shadowfortress",
    monsters: ["Restless Spirit"]
  },
  {
    kind: "kill",
    questId: 6486,
    map: "shadowfortress",
    monsters: ["Shadow Samurai"]
  },
  {
    kind: "kill",
    questId: 6488,
    map: "shadowfortress",
    monsters: ["Living Shadow"]
  },
  {
    kind: "kill",
    questId: 6489,
    map: "shadowfortress",
    monsters: ["Shadow Samurai"]
  },
  {
    kind: "kill",
    questId: 6490,
    map: "shadowfortress",
    monsters: ["Creeping Shadow"]
  },
  {
    kind: "kill",
    questId: 6491,
    map: "shadowfortress",
    monsters: ["7th Head of Orochi"]
  },
  { kind: "mapItem", questId: 6452, map: "shogunwar", ids: [5956, 5] },
  {
    kind: "mapItem",
    questId: 6456,
    map: "shogunwar",
    ids: [5957, 5958, 5959, 5960]
  },
  { kind: "mapItem", questId: 6464, map: "shinringrove", ids: [5962] },
  { kind: "mapItem", questId: 6465, map: "greenshell", ids: [5964, 5] },
  { kind: "mapItem", questId: 6469, map: "greenshell", ids: [5965, 8] },
  { kind: "mapItem", questId: 6470, map: "greenshell", ids: [5966] },
  { kind: "mapItem", questId: 6471, map: "greenshell", ids: [5967] },
  { kind: "mapItem", questId: 6476, map: "heiwavalley", ids: [5968, 6] },
  { kind: "mapItem", questId: 6481, map: "heiwavalley", ids: [5970, 8] },
  { kind: "mapItem", questId: 6482, map: "heiwavalley", ids: [5971] },
  { kind: "mapItem", questId: 6482, map: "heiwavalley", ids: [5972, 8] },
  { kind: "mapItem", questId: 6487, map: "shadowfortress", ids: [5973] },
  { kind: "mapItem", questId: 6488, map: "shadowfortress", ids: [5974] },
  { kind: "mapItem", questId: 6490, map: "shadowfortress", ids: [5975, 7] },
  { kind: "mapItem", questId: 6492, map: "shadowfortress", ids: [5976, 5979] },
  { kind: "mapItem", questId: 6493, map: "shadowfortress", ids: [5977] },
  {
    kind: "kill",
    questId: 7000,
    map: "beachparty",
    monsters: ["Solar Elemental"]
  },
  {
    kind: "kill",
    questId: 7001,
    map: "beachparty",
    monsters: ["Boiling Elemental"]
  },
  {
    kind: "kill",
    questId: 7002,
    map: "beachparty",
    monsters: ["Water Elemental"]
  },
  {
    kind: "kill",
    questId: 7003,
    map: "beachparty",
    monsters: ["Sun Flare"]
  },
  {
    kind: "kill",
    questId: 7004,
    map: "beachparty",
    monsters: ["Solar Elemental"]
  },
  {
    kind: "kill",
    questId: 7005,
    map: "beachparty",
    monsters: ["Frozen Water"]
  },
  {
    kind: "kill",
    questId: 7006,
    map: "beachparty",
    monsters: ["Palm Treeant"]
  },
  {
    kind: "kill",
    questId: 7008,
    map: "beachparty",
    monsters: ["Frozen Water"]
  },
  {
    kind: "kill",
    questId: 7009,
    map: "beachparty",
    monsters: ["Steaming Dragon"]
  },
  {
    kind: "kill",
    questId: 5559,
    map: "thespan",
    monsters: ["Minx Fairy"]
  },
  {
    kind: "kill",
    questId: 5561,
    map: "freakitiki",
    monsters: ["Spineapple", "Palm Treeant"]
  },
  {
    kind: "kill",
    questId: 5562,
    map: "pirates",
    monsters: ["Undead Pirate", "Undead Pirate"]
  },
  {
    kind: "kill",
    questId: 5564,
    map: "freakitiki",
    monsters: ["Tiki Sneak", "Palm Treeant"]
  },
  {
    kind: "kill",
    questId: 5565,
    map: "fotia",
    monsters: ["Fotia Spirit"]
  },
  {
    kind: "kill",
    questId: 5567,
    map: "freakitiki",
    monsters: ["Sneak Venom", "Sugar Imp", "Spicy Heat"]
  },
  {
    kind: "kill",
    questId: 6093,
    map: "moonlab",
    monsters: ["Infected Rodent"]
  },
  {
    kind: "kill",
    questId: 6094,
    map: "moonlab",
    monsters: ["Chlorine Trifluoride"]
  },
  {
    kind: "kill",
    questId: 6095,
    map: "moonlab",
    monsters: ["Slime Mold"]
  },
  {
    kind: "kill",
    questId: 6096,
    map: "moonlab",
    monsters: ["Engorged Slime Mold"]
  },
  {
    kind: "kill",
    questId: 6097,
    map: "moonlab",
    monsters: ["Infected Cat"]
  },
  {
    kind: "kill",
    questId: 6099,
    map: "moonlab",
    monsters: ["Mutated Slime Mold"]
  },
  {
    kind: "kill",
    questId: 6100,
    map: "moonlab",
    monsters: ["Infected Scientist", "Infected Scientist"]
  },
  {
    kind: "kill",
    questId: 6102,
    map: "moonlab",
    monsters: ["Escaped Experiment"]
  },
  {
    kind: "kill",
    questId: 6103,
    map: "moonlab",
    monsters: ["Nightmare Zorbak"]
  },
  {
    kind: "kill",
    questId: 6656,
    map: "spookeasy",
    monsters: ["Happy Cloud"]
  },
  {
    kind: "kill",
    questId: 6657,
    map: "spookeasy",
    monsters: ["Happy Balloon"]
  },
  {
    kind: "kill",
    questId: 6658,
    map: "spookeasy",
    monsters: ["Nightmare Goo"]
  },
  {
    kind: "kill",
    questId: 6659,
    map: "spookeasy",
    monsters: ["Nightmare Shade"]
  },
  {
    kind: "kill",
    questId: 6661,
    map: "spookeasy",
    monsters: ["Nightmare Goo"]
  },
  {
    kind: "kill",
    questId: 6662,
    map: "dreammaster",
    monsters: ["Prison Wall"]
  },
  {
    kind: "kill",
    questId: 6663,
    map: "dreammaster",
    monsters: ["Guard Llama"]
  },
  {
    kind: "kill",
    questId: 6664,
    map: "dreammaster",
    monsters: ["Sparkle Guard"]
  },
  {
    kind: "kill",
    questId: 6665,
    map: "dreammaster",
    monsters: ["Guard Llama"]
  },
  {
    kind: "kill",
    questId: 6666,
    map: "dreammaster",
    monsters: ["Sparkle Guard"]
  },
  {
    kind: "kill",
    questId: 6668,
    map: "dreammaster",
    monsters: ["Calico Cobby"]
  },
  {
    kind: "kill",
    questId: 4143,
    map: "nightmare",
    monsters: ["Bobble Clown"]
  },
  {
    kind: "kill",
    questId: 4144,
    map: "nightmare",
    monsters: ["Crazy Clown"]
  },
  {
    kind: "kill",
    questId: 4145,
    map: "nightmare",
    monsters: ["Castle Spider"]
  },
  {
    kind: "kill",
    questId: 4146,
    map: "nightmare",
    monsters: ["Wrasp", "Sneak"]
  },
  {
    kind: "kill",
    questId: 4148,
    map: "nightmare",
    monsters: ["Germs"]
  },
  {
    kind: "kill",
    questId: 4149,
    map: "nightmare",
    monsters: ["Needle"]
  },
  {
    kind: "kill",
    questId: 4150,
    map: "nightmare",
    monsters: ["Broken Toy"]
  },
  {
    kind: "kill",
    questId: 4151,
    map: "nightmare",
    monsters: ["Unearthed Skeleton", "Rotfeeder Worm"]
  },
  {
    kind: "kill",
    questId: 4152,
    map: "nightmare",
    monsters: ["Fire Imp"]
  },
  {
    kind: "kill",
    questId: 4153,
    map: "nightmare",
    monsters: ["Flame Elemental"]
  },
  {
    kind: "kill",
    questId: 4154,
    map: "nightmare",
    monsters: ["Anglerfish", "Deep Dweller", "Merdraconian"]
  },
  {
    kind: "kill",
    questId: 4155,
    map: "nightmare",
    monsters: ["Unearthed Skeleton"]
  },
  {
    kind: "kill",
    questId: 4156,
    map: "nightmare",
    monsters: ["Nothing"]
  },
  {
    kind: "kill",
    questId: 4157,
    map: "nightmare",
    monsters: ["Devourax"]
  },
  {
    kind: "kill",
    questId: 7474,
    map: "zorbaspalace",
    monsters: ["Cactus Creeper"]
  },
  {
    kind: "kill",
    questId: 7475,
    map: "zorbaspalace",
    monsters: ["Oasis Monkey"]
  },
  {
    kind: "kill",
    questId: 7477,
    map: "zorbaspalace",
    monsters: ["Palace Enforcer"]
  },
  {
    kind: "kill",
    questId: 7478,
    map: "zorbaspalace",
    monsters: ["Cactus Creeper"]
  },
  {
    kind: "kill",
    questId: 7479,
    map: "zorbaspalace",
    monsters: ["Thwompcat"]
  },
  {
    kind: "kill",
    questId: 7480,
    map: "zorbaspalace",
    monsters: ["Oasis Monkey"]
  },
  {
    kind: "kill",
    questId: 7481,
    map: "zorbaspalace",
    monsters: ["Palace Enforcer"]
  },
  {
    kind: "kill",
    questId: 7481,
    map: "zorbaspalace",
    monsters: ["Lem-or"]
  },
  {
    kind: "kill",
    questId: 7481,
    map: "zorbaspalace",
    monsters: ["Zorba the Bakk"]
  },
  {
    kind: "kill",
    questId: 7524,
    map: "byrodax",
    monsters: ["Security Droid"]
  },
  {
    kind: "kill",
    questId: 7526,
    map: "byrodax",
    monsters: ["Mutated Critter", "Mutated Treeant"]
  },
  {
    kind: "kill",
    questId: 7527,
    map: "byrodax",
    monsters: ["Mutated Treeant", "Security Droid"]
  },
  {
    kind: "kill",
    questId: 7529,
    map: "byrodax",
    monsters: ["Mutated Treeant"]
  },
  {
    kind: "kill",
    questId: 7530,
    map: "byrodax",
    monsters: ["Security Droid"]
  },
  {
    kind: "kill",
    questId: 7531,
    map: "byrodax",
    monsters: ["Space Goop"]
  },
  {
    kind: "kill",
    questId: 7533,
    map: "byrodax",
    monsters: ["Mutated Treeant", "Space Goop"]
  },
  {
    kind: "kill",
    questId: 7535,
    map: "byrodax",
    monsters: ["Byro-Dax Monstrosity"]
  },
  {
    kind: "mapItem",
    questId: 7002,
    map: "beachparty",
    ids: [6563, 7]
  },
  {
    kind: "mapItem",
    questId: 7003,
    map: "beachparty",
    ids: [6564, 8]
  },
  {
    kind: "mapItem",
    questId: 7007,
    map: "beachparty",
    ids: [6565, 8]
  },
  {
    kind: "mapItem",
    questId: 7008,
    map: "beachparty",
    ids: [6566, 8]
  },
  { kind: "mapItem", questId: 5558, map: "yulgar", ids: [5034] },
  {
    kind: "mapItem",
    questId: 5560,
    map: "freakitiki",
    ids: [5038]
  },
  {
    kind: "mapItem",
    questId: 5561,
    map: "freakitiki",
    ids: [5035, 5]
  },
  {
    kind: "mapItem",
    questId: 5563,
    map: "freakitiki",
    ids: [5039]
  },
  {
    kind: "mapItem",
    questId: 5564,
    map: "freakitiki",
    ids: [5036, 5]
  },
  {
    kind: "mapItem",
    questId: 5566,
    map: "freakitiki",
    ids: [5040]
  },
  {
    kind: "mapItem",
    questId: 5568,
    map: "freakitiki",
    ids: [5037]
  },
  { kind: "mapItem", questId: 6091, map: "moonlab", ids: [5523] },
  { kind: "mapItem", questId: 6092, map: "moonlab", ids: [5524] },
  {
    kind: "mapItem",
    questId: 6094,
    map: "moonlab",
    ids: [5527, 5]
  },
  {
    kind: "mapItem",
    questId: 6095,
    map: "moonlab",
    ids: [5525, 8]
  },
  { kind: "mapItem", questId: 6095, map: "moonlab", ids: [5526] },
  {
    kind: "mapItem",
    questId: 6096,
    map: "moonlab",
    ids: [5528, 8]
  },
  {
    kind: "mapItem",
    questId: 6098,
    map: "moonlab",
    ids: [5529, 5530]
  },
  {
    kind: "mapItem",
    questId: 6099,
    map: "moonlab",
    ids: [5531, 3]
  },
  {
    kind: "mapItem",
    questId: 6101,
    map: "moonlab",
    ids: [5532, 5533]
  },
  {
    kind: "mapItem",
    questId: 6663,
    map: "dreammaster",
    ids: [6176]
  },
  {
    kind: "mapItem",
    questId: 6667,
    map: "dreammaster",
    ids: [6177, 6178]
  },
  { kind: "mapItem", questId: 4147, map: "nightmare", ids: [3262] },
  {
    kind: "mapItem",
    questId: 7476,
    map: "zorbaspalace",
    ids: [7301, 10]
  },
  {
    kind: "mapItem",
    questId: 7476,
    map: "zorbaspalace",
    ids: [7304]
  },
  { kind: "mapItem", questId: 7523, map: "byrodax", ids: [7395] },
  { kind: "mapItem", questId: 7525, map: "byrodax", ids: [7396] },
  {
    kind: "mapItem",
    questId: 7528,
    map: "byrodax",
    ids: [7397, 10]
  },
  { kind: "mapItem", questId: 7531, map: "byrodax", ids: [7398] },
  {
    kind: "mapItem",
    questId: 7532,
    map: "byrodax",
    ids: [7399, 10]
  },
  { kind: "mapItem", questId: 7534, map: "byrodax", ids: [7400] }
];
