const getAdults = obj =>
  Object.entries(obj)
    .filter(el => el[1] >= 18)
    .map(el => el[0]);
