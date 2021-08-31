// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// find amount of days
// find amountt of hours, minutes, seconds
// use Date .get and .set methods

export function getDiff(startDate, endDate) {
  return `${
    Math.abs(startDate.getFullYear() - endDate.getFullYear()) * 365 +
    Math.abs(startDate.getMonth() - endDate.getMonth()) * 30 +
    Math.abs(startDate.getDate() - endDate.getDate())
  }d ${Math.abs(startDate.getHours() - endDate.getHours())}h ${Math.abs(
    startDate.getMinutes() - endDate.getMinutes(),
  )}m ${Math.abs(startDate.getSeconds() - endDate.getSeconds())}s`;
}

