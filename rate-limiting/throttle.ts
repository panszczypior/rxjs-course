import { fromEvent } from 'rxjs';
import { map, throttleTime, tap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(throttleTime(3000)).subscribe(console.log);
