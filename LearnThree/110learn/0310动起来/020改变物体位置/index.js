class App {
  constructor() {
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
    this.initObject();
    this.render();
  }
  initThree() {
    const dom_canvasBox = document.querySelector('#canvas-box');
    this.width = dom_canvasBox.clientWidth;
    this.height = dom_canvasBox.clientHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true }); // 开启抗锯齿
    this.renderer.setSize(this.width, this.height);
    dom_canvasBox.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xffffff, 1.0); // 设置清空颜色
  }
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
    this.camera.position.x = 0;
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
    const light1 = new THREE.AmbientLight(0xffffff);
    light1.position.set(100, 100, 200);
    this.scene.add(light1);

    const light2 = new THREE.PointLight(0x00ff00);
    light2.position.set(0, 3000, 0);
    this.scene.add(light2);
  }
  initObject() {
    const geometry = new THREE.CylinderGeometry(100, 150, 400);
    const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }
  render() {
    // 每次渲染物体向左移动
    this.mesh.position.x -= 1;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      this.render();
    });
  }
}

new App().start();
