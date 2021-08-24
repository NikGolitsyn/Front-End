const wallet = {
  transactions: [15, 525, 1, 2332, 100, 666, 199, 23, 3333],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

const getMax = () => Math.max(...wallet.transactions);
