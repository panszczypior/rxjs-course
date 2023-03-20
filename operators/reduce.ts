import { from, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator, currentValue) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

// from(numbers).pipe(reduce(totalReducer, 0)).subscribe(console.log);

interval(1000)
  .pipe(
    /*
     * Important! reduce only emits one value, the final accumulated value
     * on completion. We are forcing completion by using the take operator.
     * If you want to emit each new accumulated value, you will use the scan
     * operator, which is the focus of the next lesson.
     */
    take(3),
    reduce(totalReducer, 0)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('Complete!')
  });
