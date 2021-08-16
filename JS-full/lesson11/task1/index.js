const splitText = (str, num = 10) => {
  let sp = 0;
  const arr = [];

  if (typeof str !== 'string') {
    return null;
  }
  while (true) {
    const chunk = str.substr(sp, num);
    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    sp += num;

    if (sp >= str.length) {
      break;
    }
  }

  return arr.join('\n');
};

