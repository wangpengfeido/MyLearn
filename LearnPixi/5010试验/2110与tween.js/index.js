const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

let cat;
let tween;
app.loader.add('cat', '../../../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(app.loader.resources['cat'].texture);
  app.stage.addChild(cat);

  tween = new TWEEN.Tween(cat)
    .to({ x: 100, y: 100 }, 1000)
    .repeat(Infinity)
    .start();
});

app.ticker.add(() => {
  TWEEN.update();
});
