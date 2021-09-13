const baseUrl = 'https://613e4b5094dbd600172abb49.mockapi.io/api/v1/form';

// alog
// 5 disable submit button unless all inputs is true
// 1 add EventListener for submit button
// 2 alert server response
// 3 clear inputs values of form
// 4 add catch new Error('Failed to create user') add this to element '.error-text'

const submitBtn = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');
const emailElement = document.getElementById('email');
const formNameElement = document.getElementById('name');
const formPasswordElement = document.getElementById('password');

const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const getUsers = () => fetch(baseUrl).then(respose => respose.json());

const formChangeHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  }
};

const submitBtnHandler = event => {
  createUser({
    email: emailElement.value,
    userName: formNameElement.value,
    userPassword: formPasswordElement.value,
  }).then(data => console.log(JSON.stringify(data)));
  // getUsers().then(data => alert(JSON.stringify(data)));
  event.preventDefault();
};
// .then(() => {
//     emailElement.value = '';
//     formNameElement.value = '';
//     formPasswordElement.value = '';
//   });

loginForm.addEventListener('change', formChangeHandler, false);

loginForm.addEventListener('submit', submitBtnHandler);
