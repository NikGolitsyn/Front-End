const baseUrl = 'https://613e4b5094dbd600172abb49.mockapi.io/api/v1/form';

// alog
// 5 disable submit button unless all inputs is true
// 1 add EventListener for submit button
// 2 alert server response
// 3 clear inputs values of form
// 4 add catch new Error('Failed to create user') add this to element '.error-text'

const submitBtn = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const submitBtnHandler = event => {
  const email = document.getElementById('email');
  const name = document.getElementById('name');
  const password = document.getElementById('password');

  const userData = {
    email: email.value,
    name: name.value,
    password: password.value,
  };

  createUser(userData)
    .then(data => data.json())
    .then(data => alert(JSON.stringify(data)));

  email.value = '';
  name.value = '';
  password.value = '';
  
  event.preventDefault();
};

const formChangeHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};
loginForm.addEventListener('input', formChangeHandler, false);

loginForm.addEventListener('submit', submitBtnHandler);
