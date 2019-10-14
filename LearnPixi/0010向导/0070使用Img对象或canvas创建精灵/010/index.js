const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
const image = new Image();
image.src = '../../assets/cat.png';
image.addEventListener('load', () => {
  // 使用 BaseTexture 和 Texture 从普通Image对象创建纹理
  const base = new PIXI.BaseTexture(image);
  const texture = new PIXI.Texture(base);
  cat = new PIXI.Sprite(texture);
  app.stage.addChild(cat);
});

