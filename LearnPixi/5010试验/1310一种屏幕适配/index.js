// 绘制区域宽高(极限适配宽高)
let drawWidth = 750;
let drawHeight = 1500;
// 最小显示宽高(设计稿宽高)
let minWidth = 750;
let minHeight = 1000;

const app = new PIXI.Application({
  width: drawWidth,
  height: drawHeight,
});
document.body.appendChild(app.view);
app.view.style.position = 'fixed';

const resize = _.throttle(() => {
  const screenRatio = window.innerWidth / window.innerHeight;
  const drawRatio = drawWidth / drawHeight;
  const minDrawRatio = minWidth / minHeight;
  if (screenRatio <= minDrawRatio) {
    app.view.style.width = `${window.innerWidth}px`;
    const viewHeight = window.innerWidth / drawRatio;
    app.view.style.height = `${viewHeight}px`;
    app.view.style.left = '0';
    app.view.style.top = `${window.innerHeight / 2 - viewHeight / 2}px`;
  } else {
    const viewWidth = window.innerHeight * minDrawRatio;
    app.view.style.width = `${viewWidth}px`;
    const viewHeight = viewWidth / drawRatio;
    app.view.style.height = `${viewHeight}px`;
    app.view.style.left = `${window.innerWidth / 2 - viewWidth / 2}px`;
    app.view.style.top = `${window.innerHeight / 2 - viewHeight / 2}px`;
  }
}, 100);
resize();
window.addEventListener('resize', resize);

///////////////////////////////////////////////////////////////
// 元素绘制可以直接按照设计搞尺寸
// 超出设计稿的部分用背景填充

const bg = new PIXI.Graphics();
bg.beginFill(0x00ffff);
bg.drawRect(0, 0, 750, drawHeight);
bg.endFill();
app.stage.addChild(bg);

const container = new PIXI.Container();
container.y = drawHeight / 2 - minHeight / 2;

app.stage.addChild(container);
const rect1 = new PIXI.Graphics();
rect1.beginFill(0x00ff00);
rect1.drawRect(0, 0, 100, 100);
rect1.endFill();
container.addChild(rect1);

const rect2 = new PIXI.Graphics();
rect2.beginFill(0x00ff00);
rect2.drawRect(0, 0, 100, 100);
rect2.endFill();
rect2.y = minHeight - rect2.height;
container.addChild(rect2);
