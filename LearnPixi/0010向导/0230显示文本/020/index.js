const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
  backgroundColor: 0x00ffff,
});

document.body.appendChild(app.view);

// 创建文字效果
const message = new PIXI.Text('hello pixi',new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fill: "white",
  stroke: '#ff3300',
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
}));
message.position.set(54, 96);
app.stage.addChild(message);
