// const user = {
//   firstName: 'John',
//   lastName: 'Doe',

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

const user = {
  firstName: 'John',
  lastName: 'Doe',

  getfullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setfullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};