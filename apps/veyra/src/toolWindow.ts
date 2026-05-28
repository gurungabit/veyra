import {
  GAME_OPTION_DEFS,
  RELOGIN_SERVERS,
  clampColumns,
  coerceGameOptionValue,
  createDefaultGameOptionsState,
  readGameOptionsState,
  normalizeGameOptionsState,
  writeGameOptionsState,
  type GameOptionDef,
  type GameOptionValue,
  type GameOptionsState
} from "./gameOptions.js";
import {
  builderActionTitle,
  conditionTitle,
  createDefaultBuilderScript,
  newBuilderAction,
  normalizeBuilderScript,
  normalizeBuilderScripts,
  type BuilderAction,
  type BuilderActionKind,
  type BuilderCondition,
  type BuilderConditionKind,
  type BuilderScript
} from "./builderScripts.js";

type LogKind = "script" | "debug" | "packet" | "event";

interface ToolScript {
  id: string;
  category: string;
  map: string;
  meta: {
    name: string;
    description: string;
    tags: string[];
    version: string;
  };
}

interface ToolState {
  status: string;
  scripts: ToolScript[];
  selectedScriptId: string;
  loadedScriptId: string;
  builderScripts?: BuilderScript[];
  running: boolean;
  theme?: string;
  gameOptions?: GameOptionsState;
  logs: Record<LogKind, string[]>;
}

interface BuilderContext {
  snapshot?: {
    loggedIn?: boolean;
    username?: string;
    map?: string;
    cell?: string;
    pad?: string;
    room?: number;
    level?: number;
  };
  cells: string[];
  pads: string[];
  cellMonsters: Record<string, unknown>[];
  mapMonsters: Record<string, unknown>[];
  quests: Record<string, unknown>[];
  refreshedAt?: string;
}

type BuilderLocationField = "cell" | "pad";

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

interface RuntimeSettings {
  drops: string[];
  interval: number;
  rejectElse: boolean;
  acceptAC: boolean;
  pickDrops: boolean;
  quests: Array<{ questId: number; rewardId: number }>;
  boosts: {
    enabled: boolean;
    class: boolean;
    gold: boolean;
    experience: boolean;
    reputation: boolean;
    ids: Record<"class" | "gold" | "experience" | "reputation", number>;
  };
}

interface FastTravelItem {
  descriptionName: string;
  mapName: string;
  cell: string;
  pad: string;
}

interface FastTravelSettings {
  privateRooms: boolean;
  privateNumber: number;
  items: FastTravelItem[];
}

interface PacketInterceptorSettings {
  connected: boolean;
  server: string;
  logPackets: boolean;
  search: string;
  filterSearch: string;
  filters: Record<string, boolean>;
}

interface PacketServerOption {
  name: string;
  label: string;
  count?: number;
  max?: number;
  online?: boolean;
  connectable: boolean;
  raw?: Record<string, unknown>;
  refreshedAt?: string;
}

const params = new URLSearchParams(window.location.search);
const tool = params.get("tool") || "advanced";
const section = params.get("section") || "";
const requestedBuilderScriptId = params.get("script") || "";
const bus = new BroadcastChannel("veyra-tools");
const root = byId<HTMLElement>("tool-root");
const title = byId<HTMLElement>("tool-title");
const statusText = byId<HTMLElement>("tool-status");

let state: ToolState = {
  status: "Connecting to Veyra...",
  scripts: [],
  selectedScriptId: "",
  loadedScriptId: "",
  running: false,
  logs: { script: [], debug: [], packet: [], event: [] }
};
let activeLog: LogKind = "script";
let activeGrabberType: GrabberType = "inventory";
let grabberItems: Record<string, unknown>[] = [];
let selectedGrabberIndex = 0;
let grabberSearch = "";
let grabberListScrollTop = 0;
let scriptPickerListScrollTop = 0;
let junkItems: string[] = [];
let gameOptionSearch = "";
let gameOptionsDraft: GameOptionsState | undefined;
let activeTheme = "veyra-dark";
let runtimeSettings: RuntimeSettings = defaultRuntimeSettings();
let fastTravelSettings: FastTravelSettings = defaultFastTravelSettings();
let packetInterceptorSettings: PacketInterceptorSettings = defaultPacketInterceptorSettings();
let packetInterceptorServers: PacketServerOption[] = [];
let packetInterceptorServersRequested = false;
let packetInterceptorStatus: "idle" | "connecting" | "connected" | "failed" = "idle";
let packetInterceptorMessage = "";
let currentDrops: Record<string, unknown>[] = [];
let scriptPickerSearch = "";
let scriptOptionsOpen = false;
let builderScripts: BuilderScript[] = [];
let builderDraft: BuilderScript = createDefaultBuilderScript();
let builderSelectedPath = "0";
let builderAddTarget: "main" | "child" | "else" = "main";
let builderHydrated = false;
let builderRunPending = false;
let builderScrollState = { meta: 0, flow: 0, inspector: 0 };
let builderLiveSectionState: Record<"cells" | "monsters" | "quests", boolean> = { cells: true, monsters: true, quests: true };
let builderContextScrollState: Record<"monsters" | "quests", number> = { monsters: 0, quests: 0 };
let builderDragPath = "";
let builderContextRequested = false;
let builderOpenLocationPicker: BuilderLocationField | "" = "";
let builderPendingCurrentField: BuilderLocationField | "" = "";
let builderPendingCurrentPath = "";
let builderContext: BuilderContext = {
  cells: [],
  pads: [],
  cellMonsters: [],
  mapMonsters: [],
  quests: []
};

document.body.dataset.tool = tool;
document.body.dataset.section = section;
applyTheme(activeTheme);
if (tool === "builder") {
  root.addEventListener("click", rememberBuilderScroll, true);
  root.addEventListener("change", rememberBuilderScroll, true);
}
void hydrateThemeFromFile();
void hydrateJunkItemsFromFile();
void hydrateRuntimeSettingsFromFile();
void hydrateFastTravelSettingsFromFile();
void hydratePacketInterceptorSettingsFromFile();
void hydrateBuilderScriptsFromFile();
title.textContent = titleFor(tool, section);
document.title = `${titleFor(tool, section)} - Veyra`;
resizeSelf();
void hydrateGameOptionsDraftFromJson();
render();
command("request-state");

bus.onmessage = (event: MessageEvent<unknown>) => {
  const message = event.data as {
    type?: string;
    status?: string;
    kind?: LogKind;
    logs?: string[] | Record<LogKind, string[]>;
    line?: string;
    theme?: string;
    gameOptions?: GameOptionsState;
    grabType?: GrabberType;
    items?: Record<string, unknown>[];
    context?: BuilderContext;
    servers?: PacketServerOption[];
    connected?: boolean;
    message?: string;
  };
  if (message?.type === "state" && isToolState(message)) {
    state = message;
    if (tool === "builder" && state.running) builderRunPending = false;
    applyTheme(state.theme || activeTheme);
    if (state.gameOptions) gameOptionsDraft = normalizeGameOptionsState(state.gameOptions);
    if (Array.isArray(state.builderScripts)) syncBuilderScriptsFromState(state.builderScripts);
    render();
    return;
  }
  if (message?.type === "theme" && typeof message.theme === "string") {
    applyTheme(message.theme);
    return;
  }
  if (message?.type === "grabber-data" && isGrabberType(message.grabType) && Array.isArray(message.items)) {
    activeGrabberType = message.grabType;
    grabberItems = message.items;
    selectedGrabberIndex = Math.min(selectedGrabberIndex, Math.max(0, grabberItems.length - 1));
    if (tool === "tools" && section === "grabber") renderTools();
    if (tool === "tools" && section === "loader") renderTools();
    return;
  }
  if (message?.type === "current-drops-data" && Array.isArray(message.items)) {
    currentDrops = message.items;
    if (tool === "helpers" && section === "current-drops") renderHelpers();
    return;
  }
  if (message?.type === "builder-context-data" && message.context) {
    builderContext = normalizeBuilderContext(message.context);
    builderContextRequested = true;
    applyPendingBuilderCurrent();
    if (tool === "builder") renderBuilder();
    return;
  }
  if (message?.type === "packet-server-list" && Array.isArray(message.servers)) {
    packetInterceptorServers = normalizePacketServerOptions(message.servers);
    const selected = cleanServerName(packetInterceptorSettings.server);
    if (packetInterceptorServers.length > 0 && !packetInterceptorServers.some((server) => sameServerName(server.name, selected))) {
      packetInterceptorSettings.server = packetInterceptorServers[0]?.name ?? selected;
      void writePacketInterceptorSettings();
    }
    if (tool === "packets" && section === "packet-interceptor") renderPackets();
    return;
  }
  if (message?.type === "packet-interceptor-connection" && typeof message.connected === "boolean") {
    packetInterceptorSettings.connected = message.connected;
    packetInterceptorStatus = isPacketConnectionStatus(message.status) ? message.status : message.connected ? "connected" : "idle";
    packetInterceptorMessage = typeof message.message === "string" ? message.message : "";
    void writePacketInterceptorSettings();
    if (tool === "packets" && section === "packet-interceptor") renderPackets();
    return;
  }
  if (message?.type === "status" && typeof message.status === "string") {
    state.status = message.status;
    statusText.textContent = state.status;
    if (tool === "builder" && (message.status.startsWith("Running ") || message.status.endsWith(" failed.") || message.status.endsWith(" stopped.") || message.status.endsWith(" completed."))) {
      builderRunPending = false;
      renderBuilder();
    }
    return;
  }
  if (message?.type === "log" && isLogKind(message.kind) && Array.isArray(message.logs)) {
    state.logs[message.kind] = message.logs;
    if (tool === "logs" || tool === "scripts") renderLogBox();
    if (tool === "packets" && section === "packet-interceptor" && message.kind === "packet") renderPacketRows();
    if (tool === "packets" && section === "packet-logger" && message.kind === "packet") renderLogBox();
  }
};

function render(): void {
  statusText.textContent = state.status;
  if (tool === "scripts") renderScripts();
  else if (tool === "skills") renderSkills();
  else if (tool === "packets") renderPackets();
  else if (tool === "bank") renderBank();
  else if (tool === "logs") renderLogs();
  else if (tool === "plugins") renderPlugins();
  else if (tool === "options") renderOptions();
  else if (tool === "helpers") renderHelpers();
  else if (tool === "tools") renderTools();
  else if (tool === "builder") renderBuilder();
  else renderAdvanced();
}

function renderScripts(): void {
  const selected = state.selectedScriptId || state.loadedScriptId || state.scripts[0]?.id || "";
  const loaded = state.loadedScriptId ? `${scriptName(state.loadedScriptId)} Loaded` : "No Script Loaded";
  root.innerHTML = `
    <section class="drawer-section script-loader-card">
      <div class="loader-status"><span>Status</span><strong>${escapeHtml(loaded)}</strong></div>
      <div class="script-picker">
        <label class="field">
          <span>Find Script</span>
          <input id="script-picker-search" class="input" type="search" value="${escapeAttr(scriptPickerSearch)}" placeholder="Search scripts, tags, maps..." autocomplete="off" />
        </label>
        <div class="script-picker-list" id="script-picker-list" role="listbox">
          ${scriptPickerItemsHtml(scriptPickerSearch, selected)}
        </div>
      </div>
      <div class="button-grid two">
        <button data-command="edit-script" type="button">Edit Script</button>
        <button data-command="edit-script-vscode" type="button">Edit in VS Code</button>
        <button data-command="open-repo" type="button">Refresh List</button>
        <button data-command="open-builder" type="button">Script Builder</button>
      </div>
      <button data-command="script-options" type="button">${scriptOptionsOpen ? "Hide Options" : "Edit Options"}</button>
      ${scriptOptionsOpen ? scriptOptionsPanelHtml() : ""}
      <button data-command="start-script" class="primary" type="button"${state.running ? " disabled" : ""}>Start Script</button>
      <button data-command="stop-script" type="button"${state.running ? "" : " disabled"}>Stop Script</button>
      <div class="mini-log" id="tool-log"></div>
      <div class="button-grid three">
        <button data-command="clear-script-log" type="button">Clear</button>
        <button data-command="copy-script-log" type="button">Copy</button>
        <button data-command="save-script-log" type="button">Save</button>
      </div>
    </section>`;

  const input = byId<HTMLInputElement>("script-picker-search");
  const list = byId<HTMLElement>("script-picker-list");
  input.addEventListener("input", () => {
    scriptPickerSearch = input.value;
    scriptPickerListScrollTop = 0;
    list.innerHTML = scriptPickerItemsHtml(scriptPickerSearch, state.selectedScriptId || state.loadedScriptId);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const first = list.querySelector<HTMLButtonElement>("[data-script-picker]");
    if (first) first.click();
  });
  list.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-script-picker]");
    if (!button) return;
    rememberScriptPickerScroll();
    const id = button.dataset.scriptPicker || "";
    command("select-script", { id });
    command("load-script", { id });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-command]").forEach((button) => {
    button.addEventListener("click", () => handleToolButton(button.dataset.command || ""));
  });
  bindScriptOptionsPanel();
  renderLogBox();
  restoreScriptPickerScroll();
}

function scriptPickerItemsHtml(query: string, selected: string): string {
  const normalized = query.trim().toLowerCase();
  const matches = state.scripts.filter((script) => {
    const haystack = `${script.category} ${script.map} ${script.meta.name} ${script.meta.description} ${script.meta.tags.join(" ")}`.toLowerCase();
    return !normalized || haystack.includes(normalized);
  });

  if (matches.length === 0) {
    return `<div class="tool-note">No matching scripts.</div>`;
  }

  return matches
    .map((script) => {
      const active = script.id === selected ? "active" : "";
      return `
        <button class="script-picker-row ${active}" data-script-picker="${escapeAttr(script.id)}" type="button" role="option">
          <strong>${escapeHtml(script.category)} / ${escapeHtml(script.meta.name)}</strong>
          <span>${escapeHtml(script.meta.description)}</span>
          <em>${escapeHtml(script.map)}</em>
        </button>`;
    })
    .join("");
}

function scriptOptionsPanelHtml(): string {
  const options = getGameOptionsDraft();
  const privateRooms = options.values["private-rooms"] === true;
  const privateNumber = Number(options.values["private-number"] || 100000);
  return `
    <section class="script-options-card">
      <div class="script-options-heading">
        <strong>Script Options</strong>
        <button data-command="script-options-close" type="button">Close</button>
      </div>
      <label class="check"><input id="script-private-rooms" type="checkbox"${privateRooms ? " checked" : ""} /> Private rooms</label>
      <label class="field"><span>Private Number</span><input id="script-private-number" class="input" type="number" min="1" value="${Number.isFinite(privateNumber) && privateNumber > 0 ? privateNumber : 100000}" /></label>
      <p class="muted">These are saved to the same game-options file used by script joins.</p>
    </section>`;
}

function renderBuilder(): void {
  const selectedAction = getBuilderAction(builderSelectedPath);
  root.innerHTML = `
    <section class="builder-shell">
      <section class="builder-command-bar">
        <div class="builder-command-title">
          <strong>${escapeHtml(builderDraft.name || "Untitled Builder Script")}</strong>
          <span>${builderDraft.actions.length} step${builderDraft.actions.length === 1 ? "" : "s"} in this flow</span>
        </div>
        <div class="builder-command-actions">
          <button data-builder-new type="button">New</button>
          <button data-builder-save type="button">Save</button>
          <button data-builder-vscode type="button">Edit in VS Code</button>
          <button data-builder-run type="button" class="primary"${state.running || builderRunPending ? " disabled" : ""}>${builderRunPending ? "Starting..." : "Run Now"}</button>
          <button data-builder-stop type="button" class="danger"${state.running || builderRunPending ? "" : " disabled"}>Stop</button>
          <button data-builder-delete type="button" class="danger">Delete</button>
        </div>
      </section>
      <aside class="builder-pane builder-meta">
        <div class="builder-title-row">
          <h2>Script</h2>
        </div>
        <label class="field"><span>Saved Scripts</span><select id="builder-script-choice">
          ${builderScripts.map((script) => `<option value="${escapeAttr(script.id)}"${script.id === builderDraft.id ? " selected" : ""}>${escapeHtml(script.name)}</option>`).join("")}
          ${builderScripts.length === 0 ? `<option value="">No saved builder scripts</option>` : ""}
        </select></label>
        <label class="field"><span>Name</span><input id="builder-name" class="input" value="${escapeAttr(builderDraft.name)}" /></label>
        <label class="field"><span>Description</span><input id="builder-description" class="input" value="${escapeAttr(builderDraft.description)}" /></label>
        <div class="builder-two">
          <label class="field"><span>Map Tag</span><input id="builder-map" class="input" value="${escapeAttr(builderDraft.map)}" /></label>
          <label class="field"><span>Tags</span><input id="builder-tags" class="input" value="${escapeAttr(builderDraft.tags.join(", "))}" /></label>
        </div>
        <div class="builder-divider"></div>
        ${builderLiveContextHtml()}
        <div class="builder-divider"></div>
        <div class="builder-section-label">Add Step</div>
        <label class="field"><span>Target</span><select id="builder-add-target">
          <option value="main"${builderAddTarget === "main" ? " selected" : ""}>End of script</option>
          <option value="child"${builderAddTarget === "child" ? " selected" : ""}${selectedAction && canHaveChildActions(selectedAction) ? "" : " disabled"}>${selectedAction?.kind === "if" ? "Then branch of selected If" : "Inside selected block"}</option>
          <option value="else"${builderAddTarget === "else" ? " selected" : ""}${selectedAction?.kind === "if" ? "" : " disabled"}>Else branch of selected If</option>
        </select></label>
        <div class="builder-palette">
          ${builderPaletteButton("join", "Join")}
          ${builderPaletteButton("jump", "Jump")}
          ${builderPaletteButton("walk", "Walk")}
          ${builderPaletteButton("hunt", "Hunt")}
          ${builderPaletteButton("huntForItem", "Hunt Item")}
          ${builderPaletteButton("getMapItem", "Map Item")}
          ${builderPaletteButton("buyItem", "Buy Item")}
          ${builderPaletteButton("acceptQuest", "Accept Quest")}
          ${builderPaletteButton("completeQuest", "Complete Quest")}
          ${builderPaletteButton("pickupDrop", "Pickup Drop")}
          ${builderPaletteButton("wait", "Wait")}
          ${builderPaletteButton("log", "Log")}
          ${builderPaletteButton("sendPacket", "Packet")}
          ${builderPaletteButton("checkQuestUnlocked", "Check Quest")}
          ${builderPaletteButton("breakLoop", "Break Loop")}
          ${builderPaletteButton("breakIfQuestUnlocked", "Break If Quest")}
          ${builderPaletteButton("if", "If / Else")}
          ${builderPaletteButton("repeat", "Repeat")}
          ${builderPaletteButton("while", "While")}
        </div>
      </aside>
      <section class="builder-pane builder-flow">
        <div class="builder-title-row">
          <h2>Flow</h2>
          <div class="builder-inline-actions">
            <button data-builder-move="up" type="button"${selectedAction ? "" : " disabled"}>Move Up</button>
            <button data-builder-move="down" type="button"${selectedAction ? "" : " disabled"}>Move Down</button>
            <button data-builder-duplicate type="button"${selectedAction ? "" : " disabled"}>Duplicate</button>
            <button data-builder-remove type="button"${selectedAction ? "" : " disabled"}>Remove</button>
          </div>
        </div>
        <div class="builder-action-list">
          ${builderActionsHtml(builderDraft.actions)}
        </div>
      </section>
      <aside class="builder-pane builder-inspector">
        ${selectedAction ? builderInspectorHtml(selectedAction) : `<h2>Step Settings</h2><p class="muted">Select a step to edit it.</p>`}
      </aside>
    </section>`;

  bindBuilder();
  ensureBuilderContext();
  restoreBuilderScroll();
}

