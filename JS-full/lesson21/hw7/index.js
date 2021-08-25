export function createButton(buttonText) {
  let button = document.createElement('button');
  button.textContent = buttonText;
  document.querySelector('body').append(button);
}
