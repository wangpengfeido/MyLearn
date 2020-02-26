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

  // 清空最近文件列表
  app.clearRecentDocuments()
  // 添加最近文件
  app.addRecentDocument(path.resolve(__dirname, "./test.test"));
}

app.on("ready", createWindow);

// 注意：windows需要注册为此类文件的处理程序
