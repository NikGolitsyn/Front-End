/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

// eslint-disable-next-line arrow-body-style
const makePromise = number => {
  return Promise.resolve(number);
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
console.log(makePromise());
