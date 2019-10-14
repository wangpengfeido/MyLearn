// 定义别名来使用
const Application = PIXI.Application;
const loader = PIXI.loader;
const resources = PIXI.loader.resources;
const Sprite = PIXI.Sprite;

const app = new Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
loader.add('../assets/cat.png').load(() => {
  cat = new Sprite(resources['../assets/cat.png'].texture);
  // 将精灵添加到舞台
  app.stage.addChild(cat);
});
