const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    webPreferences: {
      // 使用上下文隔离
      contextIsolation: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
