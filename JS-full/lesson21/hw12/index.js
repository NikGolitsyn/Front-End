// input one number
// output value of perent data-section string


export function getSection(number) {
  return document.querySelector(`span[data-number='${number}']`).parentElement.dataset.section;
}
