export function squaredNumbers() {
  [...document.querySelectorAll('.number')].forEach(listItem => {
    const liElem = listItem;
    (liElem.dataset.squaredNumber = listItem.dataset.number ** 2);
  });
}


// function squaredNumbers() {
//   document.querySelector('.number').dataset.squaredNumber =
//     document.querySelector('.number').dataset.number ** 2;
//   document.querySelector('.number').nextElementSibling.dataset.squaredNumber =
//     document.querySelector('.number').nextElementSibling.dataset.number ** 2;
//   document.querySelector('.number').nextElementSibling.nextElementSibling.dataset.squaredNumber =
//     document.querySelector('.number').nextElementSibling.nextElementSibling.dataset.number ** 2;
// }
// //  document.querySelector('.number').dataset.number;
