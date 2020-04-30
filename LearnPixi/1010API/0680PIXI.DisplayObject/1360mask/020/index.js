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

const myMask = PIXI.Sprite.from('../../../../assets/cat.png');
myMask.position.set(10, 10);
app.stage.addChild(myMask);

rect.mask = myMask;

// 图片mask：会根据颜色计算新的颜色值
