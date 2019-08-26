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
    this.camera.position.x = 600;
    this.camera.position.y = 0;
    this.camera.position.z = 600;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.camera.lookAt(0, 0, 0);
  }
  initScene() {
    this.scene = new THREE.Scene();
  }
  initLight() {
    // 可以看到结果：只被环境光照到的地方是绿色，能同时被环境光和方向光照到的地方混合为黄色
    let light1 = new THREE.AmbientLight(0x00ff00);
    this.scene.add(light1);

    let light2 = new THREE.DirectionalLight(0xff0000, 1);
    light2.position.set(0, 0, 1000);
    this.scene.add(light2);
  }
  initObject() {
    const geometry = new THREE.BoxGeometry(200, 100, 50, 4, 4);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    const geometry2 = new THREE.BoxGeometry(200, 100, 50, 4, 4);
    const mesh2 = new THREE.Mesh(geometry2, material);
    mesh2.position.set(-300, 0, 0);
    this.scene.add(mesh2);

    const geometry3 = new THREE.BoxGeometry(200, 100, 50, 4, 4);
    const mesh3 = new THREE.Mesh(geometry3, material);
    mesh3.position.set(0, -150, 0);
    this.scene.add(mesh3);

    const geometry4 = new THREE.BoxGeometry(200, 100, 50, 4, 4);
    const mesh4 = new THREE.Mesh(geometry4, material);
    mesh4.position.set(0, 150, 0);
    this.scene.add(mesh4);

    const geometry5 = new THREE.BoxGeometry(200, 100, 50, 4, 4);
    const mesh5 = new THREE.Mesh(geometry5, material);
    mesh5.position.set(300, 0, 0);
    this.scene.add(mesh5);

    const geometry6 = new THREE.BoxGeometry(200, 100, 50, 4, 4);
    const mesh6 = new THREE.Mesh(geometry6, material);
    mesh6.position.set(0, 0, -100);
    this.scene.add(mesh6);
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
