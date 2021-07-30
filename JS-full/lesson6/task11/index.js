const checker = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return Math.min(...arr) + Math.max(...arr) > 1000;
};
