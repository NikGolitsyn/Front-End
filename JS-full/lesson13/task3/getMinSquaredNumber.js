export const getMinSquaredNumbers = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return (
    Math.min.apply(
      null,
      arr.map(el => Math.abs(el)),
    ) ** 2
  );
};
console.log(getMinSquaredNumbers([-777, 2, 1, -40]));