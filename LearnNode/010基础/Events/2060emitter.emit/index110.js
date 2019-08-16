const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * emitter.emit(eventName[, ...args])
 * 触发事件
 * 返回事件是否触发成功
 */
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-1');
});
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-2');
});

console.log('触发存在监听的事件', emitter.emit('event1', 'aaa'));
console.log('触发不存在监听的事件', emitter.emit('event2', 'aaa'));
