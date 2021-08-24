const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(str) {
    const [personName, personSurname] = str.split(' ');
    this.firstName = personName;
    this.lastName = personSurname;
  },
};

user.setFullName('Jaime Lannister');
console.log(user);
console.log(user.getFullName());
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//     const fullName = `${this.firstName} ${this.lastName}`;
//     console.log(fullName);

//     this.setFullName(fullName);
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(str) {
//     const fullName = str.split(' ');
//     console.log(fullName[0]);
//     console.log(this);
//     const [personName, personSurname] = fullName;
//     console.log(personName);
//     console.log(personSurname);
//     this.firstName = personName;
//     this.lastName = personSurname;
//   },
// };

// user.setFullName('Richard Riddick');
// console.log(user);
