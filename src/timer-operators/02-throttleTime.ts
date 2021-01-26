import { asyncScheduler, fromEvent, Observable } from 'rxjs';
import { throttleTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const click$: Observable<Event> = fromEvent<Event>(document, 'click');

click$.pipe(throttleTime(3000));

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
  throttleTime(600, asyncScheduler, {
    leading: false,
    trailing: true,
  }),
  pluck<KeyboardEvent, any>('target', 'value'),
  distinctUntilChanged(),
);

input$.subscribe(console.log);
