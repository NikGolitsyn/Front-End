const filter = (arr, delta) => [...arr].map(el => (el % 2 === 0 ? el + delta : el));
