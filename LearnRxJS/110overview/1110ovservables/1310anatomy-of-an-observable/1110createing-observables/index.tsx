import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});

// Observables can be created with new Observable. Most commonly, observables are created using creation functions, like of, from, interval, etc.
