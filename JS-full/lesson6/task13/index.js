function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client && balances[i] >= amount) {
      balances[i] -= amount;
      return [amount, ...balances];
    }
  }
  return -1;
}
