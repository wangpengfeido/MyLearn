const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const loader1 = new PIXI.Loader();
const loader2=new PIXI.Loader();

loader1.add('cat1', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.Sprite(loader1.resources['cat1'].texture);
  app.stage.addChild(cat);
  console.log('11111',PIXI.utils.TextureCache['cat1']);

  loader2.add('cat1', '../../../assets/cat.png').load(() => {
    const cat = new PIXI.Sprite(loader2.resources['cat1'].texture);
    cat.position.set(100, 100);
    app.stage.addChild(cat);
    console.log('22222',PIXI.utils.TextureCache['cat1']);
  });
});

// 不同loader对同一资源的重复加载，仍然会加载资源并不会使用缓存
// 但是TextureCache会在控制台给出警告
// 另外，如果对资源使用了相同的命名的话，TextureCache还会对重复命名给出警告
