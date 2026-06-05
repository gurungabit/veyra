import { BrowserFlashBot, type Bot, type PlayerSnapshot } from "./bot.js";
import { createDefaultArmySettings, isArmyRole, normalizeArmySettings, type ArmyRole, type ArmySettings } from "./armySettings.js";
import {
  GAME_OPTION_DEFS,
  RELOGIN_SERVERS,
  normalizeGameOptionsState,
  readGameOptionsState,
  writeGameOptionsState,
  type GameOptionValue,
  type GameOptionsState
} from "./gameOptions.js";
import { normalizeBuilderScript, normalizeBuilderScripts, runBuilderScript, type BuilderScript } from "./builderScripts.js";

type FlashEmbed = HTMLObjectElement & Record<string, (...args: unknown[]) => unknown>;
type LogKind = "script" | "debug" | "packet" | "event";
type AutoKind = "attack" | "hunt";
type ScriptRunner = (bot: Bot, options: { signal?: AbortSignal }) => Promise<void>;

interface ScriptDefinition {
  id: string;
  category: string;
  map: string;
  meta: {
    name: string;
    description: string;
    tags: string[];
    version: string;
  };
  run: ScriptRunner;
}

interface DownloadedTypeScriptScript {
  id: string;
  category: string;
  map: string;
  meta: {
    name: string;
    description: string;
    tags: string[];
    version: string;
  };
  modulePath: string;
  packId: string;
  packVersion: string;
  mtimeMs: number;
}

interface DownloadedTypeScriptModule {
  meta?: Partial<ScriptDefinition["meta"]>;
  main?: (bot: Bot, options?: { signal?: AbortSignal }) => Promise<void> | void;
}

type PickerId = "auto-class" | "auto-mode" | "jump-cell" | "jump-pad";
type GrabberType =
  | "shop-items"
  | "shop-ids"
  | "quests"
  | "inventory"
  | "house-inventory"
  | "temp-inventory"
  | "bank-items"
  | "cell-monsters"
  | "map-monsters"
  | "map-items";

interface PickerState {
  value: string;
  options: string[];
  open: boolean;
}

interface GameServerInfo {
  name: string;
  label: string;
  ip?: string;
  port?: number;
  playerCount?: number;
  maxPlayers?: number;
  count?: number;
  max?: number;
  online?: boolean;
  upgrade?: boolean;
  language?: string;
  chat?: number;
  level?: number;
  connectable: boolean;
  raw: Record<string, unknown>;
  refreshedAt: string;
}

interface LaunchAccountPayload {
  id: string;
  username: string;
  password: string;
  label?: string;
  server?: GameServerInfo | null;
}

interface ToolWindowRecord {
  child: Window;
  section: string;
}

interface AutoOrigin {
  map: string;
  room: number;
  targetMap: string;
  cell: string;
  pad: string;
}

interface AutoRunState {
  timer: number;
  origin: AutoOrigin;
  busy: boolean;
}

interface ArmyLocationMessage {
  type: "veyra-army-location";
  from: string;
  seq: number;
  username: string;
  map: string;
  room: number;
  targetMap: string;
  cell: string;
  pad: string;
  x: number;
  y: number;
  sentAt: number;
}

interface ArmyRequestMessage {
  type: "veyra-army-request";
  from: string;
  sentAt: number;
}

const params = new URLSearchParams(window.location.search);
const instanceId = params.get("instanceId") || "main";
const launchId = params.get("launchId") || "";
const swfUrl = params.get("swf") ?? "";
const gameBase = params.get("gameBase") ?? `${window.location.origin}/game/`;
const flashPath = params.get("flashPath") ?? "";
const flashVersion = params.get("flashVersion") ?? "";
const flashMissing = params.get("flashMissing") ?? "";
const toolWindows = new Map<string, ToolWindowRecord>();

let builderScripts: BuilderScript[] = [];
let scriptPackScripts: BuilderScript[] = [];
let downloadedTypeScriptScripts: DownloadedTypeScriptScript[] = [];
const downloadedTypeScriptModuleCache = new Map<string, Promise<DownloadedTypeScriptModule>>();
let scripts: ScriptDefinition[] = [];

const statusEl = byId<HTMLElement>("status");
const logEl = byId<HTMLPreElement>("log");
const gameHost = byId<HTMLElement>("game-host");
const dropdownLayer = byId<HTMLElement>("dropdown-layer");
const menuRibbon = byId<HTMLElement>("menu-ribbon");
const scriptDrawer = byId<HTMLElement>("script-drawer");
const toolDrawer = byId<HTMLElement>("tool-drawer");
const toolPanel = byId<HTMLElement>("tool-panel");
const scriptSelect = byId<HTMLSelectElement>("script-select");
const scriptSearch = byId<HTMLInputElement>("script-search");
const scriptList = byId<HTMLElement>("script-list");
const scriptStatus = byId<HTMLElement>("script-status");
const startScriptButton = byId<HTMLButtonElement>("start-script");
const stopScriptButton = byId<HTMLButtonElement>("stop-script");

const logs: Record<LogKind, string[]> = {
  script: [],
  debug: [],
  packet: [],
  event: []
};

let activeLog: LogKind = "script";
let selectedScriptId = scripts[0]?.id ?? "";
let loadedScriptId = selectedScriptId;
let scriptAbort: AbortController | undefined;
let clientLoadRequested = false;
let packetCaptureStarted = false;
let packetSpamTimer: number | undefined;
let runtimeDropTimer: number | undefined;
const autoRuns: Partial<Record<AutoKind, AutoRunState>> = {};
let armyRole: ArmyRole = "off";
let armySettings: ArmySettings = createDefaultArmySettings();
let armyLeaderTimer: number | undefined;
let armyLeaderSeq = 0;
let armyLeaderLastLocation: ArmyLocationMessage | undefined;
let armyLeaderLastSentAt = 0;
let armyFollowerBusy = false;
let armyFollowerRequestTimer: number | undefined;
let armyPendingLocation: ArmyLocationMessage | undefined;
let armyFollowerLeader = "";
let armyFollowerLastMessageAt = 0;
let armyFollowerLastSeq = 0;
let armyLastGotoKey = "";
let armyLastAppliedKey = "";
const gameOptionTimers = new Map<string, number>();
let packetServerCache: GameServerInfo[] = [];
let gameBridgeReady = false;
let launchLoginReady = false;
let queuedGameOptionsApply = false;
let flashEl: FlashEmbed;
let jumpPadManual = false;
let loadedShopCache: unknown[] = [];
let activeTheme = "veyra-dark";
let gameOptionsState: GameOptionsState = readGameOptionsState();
let launchAccount: LaunchAccountPayload | undefined;
let launchLoginStarted = false;
let launchLoginTimer: number | undefined;
let reloginPromise: Promise<boolean> | undefined;
const toolBus = new BroadcastChannel(`veyra-tools-${instanceId}`);
const themeBus = new BroadcastChannel("veyra-theme");
const armyBus = new BroadcastChannel("veyra-army");
const pickerState: Record<PickerId, PickerState> = {
  "auto-class": { value: "Equipped", options: ["Equipped", "Farm", "Solo"], open: false },
  "auto-mode": { value: "Safe", options: ["Safe", "Fast", "Skills only"], open: false },
  "jump-cell": { value: "Enter", options: ["Enter"], open: false },
  "jump-pad": { value: "Auto", options: ["Auto"], open: false }
};

applyTheme(activeTheme, false);
void hydrateThemeFromFile();
void hydrateGameOptionsFromFile();
void hydrateArmySettingsFromFile();
installFlashCallbacks();
boot();

themeBus.onmessage = (event: MessageEvent<unknown>) => {
  const message = event.data as { type?: unknown; theme?: unknown };
  if (message?.type === "theme" && typeof message.theme === "string") applyTheme(message.theme, false);
};

armyBus.onmessage = (event: MessageEvent<unknown>) => {
  handleArmyMessage(event.data);
};

function boot(): void {
  if (!swfUrl) {
    setStatus("Missing client SWF.");
    log("debug", "No SWF URL was passed to the renderer.");
    return;
  }

  flashEl = mountFlashObject(swfUrl);
  hydrateScripts();
  void hydrateLaunchAccount();
  void hydrateScriptPackScriptsFromFile();
  void hydrateBuilderScriptsFromFile();
  renderScriptList();
  setLoadedScript(selectedScriptId);
  setScriptRunning(false);
  installUiHandlers();
  installScriptPackUpdateHandler();
  installToolBus();

  if (flashMissing) {
    setStatus("Pepper Flash missing.");
    log("debug", flashMissing);
    log("debug", "Electron needs a PPAPI Pepper Flash plugin. NPAPI NPSWF*.dll files cannot be loaded here.");
  } else {
    const pluginName = findFlashPluginName();
    setStatus(pluginName ? "Flash plugin detected. Loading client..." : "Waiting for Flash plugin.");
    log("debug", `SWF: ${decodeURIComponent(swfUrl)}`);
    log("debug", `Pepper Flash: ${flashPath || "not reported"} ${flashVersion ? `(${flashVersion})` : ""}`);
    if (pluginName) log("debug", `Plugin: ${pluginName}`);
    if (pluginName) void autoLoadWhenReady();
  }
}

function installUiHandlers(): void {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const menuButton = target.closest<HTMLButtonElement>("[data-menu]");
    const panelButton = target.closest<HTMLButtonElement>("[data-panel]");
    const windowButton = target.closest<HTMLButtonElement>("[data-window]");
    const topActionButton = target.closest<HTMLButtonElement>("[data-top-action]");

    if (menuButton) {
      toggleDropdown(menuButton.dataset.menu ?? "", menuButton);
      return;
    }

    if (windowButton) {
      openToolWindow(windowButton.dataset.window ?? "advanced");
      closeDropdown();
      return;
    }

    if (topActionButton) {
      void runTopAction(topActionButton.dataset.topAction ?? "");
      closeDropdown();
      return;
    }

    if (panelButton) {
      openPanel(panelButton.dataset.panel ?? "");
      closeDropdown();
      return;
    }

    if (!target.closest(".menu-ribbon") && !target.closest("[data-menu]")) closeDropdown();
  });

  scriptSelect.addEventListener("change", () => {
    selectedScriptId = scriptSelect.value;
    renderScriptList();
    void loadScriptById(selectedScriptId);
  });
  scriptSearch.addEventListener("input", renderScriptList);

  byId<HTMLButtonElement>("edit-script").addEventListener("click", () => void openCurrentScriptInVsCode());
  byId<HTMLButtonElement>("search-scripts").addEventListener("click", () => {
    scriptSearch.focus();
    scriptSearch.select();
    log("event", "Focused local script search.");
  });
  byId<HTMLButtonElement>("edit-options").addEventListener("click", () => openPanel("script-options"));
  startScriptButton.addEventListener("click", () => void startLoadedScript());
  stopScriptButton.addEventListener("click", stopRunningScript);

  for (const tab of Array.from(document.querySelectorAll<HTMLButtonElement>(".console-tab"))) {
    tab.addEventListener("click", () => {
      activeLog = (tab.dataset.log ?? "script") as LogKind;
      document.querySelectorAll(".console-tab").forEach((el) => el.classList.toggle("active", el === tab));
      renderLog(true);
    });
  }

  byId<HTMLButtonElement>("clear-log").addEventListener("click", () => {
    logs[activeLog] = [];
    renderLog(true);
  });
  byId<HTMLButtonElement>("copy-log").addEventListener("click", () => void navigator.clipboard?.writeText(logs[activeLog].join("\n")));
  byId<HTMLButtonElement>("save-log").addEventListener("click", saveActiveLog);
}

function installScriptPackUpdateHandler(): void {
  nativeApi()?.onScriptPacksChanged?.(() => {
    void hydrateScriptPackScriptsFromFile().then(() => {
      log("event", "Script packs refreshed.");
    });
  });
}

function installToolBus(): void {
  toolBus.onmessage = (event: MessageEvent<unknown>) => {
    const message = event.data as { type?: string; command?: string; payload?: unknown };
    if (message?.type !== "command" || typeof message.command !== "string") return;
    void handleToolCommand(message.command, message.payload);
  };
  publishState();
}

function openToolWindow(name: string, extraParams: Record<string, string> = {}): void {
  const section = extraParams.section ?? "";
  const nativeToolWindow = nativeApi()?.showToolWindow;
  if (nativeToolWindow) {
    void nativeToolWindow({ tool: name, section, instanceId })
      .then(() => log("event", `Focused ${toolWindowLabel(name, section)} window.`))
      .catch((error) => {
        log("debug", `Native tool window failed; using browser fallback: ${error instanceof Error ? error.message : String(error)}`);
        openBrowserToolWindow(name, extraParams, section);
      });
    return;
  }

  openBrowserToolWindow(name, extraParams, section);
}

function openBrowserToolWindow(name: string, extraParams: Record<string, string>, section: string): void {
  const url = new URL(`${window.location.origin}/src/tool.html`);
  url.searchParams.set("tool", name);
  url.searchParams.set("instanceId", instanceId);
  for (const [paramName, value] of Object.entries(extraParams)) url.searchParams.set(paramName, value);

  const target = `veyra-${instanceId}-${sanitizeWindowTarget(name)}`;
  const [width, height] = toolWindowSize(name, section);
  const features = `width=${width},height=${height}`;
  const existing = toolWindows.get(target);

  if (existing?.child && !existing.child.closed) {
    const child = existing.section === section ? existing.child : window.open(url.toString(), target, features) ?? existing.child;
    toolWindows.set(target, { child, section });
    focusToolWindow(child);
    window.setTimeout(() => {
      resizeToolWindow(child, name, section);
      focusToolWindow(child);
    }, 80);
    log("event", `Focused ${toolWindowLabel(name, section)} window.`);
    return;
  }

  toolWindows.delete(target);
  const child = window.open(url.toString(), target, features);
  if (child) {
    toolWindows.set(target, { child, section });
    focusToolWindow(child);
  }
  window.setTimeout(() => resizeToolWindow(child, name, section), 80);
  log("event", `Opened ${toolWindowLabel(name, section)} window.`);
}

function resizeToolWindow(child: Window | null, name: string, section = ""): void {
  const [width, height] = toolWindowSize(name, section);
  try {
    child?.resizeTo(width, height);
  } catch {
    // Existing named Electron windows may keep their native bounds; tool windows also self-size on load.
  }
}

function focusToolWindow(child: Window | null): void {
  try {
    child?.focus();
  } catch {
    // A detached window can disappear between click and focus; the next click will recreate it.
  }
}

function sanitizeWindowTarget(value: string): string {
  return value.replace(/[^a-z0-9_-]/gi, "-");
}

function toolWindowLabel(name: string, section: string): string {
  return section ? `${name}/${section}` : name;
}

function toolWindowSize(tool: string, section: string): [number, number] {
  const sectionSizes: Record<string, [number, number]> = {
    "helpers:runtime": [820, 540],
    "helpers:fast-travel": [760, 460],
    "helpers:current-drops": [560, 430],
    "packets:packet-interceptor": [820, 520],
    "packets:packet-spammer": [620, 430],
    "packets:packet-logger": [620, 480],
    "tools:loader": [620, 420],
    "tools:grabber": [620, 500],
    "tools:junk-items": [520, 440],
    "tools:stats": [500, 400],
    "tools:console": [560, 420],
    "builder:": [940, 620],
    "options:game-options": [520, 620],
    "options:army-options": [560, 600],
    "options:application-options": [520, 440],
    "options:core-options": [520, 440],
    "options:theme-options": [460, 360],
    "options:hotkeys": [460, 400]
  };
  const sizes: Record<string, [number, number]> = {
    scripts: [430, 640],
    logs: [680, 520],
    packets: [600, 500],
    skills: [430, 430],
    bank: [460, 480],
    plugins: [460, 340],
    advanced: [560, 540],
    options: [520, 500],
    helpers: [520, 500],
    tools: [520, 500],
    builder: [940, 620]
  };
  return sectionSizes[`${tool}:${section}`] ?? sizes[tool] ?? [460, 520];
}

