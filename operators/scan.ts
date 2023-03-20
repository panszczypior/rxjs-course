import { from } from 'rxjs';
import { scan, distinctUntilChanged, map, distinctUntilKeyChanged } from 'rxjs/operators';

const totalReducer = (accumulator, currentValue) => {
  //   console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const numbers = [1, 2, 3, 4, 5];

// from(numbers).pipe(scan(totalReducer, 0)).subscribe(console.log);

const user = [
  { name: 'Brian', loggedIn: false, token: null },
  { name: 'Brian', loggedIn: true, token: 'abc' },
  { name: 'Brian', loggedIn: true, token: '123' }
];

const state$ = from(user).pipe(
  scan((accumulator, currentValue) => {
    return { ...accumulator, ...currentValue };
  }, {} as { name: string })
);

const name$ = state$.pipe(
  distinctUntilKeyChanged<{ name: string }>('name'),
  // distinctUntilChanged((prev: any, curr: any) => prev.name === curr.name),
  map((state: any) => state.name)
  // distinctUntilChanged()
);

name$.subscribe(console.log);
