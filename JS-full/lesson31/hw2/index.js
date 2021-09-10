// const serverResponsePromise = new Promise(resolve => {
//   const serverResponse = {
//     ok: true,
//     json() {
//       return Promise.resolve({
//         name: 'John',
//         age: 20,
//       });
//     },
//   };
//   resolve(serverResponse);
// });

const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      // eslint-disable-next-line no-shadow
      return new Promise((resolve, reject) => {
        const obj = { name: 'John', age: 20 };
        resolve(obj);
      });
    },
  };
  resolve(serverResponse);
});

/*
 * допиши первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  // eslint-disable-next-line arrow-body-style
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result); // { name: 'John', age: 20 }
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
