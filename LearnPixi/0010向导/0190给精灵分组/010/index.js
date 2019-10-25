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

  // 创建容器
  animals = new PIXI.Container();
  // 将精灵图添加到容器
  animals.addChild(cat);
  animals.addChild(hedgehog);
  animals.addChild(tiger);
  // 将容器添加到舞台
  app.stage.addChild(animals);

  // 获取容器的子精灵
  console.log('children:', animals.children);

  // 获取容器尺寸（默认尺寸自动计算）
  console.log('size:', animals.width, animals.height);

  // 设置尺寸（容器内容会被缩放）
  animals.width = 200;
  animals.height = 200;

  // 可以多级嵌套Container。
  // 但是一个DisplayObject只能有一个父级，将其添加到新父级原来的父级将被移除
});