async function handleToolCommand(command: string, payload: unknown): Promise<void> {
  const data = (payload ?? {}) as Record<string, unknown>;

  switch (command) {
    case "select-script":
      if (typeof data.id === "string") {
        if (isBuilderScriptId(data.id)) await hydrateBuilderScriptsFromFile();
        selectedScriptId = data.id;
        scriptSelect.value = selectedScriptId;
        renderScriptList();
        publishState();
      }
      break;
    case "load-script":
      await loadScriptById(typeof data.id === "string" ? data.id : selectedScriptId);
      break;
    case "start-script":
      if (typeof data.id === "string") await loadScriptById(data.id);
      await startLoadedScript();
      break;
    case "stop-script":
      stopRunningScript();
      break;
    case "builder-refresh-scripts":
      await hydrateBuilderScriptsFromFile();
      log("event", "Builder scripts refreshed.");
      break;
    case "builder-save-script": {
      const script = await upsertBuilderScript(data.script);
      if (script) log("event", `Saved builder script: ${script.name}.`);
      else log("event", "Builder script save failed: invalid script payload.");
      break;
    }
    case "builder-delete-script":
      if (typeof data.id === "string") await deleteBuilderScript(data.id);
      break;
    case "builder-run-draft": {
      const script = await upsertBuilderScript(data.script);
      if (script) {
        setLoadedScript(script.id);
        await startLoadedScript();
      } else {
        log("event", "Builder script run failed: invalid script payload.");
      }
      break;
    }
    case "builder-run-script":
      if (typeof data.id === "string") {
        await hydrateBuilderScriptsFromFile();
        if (scripts.some((script) => script.id === data.id)) {
          setLoadedScript(data.id);
          await startLoadedScript();
        } else {
          log("event", `Builder script not found: ${data.id}.`);
        }
      }
      break;
    case "builder-context-request":
      await publishBuilderContext();
      break;
    case "open-repo":
      await hydrateScriptPackScriptsFromFile();
      await hydrateBuilderScriptsFromFile();
      publishState();
      log("event", "Refreshed local script list.");
      break;
    case "open-script-options":
      openPanel("script-options");
      log("event", "Opened script options.");
      break;
    case "run-action":
      if (typeof data.action === "string") await runAction(data.action);
      break;
    case "dropdown-action":
      if (typeof data.action === "string") await runDropdownAction(data.action, typeof data.menu === "string" ? data.menu : "");
      break;
    case "set-game-option":
      if (typeof data.option === "string") {
        const value = (data.value ?? data.enabled) as GameOptionValue;
        await updatePersistedGameOption(data.option, value);
        await setGameOption(data.option, value);
      }
      break;
    case "set-game-option-value":
      if (typeof data.option === "string") {
        const value = data.value as GameOptionValue;
        await updatePersistedGameOption(data.option, value);
        await setGameOption(data.option, value);
      }
      break;
    case "save-game-options":
      if (isGameOptionsState(data.settings)) {
        const saved = await writePersistedGameOptions(data.settings);
        await applyGameOptionsState(saved);
        log("event", "Game options saved and applied.");
      }
      break;
    case "army-set-role":
      if (isArmyRole(data.role)) setArmyRole(data.role);
      break;
    case "army-save-settings": {
      armySettings = normalizeArmySettings(data.settings);
      await writeJsonSetting("army", armySettings).catch(() => undefined);
      if (armyRole === "leader") startArmyLeader();
      publishState();
      log("event", "Army settings saved.");
      break;
    }
    case "army-request-location":
      if (armyRole === "leader") await publishArmyLocation(true);
      else requestArmyLocation();
      break;
    case "set-theme":
      if (typeof data.theme === "string") applyTheme(data.theme, true);
      break;
    case "loader-load":
      await handleLoaderLoad(data);
      break;
    case "loader-fetch-quests":
      await publishGrabberData("quests");
      break;
    case "grabber-grab":
      await publishGrabberData(isGrabberType(data.grabType) ? data.grabType : "inventory");
      break;
    case "grabber-action":
      await handleGrabberAction(data);
      break;
    case "use-skill":
      await createBot("Skills").call("useSkill", Number(data.skill ?? 1));
      break;
    case "travel": {
      const requestedMap = stringFrom(data.map, "battleon") || "battleon";
      const bot = createBot("Travel");
      if (isHomeTravelMap(requestedMap)) {
        await bot.goHome();
      } else {
        const map = data.privateRooms === true ? withPrivateRoomSuffix(requestedMap, Number(data.privateNumber ?? 100000)) : requestedMap;
        await bot.join(map, stringFrom(data.cell, "Enter") || "Enter", stringFrom(data.pad, "Spawn") || "Spawn");
      }
      break;
    }
    case "console-command":
      await runExternalConsoleCommand(stringFrom(data.command));
      break;
    case "send-packet":
      await createBot("Packets").sendPacket(stringFrom(data.packet));
      log("packet", `Sent ${stringFrom(data.packet)}`);
      break;
    case "packet-spam-start":
      await startPacketSpam(stringFrom(data.packet), Number(data.delay ?? 1000));
      break;
    case "packet-spam-stop":
      stopPacketSpam();
      break;
    case "packet-interceptor-apply":
      log("packet", `Interceptor rule saved: ${stringFrom(data.rule).trim() || "(empty)"}`);
      if (!packetCaptureStarted) await runAction("capture-packets");
      break;
    case "packet-interceptor-refresh-servers":
      await publishPacketServerList(true);
      break;
    case "refresh-game-servers":
      await publishPacketServerList(true);
      break;
    case "packet-interceptor-connect":
      await connectPacketInterceptor(data);
      break;
    case "packet-interceptor-disconnect":
      log("packet", "Interceptor disconnected.");
      toolBus.postMessage({ type: "packet-interceptor-connection", connected: false, status: "idle", message: "Interceptor disconnected." });
      break;
    case "runtime-pick-drops":
      startRuntimeDropHelper(data);
      break;
    case "runtime-stop-drops":
      stopRuntimeDropHelper();
      break;
    case "current-drops-refresh":
      await publishCurrentDrops();
      break;
    case "current-drops-pickup":
      await pickupCurrentDrop(data);
      await publishCurrentDrops();
      break;
    case "inspect-object": {
      const path = stringFrom(data.path, "world.myAvatar.objData") || "world.myAvatar.objData";
      const value = await createBot("Advanced").getGameObject<unknown>(path);
      log("debug", `${path}: ${JSON.stringify(value).slice(0, 3000)}`);
      break;
    }
    case "clear-log":
      if (isLogKind(data.kind)) {
        logs[data.kind] = [];
        if (activeLog === data.kind) renderLog(true);
        publishState();
      }
      break;
    case "request-state":
      publishState();
      break;
  }
}

function hydrateScripts(): void {
  scriptSelect.innerHTML = scripts
    .map((script) => `<option value="${escapeAttr(script.id)}">${escapeHtml(script.category)} / ${escapeHtml(script.meta.name)}</option>`)
    .join("");
  scriptSelect.value = selectedScriptId;
}

function renderScriptList(): void {
  const query = scriptSearch.value.trim().toLowerCase();
  const filtered = scripts.filter((script) => {
    const haystack = `${script.category} ${script.map} ${script.meta.name} ${script.meta.description} ${script.meta.tags.join(" ")}`.toLowerCase();
    return !query || haystack.includes(query);
  });

  scriptList.innerHTML = filtered
    .map((script) => {
      const active = script.id === selectedScriptId ? "active" : "";
      return `
        <button class="script-row ${active}" type="button" data-script-id="${escapeAttr(script.id)}">
          <span>
            <strong>${escapeHtml(script.meta.name)}</strong>
            <small>${escapeHtml(script.meta.description)}</small>
          </span>
          <em>${escapeHtml(script.map)}</em>
        </button>
      `;
    })
    .join("");

  for (const row of Array.from(scriptList.querySelectorAll<HTMLButtonElement>("[data-script-id]"))) {
    row.addEventListener("click", () => {
      selectedScriptId = row.dataset.scriptId ?? selectedScriptId;
      scriptSelect.value = selectedScriptId;
      renderScriptList();
      void loadScriptById(selectedScriptId);
    });
  }
}

async function hydrateBuilderScriptsFromFile(): Promise<void> {
  const value = await readBuilderScriptsSetting().catch(() => undefined);
  builderScripts = normalizeBuilderScripts(value);
  syncScriptCatalog();
}

async function hydrateScriptPackScriptsFromFile(): Promise<void> {
  const value = await readScriptPackScriptsSetting().catch(() => undefined);
  scriptPackScripts = normalizeBuilderScripts(value);
  downloadedTypeScriptScripts = normalizeDownloadedTypeScriptScripts(value);
  syncScriptCatalog();
}

async function upsertBuilderScript(value: unknown): Promise<BuilderScript | undefined> {
  const normalized = normalizeBuilderScript(value);
  if (!normalized.actions.length) return undefined;
  const existingIndex = builderScripts.findIndex((script) => script.id === normalized.id);
  if (existingIndex >= 0) builderScripts[existingIndex] = normalized;
  else builderScripts = [...builderScripts, normalized];
  await writeBuilderScriptSetting(normalized).catch((error) => {
    log("debug", `Builder script save failed: ${describeUnknownError(error)}`);
  });
  syncScriptCatalog();
  return normalized;
}

async function deleteBuilderScript(id: string): Promise<void> {
  const deleted = builderScripts.find((script) => script.id === id);
  builderScripts = builderScripts.filter((script) => script.id !== id);
  await deleteBuilderScriptSetting(id).catch((error) => {
    log("debug", `Builder script delete failed: ${describeUnknownError(error)}`);
  });
  if (loadedScriptId === id && scriptAbort) stopRunningScript();
  syncScriptCatalog();
  log("event", deleted ? `Deleted builder script: ${deleted.name}.` : `Builder script delete skipped: ${id} was not saved.`);
}

function syncScriptCatalog(): void {
  scripts = mergeScriptDefinitions([
    ...downloadedTypeScriptScripts.map(typeScriptScriptPackDefinition),
    ...scriptPackScripts.map(scriptPackScriptDefinition),
    ...builderScripts.map(builderScriptDefinition)
  ]);
  if (!scripts.some((script) => script.id === selectedScriptId)) selectedScriptId = scripts[0]?.id ?? "";
  if (!scripts.some((script) => script.id === loadedScriptId)) loadedScriptId = selectedScriptId;
  if (!scriptAbort) {
    startScriptButton.disabled = scripts.length === 0;
    stopScriptButton.disabled = true;
  }
  const loaded = currentScript();
  scriptStatus.textContent = loaded ? `${loaded.meta.name} loaded` : "No script loaded";
  hydrateScripts();
  renderScriptList();
  publishState();
}

function mergeScriptDefinitions(definitions: ScriptDefinition[]): ScriptDefinition[] {
  const byId = new Map<string, ScriptDefinition>();
  for (const definition of definitions) byId.set(definition.id, definition);
  return Array.from(byId.values());
}

function scriptPackScriptDefinition(script: BuilderScript): ScriptDefinition {
  const normalized = normalizeBuilderScript(script);
  return {
    id: normalized.id,
    category: "Official",
    map: normalized.map,
    meta: {
      name: normalized.name,
      description: normalized.description,
      tags: Array.from(new Set(["official", ...normalized.tags])),
      version: normalized.version
    },
    run: (bot, options) => runBuilderScript(bot, normalized, options)
  };
}

function typeScriptScriptPackDefinition(script: DownloadedTypeScriptScript): ScriptDefinition {
  const normalized = normalizeDownloadedTypeScriptScript(script);
  return {
    id: normalized.id,
    category: normalized.category,
    map: normalized.map,
    meta: normalized.meta,
    run: (bot, options) => runDownloadedTypeScriptScript(normalized, bot, options)
  };
}

function builderScriptDefinition(script: BuilderScript): ScriptDefinition {
  const normalized = normalizeBuilderScript(script);
  return {
    id: normalized.id,
    category: "Builder",
    map: normalized.map,
    meta: {
      name: normalized.name,
      description: normalized.description,
      tags: Array.from(new Set(["builder", ...normalized.tags])),
      version: normalized.version
    },
    run: (bot, options) => runBuilderScript(bot, normalized, options)
  };
}

function normalizeDownloadedTypeScriptScripts(value: unknown): DownloadedTypeScriptScript[] {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as { moduleScripts?: unknown }) : {};
  const scripts = Array.isArray(source.moduleScripts) ? source.moduleScripts : [];
  return scripts.map(normalizeDownloadedTypeScriptScript).filter((script) => script.modulePath);
}

function normalizeDownloadedTypeScriptScript(value: unknown): DownloadedTypeScriptScript {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Partial<DownloadedTypeScriptScript>) : {};
  const metaSource: Partial<DownloadedTypeScriptScript["meta"]> = source.meta && typeof source.meta === "object" ? source.meta : {};
  return {
    id: cleanScriptId(source.id, "official.script"),
    category: cleanText(source.category, "Official"),
    map: cleanText(source.map, ""),
    meta: {
      name: cleanText(metaSource.name, "Downloaded Script"),
      description: cleanText(metaSource.description, "Downloaded script."),
      tags: Array.isArray(metaSource.tags) ? uniqueStrings(metaSource.tags.map((tag) => String(tag))) : [],
      version: cleanText(metaSource.version, "0.0.0")
    },
    modulePath: cleanModulePath(source.modulePath),
    packId: cleanScriptId(source.packId, "official"),
    packVersion: cleanText(source.packVersion, "0.0.0"),
    mtimeMs: Number.isFinite(Number(source.mtimeMs)) ? Number(source.mtimeMs) : 0
  };
}

async function runDownloadedTypeScriptScript(script: DownloadedTypeScriptScript, bot: Bot, options: { signal?: AbortSignal }): Promise<void> {
  const module = await loadDownloadedTypeScriptModule(script);
  if (typeof module.main !== "function") throw new Error(`${script.meta.name} does not export main(bot, options).`);
  await module.main(bot, withSignal({}, options.signal));
}

async function loadDownloadedTypeScriptModule(script: DownloadedTypeScriptScript): Promise<DownloadedTypeScriptModule> {
  const cacheKey = `${script.id}:${script.packVersion}:${script.modulePath}:${script.mtimeMs}`;
  const cached = downloadedTypeScriptModuleCache.get(cacheKey);
  if (cached) return cached;

  const promise = importDownloadedTypeScriptModule(script).catch((error) => {
    downloadedTypeScriptModuleCache.delete(cacheKey);
    throw error;
  });
  downloadedTypeScriptModuleCache.set(cacheKey, promise);
  return promise;
}

async function importDownloadedTypeScriptModule(script: DownloadedTypeScriptScript): Promise<DownloadedTypeScriptModule> {
  const url = downloadedModuleUrl(script);
  const module = (await import(url)) as DownloadedTypeScriptModule;
  if (!module || typeof module !== "object" || typeof module.main !== "function") {
    throw new Error(`${script.meta.name} did not load as a script module.`);
  }
  return module;
}

function downloadedModuleUrl(script: DownloadedTypeScriptScript): string {
  const path = script.modulePath.split("/").map(encodeURIComponent).join("/");
  return `${window.location.origin}/script-packs/${encodeURIComponent(script.packId)}/${encodeURIComponent(script.packVersion)}/${path}?v=${encodeURIComponent(String(script.mtimeMs))}`;
}

function cleanModulePath(value: unknown): string {
  const normalized = String(value || "").trim().replace(/\\/g, "/").replace(/^\/+/, "");
  if (!normalized || normalized.includes("..") || !normalized.endsWith(".js")) return "";
  return normalized;
}

function isBuilderScriptId(scriptId: string): boolean {
  return scriptId.startsWith("builder.") || builderScripts.some((script) => script.id === scriptId);
}

function isScriptPackScriptId(scriptId: string): boolean {
  return scriptPackScripts.some((script) => script.id === scriptId) || downloadedTypeScriptScripts.some((script) => script.id === scriptId);
}

async function loadScriptById(scriptId: string): Promise<void> {
  if (isBuilderScriptId(scriptId)) await hydrateBuilderScriptsFromFile();
  if (isScriptPackScriptId(scriptId)) await hydrateScriptPackScriptsFromFile();
  setLoadedScript(scriptId);
}

function setLoadedScript(scriptId: string): void {
  loadedScriptId = scriptId;
  const script = currentScript();
  if (!script) {
    scriptStatus.textContent = "No script loaded";
    log("script", "No scripts are installed yet. Use Veyra -> Check For Script Updates.");
    publishState();
    return;
  }
  scriptStatus.textContent = `${script.meta.name} loaded`;
  log("script", `Loaded ${script.meta.name} ${script.meta.version}.`);
  publishState();
}

async function startLoadedScript(): Promise<void> {
  if (scriptAbort) {
    log("event", "A script is already running. Stop it before starting another run.");
    publishState();
    return;
  }

  if (isBuilderScriptId(loadedScriptId)) {
    await hydrateBuilderScriptsFromFile();
    log("debug", "Builder scripts refreshed from disk before run.");
  }
  if (isScriptPackScriptId(loadedScriptId)) {
    await hydrateScriptPackScriptsFromFile();
    log("debug", "Official script packs refreshed from disk before run.");
  }

  const script = currentScript();
  if (!script) {
    log("event", "No scripts are installed yet. Use Veyra -> Check For Script Updates.");
    setStatus("No scripts installed.");
    publishState();
    return;
  }
  const bot = createBot(script.meta.name);
  scriptAbort = new AbortController();
  setScriptRunning(true);
  setStatus(`Running ${script.meta.name}.`);
  log("script", `Starting ${script.meta.name}.`);

  try {
    await script.run(bot, { signal: scriptAbort.signal });
    log("script", `${script.meta.name} completed.`);
    setStatus(`${script.meta.name} completed.`);
  } catch (error) {
    if (scriptAbort.signal.aborted) {
      log("script", `${script.meta.name} stopped.`);
      setStatus(`${script.meta.name} stopped.`);
    } else {
      log("script", `${script.meta.name} failed: ${describeUnknownError(error)}`);
      setStatus(`${script.meta.name} failed.`);
    }
  } finally {
    scriptAbort = undefined;
    setScriptRunning(false);
  }
}

function stopRunningScript(): void {
  scriptAbort?.abort(new Error("Stopped by user."));
  stopAuto("attack");
  stopAuto("hunt");
  stopPacketSpam();
  stopRuntimeDropHelper();
}

function setScriptRunning(running: boolean): void {
  startScriptButton.disabled = running || scripts.length === 0;
  stopScriptButton.disabled = !running;
  publishState();
}

function currentScript(): ScriptDefinition | undefined {
  return scripts.find((script) => script.id === loadedScriptId) ?? scripts[0];
}

