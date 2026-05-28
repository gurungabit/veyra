import { bridgeMethods, type BridgeHealthResult } from "@veyra/protocol";
import type { BridgeClient } from "./bridgeClient.js";
import type { Logger } from "./logger.js";
import type { InventoryItem, PlayerSnapshot, QuestInfo } from "./models.js";

export class Bot {
  readonly flash: FlashApi;
  readonly map: MapApi;
  readonly player: PlayerApi;
  readonly combat: CombatApi;
  readonly inventory: InventoryApi;
  readonly quests: QuestApi;
  readonly send: SendApi;
  readonly wait: WaitApi;

  constructor(
    bridge: BridgeClient,
    private readonly logger: Logger
  ) {
    this.flash = new FlashApi(bridge);
    this.map = new MapApi(this.flash, logger);
    this.player = new PlayerApi(this.flash);
    this.combat = new CombatApi(this.flash, logger);
    this.inventory = new InventoryApi(this.flash);
    this.quests = new QuestApi(this.flash, logger);
    this.send = new SendApi(this.flash);
    this.wait = new WaitApi(this);
  }

  log(message: string, data?: unknown): void {
    this.logger.log({ level: "info", scope: "script", message, data });
  }
}

export class FlashApi {
  constructor(private readonly bridge: BridgeClient) {}

  call<TResult = unknown>(functionName: string, ...args: unknown[]): Promise<TResult> {
    return this.bridge.request<TResult>(bridgeMethods.flashCall, { functionName, args });
  }

  getGameObject<TResult = unknown>(path: string): Promise<TResult> {
    return this.bridge.request<TResult>(bridgeMethods.flashGetGameObject, { path });
  }

  setGameObject(path: string, value: unknown): Promise<void> {
    return this.bridge.request<void>(bridgeMethods.flashSetGameObject, { path, value });
  }

  callGameFunction<TResult = unknown>(path: string, ...args: unknown[]): Promise<TResult> {
    return this.bridge.request<TResult>(bridgeMethods.flashCallGameFunction, { path, args });
  }

  health(): Promise<BridgeHealthResult> {
    return this.bridge.request<BridgeHealthResult>(bridgeMethods.bridgeHealth);
  }
}

export class MapApi {
  constructor(
    private readonly flash: FlashApi,
    private readonly logger: Logger
  ) {}

  async join(map: string, cell = "Enter", pad = "Spawn"): Promise<void> {
    this.logger.log({ level: "info", scope: "map", message: `Joining ${map}.` });
    const [roomId, username] = await Promise.all([
      getOrDefault(this.flash.getGameObject<number>("world.curRoom"), 1),
      getOrDefault(this.flash.getGameObject<string>("loginInfo.strUsername"), "")
    ]);
    await this.flash.callGameFunction("sfc.sendString", `%xt%zm%cmd%${roomId}%tfer%${username}%${map}%${cell}%${pad}%`);
  }

  async jump(cell: string, pad = "Spawn", autoCorrect = true, clientOnly = false): Promise<void> {
    await this.flash.call("jumpCorrectRoom", cell, pad, autoCorrect, clientOnly);
  }

  async currentName(): Promise<string> {
    return getOrDefault(this.flash.getGameObject<string>("world.strMapName"), "");
  }
}

export class PlayerApi {
  constructor(private readonly flash: FlashApi) {}

  async snapshot(): Promise<PlayerSnapshot> {
    const [loggedIn, username, fallbackUsername, level, gold, health, maxHealth, mana, maxMana, map, cell, pad, state, rank, target] =
      await Promise.all([
        this.isLoggedIn(),
        getOrDefault(this.flash.getGameObject<string>("loginInfo.strUsername"), ""),
        getOrDefault(this.flash.getGameObject<string>("world.myAvatar.objData.strUsername"), ""),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.dataLeaf.intLevel"), 0),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.objData.intGold"), 0),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.dataLeaf.intHP"), 0),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.dataLeaf.intHPMax"), 0),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.objData.intMP"), 0),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.dataLeaf.intMPMax"), 0),
        getOrDefault(this.flash.getGameObject<string>("world.strMapName"), ""),
        getOrDefault(this.flash.getGameObject<string>("world.strFrame"), ""),
        getOrDefault(this.flash.getGameObject<string>("world.strPad"), ""),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.dataLeaf.intState"), 0),
        getOrDefault(this.flash.getGameObject<unknown>("world.myAvatar.objData.iRank"), 0),
        getOrDefault(this.flash.call<unknown>("getTargetMonster"), undefined)
    ]);
    const hp = toNumber(health);

    return {
      username: username || fallbackUsername,
      level: toNumber(level),
      gold: toNumber(gold),
      health: hp,
      maxHealth: toNumber(maxHealth),
      mana: toNumber(mana),
      maxMana: toNumber(maxMana),
      map,
      cell,
      pad,
      currentClassRank: toNumber(rank),
      hasTarget: hasLiveTarget(target),
      loggedIn,
      inCombat: toNumber(state) === 2,
      alive: hp > 0
    };
  }

  async isLoggedIn(): Promise<boolean> {
    return toBoolean(await getOrDefault(this.flash.call<unknown>("isLoggedIn"), false));
  }

  async walkTo(x: number, y: number, speed = 8): Promise<void> {
    await this.flash.call("walkTo", x, y, speed);
  }
}