function builderLiveContextHtml(): string {
  const snapshot = builderContext.snapshot;
  const map = snapshot?.map || "No map yet";
  const cell = snapshot?.cell || "Enter";
  const pad = snapshot?.pad || "Spawn";
  const room = snapshot?.room ? `Room ${snapshot.room}` : "Room ?";
  const cells = uniqueToolStrings([cell, ...builderContext.cells]).slice(0, 14);
  const monsters = monsterPlacementRows([...builderContext.cellMonsters, ...builderContext.mapMonsters], 18);
  const quests = uniqueGrabberRows(builderContext.quests, 8);
  return `
    <section class="builder-live-card">
      <div class="builder-live-head">
        <span>Live Map</span>
        <button data-builder-context-refresh type="button">Refresh</button>
      </div>
      <div class="builder-live-location">
        <strong>${escapeHtml(map)}</strong>
        <small>${escapeHtml(cell)} / ${escapeHtml(pad)} - ${escapeHtml(room)}${builderContext.refreshedAt ? ` - ${escapeHtml(builderContext.refreshedAt)}` : ""}</small>
      </div>
      <div class="builder-live-actions">
        <button data-builder-context-add="join-current" type="button"${snapshot?.map ? "" : " disabled"}>Add Join</button>
        <button data-builder-context-add="jump-current" type="button"${snapshot?.cell ? "" : " disabled"}>Add Jump</button>
      </div>
      <details class="builder-live-section" data-builder-live-section="cells"${builderLiveSectionState.cells ? " open" : ""}>
        <summary>Rooms / Cells</summary>
        <div class="builder-pill-list">
          ${cells.map((item) => `<button data-builder-context-cell="${escapeAttr(item)}" type="button">${escapeHtml(item)}</button>`).join("") || `<span>No cells loaded.</span>`}
        </div>
      </details>
      <details class="builder-live-section" data-builder-live-section="monsters"${builderLiveSectionState.monsters ? " open" : ""}>
        <summary>Monsters</summary>
        <div class="builder-context-list" data-builder-context-list="monsters">
          ${monsters.map((item, index) => builderContextRowHtml("monster", item, index)).join("") || `<div class="builder-context-empty">No monsters found in this map yet.</div>`}
        </div>
      </details>
      <details class="builder-live-section" data-builder-live-section="quests"${builderLiveSectionState.quests ? " open" : ""}>
        <summary>Quests</summary>
        <div class="builder-context-list" data-builder-context-list="quests">
          ${quests.map((item, index) => builderContextRowHtml("quest", item, index)).join("") || `<div class="builder-context-empty">Open/load quests, then refresh.</div>`}
        </div>
      </details>
    </section>`;
}

function builderContextRowHtml(kind: "monster" | "quest", item: Record<string, unknown>, index: number): string {
  const id = Number(item.id ?? 0);
  const name = String(item.name ?? (kind === "monster" ? "Monster" : "Quest"));
  const detail = String(item.detail ?? "");
  if (kind === "monster") {
    return `
      <div class="builder-context-row">
        <span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(detail)}</small></span>
        <button data-builder-context-monster="${index}" type="button">Hunt</button>
      </div>`;
  }
  return `
    <div class="builder-context-row">
      <span><strong>${escapeHtml(name)}</strong><small>${id ? `ID ${escapeHtml(id)}` : escapeHtml(detail)}</small></span>
      <div>
        <button data-builder-context-quest="${index}" data-builder-context-quest-action="accept" type="button"${id > 0 ? "" : " disabled"}>Accept</button>
        <button data-builder-context-quest="${index}" data-builder-context-quest-action="complete" type="button"${id > 0 ? "" : " disabled"}>Done</button>
      </div>
    </div>`;
}

function builderPaletteButton(kind: BuilderActionKind, label: string): string {
  return `<button data-builder-add="${kind}" type="button">${escapeHtml(label)}</button>`;
}

function builderActionsHtml(actions: BuilderAction[], prefix = "", depth = 0, branch = ""): string {
  if (actions.length === 0) {
    return `${builderDropZone(prefix, 0, depth)}<div class="builder-empty">${branch ? `No ${escapeHtml(branch)} steps yet.` : "No steps yet. Add one from the left."}</div>`;
  }
  const rows = actions
    .map((action, index) => {
      const path = prefix ? `${prefix}.${index}` : String(index);
      const selected = path === builderSelectedPath ? "active" : "";
      const children = action.kind === "if"
        ? `
          <div class="builder-branch"><span>Then</span>${builderActionsHtml(action.actions || [], `${path}.actions`, depth + 1, "then")}</div>
          <div class="builder-branch"><span>Else</span>${builderActionsHtml(action.elseActions || [], `${path}.elseActions`, depth + 1, "else")}</div>`
        : canHaveChildActions(action)
          ? `<div class="builder-branch"><span>Body</span>${builderActionsHtml(action.actions || [], `${path}.actions`, depth + 1, "body")}</div>`
          : "";
      return `
        ${builderDropZone(prefix, index, depth)}
        <div class="builder-action-wrap" style="--depth: ${depth}">
          <button class="builder-action-row ${selected}" data-builder-path="${escapeAttr(path)}" data-builder-drag-path="${escapeAttr(path)}" draggable="true" type="button">
            <strong>${escapeHtml(builderActionTitle(action))}</strong>
            <span>${escapeHtml(builderActionSubtitle(action))}</span>
          </button>
          ${children}
        </div>`;
    })
    .join("");
  return `${rows}${builderDropZone(prefix, actions.length, depth)}`;
}

function builderDropZone(listPath: string, index: number, depth: number): string {
  return `<div class="builder-drop-zone" style="--depth: ${depth}" data-builder-drop-list="${escapeAttr(listPath)}" data-builder-drop-index="${index}"></div>`;
}

function builderActionSubtitle(action: BuilderAction): string {
  if (action.kind === "if") return conditionTitle(action.condition);
  if (action.kind === "while") return conditionTitle(action.condition);
  if (action.kind === "repeat") return `${action.actions?.length ?? 0} body step${(action.actions?.length ?? 0) === 1 ? "" : "s"}`;
  if (action.kind === "checkQuestUnlocked") return "Logs whether the quest is available.";
  if (action.kind === "breakLoop") return "Stops the nearest Repeat or While.";
  if (action.kind === "breakIfQuestUnlocked") return "Stops the nearest loop when this quest is available.";
  if (action.kind === "huntForItem") {
    const target = action.map
      ? `Join ${action.map} ${action.cell || "Enter"}/${action.pad || "Spawn"}, then hunt`
      : action.cell
        ? `Jump ${action.cell}/${action.pad || "Auto"}, then hunt`
        : "Hunt in current cell";
    return `${target} until ${action.itemName || "item"} reaches ${action.quantity ?? 1}`;
  }
  if (action.kind === "hunt") {
    const target = action.map
      ? `Join ${action.map} ${action.cell || "Enter"}/${action.pad || "Spawn"}, then hunt`
      : action.cell
        ? `Jump ${action.cell}/${action.pad || "Auto"}, then hunt`
        : "Hunt in current cell";
    return `${target} until kill count is reached${action.monsterId ? ` by ID ${action.monsterId}` : ""}`;
  }
  if (action.kind === "getMapItem") return `${action.map ? `Join ${action.map}, then ` : ""}get item ${action.mapItemId ?? 0}`;
  if (action.kind === "buyItem") return `${action.map ? `Join ${action.map}, then ` : ""}shop ${action.shopId ?? 0}`;
  if (action.kind === "completeQuest") return `Reward ${action.rewardId ?? -1}, turn-ins ${action.turnIns ?? 1}`;
  return action.kind;
}

function builderInspectorHtml(action: BuilderAction): string {
  return `
    <h2>Step Settings</h2>
    <label class="field"><span>Step Type</span><select id="builder-action-kind">
      ${builderActionKinds().map((kind) => `<option value="${kind}"${kind === action.kind ? " selected" : ""}>${escapeHtml(builderKindLabel(kind))}</option>`).join("")}
    </select></label>
    <label class="field"><span>Label</span><input class="input" data-builder-field="label" value="${escapeAttr(action.label || "")}" placeholder="Optional label" /></label>
    ${builderActionFieldsHtml(action)}
  `;
}

function builderActionFieldsHtml(action: BuilderAction): string {
  switch (action.kind) {
    case "join":
      return `
        ${builderInput("map", "Map", action.map || "battleon")}
        <div class="builder-two">${builderCellInput("Cell", action.cell || "Enter")}${builderPadInput("Pad", action.pad || "Spawn")}</div>`;
    case "jump":
      return `<div class="builder-two">${builderCellInput("Cell", action.cell || "Enter")}${builderPadInput("Pad", action.pad || "Spawn")}</div>`;
    case "walk":
      return `<div class="builder-three">${builderInput("x", "X", action.x ?? 400, "number")}${builderInput("y", "Y", action.y ?? 300, "number")}${builderInput("speed", "Speed", action.speed ?? 8, "number")}</div>`;
    case "hunt":
      return `
        <div class="builder-three">${builderInput("monster", "Monster", action.monster || "*")}${builderInput("monsterId", "Monster ID Optional", action.monsterId ?? 0, "number")}${builderInput("kills", "Kills", action.kills ?? 1, "number")}</div>
        ${builderInput("map", "Map Optional", action.map || "")}
        <div class="builder-two">${builderCellInput("Cell Optional", action.cell || "", true)}${builderPadInput("Pad", action.pad || "Auto")}</div>`;
    case "huntForItem":
      return `
        <div class="builder-two">${builderInput("monster", "Monster", action.monster || "*")}${builderInput("monsterId", "Monster ID Optional", action.monsterId ?? 0, "number")}</div>
        <div class="builder-two">${builderInput("itemName", "Item Name or ID", action.itemName || "")}${builderInput("quantity", "Quantity", action.quantity ?? 1, "number")}</div>
        ${builderInput("map", "Map Optional", action.map || "")}
        <div class="builder-two">${builderCellInput("Cell Optional", action.cell || "", true)}${builderPadInput("Pad", action.pad || "Auto")}</div>`;
    case "getMapItem":
      return `<div class="builder-three">${builderInput("map", "Map Optional", action.map || "")}${builderInput("mapItemId", "Map Item ID", action.mapItemId ?? 0, "number")}${builderInput("quantity", "Quantity", action.quantity ?? 1, "number")}</div>`;
    case "buyItem":
      return `
        <div class="builder-two">${builderInput("map", "Map Optional", action.map || "")}${builderInput("shopId", "Shop ID", action.shopId ?? 0, "number")}</div>
        <div class="builder-two">${builderInput("itemName", "Item Name", action.itemName || "")}${builderInput("quantity", "Quantity", action.quantity ?? 1, "number")}</div>`;
    case "acceptQuest":
      return builderInput("questId", "Quest ID", action.questId ?? 0, "number");
    case "completeQuest":
      return `<div class="builder-three">${builderInput("questId", "Quest ID", action.questId ?? 0, "number")}${builderInput("rewardId", "Reward ID", action.rewardId ?? -1, "number")}${builderInput("turnIns", "Turn Ins", action.turnIns ?? 1, "number")}</div>`;
    case "pickupDrop":
      return builderInput("item", "Drop Name or ID", action.item || "");
    case "wait":
      return builderInput("ms", "Milliseconds", action.ms ?? 1000, "number");
    case "log":
      return `<label class="field"><span>Message</span><textarea class="input" data-builder-field="message">${escapeHtml(action.message || "")}</textarea></label>`;
    case "sendPacket":
      return `<label class="field"><span>Packet</span><textarea class="input" data-builder-field="packet">${escapeHtml(action.packet || "")}</textarea></label>`;
    case "checkQuestUnlocked":
      return builderInput("questId", "Quest ID", action.questId ?? 0, "number");
    case "breakLoop":
      return `<p class="muted">Breaks out of the nearest Repeat or While loop.</p>`;
    case "breakIfQuestUnlocked":
      return builderInput("questId", "Quest ID", action.questId ?? 0, "number");
    case "if":
      return `${builderConditionFieldsHtml(action.condition)}`;
    case "while":
      return `${builderConditionFieldsHtml(action.condition)}`;
    case "repeat":
      return `${builderInput("iterations", "Iterations", action.iterations ?? 3, "number")}`;
  }
}

function builderConditionFieldsHtml(condition?: BuilderCondition): string {
  const next = condition || { kind: "always" as BuilderConditionKind, value: "", amount: 1, not: false };
  const valueLabel = conditionValueLabel(next.kind);
  const amountLabel = conditionAmountLabel(next.kind);
  return `
    <div class="builder-divider"></div>
    <div class="builder-section-label">Condition</div>
    <label class="field"><span>Condition Type</span><select id="builder-condition-kind">
      ${builderConditionKinds().map((kind) => `<option value="${kind}"${kind === next.kind ? " selected" : ""}>${escapeHtml(conditionKindLabel(kind))}</option>`).join("")}
    </select></label>
    ${valueLabel ? `<label class="field"><span>${escapeHtml(valueLabel)}</span><input class="input" data-builder-condition-field="value" value="${escapeAttr(next.value || "")}" placeholder="${escapeAttr(conditionValuePlaceholder(next.kind))}" /></label>` : ""}
    ${amountLabel ? `<label class="field"><span>${escapeHtml(amountLabel)}</span><input class="input" data-builder-condition-field="amount" type="number" value="${escapeAttr(next.amount ?? 1)}" /></label>` : ""}
    <label class="check"><input id="builder-condition-not" type="checkbox"${next.not ? " checked" : ""} /> Invert condition</label>`;
}

function builderInput(field: keyof BuilderAction, label: string, value: string | number, type = "text"): string {
  return `<label class="field"><span>${escapeHtml(label)}</span><input class="input" data-builder-field="${String(field)}" type="${type}" value="${escapeAttr(value)}" /></label>`;
}

function builderCellInput(label: string, value: string, optional = false): string {
  const currentCell = builderContext.snapshot?.cell || "";
  const cells = uniqueToolStrings([value, currentCell, "Enter", ...builderContext.cells]).filter(Boolean);
  const selected = optional && !value ? "" : value || currentCell || "Enter";
  const optionHtml = [
    optional ? builderLocationOptionHtml("cell", "", "Current cell", selected === "") : "",
    ...cells.map((cell) => builderLocationOptionHtml("cell", cell, cell, cell === selected))
  ].join("");
  return `
    <label class="field builder-picker-field">
      <span>${escapeHtml(label)}</span>
      <div class="builder-picker-row">
        ${builderLocationPickerHtml("cell", selected || "Current cell", optionHtml)}
        <button class="builder-current-button" data-builder-use-current="cell" type="button">Use Current</button>
      </div>
    </label>`;
}

function builderPadInput(label: string, value: string): string {
  const currentPad = builderContext.snapshot?.pad || "";
  const pads = uniqueToolStrings([value, currentPad, "Auto", "Spawn", ...builderContext.pads]).filter(Boolean);
  const selected = value || currentPad || "Auto";
  const optionHtml = pads.map((pad) => builderLocationOptionHtml("pad", pad, pad, pad === selected)).join("");
  return `
    <label class="field builder-picker-field">
      <span>${escapeHtml(label)}</span>
      <div class="builder-picker-row">
        ${builderLocationPickerHtml("pad", selected, optionHtml)}
        <button class="builder-current-button" data-builder-use-current="pad" type="button">Use Current</button>
      </div>
    </label>`;
}

