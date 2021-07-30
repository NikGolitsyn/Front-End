const getSum = (startNum, endNum) => {
  let sum = 0;
  for (let i = startNum; i <= endNum; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
