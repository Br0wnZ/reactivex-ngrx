import { range, Observer, fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed'),
};

// range(1, 5)
//   .pipe(map<number, string>(x => (x * 10).toString()))
//   .subscribe(observer);

// const keyup$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup')
const keyupCode$: Observable<string> = fromEvent<KeyboardEvent>(document, 'keyup').pipe(map(({ code }) => code));

keyupCode$.subscribe( observer );
