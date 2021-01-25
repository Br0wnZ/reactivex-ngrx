import { Observable, Observer, range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed'),
};

const numbers$: Observable<number> = range(1, 5);

numbers$
  .pipe(
    tap<number>(x => console.log('before: ', x)),
    map<number, number>(val => val * 10),
    tap<number>({
      next: value => console.log('after: ', value),
      complete: () => console.log('Completed!')
    }),
  )
  .subscribe(val => console.log('result: ', val));
