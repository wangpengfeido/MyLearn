const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('sth', '../../../assets/treasureHunter/treasureHunter.json').load(() => {
  const animals = new PIXI.AnimatedSprite(app.loader.resources['sth'].spritesheet.animations['sth']);
  // animals.anchor.set(0.5, 0.5);
  app.stage.addChild(animals);

  animals.animationSpeed = 0.1;
  animals.play();
});

// 不同大小图片应用到AnimatedSprite时，会以anchor对齐
