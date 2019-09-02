class App {
  constructor() {
    this.stats = null;

    this.width = 0;
    this.height = 0;

    this.renderer = null;
    this.camera = null;
    this.scene = null;
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
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 800;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.camera.lookAt(0, 0, 0);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initLight() {}

  initObject() {
    const geometry = new THREE.PlaneGeometry(500, 300, 1, 1);
    geometry.vertices[0].uv = new THREE.Vector2(0, 0);
    geometry.vertices[1].uv = new THREE.Vector2(0.5, 0);
    geometry.vertices[2].uv = new THREE.Vector2(1, 1);
    geometry.vertices[3].uv = new THREE.Vector2(0, 1);

    // 加载纹理图片
    const texture = new THREE.TextureLoader().load('../../../demo-assets/test.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      this.render();
    });
    this.stats.update();
  }
}

new App().start();
