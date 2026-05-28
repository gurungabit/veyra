import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LogEntry, ScriptInfo } from "@veyra/core";
import type { BridgeSnapshot, DesktopBridgeEvent, ScriptRuntimeSnapshot } from "../electron/bridgeTypes.js";

type MenuKey = "scripts" | "options" | "helpers" | "tools" | "skills" | "packets" | "bank" | "logs" | "plugins";
type ToolWindowKind = "scripts" | "logs";

type RendererApi = {
  platform: string;
  windows: {
    open: (kind: ToolWindowKind) => Promise<void>;
    close: () => void;
  };
  menu: {
    popup: (kind: "options" | "helpers" | "tools" | "auto" | "jump", point: { x: number; y: number }) => Promise<void>;
  };
  bridge: {
    status: () => Promise<BridgeSnapshot>;
    start: () => Promise<BridgeSnapshot>;
    stop: () => Promise<BridgeSnapshot>;
    loadClient: () => Promise<BridgeSnapshot>;
    focus: () => Promise<BridgeSnapshot>;
    setHostBounds: (bounds: { x: number; y: number; width: number; height: number }) => Promise<BridgeSnapshot>;
    onEvent: (callback: (event: DesktopBridgeEvent) => void) => () => void;
  };
  scripts: {
    manifest: () => Promise<ScriptInfo[]>;
    status: () => Promise<ScriptRuntimeSnapshot>;
    runExample: () => Promise<ScriptRuntimeSnapshot>;
    run: (scriptPath: string) => Promise<ScriptRuntimeSnapshot>;
    openInVsCode: (scriptPath: string) => Promise<{ filePath: string; result: string; codePath?: string }>;
    stop: () => Promise<ScriptRuntimeSnapshot>;
    logs: () => Promise<LogEntry[]>;
  };
};

const menuItems: Array<{ key: MenuKey; label: string }> = [
  { key: "scripts", label: "Scripts" },
  { key: "options", label: "Options" },
  { key: "helpers", label: "Helpers" },
  { key: "tools", label: "Tools" },
  { key: "skills", label: "Skills" },
  { key: "packets", label: "Packets" },
  { key: "bank", label: "Bank" },
  { key: "logs", label: "Logs" },
  { key: "plugins", label: "Plugins" }
];

const nativeMenuKeys = new Set<MenuKey>(["options", "helpers", "tools"]);
const actionMenuItems: Array<{ key: "auto" | "jump"; label: string }> = [
  { key: "auto", label: "Auto" },
  { key: "jump", label: "Jump" }
];

const initialBridge: BridgeSnapshot = {
  running: false,
  ready: false,
  endpoint: "Bridge not started.",
  detail: "Bridge is not running.",
  platform: "unknown",
  swfPath: ""
};

const initialScripts: ScriptRuntimeSnapshot = {
  status: "idle",
  logCount: 0
};

