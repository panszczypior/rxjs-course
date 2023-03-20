import { fromEvent, interval } from 'rxjs';
import { scan, map, mapTo, takeWhile, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY
    })),
    takeWhile(({ y }) => y > 200)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('Complete!')
  });
