import type { Bot, PlayerSnapshot } from "../../bot.js";

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

export const RANK_10_CLASS_POINTS = 302500;

const experienceRoutes: FarmRoute[] = [
  { minLevel: 1, maxLevel: 10, map: "oaklore", cell: "r3", pad: "Left", monster: "Bone Berserker", label: "Oaklore Bone Berserker" },
  { minLevel: 10, maxLevel: 20, map: "swordhavenundead", cell: "Gates", pad: "Left", monster: "Undead Giant", label: "Swordhaven Undead Giant" },
  { minLevel: 20, maxLevel: 25, map: "icestormarena", cell: "r7", pad: "Left", monster: "*", label: "Ice Storm Arena r7" },
  { minLevel: 25, maxLevel: 30, map: "icestormarena", cell: "r10", pad: "Left", monster: "*", label: "Ice Storm Arena r10" },
  { minLevel: 30, maxLevel: 50, map: "icestormarena", cell: "r11", pad: "Left", monster: "*", label: "Ice Storm Arena r11" },
  { minLevel: 50, maxLevel: 61, map: "icestormarena", cell: "r16", pad: "Left", monster: "*", label: "Ice Storm Arena r16" },
  { minLevel: 61, maxLevel: 75, map: "battlegrounde", cell: "r2", pad: "Left", monster: "*", label: "Battle Ground E" },
  { minLevel: 75, maxLevel: 101, map: "icestormunder", cell: "r2", pad: "Top", monster: "*", label: "Ice Storm Under" }
];

export class FarmJoeRuntime {
  private readonly options: FarmJoeRuntimeOptions;
  private lastServerActionAt = 0;

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

  async externalStep(name: string, detail?: string): Promise<void> {
    await this.checkpoint(`Skua dependency converted as Veyra checkpoint: ${name}${detail ? ` - ${detail}` : ""}.`);
  }

  async ensureLoggedIn(): Promise<PlayerSnapshot> {
    return this.bot.waitForLogin(this.signal);
  }

  async isMember(): Promise<boolean> {
    const days = toNumber(await this.bot.getGameObject<unknown>("world.myAvatar.objData.iUpgDays").catch(() => 0));
    return days > 0;
  }

  async snapshot(): Promise<PlayerSnapshot> {
    const snapshot = await this.bot.snapshot();
    if (!snapshot.loggedIn) return this.ensureLoggedIn();
    return snapshot;
  }

  async inventory(includeBank = true): Promise<ItemRecord[]> {
    const paths = includeBank
      ? [
          "world.myAvatar.items",
          "world.myAvatar.objData.items",
          "world.myAvatar.tempitems",
          "world.myAvatar.tempItems",
          "world.bankinfo.items",
          "world.bankController.items"
        ]
      : ["world.myAvatar.items", "world.myAvatar.objData.items", "world.myAvatar.tempitems", "world.myAvatar.tempItems"];

    const batches = await Promise.all(paths.map((path) => this.safeArray(path)));
    return batches.flat().map(toItemRecord).filter(BooleanRecord);
  }

  async inventoryOnly(): Promise<ItemRecord[]> {
    return this.inventory(false);
  }

  async contains(item: string | string[] | number, quantity = 1, any = false, includeBank = true): Promise<boolean> {
    if (Array.isArray(item)) {
      const results = await Promise.all(item.map((name) => this.contains(name, quantity, false, includeBank)));
      return any ? results.some(Boolean) : results.every(Boolean);
    }

    const items = await this.inventory(includeBank);
    if (typeof item === "number") return items.some((record) => itemIds(record).includes(item) && itemQuantity(record) >= quantity);
    return items.some((record) => sameName(itemName(record), item) && itemQuantity(record) >= quantity);
  }

  async quantity(name: string, includeBank = true): Promise<number> {
    const items = await this.inventory(includeBank);
    return items.filter((record) => sameName(itemName(record), name)).reduce((total, record) => total + itemQuantity(record), 0);
  }

  async item(name: string, includeBank = true): Promise<ItemRecord | undefined> {
    const items = await this.inventory(includeBank);
    return items.find((record) => sameName(itemName(record), name));
  }

