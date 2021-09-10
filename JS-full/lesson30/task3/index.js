/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise((resolve, reject) => {
  resolve(67);
});


/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

// eslint-disable-next-line prefer-arrow-callback
successPromise.then(function onSuccess(number) {
  console.log(number * number);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
// eslint-disable-next-line prefer-arrow-callback
successPromise.catch(function onError(error) {
  console.log('I am an error');
});
