const searchButton = document.querySelector('.search__btn');
const inputText = document.querySelector('.search__input');

searchButton.addEventListener('click', () => {
  console.log(inputText.value);
});
