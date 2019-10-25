const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
  backgroundColor: 0x00ffff,
});

document.body.appendChild(app.view);

const message = new PIXI.Text(
  'hello pixi',
  new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 'white',
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  })
);
message.position.set(54, 96);
app.stage.addChild(message);

// 修改文字内容
message.text = 'text changed';
// 修改文字样式
message.style = {
  // 创建多行文字
  wordWrap: true,
  wordWrapWidth: 100,
  align: 'center',
};

// 显示文本的原理是先将文本渲染成临时canvas，再将canvas作为纹理

// 文本可使用自定义字体文件，在css中使用@font-face加载字体即可

// PIXI也支持位图字体
