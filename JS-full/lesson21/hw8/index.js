export function finishList() {
  const listItem = document.createElement('li');
  listItem.textContent = 1;
  document.querySelector('ul').prepend(listItem);
  const listItem2 = document.createElement('li');
  listItem2.textContent = 8;
  document.querySelector('ul').append(listItem2);
  const listItem3 = document.createElement('li');
  listItem3.textContent = 4;
  document.querySelector('.special').before(listItem3);
  const listItem4 = document.createElement('li');
  listItem4.textContent = 6;
  document.querySelector('.special').after(listItem4);
}
