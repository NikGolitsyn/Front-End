const getSubArray = (arr, numberOfElements) => {
  const newArr = [...arr];
  newArr.length = numberOfElements;
  return newArr;
};
