const textInput = document.querySelector('.task-status');

textInput.addEventListener('change', event => {
  console.log(event.target.checked);
});
