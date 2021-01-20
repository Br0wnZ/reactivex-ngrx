import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed'),
};

const interval$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval( intervalID )
    console.log('Interval completed');
  }
});

/**
 *  Subjects: 
 *  1.- Multiple casting
 *  2.- is a onserber too
 *  3.- Next, error & completed
 *  4.- Emit same value for all subscription
 *  5.- Change Cold Observable to Hot Observable
 */

const subject$ = new Subject<number>()

const subscription = interval$.subscribe( subject$ )

// const subs1 = interval$.subscribe( rnd => console.log('sub1: ', rnd) )
// const subs2 = interval$.subscribe( rnd => console.log('sub2: ', rnd) )

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )

setTimeout(() => {
  
  subject$.next(10)

  subject$.complete()

  // We need to unsuscribe from subject for clear interval
  subscription.unsubscribe()

}, 3500);