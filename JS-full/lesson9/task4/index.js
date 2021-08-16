function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

// put your code here
function addPropertyV2(userData, userId) {
  Object.assign(userData, { id: userId });
  return userData;
}

// put your code here
function addPropertyV3(userData, userId) {
  const newObj = Object.assign({}, { id: userId }, userData);
  return newObj;
}

// put your code here
function addPropertyV4(userData, userId) {
  const newObj = { id: userId, ...userData };
  return newObj;
}

// examples
const user = {
  name: 'Sam',
};
addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
