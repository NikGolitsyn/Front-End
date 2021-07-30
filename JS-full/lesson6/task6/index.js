function squareArray(arr) {
  const mySquareArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let el = 0; el < arr.length; el += 1) {
    mySquareArray.push(arr[el] * arr[el]);
  }
  return mySquareArray;
}
