class View {
  constructor(canvas, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight) {
    this.viewWidth = viewWidth;
    this.viewHeight = viewHeight;
    this.fullWidth = fullWidth;
    this.fullHeight = fullHeight;
    this.camera = null;
    this.context = null;

    canvas.width = viewWidth * window.devicePixelRatio;
    canvas.height = viewHeight * window.devicePixelRatio;

    this.context = canvas.getContext('2d');

    this.camera = new THREE.PerspectiveCamera(20, fullWidth / fullHeight, 1, 10000);
    // 只使用相机的一部分
    this.camera.setViewOffset(fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight);
    this.camera.position.x = 1000;
    this.camera.position.y = 1000;
    this.camera.position.z = 1800;
  }
  render(renderer, scene, mouseX, mouseY) {
    // 改变相机位置
    this.camera.position.x += (mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(scene.position);

    // 设置视口。将图像绘制到窗口的左上角
    renderer.setViewport(0, this.fullHeight - this.viewHeight, this.viewWidth, this.viewHeight);
    renderer.render(scene, this.camera);
    // 将渲染结果绘制到canvas
    this.context.drawImage(renderer.domElement, 0, 0);
  }
}

class App {
  constructor() {
    this.fullWidth = 550;
    this.fullHeight = 600;

    this.mouseX = 0;
    this.mouseY = 0;

    this.renderer = null;
    this.scene = null;

    this.views = [];
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

    // 控制鼠标移动
    document.body.addEventListener('mousemove', event => {
      this.mouseX = event.clientX - window.innerWidth / 2;
      this.mouseY = event.clientY - window.innerHeight / 2;
    });
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.fullWidth, this.fullHeight);
    this.renderer.setClearColor(0xffffff, 1.0);
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
    // const geometry = new THREE.BoxGeometry(300, 300, 300);
    // for (let i = 0; i < geometry.faces.length; i += 2) {
    //   const color = Math.random() * 0xffffff;
    //   geometry.faces[i].color.setHex(color);
    //   geometry.faces[i + 1].color.setHex(color);
    // }
    // const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });
    // material.side = THREE.DoubleSide;
    // this.mesh = new THREE.Mesh(geometry, material);
    // this.scene.add(this.mesh);

    // 绘制二十面体
    const radius = 200;

    const geometry1 = new THREE.IcosahedronBufferGeometry(radius, 0);
    const count = geometry1.getAttribute('position').count; // 顶点个数
    geometry1.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));

    // 克隆两个图形
    const geometry2 = geometry1.clone();
    const geometry3 = geometry1.clone();

    const color = new THREE.Color();

    const positions1 = geometry1.getAttribute('position');
    const positions2 = geometry2.getAttribute('position');
    const positions3 = geometry3.getAttribute('position');
    const colors1 = geometry1.getAttribute('color');
    const colors2 = geometry2.getAttribute('color');
    const colors3 = geometry3.getAttribute('color');
    // 设置颜色
    for (let i = 0; i < count; i++) {
      color.setHSL((positions1.getY(i) / radius + 1) / 2, 1.0, 0.5);
      colors1.setXYZ(i, color.r, color.g, color.b);
      color.setHSL(0, (positions2.getY(i) / radius + 1) / 2, 0.5);
      colors2.setXYZ(i, color.r, color.g, color.b);
      color.setRGB(1, 0.8 - (positions3.getY(i) / radius + 1) / 2, 0);
      colors3.setXYZ(i, color.r, color.g, color.b);
    }

    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
      vertexColors: THREE.VertexColors,
      shininess: 0,
    });
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry1, material);
    const wireframe = new THREE.Mesh(geometry1, wireframeMaterial);
    mesh.add(wireframe);
    mesh.position.x = -400;
    mesh.rotation.x = -1.87;
    scene.add(mesh);
    const mesh = new THREE.Mesh(geometry2, material);
    const wireframe = new THREE.Mesh(geometry2, wireframeMaterial);
    mesh.add(wireframe);
    mesh.position.x = 400;
    scene.add(mesh);
    const mesh = new THREE.Mesh(geometry3, material);
    const wireframe = new THREE.Mesh(geometry3, wireframeMaterial);
    mesh.add(wireframe);
    scene.add(mesh);
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    for (let i = 0; i < this.views.length; i++) {
      this.views[i].render(this.renderer, this.scene, this.mouseX, this.mouseY);
    }
  }
}

const app = new App();
app.init();