  async itemById(id: number, includeBank = true): Promise<ItemRecord | undefined> {
    const items = await this.inventory(includeBank);
    return items.find((record) => itemIds(record).includes(id));
  }

  async anyRank10(names: string[]): Promise<boolean> {
    const items = await this.inventory();
    return names.some((name) =>
      items.some((record) => sameName(itemName(record), name) && isClassItem(record) && itemQuantity(record) >= RANK_10_CLASS_POINTS)
    );
  }

  async join(map: string, cell = "Enter", pad = "Spawn"): Promise<void> {
    this.throwIfAborted();
    await this.bot.join(map, cell, pad);
    await this.bot.delay(700, this.signal);
  }

  async jump(cell: string, pad = "Spawn"): Promise<void> {
    this.throwIfAborted();
    await this.bot.jump(cell, pad);
    await this.bot.delay(450, this.signal);
  }

  async equip(name: string): Promise<void> {
    const record = await this.item(name);
    const id = record ? primaryItemId(record) : 0;
    if (id <= 0) {
      this.log(`Equip skipped; ${name} was not found.`);
      return;
    }

    await this.bot.callGameFunction("world.sendEquipItemRequest", { ItemID: id }).catch(() => undefined);
    this.log(`Equip requested for ${name}.`);
    await this.bot.delay(650, this.signal);
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

  async loadShop(shopId: number): Promise<void> {
    await this.throttleServerAction();
    this.log(`Loading shop ${shopId}.`);
    await this.bot.callGameFunction("world.sendLoadShopRequest", shopId).catch(() => undefined);
    await this.bot.delay(800, this.signal);
  }

  async buyItem(map: string | undefined, shopId: number, item: string | number, quantity = -1, shopItemId = -1): Promise<void> {
    this.throwIfAborted();
    if (map) await this.join(map);
    await this.loadShop(shopId);
    await this.throttleServerAction();
    if (typeof item === "number") {
      this.log(`Buying item id ${item} from shop ${shopId}.`);
      await this.bot.call("buyItemByID", item, shopItemId, quantity).catch((error) => this.log(`Buy failed for item ${item}: ${describeError(error)}`));
    } else {
      this.log(`Buying ${item} from shop ${shopId}.`);
      await this.bot.call("buyItemByName", item, quantity).catch((error) => this.log(`Buy failed for ${item}: ${describeError(error)}`));
    }
    await this.bot.delay(1100, this.signal);
  }

  async acceptQuest(questId: number): Promise<void> {
    await this.throttleServerAction();
    this.log(`Accepting quest ${questId}.`);
    await this.bot.callGameFunction("world.acceptQuest", questId).catch(async () => {
      const room = (await this.snapshot()).room || 1;
      await this.bot.sendPacket(`%xt%zm%acceptQuest%${room}%${questId}%`);
    });
    await this.bot.delay(650, this.signal);
  }

  async completeQuest(questId: number, rewardId = -1, turnIns = 1): Promise<void> {
    await this.throttleServerAction();
    this.log(`Completing quest ${questId}.`);
    await this.bot.callGameFunction("world.tryQuestComplete", questId, rewardId, false).catch(async () => {
      const room = (await this.snapshot()).room || 1;
      await this.bot.sendPacket(`%xt%zm%tryQuestComplete%${room}%${questId}%${rewardId}%false%${turnIns}%wvz%`);
    });
    await this.bot.delay(900, this.signal);
  }

  async isQuestCompleted(questId: number): Promise<boolean> {
    const checks = await Promise.all([
      this.bot.callGameFunction<unknown>("world.isQuestComplete", questId).catch(() => undefined),
      this.bot.callGameFunction<unknown>("world.isQuestCompleted", questId).catch(() => undefined),
      this.bot.callGameFunction<unknown>("world.getAchievement", questId, 0).catch(() => undefined)
    ]);
    return checks.some(toBoolean);
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

  async acceptDrops(items: string | string[]): Promise<void> {
    const names = Array.isArray(items) ? items : [items];
    const whitelist = names.map((name) => name.toLowerCase()).join(",");
    if (whitelist) await this.bot.call("acceptDrops", whitelist).catch(() => undefined);
    await this.bot.call("acceptACDrops").catch(() => undefined);
  }

  async hunt(map: string, monster: string | number, item?: string, quantity = 1, isTemp = false): Promise<void> {
    await this.join(map);
    if (item) this.log(`Farming ${item}${quantity > 1 ? ` x${quantity}` : ""} from ${monster}.`);

    let loops = 0;
    while (!this.signal?.aborted) {
      if (item && !isTemp && (await this.contains(item, quantity, false, true))) return;
      if (item && isTemp && (await this.quantity(item, false)) >= quantity) return;
      if (this.options.maxFarmLoops && loops >= this.options.maxFarmLoops) {
        this.log(`Stopped ${item || monster} farm after ${loops} loops due to maxFarmLoops.`);
        return;
      }
      loops += 1;
      await this.bot.attack(monster);
      await this.bot.useAvailableSkills();
      if (item) await this.acceptDrops(item);
      await this.bot.delay(650, this.signal);
    }
  }

  async killMonster(map: string, cell: string, pad: string, monster: string | number, item?: string, quantity = 1, isTemp = true): Promise<void> {
    await this.join(map, cell, pad);
    await this.hunt(map, monster, item, quantity, isTemp);
  }

  async farmExperience(targetLevel = 100, rankUpClass = false): Promise<void> {
    let snapshot = await this.ensureLoggedIn();
    const target = clamp(targetLevel, 1, 100);
    this.log(rankUpClass ? "Ranking equipped class with XP route." : `Farming XP toward level ${target}.`);

    while (!this.signal?.aborted) {
      snapshot = await this.snapshot();
      if (!rankUpClass && snapshot.level >= target) return;
      if (rankUpClass && normalizedClassRank(snapshot) >= 10) return;
      if (!snapshot.alive) {
        await this.bot.delay(1000, this.signal);
        continue;
      }

      const route = selectRoute(snapshot.level);
      await this.ensureRoute(route);
      await this.bot.attack(route.monster);
      await this.bot.useAvailableSkills();
      await this.bot.delay(500, this.signal);
    }
  }

  async rankClass(className: string): Promise<void> {
    if (!(await this.contains(className))) {
      this.log(`Rank skipped; ${className} is not owned.`);
      return;
    }
    await this.equip(className);
    await this.farmExperience(100, true);
  }

  async farmGold(): Promise<void> {
    await this.externalStep("CoreFarms.Gold", "Veyra has no dedicated gold farm helper yet; continuing with XP combat route.");
    await this.farmExperience(100);
  }

  async bladeOfAweRep(): Promise<void> {
    await this.externalStep("CoreFarms.BladeofAweREP");
  }

  async smartEnhance(className?: string): Promise<void> {
    await this.externalStep("CoreAdvanced.SmartEnhance", className || "current class");
  }

  async unlockEnhancement(name: string, questId?: number, action?: () => Promise<void>): Promise<void> {
    if (questId && (await this.isQuestCompleted(questId))) {
      this.log(`${name} enhancement already unlocked.`);
      return;
    }
    this.log(`Unlocking enhancement path: ${name}.`);
    if (action) await action();
    else await this.externalStep(`UnlockForgeEnhancements.${name}`);
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

  private async safeArray(path: string): Promise<unknown[]> {
    const raw = await this.bot.getGameObject<unknown>(path).catch(() => []);
    const parsed = parseMaybeJson<unknown>(raw);
    if (Array.isArray(parsed)) return parsed;
    if (parsed && typeof parsed === "object") return Object.values(parsed as Record<string, unknown>);
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
  return String(item.name ?? item.sName ?? item.Name ?? item.strName ?? "");
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
  const category = String(item.category ?? item.sType ?? item.sES ?? item.Category ?? "").toLowerCase();
  return category === "class" || category === "ar";
}

export function sameName(left: string, right: string): boolean {
  return left.trim().toLowerCase() === right.trim().toLowerCase();
}

export function normalizedClassRank(snapshot: PlayerSnapshot): number {
  if (snapshot.currentClassRank > 0) return snapshot.currentClassRank;
  const cp = snapshot.currentClassPoints;
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
  return Object.keys(value).length > 0;
}

function parseMaybeJson<T>(value: unknown): T | undefined {
  if (typeof value !== "string") return value as T;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
