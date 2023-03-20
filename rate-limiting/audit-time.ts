import { fromEvent } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    auditTime(4000),
    map(({ clientX, clientY }) => ({
      clientX,
      clientY
    }))
  )
  .subscribe(console.log);
