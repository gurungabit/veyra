export interface AppDirectories {
  root: string;
  scripts: string;
  settings: string;
  logs: string;
  plugins: string;
  cache: string;
  scriptCommitFile: string;
}

export interface ScriptMetadata {
  name: string;
  description: string;
  tags: string[];
  version?: string;
}

export interface ScriptInfo extends ScriptMetadata {
  path: string;
  size: number;
  sha256?: string;
  fileName: string;
  downloadUrl?: string;
}

export interface PlayerSnapshot {
  username: string;
  level: number;
  gold: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  map: string;
  cell: string;
  pad: string;
  currentClassRank: number;
  hasTarget: boolean;
  loggedIn: boolean;
  inCombat: boolean;
  alive: boolean;
}

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  maxStack?: number;
  temporary?: boolean;
}

export interface QuestInfo {
  id: number;
  name: string;
  completed?: boolean;
}

export interface LogEntry {
  time: string;
  level: "debug" | "info" | "warn" | "error";
  scope: string;
  message: string;
  data?: unknown;
}
