interface LauncherAccount {
  id: string;
  username: string;
  label: string;
  defaultServer?: string;
  createdAt: string;
  updatedAt: string;
}

interface LauncherServer {
  name: string;
  label?: string;
  ip?: string;
  port?: number;
  playerCount?: number;
  maxPlayers?: number;
  count?: number;
  max?: number;
  online?: boolean;
  upgrade?: boolean;
  raw?: Record<string, unknown>;
}

interface LauncherNativeApi {
  readJsonSetting?: (name: string) => Promise<unknown>;
  writeJsonSetting?: (name: string, value: unknown) => Promise<unknown>;
  listLauncherAccounts: () => Promise<LauncherAccount[]>;
  saveLauncherAccount: (account: { username: string; password: string; label?: string; defaultServer?: string }) => Promise<LauncherAccount[]>;
  deleteLauncherAccount: (id: string) => Promise<LauncherAccount[]>;
  listServers: () => Promise<LauncherServer[]>;
  startLauncherAccounts: (accountIds: string[], server: string | LauncherServer) => Promise<Array<{ username: string; server?: LauncherServer | null }>>;
  openEmptyClient: () => Promise<void>;
}

declare global {
  interface Window {
    veyraNative?: LauncherNativeApi;
  }
}

const native = window.veyraNative;
const themeBus = new BroadcastChannel("veyra-theme");
const themeOptions = [
  { id: "veyra-dark", label: "Soft Graphite" },
  { id: "classic-slate", label: "Classic Slate" },
  { id: "forest-mist", label: "Forest Mist" },
  { id: "night-rose", label: "Night Rose" },
  { id: "github-dark", label: "GitHub Dark" },
  { id: "catppuccin-mocha", label: "Catppuccin Mocha" },
  { id: "high-contrast", label: "High Contrast" }
];
const selectedAccountIds = new Set<string>();
let accounts: LauncherAccount[] = [];
let servers: LauncherServer[] = [];
let selectedServer = "Twilly";
let selectedAccountServer = "";
let serverDropdownOpen = false;
let accountServerDropdownOpen = false;
let activeTheme = "veyra-dark";
let pendingDeleteAccountId = "";
const logLines: string[] = [];

const statusEl = byId<HTMLElement>("launcher-status");
const accountListEl = byId<HTMLElement>("account-list");
const serverDropdownEl = byId<HTMLElement>("server-dropdown");
const serverDropdownButtonEl = byId<HTMLButtonElement>("server-dropdown-button");
const serverDropdownLabelEl = byId<HTMLElement>("server-dropdown-label");
const serverDropdownMenuEl = byId<HTMLElement>("server-dropdown-menu");
const accountServerDropdownEl = byId<HTMLElement>("account-server-dropdown");
const accountServerDropdownButtonEl = byId<HTMLButtonElement>("account-server-dropdown-button");
const accountServerDropdownLabelEl = byId<HTMLElement>("account-server-dropdown-label");
const accountServerDropdownMenuEl = byId<HTMLElement>("account-server-dropdown-menu");
const serverSummaryEl = byId<HTMLElement>("server-summary");
const accountCountLabelEl = byId<HTMLElement>("account-count-label");
const serverCountLabelEl = byId<HTMLElement>("server-count-label");
const selectionSummaryEl = byId<HTMLElement>("selection-summary");
const logCountEl = byId<HTMLElement>("log-count");
const logEl = byId<HTMLPreElement>("launcher-log");
const themeSelectEl = byId<HTMLSelectElement>("launcher-theme-select");
const selectAllButtonEl = byId<HTMLButtonElement>("select-all");

renderThemeSelect();
applyTheme(activeTheme);
void hydrateThemeFromFile();
void boot();

themeBus.onmessage = (event: MessageEvent<unknown>) => {
  const message = event.data as { type?: unknown; theme?: unknown };
  if (message?.type === "theme" && typeof message.theme === "string") applyTheme(message.theme);
};

async function boot(): Promise<void> {
  bindControls();
  if (!native) {
    setStatus("Native launcher API unavailable.");
    return;
  }
  await Promise.all([refreshAccounts(), refreshServers()]);
  setStatus("Ready");
}

