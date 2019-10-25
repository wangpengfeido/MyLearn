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
  // 添加到容器中的精灵的位置是相对于容器的位置
  cat.position.set(16, 16);
  hedgehog = new PIXI.Sprite(textures['hedgehog.png']);
  hedgehog.position.set(32, 32);
  tiger = new PIXI.Sprite(textures['tiger.png']);
  tiger.position.set(64, 64);

  animals = new PIXI.Container();
  animals.addChild(cat);
  animals.addChild(hedgehog);
  animals.addChild(tiger);
  animals.position.set(50, 50);
  app.stage.addChild(animals);

  // 找到全局位置
  // toGlobal方法是找到某个DisplayObject上某个点相对于全局的位置
  console.log('toGlobal:', animals.toGlobal(cat.position), cat.toGlobal({ x: 0, y: 0 }));
  // 通过parent属性找到父级
  console.log('parent toGlobal', cat.parent.toGlobal(cat.position));
  // 找到相对于canvas的位置(高精度)
  console.log('getGlobalPosition', cat.getGlobalPosition());
  // TODO: 给官方文档提错误
  // 计算在另一个DisplayObject上某一点，在该DisplayObject上的相对位置。如果另一个DisplayObject不传（参数2），那么就是全局上一点
  console.log('local', cat.toLocal(tiger.position, animals), cat.toLocal({ x: 0, y: 0 }, tiger));
});
