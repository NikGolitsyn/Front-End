// algo

// 1 add eventListener for button show
// 2 create fetch function that will return promise with resolve of our request
// 3 deconstruct our body data to get what we want
// 4 put our userData info in our fields (name, ava, location)

// https://api.github.com/users/USERNAME
const showButton = document.querySelector('.name-form__btn');
const inputShow = document.querySelector('.name-form__input');
const userAvataImage = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

// input string
// output object Promise

const fetchFunction = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(userData => userData.json());

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvataImage.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : null;
};

const showButtonClickHandler = event =>
  fetchFunction(inputShow.value).then(data => renderUserData(data));

showButton.addEventListener('click', showButtonClickHandler);
