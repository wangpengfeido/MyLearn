const app = new PIXI.Application({
  width: 256,
  height: 256,
});
document.body.appendChild(app.view);

PIXI.Loader.shared.add('../../../../assets/cat.png').load(() => {
  const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources['../../../../assets/cat.png'].texture);
  app.stage.addChild(sprite);
});

document.querySelector('.bigger-width').addEventListener('click', () => {
  const renderer = app.renderer;
  renderer.resize(renderer.width * 1.2, renderer.height);
});

document.querySelector('.smaller-width').addEventListener('click', () => {
  const renderer = app.renderer;
  renderer.resize(renderer.width * 0.8, renderer.height);
});

// app.renderer.width/height 与 app.view.width/height 是相同的，它们会改变 canvas 的 width/height
// app.stage 会随着 app.renderer.resize 变换，但是不会拉伸图像