function openPanel(name: string): void {
  if (name === "scripts") {
    scriptDrawer.dataset.open = scriptDrawer.dataset.open === "true" ? "false" : "true";
    return;
  }

  toolDrawer.dataset.open = "true";
  toolPanel.innerHTML = `<button class="drawer-close" data-close-panel type="button">Close</button>${panelHtml(name)}`;
  bindPanelActions(name);
}

function panelHtml(name: string): string {
  switch (name) {
    case "skills":
      return `
        <section class="tool-card">
          <h2>Skills</h2>
          <div class="button-grid five">${[1, 2, 3, 4, 5].map((skill) => `<button data-use-skill="${skill}" type="button">${skill}</button>`).join("")}</div>
          <label class="check"><input id="auto-skills" type="checkbox" /> Use skills during auto actions</label>
          <button data-action="start-auto-attack" type="button">Auto Attack</button>
          <button data-action="stop-auto" type="button">Stop Auto</button>
        </section>`;
    case "packets":
      return `
        <section class="tool-card">
          <h2>Packets</h2>
          <button data-action="capture-packets" type="button">Start Logger</button>
          <label class="field"><span>Send packet</span><textarea id="packet-input" rows="5" spellcheck="false">%xt%zm%</textarea></label>
          <button data-action="send-packet" type="button">Send Packet</button>
        </section>`;
    case "bank":
      return `
        <section class="tool-card">
          <h2>Bank</h2>
          <button data-action="toggle-bank" type="button">Toggle Bank</button>
          <button data-action="open-inventory" type="button">Open Inventory</button>
          <p class="muted">Bank item browsing will use the same bridge object API as inventory models land.</p>
        </section>`;
    case "logs":
      return `
        <section class="tool-card">
          <h2>Logs</h2>
          <button data-action="show-script-log" type="button">Script Log</button>
          <button data-action="show-debug-log" type="button">Debug Log</button>
          <button data-action="show-packet-log" type="button">Packet Log</button>
        </section>`;
    case "plugins":
      return `
        <section class="tool-card">
          <h2>Plugins</h2>
          <div class="plugin-row"><strong>Local TypeScript Scripts</strong><span>enabled</span></div>
          <div class="plugin-row"><strong>Flash Bridge</strong><span>enabled</span></div>
          <div class="plugin-row"><strong>Repository Sync</strong><span>queued</span></div>
        </section>`;
    case "advanced":
      return `
        <section class="tool-card">
          <h2>Advanced</h2>
          <label class="field"><span>Game object path</span><input id="object-path" class="input" value="world.myAvatar.objData" /></label>
          <button data-action="inspect-object" type="button">Inspect Object</button>
          <button data-action="reload-client" type="button">Reload Client</button>
        </section>`;
    case "script-options": {
      const privateRooms = gameOptionsState.values["private-rooms"] === true;
      const privateNumber = Number(gameOptionsState.values["private-number"] || 100000);
      const loadedName = currentScript()?.meta.name || "No script loaded";
      return `
        <section class="tool-card">
          <h2>Script Options</h2>
          <label class="field"><span>Loaded</span><input class="input" value="${escapeAttr(loadedName)}" readonly /></label>
          <label class="check"><input id="panel-private-rooms" type="checkbox"${privateRooms ? " checked" : ""} /> Private rooms</label>
          <label class="field"><span>Private Number</span><input id="panel-private-number" class="input" type="number" min="1" value="${Number.isFinite(privateNumber) && privateNumber > 0 ? privateNumber : 100000}" /></label>
          <p class="muted">These are saved to the same file as Game Options and are read by script joins.</p>
        </section>`;
    }
    default:
      return runtimePanelHtml();
  }
}

function runtimePanelHtml(snapshot?: PlayerSnapshot): string {
  return `
    <section class="tool-card">
      <h2>Runtime</h2>
      <dl class="stats">
        <div><dt>User</dt><dd>${escapeHtml(snapshot?.username ?? "-")}</dd></div>
        <div><dt>Level</dt><dd>${snapshot?.level ?? "-"}</dd></div>
        <div><dt>Map</dt><dd>${escapeHtml(snapshot?.map ?? "-")}</dd></div>
        <div><dt>Cell</dt><dd>${escapeHtml(snapshot?.cell ?? "-")} / ${escapeHtml(snapshot?.pad ?? "-")}</dd></div>
        <div><dt>Class</dt><dd>${escapeHtml(snapshot?.currentClassName ?? "-")} r${snapshot?.currentClassRank ?? "-"}</dd></div>
      </dl>
      <button data-action="refresh-runtime" type="button">Refresh</button>
    </section>`;
}

function bindPanelActions(name: string): void {
  toolPanel.querySelector<HTMLButtonElement>("[data-close-panel]")?.addEventListener("click", closePanel);

  for (const button of Array.from(toolPanel.querySelectorAll<HTMLButtonElement>("[data-use-skill]"))) {
    button.addEventListener("click", () => void createBot("Skills").call("useSkill", Number(button.dataset.useSkill)));
  }

  for (const button of Array.from(toolPanel.querySelectorAll<HTMLButtonElement>("[data-action]"))) {
    button.addEventListener("click", () => void runAction(button.dataset.action ?? ""));
  }

  if (name === "runtime") void refreshRuntimePanel();
  if (name === "script-options") bindScriptOptionsPanel();
}

function closePanel(): void {
  toolDrawer.dataset.open = "false";
  toolPanel.innerHTML = "";
}

function bindScriptOptionsPanel(): void {
  const privateRooms = toolPanel.querySelector<HTMLInputElement>("#panel-private-rooms");
  privateRooms?.addEventListener("change", () => {
    void savePanelScriptOption("private-rooms", privateRooms.checked);
  });

  const privateNumber = toolPanel.querySelector<HTMLInputElement>("#panel-private-number");
  privateNumber?.addEventListener("change", () => {
    const value = Math.max(1, Number(privateNumber.value || 100000));
    privateNumber.value = String(value);
    void savePanelScriptOption("private-number", value);
  });
}

async function savePanelScriptOption(option: string, value: GameOptionValue): Promise<void> {
  if (option === "private-rooms" && value === true && Number(gameOptionsState.values["private-number"] || 0) <= 0) {
    await updatePersistedGameOption("private-number", 100000);
  }
  await updatePersistedGameOption(option, value);
  await setGameOption(option, value);
}

async function runAction(action: string): Promise<void> {
  const bot = createBot("Tool");
  switch (action) {
    case "start-auto-attack":
      await startAuto("attack");
      break;
    case "stop-auto":
      stopAuto("attack");
      stopAuto("hunt");
      break;
    case "capture-packets":
      if (!packetCaptureStarted) {
        await bot.call("catchPackets");
        packetCaptureStarted = true;
      }
      log("packet", "Packet logger enabled.");
      break;
    case "send-packet":
      await bot.sendPacket(byId<HTMLTextAreaElement>("packet-input").value.trim());
      log("packet", `Sent ${byId<HTMLTextAreaElement>("packet-input").value.trim()}`);
      break;
    case "toggle-bank":
      await bot.callGameFunction("world.toggleBank");
      break;
    case "open-inventory":
      await bot.callGameFunction("toggleInventory");
      break;
    case "skip-cutscenes":
      await skipCutsceneSafely(bot);
      break;
    case "show-script-log":
      setActiveLog("script");
      break;
    case "show-debug-log":
      setActiveLog("debug");
      break;
    case "show-packet-log":
      setActiveLog("packet");
      break;
    case "inspect-object": {
      const path = byId<HTMLInputElement>("object-path").value.trim();
      const value = await bot.getGameObject<unknown>(path);
      log("debug", `${path}: ${JSON.stringify(value).slice(0, 3000)}`);
      break;
    }
    case "reload-client":
      window.location.reload();
      break;
    case "reload-map": {
      const snapshot = await bot.snapshot();
      if (snapshot.map) await bot.join(snapshot.map, snapshot.cell || "Enter", snapshot.pad || "Spawn");
      log("event", "Reload map requested.");
      break;
    }
    case "refresh-runtime":
      await refreshRuntimePanel();
      break;
  }
}

async function startPacketSpam(packet: string, delay: number): Promise<void> {
  const trimmed = packet.trim();
  if (!trimmed) {
    log("packet", "Packet spam needs a packet value.");
    return;
  }

  stopPacketSpam();
  const interval = Number.isFinite(delay) ? Math.max(250, Math.floor(delay)) : 1000;
  const bot = createBot("Packets");
  await bot.sendPacket(trimmed);
  log("packet", `Packet spam started every ${interval}ms: ${trimmed}`);
  packetSpamTimer = window.setInterval(() => {
    void bot.sendPacket(trimmed).catch((error) => log("debug", error instanceof Error ? error.message : String(error)));
  }, interval);
}

function stopPacketSpam(): void {
  if (!packetSpamTimer) return;
  window.clearInterval(packetSpamTimer);
  packetSpamTimer = undefined;
  log("packet", "Packet spam stopped.");
}

function startRuntimeDropHelper(data: Record<string, unknown>): void {
  stopRuntimeDropHelper(false);
  const names = Array.isArray(data.names) ? data.names.map(String).map((name) => name.trim()).filter(Boolean) : [];
  const rejectElse = data.rejectElse === true;
  const acceptAC = data.acceptAC === true;
  const interval = Math.max(1000, Number(data.interval ?? 0) + 1000);
  const bot = createBot("Runtime");
  const tick = async () => {
    if (acceptAC) await bot.call("acceptACDrops");
    if (names.length > 0) await bot.call("acceptDrops", names.join(",").toLowerCase());
    if (rejectElse) await bot.call("rejectExcept", names.join(",").toLowerCase());
  };
  void tick().catch((error) => log("debug", `Runtime drops: ${describeUnknownError(error)}`));
  runtimeDropTimer = window.setInterval(() => {
    void tick().catch((error) => log("debug", `Runtime drops: ${describeUnknownError(error)}`));
  }, interval);
  log("event", `Runtime Pick Drops started (${interval}ms).`);
}

function stopRuntimeDropHelper(report = true): void {
  if (!runtimeDropTimer) return;
  window.clearInterval(runtimeDropTimer);
  runtimeDropTimer = undefined;
  if (report) log("event", "Runtime Pick Drops stopped.");
}

async function publishCurrentDrops(): Promise<void> {
  const bot = createBot("Drops");
  const raw = await bot.call<unknown>("getCurrentDrops").catch(() => []);
  const parsed = parseMaybeJson<unknown>(raw);
  const drops = Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === "object") : [];
  toolBus.postMessage({ type: "current-drops-data", items: drops });
  log("debug", `Current drops refreshed: ${drops.length}.`);
}

async function pickupCurrentDrop(data: Record<string, unknown>): Promise<void> {
  const id = Number(data.id ?? 0);
  const name = stringFrom(data.name).trim().toLowerCase();
  const bot = createBot("Drops");
  if (id > 0) {
    await bot.sendPacket(`%xt%zm%getDrop%${(await bot.snapshot()).room || 1}%${id}%`);
    log("event", `Pickup requested for drop ID ${id}.`);
    return;
  }
  if (name) {
    await bot.call("acceptDrops", name);
    log("event", `Pickup requested for ${name}.`);
  }
}

async function handleLoaderLoad(data: Record<string, unknown>): Promise<void> {
  const kind = stringFrom(data.kind, "quest") || "quest";
  const ids = parseIdList(stringFrom(data.ids));
  if (ids.length === 0) {
    log("event", "Loader needs at least one numeric ID.");
    return;
  }

  const bot = createBot("Loader");
  if (kind === "shop") {
    await bot.callGameFunction("world.sendLoadShopRequest", ids[0]);
    await sleep(500);
    const shopInfo = await bot.getGameObject<unknown>("world.shopinfo").catch(() => undefined);
    loadedShopCache = shopInfo ? [shopInfo, ...loadedShopCache].slice(0, 25) : loadedShopCache;
    log("event", `Loaded shop ${ids[0]}.`);
    await publishGrabberData("shop-items");
    return;
  }

  for (const chunk of chunkArray(ids, 20)) {
    await bot.callGameFunction("world.showQuests", chunk.join(","), "q");
    await sleep(150);
  }
  log("event", `Loaded quest${ids.length === 1 ? "" : "s"} ${ids.join(", ")}.`);
  await publishGrabberData("quests");
}

async function publishGrabberData(type: GrabberType): Promise<void> {
  const items = await getGrabberItems(type);
  toolBus.postMessage({ type: "grabber-data", grabType: type, items });
  log("debug", `Grabber loaded ${items.length} ${grabberTypeLabel(type)} item${items.length === 1 ? "" : "s"}.`);
}

async function publishBuilderContext(): Promise<void> {
  const bot = createBot("Builder");
  const [snapshot, cells, pads, cellMonsters, mapMonsters, quests] = await Promise.all([
    bot.snapshot().catch(() => undefined),
    bot.cells().catch(() => []),
    bot.pads().catch(() => []),
    getGrabberItems("cell-monsters").catch(() => []),
    getGrabberItems("map-monsters").catch(() => []),
    getGrabberItems("quests").catch(() => [])
  ]);

  toolBus.postMessage({
    type: "builder-context-data",
    context: {
      snapshot,
      cells,
      pads,
      cellMonsters: cellMonsters.slice(0, 40),
      mapMonsters: mapMonsters.slice(0, 80),
      quests: quests.slice(0, 120),
      refreshedAt: new Date().toLocaleTimeString([], { hour12: false })
    }
  });
  log("debug", `Builder context refreshed for ${snapshot?.map || "unknown map"}.`);
}

async function publishPacketServerList(force = false): Promise<GameServerInfo[]> {
  if (force || packetServerCache.length === 0) {
    packetServerCache = await fetchLivePacketServers();
    log("debug", `Packet Interceptor loaded ${packetServerCache.length} live AQW server${packetServerCache.length === 1 ? "" : "s"}.`);
  }
  toolBus.postMessage({ type: "packet-server-list", servers: packetServerCache });
  return packetServerCache;
}

async function fetchLivePacketServers(): Promise<GameServerInfo[]> {
  const nativeServers = await nativeApi()?.listServers?.().catch(() => undefined);
  const normalizedNativeServers = normalizeGameServers(nativeServers);
  if (normalizedNativeServers.length > 0) return normalizedNativeServers;

  const endpoints = ["https://content.aq.com/game/api/data/servers", "http://content.aq.com/game/api/data/servers"];
  let lastError: unknown;

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${endpoint}?_=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const raw: unknown = await response.json();
      const servers = normalizeGameServers(raw);
      if (servers.length > 0) return servers;
      lastError = new Error("empty server list");
    } catch (error) {
      lastError = error;
    }
  }

  log("packet", `Live server refresh failed: ${describeUnknownError(lastError)}.`);
  return [];
}

async function connectPacketInterceptor(data: Record<string, unknown>): Promise<void> {
  const requestedName = cleanServerName(stringFrom(data.server));
  toolBus.postMessage({ type: "packet-interceptor-connection", connected: false, status: "connecting", message: `Connecting to ${requestedName || "selected server"}...` });
  try {
    let server = asRecord(data.serverData);

    if (!server.sName && requestedName) {
      if (packetServerCache.length === 0) await publishPacketServerList(true);
      server = packetServerCache.find((entry) => sameServerName(entry.name, requestedName))?.raw ?? {};
    }

    const resolvedName = cleanServerName(stringFrom(firstFrom(server, ["sName", "Name", "name"]), requestedName));
    const bot = createBot("Packet Interceptor");

    const currentServer = cleanServerName(String(await bot.getGameObject<string>("objServerInfo.sName").catch(() => "")));
    if (resolvedName && sameServerName(currentServer, resolvedName)) {
      log("packet", `Already on ${resolvedName}; packet capture is enabled.`);
      if (!packetCaptureStarted) await runAction("capture-packets");
      toolBus.postMessage({ type: "packet-interceptor-connection", connected: true, status: "connected", message: `Already on ${resolvedName}. Packet capture is enabled.` });
      return;
    }

    if (resolvedName && firstFrom(server, ["sIP", "IP", "ip"]) && numberFrom(server, ["iPort", "Port", "port"]) > 0) {
      await bot.call("connectToServer", JSON.stringify(server));
      log("packet", `Interceptor requested server login to ${serverDisplayName(server, resolvedName)}.`);
      if (!packetCaptureStarted) await runAction("capture-packets");
      toolBus.postMessage({ type: "packet-interceptor-connection", connected: true, status: "connected", message: `Requested login to ${serverDisplayName(server, resolvedName)}. Watch the game for the server switch.` });
      return;
    }

    if (resolvedName) {
      const clicked = await bot.call<unknown>("clickServer", resolvedName).catch((error) => {
        log("packet", `Server click fallback failed for ${resolvedName}: ${describeUnknownError(error)}.`);
        return false;
      });
      if (booleanFrom(clicked)) {
        log("packet", `Interceptor clicked login server ${resolvedName}.`);
        if (!packetCaptureStarted) await runAction("capture-packets");
        toolBus.postMessage({ type: "packet-interceptor-connection", connected: true, status: "connected", message: `Clicked login server ${resolvedName}.` });
        return;
      }
    }

    log("packet", `Could not connect to ${resolvedName || "selected server"}: no live server data. Click Refresh Servers after the client is loaded.`);
    toolBus.postMessage({ type: "packet-interceptor-connection", connected: false, status: "failed", message: `Could not connect to ${resolvedName || "selected server"}: no live server data.` });
  } catch (error) {
    log("packet", `Interceptor connect failed for ${requestedName || "selected server"}: ${describeUnknownError(error)}.`);
    toolBus.postMessage({ type: "packet-interceptor-connection", connected: false, status: "failed", message: `Connect failed: ${describeUnknownError(error)}` });
  }
}

