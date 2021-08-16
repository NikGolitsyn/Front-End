import { reverseArray, getAdults, withdraw } from './unit-test';

it('Should return null', () => {
  expect(reverseArray(Array.isArray([1, 2, 3]))).not.toEqual(true);
});

it('Should return reverse array', () => {
  expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
});

it('Should return array did not change', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(reverseArray(arr)).not.toEqual(arr);
});

it('Should return people aged 18+', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('Should return empty object', () => {
  expect(getAdults({})).toEqual({});
});

it('Should return object did not change', () => {
  const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };
  expect(getAdults(obj)).not.toEqual(obj);
});

it('Should return balance of person after withdraw', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(37);
  expect(
    withdraw(
      ['Vladimir', 'Oleg', 'Katya', 'David', 'Lex'],
      [5000, 87, -6, 55, 0],
      'Vladimir',
      2500,
    ),
  ).toEqual(2500);
});

it('Should return -1', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(-1);
  expect(
    withdraw(
      ['Vladimir', 'Oleg', 'Katya', 'David', 'Lex'],
      [5000, 87, -6, 55, 0],
      'Vladimir',
      5500,
    ),
  ).toEqual(-1);
});

it('Should return balance of person after withdraw', () => {
  expect(withdraw(['Dagon', 'Crixus', 'Gannicus'], [555, 666, 777], 'Crixus', 666)).toEqual(0);
});
