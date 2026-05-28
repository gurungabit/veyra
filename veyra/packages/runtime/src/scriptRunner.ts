import type { Bot, Logger } from "@veyra/core";
import { CancellationController } from "./cancellation.js";
import type { ScriptModule } from "./scriptModule.js";

export type ScriptStatus = "idle" | "running" | "stopping" | "stopped" | "failed" | "completed";

export class ScriptRunner {
  private cancellation: CancellationController | undefined;
  status: ScriptStatus = "idle";

  constructor(
    private readonly bot: Bot,
    private readonly logger: Logger
  ) {}

  async run(script: ScriptModule): Promise<void> {
    if (this.status === "running") {
      throw new Error("A script is already running.");
    }

    this.cancellation = new CancellationController();
    this.status = "running";
    this.logger.log({ level: "info", scope: "runtime", message: `Starting ${script.meta.name}.` });

    try {
      await script.main(this.bot, {
        signal: this.cancellation.signal,
        log: (message, data) => this.logger.log({ level: "info", scope: script.meta.name, message, data })
      });
      this.status = this.cancellation.cancelled ? "stopped" : "completed";
    } catch (error) {
      this.status = this.cancellation.cancelled ? "stopped" : "failed";
      const cancelled = this.cancellation.cancelled;
      this.logger.log({
        level: cancelled ? "info" : "error",
        scope: script.meta.name,
        message: error instanceof Error ? error.message : String(error),
        data: !cancelled && error instanceof Error ? { stack: error.stack } : undefined
      });
      throw error;
    } finally {
      this.logger.log({ level: "info", scope: "runtime", message: `${script.meta.name} finished as ${this.status}.` });
      this.cancellation = undefined;
    }
  }

  stop(): void {
    if (!this.cancellation) return;
    this.status = "stopping";
    this.cancellation.cancel();
  }
}
