const buttonSingleUse = document.querySelector('.single-use-btn');

const clicking = () => {
  console.log('clicked');
  buttonSingleUse.removeEventListener('click', clicking);
};

buttonSingleUse.addEventListener('click', clicking);
