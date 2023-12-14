import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test.each([
  [new Bowman('Ivan'), new Character('Ivan', 'Bowman')],
  [new Daemon('Ivan'), new Character('Ivan', 'Daemon')],
  [new Magician('Ivan'), new Character('Ivan', 'Magician')],
  [new Swordsman('Ivan'), new Character('Ivan', 'Swordsman')],
  [new Undead('Ivan'), new Character('Ivan', 'Undead')],
  [new Zombie('Ivan'), new Character('Ivan', 'Zombie')],
])('extends parents properties', (a, b) => {
  const result = Object.keys(a);
  const expected = Object.keys(b);
  expect(result).toEqual(expected);
});

test('return value of name', () => {
  const test = new Character('Ivan', 'Swordsman');
  expect(test.name).toEqual('Ivan');
});

test('return value of type', () => {
  const test = new Character('Ivan', 'Undead');
  expect(test.type).toEqual('Undead');
});

test('name length must be more than 2', () => {
  expect(() => new Character('I', 'Daemon')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('name length must be less than 10', () => {
  expect(() => new Character('Ivan Nikolaevich', 'Magician')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('error if wrong type', () => {
  expect(() => new Character('Ivan', 'Shooter')).toThrowError('Тип персонажа не существует');
});