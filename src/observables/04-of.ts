import { Observer, of } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next [next]: ', value),
  error: error => console.warn('error [obs]', error),
  complete: () => console.info('Completed [obs]')
}

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);
// const obs$ = of<number[]>([1, 2, 3, 4, 5, 6]);
// const obs$ = of<any>( [1,2], {a:1, b:2}, function(){}, Promise.resolve(true) );

console.log('Init obs$');

obs$.subscribe( observer );

console.log('End obs$');
