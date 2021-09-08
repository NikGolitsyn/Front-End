// input array of promises
// ouput promise

// algo
// create test promises
// using Promise.all create a promise that in resolve has (an arr from all promises result(value))
// create getSum func // input our array // output number, filter our array, then reduce it to find sum
// apply getSum to our Promise.all
// catch an error in case there will be a rejected Promise in our input array

export const asyncSum = (...asyncNumber) => {
  const getSum = array =>
    array
      .filter(element => !isNaN(element))
      .reduce((acc, element) => Number(acc) + Number(element));

  return Promise.all(asyncNumber)
    .then(array => getSum(array))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

const promise1 = Promise.resolve(35);

const promise2 = Promise.resolve(undefined);

const promise3 = Promise.resolve(20);

console.log(asyncSum(promise1, promise2, promise3));
asyncSum(promise1, promise2, promise3).then(data => console.log(data));
asyncSum(promise1, Promise.reject(new Error('error')), promise3).then(data => console.log(data));
