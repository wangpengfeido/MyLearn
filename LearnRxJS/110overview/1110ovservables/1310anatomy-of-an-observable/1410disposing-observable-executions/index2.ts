import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  const intervalId = setInterval(() => {
    subscriber.next('hi');
  }, 1000);

  // 返回一个销毁函数
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});

const subscription = observable.subscribe((x) => console.log(x));
subscription.unsubscribe();
