/**
 * setImmediate(callback[, ...args])
 * setImmediate在事件循环的check阶段执行
 */
console.log('start');
setImmediate(() => {
  console.log('immediate callback');
});
console.log('end');