function builderLocationPickerHtml(field: BuilderLocationField, value: string, options: string): string {
  const open = builderOpenLocationPicker === field ? "true" : "false";
  return `
    <div class="builder-value-picker" data-builder-picker="${field}" data-open="${open}">
      <button class="builder-picker-trigger" data-builder-picker-trigger="${field}" type="button">
        <span>${escapeHtml(value)}</span>
      </button>
      <div class="builder-picker-menu">${options}</div>
    </div>`;
}

function builderLocationOptionHtml(field: BuilderLocationField, value: string, label: string, selected: boolean): string {
  return `<button class="builder-picker-option${selected ? " selected" : ""}" data-builder-picker-option="${field}" data-builder-picker-value="${escapeAttr(value)}" type="button">${escapeHtml(label)}</button>`;
}

function bindBuilder(): void {
  bindBuilderLiveSections();
  bindBuilderDragDrop();
  byId<HTMLInputElement>("builder-name").addEventListener("input", (event) => {
    builderDraft.name = (event.currentTarget as HTMLInputElement).value;
  });
  byId<HTMLInputElement>("builder-description").addEventListener("input", (event) => {
    builderDraft.description = (event.currentTarget as HTMLInputElement).value;
  });
  byId<HTMLInputElement>("builder-map").addEventListener("input", (event) => {
    builderDraft.map = (event.currentTarget as HTMLInputElement).value;
  });
  byId<HTMLInputElement>("builder-tags").addEventListener("input", (event) => {
    builderDraft.tags = (event.currentTarget as HTMLInputElement).value.split(",").map((tag) => tag.trim()).filter(Boolean);
  });
  byId<HTMLSelectElement>("builder-script-choice").addEventListener("change", (event) => {
    const script = builderScripts.find((item) => item.id === (event.currentTarget as HTMLSelectElement).value);
    if (script) {
      builderDraft = cloneBuilderScript(script);
      builderSelectedPath = builderDraft.actions[0] ? "0" : "";
      renderBuilder();
    }
  });
  byId<HTMLSelectElement>("builder-add-target").addEventListener("change", (event) => {
    builderAddTarget = (event.currentTarget as HTMLSelectElement).value as typeof builderAddTarget;
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-add]").forEach((button) => {
    button.addEventListener("click", () => {
      addBuilderAction(button.dataset.builderAdd as BuilderActionKind);
      renderBuilder();
    });
  });
  root.querySelector<HTMLButtonElement>("[data-builder-context-refresh]")?.addEventListener("click", () => {
    builderContextRequested = true;
    command("builder-context-request");
    localNote("Refreshing builder map context.");
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-context-add]").forEach((button) => {
    button.addEventListener("click", () => {
      addBuilderContextAction(button.dataset.builderContextAdd || "");
      renderBuilder();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-context-cell]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = newBuilderAction("jump");
      action.cell = button.dataset.builderContextCell || "Enter";
      action.pad = "Auto";
      addBuilderActionObject(action);
      renderBuilder();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-context-monster]").forEach((button) => {
    button.addEventListener("click", () => {
      const monsters = monsterPlacementRows([...builderContext.cellMonsters, ...builderContext.mapMonsters], 18);
      const monster = monsters[Number(button.dataset.builderContextMonster || 0)];
      const action = newBuilderAction("hunt");
      action.monster = String(monster?.name ?? "*");
      action.kills = 1;
      const cell = firstNonEmpty(monster, ["cell", "strFrame", "frame"]);
      const pad = firstNonEmpty(monster, ["pad", "strPad"]);
      if (cell) action.cell = cell;
      if (pad) action.pad = pad;
      else if (cell) action.pad = "Auto";
      addBuilderActionObject(action);
      renderBuilder();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-context-quest]").forEach((button) => {
    button.addEventListener("click", () => {
      const quests = uniqueGrabberRows(builderContext.quests, 8);
      const quest = quests[Number(button.dataset.builderContextQuest || 0)];
      const questId = Number(quest?.id ?? 0);
      const action = newBuilderAction(button.dataset.builderContextQuestAction === "complete" ? "completeQuest" : "acceptQuest");
      action.questId = questId;
      if (action.kind === "completeQuest") action.rewardId = -1;
      addBuilderActionObject(action);
      renderBuilder();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-path]").forEach((button) => {
    button.addEventListener("click", () => {
      builderSelectedPath = button.dataset.builderPath || "";
      renderBuilder();
    });
  });
  root.querySelector<HTMLButtonElement>("[data-builder-new]")?.addEventListener("click", () => {
    builderDraft = createDefaultBuilderScript();
    builderSelectedPath = "0";
    renderBuilder();
  });
  root.querySelector<HTMLButtonElement>("[data-builder-save]")?.addEventListener("click", () => void saveBuilderDraft());
  root.querySelector<HTMLButtonElement>("[data-builder-vscode]")?.addEventListener("click", () => void openBuilderDraftInVsCode());
  root.querySelector<HTMLButtonElement>("[data-builder-delete]")?.addEventListener("click", () => void deleteBuilderDraft());
  root.querySelector<HTMLButtonElement>("[data-builder-run]")?.addEventListener("click", () => void runBuilderDraft());
  root.querySelector<HTMLButtonElement>("[data-builder-stop]")?.addEventListener("click", () => {
    command("stop-script");
    localNote("Stop requested.");
  });
  root.querySelector<HTMLButtonElement>("[data-builder-remove]")?.addEventListener("click", () => {
    removeSelectedBuilderAction();
    renderBuilder();
  });
  root.querySelector<HTMLButtonElement>("[data-builder-duplicate]")?.addEventListener("click", () => {
    duplicateSelectedBuilderAction();
    renderBuilder();
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-move]").forEach((button) => {
    button.addEventListener("click", () => {
      moveSelectedBuilderAction(button.dataset.builderMove === "up" ? -1 : 1);
      renderBuilder();
    });
  });

  const selected = getBuilderAction(builderSelectedPath);
  if (!selected) return;
  root.querySelector<HTMLSelectElement>("#builder-action-kind")?.addEventListener("change", (event) => {
    replaceSelectedBuilderAction((event.currentTarget as HTMLSelectElement).value as BuilderActionKind);
    renderBuilder();
  });
  root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[data-builder-field]").forEach((input) => {
    const update = () => {
      setBuilderActionField(selected, input.dataset.builderField || "", input.value, input instanceof HTMLInputElement ? input.type : "text");
    };
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-picker-trigger]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const field = button.dataset.builderPickerTrigger;
      if (field !== "cell" && field !== "pad") return;
      builderOpenLocationPicker = builderOpenLocationPicker === field ? "" : field;
      renderBuilder();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-picker-option]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const field = button.dataset.builderPickerOption;
      if (field !== "cell" && field !== "pad") return;
      selected[field] = button.dataset.builderPickerValue || "";
      builderOpenLocationPicker = "";
      renderBuilder();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-builder-use-current]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.builderUseCurrent;
      if (field !== "cell" && field !== "pad") return;
      builderPendingCurrentField = field;
      builderPendingCurrentPath = builderSelectedPath;
      builderOpenLocationPicker = "";
      builderContextRequested = true;
      command("builder-context-request");
      localNote(`Reading current ${field} from the game.`);
    });
  });
  root.querySelector<HTMLSelectElement>("#builder-condition-kind")?.addEventListener("change", (event) => {
    selected.condition = { ...(selected.condition || { kind: "always" }), kind: (event.currentTarget as HTMLSelectElement).value as BuilderConditionKind };
    renderBuilder();
  });
  root.querySelectorAll<HTMLInputElement>("[data-builder-condition-field]").forEach((input) => {
    input.addEventListener("input", () => {
      selected.condition = selected.condition || { kind: "always" };
      const key = input.dataset.builderConditionField || "";
      if (key === "amount") selected.condition.amount = Number(input.value || 0);
      if (key === "value") selected.condition.value = input.value;
    });
  });
  root.querySelector<HTMLInputElement>("#builder-condition-not")?.addEventListener("change", (event) => {
    selected.condition = selected.condition || { kind: "always" };
    selected.condition.not = (event.currentTarget as HTMLInputElement).checked;
  });
}

function bindBuilderLiveSections(): void {
  root.querySelectorAll<HTMLDetailsElement>("[data-builder-live-section]").forEach((details) => {
    const key = details.dataset.builderLiveSection;
    if (key !== "cells" && key !== "monsters" && key !== "quests") return;
    details.addEventListener("toggle", () => {
      builderLiveSectionState[key] = details.open;
    });
  });
}

function applyPendingBuilderCurrent(): void {
  if (!builderPendingCurrentField) return;
  const field = builderPendingCurrentField;
  const action = getBuilderAction(builderPendingCurrentPath || builderSelectedPath);
  const value = field === "cell" ? builderContext.snapshot?.cell : builderContext.snapshot?.pad;
  builderPendingCurrentField = "";
  builderPendingCurrentPath = "";
  if (!action || !value) {
    localNote(`Could not read current ${field} from the game.`);
    return;
  }
  action[field] = value;
  localNote(`Set ${field} to ${value}.`);
}

function bindBuilderDragDrop(): void {
  root.querySelectorAll<HTMLElement>("[data-builder-drag-path]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      builderDragPath = row.dataset.builderDragPath || "";
      row.classList.add("dragging");
      document.body.classList.add("builder-dragging");
      event.dataTransfer?.setData("text/plain", builderDragPath);
      if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
    });
    row.addEventListener("dragend", () => {
      builderDragPath = "";
      row.classList.remove("dragging");
      document.body.classList.remove("builder-dragging");
      clearBuilderDropHighlights();
    });
  });

  root.querySelectorAll<HTMLElement>("[data-builder-drop-list]").forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      if (!builderDragPath) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
      clearBuilderDropHighlights(zone);
      zone.classList.add("active");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("active"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const sourcePath = event.dataTransfer?.getData("text/plain") || builderDragPath;
      const listPath = zone.dataset.builderDropList || "";
      const index = Number(zone.dataset.builderDropIndex ?? 0);
      clearBuilderDropHighlights();
      document.body.classList.remove("builder-dragging");
      if (moveBuilderActionTo(sourcePath, listPath, index)) renderBuilder();
    });
  });
}

function clearBuilderDropHighlights(except?: HTMLElement): void {
  root.querySelectorAll<HTMLElement>(".builder-drop-zone.active").forEach((zone) => {
    if (zone !== except) zone.classList.remove("active");
  });
}

async function hydrateBuilderScriptsFromFile(): Promise<void> {
  if (tool !== "builder") return;
  const value = await readBuilderScriptsSetting().catch(() => undefined);
  builderScripts = normalizeBuilderScripts(value);
  if (!builderHydrated) {
    const requested = builderScripts.find((script) => script.id === requestedBuilderScriptId);
    builderDraft = requested ? cloneBuilderScript(requested) : builderScripts[0] ? cloneBuilderScript(builderScripts[0]) : createDefaultBuilderScript();
    builderSelectedPath = builderDraft.actions[0] ? "0" : "";
    builderHydrated = true;
  }
  renderBuilder();
}

function syncBuilderScriptsFromState(scriptsFromState: BuilderScript[]): void {
  const incoming = normalizeBuilderScripts({ scripts: scriptsFromState });
  builderScripts = incoming;
  if (tool !== "builder") return;
  if (!builderHydrated) {
    const requested = builderScripts.find((script) => script.id === requestedBuilderScriptId);
    builderDraft = requested ? cloneBuilderScript(requested) : builderScripts[0] ? cloneBuilderScript(builderScripts[0]) : builderDraft;
    builderSelectedPath = builderDraft.actions[0] ? "0" : "";
    builderHydrated = true;
    return;
  }
  if (requestedBuilderScriptId && builderDraft.id !== requestedBuilderScriptId) {
    const requested = builderScripts.find((script) => script.id === requestedBuilderScriptId);
    if (requested) {
      builderDraft = cloneBuilderScript(requested);
      builderSelectedPath = builderDraft.actions[0] ? "0" : "";
    }
  }
  if (builderHydrated && !builderScripts.some((script) => script.id === builderDraft.id)) {
    builderDraft = builderScripts[0] ? cloneBuilderScript(builderScripts[0]) : createDefaultBuilderScript();
    builderSelectedPath = builderDraft.actions[0] ? "0" : "";
  }
}

async function saveBuilderDraft(): Promise<void> {
  builderDraft = normalizeBuilderScript(builderDraft);
  const existingIndex = builderScripts.findIndex((script) => script.id === builderDraft.id);
  if (existingIndex >= 0) builderScripts[existingIndex] = cloneBuilderScript(builderDraft);
  else builderScripts = [...builderScripts, cloneBuilderScript(builderDraft)];
  await writeBuilderScripts().catch(() => undefined);
  command("builder-save-script", { script: builderDraft });
  localNote(`Saved builder script ${builderDraft.name}.`);
  renderBuilder();
}

async function openBuilderDraftInVsCode(): Promise<void> {
  builderDraft = normalizeBuilderScript(builderDraft);
  const existingIndex = builderScripts.findIndex((script) => script.id === builderDraft.id);
  if (existingIndex >= 0) builderScripts[existingIndex] = cloneBuilderScript(builderDraft);
  else builderScripts = [...builderScripts, cloneBuilderScript(builderDraft)];
  const native = nativeApi();
  try {
    if (native?.openBuilderScriptInVsCode) await native.openBuilderScriptInVsCode(builderDraft);
    else await writeBuilderScripts();
    command("builder-save-script", { script: builderDraft });
    localNote(`Opened ${builderDraft.name} in VS Code.`);
  } catch (error) {
    localNote(`Could not open VS Code: ${error instanceof Error ? error.message : String(error)}`);
  }
  renderBuilder();
}

