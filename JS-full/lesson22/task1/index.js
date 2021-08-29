const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const attachHandlerBtn = document.querySelector('.attach-handlers-btn');
const removeHandlerBtn = document.querySelector('.remove-handlers-btn');

console.log([...document.querySelector('.events-list').children].forEach(el => el.remove()));

const logTraget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const clearBtnFunc = () => {
  [...document.querySelector('.events-list').children].forEach(el => el.remove());
};

clearBtn.addEventListener('click', clearBtnFunc);

const logGreenDiv = logTraget.bind(null, 'DIV', 'green');
const logGreenP = logTraget.bind(null, 'P', 'green');
const logGreenSpan = logTraget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTraget.bind(null, 'DIV', 'grey');
const logGreyP = logTraget.bind(null, 'P', 'grey');
const logGreySpan = logTraget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

removeHandlerBtn.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
});

attachHandlerBtn.addEventListener('click', () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
});
// pElem.addEventListener('click', event => {
// event.stopPropagation();

//  });
