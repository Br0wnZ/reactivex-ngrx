import { fromEvent, interval, Observable } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button: HTMLButtonElement = document.createElement('button');
const timerButton: HTMLButtonElement = document.createElement('button');
button.innerHTML = 'Stop timer';
timerButton.innerHTML = 'Timer: 0';

document.querySelector('body').append(button);
document.querySelector('body').append(timerButton);

const counter$: Observable<number> = interval(1000);
// const clickBtn$: Observable<Event> = fromEvent<Event>(button, 'click');
const clickBtn$: Observable<Event> = fromEvent<Event>(button, 'click').pipe(
  tap(() => console.log('tap before skip')),
  skip(1),
  tap(() => console.log('tap after skip')),
);

// Complete the first obersavble when the second emit the first time
counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: value => {
    timerButton.innerHTML = `Timer:  ${value}`;
    console.log('next: ', value);
  },
  error: error => console.warn('error: ', error),
  complete: () => {
    console.info('Completed!');
    timerButton.innerHTML = 'Completed!';
  },
});
