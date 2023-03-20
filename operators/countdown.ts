import { fromEvent, interval } from 'rxjs';
import { scan, mapTo, filter, tap, takeWhile, takeUntil } from 'rxjs/operators';

const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const abort = document.getElementById('abort');

const counter$ = interval(1000);

const abort$ = fromEvent(abort!, 'click');

counter$
  .pipe(
    mapTo(-1),
    scan((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 10),
    tap((val) => console.log('val before filter', val)),
    // filter((val) => val >= 0),
    takeWhile((val) => val >= 0),
    takeUntil(abort$)
  )
  .subscribe((val) => {
    countdown!.innerHTML = val.toString();

    if (!val) {
      message!.innerHTML = 'Liftoff!';
    }
  });
