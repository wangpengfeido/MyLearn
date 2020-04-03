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

app.ticker.add(() => {
  console.log('1111111111');
  rect.x = rect.x + (Math.random() * 2 - 1);
});

window.start = () => {
  app.start();
};
window.stop = () => {
  app.stop();
  // app.ticker.stop();
};
