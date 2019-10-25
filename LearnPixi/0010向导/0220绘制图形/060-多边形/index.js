const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

const polygon = new PIXI.Graphics();
polygon.beginFill(0x66ff33);
// 绘制多边形。每两个数为一个x/y点
polygon.drawPolygon([-32, 64, 32, 64, 0, 0]);
polygon.endFill();
polygon.x = 180;
polygon.y = 22;
app.stage.addChild(polygon);
