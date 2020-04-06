const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const rect = new PIXI.Graphics();
rect.beginFill(0x00ff00);
rect.drawRect(0, 0, 100, 100);
rect.endFill();
rect.interactive = true;
app.stage.addChild(rect);

const container2 = new PIXI.Container();
const rect2 = new PIXI.Graphics();
rect2.beginFill(0x00ffff);
rect2.drawRect(0, 0, 100, 100);
rect2.endFill();
rect2.interactive = true;
rect2.position.set(50, 50);
container2.addChild(rect2);
app.stage.addChild(container2);

rect.on('click', () => {
  console.log('click');
});

// 不同container仍然可以挡住下层元素事件触发

