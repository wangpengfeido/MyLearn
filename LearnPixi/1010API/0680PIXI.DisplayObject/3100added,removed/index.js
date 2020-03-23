const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const rect = new PIXI.Graphics();
rect.beginFill(0x00ff00);
rect.drawRect(0, 0, 100, 100);
rect.endFill();
rect.on('added', () => {
  console.log('added');
});
rect.on('removed', () => {
  console.log('removed');
});

window.add = function() {
  app.stage.addChild(rect);
};
window.remove = function() {
  app.stage.removeChild(rect);
};
window.destroy = function() {
  rect.destroy();
};

// displayObject被从父级 添加/移除 时触发 added/removed 事件
// 注意：destroy时不会触发 removed 事件
