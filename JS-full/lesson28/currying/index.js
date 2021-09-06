// const sum = (a, b) => a + b;

// const sum1 = a => b => a + b;
// при процессе каррирования мы трансформируем функцию,
// которая принимает несколько аргументов, на функцию которая принимает по одному

// const add = sum1(10);
// console.log(add(10));
// console.log(sum(5, 5));
// console.log(sum1(5)(19));

export const mult = firstNumber => secondNumber => firstNumber * secondNumber;

export const twice = mult(2);
export const triple = mult(3);

// console.log(mult(5)(5));
// console.log(twice(10));
// console.log(triple(3));
