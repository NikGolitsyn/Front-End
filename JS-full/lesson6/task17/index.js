const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

function uniqueCount(array) {
  const arrWithoutDuplicates = [];
  let total = 0;
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (!includes(arrWithoutDuplicates, array[i])) {
      arrWithoutDuplicates.push(array[i]);
    }
  }
  for (let i = 0; i < arrWithoutDuplicates.length; i += 1) {
    if (includes(array, arrWithoutDuplicates[i])) {
      total += 1;
    }
  }
  return total;
}
