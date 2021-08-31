// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// 1 generate two getTime() and find the difference in milliseconds
// 2 create a loop which will count second, minutes, hour, days from our difference

export function getDiff(startDate, endDate) {
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


