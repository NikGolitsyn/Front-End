// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHi = function () {
//     console.log(`Hi, I am ${this.name}`);
//   };
//   this.requestNewPhoto = function () {
//     console.log(`New photo request was sent for ${this.name}`);
//   };
//   this.setAge = function (newAge) {
//     this.age = newAge;
//     if (this.age >= 25) {
//       console.log(`New photo request was sent for ${this.name}`);
//     }
//     if (this.age < 0) {
//       return false;
//     }
//     return this.age;
//   };
// }

function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };
  User.prototype.setAge = function (newAge) {
    this.age = newAge;
    if (this.age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    if (this.age < 0) {
      return false;
    }
    return this.age;
  };
  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };
}
const user = new User('Tomas', 22);
