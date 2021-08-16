const getParsedIntegers = arr => [...arr].map(el => Number.parseInt(el));
const getParsedIntegersV2 = arr => [...arr].map(el => parseInt(el));
const getParsedFloats = arr => {
  const result = arr.map(num => Number.parseFloat(num));

  return result;
};

const getParsedFloatsV2 = arr => {
  const result = arr.map(num => parseFloat(num));

  return result;
};

console.log(getParsedIntegers([1.231, 2.3231, 4.3213, 32.624]));
console.log(getParsedIntegersV2([1.231, 2.3231, 4.3213, 32.624]));
console.log(getParsedFloats([1.231, 2.3231, 4.3213, 32.624]));
console.log(getParsedFloatsV2(['1.231sds', '  2.3231d', '4.3213sd', '32.624']));
