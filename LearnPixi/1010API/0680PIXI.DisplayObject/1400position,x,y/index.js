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

window.changePosition = function() {
  rect.position.set(10, 10);
  console.log(rect.position, rect.x, rect.y);
};

// position 是 DisplayObject 相对于父元素的位置
// x,y 是 position.x和position.y 的别名
