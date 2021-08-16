import getSum, { getOddNumbers, getSquare } from './fun.js';

it('Should get only odd numbers', () => {
  expect(getOddNumbers([1,2,3,4])).toEqual([1,3]);
})

it('Should get Square of numbers', () => {
  expect(getSquare([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
})

it('Should get sum of numbers', () => {
  expect(getSum(1, 4)).toEqual(5);
})