export class CombatApi {
  constructor(
    private readonly flash: FlashApi,
    private readonly logger: Logger
  ) {}

  async attack(target: string | number = "*"): Promise<void> {
    this.logger.log({ level: "debug", scope: "combat", message: `Attacking ${target}.` });
    if (typeof target === "number") {
      await this.flash.call<boolean>("attackMonsterID", target);
      return;
    }
    await this.flash.call<boolean>("attackMonsterName", target);
  }

  async canUseSkill(index: number): Promise<boolean> {
    return toBoolean(await getOrDefault(this.flash.call<unknown>("canUseSkill", index), false));
  }

  async useSkill(index: number): Promise<boolean> {
    return toBoolean(await getOrDefault(this.flash.call<unknown>("useSkill", index), false));
  }

  async useAvailableSkills(indexes = [1, 2, 3, 4, 5]): Promise<void> {
    for (const index of indexes) {
      if (await this.canUseSkill(index)) {
        await this.useSkill(index);
      }
    }
  }
}

export class InventoryApi {
  constructor(private readonly flash: FlashApi) {}

  async items(): Promise<InventoryItem[]> {
    return this.flash.getGameObject<InventoryItem[]>("world.myAvatar.items");
  }

  async contains(name: string, quantity = 1): Promise<boolean> {
    const items = await this.items();
    return items.some((item) => getItemName(item).toLowerCase() === name.toLowerCase() && getItemQuantity(item) >= quantity);
  }
}

export class QuestApi {
  constructor(
    private readonly flash: FlashApi,
    private readonly logger: Logger
  ) {}

  async accept(id: number): Promise<void> {
    this.logger.log({ level: "info", scope: "quest", message: `Accepting quest ${id}.` });
    await this.flash.callGameFunction("world.acceptQuest", id);
  }

  async complete(id: number): Promise<void> {
    this.logger.log({ level: "info", scope: "quest", message: `Completing quest ${id}.` });
    await this.flash.callGameFunction("world.tryQuestComplete", id);
  }

  async current(): Promise<QuestInfo[]> {
    return this.flash.getGameObject<QuestInfo[]>("world.myAvatar.quests");
  }
}

export class SendApi {
  constructor(private readonly flash: FlashApi) {}

  packet(packet: string, type = "String"): Promise<void> {
    return this.flash.callGameFunction<void>(`sfc.send${type}`, packet);
  }

  clientPacket(packet: string, type = "str"): Promise<void> {
    return this.flash.call<void>("sendClientPacket", packet, type);
  }
}

export class WaitApi {
  constructor(private readonly bot: Bot) {}

  async delay(ms: number, signal?: AbortSignal): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(resolve, ms);
      signal?.addEventListener(
        "abort",
        () => {
          clearTimeout(timeout);
          reject(signal.reason instanceof Error ? signal.reason : new Error(String(signal.reason ?? "Cancelled.")));
        },
        { once: true }
      );
    });
  }

  async forMapLoad(signal?: AbortSignal): Promise<void> {
    for (;;) {
      const loaded = await getOrDefault(this.bot.flash.getGameObject<boolean>("world.mapLoadInProgress"), false);
      if (!loaded) return;
      await this.delay(250, signal);
    }
  }
}

async function getOrDefault<T>(promise: Promise<T>, fallback: T): Promise<T> {
  try {
    const value = await promise;
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function getItemName(item: InventoryItem): string {
  const record = item as InventoryItem & { sName?: string; Name?: string };
  return record.name ?? record.sName ?? record.Name ?? "";
}

function getItemQuantity(item: InventoryItem): number {
  const record = item as InventoryItem & { iQty?: number; Quantity?: number };
  return record.quantity ?? record.iQty ?? record.Quantity ?? 1;
}

function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return false;
}

function toNumber(value: unknown): number {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function hasLiveTarget(target: unknown): boolean {
  if (!target || typeof target !== "object") return false;
  const record = target as { intHP?: unknown; dataLeaf?: { intHP?: unknown } };
  return toNumber(record.intHP ?? record.dataLeaf?.intHP) > 0;
}
