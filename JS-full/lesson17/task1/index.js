const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const fun = user.getFullName;
const otherUser = {
  firstname: 'Taras',
  lastName: 'Shevchenko',
};

fun.call(otherUser);
