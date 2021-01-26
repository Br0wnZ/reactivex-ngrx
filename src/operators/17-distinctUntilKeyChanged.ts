import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
interface ICharacter {
  name: string;
}

const characters: ICharacter[] = [
  { name: 'Megaman' },
  { name: 'Megaman' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'X' },
  { name: 'Dr. Willy' },
  { name: 'Zero' },
];

from(characters).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);