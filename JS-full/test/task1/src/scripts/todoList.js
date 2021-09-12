import { createTaskHandler } from './createTask.js';
import { listClickHandler } from './updateTasks.js';

export const initTodoListHandler = () => {
  const createBtnElem = document.querySelector('.create-task-btn'); 
  createBtnElem.addEventListener('click', createTaskHandler);

  const todoListElem = document.querySelector('.list'); 
  todoListElem.addEventListener('click', listClickHandler); 
};
