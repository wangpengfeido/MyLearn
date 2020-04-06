const app = new PIXI.Application({
  width: 800,
  height: 600,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();
container.scale.set(0.5, 0.5);
app.stage.addChild(container);

// 创建 rope
const ropeLength = 45;
const points = [];
for (let i = 0; i < 25; i++) {
  points.push(new PIXI.Point(i * ropeLength, 0));
}
const strip = new PIXI.SimpleRope(PIXI.Texture.from('../../../assets/snake.png'), points);
strip.x = 100;
strip.y = 100;
container.addChild(strip);

// 辅助观察点
const g = new PIXI.Graphics();
g.x = strip.x;
g.y = strip.y;
container.addChild(g);
function renderPoints() {
  g.clear();

  g.lineStyle(2, 0x000000);
  g.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    g.lineTo(points[i].x, points[i].y);
  }
  for (let i = 1; i < points.length; i++) {
    g.beginFill(0xffffff);
    g.drawCircle(points[i].x, points[i].y, 5);
    g.endFill();
  }
}

// 动画
let count = 0;
app.ticker.add(() => {
  count += 0.1;

  for (let i = 0; i < points.length; i++) {
    points[i].y = Math.sin(i * 0.5 + count) * 30;
    points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20;
  }
  renderPoints();
});
