import { interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!')
};

const source$ = interval(1000);

const sourceTwo$ = timer(5000, 1000);

source$.subscribe(observer);

sourceTwo$.subscribe(observer);
