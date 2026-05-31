export type ArmyRole = "off" | "leader" | "follower";

export interface ArmySettings {
  syncMap: boolean;
  syncCell: boolean;
  syncPosition: boolean;
  followOnEnable: boolean;
  exactRoom: boolean;
  publishIntervalMs: number;
  heartbeatMs: number;
  moveThreshold: number;
  walkThreshold: number;
  leaderLockMs: number;
  joinRooms: number[];
}

export function createDefaultArmySettings(): ArmySettings {
  return {
    syncMap: true,
    syncCell: true,
    syncPosition: true,
    followOnEnable: true,
    exactRoom: true,
    publishIntervalMs: 500,
    heartbeatMs: 3000,
    moveThreshold: 20,
    walkThreshold: 28,
    leaderLockMs: 5000,
    joinRooms: []
  };
}

export function normalizeArmySettings(value: unknown): ArmySettings {
  const defaults = createDefaultArmySettings();
  const record = value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
  return {
    syncMap: booleanFrom(record.syncMap, defaults.syncMap),
    syncCell: booleanFrom(record.syncCell, defaults.syncCell),
    syncPosition: booleanFrom(record.syncPosition, defaults.syncPosition),
    followOnEnable: booleanFrom(record.followOnEnable, defaults.followOnEnable),
    exactRoom: booleanFrom(record.exactRoom, defaults.exactRoom),
    publishIntervalMs: clampNumber(record.publishIntervalMs, 250, 3000, defaults.publishIntervalMs),
    heartbeatMs: clampNumber(record.heartbeatMs, 1000, 15000, defaults.heartbeatMs),
    moveThreshold: clampNumber(record.moveThreshold, 1, 250, defaults.moveThreshold),
    walkThreshold: clampNumber(record.walkThreshold, 1, 250, defaults.walkThreshold),
    leaderLockMs: clampNumber(record.leaderLockMs, 1000, 60000, defaults.leaderLockMs),
    joinRooms: parseRoomNumbers(record.joinRooms ?? record.roomNumbers, defaults.joinRooms)
  };
}

export function isArmyRole(value: unknown): value is ArmyRole {
  return value === "off" || value === "leader" || value === "follower";
}

function booleanFrom(value: unknown, fallback: boolean): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "true" || lower === "1") return true;
    if (lower === "false" || lower === "0") return false;
  }
  return fallback;
}

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  const parsed = typeof value === "number" ? value : typeof value === "string" ? Number(value) : Number.NaN;
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function parseRoomNumbers(value: unknown, fallback: number[]): number[] {
  const rawValues = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(/[\s,;|]+/)
      : typeof value === "number"
        ? [value]
        : [];
  const rooms = rawValues
    .map((item) => (typeof item === "number" ? item : typeof item === "string" ? Number(item.trim()) : Number.NaN))
    .filter((item) => Number.isFinite(item) && item > 0)
    .map((item) => Math.floor(item));
  return rooms.length > 0 ? Array.from(new Set(rooms)).slice(0, 12) : fallback.slice();
}
