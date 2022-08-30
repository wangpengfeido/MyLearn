import { from } from 'rxjs';

const observable = from([10, 20, 30]);
const subscription = observable.subscribe((x) => console.log(x));

// 取消注册
subscription.unsubscribe();

// When you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.
