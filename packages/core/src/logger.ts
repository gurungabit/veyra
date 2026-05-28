import type { LogEntry } from "./models.js";

export interface Logger {
  log(entry: Omit<LogEntry, "time">): void;
}

export class MemoryLogger implements Logger {
  readonly entries: LogEntry[] = [];

  log(entry: Omit<LogEntry, "time">): void {
    this.entries.push({
      ...entry,
      time: new Date().toISOString()
    });
  }
}

