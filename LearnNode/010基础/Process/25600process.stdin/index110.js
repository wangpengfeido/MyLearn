const process = require('process');

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  /**
   * process.stdin
   * 它连接到stdin。它是net.Socket实例（双工流）
   * 当node.js附加TTY时，它将是tty.ReadStream的实例
   */
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data:${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('end');
});
