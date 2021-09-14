import { createUser } from './createUser.js';
import { email, name, password } from './variables.js';

export const submitBtnHandler = event => {
  const userData = {
    email: email.value,
    name: name.value,
    password: password.value,
  };

  createUser(userData);
  event.preventDefault();
};
