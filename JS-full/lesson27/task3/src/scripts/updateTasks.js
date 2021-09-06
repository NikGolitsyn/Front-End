import { renderTasks } from './render.js';
import { setItem, getItem } from './storage.js';

// input event
// output undefined
export const toggleTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox'); // применяем дилегирование к объекту 'list'

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList'); // присваиваем значение свойства localStorage.tasksList в переменную

  const newTasksList = tasksList.map(task => {
    // создаём новый массив newTasksList, с помощью map преобразовываем старый массив.
    // input task li element
    // output newTask or task
    if (task.id === event.target.dataset.id) {
      // в первом случае если id таска совпадают с id кликнутого ивента, то
      const done = event.target.checked; // присваиваем done значение event.done true or false
      return {
        // возвращаем преобразованый объект
        // объединяем объекты с помощью оператора спреад
        ...task, // копия изначального объекта
        done, // новое значение done равносильно записи done: done,
        finishDate: done ? new Date().toISOString() : null, // добавляем новое свойство finishDate с датой подтверждения если done = true или null если done = false;
      };
    }
    return task; // в другом случае возвращаем нетронутый элемент, таким каким он был.
  });
  setItem('tasksList', newTasksList); // localStorage присваиваем значение нового списка
  renderTasks(); // заново отрисовываем список / re-render the list
};
