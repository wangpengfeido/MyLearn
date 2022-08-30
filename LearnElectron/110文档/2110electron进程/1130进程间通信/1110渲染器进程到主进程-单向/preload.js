const { contextBridge, ipcRenderer } = require("electron");

// 暴露 setTitle 到渲染进程
contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
});
