import { fromEvent, Observable } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap(val => console.log('tap: ', val)),
    auditTime(2000),
    map(({ x }) => x),
  )
  .subscribe(console.log);
