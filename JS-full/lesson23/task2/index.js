// 1 chose dom elemet with class "arena" == arenaElem
// 2 create a fucntion to create an array for our sectors, lines, seats
// 3 create 3 function (for seats, line, sectors) that will create an array with our context,
//   (using .map for that) make a string from the array using (.join(''))
//   and add the entire string to our arenElem (arenaElem.innerHTML = sectorsString)
// 4 add an EventListener for parent element (arenaElem)
// 5 create a function for our EventListener, which will check if our event.target is seat,
// (const isSeat = event.target.classList.contains('sector__seat'))

const getNumberOfAdds = (from, to) => {
  const arr = [];
  for (let index = from; index <= to; index += 1) {
    arr.push(index);
  }
  return arr;
};

// input none
// output string with all 10 sector-seats in line : (`<div class="sector__seat" data-seat-number="${seatNumber}"></div>` x 10 times)

const getLineSeats = () =>
  getNumberOfAdds(1, 10)
    .map(
      seatNumber => `<div
     class="sector__seat" data-seat-number="${seatNumber}"
     ></div>`,
    )
    .join('');

// input none
// output string with all 10 sector-lines; One line includes  `<divclass="sector__line" data-line-number="${lineNumber}">${seatsString} === result of our preveous function</div>`,

const getSectorLines = () => {
  const seatsString = getLineSeats();

  return getNumberOfAdds(1, 10)
    .map(
      lineNumber => `<div
     class="sector__line" data-line-number="${lineNumber}"
     >${seatsString}</div>`,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

// input none
// output string with all 3 sectors; one sector contains all preveous line and seats strings

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorsString = getNumberOfAdds(1, 3)
    .map(
      sectorNumber => `<div
     class="sector" data-sector-number="${sectorNumber}"
     >${linesString}</div>`,
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  // good example of object destructuring
  const { seatNumber } = event.target.dataset;
  const { lineNumber } = event.target.closest('.sector__line').dataset;
  const { sectorNumber } = event.target.closest('.sector').dataset;

  const selectedSeatElem = document.querySelector('.board');
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
