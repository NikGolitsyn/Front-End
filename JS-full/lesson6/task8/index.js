const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      arr[i] += delta;
    }
  }
  return arr;
};
