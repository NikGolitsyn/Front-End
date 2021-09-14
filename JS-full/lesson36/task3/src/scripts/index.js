import { fetchFunction, fetchRepositories } from './gateways.js';
import { renderUserData } from './users.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';
// algo

// 1 add eventListener for button show
// 2 create fetch function that will return promise with resolve of our request
// 3 deconstruct our body data to get what we want
// 4 put our userData info in our fields (name, ava, location)

// https://api.github.com/users/USERNAME
const showButton = document.querySelector('.name-form__btn');
const userNameInput = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showButtonClickHandler = async event => {
  cleanReposList();
  showSpinner();
  try {
    const userData = await fetchFunction(userNameInput.value);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

showButton.addEventListener('click', showButtonClickHandler);
