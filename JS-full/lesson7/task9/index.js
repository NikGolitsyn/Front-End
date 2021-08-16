// const withdraw = (clients, balances, client, amount) => {
//   const bingo = clients.indexOf(client);
//   if (balances[bingo] > amount) {
//     balances[bingo] -= amount;
//     return balances;
//   }
//   return -1;
// };

const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] > amount ? (balances[clients.indexOf(client)] -= amount) : -1;
