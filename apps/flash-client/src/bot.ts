import { createDefaultGameOptionsState, type GameOptionsState } from "./gameOptions.js";

export interface PlayerSnapshot {
  loggedIn: boolean;
  username: string;
  level: number;
  map: string;
  cell: string;
  pad: string;
  room: number;
  x: number;
  y: number;
  mapLoading: boolean;
  mapLoaded: boolean;
  alive: boolean;
  currentClassName: string;
  currentClassPoints: number;
  currentClassRank: number;
}

export interface Bot {
  log(message: string): void;
  delay(ms: number, signal?: AbortSignal): Promise<void>;
  gameOptions(): Promise<GameOptionsState>;
  waitForLogin(signal?: AbortSignal): Promise<PlayerSnapshot>;
  snapshot(): Promise<PlayerSnapshot>;
  respawn(signal?: AbortSignal): Promise<PlayerSnapshot>;
  cells(): Promise<string[]>;
  pads(): Promise<string[]>;
  waitForMap(map: string, cell?: string, pad?: string, signal?: AbortSignal): Promise<PlayerSnapshot>;
  join(map: string, cell?: string, pad?: string): Promise<void>;
  joinExact(map: string, cell?: string, pad?: string): Promise<void>;
  goHome(username?: string): Promise<void>;
  goto(username: string): Promise<void>;
  jump(cell: string, pad?: string): Promise<void>;
  walkTo(x: number, y: number, speed?: number): Promise<void>;
  attack(monster?: string | number): Promise<void>;
  useAvailableSkills(): Promise<void>;
  sendPacket(packet: string): Promise<void>;
  getGameObject<T>(path: string): Promise<T>;
  callGameFunction<T>(path: string, ...args: unknown[]): Promise<T>;
  call<T>(name: string, ...args: unknown[]): Promise<T>;
}

export type ReloginHandler = (signal?: AbortSignal) => Promise<PlayerSnapshot | boolean | void>;

type FlashObject = HTMLElement & Record<string, (...args: unknown[]) => unknown>;

const publicOnlyMaps = new Set<string>();

export class BrowserFlashBot implements Bot {
  constructor(
    private readonly flash: () => FlashObject,
    private readonly logger: (message: string) => void,
    private readonly readOptions: () => Promise<GameOptionsState> = () => Promise.resolve(createDefaultGameOptionsState()),
    private readonly relogin: ReloginHandler | undefined = undefined
  ) {}

  log(message: string): void {
    this.logger(message);
  }

  async gameOptions(): Promise<GameOptionsState> {
    return this.readOptions();
  }

