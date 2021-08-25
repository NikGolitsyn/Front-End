export function setTitle(titleName) {
  document.querySelector('.title').textContent = titleName;
  return document.querySelector('.title');
}
