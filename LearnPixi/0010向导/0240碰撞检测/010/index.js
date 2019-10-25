const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let cat, box, message;
let state;
PIXI.Loader.shared.add('../../assets/cat.png').load(() => {
  box = new PIXI.Graphics();
  box.beginFill(0xffffff);
  box.drawRect(0, 0, 64, 64);
  box.endFill();
  box.x = 200;
  box.y = 200;
  app.stage.addChild(box);

  cat = new PIXI.Sprite(PIXI.Loader.shared.resources['../../assets/cat.png'].texture);
  cat.x = 96;
  cat.y = 96;
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  message = new PIXI.Text(
    'No collision...',
    new PIXI.TextStyle({
      fill: '#ffffff',
      fontSize: 24,
    })
  );
  message.x = 5;
  message.y = 5;
  app.stage.addChild(message);

  let left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
  left.press = () => {
    cat.vx = -5;
  };
  left.release = () => {
    if (!right.isDown) {
      cat.vx = 0;
    } else {
      cat.vx = 5;
    }
  };
  right.press = () => {
    cat.vx = 5;
  };
  right.release = () => {
    if (!left.isDown) {
      cat.vx = 0;
    } else {
      cat.vx = -5;
    }
  };
  up.press = () => {
    cat.vy = -5;
  };
  up.release = () => {
    if (!down.isDown) {
      cat.vy = 0;
    } else {
      cat.vy = 5;
    }
  };
  down.press = () => {
    cat.vy = 5;
  };
  down.release = () => {
    if (!up.isDown) {
      cat.vy = 0;
    } else {
      cat.vy = -5;
    }
  };

  state = play;

  app.ticker.add(delta => gameLoop(delta));
});

function gameLoop(delta) {
  state(delta);
}

function play(delta) {
  cat.x += cat.vx;
  cat.y += cat.vy;

  if (hitTestRectangle(cat, box)) {
    message.text = 'hit!';
    box.tint = 0xff0000;
  } else {
    message.text = 'No collision...';
    box.tint = 0x00ff00;
  }
}

/**
 * 碰撞检测工具
 */
function hitTestRectangle(r1, r2) {
  // 定义需要的变量
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  // 检测结果
  hit = false;

  // 找到每个精灵的中心
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  // 计算宽高的一半
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  // 计算两个精灵的距离向量
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  // 计算两个精灵半宽半高之和（碰撞距离）
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  // 如果连个精灵之间的距离小于碰撞距离，那么就碰撞了
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
    },
  };
  window.addEventListener('keydown', key.downHandler);
  window.addEventListener('keyup', key.upHandler);
  return key;
}
