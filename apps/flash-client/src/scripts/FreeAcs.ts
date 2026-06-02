import type { Bot } from "../bot.js";
import { ZeroToHeroRuntime, type ZeroToHeroRuntimeOptions } from "./ZeroToHeroKits/ZeroToHeroRuntime.js";

export const meta = {
  name: "Free ACs",
  description: "Runs the yearly Free ACs quest and completes Borgars first when needed.",
  tags: ["acs", "free acs", "borgars", "quest"],
  version: "2026.06.02.3"
};

export async function main(bot: Bot, options: ZeroToHeroRuntimeOptions = {}): Promise<void> {
  const runtime = new ZeroToHeroRuntime(bot, options);
  const snapshot = await runtime.ensureLoggedIn();

  if (await runtime.isQuestCompleted(10584)) {
    runtime.log("Free ACs quest is already complete.");
    return;
  }

  if (snapshot.level < 20) {
    runtime.log("Free ACs requires level 20.");
    return;
  }

  const verified = await isEmailVerified(bot);
  if (verified === false) {
    runtime.log("Free ACs requires a verified email.");
    return;
  }
  if (verified === undefined) runtime.log("Could not verify email status from the client; continuing.");

  runtime.log("Free ACs is a one-time quest per account.");
  await runBorgarsStory(runtime);
  await runtime.join("borgars", "Enter", "Spawn");
  await runtime.completeQuestPlan(
    10584,
    [{ kind: "hunt", map: "borgars", monster: "Burglinster", item: "Cookie Dough", quantity: 1, isTemp: true }],
    -1,
    false
  );
  runtime.log("Free ACs quest flow finished.");
}

async function runBorgarsStory(runtime: ZeroToHeroRuntime): Promise<void> {
  if (await runtime.isQuestCompleted(7522)) {
    runtime.log("Borgars story is already complete.");
    return;
  }

  runtime.log("Completing Borgars story prerequisite.");
  await runtime.storyKillQuest(7510, "extinction", ["Lard", "Freezer Drone"]);
  await runtime.storyKillQuest(7511, "battlefowl", "Chickencow");
  await runtime.storyKillQuest(7512, "freakitiki", "Sugar Imp");
  await runtime.storyKillQuest(7513, "stalagbite", "Balboa");
  await runtime.storyKillQuest(7514, "pirates", "Fishwing");
  await runtime.storyMapItemQuest(7515, "arcangrove", 7370);
  await runtime.storyMapItemQuest(7516, "thespan", 7371);

  if (!(await runtime.contains("Slice of Cake", 1, false, false))) {
    await runtime.completeQuestPlan(
      7518,
      [{ kind: "hunt", map: "portalmaze", monster: "Time Wraith", item: "Time Fragment", quantity: 10, isTemp: true }],
      -1,
      true
    );
    await runtime.acceptDrops("Slice of Cake");
  }

  await runtime.chainQuest(7517);
  await runtime.storyMapItemQuest(7519, "brightfortress", 7372);
  await runtime.completeQuestPlan(
    7520,
    [
      { kind: "hunt", map: "brightfortress", monster: "Brightscythe Reaver", item: "Kale", quantity: 4, isTemp: true },
      { kind: "hunt", map: "brightfortress", monster: "Brightscythe Reaver", item: "Quinoa", quantity: 4, isTemp: true }
    ]
  );
  await runtime.storyMapItemQuest(7521, "borgars", 7373);
  await runtime.storyKillQuest(7522, "borgars", "Burglinster");
}

async function isEmailVerified(bot: Bot): Promise<boolean | undefined> {
  const raw = await bot.callGameFunction<unknown>("world.myAvatar.isEmailVerified").catch(() => undefined);
  if (raw === undefined || raw === null || raw === "") return undefined;
  if (typeof raw === "boolean") return raw;
  if (typeof raw === "number") return raw !== 0;
  if (typeof raw === "string") return !["false", "0", "no"].includes(raw.trim().toLowerCase());
  return Boolean(raw);
}
