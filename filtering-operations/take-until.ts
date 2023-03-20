import { interval, fromEvent } from 'rxjs';
import { scan, mapTo, takeWhile, takeUntil, tap } from 'rxjs/operators';

const counter$ = interval(1000);

const click$ = fromEvent(document, 'click');

counter$.pipe(takeUntil(click$)).subscribe(console.log);
