// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// 1 generate two getTime() and find the difference in milliseconds
// 2 create a loop which will count second, minutes, hour, days from our difference

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

console.log(getDiffTest(new Date(2011, 1, 2, 13, 32, 47), new Date(2001, 1, 2, 15, 34, 25)));
console.log(getDiffTest(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
console.log(getDiffTest(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));

function getDiff(startDate, endDate) {
  const days =
    Math.abs(startDate.getFullYear() - endDate.getFullYear()) * 365 +
    Math.abs(startDate.getMonth() - endDate.getMonth()) * 30 +
    Math.abs(startDate.getDate() - endDate.getDate());
  const hours = Math.abs(startDate.getHours() - endDate.getHours());
  const minutes = Math.abs(startDate.getMinutes() - endDate.getMinutes());
  const seconds = Math.abs(startDate.getSeconds() - endDate.getSeconds());

  return `${days}d ${Math.abs(startDate.getHours() - endDate.getHours())}h ${Math.abs(
    startDate.getMinutes() - endDate.getMinutes(),
  )}m ${Math.abs(startDate.getSeconds() - endDate.getSeconds())}s`;
}

console.log(getDiff(new Date(2011, 1, 2, 13, 32, 47), new Date(2001, 1, 2, 15, 34, 25)));
console.log(getDiff(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
console.log(getDiff(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));
// console.log(
//   `startDate `,
//   startDate.getFullYear(),
//   startDate.getMonth(),
//   startDate.getDate(),
//   startDate.getHours(),
//   startDate.getMinutes(),
//   startDate.getSeconds(),
// );
// console.log(
//   `endDate `,
//   endDate.getFullYear(),
//   endDate.getMonth(),
//   endDate.getDate(),
//   endDate.getHours(),
//   endDate.getMinutes(),
//   endDate.getSeconds(),
// );
// const test1 = new Date(2011, 1, 2, 13, 32, 47);
// const test2 = new Date(2001, 1, 2, 15, 34, 25);
// console.log(getDiff(test1, test2));
// // console.log(test1, test2);
// console.log(getDiff(new Date(2001, 10, 32, 3, 12, 27), new Date(2003, 1, 2, 15, 56, 45)));
// console.log(getDiff(new Date(1971, 3, 22, 13, 32, 47), new Date(1971, 7, 39, 2, 11, 15)));
