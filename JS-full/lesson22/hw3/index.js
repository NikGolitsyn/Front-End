const checkboxEl = document.querySelector('.task-status');

checkboxEl.addEventListener('change', () => {
  console.log(checkboxEl.checked);
})