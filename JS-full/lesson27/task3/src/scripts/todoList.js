import { createTask } from './createTask.js';
import { toggleTask } from './updateTasks.js';

export const initTodoListHandler = () => {
  const createBtnElem = document.querySelector('.create-task-btn'); // выбираем кнопку создать с помощью DOM
  createBtnElem.addEventListener('click', createTask); // при клике вызываем ф-ю создать задание

  const todoListElem = document.querySelector('.list'); // выбираем список ul
  todoListElem.addEventListener('click', toggleTask);  // при клике на чекбокс меняем статус done
};
