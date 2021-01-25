import { of, from, Observer } from 'rxjs'

/**
 * of = take and set a sequence
 * from = arary, promise, iterable, observable
 */

const observer: Observer<any> = {
  next: value => console.log('next [next]: ', value),
  error: error => console.warn('error [obs]', error),
  complete: () => console.info('Completed [obs]')
}

/** Generator function */
const myGenerator = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

/** Iterable */
const myIterable = myGenerator()

/** Loop through the iterable */
// for (const id of myIterable) {
//   console.log(id);
// }

/** Loop through the iterable */
from( myIterable ).subscribe( observer )

// const source$ = of([1,2,3,4,5])
// const source$ = of(...[1,2,3,4,5])

// const source$ = from('Javi')

/** Fetch data from http request */
const source$ = from<Promise<Response>>( fetch('https://api.github.com/users/klerith') )

// source$.subscribe( async response => {
//   console.log( response );
//   const dataResponse = await response.json()
//   console.log(dataResponse);
// })

// source$.subscribe( observer )