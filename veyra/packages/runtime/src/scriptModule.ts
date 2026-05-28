import type { Bot, ScriptMetadata } from "@veyra/core";

export interface ScriptContext {
  signal: AbortSignal;
  log(message: string, data?: unknown): void;
}

export interface ScriptModule {
  meta: ScriptMetadata;
  main(bot: Bot, context: ScriptContext): Promise<void> | void;
}

export function assertScriptModule(value: unknown): asserts value is ScriptModule {
  if (!value || typeof value !== "object") {
    throw new Error("Script module must export an object.");
  }

  const candidate = value as Partial<ScriptModule>;
  if (!candidate.meta?.name || !Array.isArray(candidate.meta.tags) || typeof candidate.main !== "function") {
    throw new Error("Script module must export meta and main(bot, context).");
  }
}

