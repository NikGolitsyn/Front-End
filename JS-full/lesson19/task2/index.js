const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  model: 'Linkor',
  age: 38,
  material: 'adamantium',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

// function getOwnProps(obj) {
//   return Object.keys(obj);
// }

// function getOwnProps(obj) {
//   const arr = [];
//   for (const el in obj) {
//     if (obj.hasOwnProperty(el)) {
//       arr.push(el);
//     }
//   }
//   return arr;
// }

// const getOwnProps = obj => {
//   const arr = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] !== 'function') {
//         arr.push(key);
//       }
//     }
//   }
//   return arr;
// };

const getOwnProps = obj =>
  Object.entries(obj)
    .filter(el => typeof el[1] !== 'function')
    .map(el => el[0]);

// const getOwnProps = obj => {
//   console.log(Object.entries(obj));
//   return Object.entries(obj)
//     .filter(el => typeof el[1] !== 'function')
//     .map(el => el[0]);
// };
