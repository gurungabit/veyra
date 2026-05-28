import { expect, test } from "@playwright/test";
import { _electron as electron } from "playwright";
import { resolve } from "node:path";

test.describe.configure({ mode: "serial" });

test("electron loads the client bridge and runs the example script", async () => {
  test.skip(process.platform !== "win32", "The live Flash bridge is Windows-only.");

  const app = await electron.launch({ args: [resolve("apps/desktop")] });
  try {
    const win = await app.firstWindow({ timeout: 30_000 });
    await expect(win.getByRole("heading", { name: /Veyra/ })).toBeVisible();

    const manifestCount = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return (await api.scripts.manifest()).length;
    });
    expect(manifestCount).toBeGreaterThan(0);

    const started = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return api.scripts.runExample();
    });
    expect(started.status).toBe("running");

    await expect
      .poll(
        async () =>
          win.evaluate(async () => {
            const api = (window as unknown as VeyraTestWindow).veyra;
            return (await api.bridge.status()).ready;
          }),
        { timeout: 15_000 }
      )
      .toBe(true);

    await expect
      .poll(
        async () =>
          win.evaluate(async () => {
            const api = (window as unknown as VeyraTestWindow).veyra;
            return (await api.scripts.status()).status;
          }),
        { timeout: 10_000 }
      )
      .toBe("completed");

    const logs = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return (await api.scripts.logs()).map((entry) => entry.message);
    });
    expect(logs).toContain("Bridge reports client ready.");
    expect(logs).toContain("Flash callback round trip: true");

    const stopped = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return api.bridge.stop();
    });
    expect(stopped.running).toBe(false);
  } finally {
    await app.close();
  }
});

test("electron can start and cancel the XP farm script", async () => {
  test.skip(process.platform !== "win32", "The live Flash bridge is Windows-only.");

  const app = await electron.launch({ args: [resolve("apps/desktop")] });
  try {
    const win = await app.firstWindow({ timeout: 30_000 });
    await expect(win.getByRole("heading", { name: /Veyra/ })).toBeVisible();

    const scriptPath = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      const manifest = await api.scripts.manifest();
      return manifest.find((script) => script.name === "Leveling [1-100]")?.path;
    });
    expect(scriptPath).toBe("farm/leveling.ts");
    if (!scriptPath) throw new Error("XP farm script was not found in the manifest.");

    const started = await win.evaluate(async (path) => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return api.scripts.run(path);
    }, scriptPath);
    expect(started.status).toBe("running");

    await expect
      .poll(
        async () =>
          win.evaluate(async () => {
            const api = (window as unknown as VeyraTestWindow).veyra;
            return (await api.scripts.logs()).some((entry) => entry.message.includes("Waiting for a logged-in character"));
          }),
        { timeout: 10_000 }
      )
      .toBe(true);

    const stopping = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return api.scripts.stop();
    });
    expect(["running", "stopping", "stopped"]).toContain(stopping.status);

    await expect
      .poll(
        async () =>
          win.evaluate(async () => {
            const api = (window as unknown as VeyraTestWindow).veyra;
            return (await api.scripts.status()).status;
          }),
        { timeout: 10_000 }
      )
      .toBe("stopped");

    const stopped = await win.evaluate(async () => {
      const api = (window as unknown as VeyraTestWindow).veyra;
      return api.bridge.stop();
    });
    expect(stopped.running).toBe(false);
  } finally {
    await app.close();
  }
});

interface VeyraTestWindow {
  veyra: {
    bridge: {
      status(): Promise<{ ready: boolean }>;
      stop(): Promise<{ running: boolean }>;
    };
    scripts: {
      manifest(): Promise<Array<{ name: string; path: string }>>;
      run(scriptPath: string): Promise<{ status: string }>;
      runExample(): Promise<{ status: string }>;
      status(): Promise<{ status: string }>;
      stop(): Promise<{ status: string }>;
      logs(): Promise<Array<{ message: string }>>;
    };
  };
}
