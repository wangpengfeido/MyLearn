const process = require('process');

/**
 * readStream.setRawMode(mode)
 * 将tty.ReadStream设置为作为raw device操作
 */
process.stdin.setRawMode(true);

process.stdin.pipe(process.stdout);
