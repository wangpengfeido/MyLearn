const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.loader.add('../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['../assets/cat.png'].texture);
  // 将精灵添加到舞台
  app.stage.addChild(cat);
});

document.querySelector('.remove-sprite').addEventListener('click', () => {
  // 将精灵从舞台上移走
  app.stage.removeChild(cat);
});
document.querySelector('.hidden-sprite').addEventListener('click', () => {
  // 隐藏精灵
  cat.visible = false;
});
