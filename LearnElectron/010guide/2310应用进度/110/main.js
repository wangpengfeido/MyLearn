const path = require("path");
const { app, BrowserWindow } = require("electron");

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

  // 设置任务栏中的进度条
  win.setProgressBar(0.5);
}

app.on("ready", createWindow);
