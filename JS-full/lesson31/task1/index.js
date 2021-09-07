/**
 * @param {string} userId
 * @return {promise}
 */

// algo
// 1 create promise
// 2 if condition userId === borken setTimeout 500ms with reject
// 3 else resolve object with timeout 1000ms
export const requestUserData = userId => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ name: 'John', age: 17, userId, email: `${userId}@example.com` });
      }, 1000);
    }
  });
  return promise;
};

const testPromise = requestUserData('userid77')
  .catch(error => console.log(error))
  .then(data => console.log(data));
// const testPromise1 = requestUserData('userId777');
// testPromise.catch(error => console.log(error));
// testPromise1.then(data => console.log(data));
