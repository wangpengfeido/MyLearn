const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.Loader.shared.add('../../assets/sprite.png').load(() => {
  // 创建雪碧图纹理
  const texture = PIXI.loader.resources['../../assets/sprite.png'].texture;

  // 创建一个矩形对象，矩形对象定义了从雪碧图纹理上需要取的大小和位置
  let rectangle = new PIXI.Rectangle(96, 64, 32, 32);
  // 设置纹理使用的部分
  texture.frame = rectangle;

  // 从纹理创建精灵
  let rocket = new PIXI.Sprite(texture);
  rocket.x = 32;
  rocket.y = 32;
  app.stage.addChild(rocket);
});
