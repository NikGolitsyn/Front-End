// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// check if Date objects are equal
// count amount of days
// count amount of hours, minutes, seconds
// with the help of reminder % we can find the remaining of seconds, minutes, hours

// function getDiff(startDate, endDate) {
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

export function getDiff(startDate, endDate) {
  const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
  const days = Math.floor(milliseconds / 86400000);

  const endNullDate = new Date(-62167226524000);
  const end = new Date(endNullDate.setMilliseconds(milliseconds));

  return `${days}d ${end.getHours()}h ${end.getMinutes()}m ${end.getSeconds()}s`;
}

