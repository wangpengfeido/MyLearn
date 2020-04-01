const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('../../../assets/cat.png').load(() => {
  console.log('11111111111');
  const cat = new PIXI.Sprite(app.loader.resources['../../../assets/cat.png'].texture);
  app.stage.addChild(cat);

  app.loader.add('../../../assets/snake.png').load(() => {
    console.log('222222222222');
    const snake = new PIXI.Sprite(app.loader.resources['../../../assets/snake.png'].texture);
    app.stage.addChild(snake);
  });
});

// load完成后，可以在向loader添加资源并再次调用load
