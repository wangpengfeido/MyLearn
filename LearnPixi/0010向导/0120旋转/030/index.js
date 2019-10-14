const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.loader.add('../../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['../../assets/cat.png'].texture);
  app.stage.addChild(cat);

  // 通过像素值改变锚点
  cat.pivot.set(48, 48);

  cat.x = 96;
  cat.y = 96;

  cat.scale.set(1.3, 1.3);

  cat.rotation = 0.5;
});
