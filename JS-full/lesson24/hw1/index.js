// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// check if Date objects are equal
// find amount of days
// find amount of hours, minutes, seconds
// with the help of reminder % we can find the remaining of seconds, minutes, hours

export function getDiff(startDate, endDate) {
  if (startDate.getTime() === endDate.getTime()) {
    return `${0}d ${0}h ${0}m ${0}s`;
  }

  const seconds = Math.abs(startDate.getTime() - endDate.getTime()) / 1000;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days}d ${hours % days}h ${minutes % hours}m ${seconds % minutes}s`;
}



// console.log(getDiff(new Date(2001, 1, 2, 15, 34, 25), new Date(2011, 1, 2, 13, 32, 47)));
// console.log(getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2011, 1, 2, 13, 32, 47)));
// console.log(getDiff(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
// console.log(getDiff(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));
