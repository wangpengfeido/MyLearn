const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          // 将消息从主进程发送到渲染器进程时，需要指定是哪一个渲染器接收消息
          // 使用 webContents.send API 将 IPC 消息从主进程发送到目标渲染器
          click: () => win.webContents.send("update-counter", 1),
          label: "Increment",
        },
        {
          click: () => win.webContents.send("update-counter", -1),
          label: "Decrement",
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  win.loadFile("index.html");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
