/* eslint-disable camelcase */
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userAvataImage = document.querySelector('.user__avatar');

export const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvataImage.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
