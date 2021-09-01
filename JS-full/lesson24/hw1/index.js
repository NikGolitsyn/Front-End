// input two data objects
// output sting with difference in format (275d 2h 58m 16s)

export function getDiff(startDate, endDate) {
  const milliseconds = Math.abs(startDate.getTime() - endDate.getTime());
  const days = Math.floor(milliseconds / 86400000);
  const hours = Math.abs(startDate.getHours() - endDate.getHours());
  const minutes = Math.abs(startDate.getMinutes() - endDate.getMinutes());
  const seconds = Math.abs(startDate.getSeconds() - endDate.getSeconds());

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
