class App {
  constructor() {
    this.stats = null;

    this.width = 0;
    this.height = 0;

    this.renderer = null;
    this.camera = null;
    this.scene = null;
    this.controls = null;

    this.mesh = null;
  }

  start() {
    this.initThree();
    this.initCamera();
    this.initScene();
    this.initControls();
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
    this.renderer.setClearColor(0x000000, 1.0);

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

  initControls() {
    this.controls = new THREE.TrackballControls( this.camera, this.renderer.domElement );
    this.controls.rotateSpeed = 5.0;
    this.controls.zoomSpeed = 5;
    this.controls.panSpeed = 2;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
  }

  initLight() {
    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1000, 1000, 1000);
    this.scene.add(light);
  }

  initObject() {
    // 加载模型文件
    const loader = new THREE.VTKLoader();
    loader.load('../../../assets/bunny.vtk', geometry => {
      geometry.computeVertexNormals();
      // 基于外边界矩形将几何体居中。
      geometry.center();

      const material = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
      // 使用加载创建的Geometry和材质创建Mesh
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.set(0, 0, 0);
      this.mesh.scale.multiplyScalar(1000);

      this.scene.add(this.mesh);
    });
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.stats.update();
  }
}

new App().start();
