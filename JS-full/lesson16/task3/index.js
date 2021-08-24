function createArrayOfFunctions(integer = 0) {
  const arr = [];
  if (typeof integer !== 'number') {
    return null;
  }

  for (let i = 0; i < integer; i += 1) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
}

createArrayOfFunctions(10)[5]();
createArrayOfFunctions(10)[2]();
createArrayOfFunctions(10)[1]();
createArrayOfFunctions(10)[4]();