async function getGrabberItems(type: GrabberType): Promise<Record<string, unknown>[]> {
  const bot = createBot("Grabber");
  if (type === "shop-items") return summarizeGrabItems(await safeGet(bot, "world.shopinfo.items", []), type);
  if (type === "shop-ids") return summarizeGrabItems(loadedShopCache.length > 0 ? loadedShopCache : [await safeGet(bot, "world.shopinfo", {})], type);
  if (type === "quests") return summarizeGrabItems(await safeGet(bot, "world.questTree", {}), type);
  if (type === "inventory") return summarizeGrabItems(await firstAvailable(bot, ["world.myAvatar.items", "world.myAvatar.objData.items"], []), type);
  if (type === "house-inventory") return summarizeGrabItems(await firstAvailable(bot, ["world.myAvatar.houseitems", "world.myAvatar.houseItems"], []), type);
  if (type === "temp-inventory") return summarizeGrabItems(await firstAvailable(bot, ["world.myAvatar.tempitems", "world.myAvatar.tempItems"], []), type);
  if (type === "bank-items") return summarizeGrabItems(await firstAvailable(bot, ["world.bankinfo.items", "world.myAvatar.bank"], []), type);
  if (type === "cell-monsters") return summarizeGrabItems(await bot.call<unknown>("availableMonsters").catch(() => []), type);
  if (type === "map-monsters") return summarizeGrabItems(await bot.call<unknown>("getMonsters").catch(() => []), type);
  return [];
}

async function handleGrabberAction(data: Record<string, unknown>): Promise<void> {
  const action = stringFrom(data.action);
  const type = isGrabberType(data.grabType) ? data.grabType : "inventory";
  const item = asRecord(data.item);
  const bot = createBot("Grabber");
  const id = numberFrom(item, ["id", "ItemID", "iID", "ID", "QuestID", "iQuestID", "MonID", "iMonID", "ShopID", "iShopID"]);
  const charItemId = numberFrom(item, ["charItemId", "CharItemID", "iCharItemID", "iCIID"]);
  const shopItemId = numberFrom(item, ["shopItemId", "ShopItemID", "iShopItemID", "iSel"]);
  const name = stringFrom(firstFrom(item, ["name", "sName", "Name", "strMonName", "MonName"]));

  if (action === "load-shop" && id > 0) {
    await bot.callGameFunction("world.sendLoadShopRequest", id);
    log("event", `Loaded shop ${id}.`);
    await sleep(500);
    await publishGrabberData("shop-items");
    return;
  }
  if (action === "buy" && id > 0) {
    if (shopItemId > 0) await bot.call("buyItemByID", id, shopItemId, -1);
    else if (name) await bot.call("buyItemByName", name, -1);
    log("event", `Buy requested for ${name || id}.`);
    return;
  }
  if ((action === "open-quest" || action === "load-quest") && id > 0) {
    await bot.callGameFunction("world.showQuests", String(id), "q");
    log("event", `Opened quest ${id}.`);
    return;
  }
  if (action === "accept-quest" && id > 0) {
    await bot.callGameFunction("world.acceptQuest", id);
    log("event", `Accepted quest ${id}.`);
    return;
  }
  if (action === "fake-complete" && id > 0) {
    await fakeCompleteQuest(bot, item, id);
    return;
  }
  if (action === "kill") {
    if (id > 0) await bot.attack(id);
    else await bot.attack(name || "*");
    log("event", `Kill requested for ${name || id || "target"}.`);
    return;
  }
  if (action === "teleport") {
    const cell = stringFrom(firstFrom(item, ["cell", "strFrame", "frame"]), "Enter") || "Enter";
    const pad = stringFrom(firstFrom(item, ["pad", "strPad"]), "Auto") || "Auto";
    await bot.jump(cell, pad);
    log("event", `Jumped to ${cell} / ${pad}.`);
    return;
  }
  if (action === "sell" && id > 0 && charItemId > 0) {
    await sendRoomPacket(bot, "sellItem", [id, 1, charItemId]);
    log("event", `Sell requested for ${name || id}.`);
    return;
  }
  if ((action === "to-bank" || action === "house-to-bank") && id > 0 && charItemId > 0) {
    await sendRoomPacket(bot, "bankFromInv", [id, charItemId]);
    log("event", `Bank requested for ${name || id}.`);
    return;
  }
  if (action === "to-inventory" && id > 0 && charItemId > 0) {
    await sendRoomPacket(bot, "bankToInv", [id, charItemId]);
    log("event", `Unbank requested for ${name || id}.`);
    return;
  }
  if (action === "equip") {
    if (id > 0) {
      await bot.callGameFunction("world.sendEquipItemRequest", { ItemID: id });
      log("event", `Equip requested for ${name || id}.`);
    }
    return;
  }

  log("event", `${grabberTypeLabel(type)} action ${action || "unknown"} had no usable target.`);
}

async function fakeCompleteQuest(bot: BrowserFlashBot, item: Record<string, unknown>, questId: number): Promise<void> {
  const value = numberFrom(item, ["value", "Value", "iValue"]);
  const slot = numberFrom(item, ["slot", "Slot", "iSlot", "iIndex"]);
  if (value <= 0 || slot <= 0) {
    log("event", `Quest ${questId} has no iValue/iSlot yet. Load the quest first, then grab quests again.`);
    return;
  }
  const packet = JSON.stringify({ t: "xt", b: { r: -1, o: { cmd: "updateQuest", iValue: value, iIndex: slot } } });
  await bot.call("sendClientPacket", packet, "json");
  log("event", `Fake complete packet sent for quest ${questId}.`);
}

async function sendRoomPacket(bot: BrowserFlashBot, command: string, parts: Array<string | number>): Promise<void> {
  const snapshot = await bot.snapshot().catch(() => undefined);
  const room = snapshot?.room && snapshot.room > 0 ? snapshot.room : 1;
  await bot.sendPacket(`%xt%zm%${command}%${room}%${parts.join("%")}%`);
}

async function safeGet(bot: BrowserFlashBot, path: string, fallback: unknown): Promise<unknown> {
  return bot.getGameObject<unknown>(path).catch(() => fallback);
}

async function firstAvailable(bot: BrowserFlashBot, paths: string[], fallback: unknown): Promise<unknown> {
  for (const path of paths) {
    const value = await bot.getGameObject<unknown>(path).catch(() => undefined);
    if (value !== undefined && value !== null) return value;
  }
  return fallback;
}

function summarizeGrabItems(raw: unknown, type: GrabberType): Record<string, unknown>[] {
  return recordsFrom(raw).map((record, index) => summarizeGrabItem(record, type, index));
}

function summarizeGrabItem(value: unknown, type: GrabberType, index: number): Record<string, unknown> {
  const record = asRecord(value);
  const id = numberFrom(record, ["id", "ItemID", "iID", "ID", "QuestID", "iQuestID", "MonID", "iMonID", "ShopID", "iShopID"]);
  const charItemId = numberFrom(record, ["CharItemID", "iCharItemID", "iCIID"]);
  const shopItemId = numberFrom(record, ["ShopItemID", "iShopItemID", "iSel"]);
  const valueField = numberFrom(record, ["Value", "iValue"]);
  const slot = numberFrom(record, ["Slot", "iSlot", "iIndex"]);
  const name = stringFrom(firstFrom(record, ["sName", "Name", "strName", "strMonName", "MonName", "sDesc"]), `${grabberTypeLabel(type)} ${index + 1}`);
  const detail = detailForGrabItem(record, type);
  const cell = firstFrom(record, ["strFrame", "cell", "frame"]);
  const pad = firstFrom(record, ["strPad", "pad"]);
  return {
    ...record,
    grabIndex: index,
    grabType: type,
    id,
    charItemId,
    shopItemId,
    value: valueField,
    slot,
    name,
    detail,
    cell,
    pad
  };
}

function detailForGrabItem(record: Record<string, unknown>, type: GrabberType): string {
  if (type.includes("monster")) {
    const hp = firstFrom(record, ["intHP", "hp", "HP"]);
    const cell = firstFrom(record, ["strFrame", "cell"]);
    return [cell ? `cell ${stringFrom(cell)}` : "", hp ? `HP ${stringFrom(hp)}` : ""].filter(Boolean).join(" - ");
  }
  if (type === "quests") {
    const level = firstFrom(record, ["iLvl", "Level", "iReqCP"]);
    const value = firstFrom(record, ["iValue", "Value"]);
    return [level ? `level ${stringFrom(level)}` : "", value ? `value ${stringFrom(value)}` : ""].filter(Boolean).join(" - ");
  }
  const quantity = firstFrom(record, ["iQty", "Qty", "Quantity", "iQtyNow"]);
  const category = firstFrom(record, ["sType", "sES", "sMeta"]);
  return [stringFrom(category), quantity ? `x${stringFrom(quantity)}` : ""].filter(Boolean).join(" - ");
}

function recordsFrom(raw: unknown): unknown[] {
  const parsed = parseMaybeJson(raw);
  if (Array.isArray(parsed)) return parsed;
  if (parsed && typeof parsed === "object") {
    return Object.entries(parsed as Record<string, unknown>).map(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value)) return { ID: key, ...(value as Record<string, unknown>) };
      return { ID: key, value };
    });
  }
  if (parsed === undefined || parsed === null || parsed === "") return [];
  return [parsed];
}

function asRecord(value: unknown): Record<string, unknown> {
  const parsed = parseMaybeJson(value);
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : {};
}

function firstFrom(record: Record<string, unknown>, keys: string[]): unknown {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null && record[key] !== "") return record[key];
  }
  return undefined;
}

function numberFrom(record: Record<string, unknown>, keys: string[]): number {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return 0;
}

function normalizeGameServers(raw: unknown): GameServerInfo[] {
  const refreshedAt = new Date().toLocaleTimeString([], { hour12: false });
  const result: GameServerInfo[] = [];
  for (const entry of recordsFrom(raw)) {
    const record = asRecord(entry);
    const name = cleanServerName(stringFrom(firstFrom(record, ["sName", "Name", "name"])));
    if (!name) continue;
    const count = numberFrom(record, ["iCount", "count", "PlayerCount", "playerCount"]);
    const max = numberFrom(record, ["iMax", "max", "MaxPlayers", "maxPlayers"]);
    const label = count > 0 || max > 0 ? `${name} - ${count}${max > 0 ? `/${max}` : ""}` : name;
    const server: GameServerInfo = {
      name,
      label,
      connectable: Boolean(firstFrom(record, ["sIP", "IP", "ip"])) && numberFrom(record, ["iPort", "Port", "port"]) > 0,
      raw: record,
      refreshedAt
    };
    if (count > 0) server.count = count;
    if (max > 0) server.max = max;
    if (firstFrom(record, ["bOnline", "Online", "online"]) !== undefined) server.online = booleanFrom(firstFrom(record, ["bOnline", "Online", "online"]));
    result.push(server);
  }
  return result;
}

function serverDisplayName(server: Record<string, unknown>, fallback: string): string {
  const name = cleanServerName(stringFrom(firstFrom(server, ["sName", "Name", "name"]), fallback));
  const count = numberFrom(server, ["iCount", "count", "PlayerCount", "playerCount"]);
  const max = numberFrom(server, ["iMax", "max", "MaxPlayers", "maxPlayers"]);
  if (count > 0 || max > 0) return `${name} (${count}${max > 0 ? `/${max}` : ""})`;
  return name;
}

function cleanServerName(value: string): string {
  return value.replace(/\s+-\s+\d+(?:\/\d+)?\s*$/u, "").trim();
}

function sameServerName(left: string, right: string): boolean {
  return cleanServerName(left).toLowerCase() === cleanServerName(right).toLowerCase();
}

function booleanFrom(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return value.toLowerCase() === "true" || value === "1";
  return false;
}

function parseIdList(value: string): number[] {
  return value
    .split(/[\s,;]+/)
    .map((part) => Number(part.trim()))
    .filter((id) => Number.isInteger(id) && id > 0);
}

function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) chunks.push(items.slice(index, index + size));
  return chunks;
}

function grabberTypeLabel(type: GrabberType): string {
  const labels: Record<GrabberType, string> = {
    "shop-items": "Shop Items",
    "shop-ids": "Shop IDs",
    quests: "Quests",
    inventory: "Inventory",
    "house-inventory": "House Inventory",
    "temp-inventory": "Temp Inventory",
    "bank-items": "Bank Items",
    "cell-monsters": "Cell Monsters",
    "map-monsters": "Map Monsters",
    "map-items": "GetMap Item IDs"
  };
  return labels[type];
}

function isGrabberType(value: unknown): value is GrabberType {
  return (
    value === "shop-items" ||
    value === "shop-ids" ||
    value === "quests" ||
    value === "inventory" ||
    value === "house-inventory" ||
    value === "temp-inventory" ||
    value === "bank-items" ||
    value === "cell-monsters" ||
    value === "map-monsters" ||
    value === "map-items"
  );
}

async function runTopAction(action: string): Promise<void> {
  if (action === "open-bank") {
    await createBot("Bank").callGameFunction("world.toggleBank");
    log("event", "Bank opened.");
  }
  if (action === "show-launcher") {
    await nativeApi()?.showLauncher?.();
    log("event", "Launcher opened.");
  }
}

function applyTheme(theme: string, announce: boolean): void {
  const allowed = ["veyra-dark", "classic-slate", "forest-mist", "night-rose", "github-dark", "catppuccin-mocha", "high-contrast"];
  activeTheme = allowed.includes(theme) ? theme : "veyra-dark";
  if (activeTheme === "veyra-dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = activeTheme;
  }
  toolBus.postMessage({ type: "theme", theme: activeTheme });
  if (announce) {
    void writeJsonSetting("theme", { theme: activeTheme });
    themeBus.postMessage({ type: "theme", theme: activeTheme });
    log("event", `Theme changed to ${themeLabel(activeTheme)}.`);
  }
}

async function hydrateThemeFromFile(): Promise<void> {
  const saved = await readJsonSetting("theme").catch(() => undefined);
  if (!saved) return;
  const theme = typeof saved === "string" ? saved : stringFrom((saved as Record<string, unknown>).theme);
  if (theme) applyTheme(theme, false);
}

async function hydrateGameOptionsFromFile(): Promise<void> {
  gameOptionsState = await readPersistedGameOptions();
  publishState();
}

async function hydrateArmySettingsFromFile(): Promise<void> {
  const saved = await readJsonSetting("army").catch(() => undefined);
  armySettings = normalizeArmySettings(saved);
  publishState();
}

function themeLabel(theme: string): string {
  const labels: Record<string, string> = {
    "veyra-dark": "Soft Graphite",
    "classic-slate": "Classic Slate",
    "forest-mist": "Forest Mist",
    "night-rose": "Night Rose",
    "github-dark": "GitHub Dark",
    "catppuccin-mocha": "Catppuccin Mocha",
    "high-contrast": "High Contrast",
  };
  return labels[theme] ?? theme;
}

async function refreshRuntimePanel(): Promise<void> {
  const snapshot = await createBot("Runtime").snapshot().catch(() => undefined);
  toolPanel.innerHTML = runtimePanelHtml(snapshot);
  bindPanelActions("runtime-refreshed");
}

function toggleDropdown(name: string, anchor: HTMLElement): void {
  if (menuRibbon.dataset.menu === name && menuRibbon.dataset.open === "true") {
    closeDropdown();
    return;
  }

  menuRibbon.dataset.menu = name;
  menuRibbon.dataset.open = "true";
  menuRibbon.innerHTML = `<div class="dropdown">${dropdownHtml(name)}</div>`;
  positionDropdown(name, anchor);
  bindDropdownActions(name);
  if (name === "jump") void refreshJumpRibbon();
}

function positionDropdown(name: string, anchor: HTMLElement): void {
  const dropdown = menuRibbon.querySelector<HTMLElement>(".dropdown");
  if (!dropdown) return;

  const rect = anchor.getBoundingClientRect();
  const width = dropdownWidth(name);
  dropdown.style.width = `${width}px`;
  dropdown.style.left = `${Math.max(4, Math.min(rect.left, window.innerWidth - width - 4))}px`;
  dropdown.style.top = `${rect.bottom}px`;
}

function dropdownWidth(name: string): number {
  if (name === "auto") return 390;
  if (name === "jump") return 292;
  if (name === "options") return 210;
  if (name === "helpers") return 158;
  if (name === "tools") return 168;
  if (name === "packets") return 142;
  if (name === "plugins") return 158;
  return 180;
}

