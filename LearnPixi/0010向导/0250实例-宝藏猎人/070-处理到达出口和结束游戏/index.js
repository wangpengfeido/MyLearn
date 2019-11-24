let app; // PIXI实例
let state; // 游戏状态
let textures; // 纹理
let gameScene, gameOverScene; // 游戏场景
let dungeon, explorer, treasure, door; // 地牢、猎人、宝藏、门
let blobs = [], // 泡泡怪
  numberOfBlobs = 6, // 泡泡怪数量
  spacing = 48, // 泡泡怪之间距离
  xOffset = 150, // 泡泡怪们x方向位移
  speed = 2, // 泡泡怪移动速度
  direction = 1; // 泡泡怪移动方向
let healthBar; // 血条
let message; // 结束场景消息文字

// 创建PIXI实例
app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true
});
document.body.appendChild(app.view);

PIXI.Loader.shared.add("../../assets/treasureHunter/treasureHunter.json").load(() => {
  setup();
});

// 创建精灵，设置游戏state，开始游戏循环
function setup() {
  textures = PIXI.Loader.shared.resources["../../assets/treasureHunter/treasureHunter.json"].textures;
  // 创建游戏场景
  gameScene = new PIXI.Container();
  app.stage.addChild(gameScene);
  // 创建地牢
  dungeon = new PIXI.Sprite(textures["dungeon.png"]);
  gameScene.addChild(dungeon);
  // 创建门
  door = new PIXI.Sprite(textures["door.png"]);
  door.position.set(32, 0);
  gameScene.addChild(door);
  // 创建猎人
  explorer = new PIXI.Sprite(textures["explorer.png"]);
  explorer.x = 68;
  explorer.y = app.stage.height / 2 - explorer.height / 2;
  explorer.vx = 0;
  explorer.vy = 0;
  gameScene.addChild(explorer);
  // 创建宝藏
  treasure = new PIXI.Sprite(textures["treasure.png"]);
  treasure.x = app.stage.width - treasure.width - 48;
  treasure.y = app.stage.height / 2 - treasure.height / 2;
  gameScene.addChild(treasure);
  // 循环创建泡泡怪
  for (let i = 0; i < numberOfBlobs; i++) {
    let blob = new PIXI.Sprite(textures["blob.png"]);
    let x = spacing * i + xOffset;
    let y = randomInt(0, app.stage.height - blob.height);
    blob.x = x;
    blob.y = y;
    blob.vy = speed * direction;
    direction *= -1;
    blobs.push(blob);
    gameScene.addChild(blob);
  }

  // 创建血条
  healthBar = new PIXI.Container();
  healthBar.position.set(app.stage.width - 170, 4);
  gameScene.addChild(healthBar);
  // 血条背景
  let innerBar = new PIXI.Graphics();
  innerBar.beginFill(0x000000);
  innerBar.drawRect(0, 0, 128, 8);
  innerBar.endFill();
  healthBar.addChild(innerBar);
  // 血条红色矩形
  let outerBar = new PIXI.Graphics();
  outerBar.beginFill(0xff3300);
  outerBar.drawRect(0, 0, 128, 8);
  outerBar.endFill();
  healthBar.addChild(outerBar);
  // 创建一个属性方便获取红色矩形
  healthBar.outer = healthBar;

  // 创建游戏结束场景
  gameOverScene = new PIXI.Container();
  gameOverScene.visible = false;
  app.stage.addChild(gameOverScene);
  // 消息文字
  message = new PIXI.Text(
    "The End!",
    new PIXI.TextStyle({
      fontFamily: "Futura",
      fontSize: 64,
      fill: "white"
    })
  );
  message.x = 120;
  message.y = app.stage.height / 2 - 32;
  gameOverScene.addChild(message);

  // 注册键盘监听
  let left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
  left.press = () => {
    explorer.vx = -3;
  };
  left.release = () => {
    if (!right.isDown) {
      explorer.vx = 0;
    } else {
      explorer.vx = 3;
    }
  };
  right.press = () => {
    explorer.vx = 3;
  };
  right.release = () => {
    if (!left.isDown) {
      explorer.vx = 0;
    } else {
      explorer.vx = -3;
    }
  };
  up.press = () => {
    explorer.vy = -3;
  };
  up.release = () => {
    if (!down.isDown) {
      explorer.vy = 0;
    } else {
      explorer.vy = 3;
    }
  };
  down.press = () => {
    explorer.vy = 3;
  };
  down.release = () => {
    if (!up.isDown) {
      explorer.vy = 0;
    } else {
      explorer.vy = -3;
    }
  };

  // 设置游戏状态
  state = play;

  // 开始游戏循环
  app.ticker.add(delta => gameLoop(delta));
}

// 游戏循环。运行游戏state，渲染精灵
function gameLoop(delta) {
  state();
}

// 游戏逻辑
function play(delta) {
  // 移动探险家
  explorer.x += explorer.vx;
  explorer.y += explorer.vy;
  // 限制探险家移动范围
  contain(explorer, { x: 28, y: 28, width: 456, height: 456 });

  // 移动泡泡怪
  let explorerHit;
  blobs.forEach(blob => {
    blob.y += blob.vy;
    // 泡泡怪撞墙后反向移动
    let blobHitsWall = contain(blob, { x: 28, y: 28, width: 456, height: 456 });
    if (blobHitsWall === "top" || blobHitsWall === "bottom") {
      blob.vy *= -1;
    }
    // 碰撞检测：探险家与怪物
    if (hitTestRectangle(explorer, blob)) {
      explorerHit = true;
    }
  });
  // 如果发生碰撞，那么探险家变透明，并掉血
  if (explorerHit) {
    explorer.alpha = 0.5;
    healthBar.outer.width -= 1;
  } else {
    explorer.alpha = 1;
  }

  // 探险家与宝藏碰撞后，探险家携带宝藏移动
  if (hitTestRectangle(explorer, treasure)) {
    treasure.x = explorer.x + 8;
    treasure.y = explorer.y - 8;
  }

  // 宝藏与出口碰撞后，游戏胜利
  if (hitTestRectangle(treasure, door)) {
    state = end;
    message.text = "You won!";
  }

  // 血量用完后，游戏失败
  if (healthBar.outer.width < 0) {
    state = end;
    message.text = "You lost!";
  }
}

// 游戏结束需要运行的代码
function end() {
  // 显示游戏失败场景
  gameScene.visible = false;
  gameOverScene.visible = true;
}

/**
 * 限制精灵移动范围工具。如果超出范围，将放置在边界上
 * @retrun 超出了哪一个边界
 */
function contain(sprite, container) {
  let collision = undefined;
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }
  if (sprite.x + sprite.width > container.x + container.width) {
    // TODO: 给文档提错误
    sprite.x = container.x + container.width - sprite.width;
    collision = "right";
  }
  if (sprite.y + sprite.height > container.y + container.height) {
    sprite.y = container.y + container.height - sprite.height;
    collision = "bottom";
  }
  return collision;
}

/**
 * 碰撞检测工具
 */
function hitTestRectangle(r1, r2) {
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  hit = false;

  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      hit = true;
    } else {
      hit = false;
    }
  } else {
    hit = false;
  }

  return hit;
}

/**
 * 一个监听键盘事件的工具工厂函数
 */
function keyboard(keyCode) {
  let key = {
    code: keyCode,
    isDown: false,
    isUp: true,
    press: undefined,
    release: undefined,
    downHandler: event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    },
    upHandler: event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault;
    }
  };
  window.addEventListener("keydown", key.downHandler);
  window.addEventListener("keyup", key.upHandler);
  return key;
}

/**
 * 整数随机工具
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