async function openBuilderScriptIdInVsCode(scriptId: string): Promise<void> {
  let selected = builderScripts.find((script) => script.id === scriptId);
  if (!selected) {
    const value = await readBuilderScriptsSetting().catch(() => undefined);
    builderScripts = normalizeBuilderScripts(value);
    selected = builderScripts.find((script) => script.id === scriptId);
  }
  if (!selected) {
    localNote("Selected script is not a builder script.");
    return;
  }
  const native = nativeApi();
  try {
    if (native?.openBuilderScriptInVsCode) await native.openBuilderScriptInVsCode(selected);
    else await writeBuilderScripts();
    localNote(`Opened ${selected.name} in VS Code.`);
  } catch (error) {
    localNote(`Could not open VS Code: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function openScriptIdInVsCode(scriptId: string): Promise<void> {
  const selected = state.scripts.find((script) => script.id === scriptId);
  if (selected?.category === "Builder") {
    await openBuilderScriptIdInVsCode(scriptId);
    return;
  }

  const native = nativeApi();
  try {
    if (!native?.openScriptInVsCode) throw new Error("VS Code opener is unavailable.");
    const result = await native.openScriptInVsCode(scriptId);
    const filePath = result && typeof result === "object" && "filePath" in result ? String((result as { filePath?: unknown }).filePath ?? "") : "";
    localNote(`Opened ${selected?.meta.name || scriptId} in VS Code${filePath ? `: ${filePath}` : "."}`);
  } catch (error) {
    localNote(`Could not open VS Code: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function deleteBuilderDraft(): Promise<void> {
  const deletedId = builderDraft.id;
  const deletedName = builderDraft.name;
  const wasSaved = builderScripts.some((script) => script.id === deletedId);
  builderScripts = builderScripts.filter((script) => script.id !== builderDraft.id);
  await writeBuilderScripts().catch(() => undefined);
  command("builder-delete-script", { id: deletedId });
  builderDraft = builderScripts[0] ? cloneBuilderScript(builderScripts[0]) : createDefaultBuilderScript();
  builderSelectedPath = builderDraft.actions[0] ? "0" : "";
  localNote(wasSaved ? `Deleted builder script ${deletedName}.` : "Discarded unsaved builder script.");
  renderBuilder();
}

async function runBuilderDraft(): Promise<void> {
  if (builderRunPending || state.running) return;
  builderRunPending = true;
  renderBuilder();
  builderDraft = normalizeBuilderScript(builderDraft);
  const existingIndex = builderScripts.findIndex((script) => script.id === builderDraft.id);
  if (existingIndex >= 0) builderScripts[existingIndex] = cloneBuilderScript(builderDraft);
  else builderScripts = [...builderScripts, cloneBuilderScript(builderDraft)];
  try {
    await writeBuilderScripts();
    command("builder-run-draft", { script: builderDraft });
    localNote(`Starting ${builderDraft.name}.`);
  } catch (error) {
    builderRunPending = false;
    localNote(`Run failed before start: ${error instanceof Error ? error.message : String(error)}`);
    renderBuilder();
  }
}

async function writeBuilderScripts(): Promise<void> {
  const scripts = builderScripts.map(normalizeBuilderScript);
  const native = nativeApi();
  if (native?.writeBuilderScripts) {
    await native.writeBuilderScripts(scripts);
    return;
  }
  await writeJsonSetting("builder-scripts", { scripts });
}

async function readBuilderScriptsSetting(): Promise<unknown> {
  const native = nativeApi();
  if (native?.readBuilderScripts) return native.readBuilderScripts();
  return readJsonSetting("builder-scripts");
}

function addBuilderAction(kind: BuilderActionKind): void {
  const action = newBuilderAction(kind);
  addBuilderActionObject(action);
}

function addBuilderActionObject(action: BuilderAction): void {
  const list = builderTargetList();
  list.push(action);
  builderSelectedPath = builderPathForListItem(list, list.length - 1);
}

function addBuilderContextAction(kind: string): void {
  const snapshot = builderContext.snapshot;
  if (kind === "join-current" && snapshot?.map) {
    const action = newBuilderAction("join");
    action.map = snapshot.map;
    action.cell = snapshot.cell || "Enter";
    action.pad = snapshot.pad || "Spawn";
    addBuilderActionObject(action);
    return;
  }
  if (kind === "jump-current" && snapshot?.cell) {
    const action = newBuilderAction("jump");
    action.cell = snapshot.cell || "Enter";
    action.pad = snapshot.pad || "Auto";
    addBuilderActionObject(action);
  }
}

function ensureBuilderContext(): void {
  if (builderContextRequested || tool !== "builder") return;
  builderContextRequested = true;
  command("builder-context-request");
}

function builderTargetList(): BuilderAction[] {
  const selected = getBuilderAction(builderSelectedPath);
  if (builderAddTarget === "child" && selected && canHaveChildActions(selected)) {
    selected.actions = selected.actions || [];
    return selected.actions;
  }
  if (builderAddTarget === "else" && selected?.kind === "if") {
    selected.elseActions = selected.elseActions || [];
    return selected.elseActions;
  }
  return builderDraft.actions;
}

function builderPathForListItem(list: BuilderAction[], index: number): string {
  if (list === builderDraft.actions) return String(index);
  const parent = getBuilderAction(builderSelectedPath);
  if (!parent) return String(index);
  if (list === parent.elseActions) return `${builderSelectedPath}.elseActions.${index}`;
  return `${builderSelectedPath}.actions.${index}`;
}

function getBuilderAction(path: string): BuilderAction | undefined {
  const result = getBuilderListAndIndex(path);
  if (!result) return undefined;
  return result.list[result.index];
}

function getBuilderListAndIndex(path: string): { list: BuilderAction[]; index: number } | undefined {
  if (!path) return undefined;
  const parts = path.split(".");
  const index = Number(parts.pop());
  if (!Number.isInteger(index)) return undefined;
  const list = getBuilderList(parts);
  if (!list || index < 0 || index >= list.length) return undefined;
  return { list, index };
}

function getBuilderList(parts: string[]): BuilderAction[] | undefined {
  let list = builderDraft.actions;
  for (let index = 0; index < parts.length; index += 2) {
    const actionIndex = Number(parts[index]);
    const branch = parts[index + 1];
    const action = list[actionIndex];
    if (!action || (branch !== "actions" && branch !== "elseActions")) return undefined;
    if (branch === "elseActions") {
      action.elseActions = action.elseActions || [];
      list = action.elseActions;
    } else {
      action.actions = action.actions || [];
      list = action.actions;
    }
  }
  return list;
}

function getBuilderListByPath(path: string): BuilderAction[] | undefined {
  return path ? getBuilderList(path.split(".")) : builderDraft.actions;
}

function builderPathForListPath(listPath: string, index: number): string {
  return listPath ? `${listPath}.${index}` : String(index);
}

function builderListPathFromActionPath(path: string): string {
  const parts = path.split(".");
  parts.pop();
  return parts.join(".");
}

function moveBuilderActionTo(sourcePath: string, targetListPath: string, targetIndex: number): boolean {
  const source = getBuilderListAndIndex(sourcePath);
  const targetList = getBuilderListByPath(targetListPath);
  if (!source || !targetList) return false;
  if (targetListPath && (targetListPath === `${sourcePath}.actions` || targetListPath === `${sourcePath}.elseActions` || targetListPath.startsWith(`${sourcePath}.actions.`) || targetListPath.startsWith(`${sourcePath}.elseActions.`))) {
    localNote("Cannot move a step into itself.");
    return false;
  }

  const action = source.list[source.index];
  if (!action) return false;
  const sourceListPath = builderListPathFromActionPath(sourcePath);
  let insertIndex = Math.max(0, Math.min(Math.floor(targetIndex), targetList.length));
  source.list.splice(source.index, 1);
  if (sourceListPath === targetListPath && source.index < insertIndex) insertIndex -= 1;
  targetList.splice(insertIndex, 0, action);
  builderSelectedPath = builderPathForListPath(targetListPath, insertIndex);
  rememberBuilderScroll();
  return true;
}

function removeSelectedBuilderAction(): void {
  const result = getBuilderListAndIndex(builderSelectedPath);
  if (!result) return;
  result.list.splice(result.index, 1);
  builderSelectedPath = result.list[Math.min(result.index, result.list.length - 1)] ? builderPathForNearestSibling(builderSelectedPath, Math.min(result.index, result.list.length - 1)) : "0";
}

function duplicateSelectedBuilderAction(): void {
  const result = getBuilderListAndIndex(builderSelectedPath);
  if (!result) return;
  const source = result.list[result.index];
  if (!source) return;
  const clone = normalizeBuilderActionWithNewIds(source);
  result.list.splice(result.index + 1, 0, clone);
  builderSelectedPath = builderPathForNearestSibling(builderSelectedPath, result.index + 1);
}

function moveSelectedBuilderAction(direction: -1 | 1): void {
  const result = getBuilderListAndIndex(builderSelectedPath);
  if (!result) return;
  const nextIndex = result.index + direction;
  if (nextIndex < 0 || nextIndex >= result.list.length) return;
  const [action] = result.list.splice(result.index, 1);
  if (!action) return;
  result.list.splice(nextIndex, 0, action);
  builderSelectedPath = builderPathForNearestSibling(builderSelectedPath, nextIndex);
}

function replaceSelectedBuilderAction(kind: BuilderActionKind): void {
  const result = getBuilderListAndIndex(builderSelectedPath);
  if (!result) return;
  const current = result.list[result.index];
  const replacement = newBuilderAction(kind);
  result.list[result.index] = { ...replacement, id: current?.id || replacement.id, label: current?.label };
}

function builderPathForNearestSibling(path: string, index: number): string {
  const parts = path.split(".");
  parts[parts.length - 1] = String(index);
  return parts.join(".");
}

function setBuilderActionField(action: BuilderAction, field: string, value: string, inputType: string): void {
  const numberFields = new Set(["x", "y", "speed", "monsterId", "kills", "mapItemId", "quantity", "shopId", "questId", "rewardId", "turnIns", "ms", "iterations"]);
  const nextValue = inputType === "number" || numberFields.has(field) ? Number(value || 0) : value;
  (action as unknown as Record<string, unknown>)[field] = nextValue;
}

function canHaveChildActions(action: BuilderAction): boolean {
  return action.kind === "if" || action.kind === "repeat" || action.kind === "while";
}

function cloneBuilderScript(script: BuilderScript): BuilderScript {
  return normalizeBuilderScript(JSON.parse(JSON.stringify(script)) as BuilderScript);
}

function normalizeBuilderActionWithNewIds(action: BuilderAction): BuilderAction {
  const clone = JSON.parse(JSON.stringify(action)) as BuilderAction;
  const renew = (entry: BuilderAction): BuilderAction => {
    const next = { ...entry, id: newBuilderAction(entry.kind).id };
    next.actions = (entry.actions || []).map(renew);
    next.elseActions = (entry.elseActions || []).map(renew);
    return next;
  };
  return renew(clone);
}

function builderActionKinds(): BuilderActionKind[] {
  return ["log", "wait", "join", "jump", "walk", "hunt", "huntForItem", "getMapItem", "buyItem", "acceptQuest", "completeQuest", "pickupDrop", "sendPacket", "checkQuestUnlocked", "breakLoop", "breakIfQuestUnlocked", "if", "repeat", "while"];
}

function builderConditionKinds(): BuilderConditionKind[] {
  return ["always", "loggedIn", "mapIs", "cellIs", "levelAtLeast", "levelBelow", "classRankAtLeast", "classRankBelow", "dropVisible", "inventoryQuantityAtLeast", "questUnlocked", "questCompleted", "dailyQuestComplete"];
}

function builderKindLabel(kind: BuilderActionKind): string {
  const labels: Record<BuilderActionKind, string> = {
    log: "Log",
    wait: "Wait",
    join: "Join Map",
    jump: "Jump Cell",
    walk: "Walk To",
    hunt: "Hunt Monster",
    huntForItem: "Hunt For Item",
    getMapItem: "Get Map Item",
    buyItem: "Buy Item",
    acceptQuest: "Accept Quest",
    completeQuest: "Complete Quest",
    pickupDrop: "Pickup Drop",
    sendPacket: "Send Packet",
    checkQuestUnlocked: "Check Quest Unlocked",
    breakLoop: "Break Loop",
    breakIfQuestUnlocked: "Break If Quest Unlocked",
    if: "If / Else",
    repeat: "Repeat",
    while: "While"
  };
  return labels[kind];
}

function conditionKindLabel(kind: BuilderConditionKind): string {
  const labels: Record<BuilderConditionKind, string> = {
    always: "Always",
    loggedIn: "Logged In",
    mapIs: "Map Is",
    cellIs: "Cell Is",
    levelAtLeast: "Level At Least",
    levelBelow: "Level Below",
    classRankAtLeast: "Class Rank At Least",
    classRankBelow: "Class Rank Below",
    dropVisible: "Drop Visible",
    inventoryQuantityAtLeast: "Inventory Quantity At Least",
    questUnlocked: "Quest Unlocked",
    questCompleted: "Quest Completed",
    dailyQuestComplete: "Daily Quest Complete"
  };
  return labels[kind];
}

function conditionValueLabel(kind: BuilderConditionKind): string {
  if (kind === "mapIs") return "Map";
  if (kind === "cellIs") return "Cell";
  if (kind === "dropVisible") return "Drop Name or ID";
  if (kind === "inventoryQuantityAtLeast") return "Item Name or ID";
  return "";
}

function conditionValuePlaceholder(kind: BuilderConditionKind): string {
  if (kind === "mapIs") return "battleon";
  if (kind === "cellIs") return "Enter";
  if (kind === "dropVisible") return "drop name, blank = any drop";
  if (kind === "inventoryQuantityAtLeast") return "item name or item id";
  return "";
}

function conditionAmountLabel(kind: BuilderConditionKind): string {
  if (kind === "levelAtLeast" || kind === "levelBelow") return "Level";
  if (kind === "classRankAtLeast" || kind === "classRankBelow") return "Class Rank";
  if (kind === "inventoryQuantityAtLeast") return "Quantity";
  if (kind === "questUnlocked" || kind === "questCompleted" || kind === "dailyQuestComplete") return "Quest ID";
  return "";
}

function renderSkills(): void {
  root.innerHTML = `
    <section class="tool-card">
      <h2>Skills</h2>
      <div class="button-grid five">${[1, 2, 3, 4, 5].map((skill) => `<button data-skill="${skill}" type="button">${skill}</button>`).join("")}</div>
      <label class="check"><input id="auto-skills" type="checkbox" checked /> Use available skills during auto actions</label>
      <div class="button-grid two">
        <button data-command="auto-attack" type="button">Auto Attack</button>
        <button data-command="auto-hunt" type="button">Auto Hunt</button>
      </div>
      <button data-command="auto-stop" type="button">Stop Auto</button>
    </section>
    <section class="tool-card">
      <h2>Skill Sets</h2>
      <label class="field"><span>Name</span><input id="skill-set-name" class="input" value="Default" /></label>
      <label class="field"><span>Sequence</span><input id="skill-sequence" class="input" value="1,2,3,4,5" /></label>
      <div class="button-grid two"><button data-command="save-skill-set" type="button">Save</button><button data-command="load-skill-set" type="button">Load</button></div>
      <p class="muted">Skill set storage is local to this Veyra prototype.</p>
    </section>`;
  root.querySelectorAll<HTMLButtonElement>("[data-skill]").forEach((button) => {
    button.addEventListener("click", () => command("use-skill", { skill: Number(button.dataset.skill || 1) }));
  });
  bindToolButtons();
}

function renderPackets(): void {
  if (section === "packet-logger") {
    root.innerHTML = `
      <section class="tool-card">
        <h2>Packet Logger</h2>
        <button data-command="capture-packets" type="button">Start Logger</button>
        <div class="mini-log" id="tool-log"></div>
      </section>`;
    activeLog = "packet";
    bindToolButtons();
    renderLogBox();
    return;
  }

  if (section === "packet-interceptor") {
    const packets = filteredPacketLogs();
    const filters = packetFilters();
    const servers = packetServerOptions();
    const connection = packetConnectionView();
    if (!packetInterceptorServersRequested) {
      packetInterceptorServersRequested = true;
      window.setTimeout(() => command("packet-interceptor-refresh-servers"), 0);
    }
    root.innerHTML = `
      <section class="tool-card packet-interceptor-card">
        <div class="packet-window-heading">
          <div>
            <h2>Packet Interceptor</h2>
            <small>${packetInterceptorServers.length > 0 ? `${packetInterceptorServers.length} live servers loaded` : "Live server data has not been loaded yet"}</small>
          </div>
          <span class="status-pill ${connection.className}">${escapeHtml(connection.label)}</span>
        </div>
        ${packetInterceptorMessage ? `<div class="status-strip">${escapeHtml(packetInterceptorMessage)}</div>` : ""}
        <div class="packet-server-row">
          <label class="field"><span>Server</span><select id="interceptor-server">${servers.map((server) => packetServerOptionHtml(server)).join("")}</select></label>
          <button data-command="packet-server-refresh" type="button">Refresh Servers</button>
          <button data-command="${packetInterceptorSettings.connected ? "packet-interceptor-disconnect" : "packet-interceptor-connect"}" type="button"${packetInterceptorStatus === "connecting" ? " disabled" : ""}>${packetInterceptorStatus === "connecting" ? "Connecting..." : packetInterceptorSettings.connected ? "Disconnect" : "Connect"}</button>
        </div>
        <div class="packet-main-row">
          <input id="packet-search-window" class="input" value="${escapeAttr(packetInterceptorSettings.search)}" placeholder="Search packets..." />
          <button data-command="clear-packet-log" type="button">Clear</button>
        </div>
        <div class="packet-controls">
          <label class="option-chip ${packetInterceptorSettings.logPackets ? "active" : ""}"><input id="interceptor-log-packets" type="checkbox"${packetInterceptorSettings.logPackets ? " checked" : ""} /><span>Log Packets</span></label>
          <div class="packet-legend"><span class="outbound">Outbound</span><span class="inbound">Inbound</span><span class="blocked">Blocked</span></div>
        </div>
        <div class="packet-layout">
          <div class="packet-list">${packetRowsHtml(packets)}</div>
          <aside class="packet-filter-panel">
            <input id="packet-filter-search" class="input" value="${escapeAttr(packetInterceptorSettings.filterSearch)}" placeholder="Search filters" />
            <div class="filter-list">${filters.map((filter) => filterCheckboxHtml(filter)).join("")}</div>
          </aside>
        </div>
        <div class="mini-log" id="tool-log"></div>
      </section>`;
    activeLog = "packet";
    bindPacketInterceptor();
    renderLogBox();
    return;
  }

  root.innerHTML = `
    <section class="tool-card">
      <h2>Packet Spammer</h2>
      <label class="field"><span>Send packet</span><textarea id="packet-input-window" spellcheck="false">%xt%zm%</textarea></label>
      <label class="field"><span>Delay ms</span><input id="packet-delay" class="input" type="number" min="250" value="1000" /></label>
      <div class="button-grid two">
        <button data-command="send-packet-window" type="button">Send Packet</button>
        <button data-command="packet-spam-window" type="button">Start Spam</button>
      </div>
      <button data-command="packet-spam-stop" type="button">Stop Spam</button>
      <div class="mini-log" id="tool-log"></div>
    </section>`;
  bindToolButtons();
  activeLog = "packet";
  renderLogBox();
}

function bindPacketInterceptor(): void {
  byId<HTMLSelectElement>("interceptor-server").addEventListener("change", (event) => {
    packetInterceptorSettings.server = (event.currentTarget as HTMLSelectElement).value;
    void writePacketInterceptorSettings();
    renderPackets();
  });
  byId<HTMLInputElement>("packet-search-window").addEventListener("input", (event) => {
    packetInterceptorSettings.search = (event.currentTarget as HTMLInputElement).value;
    void writePacketInterceptorSettings();
    renderPackets();
  });
  byId<HTMLInputElement>("packet-filter-search").addEventListener("input", (event) => {
    packetInterceptorSettings.filterSearch = (event.currentTarget as HTMLInputElement).value;
    void writePacketInterceptorSettings();
    renderPackets();
  });
  byId<HTMLInputElement>("interceptor-log-packets").addEventListener("change", (event) => {
    packetInterceptorSettings.logPackets = (event.currentTarget as HTMLInputElement).checked;
    void writePacketInterceptorSettings();
    renderPackets();
  });
  root.querySelectorAll<HTMLInputElement>("[data-packet-filter]").forEach((input) => {
    input.addEventListener("change", () => {
      packetInterceptorSettings.filters[input.dataset.packetFilter || ""] = input.checked;
      void writePacketInterceptorSettings();
      renderPackets();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-command]").forEach((button) => {
    button.addEventListener("click", () => handleToolButton(button.dataset.command || ""));
  });
}

function filteredPacketLogs(): string[] {
  const query = packetInterceptorSettings.search.trim().toLowerCase();
  const enabledFilters = Object.entries(packetInterceptorSettings.filters).filter(([, enabled]) => enabled).map(([name]) => name.toLowerCase());
  return state.logs.packet.filter((line) => {
    const lower = line.toLowerCase();
    if (query && !lower.includes(query)) return false;
    if (enabledFilters.length === 0) return true;
    return enabledFilters.some((filter) => lower.includes(filter));
  });
}

function packetRowHtml(line: string): string {
  const lower = line.toLowerCase();
  const kind = lower.includes("[flash:packet]") || lower.includes("sent ") ? "outbound" : lower.includes("blocked") ? "blocked" : "inbound";
  return `<button class="packet-row ${kind}" type="button">${escapeHtml(line)}</button>`;
}

function packetRowsHtml(packets = filteredPacketLogs()): string {
  return packets.map((packet) => packetRowHtml(packet)).join("") || `<div class="tool-note">Connect, then packets will appear here.</div>`;
}

function renderPacketRows(): void {
  const list = root.querySelector<HTMLElement>(".packet-list");
  if (list) {
    list.innerHTML = packetRowsHtml();
    list.scrollTop = list.scrollHeight;
  }
  renderLogBox();
}

function packetConnectionView(): { label: string; className: string } {
  if (packetInterceptorStatus === "connecting") return { label: "Connecting", className: "connecting" };
  if (packetInterceptorStatus === "failed") return { label: "Failed", className: "failed" };
  if (packetInterceptorSettings.connected || packetInterceptorStatus === "connected") return { label: "Connected", className: "active" };
  return { label: "Idle", className: "" };
}

function packetFilters(): string[] {
  const base = ["Drop", "Quest", "Map", "Move", "Attack", "Skill", "Chat", "Inventory", "Shop", "Bank"];
  const query = packetInterceptorSettings.filterSearch.trim().toLowerCase();
  return base.filter((filter) => !query || filter.toLowerCase().includes(query));
}

function filterCheckboxHtml(filter: string): string {
  const checked = packetInterceptorSettings.filters[filter] === true;
  return `<label class="check"><input data-packet-filter="${escapeAttr(filter)}" type="checkbox"${checked ? " checked" : ""} /> ${escapeHtml(filter)}</label>`;
}

function packetServerOptionHtml(server: PacketServerOption): string {
  const selected = sameServerName(server.name, packetInterceptorSettings.server) ? " selected" : "";
  const offline = server.online === false ? " (offline)" : "";
  return `<option value="${escapeAttr(server.name)}"${selected}>${escapeHtml(server.label)}${offline}</option>`;
}

function packetServerOptions(): PacketServerOption[] {
  const live = packetInterceptorServers.length > 0 ? packetInterceptorServers : RELOGIN_SERVERS.map((name) => ({ name, label: name, connectable: false }));
  const selected = cleanServerName(packetInterceptorSettings.server);
  if (selected && !live.some((server) => sameServerName(server.name, selected))) {
    return [{ name: selected, label: selected, connectable: false }, ...live];
  }
  return live;
}

function selectedPacketServer(): PacketServerOption | undefined {
  const selected = cleanServerName(packetInterceptorSettings.server);
  return packetServerOptions().find((server) => sameServerName(server.name, selected));
}

function renderBank(): void {
  root.innerHTML = `
    <section class="tool-card">
      <h2>Bank</h2>
      <div class="button-grid two">
        <button data-command="toggle-bank" type="button">Toggle Bank</button>
        <button data-command="open-inventory" type="button">Open Inventory</button>
      </div>
      <label class="field"><span>Item name</span><input id="bank-item" class="input" placeholder="Search item name" /></label>
      <div class="button-grid two">
        <button data-command="inspect-inventory" type="button">Inspect Inventory</button>
        <button data-command="inspect-bank" type="button">Inspect Bank</button>
      </div>
      <p class="muted">Full item grids come next; these buttons already talk to the Flash object bridge.</p>
    </section>`;
  bindToolButtons();
}

function renderLogs(): void {
  root.innerHTML = `
    <section class="tool-card">
      <h2>Logs</h2>
      <div class="segmented">
        ${(["script", "debug", "packet", "event"] as LogKind[]).map((kind) => `<button class="${kind === activeLog ? "active" : ""}" data-log-kind="${kind}" type="button">${kind}</button>`).join("")}
      </div>
      <div class="mini-log" id="tool-log"></div>
      <div class="toolbar-line">
        <button data-command="clear-log" type="button">Clear</button>
        <button data-command="copy-log" type="button">Copy</button>
      </div>
    </section>`;
  root.querySelectorAll<HTMLButtonElement>("[data-log-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLog = (button.dataset.logKind || "script") as LogKind;
      renderLogs();
    });
  });
  bindToolButtons();
  renderLogBox();
}

function renderPlugins(): void {
  root.innerHTML = `
    <section class="tool-card">
      <h2>Plugins</h2>
      <div class="plugin-row"><strong>Veyra host</strong><span>active</span></div>
      <div class="plugin-row"><strong>TypeScript scripts</strong><span>active</span></div>
      <div class="plugin-row"><strong>Packet bridge</strong><span>active</span></div>
      <div class="plugin-row"><strong>Local script catalog</strong><span>active</span></div>
    </section>`;
  bindToolButtons();
}

function renderOptions(): void {
  if (!section || section === "game-options") {
    renderGameOptions();
    return;
  } else if (section === "application-options") {
    root.innerHTML = `
      <section class="tool-card">
        <h2>Application Options</h2>
        <label class="check"><input data-local-option="open-last-script" type="checkbox" checked /> Remember selected script</label>
        <label class="check"><input data-local-option="attach-logs" type="checkbox" checked /> Share logs with tool windows</label>
        <label class="field"><span>Log limit</span><input class="input" type="number" min="100" value="600" /></label>
        <label class="field"><span>Default script folder</span><input class="input" value="apps/veyra/src/scripts" /></label>
        <p class="muted">These settings are local UI settings until the shared settings package lands.</p>
      </section>`;
  } else if (section === "core-options") {
    root.innerHTML = `
      <section class="tool-card">
        <h2>CoreBots Options</h2>
        <label class="check"><input data-local-option="private-rooms" type="checkbox" checked /> Prefer private rooms</label>
        <label class="field"><span>Private room number</span><input class="input" type="number" value="100000" /></label>
        <label class="field"><span>Action delay ms</span><input class="input" type="number" min="100" value="650" /></label>
        <label class="check"><input data-local-option="stop-on-disconnect" type="checkbox" checked /> Stop scripts on disconnect</label>
        <p class="muted">Core helper scripts read these once the full converted script library is connected.</p>
      </section>`;
  } else if (section === "theme-options") {
    const theme = state.theme || activeTheme;
    root.innerHTML = `
      <section class="tool-card">
        <h2>Application Themes</h2>
        <label class="field"><span>Theme</span><select id="theme-choice">
          <option value="veyra-dark">Soft Graphite</option>
          <option value="classic-slate">Classic Slate</option>
          <option value="forest-mist">Forest Mist</option>
          <option value="night-rose">Night Rose</option>
          <option value="github-dark">GitHub Dark</option>
          <option value="catppuccin-mocha">Catppuccin Mocha</option>
          <option value="high-contrast">High Contrast</option>
        </select></label>
        <p class="muted">Applies immediately to the main window and every open tool window.</p>
      </section>`;
    const select = byId<HTMLSelectElement>("theme-choice");
    select.value = theme;
    select.addEventListener("change", () => {
      applyTheme(select.value);
      command("set-theme", { theme: select.value });
    });
  } else {
    root.innerHTML = `
      <section class="tool-card">
        <h2>HotKeys</h2>
        <div class="plugin-row"><strong>Start script</strong><span>Ctrl+F5</span></div>
        <div class="plugin-row"><strong>Stop script</strong><span>Ctrl+F6</span></div>
        <div class="plugin-row"><strong>Toggle auto</strong><span>Ctrl+F7</span></div>
        <p class="muted">These shortcuts describe the local runtime controls.</p>
      </section>`;
  }
  bindToolButtons();
}

function renderGameOptions(): void {
  const draft = getGameOptionsDraft();
  const query = gameOptionSearch.trim().toLowerCase();
  const options = GAME_OPTION_DEFS.filter((option) => {
    if (!query) return true;
    return `${option.label} ${option.id}`.toLowerCase().includes(query);
  });

  root.innerHTML = `
    <section class="tool-card game-options-card">
      <div class="option-toolbar">
        <label class="field option-search"><span>Search</span><input id="game-option-search" class="input" value="${escapeAttr(gameOptionSearch)}" placeholder="Search" /></label>
        <label class="field columns-field"><span>Columns</span><input id="game-option-columns" class="input" type="number" min="1" max="8" value="${draft.columns}" /></label>
      </div>
      <div class="option-grid" style="--option-columns: ${draft.columns}">
        ${options.map((option) => gameOptionHtml(option, draft)).join("")}
      </div>
      <label class="field relogin-server-field"><span>Relogin Server</span><select id="game-relogin-server">
        ${serverOptions(String(draft.values["relogin-server"] ?? "Twilly"))}
      </select></label>
      <div class="option-footer">
        <button data-game-reset type="button">Reset</button>
        <button data-game-default type="button">Default</button>
        <button data-game-save type="button">Save</button>
      </div>
    </section>`;

  bindGameOptions();
}

function gameOptionHtml(option: GameOptionDef, draft: GameOptionsState): string {
  const value = draft.values[option.id] ?? option.defaultValue ?? "";
  if (option.kind === "toggle") {
    const checked = Boolean(value);
    return `
      <label class="option-chip ${checked ? "active" : ""}" title="${escapeAttr(option.label)}">
        <input data-game-option="${escapeAttr(option.id)}" type="checkbox"${checked ? " checked" : ""} />
        <span>${escapeHtml(option.label)}</span>
      </label>`;
  }
  if (option.kind === "number") {
    return `
      <div class="option-input">
        <input data-game-value="${escapeAttr(option.id)}" type="number" value="${escapeAttr(value)}" ${option.suffix ? `data-suffix="${escapeAttr(option.suffix)}"` : ""} />
        <button data-game-value-set="${escapeAttr(option.id)}" type="button">${escapeHtml(option.label)}</button>
      </div>`;
  }
  if (option.kind === "text") {
    return `
      <div class="option-input">
        <input data-game-value="${escapeAttr(option.id)}" value="${escapeAttr(value)}" placeholder="${escapeAttr(option.label)}" />
        <button data-game-value-set="${escapeAttr(option.id)}" type="button">Set</button>
      </div>`;
  }
  return `<button class="option-action" data-game-action="${escapeAttr(option.id)}" type="button">${escapeHtml(option.label)}</button>`;
}

function bindGameOptions(): void {
  byId<HTMLInputElement>("game-option-search").addEventListener("input", (event) => {
    gameOptionSearch = (event.currentTarget as HTMLInputElement).value;
    renderGameOptions();
  });

  byId<HTMLInputElement>("game-option-columns").addEventListener("change", (event) => {
    const draft = getGameOptionsDraft();
    draft.columns = clampColumns(Number((event.currentTarget as HTMLInputElement).value));
    void persistGameOptionsDraft();
    renderGameOptions();
  });

  root.querySelectorAll<HTMLInputElement>("[data-game-option]").forEach((input) => {
    input.addEventListener("change", () => {
      const option = GAME_OPTION_DEFS.find((item) => item.id === input.dataset.gameOption);
      if (!option) return;
      setDraftGameValue(option, input.checked);
      if (option.id === "accept-all-drops" && input.checked) setDraftGameValue("reject-all-drops", false);
      if (option.id === "accept-all-drops" && input.checked) setDraftGameValue("quest-drops-only", false);
      if (option.id === "reject-all-drops" && input.checked) setDraftGameValue("accept-all-drops", false);
      if (option.id === "reject-all-drops" && input.checked) setDraftGameValue("quest-drops-only", false);
      if (option.id === "quest-drops-only" && input.checked) {
        setDraftGameValue("accept-all-drops", false);
        setDraftGameValue("reject-all-drops", false);
      }
      command("set-game-option", { option: option.id, value: input.checked });
      void persistGameOptionsDraft();
      renderGameOptions();
    });
  });

  root.querySelectorAll<HTMLInputElement>("[data-game-value]").forEach((input) => {
    input.addEventListener("change", () => {
      const value = setDraftValueFromInput(input);
      command("set-game-option-value", { option: input.dataset.gameValue || "", value });
      void persistGameOptionsDraft();
    });
  });

  root.querySelectorAll<HTMLButtonElement>("[data-game-value-set]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.gameValueSet || "";
      const input = root.querySelector<HTMLInputElement>(`[data-game-value="${cssEscape(id)}"]`);
      if (!input) return;
      const value = setDraftValueFromInput(input);
      command("set-game-option-value", { option: id, value });
      void persistGameOptionsDraft();
    });
  });

  root.querySelectorAll<HTMLButtonElement>("[data-game-action]").forEach((button) => {
    button.addEventListener("click", () => command("run-action", { action: button.dataset.gameAction || "" }));
  });

  byId<HTMLSelectElement>("game-relogin-server").addEventListener("change", (event) => {
    const value = (event.currentTarget as HTMLSelectElement).value;
    setDraftGameValue("relogin-server", value);
    const input = root.querySelector<HTMLInputElement>('[data-game-value="relogin-server"]');
    if (input) input.value = value;
    command("set-game-option-value", { option: "relogin-server", value });
    void persistGameOptionsDraft();
  });

  root.querySelector<HTMLButtonElement>("[data-game-reset]")?.addEventListener("click", () => {
    void resetGameOptionsFromJson();
  });

  root.querySelector<HTMLButtonElement>("[data-game-default]")?.addEventListener("click", () => {
    gameOptionsDraft = createDefaultGameOptionsState();
    void saveGameOptionsToJson();
    localNote("Loaded default game options.");
    renderGameOptions();
  });

  root.querySelector<HTMLButtonElement>("[data-game-save]")?.addEventListener("click", () => {
    void saveGameOptionsToJson();
  });
}

