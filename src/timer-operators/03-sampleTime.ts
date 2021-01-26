import { fromEvent, Observable } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  sampleTime(2000),
  map(({ x, y }) => ({ x, y }))
).subscribe(console.log)
