const getTotalRevenue = transactions =>
  transactions.map(el => el.amount).reduce((total, i) => total + i, 0);

// examples
const dayTransactions = [
  { userId: 22, amount: 22, operation: 'sell' },
  { userId: 22, amount: 22, operation: 'buy' },
  { userId: 44, amount: 22, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
