const multiRound = (num, prec) => {
  let multifier = 1;
  for (let i = 1; i <= prec; i += 1) {
    multifier *= 10;
  }
  return [
    Math.floor(num * multifier) / multifier,
    Math.trunc(num * multifier) / multifier,
    Math.ceil(num * multifier) / multifier,
    Math.round(num * multifier) / multifier,
    Number(num.toFixed(prec)),
  ];
};

const superRound = (num, prec) => {
  return multiRound(num, prec);
};


