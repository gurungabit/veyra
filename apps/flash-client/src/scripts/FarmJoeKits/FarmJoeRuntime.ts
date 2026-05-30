import type { Bot, PlayerSnapshot } from "../../bot.js";
import { chaosStoryPlan, type ChaosPlanStep } from "./FarmJoeChaosPlan.js";
import { allStoriesPlan, type StoryPlanStep } from "./FarmJoeStoryPlan.js";

export type PetChoice = "none" | "hotMama" | "akriloth";
export type PlayerNumber = "Player1" | "Player2" | "Player3" | "Player4";

export interface FarmJoeRuntimeOptions {
  signal?: AbortSignal;
  getBoosts?: boolean;
  outfit?: boolean;
  equipOutfit?: boolean;
  sellStarterClasses?: boolean;
  petChoice?: PetChoice;
  maxFarmLoops?: number;
}

export interface ItemRecord {
  id?: number;
  itemId?: number;
  charItemId?: number;
  name?: string;
  quantity?: number;
  category?: string;
  equipped?: boolean;
  upgrade?: boolean;
  bank?: boolean;
  [key: string]: unknown;
}

export interface FarmRoute {
  minLevel: number;
  maxLevel: number;
  map: string;
  cell: string;
  pad: string;
  monster: string | number;
  label: string;
}

type MonsterTarget = string | number;

interface CombatLocation {
  map: string;
  cell?: string;
  pad?: string;
}

type VeyraQuestAction =
  | { kind: "accept"; questId?: number }
  | { kind: "complete"; questId?: number; rewardId?: number; turnIns?: number }
  | {
      kind: "hunt";
      map: string;
      monster: MonsterTarget;
      item?: string;
      quantity?: number;
      isTemp?: boolean;
      cell?: string;
      pad?: string;
    }
  | { kind: "mapItem"; map?: string; id: number; quantity?: number }
  | {
      kind: "buy";
      map?: string;
      shopId: number;
      item: string | number;
      quantity?: number;
      shopItemId?: number;
    }
  | { kind: "join"; map: string; cell?: string; pad?: string }
  | { kind: "jump"; cell: string; pad?: string }
  | { kind: "packet"; packet: string }
  | { kind: "drop"; items: string | string[] }
  | { kind: "equip"; item: string }
  | { kind: "bank"; items: string | string[] };

export const RANK_10_CLASS_POINTS = 302500;

const experienceRoutes: FarmRoute[] = [
  {
    minLevel: 1,
    maxLevel: 10,
    map: "oaklore",
    cell: "r3",
    pad: "Left",
    monster: "Bone Berserker",
    label: "Oaklore Bone Berserker"
  },
  {
    minLevel: 10,
    maxLevel: 20,
    map: "swordhavenundead",
    cell: "Gates",
    pad: "Left",
    monster: "Undead Giant",
    label: "Swordhaven Undead Giant"
  },
  {
    minLevel: 20,
    maxLevel: 25,
    map: "icestormarena",
    cell: "r7",
    pad: "Left",
    monster: "*",
    label: "Ice Storm Arena r7"
  },
  {
    minLevel: 25,
    maxLevel: 30,
    map: "icestormarena",
    cell: "r10",
    pad: "Left",
    monster: "*",
    label: "Ice Storm Arena r10"
  },
  {
    minLevel: 30,
    maxLevel: 50,
    map: "icestormarena",
    cell: "r11",
    pad: "Left",
    monster: "*",
    label: "Ice Storm Arena r11"
  },
  {
    minLevel: 50,
    maxLevel: 61,
    map: "icestormarena",
    cell: "r16",
    pad: "Left",
    monster: "*",
    label: "Ice Storm Arena r16"
  },
  {
    minLevel: 61,
    maxLevel: 75,
    map: "battlegrounde",
    cell: "r2",
    pad: "Left",
    monster: "*",
    label: "Battle Ground E"
  },
  {
    minLevel: 75,
    maxLevel: 101,
    map: "icestormunder",
    cell: "r2",
    pad: "Top",
    monster: "*",
    label: "Ice Storm Under"
  }
];

const forgeEnhancementQuestIds: Record<string, number> = {
  ForgeWeaponEnhancement: 8738,
  ForgeWeapon: 8738,
  Lacerate: 8739,
  Smite: 8740,
  HerosValiance: 8741,
  Valiance: 8741,
  ArcanasConcerto: 8742,
  Absolution: 8743,
  Vainglory: 8744,
  Avarice: 8745,
  ForgeCapeEnhancement: 8758,
  ForgeCape: 8758,
  Praxis: 9171,
  Dauntless: 9172,
  Elysium: 8821,
  Penitence: 8822,
  Lament: 8823,
  ForgeHelmEnhancement: 8828,
  ForgeHelm: 8828,
  Vim: 8824,
  Examen: 8825,
  Anima: 8826,
  Pneuma: 8827,
  Ravenous: 9560
};

const questClassNames: Record<number, string> = {
  582: "Dragonslayer"
};

const questClassRequirements: Record<
  number,
  { classId: number; className: string; classPoints: number }
> = {
  5294: { classId: 582, className: "Dragonslayer", classPoints: RANK_10_CLASS_POINTS }
};

const knownDropItemIds: Record<string, number[]> = {
  "blood sorceress": [36298],
  "dragon claw": [35997],
  "dracolich slain": [35956],
  "enchanted scale": [35957],
  "scarlet sorceress": [42992]
};

export class FarmJoeRuntime {
  private readonly options: FarmJoeRuntimeOptions;
  private lastServerActionAt = 0;
  private bankLoadAttempted = false;

  constructor(
    readonly bot: Bot,
    options: FarmJoeRuntimeOptions = {}
  ) {
    this.options = options;
  }

  get signal(): AbortSignal | undefined {
    return this.options.signal;
  }

  log(message: string): void {
    this.bot.log(message);
  }

  async checkpoint(label: string): Promise<void> {
    this.throwIfAborted();
    this.log(label);
    await this.bot.delay(25, this.signal);
  }

  async runTask(name: string, detail?: string): Promise<void> {
    const handled = await this.runVeyraTask(name, detail);
    if (!handled) this.throwMissingTask(name, detail);
  }

  async ensureLoggedIn(): Promise<PlayerSnapshot> {
    return this.bot.waitForLogin(this.signal);
  }

  async isMember(): Promise<boolean> {
    const days = toNumber(
      await this.bot.getGameObject<unknown>("world.myAvatar.objData.iUpgDays").catch(() => 0)
    );
    return days > 0;
  }

  async snapshot(): Promise<PlayerSnapshot> {
    const snapshot = await this.bot.snapshot();
    if (!snapshot.loggedIn) return this.ensureLoggedIn();
    return snapshot;
  }

  async inventory(includeBank = true): Promise<ItemRecord[]> {
    const paths = [
      "world.myAvatar.items",
      "world.myAvatar.objData.items",
      "world.myAvatar.tempitems",
      "world.myAvatar.tempItems"
    ];

    const batches = await Promise.all(paths.map((path) => this.safeArray(path)));
    const inventory = batches.flat().map(toItemRecord).filter(BooleanRecord);
    if (!includeBank) return inventory;
    return [...inventory, ...(await this.bankItems(true))];
  }

  async inventoryOnly(): Promise<ItemRecord[]> {
    return this.inventory(false);
  }

  async bankItems(loadIfEmpty = false): Promise<ItemRecord[]> {
    const paths = [
      "world.bankinfo.items",
      "world.bankinfo",
      "world.bankController.items",
      "world.bankController.bankItems",
      "world.myAvatar.bank",
      "world.myAvatar.objData.bank",
      "world.myAvatar.objData.bankItems"
    ];
    let items = await this.readBankItemPaths(paths);
    if (items.length === 0 && loadIfEmpty && !this.bankLoadAttempted) {
      this.bankLoadAttempted = true;
      this.log("Loading bank inventory.");
      await this.bot.callGameFunction("world.toggleBank").catch(() => undefined);
      await this.bot.delay(1200, this.signal);
      items = await this.readBankItemPaths(paths);
    }
    return items.map((record) => ({ ...record, bank: true }));
  }

  private async readBankItemPaths(paths: string[]): Promise<ItemRecord[]> {
    const batches = await Promise.all(paths.map((path) => this.safeArray(path)));
    return batches
      .flat()
      .flatMap((value) => {
        const records = recordsFrom(value);
        return records.length > 0 ? records : [toItemRecord(value)];
      })
      .map(toItemRecord)
      .filter(BooleanRecord);
  }

  async contains(
    item: string | string[] | number,
    quantity = 1,
    any = false,
    includeBank = true
  ): Promise<boolean> {
    if (Array.isArray(item)) {
      const results = await Promise.all(
        item.map((name) => this.contains(name, quantity, false, includeBank))
      );
      return any ? results.some(Boolean) : results.every(Boolean);
    }

    const items = await this.inventory(includeBank);
    if (typeof item === "number")
      return items.some((record) => itemIds(record).includes(item) && itemQuantity(record) >= quantity);
    return items.some((record) => sameName(itemName(record), item) && itemQuantity(record) >= quantity);
  }

  async quantity(name: string, includeBank = true): Promise<number> {
    const items = await this.inventory(includeBank);
    return items
      .filter((record) => sameName(itemName(record), name))
      .reduce((total, record) => total + itemQuantity(record), 0);
  }

  private async itemQuantityOf(item: string | number, includeBank = true): Promise<number> {
    const items = await this.inventory(includeBank);
    if (typeof item === "number") {
      return items
        .filter((record) => itemIds(record).includes(item))
        .reduce((total, record) => total + itemQuantity(record), 0);
    }
    return items
      .filter((record) => sameName(itemName(record), item))
      .reduce((total, record) => total + itemQuantity(record), 0);
  }

  async item(name: string, includeBank = true): Promise<ItemRecord | undefined> {
    const items = await this.inventory(includeBank);
    return items.find((record) => sameName(itemName(record), name));
  }

  async itemById(id: number, includeBank = true): Promise<ItemRecord | undefined> {
    const items = await this.inventory(includeBank);
    return items.find((record) => itemIds(record).includes(id));
  }

  private async waitForInventoryItem(
    item: string | number,
    quantity = 1,
    timeoutMs = 4500,
    includeBank = true
  ): Promise<boolean> {
    const deadline = Date.now() + timeoutMs;
    while (!this.signal?.aborted && Date.now() < deadline) {
      if (await this.contains(item, quantity, false, includeBank)) return true;
      await this.bot.delay(300, this.signal);
    }
    return false;
  }

  async anyRank10(names: string[]): Promise<boolean> {
    const items = await this.inventory();
    return names.some((name) =>
      items.some(
        (record) =>
          sameName(itemName(record), name) &&
          isClassItem(record) &&
          itemQuantity(record) >= RANK_10_CLASS_POINTS
      )
    );
  }

  private async classRecord(className: string, itemId?: number, includeBank = true): Promise<ItemRecord | undefined> {
    return itemId ? this.itemById(itemId, includeBank) : this.item(className, includeBank);
  }

  private async hasClassItem(className: string, itemId?: number): Promise<boolean> {
    if (itemId && (await this.contains(itemId))) return true;
    return this.contains(className);
  }

  private async hasClassRank(className: string, itemId: number | undefined, rank: number): Promise<boolean> {
    const record = await this.classRecord(className, itemId);
    if (!record) return false;
    return classRankFromPoints(itemQuantity(record)) >= rank;
  }

  private async waitForEquippedClass(className: string): Promise<boolean> {
    const deadline = Date.now() + 4500;
    while (!this.signal?.aborted && Date.now() < deadline) {
      const snapshot = await this.snapshot().catch(() => undefined);
      if (snapshot && sameName(snapshot.currentClassName, className)) return true;
      await this.bot.delay(300, this.signal);
    }
    return false;
  }

  async join(map: string, cell = "Enter", pad = "Spawn"): Promise<void> {
    await this.recoverIfDead({ map, cell, pad });
    this.throwIfAborted();
    await this.bot.join(map, cell, pad);
    await this.bot.delay(700, this.signal);
  }

  async jump(cell: string, pad = "Spawn"): Promise<void> {
    await this.recoverIfDead();
    this.throwIfAborted();
    await this.bot.jump(cell, pad);
    await this.bot.delay(450, this.signal);
  }

  async equip(name: string, itemId?: number): Promise<boolean> {
    if (!(await this.ensureInInventory(name, itemId))) {
      this.log(`Equip skipped; ${name} was not found.`);
      return false;
    }
    const record = itemId ? await this.itemById(itemId, false) : await this.item(name, false);
    const id = record ? primaryItemId(record) : 0;
    if (id <= 0) {
      this.log(`Equip skipped; ${name} was not found.`);
      return false;
    }

    await this.bot.callGameFunction("world.sendEquipItemRequest", { ItemID: id }).catch(() => undefined);
    this.log(`Equip requested for ${name}.`);
    await this.bot.delay(650, this.signal);
    return true;
  }

  private async ensureInInventory(name: string, itemId?: number): Promise<boolean> {
    const inventoryRecord = itemId ? await this.itemById(itemId, false) : await this.item(name, false);
    if (inventoryRecord) return true;

    const bankRecord = (await this.bankItems(true)).find(
      (record) => (itemId ? itemIds(record).includes(itemId) : false) || sameName(itemName(record), name)
    );
    if (!bankRecord) return false;

    const id = primaryItemId(bankRecord);
    const charItemId = itemCharId(bankRecord);
    if (id <= 0 || charItemId <= 0) {
      this.log(`Unbank skipped; ${name} is missing an item id or character item id.`);
      return false;
    }

    this.log(`Moving ${itemName(bankRecord) || name} from bank to inventory.`);
    await this.sendRoomPacket("bankToInv", [id, charItemId]);
    await this.bot.delay(900, this.signal);
    return this.waitForInventoryItem(itemId ?? name, 1, 5500, false);
  }

  private async ensureInventoryQuantity(name: string, quantity: number): Promise<void> {
    let inventoryQuantity = await this.quantity(name, false);
    if (inventoryQuantity >= quantity) return;

    const totalQuantity = await this.quantity(name, true);
    if (totalQuantity >= quantity) {
      await this.ensureInInventory(name);
      inventoryQuantity = await this.quantity(name, false);
      if (inventoryQuantity >= quantity) return;
    }

    throw new Error(
      `${name} x${quantity} is required in inventory; inventory has ${inventoryQuantity}, total including bank is ${totalQuantity}.`
    );
  }

  async equipFirst(names: string[]): Promise<string | undefined> {
    for (const name of names) {
      if (await this.contains(name)) {
        await this.equip(name);
        return name;
      }
    }
    return undefined;
  }

  async sell(name: string): Promise<void> {
    const record = await this.item(name, false);
    if (!record) return;
    const id = primaryItemId(record);
    const charItemId = itemCharId(record);
    if (id <= 0 || charItemId <= 0) {
      this.log(`Sell skipped; ${name} is missing an item id or character item id.`);
      return;
    }
    await this.sendRoomPacket("sellItem", [id, 1, charItemId]);
    await this.bot.delay(650, this.signal);
  }

  async bank(items: string | string[]): Promise<void> {
    const names = Array.isArray(items) ? items : [items];
    for (const name of names) {
      const record = await this.item(name, false);
      if (!record) continue;
      const id = primaryItemId(record);
      const charItemId = itemCharId(record);
      if (id <= 0 || charItemId <= 0) {
        this.log(`Bank skipped; ${name} is missing an item id or character item id.`);
        continue;
      }
      await this.sendRoomPacket("bankFromInv", [id, charItemId]);
      await this.bot.delay(350, this.signal);
    }
  }

  async loadShop(shopId: number): Promise<Record<string, unknown>> {
    await this.throttleServerAction();
    this.log(`Loading shop ${shopId}.`);
    await this.bot.callGameFunction("world.sendLoadShopRequest", shopId).catch(() => undefined);
    const deadline = Date.now() + 10000;
    let lastShop: Record<string, unknown> = {};

    while (!this.signal?.aborted && Date.now() < deadline) {
      const shop = asRecord(await this.bot.getGameObject<unknown>("world.shopinfo").catch(() => ({})));
      if (Object.keys(shop).length > 0) lastShop = shop;
      const loadedId = numberFrom(shop, ["ShopID", "shopId", "iShopID", "id", "ID"]);
      if (loadedId === shopId && shopItemsFrom(shop).length > 0) return shop;
      await this.bot.delay(300, this.signal);
    }

    const loadedId = numberFrom(lastShop, ["ShopID", "shopId", "iShopID", "id", "ID"]);
    throw new Error(`Timed out loading shop ${shopId}${loadedId > 0 ? `; last loaded shop was ${loadedId}` : ""}.`);
  }

  async buyItem(
    map: string | undefined,
    shopId: number,
    item: string | number,
    quantity = -1,
    shopItemId = -1
  ): Promise<void> {
    this.throwIfAborted();
    if (map) await this.join(map);
    if (quantity <= 1 && (await this.contains(item, 1, false, true))) {
      this.log(`${displayItem(item)} is already owned; skipping shop ${shopId}.`);
      return;
    }

    let lastOwned = await this.itemQuantityOf(item, false);
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      const shopInfo = await this.loadShop(shopId);
      const shopItem = findShopItem(shopInfo, item, shopItemId);
      if (!shopItem) {
        const names = shopItemsFrom(shopInfo)
          .map((record) => itemName(toItemRecord(record)))
          .filter(Boolean)
          .slice(0, 8)
          .join(", ");
        throw new Error(`Could not find ${displayItem(item)} in shop ${shopId}${names ? `. Found: ${names}` : "."}`);
      }

      const itemId = numberFrom(shopItem, ["ItemID", "iID", "itemId", "id", "ID"]);
      const resolvedShopItemId = numberFrom(shopItem, ["ShopItemID", "iShopItemID", "shopItemId", "iSel"]);
      if (itemId <= 0) throw new Error(`Shop ${shopId} item ${displayItem(item)} has no usable ItemID.`);

      const buyQuantity = quantity > 0 ? quantity : -1;
      const expectedOwned = Math.max(1, lastOwned + (quantity > 0 ? quantity : 1));
      const label = itemName(toItemRecord(shopItem)) || displayItem(item);
      this.log(`Buying ${label} from shop ${shopId}${attempt > 1 ? ` (retry ${attempt})` : ""}.`);
      await this.throttleServerAction();
      await this.bot.call("buyItemByID", itemId, resolvedShopItemId > 0 ? resolvedShopItemId : -1, buyQuantity);
      await this.bot.delay(1300, this.signal);

      const checkItem: string | number = typeof item === "number" ? itemId : item;
      if (await this.waitForInventoryItem(checkItem, expectedOwned, 5500, false)) return;
      lastOwned = await this.itemQuantityOf(checkItem, false);
    }

