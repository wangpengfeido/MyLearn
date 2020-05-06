const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

PIXI.TextMetrics.tokenize = function (text) {
  const tokens = [];
  let token = '';
  if (typeof text !== 'string') {
      return tokens;
  }
  for (let i = 0; i < text.length; i++) {
      const char = text[i];

      tokens.push(char);
  }
  if (token !== '') {
      tokens.push(token);
  }
  return tokens;
}

const text = new PIXI.Text('撒旦发射发非官方大哥让他斯蒂芬仍丰东股份的', {
  fill: 0xffffff,
  fontSize: 30,
  whiteSpace: 'normal',
  wordWrap: true,
  wordWrapWidth: 200,
});
app.stage.addChild(text);
