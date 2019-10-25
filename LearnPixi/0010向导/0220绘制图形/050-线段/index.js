const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

const line = new PIXI.Graphics();
line.lineStyle(4, 0xffffff, 1);
// 使用moveTo和lineTo绘制线段
line.moveTo(0, 0);
line.lineTo(80, 50);
line.x = 32;
line.y = 32;
app.stage.addChild(line);
