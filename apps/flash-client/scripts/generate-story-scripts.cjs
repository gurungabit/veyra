#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const storyRoot = path.resolve(__dirname, "../../../../Scripts/Story");
const outputDir = path.resolve(__dirname, "../src/scripts/Story/Generated");
const legacyOutputFile = path.resolve(__dirname, "../src/scripts/Story/GeneratedStories.ts");

const ignoredEntryFiles = new Set(["0AllStories.cs"]);
const ignoredCalls = new Set([
  "if",
  "for",
  "foreach",
  "while",
  "switch",
  "catch",
  "using",
  "return",
  "new",
  "typeof",
  "nameof",
  "lock",
  "Core.RunCore",
  "Core.SetOptions",
  "Core.Start",
  "Core.Stop",
  "Core.Logger",
  "Core.ToBank",
  "Core.ToInventory",
  "Core.CheckInventory",
  "Core.CheckAchievement",
  "Core.isCompletedBefore",
  "Core.Sleep",
  "Core.RegisterQuests",
  "Story.PreLoad",
  "Bot.Stop",
  "Bot.Wait",
  "Bot.Sleep"
]);

function main() {
  if (!fs.existsSync(storyRoot)) throw new Error(`Story source root was not found: ${storyRoot}`);
  const files = listFiles(storyRoot)
    .filter((file) => file.endsWith(".cs"))
    .sort((a, b) => a.localeCompare(b));
  const sourceFiles = files.map(parseSourceFile);
  const classIndex = new Map(sourceFiles.filter((file) => file.className).map((file) => [file.className, file]));
  const resolver = new StoryResolver(classIndex);
  const entries = assignUniqueModulePaths(
    sourceFiles
      .filter((file) => !ignoredEntryFiles.has(path.basename(file.filePath)))
      .map((file) => buildGeneratedEntry(file, resolver))
  );

  fs.rmSync(outputDir, { force: true, recursive: true });
  fs.rmSync(legacyOutputFile, { force: true });
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "runner.ts"), renderGeneratedRunner());
  for (const entry of entries) writeGeneratedStoryModule(entry);
  fs.writeFileSync(path.join(outputDir, "index.ts"), renderGeneratedIndex(entries));

  const totalSteps = entries.reduce((sum, entry) => sum + entry.steps.length, 0);
  const emptyEntries = entries.filter((entry) => entry.steps.length === 0).length;
  console.log(`Generated ${entries.length} story modules with ${totalSteps} steps.`);
  if (emptyEntries > 0) console.log(`${emptyEntries} definitions had no detected automated quest steps.`);
}

class StoryResolver {
  constructor(classIndex) {
    this.classIndex = classIndex;
  }

  stepsForFile(sourceFile) {
    const entryMethod = this.entryMethodFor(sourceFile);
    if (!entryMethod) return [];
    return this.stepsForMethod(sourceFile, entryMethod, new Set());
  }

  entryMethodFor(sourceFile) {
    const scriptMain = sourceFile.methods.get("ScriptMain");
    if (scriptMain && this.hasRunnableCall(scriptMain.body)) return scriptMain;
    const preferredNames = [
      "DoAll",
      "CompleteAll",
      "CompleteALL",
      "CompleteEverything",
      `Complete${sourceFile.className.replace(/^Core/, "")}`
    ];
    for (const name of preferredNames) {
      const method = sourceFile.methods.get(name);
      if (method) return method;
    }
    return [...sourceFile.methods.values()].find((method) => /^Complete/.test(method.name)) ?? scriptMain;
  }

  hasRunnableCall(body) {
    return extractCalls(body).some((call) => !ignoredCalls.has(call.name) && !call.name.startsWith("Core."));
  }

