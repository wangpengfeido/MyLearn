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

  gameLoop();
});

// 也可以使用requestAnimationFrame创建循环
function gameLoop() {
  requestAnimationFrame(gameLoop);
  cat.x += 1;
}
