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
  const base = new PIXI.BaseTexture(image);
  const texture = new PIXI.Texture(base);
  cat = new PIXI.Sprite(texture);
  app.stage.addChild(cat);
});

document.querySelector('.btn').addEventListener('click', () => {
  // 使用 BaseTexture.from 从canvas创建纹理
  const base = PIXI.BaseTexture.from(document.querySelector('.texture-canvas'));
  const texture = new PIXI.Texture(base);
  // 改变已显示的精灵的纹理
  cat.texture = texture;
});
