// input new Date
// output object

// algo
// create result = initialValue
// create an object with list of methods
// all methods should return this link

export const shmoment = initialValue => {
  const result = new Date(initialValue);

  const calculator = {
    calcOperation(key, value) {
      if (key === 'years') {
        result.setFullYear(result.getFullYear() + value);
      }
      if (key === 'months') {
        result.setMonth(result.getMonth() + value);
      }
      if (key === 'days') {
        result.setDate(result.getDate() + value);
      }
      if (key === 'hours') {
        result.setHours(result.getHours() + value);
      }
      if (key === 'minutes') {
        result.setMinutes(result.getMinutes() + value);
      }
      if (key === 'seconds') {
        result.setSeconds(result.getSeconds() + value);
      }
      if (key === 'milliseconds') {
        result.setMilliseconds(result.getMilliseconds() + value);
      }
    },
    add(key, value) {
      this.calcOperation(key, value);
      return this;
    },
    subtract(key, value) {
      this.calcOperation(key, -value);
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

// console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).result());
// console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('years', 10).result());
// console.log(
//   shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('years', 10).subtract('months', 120).result(),
// );
// console.log(
//   shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('years', 10).subtract('months', 120).add('days', 35).result(),
// );
