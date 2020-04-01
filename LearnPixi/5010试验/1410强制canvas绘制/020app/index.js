const app = new PIXI.Application({
  width: 300,
  height: 300,
  forceCanvas: true,
});
document.body.appendChild(app.view);

app.loader.add('cat', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.Sprite(app.loader.resources['cat'].texture);
  app.stage.addChild(cat);
});
