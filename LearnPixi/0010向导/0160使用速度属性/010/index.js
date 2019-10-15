const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.Loader.shared.add('../../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['../../assets/cat.png'].texture);
  cat.x = 96;
  cat.y = 96;
  // 使用vx和vy模块化移动速度
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  app.ticker.add(delta => gameLoop(delta));
});

function gameLoop(delta) {
  cat.vx = 1;
  cat.vy = 1;

  cat.x += cat.vx;
  cat.y += cat.vy;
}
