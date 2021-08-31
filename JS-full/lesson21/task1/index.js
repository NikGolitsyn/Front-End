const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

// /**
//  * @param {object[]} tasksList
//  * @return {undefined}
//  */

const renderTasks = tasksList => {
  document.querySelectorAll('li').forEach(el => el.remove()); // удаляем все элементы списка
  const listElem = document.querySelector('.list'); // задаём переменную списку
  const listItemElems = tasksList // создаём функцию которая принимает массив задач и возвращает список DOM элемеентов списка
    .sort((a, b) => a.done - b.done) // сортируем массив заданий по параметру done
    .map(({ text, done }) => {
      // с помощью метода мэп принимае два параметра объекта
      const listItemElem = document.createElement('li'); // создаем элемент списка
      listItemElem.classList.add('list__item'); // добавляем в него стиль list_item
      if (done) {
        listItemElem.classList.add('list__item_done'); // если условия выполняются добавляем ещё один класс 'list_item_done'
      }
      const checkboxElem = document.createElement('input'); // создаём элемент чекбокс 'input'
      checkboxElem.setAttribute('type', 'checkbox'); // присваеваем тип = чекбокс
      checkboxElem.checked = done; // устанавливаем значение done, которое будет у чекбокса по умолчанию из массива
      checkboxElem.classList.add('list__item-checkbox'); // добавляем класс чекбоксу
      listItemElem.append(checkboxElem, text); // вставляем элементы чекбокс и текст в li, повторяем 5 раз
      console.log(listItemElem);
      return listItemElem; // сама колбэк функция возвращает один ли х 5 раз
    });

  listElem.append(...listItemElems); // добавляем в список все элементы списка
};

renderTasks(tasks);
