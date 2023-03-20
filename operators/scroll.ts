import { fromEvent, asyncScheduler } from 'rxjs';
import { map, tap, throttleTime } from 'rxjs/operators';

// helper

function calcScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// elems

const progressBar = document.querySelector<HTMLDivElement>('.progress-bar');

const scrollSource$ = fromEvent<WheelEvent>(document, 'scroll');

const progress$ = scrollSource$.pipe(
  throttleTime(30, asyncScheduler, {
    trailing: true,
    leading: false
  }),
  map(({ target }) => calcScrollPercent((target as Document).scrollingElement)),
  tap(console.log)
);

progress$.subscribe((percent) => {
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
});
