const btnJs = document.querySelector('.btn');
const btnHtml = document.querySelector('.btn').nextElementSibling;

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnJs.addEventListener('click', handleClick);
btnHtml.addEventListener('click', handleClick);