    throw new Error(`${displayItem(item)} was not added to inventory after buying from shop ${shopId}.`);
  }

  async acceptQuest(questId: number): Promise<void> {
    await this.sendGetQuestPacket(questId).catch(() => undefined);
    await this.throttleServerAction();
    this.log(`Accepting quest ${questId}.`);
    await this.bot.callGameFunction("world.acceptQuest", questId).catch(async () => {
      const room = (await this.snapshot()).room || 1;
      await this.bot.sendPacket(`%xt%zm%acceptQuest%${room}%${questId}%`);
    });
    await this.bot.delay(650, this.signal);
  }

  async completeQuest(questId: number, rewardId = -1, turnIns = 1): Promise<void> {
    const readiness = await this.questCompletionReadiness(questId).catch(() => undefined);
    if (readiness && !readiness.ready)
      this.log(
        `Quest ${questId} turn-in may not be ready yet${readiness.summary ? `: ${readiness.summary}` : ""}.`
      );
    await this.throttleServerAction();
    this.log(`Completing quest ${questId}.`);
    await this.bot.callGameFunction("world.tryQuestComplete", questId, rewardId, false, turnIns).catch(async () => {
      const room = (await this.snapshot()).room || 1;
      await this.bot.sendPacket(
        `%xt%zm%tryQuestComplete%${room}%${questId}%${rewardId}%false%${turnIns}%wvz%`
      );
    });
    await this.bot.delay(900, this.signal);
  }

  async isQuestCompleted(questId: number): Promise<boolean> {
    const checks = await Promise.all([
      this.bot.callGameFunction<unknown>("world.isQuestComplete", questId).catch(() => undefined),
      this.bot.callGameFunction<unknown>("world.isQuestCompleted", questId).catch(() => undefined),
      this.bot.callGameFunction<unknown>("world.getAchievement", questId, 0).catch(() => undefined)
    ]);
    if (checks.some(toBoolean)) return true;

    const quest = await this.ensureQuestLoaded(questId).catch(() => undefined);
    if (!quest) return false;
    const slot = numberFrom(quest, ["iSlot", "Slot", "slot", "iIndex"]);
    const value = numberFrom(quest, ["iValue", "Value", "value"]);
    if (slot < 0 || value <= 0) return false;
    const currentValue = toNumber(
      await this.bot.callGameFunction<unknown>("world.getQuestValue", slot).catch(() => 0)
    );
    return currentValue >= value;
  }

  async getMapItem(map: string | undefined, mapItemId: number, quantity = 1): Promise<void> {
    if (map) await this.join(map);
    for (let index = 0; index < quantity; index += 1) {
      this.throwIfAborted();
      const room = (await this.snapshot()).room || 1;
      this.log(`Getting map item ${mapItemId} ${index + 1}/${quantity}.`);
      await this.bot.sendPacket(`%xt%zm%getMapItem%${room}%${mapItemId}%`);
      await this.bot.delay(1000, this.signal);
    }
  }

  async acceptDrops(items: string | number | Array<string | number>): Promise<void> {
    const names = (Array.isArray(items) ? items : [items])
      .map((name) => String(name).trim())
      .filter(Boolean);
    if (names.length === 0) return;
    if (names.some((name) => name.trim() === "*")) {
      await this.safeDropCall("acceptAllDrops");
      return;
    }
    await this.reconcileDropQueue(names);
  }

  private async reconcileDropQueue(names: string[]): Promise<void> {
    const whitelist = uniqueDropNames(names);
    if (whitelist.length === 0) return;

    const whitelistCsv = whitelist.join(",");
    const acceptAcDrops = await this.shouldAcceptAcDrops();
    const clearAfterKnownPickup = this.canClearAfterKnownDropPickup(whitelist);
    let loggedTargets = false;
    let loggedUnrelated = false;

    for (let attempt = 0; attempt < 4 && !this.signal?.aborted; attempt += 1) {
      const drops = await this.currentDrops();
      const targetDrops = drops.filter((drop) => dropMatchesNames(drop, whitelist));
      const unrelatedDrops = drops.filter((drop) => !dropMatchesNames(drop, whitelist));

      if (targetDrops.length > 0) {
        if (!loggedTargets) {
          loggedTargets = true;
          this.log(`Accepting target drop${targetDrops.length === 1 ? "" : "s"}: ${dropLabels(targetDrops).join(", ")}.`);
        }
        await this.pickupDropIds(targetDrops);
      }
      await this.pickupDropWhitelist(whitelist);

      if (unrelatedDrops.length > 0 && !loggedUnrelated) {
        loggedUnrelated = true;
        this.log(`Rejecting unrelated drop${unrelatedDrops.length === 1 ? "" : "s"}: ${dropLabels(unrelatedDrops).join(", ")}.`);
      }

      await this.safeDropCall("acceptDrops", whitelistCsv);
      if (acceptAcDrops) await this.safeDropCall("acceptACDrops");
      if (!(await this.safeDropCall("rejectExcept", whitelistCsv, acceptAcDrops))) {
        await this.safeDropCall("rejectExcept", whitelistCsv);
      }

      if (targetDrops.length === 0 && unrelatedDrops.length === 0) return;
      await this.bot.delay(250, this.signal);

      if (clearAfterKnownPickup) {
        await this.clearDropDisplays();
        return;
      }

      const remainingDrops = await this.currentDrops();
      if (remainingDrops.length === 0) return;
      const remainingTargets = remainingDrops.filter((drop) => dropMatchesNames(drop, whitelist));
      if (remainingTargets.length > 0) {
        await this.pickupDropIds(remainingTargets);
        await this.pickupDropWhitelist(whitelist);
        await this.safeDropCall("acceptDrops", whitelistCsv);
      }
      if (remainingDrops.some((drop) => !dropMatchesNames(drop, whitelist))) {
        await this.clearDropDisplays();
        return;
      }
      if (!remainingDrops.some((drop) => dropMatchesNames(drop, whitelist)) && unrelatedDrops.length === 0) return;
    }
  }

  private async shouldAcceptAcDrops(): Promise<boolean> {
    const options = await this.bot.gameOptions().catch(() => undefined);
    return options?.values["accept-ac-drops"] === true;
  }

  private canClearAfterKnownDropPickup(whitelist: string[]): boolean {
    return whitelist.every((name) => {
      const numeric = Number(name);
      return (Number.isFinite(numeric) && numeric > 0) || (knownDropItemIds[name]?.length ?? 0) > 0;
    });
  }

  private async currentDrops(): Promise<Record<string, unknown>[]> {
    return recordsFrom(await this.bot.call<unknown>("getCurrentDrops").catch(() => []));
  }

  private async collectWantedDropsOnly(names: string[]): Promise<void> {
    const whitelist = uniqueDropNames(names);
    if (whitelist.length === 0) return;
    const drops = await this.currentDrops();
    const targetDrops = drops.filter((drop) => dropMatchesNames(drop, whitelist));
    await this.pickupDropIds(targetDrops);
    await this.pickupDropWhitelist(whitelist);
    const whitelistCsv = whitelist.join(",");
    await this.safeDropCall("acceptDrops", whitelistCsv);
    const acceptAcDrops = await this.shouldAcceptAcDrops();
    if (!(await this.safeDropCall("rejectExcept", whitelistCsv, acceptAcDrops))) {
      await this.safeDropCall("rejectExcept", whitelistCsv);
    }
  }

  private async pickupDropIds(drops: Record<string, unknown>[]): Promise<void> {
    const ids = Array.from(new Set(drops.map(dropId).filter((id) => id > 0)));
    await this.pickupDropItemIds(ids);
  }

  private async pickupDropWhitelist(whitelist: string[]): Promise<void> {
    const ids = Array.from(
      new Set(
        whitelist.flatMap((name) => {
          const numeric = Number(name);
          if (Number.isFinite(numeric) && numeric > 0) return [Math.floor(numeric)];
          return knownDropItemIds[name] ?? [];
        })
      )
    );
    await this.pickupDropItemIds(ids);
  }

  private async pickupDropItemIds(ids: number[]): Promise<void> {
    if (ids.length === 0) return;

    const room = (await this.snapshot()).room || 1;
    for (const id of ids) {
      await this.bot.sendPacket(`%xt%zm%getDrop%${room}%${id}%`).catch(() => undefined);
      await this.bot.delay(120, this.signal);
    }
  }

  private async safeDropCall(name: string, ...args: unknown[]): Promise<boolean> {
    try {
      await this.bot.call(name, ...args);
      return true;
    } catch {
      return false;
    }
  }

  private async clearDropDisplays(): Promise<void> {
    await this.clearDropContainer("cDropsUI.mcDraggable.menu");
    await this.clearDropContainer("cDropsUI.mcDraggable.dropStack");
    await this.clearDropContainer("cDropsUI.dropStack");
    await this.clearDropContainer("ui.mcDropStack");
    await this.clearDropContainer("ui.dropStack");
  }

  private async clearDropContainer(path: string): Promise<void> {
    for (let guard = 0; guard < 40; guard += 1) {
      const count = toNumber(await this.bot.getGameObject<unknown>(`${path}.numChildren`).catch(() => 0));
      if (count <= 0) return;
      await this.bot.callGameFunction(`${path}.removeChildAt`, count - 1).catch(() => undefined);
      await this.bot.delay(25, this.signal);
    }
  }

  async hunt(
    map: string,
    monster: string | number,
    item?: string | number,
    quantity = 1,
    isTemp = false,
    dropWhitelist: string[] = []
  ): Promise<void> {
    await this.join(map);
    await this.farmMonster(monster, item, quantity, isTemp, { map }, dropWhitelist);
  }

  async killMonster(
    map: string,
    cell: string,
    pad: string,
    monster: string | number,
    item?: string | number,
    quantity = 1,
    isTemp = true,
    dropWhitelist: string[] = []
  ): Promise<void> {
    await this.join(map, cell, pad);
    await this.farmMonster(monster, item, quantity, isTemp, { map, cell, pad }, dropWhitelist);
  }

  private async farmMonster(
    monster: string | number,
    item?: string | number,
    quantity = 1,
    isTemp = false,
    location?: CombatLocation,
    dropWhitelist: string[] = []
  ): Promise<void> {
    if (item) this.log(`Farming ${item}${quantity > 1 ? ` x${quantity}` : ""} from ${monster}.`);
    const acceptedDrops = item
      ? uniqueDropNames([String(item), ...dropWhitelist])
      : uniqueDropNames(dropWhitelist);

    let loops = 0;
    while (!this.signal?.aborted) {
      if (acceptedDrops.length > 0) {
        await this.acceptDrops(acceptedDrops);
        if (item && (await this.isDropVisible(item))) {
          await this.bot.delay(650, this.signal);
          continue;
        }
      }
      if (item && !isTemp && (await this.contains(item, quantity, false, true))) return;
      if (item && isTemp && typeof item === "string" && (await this.quantity(item, false)) >= quantity) return;
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) {
        this.log(`Stopped ${item || monster} farm after ${loops} loops due to maxFarmLoops.`);
        return;
      }
      loops += 1;
      await this.recoverIfDead(location);
      await this.bot.attack(monster);
      await this.bot.useAvailableSkills();
      if (acceptedDrops.length > 0) await this.acceptDrops(acceptedDrops);
      await this.bot.delay(650, this.signal);
    }
  }

  private async isDropVisible(item: string | number): Promise<boolean> {
    const whitelist = uniqueDropNames([String(item)]);
    if (whitelist.length === 0) return false;
    return (await this.currentDrops()).some((drop) => dropMatchesNames(drop, whitelist));
  }

  async farmExperience(targetLevel = 100, rankUpClass = false): Promise<void> {
    let snapshot = await this.ensureLoggedIn();
    const target = clamp(targetLevel, 1, 100);
    this.log(rankUpClass ? "Ranking equipped class with XP route." : `Farming XP toward level ${target}.`);

    while (!this.signal?.aborted) {
      snapshot = await this.snapshot();
      if (!rankUpClass && snapshot.level >= target) return;
      if (rankUpClass && normalizedClassRank(snapshot) >= 10) return;
      const route = selectRoute(snapshot.level);
      if (await this.recoverIfDead(route)) {
        continue;
      }

      await this.ensureRoute(route);
      await this.bot.attack(route.monster);
      await this.bot.useAvailableSkills();
      await this.bot.delay(500, this.signal);
    }
  }

  private async farmClassRank(className: string, itemId?: number, targetRank = 10): Promise<void> {
    this.log(`Ranking ${className} with XP route.`);

    let loops = 0;
    while (!this.signal?.aborted) {
      if (await this.hasClassRank(className, itemId, targetRank)) return;
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) {
        this.log(`Stopped ${className} rank farm after ${loops} loops due to maxFarmLoops.`);
        return;
      }

      const snapshot = await this.snapshot();
      if (!sameName(snapshot.currentClassName, className) && loops % 10 === 0) {
        await this.equip(className, itemId);
        await this.waitForEquippedClass(className);
      }

      const route = selectRoute(snapshot.level);
      if (await this.recoverIfDead(route)) continue;
      await this.ensureRoute(route);
      await this.bot.attack(route.monster);
      await this.bot.useAvailableSkills();
      await this.bot.delay(500, this.signal);
      loops += 1;
    }
  }

  async rankClass(className: string, itemId?: number): Promise<boolean> {
    if (!(await this.hasClassItem(className, itemId))) {
      this.log(`Rank skipped; ${className} is not owned.`);
      return false;
    }
    if (!(await this.equip(className, itemId))) return false;
    if (!(await this.waitForEquippedClass(className))) {
      this.log(`${className} equip was not confirmed; continuing rank pass with inventory CP checks.`);
    }
    await this.farmClassRank(className, itemId);
    return this.hasClassRank(className, itemId, 10);
  }

  async farmGold(): Promise<void> {
    this.log("Farming gold with the current combat route.");
    await this.farmExperience(100);
  }

  async bladeOfAweRep(): Promise<void> {
    await this.unlockBladeOfAwe();
    if (!(await this.contains("Awethur's Accoutrements")) && !(await this.contains(17585)))
      await this.buyItem("museum", 631, 17585);
    this.log("Blade of Awe reputation route is prepared.");
  }

  async smartEnhance(className?: string): Promise<void> {
    this.log(`Enhancement refresh requested for ${className || "current class"}.`);
    await this.bot.delay(25, this.signal);
  }

  async unlockEnhancement(name: string, questId?: number, action?: () => Promise<void>): Promise<void> {
    const resolvedQuestId = questId ?? forgeEnhancementQuestIds[name];
    if (resolvedQuestId && (await this.isQuestCompleted(resolvedQuestId))) {
      this.log(`${name} enhancement already unlocked.`);
      return;
    }
    this.log(`Unlocking enhancement path: ${name}.`);
    if (action) await action();
    else await this.runForgeEnhancement(name, resolvedQuestId);
  }

  private async runVeyraTask(name: string, detail?: string): Promise<boolean> {
    switch (name) {
      case "CoreAdvanced.GearStore":
        await this.refreshGear(detail);
        return true;
      case "CoreAdvanced.SmartEnhance":
        await this.smartEnhance(detail);
        return true;
      case "CoreFarms.Gold":
        await this.farmGold();
        return true;
      case "CoreFarms.BladeofAweREP":
        await this.bladeOfAweRep();
        return true;
      case "CoreDailies.EldersBlood":
        await this.eldersBlood();
        return true;
      case "CapeOfAwe.GetCoA":
        await this.capeOfAwe();
        return true;
      case "Core13LoC.Complete13LOC":
        await this.complete13LordsOfChaos();
        return true;
      case "LordOfOrder.GetLoO":
        await this.lordOfOrder();
        return true;
      case "Frost Spirit Reaver acquisition":
        await this.frostSpiritReaver();
        return true;
      case "Northlands Monk acquisition":
        await this.northlandsMonk();
        return true;
      case "Shaman acquisition":
        await this.shaman();
        return true;
      case "CelestialArena.DoAll":
        await this.celestialArena();
        return true;
      case "Blinding Bright of Awe.GetBBoA":
        await this.burningBladeOfAbezeth();
        return true;
      case "CoreYnR.GetYnR":
        await this.yamiNoRonin();
        return true;
      case "DragonOfTime.GetDoT":
        await this.dragonOfTime();
        return true;
      case "KingsEcho.GetKE":
        await this.kingsEcho();
        return true;
      case "ShadowrealmMerge.BuyAllMerge":
        await this.shadowrealmMerge(detail);
        return true;
      case "ExaltedApotheosisPreReqs.PreReqs":
        await this.exaltedApotheosisPrereqs();
        return true;
      case "CoreNation.Supplies":
        await this.nationSupplies();
        return true;
      case "ArchPaladin.GetAP":
        await this.archPaladin();
        return true;
      case "EnoughDOOMforanArchfiend.AFDL":
        await this.archfiendDoomLord();
        return true;
      case "Archfiend.GetArchfiend":
        await this.archfiend();
        return true;
      case "Tutorial.Badges":
        await this.checkpoint("Tutorial badge pass complete.");
        return true;
      case "Mazumi.MazumiQuests":
        await this.mazumiQuests();
        return true;
      case "MasterRanger.GetMR":
        await this.masterRanger();
        return true;
      case "Dragonslayer.GetDragonslayer":
        await this.dragonslayer();
        return true;
      case "ScarletSorceress.GetSSorc":
        await this.scarletSorceress();
        return true;
      case "DragonslayerGeneral.GetDSGeneral":
        await this.dragonslayerGeneral();
        return true;
      case "BurningBlade.GetBurningBlade":
        await this.burningBlade();
        return true;
      case "BlazeBinder.GetClass":
        await this.blazeBinder();
        return true;
      case "Cryomancer.DoCryomancer":
        await this.cryomancer();
        return true;
      case "DragonShinobi.GetDSS":
        await this.dragonSoulShinobi();
        return true;
      case "GlacialBerserker.GetGB":
        await this.glacialBerserker();
        return true;
      case "SynderesMerge.BuyAllMerge":
        await this.synderesMerge(detail);
        return true;
      case "CoreSDKA.DoAll":
        await this.sepulchuresDoomKnightArmor();
        return true;
      case "LegendaryElementalWarrior.GetLEW":
        await this.legendaryElementalWarrior();
        return true;
      case "ArchfiendDragonEgg.GetAFDE":
        await this.archfiendDragonEgg();
        return true;
      case "EvolvedShadowOrb.GetEvolvedShadowOrb":
        await this.evolvedShadowOrb();
        return true;
      case "TendurrrTheAssistantQuests.TendurrItems":
        await this.tendurrrItems();
        return true;
      case "CoreNation.bagDrops bank":
        await this.bankNationBagDrops();
        return true;
      case "CoinCollectorSet.GetItems":
        await this.coinCollectorSet();
        return true;
      case "DragonBladeofNulgath.GetDragonBlade":
        await this.dragonBladeOfNulgath();
        return true;
      case "CruxShip.StoryLine":
        await this.cruxShipStory();
        return true;
      case "DragonFableOrigins.GreatFireWar":
        await this.greatFireWar();
        return true;
      case "CoreQOM.TheBook":
        await this.queenOfMonstersBook();
        return true;
      case "CoreNation.FarmUni13":
        await this.farmUni13(toNumber(detail || 1) || 1);
        return true;
      case "CoreNation materials":
        await this.nationMaterials(detail);
        return true;
      case "Mighty Sword Of The Dragons quest chain":
        await this.mightySwordOfTheDragons();
        return true;
      case "TachyonMerge.BuyAllMerge":
        await this.tachyonMerge(detail);
        return true;
      case "BonecastleTowerMerge.BuyAllMerge":
        await this.bonecastleTowerMerge(detail);
        return true;
      case "ChronoAssassin.GetChronoAss":
        await this.chronoAssassin();
        return true;
      case "CoreFarms.BeastMasterREP":
        await this.reputationPass("BeastMaster", "northpointe", "Rhino Beetle");
        return true;
      case "CoreFarms.SkyguardREP":
        await this.reputationPass("Skyguard", "strategy", "Draconian");
        return true;
      case "SpellRaiser.GetAll":
        await this.spellRaiserSet();
        return true;
      case "TheLostKnightAndBackupBlade.GetAll":
        await this.lostKnightSet();
        return true;
      case "TrobbolierPet.GetAll":
        await this.trobbolierPets();
        return true;
      case "PotionBuyer.INeedYourStrongestPotions":
        await this.buyPotion(detail);
        return true;
      case "BuyScrolls.BuyScroll":
        await this.buyScroll(detail);
        return true;
      case "AllStories.CompleteAll":
        await this.completeAllStories();
        return true;
      case "CoreNSOD.GetNSOD":
        await this.necroticSwordOfDoom();
        return true;
      case "CoreLR.GetLR":
        await this.legionRevenant();
        return true;
      case "StoneCrusher.GetSC":
        await this.stoneCrusher();
        return true;
      case "VerusDoomKnightClass.GetClass":
        await this.verusDoomKnight();
        return true;
      default:
        if (name.startsWith("CoreDailies.")) {
          await this.coreDaily(name.slice("CoreDailies.".length));
          return true;
        }
        if (name.startsWith("UnlockForgeEnhancements.")) {
          await this.unlockEnhancement(name.slice("UnlockForgeEnhancements.".length));
          return true;
        }
        return false;
    }
  }

  private async refreshGear(detail?: string): Promise<void> {
    await this.checkpoint(`Refreshing Veyra gear setup${detail ? ` (${detail})` : ""}.`);
  }

  private async eldersBlood(): Promise<void> {
    if (await this.contains("Elders' Blood", 5)) {
      this.log("Elders' Blood is already stocked.");
      return;
    }
    await this.completeKillQuest({
      questId: 802,
      map: "arcangrove",
      cell: "LeftBack",
      pad: "Left",
      monster: "Gorillaphant",
      item: "Slain Gorillaphant",
      quantity: 50,
      isTemp: true,
      reward: "Elders' Blood"
    });
  }

  private async mazumiQuests(): Promise<void> {
    await this.completeKillQuest({
      questId: 90,
      map: "pirates",
      monster: "Fishman Soldier",
      item: "Pirate Pegleg",
      quantity: 1,
      isTemp: true
    });
    if (!(await this.isQuestCompleted(91))) {
      await this.acceptQuest(91);
      await this.hunt("greenguardwest", "Kittarian", "Kittarian's Wallet", 2, true);
      await this.hunt("greenguardwest", "River Fishman", "River Fishman's Wallet", 2, true);
      await this.hunt("greenguardwest", "Slime", "Slime-Soaked Wallet", 2, true);
      await this.killMonster("greenguardwest", "West3", "Up", "Frogzard", "Frogzard's Lint Hoard", 2, true);
      await this.killMonster(
        "greenguardwest",
        "West12",
        "Up",
        "Big Bad Boar",
        "Big Bad Boar's Wallet",
        1,
        true
      );
      await this.completeQuest(91);
    }
    if (!(await this.isQuestCompleted(92))) {
      await this.acceptQuest(92);
      await this.hunt("greenguardwest", "Breken the Vile", "Breken the Vile's Sword", 1, true);
      await this.hunt("greenguardwest", "Ogug Stoneaxe", "Ogug Stoneaxe's Helmet", 1, true);
      await this.completeQuest(92);
    }
  }

  private async masterRanger(): Promise<void> {
    if (!(await this.contains("Master Ranger"))) await this.buyItem("sandsea", 242, 7260, 1, 5682);
    await this.rankClass("Master Ranger");
  }

  private async dragonslayer(): Promise<void> {
    if (!(await this.contains("Dragonslayer")) && !(await this.contains(582))) {
      await this.lairStory();
      await this.buyItem("lair", 38, 582);
    }
    await this.rankClass("Dragonslayer", 582);
  }

  private async scarletSorceress(): Promise<void> {
    const bloodSorceressId = 36298;
    const scarletSorceressId = 42992;

    if ((await this.contains("Scarlet Sorceress")) || (await this.contains(scarletSorceressId))) {
      await this.rankClass("Scarlet Sorceress", scarletSorceressId);
      return;
    }

    if (!(await this.ensureInInventory("Blood Sorceress", bloodSorceressId))) {
      this.log("Farming Blood Sorceress for Scarlet Sorceress.");
      await this.killMonster(
        "towerofmirrors",
        "r16",
        "Top",
        32,
        bloodSorceressId,
        1,
        false,
        ["Blood Sorceress"]
      );
      await this.ensureInInventory("Blood Sorceress", bloodSorceressId);
    }

    if ((await this.contains("Blood Sorceress")) || (await this.contains(bloodSorceressId))) {
      await this.rankClass("Blood Sorceress", bloodSorceressId);
    }
    await this.farmExperience(50);
    await this.acceptQuest(6236);
    await this.completeQuest(6236);
    await this.acceptDrops("Scarlet Sorceress");
    await this.rankClass("Scarlet Sorceress", scarletSorceressId);
  }

  private async dragonslayerGeneral(): Promise<void> {
    if (await this.contains("Dragonslayer General")) {
      await this.rankClass("Dragonslayer General");
      return;
    }
    await this.dragonslayer();
    if (!(await this.hasClassRank("Dragonslayer", 582, 10))) {
      this.log("Dragonslayer General requires Rank 10 Dragonslayer; retrying Dragonslayer rank pass.");
      if (!(await this.rankClass("Dragonslayer", 582))) return;
    }
    await this.lairStory();
    await this.farmGold();
    this.log(
      "Dragonslayer General route: Enchanted Scale x75 from turning in quest 5294; Dragon Claw x100 as a regular drop; then buy Dragonslayer General from shop 1286."
    );
    await this.farmQuestReward({
      questId: 5294,
      map: "dragontown",
      cell: "r4",
      pad: "Right",
      monster: "Tempest Dracolich",
      item: "Dracolich Slain",
      quantity: 12,
      isTemp: true,
      reward: "Enchanted Scale",
      targetQuantity: 75,
      alsoAccept: ["Dragon Claw"]
    });
    await this.killMonster("dragontown", "r4", "Right", "Tempest Dracolich", "Dragon Claw", 100, false);
    await this.ensureInventoryQuantity("Enchanted Scale", 75);
    await this.ensureInventoryQuantity("Dragon Claw", 100);
    await this.buyItem("dragontown", 1286, 35996, 1, 4644);
    if (!(await this.contains("Dragonslayer General"))) {
      throw new Error("Dragonslayer General was not bought from shop 1286 after materials were prepared.");
    }
    await this.rankClass("Dragonslayer General");
  }

  private async burningBlade(): Promise<void> {
    if (await this.contains("Burning Blade")) return;
    await this.killMonster("lostruinswar", "r7", "Left", "Diabolical Warlord", "Burning Blade", 1, false);
  }

  private async blazeBinder(): Promise<void> {
    if (await this.contains("Blaze Binder")) {
      await this.rankClass("Blaze Binder");
      return;
    }
    await this.pyromancer();
    if (await this.contains("Pyromancer")) await this.rankClass("Pyromancer");
    await this.buyItem("fireforge", 1142, "Darkness Sigil");
    await this.buyItem("fireforge", 1142, "Flame Sigil");
    await this.buyItem("fireforge", 1140, "Blaze Binder");
    await this.rankClass("Blaze Binder");
  }

  private async pyromancer(): Promise<void> {
    if ((await this.contains("Pyromancer")) || (await this.contains(12812)) || (await this.contains(12811)))
      return;
    await this.killMonster("xancave", "r9", "Down", "*", "Shurpu Blaze Token", 84, false);
    await this.buyItem("xancave", 447, 12812, 1, 1278);
  }

  private async cryomancer(): Promise<void> {
    if (await this.contains("Cryomancer")) {
      await this.rankClass("Cryomancer");
      return;
    }
    if (!(await this.contains("Glacera Ice Token", 84))) {
      if (await this.isMember()) {
        await this.completeKillQuest({
          questId: 3965,
          map: "frozentower",
          monster: "Frost Invader",
          item: "Dark Ice",
          quantity: 1,
          isTemp: true,
          reward: "Glacera Ice Token"
        });
      }
      await this.completeKillQuest({
        questId: 3966,
        map: "frozentower",
        monster: "Frost Invader",
        item: "Dark Ice",
        quantity: 1,
        isTemp: true,
        reward: "Glacera Ice Token"
      });
    }
    if (await this.contains("Glacera Ice Token", 84)) await this.buyItem("frozenruins", 1056, 27525, 1, 2603);
    await this.rankClass("Cryomancer");
  }

  private async dragonSoulShinobi(): Promise<void> {
    if (await this.contains("DragonSoul Shinobi")) {
      await this.rankClass("DragonSoul Shinobi");
      return;
    }
    while (!(await this.contains("Dragon Shinobi Token", 300))) {
      await this.acceptQuest(7924);
      await this.killMonster(
        "shadowfortress",
        "Enter",
        "Spawn",
        "1st Head of Orochi",
        "Perfect Orochi Scales",
        10,
        false
      );
      await this.completeQuest(7924);
      await this.acceptDrops("Dragon Shinobi Token");
      if (this.options.maxFarmLoops) break;
    }
    await this.buyItem("shadowfortress", 1968, 59476, 1, 8078);
    await this.rankClass("DragonSoul Shinobi");
  }

  private async glacialBerserker(): Promise<void> {
    if (await this.contains("Glacial Berserker")) {
      await this.rankClass("Glacial Berserker");
      return;
    }
    await this.glaceraRepPass();
    await this.buyItem("icewindpass", 1339, "Glacial Berserker", 1, 22266);
    await this.rankClass("Glacial Berserker");
  }

  private async synderesMerge(detail?: string): Promise<void> {
    if (!detail) {
      this.throwMissingTask("Synderes merge", detail);
      return;
    }
    if (!(await this.contains("Synderes' Souvenir", 10))) {
      await this.farmQuestReward({
        questId: 4247,
        map: "enemyforest",
        monster: "Evil Elemental",
        item: "Forest Denizen Slain",
        quantity: 5,
        isTemp: true,
        reward: "Synderes' Souvenir",
        targetQuantity: 10
      });
    }
    await this.buyItem("enemyforest", 332, detail);
  }

  private async coreDaily(name: string): Promise<void> {
    switch (name) {
      case "MonthlyTreasureChestKeys":
        if (
          (await this.isMember()) &&
          (await this.contains("Magic Treasure Chest Key")) &&
          (await this.contains("Treasure Chest"))
        ) {
          await this.acceptQuest(1238);
          await this.completeQuest(1238);
          await this.acceptDrops("*");
        }
        return;
      case "WheelofDoom":
        if (await this.isMember()) await this.completeQuest(3075).catch(() => undefined);
        if (await this.contains("Gear of Doom", 3)) await this.completeQuest(3076).catch(() => undefined);
        await this.acceptDrops("*");
        return;
      case "FreeDailyBoost":
        if (await this.isMember()) await this.completeQuest(4069).catch(() => undefined);
        return;
      case "BeastMasterChallenge":
        if (await this.isMember()) {
          await this.completeKillQuest({
            questId: 3759,
            map: "swordhavenbridge",
            monster: "Purple Slime",
            item: "Purple Slime",
            quantity: 10,
            isTemp: true
          });
        }
        return;
      default:
        await this.checkpoint(`Daily ${friendlyTaskName(name)} has no action today.`);
        return;
    }
  }

  private async capeOfAwe(): Promise<void> {
    if (await this.contains("Cape of Awe")) return;
    await this.bladeOfAweRep();
    await this.completeKillQuest({
      questId: 4178,
      map: "doomvault",
      monster: "Binky",
      item: "Cape Shard",
      quantity: 1,
      isTemp: false,
      reward: "Cape Fragment"
    });
    await this.buyItem("museum", 1129, "Cape of Awe");
  }

  private async complete13LordsOfChaos(withExtras = false): Promise<void> {
    this.log(`Running 13 Lords of Chaos ${withExtras ? "full story and bonus" : "main story"} route.`);
    for (const step of chaosStoryPlan) {
      if (!withExtras && this.isChaosBonusStep(step)) continue;
      await this.runChaosPlanStep(step);
    }
  }

  private async lordOfOrder(): Promise<void> {
    if (await this.contains("Lord Of Order")) {
      await this.rankClass("Lord Of Order");
      return;
    }

    this.log(
      "Running Lord Of Order daily chain. Only the currently unlocked daily can be completed each day."
    );
    await this.farmExperience(50);

    if ((await this.isQuestUnlocked(7156)) && !(await this.isQuestCompleted(7156))) {
      await this.citadelRuinsMurry();
      await this.citadelRuinsPolish();
      if (!(await this.contains("Mage's Gratitude"))) {
        await this.completeQuestPlan(6182, [
          {
            kind: "hunt",
            map: "citadelruins",
            monster: "Enn'tröpy",
            item: "Enn'tröpy Defeated",
            isTemp: true
          }
        ]);
      }
      await this.completeQuestPlan(7156, [
        {
          kind: "hunt",
          map: "watchtower",
          monster: "Chaorrupted Knight",
          item: "Pristine Blades of Order",
          isTemp: false
        },
        { kind: "buy", map: "dreadrock", shopId: 1221, item: "Dreadrock Donation Receipt" },
        {
          kind: "hunt",
          map: "deadmoor",
          monster: "Banshee Mallora",
          item: "Deadmoor Spirits Helped",
          isTemp: false
        },
        { kind: "buy", map: "ravenscar", shopId: 614, item: "Ravenscar's Truth" }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7157)) && !(await this.isQuestCompleted(7157))) {
      await this.completeQuestPlan(7157, [
        {
          kind: "hunt",
          map: "dwarfprison",
          monster: "Warden Elfis",
          item: "Warden Elfis Detained",
          isTemp: false
        },
        { kind: "hunt", map: "prison", monster: "Piggy Drake", item: "Piggy Drake Punished", isTemp: false },
        {
          kind: "hunt",
          map: "mysteriousdungeon",
          monster: "Mysterious Stranger",
          item: "Mysterious Stranger Foiled",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "dreammaster",
          monster: "Calico Cobby",
          item: "Calico Cobby Crushed",
          isTemp: false
        }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7158)) && !(await this.isQuestCompleted(7158))) {
      await this.completeQuestPlan(7158, [
        { kind: "buy", map: "tercessuinotlim", shopId: 1951, item: "Chaoroot", quantity: 15 },
        {
          kind: "hunt",
          map: "chaosboss",
          monster: "Ultra Chaos Warlord",
          item: "Chaotic War Essence",
          quantity: 15,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "shadowgates",
          monster: "Chaorruption",
          item: "Chaorrupting Particles",
          quantity: 15,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "stormtemple",
          monster: "Chaos Lord Lionfang",
          item: "Purified Raindrop",
          quantity: 45,
          isTemp: false
        }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7159)) && !(await this.isQuestCompleted(7159))) {
      await this.completeQuestPlan(7159, [
        { kind: "hunt", map: "gaiazor", monster: "Gaiazor", item: "Gaiazor's Cornerstone", isTemp: false },
        {
          kind: "hunt",
          map: "treetitanbattle",
          monster: "Dakka the Dire Dragon",
          item: "Dakka's Crystal",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "andre",
          monster: "Giant Necklace",
          item: "Andre's Necklace Fragment",
          isTemp: false
        },
        { kind: "hunt", map: "desolich", monster: "Desolich", item: "Desolich's Skull", isTemp: false }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7160)) && !(await this.isQuestCompleted(7160))) {
      await this.completeQuestPlan(6319, [
        { kind: "hunt", map: "drakonnan", monster: "Living Fire", item: "Inferno Heart", isTemp: true }
      ]);
      await this.completeQuestPlan(7160, [
        {
          kind: "hunt",
          map: "kitsune",
          cell: "Boss",
          pad: "Left",
          monster: "*",
          item: "Hanzamune Dragon Koi Blade",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "ledgermayne",
          monster: "Ledgermayne",
          item: "The Supreme Arcane Staff",
          isTemp: false
        },
        { kind: "hunt", map: "mqlesson", monster: "Dragonoid", item: "Dragonoid of Hours", isTemp: false },
        { kind: "mapItem", map: "maxius", id: 5470 },
        { kind: "drop", items: "Safiria's Spirit Orb" },
        { kind: "hunt", map: "drakonnan", monster: "Living Fire", item: "Ice Katana", isTemp: false }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7161)) && !(await this.isQuestCompleted(7161))) {
      await this.completeQuestPlan(7161, [
        { kind: "hunt", map: "elemental", monster: "Tree of Destiny", item: "Unity of Life", isTemp: false },
        { kind: "hunt", map: "orchestra", monster: "Faust", item: "Harmony of Solace", isTemp: false },
        {
          kind: "hunt",
          map: "cathedral",
          monster: "Pactagonal Knight",
          item: "Teamwork Observed",
          quantity: 100,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "goose",
          monster: "Queen's ArchSage",
          item: "Scroll of Enchantment",
          isTemp: false
        }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7162)) && !(await this.isQuestCompleted(7162))) {
      await this.completeQuestPlan(7162, [
        {
          kind: "hunt",
          map: "newfinale",
          monster: "Alliance Healer",
          item: "Acolyte's Braille",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "wardwarf",
          monster: "Drow Assassin",
          item: "Suppressed Drows",
          quantity: 50,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "warundead",
          monster: "Skeletal Fire Mage",
          item: "Suppressed Undead",
          quantity: 50,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "warhorc",
          monster: "Horc Warrior",
          item: "Suppressed Horcs",
          quantity: 50,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "weaverwar",
          monster: "Weaver Queen's Hound",
          item: "Suppressed Weavers",
          quantity: 50,
          isTemp: false
        },
        { kind: "hunt", map: "extriki", monster: "Extriki", item: "Strength of Resilience", isTemp: false }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7163)) && !(await this.isQuestCompleted(7163))) {
      await this.completeQuestPlan(7163, [
        { kind: "hunt", map: "elfhame", monster: "Guardian Spirit", item: "Law of Nature", isTemp: false },
        { kind: "hunt", map: "deepchaos", monster: "Kathool", item: "Law of Time", isTemp: false },
        {
          kind: "hunt",
          map: "necrocavern",
          monster: "ShadowStone Support",
          item: "Law of Gravity",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "blackholesun",
          monster: "Reflecteract",
          item: "Law of Relativity",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "thunderfang",
          monster: "Tonitru",
          item: "Law of Conservation of Energy",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "lair",
          monster: "Red Dragon",
          item: "Law of Low Drop Rates",
          quantity: 100,
          isTemp: false
        }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7164)) && !(await this.isQuestCompleted(7164))) {
      await this.completeQuestPlan(7164, [
        {
          kind: "hunt",
          map: "doomvaultb",
          cell: "r26",
          pad: "Left",
          monster: "Undead Raxgore",
          item: "Weapon Imprint",
          quantity: 15,
          isTemp: false
        },
        { kind: "buy", map: "greenguardwest", shopId: 363, item: "Lure of Order" },
        {
          kind: "hunt",
          map: "mirrorportal",
          cell: "r6",
          pad: "Right",
          monster: "Ultra Xiang",
          item: "Quixotic Mana Essence",
          quantity: 10,
          isTemp: true
        },
        {
          kind: "hunt",
          map: "yasaris",
          monster: "Serepthys",
          item: "Inversion Infusion",
          quantity: 5,
          isTemp: false
        }
      ]);
      return;
    }

    if ((await this.isQuestUnlocked(7165)) && !(await this.isQuestCompleted(7165))) {
      await this.completeQuestPlan(
        7165,
        [
          {
            kind: "hunt",
            map: "ultradrakath",
            monster: "Champion of Chaos",
            item: "Champion of Chaos Confronted",
            isTemp: false
          }
        ],
        50741
      );
      await this.acceptDrops("Lord Of Order");
      await this.rankClass("Lord Of Order");
    }
  }

  private async citadelRuinsMurry(): Promise<void> {
    if (await this.isQuestCompleted(182)) return;
    await this.storyKillQuest(144, "citadel", "Inquisitor Guard");
    await this.storyKillQuest(145, "citadel", "Crusader");
    await this.storyKillQuest(146, "citadel", "Inquisitor Captain");
    await this.storyKillQuest(147, "citadel", "Burning Witch");
    await this.storyKillQuest(148, "citadel", "Inquisitor Guard");
    await this.storyKillQuest(149, "citadel", "Inquisitor Guard");
    await this.storyKillQuest(181, "citadel", "Belrot The Fiend");
    await this.completeQuestPlan(182, [
      { kind: "hunt", map: "citadel", monster: "Grand Inquisitor", item: "Ring of Evil Intent", isTemp: true }
    ]);
  }

  private async citadelRuinsPolish(): Promise<void> {
    if (await this.isQuestCompleted(6182)) return;
    await this.storyMapItemQuest(6172, "citadelruins", 5592);
    await this.storyKillQuest(6172, "citadelruins", "Mana Sprites");
    await this.storyMapItemQuest(6173, "citadelruins", 5602);
    await this.completeQuestPlan(6174, [
      {
        kind: "hunt",
        map: "citadelruins",
        monster: "Inquisitor Hobo",
        item: "Inquisitor Hobos Defeated",
        quantity: 8,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "citadelruins",
        monster: "Inquisitor Hobo",
        item: "Inquisitors' Manifesto",
        quantity: 5,
        isTemp: true
      }
    ]);
    await this.storyMapItemQuest(6175, "citadelruins", 5593, 5);
    await this.storyKillQuest(6175, "citadelruins", "Inquisitor Hobo");
    await this.completeQuestPlan(6176, [
      {
        kind: "hunt",
        map: "citadelruins",
        monster: "Inquisitor Heavy",
        item: "Heavies Beat Down",
        quantity: 2,
        isTemp: true
      },
      { kind: "hunt", map: "citadelruins", monster: "Inquisitor Heavy", item: "Citadel Key", isTemp: true },
      { kind: "mapItem", map: "citadelruins", id: 5603 }
    ]);
    await this.storyMapItemQuest(6177, "citadelruins", [5594, 5595, 5596]);
    await this.storyKillQuest(6177, "citadelruins", "Inquisitor Hobo");
    await this.storyMapItemQuest(6178, "citadelruins", 5597);
    await this.storyKillQuest(6178, "citadelruins", "Mana Sprites");
    await this.storyMapItemQuest(6179, "citadelruins", 5598);
    await this.storyMapItemQuest(6180, "citadelruins", [5599, 5600, 5601]);
    await this.storyKillQuest(6180, "citadelruins", "Inquisitor Hobo");
    await this.storyKillQuest(6181, "citadelruins", "Grand Inquisitor Murry");
    await this.storyKillQuest(6182, "citadelruins", "Enn'tröpy");
  }

  private async frostSpiritReaver(): Promise<void> {
    if ((await this.contains("Frost SpiritReaver")) || (await this.contains("Frost Spirit Reaver"))) {
      await this.rankClass("Frost SpiritReaver");
      return;
    }
    await this.cryomancer();
    await this.glaceraRepPass();
    if (!(await this.contains("Frost Sigil"))) {
      this.log(
        "Frost SpiritReaver requires Frost Sigil from the Cryomancer daily chain; run the daily again tomorrow if it is missing."
      );
      return;
    }
    await this.farmExperience(60);
    await this.ensureKyanosSet();
    await this.iceNinth(9);
    await this.glaceranAttunement(15);
    await this.chainQuest(7922);
    await this.acceptDrops("Frost SpiritReaver");
    await this.rankClass("Frost SpiritReaver");
  }

  private async ensureKyanosSet(): Promise<void> {
    if (!(await this.contains("Favored of Kyanos"))) {
      await this.hunt("icedungeon", "Shade of Kyanos", "Warrior of Kyanos", 1, false);
      await this.icyTokens(25, 15, 10, 5);
      await this.buyItem("icedungeon", 1948, "Favored of Kyanos");
    }
    if (!(await this.contains("Envoy of Kyanos"))) {
      await this.icyTokens(50, 30, 20, 10);
      await this.buyItem("icedungeon", 1948, "Envoy of Kyanos");
    }
  }

  private async icyTokens(token1 = 300, token2 = 300, token3 = 300, token4 = 300): Promise<void> {
    while (!(await this.contains("Icy Token I", token1))) {
      await this.acceptQuest(7838).catch(() => undefined);
      await this.acceptQuest(7840).catch(() => undefined);
      await this.hunt("icedungeon", "Frosted Banshee", "Frosted Banshee Defeated", 10, true);
      await this.hunt("icedungeon", "Frozen Undead", "Frozen Undead Defeated", 10, true);
      await this.hunt("icedungeon", "Ice Symbiote", "Ice Symbiote Defeated", 10, true);
      await this.completeQuest(7838).catch(() => undefined);
      await this.completeQuest(7840).catch(() => undefined);
      await this.acceptDrops("Icy Token I");
      if (this.options.maxFarmLoops) break;
    }
    while (!(await this.contains("Icy Token II", token2))) {
      await this.acceptQuest(7839);
      await this.hunt("icedungeon", "Spirit of Ice", "Spirit of Ice Defeated", 10, true);
      await this.hunt("icedungeon", "Ice Crystal", "Ice Crystal Defeated", 10, true);
      await this.hunt("icedungeon", "Frigid Spirit", "Frigid Spirit Defeated", 10, true);
      await this.completeQuest(7839).catch(() => undefined);
      await this.acceptDrops("Icy Token II");
      if (this.options.maxFarmLoops) break;
    }
    while (!(await this.contains("Icy Token III", token3))) {
      await this.acceptQuest(7840);
      await this.hunt("icedungeon", "Living Ice", "Living Ice Defeated", 5, true);
      await this.hunt("icedungeon", "Crystallized Elemental", "Crystallized Elemental Defeated", 5, true);
      await this.hunt("icedungeon", "Frozen Demon", "Frozen Demon Defeated", 5, true);
      await this.completeQuest(7840).catch(() => undefined);
      await this.acceptDrops("Icy Token III");
      if (this.options.maxFarmLoops) break;
    }
    while (!(await this.contains("Icy Token IV", token4))) {
      await this.acceptQuest(7841);
      await this.hunt("icedungeon", "Image of Glace", "Glace's Approval", 1, true);
      await this.hunt("icedungeon", "Abel", "Abel's Approval", 1, true);
      await this.hunt("icedungeon", "Shade of Kyanos", "Kyanos' Approval", 1, true);
      await this.completeQuest(7841).catch(() => undefined);
      await this.acceptDrops("Icy Token IV");
      if (this.options.maxFarmLoops) break;
    }
  }

  private async iceNinth(quantity: number): Promise<void> {
    if (await this.contains("Ice-Ninth", quantity)) return;
    await this.farmQuestReward({
      questId: 3955,
      map: "frozenruins",
      monster: "Frost Invader",
      item: "Spark of Courage",
      quantity: 1,
      isTemp: true,
      reward: "Flame of Courage",
      targetQuantity: 25
    });
    if (!(await this.contains("Fallen Scythe of Vengeance"))) {
      await this.hunt("northstar", "Karok The Fallen", "Karok's Glaceran Gem", 1, false);
      await this.buyItem("glacera", 1055, "Scythe of Vengeance");
      await this.buyItem("glacera", 1055, "Cold Scythe of Vengeance");
      await this.buyItem("glacera", 1055, "Frigid Scythe of Vengeance");
      await this.buyItem("glacera", 1055, "Fallen Scythe of Vengeance");
    }
    while (!(await this.contains("Ice-Ninth", quantity))) {
      while (!(await this.contains("Ice Diamond", 100))) {
        await this.completeQuestPlan(
          7279,
          [
            {
              kind: "hunt",
              map: "kingcoal",
              cell: "r1",
              pad: "Left",
              monster: "*",
              item: "Frozen Coal",
              quantity: 10,
              isTemp: true
            }
          ],
          -1,
          true
        );
        await this.acceptDrops("Ice Diamond");
        if (this.options.maxFarmLoops) break;
      }
      await this.completeQuestPlan(
        7920,
        [
          { kind: "hunt", map: "snowmore", monster: "Jon S'NOOOOOOO", item: "Northern Crown", isTemp: false },
          {
            kind: "hunt",
            map: "icestormarena",
            monster: "Arctic Wolf",
            item: "Ice Needle",
            quantity: 30,
            isTemp: false
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Ice-Ninth");
      if (this.options.maxFarmLoops) break;
    }
  }

  private async glaceranAttunement(quantity: number): Promise<void> {
    if (await this.contains("Glaceran Attunement", quantity)) return;
    await this.iceNinth(1);
    await this.glaceraRepPass();
    if (!(await this.contains("FrostSlayer")) && !(await this.contains(39011))) {
      await this.hunt("iceplane", "Enfield", "FrostSlayer", 1, false);
    }
    while (
      !(await this.contains("Glaceran Attunement", quantity)) &&
      !(await this.contains(59216, quantity))
    ) {
      await this.completeQuestPlan(
        7921,
        [
          {
            kind: "hunt",
            map: "cryowar",
            monster: "Super-Charged Karok",
            item: "Glacial Crystal",
            quantity: 100,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "frozenlair",
            monster: "Legion Lich Lord",
            item: "Necrotic Orb",
            quantity: 2,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "frozenlair",
            monster: "Frozen Legionnaire",
            item: "Ice Spike",
            quantity: 20,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "frozenlair",
            monster: "Frozen Legionnaire",
            item: "Ice Splinter",
            quantity: 20,
            isTemp: false
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Glaceran Attunement");
      if (this.options.maxFarmLoops) break;
    }
  }

  private async northlandsMonk(): Promise<void> {
    if (await this.contains("Northlands Monk")) {
      await this.rankClass("Northlands Monk");
      return;
    }
    await this.killMonster("frozensoul", "r4", "Left", "Frozensoul Queen", "Northlands Monk", 1, false);
    await this.rankClass("Northlands Monk");
  }

  private async shaman(): Promise<void> {
    if (await this.contains("Shaman")) {
      await this.rankClass("Shaman");
      return;
    }
    await this.completeKillQuest({
      questId: 816,
      map: "arcangrove",
      monster: "Gorillaphant",
      item: "Slain Gorillaphant",
      quantity: 1,
      isTemp: true
    }).catch(() => undefined);
    await this.buyItem("arcangrove", 171, "Shaman");
    await this.rankClass("Shaman");
  }

  private async celestialArena(): Promise<void> {
    const rounds: Array<[number, string, string]> = [
      [6013, "celestialarenab", "Slork Construct"],
      [6014, "celestialarenab", "Azkorath Construct"],
      [6015, "celestialarenab", "Blessed Inquisitor"],
      [6016, "celestialarenab", "Lich Ravager Construct"],
      [6017, "celestialarenab", "Ring Guardian Construct"],
      [6018, "celestialarenab", "Serepthys Construct"],
      [6019, "celestialarenab", "Yaomo Construct"],
      [6020, "celestialarenab", "Cerberus Construct"],
      [6021, "celestialarenab", "Infernal Warrior Construct"],
      [6022, "celestialarenab", "Infernal Warlord Construct"],
      [6023, "celestialarenac", "Conquest Construct"],
      [6024, "celestialarenac", "War Construct"],
      [6025, "celestialarenac", "Death Construct"],
      [6026, "celestialarenac", "Famine Construct"],
      [6027, "celestialarenac", "Diabolical Warlord Construct"],
      [6028, "celestialarenac", "Undead Raxgore Construct"],
      [6029, "celestialarenac", "Blessed Karok"],
      [6030, "celestialarenac", "Kezeroth Construct"],
      [6031, "celestialarenac", "Shadow Lord Construct"],
      [6032, "celestialarenac", "Desolich Construct"],
      [6033, "celestialarenad", "Queen of Hope"],
      [6034, "celestialarenad", "Malxas Construct"],
      [6035, "celestialarenad", "Blessed Gladius"],
      [6036, "celestialarenad", "High Celestial Priest"],
      [6037, "celestialarenad", "Blessed Enfield"],
      [6038, "celestialarenad", "Avatar of Spirits"],
      [6039, "celestialarenad", "Avatar of Time"],
      [6040, "celestialarenad", "Avatar of Life"],
      [6041, "celestialarenad", "Fallen Abezeth"],
      [6042, "celestialarenad", "Aranx"]
    ];
    await this.refreshGear("Celestial Arena start");
    for (const [questId, map, monster] of rounds)
      await this.storyKillQuest(questId, map, monster).catch(() => undefined);
    await this.refreshGear("Celestial Arena finish");
  }

  private async burningBladeOfAbezeth(): Promise<void> {
    if (await this.contains("Burning Blade Of Abezeth")) return;
    await this.celestialArena();
    await this.killMonster("celestialarenad", "Enter", "Spawn", "Aranx", "Champion Sash", 20, false);
    await this.buyItem("celestialarena", 1474, "Burning Blade Of Abezeth");
  }

  private async yamiNoRonin(): Promise<void> {
    if (await this.contains("Yami no Ronin")) {
      await this.rankClass("Yami no Ronin");
      return;
    }
    await this.acceptQuest(7408);
    await this.farmQuestReward({
      questId: 7445,
      map: "shadowfortress",
      cell: "r12",
      pad: "Top",
      monster: "*",
      item: "Perfect Orochi Scales",
      quantity: 888,
      isTemp: false,
      reward: "Yokai Sword Scroll",
      targetQuantity: 1
    });
    await this.completeQuest(7408);
    await this.acceptDrops("Yami no Ronin");
    await this.rankClass("Yami no Ronin");
  }

  private async dragonOfTime(): Promise<void> {
    if (await this.contains("Dragon of Time")) {
      await this.rankClass("Dragon of Time");
      return;
    }

    await this.completeQuestPlan(7716, [
      {
        kind: "hunt",
        map: "mummies",
        cell: "Enter",
        pad: "Spawn",
        monster: "Mummy",
        item: "Lost Hieroglyphic",
        quantity: 30,
        isTemp: false
      },
      { kind: "buy", map: "librarium", shopId: 651, item: "Myths of Lore" },
      {
        kind: "hunt",
        map: "timelibrary",
        cell: "FrameAQ",
        pad: "Left",
        monster: "*",
        item: "Historia Page",
        quantity: 100,
        isTemp: false
      },
      { kind: "hunt", map: "kingcoal", monster: "Frost King", item: "Frost King's Story", isTemp: false },
      {
        kind: "hunt",
        map: "baconcatyou",
        cell: "Enter",
        pad: "Spawn",
        monster: "*",
        item: "Your Own Memories",
        isTemp: false
      }
    ]);

    await this.completeQuestPlan(7717, [
      {
        kind: "hunt",
        map: "dragonchallenge",
        monster: "Desoloth the Final",
        item: "Desoloth's Destructive Aura",
        isTemp: false
      },
      { kind: "hunt", map: "blindingsnow", monster: "Nythera", item: "Nythera's Patience", isTemp: false },
      { kind: "hunt", map: "greed", monster: "Goregold", item: "Goregold's Luck", isTemp: false },
      { kind: "hunt", map: "darkplane", monster: "Victorious", item: "Victorious's Dignity", isTemp: false },
      {
        kind: "hunt",
        map: "trigoras",
        cell: "r4a",
        pad: "Left",
        monster: "trigoras",
        item: "Trigoras's Tenacity",
        quantity: 3,
        isTemp: false
      }
    ]);

    await this.farmExperience(31);
    await this.goldenBladeOfFate();
    await this.pinkBladeOfDestruction();
    await this.completeQuestPlan(7718, [
      { kind: "hunt", map: "underworld", monster: "Laken", item: "Cross-Era Stabilizer", isTemp: false },
      { kind: "hunt", map: "mqlesson", monster: "Dragonoid", item: "Dragonoid of Hours", isTemp: false },
      {
        kind: "hunt",
        map: "timespace",
        monster: "Chaos Lord Iadoa",
        item: "Chronomancer's Codex",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "arena",
        monster: "Timestream Rider",
        item: "Timestream String",
        quantity: 100,
        isTemp: false
      }
    ]);

    await this.farmExperience(40);
    await this.completeQuestPlan(7719, [
      {
        kind: "hunt",
        map: "cathedral",
        monster: "Incarnation of Time",
        item: "Time Loop Broken",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "portalwar",
        cell: "r4",
        pad: "Right",
        monster: "*",
        item: "Anomaly Silenced",
        quantity: 100,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "portalmaze",
        monster: "ChronoLord",
        item: "Chronolord Stopped",
        quantity: 50,
        isTemp: false
      },
      { kind: "hunt", map: "ubear", monster: "Cornholio", item: "Is This a Wormhole?", isTemp: false }
    ]);

    await this.farmExperience(60);
    await this.completeQuestPlan(7720, [
      {
        kind: "hunt",
        map: "lairdefend",
        monster: "Dragon Summoner",
        item: "Dimensional Dragon Portal",
        quantity: 2,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "bosschallenge",
        monster: "Grievous Inbunche",
        item: "Brutal Slash Studied",
        quantity: 10,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "hydrachallenge",
        cell: "h90",
        pad: "Left",
        monster: "*",
        item: "Epic Hydra Fang",
        quantity: 125,
        isTemp: false
      }
    ]);

    await this.farmExperience(60);
    await this.darkonReceipts(100);
    await this.completeQuestPlan(6286, [
      {
        kind: "hunt",
        map: "guardiantree",
        cell: "r12",
        pad: "Left",
        monster: "Terrane",
        item: "Semiramis Feather",
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(5186, [
      { kind: "hunt", map: "whitehole", monster: "Mehensi Serpent", item: "Mehen Slain", isTemp: true }
    ]);
    await this.buyItem("collection", 325, 56815, 1, 7698);
    await this.completeQuestPlan(7721, [
      { kind: "hunt", map: "ivoliss", monster: "Ivoliss", item: "Sword of Voids", isTemp: false },
      {
        kind: "hunt",
        map: "aqw3d",
        cell: "r13",
        pad: "Bottom",
        monster: "*",
        item: "Cross-Dimensional Weapons",
        quantity: 300,
        isTemp: false
      }
    ]);

    await this.farmExperience(65);
    await this.completeQuestPlan(7722, [
      {
        kind: "hunt",
        map: "moonlab",
        monster: "Slime Mold",
        item: "Unyielding Slime",
        quantity: 300,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "bosschallenge",
        monster: "Mutated Void Dragon",
        item: "Omnipotent Cells",
        quantity: 20,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "underlair",
        monster: "ArchFiend Dragonlord",
        item: "Dragon's Plasma",
        quantity: 20,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "chaoskraken",
        monster: "Chaos Kraken",
        item: "Chaotic Invertebrae",
        quantity: 20,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "towerofdoom9",
        monster: "Dread Fang",
        item: "Cryostatic Essence",
        quantity: 20,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "castleroof",
        monster: "Ultra Chaos Dragon",
        item: "Salvaged Chaos Dragon Biomass",
        quantity: 20,
        isTemp: false
      }
    ]);

    await this.farmExperience(70);
    await this.completeQuestPlan(7723, [
      {
        kind: "hunt",
        map: "volcano",
        cell: "r10",
        pad: "Left",
        monster: "Fire Imp",
        item: "Fire Essence",
        quantity: 3000,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "charredplains",
        monster: "Akriloth",
        item: "Akriloth's Flametongue",
        quantity: 100,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "ultraphedra",
        monster: "Ultra Phedra",
        item: "Immortal Embers",
        quantity: 50,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "thevoid",
        monster: "Reaper",
        item: "Ashes from the Void Realm",
        quantity: 50,
        isTemp: false
      }
    ]);

    await this.farmExperience(75);
    await this.bladeOfAweRep();
    await this.mysteriousEgg();
    await this.completeQuestPlan(7724, [
      {
        kind: "hunt",
        map: "chaoslord",
        cell: "r2",
        pad: "Left",
        monster: "*",
        item: "Conquered Past",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "towerofdoom10",
        monster: "Slugbutter",
        item: "Slugbutter Trophy",
        quantity: 100,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "icewing",
        monster: "Warlord Icewing",
        item: "Icewing's Laurel",
        quantity: 30,
        isTemp: false
      }
    ]);

    await this.acceptDrops("Dragon of Time");
    await this.rankClass("Dragon of Time");
    await this.dragonOfTimeExtras();
  }

  private async goldenBladeOfFate(): Promise<void> {
    if (await this.contains("Golden Blade of Fate")) return;
    await this.storyKillQuest(5669, "tutor", "Horc Tutor Trainer");
    await this.storyKillQuest(5670, "prison", "Piggy Drake");
    await this.storyKillQuest(5671, "lavarun", "Phedra");
    await this.storyKillQuest(5672, "chaoscrypt", "Chaorrupted Armor");
    await this.storyKillQuest(5673, "j6", "Sketchy Frogzard");
    await this.storyMapItemQuest(5674, "orcpath", 5143, 3);
    await this.storyKillQuest(5675, "lair", "Red Dragon");
    await this.storyMapItemQuest(5676, "well", 5144);
    await this.storyKillQuest(5677, "cellar", "GreenRat");
    await this.completeQuestPlan(5678, [
      { kind: "hunt", map: "sepulchure", monster: "Dark Sepulchure", item: "Dark Spirit", isTemp: true }
    ]);
    await this.completeQuestPlan(5679, [{ kind: "mapItem", map: "yulgar", id: 5145 }]);
    await this.acceptDrops("Golden Blade of Fate");
  }

  private async pinkBladeOfDestruction(): Promise<void> {
    if (await this.contains("Pink Blade of Destruction")) return;
    while (!(await this.contains("Fuchsia Dye", 50))) {
      await this.completeQuestPlan(
        1487,
        [
          {
            kind: "hunt",
            map: "natatorium",
            monster: "Anglerfish",
            item: "Pink Coral",
            quantity: 3,
            isTemp: true
          },
          {
            kind: "hunt",
            map: "bloodtuskwar",
            monster: "Chaotic Vulture",
            item: "Amaranth Flower",
            quantity: 5,
            isTemp: true
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Fuchsia Dye");
      if (this.options.maxFarmLoops) break;
    }
    while (!(await this.contains("Zealous Badge", 5))) {
      await this.completeQuestPlan(
        7616,
        [
          {
            kind: "hunt",
            map: "techdungeon",
            monster: "Kalron the Cryptborg",
            item: "Immutable Dedication",
            quantity: 7,
            isTemp: true
          },
          {
            kind: "hunt",
            map: "techdungeon",
            monster: "DoomBorg Guard",
            item: "Paladin Armor Scraps",
            quantity: 30,
            isTemp: true
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Zealous Badge");
      if (this.options.maxFarmLoops) break;
    }
    await this.completeQuestPlan(
      7650,
      [
        {
          kind: "hunt",
          map: "undergroundlabb",
          monster: "Ultra BrutalCorn",
          item: "Unicorn Essence",
          quantity: 5,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "undergroundlabb",
          monster: "Ultra Battle Gem",
          item: "Gem Power",
          quantity: 5,
          isTemp: false
        }
      ],
      55884
    );
    await this.acceptDrops("Pink Blade of Destruction");
  }

  private async darkonReceipts(quantity: number): Promise<void> {
    if (await this.contains("Darkon's Receipt", quantity)) return;
    await this.acceptQuest(7324);
    await this.killMonster("arcangrove", "LeftBack", "Left", "*", "Darkon's Receipt", quantity, false);
    await this.completeQuest(7324).catch(() => undefined);
    await this.acceptDrops("Darkon's Receipt");
  }

  private async mysteriousEgg(): Promise<void> {
    if (await this.contains("Mysterious Egg")) return;
    await this.completeQuestPlan(
      6171,
      [
        {
          kind: "hunt",
          map: "pride",
          cell: "r13",
          pad: "Left",
          monster: "Valsarian",
          item: "Key of Pride",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "gluttony",
          cell: "Enter2",
          pad: "Top",
          monster: "Deflated Glutus",
          item: "Key of Gluttony",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "greed",
          cell: "r16",
          pad: "Left",
          monster: "Goregold",
          item: "Key of Greed",
          isTemp: false
        },
        { kind: "hunt", map: "sloth", monster: "Phlegnn", item: "Key of Sloth", isTemp: false },
        { kind: "hunt", map: "lust", monster: "Lascivia", item: "Key of Lust", isTemp: false },
        { kind: "hunt", map: "maloth", monster: "Maloth", item: "Key of Envy", isTemp: false },
        { kind: "hunt", map: "wrath", monster: "Gorgorath", item: "Key of Wrath", isTemp: false }
      ],
      42497
    );
    await this.acceptDrops("Mysterious Egg");
  }

  private async dragonOfTimeExtras(): Promise<void> {
    const extras = ["Dragon of Time Horns", "Dragon of Time Horns + Ponytail", "Dragon of Time Wings + Tail"];
    if (await this.contains(extras)) return;
    await this.borgarsStory();
    while (!(await this.contains("Burger Buns", 5))) {
      await this.completeQuestPlan(
        7522,
        [{ kind: "hunt", map: "borgars", monster: "Burglinster", item: "Burglinster Cured", isTemp: true }],
        -1,
        true
      );
      await this.acceptDrops("Burger Buns");
      if (this.options.maxFarmLoops) break;
    }
    if (!(await this.contains("Borgar"))) await this.buyItem("borgars", 1884, 54650, 1, 7387);
    await this.acceptQuest(7725);
    await this.completeQuest(7725);
    await this.acceptDrops(extras);
    await this.bank(extras);
  }

  private async borgarsStory(): Promise<void> {
    if (await this.isQuestCompleted(7522)) return;
    await this.storyKillQuest(7510, "extinction", ["Lard", "Freezer Drone"]);
    await this.storyKillQuest(7511, "battlefowl", "Chickencow");
    await this.storyKillQuest(7512, "freakitiki", "Sugar Imp");
    await this.storyKillQuest(7513, "stalagbite", "Balboa");
    await this.storyKillQuest(7514, "pirates", "Fishwing");
    await this.storyMapItemQuest(7515, "arcangrove", 7370);
    await this.storyMapItemQuest(7516, "thespan", 7371);
    await this.completeQuestPlan(7518, [
      {
        kind: "hunt",
        map: "portalmaze",
        monster: "Time Wraith",
        item: "Time Fragment",
        quantity: 10,
        isTemp: true
      }
    ]);
    await this.chainQuest(7517);
    await this.storyMapItemQuest(7519, "brightfortress", 7372);
    await this.completeQuestPlan(7520, [
      {
        kind: "hunt",
        map: "brightfortress",
        monster: "Brightscythe Reaver",
        item: "Kale",
        quantity: 4,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "brightfortress",
        monster: "Brightscythe Reaver",
        item: "Quinoa",
        quantity: 4,
        isTemp: true
      }
    ]);
    await this.storyMapItemQuest(7521, "borgars", 7373);
    await this.storyKillQuest(7522, "borgars", "Burglinster");
  }

  private async kingsEcho(): Promise<void> {
    if (await this.contains("King's Echo")) {
      await this.rankClass("King's Echo");
      return;
    }
    await this.farmExperience(80);
    await this.complete13LordsOfChaos(true);
    await this.buyItem("battleoff", 2193, "Alden's Liberation Armor");
    await this.completeQuestPlan(10440, [
      {
        kind: "hunt",
        map: "queenbattle",
        monster: "Queen of Monsters",
        item: "Calcified Tear",
        quantity: 60,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "dreadhaven",
        monster: "Slugwrath",
        item: "Whispers of Chaos",
        quantity: 40,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "ultradrakath",
        monster: "Champion of Chaos",
        item: "Trace of Chaos",
        quantity: 13,
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(10442, [
      {
        kind: "hunt",
        map: "chaoswar",
        cell: "r9",
        pad: "Left",
        monster: "*",
        item: "Endured Against Chaos",
        quantity: 113,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "falcontower",
        monster: "Sepulchure",
        item: "Endured Against a Fallen Friend",
        quantity: 100,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "naoisegrave",
        monster: "Volgritian",
        item: "Endured Against the Great Dragon",
        quantity: 70,
        isTemp: false
      },
      {
        kind: "hunt",
        map: (await this.isMember()) ? "shattersword" : "infernalarena",
        monster: (await this.isMember()) ? "Graveclaw the Defiler" : "Destructive Defiler",
        item: "Endured Against the Defiler",
        quantity: 100,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "ebondungeon",
        monster: "Dethrix",
        item: "Endured Against the Monster King",
        quantity: 90,
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(10441, [
      { kind: "buy", map: "deepforest", shopId: 1999, item: "Gold Voucher 500k", quantity: 100 },
      {
        kind: "hunt",
        map: "thelimacity",
        cell: "r5",
        pad: "Center",
        monster: "*",
        item: "Dwarven Gold",
        quantity: 30,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "liatarahill",
        cell: "r9",
        pad: "Left",
        monster: "*",
        item: "Skye Gold",
        quantity: 50,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "atlaskingdom",
        cell: "r2",
        pad: "Left",
        monster: "*",
        item: "Atlas Gold",
        quantity: 75,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "camlan",
        cell: "r9",
        pad: "Left",
        monster: "*",
        item: "Camlan Gold",
        quantity: 120,
        isTemp: false
      }
    ]);
    await this.buyItem("castle", 2631, 96387);
    await this.completeQuestPlan(10438, [{ kind: "mapItem", map: "terminatemple", id: 15048 }]);
    await this.chainQuest(10439);
    await this.buyItem("terminatemple", 2630, 95742);
    await this.acceptDrops("King's Echo");
    await this.rankClass("King's Echo");
  }

  private async shadowrealmMerge(detail?: string): Promise<void> {
    if (!detail) return;
    await this.buyItem("shadowrealm", 1785, detail);
  }

  private async exaltedApotheosisPrereqs(): Promise<void> {
    await this.completeKillQuest({
      questId: 8542,
      map: "timeinn",
      monster: "Ultra Ezrajal",
      item: "Ezrajal Insignia",
      isTemp: false
    }).catch(() => undefined);
    await this.completeKillQuest({
      questId: 8543,
      map: "timeinn",
      monster: "Ultra Warden",
      item: "Warden Insignia",
      isTemp: false
    }).catch(() => undefined);
    await this.completeKillQuest({
      questId: 8544,
      map: "timeinn",
      monster: "Ultra Engineer",
      item: "Engineer Insignia",
      isTemp: false
    }).catch(() => undefined);
  }

  private async nationSupplies(item?: string, quantity = 1): Promise<void> {
    const rewards = [
      "Tainted Gem",
      "Dark Crystal Shard",
      "Diamond of Nulgath",
      "Voucher of Nulgath",
      "Voucher of Nulgath (non-mem)",
      "Gem of Nulgath",
      "Unidentified 10",
      "Essence of Nulgath",
      "Receipt of Swindle",
      "Unidentified 13"
    ];
    const targets: Array<[string, number]> = item
      ? [[item, quantity]]
      : [
          ["Tainted Gem", 1000],
          ["Dark Crystal Shard", 1000],
          ["Diamond of Nulgath", 1000],
          ["Gem of Nulgath", 1000],
          ["Unidentified 10", 1000],
          ["Essence of Nulgath", 100],
          ["Unidentified 13", 13]
        ];

    let loops = 0;
    while (!this.signal?.aborted && !(await this.hasAllMaterials(targets))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        2857,
        [{ kind: "hunt", map: "escherion", monster: "Escherion", item: "Relic of Chaos", isTemp: false }],
        -1,
        true
      );
      await this.acceptDrops(rewards);
    }
  }

  private async archPaladin(rankUpClass = true, armorOnly = false): Promise<void> {
    if ((await this.contains("ArchPaladin")) || (await this.contains(36920))) {
      if (rankUpClass) await this.rankClass("ArchPaladin");
      return;
    }

    if (!(await this.isMember()) && !(await this.isQuestUnlocked(5467))) {
      await this.completeQuestPlan(5463, [
        { kind: "buy", map: "temple", shopId: 288, item: "Stone Paladin Armor" },
        { kind: "buy", map: "darkthronehub", shopId: 1308, item: "Exalted Paladin Seal" }
      ]);
      await this.unlockBlodMineCrafting();
      await this.battleUnderB("Undead Energy", 1000);
      await this.completeQuestPlan(5464, [
        {
          kind: "hunt",
          map: "doomvault",
          cell: "r5",
          pad: "Left",
          monster: "Binky",
          item: "Binky's Uni-horn",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "banished",
          monster: "Desterrat Moya",
          item: "Desterrat Moya Tentacle",
          isTemp: false
        },
        { kind: "hunt", map: "dreadfight", monster: "*", item: "Dreadhaven Helm", isTemp: false },
        { kind: "hunt", map: "doomkitten", monster: "DoomKitten", item: "DoomKitten Claw", isTemp: true },
        { kind: "hunt", map: "vordredboss", monster: "Vordred", item: "Vordred's Skull", isTemp: false }
      ]);
      await this.completeQuestPlan(5465, [
        {
          kind: "hunt",
          map: "xantown",
          cell: "r8",
          pad: "Left",
          monster: "Xan",
          item: "Pyromancer Artifact",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "dragonheart",
          monster: "Proto-Air Dracolich",
          item: "Zephyrus Manifesto",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "northstar",
          monster: "Karok The Fallen",
          item: "Karok's Glaceran Gem",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "thirdspell",
          monster: "Mana Phoenix",
          item: "Nightmare Kibble",
          quantity: 200,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "thunderfang",
          monster: "Lightning Ball",
          item: "Condensed Energy",
          isTemp: false
        },
        {
          kind: "hunt",
          map: "downward",
          cell: "r11",
          pad: "Right",
          monster: "Crystal Mana Construct",
          item: "Crystallized Mana Catalyst",
          isTemp: false
        },
        { kind: "hunt", map: "farm", monster: "Treeant", item: "Just the Perfect Stick", isTemp: false }
      ]);
      await this.completeQuestPlan(5466, [
        { kind: "buy", map: "castle", shopId: 88, item: "Holy Hand Grenade" },
        {
          kind: "hunt",
          map: "manor",
          monster: "Bird of Paradise",
          item: "Feather of Paradise",
          quantity: 20,
          isTemp: false
        },
        {
          kind: "hunt",
          map: "doomwood",
          cell: "r6",
          pad: "Right",
          monster: "*",
          item: "Shoelace of a Fallen Paladin",
          quantity: 77,
          isTemp: false
        },
        { kind: "hunt", map: "fotia", monster: "Amia the Cult Leader", item: "Eternity Flame", isTemp: false }
      ]);
    } else if ((await this.isMember()) && !(await this.isQuestUnlocked(5467))) {
      await this.paladinClass(false);
      const hasSilver = await this.contains("Silver Paladin");
      await this.chainQuest(hasSilver ? 5475 : 5471);
      await this.chainQuest(hasSilver ? 5476 : 5472);
      await this.chainQuest(hasSilver ? 5477 : 5473);
      await this.completeQuestPlan(hasSilver ? 5478 : 5474, [
        {
          kind: "hunt",
          map: "bosschallenge",
          monster: "Colossal Primarch",
          item: "Primarch's Hilt",
          isTemp: false
        },
        { kind: "buy", map: "darkthronehub", shopId: 1308, item: "Exalted Paladin Seal" },
        { kind: "hunt", map: "timevoid", monster: "Unending Avatar", item: "Condensed Mana", isTemp: false }
      ]);
    }

    await this.completeQuestPlan(5467, [
      {
        kind: "hunt",
        map: "brightfall",
        monster: "Painadin Overlord",
        item: "Skill Observed",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "citadel",
        monster: "Grand Inquisitor",
        item: "Spirit of Vindication",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "alliance",
        monster: "Good Lieutenant",
        item: "Radiant Blade Enhancement",
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(5468, [
      { kind: "hunt", map: "poisonforest", monster: "Xavier Lionfang", item: "Divine Elixir", isTemp: false },
      {
        kind: "hunt",
        map: "ultraalteon",
        monster: "Ultra Chaos Alteon",
        item: "Prayer of Salvation",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "newfinale",
        monster: "Alliance Healer",
        item: "Acolyte's Braille",
        isTemp: false
      },
      { kind: "hunt", map: "skytower", monster: "Dove", item: "Innocence", quantity: 25, isTemp: false }
    ]);
    await this.ensureScrollOfEtherealSlumber();
    await this.completeQuestPlan(5469, [
      { kind: "hunt", map: "xancave", monster: "Shurpu Ring Guardian", item: "Fists of Fire", isTemp: false },
      {
        kind: "hunt",
        map: "onslaughttower",
        monster: "Golden Caster",
        item: "Holy Magic Attunement",
        isTemp: false
      },
      { kind: "hunt", map: "palace", monster: "Pettivox", item: "Ring of Mana Transposition", isTemp: false }
    ]);
    await this.completeQuestPlan(5470, [
      { kind: "hunt", map: "seraph", monster: "Adventus", item: "Sacred Tome", isTemp: false },
      {
        kind: "hunt",
        map: "marsh",
        monster: "Marsh Tree",
        item: "Paladaffodil",
        quantity: 25,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "wanders",
        cell: "r5",
        pad: "Left",
        monster: "Lotus Spider",
        item: "Spirit Lotus",
        quantity: 25,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "bloodtusk",
        monster: "Trollola Plant",
        item: "Radiant Magnolia",
        quantity: 25,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "gaiazor",
        monster: "Wisterrora",
        item: "Cyanoblossom",
        quantity: 25,
        isTemp: false
      },
      { kind: "hunt", map: "gaiazor", monster: "Nevanna", item: "BrightOak Forest Sapling", isTemp: false },
      { kind: "hunt", map: "infernalspire", monster: "Malxas", item: "Forbidden Demon Seal", isTemp: false }
    ]);

    if (armorOnly) return;
    await this.buyItem("darkthronehub", 1303, 36920, 1, 21833);
    if (rankUpClass) await this.rankClass("ArchPaladin");
  }

  private async paladinClass(rankUpClass = true): Promise<void> {
    if ((await this.contains("Paladin")) || !(await this.isMember())) return;
    await this.buyItem("necropolis", 26, "Warrior");
    await this.buyItem("necropolis", 26, "Healer");
    await this.rankClass("Warrior");
    await this.rankClass("Healer");
    await this.buyItem("necropolis", 26, "Paladin");
    if (rankUpClass) await this.rankClass("Paladin");
  }

  private async unlockBlodMineCrafting(): Promise<void> {
    if (await this.isQuestCompleted(2084)) return;
    await this.completeQuestPlan(2066, [
      { kind: "buy", map: "doomwood", shopId: 276, item: "Blinding Light of Destiny Handle" }
    ]);
    await this.completeQuestPlan(2067, [
      { kind: "buy", map: "doomwood", shopId: 276, item: "Bonegrinder Medal" }
    ]);
    await this.completeQuestPlan(2082, [
      {
        kind: "hunt",
        map: "battleunderb",
        monster: "Skeleton Warrior",
        item: "Undead Essence",
        quantity: 25,
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(2083, [
      {
        kind: "hunt",
        map: "battleunderb",
        monster: "Skeleton Warrior",
        item: "Bone Dust",
        quantity: 40,
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(2084, [
      { kind: "hunt", map: "battleunderb", monster: "*", item: "Spirit Orb", quantity: 100, isTemp: false },
      { kind: "hunt", map: "timevoid", monster: "Ephemerite", item: "Celestial Compass", isTemp: false }
    ]);
  }

  private async battleUnderB(item: string, quantity: number, isTemp = false): Promise<void> {
    if (!isTemp && (await this.contains(item, quantity))) return;
    if (item === "Undead Energy") await this.unlockBlodMineCrafting();
    await this.killMonster("battleunderb", "Enter", "Spawn", "*", item, quantity, isTemp);
  }

  private async soulSearching(item: string, quantity: number): Promise<void> {
    if (await this.contains(item, quantity)) return;
    let loops = 0;
    while (!(await this.contains(item, quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.acceptQuest(939);
      await this.killMonster(
        "battleunderc",
        "r5",
        "Left",
        "Crystalized Jellyfish",
        "Jellyfish Soul",
        1,
        true
      );
      await this.killMonster("battleundera", "r7", "Left", "Bone Terror", "Bone Terror Soul", 1, true);
      await this.killMonster(
        "battleunderb",
        "r3",
        "Right",
        "Undead Champion",
        "Undead Champion Soul",
        1,
        true
      );
      await this.completeQuest(939);
      await this.acceptDrops(item);
    }
  }

  private async ensureScrollOfEtherealSlumber(): Promise<void> {
    if (await this.contains("Scroll of Ethereal Slumber")) return;
    if (!(await this.contains("Archmage Ink"))) {
      await this.buyItem("spellcraft", 622, "Archmage Ink");
      if (!(await this.contains("Archmage Ink"))) {
        await this.hunt("underworld", "Skull Warrior", "Mystic Shards", 2, false);
        await this.buyItem("dragonrune", 549, "Archmage Ink");
      }
    }
    await this.chainQuest(2347);
    await this.acceptDrops("Scroll of Ethereal Slumber");
  }

  private async archfiendDoomLord(): Promise<void> {
    if (await this.contains("Archfiend DoomLord")) return;
    await this.farmUni13(1);
    await this.nationApprovalAndFavor(0, 1);
    await this.nulgathDemandsWork([
      "DoomLord's War Mask",
      "ShadowFiend Cloak",
      "Locks of the DoomLord",
      "Doomblade of Destruction"
    ]);
    await this.nulgathDemandsWork(["Unidentified 35"]);
    await this.unidentified34(4);
    await this.farmNationMaterial("Blood Gem of the Archfiend", 10);
    await this.farmNationMaterial("Voucher of Nulgath (non-mem)", 1);
    await this.farmNationMaterial("Essence of Nulgath", 100);
    await this.battleUnderB("Undead Essence", 1000);
    await this.completeQuestPlan(5260, [
      {
        kind: "hunt",
        map: "orecavern",
        monster: "Chaorrupted Good Soldier",
        item: "Chaorruption Essence",
        quantity: 75,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "starsinc",
        monster: "Living Star",
        item: "Living Star Essence",
        quantity: 100,
        isTemp: false
      },
      { kind: "buy", map: "yulgar", shopId: 16, item: "Aelita's Emerald" },
      {
        kind: "buy",
        map: "alchemyacademy",
        shopId: 2115,
        item: "Essence Potion",
        quantity: 5,
        shopItemId: 8580
      },
      { kind: "hunt", map: "evilwardage", monster: "Klunk", item: "Essence of Klunk", isTemp: false }
    ]);
    await this.acceptDrops("ArchFiend DoomLord");
  }

  private async archfiend(): Promise<void> {
    if ((await this.contains("ArchFiend")) || (await this.contains("Archfiend"))) {
      await this.rankClass("ArchFiend");
      return;
    }
    await this.farmExperience(50);
    await this.farmUni13(3);
    await this.buyItem("tercessuinotlim", 1951, "Pink Star Diamond of Nulgath");
    await this.hunt("mercutio", "Mercutio", "Immortal Joe's Black Star", 1, false);
    await this.ensureAbyssalStar();
    await this.buyItem("tercessuinotlim", 1951, "Gold Star of Avarice");
    await this.ensureBloodStarOfTheArchfiend();
    await this.hunt("fiendshard", "Dirtlicker", "Dirtlicker Demoted", 1, false);
    await this.acceptQuest(8476);
    await this.completeQuest(8476);
    await this.acceptDrops("Abyssal Contract");
    await this.buyItem("tercessuinotlim", 695, 18894, 1, 1925);
    await this.rankClass("ArchFiend");
  }

  private async sepulchuresDoomKnightArmor(): Promise<void> {
    if (await this.contains("Sepulchure's DoomKnight Armor")) return;
    if (!(await this.isMember())) {
      this.log("Sepulchure's DoomKnight Armor requires membership.");
      return;
    }
    await this.unlockHardCoreMetals();
    await this.necroticDaggersOfDestruction();
    await this.necroticBroadswordOfBane();
    await this.necroticBowOfTheShadow();
    await this.summoningSepulchureArmor();
  }

  private async unlockHardCoreMetals(): Promise<void> {
    if (await this.isQuestCompleted(2098)) return;
    await this.darkSpiritOrbs(40);
    await this.completeQuestPlan(2069, [
      { kind: "buy", map: "shadowfall", shopId: 100, item: "DoomKnight Hood" }
    ]);
    await this.eldersBlood();
    await this.completeQuestPlan(2088, [
      { kind: "hunt", map: "battleundera", monster: "Bone Terror", item: "Shadow Terror Axe", isTemp: false }
    ]);
    await this.pennyForYourFoughts(1, true);
    await this.darkSpiritOrbs(100);
    await this.completeQuestPlan(2090, [
      { kind: "hunt", map: "necrocavern", monster: "Shadow Imp", item: "Dark Skull", isTemp: false }
    ]);
  }

  private async darkSpiritOrbs(quantity: number): Promise<void> {
    if (await this.contains("Dark Spirit Orb", quantity)) return;
    let loops = 0;
    while (!(await this.contains("Dark Spirit Orb", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.acceptQuest(2065);
      await this.hunt("bludrut2", "Shadow Creeper", "Shadow Creeper Enchant", 1, false);
      await this.hunt("bludrut4", "Shadow Serpent", "Shadow Serpent Scythe", 1, false);
      await this.hunt("ruins", "Dark Witch", "Shadow Whiskers", 6, true);
      await this.completeQuest(2065);
      await this.acceptDrops(["Dark Spirit Orb", "Dark Energy"]);
      if (await this.contains("Dark Energy", 5000)) await this.doomMerge("Dark Spirit Orb", 100);
    }
  }

  private async pennyForYourFoughts(quantity: number, oneTime = false): Promise<void> {
    if (!oneTime && (await this.contains("Dark Spirit Orb", quantity))) return;
    let loops = 0;
    while (oneTime || !(await this.contains("Dark Spirit Orb", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.acceptQuest(2089);
      await this.killMonster("maul", "r7", "Left", "Shelleton");
      await this.completeQuest(2089);
      await this.acceptDrops(["DoomCoin", "Dark Spirit Orb", "Shadow Creeper Enchant"]);
      if (oneTime) return;
    }
  }

  private async doomSquireWeaponKit(quantity = 1): Promise<void> {
    if (await this.contains("DoomSquire Weapon Kit", quantity)) return;
    let loops = 0;
    while (!(await this.contains("DoomSquire Weapon Kit", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        2144,
        [
          {
            kind: "hunt",
            map: "battleundera",
            monster: "Skeletal Warrior",
            item: "Iron Hammer",
            isTemp: false
          },
          { kind: "hunt", map: "sandcastle", monster: "War Mummy", item: "War Mummy Wrap", isTemp: false },
          { kind: "hunt", map: "noobshire", monster: "Horc Noob", item: "Noob Blade Oil", isTemp: true },
          {
            kind: "hunt",
            map: "farm",
            monster: "Scarecrow",
            item: "Burlap Cloth",
            quantity: 4,
            isTemp: true
          },
          { kind: "hunt", map: "lair", monster: "Bronze Draconian", item: "Bronze Brush", isTemp: true },
          {
            kind: "hunt",
            map: "bludrut",
            monster: "Rock Elemental",
            item: "Elemental Stone Sharpener",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "nulgath",
            monster: "Dark Makai",
            item: "Dark Makai Lacquer Finish",
            isTemp: true
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("DoomSquire Weapon Kit");
    }
  }

  private async doomSoldierWeaponKit(quantity = 1): Promise<void> {
    if (await this.contains("DoomSoldier Weapon Kit", quantity)) return;
    await this.doomSquireWeaponKit(1);
    let loops = 0;
    while (!(await this.contains("DoomSoldier Weapon Kit", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        2164,
        [
          { kind: "hunt", map: "cornelis", monster: "Stone Golem", item: "Stone Hammer", isTemp: false },
          { kind: "hunt", map: "hachiko", monster: "Dai Tengu", item: "Superior Blade Oil", isTemp: true },
          {
            kind: "hunt",
            map: "vordredboss",
            monster: "Shadow Vordred",
            item: "Shadow Lacquer Finish",
            isTemp: true
          },
          { kind: "hunt", map: "anders", monster: "Copper Sky Pirate", item: "Copper Awl", isTemp: true },
          {
            kind: "hunt",
            map: "necrocavern",
            monster: "Shadow Imp",
            item: "Shadowstone Sharpener",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "lycan",
            cell: "r4",
            pad: "Left",
            monster: "Chaos Vampire Knight",
            item: "Silver Brush",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "sandport",
            cell: "r3",
            pad: "Right",
            monster: "Tomb Robber",
            item: "Leather Case",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "pines",
            cell: "Path1",
            pad: "Left",
            monster: "LeatherWing",
            item: "LeatherWing Hide",
            quantity: 10,
            isTemp: true
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("DoomSoldier Weapon Kit");
    }
  }

  private async doomKnightWeaponKit(item = "DoomKnight Weapon Kit", quantity = 1): Promise<void> {
    if (await this.contains(item, quantity)) return;
    await this.doomSoldierWeaponKit(1);
    let loops = 0;
    while (!(await this.contains(item, quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        2165,
        [
          {
            kind: "hunt",
            map: "boxes",
            cell: "Boss",
            pad: "Left",
            monster: "Sneeviltron",
            item: "Grumpy Warhammer",
            isTemp: false
          },
          { kind: "hunt", map: "kitsune", monster: "Kitsune", item: "No. 1337 Blade Oil", isTemp: true },
          {
            kind: "hunt",
            map: "sandcastle",
            cell: "r7",
            pad: "Left",
            monster: "Chaos Sphinx",
            item: "Gold Brush",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "crashsite",
            cell: "Boss",
            pad: "Left",
            monster: "ProtoSartorium",
            item: "Non-abrasive Power Powder",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "necrocavern",
            cell: "r13",
            pad: "Left",
            monster: "Shadow Dragon",
            item: "ShadowDragon Hide",
            quantity: 3,
            isTemp: true
          },
          {
            kind: "hunt",
            map: "dragonplane",
            cell: "r9",
            pad: "Left",
            monster: "Moganth",
            item: "Moganth's Stone Sharpener",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "akiba",
            cell: "cave4boss",
            pad: "Left",
            monster: "Shadow Nukemichi",
            item: "Doom Lacquer Finish",
            isTemp: true
          },
          {
            kind: "hunt",
            map: "dreamnexus",
            cell: "r7",
            pad: "Left",
            monster: "Dark Wyvern",
            item: "Dark Wyvern Hide Travel Case",
            isTemp: true
          }
        ],
        -1,
        true
      );
      await this.acceptDrops([
        "DoomKnight Weapon Kit",
        "Dark Spirit Orb",
        "Corrupt Spirit Orb",
        "Ominous Aura",
        "Grumpy Warhammer"
      ]);
    }
  }

  private async doomMerge(item: string, quantity = 1): Promise<void> {
    if (await this.contains(item, quantity)) return;
    await this.buyItem("necropolis", 423, item, quantity);
  }

  private async necroticDaggersOfDestruction(): Promise<void> {
    if (await this.contains("Necrotic Daggers of Destruction")) return;
    if (!(await this.contains("Daggers of Destruction"))) {
      await this.doomSquireWeaponKit();
      await this.darkSpiritOrbs(50);
      await this.doomMerge("Daggers of Destruction");
    }
    if (!(await this.contains("Shadow Daggers of Destruction"))) {
      await this.doomSoldierWeaponKit();
      await this.doomKnightWeaponKit("Ominous Aura");
      await this.doomMerge("Shadow Daggers of Destruction");
    }
    await this.doomKnightWeaponKit();
    await this.doomMerge("Necrotic Daggers of Destruction");
  }

  private async necroticBroadswordOfBane(): Promise<void> {
    if (await this.contains("Necrotic Broadsword of Bane")) return;
    await this.necroticDaggersOfDestruction();
    if (!(await this.contains("Broadsword of Bane"))) {
      await this.doomKnightWeaponKit("Corrupt Spirit Orb");
      await this.doomKnightWeaponKit("Dark Spirit Orb", 20);
      await this.doomSquireWeaponKit();
      await this.doomMerge("Broadsword of Bane");
    }
    if (!(await this.contains("Shadow Broadsword of Bane"))) {
      await this.doomKnightWeaponKit("Corrupt Spirit Orb");
      await this.ominousAura(1);
      await this.doomSoldierWeaponKit();
      await this.doomMerge("Shadow Broadsword of Bane");
    }
    await this.doomKnightWeaponKit();
    await this.doomMerge("Necrotic Broadsword of Bane");
  }

  private async necroticBowOfTheShadow(): Promise<void> {
    if (await this.contains("Necrotic Bow of the Shadow")) return;
    await this.necroticBroadswordOfBane();
    if (!(await this.contains("Bow to the Shadows"))) {
      await this.doomSquireWeaponKit();
      await this.doomKnightWeaponKit("Corrupt Spirit Orb");
      await this.doomKnightWeaponKit("Dark Spirit Orb", 13);
      await this.pinpointBroadsword(1);
      await this.battleUnderB("Undead Energy", 17);
      await this.doomMerge("Bow to the Shadows");
    }
    if (!(await this.contains("ShadowBow of the Shadows"))) {
      await this.doomSoldierWeaponKit();
      await this.doomKnightWeaponKit("Corrupt Spirit Orb");
      await this.hunt("bludrut4", "Shadow Serpent", "Dark Energy", 50, false);
      await this.doomMerge("ShadowBow of the Shadows");
    }
    await this.doomKnightWeaponKit();
    await this.doomMerge("Necrotic Bow of the Shadow");
  }

  private async pinpointPieces(questId: number, item: string, quantity: number): Promise<void> {
    let loops = 0;
    while (!(await this.contains(item, quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        questId,
        [
          {
            kind: "hunt",
            map: "lycan",
            cell: "r4",
            pad: "Left",
            monster: "*",
            item: "DoomKnight Armor Piece",
            quantity: 10,
            isTemp: true
          }
        ],
        -1,
        true
      );
      await this.acceptDrops(item);
    }
  }

  private async ominousAura(quantity: number): Promise<void> {
    if (await this.contains("Ominous Aura", quantity)) return;
    await this.necroticDaggersOfDestruction();
    await this.pinpointPieces(2181, "Ominous Aura", quantity);
  }

  private async pinpointBroadsword(quantity: number): Promise<void> {
    if (await this.contains("Diabolical Aura", quantity)) return;
    await this.necroticBroadswordOfBane();
    await this.pinpointPieces(2183, "Diabolical Aura", quantity);
  }

  private async pinpointBow(darkSpiritOrbs: number, corruptSpiritOrbs: number): Promise<void> {
    await this.necroticBowOfTheShadow();
    if (darkSpiritOrbs > 0) await this.pinpointPieces(2186, "Dark Spirit Orb", darkSpiritOrbs);
    if (corruptSpiritOrbs > 0) await this.pinpointPieces(2186, "Corrupt Spirit Orb", corruptSpiritOrbs);
  }

  private async summoningSepulchureArmor(): Promise<void> {
    if (await this.contains("Sepulchure's DoomKnight Armor")) return;
    await this.pinpointBow(500, 250);
    await this.ominousAura(125);
    await this.pinpointBroadsword(75);
    await this.pinpointPieces(2181, "Doom Aura", 1);
    await this.pinpointBow(50, 0);
    await this.completeQuestPlan(2069, [
      { kind: "buy", map: "shadowfall", shopId: 100, item: "DoomKnight Hood" }
    ]);
    await this.doomKnightWeaponKit();
    await this.completeQuestPlan(2187, [
      { kind: "hunt", map: "ruins", monster: "Dark Elemental", item: "Heart of Darkness", isTemp: true }
    ]);
    await this.acceptDrops("Sepulchure's DoomKnight Armor");
  }

  private async legendaryElementalWarrior(): Promise<void> {
    if (await this.contains("Legendary Elemental Warrior")) {
      await this.rankClass("Legendary Elemental Warrior");
      return;
    }
    await this.buyItem("curio", 1501, "Legendary Elemental Warrior");
    await this.rankClass("Legendary Elemental Warrior");
  }

  private async archfiendDragonEgg(): Promise<void> {
    if (await this.contains("ArchFiend Baby Dragon Pet")) return;
    await this.acceptQuest(7296);
    await this.buyItem("airstorm", 357, "Breath of Life");
    await this.hunt("queenspire", "Fire Guardian Dragon", "Fire Guardian Dragon Soul", 1, false);
    await this.hunt("underlair", "ArchFiend DragonLord", "Fiendish Brimstone", 1, false);
    await this.buyItem("ariapet", 12, "ArchFiend Dragon Egg");
    await this.completeQuest(7296);
    await this.acceptDrops("ArchFiend Baby Dragon Pet");
  }

  private async evolvedShadowOrb(): Promise<void> {
    if (await this.contains("Evolved Shadow Orb")) return;
    await this.farmUni13(1);
    await this.buyItem("archportal", 1211, "Evolved Shadow Orb");
  }

  private async tendurrrItems(): Promise<void> {
    if (!(await this.contains("Tendurrr The Assistant")))
      await this.killMonster("tercessuinotlim", "m2", "Left", "*", "Tendurrr The Assistant", 1, false);
    await this.farmUni13(1);
    await this.nationMaterials("Tendurrr materials");
    await this.acceptQuest(5814);
    await this.completeQuest(5814);
    await this.acceptDrops([
      "Tendurrr on your Back",
      "Asuka's Flaming Stick",
      "Tendurrr's Flaming Stick",
      "Tendurrr Morph"
    ]);
  }

  private async bankNationBagDrops(): Promise<void> {
    await this.bank([
      "Tainted Gem",
      "Dark Crystal Shard",
      "Diamond of Nulgath",
      "Voucher of Nulgath",
      "Unidentified 13",
      "Blood Gem of the Archfiend",
      "Totem of Nulgath"
    ]);
  }

  private async coinCollectorSet(): Promise<void> {
    await this.buyItem("hyperspace", 194, "Le Chocolat");
    await this.buyItem("hollowhalls", 335, "Coin Collector");
    await this.buyItem("hyperspace", 194, "Chocolate Doubloon");
    await this.buyItem("hollowhalls", 335, "Coin Collector Gun");
    await this.buyItem("hyperspace", 194, "Chocolate Loonie");
    await this.buyItem("hollowhalls", 335, "Coin Collector Helmet");
  }

  private async dragonBladeOfNulgath(): Promise<void> {
    if (await this.contains("DragonBlade of Nulgath")) return;
    await this.nationMaterials("DragonBlade materials");
    await this.buyItem("tercessuinotlim", 1976, "DragonBlade of Nulgath");
  }

  private async cruxShipStory(): Promise<void> {
    await this.completeQuestPlan(4598, [
      {
        kind: "hunt",
        map: "cruxship",
        cell: "r2",
        pad: "Left",
        monster: "Shadow Locust",
        item: "Locusts Defeated",
        quantity: 10,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(4599, [
      { kind: "mapItem", map: "cruxship", id: 3901, quantity: 2 },
      {
        kind: "hunt",
        map: "cruxship",
        cell: "r2",
        pad: "Left",
        monster: "Shadow Locust",
        item: "Locusts Defeated",
        quantity: 5,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(4600, [
      { kind: "join", map: "cruxship" },
      { kind: "jump", cell: "Cut1", pad: "Left" }
    ]);
    await this.completeQuestPlan(4601, [
      { kind: "join", map: "cruxship" },
      { kind: "jump", cell: "r5", pad: "Left" }
    ]);
    await this.completeQuestPlan(
      4602,
      [
        { kind: "join", map: "cruxship" },
        { kind: "jump", cell: "Cut2", pad: "Left" }
      ],
      1
    );
    await this.storyKillQuest(4603, "cruxship", "Treasure Hunter");
    await this.storyMapItemQuest(4604, "cruxship", 3902, 3);
    await this.completeQuestPlan(4605, [
      { kind: "join", map: "cruxship" },
      { kind: "jump", cell: "Cut3", pad: "Left" }
    ]);
    await this.completeQuestPlan(4606, [
      {
        kind: "hunt",
        map: "cruxship",
        monster: "Shadow Locust",
        item: "Locusts Beaten",
        quantity: 12,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(4607, [
      {
        kind: "hunt",
        map: "cruxship",
        monster: "Nokris Plaguebringer",
        item: "Nokris Plaguebringer Defeated",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "cruxship",
        cell: "r2",
        pad: "Left",
        monster: "Shadow Locust",
        item: "Locusts Defeated",
        quantity: 3,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(4610, [
      {
        kind: "hunt",
        map: "cruxship",
        monster: "Ancient Mummy",
        item: "Mummy Defeated",
        quantity: 12,
        isTemp: true
      },
      {
        kind: "hunt",
        map: "cruxship",
        monster: "Treasure Hunter",
        item: "Treasure Hunter Defeated",
        quantity: 8,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(4611, [
      {
        kind: "hunt",
        map: "cruxship",
        monster: "Treasure Hunter Captain",
        item: "Captain Defeated",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "cruxship",
        monster: "Treasure Hunter",
        item: "Treasure Hunter Defeated",
        quantity: 8,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(4612, [
      { kind: "join", map: "cruxship" },
      { kind: "jump", cell: "Cut4", pad: "Left" }
    ]);
    await this.storyKillQuest(4613, "cruxship", "Apephryx");
    await this.completeQuestPlan(4614, [
      { kind: "join", map: "cruxship" },
      { kind: "jump", cell: "Cut5", pad: "Left" }
    ]);
  }

  private async greatFireWar(): Promise<void> {
    await this.storyKillQuest(6294, "firewar", "Fire Dragon");
    await this.storyKillQuest(6295, "firewar", "Fire Dragon");
    await this.completeQuestPlan(6296, [
      {
        kind: "hunt",
        map: "firewar",
        cell: "r8",
        pad: "Right",
        monster: "Inferno Dragon",
        item: "Pyritium Shards",
        quantity: 5,
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(6297, [
      {
        kind: "hunt",
        map: "firewar",
        cell: "r8",
        pad: "Right",
        monster: "Inferno Dragon",
        item: "Perfect Pyritium",
        isTemp: true
      }
    ]);
    await this.storyKillQuest(6298, "firewar", "Uriax");
    await this.completeQuestPlan(6299, [
      { kind: "join", map: "firewar", cell: "r10", pad: "Left" },
      { kind: "hunt", map: "firewar", monster: "*", item: "Akriloth Defeated", isTemp: true }
    ]);
    await this.completeQuestPlan(6301, [
      {
        kind: "hunt",
        map: "northmountain",
        monster: "Ice Elemental",
        item: "Monsters Defeated",
        quantity: 8,
        isTemp: true
      },
      { kind: "mapItem", map: "northmountain", id: 5812 }
    ]);
    await this.storyKillQuest(6302, "northmountain", "Ice Elemental");
    await this.storyKillQuest(6303, "northmountain", "Ursice Savage");
    await this.storyKillQuest(6304, "northmountain", "Ice Spitter");
    await this.storyKillQuest(6305, "northmountain", "Ice Elemental");
    await this.completeQuestPlan(6306, [
      { kind: "mapItem", map: "northmountain", id: 5813, quantity: 4 },
      { kind: "mapItem", map: "northmountain", id: 5814 }
    ]);
    await this.storyKillQuest(6307, "northmountain", "Izotz");
    await this.storyKillQuest(6308, "charredplains", "Fire Dragon");
    await this.storyMapItemQuest(6309, "charredplains", 5815);
    await this.storyKillQuest(6310, "charredplains", "Akriloth");
    await this.storyKillQuest(6311, "northmountain", "Izotz");
    await this.storyMapItemQuest(6312, "drakonnan", 5827, 5);
    for (const [questId, monster] of [
      [6313, "Fire Dragon"],
      [6314, "Living Lava"],
      [6315, "Fire Dragon"]
    ] as Array<[number, string]>)
      await this.storyKillQuest(questId, "drakonnan", monster);
    await this.storyKillQuest(6316, "northmountain", "Ice Elemental");
    await this.storyMapItemQuest(6317, "northmountain", 5826, 6);
    for (const [questId, monster] of [
      [6318, "Fire Elemental"],
      [6319, "Living Fire"],
      [6320, "Fire Dragon"],
      [6321, "Living Lava"],
      [6322, "Fire Elemental"],
      [6323, "Fire Elemental"],
      [6324, "Drakonnan"],
      [6325, "Ultra Drakonnan"]
    ] as Array<[number, string]>)
      await this.storyKillQuest(questId, "drakonnan", monster);
  }

  private async queenOfMonstersBook(): Promise<void> {
    await this.buyItem("castleundead", 45, "Necrotic Blade of Chaos");
    await this.buyItem("castleundead", 45, "Dragon Sword of Chaos");
  }

  private async farmUni13(quantity: number): Promise<void> {
    if (await this.contains("Unidentified 13", quantity)) return;
    await this.farmQuestReward({
      questId: 2566,
      map: "boxes",
      monster: "Sneevil Box",
      item: "Escherion's Helm",
      quantity: 1,
      isTemp: false,
      reward: "Unidentified 13",
      targetQuantity: Math.min(quantity, 13)
    });
    if (!(await this.contains("Unidentified 13", quantity)))
      await this.nationSupplies("Unidentified 13", Math.min(quantity, 13));
  }

  private async nationMaterials(detail?: string): Promise<void> {
    const requests = parseNationMaterialRequest(detail);
    if (requests.length === 0) {
      await this.nationSupplies();
      return;
    }
    for (const [item, quantity] of requests) await this.farmNationMaterial(item, quantity);
  }

  private async hasAllMaterials(targets: Array<[string, number]>): Promise<boolean> {
    for (const [item, quantity] of targets) {
      if (!(await this.contains(item, quantity))) return false;
    }
    return true;
  }

  private async farmNationMaterial(item: string, quantity: number): Promise<void> {
    if (await this.contains(item, quantity)) return;
    switch (item) {
      case "Unidentified 13":
        await this.farmUni13(quantity);
        return;
      case "Essence of Nulgath":
        await this.killMonster(
          "tercessuinotlim",
          "m2",
          "Left",
          "Dark Makai",
          "Essence of Nulgath",
          quantity,
          false
        );
        return;
      case "Nulgath's Approval":
        await this.nationApprovalAndFavor(quantity, 0);
        return;
      case "Archfiend's Favor":
        await this.nationApprovalAndFavor(0, quantity);
        return;
      case "Undead Essence":
      case "Bone Dust":
      case "Undead Energy":
        await this.battleUnderB(item, quantity);
        return;
      case "Totem of Nulgath":
        await this.totemsViaTaros(quantity);
        return;
      case "Blood Gem of the Archfiend":
        await this.kissTheVoid(quantity);
        return;
      case "Void Aura":
        await this.voidAuras(quantity);
        return;
      default:
        await this.nationSupplies(item, quantity);
        return;
    }
  }

  private async nationApprovalAndFavor(approval = 5000, favor = 5000): Promise<void> {
    if (
      (approval <= 0 || (await this.contains("Nulgath's Approval", approval))) &&
      (favor <= 0 || (await this.contains("Archfiend's Favor", favor)))
    )
      return;
    if (approval > 0)
      await this.killMonster("evilwarnul", "r12", "Left", "*", "Nulgath's Approval", approval, false);
    if (favor > 0)
      await this.killMonster("evilwarnul", "r12", "Left", "*", "Archfiend's Favor", favor, false);
  }

  private async totemsViaTaros(quantity: number): Promise<void> {
    let loops = 0;
    while (!(await this.contains("Totem of Nulgath", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        726,
        [
          {
            kind: "hunt",
            map: "tercessuinotlim",
            cell: "m2",
            pad: "Left",
            monster: "Dark Makai",
            item: "Essence of Nulgath",
            quantity: 25,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "tercessuinotlim",
            monster: "Taro Blademaster",
            item: "Taro's Manslayer",
            isTemp: false
          }
        ],
        5357,
        true
      );
      await this.acceptDrops("Totem of Nulgath");
    }
  }

  private async ensureAbyssalStar(): Promise<void> {
    if (await this.contains("Abyssal Star")) return;
    await this.farmNationMaterial("Dark Crystal Shard", 200);
    await this.farmNationMaterial("Tainted Gem", 300);
    await this.farmNationMaterial("Gem of Nulgath", 200);
    await this.buyItem("evilwarnul", 456, "Abyssal Star");
  }

  private async ensureBloodStarOfTheArchfiend(): Promise<void> {
    if (await this.contains("Blood Star of the Archfiend")) return;
    await this.farmNationMaterial("Blood Gem of the Archfiend", 20);
    await this.farmNationMaterial("Totem of Nulgath", 8);
    await this.voidAuras(2);
    await this.nationApprovalAndFavor(0, 999);
    await this.buyItem("shadowblast", 1206, "Blood Star of the Archfiend");
  }

  private async kissTheVoid(quantity: number): Promise<void> {
    let loops = 0;
    while (!(await this.contains("Blood Gem of the Archfiend", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        3743,
        [
          {
            kind: "hunt",
            map: "tercessuinotlim",
            cell: "m2",
            pad: "Left",
            monster: "*",
            item: "Tendurrr The Assistant",
            isTemp: false
          },
          {
            kind: "hunt",
            map: "blindingsnow",
            cell: "r17",
            pad: "Left",
            monster: "*",
            item: "Fragment of Chaos",
            quantity: 80,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "evilwarnul",
            cell: "r13",
            pad: "Left",
            monster: "Legion Fenrir",
            item: "Broken Betrayal Blade",
            quantity: 8,
            isTemp: false
          }
        ],
        22332,
        true
      );
      await this.acceptDrops("Blood Gem of the Archfiend");
    }
  }

  private async voidAuras(quantity: number): Promise<void> {
    if (await this.contains("Void Aura", quantity)) return;
    if (await this.contains("Sepulchure's DoomKnight Armor")) await this.commandingShadowEssences(quantity);
    if (await this.contains("Void Aura", quantity)) return;
    if (await this.isMember()) await this.gatheringUnstableEssences(quantity);
    if (await this.contains("Void Aura", quantity)) return;
    await this.retrieveVoidAuras(quantity);
  }

  private async commandingShadowEssences(quantity: number): Promise<void> {
    let loops = 0;
    while (
      !(await this.contains("Void Aura", quantity)) &&
      (await this.contains("Sepulchure's DoomKnight Armor"))
    ) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        4439,
        [
          {
            kind: "hunt",
            map: "shadowrealmpast",
            monster: 11,
            item: "Malignant Essence",
            quantity: 3,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "shadowrealmpast",
            monster: "*",
            item: "Empowered Essence",
            quantity: 50,
            isTemp: false
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Void Aura");
    }
  }

  private async gatheringUnstableEssences(quantity: number): Promise<void> {
    let loops = 0;
    while (!(await this.contains("Void Aura", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        4438,
        [
          {
            kind: "hunt",
            map: "reddeath",
            cell: "r2",
            pad: "Left",
            monster: "*",
            item: "Mirror Essence",
            quantity: 175,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "neverworldb",
            cell: "r2",
            pad: "Left",
            monster: "*",
            item: "Twisted Essence",
            quantity: 25,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "doomwar",
            monster: "Zombie King Alteon",
            item: "Transposed Essence",
            isTemp: false
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Void Aura");
    }
  }

  private async retrieveVoidAuras(quantity: number): Promise<void> {
    const essenceQuantity = 100;
    let loops = 0;
    while (!(await this.contains("Void Aura", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        4432,
        [
          {
            kind: "hunt",
            map: "timespace",
            monster: "Astral Ephemerite",
            item: "Astral Ephemerite Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "necrocavern",
            monster: 5,
            item: "Chaos Vordred Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "citadel",
            monster: 21,
            item: "Belrot the Fiend Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "greenguardwest",
            monster: 22,
            item: "Black Knight Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "mudluk",
            monster: 18,
            item: "Tiger Leech Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "aqlesson",
            monster: 17,
            item: "Carnax Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "hachiko",
            monster: 10,
            item: "Dai Tengu Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "timevoid",
            monster: 12,
            item: "Unending Avatar Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "dragonchallenge",
            monster: 4,
            item: "Void Dragon Essence",
            quantity: essenceQuantity,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "maul",
            monster: 17,
            item: "Creature Creation Essence",
            quantity: essenceQuantity,
            isTemp: false
          }
        ],
        -1,
        true
      );
      await this.acceptDrops("Void Aura");
    }
  }

  private async unidentified34(quantity: number): Promise<void> {
    let loops = 0;
    while (!(await this.contains("Unidentified 34", quantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.farmUni13(3);
      await this.buyItem("shadowfall", 89, "Shadow Lich");
      await this.buyItem("arcangrove", 214, "Mystic Tribal Sword");
      await this.buyItem("tercessuinotlim", 1951, "Necrot", 10);
      await this.buyItem("tercessuinotlim", 1951, "Chaoroot", 10);
      await this.buyItem("tercessuinotlim", 1951, "Doomatter", 10);
      await this.nationApprovalAndFavor(0, 35);
      await this.buyItem("evilwarnul", 452, 13167);
      await this.completeQuestPlan(
        3046,
        [
          {
            kind: "hunt",
            map: "citadel",
            monster: "Grand Inquisitor",
            item: "Golden Shadow Breaker",
            isTemp: false
          },
          {
            kind: "hunt",
            map: "battleundera",
            monster: "Bone Terror",
            item: "Shadow Terror Axe",
            isTemp: false
          },
          { kind: "hunt", map: "escherion", monster: "Escherion", item: "Relic of Chaos", isTemp: false }
        ],
        18768
      );
      await this.nationApprovalAndFavor(0, 90);
      await this.farmNationMaterial("Totem of Nulgath", 1);
      await this.farmNationMaterial("Essence of Nulgath", 10);
      await this.buyItem("tercessuinotlim", 1951, "Unidentified 19");
      if (!(await this.contains("Unidentified 19"))) await this.nationSupplies("Unidentified 19", 1);
      await this.completeQuestPlan(
        5258,
        [{ kind: "hunt", map: "evilwarnul", monster: "Laken", item: "King Klunk's Crown", isTemp: false }],
        35769,
        true
      );
      await this.acceptDrops("Unidentified 34");
    }
  }

  private async nulgathDemandsWork(items: string[]): Promise<void> {
    const rewardIds: Record<string, number> = {
      "Unidentified 35": 35770,
      "Doomblade of Destruction": 35398,
      "DoomLord's War Mask": 35399,
      "ShadowFiend Cloak": 35400,
      "Locks of the DoomLord": 35401
    };
    for (const item of items) {
      let loops = 0;
      while (!(await this.contains(item))) {
        if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
        loops += 1;
        await this.unidentified34(10);
        await this.farmUni13(2);
        await this.farmNationMaterial("Blood Gem of the Archfiend", 2);
        await this.farmNationMaterial("Diamond of Nulgath", 60);
        await this.farmNationMaterial("Dark Crystal Shard", 45);
        await this.uni27();
        await this.farmNationMaterial("Gem of Nulgath", 15);
        await this.farmNationMaterial("Tainted Gem", 50);
        await this.farmNationMaterial("Voucher of Nulgath", 1);
        await this.completeQuestPlan(5259, [], rewardIds[item] ?? -1, true);
        await this.acceptDrops([
          "Unidentified 35",
          "Doomblade of Destruction",
          "DoomLord's War Mask",
          "ShadowFiend Cloak",
          "Locks of the DoomLord",
          "Archfiend Essence Fragment"
        ]);
        if (
          item === "Unidentified 35" &&
          !(await this.contains(item)) &&
          (await this.contains("Archfiend Essence Fragment", 9))
        ) {
          await this.buyItem("tercessuinotlim", 1951, 35770, 1, 7912);
        }
      }
    }
  }

  private async uni27(): Promise<void> {
    if (await this.contains("Unidentified 27")) return;
    await this.nationSupplies("Unidentified 26", 1);
    await this.completeQuestPlan(584, [
      {
        kind: "hunt",
        map: "tercessuinotlim",
        cell: "m2",
        pad: "Left",
        monster: "Dark Makai",
        item: "Dark Makai Sigil",
        isTemp: false
      }
    ]);
    await this.acceptDrops("Unidentified 27");
  }

  private async mightySwordOfTheDragons(): Promise<void> {
    if (await this.contains("Mighty Sword Of The Dragons")) return;
    await this.killMonster("lair", "End", "Left", "Red Dragon", "Mighty Sword Of The Dragons", 1, false);
  }

  private async tachyonMerge(detail?: string): Promise<void> {
    if (!detail) return;
    await this.chronoAssassinGems(12);
    await this.buyItem("tachyon", 1251, detail);
  }

  private async bonecastleTowerMerge(detail?: string): Promise<void> {
    if (!detail) return;
    if (!(await this.contains("Bonecastle Amulet"))) {
      await this.farmQuestReward({
        questId: 4993,
        map: "bonecastle",
        monster: "Green Rat",
        item: "Gamey Rat Meat",
        quantity: 3,
        isTemp: true,
        reward: "Bonecastle Amulet",
        targetQuantity: 1
      });
    }
    await this.buyItem("towersilver", 1243, detail);
  }

  private async chronoAssassin(): Promise<void> {
    if (await this.contains("Chrono Assassin")) {
      await this.rankClass("Chrono Assassin");
      return;
    }
    await this.chronoAssassinGems(12);
    await this.buyItem("tachyon", 1251, "Chrono Assassin");
    await this.rankClass("Chrono Assassin");
  }

  private async chronoAssassinGems(quantity: number): Promise<void> {
    while (!(await this.contains("Saeculum Gem", quantity))) {
      await this.acceptQuest(5085);
      await this.hunt("tachyon", "Svelgr the Devourer", "Svelgr Fang", 1, false);
      await this.hunt("portalwar", "Chronorysa", "Sands of Time", 6, false);
      await this.hunt("portalmaze", "Time Wraith", "Wraith Wisp", 12, false);
      await this.completeQuest(5085);
      await this.acceptDrops("Saeculum Gem");
      if (this.options.maxFarmLoops) break;
    }
  }

  private async reputationPass(_faction: string, map: string, monster: string): Promise<void> {
    await this.hunt(map, monster);
  }

  private async spellRaiserSet(): Promise<void> {
    for (const questId of [7400, 7402, 7404]) {
      await this.acceptQuest(questId);
      await this.killMonster("splatterwardage", "r4", "Left", "*");
      await this.completeQuest(questId).catch(() => undefined);
      await this.acceptDrops("*");
    }
  }

  private async lostKnightSet(): Promise<void> {
    for (const questId of [7401, 7403, 7405]) {
      await this.acceptQuest(questId);
      await this.killMonster("splatterwarshrade", "r3", "Right", "*");
      await this.completeQuest(questId).catch(() => undefined);
      await this.acceptDrops("*");
    }
  }

  private async trobbolierPets(): Promise<void> {
    await this.acceptQuest(5067);
    await this.hunt("wormhole", 13, "Blue Trobbolier Fluff", 4, true);
    await this.hunt("wormhole", 27, "Purple Trobbolier Fluff", 4, true);
    await this.hunt("wormhole", 24, "Green Trobbolier Fluff", 4, true);
    await this.hunt("wormhole", 11, "Red Trobbolier Fluff", 4, true);
    await this.completeQuest(5067);
    await this.acceptDrops("*");
  }

  private async buyPotion(detail?: string): Promise<void> {
    if (!detail) return;
    const { item, quantity } = parseItemQuantity(detail);
    await this.buyItem("alchemyacademy", 2116, item, quantity);
  }

  private async buyScroll(detail?: string): Promise<void> {
    if (!detail) return;
    const { item, quantity } = parseItemQuantity(detail);
    await this.buyItem("arcangrove", 2328, item, quantity);
  }

  private async completeAllStories(): Promise<void> {
    this.log(`Running broad story route (${allStoriesPlan.length} story steps).`);
    for (const step of allStoriesPlan) await this.runStoryPlanStep(step);
    await this.complete13LordsOfChaos(true);
    await this.cruxShipStory();
    await this.greatFireWar();
  }

  private async runStoryPlanStep(step: StoryPlanStep): Promise<void> {
    switch (step.kind) {
      case "chain":
        await this.chainQuest(step.questId);
        return;
      case "kill":
        await this.storyKillQuest(step.questId, step.map, step.monsters);
        return;
      case "mapItem":
        await this.storyMapItemQuest(step.questId, step.map, step.ids, step.quantity ?? 1);
        return;
    }
  }

  private async necroticSwordOfDoom(): Promise<void> {
    if (await this.contains("Necrotic Sword of Doom")) return;
    await this.necroticSwordBlade();
    await this.necroticSwordHilt();
    await this.necroticSwordAura();
    await this.hunt("sepulchurebattle", "ULTRA Sepulchure", "Doom Heart", 1, false);
    await this.voidAuras(800);
    await this.buyItem("shadowfall", 793, "Necrotic Sword of Doom");
    await this.acceptDrops("Necrotic Sword of Doom");
    await this.completeQuestPlan(7652, [
      { kind: "hunt", map: "graveyard", monster: "Skeletal Warrior", item: "Arcane Parchment", isTemp: false }
    ]);
  }

  private async necroticSwordBlade(): Promise<void> {
    if (await this.contains("Necrotic Sword's Blade")) return;
    await this.energizedBlade();
    await this.bariumOfDoom(1);
    await this.voidAuras(200);
    await this.buyItem("shadowfall", 793, "Necrotic Sword's Blade");
  }

  private async necroticSwordHilt(): Promise<void> {
    if (await this.contains("Necrotic Sword's Hilt")) return;
    await this.energizedHilt();
    await this.bonesFromVoidRealm(1);
    await this.voidAuras(200);
    await this.buyItem("shadowfall", 793, "Necrotic Sword's Hilt");
  }

  private async necroticSwordAura(): Promise<void> {
    if (await this.contains("Necrotic Sword's Aura")) return;
    await this.energizedAura();
    await this.timeLordNecro(1);
    await this.voidAuras(300);
    await this.buyItem("shadowfall", 793, "Necrotic Sword's Aura");
  }

  private async energizedBlade(): Promise<void> {
    if (await this.contains("Energized Blade")) return;
    await this.findDoomBlade();
    await this.bariumOfDoom(1);
    await this.voidAuras(100);
    await this.buyItem("shadowfall", 793, "Energized Blade");
  }

  private async energizedHilt(): Promise<void> {
    if (await this.contains("Energized Hilt")) return;
    await this.findDoomHilt();
    await this.bonesFromVoidRealm(1);
    await this.voidAuras(100);
    await this.buyItem("shadowfall", 793, "Energized Hilt");
  }

  private async energizedAura(): Promise<void> {
    if (await this.contains("Energized Aura")) return;
    await this.findDoomAura();
    await this.timeLordNecro(1);
    await this.voidAuras(150);
    await this.buyItem("shadowfall", 793, "Energized Aura");
  }

  private async findDoomBlade(): Promise<void> {
    if (await this.contains("Unenhanced Doom Blade")) return;
    await this.bariumOfDoom(1);
    await this.voidAuras(10);
    await this.completeQuestPlan(4433, [
      { kind: "hunt", map: "chaoscrypt", monster: "Chaorrupted Armor", item: "Blade Essence", isTemp: false }
    ]);
    await this.acceptDrops("Unenhanced Doom Blade");
  }

  private async findDoomHilt(): Promise<void> {
    if (await this.contains("Unenhanced Hilt")) return;
    await this.soulSearching("Cavern Celestite", 800);
    await this.battleUnderB("Undead Energy", 5000);
    await this.hunt("bosschallenge", "Colossal Primarch", "Primarch's Hilt", 1, false);
    await this.bonesFromVoidRealm(50);
    await this.voidAuras(10);
    await this.completeQuestPlan(4434, []);
    await this.acceptDrops("Unenhanced Hilt");
  }

  private async findDoomAura(): Promise<void> {
    if (await this.contains("Unenhanced Aura")) return;
    await this.findDoomBlade();
    await this.findDoomHilt();
    await this.timeLordNecro(1);
    await this.chaorruptedHourglass(2);
    await this.scrollDarkArts(1);
    await this.voidAuras(10);
    await this.completeQuestPlan((await this.contains("Necromancer")) ? 4435 : 4436, []);
    await this.acceptDrops("Unenhanced Aura");
  }

  private async bariumOfDoom(quantity: number): Promise<void> {
    if (await this.contains("Barium of Doom", quantity)) return;
    await this.mineCraftBarium(quantity);
    await this.voidAuras(quantity * 50);
    await this.buyItem("shadowfall", 793, "Barium of Doom", quantity);
  }

  private async mineCraftBarium(quantity: number): Promise<void> {
    if (await this.contains("Barium", quantity)) return;
    await this.unlockBlodMineCrafting();
    await this.completeQuestPlan(
      2091,
      [
        { kind: "hunt", map: "stalagbite", monster: "Balboa", item: "Axe of the Prospector", isTemp: false },
        { kind: "hunt", map: "stalagbite", monster: "Balboa", item: "Raw Ore", quantity: 30, isTemp: true }
      ],
      11932,
      true
    );
    await this.acceptDrops("Barium");
  }

  private async bonesFromVoidRealm(quantity: number): Promise<void> {
    if (await this.contains("Bones from the Void Realm", quantity)) return;
    await this.battleUnderB("Bone Dust", quantity * 50);
    await this.voidAuras(quantity * 50);
    await this.buyItem("shadowfall", 793, "Bones from the Void Realm", quantity);
  }

  private async timeLordNecro(quantity: number): Promise<void> {
    if (await this.contains("Time Lord's Necronomicon", quantity)) return;
    await this.chaorruptedHourglass(quantity * 10);
    await this.scrollDarkArts(quantity);
    await this.voidAuras(quantity * 100);
    await this.buyItem("shadowfall", 793, "Time Lord's Necronomicon", quantity);
  }

  private async chaorruptedHourglass(quantity: number): Promise<void> {
    if (await this.contains("Chaorrupted Hourglass", quantity)) return;
    await this.hunt("mqlesson", "Dragonoid", "Dragonoid of Hours", 1, false);
    await this.hunt("timespace", "Chaos Lord Iadoa", "Chaorrupted Hourglass", quantity, false);
  }

  private async scrollDarkArts(quantity: number): Promise<void> {
    if (await this.contains("(Necro) Scroll of Dark Arts", quantity)) return;
    await this.hunt("epicvordred", "Ultra Vordred", "(Necro) Scroll of Dark Arts", quantity, false);
  }

  private async legionRevenant(): Promise<void> {
    if (await this.contains("Legion Revenant")) {
      await this.rankClass("Legion Revenant");
      return;
    }
    await this.farmExperience(80);
    await this.revenantSpellscroll(1, true);
    await this.revenantSpellscroll(20);
    await this.conquestWreath(1, true);
    await this.conquestWreath(6);
    await this.exaltedCrown(1, true);
    await this.exaltedCrown(10);
    if (!(await this.isQuestCompleted(6900))) await this.exaltedCrown(1);
    await this.chainQuest(6900);
    await this.acceptDrops("Legion Revenant");
    await this.buyItem("revenant", 1964, "Legion Revenant");
    await this.rankClass("Legion Revenant");
  }

  private async revenantSpellscroll(quantity = 20, forQuest = false): Promise<void> {
    if (
      (forQuest && (await this.isQuestCompleted(6897))) ||
      (!forQuest && (await this.contains("Revenant's Spellscroll", quantity)))
    )
      return;

    let loops = 0;
    while (
      !this.signal?.aborted &&
      ((forQuest && !(await this.isQuestCompleted(6897))) ||
        (!forQuest && !(await this.contains("Revenant's Spellscroll", quantity))))
    ) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        6897,
        [
          {
            kind: "hunt",
            map: "judgement",
            cell: "r10a",
            pad: "Left",
            monster: "Ultra Aeacus",
            item: "Aeacus Empowered",
            quantity: 50,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "revenant",
            cell: "r2",
            pad: "Left",
            monster: "*",
            item: "Tethered Soul",
            quantity: 300,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "shadowrealmpast",
            monster: "*",
            item: "Darkened Essence",
            quantity: 500,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "necrodungeon",
            cell: "r22",
            pad: "Down",
            monster: "*",
            item: "Dracolich Contract",
            quantity: 1000,
            isTemp: false
          }
        ],
        -1,
        !forQuest
      );
      await this.acceptDrops(["Revenant's Spellscroll", "Legion Token"]);
      if (forQuest) return;
    }
  }

  private async conquestWreath(quantity = 6, forQuest = false): Promise<void> {
    if (
      (forQuest && (await this.isQuestCompleted(6898))) ||
      (!forQuest && (await this.contains("Conquest Wreath", quantity)))
    )
      return;
    if (!(await this.isQuestCompleted(6898))) await this.revenantSpellscroll(1, true);

    let loops = 0;
    while (
      !this.signal?.aborted &&
      ((forQuest && !(await this.isQuestCompleted(6898))) ||
        (!forQuest && !(await this.contains("Conquest Wreath", quantity))))
    ) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        6898,
        [
          {
            kind: "hunt",
            map: "mummies",
            monster: "*",
            item: "Ancient Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "doomvault",
            cell: "r1",
            pad: "Right",
            monster: "*",
            item: "Grim Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "wrath",
            cell: "r5",
            pad: "Left",
            monster: "*",
            item: "Pirate Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "doomwar",
            cell: "r6",
            pad: "Left",
            monster: "*",
            item: "Battleon Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "overworld",
            monster: "*",
            item: "Mirror Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "deathpits",
            cell: "r1",
            pad: "Left",
            monster: "*",
            item: "Darkblood Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "maxius",
            cell: "r2",
            pad: "Left",
            monster: "*",
            item: "Vampire Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "curseshore",
            monster: "*",
            item: "Spirit Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "dragonbone",
            monster: "*",
            item: "Dragon Cohort Conquered",
            quantity: 400,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "doomwood",
            cell: "r6",
            pad: "Right",
            monster: "*",
            item: "Doomwood Cohort Conquered",
            quantity: 400,
            isTemp: false
          }
        ],
        -1,
        !forQuest
      );
      await this.acceptDrops(["Conquest Wreath", "Legion Token"]);
      if (forQuest) return;
    }
  }

  private async exaltedCrown(quantity = 10, forQuest = false): Promise<void> {
    if (
      (forQuest && (await this.isQuestCompleted(6899))) ||
      (!forQuest && (await this.contains("Exalted Crown", quantity)))
    )
      return;
    if (!(await this.isQuestCompleted(6899))) await this.conquestWreath(1, true);
    await this.seraphicWar();

    let loops = 0;
    while (
      !this.signal?.aborted &&
      ((forQuest && !(await this.isQuestCompleted(6899))) ||
        (!forQuest && !(await this.contains("Exalted Crown", quantity))))
    ) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) return;
      loops += 1;
      await this.completeQuestPlan(
        6899,
        [
          { kind: "buy", map: "underworld", shopId: 216, item: "Hooded Legion Cowl" },
          {
            kind: "hunt",
            map: "legionarena",
            cell: "Boss",
            pad: "Left",
            monster: "Legion Fiend Rider",
            item: "Legion Token",
            quantity: 4000,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "underworld",
            cell: "r16",
            pad: "Left",
            monster: "*",
            item: "Dage's Favor",
            quantity: 300,
            isTemp: false
          },
          { kind: "hunt", map: "shadowblast", monster: "Carnage", item: "Gem of Mastery", isTemp: false },
          {
            kind: "hunt",
            map: "shadowblast",
            cell: "r10",
            pad: "Left",
            monster: "*",
            item: "Legion Seal",
            quantity: 25,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "tercessuinotlim",
            cell: "m2",
            pad: "Left",
            monster: "*",
            item: "Defeated Makai",
            quantity: 25,
            isTemp: false
          },
          {
            kind: "hunt",
            map: "aqlesson",
            cell: "Frame9",
            pad: "Right",
            monster: "Carnax",
            item: "Carnax Eye",
            isTemp: false
          },
          { kind: "hunt", map: "deepchaos", monster: "Kathool", item: "Kathool Tentacle", isTemp: false },
          { kind: "hunt", map: "lair", monster: "Red Dragon", item: "Red Dragon's Fang", isTemp: false },
          {
            kind: "hunt",
            map: "bloodtitan",
            monster: "Blood Titan",
            item: "Blood Titan's Blade",
            isTemp: false
          },
          {
            kind: "hunt",
            map: "dflesson",
            cell: "r12",
            pad: "Right",
            monster: 29,
            item: "Dark Token",
            quantity: 100,
            isTemp: false
          }
        ],
        -1,
        !forQuest
      );
      await this.acceptDrops([
        "Exalted Crown",
        "Legion Token",
        "Dage's Favor",
        "Emblem of Dage",
        "Diamond Token of Dage",
        "Dark Token"
      ]);
      if (forQuest) return;
    }
  }

  private async seraphicWar(): Promise<void> {
    if (await this.isQuestCompleted(6245)) return;
    await this.storyKillQuest(6238, "worldsoul", [
      "Dwakel Infiltrator",
      "Dwakel Infiltrator",
      "Dwakel Infiltrator",
      "Dwakel Infiltrator"
    ]);
    await this.storyKillQuest(6239, "worldsoul", "Divine Water Elemental");
    await this.storyKillQuest(6240, "worldsoul", "Divine Fire Elemental");
    await this.storyMapItemQuest(6241, "worldsoul", 5681, 3);
    await this.storyKillQuest(6241, "worldsoul", "Skeletal Squatter");
    await this.storyKillQuest(6242, "worldsoul", "Radioactive Hydra");
    await this.storyMapItemQuest(6243, "worldsoul", 5680);
    await this.storyKillQuest(6243, "worldsoul", "Legion Dreadmarch");
    await this.completeQuestPlan(6244, [
      {
        kind: "hunt",
        map: "worldsoul",
        monster: "Legion Dreadmarch",
        item: "Legion Amulets",
        quantity: 3,
        isTemp: false
      },
      { kind: "mapItem", map: "worldsoul", id: 5682 }
    ]);
    await this.storyKillQuest(6245, "worldsoul", "Core Guardian");
  }

  private async stoneCrusher(): Promise<void> {
    if (await this.contains("StoneCrusher")) {
      await this.rankClass("StoneCrusher");
      return;
    }
    await this.buyItem("gaiazor", 1210, "StoneCrusher");
    await this.rankClass("StoneCrusher");
  }

  private async verusDoomKnight(): Promise<void> {
    if (await this.contains("Verus DoomKnight")) {
      await this.rankClass("Verus DoomKnight");
      return;
    }
    await this.farmExperience(80);
    await this.completeQuestPlan(9411, [
      { kind: "hunt", map: "underrealm", monster: "Fear", item: "Fear's Bones", quantity: 13, isTemp: false },
      {
        kind: "hunt",
        map: "brainmeat",
        monster: "Brain Matter",
        item: "Gray Matter",
        quantity: 13,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "titanattack",
        monster: "Titanic DoomKnight",
        item: "Titanic Spine",
        quantity: 13,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "valleyofdoom",
        monster: 25,
        item: "Doom Knight Plating",
        quantity: 13,
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(9412, [
      { kind: "hunt", map: "necrodungeon", monster: 47, item: "The Mask of the Skulls", isTemp: false },
      {
        kind: "hunt",
        map: "lumafortress",
        monster: "Corrupted Luma",
        item: "Doom Worshipper's Blade Of Doom",
        isTemp: false
      },
      { kind: "hunt", map: "innershadows", monster: "Krahen", item: "Empress' ShadowCloak", isTemp: false },
      {
        kind: "hunt",
        map: "techfortress",
        monster: "MechaVortrix",
        item: "Cybernetic Doom Blade",
        isTemp: false
      },
      { kind: "hunt", map: "stonewooddeep", monster: 16, item: "Asherion Armor", isTemp: false }
    ]);
    await this.completeQuestPlan(9413, [
      {
        kind: "hunt",
        map: "brightshadow",
        monster: "Shadowflame Paladin",
        item: "Shadowflame Spike",
        quantity: 150,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "fiendshard",
        monster: "Paladin Fiend",
        item: "Light Fiend Horn",
        quantity: 150,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "legionarena",
        monster: "Dark Legion Paladin",
        item: "Underworld Soul Glow",
        quantity: 50,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "noxustower",
        monster: "General Goldhammer",
        item: "Gold Hammer Chip",
        isTemp: false
      },
      {
        kind: "hunt",
        map: "chaoslab",
        monster: "Chaos Artix",
        item: "Shimmering Tentacle",
        quantity: 20,
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(9417, [
      { kind: "hunt", map: "wanders", monster: 46, item: "Trace of Light", quantity: 8, isTemp: false },
      {
        kind: "hunt",
        map: "lightguardwar",
        monster: "Extreme Noxus",
        item: "Trace of Dark",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "eternalchaos",
        monster: "Bandit Drakath",
        item: "Trace of Wind",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "quibblehunt",
        monster: "Entropy Dragon",
        item: "Trace of Earth",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "crashsite",
        monster: "ProtoSartorium",
        item: "Trace of Energy",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "northlands",
        monster: "Aisha's Drake",
        item: "Trace of Ice",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "deepchaos",
        monster: "Kathool",
        item: "Trace of Water",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "drakonnan",
        monster: "Ultra Drakonnan",
        item: "Trace of Fire",
        quantity: 8,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "battlefowl",
        monster: "Zeuster Projection",
        item: "Trace of Bacon",
        isTemp: false
      }
    ]);
    await this.completeQuestPlan(9416, [
      {
        kind: "hunt",
        map: "ultraalteon",
        monster: "Ultra Chaos Alteon",
        item: "Ultra Chaos Alteon Defeated",
        isTemp: true
      },
      { kind: "hunt", map: "ebondungeon", monster: "Dethrix", item: "Dethrix Defeated", isTemp: true },
      {
        kind: "hunt",
        map: "shadowstrike",
        monster: "Sepulchuroth",
        item: "Sepulchuroth Defeated",
        isTemp: true
      },
      {
        kind: "hunt",
        map: "ultradrakath",
        monster: "Champion of Chaos",
        item: "Champion of Chaos Defeated",
        isTemp: true
      },
      { kind: "hunt", map: "ebilcorphq", monster: "Gravelyn", item: "Gravelyn Defeated", isTemp: true },
      {
        kind: "hunt",
        map: "shadowvoid",
        monster: "Fragment of Doom",
        item: "Fragment of Doom Defeated",
        isTemp: true
      }
    ]);
    await this.completeQuestPlan(9418, [
      {
        kind: "hunt",
        map: "doomkitten",
        monster: "DoomKitten",
        item: "Doomkitten's Molar",
        quantity: 20,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "infernalarena",
        monster: "Deadly Duo",
        item: "Deadly Duo's Decayed Denture",
        quantity: 10,
        isTemp: false
      },
      { kind: "hunt", map: "seavoice", monster: 1, item: "Maw of the Sea", quantity: 10, isTemp: false },
      { kind: "hunt", map: "thevoid", monster: "Ninja", item: "Void Energy", quantity: 400, isTemp: false },
      { kind: "buy", map: "thevoid", shopId: 1406, item: "Xyfrag's Slimy Tooth", quantity: 5 },
      { kind: "buy", map: "thevoid", shopId: 1406, item: "Nerfkitten's Fang", quantity: 3 }
    ]);
    await this.verusNecroticBlade();
    await this.completeQuestPlan(9419, [
      {
        kind: "hunt",
        map: "citadelruins",
        monster: "Inquisitor Hobo",
        item: "Inquisitor Bones",
        quantity: 1000000,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "deltavcore",
        monster: "Pistol Guard",
        item: "Refined Metal",
        quantity: 1000000,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "etherwardes",
        monster: "Earth Dragon Warrior",
        item: "Dragon Skin",
        quantity: 1000000,
        isTemp: false
      },
      {
        kind: "hunt",
        map: "necrocavern",
        monster: "Chaos Vordred",
        item: "PaladinSlayer's Skull",
        quantity: 100000,
        isTemp: false
      }
    ]);
    await this.buyItem("terminatemple", 2343, "Verus DoomKnight");
    await this.rankClass("Verus DoomKnight");
  }

  private async verusNecroticBlade(): Promise<void> {
    if (await this.isQuestCompleted(9414)) return;
    await this.buyItem("terminatemple", 2343, "Dragonlord of Evil");
    await this.buyItem("terminatemple", 2343, "DoomTech DoomKnight");
    await this.completeQuestPlan(9414, [
      { kind: "hunt", map: "shadowreaper", monster: "*", item: "ShadowReaper Of Doom", isTemp: false },
      { kind: "hunt", map: "shadowfall", monster: "*", item: "Sepulchure's Original Helm", isTemp: false },
      { kind: "buy", map: "darkthronehub", shopId: 1303, item: "Arch DoomKnight Helm" }
    ]);
  }

  private async runForgeEnhancement(name: string, questId?: number): Promise<void> {
    if (questId && (await this.isQuestCompleted(questId))) {
      this.log(`${name} enhancement already unlocked.`);
      return;
    }

    switch (name) {
      case "ForgeWeaponEnhancement":
      case "ForgeWeapon":
        await this.forgeWeaponEnhancement();
        return;
      case "ForgeCapeEnhancement":
      case "ForgeCape":
        await this.forgeCapeEnhancement();
        return;
      case "ForgeHelmEnhancement":
      case "ForgeHelm":
        await this.forgeHelmEnhancement();
        return;
      case "Praxis":
        await this.praxis();
        return;
      case "HerosValiance":
      case "Valiance":
        await this.herosValiance();
        return;
      case "Absolution":
        await this.absolution();
        return;
      case "Vainglory":
        await this.vainglory();
        return;
      case "Avarice":
        await this.avarice();
        return;
      case "Elysium":
        await this.elysium();
        return;
      case "Lament":
        await this.lament();
        return;
      case "Ravenous":
        await this.ravenous();
        return;
      case "Lacerate":
        await this.lacerate();
        return;
      case "Smite":
        await this.smite();
        return;
      case "Vim":
        await this.vim();
        return;
      case "Examen":
        await this.examen();
        return;
      case "Anima":
        await this.anima();
        return;
      case "Pneuma":
        await this.pneuma();
        return;
      default:
        this.throwMissingTask(`Forge enhancement ${name}`);
    }
  }

  private async forgeWeaponEnhancement(): Promise<void> {
    if (await this.isQuestCompleted(8738)) return;
    await this.acceptQuest(8738);
    await this.hunt("escherion", "Escherion", "1st Lord Of Chaos Helm", 1, false);
    await this.hunt("stalagbite", "Vath", "Chaos Dragonlord Helm", 1, false);
    await this.hunt("kitsune", "Kitsune", "Chaos Shogun Helmet", 1, false);
    await this.hunt("wolfwing", "Wolfwing", "Wolfwing Mask", 1, false);
    await this.completeQuest(8738);
  }

  private async forgeHelmEnhancement(): Promise<void> {
    if (await this.isQuestCompleted(8828)) return;
    await this.acceptQuest(8828);
    await this.hunt("escherion", "Escherion", "1st Lord Of Chaos Staff", 1, false);
    await this.hunt("stalagbite", "Vath", "Chaos Dragonlord Axe", 1, false);
    await this.hunt("kitsune", "Kitsune", "Hanzamune Dragon Koi Blade", 1, false);
    await this.hunt("wolfwing", "Wolfwing", "Wrath of the Werepyre", 1, false);
    await this.completeQuest(8828);
  }

  private async forgeCapeEnhancement(): Promise<void> {
    if (await this.isQuestCompleted(8758)) return;
    await this.acceptQuest(8758);
    await this.hunt("lostruinswar", "Diabolical Warlord", "Prismatic Celestial Wings", 1, false);
    await this.hunt("lostruins", "Infernal Warlord", "Broken Wings", 1, false);
    await this.hunt("infernalspire", "Azkorath", "Shadow's Wings", 1, false);
    await this.hunt("infernalspire", "Malxas", "Wings Of Destruction", 1, false);
    await this.completeQuest(8758);
  }

  private async praxis(): Promise<void> {
    if (await this.isQuestCompleted(9171)) return;
    await this.dragonSoulShinobi();
    await this.yamiNoRonin();
    await this.acceptQuest(9171);
    await this.buyItem("thespan", 439, "Thief of Hours Armor");
    await this.buyItem("yulgar", 69, "Hashashin Armor");
    await this.buyItem("dragonkoiz", 95, "Imperial Chunin Clone");
    await this.hunt("ectocave", "Ektorax", "Dragon Rogue", 1, false);
    await this.buyItem("shadowfortress", 1968, 59465, 1, 6869);
    await this.completeQuest(9171);
  }

  private async herosValiance(): Promise<void> {
    if (await this.isQuestCompleted(8741)) return;
    await this.farmExperience(100);
    await this.archPaladin();
    await this.lordOfOrder();
    await this.acceptQuest(8741);
    await this.hunt("doomwood", "Doomwood Ectomancer", "Gravelyn's DoomFire Token", 1, false);
    await this.buyItem("darkthronehub", 1303, "ArchPaladin Armor");
    await this.completeQuest(8741);
  }

  private async absolution(): Promise<void> {
    if (await this.isQuestCompleted(8743)) return;
    await this.acceptQuest(8743);
    await this.hunt("charredpath", "Plague Spreader", "Slimed Sigil", 150, false);
    await this.buyItem("therift", 1399, "Ascended Paladin");
    await this.buyItem("therift", 1399, "Ascended Paladin Staff");
    await this.buyItem("therift", 1399, "Ascended Paladin Sword");
    await this.completeQuest(8743);
  }

  private async vainglory(): Promise<void> {
    if (await this.isQuestCompleted(8744)) return;
    await this.absolution();
    await this.acceptQuest(8744);
    await this.aweRelic("Pauldron", 4160, "gravestrike", "Ultra Akriloth");
    await this.aweRelic("Breastplate", 4163, "aqlesson", "Carnax");
    await this.aweRelic("Vambrace", 4166, "bloodtitan", "Ultra Blood Titan");
    await this.aweRelic("Gauntlet", 4169, "alteonbattle", "ULTRA Alteon");
    await this.aweRelic("Greaves", 4172, "bosschallenge", "Mutated Void Dragon");
    await this.completeQuest(8744);
  }

  private async avarice(): Promise<void> {
    if (await this.isQuestCompleted(8745)) return;
    await this.vainglory();
    await this.acceptQuest(8745);
    await this.hunt("lostruinswar", "Diabolical Warlord", "Indulgence", 50, false);
    await this.hunt("lostruinswar", "Diabolical Warlord", "Penance", 50, false);
    await this.completeQuest(8745);
  }

  private async elysium(): Promise<void> {
    if (await this.isQuestCompleted(8821)) return;
    await this.acceptQuest(8821);
    await this.hunt("underworld", "Legion Fenrir", "Bones from the Void Realm", 1, false);
    await this.yamiNoRonin();
    await this.hunt("archfiend", "Archfiend Dragonlord", "Archfiend Essence Fragment", 1, false);
    await this.hunt("celestialrealm", "Avatar of Life", "The Divine Will", 1, false);
    await this.completeQuest(8821);
  }

  private async lament(): Promise<void> {
    if (await this.isQuestCompleted(8823)) return;
    await this.acceptQuest(8823);
    await this.hunt("sepulchurebattle", "ULTRA Sepulchure", "Doom Heart", 1, false);
    await this.hunt("ashfallcamp", "Smoldur", "Flame Heart", 10, false);
    await this.hunt("sloth", "Mutated Plague", "Bloodless Heart", 3, false);
    await this.hunt("thespan", "Chaos Lord Iadoa", "Heart of the Sun", 1, false);
    await this.completeQuest(8823);
  }

  private async ravenous(): Promise<void> {
    if (await this.isQuestCompleted(9560)) return;
    await this.acceptQuest(9560);
    await this.hunt("voidrefuge", "Gluttony", "Gluttonous Maw", 1, false);
    await this.completeQuest(9560);
  }

  private async lacerate(): Promise<void> {
    if (await this.isQuestCompleted(8739)) return;
    await this.mazumiQuests();
    await this.acceptQuest(8739);
    await this.hunt("graveyard", "Big Jack Sprat", "Undead Plague Spear", 1, false);
    await this.hunt("river", "Kuro", "Kuro's Wrath", 1, false);
    await this.ensureMassiveHorcCleaver();
    await this.ensureSwordInTheStone();
    await this.ensureForestAxe();
    await this.blackKnightOrb();
    await this.completeQuest(8739);
  }

  private async smite(): Promise<void> {
    if (await this.isQuestCompleted(8740)) return;
    await this.acceptQuest(8740);
    await this.hunt("shadowattack", "Death", "Death's Power", 3, false);
    await this.hunt("escherion", "Escherion", "Chaotic Power", 7, false);
    await this.hunt("shadowrealmpast", "Pure Shadowscythe", "Empowered Essence", 50, false);
    await this.killMonster("undergroundlabb", "Enter", "Spawn", "Ultra Battle Gem", "Gem Power", 25, false);
    await this.buyItem("alchemyacademy", 2116, "Power Tonic", 10);
    await this.completeQuest(8740);
  }

  private async vim(): Promise<void> {
    if (await this.isQuestCompleted(8824)) return;
    await this.forgeHelmEnhancement();
    await this.acceptQuest(8824);
    await this.buyItem("classhalla", 172, "Rogue");
    await this.rankClass("Rogue");
    await this.killMonster("towerofdoom10", "r8", "Left", "*", "Ethereal Essence", 250, false);
    await this.completeQuest(8824);
  }

  private async examen(): Promise<void> {
    if (await this.isQuestCompleted(8825)) return;
    await this.vim();
    await this.acceptQuest(8825);
    await this.buyItem("classhalla", 176, "Healer");
    await this.rankClass("Healer");
    await this.killMonster("towerofdoom10", "r8", "Left", "*", "Ethereal Essence", 250, false);
    await this.completeQuest(8825);
  }

  private async anima(): Promise<void> {
    if (await this.isQuestCompleted(8826)) return;
    await this.examen();
    await this.acceptQuest(8826);
    await this.buyItem("classhalla", 170, "Warrior");
    await this.rankClass("Warrior");
    await this.killMonster("towerofdoom10", "r8", "Left", "*", "Ethereal Essence", 650, false);
    await this.completeQuest(8826);
  }

  private async pneuma(): Promise<void> {
    if (await this.isQuestCompleted(8827)) return;
    await this.anima();
    await this.acceptQuest(8827);
    await this.buyItem("classhalla", 174, "Mage");
    await this.rankClass("Mage");
    await this.killMonster("towerofdoom10", "r8", "Left", "*", "Ethereal Essence", 650, false);
    await this.completeQuest(8827);
  }

  private async unlockBladeOfAwe(): Promise<void> {
    await this.completeKillQuest({
      questId: 2933,
      map: "j6",
      monster: "Sketchy Dragon",
      item: "Stonewrit Found!",
      quantity: 1,
      isTemp: false
    });
    await this.completeKillQuest({
      questId: 2934,
      map: "gilead",
      monster: "Fire Elemental",
      item: "Handle Found!",
      quantity: 1,
      isTemp: false
    });
    await this.completeKillQuest({
      questId: 2935,
      map: "castleundead",
      monster: "Skeletal Viking",
      item: "Hilt Found!",
      quantity: 1,
      isTemp: false
    });
    await this.completeKillQuest({
      questId: 2936,
      map: "hydra",
      monster: "Hydra Head",
      item: "Blade Found!",
      quantity: 1,
      isTemp: false
    });
    await this.completeKillQuest({
      questId: 2937,
      map: "escherion",
      monster: "Escherion",
      item: "Runes Found!",
      quantity: 1,
      isTemp: false
    });
  }

  private async lairStory(): Promise<void> {
    await this.completeKillQuest({
      questId: 165,
      map: "lair",
      monster: "Wyvern",
      item: "Dragonslayer Veteran Medal",
      quantity: 1,
      isTemp: true
    });
    await this.completeKillQuest({
      questId: 166,
      map: "lair",
      monster: "Bronze Draconian",
      item: "Dragonslayer Sergeant Medal",
      quantity: 1,
      isTemp: true
    });
    await this.completeKillQuest({
      questId: 167,
      map: "lair",
      monster: "Dark Draconian",
      item: "Dragonslayer Captain Medal",
      quantity: 1,
      isTemp: true
    });
    await this.completeKillQuest({
      questId: 168,
      map: "lair",
      monster: "Red Dragon",
      item: "Dragonslayer Marshal Medal",
      quantity: 1,
      isTemp: true
    });
  }

  private async glaceraRepPass(): Promise<void> {
    this.log("Running a Glacera reputation combat pass.");
    for (const questId of [5597, 5598, 5599, 5600]) await this.acceptQuest(questId);
    await this.killMonster("icewindwar", "r5", "Left", "*");
    for (const questId of [5597, 5598, 5599, 5600]) await this.completeQuest(questId).catch(() => undefined);
  }

  private async ensureMassiveHorcCleaver(): Promise<void> {
    if (await this.contains("Massive Horc Cleaver")) return;
    await this.completeKillQuest({
      questId: 279,
      map: "warhorc",
      monster: "Horc Master",
      item: "Boss Prize",
      quantity: 1,
      isTemp: true,
      reward: "Massive Horc Cleaver"
    });
  }

  private async ensureSwordInTheStone(): Promise<void> {
    if (await this.contains("Sword in the Stone")) return;
    await this.acceptQuest(316);
    await this.getMapItem("greenguardeast", 54, 7);
    await this.hunt("greenguardeast", "Spider", "Tiny Sword", 1, true);
    await this.completeQuest(316);
    await this.acceptDrops("Sword in the Stone");
  }

  private async ensureForestAxe(): Promise<void> {
    if (await this.contains("Forest Axe")) return;
    await this.acceptQuest(301);
    await this.getMapItem("farm", 55, 4);
    await this.hunt("farm", "Mosquito", "Mosquito Juice", 1, true);
    await this.completeQuest(301);
    await this.acceptDrops("Forest Axe");
  }

  private async blackKnightOrb(): Promise<void> {
    if (await this.contains("Black Knight Orb")) return;
    await this.acceptQuest(318);
    await this.hunt("well", "Gell Oh No", "Black Knight Leg Piece", 1, true);
    await this.hunt("greendragon", "Greenguard Dragon", "Black Knight Chest Piece", 1, true);
    await this.hunt("deathgazer", "Deathgazer", "Black Knight Shoulder Piece", 1, true);
    await this.hunt("trunk", "GreenGuard Basilisk", "Black Knight Arm Piece", 1, true);
    await this.completeQuest(318);
    await this.acceptDrops("Black Knight Orb");
  }

  private async aweRelic(name: string, questId: number, map: string, monster: string): Promise<void> {
    const relic = `${name} Relic`;
    if (await this.contains(relic)) return;
    await this.acceptQuest(questId);
    await this.hunt(map, monster, `${name} Fragment`, 15, false);
    await this.completeQuest(questId);
    await this.acceptDrops(relic);
  }

  private async completeKillQuest(options: {
    questId: number;
    map: string;
    cell?: string;
    pad?: string;
    monster: string | number;
    item: string;
    quantity?: number;
    isTemp?: boolean;
    reward?: string | undefined;
  }): Promise<void> {
    if (await this.isQuestCompleted(options.questId)) return;
    await this.acceptQuest(options.questId);
    await this.killMonster(
      options.map,
      options.cell ?? "Enter",
      options.pad ?? "Spawn",
      options.monster,
      options.item,
      options.quantity ?? 1,
      options.isTemp ?? true
    );
    await this.completeQuest(options.questId);
    if (options.reward) await this.acceptDrops(options.reward);
  }

  private async farmQuestReward(options: {
    questId: number;
    map: string;
    cell?: string;
    pad?: string;
    monster: string | number;
    item: string;
    quantity: number;
    isTemp: boolean;
    reward: string;
    targetQuantity: number;
    alsoAccept?: string[];
  }): Promise<void> {
    if (!(await this.ensureQuestClassRequirement(options.questId))) return;
    let loops = 0;
    let staleTurnIns = 0;
    const dropWhitelist = [options.reward, ...(options.alsoAccept ?? [])];
    const rewardId = this.knownDropItemId(options.reward);
    while (!(await this.contains(options.reward, options.targetQuantity))) {
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) {
        this.log(`Stopped ${options.reward} quest farm after ${loops} loops due to maxFarmLoops.`);
        return;
      }
      loops += 1;
      await this.acceptDrops(dropWhitelist);
      const beforeReward = await this.quantity(options.reward);
      await this.acceptQuest(options.questId);
      await this.killMonster(
        options.map,
        options.cell ?? "Enter",
        options.pad ?? "Spawn",
        options.monster,
        options.item,
        options.quantity,
        options.isTemp,
        dropWhitelist
      );
      await this.completeQuest(options.questId, rewardId);
      await this.waitForRewardDrop(
        dropWhitelist,
        rewardId > 0 ? rewardId : options.reward,
        Math.min(options.targetQuantity, beforeReward + 1),
        6500
      );
      const afterReward = await this.quantity(options.reward);
      if (afterReward <= beforeReward && !(await this.contains(options.reward, options.targetQuantity))) {
        staleTurnIns += 1;
        if (staleTurnIns >= 3) {
          this.log(
            `Quest ${options.questId} is not awarding ${options.reward}; checking class/rank requirements before retrying.`
          );
          if (!(await this.ensureQuestClassRequirement(options.questId))) return;
        }
        if (staleTurnIns >= 5) {
          this.log(
            `Stopped ${options.reward} quest farm after ${staleTurnIns} completed turn-ins without a reward pickup.`
          );
          return;
        }
      } else {
        staleTurnIns = 0;
      }
    }
  }

  private knownDropItemId(name: string): number {
    return knownDropItemIds[normalizeDropKey(name)]?.[0] ?? -1;
  }

  private async waitForRewardDrop(
    dropWhitelist: string[],
    reward: string | number,
    quantity: number,
    timeoutMs: number
  ): Promise<boolean> {
    const deadline = Date.now() + timeoutMs;
    while (!this.signal?.aborted && Date.now() < deadline) {
      await this.collectWantedDropsOnly(dropWhitelist);
      if (await this.contains(reward, quantity)) {
        await this.acceptDrops(dropWhitelist);
        await this.clearQuestCompleteUi();
        return true;
      }
      await this.bot.delay(400, this.signal);
    }
    return this.contains(reward, quantity);
  }

  private async clearQuestCompleteUi(): Promise<void> {
    await this.clearDropContainer("ui.ModalStack");
    await this.clearDropContainer("mcPopup");
    await this.clearDropContainer("ui.mcPopup");
  }

  private async runChaosPlanStep(step: ChaosPlanStep): Promise<void> {
    switch (step.kind) {
      case "chain":
        await this.chainQuest(step.questId);
        return;
      case "kill":
        await this.storyKillQuest(step.questId, step.map, step.monsters);
        return;
      case "mapItem":
        await this.storyMapItemQuest(step.questId, step.map, step.ids, step.quantity ?? 1);
        return;
      case "plan":
        await this.completeQuestPlan(step.questId, step.actions);
        return;
    }
  }

  private isChaosBonusStep(step: ChaosPlanStep): boolean {
    return step.questId >= 3812 && step.questId <= 3824;
  }

  private async chainQuest(questId: number, rewardId = -1): Promise<void> {
    if (await this.isQuestCompleted(questId)) return;
    await this.acceptQuest(questId);
    await this.completeQuest(questId, rewardId);
    await this.acceptQuestDrops(questId);
  }

  private async storyMapItemQuest(
    questId: number,
    map: string,
    mapItemIds: number | number[],
    quantity = 1
  ): Promise<void> {
    if (await this.isQuestCompleted(questId)) return;
    await this.acceptQuest(questId);
    const ids = Array.isArray(mapItemIds) ? mapItemIds : [mapItemIds];
    for (const id of ids) await this.getMapItem(map, id, quantity);
    await this.completeQuest(questId);
    await this.acceptQuestDrops(questId);
  }

  private async storyKillQuest(
    questId: number,
    map: string,
    monsters: MonsterTarget | MonsterTarget[],
    item?: string,
    quantity = 1,
    isTemp = true
  ): Promise<void> {
    if (await this.isQuestCompleted(questId)) return;
    await this.acceptQuest(questId);
    if (item) {
      const targets = Array.isArray(monsters) ? monsters : [monsters];
      for (const monster of targets) await this.hunt(map, monster, item, quantity, isTemp);
    } else {
      await this.attackUntilQuestReady(questId, map, Array.isArray(monsters) ? monsters : [monsters]);
    }
    await this.completeQuest(questId);
    await this.acceptQuestDrops(questId);
  }

  private async completeQuestPlan(
    questId: number,
    actions: VeyraQuestAction[],
    rewardId = -1,
    repeatable = false
  ): Promise<void> {
    if (!repeatable && (await this.isQuestCompleted(questId))) return;
    await this.acceptQuest(questId);
    for (const action of actions) await this.runQuestAction(action, questId);
    await this.completeQuest(questId, rewardId);
    await this.acceptQuestDrops(questId);
  }

  private async runQuestAction(action: VeyraQuestAction, defaultQuestId?: number): Promise<void> {
    switch (action.kind) {
      case "accept":
        await this.acceptQuest(action.questId ?? defaultQuestId ?? 0);
        return;
      case "complete":
        await this.completeQuest(
          action.questId ?? defaultQuestId ?? 0,
          action.rewardId ?? -1,
          action.turnIns ?? 1
        );
        return;
      case "hunt":
        if (action.cell) {
          await this.killMonster(
            action.map,
            action.cell,
            action.pad ?? "Spawn",
            action.monster,
            action.item,
            action.quantity ?? 1,
            action.isTemp ?? true
          );
        } else {
          await this.hunt(
            action.map,
            action.monster,
            action.item,
            action.quantity ?? 1,
            action.isTemp ?? true
          );
        }
        return;
      case "mapItem":
        await this.getMapItem(action.map, action.id, action.quantity ?? 1);
        return;
      case "buy":
        await this.buyItem(
          action.map,
          action.shopId,
          action.item,
          action.quantity ?? 1,
          action.shopItemId ?? -1
        );
        return;
      case "join":
        await this.join(action.map, action.cell ?? "Enter", action.pad ?? "Spawn");
        return;
      case "jump":
        await this.jump(action.cell, action.pad ?? "Spawn");
        return;
      case "packet":
        await this.bot.sendPacket(action.packet);
        await this.bot.delay(650, this.signal);
        return;
      case "drop":
        await this.acceptDrops(action.items);
        return;
      case "equip":
        await this.equip(action.item);
        return;
      case "bank":
        await this.bank(action.items);
        return;
    }
  }

  private async attackUntilQuestReady(
    questId: number,
    map: string,
    monsters: MonsterTarget[]
  ): Promise<void> {
    const location = { map };
    await this.join(map);
    let loops = 0;
    while (!this.signal?.aborted) {
      const readiness = await this.questCompletionReadiness(questId).catch(() => undefined);
      if (readiness?.ready) return;
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) {
        this.log(`Stopped quest ${questId} farm after ${loops} loops due to maxFarmLoops.`);
        return;
      }
      loops += 1;
      for (const monster of monsters) {
        this.throwIfAborted();
        await this.recoverIfDead(location);
        await this.bot.attack(monster);
        await this.bot.useAvailableSkills();
        await this.acceptQuestDrops(questId);
        await this.bot.delay(650, this.signal);
        if ((await this.questCompletionReadiness(questId).catch(() => undefined))?.ready) return;
      }
    }
  }

  private async acceptQuestDrops(questId: number): Promise<void> {
    const quest = await this.findQuestInTree(questId).catch(() => undefined);
    const names = quest
      ? questRequirementRecords(quest)
          .map((record) => stringFrom(firstFrom(record, ["sName", "Name", "name", "strName"])).trim())
          .filter(Boolean)
      : [];
    if (names.length > 0) await this.acceptDrops(names);
    if (await this.shouldAcceptAcDrops()) await this.bot.call("acceptACDrops").catch(() => undefined);
  }

  private async ensureQuestClassRequirement(questId: number): Promise<boolean> {
    const override = questClassRequirements[questId];
    const quest = await this.ensureQuestLoaded(questId).catch(() => undefined);
    if (!quest && !override) return true;

    const classId =
      override?.classId ?? numberFrom(quest ?? {}, ["RequiredClassID", "requiredClassId", "iClassID"]);
    const classPoints =
      override?.classPoints ??
      numberFrom(quest ?? {}, [
        "RequiredClassPoints",
        "requiredClassPoints",
        "iClassPoints",
        "iReqClassPoints"
      ]);
    if (classId <= 0 || classPoints <= 0) return true;

    const className = override?.className ?? questClassNames[classId];
    if (!className) {
      this.log(`Quest ${questId} requires class ${classId} with ${classPoints} CP; no Veyra class route is mapped yet.`);
      return false;
    }

    const requiredRank = classRankFromPoints(classPoints);
    if (await this.hasClassRank(className, classId, requiredRank)) return true;
    this.log(`Quest ${questId} requires Rank ${requiredRank} ${className}.`);
    return this.rankClass(className, classId);
  }

  private async questCompletionReadiness(
    questId: number
  ): Promise<{ ready: boolean; summary: string } | undefined> {
    await this.sendGetQuestPacket(questId).catch(() => undefined);
    for (const path of ["world.canTurnInQuest", "world.canCompleteQuest", "world.isQuestReadyToTurnIn"]) {
      const direct = await this.bot.callGameFunction<unknown>(path, questId).catch(() => undefined);
      if (direct !== undefined) return { ready: toBoolean(direct), summary: "" };
    }

    const quest = await this.findQuestInTree(questId);
    if (!quest) return undefined;
    const directFlag = booleanFromRecord(quest, [
      "bCanComplete",
      "canComplete",
      "bComplete",
      "isComplete",
      "readyToComplete"
    ]);
    if (directFlag !== undefined) return { ready: directFlag, summary: "" };

    const requirements = questRequirementRecords(quest);
    if (requirements.length === 0) return undefined;

    const missing: string[] = [];
    for (const requirement of requirements) {
      const name = stringFrom(firstFrom(requirement, ["sName", "Name", "name", "strName"])).trim();
      const required = Math.max(
        1,
        numberFrom(requirement, [
          "iQty",
          "Qty",
          "Quantity",
          "iReqQty",
          "ReqQty",
          "Required",
          "required",
          "quantity"
        ]) || 1
      );
      const current =
        optionalNumberFrom(requirement, [
          "iQtyNow",
          "QtyNow",
          "Current",
          "current",
          "iHave",
          "Have",
          "have",
          "iGot",
          "Got",
          "got"
        ]) ?? (name ? await this.quantity(name, false) : 0);
      if (current < required) missing.push(`${name || "requirement"} ${current}/${required}`);
    }

    return { ready: missing.length === 0, summary: missing.join(", ") };
  }

  private async ensureQuestLoaded(questId: number): Promise<Record<string, unknown> | undefined> {
    const existing = await this.findQuestInTree(questId);
    if (existing) return existing;
    const startedAt = Date.now();
    while (!this.signal?.aborted && Date.now() - startedAt < 5000) {
      await this.bot.callGameFunction("world.showQuests", String(questId), "q").catch(() => undefined);
      await this.sendGetQuestPacket(questId).catch(() => undefined);
      await this.bot.delay(300, this.signal);
      const quest = await this.findQuestInTree(questId);
      if (quest) return quest;
    }
    return undefined;
  }

  private async isQuestUnlocked(questId: number): Promise<boolean> {
    if (await this.isQuestCompleted(questId).catch(() => false)) return true;
    const direct = await this.bot
      .callGameFunction<unknown>("world.isQuestUnlocked", questId)
      .catch(() => undefined);
    if (direct !== undefined) return toBoolean(direct);
    const quest = await this.ensureQuestLoaded(questId).catch(() => undefined);
    if (!quest) return false;
    const explicit = booleanFromRecord(quest, ["bUnlocked", "unlocked", "Unlocked", "isUnlocked"]);
    if (explicit !== undefined) return explicit;
    const slot = numberFrom(quest, ["iSlot", "Slot", "slot", "iIndex"]);
    const value = numberFrom(quest, ["iValue", "Value", "value"]);
    if (slot < 0 || value <= 0) return true;
    const current = toNumber(
      await this.bot.callGameFunction<unknown>("world.getQuestValue", slot).catch(() => 0)
    );
    return current >= value - 1;
  }

  private async findQuestInTree(questId: number): Promise<Record<string, unknown> | undefined> {
    const tree = await this.bot.getGameObject<unknown>("world.questTree").catch(() => undefined);
    return recordsFrom(tree).find(
      (quest) => numberFrom(quest, ["QuestID", "ID", "id", "questId"]) === questId
    );
  }

  private async sendGetQuestPacket(questId: number): Promise<void> {
    if (questId <= 0) return;
    const room = (await this.snapshot()).room || 1;
    await this.bot.sendPacket(`%xt%zm%getQuest%${room}%${questId}%`);
  }

  private throwMissingTask(name: string, detail?: string): never {
    throw new Error(`No Veyra route is registered for ${friendlyTaskName(name, detail)}.`);
  }

  async sendRoomPacket(command: string, parts: Array<string | number>): Promise<void> {
    const room = (await this.snapshot()).room || 1;
    await this.bot.sendPacket(`%xt%zm%${command}%${room}%${parts.join("%")}%`);
  }

  throwIfAborted(): void {
    if (!this.signal?.aborted) return;
    throw this.signal.reason instanceof Error ? this.signal.reason : new Error("Script stopped.");
  }

  private async ensureRoute(route: FarmRoute): Promise<void> {
    const snapshot = await this.snapshot();
    if (snapshot.map.toLowerCase() !== route.map.toLowerCase()) {
      await this.join(route.map, route.cell, route.pad);
      return;
    }
    if (snapshot.cell !== route.cell) await this.jump(route.cell, route.pad);
  }

  private async recoverIfDead(location?: CombatLocation): Promise<boolean> {
    const snapshot = await this.snapshot();
    if (snapshot.alive) return false;

    await this.bot.respawn(this.signal);
    if (location) {
      const cell = location.cell ?? "Enter";
      const pad = location.pad ?? "Spawn";
      this.log(`Returning to ${location.map} ${cell}/${pad} after respawn.`);
      await this.bot.join(location.map, cell, pad);
      await this.bot.delay(700, this.signal);
    }
    return true;
  }

  private async safeArray(path: string): Promise<unknown[]> {
    const raw = await this.bot.getGameObject<unknown>(path).catch(() => []);
    const parsed = parseMaybeJson<unknown>(raw);
    if (Array.isArray(parsed)) return unknownArrayFrom(parsed);
    if (parsed && typeof parsed === "object")
      return Object.values(parsed as Record<string, unknown>).flatMap((entry: unknown) =>
        Array.isArray(entry) ? unknownArrayFrom(entry) : [entry]
      );
    return [];
  }

  private async throttleServerAction(): Promise<void> {
    const elapsed = Date.now() - this.lastServerActionAt;
    if (elapsed < 1100) await this.bot.delay(1100 - elapsed, this.signal);
    this.lastServerActionAt = Date.now();
  }
}

export function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return ["true", "1", "yes"].includes(value.toLowerCase());
  return false;
}

export function toNumber(value: unknown): number {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

export function itemName(item: ItemRecord): string {
  return stringFrom(item.name ?? item.sName ?? item.Name ?? item.strName);
}

export function itemQuantity(item: ItemRecord): number {
  return toNumber(item.quantity ?? item.iQty ?? item.Quantity ?? item.intCount ?? 1) || 1;
}

export function primaryItemId(item: ItemRecord): number {
  return toNumber(item.id ?? item.itemId ?? item.ItemID ?? item.iID ?? item.ID);
}

export function itemCharId(item: ItemRecord): number {
  return toNumber(item.charItemId ?? item.CharItemID ?? item.iCharItemID);
}

export function itemIds(item: ItemRecord): number[] {
  return [primaryItemId(item), itemCharId(item)].filter((id) => id > 0);
}

export function isClassItem(item: ItemRecord): boolean {
  const category = stringFrom(item.category ?? item.sType ?? item.sES ?? item.Category).toLowerCase();
  return category === "class" || category === "ar";
}

export function sameName(left: string, right: string): boolean {
  return left.trim().toLowerCase() === right.trim().toLowerCase();
}

export function normalizedClassRank(snapshot: PlayerSnapshot): number {
  if (snapshot.currentClassRank > 0) return snapshot.currentClassRank;
  const cp = snapshot.currentClassPoints;
  return classRankFromPoints(cp);
}

function classRankFromPoints(cp: number): number {
  if (cp >= 302500) return 10;
  if (cp >= 202500) return 9;
  if (cp >= 129600) return 8;
  if (cp >= 78400) return 7;
  if (cp >= 44100) return 6;
  if (cp >= 22500) return 5;
  if (cp >= 10000) return 4;
  if (cp >= 3600) return 3;
  if (cp >= 900) return 2;
  return 1;
}

function selectRoute(level: number): FarmRoute {
  for (const route of experienceRoutes) {
    if (level >= route.minLevel && level < route.maxLevel) return route;
  }
  return experienceRoutes[experienceRoutes.length - 1]!;
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return max;
  return Math.max(min, Math.min(Math.floor(value), max));
}

function toItemRecord(value: unknown): ItemRecord {
  return value && typeof value === "object" ? (value as ItemRecord) : {};
}

function BooleanRecord(value: ItemRecord): boolean {
  return itemName(value).trim().length > 0 || primaryItemId(value) > 0 || itemCharId(value) > 0;
}

function parseMaybeJson<T>(value: unknown): T | undefined {
  if (typeof value !== "string") return value as T;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

function friendlyTaskName(name: string, detail?: string): string {
  const base = name
    .replace(/^Core/, "")
    .replace(/^UnlockForgeEnhancements\./, "Forge enhancement ")
    .replace(/\./g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
  return detail ? `${base} (${detail})` : base;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function firstFrom(record: Record<string, unknown>, keys: string[]): unknown {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null) return record[key];
  }
  return undefined;
}

function stringFrom(value: unknown): string {
  if (value === undefined || value === null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
  return "";
}

function numberFrom(record: Record<string, unknown>, keys: string[]): number {
  return optionalNumberFrom(record, keys) ?? 0;
}

function optionalNumberFrom(record: Record<string, unknown>, keys: string[]): number | undefined {
  const value = firstFrom(record, keys);
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function booleanFromRecord(record: Record<string, unknown>, keys: string[]): boolean | undefined {
  const value = firstFrom(record, keys);
  if (value === undefined) return undefined;
  return toBoolean(value);
}

function recordsFrom(value: unknown): Record<string, unknown>[] {
  const parsed = parseMaybeJson<unknown>(value);
  if (Array.isArray(parsed)) return parsed.map(asRecord).filter((record) => Object.keys(record).length > 0);
  if (parsed && typeof parsed === "object") {
    const entries: unknown[] = Object.values(parsed as Record<string, unknown>).flatMap((entry: unknown) =>
      Array.isArray(entry) ? unknownArrayFrom(entry) : [entry]
    );
    return entries
      .map(asRecord)
      .filter((record) => Object.keys(record).length > 0);
  }
  return [];
}

function displayItem(item: string | number): string {
  return typeof item === "number" ? `item id ${item}` : item;
}

function shopItemsFrom(shopInfo: Record<string, unknown>): Record<string, unknown>[] {
  return recordsFrom(firstFrom(shopInfo, ["items", "Items", "shopItems", "ShopItems"]));
}

function findShopItem(
  shopInfo: Record<string, unknown>,
  item: string | number,
  shopItemId = -1
): Record<string, unknown> | undefined {
  const needle = typeof item === "string" ? item.trim().toLowerCase() : "";
  const idNeedle = typeof item === "number" ? item : Number(item);
  return shopItemsFrom(shopInfo).find((record) => {
    const itemId = numberFrom(record, ["ItemID", "iID", "itemId", "id", "ID"]);
    const candidateShopItemId = numberFrom(record, ["ShopItemID", "iShopItemID", "shopItemId", "iSel"]);
    if (shopItemId > 0 && candidateShopItemId !== shopItemId) return false;
    if (Number.isFinite(idNeedle) && itemId === idNeedle) return true;
    const name = stringFrom(firstFrom(record, ["sName", "Name", "name", "strName"])).trim().toLowerCase();
    return !!needle && name === needle;
  });
}

function uniqueDropNames(names: string[]): string[] {
  const values = new Set<string>();
  for (const name of names) {
    const key = normalizeDropKey(name);
    if (key) values.add(key);
  }
  return Array.from(values);
}

function dropMatchesNames(drop: Record<string, unknown>, whitelist: string[]): boolean {
  const keys = [
    normalizeDropKey(firstFrom(drop, ["name", "displayName", "sName", "Name", "strName"])),
    normalizeDropKey(firstFrom(drop, ["id", "ID", "ItemID", "iID"]))
  ].filter(Boolean);
  return keys.some((key) => whitelist.includes(key));
}

function dropLabels(drops: Record<string, unknown>[]): string[] {
  const labels = Array.from(new Set(drops.map(dropLabel).filter(Boolean)));
  const limited = labels.slice(0, 4);
  if (labels.length > limited.length) limited.push(`${labels.length - limited.length} more`);
  return limited.length > 0 ? limited : ["drop"];
}

function dropLabel(drop: Record<string, unknown>): string {
  const name = stringFrom(firstFrom(drop, ["displayName", "name", "sName", "Name", "strName"])).trim();
  if (name) return name;
  const id = dropId(drop);
  return id > 0 ? `ID ${id}` : "drop";
}

function dropId(drop: Record<string, unknown>): number {
  return numberFrom(drop, ["id", "ID", "ItemID", "iID"]);
}

function normalizeDropKey(value: unknown): string {
  return stringFrom(value)
    .toLowerCase()
    .replace(/\s+x\s*\d+$/, "")
    .trim();
}

function unknownArrayFrom(value: unknown[]): unknown[] {
  const entries: unknown[] = [];
  for (const entry of value as readonly unknown[]) entries.push(entry);
  return entries;
}

function questRequirementRecords(quest: Record<string, unknown>): Record<string, unknown>[] {
  const candidates = [
    quest.oItems,
    quest.items,
    quest.Requirements,
    quest.requirements,
    quest.reqs,
    quest.objectives,
    quest.turnin
  ];
  return candidates.flatMap(recordsFrom);
}

function parseItemQuantity(detail: string): { item: string; quantity: number } {
  const match = /^(.*?)(?:\s+x(\d+))?$/i.exec(detail.trim());
  const item = (match?.[1] || detail).trim();
  const quantity = match?.[2] ? Math.max(1, Number(match[2])) : -1;
  return { item, quantity };
}

function parseNationMaterialRequest(detail?: string): Array<[string, number]> {
  if (!detail) return [];
  const aliases: Array<[RegExp, string]> = [
    [/\bDCS\b|Dark Crystal Shard/i, "Dark Crystal Shard"],
    [/Tainted Gem/i, "Tainted Gem"],
    [/Diamond/i, "Diamond of Nulgath"],
    [/Gem of Nulgath/i, "Gem of Nulgath"],
    [/Blood Gem/i, "Blood Gem of the Archfiend"],
    [/Totem/i, "Totem of Nulgath"],
    [/Uni\s*13|Unidentified 13/i, "Unidentified 13"],
    [/Uni\s*10|Unidentified 10/i, "Unidentified 10"],
    [/Voucher.*non/i, "Voucher of Nulgath (non-mem)"],
    [/Voucher/i, "Voucher of Nulgath"],
    [/Essence of Nulgath/i, "Essence of Nulgath"]
  ];
  const requests: Array<[string, number]> = [];
  for (const part of detail.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const quantity = Math.max(1, Number(/x\s*(\d+)/i.exec(trimmed)?.[1] ?? 1));
    const match = aliases.find(([pattern]) => pattern.test(trimmed));
    if (match) requests.push([match[1], quantity]);
  }
  return requests;
}
