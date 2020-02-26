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

  // 此功能未调通，不知为何一直返回false
  const res = win.setThumbarButtons([
    {
      tooltip: "button1",
      icon: "./icon_play.png",
      // icon: path.join(__dirname, "./icon_play.png"),
      // icon: nativeImage.createFromPath(path.join(__dirname, "./icon_play.png")),
      flags: ["enabled"],
      click() {
        console.log("button1 clicked");
      }
    }
  ]);
  console.log("11111111111111111", res);
}

app.on("ready", createWindow);
