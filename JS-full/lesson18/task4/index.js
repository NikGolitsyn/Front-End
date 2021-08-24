// function saveCalls(func) {
//   const calls = [];

//   const withMemory = (...args) => {
//     calls.push([...args]);
//     withMemory.calls = calls;
//   };
//   return withMemory;
// }

// const user = {
//   name: 'John',
//   sum(a, b) {
//     return a + b;
//   },
// };

// const user1 = {
//   name: 'John',
//   sayHi() {
//     console.log(this.name);
//     return this.name;
//   },
// };

// const test = saveCalls(user.sum);

// // const test = saveCalls(user1.sayHi);
// test(4, 5);
// test(8, 19);
// test();

// OPTION 1

// function arrReduce() {
//   return [].reduce.apply(arguments, [
//     (acc, el) => {
//       acc.push(el);
//       return acc;
//     },
//     [],
//   ]);
// }

// OPTION 2
// function arrReduce() {
//   return [].reduce.apply(arguments, [
//     (acc, el, index) => {
//       console.log('array is ' + acc + ' element is ' + el + ' step is ' + index);
//       acc.push(el);
//       return acc;
//     },
//     [],
//   ]);
// }
// console.log(arrReduce(1, 2, 3, 4, 5, 6));
// const setParam = () => func.apply(this);
// setParam();

function saveCalls(func) {
  const calls = [];

  return function withMemory(...args) {
    calls.push([...args]);
    withMemory.calls = calls;
    return func.apply(this);
  };
}

function sum(a, b) {
  return a + b;
}

const user1 = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const test = saveCalls(user1.sayHi);
const test1 = saveCalls(sum);

function first(func) {
  return function setParam() {
    return func.apply(this);
  };
}