async function hydrateGameOptionsDraftFromJson(): Promise<void> {
  if (tool !== "options" || section !== "game-options") return;
  const settings = await readNativeGameOptions();
  if (!settings) return;
  gameOptionsDraft = settings;
  renderGameOptions();
}

async function resetGameOptionsFromJson(): Promise<void> {
  gameOptionsDraft = (await readNativeGameOptions()) ?? createDefaultGameOptionsState();
  localNote("Reset game options to saved values.");
  renderGameOptions();
}

async function saveGameOptionsToJson(): Promise<void> {
  await persistGameOptionsDraft();
  const saved = getGameOptionsDraft();
  command("save-game-options", { settings: saved });
  localNote("Saved game options.");
  renderGameOptions();
}

async function persistGameOptionsDraft(): Promise<void> {
  const saved = writeGameOptionsState(getGameOptionsDraft());
  gameOptionsDraft = saved;
  await writeNativeGameOptions(saved);
}

function setDraftValueFromInput(input: HTMLInputElement): string | number {
  const option = GAME_OPTION_DEFS.find((item) => item.id === input.dataset.gameValue);
  if (!option) return input.value;
  const value = coerceGameOptionValue(option, input.value);
  setDraftGameValue(option, value);
  return value as string | number;
}

function setDraftGameValue(optionOrId: GameOptionDef | string, rawValue: unknown): void {
  const option = typeof optionOrId === "string" ? GAME_OPTION_DEFS.find((item) => item.id === optionOrId) : optionOrId;
  if (!option || option.kind === "action") return;
  getGameOptionsDraft().values[option.id] = coerceGameOptionValue(option, rawValue);
}

function getGameOptionsDraft(): GameOptionsState {
  if (!gameOptionsDraft) gameOptionsDraft = state.gameOptions ? normalizeGameOptionsState(state.gameOptions) : readGameOptionsState();
  return gameOptionsDraft;
}

async function readNativeGameOptions(): Promise<GameOptionsState | undefined> {
  const native = nativeApi();
  if (!native?.readJsonSetting) return undefined;
  const value = await native.readJsonSetting("game-options").catch(() => undefined);
  if (!value) return createDefaultGameOptionsState();
  return normalizeGameOptionsState(value as Partial<GameOptionsState>);
}

async function writeNativeGameOptions(settings: GameOptionsState): Promise<void> {
  const native = nativeApi();
  if (!native?.writeJsonSetting) return;
  await native.writeJsonSetting("game-options", settings).catch(() => undefined);
}

function bindScriptOptionsPanel(): void {
  const close = root.querySelector<HTMLButtonElement>("[data-command='script-options-close']");
  close?.addEventListener("click", () => {
    scriptOptionsOpen = false;
    renderScripts();
  });

  const privateRooms = root.querySelector<HTMLInputElement>("#script-private-rooms");
  privateRooms?.addEventListener("change", () => {
    void saveScriptGameOption("private-rooms", privateRooms.checked);
  });

  const privateNumber = root.querySelector<HTMLInputElement>("#script-private-number");
  privateNumber?.addEventListener("change", () => {
    const value = Math.max(1, Number(privateNumber.value || 100000));
    privateNumber.value = String(value);
    void saveScriptGameOption("private-number", value);
  });
}

async function saveScriptGameOption(option: string, value: GameOptionValue): Promise<void> {
  setDraftGameValue(option, value);
  if (option === "private-rooms" && value === true && Number(getGameOptionsDraft().values["private-number"] || 0) <= 0) {
    setDraftGameValue("private-number", 100000);
  }
  await persistGameOptionsDraft();
  command("set-game-option-value", { option, value: getGameOptionsDraft().values[option] });
  localNote(`${optionLabel(option)} saved.`);
}

function optionLabel(option: string): string {
  return GAME_OPTION_DEFS.find((item) => item.id === option)?.label ?? option;
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
} | undefined {
  const current = (window as unknown as {
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
    };
  }).veyraNative;
  const opener = window.opener
    ? (window.opener as unknown as {
        veyraNative?: typeof current;
      }).veyraNative
    : undefined;
  return current ?? opener;
}

