import type { Bot } from "../bot.js";

export const meta = {
  name: "My New Script",
  description: "Short description shown in Veyra's script list.",
  tags: ["example"],
  version: "2026.06.01.3"
};

export async function main(bot: Bot, options: { signal?: AbortSignal } = {}): Promise<void> {
  const snapshot = await bot.waitForLogin(options.signal);
  bot.log(`Logged in at ${snapshot.map}.`);

  await bot.join("battleon", "Enter", "Spawn");
  await bot.delay(1000, options.signal);

  bot.log("My New Script finished.");
}
