const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

// 创建Graphics类
const rectangle = new PIXI.Graphics();
// 给图形一个轮廓
rectangle.lineStyle(4, 0xff3300, 1);
// 设置填充色并开始填充
rectangle.beginFill(0x66ccff);
// 绘制矩形
rectangle.drawRect(0, 0, 64, 64);
// 结束填充
rectangle.endFill();
// 想其他图形一样操作
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);
