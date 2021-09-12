import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }

  return new Date(b.createDate) - new Date(a.createDate);
};
// В этой части 'render.js' отрисовываем элементы на странице

// input object
// output object
const createCheckbox = ({ done, id }) => {
  // берём из объекта выбранные свойства
  const checkboxElem = document.createElement('input'); // cоздаём input типа чекбокс
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id; // в значение data-id присваиваем id
  checkboxElem.checked = done; // в свойство checked заносим значение done
  checkboxElem.classList.add('list-item__checkbox'); // добавляем класс

  return checkboxElem;
};
// input object
// output new object
const createListItem = ({ text, done, id }) => {
  // берём из объекта выбранные свойства
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item'); // добавляем созданому элементу класс 'list__item'
  const checkboxElem = createCheckbox({ done, id }); // создаём чекбокс
  if (done) {
    listItemElem.classList.add('list-item_done'); // если done = true добавляем элементу списка класс 'list__item_done'
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  listItemElem.append(checkboxElem, text, deleteBtnElem); // добавляем в элемент списка, элемент чекбокс и текст
  return listItemElem; // возвращаем полученый элемент
};

// input none
// output undefined

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || []; // создаём список задач, берём с хранилища 'tasksList' или пустой массив если значение null
  listElem.innerHTML = ''; // обнуляем список ul '.list'
  const tasksElems = tasksList.sort(compareTasks).map(createListItem); // создаём новый массив тасков
  listElem.append(...tasksElems); // c помощью spread разоврачиваем массив и добавляем все элементы в ul список 'list'
};
