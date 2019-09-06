const process = require('process');

/**
 * Event: 'resize'
 * writeStream.columns或writeStream.rows属性发生改变时被触发
 */
process.stdout.on('resize', () => {
  console.log('resize');
});

process.stdin.pipe(process.stdout);
