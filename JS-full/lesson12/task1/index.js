const calc = str => {
  const [a, operator, b] = [...str.split(' ')];
  let result;

  switch (operator) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;

    default:
      break;
  }
  return `${str} = ${result}`;
};
