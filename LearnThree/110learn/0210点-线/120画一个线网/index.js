// Three.js使用右手坐标系。就像下面这样
//           Y
//           ↑
//           ·→X
//         ↙
//        Z

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
    // 绘制了一个线构成的网格

    const geometry = new THREE.Geometry();
    // 点在vertices中存放
    geometry.vertices.push(new THREE.Vector3(-500, 0, 0), new THREE.Vector3(500, 0, 0));
    for (let i = 0; i <= 20; i++) {
      const line1 = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2 })
      );
      line1.position.z = 500 - i * 50;
      this.scene.add(line1);

      const line2 = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2 })
      );
      // position表示位移
      line2.position.x = 500 - i * 50;
      // rotation表示旋转（弧度）。这里旋转0.5π弧度
      line2.rotation.y = 0.5 * Math.PI;
      this.scene.add(line2);
    }
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
