const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.stage.scale.x = 0.5;

app.loader.add('cat', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.Sprite(app.loader.resources['cat'].texture);
  app.stage.addChild(cat);
});
