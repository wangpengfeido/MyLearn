const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

// 使canvas占据整个窗口
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
