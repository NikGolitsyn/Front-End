const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}

// function allInclusive(func) {
//   return function () {
//     return func.call(this, ...arguments);
//   };
// }

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// ... your code here

sayName.call(student);
// const sayNameTry = allInclusive(sayName);
// sayNameTry.call({ name: 'Tomas' });

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// ... your code here

sayName.call({ name: 'Bruce' });

/* ===> 2 <=== */

const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

// вызовите ф-цию greeting так, чтобы в консоль вывелось
// 'Hello, Bob Marley. Welcome to the Microsoft'
// используйте объект company
// ... your code here

greeting.call(company, 'Bob', 'Marley');

// const greetingTry = allInclusive(greeting);
// greetingTry.call(company, 'Sofie', 'Domergood');

/* ===> 3 <=== */
const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

// вызовите ф-цию getPopulation так, чтобы она вернула
// 'Population in Ukraine is 43000'
// 43000 передавайте в виде числа
// используйте объект country
// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// ... your code here

const result = getPopulation.call(country, 43000);
console.log(result);

/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
// ... your code here

transaction.printTransaction.call(anotherTransaction);

// const transactionTry = allInclusive(transaction.printTransaction);
// transactionTry.call(anotherTransaction);
