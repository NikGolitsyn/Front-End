const buildObject = (keysList, valuesList) =>
  keysList.reduce((obj, item, index) => Object.assign(obj, { [item]: valuesList[index] }), {});

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
