class App {
  constructor() {
    this.dom_canvasBox = document.querySelector('#canvas-box');
    this.stats = null;

    this.width = this.dom_canvasBox.clientWidth;
    this.height = this.dom_canvasBox.clientHeight;

    this.renderer = null;
    this.camera = null;
    this.camera2 = null;
    this.scene = null;

    this.controls = null;

    this.mesh = null;
  }
  init() {
    this.initStats();
    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initControls();
    this.initLight();
    this.initObject();
    this.render();
  }

  initStats() {
    this.stats = new Stats();
    this.stats.domElement.style.position = 'fixed';
    this.stats.domElement.style.left = '0';
    this.stats.domElement.style.top = '0';
    this.dom_canvasBox.appendChild(this.stats.domElement);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1.0);
    this.dom_canvasBox.appendChild(this.renderer.domElement);
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

  initControls() {
    this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
    this.controls.rotateSpeed = 5.0;
    this.controls.zoomSpeed = 5;
    this.controls.panSpeed = 2;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
  }

  initLight() {
    let light = new THREE.AmbientLight(0xffffff);
    light.position.set(100, 100, 200);
    this.scene.add(light);
  }

  initObject() {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
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

  animation() {}

  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    this.controls.update();
    this.animation();

    this.renderer.setScissorTest( true );

    this.renderer.setClearColor(0xeeeeee, 1.0);
    this.renderer.setViewport(0, 0, this.width / 2, this.height);
    this.renderer.setScissor(0, 0, this.width / 2, this.height);
    // 设置相机偏移。只使用相机的一部分
    this.camera.setViewOffset(this.width, this.height, 0, 0, this.width / 2, this.height);
    this.renderer.render(this.scene, this.camera);

    this.renderer.setClearColor(0x00eeee, 1.0);
    this.renderer.setViewport(this.width / 2, 0, this.width / 2, this.height);
    this.renderer.setScissor(this.width / 2, 0, this.width / 2, this.height);
    // 设置相机偏移
    this.camera.setViewOffset(this.width, this.height, this.width / 2, 0, this.width / 2, this.height);
    this.renderer.render(this.scene, this.camera);

    this.stats.update();
  }
}

const app = new App();
app.init();
