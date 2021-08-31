// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// find amount of days
// find amountt of hours, minutes, seconds
// use Date .get and .set methods

export function getDiff(startDate, endDate) {
  const time = startDate.getTime() - endDate.getTime();

  const days = Math.abs(Math.round(time / (1000 * 3600 * 24)));
  const hours = Math.abs(startDate.getHours() - endDate.getHours());
  const minutes = Math.abs(startDate.getMinutes() - endDate.getMinutes());
  const seconds = Math.abs(startDate.getSeconds() - endDate.getSeconds());

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const test1 = new Date(2011, 1, 2, 13, 32, 47);
const test2 = new Date(2001, 1, 2, 15, 34, 25);


console.log(getDiff(test1, test2));
console.log(getDiff(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
console.log(getDiff(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));

