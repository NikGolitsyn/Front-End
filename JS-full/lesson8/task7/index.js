const getAdults = obj => {
  const adults = {};
  for (let value in obj) {
    if (obj[value] >= 18) {
      adults[value] = obj[value];
    }
  }
  return adults;
};

getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
