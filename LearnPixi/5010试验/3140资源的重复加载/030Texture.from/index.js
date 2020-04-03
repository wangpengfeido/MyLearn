const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);


const cat1 = PIXI.Sprite.from('../../../assets/cat.png');
app.stage.addChild(cat1);
console.log('11111', PIXI.utils.TextureCache['../../../assets/cat.png']);

const cat2 = PIXI.Sprite.from('../../../assets/cat.png');
cat2.position.set(100, 100);
app.stage.addChild(cat2);
console.log('22222', PIXI.utils.TextureCache['../../../assets/cat.png']);

// Texture.from并不会对已存在于TextureCache中的资源进行重复加载
