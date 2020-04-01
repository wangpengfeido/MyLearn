const app = new PIXI.Application({
  width: 300,
  height: 300,
});
document.body.appendChild(app.view);

const particleContainer = new PIXI.ParticleContainer();
app.loader.add('cat', '../../../assets/cat.png').load(() => {
  for (let i = 0; i < 100; i++) {
    const cat = new PIXI.Sprite(app.loader.resources['cat'].texture);
    particleContainer.addChild(cat);
  }
  particleContainer.position.set(100, 100);
  app.stage.addChild(particleContainer);
});

function move() {
  particleContainer.children.forEach(cat => {
    cat.position.x = cat.position.x + (10 - Math.random() * 20);
    cat.position.y = cat.position.y + (10 - Math.random() * 20);
  });
}

function animate() {
  requestAnimationFrame(animate);
  move();
}
animate();
