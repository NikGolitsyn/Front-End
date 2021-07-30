const sum = (startNum, endNum) => {
  let fSum = 0;
  for (let i = startNum; i <= endNum; i += 1) {
    if (i % 2 === 0) {
      fSum += i;
    }
  }
  return fSum;
};

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}
