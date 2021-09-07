// input new Date
// output object



// algo
// create result with copy initialValue Date
// create all properties for value
// create two functions add and subtract

export const shmoment = initialValue => {
  const result = new Date(initialValue);

  const calculator = {
    years: result.getFullYear(),
    months: result.getMonth(),
    days: result.getDate(),
    hours: result.getHours(),
    minutes: result.getMinutes(),
    seconds: result.getSeconds(),
    milliseconds: result.getMilliseconds(),

    add(key, value) {
      if (Object.keys(calculator).includes(key)) {
        this[key] += value;
      }
      return this;
    },
    subtract(key, value) {
      if (Object.keys(calculator).includes(key)) {
        this[key] -= value;
      }
      return this;
    },
    result() {
      return new Date(...Object.values(calculator));
    },
  };
  return calculator;
};

// console.log(shmoment1(new Date(2020, 0, 7, 17, 17, 17)).result());
// console.log(shmoment1(new Date(2020, 0, 7, 17, 17, 17)).add('years', 10).result());
// console.log(
//   shmoment1(new Date(2020, 0, 7, 17, 17, 17)).add('years', 10).subtract('months', 120).result(),
// );
// console.log(
//   shmoment1(new Date(2020, 0, 7, 17, 17, 17))
//     .add('years', 10)
//     .subtract('months', 120)
//     .add('days', 35)
//     .result(),
// );
// console.log(
//   shmoment1(new Date(2020, 0, 7, 17, 17, 17))
//     .add('years', 10)
//     .subtract('months', 120)
//     .add('dd', 35)
//     .result(),
// );

