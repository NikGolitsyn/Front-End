import { calc } from './calculator';

it('Should return null', () => {
  expect(calc('sdasdas')).not.toEqual(null);
});

it('Should return sum', () => {
  expect(calc('14 + 14')).toEqual('14 + 14 = 28');
});
it('Should return substraction', () => {
  expect(calc('14 - 7')).toEqual('14 - 7 = 7');
});
it('Should return multiplication', () => {
  expect(calc('8 * 8')).toEqual('8 * 8 = 64');
});
it('Should return division', () => {
  expect(calc('100 / 10')).toEqual('100 / 10 = 10');
});
