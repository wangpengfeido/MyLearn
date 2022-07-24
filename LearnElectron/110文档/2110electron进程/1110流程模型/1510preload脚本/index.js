const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // BrowserWindow 可以创建一个窗口和一个渲染进程
  let win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
}

// app 可以控制应用程序的生命周期
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
