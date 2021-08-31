// input data
// output sting with GTM time in format '06:30'

const getGtmTime = date =>
  new Intl.DateTimeFormat('en', {
    timeZone: 'GMT',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

export { getGtmTime };
