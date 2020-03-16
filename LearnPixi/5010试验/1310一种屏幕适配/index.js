let drawWidth = 750;
let drawHeight = 1500;
let minWidth = 750;
let minHeight = 1000;

const app = new PIXI.Application({
  width: drawWidth,
  height: drawHeight,
});

document.body.appendChild(app.view);

function resize() {
  const screenRatio = window.innerWidth / window.innerHeight;
  if (screenRatio < minWidth / minHeight) {
    console.log('11111111');
    const drawRatio = drawWidth / drawHeight;
    app.view.width = `${window.innerWidth}px`;
    app.view.height = `${window.innerWidth / drawRatio}px`;
    app.view.position = 'relative';
  }
}

resize();
