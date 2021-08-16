const splitString = (str, len = 10) => {
  const arr = [];
  let start = 0;

  if (typeof str !== 'string') {
    return null;
  }

  while (true) {
    const chunk = str.substr(start, len);
    arr.push(chunk);
    start += len;

    if (start + len >= str.length) {
      break;
    }
  }

  if (arr.join('').length < str.length) {
    const lastChunk = str.substr(arr.join('').length, len - 1);
    arr.push(lastChunk + '.'.repeat(len - lastChunk.length));
  }
  return arr;
};
