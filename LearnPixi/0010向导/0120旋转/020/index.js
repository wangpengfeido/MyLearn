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

  // 改变锚点(锚点是旋转和移动等的基准点)
  // cat.anchor.x = 0.5;
  // cat.anchor.y = 0.5;
  // 或
  cat.anchor.set(0.5, 0.5);

  cat.x = 96;
  cat.y = 96;

  cat.scale.set(1.3, 1.3);

  cat.rotation = 0.5;
});
