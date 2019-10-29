class App {
  constructor() {
    this.stats = null;

    this.width = 0;
    this.height = 0;

    this.renderer = null;
    this.camera = null;
    this.scene = null;

    this.mesh = null;
  }
  start() {
    this.initThree();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initGrid();
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
    this.camera.position.x = 300;
    this.camera.position.y = 300;
    this.camera.position.z = 100;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.camera.lookAt(0, 0, 0);
  }
  initScene() {
    this.scene = new THREE.Scene();
  }
  initLight() {
    let light = new THREE.AmbientLight(0xffffff);
    light.position.set(100, 100, 200);
    this.scene.add(light);
  }
  initGrid() {
    // 添加辅助网格
    const helper = new THREE.GridHelper(1000, 50, 0x0000ff, 0x808080);
    this.scene.add(helper);
  }
  initObject() {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    for (let i = 0; i < geometry.faces.length; i += 2) {
      // 每个立方体面由两个三角形面片组成
      // 为其赋予颜色
      const color = Math.random() * 0xffffff;
      geometry.faces[i].color.setHex(color);
      geometry.faces[i + 1].color.setHex(color);
    }
    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
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
