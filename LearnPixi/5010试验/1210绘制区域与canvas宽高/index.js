const app = new PIXI.Application({
  width: 400,
  height: 400,
  // 尝试改变：
  // resolution: 2,
});
document.body.appendChild(app.view);

// 尝试改变：
app.renderer.resize(500, 500);
// app.view.width = 600;

// 尝试改变：
// app.view.style.width = '1000px';
// app.view.style.height = '500px';

console.log(app.view.width, app.renderer.width);

const rect1 = new PIXI.Graphics();
rect1.beginFill(0x00ff00);
rect1.drawRect(0, 0, 400, 400);
rect1.endFill();
app.stage.addChild(rect1);


// 结论：

// 绘制区域宽高即 renderer初始化/resize 时指定的宽高，
// 也是 renderer.width(height)/renderer.resolution
// （renderer.width(height)=初始指定宽高*renderer.resolution）

// renderer.width(height)为app.view（canvas）的width(height)属性

// 上述所有的宽高都与dom宽高无关，改变dom宽高会拉伸canvas。
