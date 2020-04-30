const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('cat', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.Sprite(app.loader.resources['cat'].texture);
  cat.width = 300;
  cat.height = 300;
  app.stage.addChild(cat);

  cat.filters = [new PIXI.filters.BlurFilter(50, 10)];
});
