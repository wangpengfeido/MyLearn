const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
let state;
PIXI.Loader.shared.add('../../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['../../assets/cat.png'].texture);
  cat.x = 96;
  cat.y = 96;
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  // 使用state结构化游戏循环代码
  // 这使得切换游戏场景非常容易
  state = play;

  app.ticker.add(delta => gameLoop(delta));
});

function gameLoop(delta) {
  state(delta);
}

function play(delta) {
  cat.vx = 1;
  cat.vy = 1;

  cat.x += cat.vx;
  cat.y += cat.vy;
}
