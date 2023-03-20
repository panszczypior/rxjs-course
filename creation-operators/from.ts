import { from } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!')
};

const source$ = from(fetch('https://api.github.com/users/octocat'));

source$.subscribe(observer);

function* hello() {
  yield 'Hello';
  yield 'World';
}

const iterator = hello();

from(iterator).subscribe(observer);
