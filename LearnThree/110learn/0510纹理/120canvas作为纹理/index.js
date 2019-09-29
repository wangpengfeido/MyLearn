class ClockCanvas {
  constructor() {
    this.canvas = null;
    this.ctx = null;

    this.init();
  }
  init() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = 128;
    this.canvas.height = 128;

    this.draw();
    setInterval(() => {
      this.draw();
    }, 1000);
  }

  draw() {
    this.ctx.clearRect(0, 0, 128, 128);
    this.ctx.fillStyle = '#ffff00';
    this.ctx.fillRect(0, 0, 128, 128);
    this.ctx.fillStyle = '#000000';
    this.ctx.font = '30px arial';
    const date = new Date();
    this.ctx.fillText(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, 10, 70);
  }
}

class App {
  constructor() {
    this.stats = null;

    this.width = 0;
    this.height = 0;

    this.renderer = null;
    this.camera = null;
    this.scene = null;

    this.mesh = null;

    this.clockCanvas = new ClockCanvas().canvas;
  }

  start() {
    this.initThree();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initObject();
    this.render();
  }

  initThree() {
    const dom_canvasBox = document.querySelector('#canvas-box');
    this.width = dom_canvasBox.clientWidth;
    this.height = dom_canvasBox.clientHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    dom_canvasBox.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xffffff, 1.0);

    this.stats = new Stats();
    this.stats.domElement.style.position = 'fixed';
    this.stats.domElement.style.left = '0';
    this.stats.domElement.style.top = '0';
    dom_canvasBox.appendChild(this.stats.domElement);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
    this.camera.position.x = 400;
    this.camera.position.y = 400;
    this.camera.position.z = 400;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.camera.lookAt(0, 0, 0);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initLight() {
    let light = new THREE.AmbientLight(0x00ff00);
    light.position.set(100, 100, 200);
    this.scene.add(light);
  }

  initObject() {
    const geometry = new THREE.BoxGeometry(100, 100, 100);

    // 使用canvas作为纹理
    const texture = new THREE.CanvasTexture(this.clockCanvas);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  render() {
    // 需要在需要更新纹理时，将needsUpdate设置为true
    this.mesh.material.map.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      this.render();
    });
    this.stats.update();
  }
}

new App().start();
