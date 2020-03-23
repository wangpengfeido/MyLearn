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

window.saveImg = function() {
  const img = app.renderer.plugins.extract.image(app.stage);
  document.body.appendChild(img);
};

// Extract插件可将DisplayObject保存为image对象、base64图片、像素图片等。
