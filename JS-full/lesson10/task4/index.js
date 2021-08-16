const getMaxAbsoluteNumber = arr =>
  Array.isArray(arr) && [...arr].length > 0
    ? Math.max.apply(
        null,
        [...arr].map(el => Math.abs(el)),
      )
    : null;
