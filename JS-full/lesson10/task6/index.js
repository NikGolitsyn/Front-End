// function getRandomArbitrary(num) {
//   return Math.random() * num + 1;
// }

const getRandomNumbers = (length, from, to) => {
  const arr = [];
  if (to - from < 1) {
    return null;
  }

  for (let i = 1; i <= length; i += 1) {
    arr.push(Number((Math.random() * (to - from) + from).toFixed()));
  }
  return arr;
};
