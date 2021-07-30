function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((total, i) => total + i, 0);
}
