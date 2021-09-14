import { submitBtn, loginForm } from './variables.js';

export const formChangeHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};
