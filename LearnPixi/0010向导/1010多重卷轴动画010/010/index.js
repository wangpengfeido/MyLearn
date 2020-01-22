const stage = new PIXI.Container();

const canvas = document.querySelector('#game-canvas');
const renderer = PIXI.autoDetectRenderer({ width: canvas.width, height: canvas.height, view: canvas });

const farTexture = PIXI.Texture.from('../../../assets/parallax-scroller/bg-far.png');
const far = new PIXI.Sprite(farTexture);
far.position.x = 0;
far.position.y = 0;
stage.addChild(far);

const midTexture = PIXI.Texture.from('../../../assets/parallax-scroller/bg-mid.png');
const mid=new PIXI.Sprite(midTexture);
mid.position.x=0;
mid.position.y=128;
stage.addChild(mid);

renderer.render(stage);

requestAnimationFrame();
