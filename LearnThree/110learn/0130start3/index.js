class App {
  constructor() {
    this.renderer = null;
    this.camera = null;
  }
  initThree() {
    const dom_canvasBox = document.querySelector('#canvas-box');
    const width = dom_canvasBox.clientWidth;
    const height = dom_canvasBox.clientHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true }); // 开启抗锯齿
    this.renderer.setSize(width, height);
    dom_canvasBox.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xffffff, 1.0); // 设置清空颜色
  }
}
