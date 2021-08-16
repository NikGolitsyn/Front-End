const transformToObject = arr => {
  const obj = {};
  arr.forEach(el => (obj[el] = el));
  return obj;
};
