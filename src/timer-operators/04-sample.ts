import { fromEvent, interval, Observable } from 'rxjs';
import { map, sample } from 'rxjs/operators';

const interval$: Observable<number> = interval(500)

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click')

interval$.pipe(sample(click$)).subscribe(console.log)

