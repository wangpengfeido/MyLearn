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

rect.on('touchstart', () => {
  console.log('touchstart');
});
rect.on('touchmove', event => {
  // if (event.target !== rect) {
  //   return;
  // }
  console.log('touchmove', event.currentTarget, event.target);
});
rect.on('touchend', () => {
  console.log('touchend');
});

// 当触摸点滑出元素后，将不再触发 touchend 事件
// touchmove可以在父元素上触发，但事件对象的target属性为null
