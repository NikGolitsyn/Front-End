const cleanTransactionsList = arr => {
  const cleanedArr = [...arr]
    .join()
    .split(',')
    .map(el => el.trim())
    .filter(el => el - 0 === +el)
    .map(el => `$${Number(el).toFixed(2)}`);
  return cleanedArr;
};
