import { from, Observable, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers$: Observable<number | string> = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(distinct()).subscribe(console.log);
interface ICharacter {
  name: string;
}

const characters: ICharacter[] = [
  { name: 'Megaman' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'Dr. Willy' },
  { name: 'Zero' },
];

from(characters)
  .pipe(distinct(({ name }) => name))
  .subscribe(console.log);
