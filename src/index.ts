import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next [next]: ', value),
  error: error => console.warn('error [obs]', error),
  complete: () => console.info('Completed [obs]')
}

// const obs$ = Observable.create() // Deprecated

const obs$ = new Observable<string>( subs => {
  subs.next('Hello')
  subs.next('World')
  subs.next('Hello')
  subs.next('World')

  // Error forced
  // const a = undefined
  // a.name = 'Javi Moreno'

  subs.complete()
  subs.next('World')
})

// obs$.subscribe( console.log )

// obs$.subscribe( 
//   value => console.log('next: ',value),
//   error => console.warn('error', error),
//   () => console.info('Completed')
// )

obs$.subscribe( observer )






