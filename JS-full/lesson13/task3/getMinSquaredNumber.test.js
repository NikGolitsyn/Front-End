import { getMinSquaredNumbers } from './getMinSquaredNumber';

it('Should return null', () => {
  expect(getMinSquaredNumbers('sdasdas')).toEqual(null);
});

it('Should return null', () => {
  expect(getMinSquaredNumbers([])).toEqual(null);
});

it('Should return min absolute square', () => {
  expect(getMinSquaredNumbers([-777, 3, -2, 6, 45, -20])).toEqual(4);
});
