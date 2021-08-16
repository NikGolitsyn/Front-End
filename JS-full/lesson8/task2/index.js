const concatProps = obj => {
  let arr = [];
  for (let value in obj) {
    arr = arr.concat(obj[value]);
  }
  return arr;
};
