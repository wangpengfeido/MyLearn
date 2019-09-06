const process = require('process');

/**
 * process.nextTick(callback[, ...args])
 * nextTick回调在事件循环的每个阶段完成后执行
 */
console.log('start');
process.nextTick(() => {
  console.log('next tick callback');
});
console.log('end');
