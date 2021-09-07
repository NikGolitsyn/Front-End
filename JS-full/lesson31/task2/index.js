// input number
// output object Promise

// algo
// 1 create function and return promise inside
// 2 create setTimeout function and with the help of resolve console.log('Initial value: ' and number);
// 3 add then and create setTimeout again and resolve(number * number)
// 4 add then and resolve result = number * 2;

export function asyncCalculator(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial valuer: ${number}`);
      resolve(number);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(value => {
      const result = value * 2;
      console.log(`Double value: ${result}`);
      return result;
    });
}

console.log(asyncCalculator(6));
