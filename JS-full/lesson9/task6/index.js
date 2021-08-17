const getPeople = obj => [].concat(...Object.values(obj)).map(el => el.name);

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

// const room = {
//   room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
//   room2: [{ name: 'Dan' }],
//   room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
// };

// const getPeople = obj =>
//   Object.values(obj)
//     .flat()
//     .map(({ name }) => name);
