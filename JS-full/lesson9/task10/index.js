function compareObjects(obj1, obj2) {
  const first = [].concat(...Object.entries(obj1));
  const second = [].concat(...Object.entries(obj2));
  let count = 0;
  if (first.length !== second.length) {
    return false;
  }
  if (first.length === second.length) {
    first.forEach(el => (!second.includes(el) ? (count += 1) : false));
  }
  return count === 0;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
