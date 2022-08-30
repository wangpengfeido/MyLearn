import { Subject, from } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

const observable = from([1, 2, 3]);

// 因为 subject 是一个 observer，所以可以它可以作为 subscribe 方法的参数
observable.subscribe(subject);
