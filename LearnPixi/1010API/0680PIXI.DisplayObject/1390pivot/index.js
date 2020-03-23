const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const rect = new PIXI.Graphics();
rect.beginFill(0x00ff00);
rect.drawRect(0, 0, 100, 100);
rect.endFill();
app.stage.addChild(rect);

// 参照
const rect2 = new PIXI.Graphics();
rect2.beginFill(0xff0000);
rect2.drawRect(0, 0, 20, 20);
rect2.endFill();
rect2.position.set(100, 100);
app.stage.addChild(rect2);

rect.position.set(100, 100);
rect.scale.set(1.5, 1.5);
console.log('before:', rect.transform.pivot.x);
// 尝试改变:
// rect.pivot.set(50, 50);
rect.pivot.set(rect.width / 2, rect.height / 2);
console.log('after:', rect.transform.pivot.x, rect.transform);
rect.rotation = 1;

// pivot 决定了元素的transform origin
// 注意:pivot是优先于scale的,即其设置的点是元素缩放前的点