function serverOptions(selected: string): string {
  const servers = RELOGIN_SERVERS.includes(selected) ? RELOGIN_SERVERS : [selected, ...RELOGIN_SERVERS];
  return servers
    .map((server) => `<option value="${escapeAttr(server)}"${server === selected ? " selected" : ""}>${escapeHtml(server)}</option>`)
    .join("");
}

function cssEscape(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function renderHelpers(): void {
  if (section === "fast-travel") {
    const searchInput = document.getElementById("fast-travel-search") as HTMLInputElement | null;
    const query = searchInput?.value.trim().toLowerCase() ?? "";
    const items = fastTravelSettings.items.filter((item) => !query || `${item.descriptionName} ${item.mapName} ${item.cell} ${item.pad}`.toLowerCase().includes(query));
    root.innerHTML = `
      <section class="tool-card fast-travel-card">
        <div class="toolbar-line">
          <input id="fast-travel-search" class="input" value="${escapeAttr(query)}" placeholder="Search" />
          <button data-fast-save type="button">Save</button>
          <button data-fast-clear type="button">Clear</button>
        </div>
        <div class="fast-private-row">
          <label class="check"><input id="fast-private" type="checkbox"${fastTravelSettings.privateRooms ? " checked" : ""} /> Private rooms</label>
          <label class="field"><span>Private Number</span><input id="fast-private-number" class="input" type="number" value="${fastTravelSettings.privateNumber}" /></label>
        </div>
        <div class="travel-list fast-travel-list">
          ${items.map((item, index) => fastTravelItemHtml(item, index)).join("") || `<div class="tool-note">No fast travels match.</div>`}
        </div>
        <details class="add-fast-travel">
          <summary>Add Fast Travel</summary>
          <div class="fast-editor-grid">
            <input id="fast-name" class="input" placeholder="Description Name" />
            <input id="fast-map" class="input" placeholder="Map Name" />
            <input id="fast-cell" class="input" placeholder="Cell" value="Enter" />
            <input id="fast-pad" class="input" placeholder="Pad" value="Spawn" />
          </div>
          <div class="button-grid two">
            <button data-fast-current type="button">Current</button>
            <button data-fast-add type="button">Add</button>
          </div>
        </details>
      </section>`;
    bindFastTravel();
    return;
  }

  if (section === "current-drops") {
    root.innerHTML = `
      <section class="tool-card current-drops-card">
        <div class="toolbar-line">
          <input id="current-drops-search" class="input" placeholder="Search current drops" />
          <button data-command="current-drops-refresh" type="button">Refresh</button>
          <button data-current-pick-all type="button">Pickup All</button>
        </div>
        <div class="data-list">
          ${currentDrops.map((drop, index) => currentDropRowHtml(drop, index)).join("") || `<div class="tool-note">No current drops found. Click Refresh after an item drops.</div>`}
        </div>
      </section>`;
    activeLog = "debug";
    bindCurrentDrops();
    return;
  }

  root.innerHTML = `
    <section class="runtime-grid">
      <section class="tool-card runtime-drops">
        <div class="runtime-list">${runtimeSettings.drops.map((drop, index) => `<button class="data-row" data-runtime-drop-index="${index}" type="button"><span>${index + 1}</span><span><strong>${escapeHtml(drop)}</strong><small>Pickup target</small></span><em>drop</em></button>`).join("") || `<div class="tool-note">Add drops to pickup automatically.</div>`}</div>
        <div class="runtime-add-row">
          <label class="field"><span>Drop Name</span><input id="runtime-drop-name" class="input" /></label>
          <button data-runtime-add-drop type="button">Add</button>
        </div>
        <div class="runtime-toggle-row">
          <label class="field"><span>Interval</span><input id="runtime-drop-interval" class="input" type="number" value="${runtimeSettings.interval}" /></label>
          <label class="check"><input id="runtime-reject-else" type="checkbox"${runtimeSettings.rejectElse ? " checked" : ""} /> Reject Else</label>
          <label class="check"><input id="runtime-accept-ac" type="checkbox"${runtimeSettings.acceptAC ? " checked" : ""} /> Accept AC Drops</label>
        </div>
        <button class="primary" data-runtime-toggle-drops type="button">${runtimeSettings.pickDrops ? "Stop Pick Drops" : "Pick Drops"}</button>
      </section>
      <section class="tool-card runtime-quests">
        <div class="runtime-list">${runtimeSettings.quests.map((quest, index) => `<button class="data-row" data-runtime-quest-index="${index}" type="button"><span>${index + 1}</span><span><strong>${quest.questId}</strong><small>Reward ${quest.rewardId}</small></span><em>quest</em></button>`).join("") || `<div class="tool-note">Registered quests show here.</div>`}</div>
        <div class="runtime-add-row two-inputs">
          <label class="field"><span>Quest ID</span><input id="runtime-quest-id" class="input" type="number" /></label>
          <label class="field"><span>Reward ID</span><input id="runtime-reward-id" class="input" type="number" value="-1" /></label>
          <button data-runtime-add-quest type="button">Add</button>
        </div>
      </section>
      <section class="tool-card runtime-boosts">
        <div class="button-grid two">
          <button data-runtime-search-boosts type="button">Search Boosts in Inventory</button>
          <button data-runtime-bank-boosts type="button">Bank</button>
        </div>
        ${(["class", "gold", "experience", "reputation"] as const).map((kind) => boostRowHtml(kind)).join("")}
        <button class="primary" data-runtime-use-boosts type="button">${runtimeSettings.boosts.enabled ? "Stop Boosts" : "Use Boosts"}</button>
      </section>
    </section>`;
  activeLog = "debug";
  bindRuntime();
}

function fastTravelItemHtml(item: FastTravelItem, index: number): string {
  return `
    <div class="fast-travel-item">
      <button data-travel="${escapeAttr(`${item.mapName}|${item.cell}|${item.pad}`)}" type="button"><strong>${escapeHtml(item.descriptionName)}</strong><span>${escapeHtml(item.mapName)} / ${escapeHtml(item.cell)} / ${escapeHtml(item.pad)}</span></button>
      <button data-fast-edit="${index}" type="button">Edit</button>
      <button data-fast-remove="${index}" type="button">X</button>
    </div>`;
}

function currentDropRowHtml(drop: Record<string, unknown>, index: number): string {
  const id = Number(drop.id ?? 0);
  const name = String(drop.displayName || drop.name || `Drop ${index + 1}`);
  const qty = Number(drop.quantity ?? 1);
  return `
    <button class="data-row" data-current-drop-index="${index}" type="button">
      <span>${index + 1}</span>
      <span><strong>${escapeHtml(name)}</strong><small>${id > 0 ? `ID ${id}` : "No ID"}${drop.ac ? " / AC" : ""}</small></span>
      <em>${qty}</em>
    </button>`;
}

function boostRowHtml(kind: "class" | "gold" | "experience" | "reputation"): string {
  const labels = { class: "Class Boost", gold: "Gold Boost", experience: "Experience Boost", reputation: "Reputation Boost" };
  return `
    <label class="boost-row">
      <span><input data-runtime-boost="${kind}" type="checkbox"${runtimeSettings.boosts[kind] ? " checked" : ""} /> ${labels[kind]}</span>
      <strong>${runtimeSettings.boosts.ids[kind] || 0}</strong>
    </label>`;
}

function bindRuntime(): void {
  byId<HTMLInputElement>("runtime-drop-interval").addEventListener("change", (event) => {
    runtimeSettings.interval = Math.max(0, Number((event.currentTarget as HTMLInputElement).value || 0));
    void writeRuntimeSettings();
  });
  byId<HTMLInputElement>("runtime-reject-else").addEventListener("change", (event) => {
    runtimeSettings.rejectElse = (event.currentTarget as HTMLInputElement).checked;
    void writeRuntimeSettings();
  });
  byId<HTMLInputElement>("runtime-accept-ac").addEventListener("change", (event) => {
    runtimeSettings.acceptAC = (event.currentTarget as HTMLInputElement).checked;
    void writeRuntimeSettings();
  });
  root.querySelector<HTMLButtonElement>("[data-runtime-add-drop]")?.addEventListener("click", () => {
    const input = byId<HTMLInputElement>("runtime-drop-name");
    const names = input.value.split("|").map((item) => item.trim()).filter(Boolean);
    runtimeSettings.drops = Array.from(new Set([...runtimeSettings.drops, ...names]));
    input.value = "";
    void writeRuntimeSettings();
    renderHelpers();
  });
  root.querySelectorAll<HTMLButtonElement>("[data-runtime-drop-index]").forEach((button) => {
    button.addEventListener("click", () => {
      runtimeSettings.drops.splice(Number(button.dataset.runtimeDropIndex || 0), 1);
      void writeRuntimeSettings();
      renderHelpers();
    });
  });
  root.querySelector<HTMLButtonElement>("[data-runtime-toggle-drops]")?.addEventListener("click", () => {
    runtimeSettings.pickDrops = !runtimeSettings.pickDrops;
    command(runtimeSettings.pickDrops ? "runtime-pick-drops" : "runtime-stop-drops", {
      names: runtimeSettings.drops,
      interval: runtimeSettings.interval,
      rejectElse: runtimeSettings.rejectElse,
      acceptAC: runtimeSettings.acceptAC
    });
    void writeRuntimeSettings();
    renderHelpers();
  });
  root.querySelector<HTMLButtonElement>("[data-runtime-add-quest]")?.addEventListener("click", () => {
    const questId = Number(byId<HTMLInputElement>("runtime-quest-id").value || 0);
    const rewardId = Number(byId<HTMLInputElement>("runtime-reward-id").value || -1);
    if (questId > 0) runtimeSettings.quests.push({ questId, rewardId });
    void writeRuntimeSettings();
    renderHelpers();
  });
  root.querySelectorAll<HTMLButtonElement>("[data-runtime-quest-index]").forEach((button) => {
    button.addEventListener("click", () => {
      runtimeSettings.quests.splice(Number(button.dataset.runtimeQuestIndex || 0), 1);
      void writeRuntimeSettings();
      renderHelpers();
    });
  });
  root.querySelectorAll<HTMLInputElement>("[data-runtime-boost]").forEach((input) => {
    input.addEventListener("change", () => {
      const kind = input.dataset.runtimeBoost as "class" | "gold" | "experience" | "reputation";
      runtimeSettings.boosts[kind] = input.checked;
      void writeRuntimeSettings();
    });
  });
  root.querySelector<HTMLButtonElement>("[data-runtime-use-boosts]")?.addEventListener("click", () => {
    runtimeSettings.boosts.enabled = !runtimeSettings.boosts.enabled;
    void writeRuntimeSettings();
    localNote(runtimeSettings.boosts.enabled ? "Boost helper enabled." : "Boost helper disabled.");
    renderHelpers();
  });
  root.querySelector<HTMLButtonElement>("[data-runtime-search-boosts]")?.addEventListener("click", () => localNote("Boost ID search queued for the full inventory API pass."));
  root.querySelector<HTMLButtonElement>("[data-runtime-bank-boosts]")?.addEventListener("click", () => localNote("Bank boost search queued for the full bank API pass."));
}

function bindFastTravel(): void {
  byId<HTMLInputElement>("fast-travel-search").addEventListener("input", () => renderHelpers());
  byId<HTMLInputElement>("fast-private").addEventListener("change", (event) => {
    fastTravelSettings.privateRooms = (event.currentTarget as HTMLInputElement).checked;
    void writeFastTravelSettings();
  });
  byId<HTMLInputElement>("fast-private-number").addEventListener("change", (event) => {
    fastTravelSettings.privateNumber = Number((event.currentTarget as HTMLInputElement).value || 0);
    void writeFastTravelSettings();
  });
  root.querySelector<HTMLButtonElement>("[data-fast-save]")?.addEventListener("click", () => void writeFastTravelSettings());
  root.querySelector<HTMLButtonElement>("[data-fast-clear]")?.addEventListener("click", () => {
    fastTravelSettings.items = [];
    void writeFastTravelSettings();
    renderHelpers();
  });
  root.querySelector<HTMLButtonElement>("[data-fast-add]")?.addEventListener("click", () => {
    const item = {
      descriptionName: byId<HTMLInputElement>("fast-name").value.trim(),
      mapName: byId<HTMLInputElement>("fast-map").value.trim(),
      cell: byId<HTMLInputElement>("fast-cell").value.trim() || "Enter",
      pad: byId<HTMLInputElement>("fast-pad").value.trim() || "Spawn"
    };
    if (!item.descriptionName || !item.mapName) return;
    fastTravelSettings.items.push(item);
    void writeFastTravelSettings();
    renderHelpers();
  });
  root.querySelector<HTMLButtonElement>("[data-fast-current]")?.addEventListener("click", () => {
    command("console-command", { command: "/snapshot" });
    localNote("Snapshot requested. Use the current map/cell/pad shown in logs.");
  });
  root.querySelectorAll<HTMLButtonElement>("[data-fast-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      fastTravelSettings.items.splice(Number(button.dataset.fastRemove || 0), 1);
      void writeFastTravelSettings();
      renderHelpers();
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-fast-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = fastTravelSettings.items[Number(button.dataset.fastEdit || 0)];
      if (!item) return;
      byId<HTMLInputElement>("fast-name").value = item.descriptionName;
      byId<HTMLInputElement>("fast-map").value = item.mapName;
      byId<HTMLInputElement>("fast-cell").value = item.cell;
      byId<HTMLInputElement>("fast-pad").value = item.pad;
    });
  });
  bindTravelButtons();
}

function bindCurrentDrops(): void {
  bindToolButtons();
  root.querySelectorAll<HTMLButtonElement>("[data-current-drop-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const drop = currentDrops[Number(button.dataset.currentDropIndex || 0)];
      if (!drop) return;
      command("current-drops-pickup", { id: Number(drop.id ?? 0), name: String(drop.name ?? drop.displayName ?? "") });
    });
  });
  root.querySelector<HTMLButtonElement>("[data-current-pick-all]")?.addEventListener("click", () => {
    currentDrops.forEach((drop) => command("current-drops-pickup", { id: Number(drop.id ?? 0), name: String(drop.name ?? drop.displayName ?? "") }));
  });
}

function renderTools(): void {
  if (section === "console") {
    root.innerHTML = `
      <section class="tool-card">
        <h2>Console</h2>
        <label class="field"><span>Command</span><input id="console-command-window" class="input" value="/snapshot" /></label>
        <button data-command="console-run-window" type="button">Run</button>
        <p class="muted">Commands: /snapshot, /join map cell pad, /jump cell pad, /packet raw, or any object path.</p>
        <div class="mini-log" id="tool-log"></div>
      </section>`;
    activeLog = "debug";
    bindToolButtons();
    renderLogBox();
    return;
  }

  if (section === "grabber") {
    const selected = selectedGrabberItem();
    const filtered = filteredGrabberItems();
    root.innerHTML = `
      <section class="tool-card grabber-card">
        <div class="grabber-heading">
          <div>
            <h2>Grabber</h2>
            <small>${escapeHtml(grabberTypeLabel(activeGrabberType))} · ${filtered.length} result${filtered.length === 1 ? "" : "s"}</small>
          </div>
        </div>
        <div class="mini-tabs">
          ${grabberTypes()
            .map((item) => `<button class="${item.type === activeGrabberType ? "active" : ""}" data-grabber-type="${item.type}" type="button">${escapeHtml(item.label)}</button>`)
            .join("")}
        </div>
        <div class="toolbar-line grabber-toolbar">
          <input id="grabber-search" class="input" value="${escapeAttr(grabberSearch)}" placeholder="Search ${escapeAttr(grabberTypeLabel(activeGrabberType))}" />
          <button data-command="grabber-refresh" type="button">Grab</button>
          <button data-command="grabber-clear" type="button">Clear</button>
        </div>
        <div class="data-browser">
          <div class="data-list">
            ${filtered
              .map((item, index) => grabberRowHtml(item, index))
              .join("") || `<div class="tool-note">Click Grab after opening the matching game panel.</div>`}
          </div>
          <dl class="property-grid">${propertyHtml(selected)}</dl>
          <div class="button-grid three">${grabberActionButtons(activeGrabberType)}</div>
        </div>
      </section>`;
    activeLog = "debug";
    bindGrabber();
    restoreGrabberScroll();
    return;
  }

  if (section === "stats") {
    root.innerHTML = `
      <section class="tool-card">
        <h2>Stats</h2>
        <button data-command="snapshot" type="button">Refresh Stats</button>
        <div class="mini-log" id="tool-log"></div>
      </section>`;
    activeLog = "debug";
    bindToolButtons();
    renderLogBox();
    return;
  }

  if (section === "junk-items") {
    root.innerHTML = `
      <section class="tool-card">
        <h2>Junk Items</h2>
        <label class="field"><span>Item</span><input id="junk-item-name" class="input" placeholder="Item name" /></label>
        <div class="button-grid two">
          <button data-command="junk-add" type="button">Add</button>
          <button data-command="junk-remove" type="button">Remove</button>
        </div>
        <div class="data-list">${junkItems.map((item) => `<button class="data-row" data-junk="${escapeAttr(item)}" type="button"><span>-</span><span><strong>${escapeHtml(item)}</strong><small>Local junk list</small></span><em>junk</em></button>`).join("") || `<div class="tool-note">No junk items saved.</div>`}</div>
      </section>`;
    bindToolButtons();
    return;
  }

  const loadedQuests = grabberItems.filter((item) => item.grabType === "quests").slice(0, 30);
  root.innerHTML = `
    <section class="tool-card">
      <h2>Loader</h2>
      <div class="loader-grid">
        <label class="field"><span>Type</span><select id="loader-kind"><option value="quest">Quest</option><option value="shop">Shop</option></select></label>
        <label class="field"><span>IDs</span><input id="loader-ids" class="input" placeholder="Example: 7866, 8148" /></label>
      </div>
      <div class="button-grid three">
        <button data-command="loader-load" type="button">Load</button>
        <button data-command="loader-loaded-quests" type="button">Loaded Quests</button>
        <button data-command="loader-copy-ids" type="button">Copy IDs</button>
      </div>
      <div class="data-list">
        ${loadedQuests.map((item, index) => grabberRowHtml(item, index)).join("") || `<div class="tool-note">Load quest IDs, then use Loaded Quests to inspect quest values.</div>`}
      </div>
      <div class="button-grid three">
        <button data-command="loader-accept" type="button">Accept</button>
        <button data-command="loader-fake-complete" type="button">Fake Complete</button>
        <button data-command="loader-open-selected" type="button">Open</button>
      </div>
    </section>`;
  bindLoader();
}

