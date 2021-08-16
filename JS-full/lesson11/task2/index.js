const customers = [
  {
    name: 'Alarak',
    age: 54,
  },
  {
    name: 'Antonin',
    age: 17,
  },
  {
    name: 'Cypher',
    age: 34,
  },
  {
    name: 'Bladur',
    age: 25,
  },
];

const sortContacts = (arr, boolean) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (boolean === true || boolean === undefined) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }
  return arr.sort((a, b) => b.name.localeCompare(a.name));
};
