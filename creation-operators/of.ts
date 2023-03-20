import { of, range } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!')
};

console.log('proving');
const source$ = of(1, 2, 3, 4, 5);
console.log('this is synchronous');

source$.subscribe(observer);

range(1, 5).subscribe(observer);
