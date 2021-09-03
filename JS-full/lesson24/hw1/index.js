// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// check if Date objects are equal
// count amount of days
// count amount of hours, minutes, seconds
// with the help of reminder % we can find the remaining of seconds, minutes, hours

//  function getDiff(startDate, endDate) {
//   const time = Math.abs(startDate.getTime() - endDate.getTime());
//   const seconds = time / 1000;
//   const minutes = Math.trunc(time / (60 * 1000));
//   const hours = Math.trunc(time / (60 * 60 * 1000));
//   const days = Math.trunc(time / (24 * 3600 * 1000));
//   function calc(firstElem, secondElem) {
//     const result = firstElem % secondElem;
//     if (isNaN(result)) {
//       return firstElem;
//     }
//     return result;
//   }

//   return `${days}d ${calc(hours, days)}h ${calc(minutes, hours)}m ${calc(seconds, minutes)}s`;
// }

function getDiffTest(startDate, endDate) {
  let milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let days = 0;
  while (milliseconds >= 1000) {
    milliseconds -= 1000;
    seconds += 1;
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes === 60) {
      hours += 1;
      minutes = 0;
    }
    if (hours === 24) {
      days += 1;
      hours = 0;
    }
  }
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// algo
// find the milliseconds difference
// count days
// create endNullDate new Date(0,0,0,0,0)
// add millisecond endNullDate.setMilliseconds(milliseconds)
// count difference in hours, minutes, seconds

// function getDiff(startDate, endDate) {
//   const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
//   const days = Math.floor(milliseconds / 86400000);

//   const endNullDate = new Date(-62167226524000);
//   const end = new Date(endNullDate.setMilliseconds(milliseconds));

//   return `${days}d ${end.getHours()}h ${end.getMinutes()}m ${end.getSeconds()}s`;
// }

const test1 = new Date(2011, 1, 2, 13, 32, 47);
const test2 = new Date(2001, 1, 2, 15, 34, 25);

// export function getDiff(startDate, endDate) {
//   const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
//   const days = Math.floor(milliseconds / 86400000);
//   const daysRest = milliseconds / 86400000 - days;
//   const hours = Math.floor(daysRest * 24);
//   const hoursRest = daysRest * 24 - hours;
//   const minutes = Math.floor(hoursRest * 60);
//   const minutesRest = hoursRest * 60 - minutes;
//   const seconds = Math.floor(minutesRest * 60);

//   return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }

export function getDiff(startDate, endDate) {
  const MILLISEC_IN_DAY = 86400000;

  const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
  const days = Math.floor(milliseconds / MILLISEC_IN_DAY);
  const daysRest = milliseconds / MILLISEC_IN_DAY - days;
  const hours = Math.floor(daysRest * 24);
  const hoursRest = daysRest * 24 - hours;
  const minutes = Math.floor(hoursRest * 60);
  const minutesRest = hoursRest * 60 - minutes;
  const seconds = Math.floor(minutesRest * 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// console.log(test1, test2);
// getDiff(test1, test2);
// console.log(test1, test2);
// console.log(test1, test2);

// console.log(test1, test2);
// getDiffTest(test1, test2);
// console.log(test1, test2);
// console.log(test1, test2);
// console.log(test1, test2);

console.log(getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2001, 1, 2, 15, 34, 25)));
console.log(getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2001, 1, 2, 15, 34, 25)));

console.log(getDiffTest(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
console.log(getDiff(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));

console.log(getDiffTest(new Date(223, 3, 22, 13, 32, 47), new Date(223, 7, 39, 2, 11, 15)));
console.log(getDiff(new Date(223, 3, 22, 13, 32, 47), new Date(223, 7, 39, 2, 11, 15)));
console.log(
  'equal ',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 47)),
);
console.log('equal ', getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 47)));

console.log(
  'seconds test ',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 48)),
);
console.log(
  'seconds test ',
  getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 48)),
);

console.log(
  'minutes test ',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 33, 47)),
);
console.log(
  'minutes test ',
  getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 33, 47)),
);

console.log(
  'hours test ',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 14, 32, 47)),
);
console.log(
  'hours test ',
  getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 14, 32, 47)),
);

console.log(
  'days test ',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 3, 13, 32, 47)),
);
console.log(
  'days test ',
  getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 3, 13, 32, 47)),
);

console.log(
  'month test ',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 2, 2, 13, 32, 47)),
);
console.log(
  'month test ',
  getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 2, 2, 13, 32, 47)),
);

console.log(
  'years test',
  getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2012, 1, 2, 13, 32, 47)),
);
console.log(
  'years test',
  getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2012, 1, 2, 13, 32, 47)),
);

console.log(
  'years test',
  getDiffTest(new Date(2011, 0, 2, 13, 32, 11), new Date(2015, 1, 2, 13, 32, 47)),
);
console.log(
  'years test',
  getDiff(new Date(2011, 0, 2, 13, 32, 11), new Date(2015, 1, 2, 13, 32, 47)),
);
