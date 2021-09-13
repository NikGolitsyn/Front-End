import { renderTasks } from './render.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const createTaskHandler = () => {
  const inputElem = document.querySelector('.task-input'); 
  const text = inputElem.value; 
  if (!text) {
    return;
  }
  inputElem.value = ''; 

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(tasks => renderTasks(tasks));
};

