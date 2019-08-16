const net = require('net');

/**
 * net.createServer([options][, connectionListener])
 * 创建一个TCP或IPC连接
 * connectionListener 绑定到返回的net.Server实例的connection事件监听。参数是net.Socket实例
 * 返回net.Server实例
 */
const server = net.createServer(socket => {
  console.log('连接建立', socket.remoteAddress, socket.remotePort);
  const interval = setInterval(() => {
    socket.write(`data to send`);
  }, 2000);
  socket.on('data', data => {
    console.log(`接收到数据： ${socket.remoteAddress}：${data}`);
  });
  socket.on('end', () => {
    console.log('连接断开');
    clearInterval(interval);
  });
  socket.on('error', () => {
    console.log('连接错误');
    clearInterval(interval);
    socket.end();
  });
});

server.listen(8124, () => {
  console.log('lising port 8124');
});
