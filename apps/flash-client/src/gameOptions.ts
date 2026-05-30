export type GameOptionKind = "toggle" | "number" | "text" | "action";
export type GameOptionValue = boolean | number | string;

export interface GameOptionDef {
  id: string;
  label: string;
  kind: GameOptionKind;
  tag: "1" | "2" | "3" | "4";
  defaultValue?: GameOptionValue;
  suffix?: string;
}

export interface GameOptionsState {
  columns: number;
  values: Record<string, GameOptionValue>;
  savedAt?: string;
}

export const DEFAULT_GAME_OPTION_COLUMNS = 2;
export const RELOGIN_SERVERS = ["Twilly", "Artix", "Yorumi", "Galanoth", "Gravelyn", "Espada", "Safiria"];

const toggleOptions: GameOptionDef[] = [
  { id: "accept-ac-drops", label: "Accept ACDrops", kind: "toggle", tag: "1", defaultValue: false },
  { id: "accept-all-drops", label: "Accept All Drops", kind: "toggle", tag: "1", defaultValue: false },
  { id: "aggro-all-monsters", label: "Aggro All Monsters", kind: "toggle", tag: "1", defaultValue: false },
  { id: "aggro-monsters", label: "Aggro Monsters", kind: "toggle", tag: "1", defaultValue: false },
  { id: "attack-without-target", label: "Attack Without Target", kind: "toggle", tag: "1", defaultValue: false },
  { id: "auto-relogin", label: "Auto Relogin", kind: "toggle", tag: "1", defaultValue: false },
  { id: "auto-relogin-any", label: "Auto Relogin Any", kind: "toggle", tag: "1", defaultValue: false },
  { id: "disable-collisions", label: "Disable Collisions", kind: "toggle", tag: "1", defaultValue: false },
  { id: "disable-death-ads", label: "Disable Death Ads", kind: "toggle", tag: "1", defaultValue: false },
  { id: "disable-fx", label: "Disable FX", kind: "toggle", tag: "1", defaultValue: false },
  { id: "hide-players", label: "Hide Players", kind: "toggle", tag: "1", defaultValue: false },
  { id: "infinite-range", label: "Infinite Range", kind: "toggle", tag: "1", defaultValue: false },
  { id: "lag-killer", label: "Lag Killer", kind: "toggle", tag: "1", defaultValue: false },
  { id: "magnetise", label: "Magnetise", kind: "toggle", tag: "1", defaultValue: false },
  { id: "private-rooms", label: "Private Rooms", kind: "toggle", tag: "1", defaultValue: false },
  { id: "quest-drops-only", label: "Quest Drops Only", kind: "toggle", tag: "1", defaultValue: false },
  { id: "reject-all-drops", label: "Reject All Drops", kind: "toggle", tag: "1", defaultValue: false },
  { id: "rest-packets", label: "Rest Packets", kind: "toggle", tag: "1", defaultValue: false },
  { id: "retry-relogin", label: "Retry Relogin", kind: "toggle", tag: "1", defaultValue: true },
  { id: "safe-relogin", label: "Safe Relogin", kind: "toggle", tag: "1", defaultValue: false },
  { id: "safe-timings", label: "Safe Timings", kind: "toggle", tag: "1", defaultValue: true },
  { id: "show-fps", label: "Show FPS", kind: "toggle", tag: "1", defaultValue: false },
  { id: "skip-cutscenes", label: "Skip Cutscenes", kind: "toggle", tag: "1", defaultValue: false },
  { id: "staff", label: "Staff", kind: "toggle", tag: "1", defaultValue: false },
  { id: "upgrade", label: "Upgrade", kind: "toggle", tag: "1", defaultValue: false }
];

const textOptions: GameOptionDef[] = [
  { id: "custom-guild", label: "Custom Guild", kind: "text", tag: "2", defaultValue: "" },
  { id: "custom-name", label: "Custom Name", kind: "text", tag: "2", defaultValue: "" },
  { id: "relogin-server", label: "Relogin Server", kind: "text", tag: "2", defaultValue: "Twilly" }
];

