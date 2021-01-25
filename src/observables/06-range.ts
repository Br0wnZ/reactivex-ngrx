import { asyncScheduler, Observer, of, range } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error', error),
  complete: () => console.info('Completed')
}

const src$ = of(1,2,3,4,5,6,7,8,9,10)
// const src2$ = range(-5,10)
const src2$ = range(1, 5, asyncScheduler)

console.log('Start');
// src$.subscribe( console.log )
src2$.subscribe( console.log )
console.log('End');
