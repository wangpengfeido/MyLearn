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
rect2.drawRect(10, 10, 100, 100);
rect2.endFill();
rect2.position.set(50, 50);
rect2.scale.set(0.5, 0.5);
rect2.pivot.set(50, 50);
rect2.skew.set(0.1, 0.1);
rect1.addChild(rect2);

console.log(rect2.getGlobalPosition());

// getGlobalPosition() 获取元素在全局坐标下position位置