  stepsForMethod(sourceFile, method, visiting) {
    const key = `${sourceFile.className}.${method.name}`;
    if (visiting.has(key)) return [];
    visiting.add(key);

    const locals = collectLocalValues(method.body);
    const steps = [];
    let currentPlan = undefined;

    for (const call of extractCalls(method.body)) {
      if (ignoredCalls.has(call.name)) continue;

      if (call.name === "Story.LegacyQuestManager") {
        if (currentPlan) {
          steps.push(currentPlan);
          currentPlan = undefined;
        }
        steps.push(...this.legacyQuestSteps(method.body, call, locals));
        continue;
      }

      const action = this.actionFromCall(call, locals);
      if (action) {
        if (action.kind === "ensureAccept") {
          if (currentPlan) steps.push(currentPlan);
          currentPlan = { kind: "plan", questId: action.questId, actions: [] };
        } else if (action.kind === "ensureComplete") {
          if (currentPlan && currentPlan.questId === action.questId) {
            currentPlan.rewardId = action.rewardId;
            steps.push(currentPlan);
          } else {
            steps.push({ kind: "chain", questId: action.questId, rewardId: action.rewardId });
          }
          currentPlan = undefined;
        } else if (action.kind === "questStep") {
          if (currentPlan) {
            steps.push(currentPlan);
            currentPlan = undefined;
          }
          steps.push(action.step);
        } else if (action.kind === "planAction") {
          if (currentPlan) currentPlan.actions.push(action.action);
        }
        continue;
      }

      const calledMethod = this.resolveMethodCall(sourceFile, call.name);
      if (calledMethod) {
        if (currentPlan) {
          steps.push(currentPlan);
          currentPlan = undefined;
        }
        steps.push(...this.stepsForMethod(calledMethod.sourceFile, calledMethod.method, visiting));
      }
    }

    if (currentPlan) steps.push(currentPlan);
    visiting.delete(key);
    return normalizeSteps(steps);
  }

  legacyQuestSteps(body, call, locals) {
    const args = splitArguments(call.args);
    const functionName = args[0]?.trim();
    const questIds = args
      .slice(1)
      .flatMap((arg) => {
        const range = valueAsNumbers(arg, locals);
        if (range.length > 0) return range;
        return [valueAsNumber(arg, locals)];
      })
      .filter((questId) => questId > 0);
    const functionBody = functionName ? extractLocalFunction(body, functionName) : "";
    if (!functionBody) return questIds.map((questId) => ({ kind: "chain", questId }));

    const cases = parseSwitchCases(functionBody);
    return questIds.map((questId) => {
      const caseBody = cases.get(questId) ?? "";
      const caseLocals = new Map([...locals, ...collectLocalValues(caseBody)]);
      const actions = this.planActionsFromBody(caseBody, caseLocals);
      return actions.length > 0 ? { kind: "plan", questId, actions } : { kind: "chain", questId };
    });
  }

  planActionsFromBody(body, locals) {
    const actions = [];
    for (const call of extractCalls(body)) {
      const normalizedName = call.name.replace(/\s+/g, "");
      if (normalizedName === "Bot.Quests.UpdateQuest") {
        const questId = valueAsNumber(splitArguments(call.args)[0], locals);
        if (questId > 0) actions.push({ kind: "packet", packet: `%xt%zm%updateQuest%1%${questId}%` });
        continue;
      }
      const action = this.planActionFromCall(normalizedName, splitArguments(call.args), locals);
      if (action) actions.push(action);
    }
    return actions;
  }

  resolveMethodCall(sourceFile, callName) {
    const parts = callName.split(".");
    const methodName = parts.pop();
    if (!methodName || ["Core", "Story", "Bot", "Adv"].includes(parts[0] ?? "")) return undefined;

    if (parts.length === 0) {
      const method = sourceFile.methods.get(methodName);
      return method ? { sourceFile, method } : undefined;
    }

    const owner = parts[parts.length - 1];
    const className = sourceFile.aliases.get(owner) ?? owner;
    const ownerFile = this.classIndex.get(className);
    const method = ownerFile?.methods.get(methodName);
    return ownerFile && method ? { sourceFile: ownerFile, method } : undefined;
  }