  async delay(ms: number, signal?: AbortSignal): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const timeout = window.setTimeout(resolve, ms);
      signal?.addEventListener(
        "abort",
        () => {
          window.clearTimeout(timeout);
          reject(signal.reason instanceof Error ? signal.reason : new Error(String(signal.reason ?? "Cancelled.")));
        },
        { once: true }
      );
    });
  }

  async waitForLogin(signal?: AbortSignal): Promise<PlayerSnapshot> {
    let reloginTried = false;
    for (;;) {
      const snapshot = await this.snapshot();
      if (snapshot.loggedIn) return snapshot;
      if (!reloginTried && this.relogin) {
        reloginTried = true;
        this.log("Auto relogin triggered.");
        const result = await this.relogin(signal).catch((error) => {
          this.log(`Auto relogin failed: ${describeUnknownError(error)}`);
          return false;
        });
        if (isPlayerSnapshot(result) && result.loggedIn) return result;
        const afterRelogin = await this.snapshot().catch(() => undefined);
        if (afterRelogin?.loggedIn) return afterRelogin;
      }
      this.log("Waiting for login.");
      await this.delay(1000, signal);
    }
  }

  async snapshot(): Promise<PlayerSnapshot> {
    const bridgeSnapshot = await this.call<unknown>("getWorldSnapshot").catch(() => undefined);
    if (bridgeSnapshot) {
      const snapshot = parseMaybeJson<Record<string, unknown>>(bridgeSnapshot);
      if (snapshot && typeof snapshot === "object") {
        return {
          loggedIn: toBoolean(snapshot.loggedIn),
          username: stringFrom(snapshot.username),
          level: toNumber(snapshot.level),
          map: stringFrom(snapshot.map),
          cell: stringFrom(snapshot.cell),
          pad: stringFrom(snapshot.pad),
          room: toNumber(snapshot.room),
          x: toNumber(snapshot.x),
          y: toNumber(snapshot.y),
          mapLoading: hasOwn(snapshot, "mapLoading") ? toBoolean(snapshot.mapLoading) : false,
          mapLoaded: hasOwn(snapshot, "mapLoaded") ? toBoolean(snapshot.mapLoaded) : true,
          alive: toBoolean(snapshot.alive),
          currentClassName: stringFrom(snapshot.currentClassName, "Equipped class"),
          currentClassPoints: toNumber(snapshot.currentClassPoints),
          currentClassRank: toNumber(snapshot.currentClassRank)
        };
      }
    }

    const [loggedIn, username, fallbackUsername, level, map, cell, pad, mapLoadingRaw, connectionStage, x, y, hp, rank, className, equippedClassName, classPoints] = await Promise.all([
      this.call<boolean>("isLoggedIn").catch(() => false),
      this.getGameObject<string>("loginInfo.strUsername").catch(() => ""),
      this.getGameObject<string>("world.myAvatar.objData.strUsername").catch(() => ""),
      this.getGameObject<unknown>("world.myAvatar.dataLeaf.intLevel").catch(() => 0),
      this.getGameObject<string>("world.strMapName").catch(() => ""),
      this.getGameObject<string>("world.strFrame").catch(() => ""),
      this.getGameObject<string>("world.strPad").catch(() => ""),
      this.getGameObject<unknown>("world.mapLoadInProgress").catch(() => false),
      this.getGameObject<unknown>("mcConnDetail.stage").catch(() => undefined),
      this.getGameObject<unknown>("world.myAvatar.pMC.x").catch(() => 0),
      this.getGameObject<unknown>("world.myAvatar.pMC.y").catch(() => 0),
      this.getGameObject<unknown>("world.myAvatar.dataLeaf.intHP").catch(() => 0),
      this.getGameObject<unknown>("world.myAvatar.objData.iRank").catch(() => 0),
      this.getGameObject<string>("world.myAvatar.objData.strClassName").catch(() => ""),
      this.getGameObject<string>("world.myAvatar.objData.eqp.ar.sName").catch(() => ""),
      this.getGameObject<unknown>("world.myAvatar.objData.iCP").catch(() => 0)
    ]);

    const mapLoading = toBoolean(mapLoadingRaw);
    const connectionStageVisible = toBoolean(connectionStage);
    return {
      loggedIn: toBoolean(loggedIn),
      username: username || fallbackUsername,
      level: toNumber(level),
      map,
      cell,
      pad,
      room: 0,
      x: toNumber(x),
      y: toNumber(y),
      mapLoading,
      mapLoaded: !mapLoading && !connectionStageVisible,
      alive: toNumber(hp) > 0,
      currentClassName: className || equippedClassName || "Equipped class",
      currentClassPoints: toNumber(classPoints),
      currentClassRank: toNumber(rank)
    };
  }

  async respawn(signal?: AbortSignal): Promise<PlayerSnapshot> {
    let snapshot = await this.snapshot();
    if (!snapshot.loggedIn) snapshot = await this.waitForLogin(signal);
    if (snapshot.alive) return snapshot;

    this.log("Player is dead; requesting respawn.");
    let nextAttemptAt = 0;
    const deadline = Date.now() + 30000;

    while (Date.now() < deadline) {
      if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");
      snapshot = await this.snapshot();
      if (!snapshot.loggedIn) snapshot = await this.waitForLogin(signal);
      if (snapshot.alive) {
        this.log("Respawned.");
        return snapshot;
      }

      if (Date.now() >= nextAttemptAt) {
        await this.requestRespawn(snapshot.room).catch((error) => this.log(`Respawn request failed: ${describeUnknownError(error)}`));
        nextAttemptAt = Date.now() + 3000;
      }
      await this.delay(750, signal);
    }

    throw new Error("Timed out waiting for player respawn.");
  }

  async cells(): Promise<string[]> {
    return toStringArray(await this.call<unknown>("getCells").catch(() => []));
  }

  async pads(): Promise<string[]> {
    return toStringArray(await this.call<unknown>("getPads").catch(() => []));
  }

  async waitForMap(map: string, cell?: string, pad?: string, signal?: AbortSignal): Promise<PlayerSnapshot> {
    const baseMap = baseMapName(map);
    const targetRoom = privateRoomNumber(map);
    const deadline = Date.now() + 12000;
    let lastSnapshot = await this.snapshot();

    while (Date.now() < deadline) {
      if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error("Cancelled.");

      lastSnapshot = await this.snapshot();
      const mapMatches = sameMap(lastSnapshot.map, baseMap) || sameMap(lastSnapshot.map, map);
      const roomMatches = targetRoom === undefined || lastSnapshot.room === targetRoom;
      const cellMatches = !cell || lastSnapshot.cell === cell;
      const padMatches = !pad || lastSnapshot.pad === pad;
      const loaded = lastSnapshot.mapLoaded !== false && lastSnapshot.mapLoading !== true;
      if (mapMatches && roomMatches && loaded && cellMatches && padMatches) return lastSnapshot;
      if (mapMatches && roomMatches && loaded && cellMatches && !pad) return lastSnapshot;
      await this.delay(300, signal);
    }

    throw new Error(
      `Timed out joining ${map}${cell ? ` ${cell}` : ""}${pad ? `/${pad}` : ""}. Last location: ${lastSnapshot.map || "unknown"}-${lastSnapshot.room || "?"} ${lastSnapshot.cell || "?"}/${lastSnapshot.pad || "?"}.`
    );
  }

  async join(map: string, cell?: string, pad?: string): Promise<void> {
    await this.joinInternal(map, cell, pad, true);
  }

  async joinExact(map: string, cell?: string, pad?: string): Promise<void> {
    await this.joinInternal(map, cell, pad, false);
  }

  async goHome(username = ""): Promise<void> {
    const target = username.trim();
    this.log(target ? `Joining ${target}'s house.` : "Joining house.");
    let current = await this.snapshot().catch(() => undefined);
    if (current && !current.alive) current = await this.respawn();
    await this.leaveCombatCell(current);
    await this.call("joinHouse", target);
    await this.waitForMap("house", undefined, undefined);
  }

  async goto(username: string): Promise<void> {
    const target = username.trim();
    if (!target) return;
    this.log(`Going to ${target}.`);
    await this.callGameFunction("world.goto", target);
  }

  async walkTo(x: number, y: number, speed = 8): Promise<void> {
    await this.call("walkTo", Math.floor(x), Math.floor(y), Math.floor(speed));
  }

  private async joinInternal(map: string, cell?: string, pad?: string, usePrivateRoomOption = true): Promise<void> {
    let current = await this.snapshot().catch(() => undefined);
    if (current && !current.alive) current = await this.respawn();
    const targetCell = (cell || "").trim();
    const targetPad = (pad || "").trim();
    const options = await this.readOptions().catch(() => createDefaultGameOptionsState());
    let targetMap = map;
    const baseTargetMap = baseMapName(targetMap);
    if (isHomeMap(targetMap)) {
      await this.goHome();
      return;
    }
    if (usePrivateRoomOption && options.values["private-rooms"] === true && !hasPrivateRoomSuffix(targetMap) && !publicOnlyMaps.has(baseTargetMap) && !isHomeMap(targetMap)) {
      const privateNumber = Number(options.values["private-number"] ?? 0);
      targetMap = withPrivateRoomSuffix(targetMap, privateNumber);
    }

    if (current && sameMap(current.map, targetMap) && samePrivateRoom(current, targetMap)) {
      if (targetCell && (current.cell !== targetCell || (targetPad && targetPad !== "Auto" && current.pad !== targetPad))) {
        this.log(`Jumping to ${targetCell}/${targetPad}.`);
        await this.jump(targetCell, targetPad);
        await this.waitForMap(targetMap, targetCell, undefined);
      }
      return;
    }

    await this.leaveCombatCell(current);

    try {
      await this.joinBaseMap(targetMap);
    } catch {
      if (!hasPrivateRoomSuffix(targetMap)) {
        await this.leaveCombatCell(await this.snapshot().catch(() => current), true);
        await this.joinBaseMap(targetMap);
      } else {
        publicOnlyMaps.add(baseTargetMap);
        this.log(`Private room join failed for ${targetMap}; retrying ${baseTargetMap}.`);
        await this.leaveCombatCell(await this.snapshot().catch(() => current), true);
        await this.joinBaseMap(baseTargetMap);
        targetMap = baseTargetMap;
      }
    }
    await this.delay(650);

    const landed = await this.snapshot().catch(() => undefined);
    if (landed && targetCell && (landed.cell !== targetCell || (targetPad && targetPad !== "Auto" && landed.pad !== targetPad))) {
      this.log(`Jumping to ${targetCell}/${targetPad}.`);
      await this.jump(targetCell, targetPad);
      await this.waitForMap(targetMap, targetCell, undefined);
    }
  }

  private async joinBaseMap(targetMap: string): Promise<void> {
    this.log(`Joining ${targetMap}.`);
    await this.call("joinMap", targetMap, "Enter", "Spawn");
    await this.waitForMap(targetMap, undefined, undefined);
  }

  private async chooseExitCell(currentCell: string): Promise<{ cell: string; pad: string } | undefined> {
    const current = currentCell.trim().toLowerCase();
    const [cells, monsterCells] = await Promise.all([
      this.cells().catch(() => []),
      this.aliveMonsterCells().catch(() => new Set<string>())
    ]);

    const validCells = cells
      .map((cell) => cell.trim())
      .filter(Boolean)
      .filter((cell, index, list) => list.findIndex((entry) => entry.toLowerCase() === cell.toLowerCase()) === index);

    const safeCells = validCells.filter((cell) => {
      const normalized = cell.toLowerCase();
      return (
        normalized !== current &&
        normalized !== "blank" &&
        !normalized.startsWith("cut") &&
        !monsterCells.has(normalized)
      );
    });

    const cell =
      safeCells.find((candidate) => candidate.toLowerCase() === "enter") ??
      safeCells.find((candidate) => candidate.toLowerCase() === "spawn") ??
      safeCells.find((candidate) => !["init", "intro"].includes(candidate.toLowerCase())) ??
      safeCells[0];
    if (!cell) return undefined;

    return { cell, pad: "Auto" };
  }

  private async aliveMonsterCells(): Promise<Set<string>> {
    const monsters = parseMaybeJson<unknown>(await this.call<unknown>("getMonsters").catch(() => []));
    if (!Array.isArray(monsters)) return new Set();

    const cells = new Set<string>();
    for (const monster of monsters) {
      if (!monster || typeof monster !== "object") continue;
      const record = monster as Record<string, unknown>;
      const hp = firstNumber(record, ["intHP", "HP", "hp"]);
      const frame = firstString(record, ["strFrame", "frame", "Frame", "cell", "Cell"]).trim().toLowerCase();
      if (hp > 0 && frame && frame !== "blank") cells.add(frame);
    }
    return cells;
  }

  private async waitForCell(cell: string, timeoutMs = 2500): Promise<PlayerSnapshot | undefined> {
    const targetCell = cell.trim().toLowerCase();
    const deadline = Date.now() + timeoutMs;
    let latest: PlayerSnapshot | undefined;
    while (Date.now() < deadline) {
      latest = await this.snapshot().catch(() => latest);
      if (latest?.cell?.trim().toLowerCase() === targetCell && latest.mapLoaded !== false && latest.mapLoading !== true) {
        return latest;
      }
      await this.delay(150);
    }
    return latest;
  }

  private async tryHouseEscape(): Promise<boolean> {
    this.log("Using house as safe exit before map join.");
    await this.call("untargetSelf").catch(() => undefined);
    await this.call("joinHouse", "").catch(() => undefined);
    const escaped = await this.waitForMap("house", undefined, undefined).catch(() => undefined);
    return Boolean(escaped);
  }

  private async leaveCombatCell(snapshot?: PlayerSnapshot, force = false): Promise<void> {
    if (!snapshot?.loggedIn || !snapshot.alive) return;

    const currentCell = (snapshot.cell || "").trim();
    const normalizedCell = currentCell.toLowerCase();
    if (!currentCell || normalizedCell === "enter" || (!force && normalizedCell === "enter")) return;

    await this.call("untargetSelf").catch(() => undefined);
    const exit = await this.chooseExitCell(currentCell);
    if (exit) {
      this.log(`Leaving ${currentCell || "current"} cell before map join via ${exit.cell}/${exit.pad}.`);
      await this.jump(exit.cell, exit.pad).catch(() => undefined);
      const afterExit = await this.waitForCell(exit.cell).catch(() => undefined);
      if (afterExit?.cell?.trim().toLowerCase() === exit.cell.toLowerCase()) return;
    } else {
      this.log(`No safe non-combat cell found before map join from ${currentCell || "current"} cell.`);
    }

    if (force || normalizedCell === "blank") {
      const escaped = await this.tryHouseEscape();
      if (escaped) return;
    }

    await this.delay(300);
  }

  private async requestRespawn(room: number): Promise<void> {
    const safeRoom = Number.isFinite(room) && room > 0 ? Math.floor(room) : 1;
    await this.callGameFunction("world.tryRespawn").catch(() => undefined);
    await this.callGameFunction("world.respawn").catch(() => undefined);
    await this.callGameFunction("world.myAvatar.respawn").catch(() => undefined);
    await this.sendPacket(`%xt%zm%resPlayerTimed%${safeRoom}%`).catch(() => undefined);
  }

  async sendPacket(packet: string): Promise<void> {
    await this.callGameFunction("sfc.sendString", packet);
  }

  async jump(cell: string, pad = "Spawn"): Promise<void> {
    const current = await this.snapshot().catch(() => undefined);
    if (current && sameCellPad(current, cell, pad)) return;

    let lastError: unknown;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        if (!pad || pad === "Auto") {
          await this.call("jumpCorrectRoom", cell, "Spawn", true, false);
          return;
        }
        await this.call("jumpCorrectRoom", cell, pad, false, false);
        return;
      } catch (error) {
        lastError = error;
        await this.delay(450);
      }
    }
    throw new Error(`Jump to ${cell}/${pad || "Auto"} failed: ${describeUnknownError(lastError)}`);
  }

  async attack(monster: string | number = "*"): Promise<void> {
    if (typeof monster === "number") {
      await this.call("attackMonsterID", monster);
      return;
    }
    await this.call("attackMonsterName", monster);
  }

  async useAvailableSkills(): Promise<void> {
    for (const skill of [1, 2, 3, 4, 5]) {
      if (toBoolean(await this.call("canUseSkill", skill).catch(() => false))) {
        await this.call("useSkill", skill);
      }
    }
  }

  async getGameObject<T>(path: string): Promise<T> {
    const value = await this.call<unknown>("getGameObject", path);
    if (typeof value === "string") {
      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    }
    return value as T;
  }

  async callGameFunction<T>(path: string, ...args: unknown[]): Promise<T> {
    const flashObject = this.flash();
    const safeName = args.length > 0 ? "callGameFunctionSafe" : "callGameFunction0Safe";
    if (typeof flashObject[safeName] === "function") {
      const raw = args.length > 0 ? await this.call<unknown>(safeName, path, ...args) : await this.call<unknown>(safeName, path);
      return unwrapSafeFlashCall<T>(raw, path, args);
    }
    return args.length > 0 ? this.call<T>("callGameFunction", path, ...args) : this.call<T>("callGameFunction0", path);
  }

  call<T>(name: string, ...args: unknown[]): Promise<T> {
    const flashObject = this.flash();
    const fn = flashObject[name];
    if (typeof fn !== "function") return Promise.reject(new Error(`Flash callback is unavailable: ${name}`));
    try {
      return Promise.resolve(fn.apply(flashObject, args) as T);
    } catch (error) {
      return Promise.reject(new Error(`Flash callback ${name} failed: ${describeUnknownError(error)}`));
    }
  }
}

