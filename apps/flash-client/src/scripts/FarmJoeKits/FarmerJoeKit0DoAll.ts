import type { Bot } from "../../bot.js";
import { CoreFarmerJoe } from "./CoreFarmerJoe.js";
import type { FarmJoeRuntimeOptions } from "./FarmJoeRuntime.js";

export const meta = {
  name: "FarmerJoeKit0DoAll",
  description: "Runs the full Veyra FarmerJoe progression kit.",
  tags: ["farmjoe", "do all", "progression"],
  version: "0.1.0"
};

export async function main(bot: Bot, options: FarmJoeRuntimeOptions = {}): Promise<void> {
  await new CoreFarmerJoe(bot, options).doAll();
}
