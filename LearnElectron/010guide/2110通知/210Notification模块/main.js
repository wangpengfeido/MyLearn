const { app, BrowserWindow, ipcMain, Notification } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("./index.html");
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

ipcMain.on("myNotification", () => {
  // 使用Notification模块
  const myNotification = new Notification({ title: "通知标题" });
  myNotification.on("click", () => {
    console.log("通知被点击");
  });
  myNotification.show();
});

app.on("ready", createWindow);
