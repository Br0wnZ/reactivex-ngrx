import { asyncScheduler } from 'rxjs';

// setTimeout( () => { }, 3000);
// setInterval( () => { }, 3000)

const greet = () => console.log('Hello world');
const greet2 = (name: string) => console.log(`Hello ${name}`);

// asyncScheduler.schedule( greet, 2000)
// asyncScheduler.schedule( greet2, 2000, 'Javi') // setTimeout

const subs = asyncScheduler.schedule( function(state) {
  console.log('state: ', state);
  this.schedule(state+1, 1000)
},  3000, 0) // setInterval


/** Cancel subscription*/
// setTimeout(() => {
//   subs.unsubscribe()
// }, 6000);


asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )


