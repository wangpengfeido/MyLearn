const app = new PIXI.Application({
  width: 300,
  height: 300,
  // 尝试改变：
  autoDensity: true,
  resolution: 2,
});
document.body.appendChild(app.view);

const rect = new PIXI.Graphics();
rect.beginFill(0x00ff00);
rect.drawRect(0, 0, 100, 100);
rect.endFill();
app.stage.addChild(rect);

// autoDensity会自动设置canvas的宽高为 width*resolution
// 它能在使用resolution时保持canvas宽高为app实例化时设置的宽高
