const WIDTH = 800,
  HEIGHT = 600;

// 创建场景
const scene = new THREE.Scene();
// 创建相机
// 参数：1.相机锥体宽度；2.相机锥体比率；3.相机锥体近平面；4.相机锥体远平面
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);        // 设置渲染器画布大小
document.body.appendChild(renderer.domElement);

// 添加物体到场景
const geometry = new THREE.CubeGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 渲染
function render() {
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  // render函数参数：1.场景；2.相机；3.渲染目标；4.渲染前是否清除画布
  renderer.render(scene, camera);
  // 再执行一次render。这样就形成了一个游戏循环
  requestAnimationFrame(render);
}
render();
