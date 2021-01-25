import { from, fromEvent, Observer, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface ICharacter {
  type: string;
  name: string;
}

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed'),
};

// range(1,10).pipe(filter<number>(x => x % 2 === 1)).subscribe(observer)

range(20, 30).pipe(
  filter<number>((val, i) => {
    console.log('index: ', i);
    return val % 2 === 1;
  }),
); //.subscribe(observer)

const characters: ICharacter[] = [
  {
    type: 'heroe',
    name: 'Batman',
  },
  {
    type: 'heroe',
    name: 'Robin',
  },
  {
    type: 'villain',
    name: 'Joker',
  },
];

from(characters)
  .pipe(filter<ICharacter>(({ type }) => type === 'heroe'))
  .subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map<KeyboardEvent, string>(({ code }) => code),
  filter<string>(key => key === 'Enter'),
);

keyup$.subscribe(console.log);
