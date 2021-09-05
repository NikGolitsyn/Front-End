const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = event => {
  const isButton = event.target.classList.contains('counter__button'); // проверка содержит ли таргет события класс 'counter__button'

  if (!isButton) {
    // если нет функция возвращает Undefined
    return;
  }

  const { action } = event.target.dataset;

  const oldValue = Number(counterValueElem.textContent); // старое значение нашего counterValueElem по умолчанию 0

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1; // новое значение после нажатия на выбранную кнопку

  localStorage.setItem('counterValue', newValue); // присваемваем локольному хранилищу свойство 'counterValue' со значением newValue

  counterValueElem.textContent = newValue; // присваеваем новое текстовое значение спану counterValueElem
};

counterElem.addEventListener('click', onCounterChange); // приминяем делегирование событий к общему контейнеру

const onStorageChange = e => {
  // записываем во все вкладки значение счетчика = event.newValue
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange); // добавляем в глобальный объеки window ивент при изминении storage

const onDocumentLoaded = () => {
  // при обновлении все вкладки будут сохранять одинаковое значение
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded); // при зарузки дом контента страницы вызываем функцию
