import { Observable } from 'rxjs';

// consumer
const observer = {
  next: (value) => console.log('next from observer', value),
  error: (error) => console.log('error from observer', error),
  complete: () => console.log('complete from observer')
};

const observerTwo = {
  next: (value) => console.log('next from observerTwo', value)
};

// producer
const observable = new Observable((subscriber) => {
  // pushing or emitting value to the subscriber
  let count = 0;

  const intervalId = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observerTwo);

subscription.add(subscriptionTwo);

setTimeout(() => {
  subscription.unsubscribe();
}, 3500);
