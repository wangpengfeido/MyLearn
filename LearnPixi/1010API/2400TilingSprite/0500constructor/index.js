const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('cat', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.TilingSprite(app.loader.resources['cat'].texture, 200, 200);
  app.stage.addChild(cat);
});

// TilingSprite 平铺精灵