function dropdownHtml(name: string): string {
  switch (name) {
    case "options":
      return `
        <div class="ribbon-row">
          <button data-action="game-options" type="button">Game</button>
          <button data-action="army-options" type="button">Army</button>
          <button data-action="application-options" type="button">Application</button>
          <button data-action="core-options" type="button">CoreBots</button>
          <button data-action="theme-options" type="button">Application Themes</button>
          <button data-action="hotkeys" type="button">HotKeys</button>
        </div>`;
    case "helpers":
      return `
        <div class="ribbon-row">
          <button data-action="runtime" type="button">Runtime</button>
          <button data-action="fast-travel" type="button">Fast Travel</button>
          <button data-action="current-drops" type="button">Current Drops</button>
        </div>`;
    case "tools":
      return `
        <div class="ribbon-row">
          <button data-action="script-builder" type="button">Script Builder</button>
          <button data-action="loader" type="button">Loader</button>
          <button data-action="grabber" type="button">Grabber</button>
          <button data-action="junk-items" type="button">Junk Items</button>
          <button data-action="stats" type="button">Stats</button>
          <button data-action="console" type="button">Console</button>
        </div>`;
    case "packets":
      return `
        <div class="ribbon-row">
          <button data-action="packet-spammer" type="button">Spammer</button>
          <button data-action="packet-logger" type="button">Logger</button>
          <button data-action="packet-interceptor" type="button">Interceptor</button>
        </div>`;
    case "plugins":
      return `
        <div class="ribbon-row">
          <button data-action="view-plugins" type="button">View Plugins</button>
        </div>`;
    case "auto": {
      const attackRunning = isAutoRunning("attack");
      const huntRunning = isAutoRunning("hunt");
      const anyRunning = attackRunning || huntRunning;
      return `
        <div class="ribbon-row">
          <div class="dropdown-grid auto-actions">
            <button class="${attackRunning ? "auto-running" : ""}" data-action="auto-attack" type="button" aria-pressed="${attackRunning ? "true" : "false"}"${attackRunning ? " disabled" : ""}>${attackRunning ? "Attack On" : "Auto Attack"}</button>
            <button class="${huntRunning ? "auto-running" : ""}" data-action="auto-hunt" type="button" aria-pressed="${huntRunning ? "true" : "false"}"${huntRunning ? " disabled" : ""}>${huntRunning ? "Hunt On" : "Auto Hunt"}</button>
            <button data-action="auto-stop" type="button"${anyRunning ? "" : " disabled"}>Stop</button>
          </div>
          <div class="dropdown-grid">
            ${pickerHtml("auto-class", "Class")}
            ${pickerHtml("auto-mode", "Mode")}
          </div>
        </div>`;
    }
    case "jump":
      return `
        <div class="ribbon-row">
          <div class="dropdown-grid">
            ${pickerHtml("jump-cell", "Cell")}
            ${pickerHtml("jump-pad", "Pad")}
          </div>
          <div class="dropdown-grid jump-actions">
            <button class="ribbon-button secondary" data-action="jump-current" type="button">Use Current</button>
            <button class="ribbon-button primary" data-action="jump-go" type="button">Jump</button>
          </div>
        </div>`;
    default:
      return "";
  }
}

function bindDropdownActions(name: string): void {
  for (const button of Array.from(menuRibbon.querySelectorAll<HTMLButtonElement>("[data-action]"))) {
    button.addEventListener("click", () => void runDropdownAction(button.dataset.action ?? "", name));
  }
  for (const trigger of Array.from(menuRibbon.querySelectorAll<HTMLButtonElement>("[data-picker-trigger]"))) {
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      togglePicker(trigger.dataset.pickerTrigger as PickerId);
    });
  }
  for (const option of Array.from(menuRibbon.querySelectorAll<HTMLButtonElement>("[data-picker-option]"))) {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      selectPickerOption(option.dataset.pickerId as PickerId, option.dataset.pickerOption ?? "");
    });
  }
}

function pickerHtml(id: PickerId, label: string): string {
  const picker = pickerState[id];
  const open = picker.open ? "true" : "false";
  return `
    <div class="picker" data-picker="${id}" data-open="${open}">
      <span class="picker-label">${escapeHtml(label)}</span>
      <button class="picker-trigger" data-picker-trigger="${id}" type="button">${escapeHtml(picker.value)}</button>
      <div class="picker-menu">
        ${picker.options
          .map((option) => {
            const active = option === picker.value ? "active" : "";
            return `<button class="picker-option ${active}" data-picker-id="${id}" data-picker-option="${escapeAttr(option)}" type="button">${escapeHtml(option)}</button>`;
          })
          .join("")}
      </div>
    </div>`;
}

function togglePicker(id: PickerId): void {
  if (!pickerState[id]) return;
  const willOpen = !pickerState[id].open;
  for (const picker of Object.values(pickerState)) picker.open = false;
  pickerState[id].open = willOpen;
  renderOpenDropdown(false);
}

function selectPickerOption(id: PickerId, value: string): void {
  if (!pickerState[id]) return;
  pickerState[id].value = value;
  pickerState[id].open = false;
  if (id === "auto-class") log("event", `Auto class mode: ${value}.`);
  if (id === "auto-mode") log("event", `Auto mode: ${value}.`);
  if (id === "jump-pad") jumpPadManual = value !== "Auto";
  renderOpenDropdown(false);
  if (id === "jump-cell") void jumpFromRibbon();
}

function renderOpenDropdown(refreshJump: boolean): void {
  const name = menuRibbon.dataset.menu;
  if (!name || menuRibbon.dataset.open !== "true") return;
  menuRibbon.innerHTML = `<div class="dropdown">${dropdownHtml(name)}</div>`;
  const activeButton = Array.from(document.querySelectorAll<HTMLElement>("[data-menu]")).find((button) => button.dataset.menu === name);
  if (activeButton) positionDropdown(name, activeButton);
  bindDropdownActions(name);
  if (refreshJump && name === "jump") void refreshJumpRibbon();
}

function closeAllPickers(): void {
  for (const picker of Object.values(pickerState)) picker.open = false;
}

function setPickerOptions(id: PickerId, options: string[], value: string): void {
  pickerState[id].options = options.length > 0 ? options : [value];
  pickerState[id].value = pickerState[id].options.includes(value) ? value : pickerState[id].options[0] ?? value;
  pickerState[id].open = false;
}

async function refreshJumpRibbon(): Promise<void> {
  if (menuRibbon.dataset.menu !== "jump" || menuRibbon.dataset.open !== "true") return;
  const previousPad = pickerState["jump-pad"].value;
  const bot = createBot("Jump");
  const [snapshot, cells, pads] = await Promise.all([
    bot.snapshot().catch(() => undefined),
    bot.cells().catch(() => []),
    bot.pads().catch(() => [])
  ]);

  const cellOptions = uniqueStrings([snapshot?.cell, ...cells, "Enter", "r1", "r2", "r3"].filter(Boolean) as string[]);
  const padOptions = uniqueStrings(["Auto", snapshot?.pad, ...pads, "Spawn", "Left", "Right", "Top", "Bottom", "Center"].filter(Boolean) as string[]);
  const nextCell = snapshot?.cell && cellOptions.includes(snapshot.cell) ? snapshot.cell : pickerState["jump-cell"].value;
  const nextPad = jumpPadManual && padOptions.includes(previousPad) ? previousPad : "Auto";
  setPickerOptions("jump-cell", cellOptions, nextCell);
  setPickerOptions("jump-pad", padOptions, nextPad);
  renderOpenDropdown(false);
}

async function jumpFromRibbon(): Promise<void> {
  const cell = pickerState["jump-cell"].value || "Enter";
  const pad = jumpPadManual ? pickerState["jump-pad"].value : "Auto";
  await createBot("Jump").jump(cell, pad);
  await sleep(450);
  jumpPadManual = false;
  await refreshJumpRibbon();
}

async function runDropdownAction(action: string, menu: string): Promise<void> {
  const bot = createBot("Tool");
  if (["game-options", "army-options", "application-options", "core-options", "theme-options", "hotkeys"].includes(action)) {
    openToolWindow("options", { section: action });
    closeDropdown();
    return;
  }
  if (action === "runtime") {
    openToolWindow("helpers", { section: "runtime" });
    closeDropdown();
    return;
  }
  if (action === "fast-travel") {
    openToolWindow("helpers", { section: "fast-travel" });
    closeDropdown();
    return;
  }
  if (action === "current-drops") {
    openToolWindow("helpers", { section: "current-drops" });
    closeDropdown();
    return;
  }
  if (action === "script-builder") {
    openToolWindow("builder");
    closeDropdown();
    return;
  }
  if (["loader", "grabber", "junk-items", "stats", "console"].includes(action)) {
    openToolWindow("tools", { section: action });
    closeDropdown();
    return;
  }
  if (["packet-spammer", "packet-logger", "packet-interceptor"].includes(action)) {
    openToolWindow("packets", { section: action });
    closeDropdown();
    return;
  }
  if (action === "view-plugins") {
    openToolWindow("plugins");
    closeDropdown();
    return;
  }
  if (action === "auto-attack") {
    await startAuto("attack");
    return;
  }
  if (action === "auto-hunt") {
    await startAuto("hunt");
    return;
  }
  if (action === "auto-stop") {
    stopAuto("attack");
    stopAuto("hunt");
    log("event", "Auto actions stopped.");
    renderOpenDropdown(false);
    publishState();
    return;
  }
  if (action === "jump-current") {
    const snapshot = await bot.snapshot();
    await refreshJumpRibbon();
    if (snapshot.cell) pickerState["jump-cell"].value = snapshot.cell;
    pickerState["jump-pad"].value = "Auto";
    jumpPadManual = false;
    renderOpenDropdown(false);
  }
  if (action === "jump-go") await jumpFromRibbon();
  if (menu !== "jump" && menu !== "auto") closeDropdown();
}

async function setGameOption(option: string, value: GameOptionValue): Promise<void> {
  const def = GAME_OPTION_DEFS.find((item) => item.id === option);
  if (!def || def.kind === "action") return;
  await applyGameOption(def.id, value);
  log("event", `${def.label}: ${String(value)}.`);
}

async function applySavedGameOptions(): Promise<void> {
  await applyGameOptionsState(await readPersistedGameOptions());
}

async function applyGameOptionsState(settings: GameOptionsState): Promise<void> {
  if (!gameBridgeReady) {
    queuedGameOptionsApply = true;
    gameOptionsState = normalizeGameOptionsState(settings);
    log("event", "Game options queued until the game API is ready.");
    return;
  }
  for (const option of GAME_OPTION_DEFS) {
    if (option.kind === "action") continue;
    await applyGameOption(option.id, settings.values[option.id] ?? option.defaultValue ?? "");
  }
}

async function readPersistedGameOptions(): Promise<GameOptionsState> {
  const value = await readJsonSetting("game-options").catch(() => undefined);
  gameOptionsState = value ? normalizeGameOptionsState(value) : readGameOptionsState();
  return gameOptionsState;
}

async function writePersistedGameOptions(settings: GameOptionsState): Promise<GameOptionsState> {
  const saved = writeGameOptionsState(settings);
  await writeJsonSetting("game-options", saved).catch(() => undefined);
  gameOptionsState = saved;
  publishState();
  return saved;
}

async function updatePersistedGameOption(option: string, value: GameOptionValue): Promise<GameOptionsState> {
  const settings = normalizeGameOptionsState(gameOptionsState);
  settings.values[option] = value;
  if (option === "accept-all-drops" && value === true) settings.values["reject-all-drops"] = false;
  if (option === "accept-all-drops" && value === true) settings.values["quest-drops-only"] = false;
  if (option === "reject-all-drops" && value === true) settings.values["accept-all-drops"] = false;
  if (option === "reject-all-drops" && value === true) settings.values["quest-drops-only"] = false;
  if (option === "quest-drops-only" && value === true) {
    settings.values["accept-all-drops"] = false;
    settings.values["reject-all-drops"] = false;
  }
  return writePersistedGameOptions(settings);
}

async function applyGameOption(option: string, value: GameOptionValue): Promise<void> {
  if (gameOptionNeedsReadyGame(option) && !gameBridgeReady) {
    queuedGameOptionsApply = true;
    return;
  }
  const bot = createBot("Options");
  const enabled = value === true;
  const numberValue = Number(value);
  const stringValue = String(value ?? "");

  try {
    switch (option) {
      case "hide-players":
        await bot.call("hidePlayers", enabled);
        await toggleModule(bot, "HidePlayers", enabled);
        break;
      case "disable-fx":
        await toggleModule(bot, "DisableFX", enabled);
        break;
      case "disable-collisions":
        await toggleModule(bot, "DisableCollisions", enabled);
        break;
      case "lag-killer":
        await bot.call("killLag", enabled);
        break;
      case "disable-death-ads":
        await bot.call("disableDeathAd", enabled);
        break;
      case "accept-all-drops":
        if (enabled) setLiveGameOptionTimer("reject-all-drops", false, 1000, () => Promise.resolve());
        if (enabled) setLiveGameOptionTimer("quest-drops-only", false, 1000, () => Promise.resolve());
        setLiveGameOptionTimer(option, enabled, 900, async () => {
          reportDropAction("Accepted", await bot.call("acceptAllDrops"));
        });
        break;
      case "reject-all-drops":
        if (enabled) setLiveGameOptionTimer("accept-all-drops", false, 1000, () => Promise.resolve());
        if (enabled) setLiveGameOptionTimer("quest-drops-only", false, 1000, () => Promise.resolve());
        setLiveGameOptionTimer(option, enabled, 900, async () => {
          reportDropAction("Rejected", await bot.call("rejectAllDrops", Boolean(gameOptionsState.values["accept-ac-drops"])));
        });
        break;
      case "quest-drops-only":
        if (enabled) {
          setLiveGameOptionTimer("accept-all-drops", false, 1000, () => Promise.resolve());
          setLiveGameOptionTimer("reject-all-drops", false, 1000, () => Promise.resolve());
        }
        setLiveGameOptionTimer(option, enabled, 900, async () => {
          reportDropAction("Filtered quest drops", await bot.call("questDropsOnly", Boolean(gameOptionsState.values["accept-ac-drops"])));
        });
        log("event", enabled ? "Quest Drops Only enabled." : "Quest Drops Only disabled.");
        break;
      case "accept-ac-drops":
        setLiveGameOptionTimer(option, enabled, 900, async () => {
          reportDropAction("Accepted AC", await bot.call("acceptACDrops"));
        });
        break;
      case "aggro-monsters":
        setLiveGameOptionTimer(option, enabled, 750, async () => {
          await bot.callGameFunction("world.aggroAllMon");
        });
        break;
      case "aggro-all-monsters":
        setLiveGameOptionTimer(option, enabled, 750, async () => {
          await aggroAllMapMonsters(bot);
        });
        break;
      case "rest-packets":
        setLiveGameOptionTimer(option, enabled, 1200, async () => {
          await bot.sendPacket("%xt%zm%restRequest%1%%");
        });
        break;
      case "show-fps":
        await bot.call("setGameObject", "ui.mcFPS.visible", enabled);
        break;
      case "set-fps":
        await bot.call("setGameObject", "stage.frameRate", numberValue);
        break;
      case "walk-speed":
        await bot.call("setGameObject", "world.WALKSPEED", numberValue);
        break;
      case "custom-name":
        if (stringValue) {
          await bot.call("setGameObject", "world.myAvatar.objData.strUsername", stringValue).catch(() => undefined);
          await bot.call("setGameObject", "world.rootClass.ui.mcPortrait.strName.text", stringValue).catch(() => undefined);
          await bot.call("setGameObject", "world.myAvatar.pMC.pname.ti.text", stringValue).catch(() => undefined);
        }
        break;
      case "custom-guild":
        if (stringValue) await bot.call("setGameObject", "world.myAvatar.pMC.pname.tg.text", stringValue);
        break;
      case "staff":
        await bot.call("setGameObject", "world.myAvatar.pMC.pname.ti.textColor", enabled ? 0xfecb38 : 0xffffff);
        break;
      case "upgrade":
        await bot.call("setGameObject", "world.myAvatar.pMC.pname.ti.textColor", enabled ? 0x8cd5ff : 0xffffff);
        break;
      case "infinite-range":
        if (enabled) {
          setLiveGameOptionTimer(option, true, 900, async () => {
            await bot.call("infiniteRange", true);
          });
        } else {
          setLiveGameOptionTimer(option, false, 900, () => Promise.resolve());
          await bot.call("infiniteRange", false);
        }
        break;
      case "magnetise":
        setLiveGameOptionTimer(option, enabled, 500, async () => {
          await bot.call("magnetize");
        });
        break;
      case "skip-cutscenes":
        setLiveGameOptionTimer(option, enabled, 700, async () => {
          await skipCutsceneSafely(bot, { quiet: true });
        });
        log("event", enabled ? "Auto skip cutscenes enabled." : "Auto skip cutscenes disabled.");
        break;
      default:
        // These are script/runtime policy options. They are persisted and consumed by scripts as the TS runtime grows.
        break;
    }
  } catch (error) {
    log("debug", `Game option ${option}: ${describeUnknownError(error)}`);
  }
}

function gameOptionNeedsReadyGame(option: string): boolean {
  return [
    "accept-ac-drops",
    "accept-all-drops",
    "aggro-all-monsters",
    "aggro-monsters",
    "custom-guild",
    "custom-name",
    "disable-collisions",
    "disable-death-ads",
    "disable-fx",
    "hide-players",
    "infinite-range",
    "lag-killer",
    "magnetise",
    "quest-drops-only",
    "reject-all-drops",
    "rest-packets",
    "set-fps",
    "show-fps",
    "skip-cutscenes",
    "staff",
    "upgrade",
    "walk-speed"
  ].includes(option);
}

