const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
let state;
PIXI.Loader.shared.add('../../assets/cat.png').load(() => {
  cat = new PIXI.Sprite(PIXI.Loader.shared.resources['../../assets/cat.png'].texture);
  cat.x = 96;
  cat.y = 96;
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  let left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

  // left
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
  //Right
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
  //Up
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
  //Down
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
