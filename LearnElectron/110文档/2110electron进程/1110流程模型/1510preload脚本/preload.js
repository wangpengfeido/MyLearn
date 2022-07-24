// 预加载脚本与浏览器共享同一个全局 Window 接口，并且可以访问 Node.js API。但是不能附加改变到 window 上（因为 contextIsolation 是默认的），取而代之，我们將使用 contextBridge 模块来安全地实现交互。

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("myAPI", {
  desktop: true,
});

// 常用场景：
// 通过暴露 ipcRenderer 于渲染进程中来进行 IPC 通信。
// 在 window 上添加自定义属性。
