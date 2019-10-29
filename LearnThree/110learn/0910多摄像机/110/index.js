class View {
  constructor(canvas, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight) {
    this.viewWidth = viewWidth;
    this.viewHeight = viewHeight;
    this.camera = null;
    this.context = null;

    canvas.width = viewWidth * window.devicePixelRatio;
    canvas.height = viewHeight * window.devicePixelRatio;

    this.context = canvas.getContext('2d');

    this.camera = new THREE.PerspectiveCamera(20, viewWidth / viewHeight, 1, 10000);
    // 只显示相机的一部分
    this.camera.setViewOffset(fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight);
    this.camera.position.z = 1800;
  }
  render(renderer, scene, mouseX, mouseY) {
    // this.camera.position.x += (mouseX - this.camera.position.x) * 0.05;
    // this.camera.position.y += (-mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(scene.position);

    // 设置视口
    renderer.setViewport(100, 100, this.viewWidth, this.viewHeight);
    renderer.render(scene, this.camera);
    // 将渲染结果绘制到canvas
    this.context.drawImage(renderer.domElement, 0, 0);
  }
}

class App {
  constructor() {
    this.fullWidth = 550;
    this.fullHeight = 600;

    this.renderer = null;
    this.scene = null;

    this.views = [];

    this.mesh = null;
  }
  init() {
    const canvas1 = document.querySelector('#canvas1');
    const canvas2 = document.querySelector('#canvas2');
    const canvas3 = document.querySelector('#canvas3');

    this.views.push(
      new View(canvas1, this.fullWidth, this.fullHeight, 0, 0, canvas1.clientWidth, canvas1.clientHeight)
    );
    this.views.push(
      new View(canvas2, this.fullWidth, this.fullHeight, 150, 200, canvas2.clientWidth, canvas2.clientHeight)
    );
    this.views.push(
      new View(canvas3, this.fullWidth, this.fullHeight, 75, 300, canvas3.clientWidth, canvas3.clientHeight)
    );

    this.initRenderer();
    this.initScene();
    this.initLight();
    this.initObject();
    this.render();
  }

  initRenderer() {
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
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 1).normalize();
    this.scene.add(light);
  }
  initObject() {
    const geometry = new THREE.BoxGeometry(300, 300, 300);
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
    for (let i = 0; i < this.views.length; i++) {
      this.views[i].render(this.renderer, this.scene, 0, 0);
    }
  }
}

const app = new App();
app.init();
