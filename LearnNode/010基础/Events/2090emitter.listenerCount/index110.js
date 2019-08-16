const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * emitter.listenerCount(eventName)
 * 获取某个事件的监听数
 */
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-1');
});
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-2');
});

console.log('event1:', emitter.listenerCount('event1'));
console.log('event2:', emitter.listenerCount('event2'));


