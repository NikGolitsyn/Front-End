import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, createTask } from './tasksGateway.js';

// input none
// output undefined

export const createTaskHandler = () => {
  const inputElem = document.querySelector('.task-input'); // выбираем инпут
  const text = inputElem.value; // переменная text содержит значение input.value
  if (!text) {
    // если там '' выходим из ф-и
    return;
  }
  inputElem.value = ''; // обнуляем поле input

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList); // устанавливаем ключу 'tasksList' новое значение 'newTasksList'
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