  actionFromCall(call, locals) {
    const args = splitArguments(call.args);
    const normalizedName = call.name.replace(/\s+/g, "");

    if (normalizedName === "Story.KillQuest") {
      const questId = valueAsNumber(args[0], locals);
      const map = valueAsString(args[1], locals);
      const monsters = valueAsTargets(args[2], locals);
      if (questId > 0 && map && monsters.length > 0)
        return { kind: "questStep", step: { kind: "kill", questId, map, monsters } };
    }

    if (normalizedName === "Story.MapItemQuest") {
      const questId = valueAsNumber(args[0], locals);
      const map = valueAsString(args[1], locals);
      const ids = valueAsNumbers(args[2], locals);
      const quantity = valueAsOptionalNumber(args[3], locals);
      if (questId > 0 && map && ids.length > 0)
        return { kind: "questStep", step: compactStep({ kind: "mapItem", questId, map, ids, quantity }) };
    }

    if (normalizedName === "Story.ChainQuest" || normalizedName === "Core.ChainComplete") {
      const questId = valueAsNumber(args[0], locals);
      const rewardId = valueAsOptionalNumber(args[1], locals);
      if (questId > 0) return { kind: "questStep", step: compactStep({ kind: "chain", questId, rewardId }) };
    }

    if (normalizedName === "Story.BuyQuest") {
      const questId = valueAsNumber(args[0], locals);
      const map = valueAsString(args[1], locals);
      const shopId = valueAsNumber(args[2], locals);
      const item = valueAsTarget(args[3], locals);
      const quantity = valueAsOptionalNumber(args[4], locals);
      if (questId > 0 && map && shopId > 0 && item !== undefined)
        return {
          kind: "questStep",
          step: compactStep({
            kind: "plan",
            questId,
            actions: [compactAction({ kind: "buy", map, shopId, item, quantity })]
          })
        };
    }

    if (normalizedName === "Core.HuntMonsterQuest") {
      const questId = valueAsNumber(args[0], locals);
      const target = parseHuntMonsterQuestTarget(args.slice(1), locals);
      if (questId > 0 && target?.map && target.monsters.length > 0)
        return {
          kind: "questStep",
          step: { kind: "kill", questId, map: target.map, monsters: target.monsters }
        };
    }

    if (normalizedName === "Core.EnsureAccept") {
      const questId = valueAsNumber(args[0], locals);
      if (questId > 0) return { kind: "ensureAccept", questId };
    }

    if (normalizedName === "Core.EnsureComplete") {
      const questId = valueAsNumber(args[0], locals);
      const rewardId = valueAsOptionalNumber(args[1], locals);
      if (questId > 0) return { kind: "ensureComplete", questId, rewardId };
    }

    if (normalizedName === "Bot.Quests.UpdateQuest") {
      const questId = valueAsNumber(args[0], locals);
      if (questId > 0) return { kind: "planAction", action: { kind: "packet", packet: `%xt%zm%updateQuest%1%${questId}%` } };
    }

    const planAction = this.planActionFromCall(normalizedName, args, locals);
    return planAction ? { kind: "planAction", action: planAction } : undefined;
  }

