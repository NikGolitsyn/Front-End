import { createUser } from './createUser.js';
import { loginForm } from './variables.js';

export const submitBtnHandler = event => {
  const user = Object.fromEntries(new FormData(loginForm));

  createUser(user);
  event.preventDefault();
};
