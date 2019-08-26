const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * emitter.removeAllListeners([eventName])
 * 移除所有事件监听
 */
const listener1_1 = event => {
  console.log('监听到了：', event, '1-1');
};
emitter.on('event1', listener1_1);
emitter.on('event1', event => {
  console.log('监听到了：', event, '1-2');
});

emitter.removeAllListeners('event1');
console.log('event1:', emitter.listenerCount('event1'));