  planActionFromCall(name, args, locals) {
    if (name === "Core.HuntMonster") {
      const map = valueAsString(args[0], locals);
      const monster = valueAsTarget(args[1], locals);
      const item = valueAsTarget(args[2], locals);
      const quantity = valueAsOptionalNumber(args[3], locals);
      const isTemp = valueAsOptionalBoolean(args[4], locals);
      if (map && monster !== undefined)
        return compactAction({ kind: "hunt", map, monster, item, quantity, isTemp });
    }

    if (name === "Core.KillMonster") {
      const map = valueAsString(args[0], locals);
      const cell = valueAsString(args[1], locals);
      const pad = valueAsString(args[2], locals);
      const monster = valueAsTarget(args[3], locals);
      const item = valueAsTarget(args[4], locals);
      const quantity = valueAsOptionalNumber(args[5], locals);
      const isTemp = valueAsOptionalBoolean(args[6], locals);
      if (map && monster !== undefined)
        return compactAction({ kind: "hunt", map, cell, pad, monster, item, quantity, isTemp });
    }

    if (name === "Core.HuntMonsterMapID") {
      const map = valueAsString(args[0], locals);
      const monster = valueAsNumber(args[1], locals);
      const item = valueAsTarget(args[2], locals);
      const quantity = valueAsOptionalNumber(args[3], locals);
      const isTemp = valueAsOptionalBoolean(args[4], locals);
      if (map && monster > 0) return compactAction({ kind: "hunt", map, monster, item, quantity, isTemp });
    }

    if (name === "Core.GetMapItem" || name === "Bot.Map.GetMapItem") {
      const id = valueAsNumber(args[0], locals);
      const quantity = valueAsOptionalNumber(args[1], locals);
      const map = valueAsString(args[2], locals) || valueAsString(args[1], locals);
      if (id > 0) return compactAction({ kind: "mapItem", map, id, quantity });
    }

    if (name === "Core.BuyItem") {
      const map = valueAsString(args[0], locals);
      const shopId = valueAsNumber(args[1], locals);
      const item = valueAsTarget(args[2], locals);
      const quantity = valueAsOptionalNumber(args[3], locals);
      const shopItemId = valueAsOptionalNumber(args[4], locals);
      if (shopId > 0 && item !== undefined)
        return compactAction({ kind: "buy", map, shopId, item, quantity, shopItemId });
    }

    if (name === "Core.Join" || name === "Bot.Map.Join") {
      const map = valueAsString(args[0], locals);
      const cell = valueAsString(args[1], locals);
      const pad = valueAsString(args[2], locals);
      if (map) return compactAction({ kind: "join", map, cell, pad });
    }

    if (name === "Core.Jump" || name === "Bot.Map.Jump") {
      const cell = valueAsString(args[0], locals);
      const pad = valueAsString(args[1], locals);
      if (cell) return compactAction({ kind: "jump", cell, pad });
    }

    return undefined;
  }
}

function buildGeneratedEntry(sourceFile, resolver) {
  const relativePath = slash(path.relative(storyRoot, sourceFile.filePath));
  const metadata = parseMetadata(sourceFile.raw);
  const id = `story.${slugPath(relativePath.replace(/\.cs$/i, ""))}`;
  const steps = storyStepOverride(id) ?? resolver.stepsForFile(sourceFile);
  const name = metadata.name || nameFromPath(relativePath);
  return {
    id,
    modulePath: modulePathFromRelative(relativePath),
    map: inferMap(steps) || inferMapFromName(name) || "story",
    meta: {
      name,
      description: metadata.description || `Runs the ${name} story route.`,
      tags: unique(["story", ...metadata.tags, ...tagsFromPath(relativePath)]),
      version: "0.1.0"
    },
    steps
  };
}

function assignUniqueModulePaths(entries) {
  const seen = new Map();
  return entries.map((entry) => {
    const count = seen.get(entry.modulePath) ?? 0;
    seen.set(entry.modulePath, count + 1);
    if (count === 0) return entry;
    return {
      ...entry,
      modulePath: entry.modulePath.replace(/\.ts$/, `_${count + 1}.ts`)
    };
  });
}

function storyStepOverride(id) {
  if (id === "story.tower-of-doom") {
    return Array.from({ length: 10 }, (_, index) => {
      const floor = index + 1;
      return {
        kind: "kill",
        questId: 3474 + floor,
        map: floor === 1 ? "towerofdoom" : `towerofdoom${floor}`,
        monsters: ["*"]
      };
    });
  }
  return undefined;
}

function parseSourceFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const code = stripComments(raw);
  const classMatch = /\bpublic\s+class\s+([A-Za-z_]\w*)/.exec(code);
  const className = classMatch?.[1] ?? path.basename(filePath, ".cs").replace(/[^A-Za-z0-9_]/g, "");
  const classOpen = classMatch ? code.indexOf("{", classMatch.index) : -1;
  const classClose = classOpen >= 0 ? findMatching(code, classOpen, "{", "}") : -1;
  const classBody = classOpen >= 0 && classClose > classOpen ? code.slice(classOpen + 1, classClose) : code;

  return {
    filePath,
    raw,
    code,
    className,
    aliases: parseAliases(classBody),
    methods: parseMethods(classBody)
  };
}

