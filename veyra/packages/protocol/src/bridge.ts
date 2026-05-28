export const bridgeMethods = {
  flashCall: "flash.call",
  flashGetGameObject: "flash.getGameObject",
  flashSetGameObject: "flash.setGameObject",
  flashCallGameFunction: "flash.callGameFunction",
  gameAttach: "game.attach",
  gameLoadClient: "game.loadClient",
  gameFocus: "game.focus",
  gameShutdown: "game.shutdown",
  bridgeHealth: "bridge.health"
} as const;

export type BridgeMethod = (typeof bridgeMethods)[keyof typeof bridgeMethods];

export interface FlashCallParams {
  functionName: string;
  args: unknown[];
}

export interface FlashGameObjectParams {
  path: string;
}

export interface FlashSetGameObjectParams extends FlashGameObjectParams {
  value: unknown;
}

export interface FlashCallGameFunctionParams {
  path: string;
  args: unknown[];
}

export interface BridgeHealthResult {
  app: "Veyra Bridge";
  ready: boolean;
  platform: string;
  detail?: string;
}
