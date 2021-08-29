const btnPaginationOne = document.querySelector('.pagination__page');
const btnPaginationTwo = document.querySelector('.pagination__page').nextElementSibling;
const btnPaginationThree = document.querySelector('.pagination__page').nextElementSibling.nextElementSibling;

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

btnPaginationOne.addEventListener('click', handleClick);
btnPaginationTwo.addEventListener('click', handleClick);
btnPaginationThree.addEventListener('click', handleClick);
