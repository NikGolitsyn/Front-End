import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;
  if (!text) {
    return;
  }
  inputElem.value = '';

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList);

  renderTasks();
};
