import { submitBtn, loginForm } from './variables.js';

export const formChangeHandler = () =>
  loginForm.reportValidity()
    ? submitBtn.removeAttribute('disabled')
    : submitBtn.setAttribute('disabled', 'disabled');
