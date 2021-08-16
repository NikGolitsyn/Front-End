const getCustomersList = obj => {
  const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age);
  const first = order.map(el => el[1]);
  const second = order.map(el => el[0]);
  return first.map((el, index) => ({ ...el, id: second[index] }));
};

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
