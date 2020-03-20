const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const rect1 = new PIXI.Graphics();
rect1.beginFill(0x00ff00);
rect1.drawRect(0, 0, 200, 200);
rect1.endFill();
rect1.position.set(50, 50);
app.stage.addChild(rect1);

const rect2 = new PIXI.Graphics();
rect2.beginFill(0xff0000);
rect2.drawRect(0, 0, 100, 100);
rect2.endFill();
rect2.position.set(50, 50);
rect1.addChild(rect2);

window.toLocal1 = function() {
  const point = rect2.toLocal(new PIXI.Point(10, 10));
  // -90,-90
  console.log(point);
};

window.toLocal2 = function() {
  const point = rect2.toLocal(new PIXI.Point(10, 10), rect1);
  // -40,-40
  console.log(point);
};

window.toLocal3 = function() {
  const point = rect1.toLocal(new PIXI.Point(10, 10), rect2);
  // 60,60
  console.log(point);
};

window.toLocal4 = function() {
  const point = new this.PIXI.Point(0, 0);
  rect2.toLocal(new PIXI.Point(10, 10), undefined, point);
  console.log(point);
};

// do1.toLocal(point1,do2,point2) 表示计算 do2上一点point1相对于do1的位置
// 如果do2不传则表示全局坐标中一点
// 第三个参数point2为存储结果IPoint对象