export function App() {
  const toolWindowKind = getToolWindowKind();
  const isToolWindow = toolWindowKind !== null;
  const hostRef = useRef<HTMLDivElement | null>(null);
  const lastHostBoundsRef = useRef<{ x: number; y: number; width: number; height: number } | null>(null);
  const [bridge, setBridge] = useState<BridgeSnapshot>(initialBridge);
  const [scripts, setScripts] = useState<ScriptRuntimeSnapshot>(initialScripts);
  const [scriptManifest, setScriptManifest] = useState<ScriptInfo[]>([]);
  const [scriptLogs, setScriptLogs] = useState<LogEntry[]>([]);
  const [selectedScript, setSelectedScript] = useState("");
  const [scriptBusy, setScriptBusy] = useState(false);
  const selectedInfo = useMemo(
    () => scriptManifest.find((script) => script.path === selectedScript),
    [scriptManifest, selectedScript]
  );

  const syncClientHost = useCallback(async (): Promise<void> => {
    const api = getRendererApi()?.bridge;
    const host = hostRef.current;
    if (!api || !host || isToolWindow) return;

    const rect = host.getBoundingClientRect();
    if (rect.width < 10 || rect.height < 10) return;

    const bounds = {
      x: Math.round(rect.left),
      y: Math.round(rect.top),
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    };
    if (!hostBoundsChanged(lastHostBoundsRef.current, bounds)) return;

    lastHostBoundsRef.current = bounds;
    const next = await api.setHostBounds(bounds);
    setBridge(next);
  }, []);

  useEffect(() => {
    const api = getRendererApi();
    if (!api) return;

    if (!isToolWindow) void api.bridge.status().then(setBridge);
    void refreshScripts();
    void api.scripts.manifest().then((manifest) => {
      setScriptManifest(manifest);
      setSelectedScript(manifest.find((script) => script.name === "Leveling [1-100]")?.path ?? manifest[0]?.path ?? "");
    });

    const unsubscribe = api.bridge.onEvent((event) => {
      if (event.type === "game.lifecycle") {
        setBridge((current) => ({
          ...current,
          ready: event.state === "loaded",
          detail: event.detail ?? current.detail
        }));
      }
      if (event.type === "bridge.process" && event.message.includes("exited")) {
        setBridge((current) => ({ ...current, running: false, ready: false, detail: event.message }));
      }
      if (event.type === "script.process") {
        void refreshScripts();
      }
    });

    const hostTimer = isToolWindow
      ? undefined
      : window.setTimeout(() => {
          void (async () => {
            try {
              await syncClientHost();
              setBridge(await api.bridge.loadClient());
            } catch (error) {
              appendLocalLog("error", "bridge", errorMessage(error));
            }
          })();
        }, 250);

    const timer = window.setInterval(() => {
      if (!isToolWindow) void api.bridge.status().then(setBridge);
      void api.scripts.status().then(setScripts);
      void api.scripts.logs().then(setScriptLogs);
    }, 1000);

    return () => {
      unsubscribe();
      if (hostTimer !== undefined) window.clearTimeout(hostTimer);
      window.clearInterval(timer);
    };
  }, [isToolWindow, syncClientHost]);

  async function refreshScripts(): Promise<void> {
    const api = getRendererApi()?.scripts;
    if (!api) return;
    const [nextStatus, nextLogs] = await Promise.all([api.status(), api.logs()]);
    setScripts(nextStatus);
    setScriptLogs(nextLogs);
  }

  async function runSelectedScript(): Promise<void> {
    const api = getRendererApi()?.scripts;
    if (!api || !selectedScript) return;
    setScriptBusy(true);
    try {
      setScripts(await api.run(selectedScript));
      await refreshScripts();
    } catch (error) {
      appendLocalLog("error", selectedInfo?.name ?? "script", errorMessage(error));
      await refreshScripts();
    } finally {
      setScriptBusy(false);
    }
  }

  async function stopScript(): Promise<void> {
    const api = getRendererApi()?.scripts;
    if (!api) return;
    setScriptBusy(true);
    try {
      setScripts(await api.stop());
      await refreshScripts();
    } catch (error) {
      appendLocalLog("error", "script", errorMessage(error));
    } finally {
      setScriptBusy(false);
    }
  }

  async function openSelectedScriptInVsCode(): Promise<void> {
    const api = getRendererApi()?.scripts;
    if (!api || !selectedScript) return;
    setScriptBusy(true);
    try {
      const result = await api.openInVsCode(selectedScript);
      appendLocalLog("info", selectedInfo?.name ?? "script", `Opened in VS Code: ${result.filePath}`);
    } catch (error) {
      appendLocalLog("error", selectedInfo?.name ?? "script", errorMessage(error));
    } finally {
      setScriptBusy(false);
    }
  }

  function appendLocalLog(level: LogEntry["level"], scope: string, message: string): void {
    setScriptLogs((current) => [
      ...current,
      {
        time: new Date().toISOString(),
        level,
        scope,
        message
      }
    ]);
  }

  function openMenuAction(key: MenuKey): void {
    if (key === "scripts") {
      void getRendererApi()?.windows.open("scripts");
      return;
    }
    if (key === "logs") {
      void getRendererApi()?.windows.open("logs");
      return;
    }
    if (nativeMenuKeys.has(key)) {
      return;
    }
  }

  const statusText = scripts.activeScript
    ? `[${scripts.status}: ${scripts.activeScript}]`
    : scripts.status === "idle"
      ? "[No Script Loaded]"
      : `[${scripts.status}]`;

  if (toolWindowKind === "scripts") {
    return (
      <main className="tool-window-root">
        <ScriptPanel
          statusText={statusText}
          manifest={scriptManifest}
          selectedScript={selectedScript}
          logs={scriptLogs}
          runtime={scripts}
          busy={scriptBusy}
          onSelect={setSelectedScript}
          onOpenInVsCode={() => void openSelectedScriptInVsCode()}
          onStart={() => void runSelectedScript()}
          onStop={() => void stopScript()}
        />
      </main>
    );
  }

  if (toolWindowKind === "logs") {
    return (
      <main className="tool-window-root">
        <LogsPanel logs={scriptLogs} />
      </main>
    );
  }

  return (
    <main className="desktop-window">
      <nav className="menu-strip" aria-label="Veyra tools" onClick={(event) => event.stopPropagation()}>
        <div className="menu-left">
          <div className="app-identity">
            <div className="app-mark">V</div>
            <h1>Veyra</h1>
          </div>
          {menuItems.map((item) => (
            <div className="menu-slot" key={item.key}>
              <button
                type="button"
                className="menu-button"
                onClick={(event) => {
                  if (isNativeMenuKey(item.key)) {
                    void popupNativeMenu(item.key, event.currentTarget);
                    return;
                  }
                  openMenuAction(item.key);
                }}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
        <div className="menu-right">
          {actionMenuItems.map((item) => (
            <div className="menu-slot" key={item.key}>
              <button
                type="button"
                className="menu-button"
                onClick={(event) => void popupNativeMenu(item.key, event.currentTarget)}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </nav>

      <section className="game-stage">
        <div className="client-canvas">
          <div className="viewport-frame" ref={hostRef} aria-label={bridge.detail} />
        </div>
      </section>
    </main>
  );
}

function ScriptPanel(props: {
  statusText: string;
  manifest: ScriptInfo[];
  selectedScript: string;
  logs: LogEntry[];
  runtime: ScriptRuntimeSnapshot;
  busy: boolean;
  onSelect: (scriptPath: string) => void;
  onOpenInVsCode: () => void;
  onStart: () => void;
  onStop: () => void;
}) {
  const canStart = props.selectedScript && props.runtime.status !== "running" && props.runtime.status !== "stopping";
  return (
    <section className="floating-panel load-panel" onClick={(event) => event.stopPropagation()}>
      <strong className="script-status">Status: {props.statusText}</strong>
      <select className="script-select" value={props.selectedScript} onChange={(event) => props.onSelect(event.target.value)}>
        {props.manifest.map((script) => (
          <option key={script.path} value={script.path}>
            {script.name}
          </option>
        ))}
      </select>
      <div className="button-grid two">
        <button type="button">Load Script</button>
        <button type="button" disabled={!props.selectedScript || props.busy} onClick={props.onOpenInVsCode}>
          Open VSCode
        </button>
        <button type="button" disabled={!props.selectedScript || props.busy} onClick={props.onOpenInVsCode}>
          Edit Script
        </button>
        <button type="button">Search Scripts</button>
      </div>
      <button type="button" className="wide-button">Edit Script Options</button>
      <button type="button" className="wide-button start-button" disabled={!canStart || props.busy} onClick={props.onStart}>
        {props.busy ? "Starting..." : "Start Script"}
      </button>
      <button type="button" className="wide-button stop-button" disabled={props.runtime.status !== "running" && props.runtime.status !== "stopping"} onClick={props.onStop}>
        Stop Script
      </button>
      <div className="script-console">
        {props.logs.length === 0
          ? ""
          : props.logs
              .slice(-12)
              .map((entry) => `[${entry.scope}] ${entry.message}`)
              .join("\n")}
      </div>
      <div className="button-grid three">
        <button type="button">Clear</button>
        <button type="button">Copy</button>
        <button type="button">Save</button>
      </div>
      <button type="button" className="wide-button">Report Issues</button>
    </section>
  );
}

function LogsPanel(props: { logs: LogEntry[] }) {
  return (
    <section className="floating-panel logs-panel" onClick={(event) => event.stopPropagation()}>
      <div className="script-console logs-console">
        {props.logs
          .slice(-24)
          .map((entry) => `[${entry.level}] [${entry.scope}] ${entry.message}`)
          .join("\n")}
      </div>
    </section>
  );
}

function getRendererApi(): RendererApi | undefined {
  const candidate = (window as unknown as { veyra?: unknown }).veyra;
  if (!candidate || typeof candidate !== "object") return undefined;
  return candidate as RendererApi;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function popupNativeMenu(kind: "options" | "helpers" | "tools" | "auto" | "jump", element: HTMLElement): Promise<void> {
  const api = getRendererApi()?.menu;
  if (!api) return;
  const rect = element.getBoundingClientRect();
  await api.popup(kind, {
    x: rect.left,
    y: rect.bottom
  });
}

function getToolWindowKind(): ToolWindowKind | null {
  const kind = new URLSearchParams(window.location.search).get("window");
  return kind === "scripts" || kind === "logs" ? kind : null;
}

function isNativeMenuKey(key: MenuKey): key is "options" | "helpers" | "tools" {
  return nativeMenuKeys.has(key);
}

function hostBoundsChanged(
  previous: { x: number; y: number; width: number; height: number } | null,
  next: { x: number; y: number; width: number; height: number }
): boolean {
  if (!previous) return true;
  return previous.x !== next.x || previous.y !== next.y || previous.width !== next.width || previous.height !== next.height;
}
