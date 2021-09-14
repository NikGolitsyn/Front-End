import { formChangeHandler } from './formChangeHandler.js';
import { loginForm } from './variables.js';
import { submitBtnHandler } from './submitBtnHandler.js';

// alog
// 1 disable submit button unless even one input is true
// 2 add EventListener for submit button
// 3 post request to server
// 4 alert server response
// 5 clear inputs values of form after successful respond
// 6 catch error ('Failed to create user') add this to element '.error-text'

loginForm.addEventListener('input', formChangeHandler, false);

loginForm.addEventListener('submit', submitBtnHandler);
