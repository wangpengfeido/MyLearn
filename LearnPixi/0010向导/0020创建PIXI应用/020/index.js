const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true, // 抗锯齿
  transparent: false, // 透明
  resolution: 1, // 绘制分辨率和设备分辨率之比
  forceCanvas: true, // 强制使用 canvas-2d 绘制，而不使用 WebGL
});

document.body.appendChild(app.view);

// 改变背景颜色
app.renderer.backgroundColor = 0xff00ff;

// 获取 canvas 宽高
console.log(app.renderer.view.width, app.renderer.view.height);

// 自动设置css的宽高
app.renderer.autoDensity = true;
// 设置新的canvas宽高
app.renderer.resize(512, 512);
