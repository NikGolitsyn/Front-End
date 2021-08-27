const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTraget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

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

// pElem.addEventListener('click', event => {
  // event.stopPropagation();
  
//  }); 