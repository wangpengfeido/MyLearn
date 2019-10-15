const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.Loader.shared.add('../../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['../../assets/cat.png'].texture);
  app.stage.addChild(cat);

  cat.x = 96;
  cat.y = 96;

  // 注册游戏循环
  // PIXI.Ticker按固定帧率执行
  app.ticker.add(delta => {
    // delta是当机器速度跟不上帧率时的延迟
    cat.x += 1 + delta;
  });
});
