// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

export function getDiff(startDate, endDate) {
  const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
  const days = Math.floor(milliseconds / 86400000);
  const daysRest = milliseconds / 86400000 - days;
  const hours = Math.floor(daysRest * 24);
  const hoursRest = daysRest * 24 - hours;
  const minutes = Math.floor(hoursRest * 60);
  const minutesRest = hoursRest * 60 - minutes;
  const seconds = Math.floor(minutesRest * 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
