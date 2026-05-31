export type UpdateState = "idle" | "checking" | "available" | "not-available" | "error";

export interface UpdateStatus {
  state: UpdateState;
  message: string;
  currentVersion: string;
  version: string;
  percent: number;
  canCheck: boolean;
  canOpen: boolean;
  releaseUrl: string;
  isPackaged: boolean;
}

interface UpdateNativeApi {
  getUpdateStatus?: () => Promise<UpdateStatus>;
  checkForUpdates?: () => Promise<UpdateStatus>;
  openUpdateRelease?: () => Promise<UpdateStatus>;
  onUpdateStatus?: (callback: (status: UpdateStatus) => void) => () => void;
}

interface UpdateButtonOptions {
  button: HTMLButtonElement;
  label?: HTMLElement | null;
  detail?: HTMLElement | null;
  log?: (message: string) => void;
}

export function bindUpdateButton(options: UpdateButtonOptions): void {
  const api = nativeUpdateApi();
  const label = options.label ?? options.button.querySelector<HTMLElement>("[data-update-label]");
  const detail = options.detail ?? options.button.querySelector<HTMLElement>("[data-update-detail]");
  let status: UpdateStatus | undefined;

  const render = (next: UpdateStatus) => {
    status = next;
    options.button.dataset.updateState = next.state;
    options.button.hidden = !shouldShowUpdateButton(next);
    options.button.disabled = next.state === "checking" || (!next.canCheck && !next.canOpen);
    options.button.title = updateTitle(next);
    options.button.setAttribute("aria-label", updateTitle(next));
    if (label) label.textContent = updateLabel(next);
    if (detail) detail.textContent = updateDetail(next);
  };

  if (!api?.getUpdateStatus || !api?.onUpdateStatus) {
    options.button.hidden = true;
    return;
  }

  options.button.addEventListener("click", () => {
    void handleUpdateClick(api, status, options.log);
  });

  api.onUpdateStatus(render);
  void api.getUpdateStatus().then(render).catch(() => {
    options.button.hidden = true;
  });
}

async function handleUpdateClick(api: UpdateNativeApi, status: UpdateStatus | undefined, log?: (message: string) => void): Promise<void> {
  try {
    if (status?.state === "available") {
      log?.("Opening Veyra release downloads...");
      await api.openUpdateRelease?.();
      return;
    }

    log?.("Checking for Veyra updates...");
    await api.checkForUpdates?.();
  } catch (error) {
    log?.(`Update action failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function shouldShowUpdateButton(status: UpdateStatus): boolean {
  if (!status.isPackaged) return false;
  return status.canCheck || status.canOpen || status.state === "checking";
}

function updateLabel(status: UpdateStatus): string {
  switch (status.state) {
    case "available":
      return "Update available";
    case "error":
      return "Retry updates";
    case "checking":
      return "Checking...";
    default:
      return "Check updates";
  }
}

function updateDetail(status: UpdateStatus): string {
  if (status.state === "available" && status.version) return `Open Veyra ${status.version}`;
  return status.message || "";
}

function updateTitle(status: UpdateStatus): string {
  switch (status.state) {
    case "available":
      return status.version ? `Veyra ${status.version} is available. Open release downloads.` : "Update available. Open release downloads.";
    case "checking":
      return "Checking GitHub for updates.";
    case "not-available":
      return "Veyra is up to date. Click to check again.";
    case "error":
      return status.message || "Update check failed. Click to retry.";
    default:
      return "Check GitHub for Veyra updates.";
  }
}

function nativeUpdateApi(): UpdateNativeApi | undefined {
  return (window as unknown as { veyraNative?: UpdateNativeApi }).veyraNative;
}
