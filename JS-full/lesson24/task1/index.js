// input data, number(amount of days)
// output sting with name of day after 'days' passed

export function dayOfWeek(date, days) {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const day = new Date(date).getDate();
  const futureDay = new Date(date).setDate(day + days);
  
  return weekDays[new Date(futureDay).getDay()];
}
