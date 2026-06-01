const { ipcRenderer } = require("electron");

window.veyraNative = {
  openScriptsFolder: () => ipcRenderer.invoke("open-scripts-folder"),
  readJsonSetting: (name) => ipcRenderer.invoke("read-json-setting", name),
  writeJsonSetting: (name, value) => ipcRenderer.invoke("write-json-setting", name, value),
  readScriptPackScripts: () => ipcRenderer.invoke("read-script-pack-scripts"),
  compileScriptPackScript: (scriptId) => ipcRenderer.invoke("compile-script-pack-script", scriptId),
  readBuilderScripts: () => ipcRenderer.invoke("read-builder-scripts"),
  writeBuilderScript: (script) => ipcRenderer.invoke("write-builder-script", script),
  writeBuilderScripts: (scripts) => ipcRenderer.invoke("write-builder-scripts", scripts),
  deleteBuilderScript: (id) => ipcRenderer.invoke("delete-builder-script", id),
  openBuilderScriptInVsCode: (script) => ipcRenderer.invoke("open-builder-script-vscode", script),
  openScriptInVsCode: (scriptId) => ipcRenderer.invoke("open-script-vscode", scriptId),
  listLauncherAccounts: () => ipcRenderer.invoke("launcher-list-accounts"),
  saveLauncherAccount: (account) => ipcRenderer.invoke("launcher-save-account", account),
  deleteLauncherAccount: (id) => ipcRenderer.invoke("launcher-delete-account", id),
  listServers: () => ipcRenderer.invoke("launcher-list-servers"),
  startLauncherAccounts: (accountIds, serverName) => ipcRenderer.invoke("launcher-start-accounts", accountIds, serverName),
  openEmptyClient: () => ipcRenderer.invoke("launcher-empty-client"),
  showLauncher: () => ipcRenderer.invoke("launcher-show"),
  getLaunchPayload: (launchId) => ipcRenderer.invoke("launcher-get-payload", launchId),
  showToolWindow: (payload) => ipcRenderer.invoke("tool-window-show", payload),
  onScriptPacksChanged: (callback) => {
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on("script-packs-changed", listener);
    return () => ipcRenderer.removeListener("script-packs-changed", listener);
  }
};
