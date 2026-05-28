export type BridgeEvent =
  | FlashExternalCallEvent
  | GameLifecycleEvent
  | BridgeLogEvent;

export interface FlashExternalCallEvent {
  type: "flash.externalCall";
  functionName: string;
  args: unknown[];
}

export interface GameLifecycleEvent {
  type: "game.lifecycle";
  state: "loading" | "loaded" | "closed" | "error";
  detail?: string;
}

export interface BridgeLogEvent {
  type: "bridge.log";
  level: "debug" | "info" | "warn" | "error";
  message: string;
  data?: unknown;
}

