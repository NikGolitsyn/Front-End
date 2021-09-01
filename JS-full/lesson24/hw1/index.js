// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

export function getDiff(startDate, endDate) {
  const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
  const days = Math.floor(milliseconds / 86400000);
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor(milliseconds / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
