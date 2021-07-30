function sortAsc(array) {
  const startArr = [...array];
  const minArr = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let j = 0; j < array.length; j += 1) {
    let count = 0;
    let min = Infinity;
    for (let i = 0; i < startArr.length; i += 1) {
      if (startArr[i] <= min) {
        min = startArr[i];
        count = i;
      }
    }
    minArr.push(min);
    startArr.splice(count, 1);
  }
  return minArr;
}

function sortDesc(array) {
  const startArr = [...array];
  const maxArr = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let j = 0; j < array.length; j += 1) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < startArr.length; i += 1) {
      if (startArr[i] >= max) {
        max = startArr[i];
        count = i;
      }
    }
    maxArr.push(startArr[count]);
    startArr.splice(count, 1);
  }
  return maxArr;
}
