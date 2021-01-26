import { fromEvent, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

interface ICoords {
  clientX: number,
  clientY: number
}

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map<MouseEvent, ICoords>(({ clientX, clientY }) => ({ clientX, clientY })),
    // takeWhile(({ clientY }) => clientY <= 150)
    takeWhile(({ clientY }) => clientY <= 150, true) // Emit last value
  )
  .subscribe({
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completed!'),
  });
