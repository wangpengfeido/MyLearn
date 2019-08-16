const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * emitter.removeListener(eventName, listener)
 * 移除某个事件监听
 */
const listener1_1 = event => {
  console.log('监听到了：', event, '1-1');
};
emitter.on('event1', listener1_1);
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-2');
});

emitter.removeListener('event1', listener1_1);
console.log('event1:', emitter.listenerCount('event1'));
