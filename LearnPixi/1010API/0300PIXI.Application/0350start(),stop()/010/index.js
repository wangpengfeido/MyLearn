const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.stop();

const rect = new PIXI.Graphics();
rect.beginFill(0x00ff00);
rect.drawRect(0, 0, 100, 100);
rect.endFill();
app.stage.addChild(rect);

setTimeout(() => {
  app.start();
}, 1000);

// app.start/app.stop 相当于 app.ticker.start/app.ticker.stop
// 因为app自动在ticker中调用renderer.render()，所以这两个函数能控制渲染的执行。
