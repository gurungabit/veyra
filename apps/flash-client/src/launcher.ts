interface LauncherAccount {
  id: string;
  username: string;
  label: string;
  group: string;
  createdAt: string;
  updatedAt: string;
}

interface LauncherServer {
  name: string;
  label?: string;
  playerCount?: number;
  maxPlayers?: number;
  count?: number;
  max?: number;
  online?: boolean;
  upgrade?: boolean;
}

interface LauncherNativeApi {
  listLauncherAccounts: () => Promise<LauncherAccount[]>;
  saveLauncherAccount: (account: { username: string; password: string; label?: string; group?: string }) => Promise<LauncherAccount[]>;
  deleteLauncherAccount: (id: string) => Promise<LauncherAccount[]>;
  listServers: () => Promise<LauncherServer[]>;
  startLauncherAccounts: (accountIds: string[], serverName: string) => Promise<Array<{ username: string; server?: LauncherServer | null }>>;
  openEmptyClient: () => Promise<void>;
}

declare global {
  interface Window {
    veyraNative?: LauncherNativeApi;
  }
}

const native = window.veyraNative;
const selectedAccountIds = new Set<string>();
let accounts: LauncherAccount[] = [];
let servers: LauncherServer[] = [];
let selectedServer = "Twilly";
const logLines: string[] = [];

const statusEl = byId<HTMLElement>("launcher-status");
const accountListEl = byId<HTMLElement>("account-list");
const serverSelectEl = byId<HTMLSelectElement>("server-select");
const serverSummaryEl = byId<HTMLElement>("server-summary");
const logEl = byId<HTMLPreElement>("launcher-log");

void boot();

async function boot(): Promise<void> {
  bindControls();
  if (!native) {
    setStatus("Native launcher API unavailable.");
    return;
  }
  await Promise.all([refreshAccounts(), refreshServers()]);
  setStatus("Ready.");
}

function bindControls(): void {
  byId<HTMLButtonElement>("refresh-servers").addEventListener("click", () => void refreshServers(true));
  byId<HTMLButtonElement>("open-empty-client").addEventListener("click", () => void openEmptyClient());
  byId<HTMLButtonElement>("save-account").addEventListener("click", () => void saveAccount());
  byId<HTMLButtonElement>("select-all").addEventListener("click", selectAllAccounts);
  byId<HTMLButtonElement>("start-selected").addEventListener("click", () => void startSelected());
  serverSelectEl.addEventListener("change", () => {
    selectedServer = serverSelectEl.value;
    renderServers();
  });
}

async function refreshAccounts(): Promise<void> {
  if (!native) return;
  accounts = await native.listLauncherAccounts();
  for (const id of Array.from(selectedAccountIds)) {
    if (!accounts.some((account) => account.id === id)) selectedAccountIds.delete(id);
  }
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
  setStatus("Ready.");
}

async function saveAccount(): Promise<void> {
  if (!native) return;
  const username = byId<HTMLInputElement>("account-username").value.trim();
  const password = byId<HTMLInputElement>("account-password").value;
  const label = byId<HTMLInputElement>("account-label").value.trim();
  const group = byId<HTMLInputElement>("account-group").value.trim() || "Default";
  try {
    accounts = await native.saveLauncherAccount({ username, password, label, group });
    byId<HTMLInputElement>("account-password").value = "";
    byId<HTMLInputElement>("account-label").value = "";
    pushLog(`Saved account ${username}.`);
    renderAccounts();
  } catch (error) {
    pushLog(`Save failed: ${describeError(error)}`);
  }
}

async function deleteAccount(id: string): Promise<void> {
  if (!native) return;
  accounts = await native.deleteLauncherAccount(id);
  selectedAccountIds.delete(id);
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
    const launched = await native.startLauncherAccounts(ids, selectedServer);
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

function selectAllAccounts(): void {
  for (const account of accounts) selectedAccountIds.add(account.id);
  renderAccounts();
}

function renderAccounts(): void {
  if (accounts.length === 0) {
    accountListEl.innerHTML = `<div class="empty-state">No accounts saved yet.</div>`;
    return;
  }

  accountListEl.innerHTML = accounts
    .map((account) => {
      const checked = selectedAccountIds.has(account.id) ? " checked" : "";
      return `
        <div class="launcher-account-row">
          <label>
            <input data-account-select="${escapeAttr(account.id)}" type="checkbox"${checked} />
            <span>
              <strong>${escapeHtml(account.label || account.username)}</strong>
              <small>${escapeHtml(account.username)}${account.group ? ` / ${escapeHtml(account.group)}` : ""}</small>
            </span>
          </label>
          <button data-account-delete="${escapeAttr(account.id)}" type="button">Delete</button>
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
}

function renderServers(): void {
  const options = servers.length > 0 ? servers : [{ name: selectedServer }];
  if (!options.some((server) => sameServer(server.name, selectedServer))) options.unshift({ name: selectedServer });
  serverSelectEl.innerHTML = options
    .map((server) => {
      const label = server.label || serverLabel(server);
      return `<option value="${escapeAttr(server.name)}"${sameServer(server.name, selectedServer) ? " selected" : ""}>${escapeHtml(label)}</option>`;
    })
    .join("");

  const selected = options.find((server) => sameServer(server.name, selectedServer));
  serverSummaryEl.textContent = selected ? `${selected.name}: ${serverPopulation(selected)}${selected.upgrade ? " / Member" : ""}` : "Server list loading...";
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

function setStatus(message: string): void {
  statusEl.textContent = message;
}

function pushLog(message: string): void {
  const time = new Date().toLocaleTimeString([], { hour12: false });
  logLines.unshift(`[${time}] ${message}`);
  logEl.textContent = logLines.slice(0, 80).join("\n");
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