async function toggleModule(bot: BrowserFlashBot, moduleName: string, enabled: boolean): Promise<void> {
  await bot.call(enabled ? "modEnable" : "modDisable", moduleName).catch(() => undefined);
}

function setLiveGameOptionTimer(name: string, enabled: boolean, interval: number, action: () => Promise<void>): void {
  const existing = gameOptionTimers.get(name);
  if (existing) window.clearInterval(existing);
  gameOptionTimers.delete(name);
  if (!enabled) return;

  void action().catch((error) => log("debug", `${name}: ${describeUnknownError(error)}`));
  const timer = window.setInterval(() => {
    void action().catch((error) => log("debug", `${name}: ${describeUnknownError(error)}`));
  }, interval);
  gameOptionTimers.set(name, timer);
}

async function aggroAllMapMonsters(bot: BrowserFlashBot): Promise<void> {
  const [snapshot, monsters] = await Promise.all([bot.snapshot(), bot.call<unknown>("getMonsters").catch(() => [])]);
  const parsedValue = parseMaybeJson<unknown>(monsters);
  const parsed = Array.isArray(parsedValue) ? (parsedValue as Record<string, unknown>[]) : [];
  const ids = parsed
    .map((monster) => Number(monster.MonMapID ?? monster.MonID ?? 0))
    .filter((id) => Number.isFinite(id) && id > 0);
  if (ids.length === 0) return;
  await bot.sendPacket(`%xt%zm%aggroMon%${snapshot.room || 1}%${Array.from(new Set(ids)).join("%")}%`);
}

async function skipCutsceneSafely(bot: BrowserFlashBot, options: { quiet?: boolean } = {}): Promise<void> {
  const quiet = options.quiet === true;
  if (!gameBridgeReady) {
    if (!quiet) log("event", "Skip cutscene ignored: game is not fully loaded yet.");
    return;
  }

  const [children, uiVisible, worldVisible] = await Promise.all([
    bot.getGameObject<unknown>("mcExtSWF.numChildren").catch(() => 0),
    bot.getGameObject<unknown>("ui.visible").catch(() => true),
    bot.getGameObject<unknown>("world.visible").catch(() => true)
  ]);
  const childCount = numberValue(children);
  const interfaceVisible = booleanValue(uiVisible, true) && booleanValue(worldVisible, true);

  if (childCount <= 0) {
    if (!quiet) log("event", "No cutscene is active.");
    return;
  }

  if (interfaceVisible) {
    if (!quiet) log("event", `Skip cutscene ignored: normal game interface is visible (${childCount} external clip${childCount === 1 ? "" : "s"} loaded).`);
    return;
  }

  await bot.call("skipCutscenes");
  await recoverGameView(bot);
  log("event", `${quiet ? "Auto skipped" : "Skipped"} cutscene and restored the game interface.`);
}

async function recoverGameView(bot: BrowserFlashBot): Promise<void> {
  await sleep(250);
  await bot.call("setGameObject", "ui.visible", true).catch(() => undefined);
  await bot.call("setGameObject", "world.visible", true).catch(() => undefined);
  await bot.call("setGameObject", "mcExtSWF.visible", false).catch(() => undefined);
  await bot.callGameFunction("showInterface").catch(() => undefined);
}

function numberValue(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return 0;
}

function stringFrom(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
  return fallback;
}

function cleanText(value: unknown, fallback: string): string {
  const text = stringFrom(value, fallback).trim();
  return text || fallback;
}

function cleanScriptId(value: unknown, fallback: string): string {
  const id = stringFrom(value, fallback)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return id || fallback;
}

function booleanValue(value: unknown, fallback: boolean): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "true" || lower === "1") return true;
    if (lower === "false" || lower === "0") return false;
  }
  return fallback;
}

function withPrivateRoomSuffix(map: string, privateNumber: number): string {
  if (/-\d+$/.test(map)) return map;
  const room = Number.isFinite(privateNumber) && privateNumber > 0 ? Math.floor(privateNumber) : 100000;
  return `${map}-${room}`;
}

function isHomeTravelMap(map: string): boolean {
  const base = (map || "").split("-")[0]?.toLowerCase() || "";
  return base === "house" || base === "home";
}

function setArmyRole(role: ArmyRole): void {
  if (armyRole === role) {
    if (role === "leader") void publishArmyLocation(true);
    if (role === "follower") requestArmyLocation();
    renderOpenDropdown(false);
    return;
  }

  if (armyRole === "leader") stopArmyLeader();
  if (armyRole === "follower") stopArmyFollowerRequests();
  armyRole = role;
  armyPendingLocation = undefined;
  armyFollowerLeader = "";
  armyFollowerLastMessageAt = 0;
  armyFollowerLastSeq = 0;
  armyLastGotoKey = "";
  armyLastAppliedKey = "";

  if (role === "leader") {
    startArmyLeader();
    log("event", "Army Leader enabled.");
  } else if (role === "follower") {
    startArmyFollower();
    log("event", "Army Follower enabled.");
  } else {
    stopArmyFollowerRequests();
    log("event", "Army disabled.");
  }

  renderOpenDropdown(false);
  publishState();
}

function startArmyLeader(): void {
  stopArmyLeader();
  armyLeaderLastLocation = undefined;
  armyLeaderTimer = window.setInterval(() => void publishArmyLocation(), armySettings.publishIntervalMs);
  void publishArmyLocation(true);
}

function stopArmyLeader(): void {
  if (armyLeaderTimer !== undefined) {
    window.clearInterval(armyLeaderTimer);
    armyLeaderTimer = undefined;
  }
  armyLeaderLastLocation = undefined;
  armyLeaderLastSentAt = 0;
}

function startArmyFollower(): void {
  stopArmyFollowerRequests();
  if (!armySettings.followOnEnable) return;

  requestArmyLocation();
  armyFollowerRequestTimer = window.setInterval(() => {
    if (armyRole !== "follower" || armyFollowerLeader) {
      stopArmyFollowerRequests();
      return;
    }
    requestArmyLocation();
  }, 1000);
}

function stopArmyFollowerRequests(): void {
  if (armyFollowerRequestTimer !== undefined) {
    window.clearInterval(armyFollowerRequestTimer);
    armyFollowerRequestTimer = undefined;
  }
}

function requestArmyLocation(): void {
  if (armyRole !== "follower") return;
  const message: ArmyRequestMessage = {
    type: "veyra-army-request",
    from: instanceId,
    sentAt: Date.now()
  };
  armyBus.postMessage(message);
}

async function publishArmyLocation(force = false): Promise<void> {
  if (armyRole !== "leader") return;

  const snapshot = await createBot("Army").snapshot().catch(() => undefined);
  if (!snapshot?.loggedIn || !snapshot.map) return;

  const origin = armyOriginFromSnapshot(snapshot);
  const now = Date.now();
  const message: ArmyLocationMessage = {
    type: "veyra-army-location",
    from: instanceId,
    seq: ++armyLeaderSeq,
    username: snapshot.username,
    map: origin.map,
    room: origin.room,
    targetMap: origin.targetMap,
    cell: origin.cell,
    pad: origin.pad,
    x: roundArmyCoord(snapshot.x),
    y: roundArmyCoord(snapshot.y),
    sentAt: now
  };

  const changed = hasArmyLeaderLocationChanged(message);
  if (!force && !changed && now - armyLeaderLastSentAt < armySettings.heartbeatMs) return;

  armyLeaderLastLocation = message;
  armyLeaderLastSentAt = now;
  armyBus.postMessage(message);
  if (changed || force) log("event", `Army Leader: ${describeArmyLocation(message)}.`);
}

function handleArmyMessage(raw: unknown): void {
  const request = normalizeArmyRequestMessage(raw);
  if (request) {
    if (armyRole === "leader" && request.from !== instanceId) void publishArmyLocation(true);
    return;
  }

  const message = normalizeArmyLocationMessage(raw);
  if (!message || armyRole !== "follower" || message.from === instanceId) return;

  const now = Date.now();
  if (armyFollowerLeader && armyFollowerLeader !== message.from && now - armyFollowerLastMessageAt < armySettings.leaderLockMs) return;
  if (armyFollowerLeader === message.from && message.seq <= armyFollowerLastSeq) return;

  if (armyFollowerLeader !== message.from) {
    armyFollowerLeader = message.from;
    armyFollowerLastSeq = 0;
    armyLastGotoKey = "";
    stopArmyFollowerRequests();
    log("event", `Army Follower linked to ${shortInstanceId(message.from)}.`);
  }

  armyFollowerLastMessageAt = now;
  armyFollowerLastSeq = message.seq;
  queueArmyFollow(message);
}

function normalizeArmyRequestMessage(raw: unknown): ArmyRequestMessage | undefined {
  const record = asRecord(raw);
  if (record.type !== "veyra-army-request") return undefined;
  const from = stringFrom(record.from).trim();
  if (!from) return undefined;
  return {
    type: "veyra-army-request",
    from,
    sentAt: Math.max(0, Math.floor(numberValue(record.sentAt)))
  };
}

function normalizeArmyLocationMessage(raw: unknown): ArmyLocationMessage | undefined {
  const record = asRecord(raw);
  if (record.type !== "veyra-army-location") return undefined;

  const from = stringFrom(record.from).trim();
  const map = stringFrom(record.map).trim();
  const targetMap = stringFrom(record.targetMap).trim();
  if (!from || !map) return undefined;

  return {
    type: "veyra-army-location",
    from,
    seq: Math.max(0, Math.floor(numberValue(record.seq))),
    username: stringFrom(record.username).trim(),
    map,
    room: Math.max(0, Math.floor(numberValue(record.room))),
    targetMap: targetMap || map,
    cell: stringFrom(record.cell, "Enter") || "Enter",
    pad: stringFrom(record.pad, "Spawn") || "Spawn",
    x: roundArmyCoord(numberValue(record.x)),
    y: roundArmyCoord(numberValue(record.y)),
    sentAt: Math.max(0, Math.floor(numberValue(record.sentAt)))
  };
}

function queueArmyFollow(message: ArmyLocationMessage): void {
  const key = armyMessageKey(message);
  if (key === armyLastAppliedKey && !armyPendingLocation) return;
  armyPendingLocation = message;
  if (!armyFollowerBusy) void drainArmyFollowQueue();
}

async function drainArmyFollowQueue(): Promise<void> {
  if (armyFollowerBusy) return;
  armyFollowerBusy = true;
  try {
    while (armyRole === "follower" && armyPendingLocation) {
      const message = armyPendingLocation;
      armyPendingLocation = undefined;
      await followArmyLocation(message);
    }
  } catch (error) {
    log("debug", `Army Follower: ${describeUnknownError(error)}`);
  } finally {
    armyFollowerBusy = false;
    if (armyRole === "follower" && armyPendingLocation) void drainArmyFollowQueue();
  }
}

async function followArmyLocation(message: ArmyLocationMessage): Promise<void> {
  const bot = createBot("Army");
  let snapshot = await bot.snapshot().catch(() => undefined);
  if (armyRole !== "follower" || !snapshot?.loggedIn || !message.map) return;

  const origin = armyOriginFromMessage(message);
  if (armySettings.syncMap) {
    if (!snapshot.alive) {
      const respawned = await bot.respawn().catch(() => undefined);
      if (respawned) snapshot = respawned;
    }
    if (!snapshot) return;
    const gotoKey = armyGotoKey(message);
    if (message.username && (gotoKey !== armyLastGotoKey || !sameArmyMap(snapshot, origin))) {
      log("event", `Army Follower: going to ${message.username}.`);
      await bot.goto(message.username);
      armyLastGotoKey = gotoKey;
      snapshot = await waitForArmyLeaderMap(bot, origin);
    }

    const leaderVisible = message.username ? await isArmyLeaderVisible(bot, message.username) : true;
    if (message.username && (!leaderVisible || !snapshot || !sameArmyMap(snapshot, origin))) {
      log("debug", `Army Follower: goto ${message.username} did not land on the leader yet; waiting for next publish.`);
      return;
    }

    if (!message.username && (!leaderVisible || !snapshot || !sameArmyMap(snapshot, origin))) {
      snapshot = await tryArmyFallbackRooms(bot, message, origin);
    }
  }

  if (armySettings.syncCell && snapshot && !sameAutoOrigin(snapshot, origin)) {
    log("event", `Army Follower: jumping to ${origin.cell}/${origin.pad}.`);
    await bot.jump(origin.cell, origin.pad);
    await sleep(200);
  }

  const current = await bot.snapshot().catch(() => undefined);
  if (armySettings.syncPosition && current && sameArmyMap(current, origin) && current.cell === origin.cell && shouldArmyWalk(current, message)) {
    await bot.walkTo(message.x, message.y, 8);
  }

  armyLastAppliedKey = armyMessageKey(message);
}

function armyOriginFromMessage(message: ArmyLocationMessage): AutoOrigin {
  const targetMap = message.targetMap || message.map;
  const targetRoom = privateRoomFromMap(targetMap);
  return {
    map: baseArmyMapName(message.map || targetMap),
    room: targetRoom ?? 0,
    targetMap,
    cell: message.cell || "Enter",
    pad: message.pad || "Spawn"
  };
}

function armyOriginFromSnapshot(snapshot: PlayerSnapshot): AutoOrigin {
  const rawMap = snapshot.map.trim();
  const targetMap = rawMap || "battleon";
  const explicitRoom = privateRoomFromMap(targetMap);
  return {
    map: baseArmyMapName(targetMap),
    room: explicitRoom ?? 0,
    targetMap,
    cell: snapshot.cell || "Enter",
    pad: snapshot.pad || "Spawn"
  };
}

function sameArmyMap(snapshot: PlayerSnapshot, origin: AutoOrigin): boolean {
  const sameMapName = baseArmyMapName(snapshot.map) === baseArmyMapName(origin.map || origin.targetMap);
  const sameRoom = !armySettings.exactRoom || origin.room <= 0 || snapshot.room === origin.room;
  return sameMapName && sameRoom;
}

async function waitForArmyLeaderMap(bot: BrowserFlashBot, origin: AutoOrigin): Promise<PlayerSnapshot | undefined> {
  const startedAt = Date.now();
  const deadline = Date.now() + 8000;
  const minimumWait = origin.room > 0 ? 0 : 1800;
  let snapshot: PlayerSnapshot | undefined;
  while (Date.now() < deadline) {
    snapshot = await bot.snapshot().catch(() => undefined);
    const waited = Date.now() - startedAt >= minimumWait;
    if (waited && snapshot && sameArmyMap(snapshot, origin)) return snapshot;
    if (waited && snapshot && baseArmyMapName(snapshot.map) === baseArmyMapName(origin.map || origin.targetMap) && origin.room <= 0) return snapshot;
    await sleep(350);
  }
  return snapshot;
}

async function tryArmyFallbackRooms(bot: BrowserFlashBot, message: ArmyLocationMessage, origin: AutoOrigin): Promise<PlayerSnapshot | undefined> {
  const candidates = armyFallbackJoinCandidates(message, origin);
  let latest = await bot.snapshot().catch(() => undefined);

  for (const map of candidates) {
    if (latest && sameArmyFallbackMap(latest, map)) {
      if (origin.cell && !sameAutoOrigin(latest, origin)) {
        log("event", `Army Follower: jumping to ${origin.cell}/${origin.pad}.`);
        await bot.jump(origin.cell, origin.pad);
        await sleep(300);
        latest = await bot.snapshot().catch(() => latest);
      }
      return latest;
    }

    log("event", `Army Follower: joining ${map}.`);
    await bot.call("joinMap", map, origin.cell, origin.pad).catch((error) => log("debug", `Army join ${map}: ${describeUnknownError(error)}`));
    await sleep(900);
    latest = await bot.snapshot().catch(() => latest);
    if (!latest || baseArmyMapName(latest.map) !== baseArmyMapName(map)) continue;
    if (!message.username || (await isArmyLeaderVisible(bot, message.username))) return latest;
  }

  return message.username ? undefined : latest;
}

function armyFallbackJoinCandidates(message: ArmyLocationMessage, origin: AutoOrigin): string[] {
  const baseMap = baseArmyMapName(origin.targetMap || origin.map || message.map);
  const explicitRoom = privateRoomFromMap(origin.targetMap);
  const candidates = [
    explicitRoom ? origin.targetMap : "",
    ...armySettings.joinRooms.map((room) => `${baseMap}-${room}`),
    armySettings.joinRooms.length === 0 ? origin.targetMap || baseMap : ""
  ];
  return uniqueStrings(candidates.filter(Boolean));
}

function sameArmyFallbackMap(snapshot: PlayerSnapshot, map: string): boolean {
  const candidateRoom = privateRoomFromMap(map);
  return baseArmyMapName(snapshot.map) === baseArmyMapName(map) && (!candidateRoom || snapshot.room === candidateRoom);
}

async function isArmyLeaderVisible(bot: BrowserFlashBot, username: string): Promise<boolean> {
  const key = username.trim().toLowerCase();
  if (!key) return false;
  const raw = await bot.call<unknown>("getGameObjectKey", "world.uoTree", key).catch(() => undefined);
  const record = asRecord(raw);
  if (Object.keys(record).length === 0) return false;
  const name = stringFrom(firstFrom(record, ["strUsername", "username", "sName", "name"])).trim().toLowerCase();
  return !name || name === key;
}

