let type = 'WebGL';
// 判断是否支持 WebGL
if (!PIXI.utils.isWebGLSupported()) {
  type = 'canvas';
}

// 打印 PIXI 相关信息
PIXI.utils.sayHello(type);
