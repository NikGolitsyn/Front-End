import { user } from './index';

it('should return user firstName', () => {
  expect(user.firstname).toEqual('John');
});

it('should return user lastName', () => {
  expect(user.lastName).toEqual('Doe');
});

it('should return user fullName', () => {
  expect(user.getFullName()).toEqual('John Doe');
});
