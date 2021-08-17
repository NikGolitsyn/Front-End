const createCalculator = () => {
  let memory = 0;

  function add(number) {
    memory += number;
  }

  function decrease(number) {
    memory -= number;
  }

  function reset() {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();
const calculator2 = createCalculator();
console.log(calculator1.add(10));
console.log(calculator1.getMemo());
console.log(calculator1.add(10));
console.log(calculator1.decrease(5));
console.log(calculator1.getMemo());
console.log(calculator2.add(5));
console.log(calculator2.add(500));
console.log(calculator2.decrease(255));
console.log(calculator2.reset());
console.log(calculator2.getMemo());