function grabberTypes(): Array<{ type: GrabberType; label: string }> {
  return [
    { type: "shop-items", label: "Shop Items" },
    { type: "shop-ids", label: "Shop IDs" },
    { type: "quests", label: "Quests" },
    { type: "inventory", label: "Inventory" },
    { type: "house-inventory", label: "House Inventory" },
    { type: "temp-inventory", label: "Temp Inventory" },
    { type: "bank-items", label: "Bank Items" },
    { type: "cell-monsters", label: "Cell Monsters" },
    { type: "map-monsters", label: "Map Monsters" },
    { type: "map-items", label: "GetMap Item IDs" }
  ];
}

function filteredGrabberItems(): Record<string, unknown>[] {
  const query = grabberSearch.trim().toLowerCase();
  const typed = grabberItems.filter((item) => item.grabType === activeGrabberType);
  if (!query) return typed;
  return typed.filter((item) => `${item.name ?? ""} ${item.detail ?? ""} ${item.id ?? ""}`.toLowerCase().includes(query));
}

function grabberRowHtml(item: Record<string, unknown>, displayIndex: number): string {
  const sourceIndex = Number(item.grabIndex ?? displayIndex);
  const active = sourceIndex === selectedGrabberIndex ? "active" : "";
  const id = item.id === undefined || item.id === "" || item.id === 0 ? "" : String(item.id);
  return `
    <button class="data-row grabber-row ${active}" data-grabber-index="${sourceIndex}" type="button">
      <span class="grabber-row-index">${sourceIndex + 1}</span>
      <span class="grabber-row-main">
        <strong>${escapeHtml(item.name ?? "Unknown")}</strong>
        <small>${escapeHtml(item.detail ?? "")}</small>
      </span>
      ${id ? `<em class="grabber-row-id">ID ${escapeHtml(id)}</em>` : `<em class="grabber-row-id muted-id">No ID</em>`}
    </button>`;
}

function grabberActionButtons(type: GrabberType): string {
  const actions: Record<GrabberType, Array<[string, string]>> = {
    "shop-items": [
      ["buy", "Buy"],
      ["inspect", "Inspect"]
    ],
    "shop-ids": [["load-shop", "Load Shop"]],
    quests: [
      ["open-quest", "Open"],
      ["accept-quest", "Accept"],
      ["fake-complete", "Fake Complete"]
    ],
    inventory: [
      ["equip", "Equip"],
      ["sell", "Sell"],
      ["to-bank", "To Bank"]
    ],
    "house-inventory": [["house-to-bank", "To Bank"]],
    "temp-inventory": [["inspect", "Inspect"]],
    "bank-items": [["to-inventory", "To Inventory"]],
    "cell-monsters": [["kill", "Kill"]],
    "map-monsters": [
      ["kill", "Kill"],
      ["teleport", "Teleport To"]
    ],
    "map-items": [["inspect", "Inspect"]]
  };
  return actions[type].map(([action, label]) => `<button data-grabber-action="${action}" type="button">${escapeHtml(label)}</button>`).join("");
}

function propertyHtml(item: Record<string, unknown>): string {
  const keys = ["id", "name", "detail", "charItemId", "shopItemId", "value", "slot", "cell", "pad"];
  return keys
    .filter((key) => item[key] !== undefined && item[key] !== "" && item[key] !== 0)
    .map((key) => `<div><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(item[key])}</dd></div>`)
    .join("");
}

function bindGrabber(): void {
  root.querySelectorAll<HTMLButtonElement>("[data-grabber-type]").forEach((button) => {
    button.addEventListener("click", () => {
      activeGrabberType = (button.dataset.grabberType || "inventory") as GrabberType;
      selectedGrabberIndex = 0;
      grabberSearch = "";
      grabberListScrollTop = 0;
      command("grabber-grab", { grabType: activeGrabberType });
      renderTools();
    });
  });
  byId<HTMLInputElement>("grabber-search").addEventListener("input", (event) => {
    grabberSearch = (event.currentTarget as HTMLInputElement).value;
    grabberListScrollTop = 0;
    renderTools();
  });
  root.querySelectorAll<HTMLButtonElement>("[data-grabber-index]").forEach((button) => {
    button.addEventListener("click", () => {
      rememberGrabberScroll();
      selectedGrabberIndex = Number(button.dataset.grabberIndex || 0);
      renderTools();
    });
  });
  root.querySelector<HTMLButtonElement>("[data-command='grabber-refresh']")?.addEventListener("click", () => {
    grabberListScrollTop = 0;
    command("grabber-grab", { grabType: activeGrabberType });
  });
  root.querySelector<HTMLButtonElement>("[data-command='grabber-clear']")?.addEventListener("click", () => {
    grabberItems = grabberItems.filter((item) => item.grabType !== activeGrabberType);
    selectedGrabberIndex = 0;
    grabberListScrollTop = 0;
    localNote(`Cleared ${grabberTypeLabel(activeGrabberType)} results.`);
    renderTools();
  });
  root.querySelectorAll<HTMLButtonElement>("[data-grabber-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = selectedGrabberItem();
      if ((button.dataset.grabberAction || "") === "inspect") {
        localNote(JSON.stringify(selected, null, 2).slice(0, 1200));
        return;
      }
      command("grabber-action", { action: button.dataset.grabberAction || "", grabType: activeGrabberType, item: selected });
    });
  });
}

function rememberGrabberScroll(): void {
  grabberListScrollTop = root.querySelector<HTMLElement>(".data-list")?.scrollTop ?? 0;
}

function restoreGrabberScroll(): void {
  const list = root.querySelector<HTMLElement>(".data-list");
  if (list) list.scrollTop = grabberListScrollTop;
}

function rememberScriptPickerScroll(): void {
  scriptPickerListScrollTop = root.querySelector<HTMLElement>("#script-picker-list")?.scrollTop ?? 0;
}

function restoreScriptPickerScroll(): void {
  const list = root.querySelector<HTMLElement>("#script-picker-list");
  if (list) list.scrollTop = scriptPickerListScrollTop;
}

function rememberBuilderScroll(): void {
  if (tool !== "builder") return;
  builderScrollState = {
    meta: root.querySelector<HTMLElement>(".builder-meta")?.scrollTop ?? builderScrollState.meta,
    flow: root.querySelector<HTMLElement>(".builder-action-list")?.scrollTop ?? builderScrollState.flow,
    inspector: root.querySelector<HTMLElement>(".builder-inspector")?.scrollTop ?? builderScrollState.inspector
  };
  builderContextScrollState = {
    monsters: root.querySelector<HTMLElement>('[data-builder-context-list="monsters"]')?.scrollTop ?? builderContextScrollState.monsters,
    quests: root.querySelector<HTMLElement>('[data-builder-context-list="quests"]')?.scrollTop ?? builderContextScrollState.quests
  };
}

function restoreBuilderScroll(): void {
  if (tool !== "builder") return;
  const next = { ...builderScrollState };
  const nextContext = { ...builderContextScrollState };
  window.requestAnimationFrame(() => {
    const meta = root.querySelector<HTMLElement>(".builder-meta");
    const flow = root.querySelector<HTMLElement>(".builder-action-list");
    const inspector = root.querySelector<HTMLElement>(".builder-inspector");
    const monsters = root.querySelector<HTMLElement>('[data-builder-context-list="monsters"]');
    const quests = root.querySelector<HTMLElement>('[data-builder-context-list="quests"]');
    if (meta) meta.scrollTop = next.meta;
    if (flow) flow.scrollTop = next.flow;
    if (inspector) inspector.scrollTop = next.inspector;
    if (monsters) monsters.scrollTop = nextContext.monsters;
    if (quests) quests.scrollTop = nextContext.quests;
  });
}

function bindLoader(): void {
  root.querySelector<HTMLButtonElement>("[data-command='loader-load']")?.addEventListener("click", () => {
    command("loader-load", {
      kind: byId<HTMLSelectElement>("loader-kind").value,
      ids: byId<HTMLInputElement>("loader-ids").value
    });
  });
  root.querySelector<HTMLButtonElement>("[data-command='loader-loaded-quests']")?.addEventListener("click", () => {
    activeGrabberType = "quests";
    command("loader-fetch-quests");
  });
  root.querySelector<HTMLButtonElement>("[data-command='loader-copy-ids']")?.addEventListener("click", () => {
    const ids = filteredGrabberItems()
      .map((item) => item.id)
      .filter(Boolean)
      .join(", ");
    copyText(ids);
    localNote(`Copied ${ids ? ids : "no"} IDs.`);
  });
  root.querySelectorAll<HTMLButtonElement>("[data-grabber-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedGrabberIndex = Number(button.dataset.grabberIndex || 0);
      renderTools();
    });
  });
  root.querySelector<HTMLButtonElement>("[data-command='loader-accept']")?.addEventListener("click", () => {
    command("grabber-action", { action: "accept-quest", grabType: "quests", item: selectedGrabberItem() });
  });
  root.querySelector<HTMLButtonElement>("[data-command='loader-fake-complete']")?.addEventListener("click", () => {
    command("grabber-action", { action: "fake-complete", grabType: "quests", item: selectedGrabberItem() });
  });
  root.querySelector<HTMLButtonElement>("[data-command='loader-open-selected']")?.addEventListener("click", () => {
    command("grabber-action", { action: "open-quest", grabType: "quests", item: selectedGrabberItem() });
  });
}

function selectedGrabberItem(): Record<string, unknown> {
  return grabberItems.find((item) => item.grabType === activeGrabberType && Number(item.grabIndex ?? -1) === selectedGrabberIndex) ?? filteredGrabberItems()[0] ?? {};
}

function grabberTypeLabel(type: GrabberType): string {
  return grabberTypes().find((item) => item.type === type)?.label ?? type;
}

function renderAdvanced(): void {
  root.innerHTML = `
    <section class="tool-card">
      <h2>Advanced</h2>
      <label class="field"><span>Object path</span><input id="object-path-window" class="input" value="world.myAvatar.objData" /></label>
      <button data-command="inspect-object-window" type="button">Inspect Object</button>
      <label class="field"><span>Console command</span><input id="console-command-window" class="input" value="/snapshot" /></label>
      <button data-command="console-run-window" type="button">Run Command</button>
    </section>
    <section class="tool-card">
      <h2>Fast Travel</h2>
      <div class="travel-list">
        ${[
          ["battleon", "Enter", "Spawn"],
          ["icestormunder", "r2", "Top"],
          ["battlegrounde", "r2", "Left"],
          ["sevencircleswar", "Enter", "Right"],
          ["house", "Enter", "Spawn"]
        ]
          .map(([map, cell, pad]) => `<button data-travel="${map}|${cell}|${pad}" type="button"><strong>${map}</strong><span>${cell} / ${pad}</span></button>`)
          .join("")}
      </div>
    </section>
    <section class="tool-card">
      <h2>Accounts</h2>
      <label class="field"><span>Alias</span><input id="account-alias" class="input" placeholder="Main" /></label>
      <button data-command="save-account-alias" type="button">Save Alias</button>
      <p class="muted">Passwords are intentionally not stored in this prototype.</p>
    </section>`;
  bindToolButtons();
  bindTravelButtons();
}

function handleToolButton(action: string): void {
  const selectedId = currentScriptWindowSelection();
  if (action === "load-script") command("load-script", { id: selectedId });
  else if (action === "start-script") command("start-script", { id: selectedId });
  else if (action === "stop-script") command("stop-script");
  else if (action === "open-repo") {
    scriptPickerSearch = "";
    scriptPickerListScrollTop = 0;
    command("open-repo");
    localNote("Refreshing local script list...");
    renderScripts();
  }
  else if (action === "open-script-folder") openScriptsFolder();
  else if (action === "edit-script") void openScriptIdInVsCode(selectedId);
  else if (action === "edit-script-vscode") void openScriptIdInVsCode(selectedId);
  else if (action === "open-builder") openBuilderWindow(selectedId);
  else if (action === "script-options") {
    scriptOptionsOpen = !scriptOptionsOpen;
    renderScripts();
  }
  else if (action === "script-options-close") {
    scriptOptionsOpen = false;
    renderScripts();
  }
  else if (action === "clear-script-log") command("clear-log", { kind: "script" });
  else if (action === "copy-script-log") copyText(state.logs.script.join("\n"));
  else if (action === "save-script-log") saveText(state.logs.script.join("\n"), "veyra-script.log");
  else if (action === "capture-packets") command("run-action", { action: "capture-packets" });
  else if (action === "send-packet-window") command("send-packet", { packet: byId<HTMLTextAreaElement>("packet-input-window").value.trim() });
  else if (action === "packet-spam-window")
    command("packet-spam-start", { packet: byId<HTMLTextAreaElement>("packet-input-window").value.trim(), delay: Number(byId<HTMLInputElement>("packet-delay").value || 1000) });
  else if (action === "packet-spam-stop") command("packet-spam-stop");
  else if (action === "packet-rule-window") command("packet-interceptor-apply", { rule: byId<HTMLInputElement>("packet-rule-window").value.trim() });
  else if (action === "packet-server-refresh") {
    packetInterceptorServersRequested = true;
    localNote("Refreshing live AQW server list.");
    command("packet-interceptor-refresh-servers");
  }
  else if (action === "packet-interceptor-connect") {
    const selectedServer = selectedPacketServer();
    packetInterceptorSettings.connected = false;
    packetInterceptorStatus = "connecting";
    packetInterceptorMessage = selectedServer ? `Connecting to ${selectedServer.label}.` : `Connecting to ${packetInterceptorSettings.server}.`;
    void writePacketInterceptorSettings();
    command("packet-interceptor-connect", { server: packetInterceptorSettings.server, serverData: selectedServer?.raw });
    renderPackets();
  }
  else if (action === "packet-interceptor-disconnect") {
    packetInterceptorSettings.connected = false;
    packetInterceptorStatus = "idle";
    packetInterceptorMessage = "Interceptor disconnected.";
    void writePacketInterceptorSettings();
    command("packet-interceptor-disconnect", { server: packetInterceptorSettings.server });
    renderPackets();
  }
  else if (action === "clear-packet-log") command("clear-log", { kind: "packet" });
  else if (action === "toggle-bank") command("run-action", { action: "toggle-bank" });
  else if (action === "open-inventory") command("run-action", { action: "open-inventory" });
  else if (action === "inspect-inventory") command("inspect-object", { path: "world.myAvatar.items" });
  else if (action === "inspect-bank") command("inspect-object", { path: "world.bankinfo.items" });
  else if (action === "clear-log") command("clear-log", { kind: activeLog });
  else if (action === "copy-log") copyText(state.logs[activeLog].join("\n"));
  else if (action === "auto-attack") command("dropdown-action", { action: "auto-attack", menu: "auto" });
  else if (action === "auto-hunt") command("dropdown-action", { action: "auto-hunt", menu: "auto" });
  else if (action === "auto-stop") command("dropdown-action", { action: "auto-stop", menu: "auto" });
  else if (action === "inspect-object-window") command("inspect-object", { path: byId<HTMLInputElement>("object-path-window").value.trim() });
  else if (action === "console-run-window") command("console-command", { command: byId<HTMLInputElement>("console-command-window").value.trim() });
  else if (action === "snapshot") command("console-command", { command: "/snapshot" });
  else if (action === "reload-client") command("run-action", { action: "reload-client" });
  else if (action === "refresh-runtime") command("console-command", { command: "/snapshot" });
  else if (action === "skip-cutscenes") command("run-action", { action: "skip-cutscenes" });
  else if (action === "inspect-drops") command("inspect-object", { path: "ui.dropStack" });
  else if (action === "inspect-drop-stack") command("inspect-object", { path: "ui.dropStack.numChildren" });
  else if (action === "current-drops-refresh") command("current-drops-refresh");
  else if (action === "save-local-options") localNote("Saved local options.");
  else if (action === "junk-add") void addJunkItem();
  else if (action === "junk-remove") void removeJunkItem();
  else if (action === "save-skill-set") void saveSkillSet();
  else if (action === "load-skill-set") void loadSkillSet();
  else if (action === "save-account-alias") void saveAccountAlias();
}

function openBuilderWindow(scriptId = ""): void {
  const url = new URL(`${window.location.origin}/src/tool.html`);
  url.searchParams.set("tool", "builder");
  const selected = state.scripts.find((script) => script.id === scriptId);
  if (selected?.category === "Builder") url.searchParams.set("script", scriptId);
  window.open(url.toString(), "veyra-builder", "width=940,height=620");
  localNote(selected?.category === "Builder" ? `Opened ${selected.meta.name} in Script Builder.` : "Opened Script Builder.");
}

function currentScriptWindowSelection(): string {
  const active = root.querySelector<HTMLButtonElement>("[data-script-picker].active");
  return active?.dataset.scriptPicker || state.selectedScriptId || state.loadedScriptId || state.scripts[0]?.id || "";
}

