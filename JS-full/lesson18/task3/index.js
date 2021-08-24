const sumOfSquares = (...args) => [...args].reduce((acc, el) => el * el + acc, 0);

// function sumOfSquares() {
//   return [].reduce.apply(arguments, [(acc, el) => el * el + acc, 0]);
// }

// function sumOfSquares() {
//   return [].reduce.call(arguments, (acc, el) => el * el + acc, 0);
// }
