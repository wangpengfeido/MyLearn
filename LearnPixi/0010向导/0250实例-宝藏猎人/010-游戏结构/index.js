let app;
let textures;
let dungeon, explorer, treasure, door;

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
function setup() {}

// 游戏循环。运行游戏state，渲染精灵
function gameLoop(delta) {}

// 游戏逻辑
function play(delta) {}

// 游戏结束需要运行的代码
function end() {}

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
