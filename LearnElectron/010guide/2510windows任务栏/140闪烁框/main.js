const path = require("path");
const { app, BrowserWindow, nativeImage } = require("electron");

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

  // 闪烁图标
  win.flashFrame(true);
}

app.on("ready", createWindow);
