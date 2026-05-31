const { ipcRenderer } = require("electron");

window.veyraNative = {
  openScriptsFolder: () => ipcRenderer.invoke("open-scripts-folder"),
  readJsonSetting: (name) => ipcRenderer.invoke("read-json-setting", name),
  writeJsonSetting: (name, value) => ipcRenderer.invoke("write-json-setting", name, value),
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
  getUpdateStatus: () => ipcRenderer.invoke("updater-status"),
  checkForUpdates: () => ipcRenderer.invoke("updater-check"),
  openUpdateRelease: () => ipcRenderer.invoke("updater-open-release"),
  onUpdateStatus: (callback) => {
    const listener = (_event, status) => callback(status);
    ipcRenderer.on("updater-status", listener);
    return () => ipcRenderer.removeListener("updater-status", listener);
  }
};
