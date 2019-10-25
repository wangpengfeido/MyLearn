const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let cat, hedgehog, tiger;
let animals;
PIXI.Loader.shared.add('../../assets/animals/animals.json').load(() => {
  const textures = PIXI.loader.resources['../../assets/animals/animals.json'].textures;

  cat = new PIXI.Sprite(textures['cat.png']);
  cat.position.set(16, 16);
  hedgehog = new PIXI.Sprite(textures['hedgehog.png']);
  hedgehog.position.set(32, 32);
  tiger = new PIXI.Sprite(textures['tiger.png']);
  tiger.position.set(64, 64);

  // ParticleContainer更快，但限制更多。
  // 它是把更多信息交给GPU计算。
  animals = new PIXI.ParticleContainer();
  animals.addChild(cat);
  animals.addChild(hedgehog);
  animals.addChild(tiger);
  animals.position.set(50, 50);
  app.stage.addChild(animals);

});
