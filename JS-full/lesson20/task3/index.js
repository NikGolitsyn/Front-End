class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Not enough funds');
      return;
    }
    this.balance -= amount;
  }
}
