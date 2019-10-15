const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let dungeon, explorer, treasure, door, id;

// 加载贴图集。
// 会自动读取数据，并将每个帧创建纹理。
PIXI.Loader.shared.add('../../assets/treasureHunter/treasureHunter.json').load(() => {
  id = PIXI.loader.resources['../../assets/treasureHunter/treasureHunter.json'].textures;

  dungeon = new PIXI.Sprite(id['dungeon.png']);
  app.stage.addChild(dungeon);

  explorer = new PIXI.Sprite(id['explorer.png']);
  explorer.x = 68;
  explorer.y = app.stage.height / 2 - explorer.height / 2;
  app.stage.addChild(explorer);

  treasure = new PIXI.Sprite(id['treasure.png']);
  treasure.x = app.stage.width - treasure.width - 48;
  // 垂直居中
  treasure.y = app.stage.height / 2 - treasure.height / 2;
  app.stage.addChild(treasure);

  door = new PIXI.Sprite(id['door.png']);
  door.position.set(32, 0);
  app.stage.addChild(door);

  // 循环创建泡泡怪
  const numberOfBlob = 6,
    spacing = 48,
    xOffset = 150;
  for (let i = 0; i < numberOfBlob; i++) {
    let blob = new PIXI.Sprite(id['blob.png']);

    let x = spacing * i + xOffset;
    let y = randomInt(0, app.stage.height - blob.height);
    blob.x = x;
    blob.y = y;

    app.stage.addChild(blob);
  }
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
