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

window.toGlobal1 = function() {
  const point = rect2.toGlobal(new PIXI.Point(10, 10));
  console.log(point);
};

window.toGlobal2 = function() {
  const point = new this.PIXI.Point(0, 0);
  rect2.toGlobal(new PIXI.Point(10, 10), point);
  console.log(point);
};

// do.toGlobal(point1,point2) 表示找到 do上一点point1相对于全局坐标的位置
// 第二个参数point2是存储结果的IPoint对象
