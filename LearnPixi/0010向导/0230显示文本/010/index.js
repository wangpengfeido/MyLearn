const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
  backgroundColor: 0x00ffff,
});

document.body.appendChild(app.view);

// 显示简单文字
const message = new PIXI.Text('hello pixi');
message.position.set(54, 96);
app.stage.addChild(message);
