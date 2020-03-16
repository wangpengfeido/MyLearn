const app = new PIXI.Application({
  width: 1000,
  height: 1000,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);
container.width = 10000;
console.log('无子元素：', container.width, container.height, container.scale.x);

const rect1 = new PIXI.Graphics();
rect1.beginFill(0x00ff00);
rect1.drawRect(0, 0, 100, 100);
rect1.endFill();
container.addChild(rect1);
console.log('改变宽高前：',container.width, container.height, container.scale.x);
container.width = 200;
console.log('改变宽高后：',container.width, container.height, container.scale.x);

const rect2 = new PIXI.Graphics();
rect2.beginFill(0x00ff00);
rect2.drawRect(200, 200, 100, 100);
rect2.endFill();
container.addChild(rect2);
console.log('添加子元素：',container.width, container.height, container.scale.x);

// 结论：
// container 中有元素时，改变宽高会对 container 进行缩放（改变 scale 值），container 中的元素会被拉伸
// container 中没有元素时改变宽高不会起作用
