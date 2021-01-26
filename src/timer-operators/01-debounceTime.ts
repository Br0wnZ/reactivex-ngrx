import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const click$: Observable<Event> = fromEvent<Event>(document, 'click');

//click$.pipe(debounceTime(3000)).subscribe(console.log)

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
  debounceTime(1000),
  pluck<KeyboardEvent, any>('target', 'value'),
  distinctUntilChanged()
);

input$.subscribe(console.log);
