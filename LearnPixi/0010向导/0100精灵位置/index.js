const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.loader.add('../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['../assets/cat.png'].texture);
  app.stage.addChild(cat);
  
  // 改变精灵左上角的位置
  cat.x=96;
  cat.y=96;
});
