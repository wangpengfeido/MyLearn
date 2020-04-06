const app = new PIXI.Application({
  width: 300,
  height: 300,
  preserveDrawingBuffer: true,
});
document.body.appendChild(app.view);

app.loader
  .add('sth', 'https://cn.bing.com/th?id=OHR.ShyGuy_ZH-CN7391687938_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp', {
    crossOrigin: true,
    xhrType: PIXI.LoaderResource.XHR_RESPONSE_TYPE.BLOB,
  })
  .load(() => {
    const sth = new PIXI.Sprite(app.loader.resources['sth'].texture);
    sth.width = 200;
    sth.height = 200;
    app.stage.addChild(sth);
  });

document.querySelector('.save-picture').addEventListener('click', () => {
  const base64 = app.renderer.plugins.extract.base64(app.stage, 'image/jpeg');
  const img = new Image();
  img.src = base64;
  document.body.appendChild(img);
});
