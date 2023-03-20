import { of, from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, scan, map } from 'rxjs/operators';

const numbers$ = of(1, '1', 2, 3, 3, 3, 4, 5, 3);

// distinct uses ===

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);
