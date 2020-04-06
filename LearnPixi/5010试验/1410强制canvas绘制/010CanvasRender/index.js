const stage = new PIXI.Container();
const renderer = new PIXI.CanvasRenderer({
  width: 300,
  height: 300,
});
document.body.appendChild(renderer.view);

const rect = new PIXI.Graphics();
rect.beginFill(0xffffff);
rect.drawRect(0, 0, 100, 100);
rect.endFill();
rect.position.set(100, 100);
stage.addChild(rect);

function animation() {
  rect.position.set(100 + Math.random() * 50, 100 + Math.random() * 50);
  renderer.render(stage);
  requestAnimationFrame(() => {
    animation();
  });
}
animation();
