import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc: number, curr: number) => acc + curr;

const total = numbers.reduce(totalReducer, 0);
console.log('🚀 ~ file: index.ts ~ line 9 ~ total', total);

interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete'),
  });
