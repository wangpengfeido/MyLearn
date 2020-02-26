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
}

app.on("ready", createWindow);

// 添加弹出列表中的任务
app.setUserTasks([
  {
    title: "myTask",
    program: process.execPath
  }
]);
