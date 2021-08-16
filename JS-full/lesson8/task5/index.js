const user = {
  name: 'Nikita',
  age: 18,
};

function getKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr = arr.concat(key);
  }
  return arr;
}
