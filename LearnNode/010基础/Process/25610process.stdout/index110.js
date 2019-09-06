const process = require('process');

/**
 * process.stdout
 * 它连接到stdout。它是net.Socket实例（双工流）
 * 当node.js附加TTY时，它将是tty.WriteStream的实例
 */
process.stdin.pipe(process.stdout);
