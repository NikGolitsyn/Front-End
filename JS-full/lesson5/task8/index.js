const findDivCount = (a, b, n) => {
  let amount = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      amount += 1;
    }
  }
  return amount;
};