function shouldArmyWalk(snapshot: PlayerSnapshot, message: ArmyLocationMessage): boolean {
  if (!Number.isFinite(message.x) || !Number.isFinite(message.y) || (message.x === 0 && message.y === 0)) return false;
  const dx = roundArmyCoord(snapshot.x) - message.x;
  const dy = roundArmyCoord(snapshot.y) - message.y;
  return Math.sqrt(dx * dx + dy * dy) > armySettings.walkThreshold;
}

function hasArmyLeaderLocationChanged(message: ArmyLocationMessage): boolean {
  if (!armyLeaderLastLocation) return true;
  if (armyLeaderLastLocation.targetMap.toLowerCase() !== message.targetMap.toLowerCase()) return true;
  if (armyLeaderLastLocation.username !== message.username) return true;
  if (armyLeaderLastLocation.cell !== message.cell || armyLeaderLastLocation.pad !== message.pad) return true;
  return armyDistance(armyLeaderLastLocation.x, armyLeaderLastLocation.y, message.x, message.y) >= armySettings.moveThreshold;
}

function armyMessageKey(message: ArmyLocationMessage): string {
  return `${message.username.toLowerCase()}|${message.targetMap.toLowerCase()}|${message.cell}|${message.pad}|${message.x}|${message.y}`;
}

function armyGotoKey(message: ArmyLocationMessage): string {
  return `${message.username.toLowerCase()}|${message.map.toLowerCase()}|${message.room}`;
}

function armyDistance(ax: number, ay: number, bx: number, by: number): number {
  const dx = ax - bx;
  const dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
}

function roundArmyCoord(value: number): number {
  return Number.isFinite(value) ? Math.round(value) : 0;
}

function describeArmyLocation(message: ArmyLocationMessage): string {
  return `${message.targetMap || message.map} ${message.cell}/${message.pad} (${message.x}, ${message.y})`;
}

function baseArmyMapName(map: string): string {
  return (map || "").split("-")[0]?.toLowerCase() || "";
}

function privateRoomFromMap(map: string): number | undefined {
  const match = /-(\d+)$/.exec(map.trim());
  if (!match) return undefined;
  const room = Number(match[1]);
  return Number.isFinite(room) && room > 0 ? Math.floor(room) : undefined;
}

function shortInstanceId(value: string): string {
  return value.length > 12 ? `${value.slice(0, 8)}...` : value;
}

async function runExternalConsoleCommand(command: string): Promise<void> {
  const bot = createBot("Console");
  if (command === "/snapshot") {
    log("debug", JSON.stringify(await bot.snapshot(), null, 2));
    return;
  }
  if (command.startsWith("/join ")) {
    const parts = command.split(/\s+/);
    const map = parts[1] || "battleon";
    const cell = parts[2] || "Enter";
    const pad = parts[3] || "Spawn";
    if (isHomeTravelMap(map)) await bot.goHome();
    else await bot.join(map, cell, pad);
    return;
  }
  if (command === "/home" || command === "/house") {
    await bot.goHome();
    return;
  }
  if (command.startsWith("/jump ")) {
    const parts = command.split(/\s+/);
    const cell = parts[1] || "Enter";
    const pad = parts[2] || "Spawn";
    await bot.jump(cell, pad);
    return;
  }
  if (command.startsWith("/packet ")) {
    await bot.sendPacket(command.slice(8));
    return;
  }
  log("debug", `${command}: ${JSON.stringify(await bot.getGameObject(command)).slice(0, 3000)}`);
}

function isAutoRunning(kind: AutoKind): boolean {
  return Boolean(autoRuns[kind]);
}

async function startAuto(kind: AutoKind): Promise<void> {
  if (isAutoRunning(kind)) {
    log("event", `${autoLabel(kind)} is already running.`);
    renderOpenDropdown(false);
    return;
  }

  const bot = createBot(kind === "attack" ? "AutoAttack" : "AutoHunt");
  const snapshot = await bot.snapshot().catch((error) => {
    log("debug", `${autoLabel(kind)} start failed: ${describeUnknownError(error)}`);
    return undefined;
  });
  if (!snapshot?.loggedIn || !snapshot.map) {
    log("event", `${autoLabel(kind)} needs the game loaded and logged in.`);
    renderOpenDropdown(false);
    return;
  }

  const run: AutoRunState = {
    timer: 0,
    origin: autoOriginFromSnapshot(snapshot),
    busy: false
  };
  const tick = async () => {
    if (run.busy || autoRuns[kind] !== run) return;
    run.busy = true;
    try {
      await runAutoTick(kind, bot, run.origin);
    } catch (error) {
      log("debug", `${autoLabel(kind)}: ${describeUnknownError(error)}`);
    } finally {
      run.busy = false;
    }
  };

  run.timer = window.setInterval(() => void tick(), autoTickInterval());
  autoRuns[kind] = run;
  log("event", `${autoLabel(kind)} enabled at ${describeAutoOrigin(run.origin)}.`);
  renderOpenDropdown(false);
  publishState();
  void tick();
}

async function runAutoTick(kind: AutoKind, bot: BrowserFlashBot, origin: AutoOrigin): Promise<void> {
  const snapshot = await bot.snapshot();
  if (!snapshot.loggedIn) return;
  if (!snapshot.alive) {
    await bot.respawn();
    await returnToAutoOrigin(bot, origin);
    return;
  }

  if (kind === "hunt") await jumpToAutoHuntTarget(bot);

  if (pickerState["auto-mode"].value !== "Skills only") await bot.attack("*");
  await bot.useAvailableSkills();
}

async function jumpToAutoHuntTarget(bot: BrowserFlashBot): Promise<void> {
  const target = await findAutoMonsterPosition(bot, "*");
  if (!target) return;

  const snapshot = await bot.snapshot().catch(() => undefined);
  if (snapshot?.cell === target.cell && (!target.pad || target.pad === "Auto" || snapshot.pad === target.pad)) return;

  await bot.jump(target.cell, target.pad || "Auto");
  await sleep(250);
}

async function findAutoMonsterPosition(bot: BrowserFlashBot, monster: string | number): Promise<{ cell: string; pad: string } | undefined> {
  const records = recordsFrom(await bot.call<unknown>("getMonsters").catch(() => []))
    .map(asRecord)
    .filter((record) => Object.keys(record).length > 0);
  const targetId = typeof monster === "number" ? monster : 0;
  const targetName = typeof monster === "number" ? "" : (monster || "*").trim().toLowerCase();
  const candidates = records.filter((record) => {
    if (typeof monster === "number") {
      return numberFrom(record, ["MonMapID", "MapID", "monMapId", "MonID", "MonsterID", "id", "ID"]) === targetId;
    }
    const name = stringFrom(firstFrom(record, ["strMonName", "sName", "Name", "name"])).toLowerCase();
    return targetName === "*" || name.includes(targetName);
  });
  const aliveCandidates = candidates.filter((record) => numberFrom(record, ["intHP", "HP", "hp"]) > 0);
  aliveCandidates.sort(
    (a, b) =>
      numberFrom(a, ["intHP", "HP", "hp"]) - numberFrom(b, ["intHP", "HP", "hp"]) ||
      numberFrom(a, ["MonMapID", "MapID", "monMapId", "MonID", "MonsterID", "id", "ID"]) -
        numberFrom(b, ["MonMapID", "MapID", "monMapId", "MonID", "MonsterID", "id", "ID"])
  );

  const best = aliveCandidates[0];
  if (!best) return undefined;
  const cell = stringFrom(firstFrom(best, ["strFrame", "frame", "Frame", "cell", "Cell"])).trim();
  const pad = stringFrom(firstFrom(best, ["strPad", "pad", "Pad"]), "Auto").trim() || "Auto";
  return cell ? { cell, pad } : undefined;
}

async function returnToAutoOrigin(bot: BrowserFlashBot, origin: AutoOrigin): Promise<void> {
  const snapshot = await bot.snapshot().catch(() => undefined);
  if (snapshot && sameAutoOrigin(snapshot, origin)) return;

  log("event", `Returning to ${describeAutoOrigin(origin)} after respawn.`);
  await bot.joinExact(origin.targetMap, origin.cell, origin.pad);
  await sleep(500);
}

function stopAuto(kind: AutoKind): void {
  const run = autoRuns[kind];
  if (!run) return;
  window.clearInterval(run.timer);
  delete autoRuns[kind];
  renderOpenDropdown(false);
  publishState();
}

function autoOriginFromSnapshot(snapshot: PlayerSnapshot): AutoOrigin {
  const map = snapshot.map.trim();
  const room = Number.isFinite(snapshot.room) && snapshot.room > 0 ? Math.floor(snapshot.room) : 0;
  const targetMap = map && room > 0 && !/-\d+$/.test(map) ? `${map}-${room}` : map;
  return {
    map,
    room,
    targetMap,
    cell: snapshot.cell || "Enter",
    pad: snapshot.pad || "Spawn"
  };
}

function sameAutoOrigin(snapshot: PlayerSnapshot, origin: AutoOrigin): boolean {
  const sameMapName = snapshot.map.toLowerCase() === origin.map.toLowerCase();
  const sameRoom = origin.room <= 0 || snapshot.room === 0 || snapshot.room === origin.room;
  const sameCell = snapshot.cell === origin.cell;
  const samePad = !origin.pad || origin.pad === "Auto" || snapshot.pad === origin.pad;
  return sameMapName && sameRoom && sameCell && samePad;
}

function describeAutoOrigin(origin: AutoOrigin): string {
  return `${origin.targetMap || origin.map} ${origin.cell}/${origin.pad}`;
}

function autoLabel(kind: AutoKind): string {
  return kind === "attack" ? "Auto Attack" : "Auto Hunt";
}

function autoTickInterval(): number {
  return pickerState["auto-mode"].value === "Fast" ? 350 : 650;
}

function closeDropdown(): void {
  dropdownLayer.innerHTML = "";
  closeAllPickers();
  menuRibbon.innerHTML = "";
  menuRibbon.dataset.open = "false";
  delete menuRibbon.dataset.menu;
  document.documentElement.style.setProperty("--ribbon-height", "0px");
}

async function readJsonSetting(name: string): Promise<unknown> {
  return nativeApi()?.readJsonSetting?.(name);
}

async function writeJsonSetting(name: string, value: unknown): Promise<unknown> {
  return nativeApi()?.writeJsonSetting?.(name, value);
}

async function readBuilderScriptsSetting(): Promise<unknown> {
  const native = nativeApi();
  if (native?.readBuilderScripts) return native.readBuilderScripts();
  return readJsonSetting("builder-scripts");
}

async function readScriptPackScriptsSetting(): Promise<unknown> {
  const native = nativeApi();
  if (native?.readScriptPackScripts) return native.readScriptPackScripts();
  return readJsonSetting("script-pack-scripts");
}

async function writeBuilderScriptSetting(script: BuilderScript): Promise<unknown> {
  const normalized = normalizeBuilderScript(script);
  const native = nativeApi();
  if (native?.writeBuilderScript) return native.writeBuilderScript(normalized);
  return writeJsonSetting("builder-scripts", { scripts: builderScripts.map(normalizeBuilderScript) });
}

async function deleteBuilderScriptSetting(id: string): Promise<unknown> {
  const native = nativeApi();
  if (native?.deleteBuilderScript) return native.deleteBuilderScript(id);
  return writeJsonSetting("builder-scripts", { scripts: builderScripts.map(normalizeBuilderScript) });
}

