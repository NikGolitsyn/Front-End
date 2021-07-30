const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr].reverse();
};
