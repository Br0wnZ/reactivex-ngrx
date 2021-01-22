import { of } from 'rxjs';

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);
// const obs$ = of<number[]>([1, 2, 3, 4, 5, 6]);
// const obs$ = of<any>( [1,2], {a:1, b:2}, function(){}, Promise.resolve(true) );

console.log('Init obs$');

obs$.subscribe(
  next => console.log('next: ', next),
  null,
  () => console.log('completed'),
);

console.log('End obs$');
