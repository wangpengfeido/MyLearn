// Subscribing to an Observable is analogous to calling a Function.

import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
});

console.log('before');
// observable 的执行并不是异步的
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');
