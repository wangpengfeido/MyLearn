const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let dungeon, explorer, treasure, id;

// 加载贴图集。
// 会自动读取数据，并将每个帧创建纹理。
PIXI.Loader.shared.add('../../assets/treasureHunter/treasureHunter.json').load(() => {
  // 方法1：从TextureCache取纹理
  dungeonTexture = PIXI.utils.TextureCache['dungeon.png'];
  dungeon = new PIXI.Sprite(dungeonTexture);
  app.stage.addChild(dungeon);

  // 方法2：从loader的resources取纹理
  explorer = new PIXI.Sprite(
    PIXI.loader.resources['../../assets/treasureHunter/treasureHunter.json'].textures['explorer.png']
  );
  explorer.x = 68;
  explorer.y = app.stage.height / 2 - explorer.height / 2;
  app.stage.addChild(explorer);

  // 方法3：为加载的textures创建别名
  id = PIXI.loader.resources['../../assets/treasureHunter/treasureHunter.json'].textures;
  treasure = new PIXI.Sprite(id['treasure.png']);
  treasure.x = app.stage.width - treasure.width - 48;
  treasure.y = app.stage.height / 2 - treasure.height / 2;
  app.stage.addChild(treasure);

});
