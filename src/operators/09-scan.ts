import { from } from 'rxjs';
import { pluck, reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc: number, curr: number) => acc + curr;

// Reduce
from(numbers).pipe(reduce(totalReducer, 0)).subscribe(console.log);

// Scan
from(numbers).pipe(scan(totalReducer, 0)).subscribe(console.log);

// Redux
interface IUser {
  id?: string;
  auth?: boolean;
  token?: string;
  age?: number;
}

const user: IUser[] = [
  { id: 'jmor', auth: false, token: null },
  { id: 'jmor', auth: true, token: 'abc' },
  { id: 'jmor', auth: true, token: 'abc123' },
];

const state$ = from(user).pipe(
  scan<IUser>((acc, curr) => ({ ...acc, ...curr }), { age: 30 }),
);

const id$ = state$.pipe(pluck('id')).subscribe(console.log);
