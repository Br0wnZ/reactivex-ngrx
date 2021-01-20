import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed')
}

const interval$ = new Observable<number>( subscriber => {

  // Create counter
  let count: number = 0;

  const interval = setInterval(() => {
    subscriber.next( count )
    count++
    console.log(count);
  }, 1000)

  setTimeout(() => {
    subscriber.complete()
  }, 2500);

  return () => {
    clearInterval(interval)
    console.log('Interval finished');
  }

})

const subscription1 = interval$.subscribe( observer )
const subscription2 = interval$.subscribe( observer )
const subscription3 = interval$.subscribe( observer )

setTimeout(() => {
  subscription1.unsubscribe()
  subscription2.unsubscribe()
  subscription3.unsubscribe()
  console.log('Time out completed');
}, 6000);





