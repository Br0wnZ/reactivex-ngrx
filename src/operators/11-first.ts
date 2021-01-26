import { fromEvent, Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap(() => console.log('tap')),
    first(({ clientY }) => clientY >= 150),
  )
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completed'),
  });
