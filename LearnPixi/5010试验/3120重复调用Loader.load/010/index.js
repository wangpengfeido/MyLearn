const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('../../../assets/cat.png').load(() => {
  console.log('11111111111');
  const cat = new PIXI.Sprite(app.loader.resources['../../../assets/cat.png'].texture);
  app.stage.addChild(cat);
});
app.loader.add('../../../assets/cat.png').load(() => {
  console.log('222222222222');
  const cat = new PIXI.Sprite(app.loader.resources['../../../assets/cat.png'].texture);
  app.stage.addChild(cat);
});

// 当一个loader正在加载中时，无法再次调用load
