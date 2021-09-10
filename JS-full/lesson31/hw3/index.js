function delay(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, number);
  });
}

delay(5000).then(() => console.log('You are weak!'));
