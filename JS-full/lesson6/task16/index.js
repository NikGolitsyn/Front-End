const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

function removeDuplicates(array) {
  const arrWithoutDuplicates = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (!includes(arrWithoutDuplicates, array[i])) {
      arrWithoutDuplicates.push(array[i]);
    }
  }
  return arrWithoutDuplicates;
}
