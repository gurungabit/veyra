const { ipcRenderer } = require("electron");

window.veyraNative = {
  openScriptsFolder: () => ipcRenderer.invoke("open-scripts-folder"),
  readJsonSetting: (name) => ipcRenderer.invoke("read-json-setting", name),
  writeJsonSetting: (name, value) => ipcRenderer.invoke("write-json-setting", name, value),
  readBuilderScripts: () => ipcRenderer.invoke("read-builder-scripts"),
  writeBuilderScript: (script) => ipcRenderer.invoke("write-builder-script", script),
  writeBuilderScripts: (scripts) => ipcRenderer.invoke("write-builder-scripts", scripts),
  deleteBuilderScript: (id) => ipcRenderer.invoke("delete-builder-script", id),
  openBuilderScriptInVsCode: (script) => ipcRenderer.invoke("open-builder-script-vscode", script)
};
