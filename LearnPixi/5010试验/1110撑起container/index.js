const app = new PIXI.Application({
  width: 1000,
  height: 1000,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);
console.log(container.width, container.height);

const rect1 = new PIXI.Graphics();
rect1.beginFill(0x00ff00);
rect1.drawRect(0, 0, 100, 100);
rect1.endFill();
container.addChild(rect1);
console.log(container.width, container.height);

const rect2 = new PIXI.Graphics();
rect2.beginFill(0x00ff00);
rect2.drawRect(200, 200, 100, 100);
rect2.endFill();
container.addChild(rect2);
console.log(container.width, container.height);

// 结论：
// container 会被内部元素撑开
