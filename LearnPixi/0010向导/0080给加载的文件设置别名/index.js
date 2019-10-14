const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
// 在add方法中设置别名（不建议使用）
PIXI.loader.add('catImage','../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['catImage'].texture);
  app.stage.addChild(cat);
});

