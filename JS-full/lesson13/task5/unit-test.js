export const reverseArray = arr => (Array.isArray(arr) ? [...arr].reverse() : null);
export const getAdults = obj => {
  const sortedArr = Object.entries(obj).filter(el => el[1] >= 18);
  const sortedObj = {};

  sortedArr.forEach(el => {
    const [name, age] = el;
    sortedObj[name] = age;
  });
  return sortedObj;
};

export const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] < amount) {
    return -1;
  }

  return balances[clients.indexOf(client)] - amount;
};
