import { Observer, interval, timer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error', error),
  complete: () => console.info('Completed')
}

const todayIn5 = new Date() // now
todayIn5.setSeconds( todayIn5.getSeconds() + 5 )

const interval$ = interval(1000)

// const timer$ = timer(2000)
// const timer$ = timer(2000, 1000)
const timer$ = timer( todayIn5 )

console.log('Start');

// interval$.subscribe( observer )

timer$.subscribe( observer )

console.log('End');

