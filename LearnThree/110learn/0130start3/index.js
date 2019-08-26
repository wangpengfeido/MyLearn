class App {
  constructor() {
    this.width = 0;
    this.height = 0;

    this.renderer = null;
    this.camera = null;
    this.scene = null;
    this.light = null;
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
    this.camera.position.y = 1000;
    this.camera.position.z = 0;
    this.camera.up.x = 0;
    this.camera.up.y = 0;
    this.camera.up.z = 1;
    this.camera.lookAt(0, 0, 0);
  }
  initScene() {
    this.scene = new THREE.Scene();
  }
  initLight() {
    this.light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
    this.light.position.set(100, 100, 200);
    this.scene.add(this.light);
  }
  initObject() {
    const geometry = new THREE.Geometry();

    const color1 = new THREE.Color(0x444444),
      color2 = new THREE.Color(0xff0000);
    const p1 = new THREE.Vector3(-100, 0, 100);
    const p2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(p1, p2);
    geometry.colors.push(color1, color2);

    const material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
    const line = new THREE.LineSegments(geometry, material);
    this.scene.add(line);
  }
  render() {
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      this.render();
    });
  }
}

new App().start();