function parseMethods(classBody) {
  const methods = new Map();
  const methodRe =
    /\b(?:public|private|protected|internal)\s+(?:static\s+)?(?:async\s+)?(?:void|Task(?:<[^>{}]+>)?|bool|int|string|[A-Za-z_]\w*(?:<[^>{}]+>)?)\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*(?:where\s+[^{]+)?\{/g;
  let match;
  while ((match = methodRe.exec(classBody))) {
    const name = match[1];
    const open = methodRe.lastIndex - 1;
    const close = findMatching(classBody, open, "{", "}");
    if (close < 0) continue;
    methods.set(name, {
      name,
      params: match[2],
      body: classBody.slice(open + 1, close)
    });
    methodRe.lastIndex = close + 1;
  }
  return methods;
}

function parseAliases(classBody) {
  const aliases = new Map([
    ["Core", "CoreBots"],
    ["Story", "CoreStory"],
    ["Bot", "Bot"],
    ["Adv", "CoreAdvanced"]
  ]);
  const aliasRe = /\b(?:public|private|protected|internal)\s+(?:static\s+)?([A-Z][A-Za-z0-9_]*)\s+([A-Za-z_]\w*)\s*(?:=>|\{)/g;
  let match;
  while ((match = aliasRe.exec(classBody))) {
    if (!["void", "bool", "int", "string", "Task"].includes(match[1])) aliases.set(match[2], match[1]);
  }
  return aliases;
}

function collectLocalValues(body) {
  const values = new Map();
  const arrayRe = /\b(?:string|int|var)\s*(?:\[\])?\s+([A-Za-z_]\w*)\s*=\s*(?:new\s*(?:string|int)?\s*\[\]\s*)?\{([\s\S]*?)\}\s*;/g;
  let match;
  while ((match = arrayRe.exec(body))) values.set(match[1], parseArrayLiteral(`{${match[2]}}`, values));

  const listRe = /\b(?:List|IEnumerable)<(?:string|int)>\s+([A-Za-z_]\w*)\s*=\s*new\s*(?:\([^)]*\))?\s*\{([\s\S]*?)\}\s*;/g;
  while ((match = listRe.exec(body))) values.set(match[1], parseArrayLiteral(`{${match[2]}}`, values));

  const scalarRe = /\b(?:const\s+)?(?:string|int|var)\s+([A-Za-z_]\w*)\s*=\s*([^;\n]+);/g;
  while ((match = scalarRe.exec(body))) {
    if (!values.has(match[1])) {
      const value = parseValue(match[2], values);
      if (value !== undefined) values.set(match[1], value);
    }
  }
  return values;
}

function extractCalls(body) {
  const calls = [];
  const callRe = /\b([A-Za-z_]\w*(?:\s*\.\s*[A-Za-z_]\w*)*)\s*\(/g;
  let match;
  while ((match = callRe.exec(body))) {
    const name = match[1].replace(/\s+/g, "");
    if (ignoredCalls.has(name)) continue;
    const open = callRe.lastIndex - 1;
    const close = findMatching(body, open, "(", ")");
    if (close < 0) continue;
    calls.push({ name, args: body.slice(open + 1, close), index: match.index });
    callRe.lastIndex = close + 1;
  }
  return calls;
}

function extractLocalFunction(body, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const localFunctionRe = new RegExp(`\\b(?:void|Task)\\s+${escaped}\\s*\\([^)]*\\)\\s*\\{`, "g");
  const match = localFunctionRe.exec(body);
  if (!match) return "";
  const open = localFunctionRe.lastIndex - 1;
  const close = findMatching(body, open, "{", "}");
  return close > open ? body.slice(open + 1, close) : "";
}

function parseSwitchCases(body) {
  const cases = new Map();
  const caseRe = /\bcase\s+(-?\d+)\s*:/g;
  const matches = [...body.matchAll(caseRe)];
  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const questId = Number(match[1]);
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? body.length;
    if (questId > 0) cases.set(questId, body.slice(start, end));
  }
  return cases;
}

function parseHuntMonsterQuestTarget(args, locals) {
  if (args.length === 1 && args[0]?.trim().startsWith("(")) {
    const tuple = splitArguments(trimWrapping(args[0].trim(), "(", ")"));
    const map = valueAsString(tuple[0], locals);
    const monsters = valueAsTargets(tuple[1], locals);
    return map && monsters.length > 0 ? { map, monsters } : undefined;
  }
  const map = valueAsString(args[0], locals);
  const monsters = valueAsTargets(args[1], locals);
  return map && monsters.length > 0 ? { map, monsters } : undefined;
}

function splitArguments(text) {
  const args = [];
  let start = 0;
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = "";
  let verbatim = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const prev = text[index - 1] ?? "";
    if (quote) {
      if (quote === '"' && !verbatim && char === "\\" && index + 1 < text.length) {
        index += 1;
        continue;
      }
      if (char === quote && (quote !== '"' || verbatim || prev !== "\\")) {
        quote = "";
        verbatim = false;
      }
      continue;
    }
    if ((char === "@" || char === "$") && text[index + 1] === '"') {
      quote = '"';
      verbatim = char === "@";
      index += 1;
      continue;
    }
    if (char === '"') {
      quote = char;
      continue;
    }
    if (char === "(") depthParen += 1;
    else if (char === ")") depthParen -= 1;
    else if (char === "{") depthBrace += 1;
    else if (char === "}") depthBrace -= 1;
    else if (char === "[") depthBracket += 1;
    else if (char === "]") depthBracket -= 1;
    else if (char === "," && depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
      args.push(cleanArgument(text.slice(start, index)));
      start = index + 1;
    }
  }
  const tail = cleanArgument(text.slice(start));
  if (tail) args.push(tail);
  return args;
}

function cleanArgument(arg) {
  let value = arg.trim();
  const namedMatch = /^([A-Za-z_]\w*)\s*:\s*([\s\S]+)$/.exec(value);
  if (namedMatch) value = namedMatch[2].trim();
  return value;
}

function parseValue(expression, locals) {
  if (!expression) return undefined;
  let value = expression.trim();
  value = value.replace(/^\(([\s\S]*)\)$/, "$1").trim();
  const stringValue = parseStringLiteral(value);
  if (stringValue !== undefined) return stringValue;
  if (/^-?\d+$/.test(value)) return Number(value);
  const rangeMatch = /^Core\.FromTo\s*\(([\s\S]*)\)$/.exec(value);
  if (rangeMatch) {
    const [startExpression, endExpression] = splitArguments(rangeMatch[1]);
    const start = valueAsNumber(startExpression, locals);
    const end = valueAsNumber(endExpression, locals);
    if (start > 0 && end >= start) return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
  if (/^(true|false)$/i.test(value)) return /^true$/i.test(value);
  if (value.startsWith("new[]") || value.startsWith("{")) return parseArrayLiteral(value, locals);
  const indexMatch = /^([A-Za-z_]\w*)\s*\[\s*(\d+)\s*\]$/.exec(value);
  if (indexMatch) {
    const array = locals.get(indexMatch[1]);
    return Array.isArray(array) ? array[Number(indexMatch[2])] : undefined;
  }
  if (locals.has(value)) return locals.get(value);
  return undefined;
}

function parseArrayLiteral(expression, locals) {
  const open = expression.indexOf("{");
  const close = expression.lastIndexOf("}");
  if (open < 0 || close <= open) return [];
  return splitArguments(expression.slice(open + 1, close))
    .map((part) => parseValue(part, locals))
    .flat()
    .filter((value) => typeof value === "string" || typeof value === "number");
}

function valueAsString(expression, locals) {
  const value = parseValue(expression, locals);
  return typeof value === "string" && value.trim() ? value : "";
}

function valueAsNumber(expression, locals) {
  const value = parseValue(expression, locals);
  return typeof value === "number" && Number.isFinite(value) ? value : -1;
}

function valueAsOptionalNumber(expression, locals) {
  const value = valueAsNumber(expression, locals);
  return value > 0 ? value : undefined;
}

function valueAsOptionalBoolean(expression, locals) {
  const value = parseValue(expression, locals);
  return typeof value === "boolean" ? value : undefined;
}

function valueAsTarget(expression, locals) {
  const value = parseValue(expression, locals);
  return typeof value === "string" || typeof value === "number" ? value : undefined;
}

function valueAsTargets(expression, locals) {
  const value = parseValue(expression, locals);
  if (Array.isArray(value)) return value.filter((item) => typeof item === "string" || typeof item === "number");
  return typeof value === "string" || typeof value === "number" ? [value] : [];
}

function valueAsNumbers(expression, locals) {
  return valueAsTargets(expression, locals).filter((item) => typeof item === "number");
}

function parseStringLiteral(value) {
  const match = /^(?:@|\$|@\$|\$@)?\"([\s\S]*)\"$/.exec(value.trim());
  if (!match) return undefined;
  return match[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

function trimWrapping(value, open, close) {
  return value.startsWith(open) && value.endsWith(close) ? value.slice(1, -1) : value;
}

function stripComments(input) {
  let output = "";
  let index = 0;
  let quote = "";
  let verbatim = false;
  while (index < input.length) {
    const char = input[index];
    const next = input[index + 1] ?? "";
    const prev = input[index - 1] ?? "";
    if (quote) {
      output += char;
      if (quote === '"' && !verbatim && char === "\\" && index + 1 < input.length) {
        output += input[index + 1];
        index += 2;
        continue;
      }
      if (char === quote && (quote !== '"' || verbatim || prev !== "\\")) {
        quote = "";
        verbatim = false;
      }
      index += 1;
      continue;
    }
    if ((char === "@" || char === "$") && next === '"') {
      quote = '"';
      verbatim = char === "@";
      output += char + next;
      index += 2;
      continue;
    }
    if (char === '"') {
      quote = char;
      output += char;
      index += 1;
      continue;
    }
    if (char === "/" && next === "/") {
      while (index < input.length && input[index] !== "\n") index += 1;
      output += "\n";
      continue;
    }
    if (char === "/" && next === "*") {
      index += 2;
      while (index < input.length && !(input[index] === "*" && input[index + 1] === "/")) {
        output += input[index] === "\n" ? "\n" : " ";
        index += 1;
      }
      index += 2;
      continue;
    }
    output += char;
    index += 1;
  }
  return output;
}

function findMatching(text, openIndex, openChar, closeChar) {
  let depth = 0;
  let quote = "";
  let verbatim = false;
  for (let index = openIndex; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1] ?? "";
    const prev = text[index - 1] ?? "";
    if (quote) {
      if (quote === '"' && !verbatim && char === "\\" && index + 1 < text.length) {
        index += 1;
        continue;
      }
      if (char === quote && (quote !== '"' || verbatim || prev !== "\\")) {
        quote = "";
        verbatim = false;
      }
      continue;
    }
    if ((char === "@" || char === "$") && next === '"') {
      quote = '"';
      verbatim = char === "@";
      index += 1;
      continue;
    }
    if (char === '"') {
      quote = char;
      continue;
    }
    if (char === openChar) depth += 1;
    else if (char === closeChar) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  return -1;
}

function compactStep(step) {
  return stripUndefined(step);
}

function compactAction(action) {
  return stripUndefined(action);
}

function stripUndefined(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== ""));
}

function normalizeSteps(steps) {
  return steps.filter((step) => {
    if (!step || typeof step.questId !== "number" || step.questId <= 0) return false;
    if (step.kind === "plan") return Array.isArray(step.actions);
    return true;
  });
}

function inferMap(steps) {
  for (const step of steps) {
    if ((step.kind === "kill" || step.kind === "mapItem") && step.map) return step.map;
    if (step.kind === "plan") {
      const action = step.actions.find((entry) => "map" in entry && entry.map);
      if (action?.map) return action.map;
    }
  }
  return "";
}

function inferMapFromName(name) {
  const words = name.toLowerCase().match(/[a-z0-9]+/g);
  return words?.at(-1) ?? "";
}

function parseMetadata(raw) {
  const block = /\/\*([\s\S]*?)\*\//.exec(raw)?.[1] ?? "";
  const metadata = { name: "", description: "", tags: [] };
  for (const line of block.split(/\r?\n/)) {
    const match = /^\s*(name|description|tags)\s*:\s*(.*?)\s*$/.exec(line);
    if (!match) continue;
    const value = match[2].trim();
    if (!value || value.toLowerCase() === "null") continue;
    if (match[1] === "tags") metadata.tags = value.split(",").map((tag) => tag.trim()).filter(Boolean);
    else metadata[match[1]] = value;
  }
  return metadata;
}

function nameFromPath(relativePath) {
  const noExt = relativePath.replace(/\.cs$/i, "");
  const parts = noExt.split("/").map((part) => titleize(part.replace(/^\d+/, ""))).filter(Boolean);
  return parts.join(" / ");
}

function tagsFromPath(relativePath) {
  return relativePath
    .replace(/\.cs$/i, "")
    .split("/")
    .flatMap((part) => slugWords(part))
    .filter(Boolean);
}

function slugPath(value) {
  return value
    .split("/")
    .map((part) => slugify(part))
    .filter(Boolean)
    .join(".");
}

function slugify(value) {
  return slugWords(value).join("-");
}

function slugWords(value) {
  return value
    .replace(/\[(.*?)\]/g, " $1 ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .match(/[a-z0-9]+/g) ?? [];
}

function titleize(value) {
  return slugWords(value)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function unique(values) {
  return [...new Set(values.map((value) => value.trim().toLowerCase()).filter(Boolean))];
}

function listFiles(root) {
  const entries = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) entries.push(...listFiles(fullPath));
    else if (entry.isFile()) entries.push(fullPath);
  }
  return entries;
}

function slash(value) {
  return value.split(path.sep).join("/");
}

function modulePathFromRelative(relativePath) {
  return `${relativePath
    .replace(/\.cs$/i, "")
    .split("/")
    .map((segment) => segment.replace(/\[(.*?)\]/g, "$1").replace(/[^A-Za-z0-9]+/g, "") || "Story")
    .join("/")}.ts`;
}

function writeGeneratedStoryModule(entry) {
  const filePath = path.join(outputDir, entry.modulePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const runnerImport = `${relativeImport(path.dirname(filePath), path.join(outputDir, "runner"))}.js`;
  fs.writeFileSync(filePath, renderGeneratedStoryModule(entry, runnerImport));
}

function relativeImport(fromDirectory, toFileWithoutExtension) {
  let relative = slash(path.relative(fromDirectory, toFileWithoutExtension));
  if (!relative.startsWith(".")) relative = `./${relative}`;
  return relative;
}

function renderGeneratedRunner() {
  return `import type { Bot } from "../../../bot.js";
import { FarmJoeRuntime, type FarmJoeRuntimeOptions } from "../../FarmJoeKits/FarmJoeRuntime.js";
import { runStorySteps, type StoryStep } from "../StoryRuntime.js";

export type { StoryStep };

export interface GeneratedStoryDefinition {
  id: string;
  category: "Story";
  map: string;
  meta: {
    name: string;
    description: string;
    tags: string[];
    version: string;
  };
  run: (bot: Bot, options?: FarmJoeRuntimeOptions) => Promise<void>;
}

export function defineGeneratedStory(
  definition: Omit<GeneratedStoryDefinition, "run">,
  steps: StoryStep[]
): GeneratedStoryDefinition {
  return {
    ...definition,
    run: (bot, options = {}) => runStorySteps(new FarmJoeRuntime(bot, options), steps, definition.meta.name)
  };
}
`;
}

function renderGeneratedStoryModule(entry, runnerImport) {
  return `import { defineGeneratedStory, type StoryStep } from "${runnerImport}";

export const meta = ${stableStringify(entry.meta)};

const steps: StoryStep[] = ${stableStringify(entry.steps)};

export const definition = defineGeneratedStory(
  {
    id: ${JSON.stringify(entry.id)},
    category: "Story",
    map: ${JSON.stringify(entry.map)},
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
`;
}

function renderGeneratedIndex(entries) {
  const imports = entries
    .map((entry, index) => `import story${index} from "./${slash(entry.modulePath).replace(/\.ts$/, ".js")}";`)
    .join("\n");
  const exports = entries.map((_, index) => `  story${index}`).join(",\n");
  return `import type { GeneratedStoryDefinition } from "./runner.js";

${imports}

export const generatedStoryDefinitions: GeneratedStoryDefinition[] = [
${exports}
];
`;
}

function stableStringify(value) {
  return JSON.stringify(value, undefined, 2);
}

main();
