import { baseUrl, email, name, password, errorNote, submitBtn } from './variables.js';

export const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then(data => data.json())
    .then(data => alert(JSON.stringify(data)))
    .then(() => {
      email.value = '';
      name.value = '';
      password.value = '';
      submitBtn.setAttribute('disabled', 'disabled');
    })
    .catch(() => {
      errorNote.textContent = 'Failed to create user';
      const inputChangeHandler = e => {
        if (!e.target.classList.contains('form-input')) {
          return;
        }
        errorNote.textContent = '';
      };
    });
