// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

// algo
// 1 count the difference between two dates in milliseconds and to abs it
// 2 count milliseconds in day
// 3 count number of day Math.floor( millisec / millisec in day) will be amount of day
// 4 fine % rest = millisec / millisec in day - Math.floor( millisec / millisec in day)
// 5 Math.floor(rest * 24) will be amount of full hours
// 6 rest of hours = rest * 24 - Math.floor(rest * 24)
// 7 then do prev 2 steps for minutes and seconds

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
