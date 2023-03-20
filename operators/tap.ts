import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    tap((val) => console.log('before', val)),
    map((val) => val * 10),
    tap({
      next: (value) => console.log('after', value),
      complete: () => console.log('done!'),
      error: (error) => {
        // do something
      }
    })
  )
  .subscribe((val) => console.log('from subscribe', val));
