const EventEmitter = require('events').EventEmitter;

class Test extends EventEmitter {
  constructor() {
    super();
  }

  emitEventA() {
    this.emit('eventA');
  }
}

let t = new Test();
t.on('eventA', function() {
  console.log('event a is emitted');
});
t.emitEventA();
