import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const inputBox = document.getElementById('text-input');

const input$ = fromEvent(inputBox!, 'keyup');

const click$ = fromEvent(document, 'click');

input$
  .pipe(debounceTime(300), pluck('target', 'value'), distinctUntilChanged())
  .subscribe(console.log);
