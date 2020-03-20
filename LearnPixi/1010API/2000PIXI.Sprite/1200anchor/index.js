const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('cat', '../../../assets/cat.png').load(() => {
  const cat = new PIXI.Sprite(app.loader.resources['cat'].texture);
  app.stage.addChild(cat);

  // 参照
  const rect = new PIXI.Graphics();
  rect.beginFill(0x00ff00);
  rect.drawRect(100, 100, 20, 20);
  rect.endFill();
  app.stage.addChild(rect);

  cat.width = 100;
  cat.height = 100;
  cat.position.set(100, 100);
  cat.skew.set(0.1, 0.1);
  cat.anchor.set(0.5, 0.5);
  // cat.pivot.set(32, 32);

  // 抵消
  // cat.anchor.set(0.5, 0.5);
  // cat.pivot.set(-32, -32);

  // 叠加
  // cat.anchor.set(0.5, 0.5);
  // cat.pivot.set(32, 32);

  cat.rotation = 1;
  console.log(cat.transform);
});

// anchor 设置texture的中心
// 它与pivot的区别是它并不影响transform origin
// 并且它的值是texture的比例
