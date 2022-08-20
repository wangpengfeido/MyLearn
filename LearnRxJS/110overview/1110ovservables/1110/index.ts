import { Observable } from 'rxjs';

// observable 是数据的生产者
const observable = new Observable((subscriber) => {
  // 调用是 lazy 的
  console.log('------------------before 1');
  subscriber.next(1);
  console.log('------------------before 2');
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');
