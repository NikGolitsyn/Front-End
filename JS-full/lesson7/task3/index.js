const flatArray = arr => {
  const flatArr = arr.reduce((acc, el) => {
    console.log(acc);
    return acc.concat(el);
  }, []);
  return flatArr;
};
