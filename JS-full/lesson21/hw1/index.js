export function getItemsList() {
  console.dir(document.querySelectorAll('.technology'));
  return document.querySelectorAll('.technology');
}

export function getItemsArray() {
  console.dir(Array.from(document.querySelectorAll('.tool')));
  return Array.from(document.querySelectorAll('.tool'));
}

// function getItemsArray() {
//   console.dir([...document.querySelectorAll('.tool')]);
//   return [...document.querySelectorAll('.tool')];
// }
