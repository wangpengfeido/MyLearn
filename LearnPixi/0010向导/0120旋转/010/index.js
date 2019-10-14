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

  cat.x = 96;
  cat.y = 96;

  cat.scale.set(0.5,0.5);

  // 围绕左上角旋转
  cat.rotation = 0.5;
});
