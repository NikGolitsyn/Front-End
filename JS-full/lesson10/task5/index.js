const getTotalPrice = arr =>
  `$${Math.floor([...arr].reduce((total, el) => total + el, 0) * 100) / 100}`;
