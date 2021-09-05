import { createTask } from './createTask.js';
import { toggleTask } from './updateTasks.js';

export const initTodoListHandler = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', createTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', toggleTask);
};
