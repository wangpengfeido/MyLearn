// Observables are like functions with zero arguments, but generalize those to allow multiple values.

import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
  // subscribe 是 lazy 的。
  // 并且每次被 subscribe 都会被独立执行一次
  console.log('Hello');
  subscriber.next(42);
});

foo.subscribe((x) => {
  console.log(x);
});
foo.subscribe((y) => {
  console.log(y);
});