function isPlayerSnapshot(value: unknown): value is PlayerSnapshot {
  return Boolean(value && typeof value === "object" && "loggedIn" in value);
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

function toStringArray(value: unknown): string[] {
  const parsed = parseMaybeJson<unknown>(value);
  if (!Array.isArray(parsed)) return [];
  return parsed.map((item) => stringFrom(item)).filter(Boolean);
}

function firstNumber(record: Record<string, unknown>, keys: string[]): number {
  for (const key of keys) {
    const value = record[key];
    const parsed = toNumber(value);
    if (parsed > 0 || value === 0 || value === "0") return parsed;
  }
  return 0;
}

function firstString(record: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const value = stringFrom(record[key]).trim();
    if (value) return value;
  }
  return "";
}

function sameMap(left: string, right: string): boolean {
  return baseMapName(left) === baseMapName(right);
}

function baseMapName(map: string): string {
  return (map || "").split("-")[0]?.toLowerCase() || "";
}

function isHomeMap(map: string): boolean {
  const base = baseMapName(map);
  return base === "house" || base === "home";
}

function samePrivateRoom(snapshot: PlayerSnapshot, targetMap: string): boolean {
  const targetRoom = privateRoomNumber(targetMap);
  return targetRoom === undefined || snapshot.room === targetRoom;
}

