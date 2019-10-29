class App {
  constructor() {
    this.fullWidth = 550;
    this.fullHeight = 600;

    this.renderer = null;
    this.scene = null;

    this.mesh = null;
  }
  init() {
    this.initThree();

    this.initScene();
    this.initCamera();
    this.initLight();
    this.initGrid();
    this.initObject();
    this.render();
  }
  initThree() {
    this.width = this.fullWidth;
    this.height = this.fullHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.fullWidth, this.fullHeight);
    this.renderer.setClearColor(0xffffff, 1.0);
    document.body.appendChild(this.renderer.domElement);
  }
  initScene() {
    this.scene = new THREE.Scene();
  }
  initLight() {
    let light = new THREE.AmbientLight(0xffffff);
    light.position.set(100, 100, 200);
    this.scene.add(light);
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

  initGrid() {
    const helper = new THREE.GridHelper(1000, 50, 0x0000ff, 0x808080);
    this.scene.add(helper);
  }
  initObject() {
    const geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    for (let i = 0; i < geometry.faces.length; i += 2) {
      const color = Math.random() * 0xffffff;
      geometry.faces[i].color.setHex(color);
      geometry.faces[i + 1].color.setHex(color);
    }
    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });
    material.side = THREE.DoubleSide;
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }
  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    // for (let i = 0; i < this.views.length; i++) {
    //   this.views[i].render(this.renderer, this.scene, 0, 0);
    // }
    this.renderer.render(this.scene, this.camera);
  }
}

const app = new App();
app.init();
