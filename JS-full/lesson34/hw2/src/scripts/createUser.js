import { baseUrl, errorNote, loginForm } from './variables.js';

export const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(data => data.json())
    .then(data => {
      loginForm.reset();
      alert(JSON.stringify(data));
    })
    .catch(() => {
      errorNote.textContent = 'Failed to create user';
    });
