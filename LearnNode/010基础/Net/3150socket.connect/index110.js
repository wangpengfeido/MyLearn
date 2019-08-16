const net = require('net');

const socket = new net.Socket();

/**
 * socket.connect()
 * socket.connect(options[, connectListener])
 * socket.connect(path[, connectListener])
 * socket.connect(port[, host][, connectlistener])
 * 加入一个socket连接
 * connectListener 绑定到Socket实例的connect事件监听
 */
socket.connect(8124, () => {
  console.log('连接已建立');
  socket.on('data', data => {
    console.log(`收到数据：${data}`);
  });
  setInterval(() => {
    socket.write('sth to send');
  }, 2000);
});
socket.on('error', () => {
  console.log('连接错误');
});
