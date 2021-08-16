const pickProps = (obj, props) => {
  const newObj = {};
  for (let key in obj) {
    if (props.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }
