import { initTodoListHandler } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksList } from './tasksGateway.js';
// import { getTasksList } from './tasksGateway.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(taskslist => renderTasks(taskslist));

  initTodoListHandler();
});

// 1. Get data from server
// 2. Save data to front-end storage
