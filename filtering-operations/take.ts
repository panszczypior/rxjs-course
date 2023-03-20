import { of, fromEvent } from 'rxjs';
import { take, map, first } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(take(3)).subscribe({
  next: console.log,
  complete: () => console.log('Complete!')
});

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY
    })),
    first(({ y }) => y > 200)
    // take(3)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('Complete!')
  });