function bindControls(): void {
  themeSelectEl.addEventListener("change", () => void changeTheme(themeSelectEl.value));
  byId<HTMLButtonElement>("refresh-servers").addEventListener("click", () => void refreshServers(true));
  byId<HTMLButtonElement>("open-empty-client").addEventListener("click", () => void openEmptyClient());
  byId<HTMLButtonElement>("save-account").addEventListener("click", () => void saveAccount());
  selectAllButtonEl.addEventListener("click", toggleAllAccounts);
  byId<HTMLButtonElement>("start-selected").addEventListener("click", () => void startSelected());
  serverDropdownButtonEl.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setServerDropdownOpen(!serverDropdownOpen);
  });
  accountServerDropdownButtonEl.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setAccountServerDropdownOpen(!accountServerDropdownOpen);
  });
  document.addEventListener("mousedown", () => {
    setServerDropdownOpen(false);
    setAccountServerDropdownOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setServerDropdownOpen(false);
      setAccountServerDropdownOpen(false);
    }
  });
}

async function refreshAccounts(): Promise<void> {
  if (!native) return;
  accounts = await native.listLauncherAccounts();
  for (const id of Array.from(selectedAccountIds)) {
    if (!accounts.some((account) => account.id === id)) selectedAccountIds.delete(id);
  }
  if (pendingDeleteAccountId && !accounts.some((account) => account.id === pendingDeleteAccountId)) pendingDeleteAccountId = "";
  renderAccounts();
}

async function refreshServers(forceLog = false): Promise<void> {
  if (!native) return;
  setStatus("Refreshing live server list...");
  try {
    servers = await native.listServers();
    if (servers.length > 0 && !servers.some((server) => sameServer(server.name, selectedServer))) selectedServer = servers[0]?.name ?? selectedServer;
    if (forceLog) pushLog(`Loaded ${servers.length} live server${servers.length === 1 ? "" : "s"}.`);
  } catch (error) {
    pushLog(`Server refresh failed: ${describeError(error)}`);
  }
  renderServers();
  setStatus("Ready");
}

async function saveAccount(): Promise<void> {
  if (!native) return;
  const username = byId<HTMLInputElement>("account-username").value.trim();
  const password = byId<HTMLInputElement>("account-password").value;
  const label = byId<HTMLInputElement>("account-label").value.trim();
  try {
    accounts = await native.saveLauncherAccount({ username, password, label, defaultServer: selectedAccountServer });
    byId<HTMLInputElement>("account-password").value = "";
    byId<HTMLInputElement>("account-label").value = "";
    selectedAccountServer = "";
    pushLog(`Saved account ${username}.`);
    renderAccounts();
    renderServers();
  } catch (error) {
    pushLog(`Save failed: ${describeError(error)}`);
  }
}

async function deleteAccount(id: string): Promise<void> {
  if (!native) return;
  if (!id) return;
  if (pendingDeleteAccountId !== id) {
    pendingDeleteAccountId = id;
    renderAccounts();
    return;
  }

  accounts = await native.deleteLauncherAccount(id);
  selectedAccountIds.delete(id);
  pendingDeleteAccountId = "";
  pushLog("Account deleted.");
  renderAccounts();
}

async function startSelected(): Promise<void> {
  if (!native) return;
  const ids = selectedAccountIds.size > 0 ? Array.from(selectedAccountIds) : accounts.slice(0, 1).map((account) => account.id);
  if (ids.length === 0) {
    pushLog("Add or select an account first.");
    return;
  }
  try {
    const selected = selectedServerInfo();
    const launched = await native.startLauncherAccounts(ids, selected ?? selectedServer);
    for (const item of launched) pushLog(`Started ${item.username} on ${item.server?.name ?? selectedServer}.`);
  } catch (error) {
    pushLog(`Launch failed: ${describeError(error)}`);
  }
}

async function openEmptyClient(): Promise<void> {
  if (!native) return;
  await native.openEmptyClient();
  pushLog("Opened an empty Veyra client.");
}

function toggleAllAccounts(): void {
  if (accounts.length > 0 && selectedAccountIds.size === accounts.length) {
    selectedAccountIds.clear();
  } else {
    for (const account of accounts) selectedAccountIds.add(account.id);
  }
  renderAccounts();
}

