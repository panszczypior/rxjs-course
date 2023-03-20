import { of, from, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(map((val) => val * 10))
  .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyCode$ = keyUp$.pipe(map((e) => e.code));

const keyCodeWithPluck$ = keyUp$.pipe(pluck('code'));

const pressed$ = keyUp$.pipe(mapTo('key pressed'));

pressed$.subscribe(console.log);
