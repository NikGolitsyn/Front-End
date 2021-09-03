// input object
// output array

// Algo
// 1 Create an array of key values Object.entries
// 2 Sort an array
// 3 Use map to create a new array of objects with correct id

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .sort((a, b) => a[1].age - b[1].age)
//     .map(el => ({ ...el[1], id: el[0] }));

const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customers-id-3': {
    name: 'John',
    age: 34,
  },
  'customers-id-4': {
    name: 'Maria',
    age: 25,
  },
};

const getCustomersList = obj => {
  const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age);

  const first = order.map(el => el[1]);
  console.log(first);
  const second = order.map(el => el[0]);

  console.log(order.map(el => ({ ...el[1], id: el[0] })));
  return first.map((el, index) => ({ ...el, id: second[index] }));
};




// const getCustomersList = obj => {
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age);
//   console.log(order);
//   const first = order.map(el => el[1]);
//   console.log(first);
//   const second = order.map(el => el[0]);
//   console.log(second);
//   console.log(order.map(el => ({ ...el[1], id: el[0] })));
//   return first.map((el, index) => ({ ...el, id: second[index] }));
// };
