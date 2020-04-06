const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

app.loader.add('animals', '../../../assets/animals/animals.json').load(() => {
  const animals = new PIXI.AnimatedSprite(app.loader.resources['animals'].spritesheet.animations['animals']);
  app.stage.addChild(animals);

  animals.animationSpeed = 0.1;
  animals.play();
});