const numberOptions: GameOptionDef[] = [
  { id: "action-delay", label: "Action Delay", kind: "number", tag: "3", defaultValue: 800 },
  { id: "hunt-buffer", label: "Hunt Buffer", kind: "number", tag: "3", defaultValue: 1 },
  { id: "hunt-delay", label: "Hunt Delay", kind: "number", tag: "3", defaultValue: 1000 },
  { id: "join-map-tries", label: "Join Map Tries", kind: "number", tag: "3", defaultValue: 3 },
  { id: "load-timeout", label: "Load Timeout", kind: "number", tag: "3", defaultValue: 30000 },
  { id: "login-timeout", label: "Login Timeout", kind: "number", tag: "3", defaultValue: 30000 },
  { id: "maximum-tries", label: "Maximum Tries", kind: "number", tag: "3", defaultValue: 10 },
  { id: "private-number", label: "Private Number", kind: "number", tag: "3", defaultValue: 100000 },
  { id: "quest-accept-and-complete-tries", label: "Quest Accept And Complete Tries", kind: "number", tag: "3", defaultValue: 30 },
  { id: "relogin-tries", label: "Relogin Tries", kind: "number", tag: "3", defaultValue: 5 },
  { id: "relogin-try-delay", label: "Relogin Try Delay", kind: "number", tag: "3", defaultValue: 800 },
  { id: "set-fps", label: "Set FPS", kind: "number", tag: "3", defaultValue: 30, suffix: "FPS" },
  { id: "walk-speed", label: "Walk Speed", kind: "number", tag: "3", defaultValue: 8 }
];

const actionOptions: GameOptionDef[] = [{ id: "reload-map", label: "Reload Map", kind: "action", tag: "4" }];

export const GAME_OPTION_DEFS: readonly GameOptionDef[] = [...toggleOptions, ...textOptions, ...numberOptions, ...actionOptions].sort((left, right) => {
  const byTag = left.tag.localeCompare(right.tag);
  return byTag || left.label.localeCompare(right.label);
});

export function createDefaultGameOptionsState(): GameOptionsState {
  const values: Record<string, GameOptionValue> = {};
  for (const option of GAME_OPTION_DEFS) {
    if (option.kind !== "action" && option.defaultValue !== undefined) values[option.id] = option.defaultValue;
  }
  return { columns: DEFAULT_GAME_OPTION_COLUMNS, values };
}

export function readGameOptionsState(value?: unknown): GameOptionsState {
  return normalizeGameOptionsState(value && typeof value === "object" ? (value) : {});
}

export function writeGameOptionsState(state: GameOptionsState): GameOptionsState {
  const normalized = normalizeGameOptionsState({ ...state, savedAt: new Date().toISOString() }, createDefaultGameOptionsState());
  return normalized;
}

export function normalizeGameOptionsState(partial: Partial<GameOptionsState>, defaults = createDefaultGameOptionsState()): GameOptionsState {
  const values: Record<string, GameOptionValue> = { ...defaults.values };
  const incomingValues = partial.values && typeof partial.values === "object" ? partial.values : {};

  for (const option of GAME_OPTION_DEFS) {
    if (option.kind === "action") continue;
    if (Object.prototype.hasOwnProperty.call(incomingValues, option.id)) {
      values[option.id] = coerceGameOptionValue(option, incomingValues[option.id]);
    }
  }

  const normalized: GameOptionsState = {
    columns: clampColumns(Number(partial.columns ?? defaults.columns)),
    values
  };
  if (typeof partial.savedAt === "string") normalized.savedAt = partial.savedAt;
  return normalized;
}

export function coerceGameOptionValue(option: GameOptionDef, value: unknown): GameOptionValue {
  if (option.kind === "toggle") return value === true || value === "true" || value === 1;
  if (option.kind === "number") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.floor(parsed) : Number(option.defaultValue ?? 0);
  }
  return stringFrom(value);
}

export function clampColumns(value: number): number {
  if (!Number.isFinite(value)) return DEFAULT_GAME_OPTION_COLUMNS;
  return Math.max(1, Math.min(8, Math.floor(value)));
}

function stringFrom(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
  return "";
}
