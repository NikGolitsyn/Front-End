import { createTaskHandler } from './createTask.js';
import { listClickHandler } from './updateTasks.js';

export const initTodoListHandler = () => {
  const createBtnElem = document.querySelector('.create-task-btn'); // выбираем кнопку создать с помощью DOM
  createBtnElem.addEventListener('click', createTaskHandler); // при клике вызываем ф-ю создать задание

  const todoListElem = document.querySelector('.list'); // выбираем список ul
  todoListElem.addEventListener('click', listClickHandler); // при клике на чекбокс меняем статус done
};
