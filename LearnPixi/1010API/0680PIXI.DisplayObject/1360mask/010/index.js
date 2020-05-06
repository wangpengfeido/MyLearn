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

const rect2 = new PIXI.Graphics();
rect2.beginFill(0xff0000);
rect2.drawRect(0, 0, 100, 100);
rect2.endFill();
rect2.position.set(50, 50);
app.stage.addChild(rect2);

rect.mask=rect2;

// mask:只显示mask的部分