function renderAccounts(): void {
  accountCountLabelEl.textContent = `${accounts.length} ${accounts.length === 1 ? "account" : "accounts"}`;
  selectionSummaryEl.textContent = selectionSummary();
  selectAllButtonEl.textContent = accounts.length > 0 && selectedAccountIds.size === accounts.length ? "Deselect All" : "Select All";

  if (accounts.length === 0) {
    accountListEl.innerHTML = `
      <div class="empty-state">
        <strong>No accounts saved</strong>
        <span>The vault is empty.</span>
      </div>`;
    return;
  }

  accountListEl.innerHTML = accounts
    .map((account, index) => {
      const checked = selectedAccountIds.has(account.id) ? " checked" : "";
      const confirming = pendingDeleteAccountId === account.id;
      return `
        <div class="launcher-account-row${checked ? " selected" : ""}${confirming ? " confirming-delete" : ""}">
          <label>
            <input data-account-select="${escapeAttr(account.id)}" type="checkbox"${checked} />
            <i aria-hidden="true">${String(index + 1).padStart(2, "0")}</i>
            <span>
              <strong>${escapeHtml(account.label || account.username)}</strong>
              <small>${escapeHtml(account.username)} - ${escapeHtml(account.defaultServer || "Login Server")}</small>
            </span>
          </label>
          ${
            confirming
              ? `<div class="launcher-account-actions">
                  <button class="danger" data-account-delete="${escapeAttr(account.id)}" type="button">Confirm</button>
                  <button data-account-delete-cancel="${escapeAttr(account.id)}" type="button">Cancel</button>
                </div>`
              : `<button data-account-delete="${escapeAttr(account.id)}" type="button">Delete</button>`
          }
        </div>`;
    })
    .join("");

  accountListEl.querySelectorAll<HTMLInputElement>("[data-account-select]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.accountSelect || "";
      if (input.checked) selectedAccountIds.add(id);
      else selectedAccountIds.delete(id);
      renderAccounts();
    });
  });

  accountListEl.querySelectorAll<HTMLButtonElement>("[data-account-delete]").forEach((button) => {
    button.addEventListener("click", () => void deleteAccount(button.dataset.accountDelete || ""));
  });

  accountListEl.querySelectorAll<HTMLButtonElement>("[data-account-delete-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      if (pendingDeleteAccountId === button.dataset.accountDeleteCancel) pendingDeleteAccountId = "";
      renderAccounts();
    });
  });
}

function renderServers(): void {
  const options = servers.length > 0 ? [...servers] : [{ name: selectedServer }];
  if (!options.some((server) => sameServer(server.name, selectedServer))) options.unshift({ name: selectedServer });
  serverCountLabelEl.textContent = servers.length > 0 ? `${servers.length} ${servers.length === 1 ? "server" : "servers"}` : "-- servers";
  serverDropdownMenuEl.innerHTML = options
    .map((server) => {
      const label = server.label || serverLabel(server);
      const selected = sameServer(server.name, selectedServer);
      return `
        <button class="server-dropdown-option${selected ? " selected" : ""}" data-server-name="${escapeAttr(server.name)}" type="button" role="option" aria-selected="${selected ? "true" : "false"}">
          <span>${escapeHtml(label)}</span>
        </button>`;
    })
    .join("");

  const selected = options.find((server) => sameServer(server.name, selectedServer));
  serverDropdownLabelEl.textContent = selected ? selected.label || serverLabel(selected) : "Server list loading...";
  serverSummaryEl.textContent = selected ? `${selected.name}${serverPopulation(selected) ? ` - ${serverPopulation(selected)}` : ""}${selected.upgrade ? " - Member" : ""}` : "Server list loading...";
  accountServerDropdownLabelEl.textContent = accountServerLabel(options);
  accountServerDropdownMenuEl.innerHTML = [
    `<button class="server-dropdown-option${selectedAccountServer ? "" : " selected"}" data-account-server-name="" type="button" role="option" aria-selected="${selectedAccountServer ? "false" : "true"}">
      <span>Use Login Server</span>
    </button>`,
    ...options.map((server) => {
      const label = server.label || serverLabel(server);
      const selectedAccountDefault = sameServer(server.name, selectedAccountServer);
      return `
        <button class="server-dropdown-option${selectedAccountDefault ? " selected" : ""}" data-account-server-name="${escapeAttr(server.name)}" type="button" role="option" aria-selected="${selectedAccountDefault ? "true" : "false"}">
          <span>${escapeHtml(label)}</span>
        </button>`;
    })
  ].join("");
  selectionSummaryEl.textContent = selectionSummary();

  serverDropdownMenuEl.querySelectorAll<HTMLButtonElement>("[data-server-name]").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      selectedServer = button.dataset.serverName || selectedServer;
      setServerDropdownOpen(false);
      renderServers();
    });
  });

  accountServerDropdownMenuEl.querySelectorAll<HTMLButtonElement>("[data-account-server-name]").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      selectedAccountServer = button.dataset.accountServerName || "";
      setAccountServerDropdownOpen(false);
      renderServers();
    });
  });
}

