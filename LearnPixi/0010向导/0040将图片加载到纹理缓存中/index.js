const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

// 加载纹理并缓存
PIXI.Loader.shared.add('../assets/cat.png').load(() => {
  // 加载完成的回调
});
// 使用纹理创建精灵
const sprite = new PIXI.Sprite(
  // 使用缓存的纹理
  PIXI.Loader.shared.resources['../assets/cat.png'].texture
);
