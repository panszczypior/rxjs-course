import { of, from, fromEvent } from 'rxjs';
import { map, filter, pluck } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(filter((val) => val > 3))
  .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyCodeWithPluck$ = keyUp$.pipe(pluck('code'));

const filteredKeyCode$ = keyCodeWithPluck$.pipe(filter((val) => val === 'KeyA'));

filteredKeyCode$.subscribe(console.log);
