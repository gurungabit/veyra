import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export type SettingsValue = string | number | boolean | null | SettingsValue[] | { [key: string]: SettingsValue };

export class SettingsStore<TSettings extends Record<string, SettingsValue>> {
  constructor(
    private readonly filePath: string,
    private readonly defaults: TSettings
  ) {}

  async read(): Promise<TSettings> {
    try {
      const raw = await readFile(this.filePath, "utf8");
      return { ...this.defaults, ...JSON.parse(raw) } as TSettings;
    } catch {
      return { ...this.defaults };
    }
  }

  async write(settings: TSettings): Promise<void> {
    await mkdir(dirname(this.filePath), { recursive: true });
    await writeFile(this.filePath, `${JSON.stringify(settings, null, 2)}\n`, "utf8");
  }

  async update(mutator: (settings: TSettings) => TSettings | void): Promise<TSettings> {
    const settings = await this.read();
    const next = mutator(settings) ?? settings;
    await this.write(next);
    return next;
  }
}

