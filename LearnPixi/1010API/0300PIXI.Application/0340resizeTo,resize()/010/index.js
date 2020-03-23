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

app.resizeTo = document.querySelector('#box');
window.resizeAnother = function() {
  app.renderer.resize(400, 400);
};
window.resize = function() {
  app.resize();
  // app.renderer.resize(app.resizeTo.clientWidth, app.resizeTo.clientHeight);
};

// resize()方法会自动设置renderer宽高为resizeTo的大小
// 相当于 app.renderer.resize(app.resizeTo.clientWidth, app.resizeTo.clientHeight);

