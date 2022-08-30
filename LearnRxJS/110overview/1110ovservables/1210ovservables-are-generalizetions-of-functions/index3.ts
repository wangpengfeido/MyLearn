// Observables are able to deliver values either synchronously or asynchronously.

import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
  // 可以同步分发，也可以异步分发
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');
