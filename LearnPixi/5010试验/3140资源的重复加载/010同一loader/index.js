const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const loader = new PIXI.Loader();

loader.add('cat1', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.Sprite(loader.resources['cat1'].texture);
  app.stage.addChild(cat);
  console.log('11111',PIXI.utils.TextureCache['cat1']);

  loader.add('cat2', '../../../assets/cat.png').load(() => {
    const cat = new PIXI.Sprite(loader.resources['cat2'].texture);
    cat.position.set(100, 100);
    app.stage.addChild(cat);
    console.log('22222',PIXI.utils.TextureCache['cat1']);
  });
});

// 同一loader对同一资源的重复加载，仍然会加载资源并不会使用缓存
// 但是TextureCache会在控制台给出警告
