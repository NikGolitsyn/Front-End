export const calc = initialValue => {
  let result = initialValue;

  const calculator = {
    add(value) {
      result += value;
      return this; // ссылка на объект calculator и с помощью этого return все следующие методы будут ссылаться на этот объект
    },
    subtract(value) {
      result -= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

console.log(calc(1).mult(10).add(10).subtract(5).div(3).result());
console.log(calc(3).add(10).mult(3).div(3).subtract(5).result());