function bindToolButtons(): void {
  root.querySelectorAll<HTMLButtonElement>("[data-command]").forEach((button) => {
    button.addEventListener("click", () => handleToolButton(button.dataset.command || ""));
  });
  root.querySelectorAll<HTMLButtonElement>("[data-junk]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById("junk-item-name") as HTMLInputElement | null;
      if (input) input.value = button.dataset.junk || "";
    });
  });
}

function bindTravelButtons(): void {
  root.querySelectorAll<HTMLButtonElement>("[data-travel]").forEach((button) => {
    button.addEventListener("click", () => {
      const [map, cell, pad] = (button.dataset.travel || "battleon|Enter|Spawn").split("|");
      command("travel", {
        map,
        cell,
        pad,
        privateRooms: fastTravelSettings.privateRooms,
        privateNumber: fastTravelSettings.privateNumber
      });
    });
  });
}

function renderLogBox(): void {
  const box = document.getElementById("tool-log");
  if (!box) return;
  box.textContent = state.logs[activeLog].join("\n");
  box.scrollTop = box.scrollHeight;
}

async function saveSkillSet(): Promise<void> {
  const name = byId<HTMLInputElement>("skill-set-name").value.trim() || "Default";
  const sequence = byId<HTMLInputElement>("skill-sequence").value.trim() || "1,2,3,4,5";
  const sets = await readObjectSetting("skill-sets");
  sets[name] = sequence;
  await writeJsonSetting("skill-sets", sets);
  localNote(`Saved skill set ${name}.`);
}

async function loadSkillSet(): Promise<void> {
  const name = byId<HTMLInputElement>("skill-set-name").value.trim() || "Default";
  const sets = await readObjectSetting("skill-sets");
  const sequence = typeof sets[name] === "string" ? sets[name] : "";
  if (sequence) byId<HTMLInputElement>("skill-sequence").value = sequence;
  localNote(sequence ? `Loaded skill set ${name}.` : `No saved skill set named ${name}.`);
}

async function saveAccountAlias(): Promise<void> {
  const alias = byId<HTMLInputElement>("account-alias").value.trim();
  if (!alias) return;
  await writeJsonSetting("account-alias", { alias });
  localNote(`Saved account alias ${alias}.`);
}

function openScriptsFolder(): void {
  const native = nativeApi();
  void native?.openScriptsFolder?.();
  localNote("Opening local scripts folder.");
}

async function addJunkItem(): Promise<void> {
  const input = byId<HTMLInputElement>("junk-item-name");
  const item = input.value.trim();
  if (!item) return;
  junkItems = Array.from(new Set([...junkItems, item])).sort((a, b) => a.localeCompare(b));
  await writeJunkItems();
  localNote(`Added ${item} to junk items.`);
  renderTools();
}

async function removeJunkItem(): Promise<void> {
  const input = byId<HTMLInputElement>("junk-item-name");
  const item = input.value.trim();
  if (!item) return;
  junkItems = junkItems.filter((entry) => entry.toLowerCase() !== item.toLowerCase());
  await writeJunkItems();
  localNote(`Removed ${item} from junk items.`);
  renderTools();
}

function applyTheme(theme: string): void {
  const allowed = ["veyra-dark", "classic-slate", "forest-mist", "night-rose", "github-dark", "catppuccin-mocha", "high-contrast"];
  const nextTheme = allowed.includes(theme) ? theme : "veyra-dark";
  activeTheme = nextTheme;
  if (nextTheme === "veyra-dark") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = nextTheme;
}

async function hydrateThemeFromFile(): Promise<void> {
  const saved = await readJsonSetting("theme").catch(() => undefined);
  if (!saved) return;
  const theme = typeof saved === "string" ? saved : String((saved as Record<string, unknown>).theme ?? "");
  if (theme) applyTheme(theme);
}

async function hydrateJunkItemsFromFile(): Promise<void> {
  const value = await readJsonSetting("junk-items").catch(() => undefined);
  junkItems = toStringArray(value);
  if (tool === "tools" && section === "junk-items") renderTools();
}

async function writeJunkItems(): Promise<void> {
  await writeJsonSetting("junk-items", junkItems);
}

async function hydrateRuntimeSettingsFromFile(): Promise<void> {
  const value = await readJsonSetting("runtime").catch(() => undefined);
  runtimeSettings = normalizeRuntimeSettings(value);
  if (tool === "helpers" && section === "runtime") renderHelpers();
}

async function writeRuntimeSettings(): Promise<void> {
  await writeJsonSetting("runtime", runtimeSettings);
}

async function hydrateFastTravelSettingsFromFile(): Promise<void> {
  const value = await readJsonSetting("fast-travel").catch(() => undefined);
  fastTravelSettings = normalizeFastTravelSettings(value);
  if (tool === "helpers" && section === "fast-travel") renderHelpers();
}

async function writeFastTravelSettings(): Promise<void> {
  await writeJsonSetting("fast-travel", fastTravelSettings);
}

async function hydratePacketInterceptorSettingsFromFile(): Promise<void> {
  const value = await readJsonSetting("packet-interceptor").catch(() => undefined);
  packetInterceptorSettings = normalizePacketInterceptorSettings(value);
  if (tool === "packets" && section === "packet-interceptor") renderPackets();
}

async function writePacketInterceptorSettings(): Promise<void> {
  await writeJsonSetting("packet-interceptor", packetInterceptorSettings);
}

function defaultRuntimeSettings(): RuntimeSettings {
  return {
    drops: [],
    interval: 0,
    rejectElse: false,
    acceptAC: false,
    pickDrops: false,
    quests: [],
    boosts: {
      enabled: false,
      class: false,
      gold: false,
      experience: false,
      reputation: false,
      ids: { class: 0, gold: 0, experience: 0, reputation: 0 }
    }
  };
}

function defaultFastTravelSettings(): FastTravelSettings {
  return {
    privateRooms: false,
    privateNumber: 100000,
    items: [
      { descriptionName: "Tercessuinotlim", mapName: "tercessuinotlim", cell: "Enter", pad: "Spawn" },
      { descriptionName: "Nulgath", mapName: "tercessuinotlim", cell: "Boss2", pad: "Right" },
      { descriptionName: "VHL & Taro", mapName: "tercessuinotlim", cell: "Taro", pad: "Left" }
    ]
  };
}

function defaultPacketInterceptorSettings(): PacketInterceptorSettings {
  return {
    connected: false,
    server: "Yorumi",
    logPackets: true,
    search: "",
    filterSearch: "",
    filters: {}
  };
}

function normalizeRuntimeSettings(value: unknown): RuntimeSettings {
  const defaults = defaultRuntimeSettings();
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
  const boosts = source.boosts && typeof source.boosts === "object" && !Array.isArray(source.boosts) ? (source.boosts as Record<string, unknown>) : {};
  const ids = boosts.ids && typeof boosts.ids === "object" && !Array.isArray(boosts.ids) ? (boosts.ids as Record<string, unknown>) : {};
  return {
    drops: Array.isArray(source.drops) ? source.drops.map(String).filter(Boolean) : defaults.drops,
    interval: Math.max(0, Number(source.interval ?? defaults.interval)),
    rejectElse: source.rejectElse === true,
    acceptAC: source.acceptAC === true,
    pickDrops: source.pickDrops === true,
    quests: Array.isArray(source.quests)
      ? source.quests
          .map((quest) => (quest && typeof quest === "object" ? (quest as Record<string, unknown>) : {}))
          .map((quest) => ({ questId: Number(quest.questId ?? 0), rewardId: Number(quest.rewardId ?? -1) }))
          .filter((quest) => quest.questId > 0)
      : [],
    boosts: {
      enabled: boosts.enabled === true,
      class: boosts.class === true,
      gold: boosts.gold === true,
      experience: boosts.experience === true,
      reputation: boosts.reputation === true,
      ids: {
        class: Number(ids.class ?? 0),
        gold: Number(ids.gold ?? 0),
        experience: Number(ids.experience ?? 0),
        reputation: Number(ids.reputation ?? 0)
      }
    }
  };
}

function normalizeFastTravelSettings(value: unknown): FastTravelSettings {
  const defaults = defaultFastTravelSettings();
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
  const items = Array.isArray(source.items)
    ? source.items
        .map((item) => (item && typeof item === "object" ? (item as Record<string, unknown>) : {}))
        .map((item) => ({
          descriptionName: String(item.descriptionName ?? ""),
          mapName: String(item.mapName ?? ""),
          cell: String(item.cell ?? "Enter"),
          pad: String(item.pad ?? "Spawn")
        }))
        .filter((item) => item.descriptionName && item.mapName)
    : defaults.items;
  return {
    privateRooms: source.privateRooms === true,
    privateNumber: Number(source.privateNumber ?? defaults.privateNumber),
    items
  };
}

function normalizePacketInterceptorSettings(value: unknown): PacketInterceptorSettings {
  const defaults = defaultPacketInterceptorSettings();
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
  const filters = source.filters && typeof source.filters === "object" && !Array.isArray(source.filters) ? (source.filters as Record<string, unknown>) : {};
  return {
    connected: source.connected === true,
    server: typeof source.server === "string" ? cleanServerName(source.server) : defaults.server,
    logPackets: source.logPackets !== false,
    search: typeof source.search === "string" ? source.search : "",
    filterSearch: typeof source.filterSearch === "string" ? source.filterSearch : "",
    filters: Object.fromEntries(Object.entries(filters).map(([key, entry]) => [key, entry === true]))
  };
}

function normalizePacketServerOptions(value: unknown): PacketServerOption[] {
  return toRecordArray(value)
    .map((server) => normalizePacketServerOption(server))
    .filter((server): server is PacketServerOption => Boolean(server));
}

function normalizePacketServerOption(value: Record<string, unknown>): PacketServerOption | undefined {
  const name = cleanServerName(String(value.name ?? value.sName ?? value.Name ?? ""));
  if (!name) return undefined;
  const count = numberOrUndefined(value.count ?? value.iCount ?? value.playerCount ?? value.PlayerCount);
  const max = numberOrUndefined(value.max ?? value.iMax ?? value.maxPlayers ?? value.MaxPlayers);
  const online = booleanOrUndefined(value.online ?? value.bOnline ?? value.Online);
  const option: PacketServerOption = {
    name,
    label: packetServerLabel(name, count, max),
    connectable: value.connectable === true || Boolean(value.raw && typeof value.raw === "object"),
    refreshedAt: typeof value.refreshedAt === "string" ? value.refreshedAt : ""
  };
  if (count !== undefined) option.count = count;
  if (max !== undefined) option.max = max;
  if (online !== undefined) option.online = online;
  if (value.raw && typeof value.raw === "object" && !Array.isArray(value.raw)) option.raw = value.raw as Record<string, unknown>;
  return option;
}

function packetServerLabel(name: string, count?: number, max?: number): string {
  if (typeof count === "number" && typeof max === "number" && max > 0) return `${name} - ${count}/${max}`;
  if (typeof count === "number") return `${name} - ${count}`;
  return name;
}

function cleanServerName(value: string): string {
  return value.replace(/\s+-\s+\d+(?:\/\d+)?\s*$/u, "").trim();
}

function sameServerName(left: string, right: string): boolean {
  return cleanServerName(left).toLowerCase() === cleanServerName(right).toLowerCase();
}

function numberOrUndefined(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function booleanOrUndefined(value: unknown): boolean | undefined {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "true" || lower === "1") return true;
    if (lower === "false" || lower === "0") return false;
  }
  return undefined;
}

async function readObjectSetting(name: string): Promise<Record<string, string>> {
  const value = await readJsonSetting(name).catch(() => undefined);
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const result: Record<string, string> = {};
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (typeof entry === "string") result[key] = entry;
  }
  return result;
}

async function readJsonSetting(name: string): Promise<unknown> {
  return nativeApi()?.readJsonSetting?.(name);
}

async function writeJsonSetting(name: string, value: unknown): Promise<unknown> {
  return nativeApi()?.writeJsonSetting?.(name, value);
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String).filter(Boolean).sort((left, right) => left.localeCompare(right)) : [];
}

function normalizeBuilderContext(value: unknown): BuilderContext {
  const source = value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
  const snapshotSource = source.snapshot && typeof source.snapshot === "object" && !Array.isArray(source.snapshot) ? (source.snapshot as Record<string, unknown>) : undefined;
  const context: BuilderContext = {
    cells: uniqueToolStrings(toStringArray(source.cells)),
    pads: uniqueToolStrings(toStringArray(source.pads)),
    cellMonsters: toRecordArray(source.cellMonsters),
    mapMonsters: toRecordArray(source.mapMonsters),
    quests: toRecordArray(source.quests),
    refreshedAt: typeof source.refreshedAt === "string" ? source.refreshedAt : ""
  };
  if (snapshotSource) {
    context.snapshot = {
      loggedIn: snapshotSource.loggedIn === true,
      username: typeof snapshotSource.username === "string" ? snapshotSource.username : "",
      map: typeof snapshotSource.map === "string" ? snapshotSource.map : "",
      cell: typeof snapshotSource.cell === "string" ? snapshotSource.cell : "",
      pad: typeof snapshotSource.pad === "string" ? snapshotSource.pad : "",
      room: Number(snapshotSource.room || 0),
      level: Number(snapshotSource.level || 0)
    };
  }
  return context;
}

function toRecordArray(value: unknown): Record<string, unknown>[] {
  return Array.isArray(value) ? value.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === "object" && !Array.isArray(item))) : [];
}

function uniqueToolStrings(values: unknown[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const text = String(value ?? "").trim();
    if (!text || seen.has(text.toLowerCase())) continue;
    seen.add(text.toLowerCase());
    result.push(text);
  }
  return result;
}

function uniqueGrabberRows(items: Record<string, unknown>[], limit: number): Record<string, unknown>[] {
  const seen = new Set<string>();
  const result: Record<string, unknown>[] = [];
  for (const item of items) {
    const key = `${String(item.id ?? "")}:${String(item.name ?? "")}`.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(item);
    if (result.length >= limit) break;
  }
  return result;
}

function monsterPlacementRows(items: Record<string, unknown>[], limit: number): Record<string, unknown>[] {
  const seen = new Set<string>();
  const result: Record<string, unknown>[] = [];
  for (const item of items) {
    const key = [
      String(item.id ?? ""),
      String(item.name ?? "").toLowerCase(),
      firstNonEmpty(item, ["cell", "strFrame", "frame"]).toLowerCase(),
      firstNonEmpty(item, ["pad", "strPad"]).toLowerCase()
    ].join(":");
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(item);
    if (result.length >= limit) break;
  }
  return result;
}

function firstNonEmpty(item: Record<string, unknown> | undefined, keys: string[]): string {
  if (!item) return "";
  for (const key of keys) {
    const value = String(item[key] ?? "").trim();
    if (value) return value;
  }
  return "";
}

function localNote(message: string): void {
  const line = `[${new Date().toLocaleTimeString([], { hour12: false })}] ${message}`;
  state.logs.event = [...state.logs.event.slice(-199), line];
  statusText.textContent = message;
  if (tool === "logs") renderLogs();
  if (tool === "scripts") renderLogBox();
}

function command(name: string, payload: Record<string, unknown> = {}): void {
  bus.postMessage({ type: "command", command: name, payload });
}

function scriptName(id: string): string {
  return state.scripts.find((script) => script.id === id)?.meta.name ?? "";
}

function titleFor(name: string, activeSection = ""): string {
  const titles: Record<string, string> = {
    scripts: "Load Script",
    skills: "Skills",
    packets: activeSection ? sectionLabel(activeSection) : "Packets",
    bank: "Bank",
    logs: "Logs",
    plugins: "Plugins",
    builder: "Script Builder",
    advanced: "Advanced",
    options: activeSection ? sectionLabel(activeSection) : "Options",
    helpers: activeSection ? sectionLabel(activeSection) : "Helpers",
    tools: activeSection ? sectionLabel(activeSection) : "Tools"
  };
  return titles[name] ?? "Veyra Tool";
}

function sectionLabel(value: string): string {
  const labels: Record<string, string> = {
    "game-options": "Game Options",
    "application-options": "Application Options",
    "core-options": "CoreBots Options",
    "theme-options": "Application Themes",
    hotkeys: "HotKeys",
    runtime: "Runtime",
    "fast-travel": "Fast Travel",
    "current-drops": "Current Drops",
    loader: "Loader",
    grabber: "Grabber",
    "junk-items": "Junk Items",
    stats: "Stats",
    console: "Console",
    "packet-spammer": "Packet Spammer",
    "packet-logger": "Packet Logger",
    "packet-interceptor": "Packet Interceptor"
  };
  return labels[value] ?? value.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function resizeSelf(): void {
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
  const [width, height] = sectionSizes[`${tool}:${section}`] ?? sizes[tool] ?? [460, 520];
  window.setTimeout(() => {
    try {
      window.resizeTo(width, height);
    } catch {
      // Native bounds can be managed by Electron when an existing named window is reused.
    }
  }, 30);
}

function isToolState(value: unknown): value is ToolState {
  const candidate = value as ToolState;
  return Array.isArray(candidate.scripts) && typeof candidate.selectedScriptId === "string" && typeof candidate.loadedScriptId === "string";
}

function isLogKind(value: unknown): value is LogKind {
  return value === "script" || value === "debug" || value === "packet" || value === "event";
}

function isPacketConnectionStatus(value: unknown): value is typeof packetInterceptorStatus {
  return value === "idle" || value === "connecting" || value === "connected" || value === "failed";
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

function copyText(value: string): void {
  void navigator.clipboard?.writeText(value);
}

function saveText(value: string, fileName: string): void {
  const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
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
