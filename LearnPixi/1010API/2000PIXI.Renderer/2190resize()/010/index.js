const app = new PIXI.Application({
  width: 200,
  height: 200,
  resolution: 2
});
document.body.appendChild(app.view);

PIXI.Loader.shared.add("../../../../assets/cat.png").load(() => {
  const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources["../../../../assets/cat.png"].texture);
  app.stage.addChild(sprite);
});

document.querySelector(".bigger-width").addEventListener("click", () => {
  const renderer = app.renderer;
  renderer.resize(400, 200);
  console.log(renderer.width);
});

document.querySelector(".smaller-width").addEventListener("click", () => {
  const renderer = app.renderer;
  renderer.resize(200, 200);
  console.log(renderer.width);
});

// app.renderer.resize() 会改变绘制区域宽高
// renderer.width/renderer.height/renderer.view.width/renderer.view.height是 绘制区域宽高*renderer.resolution

// 改变绘制区域宽高时不会改变已绘制元素的大小与比例