function selectedServerInfo(): LauncherServer | undefined {
  return servers.find((server) => sameServer(server.name, selectedServer));
}

function setServerDropdownOpen(open: boolean): void {
  serverDropdownOpen = open;
  if (open) {
    accountServerDropdownOpen = false;
    accountServerDropdownEl.classList.remove("open");
    accountServerDropdownButtonEl.setAttribute("aria-expanded", "false");
  }
  serverDropdownEl.classList.toggle("open", open);
  serverDropdownButtonEl.setAttribute("aria-expanded", open ? "true" : "false");
}

function setAccountServerDropdownOpen(open: boolean): void {
  accountServerDropdownOpen = open;
  if (open) {
    serverDropdownOpen = false;
    serverDropdownEl.classList.remove("open");
    serverDropdownButtonEl.setAttribute("aria-expanded", "false");
  }
  accountServerDropdownEl.classList.toggle("open", open);
  accountServerDropdownButtonEl.setAttribute("aria-expanded", open ? "true" : "false");
}

function accountServerLabel(options: LauncherServer[]): string {
  if (!selectedAccountServer) return "Use Login Server";
  const selected = options.find((server) => sameServer(server.name, selectedAccountServer));
  return selected ? selected.label || serverLabel(selected) : selectedAccountServer;
}

function serverLabel(server: LauncherServer): string {
  const population = serverPopulation(server);
  return population ? `${server.name} - ${population}${server.upgrade ? " - Member" : ""}` : server.name;
}

function serverPopulation(server: LauncherServer): string {
  const count = Number(server.playerCount ?? server.count ?? 0);
  const max = Number(server.maxPlayers ?? server.max ?? 0);
  if (count > 0 || max > 0) return `${count}${max > 0 ? `/${max}` : ""}`;
  return "";
}

function sameServer(left: string, right: string): boolean {
  return left.trim().toLowerCase() === right.trim().toLowerCase();
}

function applyTheme(theme: string): void {
  activeTheme = normalizeTheme(theme);
  if (activeTheme === "veyra-dark") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = activeTheme;
  themeSelectEl.value = activeTheme;
}

async function changeTheme(theme: string): Promise<void> {
  applyTheme(theme);
  await writeJsonSetting("theme", { theme: activeTheme }).catch(() => undefined);
  themeBus.postMessage({ type: "theme", theme: activeTheme });
  pushLog(`Theme changed to ${themeLabel(activeTheme)}.`);
}

async function hydrateThemeFromFile(): Promise<void> {
  const saved = await readJsonSetting("theme").catch(() => undefined);
  if (!saved) return;
  const theme = typeof saved === "string" ? saved : stringFrom((saved as Record<string, unknown>).theme);
  if (theme) applyTheme(theme);
}

async function readJsonSetting(name: string): Promise<unknown> {
  return native?.readJsonSetting?.(name);
}

async function writeJsonSetting(name: string, value: unknown): Promise<unknown> {
  return native?.writeJsonSetting?.(name, value);
}

function renderThemeSelect(): void {
  themeSelectEl.innerHTML = themeOptions.map((theme) => `<option value="${escapeAttr(theme.id)}">${escapeHtml(theme.label)}</option>`).join("");
}

function normalizeTheme(theme: string): string {
  return themeOptions.some((option) => option.id === theme) ? theme : "veyra-dark";
}

function themeLabel(theme: string): string {
  return themeOptions.find((option) => option.id === theme)?.label ?? theme;
}

function stringFrom(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function setStatus(message: string): void {
  statusEl.textContent = message;
}

function pushLog(message: string): void {
  const time = new Date().toLocaleTimeString([], { hour12: false });
  logLines.unshift(`[${time}] ${message}`);
  logEl.textContent = logLines.slice(0, 30).join("\n");
  logCountEl.textContent = String(logLines.length);
}

function selectionSummary(): string {
  const selectedCount = selectedAccountIds.size;
  if (accounts.length === 0) return "No accounts saved";
  if (selectedCount === 0) return "No accounts selected";
  return `${selectedCount} selected for ${selectedServer}`;
}

function byId<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Missing element: ${id}`);
  return element as T;
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
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

export {};
