export class CancellationController {
  private readonly controller = new AbortController();

  get signal(): AbortSignal {
    return this.controller.signal;
  }

  get cancelled(): boolean {
    return this.signal.aborted;
  }

  cancel(reason = "Script cancelled."): void {
    if (!this.controller.signal.aborted) {
      this.controller.abort(new Error(reason));
    }
  }

  throwIfCancelled(): void {
    if (this.signal.aborted) {
      throw this.signal.reason ?? new Error("Script cancelled.");
    }
  }
}

