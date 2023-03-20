import { fromEvent, interval } from 'rxjs';
import { sample, sampleTime, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');
const timer$ = interval(1000);

click$
  .pipe(
    // sampleTime(4000),
    map(({ clientX, clientY }) => ({
      clientX,
      clientY
    }))
  )
  .subscribe(console.log);

timer$.pipe(sample(click$)).subscribe(console.log);
