const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * emitter.on(eventName, listener)
 * 注册事件监听
 */
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-1');
});
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-2');
});

emitter.emit('event1', 'aaa');
