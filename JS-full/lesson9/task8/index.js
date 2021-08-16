function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// put your code here
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

// put your code here
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// put your code here
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// examples
const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
