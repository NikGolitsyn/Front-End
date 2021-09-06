import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

// input none
// output undefined

export const createTask = () => {
  const inputElem = document.querySelector('.task-input'); // выбираем инпут
  const text = inputElem.value; // переменная text содержит значение input.value
  if (!text) { // если там '' выходим из ф-и
    return;
  }
  inputElem.value = ''; // обнуляем поле input

  const tasksList = getItem('tasksList') || []; // создаём список задач, берём с хранилища 'tasksList' или пустой массив если значение null

  const newTasksList = tasksList.concat({ // обновляем старый список, добавляя в него новую задачу
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList); // устанавливаем ключу 'tasksList' новое значение 'newTasksList'

  renderTasks();
};
