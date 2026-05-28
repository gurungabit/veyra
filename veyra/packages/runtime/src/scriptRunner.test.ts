import { describe, expect, it } from "vitest";
import { BridgeClient, Bot, MemoryLogger } from "@veyra/core";
import { ScriptRunner } from "./scriptRunner.js";

describe("ScriptRunner", () => {
  it("runs a script module and records completion", async () => {
    const logger = new MemoryLogger();
    const bridge = new BridgeClient({ endpoint: "http://127.0.0.1:1", token: "test" });
    const bot = new Bot(bridge, logger);
    const runner = new ScriptRunner(bot, logger);

    await runner.run({
      meta: { name: "Smoke", description: "Smoke test", tags: ["test"] },
      main(contextBot) {
        contextBot.log("hello");
      }
    });

    expect(runner.status).toBe("completed");
    expect(logger.entries.some((entry) => entry.message === "hello")).toBe(true);
  });
});

