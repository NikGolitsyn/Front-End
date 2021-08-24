function bind(func, context, ...args1) {
  return function (...args2) {
    return func.call(context, ...args1, ...args2);
  };
}

// function bind(func, context, ...args1) {
//   return function (...args2) {
//     return func.apply(context, [...args1, ...args2]);
//   }
// }

const user = {
  name: 'John',
  age: 18,
  job: 'unemployed',
  sayInfo(phone, email) {
    console.log(`Name: ${this.name}, phone: ${phone}, email: ${email}`);
  },
  sum(a, b, c) {
    console.log(this.age + b + a + c);
    return this.age + b + a + c;
  },
};

const test = bind(user.sayInfo, user, 322, 'jkq');
// bind(user.sayInfo, { name: 'Valerian', age: '33', job: 'actor' });
// const test = bind(user.sum, { age: 1 }, 4, 5);

// function bind(func, context, ...args) {
//   return function () {
//     return func.call(context, ...args);
//   };
// }

// function array(arr, arrSecond) {
//   return arr.map((el, index) => el + arrSecond[index]);
// }
