const arrAverage = arr =>
  Array.isArray(arr) ? arr.reduce((total, el) => total + el, 0) / arr.length : null;
