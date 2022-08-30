const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // 暴露 ipc 消息监听能力到渲染器进程
  handleCounter: (callback) => ipcRenderer.on("update-counter", callback),
});
