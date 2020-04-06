const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const loader1 = new PIXI.Loader();

loader1.add('../../../assets/cat.png').load(() => {
  const cat1 = PIXI.Sprite.from('../../../assets/cat.png');
  cat1.position.set(100, 100);
  app.stage.addChild(cat1);
  console.log('111111', PIXI.utils.TextureCache['../../../assets/cat.png']);
});
console.log('00000', PIXI.utils.TextureCache['../../../assets/cat.png']);

const cat2 = PIXI.Sprite.from('../../../assets/cat.png');
app.stage.addChild(cat2);
console.log('22222', PIXI.utils.TextureCache['../../../assets/cat.png']);

// loader在加载完成后才会向textureCache添加
// 所以资源仍然会重复加载
