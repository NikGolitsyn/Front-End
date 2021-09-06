import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

// В этой части 'render.js' отрисовываем элементы на странице

// input object
// output object
const createCheckbox = ({ done, id }) => {
  // берём из объекта выбранные свойства
  const checkboxElem = document.createElement('input'); // cоздаём input типа чекбокс
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id; // в значение data-id присваиваем id
  checkboxElem.checked = done; // в свойство checked заносим значение done
  checkboxElem.classList.add('list__item-checkbox'); // добавляем класс

  return checkboxElem;
};
// input object
// output new object
const createListItem = ({ text, done, id }) => { // берём из объекта выбранные свойства
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item'); // добавляем созданому элементу класс 'list__item'
  const checkboxElem = createCheckbox({ done, id }); // создаём чекбокс
  if (done) {
    listItemElem.classList.add('list__item_done'); // если done = true добавляем элементу списка класс 'list__item_done'
  }
  listItemElem.append(checkboxElem, text); // добавляем в элемент списка, элемент чекбокс и текст
  return listItemElem; // возвращаем полученый элемент
};

// input none
// output undefined

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || []; // создаём список задач, берём с хранилища 'tasksList' или пустой массив если значение null
  listElem.innerHTML = ''; // обнуляем список ul '.list'
  const tasksElems = tasksList.sort((a, b) => a.done - b.done).map(createListItem); // создаём новый массив тасков
  listElem.append(...tasksElems); // c помощью spread разоврачиваем массив и добавляем все элементы в ul список 'list'
};