function sameCellPad(snapshot: PlayerSnapshot, cell: string, pad?: string): boolean {
  const targetCell = (cell || "Enter").trim().toLowerCase();
  const targetPad = (pad || "Spawn").trim().toLowerCase();
  const currentCell = (snapshot.cell || "").trim().toLowerCase();
  const currentPad = (snapshot.pad || "").trim().toLowerCase();
  return currentCell === targetCell && (targetPad === "auto" || currentPad === targetPad);
}

function hasPrivateRoomSuffix(map: string): boolean {
  return /-\d+$/.test(map);
}

function privateRoomNumber(map: string): number | undefined {
  const match = /-(\d+)$/.exec(map);
  if (!match) return undefined;
  const room = Number(match[1]);
  return Number.isFinite(room) && room > 0 ? room : undefined;
}

function withPrivateRoomSuffix(map: string, privateNumber: number): string {
  if (hasPrivateRoomSuffix(map)) return map;
  const room = Number.isFinite(privateNumber) && privateNumber > 0 ? Math.floor(privateNumber) : 100000;
  return `${map}-${room}`;
}

function parseMaybeJson<T>(value: unknown): T | undefined {
  if (typeof value !== "string") return value as T;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

function hasOwn(value: Record<string, unknown>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(value, key);
}

function unwrapSafeFlashCall<T>(raw: unknown, path: string, args: unknown[]): T {
  const parsed = parseMaybeJson<Record<string, unknown>>(raw);
  if (!parsed || typeof parsed !== "object") return raw as T;
  if (parsed.ok === true) return parsed.value as T;
  const message = stringFrom(parsed.message, "Flash call failed.");
  const errorNameText = stringFrom(parsed.errorName);
  const errorIdText = stringFrom(parsed.errorId);
  const stackText = stringFrom(parsed.stack);
  const errorName = errorNameText ? ` ${errorNameText}` : "";
  const errorId = errorIdText ? ` #${errorIdText}` : "";
  const stack = stackText ? `\n${stackText}` : "";
  throw new Error(`${path}(${args.map((arg) => JSON.stringify(arg)).join(", ")}) failed:${errorName}${errorId} ${message}${stack}`);
}

function stringFrom(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
  return fallback;
}

function describeUnknownError(error: unknown): string {
  if (error instanceof Error) return error.message || error.name;
  if (typeof error === "string") return error;
  if (error === null) return "null";
  if (error === undefined) return "undefined";
  try {
    return JSON.stringify(error);
  } catch {
    return Object.prototype.toString.call(error);
  }
}
