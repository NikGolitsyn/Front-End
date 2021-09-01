// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// find amount of days
// find amount of hours, minutes, seconds
// with the help of reminder % we can find the remaining of seconds, minutes, hours

export function getDiff(startDate, endDate) {
  const time = Math.abs(startDate.getTime() - endDate.getTime());
  const seconds = time / 1000;
  const minutes = Math.trunc(time / (60 * 1000));
  const hours = Math.trunc(time / (60 * 60 * 1000));
  const days = Math.trunc(time / (24 * 3600 * 1000));

  if ([days, hours, minutes, seconds].every(el => el > 0)) {
    return `${days}d ${hours % days}h ${minutes % hours}m ${seconds % minutes}s`;
  }

  if (days === 0 && hours !== 0) {
    return `${0}d ${hours}h ${minutes % hours}m ${seconds % minutes}s`;
  }

  if (hours=== 0 && minutes !== 0) {
    return `${0}d ${0}h ${minutes}m ${seconds % minutes}s`;
  }

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}



// console.log(getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2001, 1, 2, 15, 34, 25)));
// console.log(getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2001, 1, 2, 15, 34, 25)));

// console.log(getDiffTest(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
// console.log(getDiff(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));

// console.log(getDiffTest(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));
// console.log(getDiff(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));

// console.log(
//   'equal ',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 47)),
// );
// console.log('equal ', getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 47)));

// console.log(
//   'seconds test ',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 48)),
// );
// console.log(
//   'seconds test ',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 48)),
// );

// console.log(
//   'minutes test ',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 33, 47)),
// );
// console.log(
//   'minutes test ',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 33, 47)),
// );

// console.log(
//   'hours test ',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 14, 32, 47)),
// );
// console.log(
//   'hours test ',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 14, 32, 47)),
// );

// console.log(
//   'days test ',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 3, 13, 32, 47)),
// );
// console.log(
//   'days test ',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 3, 13, 32, 47)),
// );

// console.log(
//   'month test ',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 2, 2, 13, 32, 47)),
// );
// console.log(
//   'month test ',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 2, 2, 13, 32, 47)),
// );

// console.log(
//   'years test',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2012, 1, 2, 13, 32, 47)),
// );
// console.log(
//   'years test',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2012, 1, 2, 13, 32, 47)),
// );

// console.log(
//   'years test',
//   getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2015, 1, 2, 13, 32, 47)),
// );
// console.log(
//   'years test',
//   getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2015, 1, 2, 13, 32, 47)),
// );

