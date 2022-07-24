const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // 使用 invoke 方法，可以获取到消息处理的返回值
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
});