async function openCurrentScriptInVsCode(): Promise<void> {
  const script = currentScript();
  if (!script) {
    log("event", "No script is loaded.");
    return;
  }
  const native = nativeApi();
  try {
    let result: unknown;
    if (script.category === "Builder") {
      const builderScript = builderScripts.find((item) => item.id === script.id);
      if (!builderScript) throw new Error(`Builder source is not loaded for ${script.meta.name}.`);
      if (!native?.openBuilderScriptInVsCode) throw new Error("Builder VS Code opener is unavailable.");
      result = await native.openBuilderScriptInVsCode(builderScript);
    } else if (isScriptPackScriptId(script.id)) {
      throw new Error("Official downloaded script packs are read-only.");
    } else {
      if (!native?.openScriptInVsCode) throw new Error("VS Code opener is unavailable.");
      result = await native.openScriptInVsCode(script.id);
    }
    const filePath = result && typeof result === "object" && "filePath" in result ? stringFrom((result as { filePath?: unknown }).filePath) : "";
    log("event", `Opened ${script.meta.name} in VS Code${filePath ? `: ${filePath}` : "."}`);
  } catch (error) {
    log("event", `Could not open VS Code: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function nativeApi(): {
  openScriptsFolder?: () => Promise<unknown>;
  readJsonSetting?: (name: string) => Promise<unknown>;
  writeJsonSetting?: (name: string, value: unknown) => Promise<unknown>;
  readBuilderScripts?: () => Promise<unknown>;
  writeBuilderScript?: (script: unknown) => Promise<unknown>;
  writeBuilderScripts?: (scripts: unknown[]) => Promise<unknown>;
  deleteBuilderScript?: (id: string) => Promise<unknown>;
  openBuilderScriptInVsCode?: (script: unknown) => Promise<unknown>;
  openScriptInVsCode?: (scriptId: string) => Promise<unknown>;
  listServers?: () => Promise<unknown>;
  showLauncher?: () => Promise<unknown>;
  showToolWindow?: (payload: { tool: string; section?: string; instanceId: string }) => Promise<unknown>;
  getLaunchPayload?: (launchId: string) => Promise<unknown>;
  readScriptPackScripts?: () => Promise<unknown>;
  onScriptPacksChanged?: (callback: (payload: unknown) => void) => () => void;
} | undefined {
  return (window as unknown as {
    veyraNative?: {
      openScriptsFolder?: () => Promise<unknown>;
      readJsonSetting?: (name: string) => Promise<unknown>;
      writeJsonSetting?: (name: string, value: unknown) => Promise<unknown>;
      readBuilderScripts?: () => Promise<unknown>;
      writeBuilderScript?: (script: unknown) => Promise<unknown>;
      writeBuilderScripts?: (scripts: unknown[]) => Promise<unknown>;
      deleteBuilderScript?: (id: string) => Promise<unknown>;
      openBuilderScriptInVsCode?: (script: unknown) => Promise<unknown>;
      openScriptInVsCode?: (scriptId: string) => Promise<unknown>;
      listServers?: () => Promise<unknown>;
      showLauncher?: () => Promise<unknown>;
      showToolWindow?: (payload: { tool: string; section?: string; instanceId: string }) => Promise<unknown>;
      getLaunchPayload?: (launchId: string) => Promise<unknown>;
      readScriptPackScripts?: () => Promise<unknown>;
      onScriptPacksChanged?: (callback: (payload: unknown) => void) => () => void;
    };
  }).veyraNative;
}

function createBot(label: string): BrowserFlashBot {
  return new BrowserFlashBot(getFlash, (message) => log("script", `[${label}] ${message}`), readPersistedGameOptions, ensureLauncherRelogin);
}

function installFlashCallbacks(): void {
  const target = window as unknown as Window & Record<string, (...args: unknown[]) => unknown>;

  target.requestLoadGame = (...args: unknown[]) => {
    logFlash("requestLoadGame", args);
    window.setTimeout(requestClientLoad, 150);
    return true;
  };

  target.debug = (...args: unknown[]) => {
    const [message] = flattenExternalArgs(args);
    const text = stringFrom(message);
    log("debug", `[flash] ${text}`);
    if (text.includes("World load check passed")) {
      markGameBridgeReady();
    }
    return true;
  };

  target["pre-load"] = (...args: unknown[]) => {
    logFlash("pre-load", args);
    setStatus("Downloading game client...");
    return true;
  };

  target.loaded = (...args: unknown[]) => {
    logFlash("loaded", args);
    setStatus(gameBridgeReady ? "Client loaded." : "Client loaded. Waiting for game API...");
    launchLoginReady = true;
    queueLaunchLogin(500);
    return true;
  };

  target.gameReady = (...args: unknown[]) => {
    logFlash("gameReady", args);
    markGameBridgeReady();
    return true;
  };

  target.packet = (...args: unknown[]) => logFlash("packet", args);
  target.packetFromServer = (...args: unknown[]) => logFlash("packetFromServer", args);
  target.pext = (...args: unknown[]) => logFlash("pext", args);

  target.openWebsite = (...args: unknown[]) => {
    const [url] = flattenExternalArgs(args);
    if (typeof url === "string") window.open(url, "_blank", "noopener,noreferrer");
    return true;
  };
}

function requestClientLoad(): void {
  if (clientLoadRequested) return;
  clientLoadRequested = true;
  gameBridgeReady = false;
  launchLoginReady = false;
  queuedGameOptionsApply = false;

  try {
    callFlash("loadClient");
    setStatus("Client load requested.");
    log("event", "Called Flash loadClient().");
  } catch (error) {
    clientLoadRequested = false;
    setStatus("Client load failed.");
    logError(error);
  }
}

function markGameBridgeReady(): void {
  if (gameBridgeReady) return;
  gameBridgeReady = true;
  launchLoginReady = true;
  setStatus("Client loaded.");
  const delay = queuedGameOptionsApply ? 150 : 300;
  queuedGameOptionsApply = false;
  window.setTimeout(() => {
    void applySavedGameOptions().catch((error) => log("debug", `Apply game options after ready: ${describeUnknownError(error)}`));
  }, delay);
  queueLaunchLogin(700);
}

async function autoLoadWhenReady(): Promise<void> {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (typeof flashEl.loadClient === "function") {
      requestClientLoad();
      return;
    }
    await sleep(250);
  }
  setStatus("Flash callback not ready.");
  log("debug", "The Flash plugin loaded, but the SWF did not expose loadClient().");
}

async function hydrateLaunchAccount(): Promise<void> {
  if (!launchId) return;
  const payload = await nativeApi()?.getLaunchPayload?.(launchId).catch((error) => {
    log("debug", `Launcher payload load failed: ${describeUnknownError(error)}`);
    return undefined;
  });
  const normalized = normalizeLaunchAccount(payload);
  if (!normalized) {
    log("event", "Launcher account payload was not found for this client.");
    return;
  }
  launchAccount = normalized;
  setStatus(`Launcher account queued: ${normalized.username}.`);
  log("event", `Launcher queued ${normalized.username}${normalized.server?.name ? ` for ${normalized.server.name}` : ""}.`);
  queueLaunchLogin(launchLoginReady || gameBridgeReady ? 300 : 0);
}

function queueLaunchLogin(delayMs: number): void {
  if (!launchAccount || (!launchLoginReady && !gameBridgeReady) || launchLoginStarted) return;
  if (launchLoginTimer !== undefined) window.clearTimeout(launchLoginTimer);
  launchLoginTimer = window.setTimeout(() => {
    launchLoginTimer = undefined;
    void loginLaunchAccount();
  }, delayMs);
}

async function ensureLauncherRelogin(signal?: AbortSignal): Promise<boolean> {
  const settings = await readPersistedGameOptions().catch(() => gameOptionsState);
  const autoReloginEnabled = settings.values["auto-relogin"] === true || Boolean(scriptAbort);
  if (!autoReloginEnabled) return false;
  if (!launchAccount) {
    log("script", "[Relogin] Auto relogin needs a launcher account.");
    return false;
  }
  if (reloginPromise) return reloginPromise;
  reloginPromise = reloginLaunchAccount(settings, signal).finally(() => {
    reloginPromise = undefined;
  });
  return reloginPromise;
}

async function reloginLaunchAccount(settings: GameOptionsState, signal?: AbortSignal): Promise<boolean> {
  const account = launchAccount;
  if (!account) return false;

  const bot = new BrowserFlashBot(getFlash, (message) => log("script", `[Relogin] ${message}`), readPersistedGameOptions);
  const tries = clampInteger(settings.values["relogin-tries"], 1, 10, 5);
  const reloginDelay = clampInteger(settings.values["relogin-try-delay"], 0, 30000, 800);
  const loginTimeout = clampInteger(settings.values["login-timeout"], 5000, 120000, 30000);
  const preferredServerName = cleanServerName(String(settings.values["relogin-server"] || account.server?.name || RELOGIN_SERVERS[0] || ""));
  const allowAnyServer = settings.values["auto-relogin-any"] === true || settings.values["retry-relogin"] !== false;
  const attemptedServers = new Set<string>();

  for (let attempt = 1; attempt <= tries; attempt += 1) {
    throwIfAborted(signal);
    const current = await bot.snapshot().catch(() => undefined);
    if (current?.loggedIn) return true;

    const servers = await fetchLivePacketServers().catch(() => []);
    const server = selectReloginServer(servers, preferredServerName, account.server ?? undefined, attemptedServers, allowAnyServer);
    const serverName = server?.name || preferredServerName || account.server?.name || "";
    if (server?.name) attemptedServers.add(server.name.toLowerCase());
    log("script", `[Relogin] Attempt ${attempt}/${tries}${serverName ? ` -> ${serverName}` : ""}.`);

    await bot.call("logout").catch(() => undefined);
    await abortableDelay(650, signal);
    await bot.call("setLoginCredentials", account.username, account.password).catch(() => undefined);
    await submitLaunchLogin(bot, account);

    const serverListReady = await waitForLaunchServerList(bot, Math.min(loginTimeout, 20000));
    if (serverListReady && serverName) {
      const clicked = await bot.call<unknown>("clickServer", serverName).catch(() => false);
      if (!booleanFrom(clicked) && server?.connectable) await bot.call("connectToServer", JSON.stringify(toFlashServer(server))).catch(() => undefined);
    } else if (server?.connectable) {
      await bot.call("connectToServer", JSON.stringify(toFlashServer(server))).catch(() => undefined);
    }

    if (await waitForReloginComplete(bot, loginTimeout, signal)) {
      log("script", `[Relogin] Connected${serverName ? ` to ${serverName}` : ""}.`);
      void applySavedGameOptions().catch((error) => log("debug", `Apply game options after relogin: ${describeUnknownError(error)}`));
      return true;
    }

    log("script", `[Relogin] Attempt ${attempt}/${tries} failed.`);
    if (attempt < tries && reloginDelay > 0) await abortableDelay(reloginDelay, signal);
  }

  log("script", "[Relogin] Unable to reconnect within configured retries.");
  return false;
}

function selectReloginServer(
  servers: GameServerInfo[],
  preferredName: string,
  accountServer: GameServerInfo | undefined,
  attemptedServers: Set<string>,
  allowAnyServer: boolean
): GameServerInfo | undefined {
  const eligible = servers.filter((server) => {
    if (server.online === false) return false;
    if (/class test realm/i.test(server.name)) return false;
    if (server.max && server.count && server.count >= server.max) return false;
    return true;
  });
  const findServer = (name: string): GameServerInfo | undefined => {
    const cleaned = cleanServerName(name);
    if (!cleaned) return undefined;
    return eligible.find((server) => sameServerName(server.name, cleaned) && !attemptedServers.has(server.name.toLowerCase()));
  };

  return (
    findServer(preferredName) ||
    findServer(accountServer?.name || "") ||
    (allowAnyServer ? eligible.find((server) => !attemptedServers.has(server.name.toLowerCase())) : undefined) ||
    accountServer
  );
}

async function waitForReloginComplete(bot: BrowserFlashBot, timeoutMs: number, signal?: AbortSignal): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    throwIfAborted(signal);
    const snapshot = await bot.snapshot().catch(() => undefined);
    if (snapshot?.loggedIn && snapshot.mapLoaded !== false && snapshot.mapLoading !== true) return true;
    await abortableDelay(750, signal);
  }
  return false;
}

async function abortableDelay(ms: number, signal?: AbortSignal): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        window.clearTimeout(timeout);
        reject(signal.reason instanceof Error ? signal.reason : new Error(String(signal.reason ?? "Cancelled.")));
      },
      { once: true }
    );
  });
}

function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error(String(signal.reason ?? "Cancelled."));
}

function clampInteger(value: unknown, min: number, max: number, fallback: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.floor(parsed)));
}

async function loginLaunchAccount(): Promise<void> {
  if (!launchAccount || launchLoginStarted) return;
  launchLoginStarted = true;
  if (launchLoginTimer !== undefined) {
    window.clearTimeout(launchLoginTimer);
    launchLoginTimer = undefined;
  }
  const account = launchAccount;
  const bot = createBot("Launcher");

  for (let attempt = 1; attempt <= 60; attempt += 1) {
    try {
      await bot.call("setLoginCredentials", account.username, account.password).catch(() => undefined);
      await submitLaunchLogin(bot, account);
      log("event", `Login submitted for ${account.username}.`);
      if (account.server) {
        await connectLaunchServer(bot, account.server);
      }
      return;
    } catch (error) {
      if (attempt === 60) log("event", `Launcher login failed: ${describeUnknownError(error)}.`);
    }
    await sleep(500);
  }

  log("event", `Launcher could not submit login for ${account.username}; leave the client open and retry manually.`);
}

async function submitLaunchLogin(bot: BrowserFlashBot, account: LaunchAccountPayload): Promise<void> {
  try {
    await bot.callGameFunction<unknown>("login", account.username, account.password);
    return;
  } catch (error) {
    const fallback = await bot.call<unknown>("login", account.username, account.password).catch(() => false);
    if (!booleanFrom(fallback)) throw error;
  }
}

async function connectLaunchServer(bot: BrowserFlashBot, server: GameServerInfo): Promise<void> {
  const ready = await waitForLaunchServerList(bot, 15000);
  if (ready && server.name) {
    const clicked = await bot.call<unknown>("clickServer", server.name).catch(() => false);
    if (booleanFrom(clicked)) {
      log("event", `Clicked ${server.name} from launcher server list.`);
      return;
    }
  }

  await bot.call("connectToServer", JSON.stringify(toFlashServer(server)));
  log("event", `Requested ${server.name} from launcher.`);
}

async function waitForLaunchServerList(bot: BrowserFlashBot, timeoutMs: number): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const [loginVisible, serverListMissing, serverEntries] = await Promise.all([
      bot.getGameObject<unknown>("mcLogin.visible").catch(() => false),
      bot.call<unknown>("isNull", "mcLogin.sl.iList").catch(() => true),
      bot.getGameObject<unknown>("mcLogin.sl.iList.numChildren").catch(() => 0)
    ]);
    if (booleanFrom(loginVisible) && !booleanFrom(serverListMissing) && Number(serverEntries) > 0) return true;
    await sleep(250);
  }
  return false;
}

function normalizeLaunchAccount(value: unknown): LaunchAccountPayload | undefined {
  const record = asRecord(value);
  const username = stringFrom(record.username);
  const password = stringFrom(record.password);
  if (!username || !password) return undefined;
  const serverRecord = asRecord(record.server);
  return {
    id: stringFrom(record.id),
    username,
    password,
    label: stringFrom(record.label),
    server: serverRecord.name || serverRecord.sName ? normalizeGameServers([serverRecord])[0] ?? null : null
  };
}

function toFlashServer(server: GameServerInfo): Record<string, unknown> {
  const raw = { ...(server.raw || {}) };
  const name = cleanServerName(stringFrom(firstFrom(raw, ["sName", "name", "Name"]), server.name));
  raw.sName = name;
  raw.sIP = stringFrom(firstFrom(raw, ["sIP", "ip", "IP"]), server.ip ?? "");
  raw.iPort = numberFrom(raw, ["iPort", "port", "Port"]) || server.port || 5588;
  raw.iCount = numberFrom(raw, ["iCount", "count", "playerCount", "PlayerCount"]) || server.playerCount || server.count || 0;
  raw.iMax = numberFrom(raw, ["iMax", "max", "maxPlayers", "MaxPlayers"]) || server.maxPlayers || server.max || 0;
  raw.bOnline = booleanFrom(firstFrom(raw, ["bOnline", "online", "Online"]) ?? server.online ?? true) ? 1 : 0;
  raw.bUpg = booleanFrom(firstFrom(raw, ["bUpg", "upgrade", "Upgrade"]) ?? server.upgrade ?? false) ? 1 : 0;
  raw.sLang = stringFrom(firstFrom(raw, ["sLang", "language", "Language"]), server.language ?? "");
  raw.iChat = numberFrom(raw, ["iChat", "chat", "Chat"]) || server.chat || 0;
  raw.iLevel = numberFrom(raw, ["iLevel", "level", "Level"]) || server.level || 0;
  return raw;
}

function callFlash<T>(name: string, ...args: unknown[]): T {
  const fn = getFlash()[name];
  if (typeof fn !== "function") throw new Error(`Flash callback is unavailable: ${name}`);
  return fn.apply(flashEl, args) as T;
}

function getFlash(): FlashEmbed {
  if (!flashEl) throw new Error("Flash embed is missing.");
  return flashEl;
}

function mountFlashObject(url: string): FlashEmbed {
  gameHost.textContent = "";

  const object = document.createElement("object") as FlashEmbed;
  object.id = "flash-game";
  object.type = "application/x-shockwave-flash";
  object.data = url;
  object.width = "100%";
  object.height = "100%";
  object.setAttribute("allowScriptAccess", "always");
  object.setAttribute("allowNetworking", "all");

  addParam(object, "movie", url);
  addParam(object, "allowScriptAccess", "always");
  addParam(object, "allowNetworking", "all");
  addParam(object, "wmode", "opaque");
  addParam(object, "quality", "high");
  addParam(object, "menu", "false");
  addParam(object, "flashvars", `sURL=${encodeURIComponent(gameBase)}&loaderMode=artix`);

  gameHost.append(object);
  return object;
}

function addParam(object: HTMLObjectElement, name: string, value: string): void {
  const param = document.createElement("param");
  param.name = name;
  param.value = value;
  object.append(param);
}

function setActiveLog(kind: LogKind): void {
  activeLog = kind;
  document.querySelectorAll(".console-tab").forEach((el) => el.classList.toggle("active", (el as HTMLElement).dataset.log === kind));
  renderLog(true);
}

function setStatus(message: string): void {
  statusEl.textContent = message;
  toolBus.postMessage({ type: "status", status: message });
}

function log(kind: LogKind, message: string): void {
  const stamp = new Date().toLocaleTimeString([], { hour12: false });
  const line = `[${stamp}] ${message}`;
  logs[kind].push(line);
  if (logs[kind].length > 600) logs[kind].splice(0, logs[kind].length - 600);
  if (activeLog === kind) renderLog();
  toolBus.postMessage({ type: "log", kind, line, logs: logs[kind].slice(-200) });
}

function renderLog(forceBottom = false): void {
  const previousScrollTop = logEl.scrollTop;
  const shouldStickToBottom = forceBottom || isScrolledNearBottom(logEl);
  logEl.textContent = logs[activeLog].join("\n");
  logEl.scrollTop = shouldStickToBottom ? logEl.scrollHeight : previousScrollTop;
}

function isScrolledNearBottom(element: HTMLElement): boolean {
  const distanceFromBottom = element.scrollHeight - element.clientHeight - element.scrollTop;
  return distanceFromBottom <= 12;
}

function saveActiveLog(): void {
  const blob = new Blob([logs[activeLog].join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `veyra-${activeLog}-${new Date().toISOString().replace(/[:.]/g, "-")}.log`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function logError(error: unknown): void {
  log("debug", describeUnknownError(error));
}

function describeUnknownError(error: unknown): string {
  if (error instanceof Error) return error.message ? `${error.name}: ${error.message}` : error.name;
  if (typeof error === "string") return error;
  if (error === null) return "null";
  if (error === undefined) return "undefined";
  try {
    return JSON.stringify(error);
  } catch {
    return Object.prototype.toString.call(error);
  }
}

function logFlash(name: string, args: unknown[]): true {
  const flattened = flattenExternalArgs(args);
  const formatted = flattened.map(formatArg).join(" ");
  const message = `[flash:${name}]${formatted ? ` ${formatted}` : ""}`;
  log(name.toLowerCase().includes("packet") || name === "pext" ? "packet" : "debug", message);
  return true;
}

function flattenExternalArgs(args: unknown[]): unknown[] {
  if (args.length === 1 && Array.isArray(args[0])) return args[0] as unknown[];
  return args;
}

function formatArg(value: unknown): string {
  if (typeof value === "string") return value.length > 260 ? `${value.slice(0, 260)}...` : value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function parseMaybeJson<T = unknown>(value: unknown): T {
  if (typeof value !== "string") return value as T;
  try {
    return JSON.parse(value) as T;
  } catch {
    return value as T;
  }
}

function reportDropAction(label: string, raw: unknown): void {
  const parsed = parseMaybeJson<unknown>(raw);
  let acted = 0;

  if (typeof parsed === "number") {
    acted = parsed;
  } else if (typeof parsed === "string") {
    acted = Number(parsed);
  } else if (parsed && typeof parsed === "object") {
    acted = Number((parsed as Record<string, unknown>).acted ?? 0);
  }

  if (Number.isFinite(acted) && acted > 0) {
    log("event", `${label} ${acted} drop${acted === 1 ? "" : "s"}.`);
  }
}

function findFlashPluginName(): string {
  for (const plugin of Array.from(navigator.plugins)) {
    if (/shockwave flash|pepper flash|flash/i.test(plugin.name)) return plugin.name;
  }
  return "";
}

async function sleep(ms: number): Promise<void> {
  await new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

function publishState(): void {
  toolBus.postMessage({
    type: "state",
    status: statusEl.textContent ?? "",
    scripts: scripts.map((script) => ({
      id: script.id,
      category: script.category,
      map: script.map,
      meta: script.meta
    })),
    selectedScriptId,
    loadedScriptId,
    builderScripts: builderScripts.map(normalizeBuilderScript),
    running: Boolean(scriptAbort),
    armyRole,
    armySettings,
    theme: activeTheme,
    gameOptions: gameOptionsState,
    logs: {
      script: logs.script.slice(-200),
      debug: logs.debug.slice(-200),
      packet: logs.packet.slice(-200),
      event: logs.event.slice(-200)
    }
  });
}

function isLogKind(value: unknown): value is LogKind {
  return value === "script" || value === "debug" || value === "packet" || value === "event";
}

function isGameOptionsState(value: unknown): value is GameOptionsState {
  const candidate = value as GameOptionsState;
  return Boolean(candidate && typeof candidate === "object" && typeof candidate.columns === "number" && candidate.values && typeof candidate.values === "object");
}

function byId<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element: ${id}`);
  return el as T;
}

function escapeHtml(value: unknown): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value: unknown): string {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function uniqueStrings(values: string[]): string[] {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}

function withSignal<T extends object>(options: T, signal: AbortSignal | undefined): T & { signal?: AbortSignal } {
  return signal ? { ...options, signal } : options;
}
