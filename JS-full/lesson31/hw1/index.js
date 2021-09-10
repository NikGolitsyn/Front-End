// console.log('Stage 1 synchronized action');

// // function regular() {
// //   setTimeout(() => {
// //     console.log('Stage 2 unsynchronized action');
// //     const obj = {
// //       name: 'Tom',
// //       age: 27,
// //       job: 'teacher',
// //     };
// //     setTimeout(() => {
// //       console.log('Stage 3 unsynchronized action', obj);
// //     }, 2000);
// //   }, 2000);
// // }

// // regular();

// function promise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Stage 2 unsynchronized action');
//       const obj = {
//         name: 'Tom',
//         age: 27,
//         job: 'teacher',
//       };
//       resolve(obj);
//     }, 3000);
//   })
//     .then(
//       data =>
//         new Promise((resolve, reject) => {
//           setTimeout(() => {
//             console.log('Stage 3 unsynchronized action', data);
//             resolve(data);
//           }, 3000);
//         }),
//     )
//     .then(data => ({ ...data, languages: 'English' }));
// }

// // promise();

// const test = promise();
// test.then(data => console.log(data));

const successPromise = new Promise(resolve => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then(number => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then(number => {
    /* fix this handler */
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then(result => {
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  // eslint-disable-next-line arrow-body-style
  .then(number => {
    return number * 10;
  })
  .then(result => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);

// количество методов then влияет на порядок выполнения ассинхроных промисов чем меньшие шагов тем раньше выполниться
