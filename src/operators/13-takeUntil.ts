import { fromEvent, interval, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface ICoords {
  clientX: number;
  clientY: number;
}

const button = document.createElement('button');
button.innerHTML = 'Stop timer';

document.querySelector('body').append(button);

const counter$: Observable<number> = interval(1000);
const clickBtn$: Observable<Event> = fromEvent<Event>(button, 'click');

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed!'),
});
