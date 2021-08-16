const countOccurrences = (text = '', str) => {
  let count = 0;

  if (str === '') {
    return null;
  }
  for (let i = 0; i < text.length; i += 1) {
    if (text.substr(i, str.length).includes(str)) {
      count += 1;
    }
  }
  return count;
};
